// L19 — grafo extraído de L19.xml por migrador_afd.js
export default {
  nodes: [
  { id: 'q0', x: 73, y: 99, isInitial: true, isFinal: false },
  { id: 'q1', x: 214, y: 99, isInitial: false, isFinal: false },
  { id: 'q2', x: 82, y: 232, isInitial: false, isFinal: false },
  { id: 'q3', x: 230, y: 238, isInitial: false, isFinal: true }
],
  transitions: [
  { from: 'q0', to: 'q1', symbol: 'a' },
  { from: 'q1', to: 'q0', symbol: 'a' },
  { from: 'q1', to: 'q3', symbol: 'b' },
  { from: 'q3', to: 'q1', symbol: 'b' },
  { from: 'q0', to: 'q2', symbol: 'b' },
  { from: 'q2', to: 'q0', symbol: 'b' },
  { from: 'q2', to: 'q3', symbol: 'a' },
  { from: 'q3', to: 'q2', symbol: 'a' }
],
};
