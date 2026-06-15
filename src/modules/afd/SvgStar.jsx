import { DIFF_COLOR } from '../../levels';

export function DifficultyLegend() {
  return (
    <div style={{ position:'fixed', bottom:16, right:16, background:'#fff', border:'3px solid #000',
      borderRadius:8, boxShadow:'3px 3px 0 #000', padding:'8px 12px', zIndex:100,
      display:'flex', flexDirection:'column', gap:4, fontSize:12, fontWeight:'bold' }}>
      {[['easy','Easy'],['medium','Medium'],['hard','Hard'],['impossible','Impossível'],['unavailable','Indisponível']].map(([key, label]) => (
        <div key={key} style={{ display:'flex', alignItems:'center', gap:6 }}>
          <span style={{ width:14, height:14, background:DIFF_COLOR[key], border:'2px solid #000', borderRadius:3, display:'inline-block', flexShrink:0 }} />
          {label}
        </div>
      ))}
    </div>
  );
}

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

export function SvgStars({ count, size = 13, max = 3 }) {
  return (
    <span style={{ display:'inline-flex', gap:2, alignItems:'center', verticalAlign:'middle' }}>
      {Array.from({ length: max }, (_, i) => i + 1).map(n => <SvgStar key={n} filled={n <= count} size={size} />)}
    </span>
  );
}
