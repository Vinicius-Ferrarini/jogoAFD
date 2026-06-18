// ─── CanvasArea: o "quadro verde" — montagem visual do AFD ───────────────────
// Concentra a interação de canvas (pan/zoom/rabisco/laço) e a renderização do
// grafo: HUD de zoom, toolbar de desenho, SVG das transições, chips de símbolo,
// camada de rabiscos, nós e o overlay da Aula Guiada. Os 4 handlers de pointer
// vivem aqui (interação do canvas), enquanto a lógica teórica do grafo está em
// useAFDGraph. CSS: classes .canvas-area / .node / .draw-* / .transition-* .
import { useCallback } from 'react';
import TransitionLabel from './TransitionLabel';
import StrokeEl from './StrokeEl';
import GuidedLessonOverlay from '../GuidedLessonOverlay';
import { DRAW_COLORS } from '../hooks/useDrawing';
import imgMaurilioApontando from '../../../assets/maurilio2_apontando_pro_lado.webp';
import imgBalaoFala         from '../../../assets/balao_fala_redondo.webp';

export default function CanvasArea({
  canvasRef, genUid,
  isDrawingUnlocked, interactionMode, setInteractionMode,
  isErasing, setIsErasing, drawTool, setDrawTool, drawColor, setDrawColor, drawSize, setDrawSize,
  zoom, setZoom, pan, setPan, isPanning, setIsPanning,
  nodes, setNodes, transitions, setTransitions, recordHistory, squashNextHistoryRef,
  selectedNodes, setSelectedNodes, connectingSource, setConnectingSource,
  selectionBox, setSelectionBox, dragInfo, setDragInfo,
  drawings, setDrawings, setDrawingStack, currentStroke, setCurrentStroke,
  drawingsRef, isDrawingRef, currentStrokeRef,
  selectedSymbolCard,
  transitionRenders, highlightedError,
  handleTransitionLineClick, transitionLabelRefs,
  handleAddSymbol, handleEditSymbol, handleEraseTransition, handleAppendCardToTransition,
  displayNodes, simHighlight,
  handleNodeLabelFocus, handleNodeLabelChange, handleNodeLabelBlur,
  setDrawMode, showToast,
  guidedLessonStep, setGuidedLessonStep, currentLevel,
  userNodesSnapshot, userTransitionsSnapshot, resetHistory,
  errorNodeIds = null,   // Set<id> opcional: estados a destacar em erro (minimização)
}) {
  // ── Pointer: canvas ───────────────────────────────────────────────────────
  const handlePointerDownCanvas = useCallback((e) => {
    if (!isDrawingUnlocked) return;

    if (interactionMode === 'DRAW') {
      const rect = canvasRef.current.getBoundingClientRect();
      const cssZoom = rect.width / canvasRef.current.offsetWidth;
      const x = ((e.clientX - rect.left) / cssZoom - pan.x) / zoom;
      const y = ((e.clientY - rect.top)  / cssZoom - pan.y) / zoom;
      if (isErasing) {
        const snapshot = [...drawingsRef.current];
        setDrawingStack(prev => [...prev, snapshot]);
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
  }, [isDrawingUnlocked, interactionMode, pan, zoom, nodes, transitions, recordHistory, drawColor, drawSize, isErasing, drawTool]); // eslint-disable-line react-hooks/exhaustive-deps

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
      return;
    }
    if (interactionMode === 'TOGGLE_FINAL') {
      const newNodes = nodes.map(n => n.uid === uid ? { ...n, isFinal: !n.isFinal } : n);
      setNodes(newNodes);
      recordHistory(newNodes, transitions);
      return;
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
          squashNextHistoryRef.current = true;
        }
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
  }, [isDrawingUnlocked, interactionMode, connectingSource, selectedNodes, nodes, transitions, recordHistory]); // eslint-disable-line react-hooks/exhaustive-deps

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
      const cssZoom = rect.width / canvasRef.current.offsetWidth;
      const dx = ((e.clientX - rect.left) / cssZoom - pan.x) / zoom;
      const dy = ((e.clientY - rect.top)  / cssZoom - pan.y) / zoom;
      if (isErasing) {
        const ERASE_R = 20;
        setDrawings(prev => {
          const next = prev.filter(s =>
            !s.points.some(p => Math.hypot(p.x - dx, p.y - dy) < ERASE_R)
          );
          drawingsRef.current = next;
          return next;
        });
      } else if (currentStrokeRef.current) {
        if (drawTool === 'pencil') {
          const pts = currentStrokeRef.current.points;
          const last = pts[pts.length - 1];
          if (Math.hypot(dx - last.x, dy - last.y) < 3) return;
          const updated = { ...currentStrokeRef.current, points: [...pts, { x: dx, y: dy }] };
          currentStrokeRef.current = updated;
          setCurrentStroke({ ...updated });
        } else {
          const updated = { ...currentStrokeRef.current, x2: dx, y2: dy };
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
  }, [isDrawingUnlocked, isPanning, pan, zoom, selectionBox, dragInfo, selectedNodes, interactionMode, isErasing, drawTool]); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Pointer: up ───────────────────────────────────────────────────────────
  const handlePointerUp = useCallback((e) => {
    try { e.target.releasePointerCapture(e.pointerId); } catch { /* ignore */ }

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
        const snapshot = [...drawingsRef.current];
        setDrawingStack(prev => [...prev, snapshot]);
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
  }, [isPanning, dragInfo, selectionBox, nodes, transitions, selectedNodes, recordHistory, interactionMode, isErasing]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
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
              display:'flex', alignItems:'center', justifyContent:'center' }}>
              <svg width="16" height="16" viewBox="0 0 16 16">
                <path d="M3 12 L10 5 L12 7 L5 14 Z" fill="#fbbf24" stroke="#000" strokeWidth="1.3" strokeLinejoin="round"/>
                <path d="M10 5 L12 3 L14 5 L12 7 Z" fill="#fb923c" stroke="#000" strokeWidth="1.3" strokeLinejoin="round"/>
                <path d="M3 12 L1.5 14.5 L5 14 Z" fill="#374151" stroke="#000" strokeWidth="1.2" strokeLinejoin="round"/>
              </svg>
            </button>
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

      {!isDrawingUnlocked && guidedLessonStep === null ? (
        <div className="locked-overlay">
          <div style={{ display:'flex', alignItems:'center', justifyContent:'center', marginTop:80 }}>
            <img src={imgMaurilioApontando} alt="Professor" style={{ height:320, zIndex:1 }} />
            <div style={{ position:'relative', width:210, height:140, marginLeft:-80, alignSelf:'flex-start', marginTop:-80 }}>
              <img src={imgBalaoFala} alt="" style={{ position:'absolute', inset:0, width:'100%', height:'100%', zIndex:1 }} />
              <div style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center',
                padding:'14px 14px 34px 14px', boxSizing:'border-box', color:'#000', fontWeight:'bold', fontSize:16, textAlign:'center', zIndex:2 }}>
                1ª Coisa: Descubra a Menor Palavra!
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
        {/* ── Dica de início (canvas vazio, tabuleiro recém-liberado) ── */}
        {nodes.length === 0 && guidedLessonStep === null && interactionMode !== 'DRAW' && (
          <div className="canvas-empty-hint">
            Clique em <b>◯ Novo Estado</b> e comece a montar seu AFD!
          </div>
        )}

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
                const snapshot = [...drawingsRef.current];
                setDrawingStack(prev => [...prev, snapshot]);
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
          {displayNodes.map(node => {
            const simCls =
              simHighlight.nodeId === node.id
                ? simHighlight.type === 'ok'    ? 'sim-active'
                : simHighlight.type === 'done'  ? 'sim-done'
                : simHighlight.type === 'error' ? 'sim-error'
                : '' : '';
            return (
              <div key={node.uid}
                className={`node ${node.isInitial?'initial':''} ${node.isFinal?'final':''} ${selectedNodes.includes(node.uid)?'selected':''} ${interactionMode==='ERASE'?'erasable-node':''} ${connectingSource===node.uid?'selected-source':''} ${errorNodeIds?.has(node.id)?'node-error':''} ${highlightedError===node.id?'error-pulse-severe':''} ${simCls}`}
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
        {/* ── Aula Guiada (overlay clássico — só ativa quando não há boardWords) ── */}
        {guidedLessonStep !== null && currentLevel?.guidedLesson &&
          (currentLevel?.boardWords?.length ?? 0) === 0 && (
          <GuidedLessonOverlay
            steps={currentLevel.guidedLesson}
            step={guidedLessonStep}
            onNext={() => setGuidedLessonStep(s => s + 1)}
            onPrev={() => setGuidedLessonStep(s => s - 1)}
            onFinish={() => {
              setGuidedLessonStep(null);
              const sn = userNodesSnapshot.current ?? [];
              const st = userTransitionsSnapshot.current ?? [];
              setNodes(sn);
              setTransitions(st);
              resetHistory(sn, st);
            }}
          />
        )}
        </>
      )}
    </section>
  );
}
