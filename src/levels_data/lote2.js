export const lote2 = [
  { id: 21, label: "L21", formula: "L = { w ∈ {a,b,c,d}* | a's precedem b's e c's precedem d's }",    desc: "",                                                                 shortestWord: "",         regex: /^a*b*c*d*$/,                                                alphabet: ['a', 'b', 'c', 'd'],   acceptedWords: ["λ","abcd","abc"],         rejectedWords: ["ba","ca","cb"],        hint: "É uma progressão linear estrita pelo alfabeto.",                                                                    successMsg: "Ordem alfabética mantida!",
    tutorials: {
      onStart: { type: 'theory', title: 'Ordem Alfabética Estrita!', dialog: [
        'L21: símbolos em ordem a* b* c* d* — cada bloco pode aparecer 0 ou mais vezes.',
        '"λ", "abcd", "aabdd", "bbdd" — válidos. "ba" ou "ca" — inválidos (ordem errada)!',
        'Uma vez que o AFD avança para o bloco "b", nunca volta para "a". Transições unidirecionais!',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Cadeia de Blocos com Atalhos', dialog: [
        '4 estados em zigue-zague: <b>q0</b>(a,ini,f), <b>q1</b>(b,f), <b>q2</b>(c,f), <b>q3</b>(d,f) — todos finais!',
        'Atalhos: q0→q3(d) e q1→q3(d). "ad" ✔ (pula b e c), "bd" ✔ (pula c), "cd" ✔ "d" ✔',
        '"ba" é rejeitado: q1 sem seta para "a". "cb" é rejeitado: q2 sem seta para "b". A ordem importa!',
      ] },
    },
    guidedLesson: [
      {
        text: '4 blocos em ordem: a* b* c* d* — todos opcionais!<br/>Aceitar: <b>λ</b>, <b>ab</b>, <b>abcd</b>, <b>bcd</b>, <b>d</b>. Rejeitar: <b>bd</b> (q1 sem seta para d).',
        stateUpdate: { nodes: [], transitions: [] },
      },
      {
        text: 'λ e a\'s: q0 inicial e final, loop em \'a\'!<br/>Status: <s>λ</s>, <s>a</s>. E "ab"?',
        stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 20, y: 65, isInitial: true, isFinal: true },
          ],
          transitions: [
            { from: 'q0', to: 'q0', symbol: 'a' },
          ],
        },
      },
      {
        text: '"ab": q0→q1(b, final, loop b). E "abc"?<br/>Status: <s>λ</s>, <s>a</s>, <s>ab</s>.',
        stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 20, y: 65, isInitial: true, isFinal: true },
            { id: 'q1', label: 'q1', x: 40, y: 35, isInitial: false, isFinal: true },
          ],
          transitions: [
            { from: 'q0', to: 'q0', symbol: 'a' },
            { from: 'q0', to: 'q1', symbol: 'b' },
            { from: 'q1', to: 'q1', symbol: 'b' },
          ],
        },
      },
      {
        text: '"abc": q1→q2(c, final, loop c). Atalho <b>q0→q2(c)</b> aceita "cd"!<br/>Status: <s>λ</s>, <s>a</s>, <s>ab</s>, <s>abc</s>, <s>cd</s>. E "abcd"?',
        stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 20, y: 65, isInitial: true, isFinal: true },
            { id: 'q1', label: 'q1', x: 40, y: 35, isInitial: false, isFinal: true },
            { id: 'q2', label: 'q2', x: 60, y: 65, isInitial: false, isFinal: true },
          ],
          transitions: [
            { from: 'q0', to: 'q0', symbol: 'a' },
            { from: 'q0', to: 'q1', symbol: 'b' },
            { from: 'q0', to: 'q2', symbol: 'c' },
            { from: 'q1', to: 'q1', symbol: 'b' },
            { from: 'q1', to: 'q2', symbol: 'c' },
            { from: 'q2', to: 'q2', symbol: 'c' },
          ],
        },
      },
      {
        text: 'Bloco "d": q2→q3(final, loop d). Atalhos: <b>q0→q3(d)</b> e <b>q1→q3(d)</b> — "ad" e "bd" pulam blocos do meio!<br/>Status: <s>λ</s>, <s>a</s>, <s>ab</s>, <s>abcd</s>, <s>ad</s>, <s>bd</s>, <s>d</s> ✔ Concluído!',
        stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 20, y: 65, isInitial: true, isFinal: true },
            { id: 'q1', label: 'q1', x: 40, y: 35, isInitial: false, isFinal: true },
            { id: 'q2', label: 'q2', x: 60, y: 65, isInitial: false, isFinal: true },
            { id: 'q3', label: 'q3', x: 80, y: 35, isInitial: false, isFinal: true },
          ],
          transitions: [
            { from: 'q0', to: 'q0', symbol: 'a' },
            { from: 'q0', to: 'q1', symbol: 'b' },
            { from: 'q0', to: 'q2', symbol: 'c' },
            { from: 'q0', to: 'q3', symbol: 'd' },
            { from: 'q1', to: 'q1', symbol: 'b' },
            { from: 'q1', to: 'q2', symbol: 'c' },
            { from: 'q1', to: 'q3', symbol: 'd' },
            { from: 'q2', to: 'q2', symbol: 'c' },
            { from: 'q2', to: 'q3', symbol: 'd' },
            { from: 'q3', to: 'q3', symbol: 'd' },
          ],
        },
      },
    ] },
  { id: 22, label: "L22", formula: "L = { w ∈ {0,1}* | w é um número par }",
    aliases: [
      "L = { w ∈ {0,1}* | w é par }",
      "L = { w ∈ {0,1}* | w termina em 0 }",
      "L = { w ∈ {0,1}* | w termina com 0 }",
    ],
    desc: "",                                                                 shortestWord: "0",        regex: /^[01]*0$/,                                                  alphabet: ['0', '1'],             acceptedWords: ["0","10","110"],            rejectedWords: ["1","11","101"],        hint: "Pense em binário! Todo número binário par termina com que dígito?",                                                 successMsg: "Lógica binária! Terminou em zero.",
    tutorials: {
      onStart: { type: 'theory', title: 'Bem-vindo ao Mundo Binário!', dialog: [
        'Novo contexto: alfabeto {0, 1} — o sistema BINÁRIO!',
        'Em binário, todo número PAR termina em "0". Todo ÍMPAR termina em "1". Simples!',
        'O AFD não precisa ler a palavra inteira — só o ÚLTIMO símbolo determina paridade.',
        'Isso implica: um estado "par" e um estado "ímpar", trocando a cada símbolo lido.',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Dois Estados: Par e Ímpar', dialog: [
        '2 estados: <b>q0</b>(inicial, último=1 ou vazio) e <b>q1</b>(último=0, FINAL).',
        '"0" de qualquer estado vai para <b>q1</b>. "1" de qualquer estado volta para <b>q0</b>.',
        'O AFD guarda só o ÚLTIMO bit. Loops em q0(1) e q1(0) cobrem sequências longas.',
      ] },
    },
    guidedLesson: [
      {
        text: 'PAR em binário termina em "0"!<br/>Aceitar: <b>0</b>, <b>10</b>, <b>110</b>. Rejeitar: 1, 11, 101.',
        stateUpdate: { nodes: [], transitions: [] },
      },
      {
        text: 'Menor palavra válida: "0". q0 —0→ q1(final).<br/>Status: <s>0</s>. E a palavra "10"?',
        stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 25, y: 50, isInitial: true, isFinal: false },
            { id: 'q1', label: 'q1', x: 75, y: 50, isInitial: false, isFinal: true },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: '0' },
          ],
        },
      },
      {
        text: '🐛 "10": q0 lê "1" → sem seta, trava! Fix: loop <b>q0 —1→ q0</b> (prefixo de 1\'s não muda paridade).<br/>Status: <s>0</s>, <s>10</s>. E "00"?',
        stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 25, y: 50, isInitial: true, isFinal: false },
            { id: 'q1', label: 'q1', x: 75, y: 50, isInitial: false, isFinal: true },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: '0' },
            { from: 'q0', to: 'q0', symbol: '1' },
          ],
        },
      },
      {
        text: '🐛 "00": q1 lê o segundo "0" → sem seta, trava! Fix: loop <b>q1 —0→ q1</b> (dois zeros seguidos ainda é par).<br/>Status: <s>0</s>, <s>10</s>, <s>110</s>. E "010"?',
        stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 25, y: 50, isInitial: true, isFinal: false },
            { id: 'q1', label: 'q1', x: 75, y: 50, isInitial: false, isFinal: true },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: '0' },
            { from: 'q0', to: 'q0', symbol: '1' },
            { from: 'q1', to: 'q1', symbol: '0' },
          ],
        },
      },
      {
        text: '🐛 "010": q0→q1(0)→q1(0)→? q1 lê "1" → sem seta! Fix: <b>q1 —1→ q0</b> (um "1" desfaz a paridade).<br/>Status: <s>0</s>, <s>10</s>, <s>110</s> ✔ Concluído!',
        stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 25, y: 50, isInitial: true, isFinal: false },
            { id: 'q1', label: 'q1', x: 75, y: 50, isInitial: false, isFinal: true },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: '0' },
            { from: 'q0', to: 'q0', symbol: '1' },
            { from: 'q1', to: 'q1', symbol: '0' },
            { from: 'q1', to: 'q0', symbol: '1' },
          ],
        },
      },
    ] },
  { id: 23, label: "L23", formula: "L = { w ∈ {0,1}* | w é um número ímpar }",
    aliases: [
      "L = { w ∈ {0,1}* | w é ímpar }",
      "L = { w ∈ {0,1}* | w termina em 1 }",
      "L = { w ∈ {0,1}* | w termina com 1 }",
    ],
    desc: "",                                                                 shortestWord: "1",        regex: /^[01]*1$/,                                                  alphabet: ['0', '1'],             acceptedWords: ["1","11","101"],            rejectedWords: ["0","10","100"],        hint: "Números ímpares em binário sempre terminam com '1'.",                                                               successMsg: "Lógica binária! Terminou em um.",
    tutorials: {
      onStart: { type: 'theory', title: 'ÍMPAR em Binário Termina em "1"!', dialog: [
        'Espelho de L22: número binário ÍMPAR termina em "1". PAR termina em "0".',
        '"1", "11", "101" — válidos. "0", "10" — inválidos (terminam em 0).',
        'O AFD só precisa lembrar o ÚLTIMO dígito lido para decidir.',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Dois Estados Espelhados', dialog: [
        '2 estados: <b>q0</b>(inicial, último=0 ou vazio) e <b>q1</b>(último=1, FINAL).',
        '"1" de qualquer estado vai para <b>q1</b>. "0" de qualquer estado volta para <b>q0</b>.',
        'Espelho do L22: loop q0(0) e q1(1). Só o ÚLTIMO bit decide. "101": q0→q1→q0→q1 ✔',
      ] },
    },
    guidedLesson: [
      {
        text: 'ÍMPAR em binário termina em "1"!<br/>Aceitar: <b>1</b>, <b>11</b>, <b>101</b>. Rejeitar: 0, 10, 100.',
        stateUpdate: { nodes: [], transitions: [] },
      },
      {
        text: 'Menor palavra válida: "1". q0 —1→ q1(final).<br/>Status: <s>1</s>. E a palavra "01"?',
        stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 25, y: 50, isInitial: true, isFinal: false },
            { id: 'q1', label: 'q1', x: 75, y: 50, isInitial: false, isFinal: true },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: '1' },
          ],
        },
      },
      {
        text: '🐛 "01": q0 lê "0" → sem seta, trava! Fix: loop <b>q0 —0→ q0</b> (prefixo de 0\'s não muda paridade).<br/>Status: <s>1</s>, <s>01</s>. E "11"?',
        stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 25, y: 50, isInitial: true, isFinal: false },
            { id: 'q1', label: 'q1', x: 75, y: 50, isInitial: false, isFinal: true },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: '1' },
            { from: 'q0', to: 'q0', symbol: '0' },
          ],
        },
      },
      {
        text: '🐛 "11": q1 lê o segundo "1" → sem seta, trava! Fix: loop <b>q1 —1→ q1</b> (último símbolo ainda é "1", continua ímpar).<br/>Status: <s>1</s>, <s>11</s>. E "101"?',
        stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 25, y: 50, isInitial: true, isFinal: false },
            { id: 'q1', label: 'q1', x: 75, y: 50, isInitial: false, isFinal: true },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: '1' },
            { from: 'q0', to: 'q0', symbol: '0' },
            { from: 'q1', to: 'q1', symbol: '1' },
          ],
        },
      },
      {
        text: '🐛 "101": q0→q1(1)→q1(1)→? q1 lê "0" → sem seta! Fix: <b>q1 —0→ q0</b> (um "0" desfaz a imparidade).<br/>Status: <s>1</s>, <s>11</s>, <s>101</s> ✔ Concluído!',
        stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 25, y: 50, isInitial: true, isFinal: false },
            { id: 'q1', label: 'q1', x: 75, y: 50, isInitial: false, isFinal: true },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: '1' },
            { from: 'q0', to: 'q0', symbol: '0' },
            { from: 'q1', to: 'q1', symbol: '1' },
            { from: 'q1', to: 'q0', symbol: '0' },
          ],
        },
      },
    ] },
  { id: 24, label: "L24", formula: "L = { w ∈ {0,1}* | w tem tamanho 3 }",                              desc: "",                                                                 shortestWord: "000",      regex: /^[01]{3}$/,                                                 alphabet: ['0', '1'],             acceptedWords: ["000","011","101"],         rejectedWords: ["λ","00","0000"],       hint: "Você precisa de um caminho reto que só aceita na terceira etapa.",                                                  successMsg: "Controle de tamanho exato.",
    tutorials: {
      onStart: { type: 'theory', title: 'Caminho de Comprimento Exato!', dialog: [
        'L24: aceitar APENAS palavras com exatamente 3 símbolos — nem mais, nem menos.',
        '"000", "101", "010" — válidas. "00" (curto), "0000" (longo) — inválidas.',
        'Estratégia: 4 estados em linha — um por posição lida. Só o 4° é final.',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Trilho de 3 Passos', dialog: [
        'Trilho linear: <b>q0</b>→<b>q1</b>→<b>q2</b>→<b>q3</b>(final). Cada seta aceita {0,1}.',
        'Após q3, não há transições — qualquer símbolo extra vai para o dead-state implícito.',
        '"0000": lê 4° símbolo em q3, sem seta → rejeição automática. Sem estado extra!',
      ] },
    },
    guidedLesson: [
      {
        text: 'Exatamente 3 símbolos!<br/>Aceitar: <b>000</b>, <b>101</b>. Rejeitar: λ, 00, 0000.',
        stateUpdate: { nodes: [], transitions: [] },
      },
      {
        text: 'Trilho linear: q0→q1→q2→q3(final) com {0,1}.<br/>Status: <s>000</s>, <s>101</s>. E "0000"?',
        stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 15, y: 50, isInitial: true, isFinal: false },
            { id: 'q1', label: 'q1', x: 40, y: 50, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 65, y: 50, isInitial: false, isFinal: false },
            { id: 'q3', label: 'q3', x: 85, y: 50, isInitial: false, isFinal: true },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: '0,1' },
            { from: 'q1', to: 'q2', symbol: '0,1' },
            { from: 'q2', to: 'q3', symbol: '0,1' },
          ],
        },
      },
      {
        text: '"0000": q3 lê o 4° símbolo — <u>sem seta</u> = dead-state implícito! Sem estado extra necessário.<br/>Status: <s>000</s>, <s>101</s> ✔ Concluído!',
        stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 15, y: 50, isInitial: true, isFinal: false },
            { id: 'q1', label: 'q1', x: 40, y: 50, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 65, y: 50, isInitial: false, isFinal: false },
            { id: 'q3', label: 'q3', x: 85, y: 50, isInitial: false, isFinal: true },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: '0,1' },
            { from: 'q1', to: 'q2', symbol: '0,1' },
            { from: 'q2', to: 'q3', symbol: '0,1' },
          ],
        },
      },
    ] },
  { id: 25, label: "L25", formula: "L = { w ∈ {0,1}* | w tem tamanho menor que 3 }",                   desc: "",                                                                 shortestWord: "",         regex: /^[01]{0,2}$/,                                               alphabet: ['0', '1'],             acceptedWords: ["λ","0","10"],             rejectedWords: ["000","0000","010"],    hint: "Os estados iniciais já podem ser finais, mas pare no terceiro passo.",                                               successMsg: "Tamanho máximo controlado.",
    tutorials: {
      onStart: { type: 'theory', title: 'Comprimento Menor que 3!', dialog: [
        'L25: aceitar palavras com 0, 1 ou 2 símbolos. Rejeitar com 3 ou mais.',
        '"λ", "0", "10" — válidas. "000", "0000" — inválidas (longas demais).',
        'Estratégia: 3 estados finais (q0, q1, q2). Após q2, sem transições — dead-state implícito.',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Trilho Curto com Dead-State Implícito', dialog: [
        '<b>q0</b>(ini,f), <b>q1</b>(f), <b>q2</b>(f) — todos finais, aceita em qualquer um.',
        'q0→q1→q2 com {0,1}. Após q2, sem transições — 3° símbolo dispara dead-state implícito.',
        'Dual de L24: aqui o trilho curto aceita, e a ausência de setas rejeita o extra.',
      ] },
    },
    guidedLesson: [
      {
        text: 'Comprimento 0, 1 ou 2!<br/>Aceitar: <b>λ</b>, <b>0</b>, <b>10</b>. Rejeitar: 000, 0000.',
        stateUpdate: { nodes: [], transitions: [] },
      },
      {
        text: 'Trilho curto: q0(ini,f)→q1(f)→q2(f) com {0,1}. λ aceita em q0, "0" em q1, "10" em q2!<br/>Status: <s>λ</s>, <s>0</s>, <s>10</s>. E "000"?',
        stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 20, y: 50, isInitial: true, isFinal: true },
            { id: 'q1', label: 'q1', x: 50, y: 50, isInitial: false, isFinal: true },
            { id: 'q2', label: 'q2', x: 80, y: 50, isInitial: false, isFinal: true },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: '0,1' },
            { from: 'q1', to: 'q2', symbol: '0,1' },
          ],
        },
      },
      {
        text: '"000": q2 lê o 3° símbolo — <u>sem seta</u> = dead-state implícito! Sem qD necessário.<br/>Status: <s>λ</s>, <s>0</s>, <s>10</s> ✔ Concluído!',
        stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 20, y: 50, isInitial: true, isFinal: true },
            { id: 'q1', label: 'q1', x: 50, y: 50, isInitial: false, isFinal: true },
            { id: 'q2', label: 'q2', x: 80, y: 50, isInitial: false, isFinal: true },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: '0,1' },
            { from: 'q1', to: 'q2', symbol: '0,1' },
          ],
        },
      },
    ] },
  { id: 26, label: "L26", formula: "L = { w ∈ {0,1}* | w tem tamanho maior que 3 }",                   desc: "",                                                                 shortestWord: "0000",     regex: /^[01]{4,}$/,                                                alphabet: ['0', '1'],             acceptedWords: ["0000","1111","01010"],    rejectedWords: ["λ","0","000"],         hint: "Passe pelos primeiros três estados sem aceitar, depois aceite tudo.",                                                successMsg: "Tamanho mínimo garantido.",
    tutorials: {
      onStart: { type: 'theory', title: 'Tamanho MAIOR que 3!', dialog: [
        'L26: aceitar palavras com 4 ou MAIS símbolos. Rejeitar qualquer coisa menor.',
        '"0000", "1111", "01010" — válidas. "λ", "0", "000" — inválidas (muito curtas).',
        'Estratégia: 4 estados não-finais (q0-q3) formam uma barreira. Só q4 é final.',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Trilho de 4 Passos + Loop', dialog: [
        'Trilho: <b>q0</b>(ini)→<b>q1</b>→<b>q2</b>→<b>q3</b>→<b>q4</b>(final) com {0,1}.',
        'Após q4, loop <b>q4→q4</b> aceita palavras mais longas. Sem ele, "00000" travaria!',
        '"000" termina em q3 (não final) → rejeição automática. Posição importa, não conteúdo.',
      ] },
    },
    guidedLesson: [
      {
        text: 'MAIOR que 3 — mínimo 4 símbolos!<br/>Aceitar: <b>0000</b>, <b>1111</b>, <b>01010</b>. Rejeitar: λ, 0, 000.',
        stateUpdate: { nodes: [], transitions: [] },
      },
      {
        text: 'Trilho de 4 passos: q0→q1→q2→q3→q4(final) com {0,1}.<br/>"0000" aceito em q4. "000" termina em q3 (não final) → rejeitado. E "00000"?',
        stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 10, y: 65, isInitial: true,  isFinal: false },
            { id: 'q1', label: 'q1', x: 28, y: 35, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 46, y: 65, isInitial: false, isFinal: false },
            { id: 'q3', label: 'q3', x: 64, y: 35, isInitial: false, isFinal: false },
            { id: 'q4', label: 'q4', x: 82, y: 65, isInitial: false, isFinal: true  },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: '0,1' },
            { from: 'q1', to: 'q2', symbol: '0,1' },
            { from: 'q2', to: 'q3', symbol: '0,1' },
            { from: 'q3', to: 'q4', symbol: '0,1' },
          ],
        },
      },
      {
        text: '🐛 "00000": q4 lê o 5° símbolo — sem seta, trava! Fix: loop <b>q4 —{0,1}→ q4</b>. Palavras mais longas aceitas!<br/>Status: <s>0000</s>, <s>1111</s>, <s>01010</s> ✔ Concluído!',
        stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 10, y: 65, isInitial: true,  isFinal: false },
            { id: 'q1', label: 'q1', x: 28, y: 35, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 46, y: 65, isInitial: false, isFinal: false },
            { id: 'q3', label: 'q3', x: 64, y: 35, isInitial: false, isFinal: false },
            { id: 'q4', label: 'q4', x: 82, y: 65, isInitial: false, isFinal: true  },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: '0,1' },
            { from: 'q1', to: 'q2', symbol: '0,1' },
            { from: 'q2', to: 'q3', symbol: '0,1' },
            { from: 'q3', to: 'q4', symbol: '0,1' },
            { from: 'q4', to: 'q4', symbol: '0,1' },
          ],
        },
      },
    ] },
  { id: 27, label: "L27", formula: "L = { w ∈ {0,1}* | w tem tamanho múltiplo de 3 }",                 desc: "",                                                                 shortestWord: "",         regex: /^([01]{3})*$/,                                              alphabet: ['0', '1'],             acceptedWords: ["λ","000","010101"],       rejectedWords: ["0","00","0001"],       hint: "Crie um ciclo de 3 passos que volta para o estado final inicial.",                                                   successMsg: "Ciclo matemático de tamanho 3.",
    tutorials: {
      onStart: { type: 'theory', title: 'Contagem Modular — Mod 3!', dialog: [
        'Múltiplo de 3: comprimento ≡ 0 (mod 3). Ou seja, palavras de tamanho 0, 3, 6, 9...',
        'Estratégia: 3 estados formando um ciclo. Cada símbolo avança um passo no ciclo.',
        'q0 (final, mod 0) →(any)→ q1 (mod 1) →(any)→ q2 (mod 2) →(any)→ q0. Elegante!',
        'Esse padrão escala: para "múltiplo de N", use N estados em ciclo.',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Ciclo de 3 Estados', dialog: [
        '<b>q0</b>(ini,final) → <b>q1</b> → <b>q2</b> → q0. Cada seta aceita {0,1}.',
        '"λ" aceita em q0. "000": q0→q1→q2→q0 ✔. "00": termina em q2 (não final) ✗.',
        '"0001" (4 símbolos): q0→q1→q2→q0→q1 → rejeitado em q1. O ciclo é exato!',
      ] },
    },
    guidedLesson: [
      {
        text: 'Múltiplo de 3 — comprimento ≡ 0 (mod 3)!<br/>Aceitar: <b>λ</b>, <b>000</b>, <b>010101</b>. Rejeitar: 0, 00, 0001.',
        stateUpdate: { nodes: [], transitions: [] },
      },
      {
        text: '"λ" já é aceita (q0 final). Para "000": q0 avança para q1 e q2 a cada símbolo.<br/>Adicione <b>q0 —{0,1}→ q1</b> e <b>q1 —{0,1}→ q2</b>. E "000"?',
        stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 15, y: 68, isInitial: true,  isFinal: true  },
            { id: 'q1', label: 'q1', x: 50, y: 20, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 85, y: 68, isInitial: false, isFinal: false },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: '0,1' },
            { from: 'q1', to: 'q2', symbol: '0,1' },
          ],
        },
      },
      {
        text: '🐛 "000": q0→q1→q2→? q2 lê o 3° símbolo — sem seta, trava! Fix: <b>q2 —{0,1}→ q0</b>. Ciclo completo!<br/>Status: <s>λ</s>, <s>000</s>, <s>010101</s> ✔ Concluído!',
        stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 15, y: 68, isInitial: true,  isFinal: true  },
            { id: 'q1', label: 'q1', x: 50, y: 20, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 85, y: 68, isInitial: false, isFinal: false },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: '0,1' },
            { from: 'q1', to: 'q2', symbol: '0,1' },
            { from: 'q2', to: 'q0', symbol: '0,1' },
          ],
        },
      },
    ] },
  { id: 28, label: "L28", formula: "L = { w ∈ {0,1}* | cada 0 é seguido de, no mínimo, dois 1's }",   desc: "",                                                                 shortestWord: "",         regex: /^(1*011+)*1*$/,                                             alphabet: ['0', '1'],             acceptedWords: ["λ","011","1011"],         rejectedWords: ["0","01","010"],        hint: "Leu um '0'? Então os próximos dois passos OBRIGATORIAMENTE devem ser '1'.",                                         successMsg: "Padrão de segurança estabelecido.",
    tutorials: {
      onStart: { type: 'theory', title: 'Cada 0 Exige Dois 1s!', dialog: [
        'Restrição: todo "0" lido OBRIGA que os próximos dois símbolos sejam "1".',
        '"λ" e "1011" — válidos (1s livres; cada 0 seguido de "11"). "01" — inválido (só um 1).',
        'Estratégia: rastrear a "dívida" — quantos 1s ainda devemos após o último 0.',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Estados de Dívida', dialog: [
        '<b>q0</b>(ini,f): sem dívida. <b>q1</b>: deve 2 uns. <b>q2</b>: deve 1 un. <b>qT</b>: dead.',
        '1 em q0: loop. 0 em q0: gera dívida (→q1). 1 em q1: paga parcial (→q2). 1 em q2: quita (→q0).',
        'Novo 0 antes de quitar (q1→qT ou q2→qT) = violação irrecuperável. qT rejeita tudo.',
      ] },
    },
    guidedLesson: [
      {
        text: 'Todo "0" exige dois "1"s em seguida!<br/>Aceitar: <b>λ</b>, <b>011</b>, <b>1011</b>. Rejeitar: 0, 01, 010.',
        stateUpdate: { nodes: [], transitions: [] },
      },
      {
        text: 'Menor palavra com 0: "011". q0 —0→ q1 (deve 2 uns) —1→ q2 (deve 1 un) —1→ q0 (dívida quitada!).<br/>Status: <s>011</s>. E "1011"?',
        stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 15, y: 35, isInitial: true,  isFinal: true  },
            { id: 'q1', label: 'q1', x: 50, y: 70, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 85, y: 35, isInitial: false, isFinal: false },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: '0' },
            { from: 'q1', to: 'q2', symbol: '1' },
            { from: 'q2', to: 'q0', symbol: '1' },
          ],
        },
      },
      {
        text: '🐛 "1011": q0 lê "1" → sem seta, trava! Fix: loop <b>q0 —1→ q0</b> (1s livres antes de um 0).<br/>Status: <s>011</s>, <s>1011</s>. E "010"?',
        stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 15, y: 35, isInitial: true,  isFinal: true  },
            { id: 'q1', label: 'q1', x: 50, y: 70, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 85, y: 35, isInitial: false, isFinal: false },
          ],
          transitions: [
            { from: 'q0', to: 'q0', symbol: '1' },
            { from: 'q0', to: 'q1', symbol: '0' },
            { from: 'q1', to: 'q2', symbol: '1' },
            { from: 'q2', to: 'q0', symbol: '1' },
          ],
        },
      },
      {
        text: '🐛 "010": q1 lê "0" — dívida não quitada! Sem seta = dead implícito. Mesmo para q2—0: dead implícito.<br/>Autômato completo: q0—0→q1, q1—1→q2, q2—1→q0, q0 loop em 1. Transições q1—0 e q2—0 ausentes = rejeição automática ✔ Concluído!',
        stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 15, y: 35, isInitial: true,  isFinal: true  },
            { id: 'q1', label: 'q1', x: 50, y: 70, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 85, y: 35, isInitial: false, isFinal: false },
          ],
          transitions: [
            { from: 'q0', to: 'q0', symbol: '1' },
            { from: 'q0', to: 'q1', symbol: '0' },
            { from: 'q1', to: 'q2', symbol: '1' },
            { from: 'q2', to: 'q0', symbol: '1' },
          ],
        },
      },
    ] },
  { id: 29, label: "L29", formula: "L = { w ∈ {0,1}* | os primeiros 4 símbolos de w contêm, no mínimo, dois 1's }", desc: "", shortestWord: "11", regex: /^([01]*)$/, validate: w => w.slice(0,4).split('').filter(c=>c==='1').length >= 2, alphabet: ['0', '1'], acceptedWords: ["11","0011","1011"],      rejectedWords: ["0","00","0001"],       hint: "Essa exige rastrear o prefixo. Concentre-se nas combinações dos primeiros passos.",                                  successMsg: "Prefixo complexo analisado.",
    tutorials: {
      onStart: { type: 'theory', title: 'Rastreando o Prefixo de 4!', dialog: [
        'L29: os 4 primeiros símbolos devem conter ao menos 2 uns. O resto é livre.',
        '"0011": prefixo "0011" tem 2 uns ✔. "0001": prefixo "0001" tem 1 um ✗.',
        'Estratégia: 9 estados rastreiam (posição, uns vistos) para posições 1-4.',
        'Após 4 símbolos com ≥2 uns, q6 aceita tudo via loop. Dead-states implícitos para caminhos impossíveis.',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Árvore de Prefixo 4×2', dialog: [
        'Camada 1: q0—0→q1(0 uns), q0—1→q2(1 um). Camada 2: q1,q2 expandem para q3,q4,q7.',
        'Camada 3: q3,q4,q7 expandem para q5,q8. Camada 4: q5,q8—{0,1}→q6(final, loop).',
        'q3—0→dead (impossível: 3 zeros, só 1 posição restante). q5—0→dead (4 símbolos, só 1 um).',
      ] },
    },
    guidedLesson: [
      {
        text: '4 primeiros símbolos com ≥ 2 uns!<br/>Aceitar: <b>0011</b>, <b>1011</b>, <b>1100</b>. Rejeitar: 0, 00, 0001.',
        stateUpdate: { nodes: [], transitions: [] },
      },
      {
        text: 'Camada 1 — q0 distribui por símbolo:<br/><b>q0—0→q1</b>(posição 1, 0 uns) e <b>q0—1→q2</b>(posição 1, 1 um).',
        stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 50, y: 10, isInitial: true,  isFinal: false },
            { id: 'q1', label: 'q1', x: 25, y: 33, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 75, y: 33, isInitial: false, isFinal: false },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: '0' },
            { from: 'q0', to: 'q2', symbol: '1' },
          ],
        },
      },
      {
        text: 'Camada 2 — posição 2:<br/>q1: 0→q3(0 uns), 1→q4(1 um). q2: 0→q4(1 um), 1→q7(2 uns — atingiu o mínimo antecipado!).',
        stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 50, y: 10, isInitial: true,  isFinal: false },
            { id: 'q1', label: 'q1', x: 25, y: 33, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 75, y: 33, isInitial: false, isFinal: false },
            { id: 'q3', label: 'q3', x: 10, y: 58, isInitial: false, isFinal: false },
            { id: 'q4', label: 'q4', x: 50, y: 58, isInitial: false, isFinal: false },
            { id: 'q7', label: 'q7', x: 87, y: 58, isInitial: false, isFinal: false },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: '0' },
            { from: 'q0', to: 'q2', symbol: '1' },
            { from: 'q1', to: 'q3', symbol: '0' },
            { from: 'q1', to: 'q4', symbol: '1' },
            { from: 'q2', to: 'q4', symbol: '0' },
            { from: 'q2', to: 'q7', symbol: '1' },
          ],
        },
      },
      {
        text: 'Camadas 3-4 completas: q3—1→q5, q4—0→q5 ou 1→q8, q7—{0,1}→q8, q5—1→q6, q8—{0,1}→q6, q6 loop.<br/><b>q7 e q8 também são finais</b> — ≥2 uns já vistos antes da 4ª posição basta! "11": q0→q2→<b>q7(final)</b> ✔<br/>Status: <s>11</s>, <s>0011</s>, <s>1011</s> ✔ Concluído!',
        stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 50, y: 10, isInitial: true,  isFinal: false },
            { id: 'q1', label: 'q1', x: 25, y: 33, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 75, y: 33, isInitial: false, isFinal: false },
            { id: 'q3', label: 'q3', x: 10, y: 58, isInitial: false, isFinal: false },
            { id: 'q4', label: 'q4', x: 50, y: 58, isInitial: false, isFinal: false },
            { id: 'q7', label: 'q7', x: 87, y: 58, isInitial: false, isFinal: true  },
            { id: 'q5', label: 'q5', x: 30, y: 78, isInitial: false, isFinal: false },
            { id: 'q8', label: 'q8', x: 70, y: 78, isInitial: false, isFinal: true  },
            { id: 'q6', label: 'q6', x: 50, y: 93, isInitial: false, isFinal: true  },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: '0' },
            { from: 'q0', to: 'q2', symbol: '1' },
            { from: 'q1', to: 'q3', symbol: '0' },
            { from: 'q1', to: 'q4', symbol: '1' },
            { from: 'q2', to: 'q4', symbol: '0' },
            { from: 'q2', to: 'q7', symbol: '1' },
            { from: 'q3', to: 'q5', symbol: '1' },
            { from: 'q4', to: 'q5', symbol: '0' },
            { from: 'q4', to: 'q8', symbol: '1' },
            { from: 'q7', to: 'q8', symbol: '0,1' },
            { from: 'q5', to: 'q6', symbol: '1' },
            { from: 'q8', to: 'q6', symbol: '0,1' },
            { from: 'q6', to: 'q6', symbol: '0,1' },
          ],
        },
      },
    ] },
  { id: 30, label: "L30", formula: "L = { w ∈ {0,1}* | w NÃO contém 000 nem 111 }",                    desc: "",                                                                 shortestWord: "",         regex: /^(?!.*000)(?!.*111)[01]*$/,                                 alphabet: ['0', '1'],             acceptedWords: ["λ","01","0101"],          rejectedWords: ["000","111","1000"],    hint: "Se 3 zeros ou 3 uns aparecerem, jogue a palavra num estado de erro.",                                                successMsg: "Evitou a bomba tripla!",
    tutorials: {
      onStart: { type: 'theory', title: 'Evitando Subpalavras Proibidas!', dialog: [
        'Novo padrão: NÃO CONTÉM — rejeitar quando uma sequência específica aparecer.',
        'Estratégia: rastrear o "progresso" da sequência proibida com estados intermediários.',
        '"0" visto → alerta. "00" visto → alerta máximo. "000" visto → ARMADILHA irrecuperável!',
        'São duas sequências proibidas independentes (000 e 111), cada uma com sua trilha de estados.',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Duas Trilhas, Dois Limites', dialog: [
        '5 estados todos finais: <b>q0</b>(ini), <b>q1</b>(um 0), <b>q2</b>(dois 0s), <b>q3</b>(um 1), <b>q4</b>(dois 1s).',
        'Cruzamentos: q1—1→q3 e q3—0→q1 (troca de corrida cancela a contagem anterior).',
        'Dead implícito: q2 lê 0 = terceiro zero = 000. q4 lê 1 = terceiro um = 111. Sem seta = rejeitado!',
      ] },
    },
    guidedLesson: [
      { text: 'Proibido 000 e proibido 111!<br/>Aceitar: <b>λ</b>, <b>01</b>, <b>0101</b>. Rejeitar: 000, 111, 1000.',
        stateUpdate: { nodes: [], transitions: [] } },
      { text: '"01": q0—0→q1—1→q3(final). Transições básicas: <b>q0—0→q1</b>, <b>q0—1→q3</b>, <b>q1—1→q3</b>, <b>q3—0→q1</b>.<br/>Cruzamentos resetam a contagem. E "001"?',
        stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 10, y: 50, isInitial: true,  isFinal: true },
            { id: 'q1', label: 'q1', x: 48, y: 20, isInitial: false, isFinal: true },
            { id: 'q3', label: 'q3', x: 48, y: 80, isInitial: false, isFinal: true },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: '0' },
            { from: 'q0', to: 'q3', symbol: '1' },
            { from: 'q1', to: 'q3', symbol: '1' },
            { from: 'q3', to: 'q1', symbol: '0' },
          ],
        } },
      { text: '🐛 "001": q1 lê 2° zero — sem seta! Fix: <b>q1—0→q2</b> (topo-dir), <b>q2—1→q3</b>. 🐛 "011": q3 lê 2° um — sem seta! Fix: <b>q3—1→q4</b> (baixo-esq), <b>q4—0→q1</b>.<br/>Dead implícito: q2—0=000 e q4—1=111. ✔ Concluído!',
        stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 10, y: 50, isInitial: true,  isFinal: true },
            { id: 'q1', label: 'q1', x: 48, y: 20, isInitial: false, isFinal: true },
            { id: 'q2', label: 'q2', x: 85, y: 20, isInitial: false, isFinal: true },
            { id: 'q3', label: 'q3', x: 48, y: 80, isInitial: false, isFinal: true },
            { id: 'q4', label: 'q4', x: 12, y: 80, isInitial: false, isFinal: true },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: '0' },
            { from: 'q0', to: 'q3', symbol: '1' },
            { from: 'q1', to: 'q2', symbol: '0' },
            { from: 'q1', to: 'q3', symbol: '1' },
            { from: 'q2', to: 'q3', symbol: '1' },
            { from: 'q3', to: 'q1', symbol: '0' },
            { from: 'q3', to: 'q4', symbol: '1' },
            { from: 'q4', to: 'q1', symbol: '0' },
          ],
        } },
    ] },
  { id: 31, label: "L31", formula: "L = { w ∈ {0,1}* | os últimos três símbolos de w NÃO são 000 }",  desc: "",                                                                 shortestWord: "",         regex: /^(?!.*000$)[01]*$/,                                         alphabet: ['0', '1'],             acceptedWords: ["λ","1","001"],            rejectedWords: ["000","1000","10000"],  hint: "O final da palavra é o mais importante aqui.",                                                                      successMsg: "Sufixo validado.",
    tutorials: {
      onStart: { type: 'theory', title: 'Sufixo Proibido: "000"!', dialog: [
        'Diferente de L30, L31 só proíbe "000" como SUFIXO — não em qualquer posição.',
        '"1000" é rejeitado (termina em 000). "0001" é ACEITO (não termina em 000)!',
        'Estratégia: rastrear os últimos 3 símbolos. Se forem "000", entrar em estado especial.',
        'Um "1" depois de "000" RESETA o sufixo — o autômato é escapável!',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Trilho Reversível de 4 Estados', dialog: [
        '<b>q0</b>(ini,f): sufixo OK. <b>q1</b>(f): último=0. <b>q2</b>(f): últimos=00. <b>q3</b>: últimos=000.',
        '"1" em qualquer estado → q0 (sufixo "1" não ameaça). "0" avança a trilha.',
        'q3 não é final (000 no sufixo). Mas q3—1→q0 permite escapar! "10001": termina em "001" → aceito.',
      ] },
    },
    guidedLesson: [
      { text: 'Sufixo "000" proibido — mas escapável com "1"!<br/>Aceitar: <b>λ</b>, <b>1</b>, <b>001</b>. Rejeitar: 000, 1000, 10000.',
        stateUpdate: { nodes: [], transitions: [] } },
      { text: 'λ e "1": q0(ini,f)—1→q0 (loop). "001": q0—0→q1—0→q2—1→q0.<br/>Status: <s>λ</s>, <s>1</s>, <s>001</s>. E "000"?',
        stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 15, y: 50, isInitial: true,  isFinal: true },
            { id: 'q1', label: 'q1', x: 42, y: 25, isInitial: false, isFinal: true },
            { id: 'q2', label: 'q2', x: 68, y: 50, isInitial: false, isFinal: true },
          ],
          transitions: [
            { from: 'q0', to: 'q0', symbol: '1' },
            { from: 'q0', to: 'q1', symbol: '0' },
            { from: 'q1', to: 'q2', symbol: '0' },
            { from: 'q1', to: 'q0', symbol: '1' },
            { from: 'q2', to: 'q0', symbol: '1' },
          ],
        } },
      { text: '🐛 "000": q2 lê 3° zero — sem seta! Fix: <b>q2—0→q3</b>(não-final). <b>q3—0→q3</b>(loop), <b>q3—1→q0</b>(escape!).<br/>"1000": q0→q0→q1→q2→q3. Não-final → rejeitado ✔ Concluído!',
        stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 15, y: 50, isInitial: true,  isFinal: true  },
            { id: 'q1', label: 'q1', x: 42, y: 25, isInitial: false, isFinal: true  },
            { id: 'q2', label: 'q2', x: 68, y: 50, isInitial: false, isFinal: true  },
            { id: 'q3', label: 'q3', x: 88, y: 25, isInitial: false, isFinal: false },
          ],
          transitions: [
            { from: 'q0', to: 'q0', symbol: '1' },
            { from: 'q0', to: 'q1', symbol: '0' },
            { from: 'q1', to: 'q2', symbol: '0' },
            { from: 'q1', to: 'q0', symbol: '1' },
            { from: 'q2', to: 'q3', symbol: '0' },
            { from: 'q2', to: 'q0', symbol: '1' },
            { from: 'q3', to: 'q3', symbol: '0' },
            { from: 'q3', to: 'q0', symbol: '1' },
          ],
        } },
    ] },
  { id: 32, label: "L32", formula: "L = { w ∈ {0,1,2}* | par de 0's, par de 1's e par de 2's }",      desc: "",                                                                 shortestWord: "",         regex: /^.*$/, validate: w => ['0','1','2'].every(c => [...w].filter(x=>x===c).length%2===0), alphabet: ['0', '1', '2'],        acceptedWords: ["λ","0011","001122"],      rejectedWords: ["0","1","012"],         hint: "Paridade tripla! Vai precisar de estados para todas as combinações de par/ímpar.",                                  successMsg: "Autômato massivo concluído.",
    tutorials: {
      onStart: { type: 'theory', title: 'Explosão de Estados — 2³ = 8!', dialog: [
        'Paridade tripla simultânea: par/ímpar de 0s, de 1s e de 2s — totalmente independentes.',
        'Cada combinação possível exige seu próprio estado: 2³ = 8 estados no total!',
        'Só o estado (par-0, par-1, par-2) é final. Os outros 7 são não-finais.',
        'Princípio geral: N paridades independentes → 2^N estados no AFD mínimo.',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Cubo de Paridade 3D', dialog: [
        'Cada estado = vetor (par_0, par_1, par_2). q0=(0,0,0) é o único final.',
        'Ler 0 inverte bit-0, ler 1 inverte bit-1, ler 2 inverte bit-2.',
        'O autômato forma um cubo: 8 vértices, cada aresta troca exatamente um bit.',
      ] },
    },
    guidedLesson: [
      { text: 'Paridade tripla: par de 0s AND par de 1s AND par de 2s!<br/>Aceitar: <b>λ</b>, <b>0011</b>, <b>001122</b>. Rejeitar: 0, 1, 012.',
        stateUpdate: { nodes: [], transitions: [] } },
      { text: 'Paridades de 0 e 1 (4 estados): q0(f)↔q1 via 0; q0↔q2 via 1; q1↔q4 via 1; q2↔q4 via 0.<br/>"0011": q0→q1→q0→q2→q0 ✔. Bug: "002" — q0 lê 2 sem seta!',
        stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 15, y: 50, isInitial: true,  isFinal: true  },
            { id: 'q1', label: 'q1', x: 42, y: 25, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 42, y: 75, isInitial: false, isFinal: false },
            { id: 'q4', label: 'q4', x: 68, y: 50, isInitial: false, isFinal: false },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: '0' },
            { from: 'q1', to: 'q0', symbol: '0' },
            { from: 'q0', to: 'q2', symbol: '1' },
            { from: 'q2', to: 'q0', symbol: '1' },
            { from: 'q1', to: 'q4', symbol: '1' },
            { from: 'q4', to: 'q1', symbol: '1' },
            { from: 'q2', to: 'q4', symbol: '0' },
            { from: 'q4', to: 'q2', symbol: '0' },
          ],
        } },
      { text: 'Fix paridade de 2: 4 novos estados q3,q5,q6,q7. Ler 2 inverte bit-2: q0↔q3, q1↔q5, q2↔q6, q4↔q7.<br/>Cruzados: q3↔q5(0), q3↔q6(1), q5↔q7(1), q6↔q7(0). ✔ Concluído!',
        stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 12, y: 50, isInitial: true,  isFinal: true  },
            { id: 'q1', label: 'q1', x: 35, y: 22, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 35, y: 78, isInitial: false, isFinal: false },
            { id: 'q3', label: 'q3', x: 57, y: 50, isInitial: false, isFinal: false },
            { id: 'q4', label: 'q4', x: 58, y: 22, isInitial: false, isFinal: false },
            { id: 'q5', label: 'q5', x: 78, y: 22, isInitial: false, isFinal: false },
            { id: 'q6', label: 'q6', x: 78, y: 78, isInitial: false, isFinal: false },
            { id: 'q7', label: 'q7', x: 90, y: 50, isInitial: false, isFinal: false },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: '0' },
            { from: 'q1', to: 'q0', symbol: '0' },
            { from: 'q0', to: 'q2', symbol: '1' },
            { from: 'q2', to: 'q0', symbol: '1' },
            { from: 'q0', to: 'q3', symbol: '2' },
            { from: 'q3', to: 'q0', symbol: '2' },
            { from: 'q1', to: 'q4', symbol: '1' },
            { from: 'q4', to: 'q1', symbol: '1' },
            { from: 'q1', to: 'q5', symbol: '2' },
            { from: 'q5', to: 'q1', symbol: '2' },
            { from: 'q2', to: 'q4', symbol: '0' },
            { from: 'q4', to: 'q2', symbol: '0' },
            { from: 'q2', to: 'q6', symbol: '2' },
            { from: 'q6', to: 'q2', symbol: '2' },
            { from: 'q3', to: 'q5', symbol: '0' },
            { from: 'q5', to: 'q3', symbol: '0' },
            { from: 'q3', to: 'q6', symbol: '1' },
            { from: 'q6', to: 'q3', symbol: '1' },
            { from: 'q4', to: 'q7', symbol: '2' },
            { from: 'q7', to: 'q4', symbol: '2' },
            { from: 'q5', to: 'q7', symbol: '1' },
            { from: 'q7', to: 'q5', symbol: '1' },
            { from: 'q6', to: 'q7', symbol: '0' },
            { from: 'q7', to: 'q6', symbol: '0' },
          ],
        } },
    ] },
  { id: 33, label: "L33", formula: "L = { w ∈ {0,1}* | w tem 001 como prefixo }",                      desc: "",                                                                 shortestWord: "001",      regex: /^001[01]*$/,                                                alphabet: ['0', '1'],             acceptedWords: ["001","0011","001100"],    rejectedWords: ["λ","1","010"],         hint: "O começo tem que ser rigorosamente '0' -> '0' -> '1'.",                                                             successMsg: "Prefixo amarrado!",
    tutorials: {
      onStart: { type: 'theory', title: 'Prefixo Obrigatório: "001"!', dialog: [
        'L33: toda palavra aceita DEVE começar com "001". O resto pode ser qualquer coisa.',
        '"001100" — válida (começa com 001). "010" — inválida (2° símbolo é 1, não 0).',
        'Estratégia: 3 estados de checagem (q0→q1→q2) + estado final q3 com loop.',
        'Qualquer desvio no prefixo cai em dead-state implícito. Sem volta!',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Trilho de Prefixo + Loop Final', dialog: [
        'q0—0→q1—0→q2—1→q3(final). Cadeia linear exata para "001".',
        'q3—{0,1}→q3: após confirmar o prefixo, qualquer símbolo é aceito.',
        'Dead implícito: q0—1, q1—1, q2—0 — qualquer desvio rejeita permanentemente.',
      ] },
    },
    guidedLesson: [
      { text: 'Prefixo obrigatório "001"!<br/>Aceitar: <b>001</b>, <b>0011</b>, <b>001100</b>. Rejeitar: λ, 1, 010.',
        stateUpdate: { nodes: [], transitions: [] } },
      { text: '"001": q0—0→q1—0→q2—1→q3(final). Cadeia linear.<br/>Status: <s>001</s>. E "0011"?',
        stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 15, y: 50, isInitial: true,  isFinal: false },
            { id: 'q1', label: 'q1', x: 40, y: 50, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 65, y: 50, isInitial: false, isFinal: false },
            { id: 'q3', label: 'q3', x: 88, y: 50, isInitial: false, isFinal: true  },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: '0' },
            { from: 'q1', to: 'q2', symbol: '0' },
            { from: 'q2', to: 'q3', symbol: '1' },
          ],
        } },
      { text: '🐛 "0011": q3 lê "1" — sem seta! Fix: loop <b>q3—{0,1}→q3</b>.<br/>"001100": q3 absorve o resto. ✔ Concluído!',
        stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 15, y: 50, isInitial: true,  isFinal: false },
            { id: 'q1', label: 'q1', x: 40, y: 50, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 65, y: 50, isInitial: false, isFinal: false },
            { id: 'q3', label: 'q3', x: 88, y: 50, isInitial: false, isFinal: true  },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: '0' },
            { from: 'q1', to: 'q2', symbol: '0' },
            { from: 'q2', to: 'q3', symbol: '1' },
            { from: 'q3', to: 'q3', symbol: '0,1' },
          ],
        } },
    ] },
  { id: 34, label: "L34", formula: "L = { w ∈ {0,1}* | w tem 1010 como sufixo }",                      desc: "",                                                                 shortestWord: "1010",     regex: /^[01]*1010$/,                                               alphabet: ['0', '1'],             acceptedWords: ["1010","01010","001010"], rejectedWords: ["λ","101","1011"],       hint: "Mantenha a porta aberta para infinitos caracteres, mas só aceite se a 'memória' bater com 1010.",                  successMsg: "Detector de sufixo ativado.",
    tutorials: {
      onStart: { type: 'theory', title: 'Detector de Sufixo "1010"!', dialog: [
        'L34: a palavra termina em "1010". O começo pode ser qualquer coisa!',
        '"01010" — válida (termina em 1010). "1011" — inválida (termina em 1011).',
        'Estratégia: 5 estados rastreiam o melhor sufixo que seja prefixo de "1010".',
        'Ao sair do padrão, backedges resetam para o estado correto — sem perder contexto.',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Sufixo com Backedges', dialog: [
        'Cadeia: q0—1→q1—0→q2—1→q3—0→q4(final). Lê "1010" perfeito!',
        'Absorção: q0—0→q0 (0 antes de 1 não ajuda). q1—1→q1 (dois 1s; só o último conta).',
        'Resets: q2—0→q0, q3—1→q0, q4—0→q0. q4—1→q3 (após "1010"+1 → novo "101").',
      ] },
    },
    guidedLesson: [
      { text: 'Sufixo obrigatório "1010"!<br/>Aceitar: <b>1010</b>, <b>01010</b>, <b>001010</b>. Rejeitar: λ, 101, 1011.',
        stateUpdate: { nodes: [], transitions: [] } },
      { text: '"1010": q0—1→q1—0→q2—1→q3—0→q4(final). Cadeia linear de 5 estados.<br/>Status: <s>1010</s>. E "01010"?',
        stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 10, y: 65, isInitial: true,  isFinal: false },
            { id: 'q1', label: 'q1', x: 28, y: 35, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 46, y: 65, isInitial: false, isFinal: false },
            { id: 'q3', label: 'q3', x: 64, y: 35, isInitial: false, isFinal: false },
            { id: 'q4', label: 'q4', x: 82, y: 65, isInitial: false, isFinal: true  },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: '1' },
            { from: 'q1', to: 'q2', symbol: '0' },
            { from: 'q2', to: 'q3', symbol: '1' },
            { from: 'q3', to: 'q4', symbol: '0' },
          ],
        } },
      { text: '🐛 "01010": q0 lê "0" — sem seta! Fix loops de absorção: <b>q0—0→q0</b> e <b>q1—1→q1</b>.<br/>Status: <s>1010</s>, <s>01010</s>, <s>001010</s> ✔. E "1011"?',
        stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 10, y: 65, isInitial: true,  isFinal: false },
            { id: 'q1', label: 'q1', x: 28, y: 35, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 46, y: 65, isInitial: false, isFinal: false },
            { id: 'q3', label: 'q3', x: 64, y: 35, isInitial: false, isFinal: false },
            { id: 'q4', label: 'q4', x: 82, y: 65, isInitial: false, isFinal: true  },
          ],
          transitions: [
            { from: 'q0', to: 'q0', symbol: '0' },
            { from: 'q0', to: 'q1', symbol: '1' },
            { from: 'q1', to: 'q1', symbol: '1' },
            { from: 'q1', to: 'q2', symbol: '0' },
            { from: 'q2', to: 'q3', symbol: '1' },
            { from: 'q3', to: 'q4', symbol: '0' },
          ],
        } },
      { text: '🐛 "1011": q3 lê "1" — sem seta! Fix resets: <b>q2—0→q0</b>, <b>q3—1→q0</b>, <b>q4—0→q0</b>, <b>q4—1→q3</b>.<br/>"1011": q3—1→q0. Não-final → rejeitado ✔ Concluído!',
        stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 10, y: 65, isInitial: true,  isFinal: false },
            { id: 'q1', label: 'q1', x: 28, y: 35, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 46, y: 65, isInitial: false, isFinal: false },
            { id: 'q3', label: 'q3', x: 64, y: 35, isInitial: false, isFinal: false },
            { id: 'q4', label: 'q4', x: 82, y: 65, isInitial: false, isFinal: true  },
          ],
          transitions: [
            { from: 'q0', to: 'q0', symbol: '0' },
            { from: 'q0', to: 'q1', symbol: '1' },
            { from: 'q1', to: 'q1', symbol: '1' },
            { from: 'q1', to: 'q2', symbol: '0' },
            { from: 'q2', to: 'q0', symbol: '0' },
            { from: 'q2', to: 'q3', symbol: '1' },
            { from: 'q3', to: 'q4', symbol: '0' },
            { from: 'q3', to: 'q0', symbol: '1' },
            { from: 'q4', to: 'q0', symbol: '0' },
            { from: 'q4', to: 'q3', symbol: '1' },
          ],
        } },
    ] },
  { id: 35, label: "L35a", formula: "L = { w ∈ {0,1}* | w tem 1111 como subpalavra }",                 desc: "",                                                                 shortestWord: "1111",     regex: /^[01]*1111[01]*/,                                           alphabet: ['0', '1'],             acceptedWords: ["1111","01111","11110"],   rejectedWords: ["λ","111","11011"],     hint: "Assim que achar quatro '1's seguidos, pode ir para um estado final que aceita tudo.",                               successMsg: "Achou a subpalavra!",
    tutorials: {
      onStart: { type: 'theory', title: 'Caçando "1111"!', dialog: [
        'L35a: a palavra CONTÉM "1111" como subpalavra (em qualquer posição).',
        '"01111" — válida (contém 1111). "11011" — inválida (corrida de 1s interrompida).',
        'Estratégia: contar 1s consecutivos. Ao atingir 4, entrar em estado final permanente.',
        'Um "0" a qualquer momento zera a contagem e volta ao início.',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Contador de Uns Consecutivos', dialog: [
        'q0: nenhum 1. q1: um 1. q2: dois 1s. q3: três 1s. q4(final): quatro ou mais 1s!',
        'Ler 0 em q0/q1/q2/q3 → volta para q0 (zera contagem).',
        'q4—{0,1}→q4: uma vez achados os 4 uns, a palavra já é válida. Loop eterno!',
      ] },
    },
    guidedLesson: [
      { text: 'Subpalavra "1111" em qualquer posição!<br/>Aceitar: <b>1111</b>, <b>01111</b>, <b>11110</b>. Rejeitar: λ, 111, 11011.',
        stateUpdate: { nodes: [], transitions: [] } },
      { text: '"1111": q0—1→q1—1→q2—1→q3—1→q4(final). Cadeia de 5 estados.<br/>Status: <s>1111</s>. E "01111"?',
        stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 10, y: 65, isInitial: true,  isFinal: false },
            { id: 'q1', label: 'q1', x: 28, y: 35, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 46, y: 65, isInitial: false, isFinal: false },
            { id: 'q3', label: 'q3', x: 64, y: 35, isInitial: false, isFinal: false },
            { id: 'q4', label: 'q4', x: 82, y: 65, isInitial: false, isFinal: true  },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: '1' },
            { from: 'q1', to: 'q2', symbol: '1' },
            { from: 'q2', to: 'q3', symbol: '1' },
            { from: 'q3', to: 'q4', symbol: '1' },
          ],
        } },
      { text: '🐛 "01111": q0 lê "0" — sem seta! Fix resets: <b>q0—0→q0</b>, <b>q1—0→q0</b>, <b>q2—0→q0</b>, <b>q3—0→q0</b>. Loop final: <b>q4—{0,1}→q4</b>.<br/>"11110": q4—0→q4 ✔ "11011": termina em q2 (não-final) ✔ Concluído!',
        stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 10, y: 65, isInitial: true,  isFinal: false },
            { id: 'q1', label: 'q1', x: 28, y: 35, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 46, y: 65, isInitial: false, isFinal: false },
            { id: 'q3', label: 'q3', x: 64, y: 35, isInitial: false, isFinal: false },
            { id: 'q4', label: 'q4', x: 82, y: 65, isInitial: false, isFinal: true  },
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
            { from: 'q4', to: 'q4', symbol: '0,1' },
          ],
        } },
    ] },
  { id: 36, label: "L35b", formula: "L = { w ∈ {a,b,c,d}* | w tem abc como prefixo }",                 desc: "",                                                                 shortestWord: "abc",      regex: /^abc[abcd]*/,                                               alphabet: ['a', 'b', 'c', 'd'],   acceptedWords: ["abc","abcd","abcabc"],   rejectedWords: ["λ","ab","bca"],        hint: "Igual ao 001, mas com um alfabeto maior.",                                                                          successMsg: "Prefixo alfabético concluído." },
  { id: 37, label: "L36", formula: "L = { w ∈ {a,b,c,d}* | w tem dcba como sufixo }",                  desc: "",                                                                 shortestWord: "dcba",     regex: /^[abcd]*dcba$/,                                             alphabet: ['a', 'b', 'c', 'd'],   acceptedWords: ["dcba","adcba","aadcba"], rejectedWords: ["λ","dcb","abcd"],      hint: "O caminho final deve obrigatoriamente soletrar 'dcba'.",                                                            successMsg: "Sufixo alfabético detectado." },
  { id: 38, label: "L37", formula: "L = { w ∈ {a,b,c,d}* | tem abcd ou dcba como subpalavra }",        desc: "",                                                                 shortestWord: "abcd",     regex: /^[abcd]*(abcd|dcba)[abcd]*$/,                               alphabet: ['a', 'b', 'c', 'd'],   acceptedWords: ["abcd","dcba","aabcdb"],  rejectedWords: ["λ","abc","dcb"],       hint: "Dois caminhos independentes saindo do início que caem num mesmo estado de vitória.",                                successMsg: "Bifurcação de subpalavras dominada!" },
  { id: 39, label: "L38", formula: "L = { (a+b)* | qtd de 'a' é par, qtd de 'b' é ímpar }",            desc: "",                                                                 shortestWord: "b",        regex: /^.*$/, validate: w => [...w].filter(c=>c==='a').length%2===0 && [...w].filter(c=>c==='b').length%2===1, alphabet: ['a', 'b'],             acceptedWords: ["b","aab","bbb"],          rejectedWords: ["λ","a","ab"],          hint: "Você precisa de 4 estados para controlar: Par/Par, Par/Ímpar, Ímpar/Par, Ímpar/Ímpar.",                             successMsg: "Quadrante de paridade solucionado." },
  { id: 40, label: "L39", formula: "L = { (a+b)* | qtd de 'a' é ímpar, qtd de 'b' é ímpar }",          desc: "",                                                                 shortestWord: "ab",       regex: /^.*$/, validate: w => [...w].filter(c=>c==='a').length%2===1 && [...w].filter(c=>c==='b').length%2===1, alphabet: ['a', 'b'],             acceptedWords: ["ab","abbb","aaabbb"],     rejectedWords: ["λ","a","b"],           hint: "Parecido com a anterior, mas o estado de aceitação muda.",                                                          successMsg: "Paridade ímpar cruzada!" },
];
