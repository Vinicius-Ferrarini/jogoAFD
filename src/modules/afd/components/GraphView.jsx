// Grafo SVG read-only — compartilhado entre AFDPart2 (AFDGraphView) e AFDMinimizer (GraphView).
// CSS: classes .p2-edge-label, .p2-node-label definidas em AFDPart2.css.
// highlightNodeId/highlightType: usados pela simulação passo a passo (apenas AFDPart2).
// vw/vh/nr/mx/my: permitem customizar o viewport para cada contexto.
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
}) {
  const positions = useMemo(
    () => computeLayout(nodes, transitions, { VW: vw, VH: vh, MX: mx, MY: my }),
    [nodes, transitions, vw, vh, mx, my]
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

  return (
    <svg
      viewBox={`0 0 ${vw} ${vh}`}
      style={{ width: '100%', height: '100%', display: 'block' }}
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <marker id="gv-arr" markerWidth="18" markerHeight="14" refX="48" refY="7"
          orient="auto" markerUnits="userSpaceOnUse">
          <polygon points="0 0,18 7,0 14" fill="#000" />
        </marker>
        <marker id="gv-arr-sl" markerWidth="18" markerHeight="14" refX="18" refY="7"
          orient="auto" markerUnits="userSpaceOnUse">
          <polygon points="0 0,18 7,0 14" fill="#000" />
        </marker>
      </defs>

      {edges.map((edge, i) => {
        const sp = positions[edge.from];
        const tp = positions[edge.to];
        if (!sp || !tp) return null;
        const label = edge.syms.join(',');

        if (edge.from === edge.to) {
          return (
            <g key={i}>
              <path
                d={`M ${sp.x - 13} ${sp.y - nr + 5} C ${sp.x - 46} ${sp.y - nr - 58} ${sp.x + 46} ${sp.y - nr - 58} ${sp.x + 13} ${sp.y - nr + 5}`}
                fill="none" stroke="#000" strokeWidth="4" markerEnd="url(#gv-arr-sl)"
              />
              <text x={sp.x} y={sp.y - nr - 32}
                textAnchor="middle" dominantBaseline="middle" className="p2-edge-label">
                {label}
              </text>
            </g>
          );
        }

        const dx = tp.x - sp.x, dy = tp.y - sp.y;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        const nx = -dy / dist, ny = dx / dist;
        const bidir = hasBidir(edge.from, edge.to);

        let pathD, lx, ly;
        if (bidir) {
          const off = 38;
          const cx1 = (sp.x + tp.x) / 2 + nx * off;
          const cy1 = (sp.y + tp.y) / 2 + ny * off;
          pathD = `M ${sp.x} ${sp.y} Q ${cx1} ${cy1} ${tp.x} ${tp.y}`;
          lx = ((sp.x + tp.x) / 2 + cx1) / 2 + nx * 10;
          ly = ((sp.y + tp.y) / 2 + cy1) / 2 + ny * 10;
        } else {
          pathD = `M ${sp.x} ${sp.y} L ${tp.x} ${tp.y}`;
          lx = (sp.x + tp.x) / 2 + nx * 15;
          ly = (sp.y + tp.y) / 2 + ny * 15;
        }

        return (
          <g key={i}>
            <path d={pathD} fill="none" stroke="#000" strokeWidth="4" markerEnd="url(#gv-arr)" />
            <text x={lx} y={ly} textAnchor="middle" dominantBaseline="middle" className="p2-edge-label">
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
        return (
          <g key={nd.id}>
            {nd.isInitial && (
              <text
                x={p.x - nr - 5} y={p.y}
                textAnchor="end" dominantBaseline="middle"
                style={{ fontSize: 22, fontWeight: 'bold', fill: '#000',
                  paintOrder: 'stroke', stroke: '#fff', strokeWidth: 3,
                  userSelect: 'none', pointerEvents: 'none' }}
              >▶</text>
            )}
            {nd.isFinal && (
              <circle cx={p.x} cy={p.y} r={nr + 7} fill="none" stroke="#000" strokeWidth="3" />
            )}
            <circle
              cx={p.x} cy={p.y} r={nr}
              fill={
                highlightNodeId === nd.id
                  ? (highlightType === 'ok' ? '#fef08a' : highlightType === 'done' ? '#86efac' : '#fca5a5')
                  : nd.isInitial ? '#bae6fd' : nd.isFinal ? '#bbf7d0' : '#fff'
              }
              stroke="#000" strokeWidth="3"
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
