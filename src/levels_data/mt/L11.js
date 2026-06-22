// ── L11: Complemento de Dois ──────────────────────────────────────────────────────────
const L11_Q0   = { uid: 'q0',   id: 'q0',   label: 'q0',   x: 15, y: 50, isInitial: true,  isFinal: false };
const L11_QCR  = { uid: 'q_cr', id: 'q_cr', label: 'q_cr', x: 45, y: 50, isInitial: false, isFinal: false };
const L11_QRW  = { uid: 'q_rw', id: 'q_rw', label: 'q_rw', x: 72, y: 50, isInitial: false, isFinal: false };
const L11_QF   = { uid: 'qf',   id: 'qf',   label: 'qf',   x: 92, y: 50, isInitial: false, isFinal: true  };

// q0: flip de todos os bits (0<->1) avancando para a direita
const L11_E_Q0_0   = { from: 'q0',   to: 'q0',   read: '0', write: '1', move: 'R' };
const L11_E_Q0_1   = { from: 'q0',   to: 'q0',   read: '1', write: '0', move: 'R' };
const L11_E_Q0_END = { from: 'q0',   to: 'q_cr', read: '□', write: '□', move: 'L' };

// q_cr: propaga o +1 da direita para a esquerda (carry do complemento de 2)
// 0 -> 1 e absorve carry (vai para q_rw)
// 1 -> 0 e carry continua (permanece em q_cr)
// [] -> 1 (overflow improvavel mas coberto) e vai para q_rw
const L11_E_CR_0   = { from: 'q_cr', to: 'q_rw', read: '0', write: '1', move: 'L' };
const L11_E_CR_1   = { from: 'q_cr', to: 'q_cr', read: '1', write: '0', move: 'L' };
const L11_E_CR_OVF = { from: 'q_cr', to: 'q_rw', read: '□', write: '1', move: 'L' };

// q_rw: Padrao Rewind -- varre esquerda ate [] inicial, aceita em qf
const L11_E_RW_0   = { from: 'q_rw', to: 'q_rw', read: '0', write: '0', move: 'L' };
const L11_E_RW_1   = { from: 'q_rw', to: 'q_rw', read: '1', write: '1', move: 'L' };
const L11_E_RW_END = { from: 'q_rw', to: 'qf',   read: '□', write: '□', move: 'R' };

const L11_N0    = [L11_Q0];
const L11_N0CR  = [L11_Q0, L11_QCR];
const L11_N_RW  = [L11_Q0, L11_QCR, L11_QRW];
const L11_NFULL = [L11_Q0, L11_QCR, L11_QRW, L11_QF];

const L11_T0    = [L11_E_Q0_0, L11_E_Q0_1];
const L11_T0END = [L11_E_Q0_0, L11_E_Q0_1, L11_E_Q0_END];
const L11_TCR   = [L11_E_Q0_0, L11_E_Q0_1, L11_E_Q0_END, L11_E_CR_0, L11_E_CR_1, L11_E_CR_OVF];
const L11_T_RWL = [L11_E_Q0_0, L11_E_Q0_1, L11_E_Q0_END, L11_E_CR_0, L11_E_CR_1, L11_E_CR_OVF,
                   L11_E_RW_0, L11_E_RW_1];
const L11_TFULL = [L11_E_Q0_0, L11_E_Q0_1, L11_E_Q0_END, L11_E_CR_0, L11_E_CR_1, L11_E_CR_OVF,
                   L11_E_RW_0, L11_E_RW_1, L11_E_RW_END];

