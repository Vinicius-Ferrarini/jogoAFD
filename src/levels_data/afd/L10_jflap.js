// L10 — grafo extraído de L10.xml por migrador_afd.js
export default {
  nodes: [
  { id: 'q0', x: 130, y: 115, isInitial: true, isFinal: false },
  { id: 'q1', x: 248, y: 119, isInitial: false, isFinal: false },
  { id: 'q2', x: 399, y: 123, isInitial: false, isFinal: true },
  { id: 'q3', x: 132, y: 206, isInitial: false, isFinal: false },
  { id: 'q4', x: 406, y: 222, isInitial: false, isFinal: false }
],
  transitions: [
  { from: 'q2', to: 'q4', symbol: 'a' },
  { from: 'q4', to: 'q2', symbol: 'a' },
  { from: 'q0', to: 'q1', symbol: 'b' },
  { from: 'q0', to: 'q3', symbol: 'a' },
  { from: 'q3', to: 'q0', symbol: 'a' },
  { from: 'q1', to: 'q2', symbol: 'b' }
],
};
