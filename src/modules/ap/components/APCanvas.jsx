// ─── APCanvas: canvas do AP (mesmo visual do AFD) ────────────────────────────
// Modos: IDLE (arrastar nó), ADD_NODE, CONNECTING, ERASE, TOGGLE_INITIAL, DRAW
// (rabisco). Transições do mesmo par (from→to) viram uma aresta com várias
// triplas (JFLAP). Inclui camada de rabisco (StrokeEl) e toolbar de desenho.
import { useCallback, useEffect, useRef, useState } from 'react';
import APTransitionLabel from './APTransitionLabel';
import StrokeEl from '../../afd/components/StrokeEl';
import { DRAW_COLORS } from '../hooks/useAPDrawing';

export default function APCanvas({
  canvasRef, nodes, transitions, mode, setMode, simHighlight, beginDrag,
  connectingSource, setConnectingSource,
  addNode, moveNode, toggleInitial, setNodeLabel, renameNode, deleteNode,
  addTriple, editTriple, removeTriple, removeEdge,
  draw, lessonActive, highlightEdge,
}) {
  const [size, setSize] = useState({ w: 1000, h: 600 });
  const dragRef = useRef(null);
  const isDraw = mode === 'DRAW';

  useEffect(() => {
    const el = canvasRef.current;
    if (!el) return;
    const measure = () => setSize({ w: el.clientWidth, h: el.clientHeight });
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [canvasRef]);

  const pctFromEvent = (e) => {
    const r = canvasRef.current.getBoundingClientRect();
    const cssZoom = r.width / canvasRef.current.offsetWidth;
    return {
      x: ((e.clientX - r.left) / cssZoom / canvasRef.current.offsetWidth) * 100,
      y: ((e.clientY - r.top)  / cssZoom / canvasRef.current.offsetHeight) * 100,
    };
  };

  // ── Pointer no fundo ────────────────────────────────────────────────────────
  const onCanvasDown = useCallback((e) => {
    // Toques que começam num botão (HUD "Riscar" / toolbar de desenho) NÃO devem
    // virar traço nem capturar o ponteiro no canvas — senão o ponteiro é roubado
    // do botão e o clique (fechar lápis / trocar ferramenta) nunca dispara.
    if (e.target.closest('button')) return;
    if (isDraw) { draw.onDown(e); return; }
    if (e.button !== 0) return;
    if (mode === 'ADD_NODE') {
      const { x, y } = pctFromEvent(e);
      addNode(Math.max(3, Math.min(97, x)), Math.max(6, Math.min(94, y)));
    }
  }, [isDraw, draw, mode, addNode]); // eslint-disable-line react-hooks/exhaustive-deps

  const onNodeDown = useCallback((e, node) => {
    if (isDraw) return;
    e.stopPropagation();
    if (e.button !== 0) return;
    if (mode === 'ERASE')          { deleteNode(node.uid); return; }
    if (mode === 'TOGGLE_INITIAL') { toggleInitial(node.uid); return; }
    if (mode === 'CONNECTING') {
      if (!connectingSource) { setConnectingSource(node.uid); return; }
      const src = nodes.find(n => n.uid === connectingSource);
      if (src) addTriple(src.id, node.id, { read: '', pop: '', push: '' });
      setConnectingSource(null);
      return;
    }
    if (mode === 'IDLE') {
      beginDrag(); // 1 entrada de histórico por arraste
      dragRef.current = { uid: node.uid, sx: e.clientX, sy: e.clientY, ox: node.x, oy: node.y };
      e.target.setPointerCapture?.(e.pointerId);
    }
  }, [isDraw, mode, connectingSource, nodes, deleteNode, toggleInitial, addTriple, setConnectingSource, beginDrag]);

  const onMove = useCallback((e) => {
    if (isDraw) { draw.onMove(e); return; }
    const d = dragRef.current;
    if (!d) return;
    const r = canvasRef.current.getBoundingClientRect();
    const cssZoom = r.width / canvasRef.current.offsetWidth;
    const dx = ((e.clientX - d.sx) / cssZoom / canvasRef.current.offsetWidth) * 100;
    const dy = ((e.clientY - d.sy) / cssZoom / canvasRef.current.offsetHeight) * 100;
    moveNode(d.uid, Math.max(3, Math.min(97, d.ox + dx)), Math.max(6, Math.min(94, d.oy + dy)));
  }, [isDraw, draw, moveNode]); // eslint-disable-line react-hooks/exhaustive-deps

  const onUp = useCallback((e) => {
    if (isDraw) { draw.onUp(e); return; }
    dragRef.current = null;
  }, [isDraw, draw]);

  // ── Agrupa transições por aresta (from→to) ──────────────────────────────────
  const groups = [];
  const byKey = new Map();
  transitions.forEach((t, i) => {
    const key = `${t.from}->${t.to}`;
    if (!byKey.has(key)) { const g = { from: t.from, to: t.to, triples: [] }; byKey.set(key, g); groups.push(g); }
    byKey.get(key).triples.push({ read: t.read, pop: t.pop, push: t.push, tIdx: i });
  });

  const edgeRenders = groups.map((g) => {
    const src = nodes.find(n => n.id === g.from);
    const tgt = nodes.find(n => n.id === g.to);
    if (!src || !tgt) return null;
    const { w, h } = size;
    const sx = (src.x * w) / 100, sy = (src.y * h) / 100;
    const tx = (tgt.x * w) / 100, ty = (tgt.y * h) / 100;
    const selfLoop = g.from === g.to;
    const bidir = !selfLoop && transitions.some(o => o.from === g.to && o.to === g.from);
    let pathD, lx, ly;
    if (selfLoop) {
      pathD = `M ${sx - 16} ${sy - 29} C ${sx - 58} ${sy - 96} ${sx + 58} ${sy - 96} ${sx + 16} ${sy - 29}`;
      lx = sx; ly = sy - 92;
    } else if (bidir) {
      const dx = tx - sx, dy = ty - sy, dist = Math.hypot(dx, dy) || 1;
      const nx = -dy / dist, ny = dx / dist, off = 42;
      const qcx = (sx + tx) / 2 + nx * off, qcy = (sy + ty) / 2 + ny * off;
      pathD = `M ${sx} ${sy} Q ${qcx} ${qcy} ${tx} ${ty}`;
      lx = ((sx + tx) / 2 + qcx) / 2 + nx * 12;
      ly = ((sy + ty) / 2 + qcy) / 2 + ny * 12;
    } else {
      pathD = `M ${sx} ${sy} L ${tx} ${ty}`;
      lx = (sx + tx) / 2; ly = (sy + ty) / 2 - 14;
    }
    return { ...g, src, tgt, selfLoop, pathD, lx, ly };
  }).filter(Boolean);

  const eraseMode = mode === 'ERASE';

  return (
    <section
      className={`canvas-area ${
        mode === 'ADD_NODE' ? 'add-node-mode' :
        mode === 'ERASE'    ? 'erase-mode' :
        isDraw              ? (draw.isErasing ? 'draw-erase-mode' : 'draw-mode') :
        mode !== 'IDLE'     ? 'connecting-mode' : ''}`}
      ref={canvasRef}
      onPointerDown={onCanvasDown}
      onPointerMove={onMove}
      onPointerUp={onUp}
      onPointerLeave={onUp}
    >
      {/* HUD: botão Riscar (mesmo visual do AFD) */}
      <div style={{ position: 'absolute', top: 10, right: 10, zIndex: 10 }}>
        <button onClick={() => setMode(isDraw ? 'IDLE' : 'DRAW')} title="Riscar"
          style={{ width: 30, height: 30, background: isDraw ? '#bfdbfe' : '#fef08a',
            border: isDraw ? '2.5px solid #3b82f6' : '2.5px solid #000',
            borderRadius: 8, fontSize: 15, cursor: 'pointer',
            boxShadow: isDraw ? '2px 2px 0 #1d4ed8' : '2px 2px 0 #000',
            display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="16" height="16" viewBox="0 0 16 16">
            <path d="M3 12 L10 5 L12 7 L5 14 Z" fill="#fbbf24" stroke="#000" strokeWidth="1.3" strokeLinejoin="round"/>
            <path d="M10 5 L12 3 L14 5 L12 7 Z" fill="#fb923c" stroke="#000" strokeWidth="1.3" strokeLinejoin="round"/>
            <path d="M3 12 L1.5 14.5 L5 14 Z" fill="#374151" stroke="#000" strokeWidth="1.2" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      <div className="canvas-label">Área de Montagem</div>
      {mode !== 'IDLE' && (
        <div className="canvas-action-label">
          {mode === 'ADD_NODE'       && '◯ Novo Estado'}
          {mode === 'CONNECTING'     && (connectingSource ? '↗ Clique no destino' : '↗ Clique na origem')}
          {mode === 'ERASE'          && '🗑 Apagar'}
          {mode === 'TOGGLE_INITIAL' && '▶ Estado Inicial'}
          {isDraw                    && (draw.isErasing ? '⌫ Apagando rabiscos' : '✏ Riscar')}
        </div>
      )}

      {nodes.length === 0 && !isDraw && !lessonActive && (
        <div className="ap-empty-hint">Clique em <b>◯ Novo Estado</b> e comece a montar seu AP!</div>
      )}

      {/* Toolbar de desenho */}
      {isDraw && (
        <div className="draw-toolbar">
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
            <button key={id} className={`draw-tool-btn draw-type-btn${draw.drawTool === id && !draw.isErasing ? ' active' : ''}`}
              title={title} onClick={() => { draw.setDrawTool(id); draw.setIsErasing(false); }}>{icon}</button>
          ))}
          <div className="draw-toolbar-sep" />
          {DRAW_COLORS.map(({ hex, label }) => (
            <button key={hex} className={`draw-color-btn${draw.drawColor === hex && !draw.isErasing ? ' active' : ''}`}
              style={{ background: hex, border: hex === '#f8f8f8' ? '2.5px solid #aaa' : '2.5px solid #000' }}
              title={label} onClick={() => { draw.setDrawColor(hex); draw.setIsErasing(false); }} />
          ))}
          <div className="draw-toolbar-sep" />
          <div className="draw-stroke-size">
            {[2, 4, 7].map(sz => (
              <button key={sz} className={draw.drawSize === sz ? 'active' : ''}
                style={{ width: 8 + sz * 3, height: 8 + sz * 3 }} title={`Espessura ${sz}`}
                onClick={() => { draw.setDrawSize(sz); draw.setIsErasing(false); }}>
                <span style={{ display: 'block', width: sz * 1.5, height: sz * 1.5, background: '#000', borderRadius: '50%' }} />
              </button>
            ))}
          </div>
          <div className="draw-toolbar-sep" />
          <button className={`draw-tool-btn${draw.isErasing ? ' active' : ''}`} title="Borracha"
            onClick={() => draw.setIsErasing(e => !e)}>⌫</button>
          <button className="draw-tool-btn" title="Limpar rabiscos" onClick={draw.clearDrawings}>🗑</button>
          <div className="draw-toolbar-sep" />
          <button className="draw-tool-btn" title="Fechar" style={{ fontSize: 11, fontWeight: 900 }}
            onClick={() => setMode('IDLE')}>✕</button>
        </div>
      )}

      {/* SVG das setas */}
      <svg className="connections-svg">
        <defs>
          <marker id="apah"  markerWidth="18" markerHeight="14" refX="48" refY="7" orient="auto" markerUnits="userSpaceOnUse"><polygon points="0 0,18 7,0 14" fill="#000" /></marker>
          <marker id="apahs" markerWidth="18" markerHeight="14" refX="18" refY="7" orient="auto" markerUnits="userSpaceOnUse"><polygon points="0 0,18 7,0 14" fill="#000" /></marker>
        </defs>
        {edgeRenders.map((er) => (
          <path key={`${er.from}->${er.to}`} d={er.pathD}
            className={`transition-line ${eraseMode ? 'erasable' : ''} ${
              highlightEdge && er.from === highlightEdge.from && er.to === highlightEdge.to ? 'lesson-hl' : ''}`}
            markerEnd={`url(#${er.selfLoop ? 'apahs' : 'apah'})`}
            style={{ pointerEvents: isDraw ? 'none' : 'stroke', cursor: eraseMode ? 'pointer' : 'default' }}
            onClick={(e) => { if (eraseMode) { e.stopPropagation(); removeEdge(er.from, er.to); } }} />
        ))}
      </svg>

      {/* Rótulos (triplas) */}
      {edgeRenders.map((er) => (
        <APTransitionLabel
          key={`lbl-${er.from}->${er.to}`}
          triples={er.triples}
          eraseMode={eraseMode}
          style={{ left: `${er.lx}px`, top: `${er.ly}px`, pointerEvents: isDraw ? 'none' : undefined }}
          onAddTriple={(tr) => addTriple(er.from, er.to, tr)}
          onEditTriple={editTriple}
          onRemoveTriple={removeTriple}
        />
      ))}

      {/* Camada de rabiscos (acima das setas, abaixo dos nós) */}
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', overflow: 'visible' }}>
        {draw.drawings.map((s, i) => <StrokeEl key={i} stroke={s} idx={i} />)}
        {draw.currentStroke && <StrokeEl stroke={draw.currentStroke} idx="cur" />}
      </svg>

      {/* Nós */}
      {nodes.map((node) => {
        const sim = simHighlight?.nodeId === node.id ? `sim-${simHighlight.type}` : '';
        return (
          <div key={node.uid}
            className={`node ${node.isInitial ? 'initial' : ''} ${connectingSource === node.uid ? 'selected-source selected' : ''} ${eraseMode ? 'erasable-node' : ''} ${sim}`}
            style={{ top: `${node.y}%`, left: `${node.x}%`, pointerEvents: isDraw ? 'none' : 'auto' }}
            onPointerDown={(e) => onNodeDown(e, node)}>
            <input type="text" className="node-id-input" value={node.label ?? node.id}
              translate="no" spellCheck={false} autoCorrect="off" autoCapitalize="off"
              readOnly={mode !== 'IDLE' || lessonActive}
              onChange={(e) => setNodeLabel(node.uid, e.target.value)}
              onBlur={(e) => renameNode(node.uid, e.target.value)} />
          </div>
        );
      })}

      {/* Bloqueador do Modo Aula: impede editar o grafo enquanto a aula roda */}
      {lessonActive && (
        <div className="ap-lesson-blocker" onPointerDown={(e) => { e.stopPropagation(); e.preventDefault(); }} />
      )}
    </section>
  );
}
