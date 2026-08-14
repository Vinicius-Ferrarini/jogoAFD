// ─── BlackboardPanel: painel lateral direito no Modo Aula V2 ─────────────────
// Substitui o TestPanel quando guidedLessonStep !== null && boardWords presente.
// FASE GRAPH: quadro com palavras por status + navegação.
// FORK (fim do grafo): 3 botões (ir para aula formal / sair / anterior).
// FASE FORMAL: cabeçalho "Descrição Formal" + palavras todas done + navegação.
import './BlackboardPanel.css';

export default function BlackboardPanel({
  boardWords, rejectedWords, step, steps, phase, atGraphEnd, sim, onReplaySim,
  levelId, unlockedWords, onTriggerManualTrace,
  onGoFormal, onDoGraph, onNext, onPrev, onFinish,
}) {
  const currentStep = steps[step];
  // Na fase FORMAL todas as palavras ficam "done"; na GRAPH usa boardDoneUpTo.
  const doneUpTo = phase === 'FORMAL'
    ? boardWords.length
    : (currentStep?.boardDoneUpTo ?? -1);
  const isLast = step === steps.length - 1;

  // Aulas com simulação (bosses): a lousa é guiada pela animação "Testando
  // palavra" + texto do professor — escondemos a lista estática de boardWords.
  const isSimLesson = steps.some(s => s?.simulateWord !== undefined);
  // Lousa interativa (menu de testes gamificado) liberada para toda a grade,
  // exceto as fases indisponíveis (IDs 1, 2, 3, 4, 14). Em aulas sem simulateWord
  // a lista aparece normalmente e os botões ▶ ficam apenas desabilitados.
  const interactive = ![1, 2, 3, 4, 14].includes(levelId);
  // Mostra a lista de palavras: aulas clássicas (não-sim) sempre; nas de sim, só no L57.
  const showWordList = !isSimLesson || interactive;

  // Estado atual da animação de rastreio (se o passo for de simulação).
  const simFrame  = sim ? sim.frames[sim.idx] : null;
  const simDone   = sim && sim.idx === sim.frames.length - 1;
  const simChars  = sim ? (sim.word === '' ? ['λ'] : [...sim.word]) : [];
  // Palavra em foco (destaque amarelo na lista): a que está animando ou a do passo.
  const focusWord = sim?.word ?? currentStep?.simulateWord;

  return (
    <aside className="blackboard-panel">
      {/* ── Quadro Negro ── */}
      <div className="bp-blackboard">
        <div className="bp-board-title">
          👨‍🏫 Modo Aula · {phase === 'FORMAL' ? 'Descrição Formal' : 'Montando o Grafo'}
        </div>

        {/* O texto do passo é exibido no balão do Professor Maurílio (rodapé),
            por isso não é duplicado aqui. */}

        {/* Rastreio animado da palavra (passos com simulateWord) */}
        {sim && (
          <div className="bp-sim">
            <div className="bp-sim-head">
              <span className="bp-sim-label">🔍 Testando palavra:</span>
              {interactive && (
                <button onClick={onReplaySim} className="replay-sim-btn replay-inline" title="Repetir animação">↺</button>
              )}
            </div>
            <div className="bp-sim-word">
              {simChars.map((ch, i) => {
                const cls = i === simFrame.letter ? 'cur' : i < simFrame.letter ? 'past' : '';
                return <span key={i} className={`bp-sim-ch ${cls}`}>{ch}</span>;
              })}
            </div>
            {simDone && (() => {
              const accepted = simFrame.type === 'done';
              // Rejeição DIDÁTICA: o passo define expectedVerdict='reject' (aula automática)
              // OU o usuário clicou ▶ manualmente numa palavra que o nível marca como rejeitada.
              const isManualTrace = sim.word !== currentStep?.simulateWord;
              const rejSet = new Set(rejectedWords ?? []);
              const didactic = !accepted && (
                currentStep?.expectedVerdict === 'reject' ||
                (isManualTrace && rejSet.has(sim.word))
              );
              const cls = accepted ? 'ok' : didactic ? 'learn' : 'err';
              const msg = accepted
                ? '✓ Aceita! Parou num estado final.'
                : didactic
                ? '🎯 Rejeição esperada: autômato não aceitou, como esperado!'
                : '✗ Rejeitada — o autômato não aceita esta palavra.';
              return (
                <>
                  <div className={`bp-sim-result ${cls}`}>{msg}</div>
                  {!interactive && (
                    <button onClick={onReplaySim} className="replay-sim-btn">↺ Repetir Animação</button>
                  )}
                </>
              );
            })()}
          </div>
        )}

        {showWordList && (
          <ul className="bp-word-list">
            {boardWords.map((word, i) => {
              const isDone    = doneUpTo >= 0 && i < doneUpTo;
              const isCurrent = doneUpTo >= 0 && i === doneUpTo;
              const isFocus   = interactive && focusWord === word;
              const unlocked  = interactive && unlockedWords?.has(word);
              return (
                <li key={i} className={`bw-item ${isDone ? 'bw-done' : isCurrent ? 'bw-current' : 'bw-pending'} ${isFocus ? 'bw-focus' : ''}`}>
                  <span className="bw-text">{word === '' ? 'λ' : word}</span>
                  {interactive && (
                    <button className="bw-play-btn" disabled={!unlocked}
                      onClick={() => unlocked && onTriggerManualTrace?.(word)}
                      title={unlocked ? 'Testar esta palavra' : 'Ainda não ensinada na aula'}>▶</button>
                  )}
                </li>
              );
            })}
          </ul>
        )}
        {phase === 'FORMAL' && (
          <p style={{ color: '#9ca3af', fontSize: 11, marginTop: 8, fontFamily: 'var(--font-comic)' }}>
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
