// L51 — grafo extraído de L50.xml por migrador_afd.js
export default {
  nodes: [
  { id: 'q0', x: 71, y: 120, isInitial: true, isFinal: false },
  { id: 'q1', x: 158, y: 123, isInitial: false, isFinal: false },
  { id: 'q2', x: 162, y: 234, isInitial: false, isFinal: false },
  { id: 'q3', x: 292, y: 59, isInitial: false, isFinal: false },
  { id: 'q4', x: 309, y: 317, isInitial: false, isFinal: false },
  { id: 'q5', x: 460, y: 122, isInitial: false, isFinal: false },
  { id: 'q6', x: 466, y: 245, isInitial: false, isFinal: true }
],
  transitions: [
  { from: 'q0', to: 'q1', symbol: 'a' },
  { from: 'q3', to: 'q5', symbol: 'c' },
  { from: 'q1', to: 'q2', symbol: 'a' },
  { from: 'q2', to: 'q1', symbol: 'a' },
  { from: 'q2', to: 'q4', symbol: 'b' },
  { from: 'q1', to: 'q5', symbol: 'c' },
  { from: 'q4', to: 'q6', symbol: 'c' },
  { from: 'q3', to: 'q3', symbol: 'b' },
  { from: 'q4', to: 'q4', symbol: 'b' },
  { from: 'q5', to: 'q6', symbol: 'c' },
  { from: 'q6', to: 'q5', symbol: 'c' },
  { from: 'q2', to: 'q6', symbol: 'c' },
  { from: 'q1', to: 'q3', symbol: 'b' }
],
};
