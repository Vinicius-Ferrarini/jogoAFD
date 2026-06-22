// ─── makeBuilder: gerador de passos do Modo Aula do AFD ──────────────────────
// Helper compartilhado pelos lotes (lote1, lote3, …) para construir o Modo Aula
// no padrão "Desenha ➔ Testa ➔ Rejeição Didática" a partir do grafo estático
// (LEVEL_GRAPHS).
//
// O Modo Aula revela o grafo PASSO A PASSO (cada passo carrega um stateUpdate
// cumulativo com os nós/arestas já apresentados). A fase FORMAL — tupla
// M=(Q,Σ,δ,q₀,F) + tabela δ — é auto-derivada pelo motor da aula
// (useGuidedLesson.buildAFDFormalSteps) a partir do stateUpdate do ÚLTIMO passo,
// que por isso precisa conter o grafo COMPLETO.
//
// Metodologia (Regra de Ouro): Caminho da Menor Palavra → Laços/Quantificadores
// → Ramificações/Ciclos → Generalização (grafo completo).
//
// makeBuilder injeta as coordenadas (x,y) de um layout fixo nos SUBCONJUNTOS de
// nós revelados a cada passo, garantindo que os nós não "pulem" de lugar entre
// os passos. Arestas multi-símbolo (ex.: 'b,c,d') entram uma única vez.
export function makeBuilder(graph, layout) {
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
