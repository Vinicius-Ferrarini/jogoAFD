// Renderização de um traço SVG único (lápis, linha, seta, retângulo)
// Usado nos sistemas de anotação de AFDPart1 e AFDPart2.

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

export default function StrokeEl({ stroke, idx }) {
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

// Alias para compatibilidade com AFDPart2 (que chama DrawStroke)
export { StrokeEl as DrawStroke };
