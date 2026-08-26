// ─── WordGuessGame: tela de 1 exercício do minigame "Menor Palavra" ──────────
// Propositalmente leve/simples: sem canvas, sem undo/redo, sem aula guiada —
// só a mecânica do Termo (useWordGuessGame + WordleBoard, mesmos usados na
// fase AFD-L08). Estrela binária: acerta a menor palavra = 1 estrela, ganha
// independente de ter usado dica ou não (ver docs/MENOR_PALAVRA_MINIGAME.md,
// decisão 5).
import { useState, useCallback, useEffect, useRef } from 'react';
import WordleBoard from '../afd/components/WordleBoard';
import useWordGuessGame from '../shared/useWordGuessGame';
import { navBtnStyle, navBtnDisabledStyle } from '../afd/components/navButtonStyles';

const MODULE_LABEL = { afd: 'Autômatos Finitos', ap: 'Autômato com Pilha', 'mt-recon': 'Máquina de Turing' };

export default function WordGuessGame({
  exercise, progress, updateProgress, showToast, onBack,
  isFirst, isLast, onPrevExercise, onNextExercise,
}) {
  const [guess, setGuess] = useState('');
  const [attempts, setAttempts] = useState([]); // [{ word, status }], mais recente primeiro
  const [won, setWon] = useState(false);

  const wordleGame = useWordGuessGame({
    shortestWord: exercise.shortestWord,
    guess,
    setGuess,
  });

  const progressKey = `word-guess-${exercise.id}`;
  const alreadyWon = (progress[progressKey]?.stars || 0) > 0;

  // Reset ao trocar de exercício (a tela é reaproveitada, não remontada, se o
  // orquestrador não usar `key` — trocar defensivamente aqui evita estado
  // vazado de um exercício pro outro).
  const lastExerciseIdRef = useRef(exercise.id);
  useEffect(() => {
    if (lastExerciseIdRef.current !== exercise.id) {
      lastExerciseIdRef.current = exercise.id;
      setGuess('');
      setAttempts([]);
      setWon(false);
      wordleGame.reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exercise.id]);

  const handleSubmit = useCallback(() => {
    const wordDisplay = guess === '' ? 'λ' : guess;
    if (attempts.some(a => a.word === wordDisplay)) {
      showToast?.('Você já testou essa palavra!', 'info');
      setGuess('');
      return;
    }
    const isCorrect = exercise.checkWord(guess);
    const isShortest = isCorrect && guess.length === exercise.shortestWord.length;
    const status = isShortest ? 'shortest' : (isCorrect ? 'correct' : 'wrong');
    setAttempts(prev => [{ word: wordDisplay, status }, ...prev]);
    if (isShortest) {
      setWon(true);
      if (!alreadyWon) updateProgress(progressKey, 1);
      showToast?.('Acertou a menor palavra! ⭐', 'success');
    }
    setGuess('');
  }, [guess, attempts, exercise, alreadyWon, progressKey, updateProgress, showToast]);

  return (
    <div style={{ minHeight: '100vh', background: '#8a8262', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 20 }}>
      <div style={{ width: '100%', maxWidth: 720, display: 'flex', alignItems: 'center', marginBottom: 16 }}>
        <button className="back-btn" onClick={onBack}>⬅ Voltar</button>
        <div style={{ flex: 1 }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <button
            style={isFirst ? navBtnDisabledStyle : navBtnStyle}
            onClick={onPrevExercise}
            disabled={isFirst}
            title="Exercício anterior"
          >◀</button>
          <button
            style={isLast ? navBtnDisabledStyle : navBtnStyle}
            onClick={onNextExercise}
            disabled={isLast}
            title="Próximo exercício"
          >▶</button>
        </div>
      </div>

      <div style={{ background: '#fff', border: '3px solid #000', borderRadius: 10, boxShadow: '4px 4px 0 #000',
        padding: '10px 20px', marginBottom: 20, fontWeight: 900, textAlign: 'center' }}>
        <div style={{ fontSize: 11, opacity: 0.6, marginBottom: 2 }}>
          {MODULE_LABEL[exercise.moduleId] || exercise.moduleId} · {exercise.label}
        </div>
        {/* languageNormalized já é canônico sem prefixo nos 3 módulos (ver
            normalizeLanguage.js) — exercise.language bruto tem "L = " só no
            AFD, então usar languageNormalized aqui evita "L = L = {...}". */}
        <div style={{ fontSize: 16 }}>L = {exercise.languageNormalized}</div>
      </div>

      <div style={{ background: 'rgba(0,0,0,0.55)', borderRadius: 12, padding: '18px 22px', marginBottom: 16 }}>
        {/* No minigame a grade é o jogo inteiro — diferente do L08 (onde fica
            escondida atrás do Maurílio até pedir dica), aqui já começa
            visível e digitável. wordleGame.hintStage nasce em 0 (mesmo
            default do hook); Math.max(1, ...) força a exibição mínima (só
            bordas vazias) sem precisar de um estado "hintStage inicial"
            diferente — o botão de dica abaixo ainda controla o avanço real
            para 2 (texto de letras), a partir do 0 real do hook. */}
        <WordleBoard
          attempts={attempts}
          targetLength={exercise.shortestWord.length}
          shortestWord={exercise.shortestWord}
          hintStage={won ? 0 : Math.max(1, wordleGame.hintStage)}
          guess={guess}
          typeAt={won ? undefined : wordleGame.typeAt}
          backspaceAt={won ? undefined : wordleGame.backspaceAt}
          onSubmit={won ? undefined : handleSubmit}
        />
      </div>

      {!won && (
        <button className="menu-btn" onClick={wordleGame.requestHint} disabled={wordleGame.hintStage >= 2}
          style={{ marginBottom: 12 }}>
          💡 Dica {wordleGame.hintStage >= 2 ? '(máxima)' : ''}
        </button>
      )}

      {won && (
        <div style={{ background: 'var(--accent-green)', border: '3px solid #000', borderRadius: 10,
          boxShadow: '4px 4px 0 #000', padding: '10px 20px', fontWeight: 900, textAlign: 'center',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
          <span>⭐ Menor palavra encontrada: "{exercise.shortestWord === '' ? 'λ' : exercise.shortestWord}"</span>
          {!isLast && (
            <button className="menu-btn" onClick={onNextExercise}
              style={{ padding: '8px 20px', fontSize: 14, background: '#fff' }}>
              Próxima fase ▶
            </button>
          )}
        </div>
      )}
    </div>
  );
}
