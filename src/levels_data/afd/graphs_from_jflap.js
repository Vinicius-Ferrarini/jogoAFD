// Grafos dos gabaritos JFLAP — gerado por migrador_afd.js
// Chave = id do nível no jogo. NÃO importar em arquivos React diretamente.

export const JFLAP_GRAPHS = {
  // L01 ← L01.xml
  1: {
    nodes: [
      { id: 'q0', x: 229, y: 139, isInitial: true, isFinal: false }
    ],
    transitions: [],
  },
  // L02 ← L02.xml
  2: {
    nodes: [
      { id: 'q0', x: 229, y: 139, isInitial: true, isFinal: true }
    ],
    transitions: [],
  },
  // L03 ← L03.xml
  3: {
    nodes: [
      { id: 'q0', x: 229, y: 139, isInitial: true, isFinal: false },
      { id: 'q1', x: 364, y: 135, isInitial: false, isFinal: true }
    ],
    transitions: [
      { from: 'q0', to: 'q1', symbol: '0' }
    ],
  },
  // L04 ← L04.xml
  4: {
    nodes: [
      { id: 'q0', x: 229, y: 139, isInitial: true, isFinal: true },
      { id: 'q1', x: 364, y: 135, isInitial: false, isFinal: true }
    ],
    transitions: [
      { from: 'q0', to: 'q1', symbol: '0' }
    ],
  },
  // L05 ← L05.xml
  5: {
    nodes: [
      { id: 'q0', x: 229, y: 140, isInitial: true, isFinal: false },
      { id: 'q1', x: 364, y: 135, isInitial: false, isFinal: true }
    ],
    transitions: [
      { from: 'q1', to: 'q1', symbol: 'a' },
      { from: 'q0', to: 'q1', symbol: 'a' }
    ],
  },
  // L06 ← L06.xml
  6: {
    nodes: [
      { id: 'q0', x: 229, y: 140, isInitial: true, isFinal: false },
      { id: 'q1', x: 364, y: 135, isInitial: false, isFinal: true }
    ],
    transitions: [
      { from: 'q0', to: 'q1', symbol: 'a' },
      { from: 'q1', to: 'q0', symbol: 'a' }
    ],
  },
  // L07 ← L07.xml
  7: {
    nodes: [
      { id: 'q0', x: 229, y: 140, isInitial: true, isFinal: false },
      { id: 'q1', x: 364, y: 135, isInitial: false, isFinal: false },
      { id: 'q2', x: 358, y: 247, isInitial: false, isFinal: false },
      { id: 'q3', x: 471, y: 131, isInitial: false, isFinal: true }
    ],
    transitions: [
      { from: 'q0', to: 'q1', symbol: 'a' },
      { from: 'q2', to: 'q1', symbol: 'b' },
      { from: 'q1', to: 'q2', symbol: 'b' },
      { from: 'q1', to: 'q3', symbol: 'a' }
    ],
  },
  // L08 ← L08.xml
  8: {
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
  },
  // L09 ← L09.xml
  9: {
    nodes: [
      { id: 'q0', x: 130, y: 115, isInitial: true, isFinal: false },
      { id: 'q1', x: 216, y: 117, isInitial: false, isFinal: true },
      { id: 'q2', x: 418, y: 127, isInitial: false, isFinal: true },
      { id: 'q3', x: 344, y: 218, isInitial: false, isFinal: true }
    ],
    transitions: [
      { from: 'q1', to: 'q1', symbol: 'a' },
      { from: 'q2', to: 'q2', symbol: 'b' },
      { from: 'q2', to: 'q3', symbol: 'c' },
      { from: 'q3', to: 'q3', symbol: 'c' },
      { from: 'q0', to: 'q1', symbol: 'a' },
      { from: 'q1', to: 'q2', symbol: 'b' },
      { from: 'q1', to: 'q3', symbol: 'c' }
    ],
  },
  // L10 ← L10.xml
  10: {
    nodes: [
      { id: 'q0', x: 130, y: 115, isInitial: true, isFinal: false },
      { id: 'q1', x: 248, y: 119, isInitial: false, isFinal: false },
      { id: 'q2', x: 399, y: 123, isInitial: false, isFinal: true },
      { id: 'q3', x: 132, y: 206, isInitial: false, isFinal: false },
      { id: 'q4', x: 406, y: 222, isInitial: false, isFinal: false }
    ],
    transitions: [
      { from: 'q2', to: 'q4', symbol: 'a' },
      { from: 'q4', to: 'q2', symbol: 'a' },
      { from: 'q0', to: 'q1', symbol: 'b' },
      { from: 'q0', to: 'q3', symbol: 'a' },
      { from: 'q3', to: 'q0', symbol: 'a' },
      { from: 'q1', to: 'q2', symbol: 'b' }
    ],
  },
  // L11 ← L11.xml
  11: {
    nodes: [
      { id: 'q0', x: 130, y: 115, isInitial: true, isFinal: true },
      { id: 'q1', x: 133, y: 231, isInitial: false, isFinal: false },
      { id: 'q2', x: 297, y: 124, isInitial: false, isFinal: false },
      { id: 'q3', x: 305, y: 240, isInitial: false, isFinal: true }
    ],
    transitions: [
      { from: 'q2', to: 'q3', symbol: 'b' },
      { from: 'q3', to: 'q2', symbol: 'b' },
      { from: 'q0', to: 'q1', symbol: 'a' },
      { from: 'q1', to: 'q0', symbol: 'a' },
      { from: 'q0', to: 'q2', symbol: 'b' },
      { from: 'q1', to: 'q3', symbol: 'b' }
    ],
  },
  // L12 ← L12.xml
  12: {
    nodes: [
      { id: 'q0', x: 130, y: 115, isInitial: true, isFinal: false },
      { id: 'q1', x: 228, y: 118, isInitial: false, isFinal: false },
      { id: 'q2', x: 363, y: 124, isInitial: false, isFinal: false },
      { id: 'q3', x: 485, y: 129, isInitial: false, isFinal: true }
    ],
    transitions: [
      { from: 'q1', to: 'q1', symbol: 'a' },
      { from: 'q1', to: 'q2', symbol: 'b' },
      { from: 'q2', to: 'q3', symbol: 'b' },
      { from: 'q3', to: 'q2', symbol: 'b' },
      { from: 'q0', to: 'q1', symbol: 'a' }
    ],
  },
  // L13 ← L13.xml
  13: {
    nodes: [
      { id: 'q0', x: 59, y: 121, isInitial: true, isFinal: false },
      { id: 'q1', x: 157, y: 124, isInitial: false, isFinal: false },
      { id: 'q2', x: 292, y: 130, isInitial: false, isFinal: false },
      { id: 'q3', x: 393, y: 134, isInitial: false, isFinal: false },
      { id: 'q4', x: 528, y: 141, isInitial: false, isFinal: true }
    ],
    transitions: [
      { from: 'q2', to: 'q1', symbol: 'a' },
      { from: 'q1', to: 'q2', symbol: 'b' },
      { from: 'q3', to: 'q4', symbol: 'd' },
      { from: 'q4', to: 'q3', symbol: 'c' },
      { from: 'q2', to: 'q3', symbol: 'c' },
      { from: 'q0', to: 'q1', symbol: 'a' }
    ],
  },
  // L14 ← L14.xml
  14: {
    nodes: [
      { id: 'q0', x: 140, y: 121, isInitial: true, isFinal: false }
    ],
    transitions: [],
  },
  // L15 ← L15.xml
  15: {
    nodes: [
      { id: 'q0', x: 104, y: 148, isInitial: true, isFinal: true },
      { id: 'q1', x: 244, y: 150, isInitial: false, isFinal: false }
    ],
    transitions: [
      { from: 'q0', to: 'q1', symbol: 'a, b' },
      { from: 'q1', to: 'q0', symbol: 'a, b' }
    ],
  },
  // L16 ← L16.xml
  16: {
    nodes: [
      { id: 'q0', x: 70, y: 161, isInitial: true, isFinal: false },
      { id: 'q1', x: 173, y: 162, isInitial: false, isFinal: false },
      { id: 'q2', x: 287, y: 164, isInitial: false, isFinal: false },
      { id: 'q3', x: 398, y: 174, isInitial: false, isFinal: true }
    ],
    transitions: [
      { from: 'q3', to: 'q3', symbol: 'a, b, c' },
      { from: 'q1', to: 'q1', symbol: 'a, c' },
      { from: 'q2', to: 'q2', symbol: 'a, b' },
      { from: 'q0', to: 'q1', symbol: 'a' },
      { from: 'q0', to: 'q0', symbol: 'b, c' },
      { from: 'q1', to: 'q2', symbol: 'b' },
      { from: 'q2', to: 'q3', symbol: 'c' }
    ],
  },
  // L17 ← L17.xml
  17: {
    nodes: [
      { id: 'q0', x: 70, y: 161, isInitial: true, isFinal: false },
      { id: 'q1', x: 173, y: 162, isInitial: false, isFinal: false },
      { id: 'q2', x: 287, y: 164, isInitial: false, isFinal: true }
    ],
    transitions: [
      { from: 'q0', to: 'q1', symbol: 'a' },
      { from: 'q1', to: 'q2', symbol: 'a, b' },
      { from: 'q2', to: 'q1', symbol: 'a, b' }
    ],
  },
  // L18 ← L18.xml (q1→q2(a) was missing due to malformed XML: <to>>2</to>)
  18: {
    nodes: [
      { id: 'q0', x: 70, y: 161, isInitial: true, isFinal: true },
      { id: 'q1', x: 187, y: 99, isInitial: false, isFinal: true },
      { id: 'q2', x: 294, y: 163, isInitial: false, isFinal: true }
    ],
    transitions: [
      { from: 'q1', to: 'q0', symbol: 'b' },
      { from: 'q0', to: 'q1', symbol: 'a' },
      { from: 'q0', to: 'q0', symbol: 'b' },
      { from: 'q2', to: 'q0', symbol: 'b' },
      { from: 'q1', to: 'q2', symbol: 'a' }
    ],
  },
  // L19 ← L19.xml
  19: {
    nodes: [
      { id: 'q0', x: 73, y: 99, isInitial: true, isFinal: false },
      { id: 'q1', x: 214, y: 99, isInitial: false, isFinal: false },
      { id: 'q2', x: 82, y: 232, isInitial: false, isFinal: false },
      { id: 'q3', x: 230, y: 238, isInitial: false, isFinal: true }
    ],
    transitions: [
      { from: 'q0', to: 'q1', symbol: 'a' },
      { from: 'q1', to: 'q0', symbol: 'a' },
      { from: 'q1', to: 'q3', symbol: 'b' },
      { from: 'q3', to: 'q1', symbol: 'b' },
      { from: 'q0', to: 'q2', symbol: 'b' },
      { from: 'q2', to: 'q0', symbol: 'b' },
      { from: 'q2', to: 'q3', symbol: 'a' },
      { from: 'q3', to: 'q2', symbol: 'a' }
    ],
  },
  // L20 ← L20.xml
  20: {
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
  },
  // L21 ← L21.xml (q1→q3(d) and q2→q3(d) were missing from XML)
  21: {
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
      { from: 'q0', to: 'q3', symbol: 'd' },
      { from: 'q1', to: 'q3', symbol: 'd' },
      { from: 'q2', to: 'q3', symbol: 'd' }
    ],
  },
  // L22 ← L22.xml
  22: {
    nodes: [
      { id: 'q0', x: 70, y: 164, isInitial: true, isFinal: false },
      { id: 'q1', x: 210, y: 167, isInitial: false, isFinal: true }
    ],
    transitions: [
      { from: 'q1', to: 'q1', symbol: '0' },
      { from: 'q0', to: 'q0', symbol: '1' },
      { from: 'q1', to: 'q0', symbol: '1' },
      { from: 'q0', to: 'q1', symbol: '0' }
    ],
  },
  // L23 ← L23.xml
  23: {
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
  },
  // L24 ← L24.xml
  24: {
    nodes: [
      { id: 'q0', x: 70, y: 164, isInitial: true, isFinal: false },
      { id: 'q1', x: 162, y: 161, isInitial: false, isFinal: false },
      { id: 'q2', x: 302, y: 162, isInitial: false, isFinal: false },
      { id: 'q3', x: 430, y: 161, isInitial: false, isFinal: true }
    ],
    transitions: [
      { from: 'q1', to: 'q2', symbol: '0, 1' },
      { from: 'q2', to: 'q3', symbol: '0, 1' },
      { from: 'q0', to: 'q1', symbol: '0, 1' }
    ],
  },
  // L25 ← L25.xml
  25: {
    nodes: [
      { id: 'q0', x: 70, y: 164, isInitial: true, isFinal: true },
      { id: 'q1', x: 162, y: 161, isInitial: false, isFinal: true },
      { id: 'q2', x: 302, y: 162, isInitial: false, isFinal: true }
    ],
    transitions: [
      { from: 'q1', to: 'q2', symbol: '0, 1' },
      { from: 'q0', to: 'q1', symbol: '0, 1' }
    ],
  },
  // L26 ← L26.xml (q4→q4 self-loop missing from XML; needed for words longer than 4)
  26: {
    nodes: [
      { id: 'q0', x: 70, y: 164, isInitial: true, isFinal: false },
      { id: 'q1', x: 162, y: 161, isInitial: false, isFinal: false },
      { id: 'q2', x: 267, y: 157, isInitial: false, isFinal: false },
      { id: 'q3', x: 373, y: 156, isInitial: false, isFinal: false },
      { id: 'q4', x: 487, y: 172, isInitial: false, isFinal: true }
    ],
    transitions: [
      { from: 'q1', to: 'q2', symbol: '0, 1' },
      { from: 'q3', to: 'q4', symbol: '0, 1' },
      { from: 'q2', to: 'q3', symbol: '0, 1' },
      { from: 'q0', to: 'q1', symbol: '0, 1' },
      { from: 'q4', to: 'q4', symbol: '0, 1' }
    ],
  },
  // L27 ← L27.xml
  27: {
    nodes: [
      { id: 'q0', x: 70, y: 164, isInitial: true, isFinal: true },
      { id: 'q1', x: 161, y: 89, isInitial: false, isFinal: false },
      { id: 'q2', x: 267, y: 157, isInitial: false, isFinal: false }
    ],
    transitions: [
      { from: 'q1', to: 'q2', symbol: '0, 1' },
      { from: 'q0', to: 'q1', symbol: '0, 1' },
      { from: 'q2', to: 'q0', symbol: '0, 1' }
    ],
  },
  // L28 ← L28.xml
  28: {
    nodes: [
      { id: 'q0', x: 78, y: 104, isInitial: true, isFinal: true },
      { id: 'q1', x: 229, y: 104, isInitial: false, isFinal: false },
      { id: 'q2', x: 163, y: 190, isInitial: false, isFinal: false }
    ],
    transitions: [
      { from: 'q0', to: 'q0', symbol: '1' },
      { from: 'q1', to: 'q2', symbol: '1' },
      { from: 'q0', to: 'q1', symbol: '0' },
      { from: 'q2', to: 'q0', symbol: '1' }
    ],
  },
  // L29 ← L29.xml
  29: {
    nodes: [
      { id: 'q0', x: 58, y: 172, isInitial: true, isFinal: false },
      { id: 'q1', x: 163, y: 105, isInitial: false, isFinal: false },
      { id: 'q2', x: 167, y: 194, isInitial: false, isFinal: false },
      { id: 'q3', x: 249, y: 65, isInitial: false, isFinal: false },
      { id: 'q4', x: 254, y: 134, isInitial: false, isFinal: false },
      { id: 'q5', x: 366, y: 80, isInitial: false, isFinal: false },
      { id: 'q6', x: 469, y: 165, isInitial: false, isFinal: true },
      { id: 'q7', x: 257, y: 228, isInitial: false, isFinal: true },
      { id: 'q8', x: 376, y: 229, isInitial: false, isFinal: true }
    ],
    transitions: [
      { from: 'q0', to: 'q2', symbol: '1' },
      { from: 'q2', to: 'q7', symbol: '1' },
      { from: 'q2', to: 'q4', symbol: '0' },
      { from: 'q6', to: 'q6', symbol: '0, 1' },
      { from: 'q4', to: 'q8', symbol: '1' },
      { from: 'q4', to: 'q5', symbol: '0' },
      { from: 'q1', to: 'q4', symbol: '1' },
      { from: 'q7', to: 'q8', symbol: '0, 1' },
      { from: 'q0', to: 'q1', symbol: '0' },
      { from: 'q1', to: 'q3', symbol: '0' },
      { from: 'q5', to: 'q6', symbol: '1' },
      { from: 'q3', to: 'q5', symbol: '1' },
      { from: 'q8', to: 'q6', symbol: '0, 1' }
    ],
  },
  // L30 ← L30.xml (q1→q3(1) and q3→q1(0) missing from XML; needed for alternating sequences)
  30: {
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
      { from: 'q3', to: 'q4', symbol: '1' },
      { from: 'q1', to: 'q3', symbol: '1' },
      { from: 'q3', to: 'q1', symbol: '0' }
    ],
  },
  // L31 ← L31.xml
  31: {
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
  },
  // L32 ← L32.xml (q3↔q5 via '0' missing from XML; parity cube edge for (0,0,1)↔(1,0,1))
  32: {
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
      { from: 'q4', to: 'q1', symbol: '1' },
      { from: 'q3', to: 'q5', symbol: '0' },
      { from: 'q5', to: 'q3', symbol: '0' }
    ],
  },
  // L33 ← L33.xml
  33: {
    nodes: [
      { id: 'q0', x: 60, y: 223, isInitial: true, isFinal: false },
      { id: 'q1', x: 144, y: 223, isInitial: false, isFinal: false },
      { id: 'q2', x: 262, y: 221, isInitial: false, isFinal: false },
      { id: 'q3', x: 359, y: 228, isInitial: false, isFinal: true }
    ],
    transitions: [
      { from: 'q0', to: 'q1', symbol: '0' },
      { from: 'q2', to: 'q3', symbol: '1' },
      { from: 'q3', to: 'q3', symbol: '0, 1' },
      { from: 'q1', to: 'q2', symbol: '0' }
    ],
  },
  // L34 ← L34.xml (q3→q0(1) in XML is wrong; must be q3→q1(1) for KMP suffix "1010")
  34: {
    nodes: [
      { id: 'q0', x: 60, y: 223, isInitial: true, isFinal: false },
      { id: 'q1', x: 156, y: 151, isInitial: false, isFinal: false },
      { id: 'q2', x: 285, y: 166, isInitial: false, isFinal: false },
      { id: 'q3', x: 400, y: 252, isInitial: false, isFinal: false },
      { id: 'q4', x: 499, y: 384, isInitial: false, isFinal: true }
    ],
    transitions: [
      { from: 'q0', to: 'q1', symbol: '1' },
      { from: 'q2', to: 'q3', symbol: '1' },
      { from: 'q2', to: 'q0', symbol: '0' },
      { from: 'q0', to: 'q0', symbol: '0' },
      { from: 'q1', to: 'q1', symbol: '1' },
      { from: 'q3', to: 'q1', symbol: '1' },
      { from: 'q4', to: 'q3', symbol: '1' },
      { from: 'q1', to: 'q2', symbol: '0' },
      { from: 'q3', to: 'q4', symbol: '0' },
      { from: 'q4', to: 'q0', symbol: '0' }
    ],
  },
  // L35 ← L35-ii.xml
  35: {
    nodes: [
      { id: 'q0', x: 59, y: 266, isInitial: true, isFinal: false },
      { id: 'q1', x: 159, y: 150, isInitial: false, isFinal: false },
      { id: 'q2', x: 295, y: 161, isInitial: false, isFinal: false },
      { id: 'q3', x: 381, y: 230, isInitial: false, isFinal: false },
      { id: 'q4', x: 536, y: 355, isInitial: false, isFinal: true }
    ],
    transitions: [
      { from: 'q3', to: 'q4', symbol: '1' },
      { from: 'q2', to: 'q3', symbol: '1' },
      { from: 'q2', to: 'q0', symbol: '0' },
      { from: 'q1', to: 'q2', symbol: '1' },
      { from: 'q0', to: 'q0', symbol: '0' },
      { from: 'q4', to: 'q4', symbol: '0, 1' },
      { from: 'q0', to: 'q1', symbol: '1' },
      { from: 'q1', to: 'q0', symbol: '0' },
      { from: 'q3', to: 'q0', symbol: '0' }
    ],
  },
  // L36 ← L35-jj.xml
  36: {
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
  },
  // L37 ← L36.xml (q4 must loop on all symbols; XML's q4→q0(a,b,c) and q4→q1(d) cause false negatives)
  37: {
    nodes: [
      { id: 'q0', x: 172, y: 263, isInitial: true, isFinal: false },
      { id: 'q1', x: 362, y: 158, isInitial: false, isFinal: false },
      { id: 'q2', x: 637, y: 166, isInitial: false, isFinal: false },
      { id: 'q3', x: 797, y: 287, isInitial: false, isFinal: false },
      { id: 'q4', x: 873, y: 482, isInitial: false, isFinal: true }
    ],
    transitions: [
      { from: 'q0', to: 'q0', symbol: 'a, b, c' },
      { from: 'q3', to: 'q0', symbol: 'b, c' },
      { from: 'q1', to: 'q1', symbol: 'd' },
      { from: 'q2', to: 'q0', symbol: 'a, c' },
      { from: 'q2', to: 'q3', symbol: 'b' },
      { from: 'q4', to: 'q4', symbol: 'a, b, c, d' },
      { from: 'q3', to: 'q4', symbol: 'a' },
      { from: 'q3', to: 'q1', symbol: 'd' },
      { from: 'q0', to: 'q1', symbol: 'd' },
      { from: 'q1', to: 'q2', symbol: 'c' },
      { from: 'q1', to: 'q0', symbol: 'a, b' },
      { from: 'q2', to: 'q1', symbol: 'd' }
    ],
  },
  // L38 ← L37.xml
  38: {
    nodes: [
      { id: 'q0', x: 67, y: 278, isInitial: true, isFinal: false },
      { id: 'q1', x: 366, y: 110, isInitial: false, isFinal: false },
      { id: 'q2', x: 191, y: 391, isInitial: false, isFinal: false },
      { id: 'q3', x: 661, y: 68, isInitial: false, isFinal: false },
      { id: 'q4', x: 685, y: 417, isInitial: false, isFinal: false },
      { id: 'q5', x: 968, y: 218, isInitial: false, isFinal: false },
      { id: 'q6', x: 968, y: 280, isInitial: false, isFinal: false },
      { id: 'q7', x: 1095, y: 275, isInitial: false, isFinal: true }
    ],
    transitions: [
      { from: 'q3', to: 'q5', symbol: 'c' },
      { from: 'q6', to: 'q0', symbol: 'b, c' },
      { from: 'q3', to: 'q1', symbol: 'a' },
      { from: 'q1', to: 'q3', symbol: 'b' },
      { from: 'q6', to: 'q7', symbol: 'a' },
      { from: 'q0', to: 'q2', symbol: 'd' },
      { from: 'q2', to: 'q0', symbol: 'b' },
      { from: 'q4', to: 'q6', symbol: 'b' },
      { from: 'q2', to: 'q1', symbol: 'a' },
      { from: 'q1', to: 'q2', symbol: 'd' },
      { from: 'q3', to: 'q0', symbol: 'b' },
      { from: 'q4', to: 'q2', symbol: 'd' },
      { from: 'q2', to: 'q4', symbol: 'c' },
      { from: 'q7', to: 'q7', symbol: 'a, b, c, d' },
      { from: 'q1', to: 'q1', symbol: 'a' },
      { from: 'q0', to: 'q0', symbol: 'b, c' },
      { from: 'q2', to: 'q2', symbol: 'd' },
      { from: 'q5', to: 'q1', symbol: 'a' },
      { from: 'q6', to: 'q2', symbol: 'd' },
      { from: 'q4', to: 'q1', symbol: 'a' },
      { from: 'q4', to: 'q0', symbol: 'c' },
      { from: 'q3', to: 'q2', symbol: 'd' },
      { from: 'q5', to: 'q7', symbol: 'd' },
      { from: 'q5', to: 'q0', symbol: 'b, c' },
      { from: 'q1', to: 'q0', symbol: 'c' },
      { from: 'q0', to: 'q1', symbol: 'a' }
    ],
  },
  // L39 ← L38.xml
  39: {
    nodes: [
      { id: 'q0', x: 319, y: 165, isInitial: true, isFinal: false },
      { id: 'q1', x: 511, y: 162, isInitial: false, isFinal: false },
      { id: 'q2', x: 326, y: 338, isInitial: false, isFinal: true },
      { id: 'q3', x: 525, y: 351, isInitial: false, isFinal: false }
    ],
    transitions: [
      { from: 'q0', to: 'q1', symbol: 'a' },
      { from: 'q1', to: 'q0', symbol: 'a' },
      { from: 'q0', to: 'q2', symbol: 'b' },
      { from: 'q2', to: 'q0', symbol: 'b' },
      { from: 'q1', to: 'q3', symbol: 'b' },
      { from: 'q3', to: 'q1', symbol: 'b' },
      { from: 'q2', to: 'q3', symbol: 'a' },
      { from: 'q3', to: 'q2', symbol: 'a' }
    ],
  },
  // L40 ← L39.xml
  40: {
    nodes: [
      { id: 'q0', x: 319, y: 165, isInitial: true, isFinal: false },
      { id: 'q1', x: 511, y: 162, isInitial: false, isFinal: false },
      { id: 'q2', x: 325, y: 338, isInitial: false, isFinal: false },
      { id: 'q3', x: 525, y: 351, isInitial: false, isFinal: true }
    ],
    transitions: [
      { from: 'q0', to: 'q1', symbol: 'a' },
      { from: 'q1', to: 'q0', symbol: 'a' },
      { from: 'q0', to: 'q2', symbol: 'b' },
      { from: 'q2', to: 'q0', symbol: 'b' },
      { from: 'q1', to: 'q3', symbol: 'b' },
      { from: 'q3', to: 'q1', symbol: 'b' },
      { from: 'q2', to: 'q3', symbol: 'a' },
      { from: 'q3', to: 'q2', symbol: 'a' }
    ],
  },
  // L41 ← L40.xml
  41: {
    nodes: [
      { id: 'q0', x: 80, y: 153, isInitial: true, isFinal: false },
      { id: 'q1', x: 181, y: 58, isInitial: false, isFinal: false },
      { id: 'q2', x: 309, y: 63, isInitial: false, isFinal: false },
      { id: 'q3', x: 403, y: 174, isInitial: false, isFinal: false },
      { id: 'q4', x: 454, y: 58, isInitial: false, isFinal: false },
      { id: 'q5', x: 534, y: 106, isInitial: false, isFinal: false },
      { id: 'q6', x: 512, y: 259, isInitial: false, isFinal: true }
    ],
    transitions: [
      { from: 'q0', to: 'q0', symbol: 'a' },
      { from: 'q3', to: 'q4', symbol: 'c' },
      { from: 'q1', to: 'q2', symbol: 'b' },
      { from: 'q2', to: 'q1', symbol: 'b' },
      { from: 'q0', to: 'q3', symbol: 'd' },
      { from: 'q4', to: 'q5', symbol: 'c' },
      { from: 'q5', to: 'q3', symbol: 'c' },
      { from: 'q0', to: 'q1', symbol: 'b' },
      { from: 'q2', to: 'q3', symbol: 'd' },
      { from: 'q3', to: 'q6', symbol: 'd' }
    ],
  },
  // L42 ← L41.xml
  42: {
    nodes: [
      { id: 'q0', x: 80, y: 153, isInitial: true, isFinal: false },
      { id: 'q1', x: 166, y: 153, isInitial: false, isFinal: false },
      { id: 'q2', x: 271, y: 146, isInitial: false, isFinal: false },
      { id: 'q3', x: 371, y: 94, isInitial: false, isFinal: false },
      { id: 'q4', x: 470, y: 160, isInitial: false, isFinal: false },
      { id: 'q5', x: 465, y: 270, isInitial: false, isFinal: true },
      { id: 'q6', x: 309, y: 273, isInitial: false, isFinal: false },
      { id: 'q7', x: 157, y: 266, isInitial: false, isFinal: true }
    ],
    transitions: [
      { from: 'q2', to: 'q3', symbol: 'c' },
      { from: 'q5', to: 'q5', symbol: 'a' },
      { from: 'q0', to: 'q1', symbol: 'a' },
      { from: 'q4', to: 'q5', symbol: 'a' },
      { from: 'q4', to: 'q2', symbol: 'd' },
      { from: 'q5', to: 'q6', symbol: 'b' },
      { from: 'q1', to: 'q2', symbol: 'd' },
      { from: 'q3', to: 'q4', symbol: 'b' },
      { from: 'q6', to: 'q7', symbol: 'b' },
      { from: 'q7', to: 'q6', symbol: 'b' }
    ],
  },
  // L43 ← L42.xml
  43: {
    nodes: [
      { id: 'q0', x: 80, y: 153, isInitial: true, isFinal: false },
      { id: 'q1', x: 179, y: 154, isInitial: false, isFinal: false },
      { id: 'q2', x: 248, y: 67, isInitial: false, isFinal: false },
      { id: 'q3', x: 360, y: 72, isInitial: false, isFinal: false },
      { id: 'q4', x: 373, y: 170, isInitial: false, isFinal: false },
      { id: 'q5', x: 500, y: 183, isInitial: false, isFinal: true }
    ],
    transitions: [
      { from: 'q0', to: 'q1', symbol: 'a' },
      { from: 'q1', to: 'q0', symbol: 'a' },
      { from: 'q4', to: 'q5', symbol: 'c' },
      { from: 'q5', to: 'q5', symbol: 'd' },
      { from: 'q1', to: 'q4', symbol: 'c' },
      { from: 'q3', to: 'q4', symbol: 'c' },
      { from: 'q1', to: 'q2', symbol: 'b' },
      { from: 'q2', to: 'q3', symbol: 'b' },
      { from: 'q3', to: 'q2', symbol: 'b' }
    ],
  },
  // L44 ← L43.xml (q3→q2(a,b,d) added; q4→q2 must not include 'c' since q4→q3(c) is correct)
  44: {
    nodes: [
      { id: 'q0', x: 53, y: 202, isInitial: true, isFinal: false },
      { id: 'q1', x: 243, y: 200, isInitial: false, isFinal: false },
      { id: 'q2', x: 436, y: 200, isInitial: false, isFinal: false },
      { id: 'q3', x: 638, y: 117, isInitial: false, isFinal: false },
      { id: 'q4', x: 847, y: 201, isInitial: false, isFinal: true }
    ],
    transitions: [
      { from: 'q3', to: 'q4', symbol: 'd' },
      { from: 'q1', to: 'q1', symbol: 'a' },
      { from: 'q2', to: 'q2', symbol: 'a, b, d' },
      { from: 'q0', to: 'q0', symbol: 'b, c, d' },
      { from: 'q3', to: 'q3', symbol: 'c' },
      { from: 'q4', to: 'q3', symbol: 'c' },
      { from: 'q1', to: 'q2', symbol: 'b' },
      { from: 'q0', to: 'q1', symbol: 'a' },
      { from: 'q1', to: 'q0', symbol: 'c, d' },
      { from: 'q4', to: 'q2', symbol: 'a, b, d' },
      { from: 'q2', to: 'q3', symbol: 'c' },
      { from: 'q3', to: 'q2', symbol: 'a, b, d' }
    ],
  },
  // L45 ← L44.xml (XML has q4→q5(c) causing false positive; suffix "dcba" starts with d not c)
  45: {
    nodes: [
      { id: 'q0', x: 53, y: 202, isInitial: true, isFinal: false },
      { id: 'q1', x: 155, y: 202, isInitial: false, isFinal: false },
      { id: 'q2', x: 267, y: 207, isInitial: false, isFinal: false },
      { id: 'q3', x: 351, y: 210, isInitial: false, isFinal: false },
      { id: 'q4', x: 469, y: 214, isInitial: false, isFinal: false },
      { id: 'q5', x: 616, y: 146, isInitial: false, isFinal: false },
      { id: 'q6', x: 761, y: 95, isInitial: false, isFinal: false },
      { id: 'q7', x: 849, y: 146, isInitial: false, isFinal: true },
      { id: 'q8', x: 537, y: 309, isInitial: false, isFinal: false },
      { id: 'q9', x: 728, y: 326, isInitial: false, isFinal: false }
    ],
    transitions: [
      { from: 'q3', to: 'q4', symbol: 'd' },
      { from: 'q0', to: 'q1', symbol: 'a' },
      { from: 'q1', to: 'q2', symbol: 'b' },
      { from: 'q8', to: 'q8', symbol: 'a, b, c' },
      { from: 'q7', to: 'q8', symbol: 'a, b, c' },
      { from: 'q4', to: 'q9', symbol: 'd' },
      { from: 'q2', to: 'q3', symbol: 'c' },
      { from: 'q4', to: 'q8', symbol: 'a, b, c' },
      { from: 'q9', to: 'q9', symbol: 'd' },
      { from: 'q8', to: 'q9', symbol: 'd' },
      { from: 'q7', to: 'q9', symbol: 'd' },
      { from: 'q9', to: 'q8', symbol: 'a, b' },
      { from: 'q5', to: 'q6', symbol: 'b' },
      { from: 'q5', to: 'q8', symbol: 'a, c, d' },
      { from: 'q6', to: 'q9', symbol: 'd' },
      { from: 'q6', to: 'q8', symbol: 'b, c' },
      { from: 'q9', to: 'q5', symbol: 'c' },
      { from: 'q6', to: 'q7', symbol: 'a' }
    ],
  },
  // L46 ← L45.xml
  46: {
    nodes: [
      { id: 'q0', x: 53, y: 202, isInitial: true, isFinal: false },
      { id: 'q1', x: 121, y: 201, isInitial: false, isFinal: false },
      { id: 'q2', x: 195, y: 200, isInitial: false, isFinal: false },
      { id: 'q3', x: 266, y: 198, isInitial: false, isFinal: false },
      { id: 'q4', x: 342, y: 200, isInitial: false, isFinal: false },
      { id: 'q5', x: 405, y: 108, isInitial: false, isFinal: false },
      { id: 'q6', x: 528, y: 110, isInitial: false, isFinal: false },
      { id: 'q7', x: 628, y: 155, isInitial: false, isFinal: false },
      { id: 'q8', x: 726, y: 183, isInitial: false, isFinal: false },
      { id: 'q9', x: 942, y: 385, isInitial: false, isFinal: false },
      { id: 'q10', x: 622, y: 309, isInitial: false, isFinal: false },
      { id: 'q11', x: 350, y: 334, isInitial: false, isFinal: false },
      { id: 'q12', x: 83, y: 396, isInitial: false, isFinal: true }
    ],
    transitions: [
      { from: 'q5', to: 'q4', symbol: 'a, b, d' },
      { from: 'q3', to: 'q4', symbol: 'd' },
      { from: 'q4', to: 'q5', symbol: 'c' },
      { from: 'q6', to: 'q7', symbol: 'c' },
      { from: 'q7', to: 'q8', symbol: 'c' },
      { from: 'q10', to: 'q8', symbol: 'a, c' },
      { from: 'q0', to: 'q1', symbol: 'a' },
      { from: 'q8', to: 'q9', symbol: 'd' },
      { from: 'q1', to: 'q2', symbol: 'b' },
      { from: 'q12', to: 'q9', symbol: 'd' },
      { from: 'q6', to: 'q4', symbol: 'a, b, d' },
      { from: 'q9', to: 'q8', symbol: 'a, b' },
      { from: 'q11', to: 'q8', symbol: 'b, c' },
      { from: 'q11', to: 'q12', symbol: 'a' },
      { from: 'q12', to: 'q8', symbol: 'a, b, c' },
      { from: 'q4', to: 'q4', symbol: 'a, b, d' },
      { from: 'q8', to: 'q8', symbol: 'a, b, c' },
      { from: 'q2', to: 'q3', symbol: 'c' },
      { from: 'q9', to: 'q9', symbol: 'd' },
      { from: 'q11', to: 'q9', symbol: 'd' },
      { from: 'q7', to: 'q4', symbol: 'a, b, d' },
      { from: 'q10', to: 'q11', symbol: 'b' },
      { from: 'q5', to: 'q6', symbol: 'c' },
      { from: 'q9', to: 'q10', symbol: 'c' },
      { from: 'q10', to: 'q9', symbol: 'd' }
    ],
  },
  // L47 ← L46.xml
  47: {
    nodes: [
      { id: 'q0', x: 53, y: 202, isInitial: true, isFinal: true },
      { id: 'q1', x: 128, y: 32, isInitial: false, isFinal: false },
      { id: 'q2', x: 226, y: 205, isInitial: false, isFinal: false },
      { id: 'q3', x: 119, y: 379, isInitial: false, isFinal: false },
      { id: 'q4', x: 466, y: 63, isInitial: false, isFinal: false },
      { id: 'q5', x: 356, y: 223, isInitial: false, isFinal: false },
      { id: 'q6', x: 483, y: 379, isInitial: false, isFinal: false },
      { id: 'q7', x: 804, y: 222, isInitial: false, isFinal: false }
    ],
    transitions: [
      { from: 'q2', to: 'q6', symbol: 'c' },
      { from: 'q6', to: 'q2', symbol: 'c' },
      { from: 'q2', to: 'q4', symbol: 'a' },
      { from: 'q4', to: 'q2', symbol: 'a' },
      { from: 'q0', to: 'q2', symbol: 'b' },
      { from: 'q2', to: 'q0', symbol: 'b' },
      { from: 'q1', to: 'q4', symbol: 'b' },
      { from: 'q4', to: 'q1', symbol: 'b' },
      { from: 'q1', to: 'q5', symbol: 'c' },
      { from: 'q5', to: 'q1', symbol: 'c' },
      { from: 'q0', to: 'q1', symbol: 'a' },
      { from: 'q1', to: 'q0', symbol: 'a' },
      { from: 'q0', to: 'q3', symbol: 'c' },
      { from: 'q3', to: 'q0', symbol: 'c' },
      { from: 'q3', to: 'q5', symbol: 'a' },
      { from: 'q5', to: 'q3', symbol: 'a' },
      { from: 'q5', to: 'q7', symbol: 'b' },
      { from: 'q7', to: 'q5', symbol: 'b' },
      { from: 'q3', to: 'q6', symbol: 'b' },
      { from: 'q6', to: 'q3', symbol: 'b' },
      { from: 'q4', to: 'q7', symbol: 'c' },
      { from: 'q7', to: 'q4', symbol: 'c' },
      { from: 'q6', to: 'q7', symbol: 'a' },
      { from: 'q7', to: 'q6', symbol: 'a' }
    ],
  },
  // L48 ← L47.xml
  48: {
    nodes: [
      { id: 'q0', x: 54, y: 147, isInitial: true, isFinal: false },
      { id: 'q1', x: 56, y: 245, isInitial: false, isFinal: false },
      { id: 'q2', x: 188, y: 245, isInitial: false, isFinal: false },
      { id: 'q3', x: 291, y: 143, isInitial: false, isFinal: false },
      { id: 'q4', x: 375, y: 49, isInitial: false, isFinal: false },
      { id: 'q5', x: 504, y: 51, isInitial: false, isFinal: false },
      { id: 'q6', x: 483, y: 202, isInitial: false, isFinal: true }
    ],
    transitions: [
      { from: 'q4', to: 'q5', symbol: 'c' },
      { from: 'q0', to: 'q1', symbol: 'b' },
      { from: 'q2', to: 'q3', symbol: 'd' },
      { from: 'q3', to: 'q4', symbol: 'c' },
      { from: 'q3', to: 'q6', symbol: 'd' },
      { from: 'q0', to: 'q0', symbol: 'a' },
      { from: 'q1', to: 'q2', symbol: 'b' },
      { from: 'q2', to: 'q1', symbol: 'b' },
      { from: 'q0', to: 'q3', symbol: 'd' },
      { from: 'q5', to: 'q3', symbol: 'c' }
    ],
  },
  // L49 ← L48.xml
  49: {
    nodes: [
      { id: 'q0', x: 177, y: 115, isInitial: true, isFinal: false },
      { id: 'q1', x: 297, y: 112, isInitial: false, isFinal: false },
      { id: 'q2', x: 176, y: 221, isInitial: false, isFinal: true },
      { id: 'q3', x: 304, y: 229, isInitial: false, isFinal: false }
    ],
    transitions: [
      { from: 'q0', to: 'q2', symbol: '1' },
      { from: 'q2', to: 'q0', symbol: '1' },
      { from: 'q1', to: 'q3', symbol: '1' },
      { from: 'q3', to: 'q1', symbol: '1' },
      { from: 'q0', to: 'q1', symbol: '0' },
      { from: 'q1', to: 'q0', symbol: '0' },
      { from: 'q2', to: 'q3', symbol: '0' },
      { from: 'q3', to: 'q2', symbol: '0' }
    ],
  },
  // L50 ← L49.xml
  50: {
    nodes: [
      { id: 'q0', x: 108, y: 115, isInitial: true, isFinal: false },
      { id: 'q1', x: 192, y: 111, isInitial: false, isFinal: false },
      { id: 'q2', x: 277, y: 107, isInitial: false, isFinal: false },
      { id: 'q3', x: 349, y: 51, isInitial: false, isFinal: false },
      { id: 'q4', x: 348, y: 167, isInitial: false, isFinal: false },
      { id: 'q5', x: 438, y: 106, isInitial: false, isFinal: false },
      { id: 'q6', x: 523, y: 103, isInitial: false, isFinal: false },
      { id: 'q7', x: 644, y: 106, isInitial: false, isFinal: false },
      { id: 'q8', x: 647, y: 215, isInitial: false, isFinal: true }
    ],
    transitions: [
      { from: 'q5', to: 'q6', symbol: 'c' },
      { from: 'q2', to: 'q4', symbol: 'b' },
      { from: 'q1', to: 'q2', symbol: 'c' },
      { from: 'q2', to: 'q3', symbol: 'a' },
      { from: 'q1', to: 'q1', symbol: 'a' },
      { from: 'q2', to: 'q2', symbol: 'c' },
      { from: 'q0', to: 'q1', symbol: 'a' },
      { from: 'q6', to: 'q7', symbol: 'a' },
      { from: 'q4', to: 'q5', symbol: 'a' },
      { from: 'q7', to: 'q8', symbol: 'a' },
      { from: 'q8', to: 'q7', symbol: 'a' },
      { from: 'q3', to: 'q5', symbol: 'b' }
    ],
  },
  // L51 ← L50.xml
  51: {
    nodes: [
      { id: 'q0', x: 71, y: 120, isInitial: true, isFinal: false },
      { id: 'q1', x: 158, y: 123, isInitial: false, isFinal: false },
      { id: 'q2', x: 162, y: 234, isInitial: false, isFinal: false },
      { id: 'q3', x: 292, y: 59, isInitial: false, isFinal: false },
      { id: 'q4', x: 309, y: 317, isInitial: false, isFinal: false },
      { id: 'q5', x: 460, y: 122, isInitial: false, isFinal: false },
      { id: 'q6', x: 466, y: 245, isInitial: false, isFinal: true }
    ],
    transitions: [
      { from: 'q0', to: 'q1', symbol: 'a' },
      { from: 'q3', to: 'q5', symbol: 'c' },
      { from: 'q1', to: 'q2', symbol: 'a' },
      { from: 'q2', to: 'q1', symbol: 'a' },
      { from: 'q2', to: 'q4', symbol: 'b' },
      { from: 'q1', to: 'q5', symbol: 'c' },
      { from: 'q4', to: 'q6', symbol: 'c' },
      { from: 'q3', to: 'q3', symbol: 'b' },
      { from: 'q4', to: 'q4', symbol: 'b' },
      { from: 'q5', to: 'q6', symbol: 'c' },
      { from: 'q6', to: 'q5', symbol: 'c' },
      { from: 'q2', to: 'q6', symbol: 'c' },
      { from: 'q1', to: 'q3', symbol: 'b' }
    ],
  },
  // L52 ← L51.xml
  52: {
    nodes: [
      { id: 'q0', x: 71, y: 120, isInitial: true, isFinal: false },
      { id: 'q1', x: 133, y: 120, isInitial: false, isFinal: false },
      { id: 'q2', x: 231, y: 121, isInitial: false, isFinal: false },
      { id: 'q3', x: 341, y: 60, isInitial: false, isFinal: false },
      { id: 'q4', x: 340, y: 184, isInitial: false, isFinal: false },
      { id: 'q5', x: 455, y: 120, isInitial: false, isFinal: false },
      { id: 'q6', x: 575, y: 120, isInitial: false, isFinal: false },
      { id: 'q7', x: 692, y: 119, isInitial: false, isFinal: false },
      { id: 'q8', x: 692, y: 235, isInitial: false, isFinal: true }
    ],
    transitions: [
      { from: 'q0', to: 'q1', symbol: 'a' },
      { from: 'q1', to: 'q2', symbol: 'c' },
      { from: 'q2', to: 'q4', symbol: 'b' },
      { from: 'q6', to: 'q7', symbol: 'a' },
      { from: 'q2', to: 'q3', symbol: 'a' },
      { from: 'q1', to: 'q1', symbol: 'a' },
      { from: 'q2', to: 'q2', symbol: 'c' },
      { from: 'q7', to: 'q8', symbol: 'a' },
      { from: 'q8', to: 'q7', symbol: 'a' },
      { from: 'q3', to: 'q5', symbol: 'b' },
      { from: 'q4', to: 'q5', symbol: 'a' },
      { from: 'q5', to: 'q6', symbol: 'c' }
    ],
  },
  // L53 ← L52.xml (q1→q3(b) missing; language a+(bb)*b(cc)* needs direct q1→q3 for single 'b')
  53: {
    nodes: [
      { id: 'q0', x: 71, y: 120, isInitial: true, isFinal: false },
      { id: 'q1', x: 178, y: 119, isInitial: false, isFinal: false },
      { id: 'q2', x: 275, y: 120, isInitial: false, isFinal: false },
      { id: 'q3', x: 392, y: 121, isInitial: false, isFinal: true },
      { id: 'q4', x: 393, y: 224, isInitial: false, isFinal: false },
      { id: 'q5', x: 544, y: 115, isInitial: false, isFinal: false },
      { id: 'q6', x: 546, y: 222, isInitial: false, isFinal: true }
    ],
    transitions: [
      { from: 'q5', to: 'q6', symbol: 'c' },
      { from: 'q6', to: 'q5', symbol: 'c' },
      { from: 'q2', to: 'q3', symbol: 'b' },
      { from: 'q1', to: 'q2', symbol: 'a' },
      { from: 'q2', to: 'q1', symbol: 'a' },
      { from: 'q3', to: 'q5', symbol: 'c' },
      { from: 'q0', to: 'q1', symbol: 'a' },
      { from: 'q3', to: 'q4', symbol: 'b' },
      { from: 'q4', to: 'q3', symbol: 'b' },
      { from: 'q1', to: 'q3', symbol: 'b' }
    ],
  },
  // L54 ← L53.xml
  54: {
    nodes: [
      { id: 'q0', x: 86, y: 122, isInitial: true, isFinal: true },
      { id: 'q1', x: 245, y: 118, isInitial: false, isFinal: false }
    ],
    transitions: [
      { from: 'q0', to: 'q1', symbol: 'b' },
      { from: 'q1', to: 'q0', symbol: 'c' },
      { from: 'q0', to: 'q0', symbol: 'a, c' }
    ],
  }
};
