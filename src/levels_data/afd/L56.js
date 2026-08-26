import { LEVEL_GRAPHS } from '../../levels_graphs.js';
import { makeBuilder } from '../lessonBuilder.js';

const LAYOUT = {
    q0:[4, 15], q1:[12, 15], q2:[19, 15], q3:[27, 15], q4:[34, 15], q5:[42, 15],
    q6:[49, 15], q7:[57, 15], q8:[65, 15], q12:[72, 15], q13:[80, 15], q14:[88, 15],
    q9:[30, 2], q10:[39, 28], q11:[48, 28],
  };

function buildLessonL56() {
  const b = makeBuilder(LEVEL_GRAPHS[56], LAYOUT);
  const steps = [];
  b.addNodes('q0','q1','q2','q3','q4','q5','q6','q7','q8','q12','q13','q14')
   .addEdges(['q0','a','q1'],['q1','a','q2'],['q2','a','q3'],['q3','b','q4'],
             ['q4','c','q5'],['q5','a','q6'],['q6','b','q7'],['q7','a','q8'],
             ['q8','a','q12'],['q12','b','q13'],['q13','c','q14']);
  steps.push(b.draw('Vamos construir o caminho da menor palavra válida: "aaabcabaabc".', -1));
  steps.push(b.test('Veja como "aaabcabaabc" percorre essa espinha dorsal.', 'aaabcabaabc', 0));
  steps.push(b.reject('Mas "aabcabaabc" tem só dois "a": sem um terceiro, a máquina trava em q2!', 'aabcabaabc', 0));
  b.addEdges(['q3','a','q3'],['q8','e','q8']);
  steps.push(b.draw('Agora os laços para as repetições: aⁿ (em q3) e eᵖ (em q8).', 0));
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

export default { id: 56, layout: LAYOUT, label: "L56", formula: "L = { aⁿ a a a (bc+cb)(ddd)ᵐ aba eᵖ a(bc)ᵏ | n,m,p ≥ 0, k > 0 }", desc: "(trabalho)", shortestWord: "aaabcabaabc", regex: /^a{3,}(?:bc|cb)(?:ddd)*abae*a(?:bc)+$/, fuzzMaxLen: 5, alphabet: ['a', 'b', 'c', 'd', 'e'], acceptedWords: ["aaabcabaabc","aaaabcabaabc","aaacbabaabc","aaabcdddabaabc","aaabcabaeeabcbc"], rejectedWords: ["aabcabaabc","aaababaabc","aaabcddabaabc","aaabcabaa","aaabcababc"], hint: "3+'a', 'bc'/'cb', 'ddd' em trios, 'aba' fixo, 'e's livres, fecha 'a'+'bc'.", successMsg: "Trabalho concluído — autômato gigante dominado!",
    boardWords: ['aaabcabaabc', 'aabcabaabc', 'aaaabcabaeabc', 'aaacbdddabaabc', 'aaabcabaabcbc'],
    guidedLesson: buildLessonL56(),
  };
