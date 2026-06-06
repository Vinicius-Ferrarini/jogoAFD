// TuringLab — App.jsx v3.0
// v3.0: Undo/Redo, Simulação no Rodapé, Cores Zoom Corrigidas, Validação Duplicata Aprimorada
import { useState, useRef, useEffect, useCallback, useMemo, forwardRef, useImperativeHandle } from 'react';
import './AFDPart1.css';
import { SvgStars, DifficultyLegend } from './SvgStar';
import { GAME_LEVELS, LEVEL_DIFFICULTY, DIFF_COLOR } from '../../levels';
import FormalDescriptionModal from './FormalDescriptionModal';
import imgMaurilioApontando  from '../../assets/maurilio2_apontando_pro_lado.webp';
import imgMaurilioSerio      from '../../assets/maurilio1_serio.webp';
import imgMaurilioExplicando from '../../assets/maurilio3_explicando.webp';
import imgBalaoFala          from '../../assets/balao_fala_redondo.webp';

// ─── Utilitário: gera um UID curto ───────────────────────────────────────────
let _uidCounter = 0;
const genUid = () => `_n${++_uidCounter}_${Math.random().toString(36).slice(2, 6)}`;

// ─── Aceita palavra contra regex ou função validate do nível ─────────────────
function lvlAccepts(level, word) {
  if (typeof level.validate === 'function') return level.validate(word);
  return level.regex?.test(word) ?? false;
}

const DRAW_COLORS = [
  { hex: '#FF0000', label: 'Vermelho' },
  { hex: '#1a1a1a', label: 'Grafite' },
  { hex: '#3b82f6', label: 'Azul' },
  { hex: '#22c55e', label: 'Verde' },
  { hex: '#f59e0b', label: 'Laranja' },
  { hex: '#a855f7', label: 'Roxo' },
  { hex: '#f8f8f8', label: 'Branco' },
];

// Converte array de pontos em path SVG suavizado com Bézier quadrático (midpoint smoothing)
function pointsToPath(pts) {
  if (pts.length < 2) return '';
  if (pts.length === 2) return `M${pts[0].x} ${pts[0].y} L${pts[1].x} ${pts[1].y}`;
  let d = `M${pts[0].x} ${pts[0].y}`;
  for (let i = 1; i < pts.length - 1; i++) {
    const mx = (pts[i].x + pts[i + 1].x) / 2;
    const my = (pts[i].y + pts[i + 1].y) / 2;
    d += ` Q${pts[i].x} ${pts[i].y} ${mx} ${my}`;
  }
  const last = pts[pts.length - 1];
  d += ` L${last.x} ${last.y}`;
  return d;
}

function arrowHeadPoints(x1, y1, x2, y2, sw) {
  const angle = Math.atan2(y2 - y1, x2 - x1);
  const len = Math.max(14, sw * 5);
  const spread = Math.PI / 6;
  return [
    x2 - len * Math.cos(angle - spread), y2 - len * Math.sin(angle - spread),
    x2, y2,
    x2 - len * Math.cos(angle + spread), y2 - len * Math.sin(angle + spread),
  ].map(v => +v.toFixed(2)).join(' ');
}

function StrokeEl({ stroke, idx }) {
  const common = { stroke: stroke.color, strokeWidth: stroke.width, fill: 'none', opacity: 0.88 };
  if (stroke.type === 'pencil' || !stroke.type) {
    return <path key={idx} d={pointsToPath(stroke.points)} {...common}
      strokeLinecap="round" strokeLinejoin="round" />;
  }
  if (stroke.type === 'line') {
    return <line key={idx} x1={stroke.x1} y1={stroke.y1} x2={stroke.x2} y2={stroke.y2}
      {...common} strokeLinecap="round" />;
  }
  if (stroke.type === 'arrow') {
    const head = arrowHeadPoints(stroke.x1, stroke.y1, stroke.x2, stroke.y2, stroke.width);
    return <g key={idx} opacity={0.88}>
      <line x1={stroke.x1} y1={stroke.y1} x2={stroke.x2} y2={stroke.y2}
        stroke={stroke.color} strokeWidth={stroke.width} strokeLinecap="round" />
      <polygon points={head} fill={stroke.color} stroke={stroke.color} strokeWidth={1} />
    </g>;
  }
  if (stroke.type === 'rect') {
    const x = Math.min(stroke.x1, stroke.x2), y = Math.min(stroke.y1, stroke.y2);
    const w = Math.abs(stroke.x2 - stroke.x1), h = Math.abs(stroke.y2 - stroke.y1);
    return <rect key={idx} x={x} y={y} width={w} height={h}
      {...common} strokeLinejoin="round" rx={2} />;
  }
  return null;
}

