// ─── sizeHint: "Dica de tamanho" da fase "Descubra a Menor Palavra" ───────────
// Compartilhado por AFD Parte 1, Autômatos com Pilha e MT Reconhecedora — os 3
// módulos com essa mecânica de onboarding. Não revela a palavra em si, só a
// diferença de tamanho entre a última tentativa e a menor palavra da fase.
//
// shortestWord segue a convenção já usada nos 3 módulos: string (inclusive '')
// para a menor palavra real, ou null/undefined quando não há referência ainda
// disponível — em ambos os casos o tamanho de referência é 0 (λ).

function pluralizeChars(n) {
  return `${n} caractere${n === 1 ? '' : 's'}`;
}

// Nenhuma tentativa ainda: mensagem neutra, sem nada pra comparar.
export function buildNoAttemptHintMessage() {
  return 'Teste uma palavra primeiro para eu te dar uma dica sobre o tamanho da menor palavra!';
}

// attemptedWord: a última palavra testada pelo aluno (string; '' representa λ).
// shortestWord: a menor palavra da fase, no mesmo formato usado por
// currentLevel.shortestWord / getShortestWord() — null/''/string.
export function buildSizeHintMessage(shortestWord, attemptedWord) {
  const targetLength = shortestWord == null ? 0 : shortestWord.length;
  const attemptedLength = attemptedWord == null ? 0 : attemptedWord.length;
  const diff = attemptedLength - targetLength;

  if (diff > 0) {
    return `Tem ${pluralizeChars(diff)} a mais. A menor palavra tem apenas ${pluralizeChars(targetLength)}.`;
  }
  if (diff < 0) {
    return `Tem ${pluralizeChars(Math.abs(diff))} a menos. A menor palavra tem ${pluralizeChars(targetLength)}.`;
  }
  return `Essa palavra tem o tamanho certo, mas não é a menor palavra da linguagem (ou não é aceita) — tente outra combinação de ${pluralizeChars(targetLength)}.`;
}
