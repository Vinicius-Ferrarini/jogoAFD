// AutoQuest — App.jsx v3.0
// v3.0: Undo/Redo, Simulação no Rodapé, Cores Zoom Corrigidas, Validação Duplicata Aprimorada
import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import './AFDPart1.css';
import { GAME_LEVELS } from '../../levels';
import FormalDescriptionModal from './FormalDescriptionModal';
import imgMaurilioApontando  from '../../assets/maurilio2_apontando_pro_lado.png';
import imgMaurilioSerio      from '../../assets/maurilio1_serio.png';
import imgMaurilioExplicando from '../../assets/maurilio3_explicando.png';
import imgBalaoFala          from '../../assets/balao_fala_redondo.png';

// ─── Utilitário: gera um UID curto ───────────────────────────────────────────
let _uidCounter = 0;
const genUid = () => `_n${++_uidCounter}_${Math.random().toString(36).slice(2, 6)}`;

// ─── Modal de Simulação Passo a Passo (adaptado para rodapé) ────────────────
function SimPanel({ word, nodes, transitions, onClose, onHighlightNode }) {
  const initState = nodes.find(n => n.isInitial)?.id ?? null;

  const buildSteps = () => {
    const steps = [];
    const w = (word === 'λ' || word === 'null' || word === 'vazio') ? '' : word;

    if (!initState) {
      steps.push({ type: 'error', icon: '❌', text: 'Nenhum estado inicial definido!', charIdx: -1 });
      return steps;
    }

    const initLabel = nodes.find(n => n.id === initState)?.label ?? initState;
    steps.push({ type: 'info', icon: '▶', text: `Início no estado "${initLabel}"`, state: initState, charIdx: -1 });

    let current = initState;
    for (let i = 0; i < w.length; i++) {
      const ch = w[i];
      const tr = transitions.find(t => t.from === current && t.symbol === ch);
      if (!tr) {
        const curLabel = nodes.find(n => n.id === current)?.label ?? current;
        steps.push({ type: 'error', icon: '❌', text: `"${curLabel}": sem transição para '${ch}'. Palavra REJEITADA.`, state: current, charIdx: i });
        return steps;
      }
      const fromLabel = nodes.find(n => n.id === tr.from)?.label ?? tr.from;
      const toLabel   = nodes.find(n => n.id === tr.to)?.label   ?? tr.to;
      steps.push({ type: 'ok', icon: '➡', text: `"${fromLabel}" —[${ch}]→ "${toLabel}"`, state: tr.to, charIdx: i });
      current = tr.to;
    }

    const finalNode  = nodes.find(n => n.id === current);
    const finalLabel = finalNode?.label ?? current;
    if (finalNode?.isFinal) {
      steps.push({ type: 'done', icon: '✅', text: `"${finalLabel}" é final. Palavra ACEITA! 🎉`, state: current, charIdx: w.length });
    } else {
      steps.push({ type: 'error', icon: '❌', text: `"${finalLabel}" não é final. Palavra REJEITADA.`, state: current, charIdx: w.length });
    }
    return steps;
  };

  const steps = useMemo(buildSteps, []);
  const [stepIdx, setStepIdx] = useState(0);
  const currentStep = steps[stepIdx];
  const w = (word === 'λ' || word === 'null' || word === 'vazio') ? '' : word;

  useEffect(() => {
    onHighlightNode(currentStep?.state ?? null, currentStep?.type ?? null);
    return () => onHighlightNode(null, null);
  }, [stepIdx, currentStep, onHighlightNode]);

  // Auto-fecha ao terminar
  useEffect(() => {
    if (stepIdx === steps.length - 1) {
      const timer = setTimeout(() => onClose(), 4000);
      return () => clearTimeout(timer);
    }
  }, [stepIdx, steps.length, onClose]);

  return (
    <div className="sim-panel-container">
      <div className="sim-panel-header">
        <h3>🔬 Simulação: {w.length === 0 ? 'λ' : w}</h3>
        <button className="sim-panel-close" onClick={onClose}>✕</button>
      </div>

      <div className="sim-panel-content">
        <div className="sim-word-display">
          {w.length === 0
            ? <span className="sim-char" style={{ letterSpacing: 0 }}>λ (vazia)</span>
            : w.split('').map((ch, i) => {
                const ci = currentStep?.charIdx ?? -1;
                let cls = 'sim-char';
                if (i === ci) cls += ' active';
                else if (i < ci) cls += ' done-ok';
                return <span key={i} className={cls}>{ch}</span>;
              })
          }
        </div>

        <div className="sim-step-list">
          {steps.slice(0, stepIdx + 1).map((s, i) => (
            <div key={i} className={`sim-step ${s.type}`}>
              <span className="sim-step-icon">{s.icon}</span>
              <span>{s.text}</span>
            </div>
          ))}
        </div>

        <div className="sim-controls">
          <button className="sim-nav-btn" onClick={() => setStepIdx(i => Math.max(0, i - 1))} disabled={stepIdx === 0}>◀</button>
          <span className="sim-progress">{stepIdx + 1} / {steps.length}</span>
          <button className="sim-nav-btn" onClick={() => setStepIdx(i => Math.min(steps.length - 1, i + 1))} disabled={stepIdx === steps.length - 1}>▶</button>
        </div>
      </div>
    </div>
  );
}