// ─── TransitionLabel: chips verticais com edição inline ─────────────────────
const TransitionLabel = forwardRef(function TransitionLabel({ idx, symbol, interactionMode, selectedSymbolCard, isDrawingUnlocked, isError, style, className, onAdd, onEdit, onErase, onAppendCard }, ref) {
  const [mode, setMode] = useState(null); // null | 'adding' | { type:'editing', chipIdx:number }
  const [inputVal, setInputVal] = useState('');
  const inputRef = useRef(null);

  const symList = symbol ? symbol.split(',').map(s => s.trim()).filter(Boolean) : [];

  // Auto-abre input em setas recém-criadas (sem símbolo)
  useEffect(() => {
    if (!symbol || symbol === '') { setMode('adding'); setInputVal(''); }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (mode !== null) { const t = setTimeout(() => inputRef.current?.focus(), 20); return () => clearTimeout(t); }
  }, [mode]);

  useImperativeHandle(ref, () => ({
    triggerAdd() { if (mode === null) { setMode('adding'); setInputVal(''); } }
  }), [mode]);

  const commitAdd = () => {
    const v = inputVal.trim();
    if (v) onAdd(idx, v);
    setMode(null); setInputVal('');
  };

  const commitEdit = () => {
    const v = inputVal.trim();
    if (typeof mode?.chipIdx === 'number' && v) onEdit(idx, mode.chipIdx, v);
    setMode(null); setInputVal('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') { e.preventDefault(); mode === 'adding' ? commitAdd() : commitEdit(); }
    if (e.key === 'Escape') { setMode(null); setInputVal(''); }
  };

  const handleContainerClick = (e) => {
    e.stopPropagation();
    if (!isDrawingUnlocked) return;
    if (interactionMode === 'ERASE') { onErase(idx); return; }
    if (selectedSymbolCard) { onAppendCard(idx); return; }
    if (mode === null) { setMode('adding'); setInputVal(''); }
  };

  const handleChipClick = (e, chipIdx) => {
    e.stopPropagation();
    if (!isDrawingUnlocked) return;
    if (interactionMode === 'ERASE') { onErase(idx); return; }
    if (selectedSymbolCard) { onAppendCard(idx); return; }
    setMode({ type: 'editing', chipIdx });
    setInputVal(symList[chipIdx]);
  };

  return (
    <div
      className={`transition-label${interactionMode === 'ERASE' ? ' erasable-target' : ''}${selectedSymbolCard ? ' clickable action-target' : ''}${isError ? ' error-pulse-severe' : ''}${className ? ' ' + className : ''}`}
      style={style}
      onClick={handleContainerClick}
    >
      <div className="transition-chips">
        {symList.map((sym, i) =>
          mode?.type === 'editing' && mode.chipIdx === i ? (
            <input key={i} ref={inputRef} className="transition-chip-input"
              value={inputVal} onChange={e => setInputVal(e.target.value)}
              onBlur={commitEdit} onKeyDown={handleKeyDown}
              onClick={e => e.stopPropagation()} maxLength={4}
              autoComplete="off" spellCheck={false} />
          ) : (
            <span key={i} className="transition-chip" onClick={e => handleChipClick(e, i)}>{sym}</span>
          )
        )}
        {mode === 'adding' ? (
          <input ref={inputRef} className="transition-chip-input"
            value={inputVal} onChange={e => setInputVal(e.target.value)}
            onBlur={commitAdd} onKeyDown={handleKeyDown}
            onClick={e => e.stopPropagation()} maxLength={4}
            autoComplete="off" spellCheck={false} />
        ) : symList.length === 0 ? (
          <span className="transition-chip empty">?</span>
        ) : null}
      </div>
    </div>
  );
});

