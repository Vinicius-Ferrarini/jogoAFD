// ─── Rastreio de palavra no Modo Aula ────────────────────────────────────────
// Simula a palavra no grafo CONGELADO do passo atual e devolve os "quadros" da
// animação: cada quadro marca o estado ativo, a última letra consumida e o tipo
// de destaque ('ok' = rastreando/amarelo, 'done' = aceitou/verde, 'error' =
// travou ou parou em não-final/vermelho).
export function traceWord(nodes, transitions, word) {
  const initial = (nodes ?? []).find(n => n.isInitial);
  if (!initial) return [];
  const frames = [{ nodeId: initial.id, type: 'ok', letter: -1 }];
  let cur = initial.id;
  for (let i = 0; i < word.length; i++) {
    const ch = word[i];
    const tr = (transitions ?? []).find(t =>
      t.from === cur && String(t.symbol).split(',').map(s => s.trim()).includes(ch));
    if (!tr) { frames.push({ nodeId: cur, type: 'error', letter: i }); return frames; }
    cur = tr.to;
    frames.push({ nodeId: cur, type: 'ok', letter: i });
  }
  const last = nodes.find(n => n.id === cur);
  frames[frames.length - 1].type = last?.isFinal ? 'done' : 'error';
  return frames;
}
