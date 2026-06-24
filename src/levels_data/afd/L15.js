import { LEVEL_GRAPHS } from '../../levels_graphs.js';
import { makeBuilder } from '../lessonBuilder.js';

function buildLessonL15() {
  const b = makeBuilder(LEVEL_GRAPHS[15], { q0: [28, 50], q1: [68, 50] });
  const steps = [];
  b.addNodes('q0');
  steps.push(b.draw('A menor palavra é λ (comprimento 0 = par): q0 é inicial E final.', -1));
  steps.push(b.test('Veja λ ser aceita parada em q0 (final).', '', 0));
  b.addNodes('q1').addEdges(['q0', 'a', 'q1'], ['q1', 'a', 'q0']);
  steps.push(b.draw('Adicionamos o vai-e-volta q0↔q1 para os "a"s (q1 = comprimento ímpar).', 1));
  steps.push(b.reject('Mas "a" tem comprimento 1 (ímpar): termina em q1, que NÃO é final!', 'a', 1));
  steps.push(b.test('Já "aa" tem comprimento 2 (par): volta a q0 (final). Aceita!', 'aa', 1));
  b.addEdges(['q0', 'b', 'q1'], ['q1', 'b', 'q0']);
  steps.push(b.draw('O "b" faz o mesmo vai-e-volta: o símbolo não importa, só o comprimento.', 2));
  steps.push(b.test('"ab" tem comprimento 2 (par) e fecha em q0. Aceita!', 'ab', 2));
  steps.push(b.test('E "bb" também tem comprimento par. Aceita!', 'bb', 2));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

export default { id: 15, label: "L15", formula: "L = { w ∈ {a,b}* | |w|a + |w|b é par }",                            desc: "",                                                                 shortestWord: "",         regex: /^([ab]{2})*$/,                                              alphabet: ['a', 'b'],             acceptedWords: ["λ","aa","ab"],            rejectedWords: ["a","b","aab"],         hint: "Não importa a ordem, desde que o tamanho total da palavra seja par.",                                               successMsg: "Tamanho par garantido com sucesso.",
    tutorials: {
      onStart: { type: 'theory', title: 'Tamanho Par — O Símbolo Não Importa!', dialog: [
        'L15: qualquer "a" ou "b" lido aumenta o comprimento em 1.',
        'Par ou ímpar depende APENAS de quantas letras foram lidas — não de qual letra!',
        '"a" e "b" se comportam identicamente: ambos alternam a paridade do comprimento.',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Vai-e-Volta Universal', dialog: [
        'Estrutura mínima: <b>q0</b>(par, final) ↔ <b>q1</b>(ímpar).',
        'Adicione q0↔q1 com "a" E q0↔q1 com "b" — são 4 setas ao total.',
        'As 4 setas fazem o mesmo vai-e-volta para qualquer símbolo. Elegante e mínimo!',
      ] },
    },
    boardWords: ['', 'a', 'aa', 'ab', 'bb'],
    guidedLesson: buildLessonL15() };
