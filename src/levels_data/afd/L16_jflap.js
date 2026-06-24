// L16 — grafo extraído de L16.xml por migrador_afd.js
export default {
  nodes: [
  { id: 'q0', x: 70, y: 161, isInitial: true, isFinal: false },
  { id: 'q1', x: 173, y: 162, isInitial: false, isFinal: false },
  { id: 'q2', x: 287, y: 164, isInitial: false, isFinal: false },
  { id: 'q3', x: 398, y: 174, isInitial: false, isFinal: true }
],
  transitions: [
  { from: 'q3', to: 'q3', symbol: 'a, b, c' },
  { from: 'q1', to: 'q1', symbol: 'a, c' },
  { from: 'q2', to: 'q2', symbol: 'a, b' },
  { from: 'q0', to: 'q1', symbol: 'a' },
  { from: 'q0', to: 'q0', symbol: 'b, c' },
  { from: 'q1', to: 'q2', symbol: 'b' },
  { from: 'q2', to: 'q3', symbol: 'c' }
],
};
