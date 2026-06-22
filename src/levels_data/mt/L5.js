// ── L5: Decremento Unário ──────────────────────────────────────────────────────────
const L5_Q0   = { uid: 'q0',   id: 'q0',   label: 'q0',   x: 15, y: 50, isInitial: true,  isFinal: false };
const L5_Q1   = { uid: 'q1',   id: 'q1',   label: 'q1',   x: 40, y: 50, isInitial: false, isFinal: false };
const L5_QRW  = { uid: 'q_rw', id: 'q_rw', label: 'q_rw', x: 65, y: 50, isInitial: false, isFinal: false };
const L5_QF   = { uid: 'qf',   id: 'qf',   label: 'qf',   x: 90, y: 50, isInitial: false, isFinal: true  };

const L5_E_LOOP  = { from: 'q0',   to: 'q0',   read: '1', write: '1', move: 'R' };
const L5_E_BACK  = { from: 'q0',   to: 'q1',   read: '□', write: '□', move: 'L' };
const L5_E_ERASE = { from: 'q1',   to: 'q_rw', read: '1', write: '□', move: 'L' };
const L5_E_RW1   = { from: 'q_rw', to: 'q_rw', read: '1', write: '1', move: 'L' };
const L5_E_FIN   = { from: 'q_rw', to: 'qf',   read: '□', write: '□', move: 'R' };

const L5_N0     = [L5_Q0];
const L5_N01    = [L5_Q0, L5_Q1];
const L5_N01RW  = [L5_Q0, L5_Q1, L5_QRW];
const L5_NFULL  = [L5_Q0, L5_Q1, L5_QRW, L5_QF];

const L5_T1    = [L5_E_LOOP];
const L5_T12   = [L5_E_LOOP, L5_E_BACK];
const L5_T_RW  = [L5_E_LOOP, L5_E_BACK, L5_E_ERASE];
const L5_T_RWL = [L5_E_LOOP, L5_E_BACK, L5_E_ERASE, L5_E_RW1];
const L5_TFULL = [L5_E_LOOP, L5_E_BACK, L5_E_ERASE, L5_E_RW1, L5_E_FIN];

