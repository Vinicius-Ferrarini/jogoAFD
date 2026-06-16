// ─── MinDrawStep: o aluno DESENHA o AFD mínimo (reaproveita o canvas do AFD_1) ──
// Etapa final da minimização. Em vez de o jogo desenhar o resultado, o aluno o
// constrói à mão num canvas idêntico ao do AFDPart1 — instanciamos aqui os mesmos
// 4 hooks (useHistory/useCanvasState/useAFDGraph) com um grafo em branco e
// isDrawingUnlocked=true. A validação é o "juiz invisível": game.validateDrawnMinimized
// compara o desenho com o gabarito `minimized` (linguagem equivalente + nº mínimo
// de estados) e aponta ONDE/POR QUE errou (estados em destaque + balão do Maurílio).
import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import CanvasArea from './CanvasArea';
import GraphView from './GraphView';
import DeltaTableView from './DeltaTableView';
import { SvgStars } from '../SvgStar';
import useHistory from '../hooks/useHistory';
import useCanvasState from '../hooks/useCanvasState';
import useAFDGraph from '../hooks/useAFDGraph';

let _uid = 0;
const genUid = () => `_md${++_uid}_${Math.random().toString(36).slice(2, 6)}`;

export default function MinDrawStep({ game, prep, showProf, onSolved, onBack, onNext, nextLabel, stars }) {
  // ── Estado do grafo (vive aqui p/ quebrar o ciclo useHistory ↔ useAFDGraph) ──
  const [nodes, setNodes]             = useState([]);
  const [transitions, setTransitions] = useState([]);

  const [interactionMode, setInteractionMode] = useState('IDLE');
  const [connectingSource, setConnectingSource] = useState(null);
  const [selectionBox, setSelectionBox]   = useState(null);
  const [selectedNodes, setSelectedNodes] = useState([]);
  const [dragInfo, setDragInfo] = useState({ isDragging: false, initialNodes: [], startX: 0, startY: 0 });
  const [selectedSymbolCard, setSelectedSymbolCard] = useState(null);
  const [highlightedError, setHighlightedError] = useState(null);

  const [errorNodeIds, setErrorNodeIds] = useState(null);  // destaque de erro (Set<id>)
  const [solved, setSolved]   = useState(false);
  const [showDelta, setShowDelta] = useState(true);        // tabela δ de referência começa aberta

  const canvasRef = useRef(null);
  const squashNextHistoryRef = useRef(false);
  const snapN = useRef(null), snapT = useRef(null);

  // Feedback do canvas → balão do Maurílio (em vez de toasts)
  const showToast = useCallback((m, type = 'info') => {
    showProf(m, type === 'error' ? 'serio' : 'explicando', 6000);
  }, [showProf]);

  const { recordHistory, undo, redo, resetHistory } =
    useHistory({ setNodes, setTransitions, showToast });

  // Nível "fake" — só o alfabeto importa para o canvas (todo o resto é opcional).
  const currentLevel = useMemo(() => ({ alphabet: game.alphabet }), [game.alphabet]);

  const {
    drawings, setDrawings, drawingStack, setDrawingStack,
    currentStroke, setCurrentStroke, drawColor, setDrawColor,
    drawSize, setDrawSize, isErasing, setIsErasing, drawTool, setDrawTool,
    isDrawingRef, currentStrokeRef, drawingsRef,
    drawUndo, zoom, setZoom, pan, setPan, isPanning, setIsPanning, canvasSize,
    resetMode, setDrawMode,
    setInitialMode, addNodeMode, addTransitionMode, toggleFinalStateMode, setEraserMode,
  } = useCanvasState({
    isDrawingUnlocked: true, setInteractionMode, squashNextHistoryRef,
    setConnectingSource, setSelectedSymbolCard, setSelectedNodes,
    tela: 'JOGO', isSidebarOpen: false, canvasRef,
  });

  const {
    deleteSelected,
    handleNodeLabelFocus, handleNodeLabelChange, handleNodeLabelBlur,
    handleAddSymbol, handleEditSymbol, handleEraseTransition, handleAppendCardToTransition,
    transitionLabelRefs, handleTransitionLineClick,
    displayNodes, transitionRenders,
  } = useAFDGraph({
    nodes, setNodes, transitions, setTransitions,
    recordHistory, squashNextHistoryRef,
    selectedNodes, setSelectedNodes,
    isDrawingUnlocked: true, interactionMode,
    selectedSymbolCard, setSelectedSymbolCard,
    currentLevel, testWords: [], showToast,
    setHighlightedError, guidedLessonStep: null, canvasSize,
  });

  // Pilha de histórico arranca com o grafo vazio; mensagem inicial do Maurílio.
  useEffect(() => {
    resetHistory([], []);
    showProf(
      game.isAlreadyMinimal
        ? 'Este AFD já está minimizado — não há estados equivalentes para juntar. Mesmo assim, desenhe-o fielmente para fechar com ★★★.'
        : 'Hora de desenhar! Crie um estado para cada grupo de equivalentes (ao lado), ligue as transições e marque inicial (▶) e finais (◎). Depois valide.',
      'explicando', 12000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Atalhos: Delete (apagar selecionados), Esc (sair do modo), Ctrl+Z/Y
  useEffect(() => {
    const onKey = (e) => {
      const isInput = document.activeElement?.tagName === 'INPUT' || document.activeElement?.tagName === 'TEXTAREA';
      if ((e.ctrlKey || e.metaKey) && e.key === 'z' && !e.shiftKey) { e.preventDefault(); if (drawingStack.length) drawUndo(); else undo(); }
      if ((e.ctrlKey || e.metaKey) && (e.key === 'y' || (e.key === 'z' && e.shiftKey))) { e.preventDefault(); redo(); }
      if (e.key === 'Escape') { setInteractionMode('IDLE'); resetMode(); }
      if (e.key === 'Delete' && !isInput) deleteSelected();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [undo, redo, drawUndo, drawingStack, resetMode, deleteSelected]);

  const handleValidate = useCallback(() => {
    setErrorNodeIds(null);
    const res = game.validateDrawnMinimized(nodes, transitions);
    if (res.ok) {
      setSolved(true);
      onSolved();
      showProf(res.message, 'feliz', 10000);
    } else {
      setErrorNodeIds(res.errorNodeIds);
      showProf(res.message, 'serio', 12000);
    }
  }, [game, nodes, transitions, onSolved, showProf]);

  // Botão de modo — mesmas cores das cartas do AFD_1; clicar de novo desmarca
  // (volta ao modo IDLE), igual ao deck do AFD_1.
  const toolBtn = (label, icon, mode, onClick, bg) => {
    const active = interactionMode === mode;
    return (
      <button
        className="min-draw-btn"
        style={{ background: bg,
          borderColor: active ? '#facc15' : '#000',
          boxShadow: active ? '0 0 0 3px #facc15, 2px 2px 0 #000' : '2px 2px 0 #000' }}
        onClick={() => {
          setErrorNodeIds(null);
          if (active) { setInteractionMode('IDLE'); resetMode(); }
          else onClick();
        }}
        title={label}
      >
        <span style={{ fontSize: 15 }}>{icon}</span>
        <span className="min-draw-btn-lbl">{label}</span>
      </button>
    );
  };

  const { minimized } = game;

  return (
    <div className="min-draw-wrap">
      {/* ── Barra de ferramentas ── */}
      <div className="min-draw-toolbar">
        {toolBtn('Inicial', '▶', 'TOGGLE_INITIAL', setInitialMode, '#bae6fd')}
        {toolBtn('Estado', '◯', 'ADD_NODE', addNodeMode, '#fed7aa')}
        {toolBtn('Seta', '↗', 'CONNECTING', addTransitionMode, '#f9a8d4')}
        {toolBtn('Final', '◎', 'TOGGLE_FINAL', toggleFinalStateMode, '#86efac')}
        {toolBtn('Apagar', '🗑', 'ERASE', setEraserMode, '#fca5a5')}
        <div className="min-draw-sep" />
        <button className="min-draw-btn" style={{ background: '#fff' }} onClick={undo} title="Desfazer (Ctrl+Z)">
          <span style={{ fontSize: 15 }}>↶</span><span className="min-draw-btn-lbl">Desfazer</span>
        </button>
        <button className="min-draw-btn" style={{ background: '#fff' }} onClick={redo} title="Refazer (Ctrl+Y)">
          <span style={{ fontSize: 15 }}>↷</span><span className="min-draw-btn-lbl">Refazer</span>
        </button>
        <div className="min-draw-hint">
          {interactionMode === 'ADD_NODE'      ? 'Clique no quadro para criar um estado'
          : interactionMode === 'CONNECTING'   ? (connectingSource ? 'Clique no estado de destino' : 'Clique no estado de origem')
          : interactionMode === 'TOGGLE_INITIAL' ? 'Clique no estado inicial'
          : interactionMode === 'TOGGLE_FINAL' ? 'Clique para marcar/desmarcar final'
          : interactionMode === 'ERASE'        ? 'Clique no que deseja apagar'
          : 'Escolha uma ferramenta acima'}
        </div>
      </div>

      {/* ── Corpo: canvas + lateral de referência ── */}
      <div className="min-draw-body">
        <div className="min-draw-canvas-host">
          <CanvasArea
            canvasRef={canvasRef}
            genUid={genUid}
            isDrawingUnlocked={true}
            interactionMode={interactionMode}
            setInteractionMode={setInteractionMode}
            isErasing={isErasing}
            setIsErasing={setIsErasing}
            drawTool={drawTool}
            setDrawTool={setDrawTool}
            drawColor={drawColor}
            setDrawColor={setDrawColor}
            drawSize={drawSize}
            setDrawSize={setDrawSize}
            zoom={zoom}
            setZoom={setZoom}
            pan={pan}
            setPan={setPan}
            isPanning={isPanning}
            setIsPanning={setIsPanning}
            nodes={nodes}
            setNodes={setNodes}
            transitions={transitions}
            setTransitions={setTransitions}
            recordHistory={recordHistory}
            squashNextHistoryRef={squashNextHistoryRef}
            selectedNodes={selectedNodes}
            setSelectedNodes={setSelectedNodes}
            connectingSource={connectingSource}
            setConnectingSource={setConnectingSource}
            selectionBox={selectionBox}
            setSelectionBox={setSelectionBox}
            dragInfo={dragInfo}
            setDragInfo={setDragInfo}
            drawings={drawings}
            setDrawings={setDrawings}
            setDrawingStack={setDrawingStack}
            currentStroke={currentStroke}
            setCurrentStroke={setCurrentStroke}
            drawingsRef={drawingsRef}
            isDrawingRef={isDrawingRef}
            currentStrokeRef={currentStrokeRef}
            selectedSymbolCard={selectedSymbolCard}
            transitionRenders={transitionRenders}
            highlightedError={highlightedError}
            handleTransitionLineClick={handleTransitionLineClick}
            transitionLabelRefs={transitionLabelRefs}
            handleAddSymbol={handleAddSymbol}
            handleEditSymbol={handleEditSymbol}
            handleEraseTransition={handleEraseTransition}
            handleAppendCardToTransition={handleAppendCardToTransition}
            displayNodes={displayNodes}
            simHighlight={{ nodeId: null, type: null }}
            handleNodeLabelFocus={handleNodeLabelFocus}
            handleNodeLabelChange={handleNodeLabelChange}
            handleNodeLabelBlur={handleNodeLabelBlur}
            setDrawMode={setDrawMode}
            showToast={showToast}
            guidedLessonStep={null}
            setGuidedLessonStep={() => {}}
            currentLevel={currentLevel}
            userNodesSnapshot={snapN}
            userTransitionsSnapshot={snapT}
            resetHistory={resetHistory}
            errorNodeIds={errorNodeIds}
          />
        </div>

        {/* ── Lateral: referência (original encolhido) + grupos + δ ── */}
        <aside className="min-draw-side">
          <div className="min-draw-side-title">AFD original (referência)</div>
          <div className="min-draw-ref">
            <GraphView nodes={game.origNodes} transitions={game.transitions}
              vw={340} vh={210} nr={17} mx={42} my={30} />
          </div>

          <div className="min-draw-side-title">Grupos equivalentes → estados do mínimo</div>
          <div className="min-groups min-draw-groups">
            {Object.entries(minimized.classMap).map(([rep, members]) => (
              <div key={rep} className="min-group-row">
                <span className="min-group-members">{'{'}{members.join(', ')}{'}'}</span>
                <span className="min-group-arrow">→</span>
                <span className="min-group-rep">{minimized.displayName[rep]}</span>
              </div>
            ))}
          </div>

          <button className="min-draw-delta-toggle" onClick={() => setShowDelta(s => !s)}>
            {showDelta ? '▼' : '▶'} Tabela δ original
          </button>
          {showDelta && <div className="min-draw-delta"><DeltaTableView prep={prep} /></div>}

          <button className="min-draw-validate" onClick={handleValidate}>
            ✓ Validar AFD mínimo
          </button>
        </aside>
      </div>

      {/* ── Overlay de sucesso ── */}
      {solved && (
        <div className="min-draw-overlay">
          <div className="min-draw-overlay-card">
            <div className="min-draw-overlay-stars">
              <SvgStars count={Math.max(stars, 3)} size={30} />
            </div>
            <h2 style={{ margin: '4px 0' }}>AFD mínimo correto! 🎉</h2>
            <p style={{ fontSize: 13, margin: '0 0 8px' }}>
              Seu autômato reconhece exatamente a mesma linguagem com o número mínimo de estados.
            </p>
            <div className="min-draw-overlay-graph">
              <div className="min-draw-side-title">Gabarito (AFD mínimo)</div>
              <GraphView nodes={minimized.nodes} transitions={minimized.transitions}
                vw={460} vh={250} nr={20} mx={54} my={36} />
            </div>
            <div style={{ display: 'flex', gap: 14, marginTop: 10, justifyContent: 'center' }}>
              <button className="menu-btn" style={{ padding: '12px 22px', fontSize: 17 }} onClick={onBack}>
                Voltar ao Menu
              </button>
              {onNext && (
                <button className="menu-btn primary" style={{ padding: '12px 22px', fontSize: 17 }} onClick={onNext}>
                  Próxima: {nextLabel} →
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
