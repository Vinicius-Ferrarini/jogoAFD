// L21 — grafo extraído de L21.xml por migrador_afd.js
export default {
  nodes: [
  { id: 'q0', x: 70, y: 164, isInitial: true, isFinal: true },
  { id: 'q1', x: 227, y: 87, isInitial: false, isFinal: true },
  { id: 'q2', x: 382, y: 161, isInitial: false, isFinal: true },
  { id: 'q3', x: 232, y: 254, isInitial: false, isFinal: true }
],
  transitions: [
  { from: 'q0', to: 'q0', symbol: 'a' },
  { from: 'q1', to: 'q1', symbol: 'b' },
  { from: 'q2', to: 'q2', symbol: 'c' },
  { from: 'q3', to: 'q3', symbol: 'd' },
  { from: 'q0', to: 'q1', symbol: 'b' },
  { from: 'q2', to: 'q3', symbol: 'd' },
  { from: 'q0', to: 'q2', symbol: 'c' },
  { from: 'q1', to: 'q2', symbol: 'c' },
  { from: 'q0', to: 'q3', symbol: 'd' }
],
};
