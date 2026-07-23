import { useState, useCallback } from 'react';
import './AFDPart1.css';
import './AFDPart2.css';
import { SvgStars, DifficultyLegend } from './SvgStar';
import { LEVEL_DIFFICULTY, DIFF_COLOR, UNAVAILABLE_LEVELS } from '../../levels';
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
  const perPage    = 20;
  const totalPages = Math.ceil(GAME_LEVELS.length / perPage);
  const pageItems  = GAME_LEVELS.slice((page - 1) * perPage, page * perPage);
  const maxStars   = GAME_LEVELS.reduce((s, l) => s + (UNAVAILABLE_LEVELS.has(l.id) ? 0 : 3), 0);
  const totalStars = GAME_LEVELS.reduce((sum, l) => sum + (UNAVAILABLE_LEVELS.has(l.id) ? 0 : (progress[l.id]?.stars || 0)), 0);

  return (
    <div className="menu-screen menu-screen-fases" style={{ justifyContent: 'flex-start', paddingTop: 20 }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 14, width: '100%' }}>
        <div style={{ flex: 1 }}>
          <button className="back-btn" onClick={onBack}>⬅ Voltar</button>
        </div>
        <h1 className="menu-title" style={{ margin: 0 }}>TuringLab</h1>
        <div style={{ flex: 1 }} />
      </div>
      <p style={{ fontWeight: 900, fontSize: 16, color: '#555', marginBottom: 12,
        background: '#60a5fa', border: '3px solid #000', borderRadius: 8,
        padding: '4px 16px', boxShadow: '3px 3px 0 #000' }}>
        📊 Grafo → Linguagem
      </p>
      <div style={{ marginBottom: 18, fontWeight: 'bold', fontSize: 16 }}>
        Progresso: {maxStars > 0 ? Math.round((totalStars / maxStars) * 100) : 0}%
        &nbsp;({totalStars}/{maxStars} ★)
      </div>

      <div className="levels-grid">
        {pageItems.map(lvl => {
          if (UNAVAILABLE_LEVELS.has(lvl.id)) {
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
      </div>

      <div style={{ display: 'flex', gap: 20, alignItems: 'center', marginTop: 20 }}>
        <button className="menu-btn" disabled={page === 1}
          onClick={() => setPage(p => p - 1)}
          style={{ opacity: page === 1 ? 0.5 : 1 }}>
          ⬅ Anterior
        </button>
        <span style={{ fontWeight: 'bold', fontSize: 18, background: '#fff',
          padding: '5px 15px', border: '3px solid #000', borderRadius: 8 }}>
          {page} / {totalPages}
        </span>
        <button className="menu-btn" disabled={page === totalPages}
          onClick={() => setPage(p => p + 1)}
          style={{ opacity: page === totalPages ? 0.5 : 1 }}>
          Próxima ➡
        </button>
      </div>

      <DifficultyLegend />
    </div>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────────
export default function AFDPart2({ onBack, showToast }) {
  const [selectedLevel, setSelectedLevel] = useState(null);
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

  if (selectedLevel) {
    return (
      <ExerciseScreen
        key={selectedLevel.id}
        level={selectedLevel}
        progress={p2Progress}
        updateProgress={updateP2Progress}
        showToast={showToast}
        onBack={() => setSelectedLevel(null)}
        onNext={lvl => setSelectedLevel(lvl)}
        onPrev={lvl => setSelectedLevel(lvl)}
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
