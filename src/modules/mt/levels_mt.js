// ─── Níveis do Módulo MT — Submódulo Transdutora ─────────────────────────────
// Cada nível define:
//   validate(word) → string esperada na fita após a MT aceitar
//   testWords      → bateria que o fuzzTMTransducer usa para validar a MT do aluno
// Os gabaritos JFLAP (gabaritos_jflap/mt/transdutora/L*.xml) são carregados
// separadamente na fase de aula guiada via parseJffTM — não são importados aqui.

// ── Nós e transições reutilizados nos passos da aula guiada ──────────────────

// Passo 2: grafo linear para "ab" (q0 → q1 → q2)
const L1_N_SIMPLE = [
  { uid: 'q0', id: 'q0', label: 'q0', x: 20, y: 50, isInitial: true,  isFinal: false },
  { uid: 'q1', id: 'q1', label: 'q1', x: 50, y: 50, isInitial: false, isFinal: false },
  { uid: 'q2', id: 'q2', label: 'q2', x: 80, y: 50, isInitial: false, isFinal: true  },
];
const L1_T_SIMPLE = [
  { from: 'q0', to: 'q1', read: 'a', write: 'A', move: 'R' },
  { from: 'q1', to: 'q2', read: 'b', write: 'B', move: 'R' },
];

// Passo 3 / Passo 4: grafo com scan-left (qS varre de volta, qF aceita)
const L1_N_RETURN = [
  { uid: 'q0', id: 'q0', label: 'q0', x: 10, y: 50, isInitial: true,  isFinal: false },
  { uid: 'q1', id: 'q1', label: 'q1', x: 35, y: 50, isInitial: false, isFinal: false },
  { uid: 'qs', id: 'qs', label: 'qS', x: 63, y: 50, isInitial: false, isFinal: false },
  { uid: 'qf', id: 'qf', label: 'qF', x: 88, y: 50, isInitial: false, isFinal: true  },
];
const L1_T_RETURN = [
  { from: 'q0', to: 'q1', read: 'a', write: 'A', move: 'R' },
  { from: 'q1', to: 'qs', read: 'b', write: 'B', move: 'R' },
  { from: 'qs', to: 'qs', read: 'A', write: 'A', move: 'L' },
  { from: 'qs', to: 'qs', read: 'B', write: 'B', move: 'L' },
  { from: 'qs', to: 'qf', read: '□', write: '□', move: 'R' },
];

// Passo 5: loop para 'a' apenas (q0 → q0 loop, q0 → qF)
const L1_N_LOOP1 = [
  { uid: 'q0', id: 'q0', label: 'q0', x: 30, y: 50, isInitial: true,  isFinal: false },
  { uid: 'qf', id: 'qf', label: 'qF', x: 70, y: 50, isInitial: false, isFinal: true  },
];
const L1_T_LOOP1 = [
  { from: 'q0', to: 'q0', read: 'a', write: 'A', move: 'R' },
  { from: 'q0', to: 'qf', read: '□', write: '□', move: 'R' },
];

// Passo 6 / Formal: loops completos a, b, c (generalização)
const L1_N_FULL = [
  { uid: 'q0', id: 'q0', label: 'q0', x: 30, y: 50, isInitial: true,  isFinal: false },
  { uid: 'qf', id: 'qf', label: 'qF', x: 70, y: 50, isInitial: false, isFinal: true  },
];
const L1_T_FULL = [
  { from: 'q0', to: 'q0', read: 'a', write: 'A', move: 'R' },
  { from: 'q0', to: 'q0', read: 'b', write: 'B', move: 'R' },
  { from: 'q0', to: 'q0', read: 'c', write: 'C', move: 'R' },
  { from: 'q0', to: 'qf', read: '□', write: '□', move: 'R' },
];

