import { LEVEL_GRAPHS } from '../../levels_graphs.js';
import { makeBuilder } from '../lessonBuilder.js';

function buildLessonL61() {
  const b = makeBuilder(LEVEL_GRAPHS[61], {
    q0:[5, 20], q1:[25, 20], q2:[22, 10] , q3:[45, 20] , q4:[45, 10], q5:[65, 20], q6:[65, 10],
  });
  const steps = [];
  b.addNodes('q0','q1','q2','q3')
   .addEdges(['q0','1','q2'],['q2','1','q3'],['q3','0','q1']);
  steps.push(b.draw('Vamos construir o caminho que aceita "110" (valor 6): q0→q2→q3→q1.', -1));
  steps.push(b.test('Veja "110" terminar em q1 (resto 0 = aceita).', '110', 0));
  steps.push(b.reject('Mas "1" termina em q2 (resto 1): não é estado final, então rejeita!', '1', 0));
  b.addEdges(['q0','0','q1'],['q1','0','q1'],['q1','1','q2']);
  steps.push(b.draw('q1 é o resto 0 (aceita): adicionamos seu laço e a entrada por "0".', 1));
  steps.push(b.test('"000" fica no laço de q1 (valor 0, múltiplo de 6).', '000', 1));
  b.addNodes('q4','q5','q6')
   .addEdges(['q2','0','q4'],['q4','0','q5'],['q4','1','q6'],['q3','1','q2'],
             ['q5','0','q4'],['q5','1','q3'],['q6','0','q5'],['q6','1','q6']);
  steps.push(b.draw('Cada estado é um resto mod 6: mapeamos as transições dos restos 2, 4 e 5.', 2));
  steps.push(b.test('"10010" (valor 18) passa pelos restos 2 e 4 e aceita.', '10010', 2));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

export default { id: 61, label: "L61", formula: "L = { w ∈ {0,1}* | w é múltiplo de 6 }", desc: "(prova)", shortestWord: "0",
    validate: (w) => { if (w === '' || !/^[01]+$/.test(w)) return false; let r = 0; for (const ch of w) r = (r*2 + (ch === '1' ? 1 : 0)) % 6; return r === 0; },
    alphabet: ['0', '1'], acceptedWords: ["0","110","1100","10010"], rejectedWords: ["1","10","101","111"], hint: "Leia da esquerda para a direita acumulando o resto mod 6: a cada bit, resto = (resto×2 + bit) mod 6. Aceita se terminar em resto 0. A palavra vazia não conta.", successMsg: "Prova L61 resolvida — máquina de módulo 6!",
    boardWords: ['110', '1', '000', '10010'],
    guidedLesson: buildLessonL61(),
  };
