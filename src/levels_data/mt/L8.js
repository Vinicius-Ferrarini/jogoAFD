// ── L8: Duplicar w → ww ───────────────────────────────────────────────────────────────
const L8_Q0     = { uid: 'q0',     id: 'q0',     label: 'q0',     x: 10, y: 50, isInitial: true,  isFinal: false };
const L8_Q_CA   = { uid: 'q_ca',   id: 'q_ca',   label: 'q_ca',   x: 25, y: 25, isInitial: false, isFinal: false };
const L8_Q_CB   = { uid: 'q_cb',   id: 'q_cb',   label: 'q_cb',   x: 25, y: 75, isInitial: false, isFinal: false };
const L8_Q_RET  = { uid: 'q_ret',  id: 'q_ret',  label: 'q_ret',  x: 50, y: 50, isInitial: false, isFinal: false };
const L8_Q_CLN  = { uid: 'q_clean',id: 'q_clean',label: 'q_clean',x: 70, y: 50, isInitial: false, isFinal: false };
const L8_QF     = { uid: 'qf',     id: 'qf',     label: 'qf',     x: 90, y: 50, isInitial: false, isFinal: true  };

// q0: varre A/B já marcados (loop) + marca a→A,R e b→B,R + ao ver □ inicia limpeza
const L8_E_Q0_A    = { from: 'q0',     to: 'q_ca',   read: 'a', write: 'A', move: 'R' };
const L8_E_Q0_B    = { from: 'q0',     to: 'q_cb',   read: 'b', write: 'B', move: 'R' };
const L8_E_Q0_LA   = { from: 'q0',     to: 'q0',     read: 'A', write: 'A', move: 'R' };
const L8_E_Q0_LB   = { from: 'q0',     to: 'q0',     read: 'B', write: 'B', move: 'R' };
const L8_E_Q0_END  = { from: 'q0',     to: 'q_clean',read: '□', write: '□', move: 'L' };

// q_ca: copia 'a' — avança até □ direito e deposita 'a'
const L8_E_CA_LA   = { from: 'q_ca',   to: 'q_ca',   read: 'a', write: 'a', move: 'R' };
const L8_E_CA_LB   = { from: 'q_ca',   to: 'q_ca',   read: 'b', write: 'b', move: 'R' };
const L8_E_CA_LAA  = { from: 'q_ca',   to: 'q_ca',   read: 'A', write: 'A', move: 'R' };
const L8_E_CA_LBB  = { from: 'q_ca',   to: 'q_ca',   read: 'B', write: 'B', move: 'R' };
const L8_E_CA_DEP  = { from: 'q_ca',   to: 'q_ret',  read: '□', write: 'a', move: 'L' };

// q_cb: copia 'b' — avança até □ direito e deposita 'b'
const L8_E_CB_LA   = { from: 'q_cb',   to: 'q_cb',   read: 'a', write: 'a', move: 'R' };
const L8_E_CB_LB   = { from: 'q_cb',   to: 'q_cb',   read: 'b', write: 'b', move: 'R' };
const L8_E_CB_LAA  = { from: 'q_cb',   to: 'q_cb',   read: 'A', write: 'A', move: 'R' };
const L8_E_CB_LBB  = { from: 'q_cb',   to: 'q_cb',   read: 'B', write: 'B', move: 'R' };
const L8_E_CB_DEP  = { from: 'q_cb',   to: 'q_ret',  read: '□', write: 'b', move: 'L' };

// q_ret: volta à esquerda até encontrar A ou B, então avança (R) de volta a q0
const L8_E_RET_LA  = { from: 'q_ret',  to: 'q_ret',  read: 'a', write: 'a', move: 'L' };
const L8_E_RET_LB  = { from: 'q_ret',  to: 'q_ret',  read: 'b', write: 'b', move: 'L' };
const L8_E_RET_A   = { from: 'q_ret',  to: 'q0',     read: 'A', write: 'A', move: 'R' };
const L8_E_RET_B   = { from: 'q_ret',  to: 'q0',     read: 'B', write: 'B', move: 'R' };

// q_clean: varre da direita para esquerda limpando A→a e B→b; ao atingir □ inicial vai qf (já rebobinou)
const L8_E_CLN_LA  = { from: 'q_clean',to: 'q_clean',read: 'a', write: 'a', move: 'L' };
const L8_E_CLN_LB  = { from: 'q_clean',to: 'q_clean',read: 'b', write: 'b', move: 'L' };
const L8_E_CLN_A   = { from: 'q_clean',to: 'q_clean',read: 'A', write: 'a', move: 'L' };
const L8_E_CLN_B   = { from: 'q_clean',to: 'q_clean',read: 'B', write: 'b', move: 'L' };
const L8_E_CLN_END = { from: 'q_clean',to: 'qf',     read: '□', write: '□', move: 'R' };

