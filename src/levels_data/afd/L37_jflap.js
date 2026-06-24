// L37 — grafo extraído de L36.xml por migrador_afd.js
export default {
  nodes: [
  { id: 'q0', x: 172, y: 263, isInitial: true, isFinal: false },
  { id: 'q1', x: 362, y: 158, isInitial: false, isFinal: false },
  { id: 'q2', x: 637, y: 166, isInitial: false, isFinal: false },
  { id: 'q3', x: 797, y: 287, isInitial: false, isFinal: false },
  { id: 'q4', x: 873, y: 482, isInitial: false, isFinal: true }
],
  transitions: [
  { from: 'q0', to: 'q0', symbol: 'a, b, c' },
  { from: 'q3', to: 'q0', symbol: 'b, d' },
  { from: 'q1', to: 'q1', symbol: 'd' },
  { from: 'q2', to: 'q0', symbol: 'a, c' },
  { from: 'q2', to: 'q3', symbol: 'b' },
  { from: 'q4', to: 'q0', symbol: 'a, b, c' },
  { from: 'q3', to: 'q4', symbol: 'a' },
  { from: 'q4', to: 'q1', symbol: 'd' },
  { from: 'q3', to: 'q1', symbol: 'd' },
  { from: 'q0', to: 'q1', symbol: 'd' },
  { from: 'q1', to: 'q2', symbol: 'c' },
  { from: 'q1', to: 'q0', symbol: 'a, b' },
  { from: 'q2', to: 'q1', symbol: 'd' }
],
};
