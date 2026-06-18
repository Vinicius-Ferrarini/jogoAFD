// TuringLab — App.jsx v3.0
// v3.0: Undo/Redo, Simulação no Rodapé, Cores Zoom Corrigidas, Validação Duplicata Aprimorada
import { useState, useRef, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import './AFDPart1.css';
import FormalDescriptionModal from './FormalDescriptionModal';
import LevelMenu from './components/LevelMenu';
import GameHeader from './components/GameHeader';
import TestPanel from './components/TestPanel';
import BlackboardPanel from './components/BlackboardPanel';
import FooterDeck from './components/FooterDeck';
import CanvasArea from './components/CanvasArea';
import EndScreen from './components/EndScreen';
import useHistory from './hooks/useHistory';
import useGuidedLesson from './hooks/useGuidedLesson';
import useAFDGraph, { lvlAccepts } from './hooks/useAFDGraph';
import useCanvasState from './hooks/useCanvasState';
import { GAME_LEVELS, UNAVAILABLE_LEVELS } from '../../levels';

// ─── Utilitário: gera um UID curto ───────────────────────────────────────────
let _uidCounter = 0;
const genUid = () => `_n${++_uidCounter}_${Math.random().toString(36).slice(2, 6)}`;

// ─── App Principal ────────────────────────────────────────────────────────────
export default function AFDPart1({ onBack, progress, updateProgress }) {


  // ── Toast ──────────────────────────────────────────────────────────────────
  const [toastData, setToastData] = useState({ show: false, message: '', type: 'info' });
  const toastRef = useRef(null);
  const showToast = useCallback((message, type = 'info') => {
    setToastData({ show: true, message, type });
    if (toastRef.current) clearTimeout(toastRef.current);
    toastRef.current = setTimeout(() => setToastData(d => ({ ...d, show: false })), 4000);
  }, []);

  // ── Grafo: estado base (nós/transições) ────────────────────────────────────
  // Vive aqui (no orquestrador) para quebrar a dependência circular entre
  // useHistory (precisa dos setters) e useAFDGraph (precisa de recordHistory).
  const [nodes, setNodes]           = useState([]);
  const [transitions, setTransitions] = useState([]);

  // ── UNDO/REDO ──────────────────────────────────────────────────────────────
  // Quando true, o próximo recordHistory substitui o último entry (squash)
  // em vez de empurrar um novo — usado para fundir "criar seta" + "adicionar símbolo"
  const squashNextHistoryRef = useRef(false);
  const { history, historyIndex, recordHistory, undo, redo, resetHistory } =
    useHistory({ setNodes, setTransitions, showToast });

  // ── Estado geral ───────────────────────────────────────────────────────────
  const [tela, setTela]             = useState('MENU');
  const [currentPage, setCurrentPage] = useState(1);
  const [currentLevel, setCurrentLevel] = useState(null);
  const [isDrawingUnlocked, setIsDrawingUnlocked] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [testWords, setTestWords]   = useState([]);
  const [newWord, setNewWord]       = useState('');
  const [drawnCards, setDrawnCards] = useState([]);
  const [selectedSymbolCard, setSelectedSymbolCard] = useState(null);

  const [interactionMode, setInteractionMode] = useState('IDLE');
  const [connectingSource, setConnectingSource] = useState(null);

  const [selectionBox, setSelectionBox]   = useState(null);
  const [selectedNodes, setSelectedNodes] = useState([]);
  const [dragInfo, setDragInfo] = useState({ isDragging: false, initialNodes: [], startX: 0, startY: 0 });
  const [deckGhostPos, setDeckGhostPos] = useState(null);

  const canvasRef = useRef(null);

  const [highlightedError, setHighlightedError] = useState(null);
  const [professorMessage, setProfessorMessage] = useState('');
  const [showVictoryScreen, setShowVictoryScreen]     = useState(false);
  const [showImpossibleScreen, setShowImpossibleScreen] = useState(false);
  const isTableFocusedRef = useRef(false);
  const tableBlurTimeoutRef = useRef(null);

  // ── Aula Guiada + tutoriais contextuais ────────────────────────────────────
  const {
    guidedLessonStep, setGuidedLessonStep,
    userNodesSnapshot, userTransitionsSnapshot,
    lessonActive, lessonPhase, lessonAtGraphEnd,
    lessonReveal, lessonAllSteps, lessonCurStepData, lessonGoFormal,
  } = useGuidedLesson(currentLevel);

  // ── Estado do canvas (desenho, zoom/pan, modos) ────────────────────────────
  const {
    drawings, setDrawings, drawingStack, setDrawingStack,
    currentStroke, setCurrentStroke, drawColor, setDrawColor,
    drawSize, setDrawSize, isErasing, setIsErasing, drawTool, setDrawTool,
    isDrawingRef, currentStrokeRef, drawingsRef,
    drawUndo, resetDraw,
    zoom, setZoom, pan, setPan, isPanning, setIsPanning, canvasSize,
    resetZoom, resetMode,
    setInitialMode, addNodeMode, addTransitionMode,
    toggleFinalStateMode, setEraserMode, setDrawMode,
  } = useCanvasState({
    isDrawingUnlocked, setInteractionMode, squashNextHistoryRef,
    setConnectingSource, setSelectedSymbolCard, setSelectedNodes,
    tela, isSidebarOpen, canvasRef,
  });

  // Simulação no rodapé (não modal)
  const [showSimPanel, setShowSimPanel] = useState(false);
  const [simWord, setSimWord]           = useState('');
  const [simHighlight, setSimHighlight] = useState({ nodeId: null, type: null });

  // ── Lógica de grafo (validação, mutações de nós/setas, dados de exibição) ──
  const {
    validateAFDSilent,
    deleteSelected,
    handleNodeLabelFocus, handleNodeLabelChange, handleNodeLabelBlur,
    handleAddSymbol, handleEditSymbol, handleEraseTransition, handleAppendCardToTransition,
    transitionLabelRefs, handleTransitionLineClick,
    displayNodes, transitionRenders,
  } = useAFDGraph({
    nodes, setNodes,
    transitions, setTransitions,
    recordHistory, squashNextHistoryRef,
    selectedNodes, setSelectedNodes,
    isDrawingUnlocked,
    interactionMode,
    selectedSymbolCard, setSelectedSymbolCard,
    currentLevel,
    testWords,
    showToast,
    setHighlightedError,
    guidedLessonStep,
    lessonCurStepData,
    canvasSize,
  });

  // ── Carrega fase ──────────────────────────────────────────────────────────
  const loadLevel = useCallback((level) => {
    _uidCounter = 0;
    setCurrentLevel(level);
    setTela('JOGO');
    setNodes([]);
    setTransitions([]);
    setTestWords([]);
    setIsDrawingUnlocked(false);
    setIsSidebarOpen(false);
    setNewWord('');
    setInteractionMode('IDLE');
    setDrawnCards([]);
    setSelectedSymbolCard(null);
    setShowVictoryScreen(false);
    setShowImpossibleScreen(false);
    setGuidedLessonStep(null);
    setProfessorMessage('');
    resetZoom();
    setSelectedNodes([]);
    setShowSimPanel(false);
    setSimHighlight({ nodeId: null, type: null });
    resetHistory([], []);
    resetDraw();
    userNodesSnapshot.current = null;
    userTransitionsSnapshot.current = null;
    isTableFocusedRef.current = false;
  }, [resetHistory, resetDraw, resetZoom]);

  // ── Navegação entre fases (pula fases indisponíveis) ──────────────────────
  const handlePrevLevel = useCallback(() => {
    if (!currentLevel) return;
    const idx = GAME_LEVELS.findIndex(l => l.id === currentLevel.id);
    for (let i = idx - 1; i >= 0; i--)
      if (!UNAVAILABLE_LEVELS.has(GAME_LEVELS[i].id)) { loadLevel(GAME_LEVELS[i]); return; }
  }, [currentLevel, loadLevel]);

  const handleNextLevel = useCallback(() => {
    if (!currentLevel) return;
    const idx = GAME_LEVELS.findIndex(l => l.id === currentLevel.id);
    for (let i = idx + 1; i < GAME_LEVELS.length; i++)
      if (!UNAVAILABLE_LEVELS.has(GAME_LEVELS[i].id)) { loadLevel(GAME_LEVELS[i]); return; }
  }, [currentLevel, loadLevel]);

  // Abre o painel lateral automaticamente ao entrar na fase FORMAL da aula.
  useEffect(() => {
    if (lessonPhase === 'FORMAL') setIsSidebarOpen(true);
  }, [lessonPhase]);

  // ── Encerrar Aula Guiada (restaura snapshot do aluno) ─────────────────────
  const handleLessonFinish = useCallback(() => {
    setGuidedLessonStep(null);
    setIsSidebarOpen(false);
    const sn = userNodesSnapshot.current ?? [];
    const st = userTransitionsSnapshot.current ?? [];
    setNodes(sn);
    setTransitions(st);
    resetHistory(sn, st);
  }, [setGuidedLessonStep, setNodes, setTransitions, resetHistory, userNodesSnapshot, userTransitionsSnapshot]);

  // ── Teste de palavra ───────────────────────────────────────────────────────
  const handleTestWord = useCallback(() => {
    if (!currentLevel) return;
    const target       = currentLevel.shortestWord;
    const lower        = newWord.toLowerCase();
    const isSpecialNull = lower === 'null' || lower === 'vazio';
    let isShortest = false, isValid = false;

    if (target === null) { if (isSpecialNull) isShortest = true; }
    else if (newWord.length === target.length && lvlAccepts(currentLevel, newWord)) isShortest = true;

    if ((currentLevel.regex || currentLevel.validate) && !(target === null && isSpecialNull))
      isValid = lvlAccepts(currentLevel, newWord);

    const wordDisplay = newWord === '' ? 'λ' : newWord;
    if (testWords.some(w => w.word === wordDisplay)) {
      showToast('Você já testou essa palavra!', 'info'); return;
    }

    if (isShortest) {
      if (!isDrawingUnlocked) {
        updateProgress(currentLevel.id, 1);
        if (currentLevel.impossible || currentLevel.wordOnly) {
          setShowImpossibleScreen(true);
        } else {
        setIsDrawingUnlocked(true);
        showToast('Sucesso! Tabuleiro liberado.', 'success');
        const allowed = currentLevel.allowedCards;
        const initialCards = [
          { id: 'c0', type: 'action', action: 'toggleInitial', icon: '▶', label: 'Estado Inicial' },
          { id: 'c1', type: 'action', action: 'addNode',       icon: '◯', label: 'Novo Estado' },
          { id: 'c2', type: 'action', action: 'addTransition', icon: '↗', label: 'Criar Seta' },
          { id: 'c3', type: 'action', action: 'toggleFinal',   icon: '◎', label: 'Definir Final' },
          { id: 'c4', type: 'action', action: 'erase',         icon: '🗑', label: 'Apagar' },
          { id: 'cu', type: 'action', action: 'undo',          icon: '↶', label: 'Desfazer' },
          { id: 'cr', type: 'action', action: 'redo',          icon: '↷', label: 'Refazer' },
        ].filter(c => !allowed || allowed.includes(c.action));
        const symbolCards = (currentLevel.alphabet || []).map((sym, i) => ({
          id: `s${i}`, type: 'symbol', symbol: sym, label: `Símbolo ${sym}`,
        }));
        setDrawnCards([...initialCards, { type: 'separator', id: 'sep1' }, ...symbolCards]);
        }
      }
      setTestWords(prev => [{ word: wordDisplay, status: 'shortest' }, ...prev]);
    } else if (isValid) {
      setTestWords(prev => [{ word: wordDisplay, status: 'correct' }, ...prev]);
    } else {
      setTestWords(prev => [{ word: wordDisplay, status: 'wrong' }, ...prev]);
    }
    setNewWord('');
  }, [currentLevel, newWord, testWords, isDrawingUnlocked, showToast, updateProgress]);

  // Atalhos de teclado: Ctrl+Z, Ctrl+Y, Esc, Delete
  useEffect(() => {
    const handleKeyDown = (e) => {
      const isInput = document.activeElement?.tagName === 'INPUT' || document.activeElement?.tagName === 'TEXTAREA';
      if ((e.ctrlKey || e.metaKey) && e.key === 'z' && !e.shiftKey) {
        e.preventDefault();
        if (drawingStack.length > 0) drawUndo();
        else undo();
      }
      if ((e.ctrlKey || e.metaKey) && (e.key === 'y' || (e.key === 'z' && e.shiftKey))) {
        e.preventDefault();
        redo();
      }
      if (e.key === 'Escape') {
        setInteractionMode('IDLE');
        resetMode();
      }
      if (e.key === 'Delete' && !isInput) {
        deleteSelected();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [undo, redo, drawUndo, drawingStack, resetMode, deleteSelected]);

  const toggleSidebar = () => setIsSidebarOpen(o => !o);

  const handleProfessorClick = useCallback(() => {
    if (guidedLessonStep !== null) return;
    showToast('Você está indo muito bem! Use o botão 👨‍🏫 Aula para ver a demonstração.', 'info');
  }, [guidedLessonStep, showToast]);

  const validateAFD = useCallback(() => {
    if (!validateAFDSilent(true)) return;
    updateProgress(currentLevel.id, 2);
    showToast('Autômato Validado! Preencha a Tabela Formal.', 'success');
    setIsSidebarOpen(true);
  }, [validateAFDSilent, currentLevel, updateProgress, showToast]);

  const handleFormalSuccess = useCallback(() => {
    updateProgress(currentLevel.id, 3);
    showToast('Fase Concluída com Perfeição! 3ª Estrela conquistada!', 'success');
    setShowVictoryScreen(true);
  }, [currentLevel, updateProgress, showToast]);

  // ── Simulação no Rodapé ────────────────────────────────────────────────────
  const openSimulation = useCallback(() => {
    if (!isDrawingUnlocked) { showToast('Monte o autômato primeiro!', 'info'); return; }
    if (!nodes.some(n => n.isInitial)) { showToast('Defina o estado inicial antes.', 'error'); return; }
    if (!newWord.trim()) { showToast('Digite uma palavra no campo para simular.', 'info'); return; }
    setSimWord(newWord);
    setShowSimPanel(true);
  }, [isDrawingUnlocked, nodes, newWord, showToast]);

  // ── Drag da carta Estado → canvas ─────────────────────────────────────────
  const handleDeckNodeDrag = useCallback((x, y) => {
    setDeckGhostPos({ x, y });
  }, []);

  const handleDeckNodeDrop = useCallback((clientX, clientY) => {
    setDeckGhostPos(null);
    if (!isDrawingUnlocked || !canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    if (clientX < rect.left || clientX > rect.right || clientY < rect.top || clientY > rect.bottom) return;
    const ix = ((clientX - rect.left - pan.x) / zoom / rect.width)  * 100;
    const iy = ((clientY - rect.top  - pan.y) / zoom / rect.height) * 100;
    let num = nodes.length;
    const usedLabels = new Set(nodes.map(n => n.label));
    while (usedLabels.has(`q${num}`)) num++;
    const newLabel = `q${num}`;
    const newNodes = [...nodes, { uid: genUid(), id: newLabel, label: newLabel, x: ix, y: iy, isInitial: false, isFinal: false }];
    setNodes(newNodes);
    recordHistory(newNodes, transitions);
  }, [isDrawingUnlocked, pan, zoom, nodes, transitions, recordHistory]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleDeckNodeDragCancel = useCallback(() => {
    setDeckGhostPos(null);
  }, []);

  // ══════════════════════════════════════════════════════════════
  // TELA MENU (FASES)
  // ══════════════════════════════════════════════════════════════
  if (tela === 'MENU') {
    return (
      <LevelMenu
        progress={progress}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        onBack={onBack}
        onSelect={loadLevel}
      />
    );
  }

  // ══════════════════════════════════════════════════════════════
  // TELA DO JOGO
  // ══════════════════════════════════════════════════════════════
  // Ativa o layout V2 (BlackboardPanel) apenas quando a fase tem boardWords
  const isNewLessonUI = guidedLessonStep !== null && (currentLevel?.boardWords?.length ?? 0) > 0;

  const discoveredSymbols = new Set(
    testWords.filter(w => w.status === 'correct' || w.status === 'shortest')
      .flatMap(w => w.word.split(''))
  );

  return (
    <div className="workspace-wrapper">
      {toastData.show && <div className={`toast-notification ${toastData.type}`}>{toastData.message}</div>}

      {deckGhostPos && createPortal(
        <div className="deck-drag-ghost" style={{ left: deckGhostPos.x, top: deckGhostPos.y }} />,
        document.body
      )}

      {/* ── Header ── */}
      <GameHeader
        currentLevel={currentLevel}
        progress={progress}
        toggleSidebar={toggleSidebar}
        onBack={() => setTela('MENU')}
        onPrevLevel={handlePrevLevel}
        onNextLevel={handleNextLevel}
        onStartLesson={() => {
          userNodesSnapshot.current = JSON.parse(JSON.stringify(nodes));
          userTransitionsSnapshot.current = JSON.parse(JSON.stringify(transitions));
          setGuidedLessonStep(0);
        }}
      />

      {/* ── Barra de palavras testadas (oculta no modo Aula V2) ── */}
      {currentLevel && !isNewLessonUI && (
        <div className="words-hint-bar">
          <div className="words-hint-group">
            <span className="words-hint-label accept">✓ Aceita</span>
            {testWords.filter(w => w.status === 'correct' || w.status === 'shortest').map((w, i) => (
              <span key={i} className="words-hint-chip accept">{w.word}</span>
            ))}
          </div>
          <div className="words-hint-sep" />
          <div className="words-hint-group">
            <span className="words-hint-label reject">✗ Rejeita</span>
            {testWords.filter(w => w.status === 'wrong').map((w, i) => (
              <span key={i} className="words-hint-chip reject">{w.word}</span>
            ))}
          </div>
        </div>
      )}

      <div className="workspace">
        {/* ── Sidebar Esquerda ── */}
        <aside className={`formal-panel ${isSidebarOpen ? 'open' : ''}`}>
          <FormalDescriptionModal
            isOpen={isSidebarOpen}
            onClose={() => { setIsSidebarOpen(false); }}
            nodes={nodes}
            transitions={transitions}
            alphabet={currentLevel?.alphabet}
            currentLevelId={currentLevel?.id}
            onSuccess={handleFormalSuccess}
            showToast={showToast}
            onValidateGraph={() => validateAFDSilent(true)}
            demo={lessonActive && lessonPhase === 'FORMAL' ? lessonReveal : null}
            onTableFocusChange={v => {
              if (v) {
                clearTimeout(tableBlurTimeoutRef.current);
                isTableFocusedRef.current = true;
              } else {
                tableBlurTimeoutRef.current = setTimeout(() => { isTableFocusedRef.current = false; }, 300);
              }
            }}
          />
        </aside>

        {/* ── Canvas ── */}
        <CanvasArea
          canvasRef={canvasRef}
          genUid={genUid}
          isDrawingUnlocked={isDrawingUnlocked}
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
          simHighlight={simHighlight}
          handleNodeLabelFocus={handleNodeLabelFocus}
          handleNodeLabelChange={handleNodeLabelChange}
          handleNodeLabelBlur={handleNodeLabelBlur}
          setDrawMode={setDrawMode}
          showToast={showToast}
          guidedLessonStep={guidedLessonStep}
          setGuidedLessonStep={setGuidedLessonStep}
          currentLevel={currentLevel}
          userNodesSnapshot={userNodesSnapshot}
          userTransitionsSnapshot={userTransitionsSnapshot}
          resetHistory={resetHistory}
        />

        {/* ── Painel Direito: TestPanel normal ou BlackboardPanel (Aula V2) ── */}
        {isNewLessonUI ? (
          <BlackboardPanel
            boardWords={currentLevel.boardWords}
            step={guidedLessonStep}
            steps={lessonAllSteps}
            phase={lessonPhase}
            atGraphEnd={lessonAtGraphEnd}
            onGoFormal={() => { lessonGoFormal(); }}
            onDoGraph={handleLessonFinish}
            onNext={() => setGuidedLessonStep(s => Math.min(s + 1, lessonAllSteps.length - 1))}
            onPrev={() => setGuidedLessonStep(s => Math.max(s - 1, 0))}
            onFinish={handleLessonFinish}
          />
        ) : (
          <TestPanel
            currentLevel={currentLevel}
            newWord={newWord}
            setNewWord={setNewWord}
            handleTestWord={handleTestWord}
            isDrawingUnlocked={isDrawingUnlocked}
            openSimulation={openSimulation}
            testWords={testWords}
            validateAFD={validateAFD}
          />
        )}
      </div>

      {/* ── Rodapé: Cartas / Simulação (colapsa no modo Aula V2) ── */}
      <FooterDeck
        isLessonActive={isNewLessonUI}
        showSimPanel={showSimPanel}
        simWord={simWord}
        nodes={nodes}
        transitions={transitions}
        setShowSimPanel={setShowSimPanel}
        setSimHighlight={setSimHighlight}
        drawnCards={drawnCards}
        drawingStack={drawingStack}
        historyIndex={historyIndex}
        history={history}
        drawUndo={drawUndo}
        undo={undo}
        redo={redo}
        interactionMode={interactionMode}
        setInteractionMode={setInteractionMode}
        highlightedError={highlightedError}
        resetMode={resetMode}
        setInitialMode={setInitialMode}
        addNodeMode={addNodeMode}
        addTransitionMode={addTransitionMode}
        toggleFinalStateMode={toggleFinalStateMode}
        setEraserMode={setEraserMode}
        setDrawMode={setDrawMode}
        selectedSymbolCard={selectedSymbolCard}
        setSelectedSymbolCard={setSelectedSymbolCard}
        setConnectingSource={setConnectingSource}
        discoveredSymbols={discoveredSymbols}
        isDrawingUnlocked={isDrawingUnlocked}
        guidedLessonStep={guidedLessonStep}
        currentLevel={currentLevel}
        professorMessage={professorMessage}
        handleProfessorClick={handleProfessorClick}
        onDeckNodeDrag={handleDeckNodeDrag}
        onDeckNodeDrop={handleDeckNodeDrop}
        onDeckNodeDragCancel={handleDeckNodeDragCancel}
      />

      {/* ── Tela Impossível ── */}
      {showImpossibleScreen && (
        <EndScreen
          currentLevelId={currentLevel?.id}
          message={currentLevel?.wordOnly
            ? (currentLevel?.successMsg || 'Muito bem! Fase concluída.')
            : 'Este exercício é impossível de resolver com AFD! Com AP nós vamos resolvê-lo! 🚫🔄'}
          balloon={{ width: 320, height: 220, marginTop: -150 }}
          textStyle={{ padding: '20px 20px 52px', fontSize: 15 }}
          nextPrefix="Entendido! Próxima: "
          onMenu={() => { setShowImpossibleScreen(false); setTela('MENU'); }}
          onNext={next => { setShowImpossibleScreen(false); loadLevel(next); }}
        />
      )}

      {/* ── Tela de Vitória ── */}
      {showVictoryScreen && (
        <EndScreen
          currentLevelId={currentLevel?.id}
          message={currentLevel?.successMsg || 'Parabéns, você dominou esta linguagem!'}
          balloon={{ width: 300, height: 210, marginTop: -140 }}
          textStyle={{ padding: '18px 18px 48px', fontSize: 17 }}
          nextPrefix="Próxima: "
          onMenu={() => { setShowVictoryScreen(false); setTela('MENU'); }}
          onNext={next => { setShowVictoryScreen(false); loadLevel(next); }}
        />
      )}
    </div>
  );
}
