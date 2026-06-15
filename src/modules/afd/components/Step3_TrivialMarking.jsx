import { useState } from 'react';
import TriangularTable from './TriangularTable';

// Step3_TrivialMarking — caso-base de Myhill–Nerode (passo TRIVIAL).
// Marca × em todo par com EXATAMENTE um estado final. Componente "burro":
// `marks` é elevado ao MinGame; a verdade vem de game.validateTrivial.
export default function Step3_TrivialMarking({ game, marks, setMarks, showProf, onAdvance }) {
  const { rStates, rFinals, validateTrivial } = game;
  const [wrongCells, setWrongCells] = useState(new Set());

  const finalSet = new Set(rFinals);

  const toggle = (key) => {
    setMarks(prev => ({ ...prev, [key]: !prev[key] }));
    if (wrongCells.size) setWrongCells(new Set());
  };

  const verify = () => {
    const res = validateTrivial(marks);
    if (!res.ok) {
      setWrongCells(res.errorCells);
      showProf(res.message, 'serio');
      return;
    }
    setWrongCells(new Set());
    showProf(res.message + ' Agora vamos propagar.', 'feliz');
    onAdvance();
  };

  return (
    <div className="min-panel">
      <div className="section-header" style={{ fontSize: 11 }}>Passo 1 — Marcação Trivial</div>
      <p className="min-step-text">
        Marque com <b>×</b> todo par em que <b>um estado é final e o outro não</b>.
        Eles nunca serão equivalentes — uma palavra que um aceita o outro rejeita.
      </p>

      <div className="min-final-badges">
        <span style={{ fontWeight: 900, fontSize: 10 }}>Finais:</span>
        {rStates.map(s => (
          <span key={s} className={`min-state-badge${finalSet.has(s) ? ' final' : ''}`}>
            {s}{finalSet.has(s) ? ' ✓' : ''}
          </span>
        ))}
      </div>

      <TriangularTable states={rStates} userTable={marks} onToggle={toggle} wrongCells={wrongCells} />

      <button className="add-test-btn min-step-btn" style={{ background: '#fde047' }} onClick={verify}>
        Verificar Passo 1 ✓
      </button>
    </div>
  );
}
