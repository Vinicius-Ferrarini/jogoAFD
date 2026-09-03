// Estados (revelados incrementalmente). Estratégia clássica de "marcar pares":
// q0 procura o próximo 'a' não marcado e marca como A; q1 varre à direita até
// achar o 'b' correspondente e marca como B; q2 varre de volta até o 'A' mais
// próximo; repete. Quando só sobram símbolos marcados, q3/q4 conferem e voltam
// ao início; q5 é o estado final. Mesma topologia da MT Reconhecedora (L1),
// pois marcar cada par a/b como A/B já produz a saída em MAIÚSCULAS de graça.
const Q0 = { uid: 'q0', id: 'q0', label: 'q0', x: 3493, y: 3932, isInitial: true,  isFinal: false };
const Q1 = { uid: 'q1', id: 'q1', label: 'q1', x: 3868, y: 3804, isInitial: false, isFinal: false };
const Q2 = { uid: 'q2', id: 'q2', label: 'q2', x: 4179, y: 3957, isInitial: false, isFinal: false };
const Q3 = { uid: 'q3', id: 'q3', label: 'q3', x: 3823, y: 4191, isInitial: false, isFinal: false };
const Q4 = { uid: 'q4', id: 'q4', label: 'q4', x: 4141, y: 4196, isInitial: false, isFinal: false };
const Q5 = { uid: 'q5', id: 'q5', label: 'q5', x: 4496, y: 4088, isInitial: false, isFinal: true  };

const N_0     = [Q0];
const N_01    = [Q0, Q1];
const N_012   = [Q0, Q1, Q2];
const N_0123  = [Q0, Q1, Q2, Q3];
const N_01234 = [Q0, Q1, Q2, Q3, Q4];
const N_FULL  = [Q0, Q1, Q2, Q3, Q4, Q5];

// Arestas (peças do δ) — marcação de pares
const E_Q0_A     = { from: 'q0', to: 'q1', read: 'a', write: 'A', move: 'R' }; // marca o próximo 'a' → A
const E_Q1_A     = { from: 'q1', to: 'q1', read: 'a', write: 'a', move: 'R' }; // pula sobre 'a' não marcado
const E_Q1_B     = { from: 'q1', to: 'q2', read: 'b', write: 'B', move: 'L' }; // marca o 'b' correspondente → B, volta
const E_Q2_A     = { from: 'q2', to: 'q2', read: 'a', write: 'a', move: 'L' }; // varre de volta sobre 'a'
const E_Q2_B     = { from: 'q2', to: 'q2', read: 'B', write: 'B', move: 'L' }; // varre de volta sobre 'B' já marcado (par mais interno)
const E_Q2_BACK  = { from: 'q2', to: 'q0', read: 'A', write: 'A', move: 'R' }; // achou o par mais próximo → repete
const E_Q0_FIN   = { from: 'q0', to: 'q3', read: 'B', write: 'B', move: 'R' }; // só sobram marcados → confirma
const E_Q3_B     = { from: 'q3', to: 'q3', read: 'B', write: 'B', move: 'R' }; // avança sobre os B's
const E_Q3_BLANK = { from: 'q3', to: 'q4', read: '□', write: '□', move: 'L' }; // achou o fim → varre tudo de volta
const E_Q4_A     = { from: 'q4', to: 'q4', read: 'A', write: 'A', move: 'L' };
const E_Q4_B     = { from: 'q4', to: 'q4', read: 'B', write: 'B', move: 'L' };
const E_Q4_FIN   = { from: 'q4', to: 'q5', read: '□', write: '□', move: 'R' }; // bateu no início → ACEITA
const E_Q0_EMPTY = { from: 'q0', to: 'q5', read: '□', write: '□', move: 'R' }; // caso n=0 (palavra vazia)
const E_Q1_B2    = { from: 'q1', to: 'q1', read: 'B', write: 'B', move: 'R' }; // pula sobre 'B' já marcado (2º+ par)

