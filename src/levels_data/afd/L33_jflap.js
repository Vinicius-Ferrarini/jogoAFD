// L33 — grafo extraído de L33.xml por migrador_afd.js
export default {
  nodes: [
  { id: 'q0', x: 60, y: 223, isInitial: true, isFinal: false },
  { id: 'q1', x: 144, y: 223, isInitial: false, isFinal: false },
  { id: 'q2', x: 262, y: 221, isInitial: false, isFinal: false },
  { id: 'q3', x: 359, y: 228, isInitial: false, isFinal: true }
],
  transitions: [
  { from: 'q0', to: 'q1', symbol: '0' },
  { from: 'q2', to: 'q3', symbol: '1' },
  { from: 'q3', to: 'q3', symbol: '0, 1' },
  { from: 'q1', to: 'q2', symbol: '0' }
],
};
