import { LEVEL_GRAPHS } from '../../levels_graphs.js';
import { makeBuilder } from '../lessonBuilder.js';

function buildLessonL57() {
  const b = makeBuilder(LEVEL_GRAPHS[57], {
    q0:[8,55], q1:[28,55], q2:[18,32], q3:[38,32], q4:[28,12],
    q5:[60,55], q6:[50,32], q7:[70,32], q8:[60,12], q9:[90,55],
  });
  const steps = [];
  b.addNodes('q0','q1','q5','q9')
   .addEdges(['q0','a','q1'],['q1','a','q5'],['q5','a','q9']);
  steps.push(b.draw('Vamos construir o caminho da menor palavra válida: "aaa".', -1));
  steps.push(b.test('Veja "aaa" percorrer q0→q1→q5→q9.', 'aaa', 0));
  b.addNodes('q2','q3','q4')
   .addEdges(['q1','b','q2'],['q2','b','q1'],['q1','c','q3'],['q3','c','q1'],
             ['q2','c','q4'],['q4','c','q2'],['q3','b','q4'],['q4','b','q3']);
  steps.push(b.draw('Adicionamos o rastreio de paridade do bloco w (par/par volta a q1).', 1));
  steps.push(b.test('"abbaa" tem w="bb" (par/par) e volta a q1 antes do "a" do meio.', 'abbaa', 1));
  steps.push(b.reject('Mas "abaa" tem w="b" (b ÍMPAR): paramos em q2, que não tem saída por "a". Rejeita!', 'abaa', 1));
  steps.push(b.reject('E "acaa" tem w="c" (c ÍMPAR): a máquina morre em q3. Por isso precisamos rastrear a paridade!', 'acaa', 1));
  b.addNodes('q6','q7','q8')
   .addEdges(['q5','b','q6'],['q6','b','q5'],['q5','c','q7'],['q7','c','q5'],
             ['q6','c','q8'],['q8','c','q6'],['q7','b','q8'],['q8','b','q7']);
  steps.push(b.draw('E o mesmo rastreio para o bloco x.', 2));
  steps.push(b.test('"abbabba" exercita os dois blocos, ambos par/par.', 'abbabba', 2));
  steps.push(b.reject('Já "aabaa" tem x="b" (ímpar): agora trava em q6, dentro do bloco x.', 'aabaa', 2));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

export default { id: 57, label: "L57", formula: "L = { a w a x a | w,x ∈ {b,c}*, |w|b é par e |w|c é par, |x|b é par e |x|c é par }", desc: "(trabalho)", shortestWord: "aaa",
    validate: (s) => { const m = /^a([bc]*)a([bc]*)a$/.exec(s); if (!m) return false; const even = (t) => (t.match(/b/g)||[]).length%2===0 && (t.match(/c/g)||[]).length%2===0; return even(m[1]) && even(m[2]); },
    alphabet: ['a', 'b', 'c'], acceptedWords: ["aaa","abbaa","aabba","abcbcaa","aabcbca","abbccabbcca"], rejectedWords: ["aabaa","aaaba","aaaa","aaaaaa","acbcaa","bbbaaaaa"], hint: "Estrutura a·w·a·x·a: três 'a's separam dois blocos de b/c. Em cada bloco, a quantidade de 'b' e de 'c' precisa ser PAR. Caso vazio = 'aaa'.", successMsg: "Trabalho concluído — paridade dupla em dois blocos dominada!",
    boardWords: ['aaa', 'abbaa', 'abbabba'],
    guidedLesson: buildLessonL57(),
  };