// Conjuntos de transições por estágio do roteiro ('ab': só precisa de 1 par)
const T_AB_1 = [E_Q0_A];
const T_AB_2 = [E_Q0_A, E_Q1_B];
const T_AB_3 = [E_Q0_A, E_Q1_B, E_Q2_BACK];
const T_AB_4 = [E_Q0_A, E_Q1_B, E_Q2_BACK, E_Q0_FIN];
const T_AB_5 = [E_Q0_A, E_Q1_B, E_Q2_BACK, E_Q0_FIN, E_Q3_BLANK];
const T_AB_6 = [E_Q0_A, E_Q1_B, E_Q2_BACK, E_Q0_FIN, E_Q3_BLANK, E_Q4_A, E_Q4_B, E_Q4_FIN];
const T_FULL = [
  E_Q0_A, E_Q1_A, E_Q1_B, E_Q2_A, E_Q2_B, E_Q2_BACK,
  E_Q0_FIN, E_Q3_B, E_Q3_BLANK, E_Q4_A, E_Q4_B, E_Q4_FIN, E_Q0_EMPTY, E_Q1_B2,
];

// δ revelada aos poucos no formulário formal (cada grupo acrescenta linhas)
const D1 = [E_Q0_A, E_Q1_A, E_Q1_B2];                    // q0 marca 'a'; q1 pula 'a'/'B' já vistos
const D2 = [...D1, E_Q1_B];                              // q1 marca o 'b' correspondente
const D3 = [...D2, E_Q2_A, E_Q2_B, E_Q2_BACK];           // q2 varre de volta até o par
const D4 = [...D3, E_Q0_FIN, E_Q3_B];                     // q0→q3 quando só sobra B; q3 confirma
const D5 = [...D4, E_Q3_BLANK, E_Q4_A, E_Q4_B, E_Q4_FIN]; // q4 varre tudo, aceita no início
const D6 = [...D5, E_Q0_EMPTY];                           // caso especial n=0 (λ)

