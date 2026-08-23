import { useState, useCallback } from 'react';
import './AFDPart1.css';
import './AFDPart2.css';
import { SvgStars } from './SvgStar';
import LevelGridScreen from './components/LevelGridScreen';
import { LEVEL_DIFFICULTY, DIFF_COLOR, UNAVAILABLE_LEVELS_P2_ONLY, HIDDEN_LEVELS } from '../../levels';
import { AFD_LEVELS as GAME_LEVELS } from '../../levels_data/afd/index.js';
import ExerciseScreen from './components/ExerciseScreen';

// ── P2 Progress (localStorage, separate from P1) ──────────────────────────────
function getP2Progress() {
  try { return JSON.parse(localStorage.getItem('turinglab_progress_p2') || '{}'); }
  catch { return {}; }
}
function saveP2Progress(d) {
  localStorage.setItem('turinglab_progress_p2', JSON.stringify(d));
}

// ── Level List ─────────────────────────────────────────────────────────────────
function LevelList({ progress, onSelect, onBack }) {
  const [page, setPage] = useState(1);
  const visibleLevels = GAME_LEVELS.filter(l => !HIDDEN_LEVELS.has(l.id));
  const perPage    = 20;
  const totalPages = Math.ceil(visibleLevels.length / perPage);
  const pageItems  = visibleLevels.slice((page - 1) * perPage, page * perPage);
  const maxStars   = visibleLevels.reduce((s, l) => s + (UNAVAILABLE_LEVELS_P2_ONLY.has(l.id) ? 0 : 3), 0);
  const totalStars = visibleLevels.reduce((sum, l) => sum + (UNAVAILABLE_LEVELS_P2_ONLY.has(l.id) ? 0 : (progress[l.id]?.stars || 0)), 0);

  return (
    <LevelGridScreen
      onBack={onBack}
      badge="📊 Grafo → Linguagem"
      badgeBg="#60a5fa"
      totalStars={totalStars}
      maxStars={maxStars}
      pagination={{ page, totalPages, setPage }}
      legendKeys={['easy', 'medium', 'hard', 'trabalho', 'prova', 'impossible']}
    >
      {pageItems.map(lvl => {
        if (UNAVAILABLE_LEVELS_P2_ONLY.has(lvl.id)) {
          return (
            <button key={lvl.id} className="menu-btn primary" disabled
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
                background: DIFF_COLOR.unavailable, cursor: 'not-allowed', opacity: 0.8 }}>
              <span>{lvl.label}</span>
              <span style={{ fontSize: 18, lineHeight: 1, display: 'flex', alignItems: 'center' }}>🔒</span>
            </button>
          );
        }
        const diff = LEVEL_DIFFICULTY[lvl.id] || 'easy';
        const bg   = DIFF_COLOR[diff];
        return (
          <button key={lvl.id} className="menu-btn primary"
            onClick={() => onSelect(lvl)}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, background: bg }}>
            <span>{lvl.label}</span>
            <SvgStars count={progress[lvl.id]?.stars || 0} size={14} />
          </button>
        );
      })}
    </LevelGridScreen>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────────
// forceLevelId (opcional, ex.: Boss/Trabalho): pula a LevelList e entra direto
// no exercício indicado. Nesse modo, `progress`/`updateProgress` recebidos por
// prop SUBSTITUEM o par p2Progress/updateP2Progress interno (que fica isolado
// em turinglab_progress_p2) — o chamador (Boss) controla a chave de gravação.
export default function AFDPart2({ onBack, showToast, forceLevelId, forceLevelLabel, progress: externalProgress, updateProgress: externalUpdateProgress, onForcedPrev, onForcedNext, forceLabelColor }) {
  // forceLevelId vira o estado inicial diretamente (sem useEffect) — evita
  // uma renderização extra em MENU antes de entrar no exercício.
  const [selectedLevel, setSelectedLevel] = useState(() =>
    forceLevelId != null ? (GAME_LEVELS.find(l => l.id === forceLevelId) ?? null) : null
  );
  const [p2Progress,    setP2Progress]    = useState(getP2Progress);

  const updateP2Progress = useCallback((levelId, stars) => {
    setP2Progress(prev => {
      const cur = prev[levelId]?.stars || 0;
      if (stars <= cur) return prev;
      const next = { ...prev, [levelId]: { stars } };
      saveP2Progress(next);
      return next;
    });
  }, []);

  const isForced = forceLevelId != null;
  const activeProgress = isForced ? (externalProgress ?? {}) : p2Progress;
  const activeUpdateProgress = isForced ? externalUpdateProgress : updateP2Progress;

  if (selectedLevel) {
    return (
      <ExerciseScreen
        key={selectedLevel.id}
        level={selectedLevel}
        progress={activeProgress}
        updateProgress={activeUpdateProgress}
        showToast={showToast}
        forced={isForced}
        forceLevelLabel={forceLevelLabel}
        onBack={isForced ? onBack : () => setSelectedLevel(null)}
        onNext={lvl => isForced ? onBack() : setSelectedLevel(lvl)}
        onPrev={lvl => setSelectedLevel(lvl)}
        onForcedPrev={onForcedPrev}
        onForcedNext={onForcedNext}
        forceLabelColor={forceLabelColor}
      />
    );
  }

  return (
    <LevelList
      progress={p2Progress}
      onSelect={setSelectedLevel}
      onBack={onBack}
    />
  );
}
