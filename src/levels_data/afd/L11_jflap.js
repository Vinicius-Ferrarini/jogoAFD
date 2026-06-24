// L11 — grafo extraído de L11.xml por migrador_afd.js
export default {
  nodes: [
  { id: 'q0', x: 130, y: 115, isInitial: true, isFinal: true },
  { id: 'q1', x: 133, y: 231, isInitial: false, isFinal: false },
  { id: 'q2', x: 297, y: 124, isInitial: false, isFinal: false },
  { id: 'q3', x: 305, y: 240, isInitial: false, isFinal: true }
],
  transitions: [
  { from: 'q2', to: 'q3', symbol: 'b' },
  { from: 'q3', to: 'q2', symbol: 'b' },
  { from: 'q0', to: 'q1', symbol: 'a' },
  { from: 'q1', to: 'q0', symbol: 'a' },
  { from: 'q0', to: 'q2', symbol: 'b' },
  { from: 'q1', to: 'q3', symbol: 'b' }
],
};
