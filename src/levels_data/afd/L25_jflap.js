// L25 — grafo extraído de L25.xml por migrador_afd.js
export default {
  nodes: [
  { id: 'q0', x: 70, y: 164, isInitial: true, isFinal: true },
  { id: 'q1', x: 162, y: 161, isInitial: false, isFinal: true },
  { id: 'q2', x: 302, y: 162, isInitial: false, isFinal: true }
],
  transitions: [
  { from: 'q1', to: 'q2', symbol: '0, 1' },
  { from: 'q0', to: 'q1', symbol: '0, 1' }
],
};
