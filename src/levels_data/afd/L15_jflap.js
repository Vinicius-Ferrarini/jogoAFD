// L15 — grafo extraído de L15.xml por migrador_afd.js
export default {
  nodes: [
  { id: 'q0', x: 104, y: 148, isInitial: true, isFinal: true },
  { id: 'q1', x: 244, y: 150, isInitial: false, isFinal: false }
],
  transitions: [
  { from: 'q0', to: 'q1', symbol: 'a, b' },
  { from: 'q1', to: 'q0', symbol: 'a, b' }
],
};
