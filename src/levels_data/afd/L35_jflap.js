// L35 — grafo extraído de L35-ii.xml por migrador_afd.js
export default {
  nodes: [
  { id: 'q0', x: 59, y: 266, isInitial: true, isFinal: false },
  { id: 'q1', x: 159, y: 150, isInitial: false, isFinal: false },
  { id: 'q2', x: 295, y: 161, isInitial: false, isFinal: false },
  { id: 'q3', x: 381, y: 230, isInitial: false, isFinal: false },
  { id: 'q4', x: 536, y: 355, isInitial: false, isFinal: true }
],
  transitions: [
  { from: 'q3', to: 'q4', symbol: '1' },
  { from: 'q2', to: 'q3', symbol: '1' },
  { from: 'q2', to: 'q0', symbol: '0' },
  { from: 'q1', to: 'q2', symbol: '1' },
  { from: 'q0', to: 'q0', symbol: '0' },
  { from: 'q4', to: 'q4', symbol: '0, 1' },
  { from: 'q0', to: 'q1', symbol: '1' },
  { from: 'q1', to: 'q0', symbol: '0' },
  { from: 'q3', to: 'q0', symbol: '0' }
],
};
