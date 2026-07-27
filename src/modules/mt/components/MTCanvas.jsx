// ─── MTCanvas: canvas da MT (clone do APCanvas adaptado) ─────────────────────
// Diferenças do AP:
//   - Transições: { read, write, move } em vez de { read, pop, push }
//   - TMTransitionLabel (chip) + TMTransitionEditor (popup local) substituem APTransitionLabel
//   - Modo TOGGLE_FINAL para marcar estados aceitores
//   - Editing state local gerencia qual transição está aberta no editor
//   - Zoom via CSS transform no canvas-inner; viewport scrollável independente
import { useCallback, useRef, useState } from 'react';
import TMTransitionLabel from './TMTransitionLabel';
import TMTransitionEditor from './TMTransitionEditor';
import StrokeEl from '../../afd/components/StrokeEl';
import NodeContextMenu from '../../afd/components/NodeContextMenu';
import { DRAW_COLORS } from '../../ap/hooks/useAPDrawing';

const INNER_W = 2000;
const INNER_H = 2000;

export default function MTCanvas({
  canvasRef, innerCanvasRef: innerCanvasRefProp, nodes, transitions, mode, setMode, beginDrag,
  connectingSource, setConnectingSource,
  addNode, moveNode, toggleInitial, toggleFinal, setNodeLabel, renameNode, deleteNode,
  addTriple, editTriple, removeTriple, removeEdge,
  draw, lessonActive, activeNodeId,
  selectedNodes = [], setSelectedNodes,
  selectionBox, setSelectionBox,
}) {
  const localInnerRef = useRef(null);
  const innerRef = innerCanvasRefProp || localInnerRef;
  // null | { type:'edit', tIdx } | { type:'new', from, to, lx, ly }
  const [editing, setEditing] = useState(null);
  // Estável — evita recriar a função a cada tripla no .map() abaixo, o que
  // quebraria o React.memo do TMTransitionLabel.
  const startEditTriple = useCallback((tIdx) => setEditing({ type: 'edit', tIdx }), []);
  const [zoom, setZoom] = useState(0.5);
  const dragRef = useRef(null);
  const isDraw = mode === 'DRAW';

  // ── Menu de contexto do nó (botão direito, estilo JFLAP) ────────────────────
  const [ctxMenu, setCtxMenu] = useState(null); // { x, y, uid } | null
  const handleNodeContextMenu = useCallback((e, uid) => {
    e.preventDefault();
    e.stopPropagation();
    if (lessonActive) return;
    setCtxMenu({ x: e.clientX, y: e.clientY, uid });
  }, [lessonActive]);
  const ctxNode = ctxMenu ? nodes.find(n => n.uid === ctxMenu.uid) : null;

  // Convert pointer event → percentage coords relative to inner canvas (zoom-aware).
  // getBoundingClientRect() returns the visual (scaled) rect, so dividing by r.width/r.height
  // is correct regardless of the current CSS transform scale.
  const pctFromEvent = (e) => {
    const el = innerRef.current;
    if (!el) return { x: 0, y: 0 };
    const r = el.getBoundingClientRect();
    return {
      x: ((e.clientX - r.left) / r.width)  * 100,
      y: ((e.clientY - r.top)  / r.height) * 100,
    };
  };

  const onCanvasDown = useCallback((e) => {
    if (e.target.closest('button')) return;
    if (isDraw) { draw.onDown(e); return; }
    if (e.button !== 0) return;
    setEditing(null);
    if (mode === 'ADD_NODE') {
      const { x, y } = pctFromEvent(e);
      addNode(Math.max(3, Math.min(97, x)), Math.max(6, Math.min(94, y)));
      return;
    }
    if (mode === 'IDLE') {
      const { x, y } = pctFromEvent(e);
      setSelectionBox({ startX: x, startY: y, currentX: x, currentY: y });
      if (!e.ctrlKey) setSelectedNodes([]);
      e.target.setPointerCapture?.(e.pointerId);
      return;
    }
    setSelectedNodes([]);
  }, [isDraw, draw, mode, addNode, setSelectionBox, setSelectedNodes]); // eslint-disable-line react-hooks/exhaustive-deps

  const onNodeDown = useCallback((e, node) => {
    if (isDraw) return;
    e.stopPropagation();
    if (e.button !== 0) return;
    if (mode === 'ERASE')          { deleteNode(node.uid); return; }
    if (mode === 'TOGGLE_INITIAL') { toggleInitial(node.uid); return; }
    if (mode === 'TOGGLE_FINAL')   { toggleFinal(node.uid); return; }
    if (mode === 'CONNECTING') {
      if (!connectingSource) { setConnectingSource(node.uid); return; }
      const src = nodes.find(n => n.uid === connectingSource);
      if (src) {
        const sx = (src.x * INNER_W) / 100, sy = (src.y * INNER_H) / 100;
        const tx = (node.x * INNER_W) / 100, ty = (node.y * INNER_H) / 100;
        const selfLoop = src.id === node.id;
        const lx = selfLoop ? tx : (sx + tx) / 2;
        const ly = selfLoop ? ty - 90 : (sy + ty) / 2 - 14;
        setEditing({ type: 'new', from: src.id, to: node.id, lx, ly });
      }
      setConnectingSource(null);
      return;
    }
    if (mode === 'IDLE') {
      const newSel = e.ctrlKey
        ? (selectedNodes.includes(node.uid) ? selectedNodes.filter(id => id !== node.uid) : [...selectedNodes, node.uid])
        : (selectedNodes.includes(node.uid) ? selectedNodes : [node.uid]);
      setSelectedNodes(newSel);
      dragRef.current = { uid: node.uid, sx: e.clientX, sy: e.clientY, ox: node.x, oy: node.y, snapped: false };
      e.target.setPointerCapture?.(e.pointerId);
    }
  }, [isDraw, mode, connectingSource, nodes, deleteNode, toggleInitial, toggleFinal, setConnectingSource, beginDrag, selectedNodes, setSelectedNodes]); // eslint-disable-line react-hooks/exhaustive-deps

  const onMove = useCallback((e) => {
    if (isDraw) { draw.onMove(e); return; }
    if (selectionBox) {
      const el = innerRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      setSelectionBox(s => s ? { ...s,
        currentX: ((e.clientX - r.left) / r.width)  * 100,
        currentY: ((e.clientY - r.top)  / r.height) * 100,
      } : null);
      return;
    }
    const d = dragRef.current;
    if (!d) return;
    const el = innerRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const dx = ((e.clientX - d.sx) / r.width)  * 100;
    const dy = ((e.clientY - d.sy) / r.height) * 100;
    if (!d.snapped) {
      if (Math.abs(e.clientX - d.sx) < 5 && Math.abs(e.clientY - d.sy) < 5) return;
      beginDrag();
      d.snapped = true;
    }
    moveNode(d.uid, Math.max(3, Math.min(97, d.ox + dx)), Math.max(6, Math.min(94, d.oy + dy)));
  }, [isDraw, draw, moveNode, selectionBox, setSelectionBox]); // eslint-disable-line react-hooks/exhaustive-deps

  const onUp = useCallback((e) => {
    if (isDraw) { draw.onUp(e); return; }
    if (selectionBox) {
      const minX = Math.min(selectionBox.startX, selectionBox.currentX);
      const maxX = Math.max(selectionBox.startX, selectionBox.currentX);
      const minY = Math.min(selectionBox.startY, selectionBox.currentY);
      const maxY = Math.max(selectionBox.startY, selectionBox.currentY);
      const sel = nodes.filter(n => n.x >= minX && n.x <= maxX && n.y >= minY && n.y <= maxY).map(n => n.uid);
      setSelectedNodes(e.ctrlKey ? [...new Set([...selectedNodes, ...sel])] : sel);
      setSelectionBox(null);
      return;
    }
    dragRef.current = null;
  }, [isDraw, draw, selectionBox, nodes, selectedNodes, setSelectedNodes, setSelectionBox]);

  // ── Agrupa transições por aresta ──────────────────────────────────────────────
  const groups = [];
  const byKey = new Map();
  transitions.forEach((t, i) => {
    const key = `${t.from}->${t.to}`;
    if (!byKey.has(key)) { const g = { from: t.from, to: t.to, triples: [] }; byKey.set(key, g); groups.push(g); }
    byKey.get(key).triples.push({ read: t.read, write: t.write, move: t.move, tIdx: i });
  });

  const edgeRenders = groups.map((g) => {
    const src = nodes.find(n => n.id === g.from);
    const tgt = nodes.find(n => n.id === g.to);
    if (!src || !tgt) return null;
    const sx = (src.x * INNER_W) / 100, sy = (src.y * INNER_H) / 100;
    const tx = (tgt.x * INNER_W) / 100, ty = (tgt.y * INNER_H) / 100;
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
        mode === 'ADD_NODE'       ? 'add-node-mode' :
        mode === 'ERASE'         ? 'erase-mode' :
        isDraw                   ? (draw.isErasing ? 'draw-erase-mode' : 'draw-mode') :
        mode !== 'IDLE'          ? 'connecting-mode' : ''}`}
      ref={canvasRef}
    >
      {/* HUD: Riscar + Zoom — absolutamente posicionado na section, acima do viewport de scroll */}
      <div style={{ position: 'absolute', top: 8, right: 8, zIndex: 60,
        display: 'flex', flexDirection: 'column', gap: 3, pointerEvents: 'none' }}>
        {/* Lápis / Riscar */}
        <button
          onClick={() => setMode(isDraw ? 'IDLE' : 'DRAW')}
          title="Riscar"
          style={{
            width: 30, height: 30, pointerEvents: 'auto',
            background: isDraw ? '#bfdbfe' : '#fef08a',
            border: isDraw ? '2.5px solid #3b82f6' : '2.5px solid #000',
            borderRadius: 8, cursor: 'pointer',
            boxShadow: isDraw ? '2px 2px 0 #1d4ed8' : '2px 2px 0 #000',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
          <svg width="16" height="16" viewBox="0 0 16 16">
            <path d="M3 12 L10 5 L12 7 L5 14 Z" fill="#fbbf24" stroke="#000" strokeWidth="1.3" strokeLinejoin="round"/>
            <path d="M10 5 L12 3 L14 5 L12 7 Z" fill="#fb923c" stroke="#000" strokeWidth="1.3" strokeLinejoin="round"/>
            <path d="M3 12 L1.5 14.5 L5 14 Z" fill="#374151" stroke="#000" strokeWidth="1.2" strokeLinejoin="round"/>
          </svg>
        </button>
        {/* Controles de Zoom */}
        <div style={{
          background: '#fff', border: '2.5px solid #000', borderRadius: 8,
          boxShadow: '3px 3px 0 #000', padding: '3px 4px',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1,
          pointerEvents: 'auto',
        }}>
          <button onClick={() => setZoom(z => Math.min(2, +(z + 0.25).toFixed(2)))}
            title="Zoom +"
            style={{ fontWeight: 'bold', width: 22, height: 22, cursor: 'pointer',
              border: 'none', background: 'transparent', fontSize: 16, color: '#000',
              display: 'flex', alignItems: 'center', justifyContent: 'center' }}>+</button>
          <span style={{ fontWeight: 'bold', fontSize: 10, width: 34, textAlign: 'center',
            fontFamily: 'monospace' }}>{Math.round(zoom * 100)}%</span>
          <button onClick={() => setZoom(z => Math.max(0.15, +(z - 0.25).toFixed(2)))}
            title="Zoom -"
            style={{ fontWeight: 'bold', width: 22, height: 22, cursor: 'pointer',
              border: 'none', background: 'transparent', fontSize: 16, color: '#000',
              display: 'flex', alignItems: 'center', justifyContent: 'center' }}>−</button>
          <button onClick={() => setZoom(0.5)}
            title="Resetar zoom (50%)"
            style={{ fontWeight: 'bold', cursor: 'pointer', border: 'none',
              background: 'transparent', color: '#2563eb', fontSize: 11 }}>↺</button>
        </div>
      </div>

      {/* Viewport scrollável: cobre toda a section e permite rolar pelo canvas ampliado */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'auto' }}>
        {/* Wrapper de zoom: define a área de scroll para o tamanho visual do canvas.
            overflow:hidden impede que o layout de 2000px do canvas-inner alargue a barra de rolagem. */}
        <div style={{ position: 'relative', width: INNER_W * zoom, height: INNER_H * zoom, overflow: 'hidden' }}>
          <div className="canvas-inner"
            ref={innerRef}
            onPointerDown={onCanvasDown}
            onPointerMove={onMove}
            onPointerUp={onUp}
            onPointerLeave={onUp}
            style={{
              position: 'absolute', top: 0, left: 0,
              transform: `scale(${zoom})`,
              transformOrigin: 'top left',
            }}
          >
            <div className="canvas-label">Área de Montagem</div>
            {mode !== 'IDLE' && (
              <div className="canvas-action-label">
                {mode === 'ADD_NODE'       && '◯ Novo Estado'}
                {mode === 'CONNECTING'     && (connectingSource ? '↗ Clique no destino' : '↗ Clique na origem')}
                {mode === 'ERASE'         && '🗑 Apagar'}
                {mode === 'TOGGLE_INITIAL' && '▶ Estado Inicial'}
                {mode === 'TOGGLE_FINAL'   && '⊙ Estado Final'}
                {isDraw                   && (draw.isErasing ? '⌫ Apagando rabiscos' : '✏ Riscar')}
              </div>
            )}

            {nodes.length === 0 && !isDraw && !lessonActive && (
              <div className="ap-empty-hint">Clique em <b>◯ Novo Estado</b> e comece a montar sua MT!</div>
            )}

            {/* Toolbar de desenho */}
            {isDraw && (
              <div className="draw-toolbar">
                {[
                  { id: 'pencil', icon: (<svg width="15" height="15" viewBox="0 0 15 15"><path d="M2 13 Q4 8 7 7.5 Q10 7 13 2" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>), title: 'Lápis' },
                  { id: 'line',   icon: (<svg width="15" height="15" viewBox="0 0 15 15"><line x1="2" y1="7.5" x2="13" y2="7.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/></svg>), title: 'Linha reta' },
                  { id: 'arrow',  icon: (<svg width="15" height="15" viewBox="0 0 15 15"><line x1="2" y1="7.5" x2="11" y2="7.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/><polygon points="11,4.5 15,7.5 11,10.5" fill="currentColor"/></svg>), title: 'Seta' },
                  { id: 'rect',   icon: (<svg width="14" height="14" viewBox="0 0 14 14"><rect x="2" y="3" width="10" height="8" fill="none" stroke="currentColor" strokeWidth="2" rx="1"/></svg>), title: 'Retângulo' },
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
                <button className={`draw-tool-btn${draw.isErasing ? ' active' : ''}`} title="Borracha" onClick={() => draw.setIsErasing(e => !e)}>⌫</button>
                <button className="draw-tool-btn" title="Limpar rabiscos" onClick={draw.clearDrawings}>🗑</button>
                <div className="draw-toolbar-sep" />
                <button className="draw-tool-btn" title="Fechar" style={{ fontSize: 11, fontWeight: 900 }} onClick={() => setMode('IDLE')}>✕</button>
              </div>
            )}

            {/* SVG das setas */}
            <svg className="connections-svg">
              <defs>
                <marker id="mtah"  markerWidth="18" markerHeight="14" refX="48" refY="7" orient="auto" markerUnits="userSpaceOnUse"><polygon points="0 0,18 7,0 14" fill="#000" /></marker>
                <marker id="mtahs" markerWidth="18" markerHeight="14" refX="18" refY="7" orient="auto" markerUnits="userSpaceOnUse"><polygon points="0 0,18 7,0 14" fill="#000" /></marker>
              </defs>
              {edgeRenders.map((er) => (
                <path key={`${er.from}->${er.to}`} d={er.pathD}
                  className={`transition-line ${eraseMode ? 'erasable' : ''}`}
                  markerEnd={`url(#${er.selfLoop ? 'mtahs' : 'mtah'})`}
                  style={{ pointerEvents: isDraw ? 'none' : 'stroke', cursor: eraseMode ? 'pointer' : 'default' }}
                  onClick={(e) => { if (eraseMode) { e.stopPropagation(); removeEdge(er.from, er.to); } }} />
              ))}
            </svg>

            {/* Rótulos das arestas + editor inline */}
            {edgeRenders.map((er) => (
              <div key={`lbl-${er.from}->${er.to}`}
                style={{
                  position: 'absolute', left: er.lx, top: er.ly - 6,
                  transform: 'translate(-50%, -100%)',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3,
                  pointerEvents: isDraw ? 'none' : undefined, zIndex: 20,
                }}>
                {er.triples.map(t => (
                  editing?.type === 'edit' && editing.tIdx === t.tIdx ? (
                    <TMTransitionEditor key={t.tIdx}
                      initial={t}
                      onSave={tr => { if (editTriple(t.tIdx, tr) !== false) setEditing(null); }}
                      onDelete={() => { removeTriple(t.tIdx); setEditing(null); }}
                      onCancel={() => setEditing(null)}
                    />
                  ) : (
                    <TMTransitionLabel key={t.tIdx}
                      transition={t}
                      eraseMode={eraseMode}
                      lessonActive={lessonActive}
                      onRemove={removeTriple}
                      onEdit={startEditTriple}
                    />
                  )
                ))}
                {/* Editor para nova transição numa aresta existente */}
                {editing?.type === 'new' && editing.from === er.from && editing.to === er.to ? (
                  <TMTransitionEditor
                    onSave={tr => { if (addTriple(er.from, er.to, tr) !== false) setEditing(null); }}
                    onCancel={() => setEditing(null)}
                  />
                ) : !eraseMode && !lessonActive ? (
                  <button
                    style={{ width: 22, height: 22, border: '2.5px solid #16a34a', borderRadius: 6,
                      background: '#bbf7d0', fontWeight: 900, cursor: 'pointer', color: '#166534',
                      boxShadow: '2px 2px 0 rgba(22,163,74,.4)', fontSize: 14, lineHeight: 1 }}
                    onClick={e => { e.stopPropagation(); setEditing({ type: 'new', from: er.from, to: er.to, lx: er.lx, ly: er.ly }); }}>
                    ＋
                  </button>
                ) : null}
              </div>
            ))}

            {/* Editor para aresta nova (CONNECTING → alvo clicado, edge ainda não existe) */}
            {editing?.type === 'new' && !edgeRenders.some(er => er.from === editing.from && er.to === editing.to) && (
              <div style={{ position: 'absolute', left: editing.lx, top: editing.ly, transform: 'translate(-50%, -50%)', zIndex: 30 }}>
                <TMTransitionEditor
                  onSave={tr => { if (addTriple(editing.from, editing.to, tr) !== false) setEditing(null); }}
                  onCancel={() => setEditing(null)}
                />
              </div>
            )}

            {/* Camada de rabiscos */}
            <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', overflow: 'visible' }}>
              {draw.drawings.map((s, i) => <StrokeEl key={i} stroke={s} idx={i} />)}
              {draw.currentStroke && <StrokeEl stroke={draw.currentStroke} idx="cur" />}
            </svg>

            {/* Lasso de seleção */}
            {selectionBox && (
              <div style={{
                position: 'absolute', pointerEvents: 'none', zIndex: 1000,
                border: '2px dashed #2563eb', backgroundColor: 'rgba(59,130,246,0.15)',
                left:   `${Math.min(selectionBox.startX, selectionBox.currentX)}%`,
                top:    `${Math.min(selectionBox.startY, selectionBox.currentY)}%`,
                width:  `${Math.abs(selectionBox.currentX - selectionBox.startX)}%`,
                height: `${Math.abs(selectionBox.currentY - selectionBox.startY)}%`,
              }} />
            )}

            {/* Nós */}
            {nodes.map((node) => {
              const isActive = lessonActive && activeNodeId && node.id === activeNodeId;
              return (
              <div key={node.uid}
                data-uid={node.uid}
                className={`node ${node.isInitial ? 'initial' : ''} ${node.isFinal ? 'final' : ''} ${selectedNodes.includes(node.uid) ? 'selected' : ''} ${connectingSource === node.uid ? 'selected-source selected' : ''} ${eraseMode ? 'erasable-node' : ''}`}
                style={{
                  top:  `${node.y}%`,
                  left: `${node.x}%`,
                  pointerEvents: isDraw ? 'none' : 'auto',
                  ...(isActive ? {
                    background: '#fde047', borderColor: '#a16207', color: '#422006',
                    boxShadow: '0 0 0 5px rgba(253,224,71,.45), 3px 3px 0 #000', zIndex: 6,
                  } : {}) }}
                onPointerDown={(e) => onNodeDown(e, node)}
                onContextMenu={(e) => handleNodeContextMenu(e, node.uid)}>
                <input type="text" className="node-id-input" value={node.label ?? node.id}
                  translate="no" spellCheck={false} autoCorrect="off" autoCapitalize="off"
                  readOnly={mode !== 'IDLE' || lessonActive}
                  onChange={(e) => setNodeLabel(node.uid, e.target.value)}
                  onBlur={(e) => renameNode(node.uid, e.target.value)} />
              </div>
              );
            })}

            {/* Blocker da aula — suspenso em modo DRAW p/ liberar o desenho livre durante a aula */}
            {lessonActive && !isDraw && (
              <div className="ap-lesson-blocker" onPointerDown={(e) => { e.stopPropagation(); e.preventDefault(); }} />
            )}
          </div>
        </div>
      </div>

      {ctxMenu && ctxNode && (
        <NodeContextMenu
          x={ctxMenu.x} y={ctxMenu.y}
          isInitial={ctxNode.isInitial} isFinal={ctxNode.isFinal}
          onToggleInitial={() => toggleInitial(ctxNode.uid)}
          onToggleFinal={() => toggleFinal(ctxNode.uid)}
          onDelete={() => deleteNode(ctxNode.uid)}
          onClose={() => setCtxMenu(null)}
        />
      )}
    </section>
  );
}
