// ─── WordGuess: raiz do minigame "Menor Palavra" ─────────────────────────────
// Mesmo padrão de AFDMinimizer.jsx: alterna entre grade (WordGuessLevelList)
// e jogo (WordGuessGame) com estado local — só este arquivo é lazy-loaded a
// partir de App.jsx, então trocar de tela aqui dentro não recarrega nada.
import { useState } from 'react';
import WordGuessLevelList from './WordGuessLevelList';
import WordGuessGame from './WordGuessGame';

export default function WordGuess({ onBack, progress, updateProgress, showToast }) {
  const [selected, setSelected] = useState(null);

  if (selected) {
    return (
      <WordGuessGame
        exercise={selected}
        progress={progress}
        updateProgress={updateProgress}
        showToast={showToast}
        onBack={() => setSelected(null)}
      />
    );
  }

  return (
    <WordGuessLevelList
      progress={progress}
      onSelect={setSelected}
      onBack={onBack}
    />
  );
}
