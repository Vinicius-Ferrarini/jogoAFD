export function SvgStar({ filled, size = 13 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={{ display:'inline-block', verticalAlign:'middle' }}>
      <polygon
        points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
        fill={filled ? '#fbbf24' : '#d1d5db'}
        stroke="#000"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SvgStars({ count, size = 13 }) {
  return (
    <span style={{ display:'inline-flex', gap:2, alignItems:'center', verticalAlign:'middle' }}>
      {[1,2,3].map(n => <SvgStar key={n} filled={n <= count} size={size} />)}
    </span>
  );
}
