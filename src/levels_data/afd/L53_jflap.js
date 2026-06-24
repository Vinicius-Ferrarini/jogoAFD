// L53 — grafo extraído de L52.xml por migrador_afd.js
export default {
  nodes: [
  { id: 'q0', x: 71, y: 120, isInitial: true, isFinal: false },
  { id: 'q1', x: 178, y: 119, isInitial: false, isFinal: false },
  { id: 'q2', x: 275, y: 120, isInitial: false, isFinal: false },
  { id: 'q3', x: 392, y: 121, isInitial: false, isFinal: true },
  { id: 'q4', x: 393, y: 224, isInitial: false, isFinal: false },
  { id: 'q5', x: 544, y: 115, isInitial: false, isFinal: false },
  { id: 'q6', x: 546, y: 222, isInitial: false, isFinal: true }
],
  transitions: [
  { from: 'q5', to: 'q6', symbol: 'c' },
  { from: 'q6', to: 'q5', symbol: 'c' },
  { from: 'q2', to: 'q3', symbol: 'b' },
  { from: 'q1', to: 'q2', symbol: 'a' },
  { from: 'q2', to: 'q1', symbol: 'a' },
  { from: 'q3', to: 'q5', symbol: 'c' },
  { from: 'q0', to: 'q1', symbol: 'a' },
  { from: 'q3', to: 'q4', symbol: 'b' },
  { from: 'q4', to: 'q3', symbol: 'b' }
],
};
