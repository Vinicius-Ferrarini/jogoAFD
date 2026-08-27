// ─── findSecondShortestWord: busca a 1ª palavra NÃO-VAZIA aceita ─────────────
// Usado só pelos exercícios de "Menor Palavra" onde shortestWord === '' (a
// linguagem aceita λ) — nesse caso a grade do minigame não tem nenhuma célula
// pra digitar (targetLength=0) e a fase fica impossível de vencer. O board
// então usa esta 2ª palavra (não a vazia) como alvo jogável — ver
// docs/MENOR_PALAVRA_MINIGAME.md.
//
// Mesma técnica de BFS já usada para fuzzing em src/__tests__/afd_levels.test.js
// (bfsWords): gera '' e depois todas as palavras sobre o alfabeto em ordem
// CRESCENTE de tamanho, então a 1ª aceita não-vazia encontrada é, por
// definição, a menor palavra não-vazia da linguagem (até maxLen).
function* bfsWords(alphabet, maxLen) {
  if (alphabet.length === 0) { yield ''; return; }
  const queue = [''];
  while (queue.length > 0) {
    const w = queue.shift();
    yield w;
    if (w.length < maxLen) {
      for (const c of alphabet) queue.push(w + c);
    }
  }
}

// Retorna a 1ª palavra não-vazia aceita por checkWord, em ordem de tamanho
// crescente, ou null se nenhuma for aceita até maxLen (linguagem cujas únicas
// palavras curtas são λ — tratar como "sem exercício de minigame possível",
// igual a impossible/wordOnly).
export function findSecondShortestWord(checkWord, alphabet, maxLen = 8) {
  for (const word of bfsWords(alphabet, maxLen)) {
    if (word === '') continue;
    if (checkWord(word)) return word;
  }
  return null;
}
