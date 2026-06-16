// ─── APBlackboardPanel: painel direito no Modo Aula do AP (fork do AFD) ───────
// Reusa BlackboardPanel.css. Diferença: status por palavra vem de `boardStatus`
// (array 'done'|'current'|'pending') calculado rodando o PDA parcial — em vez do
// índice único boardDoneUpTo do AFD. Mostra a fase (grafo / descrição formal).
import '../../afd/components/BlackboardPanel.css';

export default function APBlackboardPanel({
  boardWords, boardStatus, phase, step, steps, onNext, onPrev, onFinish,
  atGraphEnd, onGoFormal, onDoGraph,
}) {
  const isLast = step === steps.length - 1;
  const statusOf = (i) => (boardStatus ? boardStatus[i] : 'pending');

  return (
    <aside className="blackboard-panel">
      <div className="bp-blackboard">
        <div className="bp-board-title">
          👨‍🏫 Modo Aula · {phase === 'FORMAL' ? 'Descrição Formal' : 'Montando o Grafo'}
        </div>

        <ul className="bp-word-list">
          {boardWords.map((word, i) => {
            const st = statusOf(i);
            return (
              <li key={i} className={st === 'done' ? 'bw-done' : st === 'current' ? 'bw-current' : 'bw-pending'}>
                {word === '' ? 'λ' : word}
              </li>
            );
          })}
        </ul>

        {phase === 'FORMAL' && (
          <p style={{ color: '#9ca3af', fontSize: 11, marginTop: 8, fontFamily: "'Comic Sans MS', cursive" }}>
            👈 Veja o painel à esquerda preencher a tupla e a função δ a partir do grafo.
          </p>
        )}
      </div>

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
            <button className="menu-btn primary bp-fork-btn" onClick={onGoFormal}>📝 Aula: Descrição Formal →</button>
            <button className="menu-btn bp-fork-btn" onClick={onDoGraph}>✏️ Fazer o grafo (sair)</button>
            {step > 0 && (
              <button className="menu-btn bp-fork-btn" onClick={onPrev}>← Anterior</button>
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
