// L49 — grafo extraído de L48.xml por migrador_afd.js
export default {
  nodes: [
  { id: 'q0', x: 177, y: 115, isInitial: true, isFinal: false },
  { id: 'q1', x: 297, y: 112, isInitial: false, isFinal: false },
  { id: 'q2', x: 176, y: 221, isInitial: false, isFinal: true },
  { id: 'q3', x: 304, y: 229, isInitial: false, isFinal: false }
],
  transitions: [
  { from: 'q0', to: 'q2', symbol: '1' },
  { from: 'q2', to: 'q0', symbol: '1' },
  { from: 'q1', to: 'q3', symbol: '1' },
  { from: 'q3', to: 'q1', symbol: '1' },
  { from: 'q0', to: 'q1', symbol: '0' },
  { from: 'q1', to: 'q0', symbol: '0' },
  { from: 'q2', to: 'q3', symbol: '0' },
  { from: 'q3', to: 'q2', symbol: '0' }
],
};
