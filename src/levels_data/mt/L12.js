// ── L12: Subtracao Unaria (m#n → m-n, m >= n) ────────────────────────────────────────
const L12_Q0    = { uid: 'q0',     id: 'q0',     label: 'q0',     x: 10, y: 50, isInitial: true,  isFinal: false };
const L12_Q1    = { uid: 'q1',     id: 'q1',     label: 'q1',     x: 28, y: 50, isInitial: false, isFinal: false };
const L12_Q2    = { uid: 'q2',     id: 'q2',     label: 'q2',     x: 46, y: 50, isInitial: false, isFinal: false };
const L12_QCLN  = { uid: 'q_clean',id: 'q_clean',label: 'q_clean',x: 64, y: 50, isInitial: false, isFinal: false };
const L12_QRW   = { uid: 'q_rw',   id: 'q_rw',   label: 'q_rw',   x: 80, y: 50, isInitial: false, isFinal: false };
const L12_QF    = { uid: 'qf',     id: 'qf',     label: 'qf',     x: 94, y: 50, isInitial: false, isFinal: true  };

// q0: procura o proximo '1' nao marcado antes do '#'
// ao ler '1': marca com X e vai para q1 (encontrou par para cancelar)
// ao ler 'X': avanca (1 ja cancelado)
// ao ler '#': todos os '1's do lado esquerdo foram cancelados → vai para q_clean
const L12_E_Q0_1   = { from: 'q0',     to: 'q1',     read: '1', write: 'X', move: 'R' };
const L12_E_Q0_LX  = { from: 'q0',     to: 'q0',     read: 'X', write: 'X', move: 'R' };
const L12_E_Q0_H   = { from: 'q0',     to: 'q_clean',read: '#', write: '#', move: 'R' };

// q1: avanca passando por '1's e 'X's ate passar o '#', busca o proximo '1' de n
const L12_E_Q1_L1  = { from: 'q1',     to: 'q1',     read: '1', write: '1', move: 'R' };
const L12_E_Q1_LX  = { from: 'q1',     to: 'q1',     read: 'X', write: 'X', move: 'R' };
const L12_E_Q1_LH  = { from: 'q1',     to: 'q1',     read: '#', write: '#', move: 'R' };
const L12_E_Q1_1   = { from: 'q1',     to: 'q2',     read: '1', write: 'X', move: 'L' };
// se q1 chega em □ sem achar '1' livre em n: m > n disponivel, n esgotou -- trava (rejeita)

// q2: retorna para a esquerda (Rewind de ciclo) ate passar o '#' e chegar antes do proximo X/1 de m
const L12_E_Q2_L1  = { from: 'q2',     to: 'q2',     read: '1', write: '1', move: 'L' };
const L12_E_Q2_LX  = { from: 'q2',     to: 'q2',     read: 'X', write: 'X', move: 'L' };
const L12_E_Q2_LH  = { from: 'q2',     to: 'q2',     read: '#', write: '#', move: 'L' };
const L12_E_Q2_RET = { from: 'q2',     to: 'q0',     read: '□', write: '□', move: 'R' };

// q_clean: limpa X→apaga (□), '#'→apaga (□), '1's livres restantes ficam como resultado
// varre da esquerda para direita apagando X e '#'
const L12_E_CLN_X  = { from: 'q_clean',to: 'q_clean',read: 'X', write: '□', move: 'R' };
const L12_E_CLN_H  = { from: 'q_clean',to: 'q_clean',read: '#', write: '□', move: 'R' };
const L12_E_CLN_1  = { from: 'q_clean',to: 'q_clean',read: '1', write: '1', move: 'R' };
// ao chegar em □ direito: vai para q_rw que rebobina tudo
const L12_E_CLN_E  = { from: 'q_clean',to: 'q_rw',   read: '□', write: '□', move: 'L' };

// q_rw: Padrao Rewind -- varre esquerda ate □ inicial, aceita em qf
const L12_E_RW_1   = { from: 'q_rw',   to: 'q_rw',   read: '1', write: '1', move: 'L' };
const L12_E_RW_E   = { from: 'q_rw',   to: 'qf',     read: '□', write: '□', move: 'R' };

const L12_N0    = [L12_Q0];
const L12_N01   = [L12_Q0, L12_Q1];
const L12_N012  = [L12_Q0, L12_Q1, L12_Q2];
const L12_N_CLN = [L12_Q0, L12_Q1, L12_Q2, L12_QCLN];
const L12_N_RW  = [L12_Q0, L12_Q1, L12_Q2, L12_QCLN, L12_QRW];
const L12_NFULL = [L12_Q0, L12_Q1, L12_Q2, L12_QCLN, L12_QRW, L12_QF];