const MT_L5 = {
    id:           'MT_L5',
    label:        'L5',
    type:         'transducer',
    level:        'medium',
    alphabet:     ['1'],
    tapeAlphabet: ['1', '□'],
    description:  "Dada uma sequência de '1's representando n, apague o último '1' e produza n−1.",
    hint:         "q0 varra até □, q1 recua (□;□,L) e apaga o último '1' indo para q_rw. q_rw rebobina ao início e qf aceita.",
    skipEmptyWord: true,
    validate:     (w) => w.length > 0 ? w.slice(0, -1) : '',
    testWords:    ['1111', '11', '1', '111'],
    formalDescription: {
      states:  '{q0, q1, q_rw, qf}',
      sigma:   '{1}',
      gamma:   '{1, □}',
      initial: 'q0',
      final:   '{qf}',
      blank:   '□',
    },
    guidedLesson: {
      steps: [
        // 0 — Intro
        {
          prof: { message: "L5: Decremento Unário! n '1's representam n. Queremos n−1: apagar o ÚLTIMO '1'. Usaremos 4 estados, incluindo q_rw para o Padrão Rewind.", mood: 'explicando' },
          stateUpdate: { nodes: [], transitions: [] },
        },
        // 1 — q0 + tape '1111'
        {
          prof: { message: "q0 é o varredor. Testamos '1111' (n=4). Esperado: '111' (n=3). q0 percorre todos os '1's até encontrar □.", mood: 'explicando' },
          stateUpdate: { nodes: L5_N0, transitions: [] },
          simulateWord: '1111', tape: ['□','1','1','1','1','□'], head: 1, activeNode: 'q0',
        },
        // 2 — loop 1;1,R
        {
          prof: { message: "Laço 1;1,R em q0: ao ler '1', reescreve '1' e avança à direita. Só percorremos — nenhuma alteração.", mood: 'explicando' },
          stateUpdate: { nodes: L5_N0, transitions: L5_T1 },
          simulateWord: '1111', tape: ['□','1','1','1','1','□'], head: 1, activeNode: 'q0',
        },
        // 3 — head no último '1'
        {
          prof: { message: "q0 varreu os três primeiros '1's. Cabeçote no último '1', prestes a tocar o □.", mood: 'explicando' },
          stateUpdate: { nodes: L5_N0, transitions: L5_T1 },
          simulateWord: '1111', tape: ['□','1','1','1','1','□'], head: 4, activeNode: 'q0',
        },
        // 4 — TRAVA sem q1
        {
          prof: { message: "Travou! 😟 q0 chegou no □ mas não tem transição para ele. Precisamos de um estado que saiba recuar até o último '1' para apagá-lo.", mood: 'triste' },
          stateUpdate: { nodes: L5_N0, transitions: L5_T1 },
          simulateWord: '1111', tape: ['□','1','1','1','1','□'], head: 5, status: 'REJECTED', activeNode: 'q0',
        },
        // 5 — revela q1 + □;□,L
        {
          prof: { message: "Ao ler □, RECUAMOS sem alterar: criamos q1 e a aresta □;□,L de q0 para q1. O cabeçote voltará um passo para o último '1'.", mood: 'explicando' },
          stateUpdate: { nodes: L5_N01, transitions: L5_T12 },
          simulateWord: '1111', tape: ['□','1','1','1','1','□'], head: 5, activeNode: 'q0',
        },
        // 6 — q1 no último '1'
        {
          prof: { message: "q0 leu □, foi para q1 e o cabeçote recuou para o ÚLTIMO '1'. Estamos exatamente onde precisamos para apagar.", mood: 'explicando' },
          stateUpdate: { nodes: L5_N01, transitions: L5_T12 },
          simulateWord: '1111', tape: ['□','1','1','1','1','□'], head: 4, activeNode: 'q1',
        },
        // 7 — revela q_rw + 1;□,L  ── PADRÃO REWIND
        {
          prof: { message: "Em q1: ao ler '1', APAGAMOS (escrevemos □) e entramos em q_rw com movimento à ESQUERDA. Aresta 1;□,L — o apagamento e o início do Rewind na mesma transição!", mood: 'explicando' },
          stateUpdate: { nodes: L5_N01RW, transitions: L5_T_RW },
          simulateWord: '1111', tape: ['□','1','1','1','1','□'], head: 4, activeNode: 'q1',
        },
        // 8 — q1 apagou, entrou em q_rw, head recuou
        {
          prof: { message: "q1 leu o último '1', escreveu □ e foi para q_rw recuando. Fita: '111□'. Cabeçote no '1' anterior — agora q_rw volta ao início.", mood: 'explicando' },
          stateUpdate: { nodes: L5_N01RW, transitions: L5_T_RW },
          simulateWord: '1111', tape: ['□','1','1','1','□','□'], head: 3, activeNode: 'q_rw',
        },
        // 9 — revela laço 1;1,L
        {
          prof: { message: "Em q_rw, o laço 1;1,L: recua pelos '1's restantes sem alterar nada, até bater no branco inicial.", mood: 'explicando' },
          stateUpdate: { nodes: L5_N01RW, transitions: L5_T_RWL },
          simulateWord: '1111', tape: ['□','1','1','1','□','□'], head: 3, activeNode: 'q_rw',
        },
        // 10 — q_rw chegou no □ inicial
        {
          prof: { message: "q_rw recuou por '1', '1', '1' e bateu no branco INICIAL — chegamos ao começo!", mood: 'explicando' },
          stateUpdate: { nodes: L5_N01RW, transitions: L5_T_RWL },
          simulateWord: '1111', tape: ['□','1','1','1','□','□'], head: 0, activeNode: 'q_rw',
        },
        // 11 — revela qf + □;□,R
        {
          prof: { message: "Branco inicial encontrado! Criamos qf e a aresta □;□,R: avançamos um passo e ACEITAMOS com o cabeçote na 1ª posição.", mood: 'explicando' },
          stateUpdate: { nodes: L5_NFULL, transitions: L5_TFULL },
          simulateWord: '1111', tape: ['□','1','1','1','□','□'], head: 0, activeNode: 'q_rw',
        },
        // 12 — ACEITA '1111'
        {
          prof: { message: "q_rw leu □, foi para qf e parou na 1ª posição. Fita: '111'. ACEITA! ✓ 4−1 = 3.", mood: 'feliz' },
          stateUpdate: { nodes: L5_NFULL, transitions: L5_TFULL },
          simulateWord: '1111', tape: ['□','1','1','1','□','□'], head: 1, status: 'ACCEPTED', activeNode: 'qf',
        },
        // 13 — teste '11' → '1'
        {
          prof: { message: "Teste rápido: '11' (n=2) → '1' (n=1). q0 varre, q1 recua, q_rw apaga e rebobina. ACEITA! ✓", mood: 'serio' },
          stateUpdate: { nodes: L5_NFULL, transitions: L5_TFULL },
          simulateWord: '11', tape: ['□','1','□','□'], head: 1, status: 'ACCEPTED', activeNode: 'qf',
        },
        // 14 — teste '1' → ''
        {
          prof: { message: "Caso mínimo: '1' (n=1) → '' (n=0). A MT apaga o único '1' e aceita com fita vazia de símbolos. ACEITA! ✓", mood: 'explicando' },
          stateUpdate: { nodes: L5_NFULL, transitions: L5_TFULL },
          simulateWord: '1', tape: ['□','□','□'], head: 1, status: 'ACCEPTED', activeNode: 'qf',
        },
        // 15 — formalIntro
        {
          prof: { message: "4 estados, 5 transições — o Padrão Rewind embutido no apagamento. Vamos formalizar a 7-tupla! 📝", mood: 'feliz' },
          stateUpdate: { nodes: L5_NFULL, transitions: L5_TFULL },
          formalIntro: true,
        },
        // 16 — Q, Σ, Γ
        {
          prof: { message: "Q = {q0, q1, q_rw, qf}. Σ = {1}: alfabeto minimal. Γ = {1, □}: a posição é controlada pelos estados — sem símbolo auxiliar!", mood: 'explicando' },
          stateUpdate: { nodes: L5_NFULL, transitions: L5_TFULL },
          phase: 'FORMAL', formalFill: { states: '{q0, q1, q_rw, qf}', sigma: '{1}', gamma: '{1, □}' },
        },
        // 17 — q0, □, F, δ
        {
          prof: { message: "q0 inicial, □ branco, F = {qf}. δ = 5 regras: q0 varre e vira; q1 apaga e inicia rewind; q_rw recua e aceita. δ completa!", mood: 'explicando' },
          stateUpdate: { nodes: L5_NFULL, transitions: L5_TFULL },
          phase: 'FORMAL', formalFill: { initial: 'q0', blank: '□', final: '{qf}', delta: L5_TFULL },
        },
      ],
    },
  };

export default MT_L5;