// ─── SimPanel: layout compacto no rodapé ─────────────────────────────────────
function SimPanel({ word, nodes, transitions, onClose, onHighlightNode }) {
  const initState = nodes.find(n => n.isInitial)?.id ?? null;

  const buildSteps = () => {
    const steps = [];
    const w = (word === 'λ' || word === 'null' || word === 'vazio') ? '' : word;
    if (!initState) {
      steps.push({ type: 'error', icon: '❌', text: 'Nenhum estado inicial definido!', state: null, charIdx: -1 });
      return steps;
    }
    const initLabel = nodes.find(n => n.id === initState)?.label ?? initState;
    steps.push({ type: 'info', icon: '▶', text: `Início em "${initLabel}"`, state: initState, charIdx: -1 });
    let current = initState;
    for (let i = 0; i < w.length; i++) {
      const ch = w[i];
      const tr = transitions.find(t => t.from === current && t.symbol.split(',').map(s => s.trim()).includes(ch));
      if (!tr) {
        const curLabel = nodes.find(n => n.id === current)?.label ?? current;
        steps.push({ type: 'error', icon: '❌', text: `"${curLabel}" sem transição com '${ch}' — REJEITADA`, state: current, charIdx: i });
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
      steps.push({ type: 'done', icon: '✅', text: `"${finalLabel}" é estado final`, state: current, charIdx: w.length });
    } else {
      steps.push({ type: 'error', icon: '❌', text: `"${finalLabel}" não é estado final`, state: current, charIdx: w.length });
    }
    return steps;
  };

  const steps = useMemo(buildSteps, []);
  const [stepIdx, setStepIdx] = useState(0);
  const currentStep = steps[stepIdx];
  const w = (word === 'λ' || word === 'null' || word === 'vazio') ? '' : word;
  const isFinished = stepIdx === steps.length - 1;
  const accepted   = isFinished && currentStep?.type === 'done';

  useEffect(() => {
    onHighlightNode(currentStep?.state ?? null, currentStep?.type ?? null);
    return () => onHighlightNode(null, null);
  }, [stepIdx, currentStep, onHighlightNode]);

  useEffect(() => {
    if (isFinished) { const t = setTimeout(() => onClose(), 6000); return () => clearTimeout(t); }
  }, [isFinished, onClose]);

  return (
    <div className="sim-panel-container">
      <div className="sim-panel-header">
        <span className="sim-panel-title">🔬 <b>{w || 'λ'}</b></span>
        <div className="sim-word-display">
          {w.length === 0
            ? <span className="sim-char">λ</span>
            : w.split('').map((ch, i) => {
                const ci = currentStep?.charIdx ?? -1;
                let cls = 'sim-char';
                if (i === ci) cls += ' active';
                else if (i < ci) cls += ' done-ok';
                return <span key={i} className={cls}>{ch}</span>;
              })
          }
        </div>
        {isFinished && (
          <span className={`sim-result-badge ${accepted ? 'accepted' : 'rejected'}`}>
            {accepted ? '✅ ACEITA' : '❌ REJEITADA'}
          </span>
        )}
        <button className="sim-panel-close" onClick={onClose}>✕</button>
      </div>

      <div className="sim-panel-body">
        <div className={`sim-current-step ${currentStep?.type || ''}`}>
          <span className="sim-step-icon">{currentStep?.icon}</span>
          <span>{currentStep?.text}</span>
        </div>
      </div>

      <div className="sim-panel-nav">
        <button className="sim-nav-btn" onClick={() => setStepIdx(i => Math.max(0, i-1))} disabled={stepIdx === 0}>◀</button>
        <span className="sim-progress">{stepIdx + 1} / {steps.length}</span>
        <button className="sim-nav-btn" onClick={() => setStepIdx(i => Math.min(steps.length-1, i+1))} disabled={isFinished}>▶</button>
      </div>
    </div>
  );
}

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

  // ── Drawing state (deve vir antes de UNDO/REDO por causa do useEffect de teclado) ──
  const [drawings, setDrawings]           = useState([]);
  const [drawingStack, setDrawingStack]   = useState([]);
  const [currentStroke, setCurrentStroke] = useState(null);
  const [drawColor, setDrawColor]         = useState('#FF0000');
  const [drawSize, setDrawSize]           = useState(3);
  const [isErasing, setIsErasing]         = useState(false);
  const [drawTool, setDrawTool]           = useState('pencil'); // 'pencil'|'line'|'arrow'|'rect'
  const isDrawingRef    = useRef(false);
  const currentStrokeRef = useRef(null);
  const drawingsRef      = useRef([]);

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

  // Undo para traços de desenho
  const drawUndo = useCallback(() => {
    if (drawingStack.length === 0) return;
    const snapshot = drawingStack[drawingStack.length - 1];
    setDrawingStack(prev => prev.slice(0, -1));
    setDrawings(snapshot);
    drawingsRef.current = snapshot;
  }, [drawingStack]);

  // Atalhos de teclado: Ctrl+Z, Ctrl+Y
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'z' && !e.shiftKey) {
        e.preventDefault();
        if (drawingStack.length > 0) drawUndo();
        else undo();
      }
      if ((e.ctrlKey || e.metaKey) && (e.key === 'y' || (e.key === 'z' && e.shiftKey))) {
        e.preventDefault();
        redo();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [undo, redo, drawUndo, drawingStack]);

  // ── Estado geral ───────────────────────────────────────────────────────────
  const [tela, setTela]             = useState('MENU');
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
  const [showVictoryScreen, setShowVictoryScreen]     = useState(false);
  const [showImpossibleScreen, setShowImpossibleScreen] = useState(false);
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
    setShowImpossibleScreen(false);
    setProfessorMessage('');
    setZoom(1);
    setPan({ x: 0, y: 0 });
    setSelectedNodes([]);
    setShowSimPanel(false);
    setSimHighlight({ nodeId: null, type: null });
    setHistory([{ nodes: [], transitions: [] }]);
    setHistoryIndex(0);
    setDrawings([]);
    setDrawingStack([]);
    setCurrentStroke(null);
    setIsErasing(false);
    setDrawTool('pencil');
    drawingsRef.current = [];
    isDrawingRef.current = false;
    currentStrokeRef.current = null;
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

    if ((currentLevel.regex || currentLevel.validate) && !(target === null && isSpecialNull))
      isValid = lvlAccepts(currentLevel, newWord);

    const wordDisplay = newWord === '' ? 'λ' : newWord;
    if (testWords.some(w => w.word === wordDisplay)) {
      showToast('Você já testou essa palavra!', 'info'); return;
    }

    if (isShortest) {
      if (!isDrawingUnlocked) {
        updateProgress(currentLevel.id, 1);
        if (currentLevel.impossible) {
          setShowImpossibleScreen(true);
        } else {
        setIsDrawingUnlocked(true);
        showToast('Sucesso! Tabuleiro liberado.', 'success');
        const initialCards = [
          { id: 'c0', type: 'action', action: 'toggleInitial', icon: '▶', label: 'Estado Inicial' },
          { id: 'c1', type: 'action', action: 'addNode',       icon: '◯', label: 'Novo Estado' },
          { id: 'c2', type: 'action', action: 'addTransition', icon: '↗', label: 'Criar Seta' },
          { id: 'c3', type: 'action', action: 'toggleFinal',   icon: '◎', label: 'Definir Final' },
          { id: 'c4', type: 'action', action: 'erase',         icon: '🗑', label: 'Apagar' },
          { id: 'cu', type: 'action', action: 'undo',          icon: '↶', label: 'Desfazer' },
          { id: 'cr', type: 'action', action: 'redo',          icon: '↷', label: 'Refazer' },
        ];
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

  // ── Helpers de modo ───────────────────────────────────────────────────────
  const resetMode = () => {
    setConnectingSource(null);
    setSelectedSymbolCard(null);
    setSelectedNodes([]);
    isDrawingRef.current = false;
    currentStrokeRef.current = null;
    setCurrentStroke(null);
  };
  const setInitialMode       = () => { if (!isDrawingUnlocked) return; setInteractionMode('TOGGLE_INITIAL'); resetMode(); };
  const addNodeMode          = () => { if (!isDrawingUnlocked) return; setInteractionMode('ADD_NODE');        resetMode(); };
  const addTransitionMode    = () => { if (!isDrawingUnlocked) return; setInteractionMode('CONNECTING');      resetMode(); };
  const toggleFinalStateMode = () => { if (!isDrawingUnlocked) return; setInteractionMode('TOGGLE_FINAL');    resetMode(); };
  const setEraserMode        = () => { if (!isDrawingUnlocked) return; setInteractionMode('ERASE');           resetMode(); };
  const setDrawMode          = () => { if (!isDrawingUnlocked) return; setInteractionMode('DRAW');            resetMode(); };
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
      const allSyms = transitions
        .filter(t => t.from === node.id)
        .flatMap(t => t.symbol.split(',').map(s => s.trim()).filter(Boolean));
      if (allSyms.length !== new Set(allSyms).size) {
        if (showErrors) showToast(`Não determinístico! "${node.label || node.id}" tem símbolo duplicado nas setas.`, 'error');
        return false;
      }
    }

    const alphabetSet = new Set(currentLevel?.alphabet || []);
    if (alphabetSet.size > 0) {
      for (const t of transitions) {
        for (const sym of t.symbol.split(',').map(s => s.trim()).filter(Boolean)) {
          if (!alphabetSet.has(sym)) {
            if (showErrors) showToast(`Símbolo "${sym}" não pertence ao alfabeto { ${[...alphabetSet].join(', ')} }!`, 'error');
            return false;
          }
        }
      }
    }

    const simulateDFA = (word) => {
      let cur = nodes.find(n => n.isInitial)?.id;
      if (!cur) return false;
      const w = (word === 'λ' || word === 'null' || word === 'vazio') ? '' : word;
      for (const ch of w) {
        const tr = transitions.find(t => t.from === cur && t.symbol.split(',').map(s => s.trim()).includes(ch));
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

    // Auto-testa palavras geradas do alfabeto para pegar DFAs incompletos/incorretos
    if ((currentLevel?.regex || currentLevel?.validate) && (currentLevel?.alphabet || []).length > 0) {
      const alph = currentLevel.alphabet;
      const shortLen = typeof currentLevel.shortestWord === 'string' ? currentLevel.shortestWord.length : 1;
      const maxLen = Math.min(6, Math.max(3, shortLen + 3));
      const toTest = [''];
      for (let len = 1; len <= maxLen; len++) {
        const base = toTest.filter(w => w.length === len - 1);
        for (const w of base) for (const sym of alph) toTest.push(w + sym);
      }
      for (const word of toTest) {
        const regexAccepts = lvlAccepts(currentLevel, word);
        const dfaAccepts   = simulateDFA(word);
        if (regexAccepts !== dfaAccepts) {
          if (showErrors) {
            const display = word === '' ? 'λ (palavra vazia)' : `"${word}"`;
            showToast(`Autômato incorreto! ${display} deveria ser ${regexAccepts ? 'aceita' : 'rejeitada'}.`, 'error');
          }
          return false;
        }
      }
    }

    return true;
  }, [nodes, transitions, testWords, showToast, currentLevel]);

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

  // ── Pointer: canvas ───────────────────────────────────────────────────────
  const handlePointerDownCanvas = useCallback((e) => {
    if (!isDrawingUnlocked) return;

    if (interactionMode === 'DRAW') {
      const rect = canvasRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - pan.x) / zoom;
      const y = (e.clientY - rect.top  - pan.y) / zoom;
      if (isErasing) {
        setDrawingStack(prev => [...prev, drawingsRef.current]);
      } else if (drawTool === 'pencil') {
        const stroke = { type: 'pencil', color: drawColor, width: drawSize, points: [{ x, y }] };
        currentStrokeRef.current = stroke;
        setCurrentStroke(stroke);
      } else {
        const stroke = { type: drawTool, color: drawColor, width: drawSize, x1: x, y1: y, x2: x, y2: y };
        currentStrokeRef.current = stroke;
        setCurrentStroke(stroke);
      }
      isDrawingRef.current = true;
      e.target.setPointerCapture(e.pointerId);
      return;
    }

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
  }, [isDrawingUnlocked, interactionMode, pan, zoom, nodes, transitions, recordHistory, drawColor, drawSize, isErasing, drawTool]);

  // ── Pointer: nó ───────────────────────────────────────────────────────────
  const handlePointerDownNode = useCallback((e, uid) => {
    if (!isDrawingUnlocked) return;
    e.stopPropagation();

    if (interactionMode === 'ERASE') {
      const targetNode = nodes.find(n => n.uid === uid);
      const newNodes = nodes.filter(n => n.uid !== uid);
      const newTrans = targetNode
        ? transitions.filter(t => t.from !== targetNode.id && t.to !== targetNode.id)
        : transitions;
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
        const exists = transitions.some(t => t.from === srcNode.id && t.to === tgtNode.id);
        if (exists) {
          showToast('Seta já existe! Clique na seta para adicionar um símbolo.', 'info');
        } else {
          const newTrans = [...transitions, { from: srcNode.id, symbol: '', to: tgtNode.id }];
          setTransitions(newTrans);
          recordHistory(nodes, newTrans);
        }
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

    if (interactionMode === 'DRAW' && isDrawingRef.current) {
      if (isErasing) {
        const ERASE_R = 20;
        setDrawings(prev => {
          const next = prev.filter(s =>
            !s.points.some(p => Math.hypot(p.x - ix, p.y - iy) < ERASE_R)
          );
          drawingsRef.current = next;
          return next;
        });
      } else if (currentStrokeRef.current) {
        if (drawTool === 'pencil') {
          const pts = currentStrokeRef.current.points;
          const last = pts[pts.length - 1];
          if (Math.hypot(ix - last.x, iy - last.y) < 3) return;
          const updated = { ...currentStrokeRef.current, points: [...pts, { x: ix, y: iy }] };
          currentStrokeRef.current = updated;
          setCurrentStroke({ ...updated });
        } else {
          const updated = { ...currentStrokeRef.current, x2: ix, y2: iy };
          currentStrokeRef.current = updated;
          setCurrentStroke({ ...updated });
        }
      }
      return;
    }

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
  }, [isDrawingUnlocked, isPanning, pan, zoom, selectionBox, dragInfo, selectedNodes, interactionMode, isErasing, drawTool]);

  // ── Pointer: up ───────────────────────────────────────────────────────────
  const handlePointerUp = useCallback((e) => {
    try { e.target.releasePointerCapture(e.pointerId); } catch (_) {}

    if (interactionMode === 'DRAW' && isDrawingRef.current) {
      isDrawingRef.current = false;
      const stroke = currentStrokeRef.current;
      const isShape = stroke && stroke.type && stroke.type !== 'pencil';
      const valid = stroke && (
        isShape
          ? Math.hypot(stroke.x2 - stroke.x1, stroke.y2 - stroke.y1) > 4
          : stroke.points && stroke.points.length > 1
      );
      if (!isErasing && valid) {
        setDrawingStack(prev => [...prev, drawingsRef.current]);
        setDrawings(prev => {
          const next = [...prev, stroke];
          drawingsRef.current = next;
          return next;
        });
      }
      currentStrokeRef.current = null;
      setCurrentStroke(null);
      return;
    }

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
  }, [isPanning, dragInfo, selectionBox, nodes, transitions, selectedNodes, recordHistory, interactionMode, isErasing]);

  // ── Renomear nó — previne duplicatas ──────────────────────────────────────
  const [editingNodeLabel, setEditingNodeLabel] = useState(null);

  const handleNodeLabelFocus = useCallback((uid, currentLabel) => {
    setEditingNodeLabel({ uid, oldLabel: currentLabel });
  }, []);

  const handleNodeLabelChange = useCallback((uid, value) => {
    // Only update the display label; keep id unchanged until blur so edges stay visible
    setNodes(prev => prev.map(n => n.uid === uid ? { ...n, label: value } : n));
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

  // ── Handlers de transição (chips inline) ─────────────────────────────────
  const handleAddSymbol = useCallback((idx, sym) => {
    const newTrans = [...transitions];
    const existing = newTrans[idx].symbol.split(',').map(s => s.trim()).filter(Boolean);
    if (!existing.includes(sym)) {
      newTrans[idx] = { ...newTrans[idx], symbol: [...existing, sym].join(',') };
      setTransitions(newTrans);
      recordHistory(nodes, newTrans);
    }
  }, [transitions, nodes, recordHistory]);

  const handleEditSymbol = useCallback((idx, chipIdx, newSym) => {
    const newTrans = [...transitions];
    const existing = newTrans[idx].symbol.split(',').map(s => s.trim()).filter(Boolean);
    existing[chipIdx] = newSym;
    newTrans[idx] = { ...newTrans[idx], symbol: existing.join(',') };
    setTransitions(newTrans);
    recordHistory(nodes, newTrans);
  }, [transitions, nodes, recordHistory]);

  const handleEraseTransition = useCallback((idx) => {
    const newTrans = transitions.filter((_, i) => i !== idx);
    setTransitions(newTrans);
    recordHistory(nodes, newTrans);
  }, [transitions, nodes, recordHistory]);

  const handleAppendCardToTransition = useCallback((idx) => {
    if (!selectedSymbolCard) return;
    const newTrans = [...transitions];
    const existing = newTrans[idx].symbol.split(',').map(s => s.trim()).filter(Boolean);
    const sym = selectedSymbolCard;
    if (!existing.includes(sym)) {
      newTrans[idx] = { ...newTrans[idx], symbol: [...existing, sym].join(',') };
      setTransitions(newTrans);
      recordHistory(nodes, newTrans);
    }
    setSelectedSymbolCard(null);
  }, [selectedSymbolCard, transitions, nodes, recordHistory]);

  const transitionLabelRefs = useRef({});

  const handleTransitionLineClick = useCallback((e, idx) => {
    e.stopPropagation();
    if (!isDrawingUnlocked) return;
    if (interactionMode === 'ERASE') { handleEraseTransition(idx); return; }
    if (selectedSymbolCard) { handleAppendCardToTransition(idx); return; }
    transitionLabelRefs.current[idx]?.triggerAdd();
  }, [isDrawingUnlocked, interactionMode, selectedSymbolCard, handleEraseTransition, handleAppendCardToTransition]);

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
      if (src.uid === tgt.uid) {
        const cx = (src.x * sw) / 100;
        const cy = (src.y * sh) / 100;
        pathD = `M ${cx - 16} ${cy - 29} C ${cx - 58} ${cy - 96} ${cx + 58} ${cy - 96} ${cx + 16} ${cy - 29}`;
        lx = cx; ly = cy - 82;
      } else if (bidir) {
        const dx = tx - sx, dy = ty - sy, dist = Math.sqrt(dx*dx + dy*dy);
        const nx = dist ? -dy/dist : 0, ny = dist ? dx/dist : 0;
        const off = 40;
        const qcx = (sx+tx)/2 + nx*off, qcy = (sy+ty)/2 + ny*off;
        pathD = `M ${sx} ${sy} Q ${qcx} ${qcy} ${tx} ${ty}`;
        lx = ((sx+tx)/2 + qcx)/2 + nx*10;
        ly = ((sy+ty)/2 + qcy)/2 + ny*10;
      } else {
        pathD = `M ${sx} ${sy} L ${tx} ${ty}`;
        lx = (sx+tx)/2; ly = (sy+ty)/2;
      }
      return { ...t, idx, src, tgt, pathD, labelPxX: lx, labelPxY: ly, bidir };
    }).filter(Boolean);
  }, [transitions, nodes, canvasSize]);

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
      <div className="menu-screen menu-screen-fases" style={{ justifyContent: 'flex-start', paddingTop: 20 }}>
        <div style={{ display:'flex', alignItems:'center', marginBottom:14, width:'100%' }}>
          <div style={{ flex:1 }}>
            <button className="back-btn" onClick={() => onBack?.()}>⬅ Voltar</button>
          </div>
          <h1 className="menu-title" style={{ margin:0 }}>TuringLab</h1>
          <div style={{ flex:1 }} />
        </div>
        <p style={{ fontWeight: 900, fontSize: 16, color: '#555', marginBottom: 12,
          background: '#fde68a', border: '3px solid #000', borderRadius: 8,
          padding: '4px 16px', boxShadow: '3px 3px 0 #000' }}>
          🎨 Desenhar &amp; Formalizar
        </p>
        <div style={{ marginBottom: 18, fontWeight: 'bold', fontSize: 16 }}>
          Progresso: {maxStars > 0 ? Math.round((totalStars/maxStars)*100) : 0}% ({totalStars}/{maxStars} ★)
        </div>
        <div className="levels-grid">
          {pageItems.map(lvl => {
            const diff = LEVEL_DIFFICULTY[lvl.id] || 'easy';
            const bg   = DIFF_COLOR[diff];
            return (
              <button key={lvl.id} className="menu-btn primary" onClick={() => loadLevel(lvl)}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
                  background: bg, border: '3px solid #000', boxShadow: 'none' }}>
                <span>{lvl.label}</span>
                <SvgStars count={progress[lvl.id]?.stars || 0} size={14} />
              </button>
            );
          })}
        </div>
        <div style={{ display: 'flex', gap: 20, alignItems: 'center', marginTop: 20 }}>
          <button className="menu-btn" disabled={currentPage===1} onClick={() => setCurrentPage(p=>p-1)} style={{ opacity: currentPage===1 ? 0.5 : 1 }}>⬅ Anterior</button>
          <span style={{ fontWeight:'bold', fontSize:18, background:'#fff', padding:'5px 15px', border:'3px solid #000', borderRadius:8 }}>
            {currentPage} / {totalPages}
          </span>
          <button className="menu-btn" disabled={currentPage===totalPages} onClick={() => setCurrentPage(p=>p+1)} style={{ opacity: currentPage===totalPages ? 0.5 : 1 }}>Próxima ➡</button>
        </div>
        <DifficultyLegend />
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
          <button className="back-btn" onClick={() => onBack?.()}>⬅ Voltar</button>
        </div>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8 }}>
          <span className="mission-label">Objetivo</span>
          <div className="mission-formula">{currentLevel?.formula || ''}</div>
        </div>
        <div style={{ width: 150, textAlign: 'right' }}>
          <span className="mission-label">{currentLevel?.label}</span>
          <div style={{ marginTop: 4 }}><SvgStars count={progress[currentLevel?.id]?.stars || 0} size={15} /></div>
        </div>
      </header>

      {/* ── Barra de palavras testadas (dinâmica) ── */}
      {currentLevel && (
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
            interactionMode === 'DRAW'     ? (isErasing ? 'draw-erase-mode' : 'draw-mode') :
            interactionMode !== 'IDLE'     ? 'connecting-mode' : ''}`}
          ref={canvasRef}
          onPointerDown={handlePointerDownCanvas}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
        >
          {/* HUD Zoom + Riscar */}
          {isDrawingUnlocked && (
            <div style={{ position:'absolute', top:10, right:10, display:'flex', gap:4, zIndex:10, alignItems:'center' }}>
              <button onClick={setDrawMode} title="Riscar"
                style={{ width:30, height:30, background: interactionMode==='DRAW' ? '#bfdbfe' : '#fef08a',
                  border: interactionMode==='DRAW' ? '2.5px solid #3b82f6' : '2.5px solid #000',
                  borderRadius:8, fontSize:15, cursor:'pointer',
                  boxShadow: interactionMode==='DRAW' ? '2px 2px 0 #1d4ed8' : '2px 2px 0 #000',
                  display:'flex', alignItems:'center', justifyContent:'center' }}>✏</button>
              <div style={{ display:'flex', gap:2, background:'#fff', padding:'3px 6px', border:'2.5px solid #000', borderRadius:8, boxShadow:'3px 3px 0 #000', alignItems:'center' }}>
                <button onClick={() => setZoom(z => Math.max(0.15, z-0.25))}
                  style={{ fontWeight:'bold', width:20, height:22, cursor:'pointer', border:'none', background:'transparent', fontSize:16, color:'#000', display:'flex', alignItems:'center', justifyContent:'center' }}>−</button>
                <span style={{ fontWeight:'bold', width:38, textAlign:'center', fontSize:11 }}>{Math.round(zoom*100)}%</span>
                <button onClick={() => setZoom(z => Math.min(6, z+0.25))}
                  style={{ fontWeight:'bold', width:20, height:22, cursor:'pointer', border:'none', background:'transparent', fontSize:16, color:'#000', display:'flex', alignItems:'center', justifyContent:'center' }}>+</button>
                <button onClick={() => { setZoom(1); setPan({x:0,y:0}); }}
                  style={{ fontWeight:'bold', marginLeft:2, cursor:'pointer', border:'none', background:'transparent', color:'var(--accent-blue)', fontSize:11 }}>↺</button>
              </div>
            </div>
          )}

          <div className="canvas-label">Área de Montagem</div>
          {isDrawingUnlocked && (interactionMode !== 'IDLE' || selectedSymbolCard) && (
            <div className="canvas-action-label">
              {selectedSymbolCard                                       && `Usar Símbolo: ${selectedSymbolCard}`}
              {!selectedSymbolCard && interactionMode === 'CONNECTING'     && '↗ Criar Seta'}
              {!selectedSymbolCard && interactionMode === 'TOGGLE_FINAL'   && '◎ Definir Final'}
              {!selectedSymbolCard && interactionMode === 'TOGGLE_INITIAL' && '▶ Estado Inicial'}
              {!selectedSymbolCard && interactionMode === 'ERASE'          && '🗑 Apagar'}
              {!selectedSymbolCard && interactionMode === 'ADD_NODE'       && '◯ Novo Estado'}
              {!selectedSymbolCard && interactionMode === 'DRAW' && !isErasing && '✏ Riscar'}
              {!selectedSymbolCard && interactionMode === 'DRAW' &&  isErasing && '⌫ Apagando Rabiscos'}
            </div>
          )}

          {!isDrawingUnlocked ? (
            <div className="locked-overlay">
              <div style={{ display:'flex', alignItems:'center', justifyContent:'center', marginTop:80 }}>
                <img src={imgMaurilioApontando} alt="Professor" style={{ height:320, zIndex:1 }} />
                <div style={{ position:'relative', width:210, height:140, marginLeft:-80, alignSelf:'flex-start', marginTop:-80 }}>
                  <img src={imgBalaoFala} alt="" style={{ position:'absolute', inset:0, width:'100%', height:'100%', zIndex:1 }} />
                  <div style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center',
                    padding:'14px 22px 34px 14px', boxSizing:'border-box', color:'#000', fontWeight:'bold', fontSize:16, textAlign:'center', zIndex:2 }}>
                    1ª Coisa: Descubra a Menor Palavra!
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <>
            {/* ── Toolbar de desenho (fora do transform, posição fixa no canvas) ── */}
            {interactionMode === 'DRAW' && (
              <div className="draw-toolbar">
                {/* Ferramentas */}
                {[
                  { id: 'pencil', icon: (
                    <svg width="15" height="15" viewBox="0 0 15 15">
                      <path d="M2 13 Q4 8 7 7.5 Q10 7 13 2" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
                    </svg>), title: 'Lápis (rabisco livre)' },
                  { id: 'line', icon: (
                    <svg width="15" height="15" viewBox="0 0 15 15">
                      <line x1="2" y1="7.5" x2="13" y2="7.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
                    </svg>), title: 'Linha reta' },
                  { id: 'arrow', icon: (
                    <svg width="15" height="15" viewBox="0 0 15 15">
                      <line x1="2" y1="7.5" x2="11" y2="7.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
                      <polygon points="11,4.5 15,7.5 11,10.5" fill="currentColor"/>
                    </svg>), title: 'Seta' },
                  { id: 'rect', icon: (
                    <svg width="14" height="14" viewBox="0 0 14 14">
                      <rect x="2" y="3" width="10" height="8" fill="none" stroke="currentColor" strokeWidth="2" rx="1"/>
                    </svg>), title: 'Retângulo' },
                ].map(({ id, icon, title }) => (
                  <button key={id}
                    className={`draw-tool-btn draw-type-btn${drawTool === id && !isErasing ? ' active' : ''}`}
                    title={title}
                    onClick={() => { setDrawTool(id); setIsErasing(false); }}>
                    {icon}
                  </button>
                ))}
                <div className="draw-toolbar-sep" />
                {/* Cores */}
                {DRAW_COLORS.map(({ hex, label }) => (
                  <button key={hex}
                    className={`draw-color-btn${drawColor === hex && !isErasing ? ' active' : ''}`}
                    style={{ background: hex === '#f8f8f8' ? '#f8f8f8' : hex,
                      border: hex === '#f8f8f8' ? '2.5px solid #aaa' : '2.5px solid #000' }}
                    title={label}
                    onClick={() => { setDrawColor(hex); setIsErasing(false); }}
                  />
                ))}
                <div className="draw-toolbar-sep" />
                {/* Espessura */}
                <div className="draw-stroke-size">
                  {[2, 4, 7].map(sz => (
                    <button key={sz}
                      className={drawSize === sz ? 'active' : ''}
                      style={{ width: 8 + sz * 3, height: 8 + sz * 3 }}
                      title={`Espessura ${sz}`}
                      onClick={() => { setDrawSize(sz); setIsErasing(false); }}
                    >
                      <span style={{ display:'block', width: sz * 1.5, height: sz * 1.5,
                        background: '#000', borderRadius: '50%' }} />
                    </button>
                  ))}
                </div>
                <div className="draw-toolbar-sep" />
                {/* Borracha / limpar / fechar */}
                <button className={`draw-tool-btn${isErasing ? ' active' : ''}`}
                  title="Borracha"
                  onClick={() => setIsErasing(e => !e)}>⌫</button>
                <button className="draw-tool-btn"
                  title="Apagar todos os rabiscos"
                  onClick={() => {
                    setDrawingStack(prev => [...prev, drawingsRef.current]);
                    setDrawings([]);
                    drawingsRef.current = [];
                  }}>🗑</button>
                <div className="draw-toolbar-sep" />
                <button className="draw-tool-btn" title="Fechar ferramenta"
                  style={{ fontSize: 11, fontWeight: 900 }}
                  onClick={() => setInteractionMode('IDLE')}>✕</button>
              </div>
            )}

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
                  <marker id="ah"    markerWidth="18" markerHeight="14" refX="48" refY="7" orient="auto" markerUnits="userSpaceOnUse"><polygon points="0 0,18 7,0 14" fill="#000"/></marker>
                  <marker id="ahe"   markerWidth="18" markerHeight="14" refX="48" refY="7" orient="auto" markerUnits="userSpaceOnUse"><polygon points="0 0,18 7,0 14" fill="#ef4444"/></marker>
                  <marker id="ahr"   markerWidth="18" markerHeight="14" refX="48" refY="7" orient="auto" markerUnits="userSpaceOnUse"><polygon points="0 0,18 7,0 14" fill="#dc2626"/></marker>
                  <marker id="ahsl"  markerWidth="18" markerHeight="14" refX="18" refY="7" orient="auto" markerUnits="userSpaceOnUse"><polygon points="0 0,18 7,0 14" fill="#000"/></marker>
                  <marker id="ahsle" markerWidth="18" markerHeight="14" refX="18" refY="7" orient="auto" markerUnits="userSpaceOnUse"><polygon points="0 0,18 7,0 14" fill="#ef4444"/></marker>
                </defs>
                {transitionRenders.map(tr => (
                  <path key={tr.idx} d={tr.pathD}
                    className={`transition-line ${interactionMode==='ERASE'?'erasable':''} ${highlightedError===`transition-${tr.idx}`?'line-error':''}`}
                    markerEnd={`url(#${
                      tr.src.uid === tr.tgt.uid
                        ? (interactionMode === 'ERASE' ? 'ahsle' : 'ahsl')
                        : (interactionMode === 'ERASE' ? 'ahe' : highlightedError === `transition-${tr.idx}` ? 'ahr' : 'ah')
                    })`}
                    style={{ pointerEvents: 'stroke', cursor: 'pointer' }}
                    onClick={e => handleTransitionLineClick(e, tr.idx)} />
                ))}
              </svg>

              {/* Labels das transições (chips inline) */}
              {transitionRenders.map(tr => (
                <TransitionLabel
                  key={`lbl-${tr.from}-${tr.to}`}
                  ref={el => { transitionLabelRefs.current[tr.idx] = el; }}
                  idx={tr.idx}
                  symbol={tr.symbol}
                  interactionMode={interactionMode}
                  selectedSymbolCard={selectedSymbolCard}
                  isDrawingUnlocked={isDrawingUnlocked}
                  isError={highlightedError === `transition-${tr.idx}`}
                  style={{
                    left: `${tr.labelPxX}px`,
                    top:  `${tr.labelPxY}px`,
                  }}
                  onAdd={handleAddSymbol}
                  onEdit={handleEditSymbol}
                  onErase={handleEraseTransition}
                  onAppendCard={handleAppendCardToTransition}
                />
              ))}

              {/* ── Camada de rabiscos (acima das transições, abaixo dos nós) ── */}
              <svg style={{ position:'absolute', inset:0, width:'100%', height:'100%',
                pointerEvents:'none', overflow:'visible' }}>
                {drawings.map((stroke, i) => <StrokeEl key={i} stroke={stroke} idx={i} />)}
                {currentStroke && <StrokeEl stroke={currentStroke} idx="cur" />}
              </svg>

              {/* Nós */}
              {nodes.map(node => {
                const simCls =
                  simHighlight.nodeId === node.id
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
            </>
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
                    onClick={clickMap[card.action]}>
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
      </footer>

      {/* ── Tela Impossível ── */}
      {showImpossibleScreen && (() => {
        const idx  = GAME_LEVELS.findIndex(l => l.id === currentLevel?.id);
        const next = idx >= 0 && idx < GAME_LEVELS.length - 1 ? GAME_LEVELS[idx + 1] : null;
        return (
          <div style={{ position:'fixed', inset:0, background:'rgba(0,0,0,0.85)', zIndex:9999,
            display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column' }}>
            <div style={{ display:'flex', alignItems:'flex-start', justifyContent:'center' }}>
              <img src={imgMaurilioExplicando} alt="Professor" style={{ height:320, zIndex:2, marginRight:-55 }} />
              <div style={{ position:'relative', width:320, height:220, marginTop:-150, zIndex:1 }}>
                <img src={imgBalaoFala} style={{ position:'absolute', inset:0, width:'100%', height:'100%', zIndex:1 }} />
                <div style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center',
                  padding:'20px 20px 52px', boxSizing:'border-box', color:'#000', fontSize:15, fontWeight:900, textAlign:'center', zIndex:2 }}>
                  Este exercício é impossível de resolver com AFD! Com AP nós vamos resolvê-lo! 🚫🔄
                </div>
              </div>
            </div>
            <div style={{ display:'flex', gap:20, marginTop:36 }}>
              <button className="menu-btn" onClick={() => { setShowImpossibleScreen(false); setTela('MENU'); }}
                style={{ padding:'14px 28px', fontSize:20 }}>Voltar ao Menu</button>
              {next && (
                <button className="menu-btn primary"
                  onClick={() => { updateProgress(currentLevel.id, 2); setShowImpossibleScreen(false); loadLevel(next); }}
                  style={{ padding:'14px 28px', fontSize:20 }}>
                  Entendido! Próxima: {next.label}
                </button>
              )}
            </div>
          </div>
        );
      })()}

      {/* ── Tela de Vitória ── */}
      {showVictoryScreen && (() => {
        const idx  = GAME_LEVELS.findIndex(l => l.id === currentLevel?.id);
        const next = idx >= 0 && idx < GAME_LEVELS.length-1 ? GAME_LEVELS[idx+1] : null;
        return (
          <div style={{ position:'fixed', inset:0, background:'rgba(0,0,0,0.85)', zIndex:9999,
            display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column' }}>
            <div style={{ display:'flex', alignItems:'flex-start', justifyContent:'center' }}>
              <img src={imgMaurilioExplicando} alt="Professor" style={{ height:320, zIndex:2, marginRight:-55 }} />
              <div style={{ position:'relative', width:300, height:210, marginTop:-140, zIndex:1 }}>
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
