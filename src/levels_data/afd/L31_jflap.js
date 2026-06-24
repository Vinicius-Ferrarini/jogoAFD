// L31 — grafo extraído de L31.xml por migrador_afd.js
export default {
  nodes: [
  { id: 'q0', x: 58, y: 172, isInitial: true, isFinal: true },
  { id: 'q1', x: 180, y: 96, isInitial: false, isFinal: true },
  { id: 'q2', x: 336, y: 173, isInitial: false, isFinal: true },
  { id: 'q3', x: 487, y: 297, isInitial: false, isFinal: false }
],
  transitions: [
  { from: 'q3', to: 'q0', symbol: '1' },
  { from: 'q2', to: 'q0', symbol: '1' },
  { from: 'q0', to: 'q1', symbol: '0' },
  { from: 'q1', to: 'q0', symbol: '1' },
  { from: 'q3', to: 'q3', symbol: '0' },
  { from: 'q0', to: 'q0', symbol: '1' },
  { from: 'q1', to: 'q2', symbol: '0' },
  { from: 'q2', to: 'q3', symbol: '0' }
],
};
