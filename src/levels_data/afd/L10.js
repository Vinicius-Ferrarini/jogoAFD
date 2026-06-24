import { LEVEL_GRAPHS } from '../../levels_graphs.js';
import { makeBuilder } from '../lessonBuilder.js';

function buildLessonL10() {
  const b = makeBuilder(LEVEL_GRAPHS[10], {
    q0: [20, 65], q1: [20, 35], q2: [50, 65], q3: [80, 65], q4: [80, 35],
  });
  const steps = [];
  b.addNodes('q0', 'q2', 'q3').addEdges(['q0', 'b', 'q2'], ['q2', 'b', 'q3']);
  steps.push(b.draw('Menor palavra "bb" (o núcleo fixo): q0—b→q2—b→q3 (final).', -1));
  steps.push(b.test('Veja "bb" percorrer o núcleo até q3 (final). Aceita!', 'bb', 0));
  b.addNodes('q1').addEdges(['q0', 'a', 'q1'], ['q1', 'a', 'q0']);
  steps.push(b.draw('Adicionamos o vai-e-volta q0↔q1 para o prefixo PAR de "a"s.', 1));
  steps.push(b.reject('Mas "abb" tem 1 "a" (ímpar) antes do núcleo: trava em q1!', 'abb', 1));
  steps.push(b.test('Já "aabb" tem 2 "a"s (par): volta a q0 e segue para o núcleo. Aceita!', 'aabb', 1));
  b.addNodes('q4').addEdges(['q3', 'a', 'q4'], ['q4', 'a', 'q3']);
  steps.push(b.draw('E o vai-e-volta q3↔q4 para o sufixo PAR de "a"s.', 2));
  steps.push(b.test('"bbaa" fecha o núcleo e usa o par de "a"s do sufixo. Aceita!', 'bbaa', 2));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

export default { id: 10, label: "L10", formula: "L = { a^n b b a^m | n,m ≥ 0 e pares }",                              desc: "",                                                                 shortestWord: "bb",       regex: /^(aa)*bb(aa)*$/,                                            alphabet: ['a', 'b'],             acceptedWords: ["bb","aabb","bbaa"],        rejectedWords: ["abb","bba","b"],       hint: "Começa com 'a's pares (ou zero), o núcleo é 'bb', termina com 'a's pares.",                                        successMsg: "Núcleo isolado com sucesso!",
    tutorials: {
      onStart: { type: 'theory', title: 'Dois Vai-e-Volta nos Flancos!', dialog: [
        'L10 tem um núcleo fixo "bb" cercado por a\'s em quantidade PAR.',
        'Prefixo: 0, 2, 4... "a"s antes do "bb". Sufixo: 0, 2, 4... "a"s depois.',
        'São dois <u>vai-e-volta</u> independentes — um de cada lado do núcleo!',
        'Palavra mais curta: "bb" — pois n,m ≥ 0, os "a"s são opcionais.',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Três Zonas no Grafo', dialog: [
        'Zona 1 (Esquerda): <b>q0</b>↔<b>q1</b> com "a" — conta a\'s PARES antes do núcleo.',
        'Zona 2 (Centro): <b>q0</b>→<b>q2</b>→<b>q3</b>(final) com "bb" — o núcleo fixo.',
        'Zona 3 (Direita): <b>q3</b>↔<b>q4</b> com "a" — conta a\'s PARES após o núcleo!',
      ] },
    },
    boardWords: ['bb', 'abb', 'aabb', 'bbaa'],
    guidedLesson: buildLessonL10() };
