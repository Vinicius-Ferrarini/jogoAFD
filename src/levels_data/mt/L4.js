// ── L4: Incremento Unário ──────────────────────────────────────────────────────────
const L4_Q0   = { uid: 'q0',   id: 'q0',   label: 'q0',   x: 15, y: 50, isInitial: true,  isFinal: false };
const L4_QRW  = { uid: 'q_rw', id: 'q_rw', label: 'q_rw', x: 50, y: 50, isInitial: false, isFinal: false };
const L4_QF   = { uid: 'qf',   id: 'qf',   label: 'qf',   x: 85, y: 50, isInitial: false, isFinal: true  };

const L4_E_1     = { from: 'q0',   to: 'q0',   read: '1', write: '1', move: 'R' };
const L4_E_TO_RW = { from: 'q0',   to: 'q_rw', read: '□', write: '1', move: 'L' };
const L4_E_RW1   = { from: 'q_rw', to: 'q_rw', read: '1', write: '1', move: 'L' };
const L4_E_FIN   = { from: 'q_rw', to: 'qf',   read: '□', write: '□', move: 'R' };

const L4_N0    = [L4_Q0];
const L4_N0RW  = [L4_Q0, L4_QRW];
const L4_NFULL = [L4_Q0, L4_QRW, L4_QF];

const L4_T1    = [L4_E_1];
const L4_T_RW  = [L4_E_1, L4_E_TO_RW];
const L4_T_RWL = [L4_E_1, L4_E_TO_RW, L4_E_RW1];
const L4_TFULL = [L4_E_1, L4_E_TO_RW, L4_E_RW1, L4_E_FIN];

