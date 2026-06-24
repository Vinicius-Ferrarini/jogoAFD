// L08 — grafo extraído de L08.xml por migrador_afd.js
export default {
  nodes: [
  { id: 'q0', x: 130, y: 115, isInitial: true, isFinal: false },
  { id: 'q1', x: 232, y: 117, isInitial: false, isFinal: false },
  { id: 'q2', x: 334, y: 116, isInitial: false, isFinal: false },
  { id: 'q3', x: 398, y: 228, isInitial: false, isFinal: true },
  { id: 'q4', x: 483, y: 114, isInitial: false, isFinal: false }
],
  transitions: [
  { from: 'q4', to: 'q3', symbol: 'a' },
  { from: 'q2', to: 'q4', symbol: 'c' },
  { from: 'q0', to: 'q1', symbol: 'a' },
  { from: 'q4', to: 'q2', symbol: 'b' },
  { from: 'q1', to: 'q2', symbol: 'b' }
],
};