const L12_T0    = [L12_E_Q0_1, L12_E_Q0_LX];
const L12_T01   = [L12_E_Q0_1, L12_E_Q0_LX, L12_E_Q1_L1, L12_E_Q1_LX, L12_E_Q1_LH, L12_E_Q1_1];
const L12_T012  = [L12_E_Q0_1, L12_E_Q0_LX, L12_E_Q1_L1, L12_E_Q1_LX, L12_E_Q1_LH, L12_E_Q1_1,
                   L12_E_Q2_L1, L12_E_Q2_LX, L12_E_Q2_LH, L12_E_Q2_RET];
const L12_T0END = [L12_E_Q0_1, L12_E_Q0_LX, L12_E_Q0_H,
                   L12_E_Q1_L1, L12_E_Q1_LX, L12_E_Q1_LH, L12_E_Q1_1,
                   L12_E_Q2_L1, L12_E_Q2_LX, L12_E_Q2_LH, L12_E_Q2_RET];
const L12_TCLN  = [L12_E_Q0_1, L12_E_Q0_LX, L12_E_Q0_H,
                   L12_E_Q1_L1, L12_E_Q1_LX, L12_E_Q1_LH, L12_E_Q1_1,
                   L12_E_Q2_L1, L12_E_Q2_LX, L12_E_Q2_LH, L12_E_Q2_RET,
                   L12_E_CLN_X, L12_E_CLN_H, L12_E_CLN_1, L12_E_CLN_E];
const L12_T_RWL = [L12_E_Q0_1, L12_E_Q0_LX, L12_E_Q0_H,
                   L12_E_Q1_L1, L12_E_Q1_LX, L12_E_Q1_LH, L12_E_Q1_1,
                   L12_E_Q2_L1, L12_E_Q2_LX, L12_E_Q2_LH, L12_E_Q2_RET,
                   L12_E_CLN_X, L12_E_CLN_H, L12_E_CLN_1, L12_E_CLN_E,
                   L12_E_RW_1];
const L12_TFULL = [L12_E_Q0_1, L12_E_Q0_LX, L12_E_Q0_H,
                   L12_E_Q1_L1, L12_E_Q1_LX, L12_E_Q1_LH, L12_E_Q1_1,
                   L12_E_Q2_L1, L12_E_Q2_LX, L12_E_Q2_LH, L12_E_Q2_RET,
                   L12_E_CLN_X, L12_E_CLN_H, L12_E_CLN_1, L12_E_CLN_E,
                   L12_E_RW_1, L12_E_RW_E];