const MT_L4 = {
    id:           'MT_L4',
    label:        'L4',
    type:         'transducer',
    level:        'easy',
    alphabet:     ['1'],
    tapeAlphabet: ['1', '□'],
    description:  "Dada uma sequência de '1's representando o número n, produza n+1 (acrescente um '1' ao final).",
    hint:         "Use q0 com laço 1;1,R para varrer os '1's. Ao encontrar □, escreva '1', entre em q_rw que rebobina ao início, e aceite em qf.",
    validate:     (w) => w + '1',
    testWords:    ['1', '111', '11111', ''],
    formalDescription: {
      states:  '{q0, q_rw, qf}',
      sigma:   '{1}',
      gamma:   '{1, □}',
      initial: 'q0',
      final:   '{qf}',
      blank:   '□',
    },
    guidedLesson: {
      steps: [
        // 0 — Introdução
        {
          prof: { message: "L4: Incremento Unário! Em notação unária, n é representado por n '1's na fita. Vamos implementar n+1, terminando com o cabeçote no início via Padrão Rewind.", mood: 'explicando' },
          stateUpdate: { nodes: [], transitions: [] },
        },
        // 1 — q0
        {
          prof: { message: "q0 é o estado de varredura. Ele avança pela fita lendo cada '1' até encontrar o branco que marca o fim.", mood: 'explicando' },
          stateUpdate: { nodes: L4_N0, transitions: [] },
          simulateWord: '111', tape: ['□', '1', '1', '1', '□'], head: 1, activeNode: 'q0',
        },
        // 2 — loop 1;1,R
        {
          prof: { message: "Adicionamos o laço 1;1,R: ao ler '1', reescrevemos '1' sem alterar e avançamos. Só estamos 'contando' o tamanho.", mood: 'explicando' },
          stateUpdate: { nodes: L4_N0, transitions: L4_T1 },
          simulateWord: '111', tape: ['□', '1', '1', '1', '□'], head: 1, activeNode: 'q0',
        },
        // 3 — head=3 (próximo do □)
        {
          prof: { message: "q0 varreu dois '1's. Cabeçote no terceiro '1', prestes a tocar o branco.", mood: 'explicando' },
          stateUpdate: { nodes: L4_N0, transitions: L4_T1 },
          simulateWord: '111', tape: ['□', '1', '1', '1', '□'], head: 3, activeNode: 'q0',
        },
        // 4 — TRAVA
        {
          prof: { message: "q0 chegou no □ — mas não tem transição para ele. A MT PARA e REJEITA. Precisamos do estado que acrescenta '1' e rebobina!", mood: 'triste' },
          stateUpdate: { nodes: L4_N0, transitions: L4_T1 },
          simulateWord: '111', tape: ['□', '1', '1', '1', '□'], head: 4, status: 'REJECTED', activeNode: 'q0',
        },
        // 5 — revela q_rw + □;1,L  ── PADRÃO REWIND
        {
          prof: { message: "No branco: ESCREVEMOS '1' extra e entramos em q_rw com movimento à ESQUERDA. Aresta □;1,L — o incremento e o Rewind acontecem na mesma transição!", mood: 'explicando' },
          stateUpdate: { nodes: L4_N0RW, transitions: L4_T_RW },
          simulateWord: '111', tape: ['□', '1', '1', '1', '□'], head: 4, activeNode: 'q0',
        },
        // 6 — q0 escreveu '1', entrou em q_rw, head recuou
        {
          prof: { message: "q0 leu □, escreveu '1' e foi para q_rw recuando. Fita: '1111'. Cabeçote no '1' recém-escrito — agora q_rw volta ao início.", mood: 'explicando' },
          stateUpdate: { nodes: L4_N0RW, transitions: L4_T_RW },
          simulateWord: '111', tape: ['□', '1', '1', '1', '1', '□'], head: 3, activeNode: 'q_rw',
        },
        // 7 — revela laço 1;1,L
        {
          prof: { message: "Em q_rw, o laço 1;1,L: recua pelos '1's da fita sem alterar nada, até bater no branco inicial.", mood: 'explicando' },
          stateUpdate: { nodes: L4_N0RW, transitions: L4_T_RWL },
          simulateWord: '111', tape: ['□', '1', '1', '1', '1', '□'], head: 3, activeNode: 'q_rw',
        },
        // 8 — q_rw chegou no □ inicial
        {
          prof: { message: "q_rw recuou por '1', '1', '1', '1' e bateu no branco INICIAL — chegamos ao começo da fita!", mood: 'explicando' },
          stateUpdate: { nodes: L4_N0RW, transitions: L4_T_RWL },
          simulateWord: '111', tape: ['□', '1', '1', '1', '1', '□'], head: 0, activeNode: 'q_rw',
        },
        // 9 — revela qf + □;□,R
        {
          prof: { message: "Branco inicial encontrado! Criamos qf e a aresta □;□,R: avançamos um passo e ACEITAMOS com o cabeçote na 1ª posição.", mood: 'explicando' },
          stateUpdate: { nodes: L4_NFULL, transitions: L4_TFULL },
          simulateWord: '111', tape: ['□', '1', '1', '1', '1', '□'], head: 0, activeNode: 'q_rw',
        },
        // 10 — ACEITA '111'
        {
          prof: { message: "q_rw leu □, foi para qf e parou na 1ª posição. Fita: '1111'. ACEITA! ✓ 3+1 = 4.", mood: 'feliz' },
          stateUpdate: { nodes: L4_NFULL, transitions: L4_TFULL },
          simulateWord: '111', tape: ['□', '1', '1', '1', '1', '□'], head: 1, status: 'ACCEPTED', activeNode: 'qf',
        },
        // 11 — testa '1' (1→11)
        {
          prof: { message: "Testamos '1': o número 1. A MT deve produzir '11' (= 2).", mood: 'serio' },
          stateUpdate: { nodes: L4_NFULL, transitions: L4_TFULL },
          simulateWord: '1', tape: ['□', '1', '□'], head: 1, activeNode: 'q0',
        },
        // 12 — ACEITA '1'
        {
          prof: { message: "q0 varreu '1', escreveu mais '1', q_rw rebobinou e qf aceitou. Fita: '11'. ACEITA! ✓ 1+1 = 2.", mood: 'feliz' },
          stateUpdate: { nodes: L4_NFULL, transitions: L4_TFULL },
          simulateWord: '1', tape: ['□', '1', '1', '□'], head: 1, status: 'ACCEPTED', activeNode: 'qf',
        },
        // 13 — testa '' (0→1)
        {
          prof: { message: "Caso especial: a palavra vazia representa o número 0. q0 encontra □ imediatamente. Resultado esperado: '1' (= 0+1).", mood: 'serio' },
          stateUpdate: { nodes: L4_NFULL, transitions: L4_TFULL },
          simulateWord: '', tape: ['□', '□'], head: 1, activeNode: 'q0',
        },
        // 14 — ACEITA ''
        {
          prof: { message: "q0 leu □, escreveu '1', q_rw bateu imediatamente no □ inicial e qf aceitou. Fita: '1'. ACEITA! ✓ 0+1 = 1.", mood: 'feliz' },
          stateUpdate: { nodes: L4_NFULL, transitions: L4_TFULL },
          simulateWord: '', tape: ['□', '1', '□'], head: 1, status: 'ACCEPTED', activeNode: 'qf',
        },
        // 15 — formalIntro
        {
          prof: { message: "Máquina mínima e elegante! 🎉 Σ = {1}, Γ = {1, □}, apenas 3 estados. Vamos formalizar.", mood: 'feliz' },
          stateUpdate: { nodes: L4_NFULL, transitions: L4_TFULL },
          formalIntro: true,
        },
        // 16 — Q, Σ, Γ
        {
          prof: { message: "Q = {q0, q_rw, qf}: q0 varre, q_rw rebobina, qf aceita. Σ = {1}: um único símbolo de entrada. Γ = {1, □} = Σ ∪ {□}.", mood: 'explicando' },
          stateUpdate: { nodes: L4_NFULL, transitions: L4_TFULL },
          phase: 'FORMAL', formalFill: { states: '{q0, q_rw, qf}', sigma: '{1}', gamma: '{1, □}' },
        },
        // 17 — q0, □, F
        {
          prof: { message: "Estado inicial: q0. Símbolo branco: □. Conjunto de aceitação: F = {qf}.", mood: 'explicando' },
          stateUpdate: { nodes: L4_NFULL, transitions: L4_TFULL },
          phase: 'FORMAL', formalFill: { initial: 'q0', blank: '□', final: '{qf}' },
        },
        // 18 — δ
        {
          prof: { message: "δ tem 4 regras: q0 com 1;1,R (varre) e □;1,L para q_rw (incrementa e inicia rewind); q_rw com 1;1,L (recua) e □;□,R para qf (aceita). δ completa!", mood: 'explicando' },
          stateUpdate: { nodes: L4_NFULL, transitions: L4_TFULL },
          phase: 'FORMAL', formalFill: { delta: L4_TFULL },
        },
      ],
    },
  };

export default MT_L4;
