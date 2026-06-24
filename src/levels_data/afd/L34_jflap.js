// L34 — grafo extraído de L34.xml por migrador_afd.js
export default {
  nodes: [
  { id: 'q0', x: 60, y: 223, isInitial: true, isFinal: false },
  { id: 'q1', x: 156, y: 151, isInitial: false, isFinal: false },
  { id: 'q2', x: 285, y: 166, isInitial: false, isFinal: false },
  { id: 'q3', x: 400, y: 252, isInitial: false, isFinal: false },
  { id: 'q4', x: 499, y: 384, isInitial: false, isFinal: true }
],
  transitions: [
  { from: 'q0', to: 'q1', symbol: '1' },
  { from: 'q2', to: 'q3', symbol: '1' },
  { from: 'q2', to: 'q0', symbol: '0' },
  { from: 'q0', to: 'q0', symbol: '0' },
  { from: 'q1', to: 'q1', symbol: '1' },
  { from: 'q3', to: 'q0', symbol: '1' },
  { from: 'q4', to: 'q3', symbol: '1' },
  { from: 'q1', to: 'q2', symbol: '0' },
  { from: 'q3', to: 'q4', symbol: '0' },
  { from: 'q4', to: 'q0', symbol: '0' }
],
};
