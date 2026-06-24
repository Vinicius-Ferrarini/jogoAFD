export default { id: 3,  label: "L03", formula: "L = { 0 }",                                                           desc: "Contém uma única palavra: 0.",                                      shortestWord: "0",        regex: /^0$/,                                                       alphabet: ['0'],                  acceptedWords: ["0"],                       rejectedWords: ["λ","1","00"],          hint: "Basta um caminho simples do início ao fim lendo '0'.",                                                              successMsg: "Muito bem! Simples e direto.",
    allowedCards: ['toggleInitial', 'addNode', 'addTransition', 'toggleFinal', 'erase', 'undo', 'redo'],
    tutorials: {
      onStart: { type: 'mechanic', title: 'Criando Transições!', dialog: [
        'Parabéns! Hora de criar SETAS (transições)! ↗',
        'L = {0} aceita só "0". Precisa de 2 estados ligados por uma seta com símbolo "0".',
        'Nova carta desbloqueada: Criar Seta ↗. Clique nela, depois no estado origem, depois no destino!',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Hora de Montar!', dialog: [
        'Você achou a menor palavra! Agora monte o autômato passo a passo.',
        'Dica: use o botão 👨‍🏫 Assistir Aula no topo para ver uma demonstração guiada!',
      ] },
      onFormalDesc: { type: 'theory', title: 'Descrição Formal', dialog: [
        'Este painel mostra a DESCRIÇÃO FORMAL do AFD: estados, alfabeto, função de transição...',
        'Preencha tudo corretamente aqui para ganhar a terceira estrela ⭐⭐⭐!',
      ] },
      onTable: { type: 'theory', title: 'Tabela de Transição (δ)', dialog: [
        'Preencha a tabela δ para L = {0}: 1 coluna (símbolo "0"), linhas = seus estados.',
        'δ(q0, 0) = q1 — lendo "0" em q0, vamos para q1 (o estado final).',
        'Se um estado não tem transição para um símbolo, a célula fica vazia (rejeição implícita).',
        'Atenção: o nome do estado destino deve bater EXATAMENTE com o nome que você deu no canvas!',
      ] },
    },
    guidedLesson: [
      {
        text: 'Passo 1: Crie o estado inicial. Clique em "Novo Estado" para criar q0, depois em "Estado Inicial" e clique nele.',
        stateUpdate: {
          nodes: [{ id: 'q0', label: 'q0', x: 30, y: 50, isInitial: true, isFinal: false }],
          transitions: [],
        },
      },
      {
        text: 'Passo 2: Crie o estado final. Clique em "Novo Estado" para criar q1, depois em "Definir Final" e clique nele.',
        stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 30, y: 50, isInitial: true, isFinal: false },
            { id: 'q1', label: 'q1', x: 70, y: 50, isInitial: false, isFinal: true },
          ],
          transitions: [],
        },
      },
      {
        text: 'Passo 3: Conecte q0 → q1. Clique em "Criar Seta", depois em q0 (origem), depois em q1 (destino). Por fim, selecione o símbolo "0".',
        stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 30, y: 50, isInitial: true, isFinal: false },
            { id: 'q1', label: 'q1', x: 70, y: 50, isInitial: false, isFinal: true },
          ],
          transitions: [{ from: 'q0', to: 'q1', symbol: '0' }],
        },
      },
    ] };
