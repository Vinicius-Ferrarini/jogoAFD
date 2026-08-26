// ── L10: Intercalar 0/1 entre a's e b's ─────────────────────────────────────────────────
// 19 estados extraídos do JFLAP: q0–q18
// Técnica: Shift de fita — marca símbolo com A/B, insere X como placeholder,
//          propaga shifts com marcadores R/S, decodifica de volta ao final.
// Exemplo: aba → a0b1a0

const L10_Q0  = { uid: 'q0',  id: 'q0',  label: 'q0',  x: 2925, y: 3856, isInitial: true,  isFinal: false };
const L10_Q1  = { uid: 'q1',  id: 'q1',  label: 'q1',  x: 3132, y: 3860, isInitial: false, isFinal: false };
const L10_Q2  = { uid: 'q2',  id: 'q2',  label: 'q2',  x: 3363, y: 3694, isInitial: false, isFinal: false };
const L10_Q3  = { uid: 'q3',  id: 'q3',  label: 'q3',  x: 3674, y: 3777, isInitial: false, isFinal: false };
const L10_Q4  = { uid: 'q4',  id: 'q4',  label: 'q4',  x: 2861, y: 4047, isInitial: false, isFinal: false };
const L10_Q5  = { uid: 'q5',  id: 'q5',  label: 'q5',  x: 3343, y: 4068, isInitial: false, isFinal: false };
const L10_Q6  = { uid: 'q6',  id: 'q6',  label: 'q6',  x: 3665, y: 4065, isInitial: false, isFinal: false };
const L10_Q7  = { uid: 'q7',  id: 'q7',  label: 'q7',  x: 4113, y: 4052, isInitial: false, isFinal: false };
const L10_Q8  = { uid: 'q8',  id: 'q8',  label: 'q8',  x: 3852, y: 3815, isInitial: false, isFinal: false };
const L10_Q9  = { uid: 'q9',  id: 'q9',  label: 'q9',  x: 3852, y: 4337, isInitial: false, isFinal: false };
const L10_Q10 = { uid: 'q10', id: 'q10', label: 'q10', x: 4238, y: 3689, isInitial: false, isFinal: false };
const L10_Q11 = { uid: 'q11', id: 'q11', label: 'q11', x: 4601, y: 3584, isInitial: false, isFinal: false };
const L10_Q12 = { uid: 'q12', id: 'q12', label: 'q12', x: 5118, y: 3658, isInitial: false, isFinal: false };
const L10_Q13 = { uid: 'q13', id: 'q13', label: 'q13', x: 4220, y: 4416, isInitial: false, isFinal: false };
const L10_Q14 = { uid: 'q14', id: 'q14', label: 'q14', x: 4572, y: 4414, isInitial: false, isFinal: false };
const L10_Q15 = { uid: 'q15', id: 'q15', label: 'q15', x: 5109, y: 4407, isInitial: false, isFinal: false };
const L10_Q16 = { uid: 'q16', id: 'q16', label: 'q16', x: 4495, y: 4031, isInitial: false, isFinal: false };
const L10_Q17 = { uid: 'q17', id: 'q17', label: 'q17', x: 4950, y: 4045, isInitial: false, isFinal: false };
const L10_Q18 = { uid: 'q18', id: 'q18', label: 'q18', x: 5139, y: 4052, isInitial: false, isFinal: true  };

