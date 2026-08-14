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
    // Explicação em passos mostrada na tela de vitória (1 estrela) do L14 em
    // AFD_1 — ver `L14ImpossibleExplanation.jsx` (renderiza via TutorialModal +
    // GraphView, sem entrar no pipeline do Modo Aula: o último "passo" nunca é
    // um AFD válido/completo, então a fase FORMAL automática de
    // useGuidedLesson.js não se aplica aqui). Roteiro próprio, diferente do
    // `guidedLesson` acima (que é sobre a^k b^k) — aqui o crescimento é por
    // CONTADOR DESBALANCEADO (bb antes de aa) para reforçar visualmente que
    // o AFD precisaria "lembrar" quantos "b"s pendentes existem, e isso não
    // tem teto: sempre cabe uma palavra que pede mais um estado de memória.
    impossibleSteps: [
      { text: 'Vamos tentar construir um AFD para <b>|w|a = |w|b</b> mesmo assim — e ver onde ele quebra.<br/>Começando pelo básico: <b>λ</b> (palavra vazia) tem 0 "a"s e 0 "b"s, então é aceita. q0 é inicial <u>e</u> final.',
        nodes: [
          { id: 'q0', label: 'q0', x: 50, y: 50, isInitial: true, isFinal: true },
        ],
        transitions: [] },
      { text: 'Agora "ab" e "ba" também precisam ser aceitas. Cada uma pede um caminho próprio: q0→q1→qF (para "ab") e q0→q2→qF (para "ba").',
        nodes: [
          { id: 'q0', label: 'q0', x: 50, y: 50, isInitial: true, isFinal: true },
          { id: 'q1', label: 'q1', x: 20, y: 15, isInitial: false, isFinal: false },
          { id: 'q2', label: 'q2', x: 80, y: 15, isInitial: false, isFinal: false },
          { id: 'qF', label: 'qF', x: 50, y: 85, isInitial: false, isFinal: true },
        ],
        transitions: [
          { from: 'q0', to: 'q1', symbol: 'a' },
          { from: 'q1', to: 'qF', symbol: 'b' },
          { from: 'q0', to: 'q2', symbol: 'b' },
          { from: 'q2', to: 'qF', symbol: 'a' },
        ] },
      { text: 'Mas e <b>"bbaa"</b>? 2 "b"s pendentes antes de qualquer "a" — q2 já leu 1 "b", mas o 2° "b" não tem pra onde ir! Preciso de q3 para "lembrar" 2 "b"s em aberto.',
        nodes: [
          { id: 'q0', label: 'q0', x: 50, y: 8,  isInitial: true, isFinal: true },
          { id: 'q1', label: 'q1', x: 20, y: 22, isInitial: false, isFinal: false },
          { id: 'q2', label: 'q2', x: 80, y: 22, isInitial: false, isFinal: false },
          { id: 'q3', label: 'q3', x: 80, y: 45, isInitial: false, isFinal: false },
          { id: 'qF', label: 'qF', x: 50, y: 68, isInitial: false, isFinal: true },
        ],
        transitions: [
          { from: 'q0', to: 'q1', symbol: 'a' },
          { from: 'q1', to: 'qF', symbol: 'b' },
          { from: 'q0', to: 'q2', symbol: 'b' },
          { from: 'q2', to: 'qF', symbol: 'a' },
          { from: 'q2', to: 'q3', symbol: 'b' },
          { from: 'q3', to: 'q2', symbol: 'a' },
        ] },
      { text: 'Só que "bbbaaa" tem 3 "b"s pendentes — pede q4. "bbbbaaaa" tem 4 — pede q5. <u>Sempre</u> mais um estado para cada "b" extra antes do primeiro "a".',
        nodes: [
          { id: 'q0', label: 'q0', x: 50, y: 5,  isInitial: true, isFinal: true },
          { id: 'q1', label: 'q1', x: 15, y: 18, isInitial: false, isFinal: false },
          { id: 'q2', label: 'q2', x: 85, y: 18, isInitial: false, isFinal: false },
          { id: 'q3', label: 'q3', x: 85, y: 38, isInitial: false, isFinal: false },
          { id: 'q4', label: 'q4', x: 85, y: 58, isInitial: false, isFinal: false },
          { id: 'q5', label: 'q5', x: 85, y: 78, isInitial: false, isFinal: false },
          { id: 'qF', label: 'qF', x: 45, y: 58, isInitial: false, isFinal: true },
        ],
        transitions: [
          { from: 'q0', to: 'q1', symbol: 'a' },
          { from: 'q1', to: 'qF', symbol: 'b' },
          { from: 'q0', to: 'q2', symbol: 'b' },
          { from: 'q2', to: 'qF', symbol: 'a' },
          { from: 'q2', to: 'q3', symbol: 'b' },
          { from: 'q3', to: 'q2', symbol: 'a' },
          { from: 'q3', to: 'q4', symbol: 'b' },
          { from: 'q4', to: 'q3', symbol: 'a' },
          { from: 'q4', to: 'q5', symbol: 'b' },
          { from: 'q5', to: 'q4', symbol: 'a' },
        ] },
      { text: '<b>É isso.</b> Não tem limite: pra <u>qualquer</u> número N de estados, dá pra achar uma palavra com N+1 "b"s pendentes que quebra o autômato. Em AFD isso fica infinito, porque <b>AFD não tem memória</b> — só estados fixos, não existe "contador" que cresça à vontade.<br/>Esse exercício só é resolvível com <b>AP</b> (autômato com pilha) — a pilha guarda a diferença entre as contagens de "a" e "b", sem limite. A gente resolve ele lá! 🔜',
        nodes: [],
        transitions: [] },
    ],
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