const L8_N0      = [L8_Q0];
const L8_N0CA    = [L8_Q0, L8_Q_CA];
const L8_N_RET   = [L8_Q0, L8_Q_CA, L8_Q_CB, L8_Q_RET];
const L8_N_CLN   = [L8_Q0, L8_Q_CA, L8_Q_CB, L8_Q_RET, L8_Q_CLN];
const L8_NFULL   = [L8_Q0, L8_Q_CA, L8_Q_CB, L8_Q_RET, L8_Q_CLN, L8_QF];

const L8_TCA     = [L8_E_Q0_A, L8_E_Q0_B, L8_E_Q0_LA, L8_E_Q0_LB, L8_E_Q0_END,
                    L8_E_CA_LA, L8_E_CA_LB, L8_E_CA_LAA, L8_E_CA_LBB, L8_E_CA_DEP];
const L8_TRET    = [L8_E_Q0_A, L8_E_Q0_B, L8_E_Q0_LA, L8_E_Q0_LB, L8_E_Q0_END,
                    L8_E_CA_LA, L8_E_CA_LB, L8_E_CA_LAA, L8_E_CA_LBB, L8_E_CA_DEP,
                    L8_E_CB_LA, L8_E_CB_LB, L8_E_CB_LAA, L8_E_CB_LBB, L8_E_CB_DEP,
                    L8_E_RET_LA, L8_E_RET_LB, L8_E_RET_A, L8_E_RET_B];
const L8_TCLN    = [L8_E_Q0_A, L8_E_Q0_B, L8_E_Q0_LA, L8_E_Q0_LB, L8_E_Q0_END,
                    L8_E_CA_LA, L8_E_CA_LB, L8_E_CA_LAA, L8_E_CA_LBB, L8_E_CA_DEP,
                    L8_E_CB_LA, L8_E_CB_LB, L8_E_CB_LAA, L8_E_CB_LBB, L8_E_CB_DEP,
                    L8_E_RET_LA, L8_E_RET_LB, L8_E_RET_A, L8_E_RET_B,
                    L8_E_CLN_LA, L8_E_CLN_LB, L8_E_CLN_A, L8_E_CLN_B];
const L8_TFULL   = [L8_E_Q0_A, L8_E_Q0_B, L8_E_Q0_LA, L8_E_Q0_LB, L8_E_Q0_END,
                    L8_E_CA_LA, L8_E_CA_LB, L8_E_CA_LAA, L8_E_CA_LBB, L8_E_CA_DEP,
                    L8_E_CB_LA, L8_E_CB_LB, L8_E_CB_LAA, L8_E_CB_LBB, L8_E_CB_DEP,
                    L8_E_RET_LA, L8_E_RET_LB, L8_E_RET_A, L8_E_RET_B,
                    L8_E_CLN_LA, L8_E_CLN_LB, L8_E_CLN_A, L8_E_CLN_B, L8_E_CLN_END];

