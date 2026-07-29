// ── L2: Complemento Bit-a-Bit ─────────────────────────────────────────────────────
const L2_Q0   = { uid: 'q0',   id: 'q0',   label: 'q0',   x: 3937, y: 4000, isInitial: true,  isFinal: false };
const L2_QRW  = { uid: 'q_rw', id: 'q_rw', label: 'q_rw', x: 4000, y: 4000, isInitial: false, isFinal: false };
const L2_QF   = { uid: 'qf',   id: 'qf',   label: 'qf',   x: 4063, y: 4000, isInitial: false, isFinal: true  };

const L2_E_01    = { from: 'q0',   to: 'q0',   read: '0', write: '1', move: 'R' };
const L2_E_10    = { from: 'q0',   to: 'q0',   read: '1', write: '0', move: 'R' };
const L2_E_TO_RW = { from: 'q0',   to: 'q_rw', read: '□', write: '□', move: 'L' };
const L2_E_RW0   = { from: 'q_rw', to: 'q_rw', read: '0', write: '0', move: 'L' };
const L2_E_RW1   = { from: 'q_rw', to: 'q_rw', read: '1', write: '1', move: 'L' };
const L2_E_FIN   = { from: 'q_rw', to: 'qf',   read: '□', write: '□', move: 'R' };

const L2_N0    = [L2_Q0];
const L2_N0RW  = [L2_Q0, L2_QRW];
const L2_NFULL = [L2_Q0, L2_QRW, L2_QF];

const L2_T1    = [L2_E_01];
const L2_T2    = [L2_E_01, L2_E_10];
const L2_T_RW  = [L2_E_01, L2_E_10, L2_E_TO_RW];
const L2_T_RWL = [L2_E_01, L2_E_10, L2_E_TO_RW, L2_E_RW0, L2_E_RW1];
const L2_TFULL = [L2_E_01, L2_E_10, L2_E_TO_RW, L2_E_RW0, L2_E_RW1, L2_E_FIN];