const MT_L12 = {
    id:           'MT_L12',
    label:        'L12',
    type:         'transducer',
    level:        'hard',
    alphabet:     ['1', '#'],
    tapeAlphabet: ['1', '#', 'X', '□'],
    description:  "Dada m#n com m >= n (unario), produza m-n. Ex: '1111#11' → '11'. Rejeita se m < n.",
    hint:         "Cancelamento par-a-par: q0 marca '1' em m com X, q1 marca '1' em n com X, q2 volta ao inicio do ciclo. Ao q0 ver '#' (m esgotado): q_clean apaga X e '#', q_rw rebobina e aceita.",
    validate:     (w) => {
      const parts = w.split('#');
      if (parts.length !== 2) return null;
      const m = parts[0].length;
      const n = parts[1].length;
      if (m < n) return null;
      return '1'.repeat(m - n);
    },
    testWords:    ['1111#11', '111#1', '11#11', '1#1'],
    formalDescription: {
      states:  '{q0, q1, q2, q_clean, q_rw, qf}',
      sigma:   '{1, #}',
      gamma:   '{1, #, X, □}',
      initial: 'q0',
      final:   '{qf}',
      blank:   '□',
    },
    guidedLesson: {
      steps: [
        // 0 -- Intro
        {
          prof: { message: "L12: Subtracao Unaria! '1111#11' representa 4-2 = 2, resultado '11'. Estrategia: cancelamento par-a-par -- marcamos um '1' de m com X e um '1' de n com X. Repetimos ate n se esgotar. O que sobrou em m e a resposta!", mood: 'explicando' },
          stateUpdate: { nodes: [], transitions: [] },
        },
        // 1 -- q0 marca primeiro '1' de m
        {
          prof: { message: "Testamos '1111#11'. q0 le o '1' da posicao 1, escreve 'X' (marcado!) e vai para q1 com movimento a direita. Fita: 'X111#11'. q1 precisa marcar um '1' de n.", mood: 'explicando' },
          stateUpdate: { nodes: L12_N01, transitions: L12_T01 },
          simulateWord: '1111#11', tape: ['□','X','1','1','1','#','1','1','□'], head: 2, activeNode: 'q1',
        },
        // 2 -- q1 atravessa tudo ate marcar '1' de n
        {
          prof: { message: "q1 avanca por '1's, 'X's e '#' sem alterar. Ao encontrar o primeiro '1' livre de n (pos 7): escreve 'X' e vai para q2 com movimento a esquerda. Par cancelado!", mood: 'explicando' },
          stateUpdate: { nodes: L12_N012, transitions: L12_T012 },
          simulateWord: '1111#11', tape: ['□','X','1','1','1','#','X','1','□'], head: 5, activeNode: 'q2',
        },
        // 3 -- q2 volta ao inicio para novo ciclo
        {
          prof: { message: "q2 e o 'Rewind de ciclo': varre de volta por '#', 'X's e '1's ate tocar □ inicial. Transicao □;□,R devolve para q0 -- pronto para o proximo par!", mood: 'explicando' },
          stateUpdate: { nodes: L12_N012, transitions: L12_T012 },
          simulateWord: '1111#11', tape: ['□','X','1','1','1','#','X','1','□'], head: 1, activeNode: 'q0',
        },
        // 4 -- segundo ciclo completo
        {
          prof: { message: "Segundo ciclo: q0 pula 'X' (ja marcado), marca o proximo '1' com X → pos 3. q1 atravessa tudo e marca o ultimo '1' de n → pos 8. q2 volta ao inicio. Fita: 'XX11#XX'.", mood: 'explicando' },
          stateUpdate: { nodes: L12_N012, transitions: L12_T0END },
          simulateWord: '1111#11', tape: ['□','X','X','1','1','#','X','X','□'], head: 1, activeNode: 'q0',
        },
        // 5 -- q0 ve '#': n esgotado → q_clean
        {
          prof: { message: "Terceiro ciclo: q0 pula 'X','X' e chega no '#'. Transicao #;#,R vai para q_clean! N esgotou -- o que restar de '1's livres no lado m e o resultado.", mood: 'explicando' },
          stateUpdate: { nodes: L12_N_CLN, transitions: L12_TCLN },
          simulateWord: '1111#11', tape: ['□','X','X','1','1','#','X','X','□'], head: 6, activeNode: 'q_clean',
        },
        // 6 -- q_clean apaga X e '#', preserva '1's livres, vai para q_rw
        {
          prof: { message: "q_clean varre para a direita: X→□ (apaga), #→□ (apaga), '1'→'1' (preserva). Ao tocar □ direito: vai para q_rw com movimento a esquerda. Os '11' do resultado ficam na fita!", mood: 'explicando' },
          stateUpdate: { nodes: L12_N_RW, transitions: L12_T_RWL },
          simulateWord: '1111#11', tape: ['□','□','□','1','1','□','□','□','□'], head: 4, activeNode: 'q_rw',
        },
        // 7 -- q_rw rebobina ate [] inicial → qf
        {
          prof: { message: "q_rw varre de volta por '1','1' ate tocar □ inicial. Transicao □;□,R vai para qf -- Padrao Rewind concluido! Resultado na 1a posicao.", mood: 'explicando' },
          stateUpdate: { nodes: L12_N_RW, transitions: L12_T_RWL },
          simulateWord: '1111#11', tape: ['□','□','□','1','1','□','□','□','□'], head: 0, activeNode: 'q_rw',
        },
        // 8 -- ACEITA '1111#11'
        {
          prof: { message: "qf aceita! Fita: '11' (nas posicoes 3-4). ACEITA! ✓ 4-2 = 2.", mood: 'feliz' },
          stateUpdate: { nodes: L12_NFULL, transitions: L12_TFULL },
          simulateWord: '1111#11', tape: ['□','□','□','1','1','□','□','□','□'], head: 3, status: 'ACCEPTED', activeNode: 'qf',
        },
        // 9 -- REJEITA '11#111' (m < n)
        {
          prof: { message: "Trava didatica! '11#111' representa 2-3 -- impossivel! q1 tenta marcar o 3o '1' de n mas encontra □ sem transicao. A MT PARA e REJEITA. Subtracao negativa nao e definida no dominio! ✗", mood: 'triste' },
          stateUpdate: { nodes: L12_NFULL, transitions: L12_TFULL },
          simulateWord: '11#111', tape: ['□','X','X','#','X','X','1','□'], head: 6, status: 'REJECTED', activeNode: 'q1',
        },
        // 10 -- formalIntro
        {
          prof: { message: "6 estados, 17 transicoes -- o algoritmo de cancelamento par-a-par generaliza para qualquer m >= n. Vamos formalizar! 📝", mood: 'feliz' },
          stateUpdate: { nodes: L12_NFULL, transitions: L12_TFULL },
          formalIntro: true,
        },
        // 11 -- Q, Sigma, Gamma, q0, [], F, delta
        {
          prof: { message: "Q = {q0, q1, q2, q_clean, q_rw, qf}. Σ = {1,#}. Γ = {1,#,X,□}: X e o marcador de cancelamento. q0 inicial, □ branco, F = {qf}. δ = 17 regras.", mood: 'explicando' },
          stateUpdate: { nodes: L12_NFULL, transitions: L12_TFULL },
          phase: 'FORMAL', formalFill: { states: '{q0, q1, q2, q_clean, q_rw, qf}', sigma: '{1, #}', gamma: '{1, #, X, □}', initial: 'q0', blank: '□', final: '{qf}', delta: L12_TFULL },
        },
      ],
    },
  };

export default MT_L12;
