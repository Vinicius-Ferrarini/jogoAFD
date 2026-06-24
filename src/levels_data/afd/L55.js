export default { id: 55, label: "L55", formula: "L = { wxy | w∈{a,b}*, x∈{c,d}*, y∈{e,f}* e cada símbolo tem qtd par }", desc: "", shortestWord: "", validate: (w) => { if (!/^([ab]*)([cd]*)([ef]*)$/.test(w)) return false; const counts = ['a','b','c','d','e','f'].map(ch => (w.match(new RegExp(ch,'g'))||[]).length); return counts.every(c => c%2===0); }, alphabet: ['a','b','c','d','e','f'], acceptedWords: ['','aabb','ccdd','aabbccddeeff','abba'], rejectedWords: ['a','abccdd','ac','ba','c','aabbcde'], hint: "Três seções em ordem! [ab]* depois [cd]* depois [ef]*. Cada par de letras com paridade independente. O AFD completo tem mais de 80 estados!", successMsg: "Mestre das seis paridades!",
    tutorials: {
      onStart: { type: 'theory', title: '6 Letras, 3 Seções, Paridade Total!', dialog: [
        'L55: forma [ab]*[cd]*[ef]* com TODAS as 6 contagens pares.',
        '"λ"✓ "aabb"✓ "ccdd"✓. "a"✗ (a=1 ímpar). "ac"✗ (a=1,c=1). "abccdd"✗ (a=1,b=1).',
        '3 seções ordenadas. Seção ab: 4 estados. Seção cd: 16 (ab-parity × cd). Seção ef: 64. Total: >80!',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Seção ab (4) + Seção cd (16) + Seção ef (64)', dialog: [
        'Seção ab: q0(ini,f)↔q1(a), q0↔q2(b), q1↔q3(b), q2↔q3(a). Final: só q0.',
        'Ao ler c ou d em qualquer estado ab, entra na seção cd correspondente (sem retorno).',
        'Seção cd: 4 estados por paridade-ab × 4 paridades-cd = 16. Seção ef: mais 64 estados.',
      ] },
    },
    boardWords: ['λ', 'aabb', 'aabbccdd'],
    guidedLesson: [
      { text: '3 seções em ordem: [ab]* → [cd]* → [ef]*. Todos os 6 com qtd par!<br/>Aceitar: <b>λ</b>, <b>aabb</b>, <b>aabbccdd</b>. Rejeitar: a, aab, ccaa.',
        boardDoneUpTo: -1, stateUpdate: { nodes: [], transitions: [] } },
      { text: 'Foco em <b>λ</b>: q0 é inicial e final (0 de tudo = todos pares).',
        boardDoneUpTo: 0, stateUpdate: { nodes: [], transitions: [] } },
      { text: 'Solução: q0(ini,final). λ✓. Próxima: "aabb"!',
        boardDoneUpTo: 1, stateUpdate: {
          nodes: [ { id: 'q0', label: 'q0', x: 1000, y: 1000, isInitial: true, isFinal: true } ],
          transitions: [] } },
      { text: 'Foco em <b>aabb</b>: seção ab — quadrado de paridade para a e b.',
        boardDoneUpTo: 1, stateUpdate: {
          nodes: [ { id: 'q0', label: 'q0', x: 1000, y: 1000, isInitial: true, isFinal: true } ],
          transitions: [] } },
      { text: 'Solução: quadrado ab. q0↔q1(a), q0↔q2(b), q1↔q3(b), q2↔q3(a). "aabb"✓. Próxima: "aabbccdd"!',
        boardDoneUpTo: 2, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 240, y: 700, isInitial: true,  isFinal: true  },
            { id: 'q1', label: 'q1', x: 240, y: 1400, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 740, y: 700, isInitial: false, isFinal: false },
            { id: 'q3', label: 'q3', x: 740, y: 1400, isInitial: false, isFinal: false },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a' }, { from: 'q1', to: 'q0', symbol: 'a' },
            { from: 'q2', to: 'q3', symbol: 'a' }, { from: 'q3', to: 'q2', symbol: 'a' },
            { from: 'q0', to: 'q2', symbol: 'b' }, { from: 'q2', to: 'q0', symbol: 'b' },
            { from: 'q1', to: 'q3', symbol: 'b' }, { from: 'q3', to: 'q1', symbol: 'b' },
          ] } },
      { text: 'Foco em <b>aabbccdd</b>: q0 lê c/d — entra na seção cd! +4 estados cd (apenas do q0).',
        boardDoneUpTo: 2, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 240, y: 700, isInitial: true,  isFinal: true  },
            { id: 'q1', label: 'q1', x: 240, y: 1400, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 740, y: 700, isInitial: false, isFinal: false },
            { id: 'q3', label: 'q3', x: 740, y: 1400, isInitial: false, isFinal: false },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a' }, { from: 'q1', to: 'q0', symbol: 'a' },
            { from: 'q2', to: 'q3', symbol: 'a' }, { from: 'q3', to: 'q2', symbol: 'a' },
            { from: 'q0', to: 'q2', symbol: 'b' }, { from: 'q2', to: 'q0', symbol: 'b' },
            { from: 'q1', to: 'q3', symbol: 'b' }, { from: 'q3', to: 'q1', symbol: 'b' },
          ] } },
      { text: 'Solução parcial: +q4(cd-pares,f), q5(c-ímpar), q6(d-ímpar), q7(c-ímpar,d-ímpar). "aabbccdd"✓ O AFD completo tem >80 estados!',
        boardDoneUpTo: 3, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 240, y: 700, isInitial: true,  isFinal: true  },
            { id: 'q1', label: 'q1', x: 240, y: 1400, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 740, y: 700, isInitial: false, isFinal: false },
            { id: 'q3', label: 'q3', x: 740, y: 1400, isInitial: false, isFinal: false },
            { id: 'q4', label: 'q4', x: 1240, y: 700, isInitial: false, isFinal: true  },
            { id: 'q5', label: 'q5', x: 1740, y: 700, isInitial: false, isFinal: false },
            { id: 'q6', label: 'q6', x: 1240, y: 1400, isInitial: false, isFinal: false },
            { id: 'q7', label: 'q7', x: 1740, y: 1400, isInitial: false, isFinal: false },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a' }, { from: 'q1', to: 'q0', symbol: 'a' },
            { from: 'q2', to: 'q3', symbol: 'a' }, { from: 'q3', to: 'q2', symbol: 'a' },
            { from: 'q0', to: 'q2', symbol: 'b' }, { from: 'q2', to: 'q0', symbol: 'b' },
            { from: 'q1', to: 'q3', symbol: 'b' }, { from: 'q3', to: 'q1', symbol: 'b' },
            { from: 'q0', to: 'q5', symbol: 'c' }, { from: 'q5', to: 'q4', symbol: 'c' }, { from: 'q4', to: 'q5', symbol: 'c' },
            { from: 'q6', to: 'q7', symbol: 'c' }, { from: 'q7', to: 'q6', symbol: 'c' },
            { from: 'q0', to: 'q6', symbol: 'd' }, { from: 'q6', to: 'q4', symbol: 'd' }, { from: 'q4', to: 'q6', symbol: 'd' },
            { from: 'q5', to: 'q7', symbol: 'd' }, { from: 'q7', to: 'q5', symbol: 'd' },
          ] } },
    ] };