const MT_L2 = {
    id:           'MT_L2',
    label:        'L2',
    type:         'transducer',
    level:        'easy',
    alphabet:     ['0', '1'],
    tapeAlphabet: ['0', '1', '□'],
    description:  'Inverta cada bit da entrada: 0 vira 1 e 1 vira 0.',
    hint:         'Use q0 com laços 0;1,R e 1;0,R. Ao encontrar □, entre em q_rw que rebobina o cabeçote ao início para então aceitar em qf.',
    skipEmptyWord: true,
    validate:     (w) => [...w].map(c => c === '0' ? '1' : '0').join(''),
    testWords:    ['010', '1', '0011', '1100'],
    formalDescription: {
      states:  '{q0, q_rw, qf}',
      sigma:   '{0, 1}',
      gamma:   '{0, 1, □}',
      initial: 'q0',
      final:   '{qf}',
      blank:   '□',
    },
    guidedLesson: {
      steps: [
        // 0 — Introdução
        {
          prof: { message: "L2: Complemento bit-a-bit! Cada '0' vira '1' e vice-versa. Usaremos 3 estados — incluindo q_rw, o estado de Rewind — para terminar com o cabeçote no início da fita.", mood: 'explicando' },
          stateUpdate: { nodes: [], transitions: [] },
        },
        // 1 — q0
        {
          prof: { message: "Criamos q0, o estado de trabalho. Toda a inversão acontece aqui em uma única varredura da esquerda para a direita.", mood: 'explicando' },
          stateUpdate: { nodes: L2_N0, transitions: [] },
          simulateWord: '010', tape: ['□', '0', '1', '0', '□'], head: 1, activeNode: 'q0',
        },
        // 2 — aresta 0;1,R
        {
          prof: { message: "Ao ler '0', escrevemos '1' e avançamos à direita. É o laço 0;1,R em q0.", mood: 'explicando' },
          stateUpdate: { nodes: L2_N0, transitions: L2_T1 },
          simulateWord: '010', tape: ['□', '0', '1', '0', '□'], head: 1, activeNode: 'q0',
        },
        // 3 — fita: lê '0', escreve '1'
        {
          prof: { message: "q0 leu '0', escreveu '1' e avançou. Agora lemos o '1' na posição seguinte.", mood: 'explicando' },
          stateUpdate: { nodes: L2_N0, transitions: L2_T1 },
          simulateWord: '010', tape: ['□', '1', '1', '0', '□'], head: 2, activeNode: 'q0',
        },
        // 4 — TRAVA: sem transição para '1'
        {
          prof: { message: "Travou! 😟 q0 só tem laço para '0'. Ao ler '1', não existe transição — a máquina PARA e REJEITA.", mood: 'triste' },
          stateUpdate: { nodes: L2_N0, transitions: L2_T1 },
          simulateWord: '010', tape: ['□', '1', '1', '0', '□'], head: 2, status: 'REJECTED', activeNode: 'q0',
        },
        // 5 — aresta 1;0,R
        {
          prof: { message: "A regra é simétrica: ao ler '1', escrevemos '0'. Adicionamos o laço 1;0,R em q0.", mood: 'explicando' },
          stateUpdate: { nodes: L2_N0, transitions: L2_T2 },
          simulateWord: '010', tape: ['□', '1', '1', '0', '□'], head: 2, activeNode: 'q0',
        },
        // 6 — fita: lê '1', escreve '0'
        {
          prof: { message: "q0 leu '1', escreveu '0' e avançou. Cabeçote no terceiro símbolo.", mood: 'explicando' },
          stateUpdate: { nodes: L2_N0, transitions: L2_T2 },
          simulateWord: '010', tape: ['□', '1', '0', '0', '□'], head: 3, activeNode: 'q0',
        },
        // 7 — fita: lê '0', escreve '1' → □
        {
          prof: { message: "q0 leu '0', escreveu '1' e avançou. Chegamos no branco (□): a complementação terminou!", mood: 'explicando' },
          stateUpdate: { nodes: L2_N0, transitions: L2_T2 },
          simulateWord: '010', tape: ['□', '1', '0', '1', '□'], head: 4, activeNode: 'q0',
        },
        // 8 — revela q_rw + □;□,L  ── PADRÃO REWIND
        {
          prof: { message: "Trabalho feito! Mas o padrão desta MT exige que o cabeçote fique NO INÍCIO da fita ao aceitar. Criamos q_rw e a aresta □;□,L: ao tocar o branco final, iniciamos o Rewind.", mood: 'explicando' },
          stateUpdate: { nodes: L2_N0RW, transitions: L2_T_RW },
          simulateWord: '010', tape: ['□', '1', '0', '1', '□'], head: 4, activeNode: 'q0',
        },
        // 9 — q0 → q_rw, head recuou
        {
          prof: { message: "q0 leu □, foi para q_rw e o cabeçote recuou para o último bit. Agora q_rw varre de volta até o branco inicial.", mood: 'explicando' },
          stateUpdate: { nodes: L2_N0RW, transitions: L2_T_RW },
          simulateWord: '010', tape: ['□', '1', '0', '1', '□'], head: 3, activeNode: 'q_rw',
        },
        // 10 — revela laços de rewind 0;0,L e 1;1,L
        {
          prof: { message: "Em q_rw, os laços 0;0,L e 1;1,L: o cabeçote recua célula a célula sem alterar o que já foi complementado.", mood: 'explicando' },
          stateUpdate: { nodes: L2_N0RW, transitions: L2_T_RWL },
          simulateWord: '010', tape: ['□', '1', '0', '1', '□'], head: 3, activeNode: 'q_rw',
        },
        // 11 — q_rw chegou no □ inicial
        {
          prof: { message: "q_rw varreu '1', '0', '1' da direita para a esquerda. Cabeçote bateu no branco INICIAL (□) — chegamos ao começo!", mood: 'explicando' },
          stateUpdate: { nodes: L2_N0RW, transitions: L2_T_RWL },
          simulateWord: '010', tape: ['□', '1', '0', '1', '□'], head: 0, activeNode: 'q_rw',
        },
        // 12 — revela qf + □;□,R
        {
          prof: { message: "Branco inicial encontrado! Criamos qf e a aresta □;□,R: avançamos um passo à direita e ACEITAMOS com o cabeçote na 1ª posição.", mood: 'explicando' },
          stateUpdate: { nodes: L2_NFULL, transitions: L2_TFULL },
          simulateWord: '010', tape: ['□', '1', '0', '1', '□'], head: 0, activeNode: 'q_rw',
        },
        // 13 — ACEITA '010'
        {
          prof: { message: "q_rw leu □, foi para qf e parou na 1ª posição. Fita: '101'. ACEITA! ✓ '010' complementado com o cabeçote no início da fita.", mood: 'feliz' },
          stateUpdate: { nodes: L2_NFULL, transitions: L2_TFULL },
          simulateWord: '010', tape: ['□', '1', '0', '1', '□'], head: 1, status: 'ACCEPTED', activeNode: 'qf',
        },
        // 14 — teste '1100'
        {
          prof: { message: "A mesma máquina para '1100'. Resultado esperado: '0011'. Começamos em q0 lendo o primeiro bit.", mood: 'serio' },
          stateUpdate: { nodes: L2_NFULL, transitions: L2_TFULL },
          simulateWord: '1100', tape: ['□', '1', '1', '0', '0', '□'], head: 1, activeNode: 'q0',
        },
        // 15 — ACEITA '1100'
        {
          prof: { message: "Fita: '0011'. q_rw voltou ao início e qf aceitou na 1ª posição. ACEITA! ✓ O Padrão Rewind é universal: toda MT deste projeto termina com o cabeçote na 1ª posição.", mood: 'feliz' },
          stateUpdate: { nodes: L2_NFULL, transitions: L2_TFULL },
          simulateWord: '1100', tape: ['□', '0', '0', '1', '1', '□'], head: 1, status: 'ACCEPTED', activeNode: 'qf',
        },
        // 16 — formalIntro
        {
          prof: { message: "Máquina finalizada! 🎉 Agora vamos formalizar a MT passo a passo.", mood: 'feliz' },
          stateUpdate: { nodes: L2_NFULL, transitions: L2_TFULL },
          formalIntro: true,
        },
        // 17 — Q e Σ
        {
          prof: { message: "Q = {q0, q_rw, qf}: 3 estados. q0 complementa, q_rw rebobina, qf aceita. Σ = {0, 1}: os dois dígitos binários.", mood: 'explicando' },
          stateUpdate: { nodes: L2_NFULL, transitions: L2_TFULL },
          phase: 'FORMAL', formalFill: { states: '{q0, q_rw, qf}', sigma: '{0, 1}' },
        },
        // 18 — Γ, q0, □, F
        {
          prof: { message: "Γ = {0, 1, □}: não introduzimos símbolo novo — Γ = Σ ∪ {□}. Estado inicial q0, branco □, F = {qf}.", mood: 'explicando' },
          stateUpdate: { nodes: L2_NFULL, transitions: L2_TFULL },
          phase: 'FORMAL', formalFill: { gamma: '{0, 1, □}', initial: 'q0', blank: '□', final: '{qf}' },
        },
        // 19 — δ completa
        {
          prof: { message: "δ tem 6 regras: q0 complementa (0→1,R e 1→0,R) e inicia rewind (□→□,L para q_rw); q_rw recua (0;0,L e 1;1,L) e aceita (□→□,R para qf). δ completa!", mood: 'explicando' },
          stateUpdate: { nodes: L2_NFULL, transitions: L2_TFULL },
          phase: 'FORMAL', formalFill: { delta: L2_TFULL },
        },
      ],
    },
  };

export default MT_L2;
