// ─── LevelMenu: grade de seleção de fases (tela MENU do AFDPart1) ────────────
// Paginação 20/página, progresso de estrelas e legenda de dificuldade.
// A moldura (cabeçalho/chip/progresso/grade/paginação/legenda) vem de
// <LevelGridScreen>; aqui só montamos os azulejos de cada fase.
import { SvgStars } from '../SvgStar';
import LevelGridScreen from './LevelGridScreen';
import { LEVEL_DIFFICULTY, DIFF_COLOR, UNAVAILABLE_LEVELS, HIDDEN_LEVELS } from '../../../levels';
import { AFD_LEVELS as GAME_LEVELS } from '../../../levels_data/afd/index.js';

export default function LevelMenu({ progress, currentPage, setCurrentPage, onBack, onSelect }) {
  const visibleLevels = GAME_LEVELS.filter(l => !HIDDEN_LEVELS.has(l.id));
  const maxStars    = visibleLevels.reduce((a, l) => a + (UNAVAILABLE_LEVELS.has(l.id) ? 0 : (l.impossible || l.wordOnly ? 1 : 3)), 0);
  const totalStars  = visibleLevels.reduce((a, l) => a + (UNAVAILABLE_LEVELS.has(l.id) ? 0 : (progress[l.id]?.stars || 0)), 0);
  const perPage     = 20;
  const totalPages  = Math.ceil(visibleLevels.length / perPage);
  const pageItems   = visibleLevels.slice((currentPage - 1) * perPage, currentPage * perPage);

  return (
    <LevelGridScreen
      onBack={onBack}
      badge="🎨 Desenhar & Formalizar"
      badgeBg="#fde68a"
      totalStars={totalStars}
      maxStars={maxStars}
      pagination={{ page: currentPage, totalPages, setPage: setCurrentPage }}
      legendKeys={['easy', 'medium', 'hard', 'trabalho', 'prova', 'impossible']}
    >
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
          <button key={lvl.id} className="menu-btn primary" onClick={() => onSelect(lvl)}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
              background: bg }}>
            <span>{lvl.label}</span>
            <SvgStars count={progress[lvl.id]?.stars || 0} size={14} max={lvl.impossible || lvl.wordOnly ? 1 : 3} />
          </button>
        );
      })}
    </LevelGridScreen>
  );
}
