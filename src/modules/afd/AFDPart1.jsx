// TuringLab — App.jsx v3.0
// v3.0: Undo/Redo, Simulação no Rodapé, Cores Zoom Corrigidas, Validação Duplicata Aprimorada
import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
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
import useToast from './hooks/useToast';
import usePhaseTelemetry from './hooks/usePhaseTelemetry';
import useGuidedLesson from './hooks/useGuidedLesson';
import useAFDGraph, { lvlAccepts, validateAFDPure } from './hooks/useAFDGraph';
import useCanvasState from './hooks/useCanvasState';
import { traceWord } from './utils/traceWord';
import { buildNoAttemptHintMessage, buildSizeHintMessage } from './utils/sizeHint';
import { UNAVAILABLE_LEVELS, HIDDEN_LEVELS, LEVEL_DIFFICULTY, DIFF_COLOR } from '../../levels';
import { AFD_LEVELS as GAME_LEVELS } from '../../levels_data/afd/index.js';
import { logEvent } from '../../services/telemetry';

// ─── Utilitário: gera um UID curto ───────────────────────────────────────────
let _uidCounter = 0;
const genUid = () => `_n${++_uidCounter}_${Math.random().toString(36).slice(2, 6)}`;

// Dimensões lógicas do canvas interno (devem casar com INNER_W/INNER_H de CanvasArea.jsx)
const INNER_W = 8000;
const INNER_H = 8000;

