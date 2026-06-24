// L09 — grafo extraído de L09.xml por migrador_afd.js
export default {
  nodes: [
  { id: 'q0', x: 130, y: 115, isInitial: true, isFinal: false },
  { id: 'q1', x: 216, y: 117, isInitial: false, isFinal: true },
  { id: 'q2', x: 418, y: 127, isInitial: false, isFinal: true },
  { id: 'q3', x: 344, y: 218, isInitial: false, isFinal: true }
],
  transitions: [
  { from: 'q1', to: 'q1', symbol: 'a' },
  { from: 'q2', to: 'q2', symbol: 'b' },
  { from: 'q2', to: 'q3', symbol: 'c' },
  { from: 'q3', to: 'q3', symbol: 'c' },
  { from: 'q0', to: 'q1', symbol: 'a' },
  { from: 'q1', to: 'q2', symbol: 'b' },
  { from: 'q1', to: 'q3', symbol: 'c' }
],
};
