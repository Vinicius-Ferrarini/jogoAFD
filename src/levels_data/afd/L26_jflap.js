// L26 — grafo extraído de L26.xml por migrador_afd.js
export default {
  nodes: [
  { id: 'q0', x: 200, y: 1000, isInitial: true, isFinal: false },
  { id: 'q1', x: 600, y: 1000, isInitial: false, isFinal: false },
  { id: 'q2', x: 1000, y: 1000, isInitial: false, isFinal: false },
  { id: 'q3', x: 1400, y: 1000, isInitial: false, isFinal: false },
  { id: 'q4', x: 1800, y: 1000, isInitial: false, isFinal: true }
],
  transitions: [
  { from: 'q1', to: 'q2', symbol: '0, 1' },
  { from: 'q3', to: 'q4', symbol: '0, 1' },
  { from: 'q2', to: 'q3', symbol: '0, 1' },
  { from: 'q0', to: 'q1', symbol: '0, 1' }
],
};
