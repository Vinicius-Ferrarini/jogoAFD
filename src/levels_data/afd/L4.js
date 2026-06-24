export default { id: 4,  label: "L04", formula: "L = { λ, 0 }",                                                        desc: "Contém duas palavras: λ e 0.",                                      shortestWord: "",         regex: /^0?$/,                                                      alphabet: ['0'],                  acceptedWords: ["","0"],                    rejectedWords: ["1","00","01"],         hint: "Lembre-se que o estado inicial já aceita λ. O que acontece se ler um 0?",                                           successMsg: "Acertou! Dois caminhos de aceitação.",
    tutorials: {
      onStart: { type: 'mechanic', title: 'Dois Caminhos de Aceitação!', dialog: [
        'L = {λ, 0} aceita DUAS palavras: λ (vazia) E "0". Mais de uma aceitação!',
        'Para aceitar λ, o estado inicial deve ser final. Para aceitar "0", precisa de uma seta.',
        'Um único estado pode ser inicial E final ao mesmo tempo — assim cobre os dois casos!',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Estado Inicial Final + Seta', dialog: [
        'Padrão novo: q0 é inicial E final (aceita λ). Adicione q1 (final) com seta 0→q1.',
        'Esse padrão — estado inicial final mais transição para outro final — vai aparecer muito!',
      ] },
    },
    boardWords: ['λ', '0'],
    guidedLesson: [
      { text: 'Decifrar: L = { λ, 0 }.<br/>Aceitar: <b>λ</b> e <b>0</b>. Rejeitar: tudo mais!',
        boardDoneUpTo: -1, stateUpdate: { nodes: [], transitions: [] } },
      { text: 'Foco em <b>λ</b>: palavra vazia — o estado inicial precisa ser final também!',
        boardDoneUpTo: 0, stateUpdate: { nodes: [], transitions: [] } },
      { text: 'Solução: <b>q0</b> ini+final. "λ": q0(final) ✓. Próxima: "0" — q0 sem seta!',
        boardDoneUpTo: 1, stateUpdate: {
          nodes: [{ id: 'q0', label: 'q0', x: 20, y: 50, isInitial: true, isFinal: true }],
          transitions: [] } },
      { text: 'Foco em <b>0</b>: q0 lê "0" — sem seta, vai para dead state!',
        boardDoneUpTo: 1, stateUpdate: {
          nodes: [{ id: 'q0', label: 'q0', x: 20, y: 50, isInitial: true, isFinal: true }],
          transitions: [] } },
      { text: 'Solução: <b>q1</b>(final) + q0—0→q1. "0": q0→q1 ✓ Concluído!',
        boardDoneUpTo: 2, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 20, y: 50, isInitial: true, isFinal: true },
            { id: 'q1', label: 'q1', x: 55, y: 50, isInitial: false, isFinal: true },
          ],
          transitions: [{ from: 'q0', to: 'q1', symbol: '0' }] } },
    ] };
