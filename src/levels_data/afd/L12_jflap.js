// L12 — grafo extraído de L12.xml por migrador_afd.js
export default {
  nodes: [
  { id: 'q0', x: 130, y: 115, isInitial: true, isFinal: false },
  { id: 'q1', x: 228, y: 118, isInitial: false, isFinal: false },
  { id: 'q2', x: 363, y: 124, isInitial: false, isFinal: false },
  { id: 'q3', x: 485, y: 129, isInitial: false, isFinal: true }
],
  transitions: [
  { from: 'q1', to: 'q1', symbol: 'a' },
  { from: 'q1', to: 'q2', symbol: 'b' },
  { from: 'q2', to: 'q3', symbol: 'b' },
  { from: 'q3', to: 'q2', symbol: 'b' },
  { from: 'q0', to: 'q1', symbol: 'a' }
],
};
