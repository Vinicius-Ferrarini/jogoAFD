export default { id: 2,  label: "L02", formula: "L = { λ }",                                                           desc: "Contém uma única palavra: a palavra vazia.",                         shortestWord: "",         regex: /^$/,                                                        alphabet: [],                     acceptedWords: [""],                        rejectedWords: ["a","0","b"],           hint: "Se a palavra é vazia, o estado inicial também deve ser o final!",                                                   successMsg: "Exato! Aceitar o vazio significa já nascer no estado final.",
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
    } };
