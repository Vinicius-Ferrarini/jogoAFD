// ── L9: Contar a e b → qtdea#qtdeb (unário) ────────────────────────────────────────────
// 13 estados extraídos do JFLAP: q0–q12
// Técnica: Marcar a→A (contando a's) com shift para fita auxiliar;
//          depois marcar b→B contando b's; separar com #; restaurar.

const L9_Q0  = { uid: 'q0',  id: 'q0',  label: 'q0',  x: 10, y: 50, isInitial: true,  isFinal: false };
const L9_Q1  = { uid: 'q1',  id: 'q1',  label: 'q1',  x: 28, y: 50, isInitial: false, isFinal: false };
const L9_Q2  = { uid: 'q2',  id: 'q2',  label: 'q2',  x: 46, y: 50, isInitial: false, isFinal: false };
const L9_Q3  = { uid: 'q3',  id: 'q3',  label: 'q3',  x: 62, y: 50, isInitial: false, isFinal: false };
const L9_Q4  = { uid: 'q4',  id: 'q4',  label: 'q4',  x: 78, y: 30, isInitial: false, isFinal: false };
const L9_Q5  = { uid: 'q5',  id: 'q5',  label: 'q5',  x: 92, y: 50, isInitial: false, isFinal: false };
const L9_Q6  = { uid: 'q6',  id: 'q6',  label: 'q6',  x: 46, y: 75, isInitial: false, isFinal: false };
const L9_Q7  = { uid: 'q7',  id: 'q7',  label: 'q7',  x: 60, y: 75, isInitial: false, isFinal: false };
const L9_Q8  = { uid: 'q8',  id: 'q8',  label: 'q8',  x: 74, y: 75, isInitial: false, isFinal: false };
const L9_Q9  = { uid: 'q9',  id: 'q9',  label: 'q9',  x: 88, y: 68, isInitial: false, isFinal: false };
const L9_Q10 = { uid: 'q10', id: 'q10', label: 'q10', x: 100, y: 75, isInitial: false, isFinal: false };
const L9_Q11 = { uid: 'q11', id: 'q11', label: 'q11', x: 88, y: 88, isInitial: false, isFinal: false };
const L9_Q12 = { uid: 'q12', id: 'q12', label: 'q12', x: 100, y: 88, isInitial: false, isFinal: true  };

