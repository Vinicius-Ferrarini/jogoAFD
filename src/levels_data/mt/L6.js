// ── L6: Swap ab → ba ──────────────────────────────────────────────────────────────
const L6_Q0   = { uid: 'q0',   id: 'q0',   label: 'q0',   x: 10, y: 50, isInitial: true,  isFinal: false };
const L6_Q1   = { uid: 'q1',   id: 'q1',   label: 'q1',   x: 27, y: 50, isInitial: false, isFinal: false };
const L6_Q2   = { uid: 'q2',   id: 'q2',   label: 'q2',   x: 44, y: 50, isInitial: false, isFinal: false };
const L6_Q3   = { uid: 'q3',   id: 'q3',   label: 'q3',   x: 61, y: 50, isInitial: false, isFinal: false };
const L6_QRW  = { uid: 'q_rw', id: 'q_rw', label: 'q_rw', x: 78, y: 50, isInitial: false, isFinal: false };
const L6_QF   = { uid: 'qf',   id: 'qf',   label: 'qf',   x: 93, y: 50, isInitial: false, isFinal: true  };

const L6_E_AX  = { from: 'q0',   to: 'q1',   read: 'a', write: 'X', move: 'R' };
const L6_E_BY  = { from: 'q1',   to: 'q2',   read: 'b', write: 'Y', move: 'L' };
const L6_E_XB  = { from: 'q2',   to: 'q3',   read: 'X', write: 'b', move: 'R' };
const L6_E_YA  = { from: 'q3',   to: 'q_rw', read: 'Y', write: 'a', move: 'L' };
const L6_E_RWA = { from: 'q_rw', to: 'q_rw', read: 'a', write: 'a', move: 'L' };
const L6_E_RWB = { from: 'q_rw', to: 'q_rw', read: 'b', write: 'b', move: 'L' };
const L6_E_FIN = { from: 'q_rw', to: 'qf',   read: '□', write: '□', move: 'R' };

const L6_N0    = [L6_Q0];
const L6_N01   = [L6_Q0, L6_Q1];
const L6_N012  = [L6_Q0, L6_Q1, L6_Q2];
const L6_N0123 = [L6_Q0, L6_Q1, L6_Q2, L6_Q3];
const L6_N_RW  = [L6_Q0, L6_Q1, L6_Q2, L6_Q3, L6_QRW];
const L6_NFULL = [L6_Q0, L6_Q1, L6_Q2, L6_Q3, L6_QRW, L6_QF];

const L6_T1    = [L6_E_AX];
const L6_T2    = [L6_E_AX, L6_E_BY];
const L6_T3    = [L6_E_AX, L6_E_BY, L6_E_XB];
const L6_T_RW  = [L6_E_AX, L6_E_BY, L6_E_XB, L6_E_YA];
const L6_T_RWL = [L6_E_AX, L6_E_BY, L6_E_XB, L6_E_YA, L6_E_RWA, L6_E_RWB];
const L6_TFULL = [L6_E_AX, L6_E_BY, L6_E_XB, L6_E_YA, L6_E_RWA, L6_E_RWB, L6_E_FIN];

