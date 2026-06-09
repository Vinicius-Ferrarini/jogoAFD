import imgMaurilioExplicando from '../../assets/maurilio3_explicando.webp';
import imgBalaoFala from '../../assets/balao_fala_redondo.webp';

const S = {
  banner: {
    position: 'absolute', top: 0, left: 0, right: 0, zIndex: 200,
    background: '#fde047', borderBottom: '3px solid #000',
    padding: '7px 20px', display: 'flex', alignItems: 'center', gap: 12,
    fontFamily: "'Comic Sans MS', 'Comic Neue', cursive, sans-serif",
    fontWeight: 900, fontSize: 15, userSelect: 'none',
    boxShadow: '0 3px 0 #000',
  },
  blocker: {
    position: 'absolute', inset: 0, zIndex: 100, cursor: 'default',
  },
  bottom: {
    position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 201,
    display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
    padding: '0 20px 10px', gap: 8,
    background: 'linear-gradient(to top, rgba(255,255,255,0.97) 55%, transparent)',
    fontFamily: "'Comic Sans MS', 'Comic Neue', cursive, sans-serif",
  },
  prof: { height: 130, zIndex: 2, marginRight: -38, flexShrink: 0, alignSelf: 'flex-end', marginBottom: 4 },
  bubbleWrap: { position: 'relative', width: 260, height: 165, marginBottom: 36, zIndex: 3, flexShrink: 0 },
  bubbleImg: { position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 1 },
  bubbleText: {
    position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
    padding: '14px 20px 44px', boxSizing: 'border-box',
    color: '#000', fontSize: 12, fontWeight: 900, textAlign: 'center', zIndex: 2, lineHeight: 1.5,
  },
  btns: { display: 'flex', flexDirection: 'column', gap: 7, marginBottom: 40, flexShrink: 0 },
  dot: (active) => ({
    width: 10, height: 10, borderRadius: '50%',
    background: active ? '#000' : '#aaa',
    border: '2px solid #000',
    transition: 'background 0.2s',
  }),
};

export default function GuidedLessonOverlay({ steps, step, onNext, onPrev, onFinish }) {
  const isLast = step === steps.length - 1;
  const current = steps[step];

  return (
    <>
      <div style={S.banner}>
        <span>👨‍🏫 Modo Aula</span>
        <div style={{ display: 'flex', gap: 6, flex: 1, alignItems: 'center' }}>
          {steps.map((_, i) => <div key={i} style={S.dot(i <= step)} />)}
        </div>
        <span style={{ fontSize: 13 }}>Passo {step + 1} / {steps.length}</span>
      </div>

      <div style={S.blocker} onPointerDown={e => e.stopPropagation()} />

      <div style={S.bottom}>
        <img src={imgMaurilioExplicando} alt="Professor" style={S.prof} />
        <div style={S.bubbleWrap}>
          <img src={imgBalaoFala} alt="" style={S.bubbleImg} />
          <div style={S.bubbleText}>{current.text}</div>
        </div>
        <div style={S.btns}>
          {step > 0 && (
            <button className="menu-btn" style={{ padding: '9px 18px', fontSize: 13 }} onClick={onPrev}>
              ← Anterior
            </button>
          )}
          {!isLast ? (
            <button className="menu-btn primary" style={{ padding: '9px 18px', fontSize: 13 }} onClick={onNext}>
              Próximo →
            </button>
          ) : (
            <button className="menu-btn primary" style={{ padding: '9px 18px', fontSize: 13 }} onClick={onFinish}>
              Terminar Aula ✓
            </button>
          )}
        </div>
      </div>
    </>
  );
}
