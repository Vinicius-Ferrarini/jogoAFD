import { LEVEL_GRAPHS } from '../../levels_graphs.js';
import { makeBuilder } from '../lessonBuilder.js';

function buildLessonL58() {
  const b = makeBuilder(LEVEL_GRAPHS[58], {
    q0:[4, 2], q1:[16, 2], q2:[10, 22], q3:[21, 22], q4:[27, 2], q5:[39, 2],
    q6:[50, 2], q7:[62, 22], q8:[73, 2], q9:[83, 2],
    q10:[71, 17], q11:[78, 28], q12:[88, 17],
  });
  const steps = [];
  b.addNodes('q0','q1','q4','q5','q6','q7','q8','q9')
   .addEdges(['q0','a','q1'],['q1','a','q4'],['q4','c','q5'],['q5','e','q6'],
             ['q6','a','q7'],['q7','b','q8'],['q8','e','q9']);
  steps.push(b.draw('Vamos construir o caminho da menor palavra válida: "aaceabe".', -1));
  steps.push(b.test('Veja como "aaceabe" percorre essa espinha dorsal até q9.', 'aaceabe', 0));
  steps.push(b.reject('Mas "aaeabae" pula o "c" obrigatório (q>0): q4 não tem saída por "e" e trava!', 'aaeabae', 0));
  b.addEdges(['q0','b','q0'],['q4','b','q4'],['q5','c','q5'],['q9','e','q9']);
  steps.push(b.draw('Agora os laços das repetições: b^n, b^p, c^q e e^r.', 0));
  steps.push(b.test('"baabcceabe" usa o "b" inicial, um "b" extra e dois "c".', 'baabcceabe', 0));
  b.addNodes('q2','q3')
   .addEdges(['q1','b','q2'],['q2','c','q3'],['q3','d','q1']);
  steps.push(b.draw('E o bloco opcional complexo: o ciclo (bcd).', 1));
  steps.push(b.test('"abcdaceabe" dá uma volta completa no ciclo bcd.', 'abcdaceabe', 1));
  b.addEdges(['q6','b','q6'],['q6','c','q6'],['q6','d','q6'],['q7','a','q7'],
             ['q7','c','q6'],['q7','d','q6'],['q8','a','q7'],['q8','b','q6'],
             ['q8','c','q6'],['q8','d','q6']);
  steps.push(b.draw('Mapeamos as transições restantes do DFA de sufixo "ab" (voltas de q6, q7, q8).', 1));
  steps.push(b.test('"aaceacabe" quebra e recupera o sufixo: w="acab" termina em "ab".', 'aaceacabe', 1));
  steps.push(b.reject('Já "aaceabcdae" tem w terminando em "da": sem o "b" final, q7 não sai por "e". Trava!', 'aaceabcdae', 1));
  b.addNodes('q10','q11','q12')
   .addEdges(['q9','a','q10'],['q9','b','q11'],['q9','c','q12'],
             ['q10','a','q10'],['q10','b','q11'],['q10','c','q12'],
             ['q11','b','q11'],['q11','c','q12'],['q12','c','q12']);
  steps.push(b.draw('Por fim, a cauda e* a* b* c*.', 2));
  steps.push(b.test('"aaceabeaabbcc" percorre a cauda com a², b² e c².', 'aaceabeaabbcc', 2));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

export default { id: 58, label: "L58", formula: "L = { b^n a (bcd)^m a b^p c^q e w e^r a^s b^t c^u | n,m,p,r,s,t,u ≥ 0, q > 0, w ∈ {a,b,c,d}*, w tem 'ab' como sufixo }", desc: "(trabalho — boss final)", shortestWord: "aaceabe",
    validate: (s) => {
      const delta = {
        q0:{b:'q0',a:'q1'}, q1:{b:'q2',a:'q4'}, q2:{c:'q3'}, q3:{d:'q1'},
        q4:{b:'q4',c:'q5'}, q5:{c:'q5',e:'q6'},
        q6:{b:'q6',c:'q6',d:'q6',a:'q7'}, q7:{a:'q7',c:'q6',d:'q6',b:'q8'},
        q8:{a:'q7',b:'q6',c:'q6',d:'q6',e:'q9'},
        q9:{e:'q9',a:'q10',b:'q11',c:'q12'}, q10:{a:'q10',b:'q11',c:'q12'},
        q11:{b:'q11',c:'q12'}, q12:{c:'q12'},
      };
      const finals = new Set(['q9','q10','q11','q12']);
      let cur = 'q0';
      for (const ch of s) { cur = delta[cur] && delta[cur][ch]; if (!cur) return false; }
      return finals.has(cur);
    },
    fuzzMaxLen: 6, alphabet: ['a', 'b', 'c', 'd', 'e'], acceptedWords: ["aaceabe","aaceabea","babcdabbcceabcabeeeaab","aaceabeac"], rejectedWords: ["aaceaba","aacbaabce","aaceabcdae","aaeabae"], hint: "Boss final! Estrutura: b* a (bcd)* a b* c+ — depois 'e', um w que termina em 'ab', outro 'e', e a cauda e* a* b* c*. Cada 'e' separa os blocos; o 'c' antes do primeiro 'e' é obrigatório (q>0).", successMsg: "BOSS FINAL DERROTADO! Você dominou o autômato de 13 estados! 🏆",
    boardWords: ['aaceabe', 'aaeabae', 'baabcceabe', 'abcdaceabe', 'aaceacabe', 'aaceabcdae', 'aaceabeaabbcc'],
    guidedLesson: buildLessonL58(),
  };
