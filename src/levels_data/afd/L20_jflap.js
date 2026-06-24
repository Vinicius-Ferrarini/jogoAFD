// L20 — grafo extraído de L20.xml por migrador_afd.js
export default {
  nodes: [
  { id: 'q0', x: 70, y: 164, isInitial: true, isFinal: false },
  { id: 'q1', x: 191, y: 95, isInitial: false, isFinal: false },
  { id: 'q2', x: 409, y: 110, isInitial: false, isFinal: true },
  { id: 'q3', x: 339, y: 229, isInitial: false, isFinal: true },
  { id: 'q4', x: 203, y: 241, isInitial: false, isFinal: false }
],
  transitions: [
  { from: 'q2', to: 'q2', symbol: 'a' },
  { from: 'q3', to: 'q3', symbol: 'b' },
  { from: 'q1', to: 'q3', symbol: 'b' },
  { from: 'q4', to: 'q3', symbol: 'b' },
  { from: 'q1', to: 'q2', symbol: 'a' },
  { from: 'q2', to: 'q3', symbol: 'b' },
  { from: 'q0', to: 'q4', symbol: 'b' },
  { from: 'q0', to: 'q1', symbol: 'a' }
],
};