// ─── App Principal ────────────────────────────────────────────────────────────
export default function App() {

  // ── Progresso persistente ──────────────────────────────────────────────────
  const getProgress = () => {
    try { return JSON.parse(localStorage.getItem('autoquest_progress') || '{}'); }
    catch { return {}; }
  };
  const [progress, setProgress] = useState(getProgress);

  const updateStars = useCallback((levelId, stars) => {
    setProgress(prev => {
      const cur = prev[levelId]?.stars || 0;
      if (stars <= cur) return prev;
      const next = { ...prev, [levelId]: { stars } };
      localStorage.setItem('autoquest_progress', JSON.stringify(next));
      return next;
    });
  }, []);

  const renderStars = (count) => (
    <span style={{ display: 'flex', gap: '4px', justifyContent: 'center' }}>
      {[1,2,3].map(i => <span key={i} style={{ color: i <= count ? '#fbbf24' : '#4b5563' }}>★</span>)}
    </span>
  );

  // ── Toast ──────────────────────────────────────────────────────────────────
  const [toastData, setToastData] = useState({ show: false, message: '', type: 'info' });
  const toastRef = useRef(null);
  const showToast = useCallback((message, type = 'info') => {
    setToastData({ show: true, message, type });
    if (toastRef.current) clearTimeout(toastRef.current);
    toastRef.current = setTimeout(() => setToastData(d => ({ ...d, show: false })), 4000);
  }, []);

  // ── UNDO/REDO ──────────────────────────────────────────────────────────────
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const recordHistory = useCallback((newNodes, newTransitions) => {
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push({ nodes: JSON.parse(JSON.stringify(newNodes)), transitions: JSON.parse(JSON.stringify(newTransitions)) });
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  }, [history, historyIndex]);

  const undo = useCallback(() => {
    if (historyIndex > 0) {
      const newIdx = historyIndex - 1;
      setHistoryIndex(newIdx);
      setNodes(history[newIdx].nodes);
      setTransitions(history[newIdx].transitions);
      showToast('↶ Desfeito', 'info');
    }
  }, [historyIndex, history, showToast]);

  const redo = useCallback(() => {
    if (historyIndex < history.length - 1) {
      const newIdx = historyIndex + 1;
      setHistoryIndex(newIdx);
      setNodes(history[newIdx].nodes);
      setTransitions(history[newIdx].transitions);
      showToast('↷ Refeito', 'info');
    }
  }, [historyIndex, history, showToast]);

  // Atalhos de teclado: Ctrl+Z, Ctrl+Y
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'z' && !e.shiftKey) {
        e.preventDefault();
        undo();
      }
      if ((e.ctrlKey || e.metaKey) && (e.key === 'y' || (e.key === 'z' && e.shiftKey))) {
        e.preventDefault();
        redo();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [undo, redo]);

  // ── Estado geral ───────────────────────────────────────────────────────────
  const [tela, setTela]             = useState('HOME');
  const [currentPage, setCurrentPage] = useState(1);
  const [currentLevel, setCurrentLevel] = useState(null);
  const [isDrawingUnlocked, setIsDrawingUnlocked] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [nodes, setNodes]           = useState([]);
  const [transitions, setTransitions] = useState([]);
  const [testWords, setTestWords]   = useState([]);
  const [newWord, setNewWord]       = useState('');
  const [drawnCards, setDrawnCards] = useState([]);
  const [selectedSymbolCard, setSelectedSymbolCard] = useState(null);

  const [interactionMode, setInteractionMode] = useState('IDLE');
  const [connectingSource, setConnectingSource] = useState(null);

  const [zoom, setZoom]     = useState(1);
  const [pan, setPan]       = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);

  const [selectionBox, setSelectionBox]   = useState(null);
  const [selectedNodes, setSelectedNodes] = useState([]);
  const [dragInfo, setDragInfo] = useState({ isDragging: false, initialNodes: [], startX: 0, startY: 0 });

  const canvasRef = useRef(null);
  const [highlightedError, setHighlightedError] = useState(null);
  const [professorMessage, setProfessorMessage] = useState('');
  const speechRef = useRef(null);
  const [showVictoryScreen, setShowVictoryScreen] = useState(false);
  const [canvasSize, setCanvasSize] = useState({ w: 800, h: 600 });

  // Simulação no rodapé (não modal)
  const [showSimPanel, setShowSimPanel] = useState(false);
  const [simWord, setSimWord]           = useState('');
  const [simHighlight, setSimHighlight] = useState({ nodeId: null, type: null });

  const triggerProfessorSpeech = useCallback((msg, duration = 5000) => {
    setProfessorMessage(msg);
    if (speechRef.current) clearTimeout(speechRef.current);
    speechRef.current = setTimeout(() => setProfessorMessage(''), duration);
  }, []);

  // ── Refs para closures do wheel handler ────────────────────────────────────
  const isUnlockedRef = useRef(false);
  useEffect(() => { isUnlockedRef.current = isDrawingUnlocked; }, [isDrawingUnlocked]);

  // ── Wheel (non-passive) + resize ───────────────────────────────────────────
  useEffect(() => {
    if (tela !== 'JOGO') return;
    const update = () => {
      if (canvasRef.current)
        setCanvasSize({ w: canvasRef.current.clientWidth, h: canvasRef.current.clientHeight });
    };
    window.addEventListener('resize', update);
    const tid = setTimeout(update, 50);

    const el = canvasRef.current;
    const onWheel = (e) => {
      if (!isUnlockedRef.current) return;
      e.preventDefault();
      if (e.ctrlKey || e.metaKey) {
        const rect = el.getBoundingClientRect();
        const mx = e.clientX - rect.left, my = e.clientY - rect.top;
        const delta = e.deltaY * -0.002;
        setZoom(z => {
          const nz = Math.max(0.15, Math.min(6, z + delta * z));
          setPan(p => ({ x: p.x - mx * (nz - z) / z, y: p.y - my * (nz - z) / z }));
          return nz;
        });
      } else {
        setPan(p => ({ x: p.x - e.deltaX, y: p.y - e.deltaY }));
      }
    };
    if (el) el.addEventListener('wheel', onWheel, { passive: false });

    return () => {
      window.removeEventListener('resize', update);
      clearTimeout(tid);
      if (el) el.removeEventListener('wheel', onWheel);
    };
  }, [tela, isSidebarOpen]);

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
    setProfessorMessage('');
    setZoom(1);
    setPan({ x: 0, y: 0 });
    setSelectedNodes([]);
    setShowSimPanel(false);
    setSimHighlight({ nodeId: null, type: null });
    setHistory([]);
    setHistoryIndex(-1);
  }, []);

  // ── Teste de palavra ───────────────────────────────────────────────────────
  const handleTestWord = useCallback(() => {
    if (!currentLevel) return;
    const target       = currentLevel.shortestWord;
    const lower        = newWord.toLowerCase();
    const isSpecialNull = lower === 'null' || lower === 'vazio';
    let isShortest = false, isValid = false;

    if (target === null) { if (isSpecialNull) isShortest = true; }
    else if (newWord === target) isShortest = true;

    if (currentLevel.regex && !(target === null && isSpecialNull))
      isValid = currentLevel.regex.test(newWord);

    const wordDisplay = newWord === '' ? 'λ' : newWord;
    if (testWords.some(w => w.word === wordDisplay)) {
      showToast('Você já testou essa palavra!', 'info'); return;
    }

    if (isShortest) {
      if (!isDrawingUnlocked) {
        setIsDrawingUnlocked(true);
        updateStars(currentLevel.id, 1);
        showToast('Sucesso! Tabuleiro liberado.', 'success');
        const initialCards = [
          { id: 'c0', type: 'action', action: 'toggleInitial', icon: '▶', label: 'Estado Inicial' },
          { id: 'c1', type: 'action', action: 'addNode',       icon: '◯', label: 'Novo Estado' },
          { id: 'c2', type: 'action', action: 'addTransition', icon: '↗', label: 'Criar Seta' },
          { id: 'c3', type: 'action', action: 'toggleFinal',   icon: '◎', label: 'Definir Final' },
          { id: 'c4', type: 'action', action: 'erase',         icon: '🗑', label: 'Apagar' },
        ];
        const symbolCards = (currentLevel.alphabet || []).map((sym, i) => ({
          id: `s${i}`, type: 'symbol', symbol: sym, label: `Símbolo ${sym}`,
        }));
        setDrawnCards([...initialCards, { type: 'separator', id: 'sep1' }, ...symbolCards]);
      }
      setTestWords(prev => [{ word: wordDisplay, status: 'shortest' }, ...prev]);
    } else if (isValid) {
      setTestWords(prev => [{ word: wordDisplay, status: 'correct' }, ...prev]);
    } else {
      setTestWords(prev => [{ word: wordDisplay, status: 'wrong' }, ...prev]);
    }
    setNewWord('');
  }, [currentLevel, newWord, testWords, isDrawingUnlocked, showToast, updateStars]);

  // ── Helpers de modo ───────────────────────────────────────────────────────
  const resetMode = () => { setConnectingSource(null); setSelectedSymbolCard(null); setSelectedNodes([]); };
  const setInitialMode       = () => { if (!isDrawingUnlocked) return; setInteractionMode('TOGGLE_INITIAL'); resetMode(); };
  const addNodeMode          = () => { if (!isDrawingUnlocked) return; setInteractionMode('ADD_NODE');        resetMode(); };
  const addTransitionMode    = () => { if (!isDrawingUnlocked) return; setInteractionMode('CONNECTING');      resetMode(); };
  const toggleFinalStateMode = () => { if (!isDrawingUnlocked) return; setInteractionMode('TOGGLE_FINAL');    resetMode(); };
  const setEraserMode        = () => { if (!isDrawingUnlocked) return; setInteractionMode('ERASE');           resetMode(); };
  const toggleSidebar        = () => setIsSidebarOpen(o => !o);

  // ── Validação do grafo ─────────────────────────────────────────────────────
  const validateAFDSilent = useCallback((showErrors = true) => {
    if (!nodes.some(n => n.isInitial)) {
      if (showErrors) {
        setHighlightedError('toggleInitial');
        setTimeout(() => setHighlightedError(null), 3000);
        showToast('Erro Crítico: Defina um Estado Inicial (▶)!', 'error');
      }
      return false;
    }
    if (!nodes.some(n => n.isFinal)) {
      if (showErrors) {
        setHighlightedError('toggleFinal');
        setTimeout(() => setHighlightedError(null), 3000);
        showToast('Erro: Precisa de pelo menos um Estado Final (◎)!', 'error');
      }
      return false;
    }
    const emptyIdx = transitions.findIndex(t => t.symbol === '');
    if (emptyIdx !== -1) {
      if (showErrors) {
        setHighlightedError(`transition-${emptyIdx}`);
        setTimeout(() => setHighlightedError(null), 3000);
        showToast('Setas em branco! Preencha todas as transições.', 'error');
      }
      return false;
    }
    for (const node of nodes) {
      const syms = transitions.filter(t => t.from === node.id).map(t => t.symbol);
      if (syms.length !== new Set(syms).size) {
        if (showErrors) showToast(`Não determinístico! "${node.id}" tem setas duplicadas.`, 'error');
        return false;
      }
    }

    const simulateDFA = (word) => {
      let cur = nodes.find(n => n.isInitial)?.id;
      if (!cur) return false;
      const w = (word === 'λ' || word === 'null' || word === 'vazio') ? '' : word;
      for (const ch of w) {
        const tr = transitions.find(t => t.from === cur && t.symbol === ch);
        if (!tr) return false;
        cur = tr.to;
      }
      return !!nodes.find(n => n.id === cur)?.isFinal;
    };

    for (const tw of testWords) {
      const accepted     = simulateDFA(tw.word);
      const shouldAccept = tw.status === 'shortest' || tw.status === 'correct';
      if (accepted !== shouldAccept) {
        if (showErrors)
          showToast(`Grafo falhou na palavra '${tw.word}'. Deveria ser ${shouldAccept ? 'aceita' : 'rejeitada'}.`, 'error');
        return false;
      }
    }
    return true;
  }, [nodes, transitions, testWords, showToast]);

  const validateAFD = useCallback(() => {
    if (!validateAFDSilent(true)) return;
    updateStars(currentLevel.id, 2);
    showToast('Autômato Validado! Preencha a Tabela Formal.', 'success');
    setIsSidebarOpen(true);
  }, [validateAFDSilent, currentLevel, updateStars, showToast]);

  const handleFormalSuccess = useCallback(() => {
    updateStars(currentLevel.id, 3);
    showToast('Fase Concluída com Perfeição! 3ª Estrela conquistada!', 'success');
    setShowVictoryScreen(true);
  }, [currentLevel, updateStars, showToast]);

  // ── Simulação no Rodapé ────────────────────────────────────────────────────
  const openSimulation = useCallback(() => {
    if (!isDrawingUnlocked) { showToast('Monte o autômato primeiro!', 'info'); return; }
    if (!nodes.some(n => n.isInitial)) { showToast('Defina o estado inicial antes.', 'error'); return; }
    if (!newWord.trim()) { showToast('Digite uma palavra no campo para simular.', 'info'); return; }
    setSimWord(newWord);
    setShowSimPanel(true);
  }, [isDrawingUnlocked, nodes, newWord, showToast]);

  // ── Pointer: canvas ───────────────────────────────────────────────────────
  const handlePointerDownCanvas = useCallback((e) => {
    if (!isDrawingUnlocked) return;

    if (e.button === 1 || e.shiftKey) {
      setIsPanning(true);
      setDragInfo({ isDragging: false, startX: e.clientX, startY: e.clientY });
      e.target.setPointerCapture(e.pointerId);
      return;
    }

    if (interactionMode === 'ADD_NODE') {
      const rect  = canvasRef.current.getBoundingClientRect();
      const ix    = ((e.clientX - rect.left - pan.x) / zoom / rect.width)  * 100;
      const iy    = ((e.clientY - rect.top  - pan.y) / zoom / rect.height) * 100;
      let num = nodes.length;
      const usedLabels = new Set(nodes.map(n => n.label));
      while (usedLabels.has(`q${num}`)) num++;
      const newLabel = `q${num}`;
      const newNodes = [...nodes, { uid: genUid(), id: newLabel, label: newLabel, x: ix, y: iy, isInitial: false, isFinal: false }];
      setNodes(newNodes);
      recordHistory(newNodes, transitions);
      setInteractionMode('IDLE');
      return;
    }

    if (interactionMode === 'IDLE' && e.button === 0) {
      const rect = canvasRef.current.getBoundingClientRect();
      const ix = (e.clientX - rect.left - pan.x) / zoom;
      const iy = (e.clientY - rect.top  - pan.y) / zoom;
      setSelectionBox({ startX: ix, startY: iy, currentX: ix, currentY: iy });
      if (!e.ctrlKey) setSelectedNodes([]);
      e.target.setPointerCapture(e.pointerId);
    } else {
      setSelectedNodes([]);
    }
  }, [isDrawingUnlocked, interactionMode, pan, zoom, nodes, transitions, recordHistory]);

  // ── Pointer: nó ───────────────────────────────────────────────────────────
  const handlePointerDownNode = useCallback((e, uid) => {
    if (!isDrawingUnlocked) return;
    e.stopPropagation();

    if (interactionMode === 'ERASE') {
      const newNodes = nodes.filter(n => n.uid !== uid);
      const newTrans = transitions.filter(t => t.from !== uid && t.to !== uid);
      setNodes(newNodes);
      setTransitions(newTrans);
      recordHistory(newNodes, newTrans);
      return;
    }
    if (interactionMode === 'TOGGLE_INITIAL') {
      const newNodes = nodes.map(n => ({ ...n, isInitial: n.uid === uid }));
      setNodes(newNodes);
      recordHistory(newNodes, transitions);
      setInteractionMode('IDLE'); return;
    }
    if (interactionMode === 'TOGGLE_FINAL') {
      const newNodes = nodes.map(n => n.uid === uid ? { ...n, isFinal: !n.isFinal } : n);
      setNodes(newNodes);
      recordHistory(newNodes, transitions);
      setInteractionMode('IDLE'); return;
    }
    if (interactionMode === 'CONNECTING') {
      if (!connectingSource) {
        setConnectingSource(uid);
      } else {
        const srcNode = nodes.find(n => n.uid === connectingSource);
        const tgtNode = nodes.find(n => n.uid === uid);
        const newTrans = [...transitions, { from: srcNode.id, symbol: '', to: tgtNode.id }];
        setTransitions(newTrans);
        recordHistory(nodes, newTrans);
        setInteractionMode('IDLE');
        setConnectingSource(null);
      }
      return;
    }

    if (interactionMode === 'IDLE') {
      const cur = selectedNodes.includes(uid) ? selectedNodes : (e.ctrlKey ? [...selectedNodes, uid] : [uid]);
      setSelectedNodes(cur);
      const rect = canvasRef.current.getBoundingClientRect();
      setDragInfo({
        isDragging: true,
        initialNodes: JSON.parse(JSON.stringify(nodes)),
        startX: (e.clientX - rect.left - pan.x) / zoom,
        startY: (e.clientY - rect.top  - pan.y) / zoom,
      });
      e.target.setPointerCapture(e.pointerId);
    }
  }, [isDrawingUnlocked, interactionMode, connectingSource, selectedNodes, nodes, transitions, recordHistory]);

  // ── Pointer: move ─────────────────────────────────────────────────────────
  const handlePointerMove = useCallback((e) => {
    if (!isDrawingUnlocked) return;

    if (isPanning) {
      setPan(p => ({ x: p.x + e.movementX, y: p.y + e.movementY }));
      return;
    }

    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    const ix = (e.clientX - rect.left - pan.x) / zoom;
    const iy = (e.clientY - rect.top  - pan.y) / zoom;

    if (selectionBox) {
      setSelectionBox(s => ({ ...s, currentX: ix, currentY: iy }));
    } else if (dragInfo.isDragging) {
      const dxPct = ((ix - dragInfo.startX) / rect.width)  * 100;
      const dyPct = ((iy - dragInfo.startY) / rect.height) * 100;
      setNodes(prev => prev.map(n => {
        if (!selectedNodes.includes(n.uid)) return n;
        const init = dragInfo.initialNodes.find(i => i.uid === n.uid);
        if (!init) return n;
        return { ...n, x: init.x + dxPct, y: init.y + dyPct };
      }));
    }
  }, [isDrawingUnlocked, isPanning, pan, zoom, selectionBox, dragInfo, selectedNodes]);

  // ── Pointer: up ───────────────────────────────────────────────────────────
  const handlePointerUp = useCallback((e) => {
    try { e.target.releasePointerCapture(e.pointerId); } catch (_) {}
    if (isPanning) setIsPanning(false);
    
    if (dragInfo.isDragging) {
      recordHistory(nodes, transitions);
      setDragInfo({ isDragging: false, initialNodes: [], startX: 0, startY: 0 });
    }

    if (selectionBox) {
      const rect = canvasRef.current?.getBoundingClientRect();
      if (!rect) { setSelectionBox(null); return; }
      const minX = Math.min(selectionBox.startX, selectionBox.currentX);
      const maxX = Math.max(selectionBox.startX, selectionBox.currentX);
      const minY = Math.min(selectionBox.startY, selectionBox.currentY);
      const maxY = Math.max(selectionBox.startY, selectionBox.currentY);
      const minXP = (minX / rect.width)  * 100, maxXP = (maxX / rect.width)  * 100;
      const minYP = (minY / rect.height) * 100, maxYP = (maxY / rect.height) * 100;
      const sel = nodes.filter(n => n.x >= minXP && n.x <= maxXP && n.y >= minYP && n.y <= maxYP).map(n => n.uid);
      setSelectedNodes(e.ctrlKey ? [...new Set([...selectedNodes, ...sel])] : sel);
      setSelectionBox(null);
    }
  }, [isPanning, dragInfo, selectionBox, nodes, transitions, selectedNodes, recordHistory]);

  // ── Renomear nó — previne duplicatas ──────────────────────────────────────
  const [editingNodeLabel, setEditingNodeLabel] = useState(null);

  const handleNodeLabelFocus = useCallback((uid, currentLabel) => {
    setEditingNodeLabel({ uid, oldLabel: currentLabel });
  }, []);

  const handleNodeLabelChange = useCallback((uid, value) => {
    setNodes(prev => prev.map(n => n.uid === uid ? { ...n, label: value, id: value } : n));
  }, []);

  const handleNodeLabelBlur = useCallback((uid, currentLabel) => {
    const trimmed = currentLabel.trim();
    const oldId = editingNodeLabel?.oldLabel;

    // Se vazio, reverte
    if (!trimmed) {
      const old = oldId ?? `q${uid}`;
      setNodes(prev => prev.map(n => n.uid === uid ? { ...n, label: old, id: old } : n));
      setEditingNodeLabel(null);
      return;
    }

    // Verifica duplicata COM OUTRO NÓ (não consigo mesmo)
    const isDuplicate = nodes.some(n => n.uid !== uid && (n.label === trimmed || n.id === trimmed));
    if (isDuplicate) {
      const old = oldId ?? `q${uid}`;
      showToast(`⚠️ Já existe um estado chamado "${trimmed}". Revertendo para "${old}".`, 'error');
      setNodes(prev => prev.map(n => n.uid === uid ? { ...n, label: old, id: old } : n));
      setEditingNodeLabel(null);
      return;
    }

    // Salva renomeação
    const newNodes = nodes.map(n => n.uid === uid ? { ...n, label: trimmed, id: trimmed } : n);

    // Atualiza transições que apontam para/de este nó
    const newTrans = transitions.map(t => ({
      ...t,
      from: t.from === oldId ? trimmed : t.from,
      to: t.to === oldId ? trimmed : t.to,
    }));

    setNodes(newNodes);
    setTransitions(newTrans);
    recordHistory(newNodes, newTrans);
    setEditingNodeLabel(null);
  }, [nodes, editingNodeLabel, showToast, transitions, recordHistory]);

  // ── Símbolo nas transições ────────────────────────────────────────────────
  const handleSymbolChange = useCallback((idx, val) => {
    const newTrans = [...transitions];
    newTrans[idx] = { ...newTrans[idx], symbol: val };
    setTransitions(newTrans);
    recordHistory(nodes, newTrans);
  }, [transitions, nodes, recordHistory]);

  const handleTransitionClick = useCallback((idx) => {
    if (!isDrawingUnlocked) return;
    if (interactionMode === 'ERASE') {
      const newTrans = transitions.filter((_, i) => i !== idx);
      setTransitions(newTrans);
      recordHistory(nodes, newTrans);
    } else if (selectedSymbolCard) {
      const newTrans = [...transitions];
      newTrans[idx] = { ...newTrans[idx], symbol: selectedSymbolCard };
      setTransitions(newTrans);
      recordHistory(nodes, newTrans);
      setSelectedSymbolCard(null);
    }
  }, [isDrawingUnlocked, interactionMode, selectedSymbolCard, transitions, nodes, recordHistory]);

  // ── Renderização de transições (memoizada) ────────────────────────────────
  const transitionRenders = useMemo(() => {
    return transitions.map((t, idx) => {
      const src = nodes.find(n => n.id === t.from);
      const tgt = nodes.find(n => n.id === t.to);
      if (!src || !tgt) return null;

      const sw = canvasSize.w, sh = canvasSize.h;
      const sx = (src.x * sw) / 100, sy = (src.y * sh) / 100;
      const tx = (tgt.x * sw) / 100, ty = (tgt.y * sh) / 100;
      const bidir = src.uid !== tgt.uid && transitions.some(o => o.from === tgt.id && o.to === src.id);

      let pathD = '', lx = 0, ly = 0;
      if (src.uid !== tgt.uid) {
        if (bidir) {
          const dx = tx - sx, dy = ty - sy, dist = Math.sqrt(dx*dx + dy*dy);
          const nx = dist ? -dy/dist : 0, ny = dist ? dx/dist : 0;
          const off = 40;
          const cx = (sx+tx)/2 + nx*off, cy = (sy+ty)/2 + ny*off;
          pathD = `M ${sx} ${sy} Q ${cx} ${cy} ${tx} ${ty}`;
          lx = ((sx+tx)/2 + cx)/2 + nx*10;
          ly = ((sy+ty)/2 + cy)/2 + ny*10;
        } else {
          pathD = `M ${sx} ${sy} L ${tx} ${ty}`;
          lx = (sx+tx)/2; ly = (sy+ty)/2;
        }
      }
      return { ...t, idx, src, tgt, pathD, labelPxX: lx, labelPxY: ly, bidir };
    }).filter(Boolean);
  }, [transitions, nodes, canvasSize]);

  // ══════════════════════════════════════════════════════════════
  // TELA HOME
  // ══════════════════════════════════════════════════════════════
  if (tela === 'HOME') return (
    <div className="menu-screen">
      <h1 className="menu-title">AutoQuest</h1>
      <button className="menu-btn primary" onClick={() => setTela('MENU')} style={{ marginBottom: 15 }}>Fases AFD</button>
      <button className="menu-btn" onClick={() => showToast('A Parte 2 chega em breve!', 'info')}>AFD Parte 2</button>
      {toastData.show && <div className={`toast-notification ${toastData.type}`}>{toastData.message}</div>}
    </div>
  );

  // ══════════════════════════════════════════════════════════════
  // TELA MENU (FASES)
  // ══════════════════════════════════════════════════════════════
  if (tela === 'MENU') {
    const maxStars    = GAME_LEVELS.length * 3;
    const totalStars  = GAME_LEVELS.reduce((a, l) => a + (progress[l.id]?.stars || 0), 0);
    const perPage     = 20;
    const totalPages  = Math.ceil(GAME_LEVELS.length / perPage);
    const pageItems   = GAME_LEVELS.slice((currentPage-1)*perPage, currentPage*perPage);
    return (
      <div className="menu-screen" style={{ justifyContent: 'flex-start', paddingTop: 40 }}>
        <h1 className="menu-title" style={{ marginBottom: 10 }}>AutoQuest</h1>
        <div style={{ marginBottom: 30, fontWeight: 'bold', fontSize: 18 }}>
          Progresso: {maxStars > 0 ? Math.round((totalStars/maxStars)*100) : 0}% ({totalStars}/{maxStars} ★)
        </div>
        <div className="levels-grid">
          {pageItems.map(lvl => (
            <button key={lvl.id} className="menu-btn primary" onClick={() => loadLevel(lvl)}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
              <span>{lvl.label}</span>
              {renderStars(progress[lvl.id]?.stars || 0)}
            </button>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 20, alignItems: 'center', marginTop: 30 }}>
          <button className="menu-btn" disabled={currentPage===1} onClick={() => setCurrentPage(p=>p-1)} style={{ opacity: currentPage===1?.5:1 }}>⬅ Anterior</button>
          <span style={{ fontWeight:'bold', fontSize:18, background:'#fff', padding:'5px 15px', border:'3px solid #000', borderRadius:8 }}>
            {currentPage} / {totalPages}
          </span>
          <button className="menu-btn" disabled={currentPage===totalPages} onClick={() => setCurrentPage(p=>p+1)} style={{ opacity: currentPage===totalPages?.5:1 }}>Próxima ➡</button>
        </div>
        <button className="menu-btn" style={{ marginTop: 20 }} onClick={() => setTela('HOME')}>Voltar</button>
      </div>
    );
  }

  // ══════════════════════════════════════════════════════════════
  // TELA DO JOGO
  // ══════════════════════════════════════════════════════════════
  const discoveredSymbols = new Set(
    testWords.filter(w => w.status === 'correct' || w.status === 'shortest')
      .flatMap(w => w.word.split(''))
  );

  return (
    <div className="workspace-wrapper">
      {toastData.show && <div className={`toast-notification ${toastData.type}`}>{toastData.message}</div>}

      {/* ── Header ── */}
      <header className="game-header">
        <div className="header-left">
          <button className="sidebar-toggle" onClick={toggleSidebar} title="Abrir Descrição Formal">☰</button>
          <button className="back-btn" onClick={() => setTela('MENU')}>⬅ Voltar</button>
        </div>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8 }}>
          <span className="mission-label">Objetivo</span>
          <div className="mission-formula">{currentLevel?.formula || ''}</div>
        </div>
        <div style={{ width: 150, textAlign: 'right' }}>
          <span className="mission-label">{currentLevel?.label}</span>
          <div style={{ fontSize: 15, marginTop: 4 }}>{renderStars(progress[currentLevel?.id]?.stars || 0)}</div>
        </div>
      </header>

      <div className="workspace">
        {/* ── Sidebar Esquerda ── */}
        <aside className={`formal-panel ${isSidebarOpen ? 'open' : ''}`}>
          <FormalDescriptionModal
            isOpen={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
            nodes={nodes}
            transitions={transitions}
            alphabet={currentLevel?.alphabet}
            currentLevelId={currentLevel?.id}
            onSuccess={handleFormalSuccess}
            showToast={showToast}
            onValidateGraph={() => validateAFDSilent(true)}
          />
        </aside>

        {/* ── Canvas ── */}
        <section
          className={`canvas-area ${
            interactionMode === 'ERASE'    ? 'erase-mode' :
            interactionMode === 'ADD_NODE' ? 'add-node-mode' :
            interactionMode !== 'IDLE'     ? 'connecting-mode' : ''}`}
          ref={canvasRef}
          onPointerDown={handlePointerDownCanvas}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
        >
          {/* HUD Zoom */}
          {isDrawingUnlocked && (
            <div style={{ position:'absolute', top:12, right:12, display:'flex', gap:4, zIndex:10,
              background:'#fff', padding:'4px 8px', border:'3px solid #000', borderRadius:8, boxShadow:'4px 4px 0 #000' }}>
              <button onClick={() => setZoom(z => Math.max(0.15, z-0.25))}
                style={{ fontWeight:'bold', width:26, cursor:'pointer', border:'none', background:'transparent', fontSize:18, color:'#000' }}>−</button>
              <span style={{ fontWeight:'bold', width:50, textAlign:'center', fontSize:12, alignSelf:'center' }}>{Math.round(zoom*100)}%</span>
              <button onClick={() => setZoom(z => Math.min(6, z+0.25))}
                style={{ fontWeight:'bold', width:26, cursor:'pointer', border:'none', background:'transparent', fontSize:18, color:'#000' }}>+</button>
              <button onClick={() => { setZoom(1); setPan({x:0,y:0}); }}
                style={{ fontWeight:'bold', marginLeft:4, cursor:'pointer', border:'none', background:'transparent', color:'var(--accent-blue)', fontSize:11 }}>Reset</button>
            </div>
          )}

          <div className="canvas-label">
            Área de Montagem
            {interactionMode === 'CONNECTING'     && ' — Conectando...'}
            {interactionMode === 'TOGGLE_FINAL'   && ' — Definindo Final...'}
            {interactionMode === 'TOGGLE_INITIAL' && ' — Definindo Inicial...'}
            {interactionMode === 'ERASE'          && ' — Borracha...'}
            {interactionMode === 'ADD_NODE'       && ' — Clique para adicionar nó...'}
          </div>

          {!isDrawingUnlocked ? (
            <div className="locked-overlay">
              <div style={{ display:'flex', alignItems:'center', justifyContent:'center', marginTop:80 }}>
                <img src={imgMaurilioApontando} alt="Professor" style={{ height:320, zIndex:1 }} />
                <div style={{ position:'relative', width:210, height:140, marginLeft:10, alignSelf:'flex-start', marginTop:-20 }}>
                  <img src={imgBalaoFala} alt="" style={{ position:'absolute', inset:0, width:'100%', height:'100%', transform:'scaleX(-1)', zIndex:1 }} />
                  <div style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center',
                    padding:'14px 22px 34px 14px', boxSizing:'border-box', color:'#000', fontWeight:'bold', fontSize:16, textAlign:'center', zIndex:2 }}>
                    1ª Coisa: Descubra a Menor Palavra!
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div style={{ width:'100%', height:'100%',
              transform:`translate(${pan.x}px,${pan.y}px) scale(${zoom})`,
              transformOrigin:'0 0', position:'absolute', top:0, left:0 }}>

              {/* Lasso */}
              {selectionBox && (
                <div style={{
                  position:'absolute', border:'2px dashed #2563eb', backgroundColor:'rgba(59,130,246,0.15)',
                  left: Math.min(selectionBox.startX, selectionBox.currentX),
                  top:  Math.min(selectionBox.startY, selectionBox.currentY),
                  width:  Math.abs(selectionBox.currentX - selectionBox.startX),
                  height: Math.abs(selectionBox.currentY - selectionBox.startY),
                  pointerEvents:'none', zIndex:1000 }} />
              )}

              {/* SVG transições */}
              <svg className="connections-svg">
                <defs>
                  <marker id="ah"  markerWidth="10" markerHeight="7" refX="40" refY="3.5" orient="auto" markerUnits="userSpaceOnUse"><polygon points="0 0,10 3.5,0 7" fill="#000"/></marker>
                  <marker id="ahe" markerWidth="10" markerHeight="7" refX="40" refY="3.5" orient="auto" markerUnits="userSpaceOnUse"><polygon points="0 0,10 3.5,0 7" fill="#ef4444"/></marker>
                  <marker id="ahr" markerWidth="10" markerHeight="7" refX="40" refY="3.5" orient="auto" markerUnits="userSpaceOnUse"><polygon points="0 0,10 3.5,0 7" fill="#dc2626"/></marker>
                </defs>
                {transitionRenders.map(tr =>
                  tr.src.uid === tr.tgt.uid ? (
                    <circle key={tr.idx} cx={`${tr.src.x}%`} cy={`calc(${tr.src.y}% - 35px)`} r="20"
                      className={`transition-line ${interactionMode==='ERASE'?'erasable':''}`} />
                  ) : (
                    <path key={tr.idx} d={tr.pathD}
                      className={`transition-line ${interactionMode==='ERASE'?'erasable':''} ${highlightedError===`transition-${tr.idx}`?'line-error':''}`}
                      markerEnd={`url(#${interactionMode==='ERASE'?'ahe':highlightedError===`transition-${tr.idx}`?'ahr':'ah'})`} />
                  )
                )}
              </svg>

              {/* Labels das transições */}
              {transitionRenders.map(tr => {
                const clickable = selectedSymbolCard || interactionMode === 'ERASE';
                const isErr = highlightedError === `transition-${tr.idx}`;
                return (
                  <div key={`lbl-${tr.idx}`}
                    className={`transition-label ${clickable?'clickable action-target':''} ${interactionMode==='ERASE'?'erasable-target':''}`}
                    style={{
                      left: tr.src.uid===tr.tgt.uid ? `${tr.src.x}%` : `${tr.labelPxX}px`,
                      top:  tr.src.uid===tr.tgt.uid ? `calc(${tr.src.y}% - 55px)` : `${tr.labelPxY}px`,
                    }}
                    onClick={e => { e.stopPropagation(); if (clickable) handleTransitionClick(tr.idx); }}>
                    <input type="text" value={tr.symbol}
                      onChange={e => handleSymbolChange(tr.idx, e.target.value)}
                      className={`transition-input ${isErr?'error-pulse-severe':''}`}
                      maxLength={5} readOnly={!!clickable}
                      translate="no" spellCheck={false} autoCorrect="off" autoCapitalize="off" />
                  </div>
                );
              })}

              {/* Nós */}
              {nodes.map(node => {
                const simCls =
                  simHighlight.nodeId === node.uid
                    ? simHighlight.type === 'ok'    ? 'sim-active'
                    : simHighlight.type === 'done'  ? 'sim-done'
                    : simHighlight.type === 'error' ? 'sim-error'
                    : '' : '';
                return (
                  <div key={node.uid}
                    className={`node ${node.isInitial?'initial':''} ${node.isFinal?'final':''} ${selectedNodes.includes(node.uid)?'selected':''} ${interactionMode==='ERASE'?'erasable-node':''} ${simCls}`}
                    style={{ top:`${node.y}%`, left:`${node.x}%` }}
                    onPointerDown={e => handlePointerDownNode(e, node.uid)}>
                    <input
                      type="text"
                      className="node-id-input"
                      value={node.label ?? node.id}
                      translate="no"
                      spellCheck={false}
                      autoCorrect="off"
                      autoCapitalize="off"
                      readOnly={interactionMode === 'ERASE'}
                      onFocus={() => handleNodeLabelFocus(node.uid, node.label ?? node.id)}
                      onChange={e => handleNodeLabelChange(node.uid, e.target.value)}
                      onBlur={e => handleNodeLabelBlur(node.uid, e.target.value)}
                    />
                  </div>
                );
              })}
            </div>
          )}
        </section>

        {/* ── Painel Direito (Testes) ── */}
        <aside className="test-panel">
          <div className="section-header" style={{ fontSize:11 }}>Palavras aceitas pela linguagem</div>

          <div className="test-input-area">
            <input
              type="text"
              className="word-input"
              placeholder={currentLevel?.shortestWord === null ? "Digite 'null'..." : "Nova palavra..."}
              value={newWord}
              onChange={e => setNewWord(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleTestWord()}
              translate="no"
              spellCheck={false}
              autoCorrect="off"
              autoCapitalize="off"
            />
            <button className="add-test-btn" onClick={handleTestWord}>+</button>
          </div>

          {isDrawingUnlocked && (
            <button className="simulate-btn" onClick={openSimulation}>🔬 Simular</button>
          )}

          <div className="words-list">
            {testWords.map((item, idx) => (
              <div key={idx} className={`word-row ${item.status}`}>
                <span>{item.word}</span>
                <span>{item.status==='shortest'?'★ MENOR':item.status==='correct'?'✓':item.status==='wrong'?'✕':''}</span>
              </div>
            ))}
          </div>

          {isDrawingUnlocked && (
            <button className="validate-btn slide-up-fade" onClick={validateAFD}>
              Validar Desenho do AFD
            </button>
          )}
        </aside>
      </div>

      {/* ── Rodapé: Cartas / Simulação ── */}
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
                const classMap = { toggleInitial:'initial', addNode:'state', addTransition:'transition', toggleFinal:'final', erase:'erase' };
                const clickMap = { toggleInitial: setInitialMode, addNode: addNodeMode, addTransition: addTransitionMode, toggleFinal: toggleFinalStateMode, erase: setEraserMode };
                const modeMap  = { toggleInitial:'TOGGLE_INITIAL', addNode:'ADD_NODE', addTransition:'CONNECTING', toggleFinal:'TOGGLE_FINAL', erase:'ERASE' };
                const iconMap  = { toggleInitial:'▶', addNode:'◯', addTransition:'↗', toggleFinal:'◎', erase:'🗑' };
                const isSelected = interactionMode === modeMap[card.action];
                const isErr      = highlightedError === card.action;
                return (
                  <div key={card.id}
                    data-icon={iconMap[card.action] || ''}
                    className={`card ${classMap[card.action]} slide-up-fade ${isSelected?'selected-card':''} ${isErr?'error-pulse-severe':''}`}
                    onClick={clickMap[card.action]}>
                    <div className="card-header">Ação</div>
                    <div className="card-icon">{card.icon}</div>
                    <div className="card-footer">{card.label}</div>
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
                    <div className="card-header">Alfabeto</div>
                    <div className="card-icon" style={{ fontSize:34, color:'#7c3aed' }}>{isLocked?'🔒':card.symbol}</div>
                    <div className="card-footer">Usar Símbolo</div>
                  </div>
                );
              }
              return null;
            })}
          </div>
        )}
      </footer>

      {/* ── HUD Maurílio ── */}
      {isDrawingUnlocked && (
        <div className="professor-hud">
          {professorMessage && (
            <div className="professor-balloon">
              <img src={imgBalaoFala} alt="" />
              <div className="professor-balloon-text">{professorMessage}</div>
            </div>
          )}
          <img src={imgMaurilioSerio} alt="Professor Maurílio" className="prof-img"
            onClick={() => triggerProfessorSpeech(currentLevel?.hint || 'Continue tentando!')} />
        </div>
      )}

      {/* ── Tela de Vitória ── */}
      {showVictoryScreen && (() => {
        const idx  = GAME_LEVELS.findIndex(l => l.id === currentLevel?.id);
        const next = idx >= 0 && idx < GAME_LEVELS.length-1 ? GAME_LEVELS[idx+1] : null;
        return (
          <div style={{ position:'fixed', inset:0, background:'rgba(0,0,0,0.85)', zIndex:9999,
            display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column' }}>
            <div style={{ display:'flex', alignItems:'flex-start', justifyContent:'center' }}>
              <img src={imgMaurilioExplicando} alt="Professor" style={{ height:320, zIndex:2, marginRight:-25 }} />
              <div style={{ position:'relative', width:300, height:210, marginTop:-45, zIndex:1 }}>
                <img src={imgBalaoFala} style={{ position:'absolute', inset:0, width:'100%', height:'100%', zIndex:1 }} />
                <div style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center',
                  padding:'18px 18px 48px', boxSizing:'border-box', color:'#000', fontSize:17, fontWeight:900, textAlign:'center', zIndex:2 }}>
                  {currentLevel?.successMsg || 'Parabéns, você dominou esta linguagem!'}
                </div>
              </div>
            </div>
            <div style={{ display:'flex', gap:20, marginTop:36 }}>
              <button className="menu-btn" onClick={() => { setShowVictoryScreen(false); setTela('MENU'); }}
                style={{ padding:'14px 28px', fontSize:20 }}>Voltar ao Menu</button>
              {next && (
                <button className="menu-btn primary" onClick={() => { setShowVictoryScreen(false); loadLevel(next); }}
                  style={{ padding:'14px 28px', fontSize:20 }}>
                  Próxima: {next.label}
                </button>
              )}
            </div>
          </div>
        );
      })()}
    </div>
  );
}
