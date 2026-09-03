// ── L2: Complemento Bit-a-Bit ─────────────────────────────────────────────────────
import { buildTransducerSim } from './buildTransducerSim.js';

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
        // 11 — q_rw varre o último '1' à ESQUERDA
        {
          prof: { message: "q_rw leu '1', manteve '1' e moveu à ESQUERDA (laço 1;1,L). O cabeçote recua UMA célula por vez.", mood: 'explicando' },
          stateUpdate: { nodes: L2_N0RW, transitions: L2_T_RWL },
          simulateWord: '010', tape: ['□', '1', '0', '1', '□'], head: 2, activeNode: 'q_rw',
        },
        // 12 — q_rw varre o '0' à ESQUERDA
        {
          prof: { message: "q_rw leu '0', manteve '0' e moveu à ESQUERDA (laço 0;0,L).", mood: 'explicando' },
          stateUpdate: { nodes: L2_N0RW, transitions: L2_T_RWL },
          simulateWord: '010', tape: ['□', '1', '0', '1', '□'], head: 1, activeNode: 'q_rw',
        },
        // 13 — q_rw varre o 1º '1' e bate no branco INICIAL
        {
          prof: { message: "q_rw leu '1', manteve '1' e moveu à ESQUERDA. Cabeçote bateu no branco INICIAL (□) — chegamos ao começo!", mood: 'explicando' },
          stateUpdate: { nodes: L2_N0RW, transitions: L2_T_RWL },
          simulateWord: '010', tape: ['□', '1', '0', '1', '□'], head: 0, activeNode: 'q_rw',
        },
        // 14 — revela qf + □;□,R
        {
          prof: { message: "Branco inicial encontrado! Criamos qf e a aresta □;□,R: avançamos um passo à direita e ACEITAMOS com o cabeçote na 1ª posição.", mood: 'explicando' },
          stateUpdate: { nodes: L2_NFULL, transitions: L2_TFULL },
          simulateWord: '010', tape: ['□', '1', '0', '1', '□'], head: 0, activeNode: 'q_rw',
        },
        // 15 — ACEITA '010'
        {
          prof: { message: "q_rw leu □, foi para qf e parou na 1ª posição. Fita: '101'. ACEITA! ✓ '010' complementado com o cabeçote no início da fita.", mood: 'feliz' },
          stateUpdate: { nodes: L2_NFULL, transitions: L2_TFULL },
          simulateWord: '010', tape: ['□', '1', '0', '1', '□'], head: 1, status: 'ACCEPTED', activeNode: 'qf',
        },

        // 16+ — teste '1100' com a máquina completa, transição por transição
        ...buildTransducerSim('1100', {
          nodes: L2_NFULL, transitions: L2_TFULL,
          leadingBlanks: 1, trailingBlanks: 1,
          introMessage: "A mesma máquina para '1100'. Resultado esperado: '0011'. Vamos rodar transição por transição.",
          introMood: 'serio',
        }),

        // formalIntro
        {
          prof: { message: "Máquina finalizada! 🎉 Agora vamos formalizar a MT, campo por campo.", mood: 'feliz' },
          stateUpdate: { nodes: L2_NFULL, transitions: L2_TFULL },
          formalIntro: true,
        },
        // FORMAL — Q
        {
          prof: { message: "Q é o conjunto de ESTADOS: {q0, q_rw, qf}. q0 complementa, q_rw rebobina, qf aceita.", mood: 'explicando' },
          stateUpdate: { nodes: L2_NFULL, transitions: L2_TFULL },
          phase: 'FORMAL', formalFill: { states: '{q0, q_rw, qf}' },
        },
        // FORMAL — Σ
        {
          prof: { message: "Σ é o alfabeto de ENTRADA: {0, 1} — os dois dígitos binários.", mood: 'explicando' },
          stateUpdate: { nodes: L2_NFULL, transitions: L2_TFULL },
          phase: 'FORMAL', formalFill: { sigma: '{0, 1}' },
        },
        // FORMAL — Γ
        {
          prof: { message: "Γ é o alfabeto da FITA: {0, 1, □}. Não introduzimos símbolo novo — Γ = Σ ∪ {□}.", mood: 'explicando' },
          stateUpdate: { nodes: L2_NFULL, transitions: L2_TFULL },
          phase: 'FORMAL', formalFill: { gamma: '{0, 1, □}' },
        },
        // FORMAL — q0
        {
          prof: { message: "q0 é o estado INICIAL, onde a complementação acontece.", mood: 'explicando' },
          stateUpdate: { nodes: L2_NFULL, transitions: L2_TFULL },
          phase: 'FORMAL', formalFill: { initial: 'q0' },
        },
        // FORMAL — □
        {
          prof: { message: "O símbolo BRANCO (□) marca as células vazias da fita.", mood: 'explicando' },
          stateUpdate: { nodes: L2_NFULL, transitions: L2_TFULL },
          phase: 'FORMAL', formalFill: { blank: '□' },
        },
        // FORMAL — F
        {
          prof: { message: "F é o conjunto de estados de ACEITAÇÃO: {qf}.", mood: 'explicando' },
          stateUpdate: { nodes: L2_NFULL, transitions: L2_TFULL },
          phase: 'FORMAL', formalFill: { final: '{qf}' },
        },
        // FORMAL — δ parte 1 (q0: complementa + inicia rewind)
        {
          prof: { message: "δ, linha por linha. Em q0: 0;1,R e 1;0,R (complementa cada bit) e □;□,L para q_rw (chegou no fim → rebobinar).", mood: 'explicando' },
          stateUpdate: { nodes: L2_NFULL, transitions: L2_TFULL },
          phase: 'FORMAL', formalFill: { delta: L2_T_RW },
        },
        // FORMAL — δ parte 2 (q_rw: recua e aceita)
        {
          prof: { message: "Em q_rw: 0;0,L e 1;1,L (recua sem alterar) e □;□,R para qf (bateu no branco inicial → aceita na 1ª posição). δ completa!", mood: 'feliz' },
          stateUpdate: { nodes: L2_NFULL, transitions: L2_TFULL },
          phase: 'FORMAL', formalFill: { delta: L2_TFULL },
        },
      ],
    },
  };

export default MT_L2;
