export default { id: 14, label: "L14", formula: "L = {w ∈ {a,b}* / |w|a = |w|b}", impossible: true,                                  desc: "",                                                                 shortestWord: null,       regex: /^[ab]*$/, validate: w => [...w].filter(c=>c==='a').length === [...w].filter(c=>c==='b').length, alphabet: ['a', 'b'], acceptedWords: [],  rejectedWords: ["a","b","aab"],         hint: "Cuidado, essa é clássica! Garantir quantidade igual pode exigir muitos estados.",                                   successMsg: "Sobreviveu à máquina de estados complexa!",
    tutorials: {
      onStart: { type: 'theory', title: 'Linguagem IMPOSSÍVEL para AFD!', dialog: [
        'Esta linguagem é IMPOSSÍVEL para qualquer AFD — impossibilidade provada matematicamente!',
        'Para aceitar a^k b^k, o AFD precisaria lembrar k enquanto lê os "b"s. Mas k é ilimitado!',
        'Com apenas N estados fixos, palavras longas forçam repetição de estado (Pigeonhole). O Lema do Bombeamento conclui: a^(N+j)b^N seria aceita — mas ela não está em L. Contradição!',
        'Conclusão: AFDs não têm memória para comparar dois contadores sem ordem fixa. Isso é coisa de PDA (pilha).',
        'Tente construir mesmo assim. Sentir os limites do AFD é a melhor aula de teoria!',
      ] },
    },
    boardWords: ['λ', 'ab', 'aabb'],
    guidedLesson: [
      { text: '<b>|w|a = |w|b</b> — quantidades iguais de "a" e "b".<br/>Vamos ver por que um AFD não consegue resolver isso!',
        boardDoneUpTo: -1, stateUpdate: { nodes: [], transitions: [] } },
      { text: 'Foco em <b>λ</b>: palavra vazia — 0 "a"s e 0 "b"s. q0 inicial precisa ser final.',
        boardDoneUpTo: 0, stateUpdate: { nodes: [], transitions: [] } },
      { text: 'Solução: q0(ini,final). λ ✓. Próxima: "ab"!',
        boardDoneUpTo: 1, stateUpdate: {
          nodes: [{ id: 'q0', label: 'q0', x: 1000, y: 1000, isInitial: true, isFinal: true }],
          transitions: [] } },
      { text: 'Foco em <b>ab</b>: 1 "a" depois 1 "b" — precisamos de q1 para "lembrar" o a pendente.',
        boardDoneUpTo: 1, stateUpdate: {
          nodes: [{ id: 'q0', label: 'q0', x: 1000, y: 1000, isInitial: true, isFinal: true }],
          transitions: [] } },
      { text: 'Solução: q0→q1(a)→q0(b). "ab" ✓. Próxima: "aabb"!',
        boardDoneUpTo: 2, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 1000, y: 1200, isInitial: true, isFinal: true },
            { id: 'q1', label: 'q1', x: 1000, y: 400, isInitial: false, isFinal: false },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q0', symbol: 'b' },
          ] } },
      { text: 'Foco em <b>aabb</b>: 2 "a"s seguidos — q1 lê 2° "a", mas q1→q0 era para "b"! Preciso de q2.',
        boardDoneUpTo: 2, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 1000, y: 1200, isInitial: true, isFinal: true },
            { id: 'q1', label: 'q1', x: 1000, y: 400, isInitial: false, isFinal: false },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q0', symbol: 'b' },
          ] } },
      { text: 'Solução: q1→q2(a), q2→q1(b). "aabb" ✓. Mas agora... "aaabbb" precisaria de q3!',
        boardDoneUpTo: 3, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 1000, y: 1300, isInitial: true, isFinal: true },
            { id: 'q1', label: 'q1', x: 400, y: 700, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 1600, y: 700, isInitial: false, isFinal: false },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q2', symbol: 'a' },
            { from: 'q2', to: 'q1', symbol: 'b' },
            { from: 'q1', to: 'q0', symbol: 'b' },
          ] } },
      { text: '<b>O Confronto:</b> "aaabbb" exigiria q3, "aaaabbbb" exigiria q4... <u>Infinitos estados</u> para infinitos "a"s pendentes. É o <b>Lema do Bombeamento</b> — AFD sem memória ilimitada não pode fazer isso!',
        boardDoneUpTo: 3, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 1000, y: 1300, isInitial: true, isFinal: true },
            { id: 'q1', label: 'q1', x: 400, y: 700, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 1600, y: 700, isInitial: false, isFinal: false },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q2', symbol: 'a' },
            { from: 'q2', to: 'q1', symbol: 'b' },
            { from: 'q1', to: 'q0', symbol: 'b' },
          ] } },
    ] };
