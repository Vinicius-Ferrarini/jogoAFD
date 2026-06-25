import { LEVEL_GRAPHS } from '../../levels_graphs.js';
import { makeBuilder } from '../lessonBuilder.js';

function buildLessonL54() {
  const b = makeBuilder(LEVEL_GRAPHS[54], {
    q0: [15, 50], q1: [65, 50],
  });
  const steps = [];
  b.addNodes('q0').addEdges(['q0', 'a', 'q0'], ['q0', 'c', 'q0']);
  steps.push(b.draw('λ e qualquer "a"/"c": q0 é inicial+final, com laço de {a,c}.', -1));
  steps.push(b.test('Veja λ ser aceita parada em q0 (final).', '', 0));
  b.addNodes('q1').addEdges(['q0', 'b', 'q1'], ['q1', 'c', 'q0']);
  steps.push(b.draw('Um "b" cria a obrigação de um "c": q0→q1, e q1→q0 só com "c".', 1));
  steps.push(b.test('"bc" cumpre a regra (b seguido de c): q0→q1→q0 (final). Aceita!', 'bc', 1));
  steps.push(b.test('"abc" intercala e respeita a regra: q0→q0→q1→q0 (final). Aceita!', 'abc', 1));
  steps.push(b.test('"abccc" tem "bc" seguido de c extra (laço q0). Aceita!', 'abccc', 1));
  steps.push(b.test('"aaabccc" tem a-s, depois bc, depois c-s. Aceita!', 'aaabccc', 1));
  steps.push(b.reject('Mas "b" no fim fica sem o "c" obrigatório: termina em q1, não-final!', 'b', 1));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 1));
  return steps;
}

export default { id: 54, label: "L54", formula: "L = {w ∈ {a,b,c}* / cada b é seguido de pelo menos um c}",          desc: "",                                                                 shortestWord: "",         regex: /^(a|c|bc+)*$/,                                              alphabet: ['a', 'b', 'c'],        acceptedWords: ["λ","abc","abccc","aaabccc"], rejectedWords: ["b","ab","bcb"],       hint: "Leu um 'b'? A próxima letra TEM que ser 'c'. Depois tudo fica livre.",                                              successMsg: "Condicional restrita dominada.",
    tutorials: {
      onStart: { type: 'theory', title: 'Cada "b" deve ser seguido de "c"!', dialog: [
        'L54: sempre que ler um "b", a próxima letra TEM que ser "c". Senão rejeita.',
        '"bc" ✓ "abc" ✓ "λ" ✓ "a" ✓. "b" ✗ (nenhum c após b). "bcb" ✗ (o 2º b não tem c).',
        'Apenas 2 estados: livre (q0) e esperando-c (q1). Simples mas rigoroso!',
      ] },
      onDrawGraph: { type: 'mechanic', title: '2 Estados: Livre e Esperando-c', dialog: [
        'q0(ini,f): loop a,c. Ler "b" → q1 (modo de espera).',
        'q1: ler "c" → q0 (volta ao livre). Ler "a" ou "b" → morto (sem seta = rejeição).',
        '"abc": q0—a→q0—b→q1—c→q0(f) ✓. "bcb": q0→q1→q0→q1(não-f) ✗.',
      ] },
    },
    boardWords: ['', 'bc', 'b', 'abc'],
    guidedLesson: buildLessonL54() };
