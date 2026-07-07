import { LEVEL_GRAPHS } from '../../levels_graphs.js';
import { makeBuilder } from '../lessonBuilder.js';

const LAYOUT = {
    q0: [4, 15], q1: [22, 15], q2: [40, 15], q3: [58, 15], q4: [74, 15],
  };

function buildLessonL13() {
  const b = makeBuilder(LEVEL_GRAPHS[13], LAYOUT);
  const steps = [];
  b.addNodes('q0', 'q1', 'q2', 'q3', 'q4')
   .addEdges(['q0', 'a', 'q1'], ['q1', 'b', 'q2'], ['q2', 'c', 'q3'], ['q3', 'd', 'q4']);
  steps.push(b.draw('Menor palavra "abcd" (1 bloco ab + 1 bloco cd): cadeia q0→q1→q2→q3→q4 (final).', -1));
  steps.push(b.test('Veja "abcd" percorrer a cadeia até q4 (final). Aceita!', 'abcd', 0));
  steps.push(b.reject('Mas "ab" não tem o bloco (cd)+ obrigatório (m>0): para em q2, que NÃO é final!', 'ab', 0));
  b.addEdges(['q2', 'a', 'q1']);
  steps.push(b.draw('Adicionamos o retorno q2—a→q1, que repete o ciclo "ab".', 1));
  steps.push(b.test('Com o retorno, "ababcd" dá duas voltas no ciclo ab e fecha em q4. Aceita!', 'ababcd', 1));
  b.addEdges(['q4', 'c', 'q3']);
  steps.push(b.draw('E o retorno q4—c→q3, que repete o ciclo "cd".', 2));
  steps.push(b.test('"abcdcd" repete o bloco cd e fecha em q4. Aceita!', 'abcdcd', 2));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

export default { id: 13, layout: LAYOUT, label: "L13", formula: "L = {(ab)^n (cd)^m / n > 0, m > 0}",                               desc: "",                                                                 shortestWord: "abcd",     regex: /^(ab)+(cd)+$/,                                              alphabet: ['a', 'b', 'c', 'd'],   acceptedWords: ["abcd","ababcd","abcdcd"], rejectedWords: ["ab","cd","abdc"],      hint: "Blocos duplos de 'ab' seguidos por blocos duplos de 'cd'.",                                                        successMsg: "Padrão silábico validado!",
    tutorials: {
      onStart: { type: 'theory', title: 'Dois Ciclos em Série — Engrenagens!', dialog: [
        'Dois padrões cíclicos encadeados: (ab)^n depois (cd)^m, com n,m ≥ 1.',
        'Cada ciclo exige seu par de estados — duas "engrenagens" separadas no grafo.',
        'As engrenagens são conectadas por uma <u>seta-ponte</u>: do fim do ciclo ab para o início de cd!',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'A Seta-Ponte Entre os Ciclos', dialog: [
        'Ciclo AB: <b>q1</b>→(a)→<b>q1</b>. Espera — ciclo correto: q0→q1(a), q1→q2(b), q2→q1(a).',
        'Seta-ponte: <b>q2</b>→<b>q3</b> com "c" — saiu do ciclo ab, entrou no ciclo cd.',
        'Como n,m ≥ 1, não há atalho! O ciclo ab gira ao menos UMA vez antes da ponte.',
      ] },
    },
    boardWords: ['abcd', 'ab', 'ababcd', 'abcdcd'],
    guidedLesson: buildLessonL13() };
