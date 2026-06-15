// ─── useAPDrawing: camada de rabisco do AP (lápis/linha/seta/retângulo) ──────
// Espelha o useDrawing do AFD, mas mapeia coordenadas pelo MESMO cálculo manual
// que o APCanvas usa para os nós (compensa o zoom:0.9), em vez do CTM do SVG.
// Strokes ficam em pixels de layout do canvas; renderizados por StrokeEl.
import { useState, useRef, useCallback } from 'react';
export { DRAW_COLORS } from '../../afd/hooks/useDrawing';

export default function useAPDrawing(canvasRef) {
  const [drawings, setDrawings]         = useState([]);
  const [drawingStack, setDrawingStack] = useState([]);
  const [currentStroke, setCurrentStroke] = useState(null);
  const [drawColor, setDrawColor] = useState('#FF0000');
  const [drawSize, setDrawSize]   = useState(3);
  const [isErasing, setIsErasing] = useState(false);
  const [drawTool, setDrawTool]   = useState('pencil');

  const isDrawingRef     = useRef(false);
  const currentStrokeRef = useRef(null);
  const drawingsRef      = useRef([]);

  const coord = useCallback((e) => {
    const el = canvasRef.current;
    if (!el) return { x: 0, y: 0 };
    const r = el.getBoundingClientRect();
    const cssZoom = r.width / el.offsetWidth; // compensa o zoom:0.9 do wrapper
    return { x: (e.clientX - r.left) / cssZoom, y: (e.clientY - r.top) / cssZoom };
  }, [canvasRef]);

  const drawUndo = useCallback(() => {
    setDrawingStack(prev => {
      if (!prev.length) return prev;
      const snap = prev[prev.length - 1];
      setDrawings(snap); drawingsRef.current = snap;
      return prev.slice(0, -1);
    });
  }, []);

  const clearDrawings = useCallback(() => {
    const snap = [...drawingsRef.current];
    setDrawingStack(p => [...p, snap]);
    setDrawings([]); drawingsRef.current = [];
  }, []);

  const resetDrawings = useCallback(() => {
    setDrawings([]); setDrawingStack([]); setCurrentStroke(null);
    drawingsRef.current = []; isDrawingRef.current = false; currentStrokeRef.current = null;
  }, []);

  const onDown = useCallback((e) => {
    const { x, y } = coord(e);
    if (isErasing) {
      setDrawingStack(p => [...p, [...drawingsRef.current]]);
    } else if (drawTool === 'pencil') {
      const s = { type: 'pencil', color: drawColor, width: drawSize, points: [{ x, y }] };
      currentStrokeRef.current = s; setCurrentStroke(s);
    } else {
      const s = { type: drawTool, color: drawColor, width: drawSize, x1: x, y1: y, x2: x, y2: y };
      currentStrokeRef.current = s; setCurrentStroke(s);
    }
    isDrawingRef.current = true;
    e.currentTarget.setPointerCapture?.(e.pointerId);
  }, [coord, isErasing, drawTool, drawColor, drawSize]);

  const onMove = useCallback((e) => {
    if (!isDrawingRef.current) return;
    const { x, y } = coord(e);
    if (isErasing) {
      const R = 20;
      setDrawings(prev => {
        const next = prev.filter(s => {
          if (s.type === 'pencil' || !s.type) return !s.points.some(p => Math.hypot(p.x - x, p.y - y) < R);
          const mx = (s.x1 + s.x2) / 2, my = (s.y1 + s.y2) / 2;
          return !(Math.hypot(s.x1 - x, s.y1 - y) < R || Math.hypot(s.x2 - x, s.y2 - y) < R || Math.hypot(mx - x, my - y) < R);
        });
        drawingsRef.current = next; return next;
      });
    } else if (drawTool === 'pencil' && currentStrokeRef.current) {
      const pts = currentStrokeRef.current.points;
      const last = pts[pts.length - 1];
      if (Math.hypot(x - last.x, y - last.y) < 3) return;
      const u = { ...currentStrokeRef.current, points: [...pts, { x, y }] };
      currentStrokeRef.current = u; setCurrentStroke({ ...u });
    } else if (currentStrokeRef.current) {
      const u = { ...currentStrokeRef.current, x2: x, y2: y };
      currentStrokeRef.current = u; setCurrentStroke({ ...u });
    }
  }, [coord, isErasing, drawTool]);

  const onUp = useCallback((e) => {
    if (!isDrawingRef.current) return;
    isDrawingRef.current = false;
    const stroke = currentStrokeRef.current;
    const isShape = stroke && stroke.type !== 'pencil';
    const valid = stroke && (isShape
      ? Math.hypot(stroke.x2 - stroke.x1, stroke.y2 - stroke.y1) > 4
      : stroke.points && stroke.points.length > 1);
    if (!isErasing && valid) {
      setDrawingStack(p => [...p, [...drawingsRef.current]]);
      setDrawings(prev => { const next = [...prev, stroke]; drawingsRef.current = next; return next; });
    }
    currentStrokeRef.current = null; setCurrentStroke(null);
    try { e.currentTarget.releasePointerCapture?.(e.pointerId); } catch { /* ignore */ }
  }, [isErasing]);

  return {
    drawings, drawingStack, currentStroke,
    drawColor, setDrawColor, drawSize, setDrawSize, isErasing, setIsErasing, drawTool, setDrawTool,
    drawUndo, clearDrawings, resetDrawings,
    onDown, onMove, onUp,
  };
}
