// ─── L14ImpossibleExplanation: explicação em passos por que |w|a=|w|b é
// impossível em AFD, mostrada na tela de vitória (1 estrela) do L14 em AFD_1.
// Card neo-brutalista (borda preta + sombra dura, mesmo padrão do resto do
// AFD_1) em vez do balão de fala de TutorialModal.jsx — o balão-imagem tem
// área de texto fixa e não comporta os parágrafos mais longos deste roteiro
// sem cortar/overflow. Diagrama estático (GraphView) cresce a cada passo —
// dados em `impossibleSteps` de L14.js. Deliberadamente FORA do pipeline do
// Modo Aula (useGuidedLesson): o último passo aqui nunca é um AFD
// válido/completo, então a fase FORMAL automática não faria sentido.
import { useState } from 'react';
import GraphView from './GraphView';
import imgMaurilioExplicando from '../../../assets/maurilio3_explicando.webp';

const S = {
  overlay: {
    position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.88)', zIndex: 10000,
    display: 'flex', justifyContent: 'center', alignItems: 'center',
    fontFamily: "'Comic Sans MS', 'Comic Neue', cursive, sans-serif",
    padding: 20,
  },
  card: {
    width: 460, maxWidth: '92vw', background: '#fff',
    border: '4px solid #000', borderRadius: 14, boxShadow: '8px 8px 0 #000',
    display: 'flex', flexDirection: 'column', alignItems: 'center',
    padding: '18px 24px 22px',
  },
  prof: { height: 90, marginBottom: 4 },
  text: {
    color: '#000', fontSize: 14, fontWeight: 700, textAlign: 'center',
    lineHeight: 1.55, marginBottom: 4,
  },
  diagramBox: {
    width: '100%', maxWidth: 380, height: 200, marginTop: 8, background: '#fafaf5',
    border: '3px solid #000', borderRadius: 10, boxShadow: '4px 4px 0 #000',
  },
  btnRow: { display: 'flex', gap: 14, marginTop: 20 },
  dotsRow: { display: 'flex', gap: 8, marginTop: 14 },
};

export default function L14ImpossibleExplanation({ steps, onClose }) {
  const [step, setStep] = useState(0);
  const isLast = step === steps.length - 1;
  const current = steps[step];
  const hasDiagram = current.nodes.length > 0;

  return (
    <div style={S.overlay} onPointerDown={e => e.stopPropagation()}>
      <div style={S.card}>
        <img src={imgMaurilioExplicando} alt="Professor Maurílio" style={S.prof} />
        <div style={S.text} dangerouslySetInnerHTML={{ __html: current.text }} />

        {hasDiagram && (
          <div style={S.diagramBox}>
            <GraphView
              nodes={current.nodes}
              transitions={current.transitions}
              rawLayout={Object.fromEntries(current.nodes.map(n => [n.id, [n.x, n.y]]))}
              vw={380} vh={200} nr={17}
            />
          </div>
        )}

        <div style={S.btnRow}>
          {step > 0 && (
            <button className="menu-btn" style={{ padding: '11px 22px', fontSize: 15 }}
              onClick={() => setStep(s => s - 1)}>
              ◀ Anterior
            </button>
          )}
          {!isLast
            ? (
              <button className="menu-btn primary" style={{ padding: '11px 22px', fontSize: 15 }}
                onClick={() => setStep(s => s + 1)}>
                Próximo ▶
              </button>
            ) : (
              <button className="menu-btn primary" style={{ padding: '11px 22px', fontSize: 15 }}
                onClick={onClose}>
                Entendi! ✔
              </button>
            )
          }
        </div>

        {steps.length > 1 && (
          <div style={S.dotsRow}>
            {steps.map((_, i) => (
              <div key={i} style={{
                width: 10, height: 10, borderRadius: '50%',
                background: i === step ? '#fde047' : '#555',
                border: `2px solid ${i === step ? '#000' : '#888'}`,
                transition: 'background 0.2s, border-color 0.2s',
              }} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