const MT_L6 = {
    id:           'MT_L6',
    label:        'L6',
    type:         'transducer',
    level:        'medium',
    alphabet:     ['a', 'b'],
    tapeAlphabet: ['a', 'b', 'X', 'Y', '□'],
    description:  "Dado exatamente 'ab', produza 'ba'. Introduz marcação temporária com X e Y.",
    hint:         "q0 lê 'a'→X,R (q1). q1 lê 'b'→Y,L (q2). q2 lê X→b,R (q3). q3 lê Y→a,L para q_rw. q_rw rebobina e qf aceita.",
    validate:     (w) => w === 'ab' ? 'ba' : null,
    testWords:    ['ab'],
    formalDescription: {
      states:  '{q0, q1, q2, q3, q_rw, qf}',
      sigma:   '{a, b}',
      gamma:   '{a, b, X, Y, □}',
      initial: 'q0',
      final:   '{qf}',
      blank:   '□',
    },
    guidedLesson: {
      steps: [
        // 0 — Intro
        {
          prof: { message: "L6: Swap! Queremos 'ab' → 'ba'. Com MARCAS TEMPORÁRIAS X e Y trocamos os símbolos de posição. Ao final, o Padrão Rewind devolve o cabeçote ao início.", mood: 'explicando' },
          stateUpdate: { nodes: [], transitions: [] },
        },
        // 1 — q0 + tape 'ab'
        {
          prof: { message: "Testamos 'ab'. q0 está no 'a'. A estratégia: marcar cada posição com X/Y e depois reescrever os símbolos corretos.", mood: 'explicando' },
          stateUpdate: { nodes: L6_N0, transitions: [] },
          simulateWord: 'ab', tape: ['□','a','b','□'], head: 1, activeNode: 'q0',
        },
        // 2 — aresta a;X,R (q0→q1)
        {
          prof: { message: "q0 lê 'a' e escreve 'X' — marca a posição 1. X diz: 'aqui havia um a'. Move à direita para q1.", mood: 'explicando' },
          stateUpdate: { nodes: L6_N01, transitions: L6_T1 },
          simulateWord: 'ab', tape: ['□','a','b','□'], head: 1, activeNode: 'q0',
        },
        // 3 — fita após q0: X em pos 1, head=2, q1
        {
          prof: { message: "q0 leu 'a', escreveu 'X' e avançou. Fita: '□Xb□'. Em q1 lendo 'b'.", mood: 'explicando' },
          stateUpdate: { nodes: L6_N01, transitions: L6_T1 },
          simulateWord: 'ab', tape: ['□','X','b','□'], head: 2, activeNode: 'q1',
        },
        // 4 — aresta b;Y,L (q1→q2)
        {
          prof: { message: "q1 lê 'b' e escreve 'Y' — marca a posição 2. Y diz: 'aqui havia um b'. Move à ESQUERDA para q2.", mood: 'explicando' },
          stateUpdate: { nodes: L6_N012, transitions: L6_T2 },
          simulateWord: 'ab', tape: ['□','X','b','□'], head: 2, activeNode: 'q1',
        },
        // 5 — fita após q1: Y em pos 2, head=1, q2
        {
          prof: { message: "q1 leu 'b', escreveu 'Y' e recuou. Fita: '□XY□'. Em q2, lendo 'X'.", mood: 'explicando' },
          stateUpdate: { nodes: L6_N012, transitions: L6_T2 },
          simulateWord: 'ab', tape: ['□','X','Y','□'], head: 1, activeNode: 'q2',
        },
        // 6 — aresta X;b,R (q2→q3)
        {
          prof: { message: "q2 lê 'X' e escreve 'b' — deposita o símbolo da SEGUNDA posição na PRIMEIRA! Move à direita para q3.", mood: 'explicando' },
          stateUpdate: { nodes: L6_N0123, transitions: L6_T3 },
          simulateWord: 'ab', tape: ['□','X','Y','□'], head: 1, activeNode: 'q2',
        },
        // 7 — fita após q2: b em pos 1, head=2, q3
        {
          prof: { message: "q2 leu 'X', escreveu 'b' e avançou. Fita: '□bY□'. Em q3, lendo 'Y'.", mood: 'explicando' },
          stateUpdate: { nodes: L6_N0123, transitions: L6_T3 },
          simulateWord: 'ab', tape: ['□','b','Y','□'], head: 2, activeNode: 'q3',
        },
        // 8 — aresta Y;a,L (q3→q_rw)  ── PADRÃO REWIND
        {
          prof: { message: "q3 lê 'Y' e escreve 'a' — deposita o símbolo da PRIMEIRA posição na SEGUNDA! Swap concluído. Agora move à ESQUERDA para q_rw: inicia o Rewind!", mood: 'explicando' },
          stateUpdate: { nodes: L6_N_RW, transitions: L6_T_RW },
          simulateWord: 'ab', tape: ['□','b','Y','□'], head: 2, activeNode: 'q3',
        },
        // 9 — q3 → q_rw, head em 'b'
        {
          prof: { message: "q3 leu 'Y', escreveu 'a' e foi para q_rw recuando. Fita: '□ba□'. Cabeçote no 'b' — agora q_rw varre de volta ao início.", mood: 'explicando' },
          stateUpdate: { nodes: L6_N_RW, transitions: L6_T_RW },
          simulateWord: 'ab', tape: ['□','b','a','□'], head: 1, activeNode: 'q_rw',
        },
        // 10 — revela laços a;a,L e b;b,L
        {
          prof: { message: "Em q_rw, laços a;a,L e b;b,L: o cabeçote recua pela fita já trocada sem alterar nada.", mood: 'explicando' },
          stateUpdate: { nodes: L6_N_RW, transitions: L6_T_RWL },
          simulateWord: 'ab', tape: ['□','b','a','□'], head: 1, activeNode: 'q_rw',
        },
        // 11 — q_rw chegou no □ inicial
        {
          prof: { message: "q_rw leu 'b' e recuou. Cabeçote bateu no branco INICIAL — chegamos ao começo!", mood: 'explicando' },
          stateUpdate: { nodes: L6_N_RW, transitions: L6_T_RWL },
          simulateWord: 'ab', tape: ['□','b','a','□'], head: 0, activeNode: 'q_rw',
        },
        // 12 — revela qf + □;□,R
        {
          prof: { message: "Branco inicial encontrado! Criamos qf e a aresta □;□,R: avançamos um passo e ACEITAMOS com o cabeçote na 1ª posição.", mood: 'explicando' },
          stateUpdate: { nodes: L6_NFULL, transitions: L6_TFULL },
          simulateWord: 'ab', tape: ['□','b','a','□'], head: 0, activeNode: 'q_rw',
        },
        // 13 — ACEITA 'ab'
        {
          prof: { message: "q_rw leu □, foi para qf e parou na 1ª posição. Fita final: 'ba'. ACEITA! ✓ 'ab' → 'ba' com cabeçote no início.", mood: 'feliz' },
          stateUpdate: { nodes: L6_NFULL, transitions: L6_TFULL },
          simulateWord: 'ab', tape: ['□','b','a','□'], head: 1, status: 'ACCEPTED', activeNode: 'qf',
        },
        // 14 — REJEITA 'ba'
        {
          prof: { message: "Tentamos 'ba'. q0 lê 'b' — mas a única aresta de q0 é para 'a'! Sem transição → MT REJEITA. Esta máquina é especializada para exatamente 'ab'.", mood: 'serio' },
          stateUpdate: { nodes: L6_NFULL, transitions: L6_TFULL },
          simulateWord: 'ba', tape: ['□','b','a','□'], head: 1, status: 'REJECTED', activeNode: 'q0',
        },
        // 15 — formalIntro
        {
          prof: { message: "6 estados, 7 transições — cada estado tem uma responsabilidade clara. L7 generalizará este padrão. Vamos formalizar! 📝", mood: 'feliz' },
          stateUpdate: { nodes: L6_NFULL, transitions: L6_TFULL },
          formalIntro: true,
        },
        // 16 — Q, Σ
        {
          prof: { message: "Q = {q0, q1, q2, q3, q_rw, qf}: cada estado é uma 'fase' do swap ou do rewind. Σ = {a, b}: alfabeto de entrada.", mood: 'explicando' },
          stateUpdate: { nodes: L6_NFULL, transitions: L6_TFULL },
          phase: 'FORMAL', formalFill: { states: '{q0, q1, q2, q3, q_rw, qf}', sigma: '{a, b}' },
        },
        // 17 — Γ, q0, □, F
        {
          prof: { message: "Γ = {a, b, X, Y, □}: inclui X e Y, símbolos auxiliares de marcação. q0 inicial, □ branco, F = {qf}.", mood: 'explicando' },
          stateUpdate: { nodes: L6_NFULL, transitions: L6_TFULL },
          phase: 'FORMAL', formalFill: { gamma: '{a, b, X, Y, □}', initial: 'q0', blank: '□', final: '{qf}' },
        },
        // 18 — δ
        {
          prof: { message: "δ = 7 transições: a;X,R (marca), b;Y,L (marca e recua), X;b,R (deposita), Y;a,L para q_rw (deposita e inicia rewind); q_rw com a/b;L (recua) e □;□,R para qf (aceita). δ completa!", mood: 'explicando' },
          stateUpdate: { nodes: L6_NFULL, transitions: L6_TFULL },
          phase: 'FORMAL', formalFill: { delta: L6_TFULL },
        },
      ],
    },
  };

export default MT_L6;
