// ─── BlackboardPanel: painel lateral direito no Modo Aula V2 ─────────────────
// Substitui o TestPanel quando guidedLessonStep !== null && boardWords presente.
// Contém: quadro negro com palavras por status e controles de navegação.
// O HUD do Maurílio fica no FooterDeck (não aqui).
import './BlackboardPanel.css';

export default function BlackboardPanel({ boardWords, step, steps, onNext, onPrev, onFinish }) {
  const currentStep = steps[step];
  const doneUpTo    = currentStep?.boardDoneUpTo ?? -1;
  const isLast      = step === steps.length - 1;

  return (
    <aside className="blackboard-panel">

      {/* ── Quadro Negro ── */}
      <div className="bp-blackboard">
        <div className="bp-board-title">📋 Palavras da Aula</div>
        <ul className="bp-word-list">
          {boardWords.map((word, i) => {
            const isDone    = doneUpTo >= 0 && i < doneUpTo;
            const isCurrent = doneUpTo >= 0 && i === doneUpTo;
            return (
              <li key={i} className={isDone ? 'bw-done' : isCurrent ? 'bw-current' : 'bw-pending'}>
                {word === '' ? 'λ' : word}
              </li>
            );
          })}
        </ul>
      </div>

      {/* ── Controles de navegação ── */}
      <div className="bp-nav">
        <div className="bp-dots">
          {steps.map((_, i) => (
            <span key={i} className={`bp-dot${i <= step ? ' bp-dot-active' : ''}`} />
          ))}
        </div>
        <span className="bp-step-counter">Passo {step + 1} / {steps.length}</span>
        <div className="bp-nav-btns">
          {step > 0 && (
            <button
              className="menu-btn"
              style={{ padding: '5px 10px', fontSize: 11 }}
              onClick={onPrev}
            >
              ← Ant.
            </button>
          )}
          {!isLast ? (
            <button
              className="menu-btn primary"
              style={{ padding: '5px 10px', fontSize: 11 }}
              onClick={onNext}
            >
              Próx. →
            </button>
          ) : (
            <button
              className="menu-btn primary"
              style={{ padding: '5px 10px', fontSize: 11 }}
              onClick={onFinish}
            >
              ✓ Fechar
            </button>
          )}
        </div>
      </div>

    </aside>
  );
}
