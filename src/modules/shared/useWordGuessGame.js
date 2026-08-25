// ─── useWordGuessGame: estado React da mecânica "Termo" (grade + dica) ───────
// Fino wrapper sobre wordGuessLogic.js — delega toda regra às funções puras
// (testáveis sem React). Usado tanto pela fase AFD-L08 (dentro do canvas, ver
// CanvasArea.jsx/WordleBoard.jsx) quanto pelo minigame standalone "Menor
// Palavra" (sem canvas).
//
// Escopo deliberadamente pequeno: só a mecânica 100% genérica da GRADE (dica +
// digitação letra-a-letra). Classificar a tentativa (menor/válida/errada) e
// tudo que acontece depois disso (estrelas, aula guiada, deck de cartas) fica
// fora do hook — cada tela de jogo tem sua própria lógica de progressão (ex.:
// handleTestWord em AFDPart1.jsx, que atende os 61 níveis de AFD, não só o
// L08) e não deveria depender deste hook para isso.
//
// `guess` é CONTROLADO de fora (como um input controlado): o chamador passa
// `guess`/`setGuess` — no AFD-P1 isso é o mesmo `newWord`/`setNewWord` que já
// alimenta o TestPanel, então digitar na grade e digitar no campo lateral
// continuam sendo a mesma coisa, sem estado duplicado. O consumidor observa
// `guess.length === targetLength` (num useEffect, fora deste hook) e decide o
// que fazer — chamar seu próprio handleTestWord, depois `setGuess('')` para a
// próxima tentativa.
import { useState, useCallback } from 'react';
import { nextHintStage, typeChar, backspaceChar, distinctLetters } from './wordGuessLogic';

export default function useWordGuessGame({ shortestWord, guess, setGuess }) {
  const targetLength = shortestWord?.length ?? 0;

  const [hintStage, setHintStage] = useState(0);

  const reset = useCallback(() => {
    setHintStage(0);
  }, []);

  const requestHint = useCallback(() => {
    setHintStage(s => nextHintStage(s));
  }, []);

  const typeAt = useCallback((index, ch) => {
    setGuess(typeChar(guess, index, ch, targetLength));
  }, [guess, setGuess, targetLength]);

  const backspaceAt = useCallback((index) => {
    setGuess(backspaceChar(guess, index));
  }, [guess, setGuess]);

  return {
    hintStage, targetLength,
    letters: hintStage >= 2 ? distinctLetters(shortestWord) : [],
    requestHint, typeAt, backspaceAt, reset, setHintStage,
  };
}
