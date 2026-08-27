// ─── Rastreio de palavra no Modo Aula ────────────────────────────────────────
// Simula a palavra no grafo CONGELADO do passo atual e devolve os "quadros" da
// animação: cada quadro marca o estado ativo, a última letra consumida e o tipo
// de destaque ('ok' = rastreando/amarelo, 'done' = aceitou/verde, 'error' =
// travou ou parou em não-final/vermelho).
// tIdx/symbol: índice (em `transitions`) e símbolo específico da transição que
// TROUXE a máquina até este quadro (null no quadro inicial — ainda não andou
// nenhuma transição) — usado por CanvasArea.jsx pra piscar em amarelo o chip
// da transição percorrida, mesmo padrão de "🔬 Simular" (AP/MT).
export function traceWord(nodes, transitions, word) {
  const initial = (nodes ?? []).find(n => n.isInitial);
  if (!initial) return [];
  const frames = [{ nodeId: initial.id, type: 'ok', letter: -1, tIdx: null, symbol: null }];
  let cur = initial.id;
  for (let i = 0; i < word.length; i++) {
    const ch = word[i];
    const trIdx = (transitions ?? []).findIndex(t =>
      t.from === cur && String(t.symbol).split(',').map(s => s.trim()).includes(ch));
    if (trIdx === -1) { frames.push({ nodeId: cur, type: 'error', letter: i, tIdx: null, symbol: null }); return frames; }
    const tr = transitions[trIdx];
    cur = tr.to;
    frames.push({ nodeId: cur, type: 'ok', letter: i, tIdx: trIdx, symbol: ch });
  }
  const last = nodes.find(n => n.id === cur);
  frames[frames.length - 1].type = last?.isFinal ? 'done' : 'error';
  return frames;
}
