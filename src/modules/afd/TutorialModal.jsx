import { useState } from 'react';
import imgMaurilioExplicando from '../../assets/maurilio3_explicando.webp';
import imgBalaoFala from '../../assets/balao_fala_redondo.webp';

const S = {
  overlay: {
    position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.88)', zIndex: 10000,
    display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',
    fontFamily: "'Comic Sans MS', 'Comic Neue', cursive, sans-serif",
  },
  row: { display: 'flex', alignItems: 'flex-start', justifyContent: 'center' },
  prof: { height: 290, zIndex: 2, marginRight: -58, flexShrink: 0 },
  bubbleWrap: { position: 'relative', width: 380, height: 250, marginTop: -140, zIndex: 1, flexShrink: 0 },
  bubbleImg: { position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 1 },
  bubbleText: {
    position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
    padding: '22px 26px 58px', boxSizing: 'border-box',
    color: '#000', fontSize: 13.5, fontWeight: 900, textAlign: 'center', zIndex: 2, lineHeight: 1.55,
  },
  btnRow: { display: 'flex', gap: 14, marginTop: 28 },
  dotsRow: { display: 'flex', gap: 8, marginTop: 14 },
};

export default function TutorialModal({ tutorial, onClose }) {
  const [step, setStep] = useState(0);
  const { dialog } = tutorial;
  const isLast = step === dialog.length - 1;

  return (
    <div style={S.overlay} onPointerDown={e => e.stopPropagation()}>
      <div style={S.row}>
        <img src={imgMaurilioExplicando} alt="Professor Maurílio" style={S.prof} />
        <div style={S.bubbleWrap}>
          <img src={imgBalaoFala} alt="" style={S.bubbleImg} />
          <div style={S.bubbleText}>{dialog[step]}</div>
        </div>
      </div>

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

      {dialog.length > 1 && (
        <div style={S.dotsRow}>
          {dialog.map((_, i) => (
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
  );
}
