// AFDMinimizer.jsx – Minimização de AFD interativa (v2)
import { useState } from 'react';
import './AFDPart1.css';
import './AFDMinimizer.css';
import { SvgStar, DifficultyLegend } from './SvgStar';
import { DIFF_COLOR } from '../../levels';
import MinGame from './MinGame';
import { EXERCISES } from './afdMinimizerExercises';

// ─── Level List ───────────────────────────────────────────────────────────────
const LEVEL_ORDER     = { easy: 0, medium: 1, hard: 2 };
const SORTED_EXERCISES = [...EXERCISES].sort((a, b) => LEVEL_ORDER[a.level] - LEVEL_ORDER[b.level]);

function LevelList({ progress, onSelect, onBack }) {
  const maxStars   = EXERCISES.length * 3;
  const totalStars = EXERCISES.reduce((s, ex) => s + (progress[`afd-min-${ex.id}`]?.stars || 0), 0);
  return (
    <div className="menu-screen menu-screen-fases min-screen" style={{ justifyContent:'flex-start', paddingTop:20 }}>
      <div style={{ display:'flex', alignItems:'center', marginBottom:14, width:'100%' }}>
        <div style={{ flex:1 }}>
          <button className="back-btn" onClick={onBack}>⬅ Voltar</button>
        </div>
        <h1 className="menu-title" style={{ margin:0 }}>TuringLab</h1>
        <div style={{ flex:1 }} />
      </div>
      <p style={{ fontWeight:900, fontSize:16, color:'#555', marginBottom:12,
        background:'#bbf7d0', border:'3px solid #000', borderRadius:8,
        padding:'4px 16px', boxShadow:'3px 3px 0 #000' }}>
        ⚡ Minimização
      </p>
      <div style={{ marginBottom:18, fontWeight:'bold', fontSize:16 }}>
        Progresso: {maxStars > 0 ? Math.round((totalStars/maxStars)*100) : 0}% ({totalStars}/{maxStars} ★)
      </div>
      <div className="levels-grid">
        {SORTED_EXERCISES.map((ex, i) => {
          const stars = progress[`afd-min-${ex.id}`]?.stars || 0;
          return (
            <button key={ex.id} className="menu-btn primary"
              onClick={() => onSelect(ex)}
              style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:8,
                background: DIFF_COLOR[ex.level] }}>
              <span>Ex. {i + 1}</span>
              <span style={{ display:'flex', gap:2 }}>
                {[1,2,3].map(n => <SvgStar key={n} filled={n <= stars} />)}
              </span>
            </button>
          );
        })}
      </div>
      <DifficultyLegend />
    </div>
  );
}

// ─── Root ─────────────────────────────────────────────────────────────────────
export default function AFDMinimizer({ onBack, progress, updateProgress, showToast }) {
  const [selected, setSelected] = useState(null);

  if (selected) {
    const idx  = SORTED_EXERCISES.findIndex(e => e.id === selected.id);
    const prev = idx > 0 ? SORTED_EXERCISES[idx - 1] : null;
    const next = idx < SORTED_EXERCISES.length - 1 ? SORTED_EXERCISES[idx + 1] : null;
    return (
      <MinGame
        exercise={selected}
        exNumber={idx + 1}
        progress={progress}
        onBack={() => setSelected(null)}
        onPrev={prev ? () => setSelected(prev) : null}
        onNext={next ? () => setSelected(next) : null}
        nextLabel={next ? `Ex. ${idx + 2}` : null}
        updateProgress={updateProgress}
        showToast={showToast}
      />
    );
  }

  return (
    <LevelList
      progress={progress}
      onSelect={setSelected}
      onBack={onBack}
    />
  );
}
