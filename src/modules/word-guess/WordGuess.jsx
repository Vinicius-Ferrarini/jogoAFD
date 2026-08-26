// ─── WordGuess: raiz do minigame "Menor Palavra" ─────────────────────────────
// Mesmo padrão de AFDMinimizer.jsx: alterna entre grade (WordGuessLevelList)
// e jogo (WordGuessGame) com estado local — só este arquivo é lazy-loaded a
// partir de App.jsx, então trocar de tela aqui dentro não recarrega nada.
//
// `selectedIndex` (índice global em ALL_EXERCISE_STUBS) é guardado junto do
// exercício resolvido para permitir "◀ Fase anterior / Próxima fase ▶" sem
// depender da página da grade em que o exercício foi selecionado — o mesmo
// índice serve pra buscar o vizinho via getExerciseAtIndex, seja qual for a
// página onde o aluno estava.
import { useState, useCallback } from 'react';
import WordGuessLevelList from './WordGuessLevelList';
import WordGuessGame from './WordGuessGame';
import { ALL_EXERCISE_STUBS, getExerciseAtIndex } from '../shared/wordExercises/index.js';

export default function WordGuess({ onBack, progress, updateProgress, showToast }) {
  const [selected, setSelected] = useState(null); // { exercise, index } | null

  const selectByIndex = useCallback(async (index) => {
    const exercise = await getExerciseAtIndex(index);
    if (exercise) setSelected({ exercise, index });
  }, []);

  const handleSelect = useCallback((exercise) => {
    const index = ALL_EXERCISE_STUBS.findIndex(s => s.id === exercise.id);
    setSelected({ exercise, index });
  }, []);

  if (selected) {
    return (
      <WordGuessGame
        exercise={selected.exercise}
        progress={progress}
        updateProgress={updateProgress}
        showToast={showToast}
        onBack={() => setSelected(null)}
        isFirst={selected.index <= 0}
        isLast={selected.index >= ALL_EXERCISE_STUBS.length - 1}
        onPrevExercise={() => selectByIndex(selected.index - 1)}
        onNextExercise={() => selectByIndex(selected.index + 1)}
      />
    );
  }

  return (
    <WordGuessLevelList
      progress={progress}
      onSelect={handleSelect}
      onBack={onBack}
    />
  );
}
