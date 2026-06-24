// L45 — grafo extraído de L44.xml por migrador_afd.js
export default {
  nodes: [
  { id: 'q0', x: 53, y: 202, isInitial: true, isFinal: false },
  { id: 'q1', x: 155, y: 202, isInitial: false, isFinal: false },
  { id: 'q2', x: 267, y: 207, isInitial: false, isFinal: false },
  { id: 'q3', x: 351, y: 210, isInitial: false, isFinal: false },
  { id: 'q4', x: 469, y: 214, isInitial: false, isFinal: false },
  { id: 'q5', x: 616, y: 146, isInitial: false, isFinal: false },
  { id: 'q6', x: 761, y: 95, isInitial: false, isFinal: false },
  { id: 'q7', x: 849, y: 146, isInitial: false, isFinal: true },
  { id: 'q8', x: 537, y: 309, isInitial: false, isFinal: false },
  { id: 'q9', x: 728, y: 326, isInitial: false, isFinal: false }
],
  transitions: [
  { from: 'q3', to: 'q4', symbol: 'd' },
  { from: 'q0', to: 'q1', symbol: 'a' },
  { from: 'q1', to: 'q2', symbol: 'b' },
  { from: 'q8', to: 'q8', symbol: 'a, b, c' },
  { from: 'q7', to: 'q8', symbol: 'a, b, c' },
  { from: 'q4', to: 'q5', symbol: 'c' },
  { from: 'q2', to: 'q3', symbol: 'c' },
  { from: 'q4', to: 'q4', symbol: 'd' },
  { from: 'q9', to: 'q9', symbol: 'd' },
  { from: 'q8', to: 'q9', symbol: 'd' },
  { from: 'q7', to: 'q9', symbol: 'd' },
  { from: 'q9', to: 'q8', symbol: 'a, b' },
  { from: 'q5', to: 'q6', symbol: 'b' },
  { from: 'q5', to: 'q8', symbol: 'a, c, d' },
  { from: 'q6', to: 'q9', symbol: 'd' },
  { from: 'q4', to: 'q8', symbol: 'a, b' },
  { from: 'q6', to: 'q8', symbol: 'b, c' },
  { from: 'q9', to: 'q5', symbol: 'c' },
  { from: 'q6', to: 'q7', symbol: 'a' }
],
};
