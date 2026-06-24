// L40 — grafo extraído de L39.xml por migrador_afd.js
export default {
  nodes: [
  { id: 'q0', x: 319, y: 165, isInitial: true, isFinal: false },
  { id: 'q1', x: 511, y: 162, isInitial: false, isFinal: false },
  { id: 'q2', x: 325, y: 338, isInitial: false, isFinal: false },
  { id: 'q3', x: 525, y: 351, isInitial: false, isFinal: true }
],
  transitions: [
  { from: 'q0', to: 'q1', symbol: 'a' },
  { from: 'q1', to: 'q0', symbol: 'a' },
  { from: 'q0', to: 'q2', symbol: 'b' },
  { from: 'q2', to: 'q0', symbol: 'b' },
  { from: 'q1', to: 'q3', symbol: 'b' },
  { from: 'q3', to: 'q1', symbol: 'b' },
  { from: 'q2', to: 'q3', symbol: 'a' },
  { from: 'q3', to: 'q2', symbol: 'a' }
],
};