// ─── App Principal ────────────────────────────────────────────────────────────
export default function AFDPart1({ onBack, progress, updateProgress, forceLevelId, forceLevelLabel, onForcedPrev, onForcedNext, forceLabelColor }) {


  // ── Toast ──────────────────────────────────────────────────────────────────
  const { toastData, showToast } = useToast();

  // ── Grafo: estado base (nós/transições) ────────────────────────────────────
  // Vive aqui (no orquestrador) para quebrar a dependência circular entre
  // useHistory (precisa dos setters) e useAFDGraph (precisa de recordHistory).
  const [nodes, setNodes]           = useState([]);
  const [transitions, setTransitions] = useState([]);

  // ── UNDO/REDO ──────────────────────────────────────────────────────────────
  // Quando true, o próximo recordHistory substitui o último entry (squash)
  // em vez de empurrar um novo — usado para fundir "criar seta" + "adicionar símbolo"
  const squashNextHistoryRef = useRef(false);
  const { historyIndex, historyLen, recordHistory, undo, redo, resetHistory } =
    useHistory({ setNodes, setTransitions, showToast });

  // ── Estado geral ───────────────────────────────────────────────────────────
  const [tela, setTela]             = useState('MENU');
  const [currentPage, setCurrentPage] = useState(1);
  const [currentLevel, setCurrentLevel] = useState(null);
  const [isDrawingUnlocked, setIsDrawingUnlocked] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [testWords, setTestWords]   = useState([]);
  const [newWord, setNewWord]       = useState('');
  // Última palavra testada (normalizada — 'null'/'vazio' já viram ''), usada
  // só pela Dica de Tamanho (regra: diff = tentativa.length - shortestWord.length).
  const lastAttemptRef = useRef(null);
  const [drawnCards, setDrawnCards] = useState([]);
  const [selectedSymbolCard, setSelectedSymbolCard] = useState(null);

  const [interactionMode, setInteractionMode] = useState('IDLE');
  const [connectingSource, setConnectingSource] = useState(null);

  const [selectionBox, setSelectionBox]   = useState(null);
  const [selectedNodes, setSelectedNodes] = useState([]);
  const [dragInfo, setDragInfo] = useState({ isDragging: false, initialNodes: [], startX: 0, startY: 0 });
  const [deckGhostPos, setDeckGhostPos] = useState(null);

  const canvasRef      = useRef(null);
  const viewportRef    = useRef(null);
  const innerCanvasRef = useRef(null);

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
    lessonReveal, lessonAllSteps, lessonCurStepData, lessonCur, lessonGoFormal,
  } = useGuidedLesson(currentLevel);

  // ── Estado do canvas (desenho, zoom, modos) ───────────────────────────────
  const {
    drawings, setDrawings, drawingStack, setDrawingStack,
    currentStroke, setCurrentStroke, drawColor, setDrawColor,
    drawSize, setDrawSize, isErasing, setIsErasing, drawTool, setDrawTool,
    isDrawingRef, currentStrokeRef, drawingsRef,
    drawUndo, resetDraw,
    zoom, setZoom,
    resetZoom, resetMode,
    setInitialMode, addNodeMode, addTransitionMode,
    toggleFinalStateMode, setEraserMode, setDrawMode,
  } = useCanvasState({
    isDrawingUnlocked, setInteractionMode, squashNextHistoryRef,
    setConnectingSource, setSelectedSymbolCard, setSelectedNodes,
    tela, isSidebarOpen, canvasRef, viewportRef,
  });

  // Simulação no rodapé (não modal)
  const [showSimPanel, setShowSimPanel] = useState(false);
  const [simWord, setSimWord]           = useState('');
  const [simHighlight, setSimHighlight] = useState({ nodeId: null, type: null });
  // Animação de rastreio de palavra no Modo Aula: { word, frames, idx }
  const [lessonSim, setLessonSim]       = useState(null);
  const [simReplay, setSimReplay]       = useState(0); // bump → re-roda a animação
  const [manualTrace, setManualTrace]   = useState(null); // { word, step, key } — ▶ sob demanda (lousa interativa)

  // ── Lógica de grafo (validação, mutações de nós/setas, dados de exibição) ──
  const {
    validateAFDSilent,
    deleteSelected,
    handleNodeLabelFocus, handleNodeLabelChange, handleNodeLabelBlur,
    handleAddSymbol, handleEditSymbol, handleEraseTransition, handleAppendCardToTransition,
    transitionLabelRefs, handleTransitionLineClick,
    displayNodes, displayTransitions, transitionRenders,
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
  });

  // ── Animação de rastreio (passos da aula com simulateWord) ─────────────────
  // Quando o passo atual tem simulateWord, percorremos a palavra no grafo
  // congelado, destacando estado a estado (amarelo → verde/vermelho no fim).
  const lessonSimWord = lessonCur?.simulateWord;
  // Trace manual (botão ▶ da lousa interativa): vale só no passo em que foi
  // disparado e tem prioridade sobre a palavra nativa daquele passo.
  const manualWord = (manualTrace && manualTrace.step === guidedLessonStep) ? manualTrace.word : undefined;
  const wordToTrace = manualWord !== undefined ? manualWord : lessonSimWord;
  useEffect(() => {
    if (guidedLessonStep === null || wordToTrace === undefined) { setLessonSim(null); return; }
    const frames = traceWord(displayNodes, displayTransitions, wordToTrace);
    if (frames.length === 0) { setLessonSim(null); return; }
    setLessonSim({ word: wordToTrace, frames, idx: 0 });
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      if (i >= frames.length) { clearInterval(id); return; }
      setLessonSim(prev => (prev ? { ...prev, idx: i } : prev));
    }, 650);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [guidedLessonStep, wordToTrace, simReplay, manualTrace]);

  // Reinicia a animação da palavra atual (botão ↺ Repetir).
  const replayLessonSim = useCallback(() => setSimReplay(k => k + 1), []);
  // Dispara o rastreio de uma palavra específica clicada na lousa (▶).
  const onTriggerManualTrace = useCallback((word) => {
    setManualTrace({ word, step: guidedLessonStep, key: Date.now() });
  }, [guidedLessonStep]);

  // Palavras já "ensinadas": apareceram como simulateWord no passo atual ou anterior.
  const unlockedWords = useMemo(() => {
    const set = new Set();
    if (guidedLessonStep === null) return set;
    for (let i = 0; i <= guidedLessonStep && i < lessonAllSteps.length; i++) {
      const w = lessonAllSteps[i]?.simulateWord;
      if (w !== undefined) set.add(w);
    }
    return set;
  }, [guidedLessonStep, lessonAllSteps]);

  // Destaque efetivo dos nós: a animação da aula tem prioridade sobre a sim manual.
  const effectiveSimHighlight = lessonSim
    ? { nodeId: lessonSim.frames[lessonSim.idx].nodeId, type: lessonSim.frames[lessonSim.idx].type }
    : simHighlight;

  // ── Telemetria: cronômetro + contadores por fase (helpers em usePhaseTelemetry) ─
  const phaseStartRef = useRef(null);          // performance.now() do início da fase
  const attemptsRef = useRef(0);               // numero_tentativas (reset no loadLevel)
  const tutorialOpensRef = useRef(0);          // aberturas de ajuda (dica + aula) na fase
  const errorSinceTutorialRef = useRef(false); // houve erro desde a última ajuda?
  const { phaseExtras, logTutorialOpen } = usePhaseTelemetry({
    modulo: 'afd-p1', nivelId: currentLevel?.id, dificuldade: LEVEL_DIFFICULTY[currentLevel?.id] ?? null,
    phaseStartRef, attemptsRef, tutorialOpensRef, errorSinceTutorialRef,
  });

  // ── Carrega fase ──────────────────────────────────────────────────────────
  const loadLevel = useCallback((level) => {
    _uidCounter = 0;
    // Telemetria: marca o início da fase, zera os contadores e registra inicio_fase.
    phaseStartRef.current = performance.now();
    attemptsRef.current = 0;
    tutorialOpensRef.current = 0;
    errorSinceTutorialRef.current = false;
    logEvent({
      tipo_evento: 'inicio_fase',
      modulo: 'afd-p1',
      nivel_id: level.id,
      dificuldade: LEVEL_DIFFICULTY[level.id] ?? null,
    });
    setCurrentLevel(level);
    setCurrentPage(1);
    setTela('JOGO');
    setNodes([]);
    setTransitions([]);
    setTestWords([]);
    setIsDrawingUnlocked(false);
    setIsSidebarOpen(false);
    setNewWord('');
    lastAttemptRef.current = null;
    setProfessorMessage('');
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

  // ── Modo forçado (ex.: Boss/Trabalho): pula o menu interno e entra direto
  // no nível indicado. Só roda uma vez ao montar — o componente é remontado
  // (key diferente) a cada troca de exercício dentro do Boss. loadLevel faz
  // >15 setState (reset completo do tabuleiro) — não dá pra virar inicializador
  // de useState sem duplicar toda a lógica de reset; supressão intencional.
  useEffect(() => {
    if (forceLevelId == null) return;
    const level = GAME_LEVELS.find(l => l.id === forceLevelId);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (level) loadLevel(level);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ── Navegação entre fases (pula fases indisponíveis) ──────────────────────
  const handlePrevLevel = useCallback(() => {
    if (!currentLevel) return;
    const idx = GAME_LEVELS.findIndex(l => l.id === currentLevel.id);
    for (let i = idx - 1; i >= 0; i--)
      if (!UNAVAILABLE_LEVELS.has(GAME_LEVELS[i].id) && !HIDDEN_LEVELS.has(GAME_LEVELS[i].id)) { loadLevel(GAME_LEVELS[i]); return; }
  }, [currentLevel, loadLevel]);

  const handleNextLevel = useCallback(() => {
    if (!currentLevel) return;
    const idx = GAME_LEVELS.findIndex(l => l.id === currentLevel.id);
    for (let i = idx + 1; i < GAME_LEVELS.length; i++)
      if (!UNAVAILABLE_LEVELS.has(GAME_LEVELS[i].id) && !HIDDEN_LEVELS.has(GAME_LEVELS[i].id)) { loadLevel(GAME_LEVELS[i]); return; }
  }, [currentLevel, loadLevel]);

  // Abre o painel lateral automaticamente ao entrar na fase FORMAL da aula.
  useEffect(() => {
    if (lessonPhase === 'FORMAL') setIsSidebarOpen(true);
  }, [lessonPhase]);

  // ── Encerrar Aula Guiada (restaura snapshot do aluno) ─────────────────────
  // isImpossibleLessonRef: marca que a aula em andamento foi a auto-aberta pelo
  // L14 (menor palavra = λ) — nesse caso, ao fechar (✓ Fechar da lousa), em vez
  // de só devolver o canvas ao aluno, encadeia direto para a tela de 1 estrela
  // ("impossível/só resolve com AP"). Níveis normais nunca setam essa ref, então
  // handleLessonFinish continua neutro para eles.
  const isImpossibleLessonRef = useRef(false);
  const handleLessonFinish = useCallback(() => {
    setGuidedLessonStep(null);
    setIsSidebarOpen(false);
    const sn = userNodesSnapshot.current ?? [];
    const st = userTransitionsSnapshot.current ?? [];
    setNodes(sn);
    setTransitions(st);
    resetHistory(sn, st);
    if (isImpossibleLessonRef.current) {
      isImpossibleLessonRef.current = false;
      setShowImpossibleScreen(true);
    }
  }, [setGuidedLessonStep, setNodes, setTransitions, resetHistory, userNodesSnapshot, userTransitionsSnapshot]);

  // ── Teste de palavra ───────────────────────────────────────────────────────
  const handleTestWord = useCallback(() => {
    if (!currentLevel) return;
    const target       = currentLevel.shortestWord;
    const lower        = newWord.toLowerCase();
    const isSpecialNull = lower === 'null' || lower === 'vazio';
    // "null"/"vazio" digitados são a forma de escrever λ (string vazia) — mesma
    // normalização já usada em APPart1/MTReconPart1, aplicada ANTES de comparar
    // tamanho/validade. target === null (L01, L = ∅) continua no branch à
    // parte: ali não existe menor palavra nenhuma, então "null"/"vazio" seguem
    // sendo o único jeito de sinalizar a resposta especial.
    const word = isSpecialNull ? '' : newWord;
    let isShortest = false, isValid = false;

    if (target === null) { if (isSpecialNull) isShortest = true; }
    else if (word.length === target.length && lvlAccepts(currentLevel, word)) isShortest = true;

    if ((currentLevel.regex || currentLevel.validate) && !(target === null && isSpecialNull))
      isValid = lvlAccepts(currentLevel, word);

    const wordDisplay = word === '' ? 'λ' : word;
    if (testWords.some(w => w.word === wordDisplay)) {
      showToast('Você já testou essa palavra!', 'info'); return;
    }
    lastAttemptRef.current = word;

    // Telemetria: registra cada tentativa nova (repetições saem no early-return acima).
    const resultado = isShortest ? 'shortest' : (isValid ? 'correct' : 'wrong');
    if (resultado === 'wrong') errorSinceTutorialRef.current = true; // "sem erro desde a ajuda" quebra
    attemptsRef.current += 1;
    logEvent({
      tipo_evento: 'tentativa',
      modulo: 'afd-p1',
      nivel_id: currentLevel.id,
      resultado,
      numero_tentativas: attemptsRef.current,
    });

    if (isShortest) {
      if (!isDrawingUnlocked) {
        updateProgress(currentLevel.id, 1, phaseExtras('descoberta_palavra'));
        if (currentLevel.impossible && currentLevel.guidedLesson?.length) {
          // L14: abre a Aula Guiada de verdade (mesmo fluxo do botão "🎓 Aula"),
          // sem deixar desenhar — ao fechar (✓ Fechar da lousa), encadeia para
          // a tela de 1 estrela via isImpossibleLessonRef (ver handleLessonFinish).
          userNodesSnapshot.current = JSON.parse(JSON.stringify(nodes));
          userTransitionsSnapshot.current = JSON.parse(JSON.stringify(transitions));
          isImpossibleLessonRef.current = true;
          setGuidedLessonStep(0);
        } else if (currentLevel.impossible || currentLevel.wordOnly) {
          setShowImpossibleScreen(true);
        } else {
        setIsDrawingUnlocked(true);
        showToast('Sucesso! Tabuleiro liberado.', 'success');
        const allowed = currentLevel.allowedCards;
        const initialCards = [
          { id: 'c0', type: 'action', action: 'toggleInitial', icon: '▶', label: 'Estado Inicial' },
          { id: 'c3', type: 'action', action: 'toggleFinal',   icon: '◎', label: 'Definir Final' },
          { id: 'c1', type: 'action', action: 'addNode',       icon: '◯', label: 'Novo Estado' },
          { id: 'c2', type: 'action', action: 'addTransition', icon: '↗', label: 'Criar Seta' },
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
  }, [currentLevel, newWord, testWords, isDrawingUnlocked, showToast, updateProgress, phaseExtras, nodes, transitions, setGuidedLessonStep, userNodesSnapshot, userTransitionsSnapshot]);

  const clearTests = useCallback(() => {
    setTestWords([]);
    setNewWord('');
  }, []);

  // ── Dica de Tamanho: mostra num toast, nunca revela a palavra em si ────────
  const handleSizeHint = useCallback(() => {
    if (lastAttemptRef.current === null) {
      showToast(buildNoAttemptHintMessage(), 'info');
      return;
    }
    showToast(buildSizeHintMessage(currentLevel?.shortestWord, lastAttemptRef.current), 'info');
    logTutorialOpen('dica_tamanho');
  }, [currentLevel, showToast, logTutorialOpen]);

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
    const isOpening = !professorMessage; // vazio → o clique vai ABRIR a dica
    setProfessorMessage(msg =>
      msg
        ? ''
        : (currentLevel?.hint || 'Dica: verifique se todos os estados têm transições para cada letra do alfabeto!')
    );
    // Telemetria: loga só na abertura (via helper unificado de "uso de ajuda").
    if (isOpening) logTutorialOpen('dica');
  }, [guidedLessonStep, currentLevel, professorMessage, logTutorialOpen]);

  const validateAFD = useCallback(() => {
    if (!validateAFDSilent(true)) {
      errorSinceTutorialRef.current = true; // validação falha quebra "sem erro desde a ajuda"
      // Telemetria: reusa validateAFDPure (gêmea pura, mesma ordem de checagens)
      // só para extrair o motivo estruturado — validateAFDSilent não é alterada.
      const { reason } = validateAFDPure({ nodes, transitions, testWords, currentLevel });
      logEvent({
        tipo_evento: 'tentativa',
        modulo: 'afd-p1',
        nivel_id: currentLevel.id,
        resultado: 'validacao_falhou',
        tipo_erro: reason ?? null,
        numero_tentativas: attemptsRef.current,
      });
      return;
    }
    updateProgress(currentLevel.id, 2, phaseExtras('validacao'));
    showToast('Autômato Validado! Preencha a Tabela Formal.', 'success');
    setIsSidebarOpen(true);
  }, [validateAFDSilent, currentLevel, updateProgress, showToast, phaseExtras, nodes, transitions, testWords]);

  const handleFormalSuccess = useCallback(() => {
    updateProgress(currentLevel.id, 3, phaseExtras('tabela_formal'));
    showToast('Fase Concluída com Perfeição! 3ª Estrela conquistada!', 'success');
    setShowVictoryScreen(true);
  }, [currentLevel, updateProgress, showToast, phaseExtras]);

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
    if (!isDrawingUnlocked || !innerCanvasRef.current) return;
    const rect = innerCanvasRef.current.getBoundingClientRect();
    if (clientX < rect.left || clientX > rect.right || clientY < rect.top || clientY > rect.bottom) return;
    const rawX = ((clientX - rect.left) / rect.width)  * INNER_W;
    const rawY = ((clientY - rect.top)  / rect.height) * INNER_H;
    const ix = Math.max(5, Math.min(INNER_W - 5, rawX));
    const iy = Math.max(5, Math.min(INNER_H - 5, rawY));
    let num = nodes.length;
    const usedLabels = new Set(nodes.map(n => n.label));
    while (usedLabels.has(`q${num}`)) num++;
    const newLabel = `q${num}`;
    const newNodes = [...nodes, { uid: genUid(), id: newLabel, label: newLabel, x: ix, y: iy, isInitial: false, isFinal: false }];
    setNodes(newNodes);
    recordHistory(newNodes, transitions);
  }, [isDrawingUnlocked, nodes, transitions, recordHistory]);

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
        label={forceLevelLabel ?? currentLevel?.label}
        progress={progress}
        diffColor={forceLabelColor ?? DIFF_COLOR[LEVEL_DIFFICULTY[currentLevel?.id]] ?? '#fff'}
        starsMax={currentLevel?.impossible || currentLevel?.wordOnly ? 1 : 3}
        isFirst={forceLevelId != null ? !onForcedPrev : GAME_LEVELS.findIndex(l => l.id === currentLevel?.id) === 0}
        isLast={forceLevelId != null ? !onForcedNext : GAME_LEVELS.findIndex(l => l.id === currentLevel?.id) === GAME_LEVELS.length - 1}
        toggleSidebar={toggleSidebar}
        onBack={forceLevelId != null ? onBack : () => setTela('MENU')}
        onPrevLevel={forceLevelId != null ? onForcedPrev : handlePrevLevel}
        onNextLevel={forceLevelId != null ? onForcedNext : handleNextLevel}
        onStartLesson={() => {
          userNodesSnapshot.current = JSON.parse(JSON.stringify(nodes));
          userTransitionsSnapshot.current = JSON.parse(JSON.stringify(transitions));
          setGuidedLessonStep(0);
          logTutorialOpen('aula_guiada'); // mesma métrica de "uso de ajuda" da dica
        }}
        lessonActive={lessonActive}
        onCloseLesson={handleLessonFinish}
        showSizeHint={!isDrawingUnlocked}
        onSizeHint={handleSizeHint}
      />

      <div className="workspace">
        {/* ── Sidebar Esquerda ── */}
        <aside className={`formal-panel ${isSidebarOpen ? 'open' : ''}`}>
          <FormalDescriptionModal
            isOpen={isSidebarOpen}
            onClose={() => { setIsSidebarOpen(false); }}
            nodes={nodes}
            transitions={transitions}
            alphabet={currentLevel?.alphabet}
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

        {/* Coluna do canvas: barra de palavras testadas + canvas, lado a lado
            com o painel direito (que ocupa a altura inteira, começando do topo). */}
        <div className="canvas-column">
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

        {/* ── Canvas ── */}
        <CanvasArea
          canvasRef={canvasRef}
          innerCanvasRef={innerCanvasRef}
          viewportRef={viewportRef}
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
          simHighlight={effectiveSimHighlight}
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
          lessonActive={lessonActive}
        />
        </div>

        {/* ── Painel Direito: TestPanel normal ou BlackboardPanel (Aula V2) ── */}
        {isNewLessonUI ? (
          <BlackboardPanel
            boardWords={currentLevel.boardWords}
            rejectedWords={currentLevel.rejectedWords}
            step={guidedLessonStep}
            steps={lessonAllSteps}
            phase={lessonPhase}
            sim={lessonSim}
            levelId={currentLevel?.id}
            unlockedWords={unlockedWords}
            onReplaySim={replayLessonSim}
            onTriggerManualTrace={onTriggerManualTrace}
            atGraphEnd={lessonAtGraphEnd}
            onGoFormal={() => { setManualTrace(null); lessonGoFormal(); }}
            onDoGraph={handleLessonFinish}
            onNext={() => { setManualTrace(null); setGuidedLessonStep(s => Math.min(s + 1, lessonAllSteps.length - 1)); }}
            onPrev={() => { setManualTrace(null); setGuidedLessonStep(s => Math.max(s - 1, 0)); }}
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
            clearTests={clearTests}
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
        historyLen={historyLen}
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
          nextLevel={forceLevelId != null ? null : undefined}
          message={currentLevel?.wordOnly
            ? (currentLevel?.successMsg || 'Muito bem! Fase concluída.')
            : 'Este exercício é impossível de resolver com AFD! Com AP nós vamos resolvê-lo! 🚫🔄'}
          balloon={{ width: 320, height: 220, marginTop: -150 }}
          textStyle={{ padding: '20px 38px 52px', fontSize: 15 }}
          nextPrefix="Entendido! Próxima: "
          onMenu={() => { setShowImpossibleScreen(false); forceLevelId != null ? onBack() : setTela('MENU'); }}
          onNext={next => { setShowImpossibleScreen(false); loadLevel(next); }}
        />
      )}

      {/* ── Tela de Vitória ── */}
      {showVictoryScreen && (
        <EndScreen
          currentLevelId={currentLevel?.id}
          nextLevel={forceLevelId != null ? null : undefined}
          message={currentLevel?.successMsg || 'Parabéns, você dominou esta linguagem!'}
          balloon={{ width: 300, height: 210, marginTop: -140 }}
          textStyle={{ padding: '18px 36px 48px', fontSize: 17 }}
          nextPrefix="Próxima: "
          onMenu={() => { setShowVictoryScreen(false); forceLevelId != null ? onBack() : setTela('MENU'); }}
          onNext={next => { setShowVictoryScreen(false); loadLevel(next); }}
        />
      )}
    </div>
  );
}
