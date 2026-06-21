import { LEVEL_GRAPHS } from '../levels_graphs.js';

// ─── Modo Aula dos níveis avançados (L56+) — desconstrução didática ──────────
// O Modo Aula do AFD revela o grafo PASSO A PASSO (cada passo carrega um
// stateUpdate cumulativo com os nós/arestas já apresentados). A fase FORMAL —
// tupla M=(Q,Σ,δ,q₀,F) + tabela δ — é auto-derivada pelo motor da aula
// (useGuidedLesson.buildAFDFormalSteps) a partir do stateUpdate do ÚLTIMO passo,
// que por isso precisa conter o grafo completo.
//
// Metodologia (Regra de Ouro): Caminho da Menor Palavra → Laços/Quantificadores
// → Ramificações/Ciclos → Generalização (grafo completo).
//
// makeBuilder injeta as coordenadas (x,y) de um layout fixo nos SUBCONJUNTOS de
// nós revelados a cada passo, garantindo que os nós não "pulem" de lugar entre
// os passos. Arestas multi-símbolo (ex.: 'b,c,d') entram uma única vez.
function makeBuilder(graph, layout) {
  const byId = Object.fromEntries(graph.nodes.map(n => [n.id, n]));
  const findEdge = (from, sym, to) => graph.transitions.find(t =>
    t.from === from && t.to === to &&
    t.symbol.split(',').map(s => s.trim()).includes(sym));
  const nodeIds = new Set();
  const edges = [];
  const mkNode = (id) => ({
    id, label: id, x: layout[id][0], y: layout[id][1],
    isInitial: !!byId[id].isInitial, isFinal: !!byId[id].isFinal,
  });
  return {
    addNodes(...ids) { ids.forEach(id => nodeIds.add(id)); return this; },
    addEdges(...specs) {
      for (const [f, s, t] of specs) {
        const e = findEdge(f, s, t);
        if (e && !edges.includes(e)) edges.push(e);
      }
      return this;
    },
    // Passo de DESENHO: revela o grafo recém-montado. NÃO simula.
    draw(text, boardDoneUpTo = -1) {
      return { text, boardDoneUpTo, stateUpdate: {
        nodes: [...nodeIds].map(mkNode),
        transitions: edges.map(e => ({ ...e })),
      }};
    },
    // Passo de SIMULAÇÃO: grafo CONGELADO (cópia exata do desenho anterior, sem
    // arestas novas) + palavra a testar. Mantém o canvas estático durante o teste.
    test(text, simulateWord, boardDoneUpTo = -1) {
      return { text, boardDoneUpTo, simulateWord, stateUpdate: {
        nodes: [...nodeIds].map(mkNode),
        transitions: edges.map(e => ({ ...e })),
      }};
    },
    // Passo de SIMULAÇÃO de REJEIÇÃO DIDÁTICA: a palavra foi escolhida para falhar
    // de propósito (ensina por que faltam estados). expectedVerdict='reject' faz a
    // lousa mostrar "Rejeição esperada" (educativo) em vez de "Erro" (vermelho).
    reject(text, simulateWord, boardDoneUpTo = -1) {
      return { text, boardDoneUpTo, simulateWord, expectedVerdict: 'reject', stateUpdate: {
        nodes: [...nodeIds].map(mkNode),
        transitions: edges.map(e => ({ ...e })),
      }};
    },
    // Transição para a Descrição Formal (grafo completo, congelado).
    formalIntro(text, boardDoneUpTo = -1) {
      return { text, boardDoneUpTo, formalIntro: true, stateUpdate: {
        nodes: [...nodeIds].map(mkNode),
        transitions: edges.map(e => ({ ...e })),
      }};
    },
  };
}

