// L17 — grafo extraído de L17.xml por migrador_afd.js
export default {
  nodes: [
  { id: 'q0', x: 70, y: 161, isInitial: true, isFinal: false },
  { id: 'q1', x: 173, y: 162, isInitial: false, isFinal: false },
  { id: 'q2', x: 287, y: 164, isInitial: false, isFinal: true }
],
  transitions: [
  { from: 'q0', to: 'q1', symbol: 'a' },
  { from: 'q1', to: 'q2', symbol: 'a, b' },
  { from: 'q2', to: 'q1', symbol: 'a, b' }
],
};