// Transições extraídas do JFLAP L10.xml
// q0: lê <
const L10_E_00_01 = { from: 'q0', to: 'q1', read: '<', write: '<', move: 'R' };
// q1: varre A/B marcados; marca a→A,R e b→B,R para processamento
const L10_E_01_01A = { from: 'q1', to: 'q1', read: 'A', write: 'A', move: 'R' };
const L10_E_01_01B = { from: 'q1', to: 'q1', read: 'B', write: 'B', move: 'R' };
const L10_E_01_02a = { from: 'q1', to: 'q2', read: 'a', write: 'A', move: 'R' };
const L10_E_01_02b = { from: 'q1', to: 'q2', read: 'b', write: 'B', move: 'R' };
const L10_E_01_04X = { from: 'q1', to: 'q4', read: 'X', write: 'X', move: 'R' };
// q2: avança varrendo a/b/X até □ e deposita X como placeholder
const L10_E_02_02a = { from: 'q2', to: 'q2', read: 'a', write: 'a', move: 'R' };
const L10_E_02_02b = { from: 'q2', to: 'q2', read: 'b', write: 'b', move: 'R' };
const L10_E_02_02X = { from: 'q2', to: 'q2', read: 'X', write: 'X', move: 'R' };
const L10_E_02_03  = { from: 'q2', to: 'q3', read: '□', write: 'X', move: 'L' };
// q3: rebobina até < com a/b/X/A/B
const L10_E_03_01  = { from: 'q3', to: 'q1', read: '<', write: '<', move: 'R' };
const L10_E_03_03a = { from: 'q3', to: 'q3', read: 'a', write: 'a', move: 'L' };
const L10_E_03_03b = { from: 'q3', to: 'q3', read: 'b', write: 'b', move: 'L' };
const L10_E_03_03A = { from: 'q3', to: 'q3', read: 'A', write: 'A', move: 'L' };
const L10_E_03_03B = { from: 'q3', to: 'q3', read: 'B', write: 'B', move: 'L' };
const L10_E_03_03X = { from: 'q3', to: 'q3', read: 'X', write: 'X', move: 'L' };
// q4: encontrou X após todos marcados → avança até □ início do shift
const L10_E_04_05  = { from: 'q4', to: 'q5', read: '□', write: '□', move: 'L' };
const L10_E_04_04X = { from: 'q4', to: 'q4', read: 'X', write: 'X', move: 'R' };
// q5: rebobina varrendo X/A/B para iniciar decodificação
const L10_E_05_06  = { from: 'q5', to: 'q6', read: '<', write: '<', move: 'R' };
const L10_E_05_05X = { from: 'q5', to: 'q5', read: 'X', write: 'X', move: 'L' };
const L10_E_05_05A = { from: 'q5', to: 'q5', read: 'A', write: 'A', move: 'L' };
const L10_E_05_05B = { from: 'q5', to: 'q5', read: 'B', write: 'B', move: 'L' };
// q6: fase de decodificação — procura X e converte A→a(via 7→8), B→b(via 7→9)
const L10_E_06_07X = { from: 'q6', to: 'q7', read: 'X', write: 'X', move: 'L' };
const L10_E_06_06A = { from: 'q6', to: 'q6', read: 'A', write: 'A', move: 'R' };
const L10_E_06_06B = { from: 'q6', to: 'q6', read: 'B', write: 'B', move: 'R' };
// q7: encontrou X, recua para achar A ou B a converter
const L10_E_07_08A = { from: 'q7', to: 'q8', read: 'A', write: 'X', move: 'R' };
const L10_E_07_09B = { from: 'q7', to: 'q9', read: 'B', write: 'X', move: 'R' };
// q8: 'a' marcado — avança até □ para depositar R (codifica 'a')
const L10_E_08_08R = { from: 'q8', to: 'q8', read: 'R', write: 'R', move: 'R' };
const L10_E_08_08S = { from: 'q8', to: 'q8', read: 'S', write: 'S', move: 'R' };
const L10_E_08_08X = { from: 'q8', to: 'q8', read: 'X', write: 'X', move: 'R' };
const L10_E_08_08A = { from: 'q8', to: 'q8', read: 'A', write: 'A', move: 'R' };
const L10_E_08_08B = { from: 'q8', to: 'q8', read: 'B', write: 'B', move: 'R' };
const L10_E_08_0801= { from: 'q8', to: 'q8', read: '0', write: '0', move: 'R' };
const L10_E_08_0811= { from: 'q8', to: 'q8', read: '1', write: '1', move: 'R' };
const L10_E_08_10  = { from: 'q8', to: 'q10', read: '□', write: '□', move: 'L' };
// q9: 'b' marcado — avança até □ para depositar S (codifica 'b')
const L10_E_09_09R = { from: 'q9', to: 'q9', read: 'R', write: 'R', move: 'R' };
const L10_E_09_09S = { from: 'q9', to: 'q9', read: 'S', write: 'S', move: 'R' };
const L10_E_09_09X = { from: 'q9', to: 'q9', read: 'X', write: 'X', move: 'R' };
const L10_E_09_09A = { from: 'q9', to: 'q9', read: 'A', write: 'A', move: 'R' };
const L10_E_09_09B = { from: 'q9', to: 'q9', read: 'B', write: 'B', move: 'R' };
const L10_E_09_0901= { from: 'q9', to: 'q9', read: '0', write: '0', move: 'R' };
const L10_E_09_0911= { from: 'q9', to: 'q9', read: '1', write: '1', move: 'R' };
const L10_E_09_13  = { from: 'q9', to: 'q13', read: '□', write: '□', move: 'L' };
// q10: rebobina varrendo R/S/0/1 até X, converte X→0 (intercalar '0' após 'a')
const L10_E_10_10S = { from: 'q10', to: 'q10', read: 'S', write: 'S', move: 'L' };
const L10_E_10_10R = { from: 'q10', to: 'q10', read: 'R', write: 'R', move: 'L' };
const L10_E_10_1001= { from: 'q10', to: 'q10', read: '0', write: '0', move: 'L' };
const L10_E_10_1011= { from: 'q10', to: 'q10', read: '1', write: '1', move: 'L' };
const L10_E_10_11X = { from: 'q10', to: 'q11', read: 'X', write: '0', move: 'L' };
// q11: deposita R (='a') no slot anterior ao 0
const L10_E_11_12X = { from: 'q11', to: 'q12', read: 'X', write: 'R', move: 'L' };
// q12: rebobina até < para próxima iteração de decodificação
const L10_E_12_16  = { from: 'q12', to: 'q16', read: '<', write: '<', move: 'R' };
const L10_E_12_12A = { from: 'q12', to: 'q12', read: 'A', write: 'A', move: 'L' };
const L10_E_12_12B = { from: 'q12', to: 'q12', read: 'B', write: 'B', move: 'L' };
const L10_E_12_12X = { from: 'q12', to: 'q12', read: 'X', write: 'X', move: 'L' };
// q13: rebobina varrendo R/S/0/1 até X, converte X→1 (intercalar '1' após 'b')
const L10_E_13_13R = { from: 'q13', to: 'q13', read: 'R', write: 'R', move: 'L' };
const L10_E_13_13S = { from: 'q13', to: 'q13', read: 'S', write: 'S', move: 'L' };
const L10_E_13_1301= { from: 'q13', to: 'q13', read: '0', write: '0', move: 'L' };
const L10_E_13_1311= { from: 'q13', to: 'q13', read: '1', write: '1', move: 'L' };
const L10_E_13_14X = { from: 'q13', to: 'q14', read: 'X', write: '1', move: 'L' };
// q14: deposita S (='b') no slot anterior ao 1
const L10_E_14_15X = { from: 'q14', to: 'q15', read: 'X', write: 'S', move: 'L' };
// q15: rebobina até < para próxima iteração
const L10_E_15_16  = { from: 'q15', to: 'q16', read: '<', write: '<', move: 'R' };
const L10_E_15_15X = { from: 'q15', to: 'q15', read: 'X', write: 'X', move: 'L' };
const L10_E_15_15A = { from: 'q15', to: 'q15', read: 'A', write: 'A', move: 'L' };
const L10_E_15_15B = { from: 'q15', to: 'q15', read: 'B', write: 'B', move: 'L' };
// q16: varre os slots R/S/A/B/X/0/1; ao encontrar X vai q7 (outro par); ao tocar □ vai q17
const L10_E_16_16A = { from: 'q16', to: 'q16', read: 'A', write: 'A', move: 'R' };
const L10_E_16_16B = { from: 'q16', to: 'q16', read: 'B', write: 'B', move: 'R' };
const L10_E_16_16S = { from: 'q16', to: 'q16', read: 'S', write: 'S', move: 'R' };
const L10_E_16_161 = { from: 'q16', to: 'q16', read: '1', write: '1', move: 'R' };
const L10_E_16_160 = { from: 'q16', to: 'q16', read: '0', write: '0', move: 'R' };
const L10_E_16_16R = { from: 'q16', to: 'q16', read: 'R', write: 'R', move: 'R' };
const L10_E_16_07X = { from: 'q16', to: 'q7',  read: 'X', write: 'X', move: 'L' };
const L10_E_16_17  = { from: 'q16', to: 'q17', read: '□', write: '□', move: 'L' };
// q17: fase final — converte R→a, S→b, rebobina até < e vai q18
const L10_E_17_17S = { from: 'q17', to: 'q17', read: 'S', write: 'b', move: 'L' };
const L10_E_17_17R = { from: 'q17', to: 'q17', read: 'R', write: 'a', move: 'L' };
const L10_E_17_1701= { from: 'q17', to: 'q17', read: '0', write: '0', move: 'L' };
const L10_E_17_1711= { from: 'q17', to: 'q17', read: '1', write: '1', move: 'L' };
const L10_E_17_18  = { from: 'q17', to: 'q18', read: '<', write: '<', move: 'R' };

