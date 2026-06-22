// ── L3: Inserir '#' no Fim ─────────────────────────────────────────────────────────
const L3_Q0   = { uid: 'q0',   id: 'q0',   label: 'q0',   x: 15, y: 50, isInitial: true,  isFinal: false };
const L3_QRW  = { uid: 'q_rw', id: 'q_rw', label: 'q_rw', x: 50, y: 50, isInitial: false, isFinal: false };
const L3_QF   = { uid: 'qf',   id: 'qf',   label: 'qf',   x: 85, y: 50, isInitial: false, isFinal: true  };

const L3_E_A     = { from: 'q0',   to: 'q0',   read: 'a', write: 'a', move: 'R' };
const L3_E_B     = { from: 'q0',   to: 'q0',   read: 'b', write: 'b', move: 'R' };
const L3_E_WRITE = { from: 'q0',   to: 'q_rw', read: '□', write: '#', move: 'L' };
const L3_E_RWA   = { from: 'q_rw', to: 'q_rw', read: 'a', write: 'a', move: 'L' };
const L3_E_RWB   = { from: 'q_rw', to: 'q_rw', read: 'b', write: 'b', move: 'L' };
const L3_E_RWH   = { from: 'q_rw', to: 'q_rw', read: '#', write: '#', move: 'L' };
const L3_E_FIN   = { from: 'q_rw', to: 'qf',   read: '□', write: '□', move: 'R' };

const L3_N0    = [L3_Q0];
const L3_N0RW  = [L3_Q0, L3_QRW];
const L3_NFULL = [L3_Q0, L3_QRW, L3_QF];

const L3_T_AB   = [L3_E_A, L3_E_B];
const L3_T_RW   = [L3_E_A, L3_E_B, L3_E_WRITE];
const L3_T_RWL  = [L3_E_A, L3_E_B, L3_E_WRITE, L3_E_RWA, L3_E_RWB, L3_E_RWH];
const L3_TFULL  = [L3_E_A, L3_E_B, L3_E_WRITE, L3_E_RWA, L3_E_RWB, L3_E_RWH, L3_E_FIN];

