// L24 — grafo extraído de L24.xml por migrador_afd.js
export default {
  nodes: [
  { id: 'q0', x: 70, y: 164, isInitial: true, isFinal: false },
  { id: 'q1', x: 162, y: 161, isInitial: false, isFinal: false },
  { id: 'q2', x: 302, y: 162, isInitial: false, isFinal: false },
  { id: 'q3', x: 430, y: 161, isInitial: false, isFinal: true }
],
  transitions: [
  { from: 'q1', to: 'q2', symbol: '0, 1' },
  { from: 'q2', to: 'q3', symbol: '0, 1' },
  { from: 'q0', to: 'q1', symbol: '0, 1' }
],
};
