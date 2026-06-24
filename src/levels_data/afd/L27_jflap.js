// L27 — grafo extraído de L27.xml por migrador_afd.js
export default {
  nodes: [
  { id: 'q0', x: 70, y: 164, isInitial: true, isFinal: true },
  { id: 'q1', x: 161, y: 89, isInitial: false, isFinal: false },
  { id: 'q2', x: 267, y: 157, isInitial: false, isFinal: false }
],
  transitions: [
  { from: 'q1', to: 'q2', symbol: '0, 1' },
  { from: 'q0', to: 'q1', symbol: '0, 1' },
  { from: 'q2', to: 'q0', symbol: '0, 1' }
],
};
