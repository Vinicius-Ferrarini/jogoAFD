// L48 — grafo extraído de L47.xml por migrador_afd.js
export default {
  nodes: [
  { id: 'q0', x: 54, y: 147, isInitial: true, isFinal: false },
  { id: 'q1', x: 56, y: 245, isInitial: false, isFinal: false },
  { id: 'q2', x: 188, y: 245, isInitial: false, isFinal: false },
  { id: 'q3', x: 291, y: 143, isInitial: false, isFinal: false },
  { id: 'q4', x: 375, y: 49, isInitial: false, isFinal: false },
  { id: 'q5', x: 504, y: 51, isInitial: false, isFinal: false },
  { id: 'q6', x: 483, y: 202, isInitial: false, isFinal: true }
],
  transitions: [
  { from: 'q4', to: 'q5', symbol: 'c' },
  { from: 'q0', to: 'q1', symbol: 'b' },
  { from: 'q2', to: 'q3', symbol: 'd' },
  { from: 'q3', to: 'q4', symbol: 'c' },
  { from: 'q3', to: 'q6', symbol: 'd' },
  { from: 'q0', to: 'q0', symbol: 'a' },
  { from: 'q1', to: 'q2', symbol: 'b' },
  { from: 'q2', to: 'q1', symbol: 'b' },
  { from: 'q0', to: 'q3', symbol: 'd' },
  { from: 'q5', to: 'q3', symbol: 'c' }
],
};
