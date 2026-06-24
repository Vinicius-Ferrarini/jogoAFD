// L44 — grafo extraído de L43.xml por migrador_afd.js
export default {
  nodes: [
  { id: 'q0', x: 53, y: 202, isInitial: true, isFinal: false },
  { id: 'q1', x: 243, y: 200, isInitial: false, isFinal: false },
  { id: 'q2', x: 436, y: 200, isInitial: false, isFinal: false },
  { id: 'q3', x: 638, y: 117, isInitial: false, isFinal: false },
  { id: 'q4', x: 847, y: 201, isInitial: false, isFinal: true }
],
  transitions: [
  { from: 'q3', to: 'q4', symbol: 'd' },
  { from: 'q1', to: 'q1', symbol: 'a' },
  { from: 'q2', to: 'q2', symbol: 'a, b, d' },
  { from: 'q0', to: 'q0', symbol: 'b, c, d' },
  { from: 'q3', to: 'q3', symbol: 'c' },
  { from: 'q4', to: 'q3', symbol: 'c' },
  { from: 'q1', to: 'q2', symbol: 'b' },
  { from: 'q0', to: 'q1', symbol: 'a' },
  { from: 'q1', to: 'q0', symbol: 'c, d' },
  { from: 'q4', to: 'q2', symbol: 'a, b, c' },
  { from: 'q2', to: 'q3', symbol: 'c' }
],
};
