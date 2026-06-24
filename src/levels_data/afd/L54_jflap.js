// L54 — grafo extraído de L53.xml por migrador_afd.js
export default {
  nodes: [
  { id: 'q0', x: 86, y: 122, isInitial: true, isFinal: true },
  { id: 'q1', x: 245, y: 118, isInitial: false, isFinal: false }
],
  transitions: [
  { from: 'q0', to: 'q1', symbol: 'b' },
  { from: 'q1', to: 'q0', symbol: 'c' },
  { from: 'q0', to: 'q0', symbol: 'a, c' }
],
};
