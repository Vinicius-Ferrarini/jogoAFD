import { LEVEL_GRAPHS } from '../../levels_graphs.js';
import { makeBuilder } from '../lessonBuilder.js';

const LAYOUT = {
    q0: [4, 15], q1: [24, 15], q2: [44, 15], q3: [64, 15],
  };

function buildLessonL16() {
  const b = makeBuilder(LEVEL_GRAPHS[16], LAYOUT);
  const steps = [];
  b.addNodes('q0', 'q1', 'q2', 'q3')
   .addEdges(['q0', 'a', 'q1'], ['q1', 'b', 'q2'], ['q2', 'c', 'q3']);
  steps.push(b.draw('Menor palavra "abc" (um "a", um "b", um "c" em ordem): q0→q1→q2→q3 (final).', -1));
  steps.push(b.test('Veja "abc" percorrer a cadeia até q3 (final). Aceita!', 'abc', 0));
  steps.push(b.reject('Mas "ab" não achou o "c": para em q2, que NÃO é final!', 'ab', 0));
  b.addEdges(
    ['q0', 'b', 'q0'], ['q0', 'c', 'q0'],
    ['q1', 'a', 'q1'], ['q1', 'c', 'q1'],
    ['q2', 'a', 'q2'], ['q2', 'b', 'q2'],
    ['q3', 'a', 'q3'], ['q3', 'b', 'q3'], ['q3', 'c', 'q3']
  );
  steps.push(b.draw('Adicionamos os laços de espera: cada estado ignora símbolos que ainda não procura.', 1));
  steps.push(b.test('"aabc" usa o laço de q1 (ignora o 2º "a") e fecha em q3. Aceita!', 'aabc', 1));
  steps.push(b.test('"abbc" usa o laço de q2 (ignora o 2º "b") e fecha em q3. Aceita!', 'abbc', 1));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 1));
  return steps;
}

export default { id: 16, layout: LAYOUT, label: "L16", formula: "L = {u a v b x c y | u,v,x,y ∈ {a,b,c}*}",                         desc: "",                                                                 shortestWord: "abc",      regex: /^[abc]*a[abc]*b[abc]*c[abc]*$/,                             alphabet: ['a', 'b', 'c'],        acceptedWords: ["abc","aabc","abbc"],       rejectedWords: ["λ","ab","bc"],         hint: "A palavra tem que ter pelo menos um 'a', um 'b' e um 'c', na ordem.",                                               successMsg: "Filtro de caracteres construído.",
    tutorials: {
      onStart: { type: 'theory', title: 'Busca Sequencial de Símbolos!', dialog: [
        'L16 exige ao menos um "a", um "b" e um "c" — nessa ORDEM, mas com qualquer coisa entre eles.',
        '"aabc", "abbc", "abc" — válidos. "bca" ou "acb" — inválidos (ordem errada)!',
        'Estratégia: rastrear o PROGRESSO: buscando "a" → achei → buscando "b" → achei → buscando "c" → fim!',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Estados de Progresso + Loops', dialog: [
        '4 estados: <b>q0</b>(busca a) → <b>q1</b>(busca b) → <b>q2</b>(busca c) → <b>q3</b>(final).',
        'Enquanto aguarda o próximo alvo, o estado fica em <u>loop</u> para os outros símbolos.',
        '<b>q0</b> loop b,c; <b>q1</b> loop a,c; <b>q2</b> loop a,b; <b>q3</b> loop a,b,c.',
      ] },
    },
    boardWords: ['abc', 'ab', 'aabc', 'abbc'],
    guidedLesson: buildLessonL16() };
