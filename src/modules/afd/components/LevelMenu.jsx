// ─── LevelMenu: grade de seleção de fases (tela MENU do AFDPart1) ────────────
// Paginação 20/página, progresso de estrelas e legenda de dificuldade.
// CSS: .menu-screen / .levels-grid / .menu-btn em AFDPart1.css.
import { SvgStars, DifficultyLegend } from '../SvgStar';
import { GAME_LEVELS, LEVEL_DIFFICULTY, DIFF_COLOR } from '../../../levels';

export default function LevelMenu({ progress, currentPage, setCurrentPage, onBack, onSelect }) {
  const maxStars    = GAME_LEVELS.reduce((a, l) => a + (l.impossible || l.wordOnly ? 1 : 3), 0);
  const totalStars  = GAME_LEVELS.reduce((a, l) => a + (progress[l.id]?.stars || 0), 0);
  const perPage     = 20;
  const totalPages  = Math.ceil(GAME_LEVELS.length / perPage);
  const pageItems   = GAME_LEVELS.slice((currentPage - 1) * perPage, currentPage * perPage);

  return (
    <div className="menu-screen menu-screen-fases" style={{ justifyContent: 'flex-start', paddingTop: 20 }}>
      <div style={{ display:'flex', alignItems:'center', marginBottom:14, width:'100%' }}>
        <div style={{ flex:1 }}>
          <button className="back-btn" onClick={() => onBack?.()}>⬅ Voltar</button>
        </div>
        <h1 className="menu-title" style={{ margin:0 }}>TuringLab</h1>
        <div style={{ flex:1 }} />
      </div>
      <p style={{ fontWeight: 900, fontSize: 16, color: '#555', marginBottom: 12,
        background: '#fde68a', border: '3px solid #000', borderRadius: 8,
        padding: '4px 16px', boxShadow: '3px 3px 0 #000' }}>
        🎨 Desenhar &amp; Formalizar
      </p>
      <div style={{ marginBottom: 18, fontWeight: 'bold', fontSize: 16 }}>
        Progresso: {maxStars > 0 ? Math.round((totalStars/maxStars)*100) : 0}% ({totalStars}/{maxStars} ★)
      </div>
      <div className="levels-grid">
        {pageItems.map(lvl => {
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
      </div>
      <div style={{ display: 'flex', gap: 20, alignItems: 'center', marginTop: 20 }}>
        <button className="menu-btn" disabled={currentPage===1} onClick={() => setCurrentPage(p=>p-1)} style={{ opacity: currentPage===1 ? 0.5 : 1 }}>⬅ Anterior</button>
        <span style={{ fontWeight:'bold', fontSize:18, background:'#fff', padding:'5px 15px', border:'3px solid #000', borderRadius:8 }}>
          {currentPage} / {totalPages}
        </span>
        <button className="menu-btn" disabled={currentPage===totalPages} onClick={() => setCurrentPage(p=>p+1)} style={{ opacity: currentPage===totalPages ? 0.5 : 1 }}>Próxima ➡</button>
      </div>
      <DifficultyLegend />
    </div>
  );
}