// L56 — a^(n+3)(bc+cb)(ddd)^m aba e^p a(bc)+ — menor palavra: "aaabcabaabc"
function buildLessonL56() {
  const b = makeBuilder(LEVEL_GRAPHS[56], {
    q0:[6,50], q1:[14,50], q2:[21,50], q3:[29,50], q4:[36,50], q5:[44,50],
    q6:[51,50], q7:[59,50], q8:[67,50], q12:[74,50], q13:[82,50], q14:[90,50],
    q9:[32,22], q10:[40,80], q11:[50,80],
  });
  const steps = [];
  b.addNodes('q0','q1','q2','q3','q4','q5','q6','q7','q8','q12','q13','q14')
   .addEdges(['q0','a','q1'],['q1','a','q2'],['q2','a','q3'],['q3','b','q4'],
             ['q4','c','q5'],['q5','a','q6'],['q6','b','q7'],['q7','a','q8'],
             ['q8','a','q12'],['q12','b','q13'],['q13','c','q14']);
  steps.push(b.draw('Vamos construir o caminho da menor palavra válida: "aaabcabaabc".', -1));
  steps.push(b.test('Veja como "aaabcabaabc" percorre essa espinha dorsal.', 'aaabcabaabc', 0));
  steps.push(b.reject('Mas "aabcabaabc" tem só dois "a": sem um terceiro, a máquina trava em q2!', 'aabcabaabc', 0));
  b.addEdges(['q3','a','q3'],['q8','e','q8']);
  steps.push(b.draw('Agora os laços para as repetições: a^n (em q3) e e^p (em q8).', 0));
  steps.push(b.test('Com os laços, "aaaabcabaeabc" usa um "a" extra e um "e".', 'aaaabcabaeabc', 0));
  b.addNodes('q9','q10','q11')
   .addEdges(['q3','c','q9'],['q9','b','q5'],['q5','d','q10'],['q10','d','q11'],['q11','d','q5']);
  steps.push(b.draw('E os blocos opcionais: o caminho alternativo "cb" (q9) e o ciclo (ddd).', 1));
  steps.push(b.test('"aaacbdddabaabc" entra pelo "cb" e dá uma volta no ciclo ddd.', 'aaacbdddabaabc', 1));
  b.addEdges(['q14','b','q13']);
  steps.push(b.draw('Por fim, o laço que repete o sufixo (bc)+.', 2));
  steps.push(b.test('"aaabcabaabcbc" repete o bloco "bc" no final.', 'aaabcabaabcbc', 2));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

// L57 — a w a x a, w,x com #b e #c PARES — menor palavra: "aaa"
function buildLessonL57() {
  const b = makeBuilder(LEVEL_GRAPHS[57], {
    q0:[8,55], q1:[28,55], q2:[18,32], q3:[38,32], q4:[28,12],
    q5:[60,55], q6:[50,32], q7:[70,32], q8:[60,12], q9:[90,55],
  });
  const steps = [];
  b.addNodes('q0','q1','q5','q9')
   .addEdges(['q0','a','q1'],['q1','a','q5'],['q5','a','q9']);
  steps.push(b.draw('Vamos construir o caminho da menor palavra válida: "aaa".', -1));
  steps.push(b.test('Veja "aaa" percorrer q0→q1→q5→q9.', 'aaa', 0));
  b.addNodes('q2','q3','q4')
   .addEdges(['q1','b','q2'],['q2','b','q1'],['q1','c','q3'],['q3','c','q1'],
             ['q2','c','q4'],['q4','c','q2'],['q3','b','q4'],['q4','b','q3']);
  steps.push(b.draw('Adicionamos o rastreio de paridade do bloco w (par/par volta a q1).', 1));
  steps.push(b.test('"abbaa" tem w="bb" (par/par) e volta a q1 antes do "a" do meio.', 'abbaa', 1));
  steps.push(b.reject('Mas "abaa" tem w="b" (b ÍMPAR): paramos em q2, que não tem saída por "a". Rejeita!', 'abaa', 1));
  steps.push(b.reject('E "acaa" tem w="c" (c ÍMPAR): a máquina morre em q3. Por isso precisamos rastrear a paridade!', 'acaa', 1));
  b.addNodes('q6','q7','q8')
   .addEdges(['q5','b','q6'],['q6','b','q5'],['q5','c','q7'],['q7','c','q5'],
             ['q6','c','q8'],['q8','c','q6'],['q7','b','q8'],['q8','b','q7']);
  steps.push(b.draw('E o mesmo rastreio para o bloco x.', 2));
  steps.push(b.test('"abbabba" exercita os dois blocos, ambos par/par.', 'abbabba', 2));
  steps.push(b.reject('Já "aabaa" tem x="b" (ímpar): agora trava em q6, dentro do bloco x.', 'aabaa', 2));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

// L58 — b^n a (bcd)^m a b^p c^q e w e^r a^s b^t c^u — menor palavra: "aaceabe"
function buildLessonL58() {
  const b = makeBuilder(LEVEL_GRAPHS[58], {
    q0:[8,48], q1:[19,48], q2:[14,20], q3:[25,20], q4:[31,48], q5:[42,48],
    q6:[53,48], q7:[64,48], q8:[75,48], q9:[86,48],
    q10:[70,80], q11:[80,80], q12:[90,80],
  });
  const steps = [];
  b.addNodes('q0','q1','q4','q5','q6','q7','q8','q9')
   .addEdges(['q0','a','q1'],['q1','a','q4'],['q4','c','q5'],['q5','e','q6'],
             ['q6','a','q7'],['q7','b','q8'],['q8','e','q9']);
  steps.push(b.draw('Vamos construir o caminho da menor palavra válida: "aaceabe".', -1));
  steps.push(b.test('Veja como "aaceabe" percorre essa espinha dorsal até q9.', 'aaceabe', 0));
  steps.push(b.reject('Mas "aaeabae" pula o "c" obrigatório (q>0): q4 não tem saída por "e" e trava!', 'aaeabae', 0));
  b.addEdges(['q0','b','q0'],['q4','b','q4'],['q5','c','q5'],['q9','e','q9']);
  steps.push(b.draw('Agora os laços das repetições: b^n, b^p, c^q e e^r.', 0));
  steps.push(b.test('"baabcceabe" usa o "b" inicial, um "b" extra e dois "c".', 'baabcceabe', 0));
  b.addNodes('q2','q3')
   .addEdges(['q1','b','q2'],['q2','c','q3'],['q3','d','q1']);
  steps.push(b.draw('E o bloco opcional complexo: o ciclo (bcd).', 1));
  steps.push(b.test('"abcdaceabe" dá uma volta completa no ciclo bcd.', 'abcdaceabe', 1));
  b.addEdges(['q6','b','q6'],['q6','c','q6'],['q6','d','q6'],['q7','a','q7'],
             ['q7','c','q6'],['q7','d','q6'],['q8','a','q7'],['q8','b','q6'],
             ['q8','c','q6'],['q8','d','q6']);
  steps.push(b.draw('Mapeamos as transições restantes do DFA de sufixo "ab" (voltas de q6, q7, q8).', 1));
  steps.push(b.test('"aaceacabe" quebra e recupera o sufixo: w="acab" termina em "ab".', 'aaceacabe', 1));
  steps.push(b.reject('Já "aaceabcdae" tem w terminando em "da": sem o "b" final, q7 não sai por "e". Trava!', 'aaceabcdae', 1));
  b.addNodes('q10','q11','q12')
   .addEdges(['q9','a','q10'],['q9','b','q11'],['q9','c','q12'],
             ['q10','a','q10'],['q10','b','q11'],['q10','c','q12'],
             ['q11','b','q11'],['q11','c','q12'],['q12','c','q12']);
  steps.push(b.draw('Por fim, a cauda e* a* b* c*.', 2));
  steps.push(b.test('"aaceabeaabbcc" percorre a cauda com a², b² e c².', 'aaceabeaabbcc', 2));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

// L59 — a* (bb)* c* d* (#b par) — espinha via "bbcd"
function buildLessonL59() {
  const b = makeBuilder(LEVEL_GRAPHS[59], {
    q0:[12,50], q1:[32,50], q2:[52,50], q3:[72,50], q4:[90,50],
  });
  const steps = [];
  b.addNodes('q0','q1','q2','q3','q4')
   .addEdges(['q0','b','q1'],['q1','b','q2'],['q2','c','q3'],['q3','d','q4']);
  steps.push(b.draw('Vamos construir o caminho da palavra "bbcd": b em par, depois c, depois d.', -1));
  steps.push(b.test('Veja como "bbcd" percorre essa espinha dorsal.', 'bbcd', 0));
  steps.push(b.reject('Mas "bbb" tem número ímpar de "b": sobra um "b" e a máquina trava em q2!', 'bbb', 0));
  b.addEdges(['q0','a','q0'],['q3','c','q3'],['q4','d','q4']);
  steps.push(b.draw('Agora os laços para as repetições: a*, c* e d*.', 1));
  steps.push(b.test('"aabbccdd" usa os laços de a, c e d (com um par de b).', 'aabbccdd', 1));
  b.addEdges(['q2','b','q1'],['q0','c','q3'],['q0','d','q4'],['q2','d','q4']);
  steps.push(b.draw('E as ramificações: o retorno do par de b e os atalhos para c e d.', 2));
  steps.push(b.test('"bbbb" repete o par de b duas vezes (usa o retorno q2→q1).', 'bbbb', 2));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

// L60 — a w a x a, w,x com #b e #c ÍMPARES — menor palavra: "abcabca"
function buildLessonL60() {
  const b = makeBuilder(LEVEL_GRAPHS[60], {
    q0:[8,55], q1:[24,55], q2:[16,32], q3:[34,30], q4:[26,80],
    q5:[58,55], q6:[50,32], q7:[66,30], q8:[58,80], q9:[90,55],
  });
  const steps = [];
  b.addNodes('q0','q1','q2','q4','q5','q6','q7','q9')
   .addEdges(['q0','a','q1'],['q1','b','q2'],['q2','c','q4'],['q4','a','q5'],
             ['q5','b','q6'],['q6','c','q7'],['q7','a','q9']);
  steps.push(b.draw('Vamos construir o caminho da menor palavra válida: "abcabca".', -1));
  steps.push(b.test('Veja "abcabca" percorrer os dois blocos ímpar/ímpar.', 'abcabca', 0));
  b.addNodes('q3')
   .addEdges(['q1','c','q3'],['q2','b','q1'],['q3','b','q4'],['q3','c','q1'],['q4','b','q3'],['q4','c','q2']);
  steps.push(b.draw('Completamos o rastreio de paridade do bloco w (saída ímpar/ímpar é q4).', 1));
  steps.push(b.test('"acbabca" tem w="cb" (ímpar/ímpar) chegando a q4.', 'acbabca', 1));
  steps.push(b.reject('Mas "ababca" tem w="b" (só b, sem c ímpar): paramos em q2. Precisamos de b E c ímpares!', 'ababca', 1));
  b.addNodes('q8')
   .addEdges(['q5','c','q8'],['q6','b','q5'],['q7','b','q8'],['q7','c','q6'],['q8','b','q7'],['q8','c','q5']);
  steps.push(b.draw('E o mesmo rastreio no bloco x (saída ímpar/ímpar é q7).', 2));
  steps.push(b.test('"abcacba" tem x="cb" (ímpar/ímpar) chegando a q7.', 'abcacba', 2));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

// L61 — binário múltiplo de 6 (autômato mod 6) — espinha via "110"
function buildLessonL61() {
  const b = makeBuilder(LEVEL_GRAPHS[61], {
    q0:[10,50], q1:[28,50], q2:[46,28], q3:[64,28], q4:[46,72], q5:[64,72], q6:[84,50],
  });
  const steps = [];
  b.addNodes('q0','q1','q2','q3')
   .addEdges(['q0','1','q2'],['q2','1','q3'],['q3','0','q1']);
  steps.push(b.draw('Vamos construir o caminho que aceita "110" (valor 6): q0→q2→q3→q1.', -1));
  steps.push(b.test('Veja "110" terminar em q1 (resto 0 = aceita).', '110', 0));
  steps.push(b.reject('Mas "1" termina em q2 (resto 1): não é estado final, então rejeita!', '1', 0));
  b.addEdges(['q0','0','q1'],['q1','0','q1'],['q1','1','q2']);
  steps.push(b.draw('q1 é o resto 0 (aceita): adicionamos seu laço e a entrada por "0".', 1));
  steps.push(b.test('"000" fica no laço de q1 (valor 0, múltiplo de 6).', '000', 1));
  b.addNodes('q4','q5','q6')
   .addEdges(['q2','0','q4'],['q4','0','q5'],['q4','1','q6'],['q3','1','q2'],
             ['q5','0','q4'],['q5','1','q3'],['q6','0','q5'],['q6','1','q6']);
  steps.push(b.draw('Cada estado é um resto mod 6: mapeamos as transições dos restos 2, 4 e 5.', 2));
  steps.push(b.test('"10010" (valor 18) passa pelos restos 2 e 4 e aceita.', '10010', 2));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

export const lote3 = [
  { id: 41, label: "L40", formula: "L = { a^n b^2m d c^3p d | n, m, p ≥ 0 }",                          desc: "",                                                                 shortestWord: "dd",       regex: /^a*(bb)*d(ccc)*d$/,                                         alphabet: ['a', 'b', 'c', 'd'],   acceptedWords: ["dd","abbdd","adcccdd"],  rejectedWords: ["d","abd","abcdd"],     hint: "Essa é grande! Blocos de 'b' em duplas, o primeiro 'd' serve de ponte, e 'c' em trios.",                            successMsg: "Sintaxe complexa analisada com sucesso.",
    tutorials: {
      onStart: { type: 'theory', title: 'Blocos: a-block, b-pares, d, c-trios, d!', dialog: [
        'L40: a^n b^2m d c^3p d. a-s, depois b-pares, depois d, depois c-trios, depois d.',
        '"dd" ✓ (0a 0b 0c). "abbdd" ✓ (1a 1par-b). "adcccd" ✓ (1a 1trio-c).',
        '6 estados: q0(ini), q1(b-impar), q2(apos-d), q3(c-1), q4(c-2), q5(f).',
      ] },
      onDrawGraph: { type: 'mechanic', title: '6 Estados em Sequencia', dialog: [
        'q0 loop a. q0—b→q1—b→q0 (pares). q0—d→q2 (ponte).',
        'q2—d→q5(f). q2—c→q3—c→q4—c→q2 (trio completo volta a q2).',
        '"adcccd": q0—a→q0—d→q2—c→q3—c→q4—c→q2—d→q5(f) ✓.',
      ] },
    },
    boardWords: ['dd', 'abbdd', 'adcccd'],
    guidedLesson: [
      { text: 'Blocos sequenciais: a* — b-pares — d — c-trios — d!<br/>Aceitar: <b>dd</b>, <b>abbdd</b>, <b>adcccd</b>. Rejeitar: d, abd, abcdd.',
        boardDoneUpTo: -1, stateUpdate: { nodes: [], transitions: [] } },
      { text: 'Foco em <b>dd</b>: núcleo q0→q2(d)→q5(final).',
        boardDoneUpTo: 0, stateUpdate: { nodes: [], transitions: [] } },
      { text: 'Solução: q0→q2(d)→q5(final). "dd"✓. Próxima: "abbdd"!',
        boardDoneUpTo: 1, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 10, y: 40, isInitial: true,  isFinal: false },
            { id: 'q2', label: 'q2', x: 50, y: 40, isInitial: false, isFinal: false },
            { id: 'q5', label: 'q5', x: 90, y: 40, isInitial: false, isFinal: true  },
          ],
          transitions: [
            { from: 'q0', to: 'q2', symbol: 'd' },
            { from: 'q2', to: 'q5', symbol: 'd' },
          ] } },
      { text: 'Foco em <b>abbdd</b>: q0 lê "a" e "b" — sem seta! Preciso de loop a e q1 para b-pares.',
        boardDoneUpTo: 1, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 10, y: 40, isInitial: true,  isFinal: false },
            { id: 'q2', label: 'q2', x: 50, y: 40, isInitial: false, isFinal: false },
            { id: 'q5', label: 'q5', x: 90, y: 40, isInitial: false, isFinal: true  },
          ],
          transitions: [
            { from: 'q0', to: 'q2', symbol: 'd' },
            { from: 'q2', to: 'q5', symbol: 'd' },
          ] } },
      { text: 'Solução: q0 loop a, q0→q1(b)→q0(b). "abbdd"✓. Próxima: "adcccd"!',
        boardDoneUpTo: 2, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 10, y: 40, isInitial: true,  isFinal: false },
            { id: 'q1', label: 'q1', x: 10, y: 70, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 50, y: 40, isInitial: false, isFinal: false },
            { id: 'q5', label: 'q5', x: 90, y: 40, isInitial: false, isFinal: true  },
          ],
          transitions: [
            { from: 'q0', to: 'q0', symbol: 'a' },
            { from: 'q0', to: 'q1', symbol: 'b' },
            { from: 'q1', to: 'q0', symbol: 'b' },
            { from: 'q0', to: 'q2', symbol: 'd' },
            { from: 'q2', to: 'q5', symbol: 'd' },
          ] } },
      { text: 'Foco em <b>adcccd</b>: q2 lê "c" — sem seta! Preciso de ciclo de c-trios.',
        boardDoneUpTo: 2, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 10, y: 40, isInitial: true,  isFinal: false },
            { id: 'q1', label: 'q1', x: 10, y: 70, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 50, y: 40, isInitial: false, isFinal: false },
            { id: 'q5', label: 'q5', x: 90, y: 40, isInitial: false, isFinal: true  },
          ],
          transitions: [
            { from: 'q0', to: 'q0', symbol: 'a' },
            { from: 'q0', to: 'q1', symbol: 'b' },
            { from: 'q1', to: 'q0', symbol: 'b' },
            { from: 'q0', to: 'q2', symbol: 'd' },
            { from: 'q2', to: 'q5', symbol: 'd' },
          ] } },
      { text: 'Solução: q2→q3(c)→q4(c)→q2(c). "adcccd"✓ Concluído!',
        boardDoneUpTo: 3, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 10, y: 40, isInitial: true,  isFinal: false },
            { id: 'q1', label: 'q1', x: 10, y: 70, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 48, y: 40, isInitial: false, isFinal: false },
            { id: 'q3', label: 'q3', x: 40, y: 70, isInitial: false, isFinal: false },
            { id: 'q4', label: 'q4', x: 58, y: 70, isInitial: false, isFinal: false },
            { id: 'q5', label: 'q5', x: 88, y: 40, isInitial: false, isFinal: true  },
          ],
          transitions: [
            { from: 'q0', to: 'q0', symbol: 'a' },
            { from: 'q0', to: 'q1', symbol: 'b' },
            { from: 'q1', to: 'q0', symbol: 'b' },
            { from: 'q0', to: 'q2', symbol: 'd' },
            { from: 'q2', to: 'q5', symbol: 'd' },
            { from: 'q2', to: 'q3', symbol: 'c' },
            { from: 'q3', to: 'q4', symbol: 'c' },
            { from: 'q4', to: 'q2', symbol: 'c' },
          ] } },
    ] },
  { id: 42, label: "L41", formula: "L = { a(dcb)^n a^m (bb)^p | n > 0, m > 0, p ≥ 0 }",               desc: "",                                                                 shortestWord: "adcba",    regex: /^a(dcb)+a+(bb)*$/,                                          alphabet: ['a', 'b', 'c', 'd'],   acceptedWords: ["adcba","adcbaa","adcbabb"], rejectedWords: ["a","adcb","dcba"],  hint: "Siga a receita passo a passo, o ciclo 'dcb' é o coração do automato.",                                              successMsg: "Ciclo gigante dominado.",
    tutorials: {
      onStart: { type: 'theory', title: 'Ciclo dcb: a + dcb+ + a+ + b-pares!', dialog: [
        'L41: "a", depois 1+ ciclos de "dcb", depois 1+ "a", depois b-pares opcionais.',
        '"adcba" ✓ (1 ciclo, 1a). "adcbaa" ✓ (1 ciclo, 2a). "adcbabb" ✓ (1a, 1par-b).',
        '"a" ✗ (sem dcb). "adcb" ✗ (sem a final). 7 estados em cadeia.',
      ] },
      onDrawGraph: { type: 'mechanic', title: '7 Estados: Cadeia + Ciclo + b-pares', dialog: [
        'q0—a→q1—d→q2—c→q3—b→q4 (ciclo dcb). q4—d→q2 (repetir ciclo).',
        'q4—a→q5(f). q5 loop a. q5—b→q6—b→q5 (pares de b).',
        '"adcbabb": q0→q1→q2→q3→q4→q5—b→q6—b→q5(f) ✓.',
      ] },
    },
    boardWords: ['adcba', 'adcbaa', 'adcbabb'],
    guidedLesson: [
      { text: 'Ciclo dcb! a + (dcb)+ + a+ + (bb)*<br/>Aceitar: <b>adcba</b>, <b>adcbaa</b>, <b>adcbabb</b>. Rejeitar: a, adcb, dcba.',
        boardDoneUpTo: -1, stateUpdate: { nodes: [], transitions: [] } },
      { text: 'Foco em <b>adcba</b>: cadeia q0→q1(a)→q2(d)→q3(c)→q4(b) + ciclo q4→q2(d) e saída q4→q5(final).',
        boardDoneUpTo: 0, stateUpdate: { nodes: [], transitions: [] } },
      { text: 'Solução: cadeia + ciclo. "adcba"✓. Próxima: "adcbaa"!',
        boardDoneUpTo: 1, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x:  8, y: 40, isInitial: true,  isFinal: false },
            { id: 'q1', label: 'q1', x: 24, y: 40, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 40, y: 40, isInitial: false, isFinal: false },
            { id: 'q3', label: 'q3', x: 56, y: 40, isInitial: false, isFinal: false },
            { id: 'q4', label: 'q4', x: 72, y: 40, isInitial: false, isFinal: false },
            { id: 'q5', label: 'q5', x: 88, y: 40, isInitial: false, isFinal: true  },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q2', symbol: 'd' },
            { from: 'q2', to: 'q3', symbol: 'c' },
            { from: 'q3', to: 'q4', symbol: 'b' },
            { from: 'q4', to: 'q2', symbol: 'd' },
            { from: 'q4', to: 'q5', symbol: 'a' },
          ] } },
      { text: 'Foco em <b>adcbaa</b>: q5 lê segundo "a" — sem loop! Preciso de q5→q5(a).',
        boardDoneUpTo: 1, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x:  8, y: 40, isInitial: true,  isFinal: false },
            { id: 'q1', label: 'q1', x: 24, y: 40, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 40, y: 40, isInitial: false, isFinal: false },
            { id: 'q3', label: 'q3', x: 56, y: 40, isInitial: false, isFinal: false },
            { id: 'q4', label: 'q4', x: 72, y: 40, isInitial: false, isFinal: false },
            { id: 'q5', label: 'q5', x: 88, y: 40, isInitial: false, isFinal: true  },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q2', symbol: 'd' },
            { from: 'q2', to: 'q3', symbol: 'c' },
            { from: 'q3', to: 'q4', symbol: 'b' },
            { from: 'q4', to: 'q2', symbol: 'd' },
            { from: 'q4', to: 'q5', symbol: 'a' },
          ] } },
      { text: 'Solução: q5 loop a. "adcbaa"✓. Próxima: "adcbabb"!',
        boardDoneUpTo: 2, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x:  8, y: 40, isInitial: true,  isFinal: false },
            { id: 'q1', label: 'q1', x: 24, y: 40, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 40, y: 40, isInitial: false, isFinal: false },
            { id: 'q3', label: 'q3', x: 56, y: 40, isInitial: false, isFinal: false },
            { id: 'q4', label: 'q4', x: 72, y: 40, isInitial: false, isFinal: false },
            { id: 'q5', label: 'q5', x: 88, y: 40, isInitial: false, isFinal: true  },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q2', symbol: 'd' },
            { from: 'q2', to: 'q3', symbol: 'c' },
            { from: 'q3', to: 'q4', symbol: 'b' },
            { from: 'q4', to: 'q2', symbol: 'd' },
            { from: 'q4', to: 'q5', symbol: 'a' },
            { from: 'q5', to: 'q5', symbol: 'a' },
          ] } },
      { text: 'Foco em <b>adcbabb</b>: q5 lê "b" — sem seta! Preciso de q6 para b-pares.',
        boardDoneUpTo: 2, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x:  8, y: 40, isInitial: true,  isFinal: false },
            { id: 'q1', label: 'q1', x: 24, y: 40, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 40, y: 40, isInitial: false, isFinal: false },
            { id: 'q3', label: 'q3', x: 56, y: 40, isInitial: false, isFinal: false },
            { id: 'q4', label: 'q4', x: 72, y: 40, isInitial: false, isFinal: false },
            { id: 'q5', label: 'q5', x: 88, y: 40, isInitial: false, isFinal: true  },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q2', symbol: 'd' },
            { from: 'q2', to: 'q3', symbol: 'c' },
            { from: 'q3', to: 'q4', symbol: 'b' },
            { from: 'q4', to: 'q2', symbol: 'd' },
            { from: 'q4', to: 'q5', symbol: 'a' },
            { from: 'q5', to: 'q5', symbol: 'a' },
          ] } },
      { text: 'Solução: q5→q6(b)→q5(b). "adcbabb"✓ Concluído!',
        boardDoneUpTo: 3, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x:  8, y: 40, isInitial: true,  isFinal: false },
            { id: 'q1', label: 'q1', x: 24, y: 40, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 40, y: 40, isInitial: false, isFinal: false },
            { id: 'q3', label: 'q3', x: 56, y: 40, isInitial: false, isFinal: false },
            { id: 'q4', label: 'q4', x: 72, y: 40, isInitial: false, isFinal: false },
            { id: 'q5', label: 'q5', x: 88, y: 40, isInitial: false, isFinal: true  },
            { id: 'q6', label: 'q6', x: 88, y: 70, isInitial: false, isFinal: false },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q2', symbol: 'd' },
            { from: 'q2', to: 'q3', symbol: 'c' },
            { from: 'q3', to: 'q4', symbol: 'b' },
            { from: 'q4', to: 'q2', symbol: 'd' },
            { from: 'q4', to: 'q5', symbol: 'a' },
            { from: 'q5', to: 'q5', symbol: 'a' },
            { from: 'q5', to: 'q6', symbol: 'b' },
            { from: 'q6', to: 'q5', symbol: 'b' },
          ] } },
    ] },
  { id: 43, label: "L42", formula: "L = { a^n b^2m c c d^p | n > 0 (ímpar), m, p ≥ 0 }",              desc: "",                                                                 shortestWord: "acc",      regex: /^a(aa)*(bb)*ccd*$/,                                         alphabet: ['a', 'b', 'c', 'd'],   acceptedWords: ["acc","aaacc","accdd"],   rejectedWords: ["cc","aacc","abcc"],    hint: "O início exige vai-e-volta ímpar para os 'a's, depois 'b's em duplas.",                                             successMsg: "Paridade e duplas em sequência perfeita.",
    tutorials: {
      onStart: { type: 'theory', title: 'a-ímpar + b-pares + cc + d*!', dialog: [
        'L42: a^n b^2m cc d^p onde n > 0 ímpar, m ≥ 0, p ≥ 0.',
        '"acc" ✓ (1a, 0b). "aaacc" ✓ (3a, 0b). "abbcc" ✓ (1a, 2b). "aacc" ✗ (2a = par!).',
        '6 estados: q0 (start), q1 (odd-a), q2 (even-a), q3 (odd-b), q4 (1ºc), q5 (final).',
      ] },
      onDrawGraph: { type: 'mechanic', title: '6 Estados: Paridade + Cadeia', dialog: [
        'q0—a→q1↔q2(a). q1 = a-ímpar (válido). q2 = a-par (precisa de mais um "a").',
        'q1—c→q4—c→q5(f). q5 loop d. "cc" obrigatório antes dos d\'s.',
        'q1—b→q3—b→q1. Pares de "b" retornam a q1. Ímpar de "b" trava em q3.',
      ] },
    },
    boardWords: ['acc', 'aaacc', 'abbcc', 'accdd'],
    guidedLesson: [
      { text: 'a-ímpar + b-pares + cc + d*!<br/>Aceitar: <b>acc</b>, <b>aaacc</b>, <b>abbcc</b>, <b>accdd</b>. Rejeitar: cc, aacc, abcc.',
        boardDoneUpTo: -1, stateUpdate: { nodes: [], transitions: [] } },
      { text: 'Foco em <b>acc</b> e <b>aaacc</b>: ambas precisam de paridade-a (q1↔q2) + cadeia cc.',
        boardDoneUpTo: 0, stateUpdate: { nodes: [], transitions: [] } },
      { text: 'Solução: q0→q1↔q2(a), q1→q4(c)→q5(final,loop d). "acc"✓ "aaacc"✓. Próximas: "abbcc" e "accdd"!',
        boardDoneUpTo: 2, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x:  8, y: 35, isInitial: true,  isFinal: false },
            { id: 'q1', label: 'q1', x: 28, y: 35, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 48, y: 35, isInitial: false, isFinal: false },
            { id: 'q4', label: 'q4', x: 68, y: 35, isInitial: false, isFinal: false },
            { id: 'q5', label: 'q5', x: 88, y: 35, isInitial: false, isFinal: true  },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q2', symbol: 'a' },
            { from: 'q2', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q4', symbol: 'c' },
            { from: 'q4', to: 'q5', symbol: 'c' },
            { from: 'q5', to: 'q5', symbol: 'd' },
          ] } },
      { text: 'Foco em <b>abbcc</b> e <b>accdd</b>: "abbcc" — q1 sem seta para "b"! Preciso de q3 para b-pares.',
        boardDoneUpTo: 2, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x:  8, y: 35, isInitial: true,  isFinal: false },
            { id: 'q1', label: 'q1', x: 28, y: 35, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 48, y: 35, isInitial: false, isFinal: false },
            { id: 'q4', label: 'q4', x: 68, y: 35, isInitial: false, isFinal: false },
            { id: 'q5', label: 'q5', x: 88, y: 35, isInitial: false, isFinal: true  },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q2', symbol: 'a' },
            { from: 'q2', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q4', symbol: 'c' },
            { from: 'q4', to: 'q5', symbol: 'c' },
            { from: 'q5', to: 'q5', symbol: 'd' },
          ] } },
      { text: 'Solução: +q3, q1→q3(b)→q1(b). "abbcc"✓ "accdd"✓ Concluído!',
        boardDoneUpTo: 4, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x:  8, y: 35, isInitial: true,  isFinal: false },
            { id: 'q1', label: 'q1', x: 28, y: 35, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 48, y: 35, isInitial: false, isFinal: false },
            { id: 'q3', label: 'q3', x: 28, y: 70, isInitial: false, isFinal: false },
            { id: 'q4', label: 'q4', x: 68, y: 35, isInitial: false, isFinal: false },
            { id: 'q5', label: 'q5', x: 88, y: 35, isInitial: false, isFinal: true  },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q2', symbol: 'a' },
            { from: 'q2', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q3', symbol: 'b' },
            { from: 'q3', to: 'q1', symbol: 'b' },
            { from: 'q1', to: 'q4', symbol: 'c' },
            { from: 'q4', to: 'q5', symbol: 'c' },
            { from: 'q5', to: 'q5', symbol: 'd' },
          ] } },
    ] },
  { id: 44, label: "L43", formula: "L = { w ∈ {a,b,c,d}* | subpalavra 'ab' e sufixo 'cd' }",           desc: "",                                                                 shortestWord: "abcd",     regex: /^[abcd]*ab[abcd]*cd$/,                                      alphabet: ['a', 'b', 'c', 'd'],   acceptedWords: ["abcd","aabcd","abccd"],  rejectedWords: ["λ","acd","abdc"],      hint: "Ache primeiro o 'ab'. Depois de achar, fique aguardando um 'cd' para finalizar.",                                   successMsg: "Subpalavra + Sufixo resolvido.",
    tutorials: {
      onStart: { type: 'theory', title: 'Subpalavra "ab" + Sufixo "cd"!', dialog: [
        'L43: a palavra deve conter "ab" em algum lugar E terminar com "cd".',
        '"abcd" ✓ (ab subpalavra, cd sufixo). "aabcd" ✓. "abccd" ✓.',
        '"acd" ✗ (sem "ab"). "abdc" ✗ ("ab" ok mas não termina em "cd").',
      ] },
      onDrawGraph: { type: 'mechanic', title: '5 Estados: Detectar + Esperar', dialog: [
        'q0→q1(a): buscando "ab". q1→q2(b): "ab" encontrado! q0 e q1 voltam com c,d.',
        'q2→q3(c): primeiro "c" do sufixo. q3→q4(d): "cd" completo — final!',
        'q2 e q4 loop em a,b,d. q3 loop em c. Mismatches em q0,q1 voltam ao início.',
      ] },
    },
    boardWords: ['abcd', 'aabcd', 'abccd'],
    guidedLesson: [
      { text: 'Subpalavra "ab" e sufixo "cd"!<br/>Aceitar: <b>abcd</b>, <b>aabcd</b>, <b>abccd</b>. Rejeitar: λ, acd, abdc.',
        boardDoneUpTo: -1, stateUpdate: { nodes: [], transitions: [] } },
      { text: 'Foco em <b>abcd</b>: cadeia simples q0→q1(a)→q2(b)→q3(c)→q4(final).',
        boardDoneUpTo: 0, stateUpdate: { nodes: [], transitions: [] } },
      { text: 'Solução: cadeia q0→q1(a)→q2(b)→q3(c)→q4(final,d). "abcd"✓. Próximas: "aabcd" e "abccd"!',
        boardDoneUpTo: 1, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 10, y: 50, isInitial: true,  isFinal: false },
            { id: 'q1', label: 'q1', x: 28, y: 50, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 46, y: 50, isInitial: false, isFinal: false },
            { id: 'q3', label: 'q3', x: 64, y: 50, isInitial: false, isFinal: false },
            { id: 'q4', label: 'q4', x: 82, y: 50, isInitial: false, isFinal: true  },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q2', symbol: 'b' },
            { from: 'q2', to: 'q3', symbol: 'c' },
            { from: 'q3', to: 'q4', symbol: 'd' },
          ] } },
      { text: 'Foco em <b>aabcd</b> e <b>abccd</b>: "aabcd" — q1 sem loop a! "abccd" — q3 sem loop c! Preciso de loops e retornos.',
        boardDoneUpTo: 1, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 10, y: 50, isInitial: true,  isFinal: false },
            { id: 'q1', label: 'q1', x: 28, y: 50, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 46, y: 50, isInitial: false, isFinal: false },
            { id: 'q3', label: 'q3', x: 64, y: 50, isInitial: false, isFinal: false },
            { id: 'q4', label: 'q4', x: 82, y: 50, isInitial: false, isFinal: true  },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q2', symbol: 'b' },
            { from: 'q2', to: 'q3', symbol: 'c' },
            { from: 'q3', to: 'q4', symbol: 'd' },
          ] } },
      { text: 'Fix loops/retornos: q0 loop b,c,d; q1 loop a, q1→q0(c,d); q2 loop a,b,d; q3 loop c; q4→q3(c), q4→q2(a,b,d). "aabcd"✓ "abccd"✓ Concluído!',
        boardDoneUpTo: 3, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 10, y: 50, isInitial: true,  isFinal: false },
            { id: 'q1', label: 'q1', x: 28, y: 50, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 46, y: 50, isInitial: false, isFinal: false },
            { id: 'q3', label: 'q3', x: 64, y: 50, isInitial: false, isFinal: false },
            { id: 'q4', label: 'q4', x: 82, y: 50, isInitial: false, isFinal: true  },
          ],
          transitions: [
            { from: 'q0', to: 'q0', symbol: 'b,c,d' },
            { from: 'q0', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q2', symbol: 'b' },
            { from: 'q1', to: 'q0', symbol: 'c,d' },
            { from: 'q2', to: 'q2', symbol: 'a,b,d' },
            { from: 'q2', to: 'q3', symbol: 'c' },
            { from: 'q3', to: 'q2', symbol: 'a,b' },
            { from: 'q3', to: 'q3', symbol: 'c' },
            { from: 'q3', to: 'q4', symbol: 'd' },
            { from: 'q4', to: 'q2', symbol: 'a,b,d' },
            { from: 'q4', to: 'q3', symbol: 'c' },
          ] } },
    ] },
  { id: 45, label: "L44", formula: "L = { w ∈ {a,b,c,d}* | prefixo 'abcd' e sufixo 'dcba' }",          desc: "",                                                                 shortestWord: "abcddcba", regex: /^abcd[abcd]*dcba$/,                                         alphabet: ['a', 'b', 'c', 'd'],   acceptedWords: ["abcddcba","abcdadcba"],  rejectedWords: ["abcd","dcba","abcdcd"], hint: "Sanduíche de palavras! O começo e o fim são engessados.",                                                           successMsg: "Sanduíche de letras perfeito.",
    tutorials: {
      onStart: { type: 'theory', title: 'Prefixo "abcd" E sufixo "dcba"!', dialog: [
        'L44: comecar com "abcd" obrigatorio, terminar com "dcba" obrigatorio.',
        '"abcddcba" ✓ (min, sobreposicao). "abcdadcba" ✓ (1a no meio).',
        '"abcd" ✗ (falta sufixo). "dcba" ✗ (falta prefixo). 9 estados.',
      ] },
      onDrawGraph: { type: 'mechanic', title: '9 Estados: Prefixo + Sufixo', dialog: [
        'Prefixo: q0—a→q1—b→q2—c→q3—d→q4. Sufixo: q4—d→q5—c→q6—b→q7—a→q8(f).',
        'q4 loop a,b,c. q5 loop d; q5—a,b→q4. q6—a,c→q4; q6—d→q5.',
        'q7—b,c→q4; q7—d→q5. q8—a,b,c→q4; q8—d→q5.',
      ] },
    },
    boardWords: ['abcddcba', 'abcdadcba'],
    guidedLesson: [
      { text: 'Sanduiche: prefixo "abcd" obrigatorio + sufixo "dcba" obrigatorio!<br/>Aceitar: <b>abcddcba</b>, <b>abcdadcba</b>. Rejeitar: abcd, dcba.',
        boardDoneUpTo: -1, stateUpdate: { nodes: [], transitions: [] } },
      { text: 'Foco em <b>abcddcba</b>: dois prefixos e sufixos em cadeia linear de 9 estados.',
        boardDoneUpTo: 0, stateUpdate: { nodes: [], transitions: [] } },
      { text: 'Solução: cadeia q0→…→q4(d)→q5(d)→q6(c)→q7(b)→q8(final,a). "abcddcba"✓. Próxima: "abcdadcba"!',
        boardDoneUpTo: 1, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x:  8, y: 35, isInitial: true,  isFinal: false },
            { id: 'q1', label: 'q1', x: 21, y: 35, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 34, y: 35, isInitial: false, isFinal: false },
            { id: 'q3', label: 'q3', x: 47, y: 35, isInitial: false, isFinal: false },
            { id: 'q4', label: 'q4', x: 60, y: 35, isInitial: false, isFinal: false },
            { id: 'q5', label: 'q5', x: 73, y: 35, isInitial: false, isFinal: false },
            { id: 'q6', label: 'q6', x: 86, y: 35, isInitial: false, isFinal: false },
            { id: 'q7', label: 'q7', x: 86, y: 65, isInitial: false, isFinal: false },
            { id: 'q8', label: 'q8', x: 73, y: 65, isInitial: false, isFinal: true  },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q2', symbol: 'b' },
            { from: 'q2', to: 'q3', symbol: 'c' },
            { from: 'q3', to: 'q4', symbol: 'd' },
            { from: 'q4', to: 'q5', symbol: 'd' },
            { from: 'q5', to: 'q6', symbol: 'c' },
            { from: 'q6', to: 'q7', symbol: 'b' },
            { from: 'q7', to: 'q8', symbol: 'a' },
          ] } },
      { text: 'Foco em <b>abcdadcba</b>: q4 lê "a" — sem loop! Preciso de loops e retornos em q4 e sufixo.',
        boardDoneUpTo: 1, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x:  8, y: 35, isInitial: true,  isFinal: false },
            { id: 'q1', label: 'q1', x: 21, y: 35, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 34, y: 35, isInitial: false, isFinal: false },
            { id: 'q3', label: 'q3', x: 47, y: 35, isInitial: false, isFinal: false },
            { id: 'q4', label: 'q4', x: 60, y: 35, isInitial: false, isFinal: false },
            { id: 'q5', label: 'q5', x: 73, y: 35, isInitial: false, isFinal: false },
            { id: 'q6', label: 'q6', x: 86, y: 35, isInitial: false, isFinal: false },
            { id: 'q7', label: 'q7', x: 86, y: 65, isInitial: false, isFinal: false },
            { id: 'q8', label: 'q8', x: 73, y: 65, isInitial: false, isFinal: true  },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q2', symbol: 'b' },
            { from: 'q2', to: 'q3', symbol: 'c' },
            { from: 'q3', to: 'q4', symbol: 'd' },
            { from: 'q4', to: 'q5', symbol: 'd' },
            { from: 'q5', to: 'q6', symbol: 'c' },
            { from: 'q6', to: 'q7', symbol: 'b' },
            { from: 'q7', to: 'q8', symbol: 'a' },
          ] } },
      { text: 'Fix loops/retornos: q4 loop a,b,c; q5 loop d, q5→q4(a,b); q6→q5(d), q6→q4(a,c); q7→q4(b,c); q8→q4(a,b,c). "abcdadcba"✓ Concluído!',
        boardDoneUpTo: 2, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x:  8, y: 35, isInitial: true,  isFinal: false },
            { id: 'q1', label: 'q1', x: 21, y: 35, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 34, y: 35, isInitial: false, isFinal: false },
            { id: 'q3', label: 'q3', x: 47, y: 35, isInitial: false, isFinal: false },
            { id: 'q4', label: 'q4', x: 60, y: 35, isInitial: false, isFinal: false },
            { id: 'q5', label: 'q5', x: 73, y: 35, isInitial: false, isFinal: false },
            { id: 'q6', label: 'q6', x: 86, y: 35, isInitial: false, isFinal: false },
            { id: 'q7', label: 'q7', x: 86, y: 65, isInitial: false, isFinal: false },
            { id: 'q8', label: 'q8', x: 73, y: 65, isInitial: false, isFinal: true  },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q2', symbol: 'b' },
            { from: 'q2', to: 'q3', symbol: 'c' },
            { from: 'q3', to: 'q4', symbol: 'd' },
            { from: 'q4', to: 'q4', symbol: 'a,b,c' },
            { from: 'q4', to: 'q5', symbol: 'd' },
            { from: 'q5', to: 'q4', symbol: 'a,b' },
            { from: 'q5', to: 'q5', symbol: 'd' },
            { from: 'q5', to: 'q6', symbol: 'c' },
            { from: 'q6', to: 'q4', symbol: 'a,c' },
            { from: 'q6', to: 'q5', symbol: 'd' },
            { from: 'q6', to: 'q7', symbol: 'b' },
            { from: 'q7', to: 'q4', symbol: 'b,c' },
            { from: 'q7', to: 'q5', symbol: 'd' },
            { from: 'q7', to: 'q8', symbol: 'a' },
            { from: 'q8', to: 'q4', symbol: 'a,b,c' },
            { from: 'q8', to: 'q5', symbol: 'd' },
          ] } },
    ] },
  { id: 46, label: "L45", formula: "L = { w ∈ {a,b,c,d}* | pref 'abcd', sub 'cccc', suf 'dcba' }",    desc: "",                                                                 shortestWord: "abcdccccdcba", regex: /^abcd[abcd]*cccc[abcd]*dcba$/,                          alphabet: ['a', 'b', 'c', 'd'],   acceptedWords: ["abcdccccdcba","abcdaccccdcba"], rejectedWords: ["abcddcba","abcdcccdcba","dcba"], hint: "Faça o caminho em três estágios lógicos na sua cabeça.",                                          successMsg: "Você construiu um autômato enorme, meus parabéns!",
    tutorials: {
      onStart: { type: 'theory', title: 'Prefixo abcd + 4c seguidos + sufixo dcba!', dialog: [
        'L45: comecar com "abcd", conter "cccc" em algum lugar, terminar com "dcba".',
        '"abcdccccdcba" ✓ (min). "abcdaccccdcba" ✓ (a no meio). 13 estados!',
        'Tres fases: prefixo fixo → detectar cccc → sufixo fixo.',
      ] },
      onDrawGraph: { type: 'mechanic', title: '13 Estados: Tres Fases', dialog: [
        'Prefixo: q0—a→q1—b→q2—c→q3—d→q4. q4 loop a,b,d; q4—c→q5.',
        'cccc: q5—c→q6—c→q7—c→q8. Mismatch volta a q4. q8 loop a,b,c.',
        'Sufixo: q8—d→q9—c→q10—b→q11—a→q12(f). Mismatches → q8 ou q9.',
      ] },
    },
    boardWords: ['abcdccccdcba', 'abcdaccccdcba'],
    guidedLesson: [
      { text: 'Tres fases: prefixo "abcd" + subpalavra "cccc" + sufixo "dcba"!<br/>Aceitar: <b>abcdccccdcba</b>, <b>abcdaccccdcba</b>. Rejeitar: abcddcba, abcdcccdcba.',
        boardDoneUpTo: -1, stateUpdate: { nodes: [], transitions: [] } },
      { text: 'Foco em <b>abcdccccdcba</b>: cadeia linear de 13 estados — prefixo + 4c + sufixo.',
        boardDoneUpTo: 0, stateUpdate: { nodes: [], transitions: [] } },
      { text: 'Solução: cadeia q0→…→q4(c)→q5(c)→q6(c)→q7(c)→q8(d)→q9(c)→q10(b)→q11(a)→q12(final). "abcdccccdcba"✓. Próxima: "abcdaccccdcba"!',
        boardDoneUpTo: 1,
        stateUpdate: {
          nodes: [
            { id: 'q0',  label: 'q0',  x:  6, y: 28, isInitial: true,  isFinal: false },
            { id: 'q1',  label: 'q1',  x: 14, y: 28, isInitial: false, isFinal: false },
            { id: 'q2',  label: 'q2',  x: 22, y: 28, isInitial: false, isFinal: false },
            { id: 'q3',  label: 'q3',  x: 30, y: 28, isInitial: false, isFinal: false },
            { id: 'q4',  label: 'q4',  x: 38, y: 28, isInitial: false, isFinal: false },
            { id: 'q5',  label: 'q5',  x: 47, y: 28, isInitial: false, isFinal: false },
            { id: 'q6',  label: 'q6',  x: 56, y: 28, isInitial: false, isFinal: false },
            { id: 'q7',  label: 'q7',  x: 65, y: 28, isInitial: false, isFinal: false },
            { id: 'q8',  label: 'q8',  x: 74, y: 28, isInitial: false, isFinal: false },
            { id: 'q9',  label: 'q9',  x: 74, y: 68, isInitial: false, isFinal: false },
            { id: 'q10', label: 'q10', x: 65, y: 68, isInitial: false, isFinal: false },
            { id: 'q11', label: 'q11', x: 56, y: 68, isInitial: false, isFinal: false },
            { id: 'q12', label: 'q12', x: 47, y: 68, isInitial: false, isFinal: true  },
          ],
          transitions: [
            { from: 'q0',  to: 'q1',  symbol: 'a' },
            { from: 'q1',  to: 'q2',  symbol: 'b' },
            { from: 'q2',  to: 'q3',  symbol: 'c' },
            { from: 'q3',  to: 'q4',  symbol: 'd' },
            { from: 'q4',  to: 'q5',  symbol: 'c' },
            { from: 'q5',  to: 'q6',  symbol: 'c' },
            { from: 'q6',  to: 'q7',  symbol: 'c' },
            { from: 'q7',  to: 'q8',  symbol: 'c' },
            { from: 'q8',  to: 'q9',  symbol: 'd' },
            { from: 'q9',  to: 'q10', symbol: 'c' },
            { from: 'q10', to: 'q11', symbol: 'b' },
            { from: 'q11', to: 'q12', symbol: 'a' },
          ],
        } },
      { text: 'Foco em <b>abcdaccccdcba</b>: q4 lê "a" — sem loop! Preciso de loops e mismatches em q4 e fases cccc/sufixo.',
        boardDoneUpTo: 1, stateUpdate: {
          nodes: [
            { id: 'q0',  label: 'q0',  x:  6, y: 28, isInitial: true,  isFinal: false },
            { id: 'q1',  label: 'q1',  x: 14, y: 28, isInitial: false, isFinal: false },
            { id: 'q2',  label: 'q2',  x: 22, y: 28, isInitial: false, isFinal: false },
            { id: 'q3',  label: 'q3',  x: 30, y: 28, isInitial: false, isFinal: false },
            { id: 'q4',  label: 'q4',  x: 38, y: 28, isInitial: false, isFinal: false },
            { id: 'q5',  label: 'q5',  x: 47, y: 28, isInitial: false, isFinal: false },
            { id: 'q6',  label: 'q6',  x: 56, y: 28, isInitial: false, isFinal: false },
            { id: 'q7',  label: 'q7',  x: 65, y: 28, isInitial: false, isFinal: false },
            { id: 'q8',  label: 'q8',  x: 74, y: 28, isInitial: false, isFinal: false },
            { id: 'q9',  label: 'q9',  x: 74, y: 68, isInitial: false, isFinal: false },
            { id: 'q10', label: 'q10', x: 65, y: 68, isInitial: false, isFinal: false },
            { id: 'q11', label: 'q11', x: 56, y: 68, isInitial: false, isFinal: false },
            { id: 'q12', label: 'q12', x: 47, y: 68, isInitial: false, isFinal: true  },
          ],
          transitions: [
            { from: 'q0',  to: 'q1',  symbol: 'a' },
            { from: 'q1',  to: 'q2',  symbol: 'b' },
            { from: 'q2',  to: 'q3',  symbol: 'c' },
            { from: 'q3',  to: 'q4',  symbol: 'd' },
            { from: 'q4',  to: 'q5',  symbol: 'c' },
            { from: 'q5',  to: 'q6',  symbol: 'c' },
            { from: 'q6',  to: 'q7',  symbol: 'c' },
            { from: 'q7',  to: 'q8',  symbol: 'c' },
            { from: 'q8',  to: 'q9',  symbol: 'd' },
            { from: 'q9',  to: 'q10', symbol: 'c' },
            { from: 'q10', to: 'q11', symbol: 'b' },
            { from: 'q11', to: 'q12', symbol: 'a' },
          ] } },
      { text: 'Fix loops/mismatches: q4 loop a,b,d; q5-q7 mismatch→q4; q8 loop a,b,c; q9 loop d, q9→q8(a,b); sufixo mismatches→q8. "abcdaccccdcba"✓ Concluído!',
        boardDoneUpTo: 2,
        stateUpdate: {
          nodes: [
            { id: 'q0',  label: 'q0',  x:  6, y: 28, isInitial: true,  isFinal: false },
            { id: 'q1',  label: 'q1',  x: 14, y: 28, isInitial: false, isFinal: false },
            { id: 'q2',  label: 'q2',  x: 22, y: 28, isInitial: false, isFinal: false },
            { id: 'q3',  label: 'q3',  x: 30, y: 28, isInitial: false, isFinal: false },
            { id: 'q4',  label: 'q4',  x: 38, y: 28, isInitial: false, isFinal: false },
            { id: 'q5',  label: 'q5',  x: 47, y: 28, isInitial: false, isFinal: false },
            { id: 'q6',  label: 'q6',  x: 56, y: 28, isInitial: false, isFinal: false },
            { id: 'q7',  label: 'q7',  x: 65, y: 28, isInitial: false, isFinal: false },
            { id: 'q8',  label: 'q8',  x: 74, y: 28, isInitial: false, isFinal: false },
            { id: 'q9',  label: 'q9',  x: 74, y: 68, isInitial: false, isFinal: false },
            { id: 'q10', label: 'q10', x: 65, y: 68, isInitial: false, isFinal: false },
            { id: 'q11', label: 'q11', x: 56, y: 68, isInitial: false, isFinal: false },
            { id: 'q12', label: 'q12', x: 47, y: 68, isInitial: false, isFinal: true  },
          ],
          transitions: [
            { from: 'q0',  to: 'q1',  symbol: 'a' },
            { from: 'q1',  to: 'q2',  symbol: 'b' },
            { from: 'q2',  to: 'q3',  symbol: 'c' },
            { from: 'q3',  to: 'q4',  symbol: 'd' },
            { from: 'q4',  to: 'q4',  symbol: 'a,b,d' },
            { from: 'q4',  to: 'q5',  symbol: 'c' },
            { from: 'q5',  to: 'q4',  symbol: 'a,b,d' },
            { from: 'q5',  to: 'q6',  symbol: 'c' },
            { from: 'q6',  to: 'q4',  symbol: 'a,b,d' },
            { from: 'q6',  to: 'q7',  symbol: 'c' },
            { from: 'q7',  to: 'q4',  symbol: 'a,b,d' },
            { from: 'q7',  to: 'q8',  symbol: 'c' },
            { from: 'q8',  to: 'q8',  symbol: 'a,b,c' },
            { from: 'q8',  to: 'q9',  symbol: 'd' },
            { from: 'q9',  to: 'q8',  symbol: 'a,b' },
            { from: 'q9',  to: 'q9',  symbol: 'd' },
            { from: 'q9',  to: 'q10', symbol: 'c' },
            { from: 'q10', to: 'q8',  symbol: 'a,c' },
            { from: 'q10', to: 'q9',  symbol: 'd' },
            { from: 'q10', to: 'q11', symbol: 'b' },
            { from: 'q11', to: 'q8',  symbol: 'b,c' },
            { from: 'q11', to: 'q9',  symbol: 'd' },
            { from: 'q11', to: 'q12', symbol: 'a' },
            { from: 'q12', to: 'q8',  symbol: 'a,b,c' },
            { from: 'q12', to: 'q9',  symbol: 'd' },
          ],
        } },
    ] },
  { id: 47, label: "L46", formula: "L = { (a+b+c)* | qtd de a, b e c é par }",                          desc: "",                                                                 shortestWord: "",         regex: /^.*$/, validate: w => ['a','b','c'].every(c => [...w].filter(x=>x===c).length%2===0), alphabet: ['a', 'b', 'c'],        acceptedWords: ["λ","aabb","aabbcc"],      rejectedWords: ["a","b","abc"],         hint: "Isso é um cubo mágico de estados! Paridade para 3 letras exige 8 estados.",                                        successMsg: "Paridade em 3D completada!",
    tutorials: {
      onStart: { type: 'theory', title: 'Cubo de paridade: 3 letras, 8 estados!', dialog: [
        'L46: contar a, b e c separadamente. Aceito quando TODOS pares.',
        '"λ" ✓ (0+0+0). "aabb" ✓ (2a,2b,0c). "aabbcc" ✓ (2a,2b,2c). "a" ✗ (1a impar).',
        '8 combinacoes de paridade: 2^3 = 8 estados. Apenas q0(ini,f) aceita.',
      ] },
      onDrawGraph: { type: 'mechanic', title: '8 Estados em Cubo', dialog: [
        'Linhas "a" (vertical): q0↔q1, q2↔q4, q3↔q5, q6↔q7.',
        'Linhas "b" (horizontal): q0↔q2, q1↔q4, q3↔q6, q5↔q7.',
        'Linhas "c" (cruzadas): q0↔q3, q1↔q5, q2↔q6, q4↔q7.',
      ] },
    },
    boardWords: ['λ', 'aabb', 'aabbcc'],
    guidedLesson: [
      { text: 'Cubo de paridade: a, b e c todos pares!<br/>Aceitar: <b>λ</b>, <b>aabb</b>, <b>aabbcc</b>. Rejeitar: a, b, abc.',
        boardDoneUpTo: -1, stateUpdate: { nodes: [], transitions: [] } },
      { text: 'Foco em <b>λ</b>: palavra vazia — q0 inicial e final é suficiente.',
        boardDoneUpTo: 0, stateUpdate: { nodes: [], transitions: [] } },
      { text: 'Solução: q0(ini,final). λ✓. Próxima: "aabb"!',
        boardDoneUpTo: 1, stateUpdate: {
          nodes: [ { id: 'q0', label: 'q0', x: 50, y: 50, isInitial: true, isFinal: true } ],
          transitions: [] } },
      { text: 'Foco em <b>aabb</b>: q0 lê "a" — sem seta! Preciso de raias a, b, c bidirecionais.',
        boardDoneUpTo: 1, stateUpdate: {
          nodes: [ { id: 'q0', label: 'q0', x: 50, y: 50, isInitial: true, isFinal: true } ],
          transitions: [] } },
      { text: 'Solução: q0↔q1(a), q0↔q2(b), q0↔q3(c). "aabb"✓. Próxima: "aabbcc"!',
        boardDoneUpTo: 2, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 12, y: 25, isInitial: true,  isFinal: true  },
            { id: 'q1', label: 'q1', x: 12, y: 70, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 37, y: 25, isInitial: false, isFinal: false },
            { id: 'q3', label: 'q3', x: 62, y: 25, isInitial: false, isFinal: false },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a' }, { from: 'q1', to: 'q0', symbol: 'a' },
            { from: 'q0', to: 'q2', symbol: 'b' }, { from: 'q2', to: 'q0', symbol: 'b' },
            { from: 'q0', to: 'q3', symbol: 'c' }, { from: 'q3', to: 'q0', symbol: 'c' },
          ] } },
      { text: 'Foco em <b>aabbcc</b>: q1 e q2 sem seta "c"! Preciso dos 4 estados restantes do cubo.',
        boardDoneUpTo: 2, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 12, y: 25, isInitial: true,  isFinal: true  },
            { id: 'q1', label: 'q1', x: 12, y: 70, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 37, y: 25, isInitial: false, isFinal: false },
            { id: 'q3', label: 'q3', x: 62, y: 25, isInitial: false, isFinal: false },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a' }, { from: 'q1', to: 'q0', symbol: 'a' },
            { from: 'q0', to: 'q2', symbol: 'b' }, { from: 'q2', to: 'q0', symbol: 'b' },
            { from: 'q0', to: 'q3', symbol: 'c' }, { from: 'q3', to: 'q0', symbol: 'c' },
          ] } },
      { text: 'Solução: cubo completo +q4,q5,q6,q7. "aabbcc"✓ Concluído!',
        boardDoneUpTo: 3, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 12, y: 25, isInitial: true,  isFinal: true  },
            { id: 'q1', label: 'q1', x: 12, y: 70, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 37, y: 25, isInitial: false, isFinal: false },
            { id: 'q3', label: 'q3', x: 62, y: 25, isInitial: false, isFinal: false },
            { id: 'q4', label: 'q4', x: 37, y: 70, isInitial: false, isFinal: false },
            { id: 'q5', label: 'q5', x: 62, y: 70, isInitial: false, isFinal: false },
            { id: 'q6', label: 'q6', x: 87, y: 25, isInitial: false, isFinal: false },
            { id: 'q7', label: 'q7', x: 87, y: 70, isInitial: false, isFinal: false },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a' }, { from: 'q1', to: 'q0', symbol: 'a' },
            { from: 'q2', to: 'q4', symbol: 'a' }, { from: 'q4', to: 'q2', symbol: 'a' },
            { from: 'q3', to: 'q5', symbol: 'a' }, { from: 'q5', to: 'q3', symbol: 'a' },
            { from: 'q6', to: 'q7', symbol: 'a' }, { from: 'q7', to: 'q6', symbol: 'a' },
            { from: 'q0', to: 'q2', symbol: 'b' }, { from: 'q2', to: 'q0', symbol: 'b' },
            { from: 'q1', to: 'q4', symbol: 'b' }, { from: 'q4', to: 'q1', symbol: 'b' },
            { from: 'q3', to: 'q6', symbol: 'b' }, { from: 'q6', to: 'q3', symbol: 'b' },
            { from: 'q5', to: 'q7', symbol: 'b' }, { from: 'q7', to: 'q5', symbol: 'b' },
            { from: 'q0', to: 'q3', symbol: 'c' }, { from: 'q3', to: 'q0', symbol: 'c' },
            { from: 'q1', to: 'q5', symbol: 'c' }, { from: 'q5', to: 'q1', symbol: 'c' },
            { from: 'q2', to: 'q6', symbol: 'c' }, { from: 'q6', to: 'q2', symbol: 'c' },
            { from: 'q4', to: 'q7', symbol: 'c' }, { from: 'q7', to: 'q4', symbol: 'c' },
          ] } },
    ] },
  { id: 48, label: "L47", formula: "L = { a^n b^2m d c^3p d | n, m, p ≥ 0 }",                          desc: "(Revisão L40)",                                                    shortestWord: "dd",       regex: /^a*(bb)*d(ccc)*d$/,                                         alphabet: ['a', 'b', 'c', 'd'],   acceptedWords: ["dd","abbdd","adcccdd"],  rejectedWords: ["d","abd","abcdd"],     hint: "Se chegou até aqui, já sabe: separe o problema em bloquinhos lógicos.",                                             successMsg: "Revisão bem sucedida.",
    tutorials: {
      onStart: { type: 'theory', title: 'Revisão L40: blocos a, b-pares, d, c-trios, d!', dialog: [
        'L47 e revisão de L40. Mesma linguagem a^n b^2m d c^3p d.',
        '"dd" ✓. "abbdd" ✓. "adcccd" ✓. "d" ✗. "abcdd" ✗.',
        'Relembre os 6 estados: q0(ini), q1(b-impar), q2(apos-d), q3(c-1), q4(c-2), q5(f).',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Revisao: 6 Estados', dialog: [
        'q0 loop a; q0—b→q1—b→q0; q0—d→q2.',
        'q2—d→q5(f); q2—c→q3—c→q4—c→q2.',
        'Mesmos estados e mesma logica de L40. Voce ja sabe montar isso!',
      ] },
    },
    boardWords: ['dd', 'abbdd', 'adcccd'],
    guidedLesson: [
      { text: 'Revisão de L40! a* b-pares d c-trios d.<br/>Aceitar: <b>dd</b>, <b>abbdd</b>, <b>adcccd</b>. Rejeitar: d, abd, abcdd.',
        boardDoneUpTo: -1, stateUpdate: { nodes: [], transitions: [] } },
      { text: 'Foco em <b>dd</b>: núcleo q0→q2(d)→q5(final).',
        boardDoneUpTo: 0, stateUpdate: { nodes: [], transitions: [] } },
      { text: 'Solução: q0→q2(d)→q5(final). "dd"✓. Próxima: "abbdd"!',
        boardDoneUpTo: 1, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 10, y: 40, isInitial: true,  isFinal: false },
            { id: 'q2', label: 'q2', x: 50, y: 40, isInitial: false, isFinal: false },
            { id: 'q5', label: 'q5', x: 90, y: 40, isInitial: false, isFinal: true  },
          ],
          transitions: [
            { from: 'q0', to: 'q2', symbol: 'd' },
            { from: 'q2', to: 'q5', symbol: 'd' },
          ] } },
      { text: 'Foco em <b>abbdd</b>: q0 lê "a" e "b" — sem seta! Preciso de loop a e q1 para b-pares.',
        boardDoneUpTo: 1, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 10, y: 40, isInitial: true,  isFinal: false },
            { id: 'q2', label: 'q2', x: 50, y: 40, isInitial: false, isFinal: false },
            { id: 'q5', label: 'q5', x: 90, y: 40, isInitial: false, isFinal: true  },
          ],
          transitions: [
            { from: 'q0', to: 'q2', symbol: 'd' },
            { from: 'q2', to: 'q5', symbol: 'd' },
          ] } },
      { text: 'Solução: q0 loop a, q0→q1(b)→q0(b). "abbdd"✓. Próxima: "adcccd"!',
        boardDoneUpTo: 2, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 10, y: 40, isInitial: true,  isFinal: false },
            { id: 'q1', label: 'q1', x: 10, y: 70, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 50, y: 40, isInitial: false, isFinal: false },
            { id: 'q5', label: 'q5', x: 90, y: 40, isInitial: false, isFinal: true  },
          ],
          transitions: [
            { from: 'q0', to: 'q0', symbol: 'a' },
            { from: 'q0', to: 'q1', symbol: 'b' },
            { from: 'q1', to: 'q0', symbol: 'b' },
            { from: 'q0', to: 'q2', symbol: 'd' },
            { from: 'q2', to: 'q5', symbol: 'd' },
          ] } },
      { text: 'Foco em <b>adcccd</b>: q2 lê "c" — sem seta! Preciso de ciclo de c-trios.',
        boardDoneUpTo: 2, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 10, y: 40, isInitial: true,  isFinal: false },
            { id: 'q1', label: 'q1', x: 10, y: 70, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 50, y: 40, isInitial: false, isFinal: false },
            { id: 'q5', label: 'q5', x: 90, y: 40, isInitial: false, isFinal: true  },
          ],
          transitions: [
            { from: 'q0', to: 'q0', symbol: 'a' },
            { from: 'q0', to: 'q1', symbol: 'b' },
            { from: 'q1', to: 'q0', symbol: 'b' },
            { from: 'q0', to: 'q2', symbol: 'd' },
            { from: 'q2', to: 'q5', symbol: 'd' },
          ] } },
      { text: 'Solução: q2→q3(c)→q4(c)→q2(c). "adcccd"✓ Concluído!',
        boardDoneUpTo: 3, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 10, y: 40, isInitial: true,  isFinal: false },
            { id: 'q1', label: 'q1', x: 10, y: 70, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 48, y: 40, isInitial: false, isFinal: false },
            { id: 'q3', label: 'q3', x: 40, y: 70, isInitial: false, isFinal: false },
            { id: 'q4', label: 'q4', x: 58, y: 70, isInitial: false, isFinal: false },
            { id: 'q5', label: 'q5', x: 88, y: 40, isInitial: false, isFinal: true  },
          ],
          transitions: [
            { from: 'q0', to: 'q0', symbol: 'a' },
            { from: 'q0', to: 'q1', symbol: 'b' },
            { from: 'q1', to: 'q0', symbol: 'b' },
            { from: 'q0', to: 'q2', symbol: 'd' },
            { from: 'q2', to: 'q5', symbol: 'd' },
            { from: 'q2', to: 'q3', symbol: 'c' },
            { from: 'q3', to: 'q4', symbol: 'c' },
            { from: 'q4', to: 'q2', symbol: 'c' },
          ] } },
    ] },
  { id: 49, label: "L48", formula: "L = { w ∈ {0,1}* | zeros pares e uns ímpares }",                   desc: "",                                                                 shortestWord: "1",        regex: /^.*$/, validate: w => [...w].filter(c=>c==='0').length%2===0 && [...w].filter(c=>c==='1').length%2===1, alphabet: ['0', '1'],             acceptedWords: ["1","001","11100"],        rejectedWords: ["λ","0","01"],          hint: "Parecido com a L38, mas com números. Foque no estado correto de parada.",                                           successMsg: "Paridade binária.",
    tutorials: {
      onStart: { type: 'theory', title: 'Paridade Binária: 0-par e 1-ímpar!', dialog: [
        'L48: contar 0s e 1s separadamente. Aceito quando #0 par E #1 ímpar.',
        '"1" ✓ (0 zeros, 1 um). "001" ✓ (2 zeros, 1 um). "λ" ✗ (0 uns = par).',
        '4 combinações de paridade → 4 estados. Mesmo quadrado da L38 mas com 0 e 1!',
      ] },
      onDrawGraph: { type: 'mechanic', title: '4 Estados em Quadrado Binário', dialog: [
        'q0(ini)=(p0,p1), q1(f)=(p0,í1), q2=(í0,p1), q3=(í0,í1). Só q1 é final.',
        'Ler "1": q0↔q1 e q2↔q3. Ler "0": q0↔q2 e q1↔q3.',
        '"001": q0—0→q2—0→q0—1→q1(f) ✓. "11100": q0→q1→q0→q1—0→q3—0→q1(f) ✓.',
      ] },
    },
    boardWords: ['1', '001', '11100'],
    guidedLesson: [
      { text: 'Paridade binária: #0 par AND #1 ímpar!<br/>Aceitar: <b>1</b>, <b>001</b>, <b>11100</b>. Rejeitar: λ, 0, 01.',
        boardDoneUpTo: -1, stateUpdate: { nodes: [], transitions: [] } },
      { text: 'Foco em <b>1</b>: raia do 1 — q0(ini)↔q1(final) via "1".',
        boardDoneUpTo: 0, stateUpdate: { nodes: [], transitions: [] } },
      { text: 'Solução: q0↔q1(1). "1"✓. Próximas: "001" e "11100"!',
        boardDoneUpTo: 1, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 25, y: 35, isInitial: true,  isFinal: false },
            { id: 'q1', label: 'q1', x: 75, y: 35, isInitial: false, isFinal: true  },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: '1' },
            { from: 'q1', to: 'q0', symbol: '1' },
          ] } },
      { text: 'Foco em <b>001</b> e <b>11100</b>: q0 lê "0" — sem seta! Preciso de q2 e q3 para raia do 0.',
        boardDoneUpTo: 1, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 25, y: 35, isInitial: true,  isFinal: false },
            { id: 'q1', label: 'q1', x: 75, y: 35, isInitial: false, isFinal: true  },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: '1' },
            { from: 'q1', to: 'q0', symbol: '1' },
          ] } },
      { text: 'Solução: +q2,q3. q0↔q2(0), q1↔q3(0), q2↔q3(1). "001"✓ "11100"✓ Concluído!',
        boardDoneUpTo: 3, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 25, y: 35, isInitial: true,  isFinal: false },
            { id: 'q1', label: 'q1', x: 75, y: 35, isInitial: false, isFinal: true  },
            { id: 'q2', label: 'q2', x: 25, y: 70, isInitial: false, isFinal: false },
            { id: 'q3', label: 'q3', x: 75, y: 70, isInitial: false, isFinal: false },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: '1' }, { from: 'q1', to: 'q0', symbol: '1' },
            { from: 'q0', to: 'q2', symbol: '0' }, { from: 'q2', to: 'q0', symbol: '0' },
            { from: 'q1', to: 'q3', symbol: '0' }, { from: 'q3', to: 'q1', symbol: '0' },
            { from: 'q2', to: 'q3', symbol: '1' }, { from: 'q3', to: 'q2', symbol: '1' },
          ] } },
    ] },
  { id: 50, label: "L49", formula: "L = { a^n a c^m (ab+ba) c a^2p | n ≥ 0, m > 0, p > 0 }",          desc: "",                                                                 shortestWord: "acabcaa",  regex: /^a+c+(ab|ba)ca(aa)*$/,                                      alphabet: ['a', 'b', 'c'],        acceptedWords: ["acabcaa","aacabcaa","acbacaa"], rejectedWords: ["a","acabca","ab"], hint: "Na bifurcação no meio, o caminho pode ir por 'ab' ou por 'ba'.",                                                   successMsg: "Expressão bifurcada com sucesso.",
    tutorials: {
      onStart: { type: 'theory', title: 'a+ c+ (ab|ba) c aa+ — bifurcacao!', dialog: [
        'L49: a-s, c-s, depois "ab" OU "ba", depois c, depois pares de a (min 1 par).',
        '"acabcaa" ✓ (ab, 1par-a). "aacabcaa" ✓ (2a). "acbacaa" ✓ (ba).',
        '9 estados: q0-q2 (a/c loops), bifurcacao q3/q4, q5-q8 (cauda).',
      ] },
      onDrawGraph: { type: 'mechanic', title: '9 Estados: Loops + Bifurcacao', dialog: [
        'q0—a→q1 loop a. q1—c→q2 loop c. q2—a→q3—b→q5 (ab). q2—b→q4—a→q5 (ba).',
        'q5—c→q6—a→q7—a→q8(f). q8—a→q7 (mais pares).',
        '"acbacaa": q2—b→q4—a→q5→q6→q7→q8(f) ✓.',
      ] },
    },
    boardWords: ['acabcaa', 'aacabcaa', 'acbacaa'],
    guidedLesson: [
      { text: 'a+ c+ (ab|ba) c (aa)+. Bifurcacao no meio!<br/>Aceitar: <b>acabcaa</b>, <b>aacabcaa</b>, <b>acbacaa</b>. Rejeitar: a, acabca, ab.',
        boardDoneUpTo: -1, stateUpdate: { nodes: [], transitions: [] } },
      { text: 'Foco em <b>acabcaa</b>: cadeia ab-branch + cauda, sem loops.',
        boardDoneUpTo: 0, stateUpdate: { nodes: [], transitions: [] } },
      { text: 'Solução: q0→q1(a)→q2(c)→q3(a)→q5(b)→q6(c)→q7(a)→q8(final,a)→q7(a). "acabcaa"✓. Próximas: "aacabcaa" e "acbacaa"!',
        boardDoneUpTo: 1, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x:  8, y: 50, isInitial: true,  isFinal: false },
            { id: 'q1', label: 'q1', x: 22, y: 50, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 36, y: 50, isInitial: false, isFinal: false },
            { id: 'q3', label: 'q3', x: 50, y: 25, isInitial: false, isFinal: false },
            { id: 'q5', label: 'q5', x: 64, y: 50, isInitial: false, isFinal: false },
            { id: 'q6', label: 'q6', x: 78, y: 50, isInitial: false, isFinal: false },
            { id: 'q7', label: 'q7', x: 88, y: 35, isInitial: false, isFinal: false },
            { id: 'q8', label: 'q8', x: 88, y: 65, isInitial: false, isFinal: true  },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q2', symbol: 'c' },
            { from: 'q2', to: 'q3', symbol: 'a' },
            { from: 'q3', to: 'q5', symbol: 'b' },
            { from: 'q5', to: 'q6', symbol: 'c' },
            { from: 'q6', to: 'q7', symbol: 'a' },
            { from: 'q7', to: 'q8', symbol: 'a' },
            { from: 'q8', to: 'q7', symbol: 'a' },
          ] } },
      { text: 'Foco em <b>aacabcaa</b> e <b>acbacaa</b>: "aacabcaa" — q1 sem loop a! "acbacaa" — q2 sem seta "b" para branch ba.',
        boardDoneUpTo: 1, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x:  8, y: 50, isInitial: true,  isFinal: false },
            { id: 'q1', label: 'q1', x: 22, y: 50, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 36, y: 50, isInitial: false, isFinal: false },
            { id: 'q3', label: 'q3', x: 50, y: 25, isInitial: false, isFinal: false },
            { id: 'q5', label: 'q5', x: 64, y: 50, isInitial: false, isFinal: false },
            { id: 'q6', label: 'q6', x: 78, y: 50, isInitial: false, isFinal: false },
            { id: 'q7', label: 'q7', x: 88, y: 35, isInitial: false, isFinal: false },
            { id: 'q8', label: 'q8', x: 88, y: 65, isInitial: false, isFinal: true  },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q2', symbol: 'c' },
            { from: 'q2', to: 'q3', symbol: 'a' },
            { from: 'q3', to: 'q5', symbol: 'b' },
            { from: 'q5', to: 'q6', symbol: 'c' },
            { from: 'q6', to: 'q7', symbol: 'a' },
            { from: 'q7', to: 'q8', symbol: 'a' },
            { from: 'q8', to: 'q7', symbol: 'a' },
          ] } },
      { text: 'Solução: q1 loop a, q2 loop c, +q4 para ba-branch q2→q4(b)→q5(a). "aacabcaa"✓ "acbacaa"✓ Concluído!',
        boardDoneUpTo: 3, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x:  8, y: 50, isInitial: true,  isFinal: false },
            { id: 'q1', label: 'q1', x: 22, y: 50, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 36, y: 50, isInitial: false, isFinal: false },
            { id: 'q3', label: 'q3', x: 50, y: 25, isInitial: false, isFinal: false },
            { id: 'q4', label: 'q4', x: 50, y: 75, isInitial: false, isFinal: false },
            { id: 'q5', label: 'q5', x: 64, y: 50, isInitial: false, isFinal: false },
            { id: 'q6', label: 'q6', x: 78, y: 50, isInitial: false, isFinal: false },
            { id: 'q7', label: 'q7', x: 88, y: 35, isInitial: false, isFinal: false },
            { id: 'q8', label: 'q8', x: 88, y: 65, isInitial: false, isFinal: true  },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q2', symbol: 'c' },
            { from: 'q2', to: 'q2', symbol: 'c' },
            { from: 'q2', to: 'q3', symbol: 'a' },
            { from: 'q2', to: 'q4', symbol: 'b' },
            { from: 'q3', to: 'q5', symbol: 'b' },
            { from: 'q4', to: 'q5', symbol: 'a' },
            { from: 'q5', to: 'q6', symbol: 'c' },
            { from: 'q6', to: 'q7', symbol: 'a' },
            { from: 'q7', to: 'q8', symbol: 'a' },
            { from: 'q8', to: 'q7', symbol: 'a' },
          ] } },
    ] },
  { id: 51, label: "L50", formula: "L = { a^n b^m c^p | n, p > 0, m ≥ 0 e (n+p) é ímpar }",           desc: "",                                                                 shortestWord: "ac",       regex: /^.*$/, validate: w => /^a+b*c+$/.test(w) && ([...w].filter(c=>c==='a').length + [...w].filter(c=>c==='c').length)%2===1, alphabet: ['a', 'b', 'c'],        acceptedWords: ["acc","aac","abcc"],       rejectedWords: ["ac","aacc","c"],        hint: "Se a quantidade de 'a's for ímpar, os 'c's precisam ser pares, e vice versa.",                                     successMsg: "Paridade correlacionada funcionando!",
    tutorials: {
      onStart: { type: 'theory', title: 'a+ b* c+ com (n+p) impar!', dialog: [
        'L50: a^n b^m c^p. n>0, p>0, m>=0. Mas a quantidade (n+p) tem que ser impar.',
        '"acc" ✓ (1a+2c=3 impar). "aac" ✓ (2a+1c=3). "abcc" ✓ (1a+2c=3).',
        '"ac" ✗ (1+1=2 par). "aacc" ✗ (2+2=4 par). 7 estados: paridade de a e c.',
      ] },
      onDrawGraph: { type: 'mechanic', title: '7 Estados: Paridade a + c', dialog: [
        'q0—a→q1 (impar-a). q1—a→q2 (par-a). q2—a→q1 (ciclo). q1—c→q5, q2—c→q6(f).',
        'b-phase: q1—b→q4(impar), q2—b→q3(par). q3,q4 loop b. q3—c→q6(f), q4—c→q5.',
        'c-phase: q5—c→q6(f). q6—c→q5. "abcc": q1—b→q4—c→q5—c→q6(f) ✓.',
      ] },
    },
    boardWords: ['acc', 'aac', 'abcc'],
    guidedLesson: [
      { text: 'a+ b* c+ com (n+p) impar!<br/>Aceitar: <b>acc</b>, <b>aac</b>, <b>abcc</b>. Rejeitar: ac, aacc, c.',
        boardDoneUpTo: -1, stateUpdate: { nodes: [], transitions: [] } },
      { text: 'Foco em <b>acc</b>: caminho ímpar-a — q0→q1(a)→q5(c)→q6(final,c).',
        boardDoneUpTo: 0, stateUpdate: { nodes: [], transitions: [] } },
      { text: 'Solução: q0→q1(a)→q5(c)→q6(final)↔q5(c). "acc"✓. Próxima: "aac"!',
        boardDoneUpTo: 1, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 10, y: 35, isInitial: true,  isFinal: false },
            { id: 'q1', label: 'q1', x: 28, y: 35, isInitial: false, isFinal: false },
            { id: 'q5', label: 'q5', x: 64, y: 35, isInitial: false, isFinal: false },
            { id: 'q6', label: 'q6', x: 82, y: 35, isInitial: false, isFinal: true  },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q5', symbol: 'c' },
            { from: 'q5', to: 'q6', symbol: 'c' },
            { from: 'q6', to: 'q5', symbol: 'c' },
          ] } },
      { text: 'Foco em <b>aac</b>: q1 lê segundo "a" — sem seta! Preciso de q2 para par-a.',
        boardDoneUpTo: 1, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 10, y: 35, isInitial: true,  isFinal: false },
            { id: 'q1', label: 'q1', x: 28, y: 35, isInitial: false, isFinal: false },
            { id: 'q5', label: 'q5', x: 64, y: 35, isInitial: false, isFinal: false },
            { id: 'q6', label: 'q6', x: 82, y: 35, isInitial: false, isFinal: true  },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q5', symbol: 'c' },
            { from: 'q5', to: 'q6', symbol: 'c' },
            { from: 'q6', to: 'q5', symbol: 'c' },
          ] } },
      { text: 'Solução: +q2, q1↔q2(a), q2→q6(c). "aac"✓. Próxima: "abcc"!',
        boardDoneUpTo: 2, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 10, y: 35, isInitial: true,  isFinal: false },
            { id: 'q1', label: 'q1', x: 28, y: 35, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 46, y: 35, isInitial: false, isFinal: false },
            { id: 'q5', label: 'q5', x: 64, y: 35, isInitial: false, isFinal: false },
            { id: 'q6', label: 'q6', x: 82, y: 35, isInitial: false, isFinal: true  },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q2', symbol: 'a' },
            { from: 'q2', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q5', symbol: 'c' },
            { from: 'q2', to: 'q6', symbol: 'c' },
            { from: 'q5', to: 'q6', symbol: 'c' },
            { from: 'q6', to: 'q5', symbol: 'c' },
          ] } },
      { text: 'Foco em <b>abcc</b>: q1 lê "b" — sem seta! Preciso de q3,q4 para b-phase.',
        boardDoneUpTo: 2, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 10, y: 35, isInitial: true,  isFinal: false },
            { id: 'q1', label: 'q1', x: 28, y: 35, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 46, y: 35, isInitial: false, isFinal: false },
            { id: 'q5', label: 'q5', x: 64, y: 35, isInitial: false, isFinal: false },
            { id: 'q6', label: 'q6', x: 82, y: 35, isInitial: false, isFinal: true  },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q2', symbol: 'a' },
            { from: 'q2', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q5', symbol: 'c' },
            { from: 'q2', to: 'q6', symbol: 'c' },
            { from: 'q5', to: 'q6', symbol: 'c' },
            { from: 'q6', to: 'q5', symbol: 'c' },
          ] } },
      { text: 'Solução: +q4,q3. q1→q4(b,loop b), q2→q3(b,loop b), q4→q5(c), q3→q6(c). "abcc"✓ Concluído!',
        boardDoneUpTo: 3, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 10, y: 35, isInitial: true,  isFinal: false },
            { id: 'q1', label: 'q1', x: 28, y: 35, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 46, y: 35, isInitial: false, isFinal: false },
            { id: 'q4', label: 'q4', x: 28, y: 65, isInitial: false, isFinal: false },
            { id: 'q3', label: 'q3', x: 46, y: 65, isInitial: false, isFinal: false },
            { id: 'q5', label: 'q5', x: 64, y: 35, isInitial: false, isFinal: false },
            { id: 'q6', label: 'q6', x: 82, y: 35, isInitial: false, isFinal: true  },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q2', symbol: 'a' },
            { from: 'q2', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q4', symbol: 'b' },
            { from: 'q2', to: 'q3', symbol: 'b' },
            { from: 'q3', to: 'q3', symbol: 'b' },
            { from: 'q4', to: 'q4', symbol: 'b' },
            { from: 'q1', to: 'q5', symbol: 'c' },
            { from: 'q2', to: 'q6', symbol: 'c' },
            { from: 'q3', to: 'q6', symbol: 'c' },
            { from: 'q4', to: 'q5', symbol: 'c' },
            { from: 'q5', to: 'q6', symbol: 'c' },
            { from: 'q6', to: 'q5', symbol: 'c' },
          ] } },
    ] },
  { id: 52, label: "L52", formula: "L = { a^n b^m c^p | n > 0 (par), m (ímpar), p (par) }",            desc: "",                                                                 shortestWord: "aab",      regex: /^(aa)+(bb)*b(cc)*$/,                                        alphabet: ['a', 'b', 'c'],        acceptedWords: ["aab","aabcc","aaaabbb"],  rejectedWords: ["ab","aabb","b"],        hint: "É um trem de paridade. Vá de vagão em vagão cuidando da regra de cada letra.",                                     successMsg: "Combo triplo de paridades concluído.",
    tutorials: {
      onStart: { type: 'theory', title: '(aa)+ (bb)*b (cc)*: tres paridades!', dialog: [
        'L52: a-s em quantidade par (>=2), b-s impares (1,3,5...), c-s pares (0,2,4...).',
        '"aab" ✓ (2a,1b,0c). "aabcc" ✓ (2a,1b,2c). "aaaabbb" ✓ (4a,3b,0c).',
        '"ab" ✗ (1a=impar). "aabb" ✗ (2b=par). 7 estados encadeados.',
      ] },
      onDrawGraph: { type: 'mechanic', title: '7 Estados: Trem de Paridade', dialog: [
        'aa-chain: q0—a→q1—a→q2. q2—a→q1 (mais pares). q2—b→q4(f,1b-impar).',
        'b-phase: q4—b→q3(par), q3—b→q4(impar). q4 e final.',
        'c-phase: q4—c→q5—c→q6(f). q6—c→q5. "aaaabbb": q2→q1→q2—b→q4—b→q3—b→q4(f) ✓.',
      ] },
    },
    boardWords: ['aab', 'aabcc', 'aaaabbb'],
    guidedLesson: [
      { text: '(aa)+ (bb)*b (cc)*: par-a, impar-b, par-c!<br/>Aceitar: <b>aab</b>, <b>aabcc</b>, <b>aaaabbb</b>. Rejeitar: ab, aabb, b.',
        boardDoneUpTo: -1, stateUpdate: { nodes: [], transitions: [] } },
      { text: 'Foco em <b>aab</b>: núcleo q0→q1(a)→q2(a)→q4(final,b).',
        boardDoneUpTo: 0, stateUpdate: { nodes: [], transitions: [] } },
      { text: 'Solução: q0→q1(a)→q2(a)→q4(final,b). "aab"✓. Próxima: "aabcc"!',
        boardDoneUpTo: 1, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 10, y: 40, isInitial: true,  isFinal: false },
            { id: 'q1', label: 'q1', x: 26, y: 40, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 42, y: 40, isInitial: false, isFinal: false },
            { id: 'q4', label: 'q4', x: 58, y: 40, isInitial: false, isFinal: true  },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q2', symbol: 'a' },
            { from: 'q2', to: 'q4', symbol: 'b' },
          ] } },
      { text: 'Foco em <b>aabcc</b>: q4 lê "c" — sem seta! Preciso de q5,q6 para c-phase.',
        boardDoneUpTo: 1, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 10, y: 40, isInitial: true,  isFinal: false },
            { id: 'q1', label: 'q1', x: 26, y: 40, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 42, y: 40, isInitial: false, isFinal: false },
            { id: 'q4', label: 'q4', x: 58, y: 40, isInitial: false, isFinal: true  },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q2', symbol: 'a' },
            { from: 'q2', to: 'q4', symbol: 'b' },
          ] } },
      { text: 'Solução: +q5,q6. q4→q5(c)→q6(final)↔q5(c). "aabcc"✓. Próxima: "aaaabbb"!',
        boardDoneUpTo: 2, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 10, y: 40, isInitial: true,  isFinal: false },
            { id: 'q1', label: 'q1', x: 26, y: 40, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 42, y: 40, isInitial: false, isFinal: false },
            { id: 'q4', label: 'q4', x: 58, y: 40, isInitial: false, isFinal: true  },
            { id: 'q5', label: 'q5', x: 74, y: 40, isInitial: false, isFinal: false },
            { id: 'q6', label: 'q6', x: 90, y: 40, isInitial: false, isFinal: true  },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q2', symbol: 'a' },
            { from: 'q2', to: 'q4', symbol: 'b' },
            { from: 'q4', to: 'q5', symbol: 'c' },
            { from: 'q5', to: 'q6', symbol: 'c' },
            { from: 'q6', to: 'q5', symbol: 'c' },
          ] } },
      { text: 'Foco em <b>aaaabbb</b>: q2 lê terceiro "a" — sem ciclo! q4 lê segundo "b" — sem seta! Preciso de q2→q1(a) e q3 para b-pares.',
        boardDoneUpTo: 2, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 10, y: 40, isInitial: true,  isFinal: false },
            { id: 'q1', label: 'q1', x: 26, y: 40, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 42, y: 40, isInitial: false, isFinal: false },
            { id: 'q4', label: 'q4', x: 58, y: 40, isInitial: false, isFinal: true  },
            { id: 'q5', label: 'q5', x: 74, y: 40, isInitial: false, isFinal: false },
            { id: 'q6', label: 'q6', x: 90, y: 40, isInitial: false, isFinal: true  },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q2', symbol: 'a' },
            { from: 'q2', to: 'q4', symbol: 'b' },
            { from: 'q4', to: 'q5', symbol: 'c' },
            { from: 'q5', to: 'q6', symbol: 'c' },
            { from: 'q6', to: 'q5', symbol: 'c' },
          ] } },
      { text: 'Solução: q2→q1(a), +q3, q4→q3(b)→q4(b). "aaaabbb"✓ Concluído!',
        boardDoneUpTo: 3, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 10, y: 40, isInitial: true,  isFinal: false },
            { id: 'q1', label: 'q1', x: 26, y: 40, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 42, y: 40, isInitial: false, isFinal: false },
            { id: 'q4', label: 'q4', x: 58, y: 40, isInitial: false, isFinal: true  },
            { id: 'q3', label: 'q3', x: 58, y: 68, isInitial: false, isFinal: false },
            { id: 'q5', label: 'q5', x: 74, y: 40, isInitial: false, isFinal: false },
            { id: 'q6', label: 'q6', x: 90, y: 40, isInitial: false, isFinal: true  },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q2', symbol: 'a' },
            { from: 'q2', to: 'q1', symbol: 'a' },
            { from: 'q2', to: 'q4', symbol: 'b' },
            { from: 'q4', to: 'q3', symbol: 'b' },
            { from: 'q3', to: 'q4', symbol: 'b' },
            { from: 'q4', to: 'q5', symbol: 'c' },
            { from: 'q5', to: 'q6', symbol: 'c' },
            { from: 'q6', to: 'q5', symbol: 'c' },
          ] } },
    ] },
  { id: 53, label: "L53", formula: "L = { w ∈ {a,b,c}* | cada b é seguido de pelo menos um c }",       desc: "",                                                                 shortestWord: "",         regex: /^(a|c|bc+)*$/,                                              alphabet: ['a', 'b', 'c'],        acceptedWords: ["λ","a","bc","abc"],       rejectedWords: ["b","ab","bcb"],         hint: "Leu um 'b'? A próxima letra TEM que ser 'c'. Depois tudo fica livre.",                                              successMsg: "Condicional restrita dominada. Zerou a lista!",
    tutorials: {
      onStart: { type: 'theory', title: 'Cada "b" deve ser seguido de "c"!', dialog: [
        'L53: sempre que ler um "b", a próxima letra TEM que ser "c". Senão rejeita.',
        '"bc" ✓ "abc" ✓ "λ" ✓ "a" ✓. "b" ✗ (nenhum c após b). "bcb" ✗ (o 2º b não tem c).',
        'Apenas 2 estados: livre (q0) e esperando-c (q1). Simples mas rigoroso!',
      ] },
      onDrawGraph: { type: 'mechanic', title: '2 Estados: Livre e Esperando-c', dialog: [
        'q0(ini,f): loop a,c. Ler "b" → q1 (modo de espera).',
        'q1: ler "c" → q0 (volta ao livre). Ler "a" ou "b" → morto (sem seta = rejeição).',
        '"abc": q0—a→q0—b→q1—c→q0(f) ✓. "bcb": q0→q1→q0→q1(não-f) ✗.',
      ] },
    },
    boardWords: ['λ', 'a', 'bc', 'abc'],
    guidedLesson: [
      { text: 'Condicional: cada "b" deve ser seguido de pelo menos um "c"!<br/>Aceitar: <b>λ</b>, <b>a</b>, <b>bc</b>, <b>abc</b>. Rejeitar: b, ab, bcb.',
        boardDoneUpTo: -1, stateUpdate: { nodes: [], transitions: [] } },
      { text: 'Foco em <b>λ</b> e <b>a</b>: ambas precisam apenas de q0(ini,final) com loop a e c.',
        boardDoneUpTo: 0, stateUpdate: { nodes: [], transitions: [] } },
      { text: 'Solução: q0(ini,final) loop a,c. λ✓ a✓. Próximas: "bc" e "abc"!',
        boardDoneUpTo: 2, stateUpdate: {
          nodes: [ { id: 'q0', label: 'q0', x: 50, y: 50, isInitial: true, isFinal: true } ],
          transitions: [ { from: 'q0', to: 'q0', symbol: 'a,c' } ] } },
      { text: 'Foco em <b>bc</b> e <b>abc</b>: q0 lê "b" — sem seta! Preciso de q1 para esperar o "c".',
        boardDoneUpTo: 2, stateUpdate: {
          nodes: [ { id: 'q0', label: 'q0', x: 50, y: 50, isInitial: true, isFinal: true } ],
          transitions: [ { from: 'q0', to: 'q0', symbol: 'a,c' } ] } },
      { text: 'Solução: q0→q1(b)→q0(c). "bc"✓ "abc"✓ Concluído!',
        boardDoneUpTo: 4, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 30, y: 50, isInitial: true,  isFinal: true  },
            { id: 'q1', label: 'q1', x: 70, y: 50, isInitial: false, isFinal: false },
          ],
          transitions: [
            { from: 'q0', to: 'q0', symbol: 'a,c' },
            { from: 'q0', to: 'q1', symbol: 'b' },
            { from: 'q1', to: 'q0', symbol: 'c' },
          ] } },
    ] },
  { id: 54, label: "L54", formula: "L = { w ∈ {a,b,c}* | |w|a é ímpar, |w|b é ímpar e |w|c é ímpar }", desc: "",                                                                 shortestWord: "abc",      validate: (w) => { const a = (w.match(/a/g)||[]).length; const b = (w.match(/b/g)||[]).length; const c = (w.match(/c/g)||[]).length; return a%2!==0 && b%2!==0 && c%2!==0; }, alphabet: ['a','b','c'],          acceptedWords: ["abc","abccc","aaabccc"],  rejectedWords: ["","ab","aabc"],         hint: "O cubo oposto ao L46! O único estado aceito é o canto (ímpar, ímpar, ímpar). Cada letra inverte apenas o seu próprio bit de paridade.", successMsg: "Cubo de paridade invertido dominado!",
    tutorials: {
      onStart: { type: 'theory', title: 'Cubo ímpar: 3 letras, 8 estados!', dialog: [
        'L54: contar a, b e c separadamente. Aceito quando TODOS são ímpares.',
        '"abc" ✓ (1a,1b,1c). "abccc" ✓ (1a,1b,3c). "λ" ✗ (todos pares). "ab" ✗ (0c=par).',
        '8 combinações de paridade: 2^3 = 8 estados. Apenas iii (ímpar,ímpar,ímpar) aceita.',
      ] },
      onDrawGraph: { type: 'mechanic', title: '8 Estados em Cubo Ímpar', dialog: [
        'Cada letra inverte apenas o seu bit: "a" → muda 1° bit, "b" → 2°, "c" → 3°.',
        '"a": ppp↔ipp, pip↔iip, ppi↔ipi, pii↔iii.',
        '"b": ppp↔pip, ipp↔iip, ppi↔pii, ipi↔iii. "c": ppp↔ppi, ipp↔ipi, pip↔pii, iip↔iii.',
      ] },
    },
    boardWords: ['abc', 'abccc', 'aaabccc'],
    guidedLesson: [
      { text: 'Cubo ímpar: a, b e c TODOS ímpares!<br/>Aceitar: <b>abc</b>, <b>abccc</b>, <b>aaabccc</b>. Rejeitar: λ, ab, aabc.',
        boardDoneUpTo: -1, stateUpdate: { nodes: [], transitions: [] } },
      { text: 'Foco em <b>abc</b>: caminho mínimo ppp→ipp(a)→iip(b)→iii(final,c).',
        boardDoneUpTo: 0, stateUpdate: { nodes: [], transitions: [] } },
      { text: 'Solução: ppp→ipp(a)→iip(b)→iii(final,c). "abc"✓. Próxima: "abccc"!',
        boardDoneUpTo: 1, stateUpdate: {
          nodes: [
            { id: 'ppp', label: 'ppp', x: 10, y: 50, isInitial: true,  isFinal: false },
            { id: 'ipp', label: 'ipp', x: 35, y: 50, isInitial: false, isFinal: false },
            { id: 'iip', label: 'iip', x: 60, y: 50, isInitial: false, isFinal: false },
            { id: 'iii', label: 'iii', x: 85, y: 50, isInitial: false, isFinal: true  },
          ],
          transitions: [
            { from: 'ppp', to: 'ipp', symbol: 'a' },
            { from: 'ipp', to: 'iip', symbol: 'b' },
            { from: 'iip', to: 'iii', symbol: 'c' },
          ] } },
      { text: 'Foco em <b>abccc</b>: iii lê segundo "c" — sem seta de volta! Preciso de iii↔iip(c).',
        boardDoneUpTo: 1, stateUpdate: {
          nodes: [
            { id: 'ppp', label: 'ppp', x: 10, y: 50, isInitial: true,  isFinal: false },
            { id: 'ipp', label: 'ipp', x: 35, y: 50, isInitial: false, isFinal: false },
            { id: 'iip', label: 'iip', x: 60, y: 50, isInitial: false, isFinal: false },
            { id: 'iii', label: 'iii', x: 85, y: 50, isInitial: false, isFinal: true  },
          ],
          transitions: [
            { from: 'ppp', to: 'ipp', symbol: 'a' },
            { from: 'ipp', to: 'iip', symbol: 'b' },
            { from: 'iip', to: 'iii', symbol: 'c' },
          ] } },
      { text: 'Solução: iii↔iip(c). "abccc"✓. Próxima: "aaabccc"!',
        boardDoneUpTo: 2, stateUpdate: {
          nodes: [
            { id: 'ppp', label: 'ppp', x: 10, y: 50, isInitial: true,  isFinal: false },
            { id: 'ipp', label: 'ipp', x: 35, y: 50, isInitial: false, isFinal: false },
            { id: 'iip', label: 'iip', x: 60, y: 50, isInitial: false, isFinal: false },
            { id: 'iii', label: 'iii', x: 85, y: 50, isInitial: false, isFinal: true  },
          ],
          transitions: [
            { from: 'ppp', to: 'ipp', symbol: 'a' },
            { from: 'ipp', to: 'iip', symbol: 'b' },
            { from: 'iip', to: 'iii', symbol: 'c' },
            { from: 'iii', to: 'iip', symbol: 'c' },
          ] } },
      { text: 'Foco em <b>aaabccc</b>: ipp lê segundo "a" — sem seta de volta! Preciso do cubo completo.',
        boardDoneUpTo: 2, stateUpdate: {
          nodes: [
            { id: 'ppp', label: 'ppp', x: 10, y: 50, isInitial: true,  isFinal: false },
            { id: 'ipp', label: 'ipp', x: 35, y: 50, isInitial: false, isFinal: false },
            { id: 'iip', label: 'iip', x: 60, y: 50, isInitial: false, isFinal: false },
            { id: 'iii', label: 'iii', x: 85, y: 50, isInitial: false, isFinal: true  },
          ],
          transitions: [
            { from: 'ppp', to: 'ipp', symbol: 'a' },
            { from: 'ipp', to: 'iip', symbol: 'b' },
            { from: 'iip', to: 'iii', symbol: 'c' },
            { from: 'iii', to: 'iip', symbol: 'c' },
          ] } },
      { text: 'Solução: cubo completo +pip,ppi,pii,ipi. "aaabccc"✓ Concluído!',
        boardDoneUpTo: 3, stateUpdate: {
          nodes: [
            { id: 'ppp', label: 'ppp', x: 12, y: 25, isInitial: true,  isFinal: false },
            { id: 'ipp', label: 'ipp', x: 12, y: 70, isInitial: false, isFinal: false },
            { id: 'pip', label: 'pip', x: 37, y: 25, isInitial: false, isFinal: false },
            { id: 'iip', label: 'iip', x: 37, y: 70, isInitial: false, isFinal: false },
            { id: 'ppi', label: 'ppi', x: 62, y: 25, isInitial: false, isFinal: false },
            { id: 'ipi', label: 'ipi', x: 62, y: 70, isInitial: false, isFinal: false },
            { id: 'pii', label: 'pii', x: 87, y: 25, isInitial: false, isFinal: false },
            { id: 'iii', label: 'iii', x: 87, y: 70, isInitial: false, isFinal: true  },
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
            { from: 'iip', to: 'iii', symbol: 'c' }, { from: 'iii', to: 'iip', symbol: 'c' },
          ] } },
    ] },
  { id: 55, label: "L55", formula: "L = { wxy | w∈{a,b}*, x∈{c,d}*, y∈{e,f}* e cada símbolo tem qtd par }", desc: "", shortestWord: "", validate: (w) => { if (!/^([ab]*)([cd]*)([ef]*)$/.test(w)) return false; const counts = ['a','b','c','d','e','f'].map(ch => (w.match(new RegExp(ch,'g'))||[]).length); return counts.every(c => c%2===0); }, alphabet: ['a','b','c','d','e','f'], acceptedWords: ['','aabb','ccdd','aabbccddeeff','abba'], rejectedWords: ['a','abccdd','ac','ba','c','aabbcde'], hint: "Três seções em ordem! [ab]* depois [cd]* depois [ef]*. Cada par de letras com paridade independente. O AFD completo tem mais de 80 estados!", successMsg: "Mestre das seis paridades!",
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
          nodes: [ { id: 'q0', label: 'q0', x: 50, y: 50, isInitial: true, isFinal: true } ],
          transitions: [] } },
      { text: 'Foco em <b>aabb</b>: seção ab — quadrado de paridade para a e b.',
        boardDoneUpTo: 1, stateUpdate: {
          nodes: [ { id: 'q0', label: 'q0', x: 50, y: 50, isInitial: true, isFinal: true } ],
          transitions: [] } },
      { text: 'Solução: quadrado ab. q0↔q1(a), q0↔q2(b), q1↔q3(b), q2↔q3(a). "aabb"✓. Próxima: "aabbccdd"!',
        boardDoneUpTo: 2, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 12, y: 35, isInitial: true,  isFinal: true  },
            { id: 'q1', label: 'q1', x: 12, y: 70, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 37, y: 35, isInitial: false, isFinal: false },
            { id: 'q3', label: 'q3', x: 37, y: 70, isInitial: false, isFinal: false },
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
            { id: 'q0', label: 'q0', x: 12, y: 35, isInitial: true,  isFinal: true  },
            { id: 'q1', label: 'q1', x: 12, y: 70, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 37, y: 35, isInitial: false, isFinal: false },
            { id: 'q3', label: 'q3', x: 37, y: 70, isInitial: false, isFinal: false },
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
            { id: 'q0', label: 'q0', x: 12, y: 35, isInitial: true,  isFinal: true  },
            { id: 'q1', label: 'q1', x: 12, y: 70, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 37, y: 35, isInitial: false, isFinal: false },
            { id: 'q3', label: 'q3', x: 37, y: 70, isInitial: false, isFinal: false },
            { id: 'q4', label: 'q4', x: 62, y: 35, isInitial: false, isFinal: true  },
            { id: 'q5', label: 'q5', x: 87, y: 35, isInitial: false, isFinal: false },
            { id: 'q6', label: 'q6', x: 62, y: 70, isInitial: false, isFinal: false },
            { id: 'q7', label: 'q7', x: 87, y: 70, isInitial: false, isFinal: false },
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
    ] },

  // L56 "trabalho" — exercício extra (roxo). Prefixo a^(n+3) (3 a's no grafo: q0→q1→q2→q3),
  // bifurcação bc|cb, ciclo (ddd)^m, trecho fixo "aba", e^p, conector "a" e (bc)^q com q>0.
  { id: 56, label: "L56", formula: "L = { a^n a a a (bc+cb)(ddd)^m aba e^p a(bc)^q | n,m,p ≥ 0, q > 0 }", desc: "(trabalho)", shortestWord: "aaabcabaabc", regex: /^a{3,}(?:bc|cb)(?:ddd)*abae*a(?:bc)+$/, alphabet: ['a', 'b', 'c', 'd', 'e'], acceptedWords: ["aaabcabaabc","aaaabcabaabc","aaacbabaabc","aaabcdddabaabc","aaabcabaeeabcbc"], rejectedWords: ["aabcabaabc","aaababaabc","aaabcddabaabc","aaabcabaa","aaabcababc"], hint: "Comece com pelo menos três 'a'. Depois bifurque em 'bc' ou 'cb', repita 'ddd' em trios, escreva o miolo fixo 'aba', solte 'e's à vontade e feche com 'a' seguido de pelo menos um 'bc'.", successMsg: "Trabalho concluído — autômato gigante dominado!",
    boardWords: ['aaabcabaabc', 'aaacbabaabc', 'aaabcdddabaabc'],
    guidedLesson: buildLessonL56(),
  },

  // L57 "trabalho" — paridade dupla em dois blocos: a w a x a, com w,x ∈ {b,c}*
  // tendo #b par e #c par em cada bloco. Caso vazio (w=x=∅) = "aaa" (3 'a's).
  { id: 57, label: "L57", formula: "L = { a w a x a | w,x ∈ {b,c}*, |w|b é par e |w|c é par, |x|b é par e |x|c é par }", desc: "(trabalho)", shortestWord: "aaa",
    validate: (s) => { const m = /^a([bc]*)a([bc]*)a$/.exec(s); if (!m) return false; const even = (t) => (t.match(/b/g)||[]).length%2===0 && (t.match(/c/g)||[]).length%2===0; return even(m[1]) && even(m[2]); },
    alphabet: ['a', 'b', 'c'], acceptedWords: ["aaa","abbaa","aabba","abcbcaa","aabcbca","abbccabbcca"], rejectedWords: ["aabaa","aaaba","aaaa","aaaaaa","acbcaa","bbbaaaaa"], hint: "Estrutura a·w·a·x·a: três 'a's separam dois blocos de b/c. Em cada bloco, a quantidade de 'b' e de 'c' precisa ser PAR. Caso vazio = 'aaa'.", successMsg: "Trabalho concluído — paridade dupla em dois blocos dominada!",
    boardWords: ['aaa', 'abbaa', 'abbabba'],
    guidedLesson: buildLessonL57(),
  },

  // L58 "Boss Final" — b^n a (bcd)^m a b^p c^q e w e^r a^s b^t c^u, q>0, w∈{a,b,c,d}* com sufixo 'ab'.
  // validate = simulação fiel do DFA do grafo (q9..q12 finais). Caso curto = "aaceabe" (w="ab").
  { id: 58, label: "L58", formula: "L = { b^n a (bcd)^m a b^p c^q e w e^r a^s b^t c^u | n,m,p,r,s,t,u ≥ 0, q > 0, w ∈ {a,b,c,d}*, w tem 'ab' como sufixo }", desc: "(trabalho — boss final)", shortestWord: "aaceabe",
    validate: (s) => {
      const delta = {
        q0:{b:'q0',a:'q1'}, q1:{b:'q2',a:'q4'}, q2:{c:'q3'}, q3:{d:'q1'},
        q4:{b:'q4',c:'q5'}, q5:{c:'q5',e:'q6'},
        q6:{b:'q6',c:'q6',d:'q6',a:'q7'}, q7:{a:'q7',c:'q6',d:'q6',b:'q8'},
        q8:{a:'q7',b:'q6',c:'q6',d:'q6',e:'q9'},
        q9:{e:'q9',a:'q10',b:'q11',c:'q12'}, q10:{a:'q10',b:'q11',c:'q12'},
        q11:{b:'q11',c:'q12'}, q12:{c:'q12'},
      };
      const finals = new Set(['q9','q10','q11','q12']);
      let cur = 'q0';
      for (const ch of s) { cur = delta[cur] && delta[cur][ch]; if (!cur) return false; }
      return finals.has(cur);
    },
    alphabet: ['a', 'b', 'c', 'd', 'e'], acceptedWords: ["aaceabe","aaceabea","babcdabbcceabcabeeeaab","aaceabeac"], rejectedWords: ["aaceaba","aacbaabce","aaceabcdae","aaeabae"], hint: "Boss final! Estrutura: b* a (bcd)* a b* c+ — depois 'e', um w que termina em 'ab', outro 'e', e a cauda e* a* b* c*. Cada 'e' separa os blocos; o 'c' antes do primeiro 'e' é obrigatório (q>0).", successMsg: "BOSS FINAL DERROTADO! Você dominou o autômato de 13 estados! 🏆",
    boardWords: ['aaceabe', 'aaceabeac', 'babcdabbcceabcabeeeaab'],
    guidedLesson: buildLessonL58(),
  },

  // ── Prova (vermelho) ─────────────────────────────────────────────────────────
  // L59: a^n b^2m c^p d^q (quantidade de 'b' par) = a* (bb)* c* d*
  { id: 59, label: "L59", formula: "L = { a^n b^2m c^p d^q | n,m,p,q ≥ 0 }", desc: "(prova)", shortestWord: "", regex: /^a*(bb)*c*d*$/, alphabet: ['a', 'b', 'c', 'd'], acceptedWords: ["a","bb","abbc","bbdd",""], rejectedWords: ["b","bbb","abbcdb","cba"], hint: "Ordem fixa: a's, depois b's (em quantidade PAR), depois c's, depois d's. Um número ímpar de 'b' rejeita.", successMsg: "Prova L59 resolvida!",
    boardWords: ['λ', 'bb', 'abbc'],
    guidedLesson: buildLessonL59(),
  },

  // L60: a w a x a, com w,x ∈ {b,c}* tendo #b ÍMPAR e #c ÍMPAR em cada bloco
  { id: 60, label: "L60", formula: "L = { a w a x a | w,x ∈ {b,c}*, |w|b e |w|c ímpares, |x|b e |x|c ímpares }", desc: "(prova)", shortestWord: "abcabca",
    validate: (s) => { const m = /^a([bc]*)a([bc]*)a$/.exec(s); if (!m) return false; const odd = (t) => (t.match(/b/g)||[]).length%2===1 && (t.match(/c/g)||[]).length%2===1; return odd(m[1]) && odd(m[2]); },
    alphabet: ['a', 'b', 'c'], acceptedWords: ["abcabca","abcacba","abbbcabca"], rejectedWords: ["abcaa","aabca","aba","abcabcaa"], hint: "Estrutura a·w·a·x·a (três 'a's, dois blocos de b/c). Em cada bloco a quantidade de 'b' E de 'c' precisa ser ÍMPAR. Menor palavra: 'abcabca'.", successMsg: "Prova L60 resolvida — paridade ímpar dupla!",
    boardWords: ['abcabca', 'abcacba', 'abbbcabca'],
    guidedLesson: buildLessonL60(),
  },

  // L61: w ∈ {0,1}* | valor binário múltiplo de 6 (autômato mod 6, ignora a palavra vazia)
  { id: 61, label: "L61", formula: "L = { w ∈ {0,1}* | w é múltiplo de 6 }", desc: "(prova)", shortestWord: "0",
    validate: (w) => { if (w === '' || !/^[01]+$/.test(w)) return false; let r = 0; for (const ch of w) r = (r*2 + (ch === '1' ? 1 : 0)) % 6; return r === 0; },
    alphabet: ['0', '1'], acceptedWords: ["0","110","1100","10010"], rejectedWords: ["1","10","101","111"], hint: "Leia da esquerda para a direita acumulando o resto mod 6: a cada bit, resto = (resto×2 + bit) mod 6. Aceita se terminar em resto 0. A palavra vazia não conta.", successMsg: "Prova L61 resolvida — máquina de módulo 6!",
    boardWords: ['0', '110', '1100'],
    guidedLesson: buildLessonL61(),
  },
];
