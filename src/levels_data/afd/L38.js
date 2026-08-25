import { LEVEL_GRAPHS } from '../../levels_graphs.js';
import { makeBuilder } from '../lessonBuilder.js';

const LAYOUT = {
    q0: [20, 10], q1: [70, 10], q2: [20, 25], q3: [70, 25],
  };

function buildLessonL38() {
  const b = makeBuilder(LEVEL_GRAPHS[38], LAYOUT);
  const steps = [];
  b.addNodes('q0', 'q2').addEdges(['q0', 'b', 'q2']);
  steps.push(b.draw('Menor palavra "b" (0 "a" par, 1 "b" ímpar): q0—b→q2 (final).', -1));
  steps.push(b.test('Veja "b" chegar a q2 (final). Aceita!', 'b', 0));
  b.addNodes('q1', 'q3')
   .addEdges(['q0', 'a', 'q1'], ['q1', 'a', 'q0'], ['q2', 'b', 'q0'],
             ['q1', 'b', 'q3'], ['q3', 'b', 'q1'], ['q2', 'a', 'q3'], ['q3', 'a', 'q2']);
  steps.push(b.draw('Completamos o quadrado: "a" troca a paridade de a, "b" troca a paridade de b.', 1));
  steps.push(b.reject('Mas "a" tem 1 "a" (ímpar) e 0 "b" (par): para em q1, que NÃO é final!', 'a', 1));
  steps.push(b.test('"aab" tem 2 "a"s (par) e 1 "b" (ímpar): chega a q2 (final). Aceita!', 'aab', 1));
  steps.push(b.test('"bbb" tem 0 "a" (par) e 3 "b"s (ímpar): também fecha em q2 (final). Aceita!', 'bbb', 1));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 1));
  return steps;
}

export default { id: 38, layout: LAYOUT, label: "L38", formula: "L = {w ∈ {a,b}* / a quantidade de a é par e a quantidade de b é impar}", desc: "",                                                             shortestWord: "b",        regex: /^.*$/, validate: w => [...w].every(c=>c==='a'||c==='b') && [...w].filter(c=>c==='a').length%2===0 && [...w].filter(c=>c==='b').length%2===1, alphabet: ['a', 'b'],             acceptedWords: ["b","aab","bbb"],          rejectedWords: ["λ","a","ab"],          hint: "Você precisa de 4 estados para controlar: Par/Par, Par/Ímpar, Ímpar/Par, Ímpar/Ímpar.",                             successMsg: "Quadrante de paridade solucionado.",
    tutorials: {
      onStart: { type: 'theory', title: 'Paridade Dupla: a-par e b-ímpar!', dialog: [
        'L38: contar a\'s e b\'s separadamente. Aceito quando #a par E #b ímpar.',
        '"b" ✓ (0a=par, 1b=ímpar). "aab" ✓ (2a=par, 1b=ímpar). "ab" ✗ (1a=ímpar, 1b=ímpar).',
        '4 combinações de paridade → 4 estados: q0=(p,p), q2=(p,í), q1=(í,p), q3=(í,í).',
        'Cada \'a\' lido troca a paridade de a. Cada \'b\' lido troca a paridade de b.',
      ] },
      onDrawGraph: { type: 'mechanic', title: '4 Estados em Quadrado', dialog: [
        'q0(ini)=(p,p), q2(f)=(p,í), q1=(í,p), q3=(í,í). Só q2 é final.',
        'Ler \'b\': q0↔q2 e q1↔q3 (troca bit-b). Ler \'a\': q0↔q1 e q2↔q3 (troca bit-a).',
        '"aab": q0—a→q1—a→q0—b→q2(f) ✓. "ab": q0—a→q1—b→q3 (não-final) ✗.',
      ] },
    },
    boardWords: ['b', 'a', 'aab', 'bbb'],
    guidedLesson: buildLessonL38() };
