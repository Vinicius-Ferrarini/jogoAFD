// ─── wordGuessLogic: núcleo puro da mecânica "Termo" (testável sem React) ────
// Extraído do piloto AFD-L08 (ver WordleBoard.jsx/AFDPart1.jsx) para ser
// reutilizado tanto pelas fases normais quanto pelo minigame standalone
// "Menor Palavra" — a UI (React) só chama estas funções, nunca reimplementa
// as regras de estágio/digitação/submit.
//
// Modelo: um "guess" é sempre um prefixo contíguo sem buracos (como no Wordle
// real) — só a próxima célula livre aceita digitação, e apagar sempre afeta a
// última letra preenchida. hintStage: 0 = escondido, 1 = tamanho (grade vazia
// clicável), 2 = tamanho + texto fixo com o conjunto de letras distintas da
// palavra (sem revelar posição) — ver regra confirmada com o usuário.

// Avança o estágio de dica (0→1→2), sem ultrapassar 2.
export function nextHintStage(stage) {
  return Math.min(stage + 1, 2);
}

// Digita 1 caractere na próxima célula livre. Retorna o novo guess, ou o
// mesmo guess (inalterado) se a digitação for inválida (célula errada, guess
// já completo, ou caractere vazio).
export function typeChar(guess, index, ch, targetLength) {
  if (!ch) return guess;
  if (index !== guess.length) return guess; // só a próxima célula livre aceita
  if (guess.length >= targetLength) return guess;
  return (guess + ch).slice(0, targetLength);
}

// Apaga 1 caractere. `index` é a célula onde o Backspace foi pressionado —
// tanto a última célula preenchida quanto a célula vazia logo depois dela
// removem a mesma última letra (mesmo comportamento do Wordle real).
export function backspaceChar(guess, index) {
  if (index === guess.length - 1 || index === guess.length) {
    return guess.slice(0, -1);
  }
  return guess;
}

// Conjunto de letras distintas da palavra-alvo, em ordem alfabética — usado
// pelo texto fixo do estágio 2 ("Letras da menor palavra: [a, b, c]").
// Filtra 'λ' (sentinela de palavra vazia) — não é uma "letra" de verdade.
export function distinctLetters(word) {
  if (!word) return [];
  return [...new Set(word.split(''))].filter(c => c !== 'λ').sort();
}

// Classifica uma tentativa já testada: 'shortest' (bate com shortestWord),
// 'correct' (aceita pela linguagem mas não é a menor) ou 'wrong' (rejeitada).
// checkWord(word) deve retornar { isShortest, isValid } — cada módulo de
// origem (AFD/AP/MT-Recon) decide como calcular isso a partir do seu próprio
// gabarito; esta função só decide o rótulo final a partir do resultado.
export function classifyAttempt({ isShortest, isValid }) {
  if (isShortest) return 'shortest';
  if (isValid) return 'correct';
  return 'wrong';
}
