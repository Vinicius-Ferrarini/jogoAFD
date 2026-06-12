import { useState, useRef, useEffect, useCallback } from 'react';

export default function useCanvasState({
  isDrawingUnlocked,
  setInteractionMode,
  squashNextHistoryRef,
  setConnectingSource,
  setSelectedSymbolCard,
  setSelectedNodes,
  tela,
  isSidebarOpen,
  canvasRef,
}) {
  // ── Desenho livre ────────────────────────────────────────────────────────────
  const [drawings, setDrawings]           = useState([]);
  const [drawingStack, setDrawingStack]   = useState([]);
  const [currentStroke, setCurrentStroke] = useState(null);
  const [drawColor, setDrawColor]         = useState('#FF0000');
  const [drawSize, setDrawSize]           = useState(3);
  const [isErasing, setIsErasing]         = useState(false);
  const [drawTool, setDrawTool]           = useState('pencil');
  const isDrawingRef     = useRef(false);
  const currentStrokeRef = useRef(null);
  const drawingsRef      = useRef([]);

  // ── Zoom / Pan / Tamanho do canvas ──────────────────────────────────────────
  const [zoom, setZoom]             = useState(1);
  const [pan, setPan]               = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning]   = useState(false);
  const [canvasSize, setCanvasSize] = useState({ w: 800, h: 600 });

  // Ref auxiliar para o handler de wheel (closure não-reativa)
  const isUnlockedRef = useRef(false);
  useEffect(() => { isUnlockedRef.current = isDrawingUnlocked; }, [isDrawingUnlocked]);

  // Wheel (non-passive) + resize
  useEffect(() => {
    if (tela !== 'JOGO') return;
    const update = () => {
      if (canvasRef.current)
        setCanvasSize({ w: canvasRef.current.clientWidth, h: canvasRef.current.clientHeight });
    };
    const el = canvasRef.current;
    window.addEventListener('resize', update);
    const tid = setTimeout(update, 50);
    const ro = el ? new ResizeObserver(update) : null;
    if (ro) ro.observe(el);
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
      if (ro) ro.disconnect();
      if (el) el.removeEventListener('wheel', onWheel);
    };
  }, [tela, isSidebarOpen, canvasRef]);

  // ── Undo de traço ────────────────────────────────────────────────────────────
  const drawUndo = useCallback(() => {
    if (drawingStack.length === 0) return;
    const snapshot = drawingStack[drawingStack.length - 1];
    setDrawingStack(prev => prev.slice(0, -1));
    setDrawings(snapshot);
    drawingsRef.current = snapshot;
  }, [drawingStack]);

  // ── resetMode: limpa estado transiente de interação ─────────────────────────
  const resetMode = useCallback(() => {
    setConnectingSource(null);
    setSelectedSymbolCard(null);
    setSelectedNodes([]);
    isDrawingRef.current = false;
    currentStrokeRef.current = null;
    setCurrentStroke(null);
    squashNextHistoryRef.current = false;
  }, [setConnectingSource, setSelectedSymbolCard, setSelectedNodes, squashNextHistoryRef]);

  // ── Atalhos de modo de interação ─────────────────────────────────────────────
  const setInitialMode       = useCallback(() => { if (!isDrawingUnlocked) return; setInteractionMode('TOGGLE_INITIAL'); resetMode(); }, [isDrawingUnlocked, setInteractionMode, resetMode]);
  const addNodeMode          = useCallback(() => { if (!isDrawingUnlocked) return; setInteractionMode('ADD_NODE');        resetMode(); }, [isDrawingUnlocked, setInteractionMode, resetMode]);
  const addTransitionMode    = useCallback(() => { if (!isDrawingUnlocked) return; setInteractionMode('CONNECTING');      resetMode(); }, [isDrawingUnlocked, setInteractionMode, resetMode]);
  const toggleFinalStateMode = useCallback(() => { if (!isDrawingUnlocked) return; setInteractionMode('TOGGLE_FINAL');    resetMode(); }, [isDrawingUnlocked, setInteractionMode, resetMode]);
  const setEraserMode        = useCallback(() => { if (!isDrawingUnlocked) return; setInteractionMode('ERASE');           resetMode(); }, [isDrawingUnlocked, setInteractionMode, resetMode]);
  const setDrawMode          = useCallback(() => { if (!isDrawingUnlocked) return; setInteractionMode('DRAW');            resetMode(); }, [isDrawingUnlocked, setInteractionMode, resetMode]);

  // ── Utilitários para loadLevel ───────────────────────────────────────────────
  const resetDraw = useCallback(() => {
    setDrawings([]);
    setDrawingStack([]);
    setCurrentStroke(null);
    setIsErasing(false);
    setDrawTool('pencil');
    drawingsRef.current = [];
    isDrawingRef.current = false;
    currentStrokeRef.current = null;
  }, []);

  const resetZoom = useCallback(() => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  }, []);

  return {
    drawings, setDrawings, drawingStack, setDrawingStack,
    currentStroke, setCurrentStroke,
    drawColor, setDrawColor, drawSize, setDrawSize,
    isErasing, setIsErasing, drawTool, setDrawTool,
    isDrawingRef, currentStrokeRef, drawingsRef,
    drawUndo, resetDraw,
    zoom, setZoom, pan, setPan, isPanning, setIsPanning, canvasSize,
    resetZoom,
    resetMode,
    setInitialMode, addNodeMode, addTransitionMode,
    toggleFinalStateMode, setEraserMode, setDrawMode,
  };
}
