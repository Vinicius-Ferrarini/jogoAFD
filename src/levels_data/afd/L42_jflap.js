// L42 — grafo extraído de L41.xml por migrador_afd.js
export default {
  nodes: [
  { id: 'q0', x: 80, y: 153, isInitial: true, isFinal: false },
  { id: 'q1', x: 166, y: 153, isInitial: false, isFinal: false },
  { id: 'q2', x: 271, y: 146, isInitial: false, isFinal: false },
  { id: 'q3', x: 371, y: 94, isInitial: false, isFinal: false },
  { id: 'q4', x: 470, y: 160, isInitial: false, isFinal: false },
  { id: 'q5', x: 465, y: 270, isInitial: false, isFinal: true },
  { id: 'q6', x: 309, y: 273, isInitial: false, isFinal: false },
  { id: 'q7', x: 157, y: 266, isInitial: false, isFinal: true }
],
  transitions: [
  { from: 'q2', to: 'q3', symbol: 'c' },
  { from: 'q5', to: 'q5', symbol: 'a' },
  { from: 'q0', to: 'q1', symbol: 'a' },
  { from: 'q4', to: 'q5', symbol: 'a' },
  { from: 'q4', to: 'q2', symbol: 'd' },
  { from: 'q5', to: 'q6', symbol: 'b' },
  { from: 'q1', to: 'q2', symbol: 'd' },
  { from: 'q3', to: 'q4', symbol: 'b' },
  { from: 'q6', to: 'q7', symbol: 'b' },
  { from: 'q7', to: 'q6', symbol: 'b' }
],
};
