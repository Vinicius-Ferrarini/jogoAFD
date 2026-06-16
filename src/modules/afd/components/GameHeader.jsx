// ─── GameHeader: cabeçalho da tela de jogo ───────────────────────────────────
// Botões de sidebar/voltar, objetivo (fórmula) + atalho de Aula Guiada, rótulo
// de dificuldade, estrelas e toggle "Dicas ON/OFF". CSS: .game-header em AFDPart1.css.
import './GameHeader.css';
import { SvgStars } from '../SvgStar';
import { LEVEL_DIFFICULTY, DIFF_COLOR, GAME_LEVELS } from '../../../levels';

const navBtnStyle = {
  padding: '2px 8px', fontSize: 13, fontWeight: 900,
  background: '#fff', color: '#000', border: '2px solid #000', borderRadius: 6,
  cursor: 'pointer', boxShadow: '2px 2px 0 #000',
  fontFamily: "'Comic Sans MS', cursive",
  lineHeight: 1.2,
};
const navBtnDisabledStyle = {
  ...navBtnStyle,
  opacity: 0.35, cursor: 'not-allowed', boxShadow: 'none',
};

export default function GameHeader({
  currentLevel, progress, autoTutorial, toggleAutoTutorial,
  toggleSidebar, onBack, onPrevLevel, onNextLevel, onStartLesson,
}) {
  const diffBg = DIFF_COLOR[LEVEL_DIFFICULTY[currentLevel?.id]] ?? '#fff';
  const idx = GAME_LEVELS.findIndex(l => l.id === currentLevel?.id);
  const isFirst = idx === 0;
  const isLast  = idx === GAME_LEVELS.length - 1;

  return (
    <header className="game-header">
      <div className="header-left">
        <button className="sidebar-toggle" onClick={toggleSidebar} title="Abrir Descrição Formal">☰</button>
        <button className="back-btn" onClick={onBack}>⬅ Voltar</button>
      </div>
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8 }}>
        <span className="mission-label">Objetivo</span>
        <div className="mission-formula">{currentLevel?.formula || ''}</div>
        {currentLevel?.guidedLesson && (
          <button
            className="menu-btn"
            style={{ padding: '4px 12px', fontSize: 12, marginLeft: 6 }}
            onClick={onStartLesson}
            title="Assistir demonstração passo a passo"
          >
            👨‍🏫 Aula
          </button>
        )}
      </div>
      <div style={{ width: 180, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 3 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <button
            style={isFirst ? navBtnDisabledStyle : navBtnStyle}
            onClick={onPrevLevel}
            disabled={isFirst}
            title="Fase anterior"
          >◀</button>
          <span className="mission-label" style={{ background: diffBg }}>{currentLevel?.label}</span>
          <button
            style={isLast ? navBtnDisabledStyle : navBtnStyle}
            onClick={onNextLevel}
            disabled={isLast}
            title="Próxima fase"
          >▶</button>
        </div>
        <SvgStars count={progress[currentLevel?.id]?.stars || 0} size={15} max={currentLevel?.impossible || currentLevel?.wordOnly ? 1 : 3} />
        <button
          style={{
            padding: '2px 7px', fontSize: 10, fontWeight: 900,
            background: autoTutorial ? '#bbf7d0' : '#fef3c7',
            border: '2px solid #000', borderRadius: 6,
            cursor: 'pointer', boxShadow: '2px 2px 0 #000',
            fontFamily: "'Comic Sans MS', cursive",
            whiteSpace: 'nowrap',
          }}
          onClick={toggleAutoTutorial}
          title={autoTutorial ? 'Modo Iniciante ativado — clique para desligar' : 'Modo Iniciante desligado — clique para ligar'}
        >
          💡 {autoTutorial ? 'Dicas: ON' : 'Dicas: OFF'}
        </button>
      </div>
    </header>
  );
}
