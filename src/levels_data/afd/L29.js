import { LEVEL_GRAPHS } from '../../levels_graphs.js';
import { makeBuilder } from '../lessonBuilder.js';

function buildLessonL29() {
  const b = makeBuilder(LEVEL_GRAPHS[29], {
    s00: [12, 50], s01: [35, 28], s10: [35, 74], s11: [62, 50], ok: [86, 50],
  });
  const steps = [];
  b.addNodes('s00', 's01', 's11').addEdges(['s00', '1', 's01'], ['s01', '1', 's11']);
  steps.push(b.draw('Espinha para "11": s00—1→s01—1→s11 (final, dois 1\'s vistos).', -1));
  steps.push(b.test('Veja "11" atingir s11 (final). Aceita!', '11', 0));
  steps.push(b.reject('Mas "1" tem só um "1": para em s01, que NÃO é final!', '1', 0));
  b.addNodes('s10', 'ok')
   .addEdges(['s00', '0', 's00'], ['s01', '0', 's10'], ['s10', '0', 's10'],
             ['s10', '1', 's11'], ['s11', '0', 'ok'], ['ok', '0', 'ok']);
  steps.push(b.draw('Adicionamos os laços de "0" e o estado ok: depois de 2 uns, aceita tudo.', 1));
  steps.push(b.test('"0011" ignora os zeros e acumula dois 1\'s: chega a s11 (final). Aceita!', '0011', 1));
  steps.push(b.test('"1011" também acumula dois 1\'s (passando por s10): s11 (final). Aceita!', '1011', 1));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

export default { id: 29, label: "L29", formula: "L = { w ∈ {0,1}* | w contém pelo menos dois 1's }", desc: "", shortestWord: "11", regex: /1[01]*1/, validate: w => [...w].filter(c => c === '1').length >= 2, alphabet: ['0', '1'], acceptedWords: ["11","0011","1011"],      rejectedWords: ["0","00","0001"],       hint: "Conte os 1's: assim que aparecerem dois (em qualquer posição), pode aceitar tudo.",                                  successMsg: "Dois uns encontrados!",
    tutorials: {
      onStart: { type: 'theory', title: 'Pelo menos dois 1s!', dialog: [
        'L29: a palavra deve conter no mínimo DOIS "1"s — em qualquer posição.',
        '"11" ✔ (dois 1s). "0011" ✔. "1011" ✔ (três 1s). "0001" ✗ (só um 1). "00" ✗ (nenhum).',
        'Estratégia: contar os 1s vistos. Ao chegar a dois, aceitar tudo daí em diante.',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Contador de Uns', dialog: [
        'Os "0"s são ignorados (laços): só os "1"s fazem o autômato avançar de estado.',
        'Caminho dos 1s: s00 —1→ s01 —1→ s11 (final). Dois 1s já bastam!',
        'Depois dos dois 1s, o estado "ok" absorve o resto da palavra (loop em {0,1}).',
      ] },
    },
    boardWords: ['11', '1', '0011', '1011'],
    guidedLesson: buildLessonL29() };
