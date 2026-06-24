import { LEVEL_GRAPHS } from '../../levels_graphs.js';
import { makeBuilder } from '../lessonBuilder.js';

function buildLessonL39() {
  const b = makeBuilder(LEVEL_GRAPHS[39], { pp: [28, 25], pi: [72, 25], ip: [28, 78], ii: [72, 78] });
  const steps = [];
  b.addNodes('pp', 'pi').addEdges(['pp', 'b', 'pi']);
  steps.push(b.draw('Menor palavra "b" (0 "a" par, 1 "b" ímpar): pp—b→pi (final).', -1));
  steps.push(b.test('Veja "b" chegar a pi (final). Aceita!', 'b', 0));
  b.addNodes('ip', 'ii')
   .addEdges(['pp', 'a', 'ip'], ['ip', 'a', 'pp'], ['pi', 'a', 'ii'], ['ii', 'a', 'pi'],
             ['pi', 'b', 'pp'], ['ip', 'b', 'ii'], ['ii', 'b', 'ip']);
  steps.push(b.draw('Completamos o quadrado: "a" troca a linha, "b" troca a coluna (pi = par/ímpar).', 1));
  steps.push(b.reject('Mas "a" tem 1 "a" (ímpar) e 0 "b" (par): para em ip, que NÃO é final!', 'a', 1));
  steps.push(b.test('"aab" tem 2 "a"s (par) e 1 "b" (ímpar): chega a pi (final). Aceita!', 'aab', 1));
  steps.push(b.test('"bbb" tem 0 "a" (par) e 3 "b"s (ímpar): também fecha em pi (final). Aceita!', 'bbb', 1));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

export default { id: 39, label: "L38", formula: "L = { (a+b)* | qtd de 'a' é par, qtd de 'b' é ímpar }",            desc: "",                                                                 shortestWord: "b",        regex: /^.*$/, validate: w => [...w].filter(c=>c==='a').length%2===0 && [...w].filter(c=>c==='b').length%2===1, alphabet: ['a', 'b'],             acceptedWords: ["b","aab","bbb"],          rejectedWords: ["λ","a","ab"],          hint: "Você precisa de 4 estados para controlar: Par/Par, Par/Ímpar, Ímpar/Par, Ímpar/Ímpar.",                             successMsg: "Quadrante de paridade solucionado.",
    tutorials: {
      onStart: { type: 'theory', title: 'Paridade Dupla: a-par e b-ímpar!', dialog: [
        'L38: contar a\'s e b\'s separadamente. Aceito quando #a par E #b ímpar.',
        '"b" ✓ (0a=par, 1b=ímpar). "aab" ✓ (2a=par, 1b=ímpar). "ab" ✗ (1a=ímpar, 1b=ímpar).',
        '4 combinações de paridade → 4 estados: (p,p)=q0, (p,í)=q1, (í,p)=q2, (í,í)=q3.',
        'Cada \'a\' lido troca a paridade de a. Cada \'b\' lido troca a paridade de b.',
      ] },
      onDrawGraph: { type: 'mechanic', title: '4 Estados em Quadrado', dialog: [
        'q0(ini)=(p,p), q1(f)=(p,í), q2=(í,p), q3=(í,í). Só q1 é final.',
        'Ler \'b\': q0↔q1 e q2↔q3 (troca bit-b). Ler \'a\': q0↔q2 e q1↔q3 (troca bit-a).',
        '"aab": q0—a→q2—a→q0—b→q1(f) ✓. "ab": q0—a→q2—b→q3 (não-final) ✗.',
      ] },
    },
    boardWords: ['b', 'a', 'aab', 'bbb'],
    guidedLesson: buildLessonL39() };
