// AFDMinimizer.jsx – Minimização de AFD com 5 Exercícios
import { useState, useCallback } from 'react';
import './AFDMinimizer.css';

const MINIMIZATION_EXERCISES = [
  {
    id: 1,
    level: 'easy',
    title: 'Todos Equivalentes',
    description: 'Todos os 3 estados são finais. Eles são equivalentes?',
    initial: {
      states: ['q0', 'q1', 'q2'],
      alphabet: ['a', 'b'],
      initialState: 'q0',
      finalStates: ['q0', 'q1', 'q2'],
      transitions: [
        { from: 'q0', symbol: 'a', to: 'q2' },
        { from: 'q0', symbol: 'b', to: 'q1' },
        { from: 'q1', symbol: 'a', to: 'q2' },
        { from: 'q1', symbol: 'b', to: 'q0' },
        { from: 'q2', symbol: 'a', to: 'q1' },
        { from: 'q2', symbol: 'b', to: 'q0' },
      ],
    },
    expected: {
      states: ['q0'],
      finalStates: ['q0'],
      transitions: [
        { from: 'q0', symbol: 'a', to: 'q0' },
        { from: 'q0', symbol: 'b', to: 'q0' },
      ],
    },
    explanation: 'Como todos são finais e levam uns aos outros, todos são equivalentes e se fundem em um único estado.',
    hint: 'Use a tabela triangular. Todos os pares são marcados?',
  },
  {
    id: 2,
    level: 'easy',
    title: 'Dois Pares Equivalentes',
    description: 'Encontre quais pares de estados são equivalentes.',
    initial: {
      states: ['q0', 'q1', 'q2', 'q3', 'q4'],
      alphabet: ['a', 'b'],
      initialState: 'q0',
      finalStates: ['q3', 'q4'],
      transitions: [
        { from: 'q0', symbol: 'a', to: 'q1' },
        { from: 'q0', symbol: 'b', to: 'q2' },
        { from: 'q1', symbol: 'a', to: 'q2' },
        { from: 'q1', symbol: 'b', to: 'q3' },
        { from: 'q2', symbol: 'a', to: 'q1' },
        { from: 'q2', symbol: 'b', to: 'q4' },
        { from: 'q3', symbol: 'a', to: 'q2' },
        { from: 'q3', symbol: 'b', to: 'q3' },
        { from: 'q4', symbol: 'a', to: 'q1' },
        { from: 'q4', symbol: 'b', to: 'q4' },
      ],
    },
    expected: {
      states: ['q0', 'q1q2', 'q3q4'],
      finalStates: ['q3q4'],
    },
    explanation: 'q1 e q2 são equivalentes. q3 e q4 também são equivalentes.',
    hint: 'Aplique a tabela triangular até convergência.',
  },
  {
    id: 3,
    level: 'medium',
    title: 'Três Símbolos',
    description: 'Minimização com alfabeto maior.',
    initial: {
      states: ['q0', 'q1', 'q2', 'q3', 'q4', 'q5'],
      alphabet: ['a', 'b', 'c'],
      initialState: 'q0',
      finalStates: ['q3', 'q4', 'q5'],
      transitions: [
        { from: 'q0', symbol: 'a', to: 'q1' },
        { from: 'q0', symbol: 'b', to: 'q0' },
        { from: 'q0', symbol: 'c', to: 'q2' },
        { from: 'q1', symbol: 'a', to: 'q3' },
        { from: 'q1', symbol: 'b', to: 'q1' },
        { from: 'q1', symbol: 'c', to: 'q2' },
        { from: 'q2', symbol: 'a', to: 'q2' },
        { from: 'q2', symbol: 'b', to: 'q4' },
        { from: 'q2', symbol: 'c', to: 'q5' },
        { from: 'q3', symbol: 'a', to: 'q3' },
        { from: 'q3', symbol: 'b', to: 'q1' },
        { from: 'q3', symbol: 'c', to: 'q4' },
        { from: 'q4', symbol: 'a', to: 'q5' },
        { from: 'q4', symbol: 'b', to: 'q1' },
        { from: 'q4', symbol: 'c', to: 'q4' },
        { from: 'q5', symbol: 'a', to: 'q3' },
        { from: 'q5', symbol: 'b', to: 'q1' },
        { from: 'q5', symbol: 'c', to: 'q4' },
      ],
    },
    expected: {
      states: ['q0', 'q1', 'q2', 'q3q4q5'],
      finalStates: ['q3q4q5'],
    },
    explanation: 'Os três finais (q3, q4, q5) são equivalentes.',
    hint: 'Cuidado com as dependências na tabela triangular.',
  },
  {
    id: 4,
    level: 'medium',
    title: 'Com Estado de Erro',
    description: 'Autômato com função parcial (estado erro incluído).',
    initial: {
      states: ['q0', 'q1', 'q2', 'q3', 'q4', 'qe'],
      alphabet: ['a', 'b'],
      initialState: 'q0',
      finalStates: ['q3', 'q4'],
      transitions: [
        { from: 'q0', symbol: 'a', to: 'q0' },
        { from: 'q0', symbol: 'b', to: 'q1' },
        { from: 'q1', symbol: 'a', to: 'q4' },
        { from: 'q1', symbol: 'b', to: 'q2' },
        { from: 'q2', symbol: 'a', to: 'q2' },
        { from: 'q2', symbol: 'b', to: 'qe' },
        { from: 'q3', symbol: 'a', to: 'q2' },
        { from: 'q3', symbol: 'b', to: 'q3' },
        { from: 'q4', symbol: 'a', to: 'q1' },
        { from: 'q4', symbol: 'b', to: 'q4' },
        { from: 'qe', symbol: 'a', to: 'qe' },
        { from: 'qe', symbol: 'b', to: 'qe' },
      ],
    },
    expected: {
      states: ['q0', 'q1', 'q2qe', 'q3q4'],
      finalStates: ['q3q4'],
    },
    explanation: 'q3 e q4 são finais equivalentes. q2 e qe ficam juntos pois ambos levam ao erro.',
    hint: 'O estado de erro pode ser equivalente a outros não-finais.',
  },
  {
    id: 5,
    level: 'hard',
    title: 'Desafio Completo',
    description: 'Caso com múltiplas equivalências.',
    initial: {
      states: ['q0', 'q1', 'q2', 'q3', 'q4', 'q5', 'q6'],
      alphabet: ['a', 'b', 'c'],
      initialState: 'q0',
      finalStates: ['q5', 'q6'],
      transitions: [
        { from: 'q0', symbol: 'a', to: 'q1' },
        { from: 'q0', symbol: 'b', to: 'q2' },
        { from: 'q0', symbol: 'c', to: 'q3' },
        { from: 'q1', symbol: 'a', to: 'q4' },
        { from: 'q1', symbol: 'b', to: 'q4' },
        { from: 'q1', symbol: 'c', to: 'q3' },
        { from: 'q2', symbol: 'a', to: 'q4' },
        { from: 'q2', symbol: 'b', to: 'q4' },
        { from: 'q2', symbol: 'c', to: 'q3' },
        { from: 'q3', symbol: 'a', to: 'q5' },
        { from: 'q3', symbol: 'b', to: 'q5' },
        { from: 'q3', symbol: 'c', to: 'q6' },
        { from: 'q4', symbol: 'a', to: 'q5' },
        { from: 'q4', symbol: 'b', to: 'q5' },
        { from: 'q4', symbol: 'c', to: 'q6' },
        { from: 'q5', symbol: 'a', to: 'q5' },
        { from: 'q5', symbol: 'b', to: 'q5' },
        { from: 'q5', symbol: 'c', to: 'q5' },
        { from: 'q6', symbol: 'a', to: 'q6' },
        { from: 'q6', symbol: 'b', to: 'q6' },
        { from: 'q6', symbol: 'c', to: 'q6' },
      ],
    },
    expected: {
      states: ['q0', 'q1q2', 'q3q4', 'q5q6'],
      finalStates: ['q5q6'],
    },
    explanation: 'q1≡q2, q3≡q4, q5≡q6. Múltiplas fusões em cascata.',
    hint: 'Aplique iterativamente até nenhuma mudança.',
  },
];

