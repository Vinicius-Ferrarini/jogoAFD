// L43 — grafo extraído de L42.xml por migrador_afd.js
export default {
  nodes: [
  { id: 'q0', x: 80, y: 153, isInitial: true, isFinal: false },
  { id: 'q1', x: 179, y: 154, isInitial: false, isFinal: false },
  { id: 'q2', x: 248, y: 67, isInitial: false, isFinal: false },
  { id: 'q3', x: 360, y: 72, isInitial: false, isFinal: false },
  { id: 'q4', x: 373, y: 170, isInitial: false, isFinal: false },
  { id: 'q5', x: 500, y: 183, isInitial: false, isFinal: true }
],
  transitions: [
  { from: 'q0', to: 'q1', symbol: 'a' },
  { from: 'q1', to: 'q0', symbol: 'a' },
  { from: 'q4', to: 'q5', symbol: 'c' },
  { from: 'q5', to: 'q5', symbol: 'd' },
  { from: 'q1', to: 'q4', symbol: 'c' },
  { from: 'q3', to: 'q4', symbol: 'c' },
  { from: 'q1', to: 'q2', symbol: 'b' },
  { from: 'q2', to: 'q3', symbol: 'b' },
  { from: 'q3', to: 'q2', symbol: 'b' }
],
};
