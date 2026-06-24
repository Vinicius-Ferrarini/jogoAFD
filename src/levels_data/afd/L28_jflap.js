// L28 — grafo extraído de L28.xml por migrador_afd.js
export default {
  nodes: [
  { id: 'q0', x: 78, y: 104, isInitial: true, isFinal: true },
  { id: 'q1', x: 229, y: 104, isInitial: false, isFinal: false },
  { id: 'q2', x: 163, y: 190, isInitial: false, isFinal: false }
],
  transitions: [
  { from: 'q0', to: 'q0', symbol: '1' },
  { from: 'q1', to: 'q2', symbol: '1' },
  { from: 'q0', to: 'q1', symbol: '0' },
  { from: 'q2', to: 'q0', symbol: '1' }
],
};
