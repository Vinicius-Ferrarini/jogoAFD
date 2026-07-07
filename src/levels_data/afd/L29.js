import { LEVEL_GRAPHS } from '../../levels_graphs.js';
import { makeBuilder } from '../lessonBuilder.js';

const LAYOUT = {
    q0: [4, 15], q1: [18, 10], q2: [18, 20], q3: [32, 5], q4: [32, 15],
    q5: [48, 10], q6: [64, 15], q7: [32, 25], q8: [48, 20],
  };

function buildLessonL29() {
  const b = makeBuilder(LEVEL_GRAPHS[29], LAYOUT);
  const steps = [];
  b.addNodes('q0', 'q1', 'q2').addEdges(['q0', '0', 'q1'], ['q0', '1', 'q2']);
  steps.push(b.draw('q0 ramifica: "0"→q1 (viu 0) e "1"→q2 (viu 1 no pos1).', -1));
  b.addNodes('q3', 'q4', 'q7')
   .addEdges(['q1', '0', 'q3'], ['q1', '1', 'q4'], ['q2', '0', 'q4'], ['q2', '1', 'q7']);
  steps.push(b.draw('Pos2: acumulando 1s vistos. q7 = dois 1s já nos pos1-2!', 1));
  b.addNodes('q5', 'q8')
   .addEdges(['q3', '1', 'q5'], ['q4', '0', 'q5'], ['q4', '1', 'q8'], ['q7', '0', 'q8'], ['q7', '1', 'q8']);
  steps.push(b.draw('Pos3: q8 = dois 1s confirmados nos primeiros 3 símbolos.', 2));
  b.addNodes('q6')
   .addEdges(['q5', '1', 'q6'], ['q8', '0', 'q6'], ['q8', '1', 'q6'], ['q6', '0', 'q6'], ['q6', '1', 'q6']);
  steps.push(b.draw('q6 (final): dois 1s confirmados. Loop {0,1} absorve o resto.', 3));
  steps.push(b.test('"11" alcança q2→q7→q8→q6 (final). Aceita!', '11', 3));
  steps.push(b.test('"0011" tem 2 uns nos primeiros 4: q6 (final). Aceita!', '0011', 3));
  steps.push(b.reject('"0001" tem só 1 un nos primeiros 4: não alcança q6. Rejeita!', '0001', 3));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 3));
  return steps;
}

export default { id: 29, layout: LAYOUT, label: "L29", formula: "L = {w ∈ {0,1}* / os primeiros 4 símbolos contêm, no mínimo, dois 1's}", desc: "", shortestWord: "11", validate: w => { const first4 = [...w].slice(0,4); return first4.filter(c=>c==='1').length >= 2; }, alphabet: ['0', '1'], acceptedWords: ["11","0011","1011"],      rejectedWords: ["0","00","0001"],       hint: "Analise apenas os primeiros 4 símbolos e conte os 1s.",                                                              successMsg: "Análise de janela inicial!",
    tutorials: {
      onStart: { type: 'theory', title: 'Dois 1s nos primeiros 4 símbolos!', dialog: [
        'L29: os primeiros 4 símbolos devem conter ao menos dois "1"s.',
        '"11" ✔, "0011" ✔, "1011" ✔. "0001" ✗ (só um 1 nos primeiros 4). "00" ✗ (sem 2 uns).',
        'Palavras com menos de 4 símbolos: precisam ter 2 uns neles.',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Autômato de Janela de 4', dialog: [
        'q0 é o início. Cada caminho rastreia quantos 1s foram vistos nos primeiros 4 símbolos.',
        'q6 é o único estado final — só alcançável com ≥2 uns nos primeiros 4.',
        'Após q6, loop {0,1}: o resto da palavra é aceito sem restrição.',
      ] },
    },
    boardWords: ['11', '1', '0011', '1011'],
    guidedLesson: buildLessonL29() };
