import { LEVEL_GRAPHS } from '../../levels_graphs.js';
import { makeBuilder } from '../lessonBuilder.js';

function buildLessonL56() {
  const b = makeBuilder(LEVEL_GRAPHS[56], {
    q0:[6,50], q1:[14,50], q2:[21,50], q3:[29,50], q4:[36,50], q5:[44,50],
    q6:[51,50], q7:[59,50], q8:[67,50], q12:[74,50], q13:[82,50], q14:[90,50],
    q9:[32,42], q10:[40,58], q11:[50,58],
  });
  const steps = [];
  b.addNodes('q0','q1','q2','q3','q4','q5','q6','q7','q8','q12','q13','q14')
   .addEdges(['q0','a','q1'],['q1','a','q2'],['q2','a','q3'],['q3','b','q4'],
             ['q4','c','q5'],['q5','a','q6'],['q6','b','q7'],['q7','a','q8'],
             ['q8','a','q12'],['q12','b','q13'],['q13','c','q14']);
  steps.push(b.draw('Vamos construir o caminho da menor palavra válida: "aaabcabaabc".', -1));
  steps.push(b.test('Veja como "aaabcabaabc" percorre essa espinha dorsal.', 'aaabcabaabc', 0));
  steps.push(b.reject('Mas "aabcabaabc" tem só dois "a": sem um terceiro, a máquina trava em q2!', 'aabcabaabc', 0));
  b.addEdges(['q3','a','q3'],['q8','e','q8']);
  steps.push(b.draw('Agora os laços para as repetições: a^n (em q3) e e^p (em q8).', 0));
  steps.push(b.test('Com os laços, "aaaabcabaeabc" usa um "a" extra e um "e".', 'aaaabcabaeabc', 0));
  b.addNodes('q9','q10','q11')
   .addEdges(['q3','c','q9'],['q9','b','q5'],['q5','d','q10'],['q10','d','q11'],['q11','d','q5']);
  steps.push(b.draw('E os blocos opcionais: o caminho alternativo "cb" (q9) e o ciclo (ddd).', 1));
  steps.push(b.test('"aaacbdddabaabc" entra pelo "cb" e dá uma volta no ciclo ddd.', 'aaacbdddabaabc', 1));
  b.addEdges(['q14','b','q13']);
  steps.push(b.draw('Por fim, o laço que repete o sufixo (bc)+.', 2));
  steps.push(b.test('"aaabcabaabcbc" repete o bloco "bc" no final.', 'aaabcabaabcbc', 2));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

export default { id: 56, label: "L56", formula: "L = { a^n a a a (bc+cb)(ddd)^m aba e^p a(bc)^q | n,m,p ≥ 0, q > 0 }", desc: "(trabalho)", shortestWord: "aaabcabaabc", regex: /^a{3,}(?:bc|cb)(?:ddd)*abae*a(?:bc)+$/, alphabet: ['a', 'b', 'c', 'd', 'e'], acceptedWords: ["aaabcabaabc","aaaabcabaabc","aaacbabaabc","aaabcdddabaabc","aaabcabaeeabcbc"], rejectedWords: ["aabcabaabc","aaababaabc","aaabcddabaabc","aaabcabaa","aaabcababc"], hint: "Comece com pelo menos três 'a'. Depois bifurque em 'bc' ou 'cb', repita 'ddd' em trios, escreva o miolo fixo 'aba', solte 'e's à vontade e feche com 'a' seguido de pelo menos um 'bc'.", successMsg: "Trabalho concluído — autômato gigante dominado!",
    boardWords: ['aaabcabaabc', 'aabcabaabc', 'aaaabcabaeabc', 'aaacbdddabaabc', 'aaabcabaabcbc'],
    guidedLesson: buildLessonL56(),
  };