const L10_NFULL = [
  L10_Q0,L10_Q1,L10_Q2,L10_Q3,L10_Q4,L10_Q5,L10_Q6,L10_Q7,L10_Q8,L10_Q9,
  L10_Q10,L10_Q11,L10_Q12,L10_Q13,L10_Q14,L10_Q15,L10_Q16,L10_Q17,L10_Q18
];

const L10_TFULL = [
  L10_E_00_01,
  L10_E_01_01A, L10_E_01_01B, L10_E_01_02a, L10_E_01_02b, L10_E_01_04X,
  L10_E_02_02a, L10_E_02_02b, L10_E_02_02X, L10_E_02_03,
  L10_E_03_01,  L10_E_03_03a, L10_E_03_03b, L10_E_03_03A, L10_E_03_03B, L10_E_03_03X,
  L10_E_04_05,  L10_E_04_04X,
  L10_E_05_06,  L10_E_05_05X, L10_E_05_05A, L10_E_05_05B,
  L10_E_06_07X, L10_E_06_06A, L10_E_06_06B,
  L10_E_07_08A, L10_E_07_09B,
  L10_E_08_08R, L10_E_08_08S, L10_E_08_08X, L10_E_08_08A, L10_E_08_08B, L10_E_08_0801, L10_E_08_0811, L10_E_08_10,
  L10_E_09_09R, L10_E_09_09S, L10_E_09_09X, L10_E_09_09A, L10_E_09_09B, L10_E_09_0901, L10_E_09_0911, L10_E_09_13,
  L10_E_10_10S, L10_E_10_10R, L10_E_10_1001, L10_E_10_1011, L10_E_10_11X,
  L10_E_11_12X,
  L10_E_12_16,  L10_E_12_12A, L10_E_12_12B, L10_E_12_12X,
  L10_E_13_13R, L10_E_13_13S, L10_E_13_1301, L10_E_13_1311, L10_E_13_14X,
  L10_E_14_15X,
  L10_E_15_16,  L10_E_15_15X, L10_E_15_15A, L10_E_15_15B,
  L10_E_16_16A, L10_E_16_16B, L10_E_16_16S, L10_E_16_161, L10_E_16_160, L10_E_16_16R, L10_E_16_07X, L10_E_16_17,
  L10_E_17_17S, L10_E_17_17R, L10_E_17_1701, L10_E_17_1711, L10_E_17_18,
];

