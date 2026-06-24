import { LEVEL_GRAPHS } from '../../levels_graphs.js';
import { makeBuilder } from '../lessonBuilder.js';

function buildLessonL9() {
  const b = makeBuilder(LEVEL_GRAPHS[9], {
    q0: [15, 50], q1: [38, 50], q2: [61, 72], q3: [84, 50],
  });
  const steps = [];
  b.addNodes('q0', 'q1').addEdges(['q0', 'a', 'q1']);
  steps.push(b.draw('Menor palavra "a" (n>0): q0—a→q1 (final).', -1));
  steps.push(b.test('Veja "a" chegar a q1 (final). Aceita!', 'a', 0));
  steps.push(b.reject('Mas "b" não começa com "a" (n>0): trava logo em q0!', 'b', 0));
  b.addNodes('q2').addEdges(['q1', 'a', 'q1'], ['q1', 'b', 'q2'], ['q2', 'b', 'q2']);
  steps.push(b.draw('Adicionamos o laço de "a" e o bloco de "b"s (q1→q2, laço em q2).', 1));
  steps.push(b.test('"aabb" usa o laço de "a" e o bloco de "b"s, parando em q2 (final). Aceita!', 'aabb', 1));
  b.addNodes('q3').addEdges(['q2', 'c', 'q3'], ['q3', 'c', 'q3']);
  steps.push(b.draw('Por fim, o bloco de "c"s (q2→q3, laço em q3).', 2));
  steps.push(b.test('"aabbcc" percorre os três blocos e fecha em q3 (final). Aceita!', 'aabbcc', 2));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

export default { id: 9,  label: "L09", formula: "L = { a^n b^m c^p | n > 0, m ≥ 0, p ≥ 0 }",                         desc: "",                                                                 shortestWord: "a",        regex: /^a+b*c*$/,                                                  alphabet: ['a', 'b', 'c'],        acceptedWords: ["a","ab","abc"],            rejectedWords: ["λ","b","ba"],          hint: "Os blocos não se misturam. Primeiro só 'a's, depois só 'b's, e por fim só 'c's.",                                  successMsg: "Progresso linear perfeito!",
    tutorials: {
      onStart: { type: 'theory', title: 'Variáveis Independentes!', dialog: [
        'Três blocos independentes: a^n (n>0, obrigatório), b^m (m≥0, opcional), c^p (p≥0, opcional).',
        'Independente significa que cada bloco tem sua regra própria. "a" sozinho é válido!',
        'O fluxo é estritamente da esquerda para a direita — nunca se volta para o bloco anterior.',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Blocos Lineares com Loops', dialog: [
        'q0 (inicial, NÃO final) →(a)→ q1 (final). q1 tem loop em "a" para a\'s extras.',
        'q1 →(b)→ q2 (final, loop em "b"). q2 →(c)→ q3 (final, loop em "c").',
        'q1, q2 e q3 são todos finais — após o primeiro "a", qualquer b*c* é válido!',
      ] },
    },
    boardWords: ['a', 'b', 'aabb', 'aabbcc'],
    guidedLesson: buildLessonL9() };
