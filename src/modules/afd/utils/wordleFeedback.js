// ─── wordleFeedback: feedback por letra estilo Wordle/Termo ───────────────────
// Compara uma tentativa (guess) contra a palavra-alvo (target) e devolve o
// status de cada letra: 'correct' (posição certa), 'present' (existe na
// palavra, posição errada) ou 'absent' (não existe, ou já esgotou as
// ocorrências disponíveis).
//
// Algoritmo de 2 passadas (padrão Wordle) — necessário para letras repetidas:
// 1ª passada marca 'correct' e consome uma ocorrência da letra no target.
// 2ª passada marca 'present' só enquanto sobrar ocorrência não consumida,
// senão 'absent' — evita vazar contagem além do que a palavra realmente tem
// (ex.: target "abca" (dois 'a'), guess "aaaa" → só as 2 primeiras posições
// de 'a' recebem correct/present; as demais ficam absent).
//
// guess e target devem ter o mesmo comprimento — comprimentos diferentes
// devolvem null (o chamador decide como tratar, ex.: rejeitar a tentativa).
export function buildLetterFeedback(guess, target) {
  if (guess == null || target == null || guess.length !== target.length) return null;

  const len = guess.length;
  const result = new Array(len).fill('absent');
  const remaining = {};
  for (const ch of target) remaining[ch] = (remaining[ch] ?? 0) + 1;

  // 1ª passada: acertos exatos consomem sua própria ocorrência primeiro.
  for (let i = 0; i < len; i++) {
    if (guess[i] === target[i]) {
      result[i] = 'correct';
      remaining[guess[i]] -= 1;
    }
  }

  // 2ª passada: letras corretas mas fora de posição, limitadas pela sobra.
  for (let i = 0; i < len; i++) {
    if (result[i] === 'correct') continue;
    const ch = guess[i];
    if (remaining[ch] > 0) {
      result[i] = 'present';
      remaining[ch] -= 1;
    }
  }

  return result;
}