// Transições extraídas do JFLAP L9.xml
// q0: lê < e avança
const L9_E_00_01 = { from: 'q0',  to: 'q1',  read: '<', write: '<', move: 'R' };
// q1: varre a/b para achar fim da entrada, insere # no final
const L9_E_01_01a = { from: 'q1', to: 'q1', read: 'a', write: 'a', move: 'R' };
const L9_E_01_01b = { from: 'q1', to: 'q1', read: 'b', write: 'b', move: 'R' };
const L9_E_01_02  = { from: 'q1', to: 'q2', read: '□', write: '#', move: 'L' };
// q2: rebobina até <
const L9_E_02_02a = { from: 'q2', to: 'q2', read: 'a', write: 'a', move: 'L' };
const L9_E_02_02b = { from: 'q2', to: 'q2', read: 'b', write: 'b', move: 'L' };
const L9_E_02_03  = { from: 'q2', to: 'q3', read: '<', write: '<', move: 'R' };
// q3: procura próximo 'a' não marcado; se achar # vai para q6 (fase b)
const L9_E_03_03A = { from: 'q3', to: 'q3', read: 'A', write: 'A', move: 'R' };
const L9_E_03_03b = { from: 'q3', to: 'q3', read: 'b', write: 'b', move: 'R' };
const L9_E_03_04  = { from: 'q3', to: 'q4', read: 'a', write: 'A', move: 'R' };
const L9_E_03_06  = { from: 'q3', to: 'q6', read: '#', write: '#', move: 'R' };
// q4: avança até □ depois do # para depositar '1'
const L9_E_04_04a = { from: 'q4', to: 'q4', read: 'a', write: 'a', move: 'R' };
const L9_E_04_04b = { from: 'q4', to: 'q4', read: 'b', write: 'b', move: 'R' };
const L9_E_04_041 = { from: 'q4', to: 'q4', read: '1', write: '1', move: 'R' };
const L9_E_04_04H = { from: 'q4', to: 'q4', read: '#', write: '#', move: 'R' };
const L9_E_04_05  = { from: 'q4', to: 'q5', read: '□', write: '1', move: 'L' };
// q5: rebobina até <
const L9_E_05_05a = { from: 'q5', to: 'q5', read: 'a', write: 'a', move: 'L' };
const L9_E_05_05b = { from: 'q5', to: 'q5', read: 'b', write: 'b', move: 'L' };
const L9_E_05_05A = { from: 'q5', to: 'q5', read: 'A', write: 'A', move: 'L' };
const L9_E_05_051 = { from: 'q5', to: 'q5', read: '1', write: '1', move: 'L' };
const L9_E_05_05H = { from: 'q5', to: 'q5', read: '#', write: '#', move: 'L' };
const L9_E_05_03  = { from: 'q5', to: 'q3', read: '<', write: '<', move: 'R' };
// q6: varre 1's já depositados e insere # separador para fase de b's
const L9_E_06_06_1 = { from: 'q6', to: 'q6', read: '1', write: '1', move: 'R' };
const L9_E_06_07   = { from: 'q6', to: 'q7', read: '□', write: '#', move: 'L' };
// q7: rebobina até < passando por b/1/A/#
const L9_E_07_07b = { from: 'q7', to: 'q7', read: 'b', write: 'b', move: 'L' };
const L9_E_07_07A = { from: 'q7', to: 'q7', read: 'A', write: 'A', move: 'L' };
const L9_E_07_071 = { from: 'q7', to: 'q7', read: '1', write: '1', move: 'L' };
const L9_E_07_07H = { from: 'q7', to: 'q7', read: '#', write: '#', move: 'L' };
const L9_E_07_08  = { from: 'q7', to: 'q8', read: '<', write: '<', move: 'R' };
// q8: procura próximo 'b' não marcado
const L9_E_08_08A = { from: 'q8', to: 'q8', read: 'A', write: 'A', move: 'R' };
const L9_E_08_08B = { from: 'q8', to: 'q8', read: 'B', write: 'B', move: 'R' };
const L9_E_08_09  = { from: 'q8', to: 'q9', read: 'b', write: 'B', move: 'R' };
const L9_E_08_11  = { from: 'q8', to: 'q11', read: '#', write: '#', move: 'L' };
// q9: avança até □ para depositar '1'
const L9_E_09_09b = { from: 'q9', to: 'q9', read: 'b', write: 'b', move: 'R' };
const L9_E_09_091 = { from: 'q9', to: 'q9', read: '1', write: '1', move: 'R' };
const L9_E_09_09H = { from: 'q9', to: 'q9', read: '#', write: '#', move: 'R' };
const L9_E_09_09A = { from: 'q9', to: 'q9', read: 'A', write: 'A', move: 'R' };
const L9_E_09_10  = { from: 'q9', to: 'q10', read: '□', write: '1', move: 'L' };
// q10: rebobina até <
const L9_E_10_10b = { from: 'q10', to: 'q10', read: 'b', write: 'b', move: 'L' };
const L9_E_10_10A = { from: 'q10', to: 'q10', read: 'A', write: 'A', move: 'L' };
const L9_E_10_10B = { from: 'q10', to: 'q10', read: 'B', write: 'B', move: 'L' };
const L9_E_10_101 = { from: 'q10', to: 'q10', read: '1', write: '1', move: 'L' };
const L9_E_10_10H = { from: 'q10', to: 'q10', read: '#', write: '#', move: 'L' };
const L9_E_10_08  = { from: 'q10', to: 'q8', read: '<', write: '<', move: 'R' };
// q11: rebobina até < passando por A/B
const L9_E_11_11A = { from: 'q11', to: 'q11', read: 'A', write: 'A', move: 'L' };
const L9_E_11_11B = { from: 'q11', to: 'q11', read: 'B', write: 'B', move: 'L' };
const L9_E_11_12  = { from: 'q11', to: 'q12', read: '<', write: '<', move: 'R' };

const L9_NFULL = [L9_Q0,L9_Q1,L9_Q2,L9_Q3,L9_Q4,L9_Q5,L9_Q6,L9_Q7,L9_Q8,L9_Q9,L9_Q10,L9_Q11,L9_Q12];

