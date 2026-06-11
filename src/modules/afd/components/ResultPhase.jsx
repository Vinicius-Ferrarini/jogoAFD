import { SvgStars } from '../SvgStar';

export default function ResultPhase({ minimized, exercise, stars, onBack }) {
  return (
    <div className="min-panel">
      <div className="section-header" style={{ fontSize:11 }}>AFD Minimizado</div>

      <div className="min-groups">
        {Object.entries(minimized.classMap).map(([rep, members]) => (
          <div key={rep} className="min-group-row">
            <span className="min-group-members">{'{'}{members.join(', ')}{'}'}
            </span>
            <span className="min-group-arrow">→</span>
            <span className="min-group-rep">{minimized.displayName[rep]}</span>
          </div>
        ))}
      </div>

      <div style={{ background:'#fff9c4', border:'2px solid #000', borderRadius:8,
        padding:'8px 10px', fontSize:11, lineHeight:1.5 }}>
        {exercise.explanation}
      </div>

      <div style={{ display:'flex', alignItems:'center', gap:6,
        background:'#fff', border:'3px solid #000', borderRadius:8,
        padding:'8px 14px', boxShadow:'4px 4px 0 #000' }}>
        <SvgStars count={stars} size={22} />
        <span style={{ fontWeight:'bold', fontSize:13 }}>
          {stars === 3 ? 'Perfeito!' : stars === 2 ? 'Ótimo!' : 'Continue!'}
        </span>
      </div>

      <button className="add-test-btn"
        style={{ alignSelf:'stretch', padding:'10px', fontSize:13,
          fontWeight:'bold', background:'#a78bfa' }}
        onClick={onBack}>
        ← Ver outros exercícios
      </button>
    </div>
  );
}
