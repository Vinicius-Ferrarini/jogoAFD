import { LEVEL_GRAPHS } from '../../levels_graphs.js';
import { makeBuilder } from '../lessonBuilder.js';

function buildLessonL50() {
  const b = makeBuilder(LEVEL_GRAPHS[50], {
    q0: [4, 11], q1: [17, 11], q2: [30, 11], q3: [42, 2], q4: [41, 20],
    q5: [55, 11], q6: [69, 11], q7: [88, 11], q8: [88, 28],
  });
  const steps = [];
  b.addNodes('q0', 'q1', 'q2', 'q3', 'q5', 'q6', 'q7', 'q8')
   .addEdges(['q0', 'a', 'q1'], ['q1', 'c', 'q2'], ['q2', 'a', 'q3'], ['q3', 'b', 'q5'],
             ['q5', 'c', 'q6'], ['q6', 'a', 'q7'], ['q7', 'a', 'q8']);
  steps.push(b.draw('Espinha "acabcaa": a, c, o miolo "ab", c e o par final "aa" (q7→q8 final).', -1));
  steps.push(b.test('Veja "acabcaa" chegar a q8 (final). Aceita!', 'acabcaa', 0));
  steps.push(b.reject('Mas "acabca" tem só 1 "a" no fim: para em q7 (os "a" finais vêm em pares)!', 'acabca', 0));
  b.addNodes('q4')
   .addEdges(['q1', 'a', 'q1'], ['q2', 'c', 'q2'], ['q2', 'b', 'q4'], ['q4', 'a', 'q5'], ['q8', 'a', 'q7']);
  steps.push(b.draw('Adicionamos o miolo alternativo "ba" (q2→q4→q5), o laço de "a" em q1, o laço de "c" em q2 e o par extra de "a" (q8→q7).', 1));
  steps.push(b.test('"acbacaa" usa o miolo "ba": q2→q4→q5→q6→q7→q8 (final). Aceita!', 'acbacaa', 1));
  steps.push(b.test('"accabcaaaa" usa o laço de "c" e dois pares de "a": fecha em q8 (final). Aceita!', 'accabcaaaa', 1));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

export default { id: 50, label: "L49", formula: "L = {a^n b^m c^p / n > 0, p > 0, m >= 0 e (n+p) é impar}",          desc: "",                                                                 shortestWord: "acabcaa",  regex: /^a+c+(ab|ba)c(aa)+$/,                                      alphabet: ['a', 'b', 'c'],        acceptedWords: ["acabcaa","aacabcaa","acbacaa"], rejectedWords: ["a","acabca","ab"], hint: "Na bifurcação no meio, o caminho pode ir por 'ab' ou por 'ba'.",                                                   successMsg: "Expressão bifurcada com sucesso.",
    tutorials: {
      onStart: { type: 'theory', title: 'a+ c+ (ab|ba) c aa+ — bifurcacao!', dialog: [
        'L49: a-s, c-s, depois "ab" OU "ba", depois c, depois pares de a (min 1 par).',
        '"acabcaa" ✓ (ab, 1par-a). "aacabcaa" ✓ (2a). "acbacaa" ✓ (ba).',
        '9 estados: q0-q2 (a/c loops), bifurcacao q3/q4, q5-q8 (cauda).',
      ] },
      onDrawGraph: { type: 'mechanic', title: '9 Estados: Loops + Bifurcacao', dialog: [
        'q0—a→q1 loop a. q1—c→q2 loop c. q2—a→q3—b→q5 (ab). q2—b→q4—a→q5 (ba).',
        'q5—c→q6—a→q7—a→q8(f). q8—a→q7 (mais pares).',
        '"acbacaa": q2—b→q4—a→q5→q6→q7→q8(f) ✓.',
      ] },
    },
    boardWords: ['acabcaa', 'acabca', 'acbacaa', 'accabcaaaa'],
    guidedLesson: buildLessonL50() };