const MT_L8 = {
    id:           'MT_L8',
    label:        'L8',
    type:         'transducer',
    level:        'hard',
    alphabet:     ['a', 'b'],
    tapeAlphabet: ['a', 'b', 'A', 'B', '□'],
    description:  "Dada uma palavra w sobre {a,b}, produza ww (duplicação). Ex: 'ab' → 'abab'.",
    hint:         "Marque a→A,R e b→B,R e copie o símbolo ao fim. Volte pelo q_ret até o marcador e repita. Ao q0 ver □, limpe A/B→a/b com q_clean e aceite.",
    validate:     (w) => w + w,
    testWords:    ['ab', 'a', 'ba', 'aba'],
    formalDescription: {
      states:  '{q0, q_ca, q_cb, q_ret, q_clean, qf}',
      sigma:   '{a, b}',
      gamma:   '{a, b, A, B, □}',
      initial: 'q0',
      final:   '{qf}',
      blank:   '□',
    },
    guidedLesson: {
      steps: [
        // 0 — Intro
        {
          prof: { message: "L8: Duplicação! 'ab' → 'abab'. A ideia: marcar cada símbolo da palavra original (a→A, b→B), copiar ao fim, voltar e repetir. Quando todos estiverem marcados, limpamos as marcas e aceitamos.", mood: 'explicando' },
          stateUpdate: { nodes: [], transitions: [] },
        },
        // 1 — q0 + fita 'ab'
        {
          prof: { message: "Testamos 'ab'. q0 está no 'a'. Fase 1: q0 lê a/b, marca com A/B e vai para o estado copiadoR correspondente.", mood: 'explicando' },
          stateUpdate: { nodes: L8_N0, transitions: [] },
          simulateWord: 'ab', tape: ['□','a','b','□'], head: 1, activeNode: 'q0',
        },
        // 2 — q0 marca + q_ca/q_cb copiam
        {
          prof: { message: "q0 lê 'a'→escreve 'A',R e vai para q_ca (copiar 'a'). q_ca avança por toda a fita até □ e deposita 'a'. Depois vai para q_ret (retorno).", mood: 'explicando' },
          stateUpdate: { nodes: L8_N0CA, transitions: L8_TCA },
          simulateWord: 'ab', tape: ['□','A','b','a','□'], head: 2, activeNode: 'q_ret',
        },
        // 3 — q_ret volta até A/B e devolve q0
        {
          prof: { message: "q_ret varre de volta (esquerda) por a,b até tocar A ou B. Ao ver 'A', avança (R) e volta para q0 — pronto para marcar o próximo símbolo!", mood: 'explicando' },
          stateUpdate: { nodes: L8_N_RET, transitions: L8_TRET },
          simulateWord: 'ab', tape: ['□','A','b','a','□'], head: 2, activeNode: 'q0',
        },
        // 4 — itera: q0 marca 'b'→B, q_cb copia 'b'
        {
          prof: { message: "q0 lê 'b'→escreve 'B',R e vai para q_cb (copiar 'b'). q_cb avança até □ e deposita 'b'. q_ret volta até 'B' e devolve q0.", mood: 'explicando' },
          stateUpdate: { nodes: L8_N_RET, transitions: L8_TRET },
          simulateWord: 'ab', tape: ['□','A','B','a','b','□'], head: 3, activeNode: 'q0',
        },
        // 5 — q0 vê □ (todos marcados) → q_clean
        {
          prof: { message: "q0 avança pelos marcadores A,B (loops A;A,R e B;B,R) até tocar □. Todos os símbolos foram copiados! Transição □;□,L entra em q_clean para limpar as marcas.", mood: 'explicando' },
          stateUpdate: { nodes: L8_N_CLN, transitions: L8_TCLN },
          simulateWord: 'ab', tape: ['□','A','B','a','b','□'], head: 1, activeNode: 'q_clean',
        },
        // 6 — q_clean limpa A→a, B→b, recua até □ inicial → qf
        {
          prof: { message: "q_clean varre de volta (esquerda): converte A→a e B→b, passando por a/b sem alterar. Ao tocar □ inicial: Padrão Rewind completo! Transição □;□,R vai direto para qf.", mood: 'explicando' },
          stateUpdate: { nodes: L8_NFULL, transitions: L8_TFULL },
          simulateWord: 'ab', tape: ['□','a','b','a','b','□'], head: 0, activeNode: 'q_clean',
        },
        // 7 — ACEITA 'ab'
        {
          prof: { message: "qf aceita com o cabeçote na 1ª posição. Fita: 'abab'. ACEITA! ✓ 'ab' → 'abab'.", mood: 'feliz' },
          stateUpdate: { nodes: L8_NFULL, transitions: L8_TFULL },
          simulateWord: 'ab', tape: ['□','a','b','a','b','□'], head: 1, status: 'ACCEPTED', activeNode: 'qf',
        },
        // 8 — testa 'a' → 'aa'
        {
          prof: { message: "Teste rápido: 'a' → 'aa'. Um único símbolo — q0 marca, q_ca copia, q_ret volta, q0 vê □, q_clean limpa. ACEITA! ✓", mood: 'serio' },
          stateUpdate: { nodes: L8_NFULL, transitions: L8_TFULL },
          simulateWord: 'a', tape: ['□','a','a','□'], head: 1, status: 'ACCEPTED', activeNode: 'qf',
        },
        // 9 — formalIntro
        {
          prof: { message: "6 estados, 25 transições — a complexidade reflete a operação de cópia símbolo a símbolo. Vamos formalizar! 📝", mood: 'feliz' },
          stateUpdate: { nodes: L8_NFULL, transitions: L8_TFULL },
          formalIntro: true,
        },
        // 10 — Q, Σ, Γ, q0, □, F, δ
        {
          prof: { message: "Q = {q0, q_ca, q_cb, q_ret, q_clean, qf}. Σ = {a,b}. Γ = {a,b,A,B,□}: A e B são marcadores temporários. q0 inicial, □ branco, F = {qf}. δ = 25 regras.", mood: 'explicando' },
          stateUpdate: { nodes: L8_NFULL, transitions: L8_TFULL },
          phase: 'FORMAL', formalFill: { states: '{q0, q_ca, q_cb, q_ret, q_clean, qf}', sigma: '{a, b}', gamma: '{a, b, A, B, □}', initial: 'q0', blank: '□', final: '{qf}', delta: L8_TFULL },
        },
      ],
    },
  };

export default MT_L8;
