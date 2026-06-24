// L18 — grafo extraído de L18.xml por migrador_afd.js
export default {
  nodes: [
  { id: 'q0', x: 70, y: 161, isInitial: true, isFinal: true },
  { id: 'q1', x: 187, y: 99, isInitial: false, isFinal: true },
  { id: 'q2', x: 294, y: 163, isInitial: false, isFinal: true }
],
  transitions: [
  { from: 'q1', to: 'q0', symbol: 'b' },
  { from: 'q0', to: 'q1', symbol: 'a' },
  { from: 'q0', to: 'q0', symbol: 'b' },
  { from: 'q2', to: 'q0', symbol: 'b' }
],
};
