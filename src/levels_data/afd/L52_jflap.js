// L52 — grafo extraído de L51.xml por migrador_afd.js
export default {
  nodes: [
  { id: 'q0', x: 71, y: 120, isInitial: true, isFinal: false },
  { id: 'q1', x: 133, y: 120, isInitial: false, isFinal: false },
  { id: 'q2', x: 231, y: 121, isInitial: false, isFinal: false },
  { id: 'q3', x: 341, y: 60, isInitial: false, isFinal: false },
  { id: 'q4', x: 340, y: 184, isInitial: false, isFinal: false },
  { id: 'q5', x: 455, y: 120, isInitial: false, isFinal: false },
  { id: 'q6', x: 575, y: 120, isInitial: false, isFinal: false },
  { id: 'q7', x: 692, y: 119, isInitial: false, isFinal: false },
  { id: 'q8', x: 692, y: 235, isInitial: false, isFinal: true }
],
  transitions: [
  { from: 'q0', to: 'q1', symbol: 'a' },
  { from: 'q1', to: 'q2', symbol: 'c' },
  { from: 'q2', to: 'q4', symbol: 'b' },
  { from: 'q6', to: 'q7', symbol: 'a' },
  { from: 'q2', to: 'q3', symbol: 'a' },
  { from: 'q1', to: 'q1', symbol: 'a' },
  { from: 'q2', to: 'q2', symbol: 'c' },
  { from: 'q7', to: 'q8', symbol: 'a' },
  { from: 'q8', to: 'q7', symbol: 'a' },
  { from: 'q3', to: 'q5', symbol: 'b' },
  { from: 'q4', to: 'q5', symbol: 'a' },
  { from: 'q5', to: 'q6', symbol: 'c' }
],
};
