import { LEVEL_GRAPHS } from '../../levels_graphs.js';
import { makeBuilder } from '../lessonBuilder.js';

const LAYOUT = {
    q0: [4, 15], q1: [22, 5], q2: [16, 25], q3: [46, 5], q4: [46, 25],
    q5: [54, 12], q6: [54, 18], q7: [70, 15],
  };

function buildLessonL37() {
  const b = makeBuilder(LEVEL_GRAPHS[37], LAYOUT);
  const steps = [];
  b.addNodes('q0', 'q1', 'q3', 'q5', 'q7')
   .addEdges(['q0', 'a', 'q1'], ['q1', 'b', 'q3'], ['q3', 'c', 'q5'], ['q5', 'd', 'q7']);
  steps.push(b.draw('Caça à subpalavra "abcd": q0→q1→q3→q5→q7 (final).', -1));
  b.addNodes('q2', 'q4', 'q6')
   .addEdges(
     ['q3', 'a', 'q1'],
     ['q0', 'd', 'q2'], ['q2', 'c', 'q4'], ['q4', 'b', 'q6'], ['q6', 'a', 'q7'],
     ['q3', 'b', 'q0'], ['q3', 'd', 'q2'],
     ['q5', 'a', 'q1'],
     ['q6', 'b', 'q0'], ['q6', 'c', 'q0'], ['q6', 'd', 'q2'],
     ['q4', 'a', 'q1'], ['q4', 'c', 'q0'], ['q4', 'd', 'q2'],
     ['q2', 'a', 'q1'], ['q2', 'b', 'q0'], ['q2', 'd', 'q2'],
     ['q1', 'a', 'q1'], ['q1', 'd', 'q2'], ['q1', 'c', 'q0'],
     ['q0', 'b', 'q0'], ['q0', 'c', 'q0'],
     ['q7', 'a', 'q7'], ['q7', 'b', 'q7'], ['q7', 'c', 'q7'], ['q7', 'd', 'q7'],
     ['q5', 'b', 'q0'], ['q5', 'c', 'q0'],
   );
  steps.push(b.draw('Ramo "dcba" (q0→q2→q4→q6→q7) + resets KMP para os dois padrões.', 1));
  steps.push(b.test('"abcd" alcança q7 (final). Aceita!', 'abcd', 1));
  steps.push(b.test('"dcba" alcança q7 (final). Aceita!', 'dcba', 1));
  steps.push(b.test('"babcd" ignora o "b" inicial e acha "abcd": q7 (final). Aceita!', 'babcd', 1));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 1));
  return steps;
}

export default { id: 37, layout: LAYOUT, label: "L37", formula: "L = {w ∈ {a,b,c,d}* / w tem abcd ou dcba como subpalavra}",        desc: "",                                                                 shortestWord: "abcd",     regex: /^[abcd]*(abcd|dcba)[abcd]*$/,                               alphabet: ['a', 'b', 'c', 'd'],   acceptedWords: ["abcd","dcba","aabcdb"], rejectedWords: ["λ","abc","dcb"],       hint: "Dois caminhos independentes saindo do início que caem num mesmo estado de vitória.",                                successMsg: "Bifurcação de subpalavras dominada!",
    tutorials: {
      onStart: { type: 'theory', title: 'Subpalavra: "abcd" ou "dcba"!', dialog: [
        'L37: basta conter "abcd" ou "dcba" em qualquer posição da palavra.',
        '"abcd" ✓, "dcba" ✓, "aabcdb" ✓ (contém "abcd"). "abc", "dcb" ✗ (incompletos).',
        'Dois caminhos independentes do q0 convergem para o mesmo estado final q7.',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Dois Ramos + Resets KMP', dialog: [
        'Ramo "abcd" (topo): q0—a→q1—b→q3—c→q5—d→q7(f). "abcd" aceito!',
        'Ramo "dcba" (base): q0—d→q2—c→q4—b→q6—a→q7(f). "dcba" aceito!',
        'q7 é poço (loop a,b,c,d). Resets KMP: "a" reinicia em q1, "d" em q2 — nenhum símbolo desperdiçado.',
      ] },
    },
    boardWords: ['abcd', 'abc', 'babcd'],
    guidedLesson: buildLessonL37() };
