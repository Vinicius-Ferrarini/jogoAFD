// ── L7: Inversão de String (pedagógico) ───────────────────────────────────────────
const L7_Q0 = { uid: 'q0', id: 'q0', label: 'q0', x: 20, y: 50, isInitial: true,  isFinal: false };
const L7_Q1 = { uid: 'q1', id: 'q1', label: 'q1', x: 55, y: 50, isInitial: false, isFinal: false };
const L7_QF = { uid: 'qf', id: 'qf', label: 'qf', x: 88, y: 50, isInitial: false, isFinal: true  };

const L7_E_AR   = { from: 'q0', to: 'q0', read: 'a', write: 'a', move: 'R' };
const L7_E_BR   = { from: 'q0', to: 'q0', read: 'b', write: 'b', move: 'R' };
const L7_E_BACK = { from: 'q0', to: 'q1', read: '□', write: '□', move: 'L' };
const L7_E_AL   = { from: 'q1', to: 'q1', read: 'a', write: 'a', move: 'L' };
const L7_E_BL   = { from: 'q1', to: 'q1', read: 'b', write: 'b', move: 'L' };
const L7_E_FIN  = { from: 'q1', to: 'qf', read: '□', write: '□', move: 'R' };

const L7_N0    = [L7_Q0];
const L7_N01   = [L7_Q0, L7_Q1];
const L7_NFULL = [L7_Q0, L7_Q1, L7_QF];

const L7_TR    = [L7_E_AR, L7_E_BR];
const L7_TBK   = [L7_E_AR, L7_E_BR, L7_E_BACK];
const L7_TRL   = [L7_E_AR, L7_E_BR, L7_E_BACK, L7_E_AL, L7_E_BL];
const L7_TFULL = [L7_E_AR, L7_E_BR, L7_E_BACK, L7_E_AL, L7_E_BL, L7_E_FIN];

