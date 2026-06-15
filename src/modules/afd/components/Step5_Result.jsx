import { SvgStars } from '../SvgStar';

// Step5_Result — grupos de equivalência (passo GROUPS). Mostra QUAIS estados se
// fundem (união-find via computeMinimized) — a "planta" do AFD mínimo — mas NÃO
// desenha o grafo: o aluno o desenha no passo seguinte (DRAW). `onAdvance` leva ao
// desenho; `onBack` volta ao menu de exercícios.
export default function Step5_Result({ minimized, exercise, stars, onBack, onAdvance }) {
  return (
    <div className="min-panel">
      <div className="section-header" style={{ fontSize: 11 }}>Grupos de equivalência</div>

      <div className="min-groups">
        {Object.entries(minimized.classMap).map(([rep, members]) => (
          <div key={rep} className="min-group-row">
            <span className="min-group-members">{'{'}{members.join(', ')}{'}'}
            </span>
            <span className="min-group-arrow">→</span>
            <span className="min-group-rep">{minimized.displayName[rep]}</span>
          </div>
        ))}
      </div>

      <div style={{ background: '#fff9c4', border: '2px solid #000', borderRadius: 8,
        padding: '8px 10px', fontSize: 11, lineHeight: 1.5 }}>
        {exercise.explanation}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 6,
        background: '#fff', border: '3px solid #000', borderRadius: 8,
        padding: '8px 14px', boxShadow: '4px 4px 0 #000' }}>
        <SvgStars count={stars} size={22} />
        <span style={{ fontWeight: 'bold', fontSize: 13 }}>
          {stars >= 3 ? 'Perfeito!' : stars === 2 ? 'Quase lá — falta desenhar!' : 'Continue!'}
        </span>
      </div>

      <button className="add-test-btn"
        style={{ alignSelf: 'stretch', padding: '11px', fontSize: 14,
          fontWeight: 'bold', background: '#34d399' }}
        onClick={onAdvance}>
        ✏️ Desenhar o AFD mínimo →
      </button>
      <button className="add-test-btn"
        style={{ alignSelf: 'stretch', padding: '8px', fontSize: 12,
          fontWeight: 'bold', background: '#e5e7eb' }}
        onClick={onBack}>
        ← Ver outros exercícios
      </button>
    </div>
  );
}
