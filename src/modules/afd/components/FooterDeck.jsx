// ─── FooterDeck: rodapé com a "mão" de cartas de ação/símbolos + HUD Maurílio ─
// Alterna entre o SimPanel (durante a simulação) e a fileira de cartas. Inclui o
// professor (balão de fala + figura). CSS: .bottom-hand / .card* / .professor-* .
import './FooterDeck.css';
import SimPanel from './SimPanel';
import imgMaurilioSerio      from '../../../assets/maurilio1_serio.webp';
import imgMaurilioExplicando from '../../../assets/maurilio3_explicando.webp';
import imgBalaoFala          from '../../../assets/balao_fala_redondo.webp';

export default function FooterDeck({
  // Modo Aula V2 — colapsa o rodapé por completo
  isLessonActive,
  // Simulação
  showSimPanel, simWord, nodes, transitions, setShowSimPanel, setSimHighlight,
  // Cartas
  drawnCards, drawingStack, historyIndex, history, drawUndo, undo, redo,
  interactionMode, setInteractionMode, highlightedError, resetMode,
  setInitialMode, addNodeMode, addTransitionMode, toggleFinalStateMode, setEraserMode, setDrawMode,
  selectedSymbolCard, setSelectedSymbolCard, setConnectingSource, discoveredSymbols,
  // HUD professor
  isDrawingUnlocked, guidedLessonStep, currentLevel, professorMessage, handleProfessorClick,
}) {
  // No modo Aula V2 mostra só o HUD do professor (sem cartas/sim)
  if (isLessonActive) {
    const stepText = currentLevel?.guidedLesson?.[guidedLessonStep]?.text;
    return (
      <footer className="bottom-hand">
        <div className="professor-hud professor-hud--lesson">
          {stepText && (
            <div className="professor-balloon">
              <img src={imgBalaoFala} alt="" />
              <div className="professor-balloon-text">
                <div dangerouslySetInnerHTML={{ __html: stepText }} />
              </div>
            </div>
          )}
          <img src={imgMaurilioExplicando} alt="Professor Maurílio" className="prof-img"
            onClick={handleProfessorClick} />
        </div>
      </footer>
    );
  }

  return (
    <footer className="bottom-hand">
      {showSimPanel ? (
        <SimPanel
          word={simWord}
          nodes={nodes}
          transitions={transitions}
          onClose={() => { setShowSimPanel(false); setSimHighlight({ nodeId: null, type: null }); }}
          onHighlightNode={(nid, type) => setSimHighlight({ nodeId: nid, type })}
        />
      ) : (
        <div className="cards-scroll-wrapper">
          {drawnCards.map(card => {
            if (card.type === 'separator') return <div key={card.id} className="card-separator slide-up-fade" />;

            if (card.type === 'action') {
              if (card.action === 'undo' || card.action === 'redo') {
                const isUndo = card.action === 'undo';
                const disabled = isUndo
                  ? drawingStack.length === 0 && historyIndex <= 0
                  : historyIndex >= history.length - 1;
                return (
                  <div key={card.id}
                    data-icon={card.icon}
                    className={`card state slide-up-fade`}
                    style={{ opacity: disabled ? 0.35 : 1, cursor: disabled ? 'not-allowed' : 'pointer' }}
                    onClick={() => {
                      if (disabled) return;
                      if (isUndo) { drawingStack.length > 0 ? drawUndo() : undo(); }
                      else redo();
                    }}>
                    <div className="card-header">{card.label}</div>
                    <div className="card-icon">{card.icon}</div>
                  </div>
                );
              }
              const classMap = { toggleInitial:'initial', addNode:'state', addTransition:'transition', toggleFinal:'final', erase:'erase', draw:'draw' };
              const clickMap = { toggleInitial: setInitialMode, addNode: addNodeMode, addTransition: addTransitionMode, toggleFinal: toggleFinalStateMode, erase: setEraserMode, draw: setDrawMode };
              const modeMap  = { toggleInitial:'TOGGLE_INITIAL', addNode:'ADD_NODE', addTransition:'CONNECTING', toggleFinal:'TOGGLE_FINAL', erase:'ERASE', draw:'DRAW' };
              const iconMap  = { toggleInitial:'▶', addNode:'◯', addTransition:'↗', toggleFinal:'◎', erase:'🗑', draw:'✏' };
              const isSelected = interactionMode === modeMap[card.action];
              const isErr      = highlightedError === card.action;
              return (
                <div key={card.id}
                  data-icon={iconMap[card.action] || ''}
                  className={`card ${classMap[card.action]} slide-up-fade ${isSelected?'selected-card':''} ${isErr?'error-pulse-severe':''}`}
                  onClick={() => { if (isSelected) { setInteractionMode('IDLE'); resetMode(); } else { clickMap[card.action](); } }}>
                  <div className="card-header">{card.label}</div>
                  <div className="card-icon">{card.icon}</div>
                </div>
              );
            }

            if (card.type === 'symbol') {
              const isSel    = selectedSymbolCard === card.symbol;
              const isLocked = !discoveredSymbols.has(card.symbol);
              return (
                <div key={card.id}
                  data-icon={isLocked ? '🔒' : card.symbol}
                  className={`card symbol-card slide-up-fade ${isSel?'selected-card':''} ${isLocked?'locked-letter':''}`}
                  onClick={() => {
                    if (transitions.length === 0 || isLocked) return;
                    setInteractionMode('IDLE'); setConnectingSource(null);
                    setSelectedSymbolCard(isSel ? null : card.symbol);
                  }}>
                  <div className="card-header">Usar Símbolo</div>
                  <div className="card-icon" style={{ fontSize:34, color:'#7c3aed' }}>{isLocked?'🔒':card.symbol}</div>
                </div>
              );
            }
            return null;
          })}
        </div>
      )}
      {/* ── HUD Maurílio ── */}
      {isDrawingUnlocked && (() => {
        const isInLesson     = guidedLessonStep !== null;
        const currentProfMsg = isInLesson
          ? currentLevel?.guidedLesson?.[guidedLessonStep]?.text
          : professorMessage;
        const currentProfImg = isInLesson ? imgMaurilioExplicando : imgMaurilioSerio;
        return (
          <div className="professor-hud">
            {currentProfMsg && (
              <div className="professor-balloon">
                <img src={imgBalaoFala} alt="" />
                <div className="professor-balloon-text">
                  <div dangerouslySetInnerHTML={{ __html: currentProfMsg }} />
                </div>
              </div>
            )}
            <img src={currentProfImg} alt="Professor Maurílio" className="prof-img"
              onClick={handleProfessorClick} />
          </div>
        );
      })()}
    </footer>
  );
}