const MT_L7 = {
    id:           'MT_L7',
    label:        'L7',
    type:         'transducer',
    level:        'medium',
    alphabet:     ['a', 'b'],
    tapeAlphabet: ['a', 'b', '□'],
    description:  "Dada uma palavra sobre {a,b}, produza o reverso: 'ab' → 'ba', 'aba' → 'aba'.",
    hint:         "q0 varra a string até □ (a;a,R e b;b,R). q1 é o estado de Rewind: volta até o □ esquerdo (a;a,L e b;b,L) e aceita em qf.",
    validate:     (w) => [...w].reverse().join(''),
    testWords:    ['ab', 'ba', 'aba', 'aab'],
    formalDescription: {
      states:  '{q0, q1, qf}',
      sigma:   '{a, b}',
      gamma:   '{a, b, □}',
      initial: 'q0',
      final:   '{qf}',
      blank:   '□',
    },
    guidedLesson: {
      steps: [
        // 0 — Intro
        {
          prof: { message: "L7: Inverter uma string! 'ab' → 'ba', 'aab' → 'baa'. Aprenderemos o padrão scan-right / scan-left — onde q1 serve como o estado de Rewind do projeto.", mood: 'explicando' },
          stateUpdate: { nodes: [], transitions: [] },
        },
        // 1 — q0 + tape 'ab'
        {
          prof: { message: "Testamos 'ab'. q0 será nosso varredor da esquerda para a direita. Primeiro passo de qualquer algoritmo de multi-passe: achar o fim da fita.", mood: 'explicando' },
          stateUpdate: { nodes: L7_N0, transitions: [] },
          simulateWord: 'ab', tape: ['□','a','b','□'], head: 1, activeNode: 'q0',
        },
        // 2 — loops a;a,R e b;b,R
        {
          prof: { message: "Laços a;a,R e b;b,R em q0: reescreve sem alterar e avança. q0 'percorre' a string procurando o □ do fim.", mood: 'explicando' },
          stateUpdate: { nodes: L7_N0, transitions: L7_TR },
          simulateWord: 'ab', tape: ['□','a','b','□'], head: 1, activeNode: 'q0',
        },
        // 3 — head=3 (□ direito), TRAVA
        {
          prof: { message: "Travou! 😟 q0 chegou no □ e não tem transição. A MT PARA e REJEITA. Precisamos do estado de Rewind!", mood: 'triste' },
          stateUpdate: { nodes: L7_N0, transitions: L7_TR },
          simulateWord: 'ab', tape: ['□','a','b','□'], head: 3, status: 'REJECTED', activeNode: 'q0',
        },
        // 4 — revela q1 (ESTADO DE REWIND) + □;□,L
        {
          prof: { message: "Ao encontrar □: iniciamos o REWIND! Criamos q1 — nosso estado de Rewind — e a aresta □;□,L de q0 para q1. O cabeçote começa a voltar para a esquerda.", mood: 'explicando' },
          stateUpdate: { nodes: L7_N01, transitions: L7_TBK },
          simulateWord: 'ab', tape: ['□','a','b','□'], head: 3, activeNode: 'q0',
        },
        // 5 — q0→q1, head=2
        {
          prof: { message: "q0 leu □, entrou no estado de Rewind q1 e o cabeçote recuou para o último símbolo ('b'). Agora varremos de volta para a esquerda.", mood: 'explicando' },
          stateUpdate: { nodes: L7_N01, transitions: L7_TBK },
          simulateWord: 'ab', tape: ['□','a','b','□'], head: 2, activeNode: 'q1',
        },
        // 6 — loops q1 a;a,L e b;b,L
        {
          prof: { message: "Em q1 adicionamos a;a,L e b;b,L: varre de volta para a esquerda. O Padrão Rewind está montado — q1 é o estado que devolve o cabeçote ao início!", mood: 'explicando' },
          stateUpdate: { nodes: L7_N01, transitions: L7_TRL },
          simulateWord: 'ab', tape: ['□','a','b','□'], head: 2, activeNode: 'q1',
        },
        // 7 — head=0 (□ esquerdo)
        {
          prof: { message: "q1 varreu 'b' e 'a' de volta. Chegamos no □ da ESQUERDA — o início da fita! O Rewind está completo.", mood: 'explicando' },
          stateUpdate: { nodes: L7_N01, transitions: L7_TRL },
          simulateWord: 'ab', tape: ['□','a','b','□'], head: 0, activeNode: 'q1',
        },
        // 8 — revela qf + □;□,R e ACEITA 'ab'
        {
          prof: { message: "q1 toca o □ esquerdo e vai para qf com □;□,R — padrão universal de saída! O cabeçote está na 1ª posição. Resultado na fita: 'ba'. ✓", mood: 'feliz' },
          stateUpdate: { nodes: L7_NFULL, transitions: L7_TFULL },
          simulateWord: 'ab', tape: ['□','b','a','□'], head: 1, status: 'ACCEPTED', activeNode: 'qf',
        },
        // 9 — nota pedagógica
        {
          prof: { message: "O padrão scan-right (q0) → Rewind (q1) é a BASE de algoritmos de multi-passe. Em versões avançadas, é durante o scan-left que os dados são transformados — como em L8 e L9!", mood: 'serio' },
          stateUpdate: { nodes: L7_NFULL, transitions: L7_TFULL },
          simulateWord: 'ab', tape: ['□','b','a','□'], head: 1, activeNode: 'qf',
        },
        // 10 — ACEITA 'aba'
        {
          prof: { message: "Teste: 'aba' (palíndromo). Reverso de 'aba' é 'aba'. A MT aceita! ✓", mood: 'explicando' },
          stateUpdate: { nodes: L7_NFULL, transitions: L7_TFULL },
          simulateWord: 'aba', tape: ['□','a','b','a','□'], head: 1, status: 'ACCEPTED', activeNode: 'qf',
        },
        // 11 — ACEITA 'aab'
        {
          prof: { message: "Teste: 'aab'. Reverso esperado: 'baa'. A MT aceita com o cabeçote na 1ª posição. ✓ Lote B concluído!", mood: 'feliz' },
          stateUpdate: { nodes: L7_NFULL, transitions: L7_TFULL },
          simulateWord: 'aab', tape: ['□','b','a','a','□'], head: 1, status: 'ACCEPTED', activeNode: 'qf',
        },
        // 12 — formalIntro
        {
          prof: { message: "3 estados, 6 transições — q1 é simultaneamente o estado de Rewind e o scan-back. Vamos formalizar! 📝", mood: 'feliz' },
          stateUpdate: { nodes: L7_NFULL, transitions: L7_TFULL },
          formalIntro: true,
        },
        // 13 — Q, Σ, Γ
        {
          prof: { message: "Q = {q0, q1, qf}. Σ = {a, b}. Γ = {a, b, □} = Σ ∪ {□}: não escrevemos nenhum símbolo novo! O 'armazenamento' é feito pelos estados.", mood: 'explicando' },
          stateUpdate: { nodes: L7_NFULL, transitions: L7_TFULL },
          phase: 'FORMAL', formalFill: { states: '{q0, q1, qf}', sigma: '{a, b}', gamma: '{a, b, □}' },
        },
        // 14 — q0, □, F, δ
        {
          prof: { message: "q0 inicial, □ branco, F = {qf}. δ = 6 regras: q0 com a/b;R (varre direita) e □;□,L (inicia rewind); q1 com a/b;L (Rewind esquerda) e □;□,R (aceita). δ completa!", mood: 'explicando' },
          stateUpdate: { nodes: L7_NFULL, transitions: L7_TFULL },
          phase: 'FORMAL', formalFill: { initial: 'q0', blank: '□', final: '{qf}', delta: L7_TFULL },
        },
      ],
    },
  };

export default MT_L7;
