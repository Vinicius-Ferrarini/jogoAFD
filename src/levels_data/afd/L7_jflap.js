// L07 — grafo extraído de L07.xml por migrador_afd.js
export default {
  nodes: [
  { id: 'q0', x: 229, y: 140, isInitial: true, isFinal: false },
  { id: 'q1', x: 364, y: 135, isInitial: false, isFinal: false },
  { id: 'q2', x: 358, y: 247, isInitial: false, isFinal: false },
  { id: 'q3', x: 471, y: 131, isInitial: false, isFinal: true }
],
  transitions: [
  { from: 'q0', to: 'q1', symbol: 'a' },
  { from: 'q2', to: 'q1', symbol: 'b' },
  { from: 'q1', to: 'q2', symbol: 'b' },
  { from: 'q1', to: 'q3', symbol: 'a' }
],
};
