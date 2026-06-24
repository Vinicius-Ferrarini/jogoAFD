// L36 — grafo extraído de L35-jj.xml por migrador_afd.js
export default {
  nodes: [
  { id: 'q0', x: 232, y: 230, isInitial: true, isFinal: false },
  { id: 'q1', x: 370, y: 228, isInitial: false, isFinal: false },
  { id: 'q2', x: 554, y: 235, isInitial: false, isFinal: false },
  { id: 'q3', x: 704, y: 229, isInitial: false, isFinal: true }
],
  transitions: [
  { from: 'q3', to: 'q3', symbol: 'a, b, c, d' },
  { from: 'q2', to: 'q3', symbol: 'c' },
  { from: 'q1', to: 'q2', symbol: 'b' },
  { from: 'q0', to: 'q1', symbol: 'a' }
],
};
