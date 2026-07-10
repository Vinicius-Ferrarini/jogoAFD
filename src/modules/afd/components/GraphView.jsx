// Grafo SVG read-only — compartilhado entre AFDPart2 (AFDGraphView) e AFDMinimizer (GraphView).
// CSS: classes .p2-edge-label, .p2-node-label definidas em AFDPart2.css.
// highlightNodeId/highlightType: usados pela simulação passo a passo (apenas AFDPart2).
// vw/vh/nr/mx/my: permitem customizar o viewport para cada contexto — quem chama
// deve medir o container real e passar vw/vh nessa proporção, para o grafo
// preencher o espaço disponível sem sobrar margem vazia nas bordas.
import { useMemo, useCallback } from 'react';
import { computeLayout } from '../utils/dfaAlgorithms';

export default function GraphView({
  nodes,
  transitions,
  highlightNodeId = null,
  highlightType   = null,
  vw = 580,
  vh = 340,
  nr = 23,
  mx = 65,
  my = 42,
  fixedPositions = null,
  rawLayout = null,
}) {
  // Layouts autorados numa grade abstrata (rawLayout, ex.: coordenadas 0-100)
  // são escalados para o viewport atual (vw/vh) — assim, se o container mudar
  // de proporção, o grafo reaproveita o espaço em vez de sobrar margem vazia.
  const scaledRawLayout = useMemo(() => {
    if (!rawLayout) return null;
    const entries = Object.entries(rawLayout);
    if (!entries.length) return null;
    const xs = entries.map(([, v]) => v[0]);
    const ys = entries.map(([, v]) => v[1]);
    const minX = Math.min(...xs), maxX = Math.max(...xs);
    const minY = Math.min(...ys), maxY = Math.max(...ys);
    const PAD = nr + 14;
    const spanX = maxX - minX;
    const spanY = maxY - minY;
    const scaleX = spanX > 0 ? (vw - 2 * PAD) / spanX : 1;
    const scaleY = spanY > 0 ? (vh - 2 * PAD) / spanY : 1;
    const offX = spanX > 0 ? PAD - minX * scaleX : vw / 2 - minX * scaleX;
    const offY = spanY > 0 ? PAD - minY * scaleY : vh / 2 - minY * scaleY;

    const pos = {};
    for (const [id, [lx, ly]] of entries) {
      pos[id] = { x: Math.round(lx * scaleX + offX), y: Math.round(ly * scaleY + offY) };
    }
    return pos;
  }, [rawLayout, vw, vh, nr]);

  const effectiveFixedPositions = scaledRawLayout ?? fixedPositions;

  const positions = useMemo(
    () => computeLayout(nodes, transitions, { VW: vw, VH: vh, MX: mx, MY: my, fixedPositions: effectiveFixedPositions }),
    [nodes, transitions, vw, vh, mx, my, effectiveFixedPositions]
  );

  const edges = useMemo(() => {
    const map = {};
    transitions.forEach(t => {
      const key = `${t.from}→${t.to}`;
      if (!map[key]) map[key] = { from: t.from, to: t.to, syms: [] };
      t.symbol.split(',').forEach(s => {
        const tr = s.trim();
        if (tr && !map[key].syms.includes(tr)) map[key].syms.push(tr);
      });
    });
    return Object.values(map);
  }, [transitions]);

  const hasBidir = useCallback(
    (a, b) => edges.some(e => e.from === b && e.to === a),
    [edges]
  );

  // Posição base de cada rótulo de aresta (antes de resolver colisões).
  // Guarda também a caixa (lw/lh) para a passagem de repulsão abaixo.
  const labelBoxes = useMemo(() => {
    return edges.map(edge => {
      const sp = positions[edge.from];
      const tp = positions[edge.to];
      const label = edge.syms.join(',');
      const lw = label.length * 7 + 8, lh = 16;
      if (!sp || !tp) return { label, lw, lh, x: 0, y: 0, valid: false };

      if (edge.from === edge.to) {
        return { label, lw, lh, x: sp.x, y: sp.y - nr - 32, valid: true, isSelfLoop: true };
      }

      const dx = tp.x - sp.x, dy = tp.y - sp.y;
      const dist = Math.sqrt(dx * dx + dy * dy) || 1;
      const nx = -dy / dist, ny = dx / dist;
      const bidir = hasBidir(edge.from, edge.to);
      let x, y, baseOff;
      if (bidir) {
        const off = 38;
        const cx1 = (sp.x + tp.x) / 2 + nx * off;
        const cy1 = (sp.y + tp.y) / 2 + ny * off;
        x = ((sp.x + tp.x) / 2 + cx1) / 2 + nx * 10;
        y = ((sp.y + tp.y) / 2 + cy1) / 2 + ny * 10;
        baseOff = (off / 2 + 10);
      } else {
        baseOff = 15;
        x = (sp.x + tp.x) / 2 + nx * baseOff;
        y = (sp.y + tp.y) / 2 + ny * baseOff;
      }
      // midX/midY + nx/ny/baseOff são guardados para a repulsão abaixo poder
      // mover o rótulo SÓ ao longo da perpendicular à linha (nx,ny) — do
      // contrário, empurrões em X/Y absolutos desalinham o rótulo do "meio"
      // visual da linha em arestas diagonais (fica flutuando ao lado dela).
      const midX = (sp.x + tp.x) / 2, midY = (sp.y + tp.y) / 2;
      return { label, lw, lh, x, y, valid: true, midX, midY, nx, ny, baseOff };
    });
  }, [edges, positions, hasBidir, nr]);

  // Resolve sobreposições entre caixas de rótulo (grafos densos como o L55 têm
  // nós muito próximos e vários rótulos concorrendo pelo mesmo espaço). Empurra
  // pares de caixas que se sobrepõem para longe uma da outra, e também afasta
  // qualquer rótulo que tenha caído em cima do círculo de um nó (arestas muito
  // curtas fazem o offset perpendicular cair dentro do próprio nó vizinho).
  // Poucas iterações bastam pois cada rótulo só precisa abrir espaço local.
  const resolvedLabels = useMemo(() => {
    const boxes = labelBoxes.map(b => ({ ...b }));
    const nodeCircles = nodes.map(nd => {
      const p = positions[nd.id];
      return p ? { x: p.x, y: p.y, r: nd.isFinal ? nr + 8 : nr } : null;
    }).filter(Boolean);
    // Para rótulos de arestas retas (têm nx/ny/midX/midY), qualquer empurrão de
    // colisão é reprojetado na componente perpendicular à linha (nx,ny) e
    // aplicado como ajuste de baseOff — preserva a posição ao longo da linha,
    // então o rótulo nunca "escorrega" para o lado e some do meio da aresta em
    // diagonais acentuadas. Self-loops (sem nx/ny) continuam livres em X/Y.
    const applyPush = (box, pushX, pushY) => {
      if (box.nx !== undefined) {
        const alongOff = pushX * box.nx + pushY * box.ny;
        box.baseOff += alongOff;
        box.x = box.midX + box.nx * box.baseOff;
        box.y = box.midY + box.ny * box.baseOff;
      } else {
        box.x += pushX; box.y += pushY;
      }
    };
    const PAD = 3;
    for (let iter = 0; iter < 6; iter++) {
      let moved = false;
      for (let i = 0; i < boxes.length; i++) {
        if (!boxes[i].valid) continue;
        for (let j = i + 1; j < boxes.length; j++) {
          if (!boxes[j].valid) continue;
          const a = boxes[i], b = boxes[j];
          const overlapX = (a.lw + b.lw) / 2 + PAD - Math.abs(a.x - b.x);
          const overlapY = (a.lh + b.lh) / 2 + PAD - Math.abs(a.y - b.y);
          if (overlapX > 0 && overlapY > 0) {
            moved = true;
            // Empurra ao longo do eixo de menor sobreposição (menor deslocamento necessário)
            if (overlapX < overlapY) {
              const push = overlapX / 2 + 0.5;
              const dir = a.x <= b.x ? -1 : 1;
              applyPush(a, dir * push, 0); applyPush(b, -dir * push, 0);
            } else {
              const push = overlapY / 2 + 0.5;
              const dir = a.y <= b.y ? -1 : 1;
              applyPush(a, 0, dir * push); applyPush(b, 0, -dir * push);
            }
          }
        }
      }
      for (const box of boxes) {
        if (!box.valid) continue;
        for (const c of nodeCircles) {
          const dx = box.x - c.x, dy = box.y - c.y;
          const dist = Math.sqrt(dx * dx + dy * dy) || 1;
          const minDist = c.r + Math.max(box.lw, box.lh) / 2 + 2;
          if (dist < minDist) {
            moved = true;
            const push = minDist - dist;
            const ux = dist > 0.01 ? dx / dist : 0;
            const uy = dist > 0.01 ? dy / dist : 1;
            applyPush(box, ux * push, uy * push);
          }
        }
      }
      if (!moved) break;
    }
    return boxes;
  }, [labelBoxes, nodes, positions, nr]);

  return (
    <svg
      viewBox={`0 0 ${vw} ${vh}`}
      style={{ width: '100%', height: '100%', display: 'block' }}
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <marker id="gv-arr" markerWidth="18" markerHeight="14" refX="41" refY="7"
          orient="auto" markerUnits="userSpaceOnUse">
          <polygon points="0 0,18 7,0 14" fill="#000" />
        </marker>
        <marker id="gv-arr-sl" markerWidth="18" markerHeight="14" refX="18" refY="7"
          orient="auto" markerUnits="userSpaceOnUse">
          <polygon points="0 0,18 7,0 14" fill="#000" />
        </marker>
      </defs>

      {/* Sombras dos nós (renderizadas antes das arestas para ficarem por baixo) */}
      {nodes.map(nd => {
        const p = positions[nd.id];
        if (!p) return null;
        return (
          <circle key={`sh-${nd.id}`}
            cx={p.x + 4} cy={p.y + 4}
            r={nd.isFinal ? nr + 8 : nr}
            fill="#000"
          />
        );
      })}

      {edges.map((edge, i) => {
        const sp = positions[edge.from];
        const tp = positions[edge.to];
        if (!sp || !tp) return null;
        if (edge.from === edge.to) {
          return (
            <path key={i}
              d={`M ${sp.x - 13} ${sp.y - nr + 5} C ${sp.x - 46} ${sp.y - nr - 58} ${sp.x + 46} ${sp.y - nr - 58} ${sp.x + 13} ${sp.y - nr + 5}`}
              fill="none" stroke="#000" strokeWidth="4" markerEnd="url(#gv-arr-sl)"
            />
          );
        }
        const dx = tp.x - sp.x, dy = tp.y - sp.y;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        const nx = -dy / dist, ny = dx / dist;
        const bidir = hasBidir(edge.from, edge.to);
        let pathD;
        if (bidir) {
          const off = 38;
          const cx1 = (sp.x + tp.x) / 2 + nx * off;
          const cy1 = (sp.y + tp.y) / 2 + ny * off;
          pathD = `M ${sp.x} ${sp.y} Q ${cx1} ${cy1} ${tp.x} ${tp.y}`;
        } else {
          pathD = `M ${sp.x} ${sp.y} L ${tp.x} ${tp.y}`;
        }
        return <path key={i} d={pathD} fill="none" stroke="#000" strokeWidth="4" markerEnd="url(#gv-arr)" />;
      })}

      {resolvedLabels.map((box, i) => {
        if (!box.valid) return null;
        const { x, y, lw, lh, label } = box;
        return (
          <g key={i}>
            <rect x={x - lw / 2 + 2} y={y - lh / 2 + 2} width={lw} height={lh} fill="#000" rx="3" />
            <rect x={x - lw / 2} y={y - lh / 2} width={lw} height={lh} fill="#fff" stroke="#000" strokeWidth="2" rx="3" />
            <text x={x} y={y} textAnchor="middle" dominantBaseline="middle" className="p2-edge-label">
              {label}
            </text>
          </g>
        );
      })}

      {nodes.map(nd => {
        const p = positions[nd.id];
        if (!p) return null;
        const label = nd.label ?? nd.id;
        const fontSize = label.length > 4 ? 8 : label.length > 3 ? 9 : label.length > 2 ? 11 : 13;
        const fillColor = highlightNodeId === nd.id
          ? (highlightType === 'ok' ? '#fbbf24' : highlightType === 'done' ? '#86efac' : '#fca5a5')
          : nd.isFinal ? '#86efac' : nd.isInitial ? '#bae6fd' : '#fff';
        return (
          <g key={nd.id}>
            {nd.isInitial && (
              <text
                x={p.x - nr - 6} y={p.y}
                textAnchor="end" dominantBaseline="middle"
                style={{ fontSize: 22, fontWeight: 'bold', fill: '#000',
                  paintOrder: 'stroke', stroke: '#fff', strokeWidth: 3,
                  userSelect: 'none', pointerEvents: 'none' }}
              >▶</text>
            )}
            {nd.isFinal && (
              <>
                {/* Anel externo do estado final */}
                <circle cx={p.x} cy={p.y} r={nr + 8} fill={fillColor} stroke="#000" strokeWidth="4" />
                {/* Anel interno separador (gap de ~3px entre os dois strokes) */}
                <circle cx={p.x} cy={p.y} r={nr + 3} fill="none" stroke="#000" strokeWidth="3" />
              </>
            )}
            <circle
              cx={p.x} cy={p.y} r={nr}
              fill={fillColor}
              stroke="#000" strokeWidth="4"
            />
            <text
              x={p.x} y={p.y}
              textAnchor="middle" dominantBaseline="middle"
              className="p2-node-label"
              style={{ fontSize }}
            >
              {label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
