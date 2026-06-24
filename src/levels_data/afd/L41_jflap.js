// L41 — grafo extraído de L40.xml por migrador_afd.js
export default {
  nodes: [
  { id: 'q0', x: 80, y: 153, isInitial: true, isFinal: false },
  { id: 'q1', x: 181, y: 58, isInitial: false, isFinal: false },
  { id: 'q2', x: 309, y: 63, isInitial: false, isFinal: false },
  { id: 'q3', x: 403, y: 174, isInitial: false, isFinal: false },
  { id: 'q4', x: 454, y: 58, isInitial: false, isFinal: false },
  { id: 'q5', x: 534, y: 106, isInitial: false, isFinal: false },
  { id: 'q6', x: 512, y: 259, isInitial: false, isFinal: true }
],
  transitions: [
  { from: 'q0', to: 'q0', symbol: 'a' },
  { from: 'q3', to: 'q4', symbol: 'c' },
  { from: 'q1', to: 'q2', symbol: 'b' },
  { from: 'q2', to: 'q1', symbol: 'b' },
  { from: 'q0', to: 'q3', symbol: 'd' },
  { from: 'q4', to: 'q5', symbol: 'c' },
  { from: 'q5', to: 'q3', symbol: 'c' },
  { from: 'q0', to: 'q1', symbol: 'b' },
  { from: 'q2', to: 'q3', symbol: 'd' },
  { from: 'q3', to: 'q6', symbol: 'd' }
],
};
