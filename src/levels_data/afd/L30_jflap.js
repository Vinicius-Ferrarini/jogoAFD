// L30 — grafo extraído de L30.xml por migrador_afd.js
export default {
  nodes: [
  { id: 'q0', x: 58, y: 172, isInitial: true, isFinal: true },
  { id: 'q1', x: 170, y: 117, isInitial: false, isFinal: true },
  { id: 'q2', x: 379, y: 46, isInitial: false, isFinal: true },
  { id: 'q3', x: 169, y: 254, isInitial: false, isFinal: true },
  { id: 'q4', x: 361, y: 334, isInitial: false, isFinal: true }
],
  transitions: [
  { from: 'q1', to: 'q2', symbol: '0' },
  { from: 'q0', to: 'q3', symbol: '1' },
  { from: 'q4', to: 'q1', symbol: '0' },
  { from: 'q2', to: 'q3', symbol: '1' },
  { from: 'q0', to: 'q1', symbol: '0' },
  { from: 'q3', to: 'q4', symbol: '1' }
],
};