const MT_L3 = {
    id:           'MT_L3',
    label:        'L3',
    type:         'transducer',
    level:        'easy',
    alphabet:     ['a', 'b'],
    tapeAlphabet: ['a', 'b', '#', '□'],
    description:  "Dada uma palavra qualquer com a e b, acrescente o símbolo '#' ao final.",
    hint:         "Use q0 com laços a;a,R e b;b,R. Ao encontrar □, escreva '#', entre em q_rw que rebobina ao início, e aceite em qf.",
    validate:     (w) => w + '#',
    testWords:    ['ab', 'a', 'bba', ''],
    formalDescription: {
      states:  '{q0, q_rw, qf}',
      sigma:   '{a, b}',
      gamma:   '{a, b, #, □}',
      initial: 'q0',
      final:   '{qf}',
      blank:   '□',
    },
    guidedLesson: {
      steps: [
        // 0 — Introdução
        {
          prof: { message: "L3: acrescentar '#' ao final. A MT não altera a palavra — só adiciona um marcador de fim. Depois aplica o Padrão Rewind para devolver o cabeçote ao início.", mood: 'explicando' },
          stateUpdate: { nodes: [], transitions: [] },
        },
        // 1 — q0
        {
          prof: { message: "q0 será nosso estado de varredura: avança pela fita sem alterar os símbolos até encontrar o branco.", mood: 'explicando' },
          stateUpdate: { nodes: L3_N0, transitions: [] },
          simulateWord: 'ab', tape: ['□', 'a', 'b', '□'], head: 1, activeNode: 'q0',
        },
        // 2 — loops a;a,R e b;b,R
        {
          prof: { message: "Adicionamos os laços a;a,R e b;b,R: ao ler 'a' ou 'b', reescrevemos o mesmo símbolo e avançamos.", mood: 'explicando' },
          stateUpdate: { nodes: L3_N0, transitions: L3_T_AB },
          simulateWord: 'ab', tape: ['□', 'a', 'b', '□'], head: 1, activeNode: 'q0',
        },
        // 3 — fita: lê 'a', avança
        {
          prof: { message: "q0 leu 'a', reescreveu 'a' (sem mudar) e avançou. Cabeçote no 'b'.", mood: 'explicando' },
          stateUpdate: { nodes: L3_N0, transitions: L3_T_AB },
          simulateWord: 'ab', tape: ['□', 'a', 'b', '□'], head: 2, activeNode: 'q0',
        },
        // 4 — fita: lê 'b', avança → □
        {
          prof: { message: "q0 leu 'b', reescreveu 'b' e avançou. Chegamos no branco (□): final da palavra!", mood: 'explicando' },
          stateUpdate: { nodes: L3_N0, transitions: L3_T_AB },
          simulateWord: 'ab', tape: ['□', 'a', 'b', '□'], head: 3, activeNode: 'q0',
        },
        // 5 — TRAVA: sem transição para □
        {
          prof: { message: "Travou! 😟 q0 não tem transição para □. A MT para e REJEITA — mas queríamos escrever '#' aqui!", mood: 'triste' },
          stateUpdate: { nodes: L3_N0, transitions: L3_T_AB },
          simulateWord: 'ab', tape: ['□', 'a', 'b', '□'], head: 3, status: 'REJECTED', activeNode: 'q0',
        },
        // 6 — revela q_rw + □;#,L  ── PADRÃO REWIND
        {
          prof: { message: "Ao encontrar □, ESCREVEMOS '#' e entramos em q_rw com movimento à ESQUERDA. Aresta □;#,L de q0 para q_rw — o '#' é inserido e o Rewind começa!", mood: 'explicando' },
          stateUpdate: { nodes: L3_N0RW, transitions: L3_T_RW },
          simulateWord: 'ab', tape: ['□', 'a', 'b', '□'], head: 3, activeNode: 'q0',
        },
        // 7 — q0 escreveu '#', entrou em q_rw, recuou
        {
          prof: { message: "q0 leu □, escreveu '#' e foi para q_rw recuando. Fita: 'ab#'. Cabeçote no 'b' — agora varremos de volta para a esquerda.", mood: 'explicando' },
          stateUpdate: { nodes: L3_N0RW, transitions: L3_T_RW },
          simulateWord: 'ab', tape: ['□', 'a', 'b', '#', '□'], head: 2, activeNode: 'q_rw',
        },
        // 8 — revela laços a;a,L, b;b,L, #;#,L
        {
          prof: { message: "Em q_rw, laços a;a,L e b;b,L varrem de volta sem alterar. O laço #;#,L cobre o '#' que escrevemos — nenhuma posição da fita é ignorada.", mood: 'explicando' },
          stateUpdate: { nodes: L3_N0RW, transitions: L3_T_RWL },
          simulateWord: 'ab', tape: ['□', 'a', 'b', '#', '□'], head: 2, activeNode: 'q_rw',
        },
        // 9 — q_rw chegou no □ inicial
        {
          prof: { message: "q_rw varreu 'b' e 'a' da direita para a esquerda. Cabeçote bateu no branco INICIAL (□) — chegamos ao começo!", mood: 'explicando' },
          stateUpdate: { nodes: L3_N0RW, transitions: L3_T_RWL },
          simulateWord: 'ab', tape: ['□', 'a', 'b', '#', '□'], head: 0, activeNode: 'q_rw',
        },
        // 10 — revela qf + □;□,R
        {
          prof: { message: "Branco inicial encontrado! Criamos qf e a aresta □;□,R: avançamos um passo à direita e ACEITAMOS com o cabeçote na 1ª posição.", mood: 'explicando' },
          stateUpdate: { nodes: L3_NFULL, transitions: L3_TFULL },
          simulateWord: 'ab', tape: ['□', 'a', 'b', '#', '□'], head: 0, activeNode: 'q_rw',
        },
        // 11 — ACEITA 'ab'
        {
          prof: { message: "q_rw leu □, foi para qf e parou na 1ª posição. Fita: 'ab#'. ACEITA! ✓", mood: 'feliz' },
          stateUpdate: { nodes: L3_NFULL, transitions: L3_TFULL },
          simulateWord: 'ab', tape: ['□', 'a', 'b', '#', '□'], head: 1, status: 'ACCEPTED', activeNode: 'qf',
        },
        // 12 — testa palavra vazia
        {
          prof: { message: "Caso especial: a palavra vazia (λ). q0 encontra □ imediatamente. Escreve '#' e recua para q_rw — que imediatamente bate no □ inicial.", mood: 'serio' },
          stateUpdate: { nodes: L3_NFULL, transitions: L3_TFULL },
          simulateWord: '', tape: ['□', '□'], head: 1, activeNode: 'q0',
        },
        // 13 — ACEITA ''
        {
          prof: { message: "q_rw encontrou □ imediatamente à esquerda, foi para qf e parou na posição 1 ('#'). λ → '#'. ACEITA! ✓", mood: 'feliz' },
          stateUpdate: { nodes: L3_NFULL, transitions: L3_TFULL },
          simulateWord: '', tape: ['□', '#', '□'], head: 1, status: 'ACCEPTED', activeNode: 'qf',
        },
        // 14 — ACEITA 'bba' (rápido)
        {
          prof: { message: "Último teste: 'bba' → 'bba#'. A máquina percorre 'b', 'b', 'a', escreve '#' e rebobina. ACEITA! ✓", mood: 'explicando' },
          stateUpdate: { nodes: L3_NFULL, transitions: L3_TFULL },
          simulateWord: 'bba', tape: ['□', 'b', 'b', 'a', '#', '□'], head: 1, status: 'ACCEPTED', activeNode: 'qf',
        },
        // 15 — formalIntro
        {
          prof: { message: "Perfeito! '#' serve como delimitador clássico em MTs mais complexas. Vamos formalizar a tupla. 📝", mood: 'feliz' },
          stateUpdate: { nodes: L3_NFULL, transitions: L3_TFULL },
          formalIntro: true,
        },
        // 16 — Q e Σ
        {
          prof: { message: "Q = {q0, q_rw, qf}: q0 varre, q_rw rebobina, qf aceita. Σ = {a, b}: os símbolos de entrada.", mood: 'explicando' },
          stateUpdate: { nodes: L3_NFULL, transitions: L3_TFULL },
          phase: 'FORMAL', formalFill: { states: '{q0, q_rw, qf}', sigma: '{a, b}' },
        },
        // 17 — Γ, q0, □, F
        {
          prof: { message: "Γ = {a, b, #, □}: inclui '#' que a MT ESCREVE mas nunca RECEBE como entrada. q0 inicial, □ branco, F = {qf}.", mood: 'explicando' },
          stateUpdate: { nodes: L3_NFULL, transitions: L3_TFULL },
          phase: 'FORMAL', formalFill: { gamma: '{a, b, #, □}', initial: 'q0', blank: '□', final: '{qf}' },
        },
        // 18 — δ
        {
          prof: { message: "δ tem 7 regras: q0 varre (a;a,R e b;b,R) e insere (□;#,L para q_rw); q_rw recua (a;a,L, b;b,L, #;#,L) e aceita (□;□,R para qf). δ completa!", mood: 'explicando' },
          stateUpdate: { nodes: L3_NFULL, transitions: L3_TFULL },
          phase: 'FORMAL', formalFill: { delta: L3_TFULL },
        },
      ],
    },
  };

export default MT_L3;
