import { LEVEL_GRAPHS } from '../../levels_graphs.js';
import { makeBuilder } from '../lessonBuilder.js';

function buildLessonL60() {
  const b = makeBuilder(LEVEL_GRAPHS[60], {
    q0:[4, 15], q1:[20, 2], q2:[33, 2], q3:[20, 28], q4:[33, 28],
    q5:[56, 2], q6:[67, 2], q7:[67, 28], q8:[56, 28], q9:[88, 15],
  });
  const steps = [];
  b.addNodes('q0','q1','q2','q4','q5','q6','q7','q9')
   .addEdges(['q0','a','q1'],['q1','b','q2'],['q2','c','q4'],['q4','a','q5'],
             ['q5','b','q6'],['q6','c','q7'],['q7','a','q9']);
  steps.push(b.draw('Vamos construir o caminho da menor palavra válida: "abcabca".', -1));
  steps.push(b.test('Veja "abcabca" percorrer os dois blocos ímpar/ímpar.', 'abcabca', 0));
  b.addNodes('q3')
   .addEdges(['q1','c','q3'],['q2','b','q1'],['q3','b','q4'],['q3','c','q1'],['q4','b','q3'],['q4','c','q2']);
  steps.push(b.draw('Completamos o rastreio de paridade do bloco w (saída ímpar/ímpar é q4).', 1));
  steps.push(b.test('"acbabca" tem w="cb" (ímpar/ímpar) chegando a q4.', 'acbabca', 1));
  steps.push(b.reject('Mas "ababca" tem w="b" (só b, sem c ímpar): paramos em q2. Precisamos de b E c ímpares!', 'ababca', 1));
  b.addNodes('q8')
   .addEdges(['q5','c','q8'],['q6','b','q5'],['q7','b','q8'],['q7','c','q6'],['q8','b','q7'],['q8','c','q5']);
  steps.push(b.draw('E o mesmo rastreio no bloco x (saída ímpar/ímpar é q7).', 2));
  steps.push(b.test('"abcacba" tem x="cb" (ímpar/ímpar) chegando a q7.', 'abcacba', 2));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

export default { id: 60, label: "L60", formula: "L = { a w a x a | w,x ∈ {b,c}*, |w|b e |w|c ímpares, |x|b e |x|c ímpares }", desc: "(prova)", shortestWord: "abcabca",
    validate: (s) => { const m = /^a([bc]*)a([bc]*)a$/.exec(s); if (!m) return false; const odd = (t) => (t.match(/b/g)||[]).length%2===1 && (t.match(/c/g)||[]).length%2===1; return odd(m[1]) && odd(m[2]); },
    alphabet: ['a', 'b', 'c'], acceptedWords: ["abcabca","abcacba","abbbcabca"], rejectedWords: ["abcaa","aabca","aba","abcabcaa"], hint: "Estrutura a·w·a·x·a (três 'a's, dois blocos de b/c). Em cada bloco a quantidade de 'b' E de 'c' precisa ser ÍMPAR. Menor palavra: 'abcabca'.", successMsg: "Prova L60 resolvida — paridade ímpar dupla!",
    boardWords: ['abcabca', 'acbabca', 'ababca', 'abcacba'],
    guidedLesson: buildLessonL60(),
  };
