// L50 — grafo extraído de L49.xml por migrador_afd.js
export default {
  nodes: [
  { id: 'q0', x: 108, y: 115, isInitial: true, isFinal: false },
  { id: 'q1', x: 192, y: 111, isInitial: false, isFinal: false },
  { id: 'q2', x: 277, y: 107, isInitial: false, isFinal: false },
  { id: 'q3', x: 349, y: 51, isInitial: false, isFinal: false },
  { id: 'q4', x: 348, y: 167, isInitial: false, isFinal: false },
  { id: 'q5', x: 438, y: 106, isInitial: false, isFinal: false },
  { id: 'q6', x: 523, y: 103, isInitial: false, isFinal: false },
  { id: 'q7', x: 644, y: 106, isInitial: false, isFinal: false },
  { id: 'q8', x: 647, y: 215, isInitial: false, isFinal: true }
],
  transitions: [
  { from: 'q5', to: 'q6', symbol: 'c' },
  { from: 'q2', to: 'q4', symbol: 'b' },
  { from: 'q1', to: 'q2', symbol: 'c' },
  { from: 'q2', to: 'q3', symbol: 'a' },
  { from: 'q1', to: 'q1', symbol: 'a' },
  { from: 'q2', to: 'q2', symbol: 'c' },
  { from: 'q0', to: 'q1', symbol: 'a' },
  { from: 'q6', to: 'q7', symbol: 'a' },
  { from: 'q4', to: 'q5', symbol: 'a' },
  { from: 'q7', to: 'q8', symbol: 'a' },
  { from: 'q8', to: 'q7', symbol: 'a' },
  { from: 'q3', to: 'q5', symbol: 'b' }
],
};
