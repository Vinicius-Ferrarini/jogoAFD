export const lote1 = [
  { id: 1,  label: "L01", formula: "L = ∅",                                                               wordOnly: true,  desc: "A linguagem mais simples que existe; não contém palavras.",           shortestWord: null,       regex: /(?!)/,                                                     alphabet: [],                     acceptedWords: [],                         rejectedWords: ["λ","a","0"],           hint: "Uma linguagem vazia não aceita absolutamente nada. Como o grafo deve ficar?",                                       successMsg: "Perfeito! Um autômato sem estados finais não aceita nada.",
    tutorials: {
      onStart: { type: 'theory', title: 'Bem-vindo ao TuringLab!', dialog: [
        'Olá! Sou Maurílio, seu guia de AFDs! 🤖 Vamos aprender construindo!',
        'Um AFD lê uma palavra letra por letra e decide: ACEITA ✅ ou REJEITA ❌.',
        'L = ∅ é a linguagem VAZIA — zero palavras aceitas. Absolutamente nada!',
        'Sua tarefa: descobrir a menor palavra desta linguagem. Ela é bem especial... 🤔',
      ] },
      onFormalDesc: { type: 'theory', title: 'Descrição Formal', dialog: [
        'Um AFD é a quíntupla M = (Q, Σ, δ, q₀, F) — cada campo tem um significado preciso!',
        'Q = estados, Σ = alfabeto, δ = transições, q₀ = inicial, F = finais.',
        'Para L = ∅: F = {} (conjunto vazio). Nenhum estado é final, logo nada é aceito!',
      ] },
      onTable: { type: 'theory', title: 'Tabela de Transição (δ)', dialog: [
        'A Tabela δ formaliza a função de transição: δ(estado, símbolo) → estado destino.',
        'Cada linha é um estado; cada coluna é um símbolo do alfabeto Σ.',
        'Para L = ∅, Σ é vazio — por isso a tabela δ também não tem colunas!',
      ] },
    } },
  { id: 2,  label: "L02", formula: "L = { λ }",                                                           desc: "Contém uma única palavra: a palavra vazia.",                         shortestWord: "",         regex: /^$/,                                                        alphabet: [],                     acceptedWords: [""],                        rejectedWords: ["a","0","b"],           hint: "Se a palavra é vazia, o estado inicial também deve ser o final!",                                                   successMsg: "Exato! Aceitar o vazio significa já nascer no estado final.",
    allowedCards: ['toggleInitial', 'addNode', 'toggleFinal', 'erase', 'undo', 'redo'],
    tutorials: {
      onStart: { type: 'mechanic', title: 'Seu Primeiro Autômato!', dialog: [
        'Boa! Hora de construir seu PRIMEIRO autômato! 🎉',
        'L = {λ} aceita só a palavra vazia λ (zero letras). Nada mais!',
        'Se λ é aceita, o estado inicial JÁ É o final. Use ▶ e depois ◎ no mesmo estado!',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Canvas Liberado!', dialog: [
        'Perfeito! Você descobriu a menor palavra. Agora construa o autômato!',
        'L = {λ}: um único estado que seja INICIAL e FINAL ao mesmo tempo.',
        'Use a carta ▶ e depois ◎ no mesmo estado. Um clique de cada!',
      ] },
      onFormalDesc: { type: 'theory', title: 'Descrição Formal', dialog: [
        'Hora de formalizar! M = (Q, Σ, δ, q₀, F).',
        'Para L = {λ}: Q = {q0}, Σ = {} (sem símbolos!), q₀ = q0, F = {q0}.',
        'Note: q₀ ∈ F — o estado inicial também é final, pois λ é aceita imediatamente!',
        'Dica: campo com 1 elemento usa nome direto — ex: q0 (sem chaves { }).',
      ] },
      onTable: { type: 'theory', title: 'Tabela de Transição (δ)', dialog: [
        'L = {λ} tem Σ = {} — alfabeto vazio, portanto δ não tem colunas!',
        'Isso é normal: sem símbolos no alfabeto, não há transições para descrever.',
        'A partir de L03 (com símbolo "0"), a tabela começa a ter conteúdo real!',
      ] },
    } },
  { id: 3,  label: "L03", formula: "L = { 0 }",                                                           desc: "Contém uma única palavra: 0.",                                      shortestWord: "0",        regex: /^0$/,                                                       alphabet: ['0'],                  acceptedWords: ["0"],                       rejectedWords: ["λ","1","00"],          hint: "Basta um caminho simples do início ao fim lendo '0'.",                                                              successMsg: "Muito bem! Simples e direto.",
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
    ] },
  { id: 4,  label: "L04", formula: "L = { λ, 0 }",                                                        desc: "Contém duas palavras: λ e 0.",                                      shortestWord: "",         regex: /^0?$/,                                                      alphabet: ['0'],                  acceptedWords: ["","0"],                    rejectedWords: ["1","00","01"],         hint: "Lembre-se que o estado inicial já aceita λ. O que acontece se ler um 0?",                                           successMsg: "Acertou! Dois caminhos de aceitação.",
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
    ] },
  { id: 5,  label: "L05", formula: "L = { a^n | n > 0 }",                                                 desc: "",                                                                 shortestWord: "a",        regex: /^a+$/,                                                      alphabet: ['a'],                  acceptedWords: ["a","aa","aaa"],            rejectedWords: ["λ","b","ba"],          hint: "Você precisa ler pelo menos um 'a', e depois pode ler infinitos.",                                                  successMsg: "Ótimo uso de repetição (loop) no estado final!",
    tutorials: {
      onStart: { type: 'theory', title: 'Notação a^n — Repetição Infinita!', dialog: [
        'Nova notação: a^n com n > 0 significa "pelo menos um a, podendo ser infinitos".',
        '"a", "aa", "aaa"... todos aceitos. λ NÃO — pois n > 0 exige ao menos 1 símbolo!',
        'Para aceitar infinitas palavras, o grafo precisa de um LOOP — seta que aponta para si mesma.',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Mecânica de Loop!', dialog: [
        'Mecânica nova: LOOP — uma transição que parte de um estado e volta para ele mesmo.',
        'Estrutura: q0 (inicial) →(a)→ q1 (final). Mais: q1 →(a)→ q1 (o próprio loop).',
        'Assim: ler "a" chega em q1 (aceita). Ler mais "a"s fica em q1 e continua aceitando!',
      ] },
    },
    boardWords: ['a', 'aa', 'aaa'],
    guidedLesson: [
      { text: 'Desafio: L = { a, aa, aaa... }<br/>Aceitar: <b>a</b>, <b>aa</b>, <b>aaa</b>. Rejeitar: λ.',
        boardDoneUpTo: -1, stateUpdate: { nodes: [], transitions: [] } },
      { text: 'Foco em <b>a</b>: mínimo 1 "a". Preciso de q0—a→q1(final).',
        boardDoneUpTo: 0, stateUpdate: { nodes: [], transitions: [] } },
      { text: 'Solução: q0—a→<b>q1</b>(final). "a" ✓. Próxima: "aa" — q1 sem loop!',
        boardDoneUpTo: 1, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 20, y: 50, isInitial: true, isFinal: false },
            { id: 'q1', label: 'q1', x: 55, y: 50, isInitial: false, isFinal: true },
          ],
          transitions: [{ from: 'q0', to: 'q1', symbol: 'a' }] } },
      { text: 'Foco em <b>aa</b> e <b>aaa</b>: 2° "a" em q1 sem seta — dead state! Preciso de loop.',
        boardDoneUpTo: 1, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 20, y: 50, isInitial: true, isFinal: false },
            { id: 'q1', label: 'q1', x: 55, y: 50, isInitial: false, isFinal: true },
          ],
          transitions: [{ from: 'q0', to: 'q1', symbol: 'a' }] } },
      { text: 'Solução: loop <b>q1—a→q1</b>. "aa" ✓ "aaa" ✓ Gira para sempre!',
        boardDoneUpTo: 3, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 20, y: 50, isInitial: true, isFinal: false },
            { id: 'q1', label: 'q1', x: 55, y: 50, isInitial: false, isFinal: true },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q1', symbol: 'a' },
          ] } },
    ] },
  { id: 6,  label: "L06", formula: "L = { a^n | n > 0 e n é ímpar }",                                    desc: "",                                                                 shortestWord: "a",        regex: /^a(aa)*$/,                                                  alphabet: ['a'],                  acceptedWords: ["a","aaa","aaaaa"],         rejectedWords: ["λ","aa","aaaa"],       hint: "Ímpar significa 1, 3, 5... Vai e volta entre dois estados!",                                                        successMsg: "Mecânica de paridade dominada!",
    tutorials: {
      onStart: { type: 'theory', title: 'Paridade: Ímpar vs Par', dialog: [
        'Novo conceito: PARIDADE! 🔢 Ímpar = 1,3,5... Par = 0,2,4...',
        'Para contar comprimento ímpar, use 2 estados alternando a cada "a" lido.',
        'Comece no estado "ímpar" (1 "a" já aceita). Cada novo "a" inverte: ímpar ↔ par!',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Mecânica Vai-e-Volta', dialog: [
        'Mecânica VAI-E-VOLTA: dois estados trocam papéis a cada símbolo lido.',
        'q0 (par, inicial, NÃO final) ←→ q1 (ímpar, FINAL). Cada "a" alterna entre eles.',
        'Leu "a": q0→q1 (aceita, comprimento ímpar). Leu mais "a": q1→q0 (rejeita, par). E assim vai!',
      ] },
    },
    boardWords: ['a', 'aaa', 'aaaaa'],
    guidedLesson: [
      { text: 'Apenas quantidade <u>ímpar</u> de "a"s!<br/>Aceitar: <b>a</b>, <b>aaa</b>, <b>aaaaa</b>. Rejeitar: λ, aa.',
        boardDoneUpTo: -1, stateUpdate: { nodes: [], transitions: [] } },
      { text: 'Foco em <b>a</b>: ímpar mínimo = 1 "a". Preciso de q0—a→q1(final).',
        boardDoneUpTo: 0, stateUpdate: { nodes: [], transitions: [] } },
      { text: 'Solução: q0—a→<b>q1</b>(final). "a" ✓. Próxima: "aaa" — 3° "a" em q1 sem seta!',
        boardDoneUpTo: 1, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 20, y: 50, isInitial: true, isFinal: false },
            { id: 'q1', label: 'q1', x: 55, y: 50, isInitial: false, isFinal: true },
          ],
          transitions: [{ from: 'q0', to: 'q1', symbol: 'a' }] } },
      { text: 'Foco em <b>aaa</b> e <b>aaaaa</b>: "a" extra em q1 morre! Preciso de <u>vai-e-volta</u>.',
        boardDoneUpTo: 1, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 20, y: 50, isInitial: true, isFinal: false },
            { id: 'q1', label: 'q1', x: 55, y: 50, isInitial: false, isFinal: true },
          ],
          transitions: [{ from: 'q0', to: 'q1', symbol: 'a' }] } },
      { text: 'Solução: <u>vai-e-volta</u> q1—a→q0. Par→q0(rejeita), ímpar→q1(aceita). "aaa" ✓ "aaaaa" ✓',
        boardDoneUpTo: 3, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 20, y: 50, isInitial: true, isFinal: false },
            { id: 'q1', label: 'q1', x: 55, y: 50, isInitial: false, isFinal: true },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q0', symbol: 'a' },
          ] } },
    ] },
  { id: 7,  label: "L07", formula: "L = { a b^n a | n ≥ 0 e n é par }",                                  desc: "",                                                                 shortestWord: "aa",       regex: /^a(bb)*a$/,                                                 alphabet: ['a', 'b'],             acceptedWords: ["aa","abba","abbbba"],      rejectedWords: ["a","aba","abbba"],     hint: "A palavra começa com 'a', termina com 'a', e no meio os 'b's andam em duplas.",                                    successMsg: "Excelente! Você controlou o sanduíche de 'b's pares.",
    tutorials: {
      onStart: { type: 'theory', title: 'Linguagem Sanduíche!', dialog: [
        'Linguagem SANDUÍCHE! 🥪 Início e fim fixos, meio variável.',
        'Começa com "a", seguido de um número PAR de "b"s (0, 2, 4...), termina com "a".',
        'Dica: rastreie o "a" inicial, a paridade dos "b"s e feche com o "a" final.',
      ] },
      onDrawGraph: { type: 'theory', title: '≥ 0 vs > 0: Detalhe Crucial!', dialog: [
        'Atenção: n ≥ 0 significa ZERO ou mais "b"s — portanto "aa" é válida (zero b\'s no meio)!',
        'Se fosse n > 0, pelo menos um "b" seria obrigatório. Com ≥ 0, o meio pode ser vazio.',
        'Para cobrir n=0: crie uma transição do estado "b-par" direto para o estado que lê o "a" final.',
      ] },
    },
    boardWords: ['aa', 'abba', 'abbbba'],
    guidedLesson: [
      { text: 'Sanduíche: "a" + b\'s PARES + "a".<br/>Aceitar: <b>aa</b>, <b>abba</b>, <b>abbbba</b>. Rejeitar: a, aba.',
        boardDoneUpTo: -1, stateUpdate: { nodes: [], transitions: [] } },
      { text: 'Foco em <b>aa</b>: zero b\'s no meio — caminho direto q0—a→q1—a→q3(final).',
        boardDoneUpTo: 0, stateUpdate: { nodes: [], transitions: [] } },
      { text: 'Solução: q0—a→q1—a→<b>q3</b>(final). "aa" ✓. Próxima: "abba" — q1 sem seta para "b"!',
        boardDoneUpTo: 1, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 15, y: 50, isInitial: true, isFinal: false },
            { id: 'q1', label: 'q1', x: 40, y: 50, isInitial: false, isFinal: false },
            { id: 'q3', label: 'q3', x: 64, y: 46, isInitial: false, isFinal: true },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q3', symbol: 'a' },
          ] } },
      { text: 'Foco em <b>abba</b> e <b>abbbba</b>: q1 sem seta para "b" — trava! Preciso de ping-pong.',
        boardDoneUpTo: 1, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 15, y: 50, isInitial: true, isFinal: false },
            { id: 'q1', label: 'q1', x: 40, y: 50, isInitial: false, isFinal: false },
            { id: 'q3', label: 'q3', x: 64, y: 46, isInitial: false, isFinal: true },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q3', symbol: 'a' },
          ] } },
      { text: 'Solução: <u>ping-pong</u> q1↔q2(b). Par de b\'s → volta ao q1 → q3. "abba" ✓ "abbbba" ✓',
        boardDoneUpTo: 3, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 15, y: 50, isInitial: true, isFinal: false },
            { id: 'q1', label: 'q1', x: 40, y: 50, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 37, y: 80, isInitial: false, isFinal: false },
            { id: 'q3', label: 'q3', x: 64, y: 46, isInitial: false, isFinal: true },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q2', symbol: 'b' },
            { from: 'q2', to: 'q1', symbol: 'b' },
            { from: 'q1', to: 'q3', symbol: 'a' },
          ] } },
    ] },
  { id: 8,  label: "L08", formula: "L = { a(bc)^n a | n > 0 }",                                          desc: "",                                                                 shortestWord: "abca",     regex: /^a(bc)+a$/,                                                 alphabet: ['a', 'b', 'c'],        acceptedWords: ["abca","abcbca"],           rejectedWords: ["aa","aca","abba"],     hint: "Começa com 'a', depois exige o ciclo exato 'bc', 'bc', e fecha com 'a'.",                                           successMsg: "Belo ciclo! A sequência foi respeitada.",
    tutorials: {
      onStart: { type: 'theory', title: 'Agrupamento Cíclico (bc)^n', dialog: [
        'Parênteses na notação! (bc)^n significa o GRUPO "bc" repetido n vezes, com n > 0.',
        'Cada volta do ciclo consome DOIS símbolos em ordem fixa: primeiro "b", depois "c".',
        'Para isso, dois estados intermediários formam o ciclo: s→(b)→s2→(c)→s (e volta).',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Ciclo de Dois Passos', dialog: [
        'Estrutura: q0→(a)→q1→(b)→q2→(c)→q1 (loop do ciclo). Depois q1→(a)→qFinal.',
        'O ciclo "bc" gira entre q1 e q2 indefinidamente — cada volta completa o grupo!',
        'Como n > 0, o ciclo é obrigatório: não existe atalho direto de q0 para o estado final.',
      ] },
    },
    boardWords: ['abca', 'abcbca'],
    guidedLesson: [
      { text: 'Ciclo fixo: a + (bc)^n + a, n&gt;0.<br/>Aceitar: <b>abca</b>, <b>abcbca</b>. Rejeitar: aa, aca.',
        boardDoneUpTo: -1, stateUpdate: { nodes: [], transitions: [] } },
      { text: 'Foco em <b>abca</b>: 1 ciclo "bc". Cadeia linear q0—a→q1—b→q2—c→q3—a→q4(final).',
        boardDoneUpTo: 0, stateUpdate: { nodes: [], transitions: [] } },
      { text: 'Solução: cadeia q0→q1→q2→q3→<b>q4</b>(final). "abca" ✓. Próxima: "abcbca" — q3 sem seta para 2° "b"!',
        boardDoneUpTo: 1, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 12, y: 50, isInitial: true, isFinal: false },
            { id: 'q1', label: 'q1', x: 30, y: 50, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 48, y: 50, isInitial: false, isFinal: false },
            { id: 'q3', label: 'q3', x: 66, y: 50, isInitial: false, isFinal: false },
            { id: 'q4', label: 'q4', x: 84, y: 50, isInitial: false, isFinal: true },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q2', symbol: 'b' },
            { from: 'q2', to: 'q3', symbol: 'c' },
            { from: 'q3', to: 'q4', symbol: 'a' },
          ] } },
      { text: 'Foco em <b>abcbca</b>: "abcbc" chega em q3 — "b" volta mas q3 sem seta!',
        boardDoneUpTo: 1, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 12, y: 50, isInitial: true, isFinal: false },
            { id: 'q1', label: 'q1', x: 30, y: 50, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 48, y: 50, isInitial: false, isFinal: false },
            { id: 'q3', label: 'q3', x: 66, y: 50, isInitial: false, isFinal: false },
            { id: 'q4', label: 'q4', x: 84, y: 50, isInitial: false, isFinal: true },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q2', symbol: 'b' },
            { from: 'q2', to: 'q3', symbol: 'c' },
            { from: 'q3', to: 'q4', symbol: 'a' },
          ] } },
      { text: 'Solução: q3—b→q2. O ciclo (bc) gira de volta! "abcbca" ✓ Concluído!',
        boardDoneUpTo: 2, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 12, y: 50, isInitial: true, isFinal: false },
            { id: 'q1', label: 'q1', x: 30, y: 50, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 48, y: 50, isInitial: false, isFinal: false },
            { id: 'q3', label: 'q3', x: 66, y: 50, isInitial: false, isFinal: false },
            { id: 'q4', label: 'q4', x: 84, y: 50, isInitial: false, isFinal: true },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q2', symbol: 'b' },
            { from: 'q2', to: 'q3', symbol: 'c' },
            { from: 'q3', to: 'q2', symbol: 'b' },
            { from: 'q3', to: 'q4', symbol: 'a' },
          ] } },
    ] },
  { id: 9,  label: "L09", formula: "L = { a^n b^m c^p | n > 0, m ≥ 0, p ≥ 0 }",                         desc: "",                                                                 shortestWord: "a",        regex: /^a+b*c*$/,                                                  alphabet: ['a', 'b', 'c'],        acceptedWords: ["a","ab","abc"],            rejectedWords: ["λ","b","ba"],          hint: "Os blocos não se misturam. Primeiro só 'a's, depois só 'b's, e por fim só 'c's.",                                  successMsg: "Progresso linear perfeito!",
    tutorials: {
      onStart: { type: 'theory', title: 'Variáveis Independentes!', dialog: [
        'Três blocos independentes: a^n (n>0, obrigatório), b^m (m≥0, opcional), c^p (p≥0, opcional).',
        'Independente significa que cada bloco tem sua regra própria. "a" sozinho é válido!',
        'O fluxo é estritamente da esquerda para a direita — nunca se volta para o bloco anterior.',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Blocos Lineares com Loops', dialog: [
        'q0 (inicial, NÃO final) →(a)→ q1 (final). q1 tem loop em "a" para a\'s extras.',
        'q1 →(b)→ q2 (final, loop em "b"). q2 →(c)→ q3 (final, loop em "c").',
        'q1, q2 e q3 são todos finais — após o primeiro "a", qualquer b*c* é válido!',
      ] },
    },
    boardWords: ['a', 'aa', 'aabb', 'aacc', 'aabbcc'],
    guidedLesson: [
      { text: 'Três blocos independentes: a^n, b^m, c^p.<br/>Aceitar: <b>a</b>, <b>aa</b>, <b>aabb</b>, <b>aacc</b>, <b>aabbcc</b>.',
        boardDoneUpTo: -1, stateUpdate: { nodes: [], transitions: [] } },
      { text: 'Foco em <b>a</b>: 1 "a". Preciso de q0—a→q1(final).',
        boardDoneUpTo: 0, stateUpdate: { nodes: [], transitions: [] } },
      { text: 'Solução: q0—a→<b>q1</b>(final). "a" ✓. Próxima: "aa" — q1 sem loop!',
        boardDoneUpTo: 1, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 15, y: 50, isInitial: true, isFinal: false },
            { id: 'q1', label: 'q1', x: 38, y: 50, isInitial: false, isFinal: true },
          ],
          transitions: [{ from: 'q0', to: 'q1', symbol: 'a' }] } },
      { text: 'Foco em <b>aa</b>: 2° "a" em q1 não tem seta — dead state! Preciso de loop.',
        boardDoneUpTo: 1, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 15, y: 50, isInitial: true, isFinal: false },
            { id: 'q1', label: 'q1', x: 38, y: 50, isInitial: false, isFinal: true },
          ],
          transitions: [{ from: 'q0', to: 'q1', symbol: 'a' }] } },
      { text: 'Solução: loop q1—a→q1. "aa" ✓. Próxima: "aabb" — q1 sem seta para "b"!',
        boardDoneUpTo: 2, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 15, y: 50, isInitial: true, isFinal: false },
            { id: 'q1', label: 'q1', x: 38, y: 50, isInitial: false, isFinal: true },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q1', symbol: 'a' },
          ] } },
      { text: 'Foco em <b>aabb</b>: q1 lê "b" — sem seta! Preciso de q2 para o bloco de "b"s.',
        boardDoneUpTo: 2, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 15, y: 50, isInitial: true, isFinal: false },
            { id: 'q1', label: 'q1', x: 38, y: 50, isInitial: false, isFinal: true },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q1', symbol: 'a' },
          ] } },
      { text: 'Solução: q1—b→<b>q2</b>(final, loop b). "aabb" ✓. Próxima: "aacc" — sem caminho direto de a\'s para c\'s!',
        boardDoneUpTo: 3, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 15, y: 50, isInitial: true, isFinal: false },
            { id: 'q1', label: 'q1', x: 38, y: 50, isInitial: false, isFinal: true },
            { id: 'q2', label: 'q2', x: 61, y: 72, isInitial: false, isFinal: true },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q2', symbol: 'b' },
            { from: 'q2', to: 'q2', symbol: 'b' },
          ] } },
      { text: 'Foco em <b>aacc</b>: q1 lê "c" direto — sem seta! Preciso de q3 para o bloco de "c"s.',
        boardDoneUpTo: 3, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 15, y: 50, isInitial: true, isFinal: false },
            { id: 'q1', label: 'q1', x: 38, y: 50, isInitial: false, isFinal: true },
            { id: 'q2', label: 'q2', x: 61, y: 72, isInitial: false, isFinal: true },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q2', symbol: 'b' },
            { from: 'q2', to: 'q2', symbol: 'b' },
          ] } },
      { text: 'Solução: q1—c→<b>q3</b>(final, loop c). "aacc" ✓. Próxima: "aabbcc" — q2 sem seta para "c"!',
        boardDoneUpTo: 4, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 15, y: 50, isInitial: true, isFinal: false },
            { id: 'q1', label: 'q1', x: 38, y: 50, isInitial: false, isFinal: true },
            { id: 'q2', label: 'q2', x: 61, y: 72, isInitial: false, isFinal: true },
            { id: 'q3', label: 'q3', x: 84, y: 50, isInitial: false, isFinal: true },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q2', symbol: 'b' },
            { from: 'q2', to: 'q2', symbol: 'b' },
            { from: 'q1', to: 'q3', symbol: 'c' },
            { from: 'q3', to: 'q3', symbol: 'c' },
          ] } },
      { text: 'Foco em <b>aabbcc</b>: q2 lê "c" — sem seta! Preciso de ponte q2—c→q3.',
        boardDoneUpTo: 4, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 15, y: 50, isInitial: true, isFinal: false },
            { id: 'q1', label: 'q1', x: 38, y: 50, isInitial: false, isFinal: true },
            { id: 'q2', label: 'q2', x: 61, y: 72, isInitial: false, isFinal: true },
            { id: 'q3', label: 'q3', x: 84, y: 50, isInitial: false, isFinal: true },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q2', symbol: 'b' },
            { from: 'q2', to: 'q2', symbol: 'b' },
            { from: 'q1', to: 'q3', symbol: 'c' },
            { from: 'q3', to: 'q3', symbol: 'c' },
          ] } },
      { text: 'Solução: q2—c→q3. "aabbcc": ...→q2→q2→q3→q3(final) ✓ Estrutura dos 3 blocos completa!',
        boardDoneUpTo: 5, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 15, y: 50, isInitial: true, isFinal: false },
            { id: 'q1', label: 'q1', x: 38, y: 50, isInitial: false, isFinal: true },
            { id: 'q2', label: 'q2', x: 61, y: 72, isInitial: false, isFinal: true },
            { id: 'q3', label: 'q3', x: 84, y: 50, isInitial: false, isFinal: true },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q2', symbol: 'b' },
            { from: 'q2', to: 'q2', symbol: 'b' },
            { from: 'q1', to: 'q3', symbol: 'c' },
            { from: 'q2', to: 'q3', symbol: 'c' },
            { from: 'q3', to: 'q3', symbol: 'c' },
          ] } },
    ] },
  { id: 10, label: "L10", formula: "L = { a^n b b a^m | n,m ≥ 0 e pares }",                              desc: "",                                                                 shortestWord: "bb",       regex: /^(aa)*bb(aa)*$/,                                            alphabet: ['a', 'b'],             acceptedWords: ["bb","aabb","bbaa"],        rejectedWords: ["abb","bba","b"],       hint: "Começa com 'a's pares (ou zero), o núcleo é 'bb', termina com 'a's pares.",                                        successMsg: "Núcleo isolado com sucesso!",
    tutorials: {
      onStart: { type: 'theory', title: 'Dois Vai-e-Volta nos Flancos!', dialog: [
        'L10 tem um núcleo fixo "bb" cercado por a\'s em quantidade PAR.',
        'Prefixo: 0, 2, 4... "a"s antes do "bb". Sufixo: 0, 2, 4... "a"s depois.',
        'São dois <u>vai-e-volta</u> independentes — um de cada lado do núcleo!',
        'Palavra mais curta: "bb" — pois n,m ≥ 0, os "a"s são opcionais.',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Três Zonas no Grafo', dialog: [
        'Zona 1 (Esquerda): <b>q0</b>↔<b>q1</b> com "a" — conta a\'s PARES antes do núcleo.',
        'Zona 2 (Centro): <b>q0</b>→<b>q2</b>→<b>q3</b>(final) com "bb" — o núcleo fixo.',
        'Zona 3 (Direita): <b>q3</b>↔<b>q4</b> com "a" — conta a\'s PARES após o núcleo!',
      ] },
    },
    boardWords: ['bb', 'aabb', 'bbaa'],
    guidedLesson: [
      { text: 'Sanduíche: a\'s PARES + "bb" + a\'s PARES.<br/>Aceitar: <b>bb</b>, <b>aabb</b>, <b>bbaa</b>. Rejeitar: abb.',
        boardDoneUpTo: -1, stateUpdate: { nodes: [], transitions: [] } },
      { text: 'Foco em <b>bb</b>: núcleo fixo — dois "b"s seguidos. Preciso de q0→q2→q3(final).',
        boardDoneUpTo: 0, stateUpdate: { nodes: [], transitions: [] } },
      { text: 'Solução: q0—b→q2—b→<b>q3</b>(final). "bb" ✓. Próxima: "aabb" — q0 sem seta para "a"!',
        boardDoneUpTo: 1, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 20, y: 65, isInitial: true, isFinal: false },
            { id: 'q2', label: 'q2', x: 50, y: 65, isInitial: false, isFinal: false },
            { id: 'q3', label: 'q3', x: 80, y: 65, isInitial: false, isFinal: true },
          ],
          transitions: [
            { from: 'q0', to: 'q2', symbol: 'b' },
            { from: 'q2', to: 'q3', symbol: 'b' },
          ] } },
      { text: 'Foco em <b>aabb</b>: "a" trava em q0 — sem seta! Preciso de vai-e-volta para prefixo par de "a"s.',
        boardDoneUpTo: 1, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 20, y: 65, isInitial: true, isFinal: false },
            { id: 'q2', label: 'q2', x: 50, y: 65, isInitial: false, isFinal: false },
            { id: 'q3', label: 'q3', x: 80, y: 65, isInitial: false, isFinal: true },
          ],
          transitions: [
            { from: 'q0', to: 'q2', symbol: 'b' },
            { from: 'q2', to: 'q3', symbol: 'b' },
          ] } },
      { text: 'Fix A: q0↔q1(a). Par de "a"s volta a q0, que segue para o núcleo. "aabb" ✓. Próxima: "bbaa"!',
        boardDoneUpTo: 2, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 20, y: 65, isInitial: true, isFinal: false },
            { id: 'q1', label: 'q1', x: 20, y: 35, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 50, y: 65, isInitial: false, isFinal: false },
            { id: 'q3', label: 'q3', x: 80, y: 65, isInitial: false, isFinal: true },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q0', symbol: 'a' },
            { from: 'q0', to: 'q2', symbol: 'b' },
            { from: 'q2', to: 'q3', symbol: 'b' },
          ] } },
      { text: 'Foco em <b>bbaa</b>: q3 lê "a" — sem seta! Sufixo par de "a"s também precisa de controle.',
        boardDoneUpTo: 2, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 20, y: 65, isInitial: true, isFinal: false },
            { id: 'q1', label: 'q1', x: 20, y: 35, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 50, y: 65, isInitial: false, isFinal: false },
            { id: 'q3', label: 'q3', x: 80, y: 65, isInitial: false, isFinal: true },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q0', symbol: 'a' },
            { from: 'q0', to: 'q2', symbol: 'b' },
            { from: 'q2', to: 'q3', symbol: 'b' },
          ] } },
      { text: 'Fix B: q3↔q4(a). Par de "a"s volta a q3(final). "bbaa" ✓ Concluído!',
        boardDoneUpTo: 3, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 20, y: 65, isInitial: true, isFinal: false },
            { id: 'q1', label: 'q1', x: 20, y: 35, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 50, y: 65, isInitial: false, isFinal: false },
            { id: 'q3', label: 'q3', x: 80, y: 65, isInitial: false, isFinal: true },
            { id: 'q4', label: 'q4', x: 80, y: 35, isInitial: false, isFinal: false },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q0', symbol: 'a' },
            { from: 'q0', to: 'q2', symbol: 'b' },
            { from: 'q2', to: 'q3', symbol: 'b' },
            { from: 'q3', to: 'q4', symbol: 'a' },
            { from: 'q4', to: 'q3', symbol: 'a' },
          ] } },
    ] },
  { id: 11, label: "L11", formula: "L = { a^n b^m | (n + m) é par e n,m ≥ 0 }",                         desc: "",                                                                 shortestWord: "",         regex: /^((aa)*(bb)*|a(aa)*b(bb)*)$/,                               alphabet: ['a', 'b'],             acceptedWords: ["λ","aa","ab"],            rejectedWords: ["a","b","aab"],         hint: "A soma é par se ambos forem pares, ou se ambos forem ímpares!",                                                    successMsg: "Lógica matemática aplicada no grafo. Lindo!",
    tutorials: {
      onStart: { type: 'theory', title: 'Dois Casos de Paridade!', dialog: [
        'n + m é par em dois casos: AMBOS pares (0+0, 2+2...) ou AMBOS ímpares (1+1, 3+1...).',
        'Lógica: cada "a" ou "b" lido alterna a paridade do contador parcial correspondente.',
        'Quadrado limpo: 4 estados em grid 2×2. Horizontais com "a", verticais com "b". Zero diagonais!',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Quadrado Limpo de Paridade', dialog: [
        'Topo: <b>q0</b>(ini/final)↔<b>q1</b> com "a". Base: <b>q2</b>↔<b>q3</b>(final) com "a".',
        'Esquerda: <b>q0</b>↔<b>q2</b> com "b". Direita: <b>q1</b>↔<b>q3</b> com "b".',
        'Nenhuma seta diagonal — o quadrado garante clareza visual total!',
      ] },
    },
    boardWords: ['λ', 'aa', 'ab', 'bb'],
    guidedLesson: [
      { text: 'n+m par: AMBOS pares ou AMBOS ímpares!<br/>Aceitar: <b>λ</b>, <b>aa</b>, <b>ab</b>, <b>bb</b>. Rejeitar: a, b.',
        boardDoneUpTo: -1, stateUpdate: { nodes: [], transitions: [] } },
      { text: 'Foco em <b>λ</b> e <b>aa</b>: q0(ini,final) aceita λ; vai-e-volta q0↔q1(a) aceita aa.',
        boardDoneUpTo: 0, stateUpdate: { nodes: [], transitions: [] } },
      { text: 'Solução: q0(ini,final)↔q1(a). λ ✓ aa ✓. Próxima: "ab" e "bb" — sem seta para "b"!',
        boardDoneUpTo: 2, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 20, y: 20, isInitial: true, isFinal: true },
            { id: 'q1', label: 'q1', x: 80, y: 20, isInitial: false, isFinal: false },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q0', symbol: 'a' },
          ] } },
      { text: 'Foco em <b>ab</b> e <b>bb</b>: q1 lê "b" — sem seta! q0 lê "b" — sem seta! Faltam os lados do quadrado.',
        boardDoneUpTo: 2, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 20, y: 20, isInitial: true, isFinal: true },
            { id: 'q1', label: 'q1', x: 80, y: 20, isInitial: false, isFinal: false },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q0', symbol: 'a' },
          ] } },
      { text: 'Solução: quadrado completo! q0↔q2(b), q1↔q3(b), q2↔q3(a). "ab" ✓ "bb" ✓ Concluído!',
        boardDoneUpTo: 4, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 20, y: 20, isInitial: true, isFinal: true },
            { id: 'q1', label: 'q1', x: 80, y: 20, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 20, y: 80, isInitial: false, isFinal: false },
            { id: 'q3', label: 'q3', x: 80, y: 80, isInitial: false, isFinal: true },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q0', symbol: 'a' },
            { from: 'q2', to: 'q3', symbol: 'a' },
            { from: 'q3', to: 'q2', symbol: 'a' },
            { from: 'q0', to: 'q2', symbol: 'b' },
            { from: 'q2', to: 'q0', symbol: 'b' },
            { from: 'q1', to: 'q3', symbol: 'b' },
            { from: 'q3', to: 'q1', symbol: 'b' },
          ] } },
    ] },
  { id: 12, label: "L12", formula: "L = { a^n b^2m | n > 0, m > 0 }",                                    desc: "",                                                                 shortestWord: "abb",      regex: /^a+(bb)+$/,                                                 alphabet: ['a', 'b'],             acceptedWords: ["abb","aabb","abbbb"],      rejectedWords: ["a","ab","bb"],         hint: "Os 'b's só podem vir em duplas após pelo menos um 'a'.",                                                            successMsg: "Duplas de B controladas.",
    tutorials: {
      onStart: { type: 'theory', title: 'Armadilha Natural dos "b"s Ímpares!', dialog: [
        'b^2m com m > 0: pelo menos UM par de "b"s, nunca um "b" avulso.',
        'Segredo: o estado no "meio" de cada par NÃO é final — "b" solitário trava e morre!',
        'Isso cria um <u>ping-pong</u> natural: estado-de-ida (não-final) ↔ estado-de-chegada (final).',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Montando o Ping-Pong de B', dialog: [
        'Caminho: <b>q0</b>(loop a) → <b>q1</b> → <b>q2</b>↔<b>q3</b>(final).',
        '<b>q1</b> garante n > 0: sem pelo menos um "a", nunca chega ao bloco de "b"s.',
        'O ping-pong <b>q2↔q3</b> aceita exatamente bb, bbbb, bbbbbb — pares infinitos!',
      ] },
    },
    boardWords: ['abb', 'aabb', 'abbbb'],
    guidedLesson: [
      { text: 'b\'s em DUPLAS obrigatórias! n≥1, m≥1.<br/>Aceitar: <b>abb</b>, <b>aabb</b>, <b>abbbb</b>. Rejeitar: ab.',
        boardDoneUpTo: -1, stateUpdate: { nodes: [], transitions: [] } },
      { text: 'Foco em <b>abb</b>: 1 "a" + 1 dupla de "b"s. Cadeia q0—a→q1—b→q2—b→q3(final).',
        boardDoneUpTo: 0, stateUpdate: { nodes: [], transitions: [] } },
      { text: 'Solução: q0→q1→q2→<b>q3</b>(final). q2 não-final: "b" avulso rejeita. "abb" ✓. Próxima: "aabb"!',
        boardDoneUpTo: 1, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 15, y: 50, isInitial: true, isFinal: false },
            { id: 'q1', label: 'q1', x: 38, y: 50, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 60, y: 50, isInitial: false, isFinal: false },
            { id: 'q3', label: 'q3', x: 82, y: 50, isInitial: false, isFinal: true },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q2', symbol: 'b' },
            { from: 'q2', to: 'q3', symbol: 'b' },
          ] } },
      { text: 'Foco em <b>aabb</b>: 2° "a" em q1 — sem seta! Preciso de loop em q1.',
        boardDoneUpTo: 1, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 15, y: 50, isInitial: true, isFinal: false },
            { id: 'q1', label: 'q1', x: 38, y: 50, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 60, y: 50, isInitial: false, isFinal: false },
            { id: 'q3', label: 'q3', x: 82, y: 50, isInitial: false, isFinal: true },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q2', symbol: 'b' },
            { from: 'q2', to: 'q3', symbol: 'b' },
          ] } },
      { text: 'Solução: loop q1—a→q1. "aabb" ✓. Próxima: "abbbb" — q3 sem seta para 3° "b"!',
        boardDoneUpTo: 2, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 15, y: 50, isInitial: true, isFinal: false },
            { id: 'q1', label: 'q1', x: 38, y: 50, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 60, y: 50, isInitial: false, isFinal: false },
            { id: 'q3', label: 'q3', x: 82, y: 50, isInitial: false, isFinal: true },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q2', symbol: 'b' },
            { from: 'q2', to: 'q3', symbol: 'b' },
          ] } },
      { text: 'Foco em <b>abbbb</b>: 4 "b"s = 2 duplas. q3 lê "b" — morre! Preciso de ping-pong.',
        boardDoneUpTo: 2, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 15, y: 50, isInitial: true, isFinal: false },
            { id: 'q1', label: 'q1', x: 38, y: 50, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 60, y: 50, isInitial: false, isFinal: false },
            { id: 'q3', label: 'q3', x: 82, y: 50, isInitial: false, isFinal: true },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q2', symbol: 'b' },
            { from: 'q2', to: 'q3', symbol: 'b' },
          ] } },
      { text: 'Solução: <u>ping-pong</u> q3—b→q2. Duplas infinitas! "abbbb" ✓ Concluído!',
        boardDoneUpTo: 3, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 15, y: 50, isInitial: true, isFinal: false },
            { id: 'q1', label: 'q1', x: 38, y: 50, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 60, y: 50, isInitial: false, isFinal: false },
            { id: 'q3', label: 'q3', x: 82, y: 50, isInitial: false, isFinal: true },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q2', symbol: 'b' },
            { from: 'q2', to: 'q3', symbol: 'b' },
            { from: 'q3', to: 'q2', symbol: 'b' },
          ] } },
    ] },
  { id: 13, label: "L13", formula: "L = { (ab)^n (cd)^m | n > 0, m > 0 }",                               desc: "",                                                                 shortestWord: "abcd",     regex: /^(ab)+(cd)+$/,                                              alphabet: ['a', 'b', 'c', 'd'],   acceptedWords: ["abcd","ababcd","abcdcd"], rejectedWords: ["ab","cd","abdc"],      hint: "Blocos duplos de 'ab' seguidos por blocos duplos de 'cd'.",                                                        successMsg: "Padrão silábico validado!",
    tutorials: {
      onStart: { type: 'theory', title: 'Dois Ciclos em Série — Engrenagens!', dialog: [
        'Dois padrões cíclicos encadeados: (ab)^n depois (cd)^m, com n,m ≥ 1.',
        'Cada ciclo exige seu par de estados — duas "engrenagens" separadas no grafo.',
        'As engrenagens são conectadas por uma <u>seta-ponte</u>: do fim do ciclo ab para o início de cd!',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'A Seta-Ponte Entre os Ciclos', dialog: [
        'Ciclo AB: <b>q1</b>→(a)→<b>q1</b>. Espera — ciclo correto: q0→q1(a), q1→q2(b), q2→q1(a).',
        'Seta-ponte: <b>q2</b>→<b>q3</b> com "c" — saiu do ciclo ab, entrou no ciclo cd.',
        'Como n,m ≥ 1, não há atalho! O ciclo ab gira ao menos UMA vez antes da ponte.',
      ] },
    },
    boardWords: ['abcd', 'ababcd', 'abcdcd'],
    guidedLesson: [
      { text: 'Dois ciclos silábicos: (ab)^n + (cd)^m, n,m≥1.<br/>Aceitar: <b>abcd</b>, <b>ababcd</b>, <b>abcdcd</b>.',
        boardDoneUpTo: -1, stateUpdate: { nodes: [], transitions: [] } },
      { text: 'Foco em <b>abcd</b>: menor caso — 1 ciclo ab + 1 ciclo cd. Preciso de 5 estados em linha.',
        boardDoneUpTo: 0, stateUpdate: { nodes: [], transitions: [] } },
      { text: 'Solução: q0→q1(a)→q2(b)→q3(c)→<b>q4</b>(final). "abcd" ✓. Próxima: "ababcd"!',
        boardDoneUpTo: 1, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 12, y: 50, isInitial: true, isFinal: false },
            { id: 'q1', label: 'q1', x: 30, y: 50, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 50, y: 50, isInitial: false, isFinal: false },
            { id: 'q3', label: 'q3', x: 68, y: 50, isInitial: false, isFinal: false },
            { id: 'q4', label: 'q4', x: 85, y: 50, isInitial: false, isFinal: true },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q2', symbol: 'b' },
            { from: 'q2', to: 'q3', symbol: 'c' },
            { from: 'q3', to: 'q4', symbol: 'd' },
          ] } },
      { text: 'Foco em <b>ababcd</b>: 2° "ab" — q2 lê "a" sem seta! Preciso voltar ao ciclo ab.',
        boardDoneUpTo: 1, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 12, y: 50, isInitial: true, isFinal: false },
            { id: 'q1', label: 'q1', x: 30, y: 50, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 50, y: 50, isInitial: false, isFinal: false },
            { id: 'q3', label: 'q3', x: 68, y: 50, isInitial: false, isFinal: false },
            { id: 'q4', label: 'q4', x: 85, y: 50, isInitial: false, isFinal: true },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q2', symbol: 'b' },
            { from: 'q2', to: 'q3', symbol: 'c' },
            { from: 'q3', to: 'q4', symbol: 'd' },
          ] } },
      { text: 'Solução: seta q2—a→q1 (volta ao ciclo ab). "ababcd" ✓. Próxima: "abcdcd"!',
        boardDoneUpTo: 2, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 12, y: 50, isInitial: true, isFinal: false },
            { id: 'q1', label: 'q1', x: 30, y: 50, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 50, y: 50, isInitial: false, isFinal: false },
            { id: 'q3', label: 'q3', x: 68, y: 50, isInitial: false, isFinal: false },
            { id: 'q4', label: 'q4', x: 85, y: 50, isInitial: false, isFinal: true },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q2', symbol: 'b' },
            { from: 'q2', to: 'q1', symbol: 'a' },
            { from: 'q2', to: 'q3', symbol: 'c' },
            { from: 'q3', to: 'q4', symbol: 'd' },
          ] } },
      { text: 'Foco em <b>abcdcd</b>: 2° "cd" — q4 lê "c" sem seta! Preciso voltar ao ciclo cd.',
        boardDoneUpTo: 2, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 12, y: 50, isInitial: true, isFinal: false },
            { id: 'q1', label: 'q1', x: 30, y: 50, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 50, y: 50, isInitial: false, isFinal: false },
            { id: 'q3', label: 'q3', x: 68, y: 50, isInitial: false, isFinal: false },
            { id: 'q4', label: 'q4', x: 85, y: 50, isInitial: false, isFinal: true },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q2', symbol: 'b' },
            { from: 'q2', to: 'q1', symbol: 'a' },
            { from: 'q2', to: 'q3', symbol: 'c' },
            { from: 'q3', to: 'q4', symbol: 'd' },
          ] } },
      { text: 'Solução: seta q4—c→q3 (volta ao ciclo cd). "abcdcd" ✓ Concluído!',
        boardDoneUpTo: 3, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 12, y: 50, isInitial: true, isFinal: false },
            { id: 'q1', label: 'q1', x: 30, y: 50, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 50, y: 50, isInitial: false, isFinal: false },
            { id: 'q3', label: 'q3', x: 68, y: 50, isInitial: false, isFinal: false },
            { id: 'q4', label: 'q4', x: 85, y: 50, isInitial: false, isFinal: true },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q2', symbol: 'b' },
            { from: 'q2', to: 'q1', symbol: 'a' },
            { from: 'q2', to: 'q3', symbol: 'c' },
            { from: 'q3', to: 'q4', symbol: 'd' },
            { from: 'q4', to: 'q3', symbol: 'c' },
          ] } },
    ] },
  { id: 14, label: "L14", formula: "L = { w ∈ {a,b}* | |w|a = |w|b }", impossible: true,                                  desc: "",                                                                 shortestWord: null,       regex: /^[ab]*$/, validate: w => [...w].filter(c=>c==='a').length === [...w].filter(c=>c==='b').length, alphabet: ['a', 'b'], acceptedWords: [],  rejectedWords: ["a","b","aab"],         hint: "Cuidado, essa é clássica! Garantir quantidade igual pode exigir muitos estados.",                                   successMsg: "Sobreviveu à máquina de estados complexa!",
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
          nodes: [{ id: 'q0', label: 'q0', x: 50, y: 50, isInitial: true, isFinal: true }],
          transitions: [] } },
      { text: 'Foco em <b>ab</b>: 1 "a" depois 1 "b" — precisamos de q1 para "lembrar" o a pendente.',
        boardDoneUpTo: 1, stateUpdate: {
          nodes: [{ id: 'q0', label: 'q0', x: 50, y: 50, isInitial: true, isFinal: true }],
          transitions: [] } },
      { text: 'Solução: q0→q1(a)→q0(b). "ab" ✓. Próxima: "aabb"!',
        boardDoneUpTo: 2, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 50, y: 60, isInitial: true, isFinal: true },
            { id: 'q1', label: 'q1', x: 50, y: 20, isInitial: false, isFinal: false },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q0', symbol: 'b' },
          ] } },
      { text: 'Foco em <b>aabb</b>: 2 "a"s seguidos — q1 lê 2° "a", mas q1→q0 era para "b"! Preciso de q2.',
        boardDoneUpTo: 2, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 50, y: 60, isInitial: true, isFinal: true },
            { id: 'q1', label: 'q1', x: 50, y: 20, isInitial: false, isFinal: false },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q0', symbol: 'b' },
          ] } },
      { text: 'Solução: q1→q2(a), q2→q1(b). "aabb" ✓. Mas agora... "aaabbb" precisaria de q3!',
        boardDoneUpTo: 3, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 50, y: 65, isInitial: true, isFinal: true },
            { id: 'q1', label: 'q1', x: 20, y: 35, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 80, y: 35, isInitial: false, isFinal: false },
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
            { id: 'q0', label: 'q0', x: 50, y: 65, isInitial: true, isFinal: true },
            { id: 'q1', label: 'q1', x: 20, y: 35, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 80, y: 35, isInitial: false, isFinal: false },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q2', symbol: 'a' },
            { from: 'q2', to: 'q1', symbol: 'b' },
            { from: 'q1', to: 'q0', symbol: 'b' },
          ] } },
    ] },
  { id: 15, label: "L15", formula: "L = { w ∈ {a,b}* | |w|a + |w|b é par }",                            desc: "",                                                                 shortestWord: "",         regex: /^([ab]{2})*$/,                                              alphabet: ['a', 'b'],             acceptedWords: ["λ","aa","ab"],            rejectedWords: ["a","b","aab"],         hint: "Não importa a ordem, desde que o tamanho total da palavra seja par.",                                               successMsg: "Tamanho par garantido com sucesso.",
    tutorials: {
      onStart: { type: 'theory', title: 'Tamanho Par — O Símbolo Não Importa!', dialog: [
        'L15: qualquer "a" ou "b" lido aumenta o comprimento em 1.',
        'Par ou ímpar depende APENAS de quantas letras foram lidas — não de qual letra!',
        '"a" e "b" se comportam identicamente: ambos alternam a paridade do comprimento.',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Vai-e-Volta Universal', dialog: [
        'Estrutura mínima: <b>q0</b>(par, final) ↔ <b>q1</b>(ímpar).',
        'Adicione q0↔q1 com "a" E q0↔q1 com "b" — são 4 setas ao total.',
        'As 4 setas fazem o mesmo vai-e-volta para qualquer símbolo. Elegante e mínimo!',
      ] },
    },
    boardWords: ['λ', 'aa', 'ab', 'ba'],
    guidedLesson: [
      { text: 'Comprimento par! A ordem não importa.<br/>Aceitar: <b>λ</b>, <b>aa</b>, <b>ab</b>, <b>ba</b>. Rejeitar: a, b.',
        boardDoneUpTo: -1, stateUpdate: { nodes: [], transitions: [] } },
      { text: 'Foco em <b>λ</b> e <b>aa</b>: ambas têm comprimento par (0 e 2). A mesma estrutura vai resolver as duas!',
        boardDoneUpTo: 0, stateUpdate: { nodes: [], transitions: [] } },
      { text: 'Solução: q0(ini,final)↔q1 com "a". λ=q0✓, aa=q0→q1→q0✓. Próxima: "ab" e "ba"!',
        boardDoneUpTo: 2, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 28, y: 50, isInitial: true, isFinal: true },
            { id: 'q1', label: 'q1', x: 68, y: 50, isInitial: false, isFinal: false },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q0', symbol: 'a' },
          ] } },
      { text: 'Foco em <b>ab</b> e <b>ba</b>: q1 lê "b" — sem seta! "b" precisa do mesmo vai-e-volta.',
        boardDoneUpTo: 2, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 28, y: 50, isInitial: true, isFinal: true },
            { id: 'q1', label: 'q1', x: 68, y: 50, isInitial: false, isFinal: false },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q0', symbol: 'a' },
          ] } },
      { text: 'Solução: q0↔q1(b). ab=q0→q1→q0✓, ba=q0→q1→q0✓ ✔ Concluído!',
        boardDoneUpTo: 4, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 28, y: 50, isInitial: true, isFinal: true },
            { id: 'q1', label: 'q1', x: 68, y: 50, isInitial: false, isFinal: false },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a,b' },
            { from: 'q1', to: 'q0', symbol: 'a,b' },
          ] } },
    ] },
  { id: 16, label: "L16", formula: "L = { u a v b x c y | u,v,x,y ∈ {a,b,c}* }",                       desc: "",                                                                 shortestWord: "abc",      regex: /^[abc]*a[abc]*b[abc]*c[abc]*$/,                             alphabet: ['a', 'b', 'c'],        acceptedWords: ["abc","aabc","abbc"],       rejectedWords: ["λ","ab","bc"],         hint: "A palavra tem que ter pelo menos um 'a', um 'b' e um 'c', na ordem.",                                               successMsg: "Filtro de caracteres construído.",
    tutorials: {
      onStart: { type: 'theory', title: 'Busca Sequencial de Símbolos!', dialog: [
        'L16 exige ao menos um "a", um "b" e um "c" — nessa ORDEM, mas com qualquer coisa entre eles.',
        '"aabc", "abbc", "abc" — válidos. "bca" ou "acb" — inválidos (ordem errada)!',
        'Estratégia: rastrear o PROGRESSO: buscando "a" → achei → buscando "b" → achei → buscando "c" → fim!',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Estados de Progresso + Loops', dialog: [
        '4 estados: <b>q0</b>(busca a) → <b>q1</b>(busca b) → <b>q2</b>(busca c) → <b>q3</b>(final).',
        'Enquanto aguarda o próximo alvo, o estado fica em <u>loop</u> para os outros símbolos.',
        '<b>q0</b> loop b,c; <b>q1</b> loop a,c; <b>q2</b> loop a,b; <b>q3</b> loop a,b,c.',
      ] },
    },
    boardWords: ['abc', 'aabc', 'abbc'],
    guidedLesson: [
      { text: 'Busca em ordem: a → b → c!<br/>Aceitar: <b>abc</b>, <b>aabc</b>, <b>abbc</b>. Rejeitar: λ, ab, bca.',
        boardDoneUpTo: -1, stateUpdate: { nodes: [], transitions: [] } },
      { text: 'Foco em <b>abc</b>: menor caso — um "a", um "b", um "c" em linha. 4 estados em série.',
        boardDoneUpTo: 0, stateUpdate: { nodes: [], transitions: [] } },
      { text: 'Solução: q0→q1(a)→q2(b)→<b>q3</b>(final). "abc" ✓. Próxima: "aabc" e "abbc"!',
        boardDoneUpTo: 1, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 15, y: 50, isInitial: true, isFinal: false },
            { id: 'q1', label: 'q1', x: 38, y: 50, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 62, y: 50, isInitial: false, isFinal: false },
            { id: 'q3', label: 'q3', x: 85, y: 50, isInitial: false, isFinal: true },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q2', symbol: 'b' },
            { from: 'q2', to: 'q3', symbol: 'c' },
          ] } },
      { text: 'Foco em <b>aabc</b> e <b>abbc</b>: q1 lê 2° "a" — sem seta! q0 e q2 também precisam de loops de espera.',
        boardDoneUpTo: 1, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 15, y: 50, isInitial: true, isFinal: false },
            { id: 'q1', label: 'q1', x: 38, y: 50, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 62, y: 50, isInitial: false, isFinal: false },
            { id: 'q3', label: 'q3', x: 85, y: 50, isInitial: false, isFinal: true },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q2', symbol: 'b' },
            { from: 'q2', to: 'q3', symbol: 'c' },
          ] } },
      { text: 'Solução: loops q0(b,c), q1(a,c), q2(a,b), q3(a,b,c). "aabc" e "abbc" ✓ Concluído!',
        boardDoneUpTo: 3, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 15, y: 50, isInitial: true, isFinal: false },
            { id: 'q1', label: 'q1', x: 38, y: 50, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 62, y: 50, isInitial: false, isFinal: false },
            { id: 'q3', label: 'q3', x: 85, y: 50, isInitial: false, isFinal: true },
          ],
          transitions: [
            { from: 'q0', to: 'q0', symbol: 'b,c' },
            { from: 'q0', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q1', symbol: 'a,c' },
            { from: 'q1', to: 'q2', symbol: 'b' },
            { from: 'q2', to: 'q2', symbol: 'a,b' },
            { from: 'q2', to: 'q3', symbol: 'c' },
            { from: 'q3', to: 'q3', symbol: 'a,b,c' },
          ] } },
    ] },
  { id: 17, label: "L17", formula: "L = { w ∈ {a,b}* | começa com a e tem tamanho par }",               desc: "",                                                                 shortestWord: "aa",       regex: /^a[ab]([ab]{2})*$/,                                         alphabet: ['a', 'b'],             acceptedWords: ["aa","ab","abba"],          rejectedWords: ["a","b","aba"],         hint: "Forçar o início e depois manter a paridade.",                                                                       successMsg: "Paridade e prefixo resolvidos.",
    tutorials: {
      onStart: { type: 'theory', title: 'Dois Requisitos Simultâneos!', dialog: [
        'L17: a palavra deve começar com "a" E ter comprimento PAR.',
        '"aa", "ab", "abba" — válidas. "a" (ímpar), "ba" (não começa com a) — inválidas.',
        'O AFD verifica os dois ao mesmo tempo: o <u>prefixo</u> e a <u>paridade do comprimento</u>.',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Vai-e-Volta Após o Primeiro "a"', dialog: [
        '<b>q0</b>(inicial) só aceita "a" como primeiro símbolo. "b"? → armadilha <b>qT</b>.',
        'Após o "a": q0→<b>q1</b>(ímpar). Vai-e-volta <b>q1</b>↔<b>q2</b>(final) para cada símbolo.',
        '<b>q2</b> é final: comprimento ≥2, par, iniciou com "a". Cada símbolo inverte a paridade!',
      ] },
    },
    boardWords: ['aa', 'ab', 'abba'],
    guidedLesson: [
      { text: 'Começa com "a" + tamanho PAR!<br/>Aceitar: <b>aa</b>, <b>ab</b>, <b>abba</b>. Rejeitar: a, ba, aba.',
        boardDoneUpTo: -1, stateUpdate: { nodes: [], transitions: [] } },
      { text: 'Foco em <b>aa</b> e <b>ab</b>: ambas têm 2 letras, começam com "a". A mesma estrutura vai resolver as duas!',
        boardDoneUpTo: 0, stateUpdate: { nodes: [], transitions: [] } },
      { text: 'Solução: q0→q1(a)↔q2(a,b,final). "aa"=q0→q1→q2✓, "ab"=q0→q1→q2✓. Próxima: "abba"!',
        boardDoneUpTo: 2, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 15, y: 50, isInitial: true, isFinal: false },
            { id: 'q1', label: 'q1', x: 50, y: 50, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 82, y: 50, isInitial: false, isFinal: true },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q2', symbol: 'a,b' },
            { from: 'q2', to: 'q1', symbol: 'a,b' },
          ] } },
      { text: 'Foco em <b>abba</b>: 4 letras, começa com "a". Caminho q0→q1→q2→q1→q2. Vai funcionar?',
        boardDoneUpTo: 2, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 15, y: 50, isInitial: true, isFinal: false },
            { id: 'q1', label: 'q1', x: 50, y: 50, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 82, y: 50, isInitial: false, isFinal: true },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q2', symbol: 'a,b' },
            { from: 'q2', to: 'q1', symbol: 'a,b' },
          ] } },
      { text: '"abba": q0→q1(a)→q2(b)→q1(b)→q2(a,<b>final</b>)✓ Grafo já aceita! "ba" rejeita por dead-state em q0. Concluído!',
        boardDoneUpTo: 3, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 15, y: 50, isInitial: true, isFinal: false },
            { id: 'q1', label: 'q1', x: 50, y: 50, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 82, y: 50, isInitial: false, isFinal: true },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q2', symbol: 'a,b' },
            { from: 'q2', to: 'q1', symbol: 'a,b' },
          ] } },
    ] },
  { id: 18, label: "L18", formula: "L = { w ∈ {a,b}* | w não contém 'aa' como subpalavra }",         desc: "",                                                                 shortestWord: "",         regex: /^(b|ab)*a?$/,                                         alphabet: ['a', 'b'],             acceptedWords: ["λ","a","b","ab","ba"],     rejectedWords: ["aa","aab","baa"],   hint: "Se dois 'a's aparecerem seguidos, o autômato trava. 'b' reinicia a contagem.",                                      successMsg: "Sem 'aa' consecutivos!",
    tutorials: {
      onStart: { type: 'theory', title: 'Proibido: dois \'a\'s seguidos!', dialog: [
        'A linguagem L18 aceita qualquer palavra que NÃO contenha "aa" como subpalavra.',
        '2 estados: q0 (nenhum "a" pendente, inicial e final) e q1 (um "a" pendente, final).',
        'Um segundo "a" em q1 não tem seta: dead-state implícito rejeita "aa", "aab", "baa"!',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Dois Estados, Dead-State Implícito', dialog: [
        '<b>q0</b>(ini, final): loop de "b". <b>q1</b>(final): "b" volta para q0.',
        'q0 —a→ q1: leu um "a". q1 —b→ q0: "b" reinicia. q1 sem seta para "a" = dead!',
        '"ab": q0→q1→q0 ✔ "ba": q0→q0→q1 ✔ "aa": q0→q1→<b>trava</b> ✗',
      ] },
    },
    boardWords: ['λ', 'a', 'b', 'ab', 'ba'],
    guidedLesson: [
      { text: 'Proibido: dois "a"s seguidos!<br/>Aceitar: <b>λ</b>, <b>a</b>, <b>b</b>, <b>ab</b>, <b>ba</b>. Rejeitar: aa, aab, baa.',
        boardDoneUpTo: -1, stateUpdate: { nodes: [], transitions: [] } },
      { text: 'Foco em <b>λ</b> e <b>b</b>: ambas sem "a". q0 final + loop b resolve as duas de uma vez!',
        boardDoneUpTo: 0, stateUpdate: { nodes: [], transitions: [] } },
      { text: 'Solução: q0(ini,final) + loop b. λ=q0✓, b=q0→q0✓. Próxima: "a", "ab", "ba"!',
        boardDoneUpTo: 2, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 25, y: 50, isInitial: true, isFinal: true },
          ],
          transitions: [
            { from: 'q0', to: 'q0', symbol: 'b' },
          ] } },
      { text: 'Foco em <b>a</b>, <b>ab</b>, <b>ba</b>: precisam de q1 para o "a" pendente e retorno com "b".',
        boardDoneUpTo: 2, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 25, y: 50, isInitial: true, isFinal: true },
          ],
          transitions: [
            { from: 'q0', to: 'q0', symbol: 'b' },
          ] } },
      { text: 'Solução: q0→q1(a), q1(final), q1→q0(b). a✓, ab✓, ba✓. "aa"? q1 sem seta para "a" — <u>dead-state</u>! Concluído!',
        boardDoneUpTo: 5, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 25, y: 50, isInitial: true, isFinal: true },
            { id: 'q1', label: 'q1', x: 75, y: 50, isInitial: false, isFinal: true },
          ],
          transitions: [
            { from: 'q0', to: 'q0', symbol: 'b' },
            { from: 'q0', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q0', symbol: 'b' },
          ] } },
    ] },
  { id: 19, label: "L19", formula: "L = { w ∈ {a,b}* | qtd(a) e qtd(b) são ambas ímpares }",           desc: "",                                                                 shortestWord: "ab",       validate: (w) => { let a=0,b=0; for(const c of w){if(c==='a')a++;else if(c==='b')b++;} return a%2===1&&b%2===1; },                                                                           alphabet: ['a', 'b'],             acceptedWords: ["ab","ba","aaab"],          rejectedWords: ["λ","aa","abab","b"],   hint: "Cada 'a' alterna a paridade do contador de a's; cada 'b' alterna o de b's. Aceite quando os dois forem ímpares.",  successMsg: "Paridade dupla dominada!",
    tutorials: {
      onStart: { type: 'theory', title: 'Paridade Dupla!', dialog: [
        'Aceitar quando a quantidade de "a"s E a de "b"s são ambas ímpares ao mesmo tempo.',
        'Quadrado 2×2: q0(par,par), q1(ímpar,par), q2(par,ímpar), q3(ímpar,ímpar). Só q3 aceita!',
        'Cada "a" lido troca a linha (cima↔baixo). Cada "b" lido troca a coluna (esq↔dir).',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Quadrado de Paridade Dupla', dialog: [
        'Topo: <b>q0</b>(ini)↔<b>q1</b> com "a". Base: <b>q2</b>↔<b>q3</b>(final) com "a".',
        'Esquerda: <b>q0</b>↔<b>q2</b> com "b". Direita: <b>q1</b>↔<b>q3</b> com "b".',
        'Zero diagonais — quadrado limpo! "ab": q0→q1(a)→q3(b) ✔ "ba": q0→q2(b)→q3(a) ✔',
      ] },
    },
    boardWords: ['ab', 'ba', 'aaab'],
    guidedLesson: [
      { text: 'a\'s e b\'s em quantidade ímpar!<br/>Aceitar: <b>ab</b>, <b>ba</b>, <b>aaab</b>. Rejeitar: λ, aa, abab.',
        boardDoneUpTo: -1, stateUpdate: { nodes: [], transitions: [] } },
      { text: 'Foco em <b>ab</b> e <b>ba</b>: um de cada símbolo. Precisam de q3(final) alcançado de dois lados.',
        boardDoneUpTo: 0, stateUpdate: { nodes: [], transitions: [] } },
      { text: 'Solução: q0→q1(a)→q3(b,final), q0→q2(b)→q3(a). "ab" e "ba" ✓. Próxima: "aaab"!',
        boardDoneUpTo: 2, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 20, y: 20, isInitial: true, isFinal: false },
            { id: 'q1', label: 'q1', x: 80, y: 20, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 20, y: 80, isInitial: false, isFinal: false },
            { id: 'q3', label: 'q3', x: 80, y: 80, isInitial: false, isFinal: true },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a' },
            { from: 'q0', to: 'q2', symbol: 'b' },
            { from: 'q1', to: 'q3', symbol: 'b' },
            { from: 'q2', to: 'q3', symbol: 'a' },
          ] } },
      { text: 'Foco em <b>aaab</b>: 3 "a"s + 1 "b". q1 lê 2° "a" — sem seta! Preciso das arestas de volta.',
        boardDoneUpTo: 2, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 20, y: 20, isInitial: true, isFinal: false },
            { id: 'q1', label: 'q1', x: 80, y: 20, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 20, y: 80, isInitial: false, isFinal: false },
            { id: 'q3', label: 'q3', x: 80, y: 80, isInitial: false, isFinal: true },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a' },
            { from: 'q0', to: 'q2', symbol: 'b' },
            { from: 'q1', to: 'q3', symbol: 'b' },
            { from: 'q2', to: 'q3', symbol: 'a' },
          ] } },
      { text: 'Solução: quadrado bidirecional completo. "aaab": q0→q1→q0→q1→q3 ✓ Concluído!',
        boardDoneUpTo: 3, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 20, y: 20, isInitial: true, isFinal: false },
            { id: 'q1', label: 'q1', x: 80, y: 20, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 20, y: 80, isInitial: false, isFinal: false },
            { id: 'q3', label: 'q3', x: 80, y: 80, isInitial: false, isFinal: true },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q0', symbol: 'a' },
            { from: 'q2', to: 'q3', symbol: 'a' },
            { from: 'q3', to: 'q2', symbol: 'a' },
            { from: 'q0', to: 'q2', symbol: 'b' },
            { from: 'q2', to: 'q0', symbol: 'b' },
            { from: 'q1', to: 'q3', symbol: 'b' },
            { from: 'q3', to: 'q1', symbol: 'b' },
          ] } },
    ] },
  { id: 20, label: "L20", formula: "L = { w ∈ {a,b}* | |w| ≥ 2 e a's precedem os b's }",              desc: "",                                                                 shortestWord: "aa",       regex: /^(aa+|a+b+|bb+)$/,                                          alphabet: ['a', 'b'],             acceptedWords: ["aa","ab","bb"],            rejectedWords: ["λ","a","ba"],          hint: "Depois que o primeiro 'b' for lido, um 'a' nunca mais poderá aparecer.",                                            successMsg: "Transição irreversível dominada.",
    tutorials: {
      onStart: { type: 'theory', title: 'Transição Irreversível a→b!', dialog: [
        'L20: comprimento ≥ 2, e todos os "a"s ANTES de todos os "b"s.',
        '"aa", "ab", "bb" — válidas. "ba", "bba" — inválidas (b veio antes do a).',
        'Regra: uma vez que o primeiro "b" é lido, a porta para "a" fecha para sempre!',
      ] },
      onDrawGraph: { type: 'mechanic', title: '5 Estados: Dois Caminhos', dialog: [
        'Topo: <b>q0</b>(ini)→<b>q1</b>(a)→<b>q2</b>(final, loop a). q1→<b>q3</b>(final,b).',
        'Base: <b>q0</b>→<b>q4</b>(b)→<b>q3</b>(final, loop b). q2→<b>q3</b>(b) também!',
        'q4 sem seta para "a": dead-state implícito rejeita "ba...". q3 sem seta para "a": rejeita "...ab".',
      ] },
    },
    boardWords: ['ab', 'aa', 'bb', 'aab', 'abb'],
    guidedLesson: [
      { text: 'Tamanho ≥ 2, a\'s antes dos b\'s!<br/>Aceitar: <b>ab</b>, <b>aa</b>, <b>bb</b>, <b>aab</b>, <b>abb</b>. Rejeitar: λ, a, ba.',
        boardDoneUpTo: -1, stateUpdate: { nodes: [], transitions: [] } },
      { text: 'Foco em <b>ab</b>: 1 "a" depois 1 "b". Preciso de q0→q1(a)→q3(b,final).',
        boardDoneUpTo: 0, stateUpdate: { nodes: [], transitions: [] } },
      { text: 'Solução: q0→q1(a), q1→q3(b,final). "ab" ✓. Próxima: "aa"!',
        boardDoneUpTo: 1, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 15, y: 50, isInitial: true, isFinal: false },
            { id: 'q1', label: 'q1', x: 42, y: 20, isInitial: false, isFinal: false },
            { id: 'q3', label: 'q3', x: 75, y: 78, isInitial: false, isFinal: true },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q3', symbol: 'b' },
          ] } },
      { text: 'Foco em <b>aa</b>: 2 "a"s. q1 lê 2° "a" — sem seta! Preciso de q2(final) via q1.',
        boardDoneUpTo: 1, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 15, y: 50, isInitial: true, isFinal: false },
            { id: 'q1', label: 'q1', x: 42, y: 20, isInitial: false, isFinal: false },
            { id: 'q3', label: 'q3', x: 75, y: 78, isInitial: false, isFinal: true },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q3', symbol: 'b' },
          ] } },
      { text: 'Solução: q1→q2(a,final). "aa" ✓. Próxima: "bb"!',
        boardDoneUpTo: 2, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 15, y: 50, isInitial: true, isFinal: false },
            { id: 'q1', label: 'q1', x: 42, y: 20, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 82, y: 20, isInitial: false, isFinal: true },
            { id: 'q3', label: 'q3', x: 75, y: 78, isInitial: false, isFinal: true },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q2', symbol: 'a' },
            { from: 'q1', to: 'q3', symbol: 'b' },
          ] } },
      { text: 'Foco em <b>bb</b>: 2 "b"s. q0 lê "b" — sem seta! Preciso de q4 para o caminho b-b.',
        boardDoneUpTo: 2, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 15, y: 50, isInitial: true, isFinal: false },
            { id: 'q1', label: 'q1', x: 42, y: 20, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 82, y: 20, isInitial: false, isFinal: true },
            { id: 'q3', label: 'q3', x: 75, y: 78, isInitial: false, isFinal: true },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q2', symbol: 'a' },
            { from: 'q1', to: 'q3', symbol: 'b' },
          ] } },
      { text: 'Solução: q0→q4(b)→q3(b). q4 sem "a" — dead rejeita "ba...". "bb" ✓. Próximas: "aab" e "abb"!',
        boardDoneUpTo: 3, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 15, y: 50, isInitial: true, isFinal: false },
            { id: 'q1', label: 'q1', x: 42, y: 20, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 82, y: 20, isInitial: false, isFinal: true },
            { id: 'q3', label: 'q3', x: 75, y: 78, isInitial: false, isFinal: true },
            { id: 'q4', label: 'q4', x: 42, y: 80, isInitial: false, isFinal: false },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q2', symbol: 'a' },
            { from: 'q1', to: 'q3', symbol: 'b' },
            { from: 'q0', to: 'q4', symbol: 'b' },
            { from: 'q4', to: 'q3', symbol: 'b' },
          ] } },
      { text: 'Foco em <b>aab</b> e <b>abb</b>: q2 sem seta para "b", q3 sem seta para "b". Precisam de loops!',
        boardDoneUpTo: 3, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 15, y: 50, isInitial: true, isFinal: false },
            { id: 'q1', label: 'q1', x: 42, y: 20, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 82, y: 20, isInitial: false, isFinal: true },
            { id: 'q3', label: 'q3', x: 75, y: 78, isInitial: false, isFinal: true },
            { id: 'q4', label: 'q4', x: 42, y: 80, isInitial: false, isFinal: false },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q2', symbol: 'a' },
            { from: 'q1', to: 'q3', symbol: 'b' },
            { from: 'q0', to: 'q4', symbol: 'b' },
            { from: 'q4', to: 'q3', symbol: 'b' },
          ] } },
      { text: 'Solução: q2 loop a, q3 loop b, q2→q3(b). "aab"=q1→q2→q3✓, "abb"=q1→q3→q3✓ Concluído!',
        boardDoneUpTo: 5, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 15, y: 50, isInitial: true, isFinal: false },
            { id: 'q1', label: 'q1', x: 42, y: 20, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 82, y: 20, isInitial: false, isFinal: true },
            { id: 'q3', label: 'q3', x: 75, y: 78, isInitial: false, isFinal: true },
            { id: 'q4', label: 'q4', x: 42, y: 80, isInitial: false, isFinal: false },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q2', symbol: 'a' },
            { from: 'q2', to: 'q2', symbol: 'a' },
            { from: 'q1', to: 'q3', symbol: 'b' },
            { from: 'q2', to: 'q3', symbol: 'b' },
            { from: 'q3', to: 'q3', symbol: 'b' },
            { from: 'q0', to: 'q4', symbol: 'b' },
            { from: 'q4', to: 'q3', symbol: 'b' },
          ] } },
    ] },
];
