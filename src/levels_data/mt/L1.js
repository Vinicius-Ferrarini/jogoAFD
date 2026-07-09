// Estados (revelados incrementalmente). q0→q1 convertem; q2 varre de volta; q3 final.
const Q0 = { uid: 'q0', id: 'q0', label: 'q0', x: 10, y: 50, isInitial: true,  isFinal: false };
const Q1 = { uid: 'q1', id: 'q1', label: 'q1', x: 37, y: 50, isInitial: false, isFinal: false };
const Q2 = { uid: 'q2', id: 'q2', label: 'q2', x: 63, y: 50, isInitial: false, isFinal: false };
const Q3 = { uid: 'q3', id: 'q3', label: 'q3', x: 88, y: 50, isInitial: false, isFinal: true  };

const N_0    = [Q0];
const N_01   = [Q0, Q1];
const N_012  = [Q0, Q1, Q2];
const N_0123 = [Q0, Q1, Q2, Q3];

// Arestas (peças do δ)
const E_Q0A     = { from: 'q0', to: 'q1', read: 'a', write: 'A', move: 'R' }; // 1ª letra 'a'
const E_Q0B     = { from: 'q0', to: 'q1', read: 'b', write: 'B', move: 'R' }; // 1ª letra 'b'
const E_Q1A     = { from: 'q1', to: 'q1', read: 'a', write: 'A', move: 'R' }; // laço 'a'
const E_Q1B     = { from: 'q1', to: 'q1', read: 'b', write: 'B', move: 'R' }; // laço 'b'
const E_Q1_BACK = { from: 'q1', to: 'q2', read: '□', write: '□', move: 'L' }; // achou o fim → volta
const E_Q2A     = { from: 'q2', to: 'q2', read: 'A', write: 'A', move: 'L' }; // varre 'A'
const E_Q2B     = { from: 'q2', to: 'q2', read: 'B', write: 'B', move: 'L' }; // varre 'B'
const E_Q2_FIN  = { from: 'q2', to: 'q3', read: '□', write: '□', move: 'R' }; // branco inicial → final

// Conjuntos de transições por estágio do roteiro
const T_AB_1 = [E_Q0A];                                             // q0 lê a 1ª letra
const T_AB_2 = [E_Q0A, E_Q1B];                                      // + laço b em q1
const T_AB_3 = [E_Q0A, E_Q1B, E_Q1_BACK];                          // + volta para q2
const T_AB_4 = [E_Q0A, E_Q1B, E_Q1_BACK, E_Q2A, E_Q2B];           // + scan-back em q2
const T_AB_5 = [E_Q0A, E_Q1B, E_Q1_BACK, E_Q2A, E_Q2B, E_Q2_FIN]; // máquina "ab" (sem laço 'a')
const T_FULL = [E_Q0A, E_Q0B, E_Q1A, E_Q1B, E_Q1_BACK, E_Q2A, E_Q2B, E_Q2_FIN]; // generalizada

// δ revelada aos poucos no formulário formal (cada grupo acrescenta linhas)
const D1 = [E_Q0A, E_Q0B];                          // q0 converte a 1ª letra
const D2 = [...D1, E_Q1A, E_Q1B];                   // + laços de q1
const D3 = [...D2, E_Q1_BACK];                      // + q1 → q2 (vira)
const D4 = [...D3, E_Q2A, E_Q2B];                   // + scan-back de q2
const D5 = [...D4, E_Q2_FIN];                       // + q2 → q3 (final) = δ completa

