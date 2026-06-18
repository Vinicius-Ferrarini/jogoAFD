// ─── BlackboardPanel: painel lateral direito no Modo Aula V2 ─────────────────
// Substitui o TestPanel quando guidedLessonStep !== null && boardWords presente.
// FASE GRAPH: quadro com palavras por status + navegação.
// FORK (fim do grafo): 3 botões (ir para aula formal / sair / anterior).
// FASE FORMAL: cabeçalho "Descrição Formal" + palavras todas done + navegação.
import './BlackboardPanel.css';

export default function BlackboardPanel({
  boardWords, step, steps, phase, atGraphEnd,
  onGoFormal, onDoGraph, onNext, onPrev, onFinish,
}) {
  const currentStep = steps[step];
  // Na fase FORMAL todas as palavras ficam "done"; na GRAPH usa boardDoneUpTo.
  const doneUpTo = phase === 'FORMAL'
    ? boardWords.length
    : (currentStep?.boardDoneUpTo ?? -1);
  const isLast = step === steps.length - 1;

  return (
    <aside className="blackboard-panel">
      {/* ── Quadro Negro ── */}
      <div className="bp-blackboard">
        <div className="bp-board-title">
          👨‍🏫 Modo Aula · {phase === 'FORMAL' ? 'Descrição Formal' : 'Montando o Grafo'}
        </div>
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
        {phase === 'FORMAL' && (
          <p style={{ color: '#9ca3af', fontSize: 11, marginTop: 8, fontFamily: "'Comic Sans MS', cursive" }}>
            👈 Veja o painel à esquerda revelar a tupla M = (Q, Σ, δ, q₀, F) passo a passo.
          </p>
        )}
      </div>

      {/* ── Controles de navegação ── */}
      <div className="bp-nav">
        <div className="bp-dots">
          {steps.map((_, i) => (
            <span key={i} className={`bp-dot${i <= step ? ' bp-dot-active' : ''}`} />
          ))}
        </div>
        <span className="bp-step-counter">Passo {step + 1} / {steps.length}</span>

        {atGraphEnd ? (
          <div className="bp-fork">
            <div className="bp-fork-title">✅ Grafo finalizado! E agora?</div>
            <button className="menu-btn primary bp-fork-btn" onClick={onGoFormal}>
              📝 Aula: Descrição Formal →
            </button>
            <button className="menu-btn bp-fork-btn" onClick={onDoGraph}>
              ✏️ Fazer o grafo (sair)
            </button>
            {step > 0 && (
              <button className="menu-btn bp-fork-btn" onClick={onPrev}>
                ← Anterior
              </button>
            )}
          </div>
        ) : (
          <div className="bp-nav-btns">
            {step > 0 && (
              <button className="menu-btn" style={{ padding: '5px 10px', fontSize: 11 }} onClick={onPrev}>
                ← Ant.
              </button>
            )}
            {!isLast ? (
              <button className="menu-btn primary" style={{ padding: '5px 10px', fontSize: 11 }} onClick={onNext}>
                Próx. →
              </button>
            ) : (
              <button className="menu-btn primary" style={{ padding: '5px 10px', fontSize: 11 }} onClick={onFinish}>
                ✓ Fechar
              </button>
            )}
          </div>
        )}
      </div>
    </aside>
  );
}
