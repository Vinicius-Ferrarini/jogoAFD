// L32 — grafo extraído de L32.xml por migrador_afd.js
export default {
  nodes: [
  { id: 'q0', x: 60, y: 223, isInitial: true, isFinal: true },
  { id: 'q1', x: 179, y: 49, isInitial: false, isFinal: false },
  { id: 'q2', x: 234, y: 259, isInitial: false, isFinal: false },
  { id: 'q3', x: 181, y: 451, isInitial: false, isFinal: false },
  { id: 'q4', x: 485, y: 59, isInitial: false, isFinal: false },
  { id: 'q5', x: 389, y: 243, isInitial: false, isFinal: false },
  { id: 'q6', x: 492, y: 465, isInitial: false, isFinal: false },
  { id: 'q7', x: 639, y: 251, isInitial: false, isFinal: false }
],
  transitions: [
  { from: 'q1', to: 'q5', symbol: '2' },
  { from: 'q5', to: 'q1', symbol: '2' },
  { from: 'q5', to: 'q7', symbol: '1' },
  { from: 'q7', to: 'q5', symbol: '1' },
  { from: 'q0', to: 'q2', symbol: '1' },
  { from: 'q2', to: 'q0', symbol: '1' },
  { from: 'q6', to: 'q7', symbol: '0' },
  { from: 'q7', to: 'q6', symbol: '0' },
  { from: 'q0', to: 'q3', symbol: '2' },
  { from: 'q3', to: 'q0', symbol: '2' },
  { from: 'q2', to: 'q4', symbol: '0' },
  { from: 'q4', to: 'q2', symbol: '0' },
  { from: 'q2', to: 'q6', symbol: '2' },
  { from: 'q6', to: 'q2', symbol: '2' },
  { from: 'q3', to: 'q6', symbol: '1' },
  { from: 'q6', to: 'q3', symbol: '1' },
  { from: 'q4', to: 'q7', symbol: '2' },
  { from: 'q7', to: 'q4', symbol: '2' },
  { from: 'q0', to: 'q1', symbol: '0' },
  { from: 'q1', to: 'q0', symbol: '0' },
  { from: 'q1', to: 'q4', symbol: '1' },
  { from: 'q4', to: 'q1', symbol: '1' }
],
};
