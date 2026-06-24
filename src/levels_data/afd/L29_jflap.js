// L29 — grafo extraído de L29.xml por migrador_afd.js
export default {
  nodes: [
  { id: 'q0', x: 58, y: 172, isInitial: true, isFinal: false },
  { id: 'q1', x: 163, y: 105, isInitial: false, isFinal: false },
  { id: 'q2', x: 167, y: 194, isInitial: false, isFinal: false },
  { id: 'q3', x: 249, y: 65, isInitial: false, isFinal: false },
  { id: 'q4', x: 254, y: 134, isInitial: false, isFinal: false },
  { id: 'q5', x: 366, y: 80, isInitial: false, isFinal: false },
  { id: 'q6', x: 469, y: 165, isInitial: false, isFinal: true },
  { id: 'q7', x: 257, y: 228, isInitial: false, isFinal: false },
  { id: 'q8', x: 376, y: 229, isInitial: false, isFinal: false }
],
  transitions: [
  { from: 'q0', to: 'q2', symbol: '1' },
  { from: 'q2', to: 'q7', symbol: '1' },
  { from: 'q2', to: 'q4', symbol: '0' },
  { from: 'q6', to: 'q6', symbol: '0, 1' },
  { from: 'q4', to: 'q8', symbol: '1' },
  { from: 'q4', to: 'q5', symbol: '0' },
  { from: 'q1', to: 'q4', symbol: '1' },
  { from: 'q7', to: 'q8', symbol: '0, 1' },
  { from: 'q0', to: 'q1', symbol: '0' },
  { from: 'q1', to: 'q3', symbol: '0' },
  { from: 'q5', to: 'q6', symbol: '1' },
  { from: 'q3', to: 'q5', symbol: '1' },
  { from: 'q8', to: 'q6', symbol: '0, 1' }
],
};
