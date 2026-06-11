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
  controlsBar: {
    position: 'absolute', bottom: 20, left: '50%', transform: 'translateX(-50%)',
    display: 'flex', gap: 15, zIndex: 201,
  },
  dot: (active) => ({
    width: 10, height: 10, borderRadius: '50%',
    background: active ? '#000' : '#aaa',
    border: '2px solid #000',
    transition: 'background 0.2s',
  }),
};

export default function GuidedLessonOverlay({ steps, step, onNext, onPrev, onFinish }) {
  const isLast = step === steps.length - 1;

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

      <div style={S.controlsBar}>
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
    </>
  );
}
