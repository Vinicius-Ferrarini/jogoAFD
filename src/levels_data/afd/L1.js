export default { id: 1,  label: "L01", formula: "L = ∅",                                                               wordOnly: true,  desc: "A linguagem mais simples que existe; não contém palavras.",           shortestWord: null,       regex: /(?!)/,                                                     alphabet: [],                     acceptedWords: [],                         rejectedWords: ["λ","a","0"],           hint: "Uma linguagem vazia não aceita absolutamente nada. Como o grafo deve ficar?",                                       successMsg: "Perfeito! Um autômato sem estados finais não aceita nada.",
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
    } };
