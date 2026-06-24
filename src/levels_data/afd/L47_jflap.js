// L47 — grafo extraído de L46.xml por migrador_afd.js
export default {
  nodes: [
  { id: 'q0', x: 53, y: 202, isInitial: true, isFinal: true },
  { id: 'q1', x: 128, y: 32, isInitial: false, isFinal: false },
  { id: 'q2', x: 226, y: 205, isInitial: false, isFinal: false },
  { id: 'q3', x: 119, y: 379, isInitial: false, isFinal: false },
  { id: 'q4', x: 466, y: 63, isInitial: false, isFinal: false },
  { id: 'q5', x: 356, y: 223, isInitial: false, isFinal: false },
  { id: 'q6', x: 483, y: 379, isInitial: false, isFinal: false },
  { id: 'q7', x: 804, y: 222, isInitial: false, isFinal: false }
],
  transitions: [
  { from: 'q2', to: 'q6', symbol: 'c' },
  { from: 'q6', to: 'q2', symbol: 'c' },
  { from: 'q2', to: 'q4', symbol: 'a' },
  { from: 'q4', to: 'q2', symbol: 'a' },
  { from: 'q0', to: 'q2', symbol: 'b' },
  { from: 'q2', to: 'q0', symbol: 'b' },
  { from: 'q1', to: 'q4', symbol: 'b' },
  { from: 'q4', to: 'q1', symbol: 'b' },
  { from: 'q1', to: 'q5', symbol: 'c' },
  { from: 'q5', to: 'q1', symbol: 'c' },
  { from: 'q0', to: 'q1', symbol: 'a' },
  { from: 'q1', to: 'q0', symbol: 'a' },
  { from: 'q0', to: 'q3', symbol: 'c' },
  { from: 'q3', to: 'q0', symbol: 'c' },
  { from: 'q3', to: 'q5', symbol: 'a' },
  { from: 'q5', to: 'q3', symbol: 'a' },
  { from: 'q5', to: 'q7', symbol: 'b' },
  { from: 'q7', to: 'q5', symbol: 'b' },
  { from: 'q3', to: 'q6', symbol: 'b' },
  { from: 'q6', to: 'q3', symbol: 'b' },
  { from: 'q4', to: 'q7', symbol: 'c' },
  { from: 'q7', to: 'q4', symbol: 'c' },
  { from: 'q6', to: 'q7', symbol: 'a' },
  { from: 'q7', to: 'q6', symbol: 'a' }
],
};