const L9_TFULL = [
  L9_E_00_01,
  L9_E_01_01a, L9_E_01_01b, L9_E_01_02,
  L9_E_02_02a, L9_E_02_02b, L9_E_02_03,
  L9_E_03_03A, L9_E_03_03b, L9_E_03_04, L9_E_03_06,
  L9_E_04_04a, L9_E_04_04b, L9_E_04_041, L9_E_04_04H, L9_E_04_05,
  L9_E_05_05a, L9_E_05_05b, L9_E_05_05A, L9_E_05_051, L9_E_05_05H, L9_E_05_03,
  L9_E_06_06_1, L9_E_06_07,
  L9_E_07_07b, L9_E_07_07A, L9_E_07_071, L9_E_07_07H, L9_E_07_08,
  L9_E_08_08A, L9_E_08_08B, L9_E_08_09, L9_E_08_11,
  L9_E_09_09b, L9_E_09_091, L9_E_09_09H, L9_E_09_09A, L9_E_09_10,
  L9_E_10_10b, L9_E_10_10A, L9_E_10_10B, L9_E_10_101, L9_E_10_10H, L9_E_10_08,
  L9_E_11_11A, L9_E_11_11B, L9_E_11_12,
];

const MT_L9 = {
    id:           'MT_L9',
    label:        'L9',
    type:         'transducer',
    level:        'hard',
    alphabet:     ['a', 'b'],
    tapeAlphabet: ['a', 'b', 'A', 'B', '1', '#', '<', '□'],
    description:  "Tem como entrada uma palavra com a e b e gera como saída a quantidade de a seguido da quantidade de b em unário – Contar a e b - w#qtdea#qtdeb",
    hint:         "Use marcadores A e B para contar cada 'a' e cada 'b' separadamente, depositando '1' na zona de saída após o # para cada símbolo contado.",
    validate:     (w) => {
      const countA = (w.match(/a/g) || []).length;
      const countB = (w.match(/b/g) || []).length;
      return w + '#' + '1'.repeat(countA) + '#' + '1'.repeat(countB);
    },
    testWords:    ['aba', 'ab', 'bba'],
    formalDescription: {
      states:  '{q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12}',
      sigma:   '{a, b}',
      gamma:   '{a, b, A, B, 1, #, <, □}',
      initial: 'q0',
      final:   '{q12}',
      blank:   '□',
    },
    guidedLesson: {
      steps: [
        // 0 — Intro
        {
          prof: { message: "L9: Contar a's e b's em unário! Para 'aba' a saída é 'aba#11#1' — 2 a's e 1 b, contados em unário separados por #. A máquina usa 13 estados e a técnica de marcar símbolos para contar.", mood: 'explicando' },
          stateUpdate: { nodes: [], transitions: [] },
        },
        // 1 — Grafo completo + explicação
        {
          prof: { message: "Visão geral: q0→q1 lê o marcador inicial '<'. q1 varre a entrada e insere '#' no fim. q2 rebobina. q3 conta a's (marca A, deposita '1' via q4→q5). Quando não há mais a's, q6 insere outro '#'. q8 conta b's (marca B, deposita '1' via q9→q10). q11 rebobina e q12 aceita.", mood: 'explicando' },
          stateUpdate: { nodes: L9_NFULL, transitions: L9_TFULL },
        },
        // 2 — Fita inicial
        {
          prof: { message: "Fita inicial para 'aba': [< a b a □]. q0 lê '<' e vai para q1. q1 varre 'a','b','a' e ao tocar □ insere '#' — fita fica [< a b a # □].", mood: 'explicando' },
          stateUpdate: { nodes: L9_NFULL, transitions: L9_TFULL },
          simulateWord: 'aba', tape: ['<','a','b','a','#','□','□','□'], head: 0, activeNode: 'q0',
        },
        // 3 — Fita final ACEITA
        {
          prof: { message: "Fita final ACEITA para 'aba': [< a b a # 1 1 # 1]. Os dois '1's após o primeiro '#' representam os 2 a's; o '1' após o segundo '#' representa o 1 b. q12 aceita!", mood: 'feliz' },
          stateUpdate: { nodes: L9_NFULL, transitions: L9_TFULL },
          simulateWord: 'aba', tape: ['<','a','b','a','#','1','1','#','1'], head: 0, status: 'ACCEPTED', activeNode: 'q12',
        },
        // 4 — Descrição formal
        {
          prof: { message: "Q = {q0..q12} (13 estados). Σ = {a,b}. Γ = {a,b,A,B,1,#,<,□}. q0 inicial, q12 final. A,B são marcadores temporários; '1' é o símbolo unário da saída.", mood: 'explicando' },
          stateUpdate: { nodes: L9_NFULL, transitions: L9_TFULL },
          phase: 'FORMAL', formalFill: { states: '{q0,...,q12}', sigma: '{a, b}', gamma: '{a, b, A, B, 1, #, <, □}', initial: 'q0', blank: '□', final: '{q12}', delta: L9_TFULL },
        },
      ],
    },
  };

export default MT_L9;