export default function AFDMinimizer({ onBack, progress, updateProgress, showToast }) {
  const [currentExerciseIdx, setCurrentExerciseIdx] = useState(0);
  const [showSolution, setShowSolution] = useState(false);
  const [userAnswer, setUserAnswer] = useState(null);

  const exercise = MINIMIZATION_EXERCISES[currentExerciseIdx];
  const currentProgress = progress[`afd-min-${exercise.id}`] || { stars: 0 };

  const handleNext = () => {
    if (currentExerciseIdx < MINIMIZATION_EXERCISES.length - 1) {
      setCurrentExerciseIdx(currentExerciseIdx + 1);
      setShowSolution(false);
      setUserAnswer(null);
    }
  };

  const handlePrevious = () => {
    if (currentExerciseIdx > 0) {
      setCurrentExerciseIdx(currentExerciseIdx - 1);
      setShowSolution(false);
      setUserAnswer(null);
    }
  };

  const handleValidate = () => {
    if (!userAnswer) {
      showToast('Preencha sua resposta primeiro!', 'info');
      return;
    }

    const isCorrect = validateMinimization(userAnswer, exercise.expected);

    if (isCorrect) {
      updateProgress(`afd-min-${exercise.id}`, 3);
      showToast('✓ Perfeito! 3 Estrelas!', 'success');
    } else {
      updateProgress(`afd-min-${exercise.id}`, Math.max(currentProgress.stars, 1));
      showToast('✗ Tente novamente ou veja a dica.', 'error');
    }
  };

  return (
    <div className="minimizer-wrapper">
      <header className="game-header">
        <button className="back-btn" onClick={onBack}>← Voltar</button>
        <h2>Minimização de AFD</h2>
        <div style={{ fontSize: 14, fontWeight: 'bold' }}>
          Ex {currentExerciseIdx + 1} / {MINIMIZATION_EXERCISES.length}
        </div>
      </header>

      <div className="minimizer-content">
        <div className="exercise-card">
          <div className="exercise-header">
            <h3>{exercise.title}</h3>
            <span className={`exercise-level ${exercise.level}`}>{exercise.level.toUpperCase()}</span>
            <div className="exercise-stars">
              {[1, 2, 3].map(i => (
                <span key={i} style={{ color: i <= currentProgress.stars ? '#fbbf24' : '#ccc', fontSize: 18 }}>
                  ★
                </span>
              ))}
            </div>
          </div>

          <p className="exercise-description">{exercise.description}</p>

          <div className="afd-display">
            <h4>📊 AFD Original</h4>
            <table className="afd-table">
              <thead>
                <tr>
                  <th>δ</th>
                  {exercise.initial.alphabet.map(sym => (
                    <th key={sym}>{sym}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {exercise.initial.states.map(state => (
                  <tr key={state}>
                    <td className="state-label">
                      {state}
                      {state === exercise.initial.initialState && ' →'}
                      {exercise.initial.finalStates.includes(state) && ' ★'}
                    </td>
                    {exercise.initial.alphabet.map(sym => {
                      const trans = exercise.initial.transitions.find(
                        t => t.from === state && t.symbol === sym
                      );
                      return <td key={sym}>{trans ? trans.to : '-'}</td>;
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {!showSolution && (
            <div className="user-answer-section">
              <h4>✏️ Sua Resposta</h4>
              <textarea
                className="answer-textarea"
                placeholder={`Estados minimizados: q0, q1q2, ...\nDescreva a tabela de transição...`}
                value={userAnswer || ''}
                onChange={e => setUserAnswer(e.target.value)}
              />
              <button className="validate-btn" onClick={handleValidate}>
                Validar Resposta
              </button>
            </div>
          )}

          {showSolution && (
            <div className="solution-section">
              <h4>✓ Solução Esperada</h4>
              <table className="afd-table">
                <thead>
                  <tr>
                    <th>δ'</th>
                    {exercise.initial.alphabet?.map(sym => (
                      <th key={sym}>{sym}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {exercise.expected.states?.map(state => (
                    <tr key={state}>
                      <td className="state-label">{state}</td>
                      {exercise.initial.alphabet?.map(sym => (
                        <td key={sym}>-</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="explanation">{exercise.explanation}</p>
            </div>
          )}

          <div className="exercise-controls">
            <button
              className="hint-btn"
              onClick={() => showToast(exercise.hint, 'info')}
            >
              💡 Dica
            </button>
            <button
              className="solution-btn"
              onClick={() => setShowSolution(!showSolution)}
            >
              {showSolution ? '🙈 Esconder' : '🔍 Ver Solução'}
            </button>
          </div>

          <div className="exercise-nav">
            <button
              className="nav-btn"
              onClick={handlePrevious}
              disabled={currentExerciseIdx === 0}
            >
              ← Anterior
            </button>
            <span>
              {currentExerciseIdx + 1} / {MINIMIZATION_EXERCISES.length}
            </span>
            <button
              className="nav-btn"
              onClick={handleNext}
              disabled={currentExerciseIdx === MINIMIZATION_EXERCISES.length - 1}
            >
              Próximo →
            </button>
          </div>
        </div>

        <aside className="progress-sidebar">
          <h3>📊 Progresso</h3>
          <div className="progress-list">
            {MINIMIZATION_EXERCISES.map((ex, idx) => {
              const exProgress = progress[`afd-min-${ex.id}`] || { stars: 0 };
              return (
                <div
                  key={ex.id}
                  className={`progress-item ${idx === currentExerciseIdx ? 'active' : ''}`}
                  onClick={() => {
                    setCurrentExerciseIdx(idx);
                    setShowSolution(false);
                    setUserAnswer(null);
                  }}
                >
                  <span className="progress-title">{ex.title}</span>
                  <span className="progress-stars">
                    {'★'.repeat(exProgress.stars)}{'☆'.repeat(3 - exProgress.stars)}
                  </span>
                </div>
              );
            })}
          </div>
        </aside>
      </div>
    </div>
  );
}

const validateMinimization = (userAnswer, expected) => {
  return userAnswer.includes('q');
};
