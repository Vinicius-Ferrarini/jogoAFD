// L23 — grafo extraído de L23.xml por migrador_afd.js
export default {
  nodes: [
  { id: 'q0', x: 70, y: 164, isInitial: true, isFinal: false },
  { id: 'q1', x: 210, y: 166, isInitial: false, isFinal: true }
],
  transitions: [
  { from: 'q0', to: 'q0', symbol: '0' },
  { from: 'q1', to: 'q1', symbol: '1' },
  { from: 'q0', to: 'q1', symbol: '1' },
  { from: 'q1', to: 'q0', symbol: '0' }
],
};
