// L13 — grafo extraído de L13.xml por migrador_afd.js
export default {
  nodes: [
  { id: 'q0', x: 59, y: 121, isInitial: true, isFinal: false },
  { id: 'q1', x: 157, y: 124, isInitial: false, isFinal: false },
  { id: 'q2', x: 292, y: 130, isInitial: false, isFinal: false },
  { id: 'q3', x: 393, y: 134, isInitial: false, isFinal: false },
  { id: 'q4', x: 528, y: 141, isInitial: false, isFinal: true }
],
  transitions: [
  { from: 'q2', to: 'q1', symbol: 'a' },
  { from: 'q1', to: 'q2', symbol: 'b' },
  { from: 'q3', to: 'q4', symbol: 'd' },
  { from: 'q4', to: 'q3', symbol: 'c' },
  { from: 'q2', to: 'q3', symbol: 'c' },
  { from: 'q0', to: 'q1', symbol: 'a' }
],
};
