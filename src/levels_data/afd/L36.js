import { LEVEL_GRAPHS } from '../../levels_graphs.js';
import { makeBuilder } from '../lessonBuilder.js';

const LAYOUT = {
    q0: [8, 24], q1: [24, 8], q2: [40, 8], q3: [56, 16], q4: [72, 24],
  };

function buildLessonL36() {
  const b = makeBuilder(LEVEL_GRAPHS[36], LAYOUT);
  const steps = [];
  b.addNodes('q0', 'q1', 'q2', 'q3', 'q4')
   .addEdges(['q0', 'd', 'q1'], ['q1', 'c', 'q2'], ['q2', 'b', 'q3'], ['q3', 'a', 'q4']);
  steps.push(b.draw('Espinha do sufixo "dcba": q0→q1→q2→q3→q4 (final).', -1));
  steps.push(b.test('Veja "dcba" percorrer a cadeia até q4 (final). Aceita!', 'dcba', 0));
  steps.push(b.reject('Mas "dcb" não completou o "dcba": para em q3, que NÃO é final!', 'dcb', 0));
  b.addEdges(['q0', 'a', 'q0'], ['q0', 'b', 'q0'], ['q0', 'c', 'q0'],
             ['q1', 'd', 'q1'], ['q1', 'a', 'q0'], ['q1', 'b', 'q0'],
             ['q2', 'a', 'q0'], ['q2', 'c', 'q0'], ['q2', 'd', 'q1'],
             ['q3', 'b', 'q0'], ['q3', 'd', 'q1'],
             ['q4', 'a', 'q0'], ['q4', 'b', 'q0'], ['q4', 'c', 'q0'], ['q4', 'd', 'q1']);
  steps.push(b.draw('Adicionamos os laços e resets KMP: qualquer prefixo é descartado até achar "dcba" ao final.', 1));
  steps.push(b.test('"adcba" tem prefixo livre e termina com "dcba": q4 (final). Aceita!', 'adcba', 1));
  steps.push(b.test('"ddcba" reusa o "d" (laço q1) e fecha o sufixo. Aceita!', 'ddcba', 1));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 1));
  return steps;
}

export default { id: 36, layout: LAYOUT, label: "L36", formula: "L = {w ∈ {a,b,c,d}* / w tem dcba como sufixo}",                   desc: "",                                                                 shortestWord: "dcba",     regex: /^[abcd]*dcba$/,                                             alphabet: ['a', 'b', 'c', 'd'],   acceptedWords: ["dcba","adcba","ddcba"],  rejectedWords: ["λ","dcb","abcd"],      hint: "Concentre-se nos últimos 4 símbolos: eles precisam ser exatamente 'd','c','b','a'.",                                successMsg: "Sufixo detectado!",
    tutorials: {
      onStart: { type: 'theory', title: 'Sufixo Obrigatório: "dcba"!', dialog: [
        'L36: toda palavra aceita DEVE terminar com "dcba". O prefixo pode ser qualquer coisa.',
        '"dcba" ✓ (só o sufixo). "adcba" ✓ (prefixo livre). "abcd" ✗ (não termina com dcba).',
        'Estratégia KMP: 5 estados rastreiam quanto de "dcba" já está confirmado no final.',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Cadeia KMP de Sufixo', dialog: [
        'q0—d→q1—c→q2—b→q3—a→q4(final). Cadeia principal para "dcba".',
        'q0 loop a,b,c (prefixo descartado). q1 loop d (novo "d" reinicia a busca).',
        'Mismatches em q2,q3,q4 voltam para q0 ou q1 — nunca desperdiçam um "d".',
      ] },
    },
    boardWords: ['dcba', 'dcb', 'adcba', 'ddcba'],
    guidedLesson: buildLessonL36() };