const MT_L10 = {
    id:           'MT_L10',
    label:        'L10',
    type:         'transducer',
    level:        'hard',
    alphabet:     ['a', 'b'],
    tapeAlphabet: ['a', 'b', 'A', 'B', 'X', 'R', 'S', '0', '1', '<', '□'],
    startMarker:  '<',
    description:  "Tem como entrada uma palavra com a e b e gera como saída 0 ou 1 intercalados entre os as e bs. Ex: aba -> a0b1a0. DESAFIO",
    hint:         "Técnica de Shift de fita: marque cada símbolo com A/B, insira um placeholder X após ele, e use R/S para codificar temporariamente 'a'/'b'. No final, decodifique R→a, S→b e os X's viram 0 ou 1.",
    validate:     (w) => {
      if (!w) return '';
      let result = '';
      for (let i = 0; i < w.length; i++) {
        result += w[i];
        if (w[i] === 'a') result += '0';
        else if (w[i] === 'b') result += '1';
      }
      return result;
    },
    testWords:    ['aaa', 'abab', 'bbba'],
    formalDescription: {
      states:  '{q0, q1, ..., q18}',
      sigma:   '{a, b}',
      gamma:   '{a, b, A, B, X, R, S, 0, 1, <, □}',
      initial: 'q0',
      final:   '{q18}',
      blank:   '□',
    },
    guidedLesson: {
      steps: [
        // 0 — Intro
        {
          prof: { message: "L10 DESAFIO: Intercalar 0/1 entre os símbolos! 'aba' → 'a0b1a0'. Cada 'a' recebe '0' após si; cada 'b' recebe '1'. A máquina usa 19 estados e a técnica de Shift de fita — uma das mais complexas da MT!", mood: 'explicando' },
          stateUpdate: { nodes: [], transitions: [] },
        },
        // 1 — Grafo completo + técnica
        {
          prof: { message: "Técnica de Shift: q1 marca a→A/b→B, q2 insere X no fim, q3 rebobina. Ao achar X, vai p/ q4→q5→q6 decodificar. q7 lê X: q8(A→R) ou q9(B→S). X's viram 0/1. q17 converte R→a, S→b. q18 aceita.", mood: 'explicando' },
          stateUpdate: { nodes: L10_NFULL, transitions: L10_TFULL },
        },
        // 2 — Fita inicial
        {
          prof: { message: "Fita inicial para 'aba': [< a b a □]. q0 lê '<' e vai para q1. A fase de inserção de X's transforma a fita em [< A X b X a X □] — um placeholder após cada símbolo marcado.", mood: 'explicando' },
          stateUpdate: { nodes: L10_NFULL, transitions: L10_TFULL },
          simulateWord: 'aba', tape: ['<','a','b','a','□','□','□','□'], head: 0, activeNode: 'q0',
        },
        // 3 — Fita final ACEITA
        {
          prof: { message: "Fita final ACEITA para 'aba': [< a 0 b 1 a 0]. Os placeholders X foram convertidos: X após A→'0', X após B→'1'. q17 restaurou R→a e S→b. q18 aceita!", mood: 'feliz' },
          stateUpdate: { nodes: L10_NFULL, transitions: L10_TFULL },
          simulateWord: 'aba', tape: ['<','a','0','b','1','a','0'], head: 0, status: 'ACCEPTED', activeNode: 'q18',
        },
        // 4 — Descrição formal
        {
          prof: { message: "Q = {q0..q18} (19 estados). Σ = {a,b}. Γ = {a,b,A,B,X,R,S,0,1,<,□}. q0 inicial, q18 final. X é placeholder; A,B marcam originais; R='a' e S='b' codificam temporariamente durante o shift.", mood: 'explicando' },
          stateUpdate: { nodes: L10_NFULL, transitions: L10_TFULL },
          phase: 'FORMAL', formalFill: { states: '{q0,...,q18}', sigma: '{a, b}', gamma: '{a, b, A, B, X, R, S, 0, 1, <, □}', initial: 'q0', blank: '□', final: '{q18}', delta: L10_TFULL },
        },
      ],
    },
  };

export default MT_L10;
