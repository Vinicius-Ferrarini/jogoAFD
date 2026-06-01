// Versão: 1.3.0 - Fix Pan/Zoom, Pip carta, Maurílio, Painel teste, Simulação Passo a Passo
import { useState, useRef, useEffect, useCallback } from 'react';
import './App.css';
import { GAME_LEVELS } from './levels';
import FormalDescriptionModal from './FormalDescriptionModal';
import imgMaurilioApontando from './assets/maurilio2_apontando_pro_lado.png';
import imgMaurilioSerio from './assets/maurilio1_serio.png';
import imgMaurilioExplicando from './assets/maurilio3_explicando.png';
import imgBalaoFala from './assets/balao_fala_redondo.png';

// ─────────────────────────────────────────────
// Modal de Simulação Passo a Passo
// ─────────────────────────────────────────────
function SimModal({ word, nodes, transitions, onClose, onHighlightNode }) {
  const initState = nodes.find(n => n.isInitial)?.id ?? null;

  // Monta todos os passos antecipadamente
  const buildSteps = () => {
    const steps = [];
    const w = (word === 'λ' || word === 'null' || word === 'vazio') ? '' : word;

    if (!initState) {
      steps.push({ type: 'error', icon: '❌', text: 'Nenhum estado inicial definido!' });
      return steps;
    }

    steps.push({ type: 'info', icon: '▶', text: `Início no estado  "${initState}"`, state: initState, charIdx: -1 });

    let current = initState;
    for (let i = 0; i < w.length; i++) {
      const ch = w[i];
      const trans = transitions.find(t => t.from === current && t.symbol === ch);
      if (!trans) {
        steps.push({ type: 'error', icon: '❌', text: `Estado "${current}": sem transição para '${ch}'. Palavra REJEITADA.`, state: current, charIdx: i });
        return steps;
      }
      steps.push({ type: 'ok', icon: '➡', text: `"${current}" —[${ch}]→ "${trans.to}"`, state: trans.to, charIdx: i });
      current = trans.to;
    }

    const finalNode = nodes.find(n => n.id === current);
    if (finalNode?.isFinal) {
      steps.push({ type: 'done', icon: '✅', text: `Estado "${current}" é final. Palavra ACEITA! 🎉`, state: current, charIdx: w.length });
    } else {
      steps.push({ type: 'error', icon: '❌', text: `Estado "${current}" não é final. Palavra REJEITADA.`, state: current, charIdx: w.length });
    }
    return steps;
  };

  const steps = buildSteps();
  const [stepIdx, setStepIdx] = useState(0);

  const currentStep = steps[stepIdx];
  const w = (word === 'λ' || word === 'null' || word === 'vazio') ? '' : word;

  useEffect(() => {
    onHighlightNode(currentStep?.state ?? null, currentStep?.type ?? null);
    return () => onHighlightNode(null, null);
  }, [stepIdx]);

  const goNext = () => setStepIdx(i => Math.min(i + 1, steps.length - 1));
  const goPrev = () => setStepIdx(i => Math.max(i - 1, 0));

  return (
    <div className="sim-modal-overlay" onClick={onClose}>
      <div className="sim-modal" onClick={e => e.stopPropagation()}>
        <h3>🔬 Simulação Passo a Passo</h3>

        {/* Palavra com caractere ativo destacado */}
        <div className="sim-word-display">
          {w.length === 0 ? (
            <span className="sim-char" style={{ letterSpacing: 0 }}>λ (vazia)</span>
          ) : (
            w.split('').map((ch, i) => {
              let cls = 'sim-char';
              if (i === currentStep?.charIdx) cls += ' active';
              else if (i < (currentStep?.charIdx ?? -1)) cls += ' done-ok';
              return <span key={i} className={cls}>{ch}</span>;
            })
          )}
        </div>

        {/* Lista de passos já executados */}
        <div className="sim-step-list">
          {steps.slice(0, stepIdx + 1).map((s, i) => (
            <div key={i} className={`sim-step ${s.type}`}>
              <span className="sim-step-icon">{s.icon}</span>
              <span>{s.text}</span>
            </div>
          ))}
        </div>

        {/* Navegação */}
        <div className="sim-controls">
          <button className="sim-nav-btn" onClick={goPrev} disabled={stepIdx === 0}>◀ Anterior</button>
          <button className="sim-nav-btn" onClick={goNext} disabled={stepIdx === steps.length - 1}>Próximo ▶</button>
        </div>
        <button className="sim-close-btn" onClick={onClose}>Fechar ✕</button>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// App Principal
// ─────────────────────────────────────────────
export default function App() {
  const getProgress = () => {
    try {
      const data = localStorage.getItem('autoquest_progress');
      return data ? JSON.parse(data) : {};
    } catch { return {}; }
  };
  const [progress, setProgress] = useState(getProgress());

  const updateStars = (levelId, stars) => {
    setProgress(prev => {
      const current = prev[levelId]?.stars || 0;
      if (stars > current) {
        const newP = { ...prev, [levelId]: { stars } };
        localStorage.setItem('autoquest_progress', JSON.stringify(newP));
        return newP;
      }
      return prev;
    });
  };

  const renderStars = (count) => {
    const stars = [];
    for (let i = 1; i <= 3; i++) {
      stars.push(<span key={i} style={{ color: i <= count ? '#fbbf24' : '#4b5563' }}>★</span>);
    }
    return <span style={{ display: 'flex', gap: '4px', justifyContent: 'center' }}>{stars}</span>;
  };

  const [toastData, setToastData] = useState({ show: false, message: '', type: 'info' });
  const toastTimeoutRef = useRef(null);
  const showToast = (message, type = 'info') => {
    setToastData({ show: true, message, type });
    if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    toastTimeoutRef.current = setTimeout(() => setToastData(prev => ({ ...prev, show: false })), 4000);
  };

  const [tela, setTela] = useState('HOME');
  const [currentPage, setCurrentPage] = useState(1);
  const [currentLevel, setCurrentLevel] = useState(null);
  const [isDrawingUnlocked, setIsDrawingUnlocked] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [nodes, setNodes] = useState([]);
  const [transitions, setTransitions] = useState([]);
  const [testWords, setTestWords] = useState([]);
  const [newWord, setNewWord] = useState('');
  const [drawnCards, setDrawnCards] = useState([]);
  const [selectedSymbolCard, setSelectedSymbolCard] = useState(null);

  const [interactionMode, setInteractionMode] = useState('IDLE');
  const [connectingSource, setConnectingSource] = useState(null);

  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);

  const [selectionBox, setSelectionBox] = useState(null);
  const [selectedNodes, setSelectedNodes] = useState([]);
  const [dragInfo, setDragInfo] = useState({ isDragging: false, initialNodes: [], startX: 0, startY: 0 });

  const canvasRef = useRef(null);
  const [highlightedError, setHighlightedError] = useState(null);
  const [professorMessage, setProfessorMessage] = useState('');
  const speechTimeoutRef = useRef(null);
  const [showVictoryScreen, setShowVictoryScreen] = useState(false);
  const [canvasSize, setCanvasSize] = useState({ w: 800, h: 600 });

  // Simulação passo a passo
  const [showSimModal, setShowSimModal] = useState(false);
  const [simWord, setSimWord] = useState('');
  const [simHighlight, setSimHighlight] = useState({ nodeId: null, type: null });

  const triggerProfessorSpeech = (msg, duration = 5000) => {
    setProfessorMessage(msg);
    if (speechTimeoutRef.current) clearTimeout(speechTimeoutRef.current);
    speechTimeoutRef.current = setTimeout(() => setProfessorMessage(''), duration);
  };

  // ── Wheel handler (non-passive, precisa ser registrado via addEventListener) ──
  const isDrawingUnlockedRef = useRef(isDrawingUnlocked);
  useEffect(() => { isDrawingUnlockedRef.current = isDrawingUnlocked; }, [isDrawingUnlocked]);

  const zoomRef = useRef(zoom);
  useEffect(() => { zoomRef.current = zoom; }, [zoom]);

  const panRef = useRef(pan);
  useEffect(() => { panRef.current = pan; }, [pan]);

  useEffect(() => {
    if (tela !== 'JOGO') return;
    let timeoutId;
    const updateSize = () => {
      if (canvasRef.current) {
        setCanvasSize({ w: canvasRef.current.clientWidth, h: canvasRef.current.clientHeight });
      }
    };
    window.addEventListener('resize', updateSize);
    timeoutId = setTimeout(updateSize, 50);

    const canvasEl = canvasRef.current;
    const wheelHandler = (e) => {
      if (!isDrawingUnlockedRef.current) return;
      e.preventDefault();
      if (e.ctrlKey || e.metaKey) {
        const rect = canvasEl.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const delta = e.deltaY * -0.002;
        setZoom(z => {
          const newZoom = Math.max(0.15, Math.min(6, z + delta * z));
          setPan(p => ({
            x: p.x - mouseX * (newZoom - z) / z,
            y: p.y - mouseY * (newZoom - z) / z,
          }));
          return newZoom;
        });
      } else {
        // scroll livre para pan
        setPan(p => ({ x: p.x - e.deltaX, y: p.y - e.deltaY }));
      }
    };

    if (canvasEl) canvasEl.addEventListener('wheel', wheelHandler, { passive: false });

    return () => {
      window.removeEventListener('resize', updateSize);
      clearTimeout(timeoutId);
      if (canvasEl) canvasEl.removeEventListener('wheel', wheelHandler);
    };
  }, [tela, isSidebarOpen]);

  const loadLevel = (level) => {
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
    setShowSimModal(false);
    setSimHighlight({ nodeId: null, type: null });
  };

  const handleTestWord = () => {
    if (!currentLevel) return;
    let isShortest = false;
    let isValid = false;
    const target = currentLevel.shortestWord;
    const testInputLower = newWord.toLowerCase();
    const isSpecialNull = (testInputLower === 'null' || testInputLower === 'vazio');

    if (target === null) {
      if (isSpecialNull) isShortest = true;
    } else if (newWord === target) {
      isShortest = true;
    }

    if (currentLevel.regex && !(target === null && isSpecialNull)) {
      isValid = currentLevel.regex.test(newWord);
    }

    const wordDisplay = newWord === '' ? 'λ' : newWord;
    if (testWords.some(w => w.word === wordDisplay)) {
      showToast("Você já testou essa palavra!", "info");
      return;
    }

    if (isShortest) {
      if (!isDrawingUnlocked) {
        setIsDrawingUnlocked(true);
        updateStars(currentLevel.id, 1);
        showToast("Sucesso! Tabuleiro liberado.", "success");
        const initialCards = [
          { id: 'c0', type: 'action', action: 'toggleInitial', icon: '▶', label: 'Estado Inicial' },
          { id: 'c1', type: 'action', action: 'addNode',       icon: '◯', label: 'Novo Estado' },
          { id: 'c2', type: 'action', action: 'addTransition', icon: '↗', label: 'Criar Seta' },
          { id: 'c3', type: 'action', action: 'toggleFinal',   icon: '◎', label: 'Definir Final' },
          { id: 'c4', type: 'action', action: 'erase',         icon: '🗑', label: 'Apagar' },
        ];
        const alphabet = currentLevel.alphabet || [];
        const symbolCards = alphabet.map((sym, i) => ({ id: `s${i}`, type: 'symbol', symbol: sym, label: `Símbolo ${sym}` }));
        setDrawnCards([...initialCards, { type: 'separator', id: 'sep1' }, ...symbolCards]);
      }
      setTestWords([{ word: wordDisplay, status: 'shortest' }, ...testWords]);
    } else if (isValid) {
      setTestWords([{ word: wordDisplay, status: 'correct' }, ...testWords]);
    } else {
      setTestWords([{ word: wordDisplay, status: 'wrong' }, ...testWords]);
    }
    setNewWord('');
  };

  const setInitialMode      = () => { if (!isDrawingUnlocked) return; setInteractionMode('TOGGLE_INITIAL'); setConnectingSource(null); setSelectedSymbolCard(null); setSelectedNodes([]); };
  const addNode             = () => { if (!isDrawingUnlocked) return; setInteractionMode('ADD_NODE');        setConnectingSource(null); setSelectedSymbolCard(null); setSelectedNodes([]); };
  const addTransitionMode   = () => { if (!isDrawingUnlocked) return; setInteractionMode('CONNECTING');      setConnectingSource(null); setSelectedSymbolCard(null); setSelectedNodes([]); };
  const toggleFinalStateMode= () => { if (!isDrawingUnlocked) return; setInteractionMode('TOGGLE_FINAL');    setConnectingSource(null); setSelectedSymbolCard(null); setSelectedNodes([]); };
  const setEraserMode       = () => { if (!isDrawingUnlocked) return; setInteractionMode('ERASE');           setConnectingSource(null); setSelectedSymbolCard(null); setSelectedNodes([]); };
  const toggleSidebar       = () => setIsSidebarOpen(o => !o);

  const validateAFD = () => {
    if (!nodes.some(n => n.isInitial)) {
      setHighlightedError('toggleInitial');
      setTimeout(() => setHighlightedError(null), 3000);
      showToast("Erro Crítico: Defina um Estado Inicial (▶)!", "error");
      return;
    }
    if (!nodes.some(n => n.isFinal)) {
      setHighlightedError('toggleFinal');
      setTimeout(() => setHighlightedError(null), 3000);
      showToast("Erro: O autômato precisa de pelo menos um Estado Final (◎)!", "error");
      return;
    }
    const emptyIdx = transitions.findIndex(t => t.symbol === '');
    if (emptyIdx !== -1) {
      setHighlightedError(`transition-${emptyIdx}`);
      setTimeout(() => setHighlightedError(null), 3000);
      showToast("Você deixou setas em branco! Preencha todas as transições.", "error");
      return;
    }
    for (let node of nodes) {
      const syms = transitions.filter(t => t.from === node.id).map(t => t.symbol);
      if (syms.length !== new Set(syms).size) {
        showToast(`Grafo não determinístico! "${node.id}" tem setas duplicadas.`, "error");
        return;
      }
    }
    const simulateDFA = (word) => {
      let cur = nodes.find(n => n.isInitial)?.id;
      if (!cur) return false;
      const w = (word === 'λ' || word === 'null' || word === 'vazio') ? '' : word;
      for (let ch of w) {
        const tr = transitions.find(t => t.from === cur && t.symbol === ch);
        if (!tr) return false;
        cur = tr.to;
      }
      return nodes.find(n => n.id === cur)?.isFinal || false;
    };
    for (let tw of testWords) {
      const accepted = simulateDFA(tw.word);
      const shouldAccept = tw.status === 'shortest' || tw.status === 'correct';
      if (accepted !== shouldAccept) {
        showToast(`Erro! Autômato falhou na palavra '${tw.word}'. Deveria ser ${shouldAccept ? 'aceita' : 'rejeitada'}.`, "error");
        return;
      }
    }
    updateStars(currentLevel.id, 2);
    showToast("Autômato Validado! Preencha a Tabela Formal.", "success");
    setIsSidebarOpen(true);
  };

  const handleFormalSuccess = () => {
    updateStars(currentLevel.id, 3);
    showToast("Fase Concluída com Perfeição! Você conquistou a 3ª Estrela!", "success");
    setShowVictoryScreen(true);
  };

  // ── Abrir simulação ──
  const openSimulation = () => {
    if (!isDrawingUnlocked) { showToast("Monte o autômato primeiro!", "info"); return; }
    if (!nodes.some(n => n.isInitial)) { showToast("Defina o estado inicial antes de simular.", "error"); return; }
    if (newWord.trim() === '') { showToast("Digite uma palavra no campo para simular.", "info"); return; }
    setSimWord(newWord);
    setShowSimModal(true);
  };

  // ── Pointer handlers ──
  const handlePointerDownCanvas = (e) => {
    if (!isDrawingUnlocked) return;

    if (e.button === 1 || e.shiftKey) {
      setIsPanning(true);
      setDragInfo({ isDragging: false, startX: e.clientX, startY: e.clientY });
      e.target.setPointerCapture(e.pointerId);
      return;
    }

    if (interactionMode === 'ADD_NODE') {
      const rect = canvasRef.current.getBoundingClientRect();
      // Coordenadas dentro do espaço transformado (sem clamp — canvas infinito via pan)
      const internalX = ((e.clientX - rect.left - pan.x) / zoom / rect.width) * 100;
      const internalY = ((e.clientY - rect.top - pan.y) / zoom / rect.height) * 100;
      let newIdNum = nodes.length;
      while (nodes.some(n => n.id === `q${newIdNum}`)) newIdNum++;
      // Não limitar a 0-100: o canvas é virtual e pode ser maior que a tela
      setNodes([...nodes, { id: `q${newIdNum}`, x: internalX, y: internalY, isInitial: false, isFinal: false }]);
      setInteractionMode('IDLE');
      return;
    }

    if (interactionMode === 'IDLE' && e.button === 0) {
      const rect = canvasRef.current.getBoundingClientRect();
      const internalX = (e.clientX - rect.left - pan.x) / zoom;
      const internalY = (e.clientY - rect.top - pan.y) / zoom;
      setSelectionBox({ startX: internalX, startY: internalY, currentX: internalX, currentY: internalY });
      if (!e.ctrlKey) setSelectedNodes([]);
      e.target.setPointerCapture(e.pointerId);
    } else {
      setSelectedNodes([]);
    }
  };

  const handlePointerDownNode = (e, nodeId) => {
    if (!isDrawingUnlocked) return;
    e.stopPropagation();

    if (interactionMode === 'ERASE') {
      setNodes(nodes.filter(n => n.id !== nodeId));
      setTransitions(transitions.filter(t => t.from !== nodeId && t.to !== nodeId));
      return;
    }
    if (interactionMode === 'TOGGLE_INITIAL') {
      setNodes(nodes.map(n => ({ ...n, isInitial: n.id === nodeId })));
      setInteractionMode('IDLE');
      return;
    }
    if (interactionMode === 'TOGGLE_FINAL') {
      setNodes(nodes.map(n => n.id === nodeId ? { ...n, isFinal: !n.isFinal } : n));
      setInteractionMode('IDLE');
      return;
    }
    if (interactionMode === 'CONNECTING') {
      if (!connectingSource) {
        setConnectingSource(nodeId);
      } else {
        setTransitions([...transitions, { from: connectingSource, symbol: '', to: nodeId }]);
        setInteractionMode('IDLE');
        setConnectingSource(null);
      }
      return;
    }

    if (interactionMode === 'IDLE') {
      let currentSelected = selectedNodes;
      if (!selectedNodes.includes(nodeId)) {
        currentSelected = e.ctrlKey ? [...selectedNodes, nodeId] : [nodeId];
        setSelectedNodes(currentSelected);
      }
      const rect = canvasRef.current.getBoundingClientRect();
      setDragInfo({
        isDragging: true,
        initialNodes: JSON.parse(JSON.stringify(nodes)),
        startX: (e.clientX - rect.left - pan.x) / zoom,
        startY: (e.clientY - rect.top - pan.y) / zoom,
      });
      e.target.setPointerCapture(e.pointerId);
    }
  };

  const handlePointerMove = (e) => {
    if (!isDrawingUnlocked) return;

    if (isPanning) {
      setPan(p => ({ x: p.x + e.movementX, y: p.y + e.movementY }));
      return;
    }

    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    const internalX = (e.clientX - rect.left - pan.x) / zoom;
    const internalY = (e.clientY - rect.top - pan.y) / zoom;

    if (selectionBox) {
      setSelectionBox({ ...selectionBox, currentX: internalX, currentY: internalY });
    } else if (dragInfo.isDragging) {
      const deltaXPercent = ((internalX - dragInfo.startX) / rect.width) * 100;
      const deltaYPercent = ((internalY - dragInfo.startY) / rect.height) * 100;
      setNodes(prev => prev.map(n => {
        if (selectedNodes.includes(n.id)) {
          const initNode = dragInfo.initialNodes.find(i => i.id === n.id);
          if (initNode) {
            return { ...n, x: initNode.x + deltaXPercent, y: initNode.y + deltaYPercent };
          }
        }
        return n;
      }));
    }
  };

  const handlePointerUp = (e) => {
    try { e.target.releasePointerCapture(e.pointerId); } catch (_) {}
    if (isPanning) setIsPanning(false);
    if (dragInfo.isDragging) setDragInfo({ isDragging: false, initialNodes: [], startX: 0, startY: 0 });

    if (selectionBox) {
      const rect = canvasRef.current?.getBoundingClientRect();
      if (!rect) { setSelectionBox(null); return; }
      const minX = Math.min(selectionBox.startX, selectionBox.currentX);
      const maxX = Math.max(selectionBox.startX, selectionBox.currentX);
      const minY = Math.min(selectionBox.startY, selectionBox.currentY);
      const maxY = Math.max(selectionBox.startY, selectionBox.currentY);
      const minXPct = (minX / rect.width) * 100;
      const maxXPct = (maxX / rect.width) * 100;
      const minYPct = (minY / rect.height) * 100;
      const maxYPct = (maxY / rect.height) * 100;
      const newlySelected = nodes.filter(n => n.x >= minXPct && n.x <= maxXPct && n.y >= minYPct && n.y <= maxYPct).map(n => n.id);
      setSelectedNodes(e.ctrlKey ? [...new Set([...selectedNodes, ...newlySelected])] : newlySelected);
      setSelectionBox(null);
    }
  };

  const handleNodeIdChange = (oldId, newId) => {
    if (!isDrawingUnlocked || oldId === newId) return;
    setNodes(nodes.map(n => n.id === oldId ? { ...n, id: newId } : n));
    setTransitions(transitions.map(t => ({ ...t, from: t.from === oldId ? newId : t.from, to: t.to === oldId ? newId : t.to })));
  };

  const handleSymbolChange = (idx, newSymbol) => {
    if (!isDrawingUnlocked) return;
    const newTrans = [...transitions];
    newTrans[idx] = { ...newTrans[idx], symbol: newSymbol };
    setTransitions(newTrans);
  };

  const handleTransitionClick = (idx) => {
    if (!isDrawingUnlocked) return;
    if (interactionMode === 'ERASE') {
      setTransitions(transitions.filter((_, i) => i !== idx));
    } else if (selectedSymbolCard) {
      const newTrans = [...transitions];
      newTrans[idx] = { ...newTrans[idx], symbol: selectedSymbolCard };
      setTransitions(newTrans);
      setSelectedSymbolCard(null);
    }
  };

  // ── Cálculo de renderização de transições ──
  const transitionRenders = transitions.map((t, idx) => {
    const src = nodes.find(n => n.id === t.from);
    const tgt = nodes.find(n => n.id === t.to);
    if (!src || !tgt) return null;

    const srcPxX = (src.x * canvasSize.w) / 100;
    const srcPxY = (src.y * canvasSize.h) / 100;
    const tgtPxX = (tgt.x * canvasSize.w) / 100;
    const tgtPxY = (tgt.y * canvasSize.h) / 100;
    const isBidirectional = src.id !== tgt.id && transitions.some(o => o.from === tgt.id && o.to === src.id);

    let pathD = '', labelPxX = 0, labelPxY = 0;
    if (src.id !== tgt.id) {
      if (isBidirectional) {
        const dx = tgtPxX - srcPxX, dy = tgtPxY - srcPxY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const nx = dist === 0 ? 0 : -dy / dist, ny = dist === 0 ? 0 : dx / dist;
        const offset = 40;
        const cx = (srcPxX + tgtPxX) / 2 + nx * offset, cy = (srcPxY + tgtPxY) / 2 + ny * offset;
        pathD = `M ${srcPxX} ${srcPxY} Q ${cx} ${cy} ${tgtPxX} ${tgtPxY}`;
        labelPxX = ((srcPxX + tgtPxX) / 2 + cx) / 2 + nx * 10;
        labelPxY = ((srcPxY + tgtPxY) / 2 + cy) / 2 + ny * 10;
      } else {
        pathD = `M ${srcPxX} ${srcPxY} L ${tgtPxX} ${tgtPxY}`;
        labelPxX = (srcPxX + tgtPxX) / 2;
        labelPxY = (srcPxY + tgtPxY) / 2;
      }
    }
    return { ...t, idx, src, tgt, pathD, labelPxX, labelPxY, isBidirectional };
  }).filter(Boolean);

  // ═══════════════════════════════════════════
  // TELA HOME
  // ═══════════════════════════════════════════
  if (tela === 'HOME') {
    return (
      <div className="menu-screen">
        <h1 className="menu-title">AutoQuest</h1>
        <button className="menu-btn primary" onClick={() => setTela('MENU')} style={{ marginBottom: '15px' }}>Fases AFD</button>
        <button className="menu-btn" onClick={() => showToast("A Parte 2 será implementada em breve!", "info")}>AFD Parte 2</button>
        {toastData.show && <div className={`toast-notification ${toastData.type}`}>{toastData.message}</div>}
      </div>
    );
  }

  // ═══════════════════════════════════════════
  // TELA DE MENU (FASES)
  // ═══════════════════════════════════════════
  if (tela === 'MENU') {
    const maxStars = GAME_LEVELS.length * 3;
    const totalStars = GAME_LEVELS.reduce((acc, lvl) => acc + (progress[lvl.id]?.stars || 0), 0);
    const itemsPerPage = 20;
    const totalPages = Math.ceil(GAME_LEVELS.length / itemsPerPage);
    const currentLevels = GAME_LEVELS.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
      <div className="menu-screen" style={{ justifyContent: 'flex-start', paddingTop: '40px' }}>
        <h1 className="menu-title" style={{ marginBottom: '10px' }}>AutoQuest</h1>
        <div style={{ marginBottom: '30px', color: '#000', fontSize: '18px', fontWeight: 'bold' }}>
          Progresso: {maxStars > 0 ? Math.round((totalStars / maxStars) * 100) : 0}% ({totalStars}/{maxStars} ★)
        </div>
        <div className="levels-grid">
          {currentLevels.map((lvl) => (
            <button key={lvl.id} className="menu-btn primary" onClick={() => loadLevel(lvl)} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <span>{lvl.label}</span>
              <span style={{ fontSize: '14px' }}>{renderStars(progress[lvl.id]?.stars || 0)}</span>
            </button>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginTop: '30px' }}>
          <button className="menu-btn" disabled={currentPage === 1} onClick={() => setCurrentPage(p => p - 1)} style={{ opacity: currentPage === 1 ? 0.5 : 1 }}>⬅ Anterior</button>
          <span style={{ fontWeight: 'bold', fontSize: '18px', background: '#fff', padding: '5px 15px', border: '3px solid #000', borderRadius: '8px' }}>Página {currentPage} de {totalPages}</span>
          <button className="menu-btn" disabled={currentPage === totalPages} onClick={() => setCurrentPage(p => p + 1)} style={{ opacity: currentPage === totalPages ? 0.5 : 1 }}>Próxima ➡</button>
        </div>
        <div style={{ marginTop: '20px' }}>
          <button className="menu-btn" onClick={() => setTela('HOME')}>Voltar</button>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════
  // TELA DO JOGO
  // ═══════════════════════════════════════════
  return (
    <div className="workspace-wrapper">
      {toastData.show && <div className={`toast-notification ${toastData.type}`}>{toastData.message}</div>}

      {/* Modal de simulação */}
      {showSimModal && (
        <SimModal
          word={simWord}
          nodes={nodes}
          transitions={transitions}
          onClose={() => { setShowSimModal(false); setSimHighlight({ nodeId: null, type: null }); }}
          onHighlightNode={(nodeId, type) => setSimHighlight({ nodeId, type })}
        />
      )}

      <header className="game-header">
        <div className="header-left">
          <button className="sidebar-toggle" onClick={toggleSidebar}>☰</button>
          <button className="back-btn" onClick={() => setTela('MENU')}>⬅ Voltar</button>
        </div>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <span className="mission-label">Objetivo da Linguagem</span>
          <div className="mission-formula">{currentLevel?.formula || ''}</div>
        </div>
        <div style={{ width: '150px', textAlign: 'right' }}>
          <span className="mission-label">{currentLevel?.label}</span>
          <div style={{ fontSize: '16px', marginTop: '4px' }}>{renderStars(currentLevel ? (progress[currentLevel.id]?.stars || 0) : 0)}</div>
        </div>
      </header>

      <div className="workspace">
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
          />
        </aside>

        {/* ── CANVAS ── */}
        <section
          className={`canvas-area ${
            interactionMode === 'ERASE' ? 'erase-mode' :
            interactionMode === 'ADD_NODE' ? 'add-node-mode' :
            interactionMode !== 'IDLE' ? 'connecting-mode' : ''
          }`}
          ref={canvasRef}
          onPointerDown={handlePointerDownCanvas}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
        >
          {/* HUD Zoom/Pan */}
          {isDrawingUnlocked && (
            <div style={{ position: 'absolute', top: '15px', right: '15px', display: 'flex', gap: '5px', zIndex: 10, background: '#fff', padding: '5px 8px', border: '3px solid #000', borderRadius: '8px', boxShadow: '4px 4px 0px #000' }}>
              <button onClick={() => setZoom(z => Math.max(0.15, z - 0.25))} style={{ fontWeight: 'bold', width: '28px', cursor: 'pointer', border: 'none', background: 'transparent', fontSize: '18px' }}>−</button>
              <span style={{ fontWeight: 'bold', width: '52px', textAlign: 'center', fontSize: '13px', alignSelf: 'center' }}>{Math.round(zoom * 100)}%</span>
              <button onClick={() => setZoom(z => Math.min(6, z + 0.25))} style={{ fontWeight: 'bold', width: '28px', cursor: 'pointer', border: 'none', background: 'transparent', fontSize: '18px' }}>+</button>
              <button onClick={() => { setZoom(1); setPan({ x: 0, y: 0 }); }} style={{ fontWeight: 'bold', marginLeft: '4px', cursor: 'pointer', border: 'none', background: 'transparent', color: 'var(--accent-blue)', fontSize: '12px' }}>Reset</button>
            </div>
          )}

          <div className="canvas-label">
            Área de Montagem do Grafo
            {interactionMode === 'CONNECTING'     && ' — Conectando...'}
            {interactionMode === 'TOGGLE_FINAL'   && ' — Definindo Final...'}
            {interactionMode === 'TOGGLE_INITIAL' && ' — Definindo Inicial...'}
            {interactionMode === 'ERASE'          && ' — Modo Borracha...'}
            {interactionMode === 'ADD_NODE'       && ' — Clique para adicionar nó...'}
          </div>

          {!isDrawingUnlocked ? (
            <div className="locked-overlay">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '100px' }}>
                <img src={imgMaurilioApontando} alt="Professor" style={{ height: '350px', zIndex: 1 }} />
                <div style={{ position: 'relative', width: '220px', height: '150px', marginLeft: '10px', alignSelf: 'flex-start', marginTop: '-30px' }}>
                  <img src={imgBalaoFala} alt="" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', transform: 'scaleX(-1)', zIndex: 1 }} />
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '15px 25px 35px 15px', boxSizing: 'border-box', color: '#000', fontWeight: 'bold', fontSize: '18px', textAlign: 'center', zIndex: 2 }}>
                    1ª Coisa é a Menor Palavra!
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Container transformado — sem overflow clip, pan livre */
            <div style={{
              width: '100%', height: '100%',
              transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
              transformOrigin: '0 0',
              position: 'absolute', top: 0, left: 0,
            }}>
              {/* Lasso Selection */}
              {selectionBox && (
                <div style={{
                  position: 'absolute',
                  border: '2px dashed #2563eb',
                  backgroundColor: 'rgba(59,130,246,0.2)',
                  left: Math.min(selectionBox.startX, selectionBox.currentX),
                  top: Math.min(selectionBox.startY, selectionBox.currentY),
                  width: Math.abs(selectionBox.currentX - selectionBox.startX),
                  height: Math.abs(selectionBox.currentY - selectionBox.startY),
                  pointerEvents: 'none',
                  zIndex: 1000,
                }} />
              )}

              <svg className="connections-svg">
                <defs>
                  <marker id="arrowhead"       markerWidth="10" markerHeight="7" refX="40" refY="3.5" orient="auto" markerUnits="userSpaceOnUse"><polygon points="0 0, 10 3.5, 0 7" fill="#000" /></marker>
                  <marker id="arrowhead-erase" markerWidth="10" markerHeight="7" refX="40" refY="3.5" orient="auto" markerUnits="userSpaceOnUse"><polygon points="0 0, 10 3.5, 0 7" fill="#ef4444" /></marker>
                  <marker id="arrowhead-error" markerWidth="10" markerHeight="7" refX="40" refY="3.5" orient="auto" markerUnits="userSpaceOnUse"><polygon points="0 0, 10 3.5, 0 7" fill="#dc2626" /></marker>
                </defs>
                {transitionRenders.map((tr) => tr.src.id === tr.tgt.id ? (
                  <circle key={tr.idx}
                    cx={`${tr.src.x}%`} cy={`calc(${tr.src.y}% - 35px)`} r="20"
                    className={`transition-line ${interactionMode === 'ERASE' ? 'erasable' : ''}`}
                  />
                ) : (
                  <path key={tr.idx}
                    d={tr.pathD}
                    className={`transition-line ${interactionMode === 'ERASE' ? 'erasable' : ''} ${highlightedError === `transition-${tr.idx}` ? 'line-error' : ''}`}
                    markerEnd={`url(#${interactionMode === 'ERASE' ? 'arrowhead-erase' : highlightedError === `transition-${tr.idx}` ? 'arrowhead-error' : 'arrowhead'})`}
                  />
                ))}
              </svg>

              {transitionRenders.map((tr) => {
                const isClickable = selectedSymbolCard || interactionMode === 'ERASE';
                const isError = highlightedError === `transition-${tr.idx}`;
                return (
                  <div
                    key={`label-${tr.idx}`}
                    className={`transition-label ${isClickable ? 'clickable action-target' : ''} ${interactionMode === 'ERASE' ? 'erasable-target' : ''}`}
                    style={{
                      left: tr.src.id === tr.tgt.id ? `${tr.src.x}%` : `${tr.labelPxX}px`,
                      top:  tr.src.id === tr.tgt.id ? `calc(${tr.src.y}% - 55px)` : `${tr.labelPxY}px`,
                    }}
                    onClick={(e) => { e.stopPropagation(); if (isClickable) handleTransitionClick(tr.idx); }}
                  >
                    <input
                      type="text"
                      value={tr.symbol}
                      onChange={(e) => handleSymbolChange(tr.idx, e.target.value)}
                      className={`transition-input ${isError ? 'error-pulse-severe' : ''}`}
                      maxLength={5}
                      readOnly={!!isClickable}
                    />
                  </div>
                );
              })}

              {nodes.map(node => {
                const simCls =
                  simHighlight.nodeId === node.id
                    ? simHighlight.type === 'ok'    ? 'sim-active'
                    : simHighlight.type === 'done'  ? 'sim-done'
                    : simHighlight.type === 'error' ? 'sim-error'
                    : '' : '';
                return (
                  <div
                    key={node.id}
                    className={`node ${node.isInitial ? 'initial' : ''} ${node.isFinal ? 'final' : ''} ${selectedNodes.includes(node.id) ? 'selected' : ''} ${interactionMode === 'ERASE' ? 'erasable-node' : ''} ${simCls}`}
                    style={{ top: `${node.y}%`, left: `${node.x}%` }}
                    onPointerDown={(e) => handlePointerDownNode(e, node.id)}
                  >
                    <input
                      type="text"
                      className="node-id-input"
                      value={node.id}
                      onChange={(e) => handleNodeIdChange(node.id, e.target.value)}
                      readOnly={interactionMode === 'ERASE'}
                    />
                  </div>
                );
              })}
            </div>
          )}
        </section>

        {/* ── PAINEL DIREITO ── */}
        <aside className="test-panel">
          <div className="section-header" style={{ fontSize: '12px', padding: '6px' }}>Palavras aceitas pela linguagem</div>

          <div className="test-input-area">
            <input
              type="text"
              className="word-input"
              placeholder={currentLevel?.shortestWord === null ? "Digite 'null'..." : "Nova palavra..."}
              value={newWord}
              onChange={(e) => setNewWord(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleTestWord()}
            />
            <button className="add-test-btn" onClick={handleTestWord}>+</button>
          </div>

          {/* Botão de simulação passo a passo */}
          {isDrawingUnlocked && (
            <button className="simulate-btn" onClick={openSimulation}>
              🔬 Simular Passo a Passo
            </button>
          )}

          {/* Lista de palavras com scroll */}
          <div className="words-list">
            {testWords.map((item, idx) => (
              <div key={idx} className={`word-row ${item.status}`}>
                <span>{item.word}</span>
                <span>{item.status === 'shortest' ? '★ MENOR' : item.status === 'correct' ? '✓' : item.status === 'wrong' ? '✕' : ''}</span>
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

      {/* ── RODAPÉ: CARTAS ── */}
      {(() => {
        const discoveredSymbols = new Set(
          testWords.filter(w => w.status === 'correct' || w.status === 'shortest')
            .map(w => w.word.split('')).flat()
        );
        return (
          <footer className="bottom-hand">
            <div className="cards-scroll-wrapper">
              {drawnCards.map((card) => {
                if (card.type === 'separator') return <div key={card.id} className="card-separator slide-up-fade" />;

                if (card.type === 'action') {
                  let cardClass = '', onClick = null;
                  if (card.action === 'toggleInitial') { cardClass = 'initial';    onClick = setInitialMode; }
                  if (card.action === 'addNode')       { cardClass = 'state';      onClick = addNode; }
                  if (card.action === 'addTransition') { cardClass = 'transition'; onClick = addTransitionMode; }
                  if (card.action === 'toggleFinal')   { cardClass = 'final';      onClick = toggleFinalStateMode; }
                  if (card.action === 'erase')         { cardClass = 'erase';      onClick = setEraserMode; }

                  const isSelected = (
                    (card.action === 'toggleInitial' && interactionMode === 'TOGGLE_INITIAL') ||
                    (card.action === 'addTransition' && interactionMode === 'CONNECTING') ||
                    (card.action === 'toggleFinal'   && interactionMode === 'TOGGLE_FINAL') ||
                    (card.action === 'erase'         && interactionMode === 'ERASE') ||
                    (card.action === 'addNode'       && interactionMode === 'ADD_NODE')
                  );
                  const isErrorHighlighted = highlightedError === card.action;

                  const iconMap = { toggleInitial: '▶', addNode: '◯', addTransition: '↗', toggleFinal: '◎', erase: '🗑' };
                  return (
                    <div
                      key={card.id}
                      data-icon={iconMap[card.action] || ''}
                      className={`card ${cardClass} slide-up-fade ${isSelected ? 'selected-card' : ''} ${isErrorHighlighted ? 'error-pulse-severe' : ''}`}
                      onClick={onClick}
                    >
                      <div className="card-header">Ação</div>
                      <div className="card-icon">{card.icon}</div>
                      <div className="card-footer">{card.label}</div>
                    </div>
                  );
                }

                if (card.type === 'symbol') {
                  const isSelected = selectedSymbolCard === card.symbol;
                  const isLocked = !discoveredSymbols.has(card.symbol);
                  return (
                    <div
                      key={card.id}
                      data-icon={isLocked ? '🔒' : card.symbol}
                      className={`card symbol-card slide-up-fade ${isSelected ? 'selected-card' : ''} ${isLocked ? 'locked-letter' : ''}`}
                      onClick={() => {
                        if (transitions.length === 0 || isLocked) return;
                        setInteractionMode('IDLE');
                        setConnectingSource(null);
                        setSelectedSymbolCard(isSelected ? null : card.symbol);
                      }}
                    >
                      <div className="card-header">Alfabeto</div>
                      <div className="card-icon" style={{ fontSize: '36px', color: '#7c3aed' }}>
                        {isLocked ? '🔒' : card.symbol}
                      </div>
                      <div className="card-footer">Usar Símbolo</div>
                    </div>
                  );
                }

                return null;
              })}
            </div>
          </footer>
        );
      })()}

      {/* ── HUD DO PROFESSOR MAURÍLIO ──
          Balão fica ACIMA do personagem.
          O container inteiro sobe conforme há mensagem (flexbox coluna, alinhado embaixo).
      */}
      {isDrawingUnlocked && (
        <div className="professor-hud">
          {professorMessage && (
            <div className="professor-balloon">
              <img src={imgBalaoFala} alt="" />
              <div className="professor-balloon-text">{professorMessage}</div>
            </div>
          )}
          <img
            src={imgMaurilioSerio}
            alt="Professor Maurílio"
            className="prof-img"
            onClick={() => triggerProfessorSpeech(currentLevel?.hint || "Continue tentando!")}
          />
        </div>
      )}

      {/* ── TELA DE VITÓRIA ── */}
      {showVictoryScreen && (() => {
        const currentIndex = GAME_LEVELS.findIndex(l => l.id === currentLevel?.id);
        const nextLevel = currentIndex >= 0 && currentIndex < GAME_LEVELS.length - 1 ? GAME_LEVELS[currentIndex + 1] : null;
        return (
          <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0,0,0,0.85)', zIndex: 9999, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
              <img src={imgMaurilioExplicando} alt="Professor" style={{ height: '350px', zIndex: 2, marginRight: '-30px' }} />
              <div style={{ position: 'relative', width: '320px', height: '220px', marginTop: '-50px', zIndex: 1 }}>
                <img src={imgBalaoFala} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }} />
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px 20px 50px 20px', boxSizing: 'border-box', color: '#000', fontSize: '18px', fontWeight: '900', textAlign: 'center', zIndex: 2 }}>
                  {currentLevel?.successMsg || "Parabéns, você dominou esta linguagem!"}
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '20px', marginTop: '40px' }}>
              <button className="menu-btn" onClick={() => { setShowVictoryScreen(false); setTela('MENU'); }} style={{ padding: '15px 30px', fontSize: '20px' }}>Voltar ao Menu</button>
              {nextLevel && (
                <button className="menu-btn primary" onClick={() => { setShowVictoryScreen(false); loadLevel(nextLevel); }} style={{ padding: '15px 30px', fontSize: '20px' }}>
                  Próxima Fase: {nextLevel.label}
                </button>
              )}
            </div>
          </div>
        );
      })()}
    </div>
  );
}