const MT_L1 = {
    id:          'MT_L1',
    label:       'L1',
    type:        'transducer',
    level:       'easy',
    alphabet:    ['a', 'b'],
    tapeAlphabet: ['a', 'b', 'A', 'B', '□'],
    description: 'Tem como entrada uma palavra qualquer com a e b, e gera como saída a palavra em CAIXA ALTA.',
    hint:        'Para cada símbolo lido, escreva sua versão maiúscula e avance para a direita. Ao encontrar o branco, entre no estado final.',
    validate:    (w) => w.toUpperCase(),
    testWords:   ['ab', 'a', 'bb', 'aba'],
    skipEmptyWord: true, // a MT do L1 não é testada com a palavra vazia (λ)
    formalDescription: {
      sigma:   '{a,b}',
      gamma:   '{a,b,A,B,□}',
      states:  '{q0,q1,q2,q3}',
      initial: 'q0',
      final:   '{q3}',
      blank:   '□',
    },

    // ── Aula Guiada (storyboard frame a frame) ─────────────────────────────
    guidedLesson: {
      steps: [
        // ═══ Introdução ═══
        // 0
        {
          prof: { message: "Bem-vindo ao laboratório! Vamos construir, peça por peça, a MT que transforma tudo em MAIÚSCULAS. Clique em 'Próx.' para avançar célula por célula.", mood: 'explicando' },
          stateUpdate: { nodes: [], transitions: [] },
        },

        // ═══ Parte 1 — construir e simular 'ab' ═══
        // 1 — começa em q0
        {
          prof: { message: "Vamos testar a palavra 'ab'. A fita tem □ a b □ e começamos no estado inicial q0, com o cabeçote no primeiro 'a'.", mood: 'explicando' },
          stateUpdate: { nodes: N_0, transitions: [] },
          simulateWord: 'ab', tape: ['□', 'a', 'b', '□'], head: 1, activeNode: 'q0',
        },
        // 2 — revela q1 + aresta a;A,R
        {
          prof: { message: "Para tratar o 'a', criamos q1 e a aresta a;A,R: ao ler 'a', escrevemos 'A' e andamos para a DIREITA.", mood: 'explicando' },
          stateUpdate: { nodes: N_01, transitions: T_AB_1 },
          simulateWord: 'ab', tape: ['□', 'a', 'b', '□'], head: 1, activeNode: 'q0',
        },
        // 3 — fita: lê 'a', escreve 'A', anda à direita
        {
          prof: { message: "q0 leu 'a', escreveu 'A' e o cabeçote andou à direita. Agora estamos em q1, lendo o 'b'.", mood: 'explicando' },
          stateUpdate: { nodes: N_01, transitions: T_AB_1 },
          simulateWord: 'ab', tape: ['□', 'A', 'b', '□'], head: 2, activeNode: 'q1',
        },
        // 4 — revela laço b;B,R em q1
        {
          prof: { message: "Em q1 colocamos um laço b;B,R: enquanto sobrarem letras, convertemos e seguimos à direita.", mood: 'explicando' },
          stateUpdate: { nodes: N_01, transitions: T_AB_2 },
          simulateWord: 'ab', tape: ['□', 'A', 'b', '□'], head: 2, activeNode: 'q1',
        },
        // 5 — fita: lê 'b', escreve 'B', anda → branco
        {
          prof: { message: "q1 leu 'b', escreveu 'B' e andou à direita. Caímos no branco (□): a palavra acabou.", mood: 'explicando' },
          stateUpdate: { nodes: N_01, transitions: T_AB_2 },
          simulateWord: 'ab', tape: ['□', 'A', 'B', '□'], head: 3, activeNode: 'q1',
        },
        // 6 — revela q2 + aresta □;□,L
        {
          prof: { message: "Achou o branco? Hora de VOLTAR! Criamos q2 e a aresta □;□,L para iniciar o retorno do cabeçote.", mood: 'explicando' },
          stateUpdate: { nodes: N_012, transitions: T_AB_3 },
          simulateWord: 'ab', tape: ['□', 'A', 'B', '□'], head: 3, activeNode: 'q1',
        },
        // 7 — fita: q1 lê branco, vai p/ q2 e recua
        {
          prof: { message: "q1 leu o branco, foi para q2 e o cabeçote recuou uma casa. Vamos varrer de volta até o início.", mood: 'explicando' },
          stateUpdate: { nodes: N_012, transitions: T_AB_3 },
          simulateWord: 'ab', tape: ['□', 'A', 'B', '□'], head: 2, activeNode: 'q2',
        },
        // 8 — revela laços de scan-back A;A,L e B;B,L
        {
          prof: { message: "Em q2 adicionamos os laços A;A,L e B;B,L: o cabeçote anda à esquerda sem mexer no que já foi convertido.", mood: 'explicando' },
          stateUpdate: { nodes: N_012, transitions: T_AB_4 },
          simulateWord: 'ab', tape: ['□', 'A', 'B', '□'], head: 2, activeNode: 'q2',
        },
        // 9 — fita: q2 lê 'B', recua
        {
          prof: { message: "q2 leu 'B', manteve a letra e recuou. Continua voltando...", mood: 'explicando' },
          stateUpdate: { nodes: N_012, transitions: T_AB_4 },
          simulateWord: 'ab', tape: ['□', 'A', 'B', '□'], head: 1, activeNode: 'q2',
        },
        // 10 — fita: q2 lê 'A', recua → branco inicial
        {
          prof: { message: "q2 leu 'A', manteve e recuou. O cabeçote bateu no branco INICIAL, à esquerda!", mood: 'explicando' },
          stateUpdate: { nodes: N_012, transitions: T_AB_4 },
          simulateWord: 'ab', tape: ['□', 'A', 'B', '□'], head: 0, activeNode: 'q2',
        },
        // 11 — revela q3 (final) + aresta □;□,R
        {
          prof: { message: "Encontramos o branco da esquerda. Criamos o estado final q3 e a aresta □;□,R, que anda 1 à direita para parar na 1ª letra.", mood: 'explicando' },
          stateUpdate: { nodes: N_0123, transitions: T_AB_5 },
          simulateWord: 'ab', tape: ['□', 'A', 'B', '□'], head: 0, activeNode: 'q2',
        },
        // 12 — fita: q2 lê branco → q3, head 1 → ACEITA
        {
          prof: { message: "q2 leu o branco, foi para q3 e parou na primeira letra. A fita virou 'AB'. Palavra ACEITA! ✓", mood: 'feliz' },
          stateUpdate: { nodes: N_0123, transitions: T_AB_5 },
          simulateWord: 'ab', status: 'ACCEPTED', tape: ['□', 'A', 'B', '□'], head: 1, activeNode: 'q3',
        },

        // ═══ Parte 2 — o erro com 'aab' ═══
        // 13 — começa 'aab'
        {
          prof: { message: "Próxima palavra: 'aab'. A MESMA máquina, novo teste. Começamos em q0 lendo o primeiro 'a'.", mood: 'serio' },
          stateUpdate: { nodes: N_0123, transitions: T_AB_5 },
          simulateWord: 'aab', tape: ['□', 'a', 'a', 'b', '□'], head: 1, activeNode: 'q0',
        },
        // 14 — q0 lê 'a' → q1 no 2º 'a'
        {
          prof: { message: "q0 leu 'a', escreveu 'A' e andou à direita. Estamos em q1 lendo o SEGUNDO 'a'...", mood: 'serio' },
          stateUpdate: { nodes: N_0123, transitions: T_AB_5 },
          simulateWord: 'aab', tape: ['□', 'A', 'a', 'b', '□'], head: 2, activeNode: 'q1',
        },
        // 15 — TRAVA: q1 não tem transição p/ 'a'
        {
          prof: { message: "Travou! 😟 Em q1 só existe laço para 'b'. Não há transição para 'a' — a máquina PARA e REJEITA.", mood: 'triste' },
          stateUpdate: { nodes: N_0123, transitions: T_AB_5 },
          simulateWord: 'aab', status: 'REJECTED', tape: ['□', 'A', 'a', 'b', '□'], head: 2, activeNode: 'q1',
        },

        // ═══ Parte 3 — correção generalizada (laços num único estado) ═══
        // 16 — adiciona laço a;A,R em q1 (e b;B,R em q0)
        {
          prof: { message: "A regra que vale para 'b' vale para 'a'! Adicionamos o laço a;A,R em q1 (e b;B,R em q0, para palavras que começam com 'b'). Um ÚNICO estado processa tudo!", mood: 'explicando' },
          stateUpdate: { nodes: N_0123, transitions: T_FULL },
          simulateWord: 'aab', tape: ['□', 'a', 'a', 'b', '□'], head: 1, activeNode: 'q0',
        },
        // 17 — q0 lê 'a' → 'A'
        {
          prof: { message: "Agora 'aab' anda! q0 lê 'a', escreve 'A' e avança.", mood: 'explicando' },
          stateUpdate: { nodes: N_0123, transitions: T_FULL },
          simulateWord: 'aab', tape: ['□', 'A', 'a', 'b', '□'], head: 2, activeNode: 'q1',
        },
        // 18 — q1 lê 2º 'a' → 'A' (novo laço!)
        {
          prof: { message: "q1 lê o SEGUNDO 'a' e escreve 'A' — graças ao novo laço a;A,R. Sem travar!", mood: 'feliz' },
          stateUpdate: { nodes: N_0123, transitions: T_FULL },
          simulateWord: 'aab', tape: ['□', 'A', 'A', 'b', '□'], head: 3, activeNode: 'q1',
        },
        // 19 — q1 lê 'b' → 'B' → branco
        {
          prof: { message: "q1 lê 'b', escreve 'B' e avança. Chegamos no branco final.", mood: 'explicando' },
          stateUpdate: { nodes: N_0123, transitions: T_FULL },
          simulateWord: 'aab', tape: ['□', 'A', 'A', 'B', '□'], head: 4, activeNode: 'q1',
        },
        // 20 — q1 lê branco → q2 e recua
        {
          prof: { message: "q1 lê o branco, vai para q2 e recua. Começa o retorno.", mood: 'explicando' },
          stateUpdate: { nodes: N_0123, transitions: T_FULL },
          simulateWord: 'aab', tape: ['□', 'A', 'A', 'B', '□'], head: 3, activeNode: 'q2',
        },
        // 21 — q2 lê 'B', recua
        {
          prof: { message: "q2 varre de volta: lê 'B', mantém e recua.", mood: 'explicando' },
          stateUpdate: { nodes: N_0123, transitions: T_FULL },
          simulateWord: 'aab', tape: ['□', 'A', 'A', 'B', '□'], head: 2, activeNode: 'q2',
        },
        // 22 — q2 lê 'A', recua
        {
          prof: { message: "q2 lê 'A', mantém e recua.", mood: 'explicando' },
          stateUpdate: { nodes: N_0123, transitions: T_FULL },
          simulateWord: 'aab', tape: ['□', 'A', 'A', 'B', '□'], head: 1, activeNode: 'q2',
        },
        // 23 — q2 lê 'A', recua → branco inicial
        {
          prof: { message: "q2 lê o último 'A', recua e bate no branco inicial!", mood: 'explicando' },
          stateUpdate: { nodes: N_0123, transitions: T_FULL },
          simulateWord: 'aab', tape: ['□', 'A', 'A', 'B', '□'], head: 0, activeNode: 'q2',
        },
        // 24 — q2 lê branco → q3, head 1 → ACEITA
        {
          prof: { message: "q2 leu o branco, foi para q3 e parou na 1ª letra. A fita virou 'AAB'. ACEITA! ✓ A mesma máquina serve para qualquer tamanho.", mood: 'feliz' },
          stateUpdate: { nodes: N_0123, transitions: T_FULL },
          simulateWord: 'aab', status: 'ACCEPTED', tape: ['□', 'A', 'A', 'B', '□'], head: 1, activeNode: 'q3',
        },

        // ═══ Transição grafo → formal ═══
        // 25 — fork: botão "Iniciar Descrição Formal"
        {
          prof: { message: "Grafo finalizado! 🎉 Agora precisamos formalizar matematicamente a nossa Máquina de Turing. Vamos lá?", mood: 'feliz' },
          stateUpdate: { nodes: N_0123, transitions: T_FULL },
          formalIntro: true,
        },

        // ═══ Parte 4 — descrição formal (7-tupla) auto-preenchida ═══
        // 26 — Q
        {
          prof: { message: "A 7-tupla é M = (Q, Σ, Γ, δ, q0, □, F). Vou preencher campo por campo! Q é o conjunto de ESTADOS: {q0, q1, q2, q3}.", mood: 'explicando' },
          stateUpdate: { nodes: N_0123, transitions: T_FULL },
          phase: 'FORMAL', formalFill: { states: '{q0, q1, q2, q3}' },
        },
        // 27 — Σ
        {
          prof: { message: "Σ é o alfabeto de ENTRADA — só os símbolos que podem chegar na fita: {a, b}.", mood: 'explicando' },
          stateUpdate: { nodes: N_0123, transitions: T_FULL },
          phase: 'FORMAL', formalFill: { sigma: '{a, b}' },
        },
        // 28 — Γ
        {
          prof: { message: "Γ é o alfabeto da FITA: a entrada, as maiúsculas que escrevemos e o branco: {a, b, A, B, □}.", mood: 'explicando' },
          stateUpdate: { nodes: N_0123, transitions: T_FULL },
          phase: 'FORMAL', formalFill: { gamma: '{a, b, A, B, □}' },
        },
        // 29 — q0
        {
          prof: { message: "q0 é o estado INICIAL, onde a máquina começa a ler.", mood: 'explicando' },
          stateUpdate: { nodes: N_0123, transitions: T_FULL },
          phase: 'FORMAL', formalFill: { initial: 'q0' },
        },
        // 30 — □
        {
          prof: { message: "O símbolo BRANCO (□) marca as células vazias da fita.", mood: 'explicando' },
          stateUpdate: { nodes: N_0123, transitions: T_FULL },
          phase: 'FORMAL', formalFill: { blank: '□' },
        },
        // 31 — F
        {
          prof: { message: "F é o conjunto de estados de ACEITAÇÃO: {q3}.", mood: 'explicando' },
          stateUpdate: { nodes: N_0123, transitions: T_FULL },
          phase: 'FORMAL', formalFill: { final: '{q3}' },
        },
        // 32 — δ parte 1 (q0)
        {
          prof: { message: "Agora a função δ, linha por linha. Em q0, a 1ª letra é convertida e o cabeçote anda à direita (R): a→A e b→B, indo para q1.", mood: 'explicando' },
          stateUpdate: { nodes: N_0123, transitions: T_FULL },
          phase: 'FORMAL', formalFill: { delta: D1 },
        },
        // 33 — δ parte 2 (laços q1)
        {
          prof: { message: "Em q1 ficam os LAÇOS que convertem o resto da palavra: a→A e b→B, sempre à direita.", mood: 'explicando' },
          stateUpdate: { nodes: N_0123, transitions: T_FULL },
          phase: 'FORMAL', formalFill: { delta: D2 },
        },
        // 34 — δ parte 3 (q1→q2)
        {
          prof: { message: "Quando q1 acha o branco, vai para q2 sem alterar (□→□) e move à ESQUERDA (L): começa o retorno.", mood: 'explicando' },
          stateUpdate: { nodes: N_0123, transitions: T_FULL },
          phase: 'FORMAL', formalFill: { delta: D3 },
        },
        // 35 — δ parte 4 (laços q2)
        {
          prof: { message: "Em q2, os laços A→A e B→B varrem de volta à esquerda, sem mexer no que já foi convertido.", mood: 'explicando' },
          stateUpdate: { nodes: N_0123, transitions: T_FULL },
          phase: 'FORMAL', formalFill: { delta: D4 },
        },
        // 36 — δ parte 5 (q2→q3) + conclusão
        {
          prof: { message: "Por fim, q2 acha o branco inicial, vai para q3 (final) e anda à direita (R), parando na 1ª letra. δ completa — Máquina formalizada! ✓", mood: 'feliz' },
          stateUpdate: { nodes: N_0123, transitions: T_FULL },
          phase: 'FORMAL', formalFill: { delta: D5 },
        },
      ],
    },
  };

export default MT_L1;
