// Graph topology for each level in AFDPart2 (Grafo → Linguagem)
// nodes: [{id, isInitial, isFinal}]
// transitions: [{from, to, symbol}]  (symbol may be "a,b" for multiple)

export const LEVEL_GRAPHS = {
  1: { // L01: L = ∅
    nodes: [{ id: 'q0', isInitial: true, isFinal: false }],
    transitions: []
  },
  2: { // L02: L = {λ}
    nodes: [{ id: 'q0', isInitial: true, isFinal: true }],
    transitions: []
  },
  3: { // L03: L = {0}
    nodes: [
      { id: 'q0', isInitial: true, isFinal: false },
      { id: 'q1', isInitial: false, isFinal: true }
    ],
    transitions: [{ from: 'q0', to: 'q1', symbol: '0' }]
  },
  4: { // L04: L = {λ, 0}
    nodes: [
      { id: 'q0', isInitial: true, isFinal: true },
      { id: 'q1', isInitial: false, isFinal: true }
    ],
    transitions: [{ from: 'q0', to: 'q1', symbol: '0' }]
  },
  5: { // L05: L = {a^n | n > 0}
    nodes: [
      { id: 'q0', isInitial: true, isFinal: false },
      { id: 'q1', isInitial: false, isFinal: true }
    ],
    transitions: [
      { from: 'q0', to: 'q1', symbol: 'a' },
      { from: 'q1', to: 'q1', symbol: 'a' }
    ]
  },
  6: { // L06: L = {a^n | n > 0, n ímpar}
    nodes: [
      { id: 'q0', isInitial: true, isFinal: false },
      { id: 'q1', isInitial: false, isFinal: true }
    ],
    transitions: [
      { from: 'q0', to: 'q1', symbol: 'a' },
      { from: 'q1', to: 'q0', symbol: 'a' }
    ]
  },
  7: { // L07: L = {a b^n a | n ≥ 0, n par}
    nodes: [
      { id: 'q0', isInitial: true, isFinal: false },
      { id: 'q1', isInitial: false, isFinal: false },
      { id: 'q2', isInitial: false, isFinal: false },
      { id: 'q3', isInitial: false, isFinal: true }
    ],
    transitions: [
      { from: 'q0', to: 'q1', symbol: 'a' },
      { from: 'q1', to: 'q2', symbol: 'b' },
      { from: 'q2', to: 'q1', symbol: 'b' },
      { from: 'q1', to: 'q3', symbol: 'a' }
    ]
  },
  8: { // L08: L = {a(bc)^n a | n > 0}
    nodes: [
      { id: 'q0', isInitial: true, isFinal: false },
      { id: 'q1', isInitial: false, isFinal: false },
      { id: 'q2', isInitial: false, isFinal: false },
      { id: 'q3', isInitial: false, isFinal: false },
      { id: 'q4', isInitial: false, isFinal: true }
    ],
    transitions: [
      { from: 'q0', to: 'q1', symbol: 'a' },
      { from: 'q1', to: 'q2', symbol: 'b' },
      { from: 'q2', to: 'q3', symbol: 'c' },
      { from: 'q3', to: 'q2', symbol: 'b' },
      { from: 'q3', to: 'q4', symbol: 'a' }
    ]
  },
  9: { // L09: L = {a^n b^m c^p | n > 0, m ≥ 0, p ≥ 0}
    nodes: [
      { id: 'q0', isInitial: true, isFinal: false },
      { id: 'q1', isInitial: false, isFinal: true },
      { id: 'q2', isInitial: false, isFinal: true },
      { id: 'q3', isInitial: false, isFinal: true }
    ],
    transitions: [
      { from: 'q0', to: 'q1', symbol: 'a' },
      { from: 'q1', to: 'q1', symbol: 'a' },
      { from: 'q1', to: 'q2', symbol: 'b' },
      { from: 'q2', to: 'q2', symbol: 'b' },
      { from: 'q2', to: 'q3', symbol: 'c' },
      { from: 'q3', to: 'q3', symbol: 'c' }
    ]
  },
  10: { // L10: L = {a^n bb a^m | n,m ≥ 0, n e m pares}
    nodes: [
      { id: 'q0', isInitial: true, isFinal: true },
      { id: 'q1', isInitial: false, isFinal: false },
      { id: 'q2', isInitial: false, isFinal: false },
      { id: 'q3', isInitial: false, isFinal: true },
      { id: 'q4', isInitial: false, isFinal: false }
    ],
    transitions: [
      { from: 'q0', to: 'q1', symbol: 'a' },
      { from: 'q1', to: 'q0', symbol: 'a' },
      { from: 'q0', to: 'q2', symbol: 'b' },
      { from: 'q2', to: 'q3', symbol: 'b' },
      { from: 'q3', to: 'q4', symbol: 'a' },
      { from: 'q4', to: 'q3', symbol: 'a' }
    ]
  },
  11: { // L11: L = {a^n b^m | (n+m) par}
    nodes: [
      { id: 'ae', isInitial: true, isFinal: true },
      { id: 'ao', isInitial: false, isFinal: false },
      { id: 'be', isInitial: false, isFinal: true },
      { id: 'bo', isInitial: false, isFinal: false }
    ],
    transitions: [
      { from: 'ae', to: 'ao', symbol: 'a' },
      { from: 'ao', to: 'ae', symbol: 'a' },
      { from: 'ae', to: 'bo', symbol: 'b' },
      { from: 'ao', to: 'be', symbol: 'b' },
      { from: 'be', to: 'bo', symbol: 'b' },
      { from: 'bo', to: 'be', symbol: 'b' }
    ]
  },
  12: { // L12: L = {a^n b^2m | n > 0, m > 0}
    nodes: [
      { id: 'q0', isInitial: true, isFinal: false },
      { id: 'q1', isInitial: false, isFinal: false },
      { id: 'q2', isInitial: false, isFinal: false },
      { id: 'q3', isInitial: false, isFinal: true }
    ],
    transitions: [
      { from: 'q0', to: 'q1', symbol: 'a' },
      { from: 'q1', to: 'q1', symbol: 'a' },
      { from: 'q1', to: 'q2', symbol: 'b' },
      { from: 'q2', to: 'q3', symbol: 'b' },
      { from: 'q3', to: 'q2', symbol: 'b' }
    ]
  },
  13: { // L13: L = {(ab)^n (cd)^m | n > 0, m > 0}
    nodes: [
      { id: 'q0', isInitial: true, isFinal: false },
      { id: 'q1', isInitial: false, isFinal: false },
      { id: 'q2', isInitial: false, isFinal: false },
      { id: 'q3', isInitial: false, isFinal: false },
      { id: 'q4', isInitial: false, isFinal: true }
    ],
    transitions: [
      { from: 'q0', to: 'q1', symbol: 'a' },
      { from: 'q1', to: 'q2', symbol: 'b' },
      { from: 'q2', to: 'q1', symbol: 'a' },
      { from: 'q2', to: 'q3', symbol: 'c' },
      { from: 'q3', to: 'q4', symbol: 'd' },
      { from: 'q4', to: 'q3', symbol: 'c' }
    ]
  },
  14: { // L14: L = {w | |w|_a = |w|_b}
    nodes: [
      { id: 'q0', isInitial: true, isFinal: true },
      { id: 'q1', isInitial: false, isFinal: false }
    ],
    transitions: [
      { from: 'q0', to: 'q1', symbol: 'a' },
      { from: 'q1', to: 'q0', symbol: 'a' },
      { from: 'q0', to: 'q1', symbol: 'b' },
      { from: 'q1', to: 'q0', symbol: 'b' }
    ]
  },
  15: { // L15: L = {w | |w| par}
    nodes: [
      { id: 'q0', isInitial: true, isFinal: true },
      { id: 'q1', isInitial: false, isFinal: false }
    ],
    transitions: [
      { from: 'q0', to: 'q1', symbol: 'a' },
      { from: 'q1', to: 'q0', symbol: 'a' },
      { from: 'q0', to: 'q1', symbol: 'b' },
      { from: 'q1', to: 'q0', symbol: 'b' }
    ]
  },
  16: { // L16: L = {u a v b x c y | u,v,x,y ∈ {a,b,c}*}
    nodes: [
      { id: 'q0', isInitial: true, isFinal: false },
      { id: 'q1', isInitial: false, isFinal: false },
      { id: 'q2', isInitial: false, isFinal: false },
      { id: 'q3', isInitial: false, isFinal: true }
    ],
    transitions: [
      { from: 'q0', to: 'q0', symbol: 'b,c' },
      { from: 'q0', to: 'q1', symbol: 'a' },
      { from: 'q1', to: 'q1', symbol: 'a,c' },
      { from: 'q1', to: 'q2', symbol: 'b' },
      { from: 'q2', to: 'q2', symbol: 'a,b' },
      { from: 'q2', to: 'q3', symbol: 'c' },
      { from: 'q3', to: 'q3', symbol: 'a,b,c' }
    ]
  },
  17: { // L17: L = {w | começa com 'a' e |w| par}
    nodes: [
      { id: 'q0', isInitial: true, isFinal: false },
      { id: 'q1', isInitial: false, isFinal: false },
      { id: 'q2', isInitial: false, isFinal: true }
    ],
    transitions: [
      { from: 'q0', to: 'q1', symbol: 'a' },
      { from: 'q1', to: 'q2', symbol: 'a,b' },
      { from: 'q2', to: 'q1', symbol: 'a,b' }
    ]
  },
  18: { // L18: L = {w | nunca mais de dois 'a' seguidos}
    nodes: [
      { id: 'q0', isInitial: true, isFinal: true },
      { id: 'q1', isInitial: false, isFinal: true },
      { id: 'q2', isInitial: false, isFinal: true }
    ],
    transitions: [
      { from: 'q0', to: 'q0', symbol: 'b' },
      { from: 'q0', to: 'q1', symbol: 'a' },
      { from: 'q1', to: 'q0', symbol: 'b' },
      { from: 'q1', to: 'q2', symbol: 'a' },
      { from: 'q2', to: 'q0', symbol: 'b' }
    ]
  },
  19: { // L19: L = {w | número ímpar de 'ab'}
    nodes: [
      { id: 'q0', isInitial: true, isFinal: false },
      { id: 'q1', isInitial: false, isFinal: false },
      { id: 'q2', isInitial: false, isFinal: true },
      { id: 'q3', isInitial: false, isFinal: false }
    ],
    transitions: [
      { from: 'q0', to: 'q0', symbol: 'b' },
      { from: 'q0', to: 'q1', symbol: 'a' },
      { from: 'q1', to: 'q1', symbol: 'a' },
      { from: 'q1', to: 'q2', symbol: 'b' },
      { from: 'q2', to: 'q2', symbol: 'b' },
      { from: 'q2', to: 'q3', symbol: 'a' },
      { from: 'q3', to: 'q3', symbol: 'a' },
      { from: 'q3', to: 'q0', symbol: 'b' }
    ]
  },
  20: { // L20: L = {w | |w|≥2 e a's precedem b's}
    nodes: [
      { id: 'q0', isInitial: true, isFinal: false },
      { id: 'qa', isInitial: false, isFinal: false },
      { id: 'qaa', isInitial: false, isFinal: true },
      { id: 'qab', isInitial: false, isFinal: true },
      { id: 'qb', isInitial: false, isFinal: false },
      { id: 'qbb', isInitial: false, isFinal: true }
    ],
    transitions: [
      { from: 'q0', to: 'qa', symbol: 'a' },
      { from: 'q0', to: 'qb', symbol: 'b' },
      { from: 'qa', to: 'qaa', symbol: 'a' },
      { from: 'qa', to: 'qab', symbol: 'b' },
      { from: 'qaa', to: 'qaa', symbol: 'a' },
      { from: 'qaa', to: 'qab', symbol: 'b' },
      { from: 'qab', to: 'qab', symbol: 'b' },
      { from: 'qb', to: 'qbb', symbol: 'b' },
      { from: 'qbb', to: 'qbb', symbol: 'b' }
    ]
  },
  21: { // L21: L = {w | a*b*c*d*}
    nodes: [
      { id: 'q0', isInitial: true, isFinal: true },
      { id: 'q1', isInitial: false, isFinal: true },
      { id: 'q2', isInitial: false, isFinal: true },
      { id: 'q3', isInitial: false, isFinal: true }
    ],
    transitions: [
      { from: 'q0', to: 'q0', symbol: 'a' },
      { from: 'q0', to: 'q1', symbol: 'b' },
      { from: 'q1', to: 'q1', symbol: 'b' },
      { from: 'q1', to: 'q2', symbol: 'c' },
      { from: 'q2', to: 'q2', symbol: 'c' },
      { from: 'q2', to: 'q3', symbol: 'd' },
      { from: 'q3', to: 'q3', symbol: 'd' }
    ]
  },
  22: { // L22: L = {w | w é número binário par (termina em 0)}
    nodes: [
      { id: 'q0', isInitial: true, isFinal: true },
      { id: 'q1', isInitial: false, isFinal: false }
    ],
    transitions: [
      { from: 'q0', to: 'q0', symbol: '0' },
      { from: 'q0', to: 'q1', symbol: '1' },
      { from: 'q1', to: 'q0', symbol: '0' },
      { from: 'q1', to: 'q1', symbol: '1' }
    ]
  },
  23: { // L23: L = {w | w é número binário ímpar (termina em 1)}
    nodes: [
      { id: 'q0', isInitial: true, isFinal: false },
      { id: 'q1', isInitial: false, isFinal: true }
    ],
    transitions: [
      { from: 'q0', to: 'q0', symbol: '0' },
      { from: 'q0', to: 'q1', symbol: '1' },
      { from: 'q1', to: 'q0', symbol: '0' },
      { from: 'q1', to: 'q1', symbol: '1' }
    ]
  },
  24: { // L24: L = {w | |w| = 3}
    nodes: [
      { id: 'q0', isInitial: true, isFinal: false },
      { id: 'q1', isInitial: false, isFinal: false },
      { id: 'q2', isInitial: false, isFinal: false },
      { id: 'q3', isInitial: false, isFinal: true }
    ],
    transitions: [
      { from: 'q0', to: 'q1', symbol: '0,1' },
      { from: 'q1', to: 'q2', symbol: '0,1' },
      { from: 'q2', to: 'q3', symbol: '0,1' }
    ]
  },
  25: { // L25: L = {w | |w| < 3}
    nodes: [
      { id: 'q0', isInitial: true, isFinal: true },
      { id: 'q1', isInitial: false, isFinal: true },
      { id: 'q2', isInitial: false, isFinal: true }
    ],
    transitions: [
      { from: 'q0', to: 'q1', symbol: '0,1' },
      { from: 'q1', to: 'q2', symbol: '0,1' }
    ]
  },
  26: { // L26: L = {w | |w| > 3}
    nodes: [
      { id: 'q0', isInitial: true, isFinal: false },
      { id: 'q1', isInitial: false, isFinal: false },
      { id: 'q2', isInitial: false, isFinal: false },
      { id: 'q3', isInitial: false, isFinal: false },
      { id: 'q4', isInitial: false, isFinal: true }
    ],
    transitions: [
      { from: 'q0', to: 'q1', symbol: '0,1' },
      { from: 'q1', to: 'q2', symbol: '0,1' },
      { from: 'q2', to: 'q3', symbol: '0,1' },
      { from: 'q3', to: 'q4', symbol: '0,1' },
      { from: 'q4', to: 'q4', symbol: '0,1' }
    ]
  },
  27: { // L27: L = {w | |w| múltiplo de 3}
    nodes: [
      { id: 'q0', isInitial: true, isFinal: true },
      { id: 'q1', isInitial: false, isFinal: false },
      { id: 'q2', isInitial: false, isFinal: false }
    ],
    transitions: [
      { from: 'q0', to: 'q1', symbol: '0,1' },
      { from: 'q1', to: 'q2', symbol: '0,1' },
      { from: 'q2', to: 'q0', symbol: '0,1' }
    ]
  },
  28: { // L28: L = {w | cada 0 é seguido de no mínimo dois 1's}
    nodes: [
      { id: 'q0', isInitial: true, isFinal: true },
      { id: 'q1', isInitial: false, isFinal: false },
      { id: 'q2', isInitial: false, isFinal: true }
    ],
    transitions: [
      { from: 'q0', to: 'q0', symbol: '1' },
      { from: 'q0', to: 'q1', symbol: '0' },
      { from: 'q1', to: 'q2', symbol: '1' },
      { from: 'q2', to: 'q2', symbol: '1' },
      { from: 'q2', to: 'q1', symbol: '0' }
    ]
  },
  29: { // L29: L = {w | primeiros 4 símbolos têm ≥ dois 1's}
    nodes: [
      { id: 's00', isInitial: true, isFinal: false },
      { id: 's01', isInitial: false, isFinal: false },
      { id: 's10', isInitial: false, isFinal: false },
      { id: 's11', isInitial: false, isFinal: true },
      { id: 'ok', isInitial: false, isFinal: true }
    ],
    transitions: [
      { from: 's00', to: 's00', symbol: '0' },
      { from: 's00', to: 's01', symbol: '1' },
      { from: 's01', to: 's10', symbol: '0' },
      { from: 's01', to: 's11', symbol: '1' },
      { from: 's10', to: 's10', symbol: '0' },
      { from: 's10', to: 's11', symbol: '1' },
      { from: 's11', to: 'ok', symbol: '0,1' },
      { from: 'ok', to: 'ok', symbol: '0,1' }
    ]
  },
  30: { // L30: L = {w | w NÃO contém 000 nem 111}
    nodes: [
      { id: 'q0', isInitial: true, isFinal: true },
      { id: 'q1', isInitial: false, isFinal: true },
      { id: 'q2', isInitial: false, isFinal: true },
      { id: 'q3', isInitial: false, isFinal: true },
      { id: 'q4', isInitial: false, isFinal: true }
    ],
    transitions: [
      { from: 'q0', to: 'q1', symbol: '0' },
      { from: 'q0', to: 'q3', symbol: '1' },
      { from: 'q1', to: 'q2', symbol: '0' },
      { from: 'q1', to: 'q3', symbol: '1' },
      { from: 'q2', to: 'q3', symbol: '1' },
      { from: 'q3', to: 'q4', symbol: '1' },
      { from: 'q3', to: 'q1', symbol: '0' },
      { from: 'q4', to: 'q1', symbol: '0' }
    ]
  },
  31: { // L31: L = {w | últimos 3 símbolos NÃO são 000}
    nodes: [
      { id: 'q0', isInitial: true, isFinal: true },
      { id: 'q1', isInitial: false, isFinal: true },
      { id: 'q2', isInitial: false, isFinal: true },
      { id: 'q3', isInitial: false, isFinal: false }
    ],
    transitions: [
      { from: 'q0', to: 'q0', symbol: '1' },
      { from: 'q0', to: 'q1', symbol: '0' },
      { from: 'q1', to: 'q0', symbol: '1' },
      { from: 'q1', to: 'q2', symbol: '0' },
      { from: 'q2', to: 'q0', symbol: '1' },
      { from: 'q2', to: 'q3', symbol: '0' },
      { from: 'q3', to: 'q3', symbol: '0' },
      { from: 'q3', to: 'q0', symbol: '1' }
    ]
  },
  32: { // L32: L = {w ∈ {0,1,2}* | par de 0's, 1's e 2's} - 8 estados
    nodes: [
      { id: 'ppp', isInitial: true, isFinal: true },
      { id: 'ppi', isInitial: false, isFinal: false },
      { id: 'pip', isInitial: false, isFinal: false },
      { id: 'pii', isInitial: false, isFinal: false },
      { id: 'ipp', isInitial: false, isFinal: false },
      { id: 'ipi', isInitial: false, isFinal: false },
      { id: 'iip', isInitial: false, isFinal: false },
      { id: 'iii', isInitial: false, isFinal: false }
    ],
    transitions: [
      { from: 'ppp', to: 'ipp', symbol: '0' },
      { from: 'ppp', to: 'pip', symbol: '1' },
      { from: 'ppp', to: 'ppi', symbol: '2' },
      { from: 'ipp', to: 'ppp', symbol: '0' },
      { from: 'ipp', to: 'iip', symbol: '1' },
      { from: 'ipp', to: 'ipi', symbol: '2' },
      { from: 'pip', to: 'iip', symbol: '0' },
      { from: 'pip', to: 'ppp', symbol: '1' },
      { from: 'pip', to: 'pii', symbol: '2' },
      { from: 'ppi', to: 'ipi', symbol: '0' },
      { from: 'ppi', to: 'pii', symbol: '1' },
      { from: 'ppi', to: 'ppp', symbol: '2' },
      { from: 'iip', to: 'pip', symbol: '0' },
      { from: 'iip', to: 'ipp', symbol: '1' },
      { from: 'iip', to: 'iii', symbol: '2' },
      { from: 'ipi', to: 'ppi', symbol: '0' },
      { from: 'ipi', to: 'iii', symbol: '1' },
      { from: 'ipi', to: 'ipp', symbol: '2' },
      { from: 'pii', to: 'iii', symbol: '0' },
      { from: 'pii', to: 'ppi', symbol: '1' },
      { from: 'pii', to: 'pip', symbol: '2' },
      { from: 'iii', to: 'pii', symbol: '0' },
      { from: 'iii', to: 'ipi', symbol: '1' },
      { from: 'iii', to: 'iip', symbol: '2' }
    ]
  },
  33: { // L33: L = {w | prefixo '001'}
    nodes: [
      { id: 'q0', isInitial: true, isFinal: false },
      { id: 'q1', isInitial: false, isFinal: false },
      { id: 'q2', isInitial: false, isFinal: false },
      { id: 'q3', isInitial: false, isFinal: true }
    ],
    transitions: [
      { from: 'q0', to: 'q1', symbol: '0' },
      { from: 'q1', to: 'q2', symbol: '0' },
      { from: 'q2', to: 'q3', symbol: '1' },
      { from: 'q3', to: 'q3', symbol: '0,1' }
    ]
  },
  34: { // L34: L = {w | sufixo '1010'}
    nodes: [
      { id: 'q0', isInitial: true, isFinal: false },
      { id: 'q1', isInitial: false, isFinal: false },
      { id: 'q2', isInitial: false, isFinal: false },
      { id: 'q3', isInitial: false, isFinal: false },
      { id: 'q4', isInitial: false, isFinal: true }
    ],
    transitions: [
      { from: 'q0', to: 'q0', symbol: '0' },
      { from: 'q0', to: 'q1', symbol: '1' },
      { from: 'q1', to: 'q2', symbol: '0' },
      { from: 'q1', to: 'q1', symbol: '1' },
      { from: 'q2', to: 'q0', symbol: '0' },
      { from: 'q2', to: 'q3', symbol: '1' },
      { from: 'q3', to: 'q4', symbol: '0' },
      { from: 'q3', to: 'q1', symbol: '1' },
      { from: 'q4', to: 'q1', symbol: '1' },
      { from: 'q4', to: 'q0', symbol: '0' }
    ]
  },
  35: { // L35a: L = {w | contém '1111' como subpalavra}
    nodes: [
      { id: 'q0', isInitial: true, isFinal: false },
      { id: 'q1', isInitial: false, isFinal: false },
      { id: 'q2', isInitial: false, isFinal: false },
      { id: 'q3', isInitial: false, isFinal: false },
      { id: 'q4', isInitial: false, isFinal: true }
    ],
    transitions: [
      { from: 'q0', to: 'q0', symbol: '0' },
      { from: 'q0', to: 'q1', symbol: '1' },
      { from: 'q1', to: 'q0', symbol: '0' },
      { from: 'q1', to: 'q2', symbol: '1' },
      { from: 'q2', to: 'q0', symbol: '0' },
      { from: 'q2', to: 'q3', symbol: '1' },
      { from: 'q3', to: 'q0', symbol: '0' },
      { from: 'q3', to: 'q4', symbol: '1' },
      { from: 'q4', to: 'q4', symbol: '0,1' }
    ]
  },
  36: { // L35b: L = {w | prefixo 'abc'}
    nodes: [
      { id: 'q0', isInitial: true, isFinal: false },
      { id: 'q1', isInitial: false, isFinal: false },
      { id: 'q2', isInitial: false, isFinal: false },
      { id: 'q3', isInitial: false, isFinal: true }
    ],
    transitions: [
      { from: 'q0', to: 'q1', symbol: 'a' },
      { from: 'q1', to: 'q2', symbol: 'b' },
      { from: 'q2', to: 'q3', symbol: 'c' },
      { from: 'q3', to: 'q3', symbol: 'a,b,c,d' }
    ]
  },
  37: { // L36: L = {w | sufixo 'dcba'}
    nodes: [
      { id: 'q0', isInitial: true, isFinal: false },
      { id: 'q1', isInitial: false, isFinal: false },
      { id: 'q2', isInitial: false, isFinal: false },
      { id: 'q3', isInitial: false, isFinal: false },
      { id: 'q4', isInitial: false, isFinal: true }
    ],
    transitions: [
      { from: 'q0', to: 'q0', symbol: 'a,b,c' },
      { from: 'q0', to: 'q1', symbol: 'd' },
      { from: 'q1', to: 'q2', symbol: 'c' },
      { from: 'q1', to: 'q1', symbol: 'd' },
      { from: 'q2', to: 'q3', symbol: 'b' },
      { from: 'q2', to: 'q1', symbol: 'd' },
      { from: 'q3', to: 'q4', symbol: 'a' },
      { from: 'q3', to: 'q1', symbol: 'd' },
      { from: 'q4', to: 'q0', symbol: 'a,b,c' },
      { from: 'q4', to: 'q1', symbol: 'd' }
    ]
  },
  38: { // L37: L = {w | contém 'abcd' ou 'dcba'}
    nodes: [
      { id: 'q0', isInitial: true, isFinal: false },
      { id: 'qa1', isInitial: false, isFinal: false },
      { id: 'qa2', isInitial: false, isFinal: false },
      { id: 'qa3', isInitial: false, isFinal: false },
      { id: 'qd1', isInitial: false, isFinal: false },
      { id: 'qd2', isInitial: false, isFinal: false },
      { id: 'qd3', isInitial: false, isFinal: false },
      { id: 'qf', isInitial: false, isFinal: true }
    ],
    transitions: [
      { from: 'q0', to: 'q0', symbol: 'b,c,d' },
      { from: 'q0', to: 'qa1', symbol: 'a' },
      { from: 'q0', to: 'qd1', symbol: 'd' },
      { from: 'qa1', to: 'qa2', symbol: 'b' },
      { from: 'qa2', to: 'qa3', symbol: 'c' },
      { from: 'qa3', to: 'qf', symbol: 'd' },
      { from: 'qd1', to: 'qd2', symbol: 'c' },
      { from: 'qd2', to: 'qd3', symbol: 'b' },
      { from: 'qd3', to: 'qf', symbol: 'a' },
      { from: 'qf', to: 'qf', symbol: 'a,b,c,d' }
    ]
  },
  39: { // L38: L = {(a+b)* | |a| par, |b| ímpar}
    nodes: [
      { id: 'pp', isInitial: true, isFinal: false },
      { id: 'pi', isInitial: false, isFinal: true },
      { id: 'ip', isInitial: false, isFinal: false },
      { id: 'ii', isInitial: false, isFinal: false }
    ],
    transitions: [
      { from: 'pp', to: 'ip', symbol: 'a' },
      { from: 'pp', to: 'pi', symbol: 'b' },
      { from: 'pi', to: 'ii', symbol: 'a' },
      { from: 'pi', to: 'pp', symbol: 'b' },
      { from: 'ip', to: 'pp', symbol: 'a' },
      { from: 'ip', to: 'ii', symbol: 'b' },
      { from: 'ii', to: 'pi', symbol: 'a' },
      { from: 'ii', to: 'ip', symbol: 'b' }
    ]
  },
  40: { // L39: L = {(a+b)* | |a| ímpar, |b| ímpar}
    nodes: [
      { id: 'pp', isInitial: true, isFinal: false },
      { id: 'pi', isInitial: false, isFinal: false },
      { id: 'ip', isInitial: false, isFinal: false },
      { id: 'ii', isInitial: false, isFinal: true }
    ],
    transitions: [
      { from: 'pp', to: 'ip', symbol: 'a' },
      { from: 'pp', to: 'pi', symbol: 'b' },
      { from: 'pi', to: 'ii', symbol: 'a' },
      { from: 'pi', to: 'pp', symbol: 'b' },
      { from: 'ip', to: 'pp', symbol: 'a' },
      { from: 'ip', to: 'ii', symbol: 'b' },
      { from: 'ii', to: 'pi', symbol: 'a' },
      { from: 'ii', to: 'ip', symbol: 'b' }
    ]
  },
  41: { // L40: L = {a^n b^2m d c^3p d | n,m,p ≥ 0}
    nodes: [
      { id: 'q0', isInitial: true, isFinal: false },
      { id: 'q1', isInitial: false, isFinal: false },
      { id: 'q2', isInitial: false, isFinal: false },
      { id: 'q3', isInitial: false, isFinal: false },
      { id: 'q4', isInitial: false, isFinal: false },
      { id: 'q5', isInitial: false, isFinal: true }
    ],
    transitions: [
      { from: 'q0', to: 'q0', symbol: 'a' },
      { from: 'q0', to: 'q1', symbol: 'b' },
      { from: 'q1', to: 'q2', symbol: 'b' },
      { from: 'q2', to: 'q1', symbol: 'b' },
      { from: 'q0', to: 'q3', symbol: 'd' },
      { from: 'q2', to: 'q3', symbol: 'd' },
      { from: 'q3', to: 'q4', symbol: 'c' },
      { from: 'q4', to: 'q5', symbol: 'c' },
      { from: 'q5', to: 'q4', symbol: 'c' },
      { from: 'q3', to: 'q5', symbol: 'd' },
      { from: 'q5', to: 'q5', symbol: 'd' }
    ]
  },
  42: { // L41: L = {a(dcb)^n a^m (bb)^p | n>0, m>0, p≥0}
    nodes: [
      { id: 'q0', isInitial: true, isFinal: false },
      { id: 'q1', isInitial: false, isFinal: false },
      { id: 'q2', isInitial: false, isFinal: false },
      { id: 'q3', isInitial: false, isFinal: false },
      { id: 'q4', isInitial: false, isFinal: true },
      { id: 'q5', isInitial: false, isFinal: false },
      { id: 'q6', isInitial: false, isFinal: true }
    ],
    transitions: [
      { from: 'q0', to: 'q1', symbol: 'a' },
      { from: 'q1', to: 'q2', symbol: 'd' },
      { from: 'q2', to: 'q3', symbol: 'c' },
      { from: 'q3', to: 'q1', symbol: 'b' },
      { from: 'q1', to: 'q4', symbol: 'a' },
      { from: 'q4', to: 'q4', symbol: 'a' },
      { from: 'q4', to: 'q5', symbol: 'b' },
      { from: 'q5', to: 'q6', symbol: 'b' },
      { from: 'q6', to: 'q5', symbol: 'b' }
    ]
  },
  43: { // L42: L = {a^n b^2m cc d^p | n>0 (ímpar), m,p ≥ 0}
    nodes: [
      { id: 'q0', isInitial: true, isFinal: false },
      { id: 'q1', isInitial: false, isFinal: false },
      { id: 'q2', isInitial: false, isFinal: false },
      { id: 'q3', isInitial: false, isFinal: false },
      { id: 'q4', isInitial: false, isFinal: false },
      { id: 'q5', isInitial: false, isFinal: true }
    ],
    transitions: [
      { from: 'q0', to: 'q1', symbol: 'a' },
      { from: 'q1', to: 'q0', symbol: 'a' },
      { from: 'q1', to: 'q2', symbol: 'b' },
      { from: 'q2', to: 'q3', symbol: 'b' },
      { from: 'q3', to: 'q2', symbol: 'b' },
      { from: 'q1', to: 'q4', symbol: 'c' },
      { from: 'q3', to: 'q4', symbol: 'c' },
      { from: 'q4', to: 'q5', symbol: 'c' },
      { from: 'q5', to: 'q5', symbol: 'd' }
    ]
  },
  44: { // L43: L = {w | subpalavra 'ab' e sufixo 'cd'}
    nodes: [
      { id: 'q0', isInitial: true, isFinal: false },
      { id: 'q1', isInitial: false, isFinal: false },
      { id: 'q2', isInitial: false, isFinal: false },
      { id: 'q3', isInitial: false, isFinal: false },
      { id: 'q4', isInitial: false, isFinal: true }
    ],
    transitions: [
      { from: 'q0', to: 'q0', symbol: 'b,c,d' },
      { from: 'q0', to: 'q1', symbol: 'a' },
      { from: 'q1', to: 'q2', symbol: 'b' },
      { from: 'q1', to: 'q1', symbol: 'a' },
      { from: 'q2', to: 'q2', symbol: 'a,b,d' },
      { from: 'q2', to: 'q3', symbol: 'c' },
      { from: 'q3', to: 'q4', symbol: 'd' },
      { from: 'q3', to: 'q3', symbol: 'a,b,c' },
      { from: 'q4', to: 'q2', symbol: 'a,b' },
      { from: 'q4', to: 'q3', symbol: 'c' },
      { from: 'q4', to: 'q4', symbol: 'd' }
    ]
  },
  45: { // L44: L = {w | prefixo 'abcd' e sufixo 'dcba'}
    nodes: [
      { id: 'q0', isInitial: true, isFinal: false },
      { id: 'q1', isInitial: false, isFinal: false },
      { id: 'q2', isInitial: false, isFinal: false },
      { id: 'q3', isInitial: false, isFinal: false },
      { id: 'q4', isInitial: false, isFinal: false },
      { id: 'q5', isInitial: false, isFinal: false },
      { id: 'q6', isInitial: false, isFinal: false },
      { id: 'q7', isInitial: false, isFinal: false },
      { id: 'q8', isInitial: false, isFinal: true }
    ],
    transitions: [
      { from: 'q0', to: 'q1', symbol: 'a' },
      { from: 'q1', to: 'q2', symbol: 'b' },
      { from: 'q2', to: 'q3', symbol: 'c' },
      { from: 'q3', to: 'q4', symbol: 'd' },
      { from: 'q4', to: 'q4', symbol: 'a,b,c' },
      { from: 'q4', to: 'q5', symbol: 'd' },
      { from: 'q5', to: 'q6', symbol: 'c' },
      { from: 'q5', to: 'q5', symbol: 'd' },
      { from: 'q6', to: 'q7', symbol: 'b' },
      { from: 'q7', to: 'q8', symbol: 'a' }
    ]
  },
  46: { // L45: L = {w | pref 'abcd', sub 'cccc', suf 'dcba'}
    nodes: [
      { id: 'q0', isInitial: true, isFinal: false },
      { id: 'q1', isInitial: false, isFinal: false },
      { id: 'q2', isInitial: false, isFinal: false },
      { id: 'q3', isInitial: false, isFinal: false },
      { id: 'q4', isInitial: false, isFinal: false },
      { id: 'q5', isInitial: false, isFinal: false },
      { id: 'q6', isInitial: false, isFinal: false },
      { id: 'q7', isInitial: false, isFinal: false },
      { id: 'q8', isInitial: false, isFinal: false },
      { id: 'q9', isInitial: false, isFinal: false },
      { id: 'q10', isInitial: false, isFinal: false },
      { id: 'q11', isInitial: false, isFinal: true }
    ],
    transitions: [
      { from: 'q0', to: 'q1', symbol: 'a' },
      { from: 'q1', to: 'q2', symbol: 'b' },
      { from: 'q2', to: 'q3', symbol: 'c' },
      { from: 'q3', to: 'q4', symbol: 'd' },
      { from: 'q4', to: 'q4', symbol: 'a,b,d' },
      { from: 'q4', to: 'q5', symbol: 'c' },
      { from: 'q5', to: 'q6', symbol: 'c' },
      { from: 'q6', to: 'q7', symbol: 'c' },
      { from: 'q7', to: 'q8', symbol: 'c' },
      { from: 'q8', to: 'q8', symbol: 'a,b,c' },
      { from: 'q8', to: 'q9', symbol: 'd' },
      { from: 'q9', to: 'q10', symbol: 'c' },
      { from: 'q10', to: 'q11', symbol: 'b' },
      { from: 'q11', to: 'q11', symbol: 'a' }
    ]
  },
  47: { // L46: L = {(a+b+c)* | par de a, b e c} - 8 estados
    nodes: [
      { id: 'ppp', isInitial: true, isFinal: true },
      { id: 'ppi', isInitial: false, isFinal: false },
      { id: 'pip', isInitial: false, isFinal: false },
      { id: 'pii', isInitial: false, isFinal: false },
      { id: 'ipp', isInitial: false, isFinal: false },
      { id: 'ipi', isInitial: false, isFinal: false },
      { id: 'iip', isInitial: false, isFinal: false },
      { id: 'iii', isInitial: false, isFinal: false }
    ],
    transitions: [
      { from: 'ppp', to: 'ipp', symbol: 'a' },
      { from: 'ppp', to: 'pip', symbol: 'b' },
      { from: 'ppp', to: 'ppi', symbol: 'c' },
      { from: 'ipp', to: 'ppp', symbol: 'a' },
      { from: 'ipp', to: 'iip', symbol: 'b' },
      { from: 'ipp', to: 'ipi', symbol: 'c' },
      { from: 'pip', to: 'iip', symbol: 'a' },
      { from: 'pip', to: 'ppp', symbol: 'b' },
      { from: 'pip', to: 'pii', symbol: 'c' },
      { from: 'ppi', to: 'ipi', symbol: 'a' },
      { from: 'ppi', to: 'pii', symbol: 'b' },
      { from: 'ppi', to: 'ppp', symbol: 'c' },
      { from: 'iip', to: 'pip', symbol: 'a' },
      { from: 'iip', to: 'ipp', symbol: 'b' },
      { from: 'iip', to: 'iii', symbol: 'c' },
      { from: 'ipi', to: 'ppi', symbol: 'a' },
      { from: 'ipi', to: 'iii', symbol: 'b' },
      { from: 'ipi', to: 'ipp', symbol: 'c' },
      { from: 'pii', to: 'iii', symbol: 'a' },
      { from: 'pii', to: 'ppi', symbol: 'b' },
      { from: 'pii', to: 'pip', symbol: 'c' },
      { from: 'iii', to: 'pii', symbol: 'a' },
      { from: 'iii', to: 'ipi', symbol: 'b' },
      { from: 'iii', to: 'iip', symbol: 'c' }
    ]
  },
  48: { // L47: revisão L40
    nodes: [
      { id: 'q0', isInitial: true, isFinal: false },
      { id: 'q1', isInitial: false, isFinal: false },
      { id: 'q2', isInitial: false, isFinal: false },
      { id: 'q3', isInitial: false, isFinal: false },
      { id: 'q4', isInitial: false, isFinal: false },
      { id: 'q5', isInitial: false, isFinal: true }
    ],
    transitions: [
      { from: 'q0', to: 'q0', symbol: 'a' },
      { from: 'q0', to: 'q1', symbol: 'b' },
      { from: 'q1', to: 'q2', symbol: 'b' },
      { from: 'q2', to: 'q1', symbol: 'b' },
      { from: 'q0', to: 'q3', symbol: 'd' },
      { from: 'q2', to: 'q3', symbol: 'd' },
      { from: 'q3', to: 'q4', symbol: 'c' },
      { from: 'q4', to: 'q5', symbol: 'c' },
      { from: 'q5', to: 'q4', symbol: 'c' },
      { from: 'q3', to: 'q5', symbol: 'd' },
      { from: 'q5', to: 'q5', symbol: 'd' }
    ]
  },
  49: { // L48: L = {w ∈ {0,1}* | zeros pares e uns ímpares}
    nodes: [
      { id: 'pp', isInitial: true, isFinal: false },
      { id: 'pi', isInitial: false, isFinal: true },
      { id: 'ip', isInitial: false, isFinal: false },
      { id: 'ii', isInitial: false, isFinal: false }
    ],
    transitions: [
      { from: 'pp', to: 'ip', symbol: '0' },
      { from: 'pp', to: 'pi', symbol: '1' },
      { from: 'pi', to: 'ii', symbol: '0' },
      { from: 'pi', to: 'pp', symbol: '1' },
      { from: 'ip', to: 'pp', symbol: '0' },
      { from: 'ip', to: 'ii', symbol: '1' },
      { from: 'ii', to: 'pi', symbol: '0' },
      { from: 'ii', to: 'ip', symbol: '1' }
    ]
  },
  50: { // L49: L = {a^n a c^m (ab+ba) c a^2p | n≥0, m>0, p>0}
    nodes: [
      { id: 'q0', isInitial: true, isFinal: false },
      { id: 'q1', isInitial: false, isFinal: false },
      { id: 'q2', isInitial: false, isFinal: false },
      { id: 'q3', isInitial: false, isFinal: false },
      { id: 'q4', isInitial: false, isFinal: false },
      { id: 'q5', isInitial: false, isFinal: false },
      { id: 'q6', isInitial: false, isFinal: false },
      { id: 'q7', isInitial: false, isFinal: false },
      { id: 'q8', isInitial: false, isFinal: true }
    ],
    transitions: [
      { from: 'q0', to: 'q0', symbol: 'a' },
      { from: 'q0', to: 'q1', symbol: 'a' },
      { from: 'q1', to: 'q2', symbol: 'c' },
      { from: 'q2', to: 'q2', symbol: 'c' },
      { from: 'q2', to: 'q3', symbol: 'a' },
      { from: 'q2', to: 'q4', symbol: 'b' },
      { from: 'q3', to: 'q5', symbol: 'b' },
      { from: 'q4', to: 'q5', symbol: 'a' },
      { from: 'q5', to: 'q6', symbol: 'c' },
      { from: 'q6', to: 'q7', symbol: 'a' },
      { from: 'q7', to: 'q8', symbol: 'a' },
      { from: 'q8', to: 'q7', symbol: 'a' }
    ]
  },
  51: { // L50: L = {a^n b^m c^p | n,p>0, m≥0, (n+p) ímpar}
    nodes: [
      { id: 'q0', isInitial: true, isFinal: false },
      { id: 'ai', isInitial: false, isFinal: false },
      { id: 'ae', isInitial: false, isFinal: false },
      { id: 'bi', isInitial: false, isFinal: false },
      { id: 'be', isInitial: false, isFinal: false },
      { id: 'ci', isInitial: false, isFinal: false },
      { id: 'ce', isInitial: false, isFinal: true }
    ],
    transitions: [
      { from: 'q0', to: 'ai', symbol: 'a' },
      { from: 'ai', to: 'ae', symbol: 'a' },
      { from: 'ae', to: 'ai', symbol: 'a' },
      { from: 'ai', to: 'bi', symbol: 'b' },
      { from: 'ae', to: 'be', symbol: 'b' },
      { from: 'bi', to: 'bi', symbol: 'b' },
      { from: 'be', to: 'be', symbol: 'b' },
      { from: 'ai', to: 'ci', symbol: 'c' },
      { from: 'ae', to: 'ce', symbol: 'c' },
      { from: 'bi', to: 'ci', symbol: 'c' },
      { from: 'be', to: 'ce', symbol: 'c' },
      { from: 'ci', to: 'ce', symbol: 'c' },
      { from: 'ce', to: 'ci', symbol: 'c' }
    ]
  },
  52: { // L52: L = {a^n b^m c^p | n>0 (par), m (ímpar), p (par)}
    nodes: [
      { id: 'q0', isInitial: true, isFinal: false },
      { id: 'ao', isInitial: false, isFinal: false },
      { id: 'ae', isInitial: false, isFinal: false },
      { id: 'bo', isInitial: false, isFinal: false },
      { id: 'be', isInitial: false, isFinal: true },
      { id: 'co', isInitial: false, isFinal: false },
      { id: 'ce', isInitial: false, isFinal: true }
    ],
    transitions: [
      { from: 'q0', to: 'ao', symbol: 'a' },
      { from: 'ao', to: 'ae', symbol: 'a' },
      { from: 'ae', to: 'ao', symbol: 'a' },
      { from: 'ae', to: 'bo', symbol: 'b' },
      { from: 'bo', to: 'be', symbol: 'b' },
      { from: 'be', to: 'bo', symbol: 'b' },
      { from: 'ae', to: 'co', symbol: 'c' },
      { from: 'bo', to: 'co', symbol: 'c' },
      { from: 'be', to: 'ce', symbol: 'c' },
      { from: 'co', to: 'ce', symbol: 'c' },
      { from: 'ce', to: 'co', symbol: 'c' }
    ]
  },
  53: { // L53: L = {w | cada b é seguido de pelo menos um c}
    nodes: [
      { id: 'q0', isInitial: true, isFinal: true },
      { id: 'q1', isInitial: false, isFinal: false }
    ],
    transitions: [
      { from: 'q0', to: 'q0', symbol: 'a,c' },
      { from: 'q0', to: 'q1', symbol: 'b' },
      { from: 'q1', to: 'q0', symbol: 'c' }
    ]
  },
  54: { // L54: L = {w ∈ {a,b,c}* | |w|a, |w|b, |w|c todos ímpares} — cubo de paridade, único final: iii
    nodes: [
      { id: 'ppp', isInitial: true,  isFinal: false },
      { id: 'ipp', isInitial: false, isFinal: false },
      { id: 'pip', isInitial: false, isFinal: false },
      { id: 'iip', isInitial: false, isFinal: false },
      { id: 'ppi', isInitial: false, isFinal: false },
      { id: 'ipi', isInitial: false, isFinal: false },
      { id: 'pii', isInitial: false, isFinal: false },
      { id: 'iii', isInitial: false, isFinal: true  }
    ],
    transitions: [
      { from: 'ppp', to: 'ipp', symbol: 'a' }, { from: 'ipp', to: 'ppp', symbol: 'a' },
      { from: 'pip', to: 'iip', symbol: 'a' }, { from: 'iip', to: 'pip', symbol: 'a' },
      { from: 'ppi', to: 'ipi', symbol: 'a' }, { from: 'ipi', to: 'ppi', symbol: 'a' },
      { from: 'pii', to: 'iii', symbol: 'a' }, { from: 'iii', to: 'pii', symbol: 'a' },
      { from: 'ppp', to: 'pip', symbol: 'b' }, { from: 'pip', to: 'ppp', symbol: 'b' },
      { from: 'ipp', to: 'iip', symbol: 'b' }, { from: 'iip', to: 'ipp', symbol: 'b' },
      { from: 'ppi', to: 'pii', symbol: 'b' }, { from: 'pii', to: 'ppi', symbol: 'b' },
      { from: 'ipi', to: 'iii', symbol: 'b' }, { from: 'iii', to: 'ipi', symbol: 'b' },
      { from: 'ppp', to: 'ppi', symbol: 'c' }, { from: 'ppi', to: 'ppp', symbol: 'c' },
      { from: 'ipp', to: 'ipi', symbol: 'c' }, { from: 'ipi', to: 'ipp', symbol: 'c' },
      { from: 'pip', to: 'pii', symbol: 'c' }, { from: 'pii', to: 'pip', symbol: 'c' },
      { from: 'iip', to: 'iii', symbol: 'c' }, { from: 'iii', to: 'iip', symbol: 'c' }
    ]
  },
  56: { // L56 "trabalho": a^(n+3) (bc+cb)(ddd)^m aba e^p a(bc)^q | n,m,p≥0, q>0 — DFA determinístico
    nodes: [
      { id: 'q0',  isInitial: true,  isFinal: false },
      { id: 'q1',  isInitial: false, isFinal: false },
      { id: 'q2',  isInitial: false, isFinal: false },
      { id: 'q3',  isInitial: false, isFinal: false },
      { id: 'q4',  isInitial: false, isFinal: false },
      { id: 'q5',  isInitial: false, isFinal: false },
      { id: 'q6',  isInitial: false, isFinal: false },
      { id: 'q7',  isInitial: false, isFinal: false },
      { id: 'q8',  isInitial: false, isFinal: false },
      { id: 'q9',  isInitial: false, isFinal: false },
      { id: 'q10', isInitial: false, isFinal: false },
      { id: 'q11', isInitial: false, isFinal: false },
      { id: 'q12', isInitial: false, isFinal: false },
      { id: 'q13', isInitial: false, isFinal: false },
      { id: 'q14', isInitial: false, isFinal: true  }
    ],
    transitions: [
      { from: 'q0', to: 'q1', symbol: 'a' },   // prefixo: pelo menos 3 'a'
      { from: 'q1', to: 'q2', symbol: 'a' },
      { from: 'q2', to: 'q3', symbol: 'a' },
      { from: 'q3', to: 'q3', symbol: 'a' },   // a^n extra (n≥0)
      { from: 'q3', to: 'q4', symbol: 'b' },   // ramo 'bc'
      { from: 'q4', to: 'q5', symbol: 'c' },
      { from: 'q3', to: 'q9', symbol: 'c' },   // ramo 'cb'
      { from: 'q9', to: 'q5', symbol: 'b' },
      { from: 'q5', to: 'q10', symbol: 'd' },  // ciclo (ddd)^m
      { from: 'q10', to: 'q11', symbol: 'd' },
      { from: 'q11', to: 'q5', symbol: 'd' },
      { from: 'q5', to: 'q6', symbol: 'a' },   // miolo fixo 'aba'
      { from: 'q6', to: 'q7', symbol: 'b' },
      { from: 'q7', to: 'q8', symbol: 'a' },
      { from: 'q8', to: 'q8', symbol: 'e' },   // e^p
      { from: 'q8', to: 'q12', symbol: 'a' },  // conector 'a'
      { from: 'q12', to: 'q13', symbol: 'b' }, // (bc)^q, q>0 — aceita após cada 'c'
      { from: 'q13', to: 'q14', symbol: 'c' },
      { from: 'q14', to: 'q13', symbol: 'b' }
    ]
  },
  57: { // L57 "trabalho": a w a x a | w,x ∈ {b,c}*, #b par e #c par em cada bloco — paridade dupla
    nodes: [
      { id: 'q0', isInitial: true,  isFinal: false },
      { id: 'q1', isInitial: false, isFinal: false },
      { id: 'q2', isInitial: false, isFinal: false },
      { id: 'q3', isInitial: false, isFinal: false },
      { id: 'q4', isInitial: false, isFinal: false },
      { id: 'q5', isInitial: false, isFinal: false },
      { id: 'q6', isInitial: false, isFinal: false },
      { id: 'q7', isInitial: false, isFinal: false },
      { id: 'q8', isInitial: false, isFinal: false },
      { id: 'q9', isInitial: false, isFinal: true  }
    ],
    transitions: [
      { from: 'q0', to: 'q1', symbol: 'a' },   // primeiro 'a'
      { from: 'q1', to: 'q2', symbol: 'b' },   // bloco w: quadrado de paridade (q1..q4)
      { from: 'q2', to: 'q1', symbol: 'b' },
      { from: 'q1', to: 'q3', symbol: 'c' },
      { from: 'q3', to: 'q1', symbol: 'c' },
      { from: 'q2', to: 'q4', symbol: 'c' },
      { from: 'q4', to: 'q2', symbol: 'c' },
      { from: 'q3', to: 'q4', symbol: 'b' },
      { from: 'q4', to: 'q3', symbol: 'b' },
      { from: 'q1', to: 'q5', symbol: 'a' },   // 'a' do meio (só de q1 = par/par)
      { from: 'q5', to: 'q6', symbol: 'b' },   // bloco x: quadrado de paridade (q5..q8)
      { from: 'q6', to: 'q5', symbol: 'b' },
      { from: 'q5', to: 'q7', symbol: 'c' },
      { from: 'q7', to: 'q5', symbol: 'c' },
      { from: 'q6', to: 'q8', symbol: 'c' },
      { from: 'q8', to: 'q6', symbol: 'c' },
      { from: 'q7', to: 'q8', symbol: 'b' },
      { from: 'q8', to: 'q7', symbol: 'b' },
      { from: 'q5', to: 'q9', symbol: 'a' }    // 'a' final (só de q5 = par/par)
    ]
  },
  58: { // L58 "Boss Final": b^n a (bcd)^m a b^p c^q e w e^r a^s b^t c^u | q>0, w∈{a,b,c,d}* sufixo 'ab'
    nodes: [
      { id: 'q0',  isInitial: true,  isFinal: false },
      { id: 'q1',  isInitial: false, isFinal: false },
      { id: 'q2',  isInitial: false, isFinal: false },
      { id: 'q3',  isInitial: false, isFinal: false },
      { id: 'q4',  isInitial: false, isFinal: false },
      { id: 'q5',  isInitial: false, isFinal: false },
      { id: 'q6',  isInitial: false, isFinal: false },
      { id: 'q7',  isInitial: false, isFinal: false },
      { id: 'q8',  isInitial: false, isFinal: false },
      { id: 'q9',  isInitial: false, isFinal: true  },
      { id: 'q10', isInitial: false, isFinal: true  },
      { id: 'q11', isInitial: false, isFinal: true  },
      { id: 'q12', isInitial: false, isFinal: true  }
    ],
    transitions: [
      { from: 'q0', to: 'q0', symbol: 'b' },        // b^n
      { from: 'q0', to: 'q1', symbol: 'a' },        // 1º 'a'
      { from: 'q1', to: 'q2', symbol: 'b' },        // ciclo (bcd)^m
      { from: 'q2', to: 'q3', symbol: 'c' },
      { from: 'q3', to: 'q1', symbol: 'd' },
      { from: 'q1', to: 'q4', symbol: 'a' },        // 2º 'a'
      { from: 'q4', to: 'q4', symbol: 'b' },        // b^p
      { from: 'q4', to: 'q5', symbol: 'c' },        // 1º 'c' obrigatório (q>0)
      { from: 'q5', to: 'q5', symbol: 'c' },        // c^q restantes
      { from: 'q5', to: 'q6', symbol: 'e' },        // 'e' → bloco w
      { from: 'q6', to: 'q6', symbol: 'b,c,d' },    // sub-DFA: sufixo 'ab'
      { from: 'q6', to: 'q7', symbol: 'a' },
      { from: 'q7', to: 'q7', symbol: 'a' },
      { from: 'q7', to: 'q6', symbol: 'c,d' },
      { from: 'q7', to: 'q8', symbol: 'b' },
      { from: 'q8', to: 'q7', symbol: 'a' },
      { from: 'q8', to: 'q6', symbol: 'b,c,d' },
      { from: 'q8', to: 'q9', symbol: 'e' },        // sai do bloco w (w termina em 'ab')
      { from: 'q9', to: 'q9', symbol: 'e' },         // e^r
      { from: 'q9', to: 'q10', symbol: 'a' },        // a^s
      { from: 'q9', to: 'q11', symbol: 'b' },        // acesso direto a b (s=0)
      { from: 'q9', to: 'q12', symbol: 'c' },        // acesso direto a c (s=t=0)
      { from: 'q10', to: 'q10', symbol: 'a' },
      { from: 'q10', to: 'q11', symbol: 'b' },       // b^t
      { from: 'q10', to: 'q12', symbol: 'c' },       // acesso a c (t=0)
      { from: 'q11', to: 'q11', symbol: 'b' },
      { from: 'q11', to: 'q12', symbol: 'c' },        // c^u
      { from: 'q12', to: 'q12', symbol: 'c' }
    ]
  },
  59: { // L59 "prova": a^n b^2m c^p d^q = a* (bb)* c* d* — #b par
    nodes: [
      { id: 'q0', isInitial: true,  isFinal: true  },
      { id: 'q1', isInitial: false, isFinal: false },
      { id: 'q2', isInitial: false, isFinal: true  },
      { id: 'q3', isInitial: false, isFinal: true  },
      { id: 'q4', isInitial: false, isFinal: true  }
    ],
    transitions: [
      { from: 'q0', to: 'q0', symbol: 'a' },
      { from: 'q0', to: 'q1', symbol: 'b' },
      { from: 'q0', to: 'q3', symbol: 'c' },
      { from: 'q0', to: 'q4', symbol: 'd' },
      { from: 'q1', to: 'q2', symbol: 'b' },
      { from: 'q2', to: 'q1', symbol: 'b' },
      { from: 'q2', to: 'q3', symbol: 'c' },
      { from: 'q2', to: 'q4', symbol: 'd' },
      { from: 'q3', to: 'q3', symbol: 'c' },
      { from: 'q3', to: 'q4', symbol: 'd' },
      { from: 'q4', to: 'q4', symbol: 'd' }
    ]
  },
  60: { // L60 "prova": a w a x a | w,x ∈ {b,c}* com #b ímpar e #c ímpar — paridade ímpar dupla
    nodes: [
      { id: 'q0', isInitial: true,  isFinal: false },
      { id: 'q1', isInitial: false, isFinal: false },
      { id: 'q2', isInitial: false, isFinal: false },
      { id: 'q3', isInitial: false, isFinal: false },
      { id: 'q4', isInitial: false, isFinal: false },
      { id: 'q5', isInitial: false, isFinal: false },
      { id: 'q6', isInitial: false, isFinal: false },
      { id: 'q7', isInitial: false, isFinal: false },
      { id: 'q8', isInitial: false, isFinal: false },
      { id: 'q9', isInitial: false, isFinal: true  }
    ],
    transitions: [
      { from: 'q0', to: 'q1', symbol: 'a' },   // 1º 'a'
      { from: 'q1', to: 'q2', symbol: 'b' },   // bloco w (q1..q4)
      { from: 'q1', to: 'q3', symbol: 'c' },
      { from: 'q2', to: 'q1', symbol: 'b' },
      { from: 'q2', to: 'q4', symbol: 'c' },
      { from: 'q3', to: 'q4', symbol: 'b' },
      { from: 'q3', to: 'q1', symbol: 'c' },
      { from: 'q4', to: 'q3', symbol: 'b' },
      { from: 'q4', to: 'q2', symbol: 'c' },
      { from: 'q4', to: 'q5', symbol: 'a' },   // 'a' do meio (só de q4 = ímpar/ímpar)
      { from: 'q5', to: 'q6', symbol: 'b' },   // bloco x (q5..q8)
      { from: 'q5', to: 'q8', symbol: 'c' },
      { from: 'q6', to: 'q5', symbol: 'b' },
      { from: 'q6', to: 'q7', symbol: 'c' },
      { from: 'q7', to: 'q8', symbol: 'b' },
      { from: 'q7', to: 'q6', symbol: 'c' },
      { from: 'q7', to: 'q9', symbol: 'a' },   // 'a' final (só de q7 = ímpar/ímpar)
      { from: 'q8', to: 'q7', symbol: 'b' },
      { from: 'q8', to: 'q5', symbol: 'c' }
    ]
  },
  61: { // L61 "prova": w ∈ {0,1}* múltiplo de 6 — autômato mod 6 (q1 = resto 0, final)
    nodes: [
      { id: 'q0', isInitial: true,  isFinal: false },
      { id: 'q1', isInitial: false, isFinal: true  },
      { id: 'q2', isInitial: false, isFinal: false },
      { id: 'q3', isInitial: false, isFinal: false },
      { id: 'q4', isInitial: false, isFinal: false },
      { id: 'q5', isInitial: false, isFinal: false },
      { id: 'q6', isInitial: false, isFinal: false }
    ],
    transitions: [
      { from: 'q0', to: 'q1', symbol: '0' },
      { from: 'q0', to: 'q2', symbol: '1' },
      { from: 'q1', to: 'q1', symbol: '0' },
      { from: 'q1', to: 'q2', symbol: '1' },
      { from: 'q2', to: 'q4', symbol: '0' },
      { from: 'q2', to: 'q3', symbol: '1' },
      { from: 'q3', to: 'q1', symbol: '0' },
      { from: 'q3', to: 'q2', symbol: '1' },
      { from: 'q4', to: 'q5', symbol: '0' },
      { from: 'q4', to: 'q6', symbol: '1' },
      { from: 'q5', to: 'q4', symbol: '0' },
      { from: 'q5', to: 'q3', symbol: '1' },
      { from: 'q6', to: 'q5', symbol: '0' },
      { from: 'q6', to: 'q6', symbol: '1' }
    ]
  }
};