// ── Definição dos níveis ──────────────────────────────────────────────────────
export const MT_LEVELS = [
  {
    id:          'MT_L1',
    label:       'L1',
    type:        'transducer',
    level:       'easy',
    alphabet:    ['a', 'b'],
    tapeAlphabet: ['a', 'b', 'A', 'B', '□'],
    description: 'Tem como entrada uma palavra qualquer com a e b, e gera como saída a palavra em CAIXA ALTA.',
    hint:        'Para cada símbolo lido, escreva sua versão maiúscula e avance para a direita. Ao encontrar o branco, entre no estado final.',
    validate:    (w) => w.toUpperCase(),
    testWords:   ['ab', 'a', 'bb', 'aba', ''],
    formalDescription: {
      sigma:   '{a,b}',
      gamma:   '{a,b,A,B,□}',
      states:  '{q0,qF}',
      initial: 'q0',
      final:   '{qF}',
      blank:   '□',
    },

    // ── Aula Guiada (7 passos) ─────────────────────────────────────────────
    guidedLesson: {
      steps: [
        // 0 — Intro
        {
          prof: {
            message: "Em MT é difícil saber a linguagem só olhando o grafo. Vamos aprender montando! Essa máquina converte minúsculas em MAIÚSCULAS. Testaremos 'ab' e depois 'aab'.",
            mood: 'explicando',
          },
          stateUpdate: { nodes: [], transitions: [] },
        },

        // 1 — Caminho feliz: grafo linear para "ab" + animação
        {
          prof: {
            message: "Vamos simular a menor palavra: 'ab'. O grafo mais simples lê 'a', escreve 'A', depois lê 'b', escreve 'B' e chega ao estado final q2.",
            mood: 'explicando',
          },
          stateUpdate: { nodes: L1_N_SIMPLE, transitions: L1_T_SIMPLE },
          simulateWord: 'ab',
        },

        // 2 — Retorno: adiciona qS (scan-left) e qF
        {
          prof: {
            message: "Mas e o estado final? Adicionamos qS que varre a fita de volta para a esquerda (A;A,L e B;B,L) até achar o branco inicial, e então vai para qF que aceita.",
            mood: 'explicando',
          },
          stateUpdate: { nodes: L1_N_RETURN, transitions: L1_T_RETURN },
        },

        // 3 — Erro proposital: simula 'aab' e trava
        {
          prof: {
            message: "Próxima palavra! E se entrar 'aab'? Veja o que acontece na fita...",
            mood: 'serio',
          },
          stateUpdate: { nodes: L1_N_RETURN, transitions: L1_T_RETURN },
          simulateWord: 'aab',
        },

        // 4 — Correção: loop em q0 para 'a'
        {
          prof: {
            message: "Oops! A máquina travou em q1 — ele só esperava 'b' depois do primeiro 'a'. O grafo linear não serve para palavras maiores. Precisamos de loops em um único estado!",
            mood: 'serio',
          },
          stateUpdate: { nodes: L1_N_LOOP1, transitions: L1_T_LOOP1 },
        },

        // 5 — Generalização: adiciona b, c
        {
          prof: {
            message: "Se a regra serve para o 'a', o mesmo vale para o 'b' e o 'c'! Adicionamos loops b;B,R e c;C,R no mesmo estado q0. Agora qualquer letra vira MAIÚSCULA!",
            mood: 'explicando',
          },
          stateUpdate: { nodes: L1_N_FULL, transitions: L1_T_FULL },
        },

        // 6 — Formal
        {
          prof: {
            message: "Formalmente: M = (Q, Σ, Γ, δ, q0, □, F). Aqui Q={q0,qF}, Σ={a,b}, Γ={a,b,A,B,□}, q0 é o inicial e F={qF}. A função δ converte cada símbolo e avança a direita.",
            mood: 'explicando',
          },
          stateUpdate: { nodes: L1_N_FULL, transitions: L1_T_FULL },
          phase: 'FORMAL',
        },
      ],
    },
  },
];