const MT_L11 = {
    id:           'MT_L11',
    label:        'L11',
    type:         'transducer',
    level:        'hard',
    alphabet:     ['0', '1'],
    tapeAlphabet: ['0', '1', '□'],
    description:  "Dado um numero binario, produza seu complemento de dois. Ex: '0101' → '1011'.",
    hint:         "q0 inverte todos os bits (0↔1, 1↔0) avancando. Ao ver □, recua para q_cr que propaga o +1: 1→0 (carry ativo), 0→1 (absorve carry, inicia Rewind). q_rw rebobina e qf aceita.",
    validate:     (w) => {
      if (!/^[01]+$/.test(w)) return null;
      const flipped = [...w].map(b => b === '0' ? '1' : '0').join('');
      const n = parseInt(flipped, 2) + 1;
      return n.toString(2).padStart(w.length, '0');
    },
    testWords:    ['0101', '0011', '1100', '0001'],
    formalDescription: {
      states:  '{q0, q_cr, q_rw, qf}',
      sigma:   '{0, 1}',
      gamma:   '{0, 1, □}',
      initial: 'q0',
      final:   '{qf}',
      blank:   '□',
    },
    guidedLesson: {
      steps: [
        // 0 -- Intro
        {
          prof: { message: "L11: Complemento de Dois! '0101' → '1011'. A regra: inverte todos os bits e soma 1. Dois passos: q0 faz o flip varrendo para a direita; q_cr propaga o +1 voltando para a esquerda.", mood: 'explicando' },
          stateUpdate: { nodes: [], transitions: [] },
        },
        // 1 -- q0 + fita '0101'
        {
          prof: { message: "Testamos '0101'. q0 inverte cada bit enquanto avanca: 0→1 e 1→0. Ao tocar □, recua para q_cr -- o flip esta completo, agora vem o +1.", mood: 'explicando' },
          stateUpdate: { nodes: L11_N0, transitions: L11_T0 },
          simulateWord: '0101', tape: ['□','0','1','0','1','□'], head: 1, activeNode: 'q0',
        },
        // 2 -- apos flip, entra q_cr
        {
          prof: { message: "q0 inverteu todos os bits. Fita apos flip: '1010'. Transicao □;□,L vai para q_cr -- cabeçote aponta para o bit menos significativo ('0'). Carry comeca!", mood: 'explicando' },
          stateUpdate: { nodes: L11_N0CR, transitions: L11_T0END },
          simulateWord: '0101', tape: ['□','1','0','1','0','□'], head: 4, activeNode: 'q_cr',
        },
        // 3 -- q_cr absorve carry no primeiro 0
        {
          prof: { message: "q_cr le '0': 0+1=1 -- absorve o carry! Escreve '1' e vai para q_rw com movimento a esquerda. Fita: '1011'. O Padrao Rewind comeca.", mood: 'explicando' },
          stateUpdate: { nodes: L11_N_RW, transitions: L11_TCR },
          simulateWord: '0101', tape: ['□','1','0','1','1','□'], head: 3, activeNode: 'q_rw',
        },
        // 4 -- q_rw rebobina
        {
          prof: { message: "q_rw varre de volta (loops 0;0,L e 1;1,L) ate tocar □ inicial. Transicao □;□,R vai para qf -- cabecote na 1a posicao!", mood: 'explicando' },
          stateUpdate: { nodes: L11_N_RW, transitions: L11_T_RWL },
          simulateWord: '0101', tape: ['□','1','0','1','1','□'], head: 0, activeNode: 'q_rw',
        },
        // 5 -- ACEITA '0101'
        {
          prof: { message: "qf aceita! Fita: '1011'. ACEITA! ✓ 0101₂ (5) em complemento de 2 e 1011₂ (-5).", mood: 'feliz' },
          stateUpdate: { nodes: L11_NFULL, transitions: L11_TFULL },
          simulateWord: '0101', tape: ['□','1','0','1','1','□'], head: 1, status: 'ACCEPTED', activeNode: 'qf',
        },
        // 6 -- caso carry se propaga: '0011' -> '1101'
        {
          prof: { message: "Teste: '0011' (3) -- complemento de 2 e 1101 (-3). Flip: '1100'. q_cr le '0' na pos 4, absorve carry. Fita final: '1101'. ACEITA! ✓", mood: 'serio' },
          stateUpdate: { nodes: L11_NFULL, transitions: L11_TFULL },
          simulateWord: '0011', tape: ['□','1','1','0','1','□'], head: 1, status: 'ACCEPTED', activeNode: 'qf',
        },
        // 7 -- caso carry percorre varios bits: '1100' -> '0100'
        {
          prof: { message: "Teste: '1100' (12) -- complemento de 2 e '0100' (-12). Flip: '0011'. q_cr: le '1'→0 (carry), le '1'→0 (carry), le '0'→1 (absorve). Fita: '0100'. ACEITA! ✓", mood: 'serio' },
          stateUpdate: { nodes: L11_NFULL, transitions: L11_TFULL },
          simulateWord: '1100', tape: ['□','0','1','0','0','□'], head: 1, status: 'ACCEPTED', activeNode: 'qf',
        },
        // 8 -- formalIntro
        {
          prof: { message: "4 estados, 9 transicoes -- flip + carry em dois passos lineares. Identico a L10 na estrutura! Vamos formalizar. 📝", mood: 'feliz' },
          stateUpdate: { nodes: L11_NFULL, transitions: L11_TFULL },
          formalIntro: true,
        },
        // 9 -- Q, Sigma, Gamma, q0, [], F, delta
        {
          prof: { message: "Q = {q0, q_cr, q_rw, qf}. Σ = {0,1}. Γ = {0,1,□}: sem auxiliares -- o carry e codificado no ESTADO q_cr. q0 inicial, □ branco, F = {qf}. δ = 9 regras.", mood: 'explicando' },
          stateUpdate: { nodes: L11_NFULL, transitions: L11_TFULL },
          phase: 'FORMAL', formalFill: { states: '{q0, q_cr, q_rw, qf}', sigma: '{0, 1}', gamma: '{0, 1, □}', initial: 'q0', blank: '□', final: '{qf}', delta: L11_TFULL },
        },
      ],
    },
  };

export default MT_L11;
