import { LEVEL_GRAPHS } from '../../levels_graphs.js';
import { makeBuilder } from '../lessonBuilder.js';

function buildLessonL21() {
  const b = makeBuilder(LEVEL_GRAPHS[21], {
    q0: [4, 14], q1: [46, 2], q2: [88, 14], q3: [48, 28],
  });
  const steps = [];
  b.addNodes('q0').addEdges(['q0', 'a', 'q0']);
  steps.push(b.draw('λ e qualquer bloco de "a"s: q0 é inicial+final, com laço de "a".', -1));
  steps.push(b.test('Veja λ ser aceita parada em q0 (final).', '', 0));
  b.addNodes('q1').addEdges(['q0', 'b', 'q1'], ['q1', 'b', 'q1']);
  steps.push(b.draw('Bloco "b": q0→q1 (final, laço b).', 1));
  steps.push(b.test('"ab" passa do bloco a para o bloco b: q0→q1 (final). Aceita!', 'ab', 1));
  b.addNodes('q2').addEdges(['q1', 'c', 'q2'], ['q2', 'c', 'q2'], ['q0', 'c', 'q2']);
  steps.push(b.draw('Bloco "c": q1→q2 (final, laço c) e o atalho q0→q2 (pular o bloco b).', 2));
  steps.push(b.test('"abc" avança até o bloco c: q0→q1→q2 (final). Aceita!', 'abc', 2));
  b.addNodes('q3').addEdges(['q2', 'd', 'q3'], ['q3', 'd', 'q3'], ['q0', 'd', 'q3'], ['q1', 'd', 'q3']);
  steps.push(b.draw('Bloco "d": q2→q3 (final, laço d) e os atalhos q0→q3 e q1→q3.', 2));
  steps.push(b.test('"abcd" percorre os quatro blocos até q3 (final). Aceita!', 'abcd', 2));
  steps.push(b.reject('"ba" tenta "a" depois de "b": q1 não tem seta para "a" — dead-state implícito!', 'ba', 2));
  steps.push(b.test('Já "aabbccdd" respeita a ordem e usa os laços de cada bloco. Aceita!', 'aabbccdd', 2));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

export default { id: 21, label: "L21", formula: "L = {w ∈ {a,b,c,d}* / os a's precedem os b's e os c's precedem os d's}", desc: "",                                                             shortestWord: "",         regex: /^a*b*c*d*$/,                                                alphabet: ['a', 'b', 'c', 'd'],   acceptedWords: ["λ","abcd","abc"],         rejectedWords: ["ba","ca","cb"],        hint: "É uma progressão linear estrita pelo alfabeto.",                                                                    successMsg: "Ordem alfabética mantida!",
    tutorials: {
      onStart: { type: 'theory', title: 'Ordem Alfabética Estrita!', dialog: [
        'L21: símbolos em ordem a* b* c* d* — cada bloco pode aparecer 0 ou mais vezes.',
        '"λ", "abcd", "aabdd", "bbdd" — válidos. "ba" ou "ca" — inválidos (ordem errada)!',
        'Uma vez que o AFD avança para o bloco "b", nunca volta para "a". Transições unidirecionais!',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Cadeia de Blocos com Atalhos', dialog: [
        '4 estados em zigue-zague: <b>q0</b>(a,ini,f), <b>q1</b>(b,f), <b>q2</b>(c,f), <b>q3</b>(d,f) — todos finais!',
        'Atalhos: q0→q3(d) e q1→q3(d). "ad" ✔ (pula b e c), "bd" ✔ (pula c), "cd" ✔ "d" ✔',
        '"ba" é rejeitado: q1 sem seta para "a" — dead-state implícito. A ordem importa!',
      ] },
    },
    boardWords: ['', 'ab', 'abc', 'abcd', 'ba', 'aabbccdd'],
    guidedLesson: buildLessonL21() };
