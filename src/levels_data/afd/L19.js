import { LEVEL_GRAPHS } from '../../levels_graphs.js';
import { makeBuilder } from '../lessonBuilder.js';

function buildLessonL19() {
  const b = makeBuilder(LEVEL_GRAPHS[19], {
    q0: [13, 29], q1: [37, 29], q2: [14, 68], q3: [40, 70],
  });
  const steps = [];
  b.addNodes('q0', 'q1', 'q3').addEdges(['q0', 'a', 'q1'], ['q1', 'b', 'q3']);
  steps.push(b.draw('Menor palavra "ab" (1 "a", 1 "b" = ímpar/ímpar): q0—a→q1—b→q3 (final).', -1));
  steps.push(b.test('Veja "ab" chegar a q3 (final). Aceita!', 'ab', 0));
  steps.push(b.reject('Mas "a" tem 1 "a" e 0 "b" (b par): para em q1, que NÃO é final!', 'a', 0));
  b.addNodes('q2').addEdges(['q1', 'a', 'q0'], ['q0', 'b', 'q2'], ['q2', 'b', 'q0'],
                            ['q2', 'a', 'q3'], ['q3', 'a', 'q2'], ['q3', 'b', 'q1']);
  steps.push(b.draw('Completamos o quadrado: "a" troca a linha, "b" troca a coluna (q3 = ímpar/ímpar).', 1));
  steps.push(b.test('"ba" chega a q3 pelo outro lado: q0—b→q2—a→q3 (final). Aceita!', 'ba', 1));
  steps.push(b.reject('"abab" tem 2 "a"s e 2 "b"s (ambos pares): volta a q0, que NÃO é final!', 'abab', 1));
  steps.push(b.test('Já "aaab" tem 3 "a"s e 1 "b" (ímpar/ímpar): q0→q1→q0→q1→q3 (final). Aceita!', 'aaab', 1));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

export default { id: 19, label: "L19", formula: "L = {w ∈ {a,b}* / w tem um número impar de ab's}",           desc: "",                                                                 shortestWord: "ab",       validate: (w) => { let a=0,b=0; for(const c of w){if(c==='a')a++;else if(c==='b')b++;} return a%2===1&&b%2===1; },                                                                           alphabet: ['a', 'b'],             acceptedWords: ["ab","ba","aaab"],          rejectedWords: ["λ","aa","abab","b"],   hint: "Cada 'a' alterna a paridade do contador de a's; cada 'b' alterna o de b's. Aceite quando os dois forem ímpares.",  successMsg: "Paridade dupla dominada!",
    tutorials: {
      onStart: { type: 'theory', title: 'Paridade Dupla!', dialog: [
        'Aceitar quando a quantidade de "a"s E a de "b"s são ambas ímpares ao mesmo tempo.',
        'Quadrado 2×2: q0(par,par), q1(ímpar,par), q2(par,ímpar), q3(ímpar,ímpar). Só q3 aceita!',
        'Cada "a" lido troca a linha (cima↔baixo). Cada "b" lido troca a coluna (esq↔dir).',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Quadrado de Paridade Dupla', dialog: [
        'Topo: <b>q0</b>(ini)↔<b>q1</b> com "a". Base: <b>q2</b>↔<b>q3</b>(final) com "a".',
        'Esquerda: <b>q0</b>↔<b>q2</b> com "b". Direita: <b>q1</b>↔<b>q3</b> com "b".',
        'Zero diagonais — quadrado limpo! "ab": q0→q1(a)→q3(b) ✔ "ba": q0→q2(b)→q3(a) ✔',
      ] },
    },
    boardWords: ['ab', 'a', 'ba', 'abab', 'aaab'],
    guidedLesson: buildLessonL19() };
