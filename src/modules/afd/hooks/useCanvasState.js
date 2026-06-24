import { useState, useRef, useEffect, useCallback } from 'react';

const INNER_W = 2000;
const INNER_H = 2000;

export { INNER_W, INNER_H };

export default function useCanvasState({
  isDrawingUnlocked,
  setInteractionMode,
  squashNextHistoryRef,
  setConnectingSource,
  setSelectedSymbolCard,
  setSelectedNodes,
  tela,
  isSidebarOpen,
  canvasRef,      // outer <section> — keep for backwards compat
  viewportRef,    // <div overflow:auto> — scroll viewport
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

  // ── Zoom (scroll replaces pan) ──────────────────────────────────────────────
  const [zoom, setZoom] = useState(0.5);

  const isUnlockedRef = useRef(false);
  useEffect(() => { isUnlockedRef.current = isDrawingUnlocked; }, [isDrawingUnlocked]);

  // Wheel: ctrl+wheel → zoom-to-point; plain wheel → scroll (browser default)
  useEffect(() => {
    if (tela !== 'JOGO') return;
    const vp = viewportRef?.current ?? canvasRef.current;
    if (!vp) return;
    const onWheel = (e) => {
      if (!(e.ctrlKey || e.metaKey)) return; // let browser scroll normally
      if (!isUnlockedRef.current) return;
      e.preventDefault();
      const rect = vp.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      const delta = e.deltaY * -0.002;
      setZoom(z => {
        const nz = Math.max(0.15, Math.min(6, z + delta * z));
        // Adjust scroll so the point under cursor stays fixed
        const dz = nz - z;
        const sl = vp.scrollLeft + mx * dz / z;
        const st = vp.scrollTop  + my * dz / z;
        requestAnimationFrame(() => {
          vp.scrollLeft = sl;
          vp.scrollTop  = st;
        });
        return nz;
      });
    };
    vp.addEventListener('wheel', onWheel, { passive: false });
    return () => vp.removeEventListener('wheel', onWheel);
  }, [tela, isSidebarOpen, canvasRef, viewportRef]); // eslint-disable-line react-hooks/exhaustive-deps

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
    setZoom(0.5);
    const vp = viewportRef?.current ?? canvasRef.current;
    if (vp) { vp.scrollLeft = 0; vp.scrollTop = 0; }
  }, [viewportRef, canvasRef]); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    drawings, setDrawings, drawingStack, setDrawingStack,
    currentStroke, setCurrentStroke,
    drawColor, setDrawColor, drawSize, setDrawSize,
    isErasing, setIsErasing, drawTool, setDrawTool,
    isDrawingRef, currentStrokeRef, drawingsRef,
    drawUndo, resetDraw,
    zoom, setZoom,
    resetZoom,
    resetMode,
    setInitialMode, addNodeMode, addTransitionMode,
    toggleFinalStateMode, setEraserMode, setDrawMode,
  };
}