const MT_L1 = {
    id:          'MT_L1',
    label:       'L1',
    type:        'transducer',
    level:       'easy',
    alphabet:    ['a', 'b'],
    tapeAlphabet: ['a', 'b', 'A', 'B', '□'],
    language:    '{aⁿbⁿ / n ≥ 0}',
    description: 'Tem como entrada palavras da linguagem aⁿbⁿ (n ≥ 0) e transforma em MAIÚSCULAS.',
    hint:        'Marque o "a" mais à esquerda como A e ande até achar o "b" correspondente para marcar como B; volte e repita até restarem só letras marcadas.',
    validate:    (w) => /^a*b*$/.test(w) && (w.match(/a/g)?.length ?? 0) === (w.match(/b/g)?.length ?? 0) ? w.toUpperCase() : null,
    testWords:   ['', 'ab', 'aabb', 'aaabbb'],
    formalDescription: {
      sigma:   '{a,b}',
      gamma:   '{a,b,A,B,□}',
      states:  '{q0,q1,q2,q3,q4,q5}',
      initial: 'q0',
      final:   '{q5}',
      blank:   '□',
    },

    // ── Aula Guiada (storyboard frame a frame) ─────────────────────────────
    guidedLesson: {
      steps: [
        // ═══ Introdução ═══
        // 0
        {
          prof: { message: "Bem-vindo! Vamos construir a MT que reconhece aⁿbⁿ e converte cada palavra aceita para MAIÚSCULAS. A estratégia: marcar cada 'a' com o seu 'b' correspondente.", mood: 'explicando' },
          stateUpdate: { nodes: [], transitions: [] },
        },

        // ═══ Parte 1 — construir e simular 'ab' ═══
        // 1 — começa em q0
        {
          prof: { message: "Vamos testar a palavra 'ab'. A fita tem □ a b □ e começamos no estado inicial q0, no primeiro 'a'.", mood: 'explicando' },
          stateUpdate: { nodes: N_0, transitions: [] },
          simulateWord: 'ab', tape: ['□', 'a', 'b', '□'], head: 1, activeNode: 'q0',
        },
        // 2 — revela q1 + aresta a;A,R
        {
          prof: { message: "Criamos q1 e a aresta a;A,R: em q0, ao ler 'a', marcamos como 'A' e andamos à DIREITA para procurar o 'b' correspondente.", mood: 'explicando' },
          stateUpdate: { nodes: N_01, transitions: T_AB_1 },
          simulateWord: 'ab', tape: ['□', 'a', 'b', '□'], head: 1, activeNode: 'q0',
        },
        // 3 — fita: lê 'a', escreve 'A', anda à direita
        {
          prof: { message: "q0 leu 'a', escreveu 'A' e andou à direita. Agora em q1, lendo o 'b'.", mood: 'explicando' },
          stateUpdate: { nodes: N_01, transitions: T_AB_1 },
          simulateWord: 'ab', tape: ['□', 'A', 'b', '□'], head: 2, activeNode: 'q1',
        },
        // 4 — revela q2 + aresta b;B,L
        {
          prof: { message: "Criamos q2 e a aresta b;B,L: em q1, ao achar o 'b' correspondente, marcamos como 'B' e voltamos à ESQUERDA.", mood: 'explicando' },
          stateUpdate: { nodes: N_012, transitions: T_AB_2 },
          simulateWord: 'ab', tape: ['□', 'A', 'b', '□'], head: 2, activeNode: 'q1',
        },
        // 5 — fita: lê 'b', escreve 'B', volta
        {
          prof: { message: "q1 leu 'b', escreveu 'B' e voltou à esquerda. Agora em q2, procurando o 'A' que marcamos.", mood: 'explicando' },
          stateUpdate: { nodes: N_012, transitions: T_AB_2 },
          simulateWord: 'ab', tape: ['□', 'A', 'B', '□'], head: 1, activeNode: 'q2',
        },
        // 6 — revela aresta A;A,R (q2 → q0)
        {
          prof: { message: "Adicionamos a aresta A;A,R: em q2, ao achar o 'A' mais próximo, voltamos para q0 (para procurar o PRÓXIMO par, se houver).", mood: 'explicando' },
          stateUpdate: { nodes: N_012, transitions: T_AB_3 },
          simulateWord: 'ab', tape: ['□', 'A', 'B', '□'], head: 1, activeNode: 'q2',
        },
        // 7 — fita: q2 lê 'A', volta para q0
        {
          prof: { message: "q2 achou o 'A', manteve e andou à direita. Voltamos a q0 — mas agora só sobra 'B' à frente.", mood: 'explicando' },
          stateUpdate: { nodes: N_012, transitions: T_AB_3 },
          simulateWord: 'ab', tape: ['□', 'A', 'B', '□'], head: 2, activeNode: 'q0',
        },
        // 8 — revela q3 + aresta B;B,R
        {
          prof: { message: "Criamos q3 e a aresta B;B,R: se em q0 encontramos 'B' (não 'a'), é porque TODOS os pares já foram marcados — hora de confirmar.", mood: 'explicando' },
          stateUpdate: { nodes: N_0123, transitions: T_AB_4 },
          simulateWord: 'ab', tape: ['□', 'A', 'B', '□'], head: 2, activeNode: 'q0',
        },
        // 9 — fita: q0 lê 'B', vai para q3
        {
          prof: { message: "q0 leu 'B', foi para q3 e andou à direita, procurando o fim da palavra.", mood: 'explicando' },
          stateUpdate: { nodes: N_0123, transitions: T_AB_4 },
          simulateWord: 'ab', tape: ['□', 'A', 'B', '□'], head: 3, activeNode: 'q3',
        },
        // 10 — revela q4 + aresta □;□,L
        {
          prof: { message: "Criamos q4 e a aresta □;□,L: q3 achou o branco do fim da palavra — hora de varrer tudo de volta até o início.", mood: 'explicando' },
          stateUpdate: { nodes: N_01234, transitions: T_AB_5 },
          simulateWord: 'ab', tape: ['□', 'A', 'B', '□'], head: 3, activeNode: 'q3',
        },
        // 11 — fita: q3 lê branco, vai para q4 e recua
        {
          prof: { message: "q3 leu o branco, foi para q4 e recuou. Vamos varrer A e B de volta até o início.", mood: 'explicando' },
          stateUpdate: { nodes: N_01234, transitions: T_AB_5 },
          simulateWord: 'ab', tape: ['□', 'A', 'B', '□'], head: 2, activeNode: 'q4',
        },
        // 12 — revela laços A;A,L / B;B,L e aresta final □;□,R
        {
          prof: { message: "Em q4 colocamos os laços A;A,L e B;B,L (varrer sem mexer) e a aresta final □;□,R: ao bater no branco INICIAL, vamos para q5 (final) e paramos na 1ª letra.", mood: 'explicando' },
          stateUpdate: { nodes: N_FULL, transitions: T_AB_6 },
          simulateWord: 'ab', tape: ['□', 'A', 'B', '□'], head: 2, activeNode: 'q4',
        },
        // 13 — fita: q4 lê 'B', varre à ESQUERDA (1 célula)
        {
          prof: { message: "q4 leu 'B', manteve e voltou à ESQUERDA (B;B,L). O cabeçote anda UMA célula por vez — vamos varrer passo a passo até o começo da fita.", mood: 'explicando' },
          stateUpdate: { nodes: N_FULL, transitions: T_AB_6 },
          simulateWord: 'ab', tape: ['□', 'A', 'B', '□'], head: 1, activeNode: 'q4',
        },
        // 14 — fita: q4 lê 'A', varre à ESQUERDA e chega no branco INICIAL
        {
          prof: { message: "q4 leu 'A', manteve e voltou à ESQUERDA (A;A,L). Agora o cabeçote está sobre o branco INICIAL (□), imediatamente antes da 1ª letra.", mood: 'explicando' },
          stateUpdate: { nodes: N_FULL, transitions: T_AB_6 },
          simulateWord: 'ab', tape: ['□', 'A', 'B', '□'], head: 0, activeNode: 'q4',
        },
        // 15 — fita: q4 lê o branco inicial → q5, volta o cabeçote pra 1ª letra, ACEITA
        {
          prof: { message: "q4 leu o branco inicial: foi para q5 (final) e andou 1 à DIREITA (□;□,R), trazendo o cabeçote de volta para a 1ª letra. A fita virou 'AB'. Palavra ACEITA! ✓", mood: 'feliz' },
          stateUpdate: { nodes: N_FULL, transitions: T_AB_6 },
          simulateWord: 'ab', status: 'ACCEPTED', tape: ['□', 'A', 'B', '□'], head: 1, activeNode: 'q5',
        },

        // ═══ Parte 2 — o erro com 'aab' (não pertence a aⁿbⁿ) ═══
        // 16 — começa 'aab'
        {
          prof: { message: "Próxima palavra: 'aab'. Repare que ela tem 2 'a' mas só 1 'b' — NÃO pertence a aⁿbⁿ. Vamos ver a MESMA máquina rejeitar corretamente.", mood: 'serio' },
          stateUpdate: { nodes: N_FULL, transitions: T_AB_6 },
          simulateWord: 'aab', tape: ['□', 'a', 'a', 'b', '□'], head: 1, activeNode: 'q0',
        },
        // 17 — q0 marca o 1º 'a' → q1
        {
          prof: { message: "q0 leu o 1º 'a', marcou 'A' e andou à direita. Estamos em q1, lendo o SEGUNDO 'a'...", mood: 'serio' },
          stateUpdate: { nodes: N_FULL, transitions: T_AB_6 },
          simulateWord: 'aab', tape: ['□', 'A', 'a', 'b', '□'], head: 2, activeNode: 'q1',
        },
        // 18 — TRAVA: q1 não tem transição para pular o 2º 'a' ainda
        {
          prof: { message: "Travou! 😟 Em q1 só sabemos marcar 'b' (b;B,L) — ainda não sabemos PULAR um 'a' não marcado. A máquina PARA e REJEITA.", mood: 'triste' },
          stateUpdate: { nodes: N_FULL, transitions: T_AB_6 },
          simulateWord: 'aab', status: 'REJECTED', tape: ['□', 'A', 'a', 'b', '□'], head: 2, activeNode: 'q1',
        },

        // ═══ Parte 3 — generalizar para palavras com mais de 1 par ═══
        // 19 — adiciona laços a;a,R e B;B,R em q1 (permite pular letras já vistas ou não-marcadas)
        {
          prof: { message: "Para aceitar palavras com VÁRIOS pares (ex.: 'aabb'), q1 precisa PULAR 'a' não marcado (a;a,R) e 'B' já marcado (B;B,R), sem alterar nada, até achar o 'b' livre mais próximo.", mood: 'explicando' },
          stateUpdate: { nodes: N_FULL, transitions: T_FULL },
          simulateWord: 'aab', tape: ['□', 'a', 'a', 'b', '□'], head: 1, activeNode: 'q0',
        },
        // 20 — reforça que 'aab' continua rejeitada mesmo com a máquina completa
        {
          prof: { message: "Mesmo com a máquina completa, 'aab' continua sendo REJEITADA: depois de marcar o par, sobra um 'a' sem 'b' correspondente — exatamente como esperado, já que 'aab' não é aⁿbⁿ.", mood: 'serio' },
          stateUpdate: { nodes: N_FULL, transitions: T_FULL },
          simulateWord: 'aab', status: 'REJECTED', tape: ['□', 'A', 'a', 'B', '□'], head: 2, activeNode: 'q1',
        },

        // ═══ Parte 4 — simular 'aabb' (2 pares) passo a passo na máquina completa ═══
        // 21 — início da simulação de 'aabb'
        {
          prof: { message: "Agora 'aabb' (2 pares) na máquina COMPLETA, transição por transição. A fita tem □ a a b b □ e começamos em q0, no 1º 'a'.", mood: 'explicando' },
          stateUpdate: { nodes: N_FULL, transitions: T_FULL },
          simulateWord: 'aabb', tape: ['□', 'a', 'a', 'b', 'b', '□'], head: 1, activeNode: 'q0',
        },
        // 22 — q0 marca o 1º 'a'
        {
          prof: { message: "q0 leu 'a', escreveu 'A' e foi à DIREITA (a;A,R). Agora em q1, sobre o 2º 'a'.", mood: 'explicando' },
          stateUpdate: { nodes: N_FULL, transitions: T_FULL },
          simulateWord: 'aabb', tape: ['□', 'A', 'a', 'b', 'b', '□'], head: 2, activeNode: 'q1',
        },
        // 23 — q1 pula o 2º 'a' sem marcar
        {
          prof: { message: "q1 leu 'a' e pulou à DIREITA sem marcar (a;a,R) — o 'b' do par ainda está mais à frente. Em q1, sobre o 1º 'b'.", mood: 'explicando' },
          stateUpdate: { nodes: N_FULL, transitions: T_FULL },
          simulateWord: 'aabb', tape: ['□', 'A', 'a', 'b', 'b', '□'], head: 3, activeNode: 'q1',
        },
        // 24 — q1 marca o 'b' do par externo
        {
          prof: { message: "q1 achou o 'b' livre: escreveu 'B' e voltou à ESQUERDA (b;B,L). Agora em q2.", mood: 'explicando' },
          stateUpdate: { nodes: N_FULL, transitions: T_FULL },
          simulateWord: 'aabb', tape: ['□', 'A', 'a', 'B', 'b', '□'], head: 2, activeNode: 'q2',
        },
        // 25 — q2 varre 'a' de volta
        {
          prof: { message: "q2 leu 'a' e recuou à ESQUERDA sem mexer (a;a,L), procurando o 'A' do par recém-marcado. Em q2.", mood: 'explicando' },
          stateUpdate: { nodes: N_FULL, transitions: T_FULL },
          simulateWord: 'aabb', tape: ['□', 'A', 'a', 'B', 'b', '□'], head: 1, activeNode: 'q2',
        },
        // 26 — q2 acha o 'A', volta a q0
        {
          prof: { message: "q2 achou o 'A': manteve e foi à DIREITA (A;A,R), voltando a q0 para procurar o PRÓXIMO par.", mood: 'explicando' },
          stateUpdate: { nodes: N_FULL, transitions: T_FULL },
          simulateWord: 'aabb', tape: ['□', 'A', 'a', 'B', 'b', '□'], head: 2, activeNode: 'q0',
        },
        // 27 — q0 marca o 2º 'a'
        {
          prof: { message: "q0 leu o 2º 'a', escreveu 'A' e foi à DIREITA (a;A,R). Agora em q1.", mood: 'explicando' },
          stateUpdate: { nodes: N_FULL, transitions: T_FULL },
          simulateWord: 'aabb', tape: ['□', 'A', 'A', 'B', 'b', '□'], head: 3, activeNode: 'q1',
        },
        // 28 — q1 pula o 'B' já marcado
        {
          prof: { message: "q1 leu o 'B' já marcado e pulou à DIREITA (B;B,R), sem alterar nada. Em q1, sobre o 2º 'b'.", mood: 'explicando' },
          stateUpdate: { nodes: N_FULL, transitions: T_FULL },
          simulateWord: 'aabb', tape: ['□', 'A', 'A', 'B', 'b', '□'], head: 4, activeNode: 'q1',
        },
        // 29 — q1 marca o 'b' do par interno
        {
          prof: { message: "q1 achou o 'b' livre: escreveu 'B' e voltou à ESQUERDA (b;B,L). Agora em q2.", mood: 'explicando' },
          stateUpdate: { nodes: N_FULL, transitions: T_FULL },
          simulateWord: 'aabb', tape: ['□', 'A', 'A', 'B', 'B', '□'], head: 3, activeNode: 'q2',
        },
        // 30 — q2 varre 'B' de volta
        {
          prof: { message: "q2 leu o 'B' já marcado e recuou à ESQUERDA (B;B,L), procurando o 'A'. Em q2.", mood: 'explicando' },
          stateUpdate: { nodes: N_FULL, transitions: T_FULL },
          simulateWord: 'aabb', tape: ['□', 'A', 'A', 'B', 'B', '□'], head: 2, activeNode: 'q2',
        },
        // 31 — q2 acha o 'A', volta a q0
        {
          prof: { message: "q2 achou o 'A': manteve e foi à DIREITA (A;A,R), voltando a q0.", mood: 'explicando' },
          stateUpdate: { nodes: N_FULL, transitions: T_FULL },
          simulateWord: 'aabb', tape: ['□', 'A', 'A', 'B', 'B', '□'], head: 3, activeNode: 'q0',
        },
        // 32 — q0 lê 'B': todos os pares marcados, vai para q3
        {
          prof: { message: "Agora q0 lê 'B', não 'a': TODOS os pares estão marcados! Foi para q3 à DIREITA (B;B,R) para conferir o resto.", mood: 'explicando' },
          stateUpdate: { nodes: N_FULL, transitions: T_FULL },
          simulateWord: 'aabb', tape: ['□', 'A', 'A', 'B', 'B', '□'], head: 4, activeNode: 'q3',
        },
        // 33 — q3 avança sobre o 2º 'B'
        {
          prof: { message: "q3 leu 'B' e avançou à DIREITA (B;B,R), procurando o fim da palavra. Em q3.", mood: 'explicando' },
          stateUpdate: { nodes: N_FULL, transitions: T_FULL },
          simulateWord: 'aabb', tape: ['□', 'A', 'A', 'B', 'B', '□'], head: 5, activeNode: 'q3',
        },
        // 34 — q3 acha o branco do fim → q4
        {
          prof: { message: "q3 achou o branco do fim: foi para q4 e recuou à ESQUERDA (□;□,L). Hora de varrer tudo de volta até o começo.", mood: 'explicando' },
          stateUpdate: { nodes: N_FULL, transitions: T_FULL },
          simulateWord: 'aabb', tape: ['□', 'A', 'A', 'B', 'B', '□'], head: 4, activeNode: 'q4',
        },
        // 35 — q4 varre o 2º 'B'
        {
          prof: { message: "q4 leu 'B' e voltou à ESQUERDA sem mexer (B;B,L). Em q4.", mood: 'explicando' },
          stateUpdate: { nodes: N_FULL, transitions: T_FULL },
          simulateWord: 'aabb', tape: ['□', 'A', 'A', 'B', 'B', '□'], head: 3, activeNode: 'q4',
        },
        // 36 — q4 varre o 1º 'B'
        {
          prof: { message: "q4 leu 'B' e voltou à ESQUERDA (B;B,L). Em q4.", mood: 'explicando' },
          stateUpdate: { nodes: N_FULL, transitions: T_FULL },
          simulateWord: 'aabb', tape: ['□', 'A', 'A', 'B', 'B', '□'], head: 2, activeNode: 'q4',
        },
        // 37 — q4 varre o 2º 'A'
        {
          prof: { message: "q4 leu 'A' e voltou à ESQUERDA (A;A,L). Em q4.", mood: 'explicando' },
          stateUpdate: { nodes: N_FULL, transitions: T_FULL },
          simulateWord: 'aabb', tape: ['□', 'A', 'A', 'B', 'B', '□'], head: 1, activeNode: 'q4',
        },
        // 38 — q4 varre o 1º 'A' e chega no branco inicial
        {
          prof: { message: "q4 leu 'A' e voltou à ESQUERDA (A;A,L). O cabeçote chegou no branco INICIAL (□).", mood: 'explicando' },
          stateUpdate: { nodes: N_FULL, transitions: T_FULL },
          simulateWord: 'aabb', tape: ['□', 'A', 'A', 'B', 'B', '□'], head: 0, activeNode: 'q4',
        },
        // 39 — q4 lê o branco inicial → q5, volta o cabeçote pra 1ª letra, ACEITA
        {
          prof: { message: "q4 leu o branco inicial: foi para q5 (final) e andou 1 à DIREITA (□;□,R), trazendo o cabeçote de volta para a 1ª letra. A fita virou 'AABB'. Palavra ACEITA! ✓", mood: 'feliz' },
          stateUpdate: { nodes: N_FULL, transitions: T_FULL },
          simulateWord: 'aabb', status: 'ACCEPTED', tape: ['□', 'A', 'A', 'B', 'B', '□'], head: 1, activeNode: 'q5',
        },

        // ═══ Parte 5 — o caso da palavra vazia (λ, n = 0) ═══
        // 40 — começa a simulação de λ
        {
          prof: { message: "Falta 1 caso: a palavra VAZIA (λ). Como n = 0 também pertence a aⁿbⁿ, ela deve ser ACEITA. A fita só tem brancos e começamos em q0.", mood: 'explicando' },
          stateUpdate: { nodes: N_FULL, transitions: T_FULL },
          simulateWord: '', tape: ['□', '□', '□'], head: 1, activeNode: 'q0',
        },
        // 41 — q0 lê o branco direto → q5, ACEITA
        {
          prof: { message: "q0 já leu um branco (não há nenhum 'a'): foi direto para q5 (final) à DIREITA (□;□,R). Nada a marcar. λ ACEITA! ✓", mood: 'feliz' },
          stateUpdate: { nodes: N_FULL, transitions: T_FULL },
          simulateWord: '', status: 'ACCEPTED', tape: ['□', '□', '□'], head: 2, activeNode: 'q5',
        },

        // ═══ Transição grafo → formal ═══
        // 42 — fork: botão "Iniciar Descrição Formal"
        {
          prof: { message: "Grafo finalizado! 🎉 Agora precisamos formalizar matematicamente a nossa Máquina de Turing. Vamos lá?", mood: 'feliz' },
          stateUpdate: { nodes: N_FULL, transitions: T_FULL },
          formalIntro: true,
        },

        // ═══ Parte 6 — descrição formal (7-tupla) auto-preenchida ═══
        // 43 — Q
        {
          prof: { message: "A 7-tupla é M = (Q, Σ, Γ, δ, q0, □, F). Vou preencher campo por campo! Q é o conjunto de ESTADOS: {q0, q1, q2, q3, q4, q5}.", mood: 'explicando' },
          stateUpdate: { nodes: N_FULL, transitions: T_FULL },
          phase: 'FORMAL', formalFill: { states: '{q0, q1, q2, q3, q4, q5}' },
        },
        // 44 — Σ
        {
          prof: { message: "Σ é o alfabeto de ENTRADA — só os símbolos que podem chegar na fita: {a, b}.", mood: 'explicando' },
          stateUpdate: { nodes: N_FULL, transitions: T_FULL },
          phase: 'FORMAL', formalFill: { sigma: '{a, b}' },
        },
        // 45 — Γ
        {
          prof: { message: "Γ é o alfabeto da FITA: a entrada, as marcações A/B e o branco: {a, b, A, B, □}.", mood: 'explicando' },
          stateUpdate: { nodes: N_FULL, transitions: T_FULL },
          phase: 'FORMAL', formalFill: { gamma: '{a, b, A, B, □}' },
        },
        // 46 — q0
        {
          prof: { message: "q0 é o estado INICIAL, onde a máquina começa a procurar o próximo par.", mood: 'explicando' },
          stateUpdate: { nodes: N_FULL, transitions: T_FULL },
          phase: 'FORMAL', formalFill: { initial: 'q0' },
        },
        // 47 — □
        {
          prof: { message: "O símbolo BRANCO (□) marca as células vazias da fita.", mood: 'explicando' },
          stateUpdate: { nodes: N_FULL, transitions: T_FULL },
          phase: 'FORMAL', formalFill: { blank: '□' },
        },
        // 48 — F
        {
          prof: { message: "F é o conjunto de estados de ACEITAÇÃO: {q5}.", mood: 'explicando' },
          stateUpdate: { nodes: N_FULL, transitions: T_FULL },
          phase: 'FORMAL', formalFill: { final: '{q5}' },
        },
        // 49 — δ parte 1 (q0 marca, q1 pula)
        {
          prof: { message: "Agora a função δ, linha por linha. Em q0, ao ler 'a', marcamos A e vamos à DIREITA (R) para q1. Em q1, pulamos 'a' e 'B' sem alterar, também à direita.", mood: 'explicando' },
          stateUpdate: { nodes: N_FULL, transitions: T_FULL },
          phase: 'FORMAL', formalFill: { delta: D1 },
        },
        // 50 — δ parte 2 (q1 marca o par)
        {
          prof: { message: "Quando q1 acha o 'b' livre, marca B e volta à ESQUERDA (L) para q2.", mood: 'explicando' },
          stateUpdate: { nodes: N_FULL, transitions: T_FULL },
          phase: 'FORMAL', formalFill: { delta: D2 },
        },
        // 51 — δ parte 3 (q2 varre de volta)
        {
          prof: { message: "Em q2, pulamos 'a' à esquerda sem alterar; ao achar o 'A' do par recém-marcado, voltamos para q0 (R) — procurar o próximo par.", mood: 'explicando' },
          stateUpdate: { nodes: N_FULL, transitions: T_FULL },
          phase: 'FORMAL', formalFill: { delta: D3 },
        },
        // 52 — δ parte 4 (q0 → q3, confirma)
        {
          prof: { message: "Quando q0 encontra 'B' em vez de 'a', é porque todos os pares foram marcados: vamos para q3 e avançamos sobre os B's restantes (R).", mood: 'explicando' },
          stateUpdate: { nodes: N_FULL, transitions: T_FULL },
          phase: 'FORMAL', formalFill: { delta: D4 },
        },
        // 53 — δ parte 5 (q3 → q4 → q5, aceita)
        {
          prof: { message: "q3 acha o branco do fim e vai para q4 (L), que varre A e B de volta (L) até o branco inicial — aí vai para q5 (final) e anda 1 à direita (R). δ quase completa!", mood: 'explicando' },
          stateUpdate: { nodes: N_FULL, transitions: T_FULL },
          phase: 'FORMAL', formalFill: { delta: D5 },
        },
        // 54 — δ parte 6 (caso especial n=0) + conclusão
        {
          prof: { message: "Falta o caso n=0: se q0 já encontra o branco (palavra vazia), vamos direto para q5 (R). δ completa — Máquina formalizada! ✓", mood: 'feliz' },
          stateUpdate: { nodes: N_FULL, transitions: T_FULL },
          phase: 'FORMAL', formalFill: { delta: D6 },
        },
      ],
    },
  };

export default MT_L1;
