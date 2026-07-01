import { LEVEL_GRAPHS } from '../../levels_graphs.js';
import { makeBuilder } from '../lessonBuilder.js';

function buildLessonL59() {
  const b = makeBuilder(LEVEL_GRAPHS[59], {
    q0:[10, 18], q1:[25, 12], q2:[40, 6], q3:[60, 9], q4:[70, 18],
  });
  const steps = [];
  b.addNodes('q0','q1','q2','q3','q4')
   .addEdges(['q0','b','q1'],['q1','b','q2'],['q2','c','q3'],['q3','d','q4']);
  steps.push(b.draw('Vamos construir o caminho da palavra "bbcd": b em par, depois c, depois d.', -1));
  steps.push(b.test('Veja como "bbcd" percorre essa espinha dorsal.', 'bbcd', 0));
  steps.push(b.reject('Mas "bbb" tem número ímpar de "b": sobra um "b" e a máquina trava em q2!', 'bbb', 0));
  b.addEdges(['q0','a','q0'],['q3','c','q3'],['q4','d','q4']);
  steps.push(b.draw('Agora os laços para as repetições: a*, c* e d*.', 1));
  steps.push(b.test('"aabbccdd" usa os laços de a, c e d (com um par de b).', 'aabbccdd', 1));
  b.addEdges(['q2','b','q1'],['q0','c','q3'],['q0','d','q4'],['q2','d','q4']);
  steps.push(b.draw('E as ramificações: o retorno do par de b e os atalhos para c e d.', 2));
  steps.push(b.test('"bbbb" repete o par de b duas vezes (usa o retorno q2→q1).', 'bbbb', 2));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

export default { id: 59, label: "L59", formula: "L = { a^n b^2m c^p d^q | n,m,p,q ≥ 0 }", desc: "(prova)", shortestWord: "", regex: /^a*(bb)*c*d*$/, alphabet: ['a', 'b', 'c', 'd'], acceptedWords: ["a","bb","abbc","bbdd",""], rejectedWords: ["b","bbb","abbcdb","cba"], hint: "Ordem fixa: a's, depois b's (em quantidade PAR), depois c's, depois d's. Um número ímpar de 'b' rejeita.", successMsg: "Prova L59 resolvida!",
    boardWords: ['bbcd', 'bbb', 'aabbccdd', 'bbbb'],
    guidedLesson: buildLessonL59(),
  };
