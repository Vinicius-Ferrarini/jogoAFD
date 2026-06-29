import { LEVEL_GRAPHS } from '../../levels_graphs.js';
import { makeBuilder } from '../lessonBuilder.js';

function buildLessonL35ii() {
  const b = makeBuilder(LEVEL_GRAPHS['L35ii'], {
    q0: [10, 15], q1: [26, 15], q2: [42, 15], q3: [58, 15],
  });
  const steps = [];
  b.addNodes('q0', 'q1', 'q2', 'q3').addEdges(['q0', 'a', 'q1'], ['q1', 'b', 'q2'], ['q2', 'c', 'q3']);
  steps.push(b.draw('Prefixo exato "abc": trilho q0—a→q1—b→q2—c→q3 (final).', -1));
  steps.push(b.test('Veja "abc" percorrer o trilho até q3 (final). Aceita!', 'abc', 0));
  steps.push(b.reject('Mas "ab" não completou o prefixo: para em q2, que NÃO é final!', 'ab', 0));
  b.addEdges(['q3', 'a', 'q3'], ['q3', 'b', 'q3'], ['q3', 'c', 'q3'], ['q3', 'd', 'q3']);
  steps.push(b.draw('Confirmado o prefixo, q3—{a,b,c,d}→q3 absorve qualquer sufixo.', 1));
  steps.push(b.test('"abcd" tem o prefixo e o resto livre: fecha em q3 (final). Aceita!', 'abcd', 1));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 1));
  return steps;
}

export default { id: 3502, label: "L35.", formula: "L = {w ∈ {a,b,c,d}* / w tem abc como prefixo}",                   desc: "",                                                                 shortestWord: "abc",      regex: /^abc[abcd]*/,                                               alphabet: ['a', 'b', 'c', 'd'],   acceptedWords: ["abc","abcd","abcabc"],   rejectedWords: ["λ","ab","bca"],        hint: "Igual ao 001, mas com um alfabeto maior.",                                                                          successMsg: "Prefixo alfabético concluído.",
    tutorials: {
      onStart: { type: 'theory', title: 'Prefixo Obrigatório: "abc"!', dialog: [
        'L35_ii: toda palavra aceita DEVE começar com "abc". O resto pode ser qualquer coisa.',
        '"abcd" — válida (começa com abc). "bca" — inválida (1° símbolo é b, não a).',
        'Estratégia: 3 estados de checagem (q0→q1→q2) + estado final q3 com loop.',
        'Qualquer desvio no prefixo cai em dead-state implícito. Sem volta!',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Trilho de Prefixo + Loop Final', dialog: [
        'q0—a→q1—b→q2—c→q3(final). Cadeia linear exata para "abc".',
        'q3—{a,b,c,d}→q3: após confirmar o prefixo, qualquer símbolo é aceito.',
        'Dead implícito: q0—{b,c,d}, q1—{a,c,d}, q2—{a,b,d} — qualquer desvio rejeita permanentemente.',
      ] },
    },
    boardWords: ['abc', 'ab', 'abcd'],
    guidedLesson: buildLessonL35ii() };
