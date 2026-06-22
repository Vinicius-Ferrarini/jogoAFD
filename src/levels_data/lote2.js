import { LEVEL_GRAPHS } from '../levels_graphs.js';
import { makeBuilder } from './lessonBuilder.js';

// ─── Modo Aula do Lote 2 (L21–L25) — padrão "Desenha ➔ Testa ➔ Rejeição" ─────
// Mesma metodologia do Lote 1: desconstrói o grafo estático passo a passo,
// mostrando a máquina aceitar a menor palavra e TRAVAR nas rejeições didáticas
// (expectedVerdict:'reject'). boardWords sincronizado com os simulateWord.

// L21 — {a*b*c*d*} (blocos em ordem, qe armadilha) — menor palavra: λ
function buildLessonL21() {
  const b = makeBuilder(LEVEL_GRAPHS[21], {
    q0: [15, 50], q1: [35, 20], q2: [65, 20], q3: [85, 50], qe: [50, 85],
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
  b.addNodes('qe').addEdges(['q1', 'a', 'qe'], ['q2', 'a', 'qe'], ['q3', 'a', 'qe'], ['qe', 'a', 'qe']);
  steps.push(b.draw('Por fim, a armadilha qe (não-final): qualquer símbolo fora de ordem cai aqui.', 2));
  steps.push(b.reject('"ba" tenta "a" depois de "b" (fora de ordem): q0→q1→qe (armadilha). Rejeita!', 'ba', 2));
  steps.push(b.test('Já "aabbccdd" respeita a ordem e usa os laços de cada bloco. Aceita!', 'aabbccdd', 2));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

// L22 — {binário par (termina em 0)} — menor palavra: "0"
function buildLessonL22() {
  const b = makeBuilder(LEVEL_GRAPHS[22], { q0: [30, 50], q1: [70, 50] });
  const steps = [];
  b.addNodes('q0').addEdges(['q0', '0', 'q0']);
  steps.push(b.draw('Termina em "0": q0 é inicial+final, com laço de "0".', -1));
  steps.push(b.test('Veja "0" ser aceita no laço de q0 (final).', '0', 0));
  b.addNodes('q1').addEdges(['q0', '1', 'q1'], ['q1', '1', 'q1']);
  steps.push(b.draw('Adicionamos q1 (último símbolo lido = "1"), com laço de "1".', 1));
  steps.push(b.reject('Mas "1" termina em "1" (ímpar): para em q1, que NÃO é final!', '1', 1));
  b.addEdges(['q1', '0', 'q0']);
  steps.push(b.draw('E o retorno q1—0→q0: um "0" volta ao estado final.', 1));
  steps.push(b.test('"10" termina em "0": q0→q1→q0 (final). Aceita!', '10', 1));
  steps.push(b.test('"110" também termina em "0": q0→q1→q1→q0 (final). Aceita!', '110', 1));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

// L23 — {binário ímpar (termina em 1)} — menor palavra: "1"
function buildLessonL23() {
  const b = makeBuilder(LEVEL_GRAPHS[23], { q0: [30, 50], q1: [70, 50] });
  const steps = [];
  b.addNodes('q0', 'q1').addEdges(['q0', '1', 'q1']);
  steps.push(b.draw('Menor palavra "1" (termina em 1): q0—1→q1 (final).', -1));
  steps.push(b.test('Veja "1" chegar a q1 (final). Aceita!', '1', 0));
  b.addEdges(['q0', '0', 'q0'], ['q1', '0', 'q0']);
  steps.push(b.draw('Adicionamos o laço q0—0→q0 e o retorno q1—0→q0 (um "0" leva ao não-final).', 1));
  steps.push(b.reject('Mas "10" termina em "0" (par): volta a q0, que NÃO é final!', '10', 1));
  steps.push(b.test('Já "01" tem um zero à frente e fecha em "1": q0→q0→q1 (final). Aceita!', '01', 1));
  b.addEdges(['q1', '1', 'q1']);
  steps.push(b.draw('E o laço q1—1→q1 para vários "1"s seguidos.', 2));
  steps.push(b.test('"11" termina em "1": q0→q1→q1 (final). Aceita!', '11', 2));
  steps.push(b.test('"101" alterna e fecha em "1": q0→q1→q0→q1 (final). Aceita!', '101', 2));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

// L24 — {|w| = 3} — menor palavra: "000"
function buildLessonL24() {
  const b = makeBuilder(LEVEL_GRAPHS[24], {
    q0: [12, 50], q1: [38, 50], q2: [64, 50], q3: [88, 50],
  });
  const steps = [];
  b.addNodes('q0', 'q1', 'q2', 'q3')
   .addEdges(['q0', '0', 'q1'], ['q1', '0', 'q2'], ['q2', '0', 'q3']);
  steps.push(b.draw('Trilho de exatamente 3 passos: q0→q1→q2→q3 (final), cada seta lê {0,1}.', -1));
  steps.push(b.test('Veja "000" percorrer os 3 passos até q3 (final). Aceita!', '000', 0));
  steps.push(b.reject('Mas "00" tem só 2 símbolos: para em q2, que NÃO é final!', '00', 0));
  steps.push(b.test('Qualquer combinação de 3 símbolos serve: "101" fecha em q3 (final). Aceita!', '101', 1));
  steps.push(b.reject('E "0000" tem 4 símbolos: q3 não tem saída e a máquina trava!', '0000', 1));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

// L25 — {|w| < 3} — menor palavra: λ
function buildLessonL25() {
  const b = makeBuilder(LEVEL_GRAPHS[25], {
    q0: [20, 50], q1: [50, 50], q2: [80, 50],
  });
  const steps = [];
  b.addNodes('q0');
  steps.push(b.draw('λ tem comprimento 0 (< 3): q0 é inicial E final.', -1));
  steps.push(b.test('Veja λ ser aceita parada em q0 (final).', '', 0));
  b.addNodes('q1').addEdges(['q0', '0', 'q1']);
  steps.push(b.draw('Adicionamos q1 (1 símbolo lido), também final.', 1));
  steps.push(b.test('"0" tem 1 símbolo: q0→q1 (final). Aceita!', '0', 1));
  b.addNodes('q2').addEdges(['q1', '0', 'q2']);
  steps.push(b.draw('E q2 (2 símbolos lidos), também final. Mas q2 NÃO tem saída!', 2));
  steps.push(b.test('"10" tem 2 símbolos: q0→q1→q2 (final). Aceita!', '10', 2));
  steps.push(b.reject('Mas "000" tem 3 símbolos: q2 não tem saída e a máquina trava!', '000', 2));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

// L26 — {|w| > 3} — menor palavra: "0000"
function buildLessonL26() {
  const b = makeBuilder(LEVEL_GRAPHS[26], {
    q0: [10, 65], q1: [28, 35], q2: [46, 65], q3: [64, 35], q4: [82, 65],
  });
  const steps = [];
  b.addNodes('q0', 'q1', 'q2', 'q3', 'q4')
   .addEdges(['q0', '0', 'q1'], ['q1', '0', 'q2'], ['q2', '0', 'q3'], ['q3', '0', 'q4']);
  steps.push(b.draw('Trilho de 4 passos: q0→q1→q2→q3→q4 (final), cada seta lê {0,1}.', -1));
  steps.push(b.test('Veja "0000" (4 símbolos) chegar a q4 (final). Aceita!', '0000', 0));
  steps.push(b.reject('Mas "000" tem só 3 símbolos: para em q3, que NÃO é final!', '000', 0));
  b.addEdges(['q4', '0', 'q4']);
  steps.push(b.draw('Adicionamos o laço q4—{0,1}→q4 para palavras mais longas.', 1));
  steps.push(b.test('"01010" tem 5 símbolos: usa o laço de q4 e segue final. Aceita!', '01010', 1));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

// L27 — {|w| múltiplo de 3} — menor palavra: λ
function buildLessonL27() {
  const b = makeBuilder(LEVEL_GRAPHS[27], { q0: [15, 68], q1: [50, 20], q2: [85, 68] });
  const steps = [];
  b.addNodes('q0');
  steps.push(b.draw('λ tem comprimento 0 (múltiplo de 3): q0 é inicial E final.', -1));
  steps.push(b.test('Veja λ ser aceita parada em q0 (final).', '', 0));
  b.addNodes('q1', 'q2').addEdges(['q0', '0', 'q1'], ['q1', '0', 'q2'], ['q2', '0', 'q0']);
  steps.push(b.draw('Adicionamos o ciclo q0→q1→q2→q0, cada seta lendo {0,1}.', 1));
  steps.push(b.reject('Mas "00" tem 2 símbolos: para em q2 (não-final). Falta fechar o ciclo!', '00', 1));
  steps.push(b.test('Já "000" fecha o ciclo: q0→q1→q2→q0 (final). Aceita!', '000', 1));
  steps.push(b.test('"010101" dá duas voltas completas no ciclo. Aceita!', '010101', 1));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

// L28 — {cada 0 seguido de ≥2 uns} — ^(1*011+)*1*$ — menor palavra: λ
function buildLessonL28() {
  const b = makeBuilder(LEVEL_GRAPHS[28], {
    q0: [20, 30], q1: [50, 30], q2: [80, 30], q3: [50, 70],
  });
  const steps = [];
  b.addNodes('q0').addEdges(['q0', '1', 'q0']);
  steps.push(b.draw('λ e qualquer bloco de "1"s: q0 é inicial+final, com laço de "1".', -1));
  steps.push(b.test('Veja λ ser aceita parada em q0 (final).', '', 0));
  b.addNodes('q1', 'q2').addEdges(['q0', '0', 'q1'], ['q1', '1', 'q2'], ['q2', '1', 'q0']);
  steps.push(b.draw('Cada "0" cria uma dívida de DOIS "1"s: q0→q1→q2→q0 (o "011" volta à base).', 1));
  steps.push(b.test('"011" paga a dívida com dois "1"s e volta a q0 (final). Aceita!', '011', 1));
  b.addNodes('q3').addEdges(['q1', '0', 'q3'], ['q2', '0', 'q3'], ['q3', '0', 'q3']);
  steps.push(b.draw('E a armadilha q3 (não-final): um "0" antes de quitar os dois "1"s cai aqui.', 2));
  steps.push(b.reject('"010" lê só um "1" e já vem outro "0": q0→q1→q2→q3 (armadilha). Rejeita!', '010', 2));
  steps.push(b.test('Já "1011" tem o "0" seguido de "11": q0→q0→q1→q2→q0 (final). Aceita!', '1011', 2));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

// L29 — {≥ dois 1's} (ver divergência) — menor palavra: "11"
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

// L30 — {não contém 000 nem 111} — menor palavra: λ
function buildLessonL30() {
  const b = makeBuilder(LEVEL_GRAPHS[30], {
    q0: [10, 50], q1: [48, 20], q2: [85, 20], q3: [48, 80], q4: [12, 80],
  });
  const steps = [];
  b.addNodes('q0');
  steps.push(b.draw('λ não tem nenhuma sequência proibida: q0 é inicial+final.', -1));
  steps.push(b.test('Veja λ ser aceita parada em q0 (final).', '', 0));
  b.addNodes('q1', 'q3').addEdges(['q0', '0', 'q1'], ['q0', '1', 'q3'], ['q1', '1', 'q3'], ['q3', '0', 'q1']);
  steps.push(b.draw('q1 (um 0) e q3 (um 1), ambos finais, alternando 0↔1 sem repetir.', 1));
  steps.push(b.test('"01" alterna sem repetir: q0→q1→q3 (final). Aceita!', '01', 1));
  b.addNodes('q2', 'q4').addEdges(['q1', '0', 'q2'], ['q2', '1', 'q3'], ['q3', '1', 'q4'], ['q4', '0', 'q1']);
  steps.push(b.draw('q2 (dois 0\'s) e q4 (dois 1\'s): um 3º igual seguido não tem saída (armadilha).', 2));
  steps.push(b.reject('"000" tem três 0\'s: q0→q1→q2→ trava (sem saída de "0")!', '000', 2));
  steps.push(b.reject('E "111" tem três 1\'s: q0→q3→q4→ trava (sem saída de "1")!', '111', 2));
  steps.push(b.test('Já "0011" tem só pares: q0→q1→q2→q3→q4 (final). Aceita!', '0011', 2));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

// L31 — {últimos 3 símbolos NÃO são 000} — menor palavra: λ
function buildLessonL31() {
  const b = makeBuilder(LEVEL_GRAPHS[31], {
    q0: [15, 50], q1: [42, 25], q2: [68, 50], q3: [88, 25],
  });
  const steps = [];
  b.addNodes('q0').addEdges(['q0', '1', 'q0']);
  steps.push(b.draw('λ e qualquer "1": q0 é inicial+final, com laço de "1".', -1));
  steps.push(b.test('Veja λ ser aceita parada em q0 (final).', '', 0));
  b.addNodes('q1', 'q2').addEdges(['q0', '0', 'q1'], ['q1', '1', 'q0'], ['q1', '0', 'q2'], ['q2', '1', 'q0']);
  steps.push(b.draw('q1 (um 0 no fim) e q2 (dois 0\'s), ambos finais; um "1" zera o sufixo.', 1));
  steps.push(b.test('"001" termina em "1": q0→q1→q2→q0 (final). Aceita!', '001', 1));
  b.addNodes('q3').addEdges(['q2', '0', 'q3'], ['q3', '0', 'q3'], ['q3', '1', 'q0']);
  steps.push(b.draw('q3 (não-final) = sufixo "000". Um "1" ainda escapa de volta a q0.', 2));
  steps.push(b.reject('"000" termina em três 0\'s: q0→q1→q2→q3 (não-final). Rejeita!', '000', 2));
  steps.push(b.test('Já "0001" escapa com o "1" final: q3→q0 (final). Aceita!', '0001', 2));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

// L32 — {par de 0's, 1's e 2's} — cubo de paridade — menor palavra: λ
function buildLessonL32() {
  const b = makeBuilder(LEVEL_GRAPHS[32], {
    ppp: [15, 28], pip: [38, 28], ipp: [15, 72], iip: [38, 72],
    ppi: [62, 28], pii: [85, 28], ipi: [62, 72], iii: [85, 72],
  });
  const steps = [];
  b.addNodes('ppp');
  steps.push(b.draw('λ tem 0 de cada símbolo (tudo par): ppp é inicial+final.', -1));
  steps.push(b.test('Veja λ ser aceita parada em ppp (final).', '', 0));
  b.addNodes('pip', 'ipp', 'iip')
   .addEdges(['ppp', '0', 'ipp'], ['ipp', '0', 'ppp'], ['ppp', '1', 'pip'], ['pip', '1', 'ppp'],
             ['ipp', '1', 'iip'], ['iip', '1', 'ipp'], ['pip', '0', 'iip'], ['iip', '0', 'pip']);
  steps.push(b.draw('Quadrado das paridades de 0 e 1: cada "0" troca a 1ª paridade, cada "1" a 2ª.', 1));
  steps.push(b.test('"0011" tem 0\'s e 1\'s pares: volta a ppp (final). Aceita!', '0011', 1));
  steps.push(b.reject('Mas "0" deixa os 0\'s ímpares: termina em ipp, que NÃO é final!', '0', 1));
  b.addNodes('ppi', 'pii', 'ipi', 'iii')
   .addEdges(['ppp', '2', 'ppi'], ['ppi', '2', 'ppp'], ['ipp', '2', 'ipi'], ['ipi', '2', 'ipp'],
             ['pip', '2', 'pii'], ['pii', '2', 'pip'], ['iip', '2', 'iii'], ['iii', '2', 'iip'],
             ['ppi', '0', 'ipi'], ['ipi', '0', 'ppi'], ['ppi', '1', 'pii'], ['pii', '1', 'ppi'],
             ['ipi', '1', 'iii'], ['iii', '1', 'ipi'], ['pii', '0', 'iii'], ['iii', '0', 'pii']);
  steps.push(b.draw('Duplicamos o quadrado para o símbolo "2": agora é um cubo de 8 estados.', 2));
  steps.push(b.test('"001122" tem 0\'s, 1\'s e 2\'s pares: volta a ppp (final). Aceita!', '001122', 2));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

// L33 — {prefixo '001'} — menor palavra: "001"
function buildLessonL33() {
  const b = makeBuilder(LEVEL_GRAPHS[33], {
    q0: [15, 50], q1: [40, 50], q2: [65, 50], q3: [88, 50],
  });
  const steps = [];
  b.addNodes('q0', 'q1', 'q2', 'q3').addEdges(['q0', '0', 'q1'], ['q1', '0', 'q2'], ['q2', '1', 'q3']);
  steps.push(b.draw('Prefixo exato "001": trilho q0—0→q1—0→q2—1→q3 (final).', -1));
  steps.push(b.test('Veja "001" percorrer o trilho até q3 (final). Aceita!', '001', 0));
  steps.push(b.reject('Mas "010" erra o 2º símbolo: q1 só lê "0", então trava!', '010', 0));
  b.addEdges(['q3', '0', 'q3']);
  steps.push(b.draw('Confirmado o prefixo, q3—{0,1}→q3 absorve qualquer sufixo.', 1));
  steps.push(b.test('"001100" tem o prefixo e o resto livre: fecha em q3 (final). Aceita!', '001100', 1));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

// L34 — {sufixo '1010'} — menor palavra: "1010"
function buildLessonL34() {
  const b = makeBuilder(LEVEL_GRAPHS[34], {
    q0: [10, 65], q1: [28, 35], q2: [46, 65], q3: [64, 35], q4: [82, 65],
  });
  const steps = [];
  b.addNodes('q0', 'q1', 'q2', 'q3', 'q4')
   .addEdges(['q0', '1', 'q1'], ['q1', '0', 'q2'], ['q2', '1', 'q3'], ['q3', '0', 'q4']);
  steps.push(b.draw('Espinha do sufixo "1010": q0→q1→q2→q3→q4 (final).', -1));
  steps.push(b.test('Veja "1010" percorrer a cadeia até q4 (final). Aceita!', '1010', 0));
  steps.push(b.reject('Mas "101" não completou o "1010": para em q3, que NÃO é final!', '101', 0));
  b.addEdges(['q0', '0', 'q0'], ['q1', '1', 'q1'], ['q2', '0', 'q0'],
             ['q3', '1', 'q1'], ['q4', '1', 'q3'], ['q4', '0', 'q0']);
  steps.push(b.draw('Adicionamos os laços e resets (backedges) para rastrear o melhor sufixo.', 1));
  steps.push(b.test('"01010" tem prefixo livre e termina em "1010": q4 (final). Aceita!', '01010', 1));
  steps.push(b.test('"001010" também termina em "1010" após os zeros iniciais. Aceita!', '001010', 1));
  steps.push(b.test('Sobreposição: "101010" reusa o "10" final via q4—1→q3—0→q4 (final). Aceita!', '101010', 1));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

// L35a — {contém '1111' como subpalavra} — menor palavra: "1111"
function buildLessonL35() {
  const b = makeBuilder(LEVEL_GRAPHS[35], {
    q0: [10, 65], q1: [28, 35], q2: [46, 65], q3: [64, 35], q4: [82, 65],
  });
  const steps = [];
  b.addNodes('q0', 'q1', 'q2', 'q3', 'q4')
   .addEdges(['q0', '1', 'q1'], ['q1', '1', 'q2'], ['q2', '1', 'q3'], ['q3', '1', 'q4']);
  steps.push(b.draw('Contador de "1"s seguidos: q0→q1→q2→q3→q4 (final, quatro 1\'s).', -1));
  steps.push(b.test('Veja "1111" atingir q4 (final). Aceita!', '1111', 0));
  steps.push(b.reject('Mas "111" tem só três "1"s: para em q3, que NÃO é final!', '111', 0));
  b.addEdges(['q0', '0', 'q0'], ['q1', '0', 'q0'], ['q2', '0', 'q0'], ['q3', '0', 'q0'], ['q4', '0', 'q4']);
  steps.push(b.draw('Um "0" zera a contagem (volta a q0); já q4 absorve tudo com seu laço.', 1));
  steps.push(b.test('"01111" zera no início e depois acha "1111": q4 (final). Aceita!', '01111', 1));
  steps.push(b.test('"11110" acha "1111" e o "0" final fica no laço de q4 (final). Aceita!', '11110', 1));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

// L35b (id36) — {prefixo 'abc'} — menor palavra: "abc"
function buildLessonL36() {
  const b = makeBuilder(LEVEL_GRAPHS[36], { q0: [15, 50], q1: [40, 50], q2: [65, 50], q3: [88, 50] });
  const steps = [];
  b.addNodes('q0', 'q1', 'q2', 'q3').addEdges(['q0', 'a', 'q1'], ['q1', 'b', 'q2'], ['q2', 'c', 'q3']);
  steps.push(b.draw('Prefixo exato "abc": trilho q0—a→q1—b→q2—c→q3 (final).', -1));
  steps.push(b.test('Veja "abc" percorrer o trilho até q3 (final). Aceita!', 'abc', 0));
  steps.push(b.reject('Mas "ab" não completou o prefixo: para em q2, que NÃO é final!', 'ab', 0));
  b.addEdges(['q3', 'a', 'q3']);
  steps.push(b.draw('Confirmado o prefixo, q3—{a,b,c,d}→q3 absorve qualquer sufixo.', 1));
  steps.push(b.test('"abcd" tem o prefixo e o resto livre: fecha em q3 (final). Aceita!', 'abcd', 1));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

// L36 (id37) — {sufixo 'dcba'} — menor palavra: "dcba"
function buildLessonL37() {
  const b = makeBuilder(LEVEL_GRAPHS[37], {
    q0: [10, 65], q1: [30, 35], q2: [50, 65], q3: [70, 35], q4: [88, 65],
  });
  const steps = [];
  b.addNodes('q0', 'q1', 'q2', 'q3', 'q4')
   .addEdges(['q0', 'd', 'q1'], ['q1', 'c', 'q2'], ['q2', 'b', 'q3'], ['q3', 'a', 'q4']);
  steps.push(b.draw('Espinha do sufixo "dcba": q0→q1→q2→q3→q4 (final).', -1));
  steps.push(b.test('Veja "dcba" percorrer a cadeia até q4 (final). Aceita!', 'dcba', 0));
  steps.push(b.reject('Mas "dcb" não completou o "dcba": para em q3, que NÃO é final!', 'dcb', 0));
  b.addEdges(['q0', 'a', 'q0'], ['q1', 'd', 'q1'], ['q2', 'd', 'q1'],
             ['q3', 'd', 'q1'], ['q4', 'a', 'q0'], ['q4', 'd', 'q1']);
  steps.push(b.draw('Adicionamos os laços e resets (backedges) para rastrear o melhor sufixo.', 1));
  steps.push(b.test('"adcba" tem prefixo livre e termina em "dcba": q4 (final). Aceita!', 'adcba', 1));
  steps.push(b.test('"ddcba" reusa o "d" inicial (laço q1) e fecha o sufixo. Aceita!', 'ddcba', 1));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

// L37 (id38) — {contém 'abcd' ou 'dcba'} — menor palavra: "abcd"
function buildLessonL38() {
  const b = makeBuilder(LEVEL_GRAPHS[38], {
    q0: [10, 50], qa1: [30, 25], qa2: [50, 25], qa3: [70, 25], qf: [90, 50],
    qd1: [30, 75], qd2: [50, 75], qd3: [70, 75],
  });
  const steps = [];
  b.addNodes('q0', 'qa1', 'qa2', 'qa3', 'qf')
   .addEdges(['q0', 'a', 'qa1'], ['qa1', 'b', 'qa2'], ['qa2', 'c', 'qa3'], ['qa3', 'd', 'qf']);
  steps.push(b.draw('Caça à subpalavra "abcd": q0→qa1→qa2→qa3→qf (final).', -1));
  steps.push(b.test('Veja "abcd" atingir qf (final). Aceita!', 'abcd', 0));
  steps.push(b.reject('Mas "abc" não completou "abcd": para em qa3, que NÃO é final!', 'abc', 0));
  b.addNodes('qd1', 'qd2', 'qd3')
   .addEdges(
     // ramo "dcba": q0→qd1→qd2→qd3→qf
     ['q0', 'd', 'qd1'], ['qd1', 'c', 'qd2'], ['qd2', 'b', 'qd3'], ['qd3', 'a', 'qf'],
     // q0 ignora lixo (b,c) e qf absorve o resto
     ['q0', 'b', 'q0'], ['qf', 'a', 'qf'],
     // resets KMP do ramo "abcd": todo estado reaproveita "a" (→qa1) e "d" (→qd1)
     ['qa1', 'a', 'qa1'], ['qa1', 'c', 'q0'], ['qa1', 'd', 'qd1'],
     ['qa2', 'a', 'qa1'], ['qa2', 'b', 'q0'], ['qa2', 'd', 'qd1'],
     ['qa3', 'a', 'qa1'], ['qa3', 'b', 'q0'],
     // resets KMP do ramo "dcba"
     ['qd1', 'a', 'qa1'], ['qd1', 'b', 'q0'], ['qd1', 'd', 'qd1'],
     ['qd2', 'a', 'qa1'], ['qd2', 'c', 'q0'], ['qd2', 'd', 'qd1'],
     ['qd3', 'b', 'q0'], ['qd3', 'd', 'qd1'],
   );
  steps.push(b.draw('Ramo "dcba" (q0→qd1→qd2→qd3→qf) + resets KMP: cada "a" reinicia em qa1 e cada "d" em qd1, sem desperdiçar nenhum símbolo.', 1));
  steps.push(b.test('"babcd" ignora o "b" inicial (laço q0) e acha "abcd": qf (final). Aceita!', 'babcd', 1));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

// L38 (id39) — {|a| par e |b| ímpar} — menor palavra: "b"
function buildLessonL39() {
  const b = makeBuilder(LEVEL_GRAPHS[39], { pp: [28, 25], pi: [72, 25], ip: [28, 78], ii: [72, 78] });
  const steps = [];
  b.addNodes('pp', 'pi').addEdges(['pp', 'b', 'pi']);
  steps.push(b.draw('Menor palavra "b" (0 "a" par, 1 "b" ímpar): pp—b→pi (final).', -1));
  steps.push(b.test('Veja "b" chegar a pi (final). Aceita!', 'b', 0));
  b.addNodes('ip', 'ii')
   .addEdges(['pp', 'a', 'ip'], ['ip', 'a', 'pp'], ['pi', 'a', 'ii'], ['ii', 'a', 'pi'],
             ['pi', 'b', 'pp'], ['ip', 'b', 'ii'], ['ii', 'b', 'ip']);
  steps.push(b.draw('Completamos o quadrado: "a" troca a linha, "b" troca a coluna (pi = par/ímpar).', 1));
  steps.push(b.reject('Mas "a" tem 1 "a" (ímpar) e 0 "b" (par): para em ip, que NÃO é final!', 'a', 1));
  steps.push(b.test('"aab" tem 2 "a"s (par) e 1 "b" (ímpar): chega a pi (final). Aceita!', 'aab', 1));
  steps.push(b.test('"bbb" tem 0 "a" (par) e 3 "b"s (ímpar): também fecha em pi (final). Aceita!', 'bbb', 1));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

// L39 (id40) — {|a| ímpar e |b| ímpar} — menor palavra: "ab"
function buildLessonL40() {
  const b = makeBuilder(LEVEL_GRAPHS[40], { pp: [28, 25], pi: [72, 25], ip: [28, 78], ii: [72, 78] });
  const steps = [];
  b.addNodes('pp', 'ip', 'ii').addEdges(['pp', 'a', 'ip'], ['ip', 'b', 'ii']);
  steps.push(b.draw('Menor palavra "ab" (1 "a", 1 "b" = ímpar/ímpar): pp—a→ip—b→ii (final).', -1));
  steps.push(b.test('Veja "ab" chegar a ii (final). Aceita!', 'ab', 0));
  steps.push(b.reject('Mas "a" tem 1 "a" (ímpar) e 0 "b" (par): para em ip, que NÃO é final!', 'a', 0));
  b.addNodes('pi')
   .addEdges(['pp', 'b', 'pi'], ['pi', 'a', 'ii'], ['ii', 'a', 'pi'],
             ['pi', 'b', 'pp'], ['ip', 'a', 'pp'], ['ii', 'b', 'ip']);
  steps.push(b.draw('Completamos o quadrado (ii = ímpar/ímpar é o único final).', 1));
  steps.push(b.test('"abbb" tem 1 "a" e 3 "b"s (ambos ímpares): fecha em ii (final). Aceita!', 'abbb', 1));
  steps.push(b.test('"aaabbb" tem 3 "a"s e 3 "b"s (ambos ímpares): também fecha em ii. Aceita!', 'aaabbb', 1));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

export const lote2 = [
  { id: 21, label: "L21", formula: "L = { w ∈ {a,b,c,d}* | 'a' precede 'b', 'b' precede 'c', 'c' precede 'd' }",    desc: "",                                                                 shortestWord: "",         regex: /^a*b*c*d*$/,                                                alphabet: ['a', 'b', 'c', 'd'],   acceptedWords: ["λ","abcd","abc"],         rejectedWords: ["ba","ca","cb"],        hint: "É uma progressão linear estrita pelo alfabeto.",                                                                    successMsg: "Ordem alfabética mantida!",
    tutorials: {
      onStart: { type: 'theory', title: 'Ordem Alfabética Estrita!', dialog: [
        'L21: símbolos em ordem a* b* c* d* — cada bloco pode aparecer 0 ou mais vezes.',
        '"λ", "abcd", "aabdd", "bbdd" — válidos. "ba" ou "ca" — inválidos (ordem errada)!',
        'Uma vez que o AFD avança para o bloco "b", nunca volta para "a". Transições unidirecionais!',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Cadeia de Blocos com Atalhos', dialog: [
        '4 estados em zigue-zague: <b>q0</b>(a,ini,f), <b>q1</b>(b,f), <b>q2</b>(c,f), <b>q3</b>(d,f) — todos finais!',
        'Atalhos: q0→q3(d) e q1→q3(d). "ad" ✔ (pula b e c), "bd" ✔ (pula c), "cd" ✔ "d" ✔',
        '"ba" é rejeitado: q1 sem seta para "a". "cb" é rejeitado: q2 sem seta para "b". A ordem importa!',
      ] },
    },
    boardWords: ['', 'ab', 'abc', 'abcd', 'ba', 'aabbccdd'],
    guidedLesson: buildLessonL21() },
  { id: 22, label: "L22", formula: "L = { w ∈ {0,1}* | w é um número par }",
    aliases: [
      "L = { w ∈ {0,1}* | w é par }",
      "L = { w ∈ {0,1}* | w termina em 0 }",
      "L = { w ∈ {0,1}* | w termina com 0 }",
    ],
    desc: "",                                                                 shortestWord: "0",        regex: /^[01]*0$/,                                                  alphabet: ['0', '1'],             acceptedWords: ["0","10","110"],            rejectedWords: ["1","11","101"],        hint: "Pense em binário! Todo número binário par termina com que dígito?",                                                 successMsg: "Lógica binária! Terminou em zero.",
    tutorials: {
      onStart: { type: 'theory', title: 'Bem-vindo ao Mundo Binário!', dialog: [
        'Novo contexto: alfabeto {0, 1} — o sistema BINÁRIO!',
        'Em binário, todo número PAR termina em "0". Todo ÍMPAR termina em "1". Simples!',
        'O AFD não precisa ler a palavra inteira — só o ÚLTIMO símbolo determina paridade.',
        'Isso implica: um estado "par" e um estado "ímpar", trocando a cada símbolo lido.',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Dois Estados: Par e Ímpar', dialog: [
        '2 estados: <b>q0</b>(inicial, último=1 ou vazio) e <b>q1</b>(último=0, FINAL).',
        '"0" de qualquer estado vai para <b>q1</b>. "1" de qualquer estado volta para <b>q0</b>.',
        'O AFD guarda só o ÚLTIMO bit. Loops em q0(1) e q1(0) cobrem sequências longas.',
      ] },
    },
    boardWords: ['0', '1', '10', '110'],
    guidedLesson: buildLessonL22() },
  { id: 23, label: "L23", formula: "L = { w ∈ {0,1}* | w é um número ímpar }",
    aliases: [
      "L = { w ∈ {0,1}* | w é ímpar }",
      "L = { w ∈ {0,1}* | w termina em 1 }",
      "L = { w ∈ {0,1}* | w termina com 1 }",
    ],
    desc: "",                                                                 shortestWord: "1",        regex: /^[01]*1$/,                                                  alphabet: ['0', '1'],             acceptedWords: ["1","11","101"],            rejectedWords: ["0","10","100"],        hint: "Números ímpares em binário sempre terminam com '1'.",                                                               successMsg: "Lógica binária! Terminou em um.",
    tutorials: {
      onStart: { type: 'theory', title: 'ÍMPAR em Binário Termina em "1"!', dialog: [
        'Espelho de L22: número binário ÍMPAR termina em "1". PAR termina em "0".',
        '"1", "11", "101" — válidos. "0", "10" — inválidos (terminam em 0).',
        'O AFD só precisa lembrar o ÚLTIMO dígito lido para decidir.',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Dois Estados Espelhados', dialog: [
        '2 estados: <b>q0</b>(inicial, último=0 ou vazio) e <b>q1</b>(último=1, FINAL).',
        '"1" de qualquer estado vai para <b>q1</b>. "0" de qualquer estado volta para <b>q0</b>.',
        'Espelho do L22: loop q0(0) e q1(1). Só o ÚLTIMO bit decide. "101": q0→q1→q0→q1 ✔',
      ] },
    },
    boardWords: ['1', '10', '01', '11', '101'],
    guidedLesson: buildLessonL23() },
  { id: 24, label: "L24", formula: "L = { w ∈ {0,1}* | w tem tamanho 3 }",                              desc: "",                                                                 shortestWord: "000",      regex: /^[01]{3}$/,                                                 alphabet: ['0', '1'],             acceptedWords: ["000","011","101"],         rejectedWords: ["λ","00","0000"],       hint: "Você precisa de um caminho reto que só aceita na terceira etapa.",                                                  successMsg: "Controle de tamanho exato.",
    tutorials: {
      onStart: { type: 'theory', title: 'Caminho de Comprimento Exato!', dialog: [
        'L24: aceitar APENAS palavras com exatamente 3 símbolos — nem mais, nem menos.',
        '"000", "101", "010" — válidas. "00" (curto), "0000" (longo) — inválidas.',
        'Estratégia: 4 estados em linha — um por posição lida. Só o 4° é final.',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Trilho de 3 Passos', dialog: [
        'Trilho linear: <b>q0</b>→<b>q1</b>→<b>q2</b>→<b>q3</b>(final). Cada seta aceita {0,1}.',
        'Após q3, não há transições — qualquer símbolo extra vai para o dead-state implícito.',
        '"0000": lê 4° símbolo em q3, sem seta → rejeição automática. Sem estado extra!',
      ] },
    },
    boardWords: ['000', '00', '101', '0000'],
    guidedLesson: buildLessonL24() },
  { id: 25, label: "L25", formula: "L = { w ∈ {0,1}* | w tem tamanho menor que 3 }",                   desc: "",                                                                 shortestWord: "",         regex: /^[01]{0,2}$/,                                               alphabet: ['0', '1'],             acceptedWords: ["λ","0","10"],             rejectedWords: ["000","0000","010"],    hint: "Os estados iniciais já podem ser finais, mas pare no terceiro passo.",                                               successMsg: "Tamanho máximo controlado.",
    tutorials: {
      onStart: { type: 'theory', title: 'Comprimento Menor que 3!', dialog: [
        'L25: aceitar palavras com 0, 1 ou 2 símbolos. Rejeitar com 3 ou mais.',
        '"λ", "0", "10" — válidas. "000", "0000" — inválidas (longas demais).',
        'Estratégia: 3 estados finais (q0, q1, q2). Após q2, sem transições — dead-state implícito.',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Trilho Curto com Dead-State Implícito', dialog: [
        '<b>q0</b>(ini,f), <b>q1</b>(f), <b>q2</b>(f) — todos finais, aceita em qualquer um.',
        'q0→q1→q2 com {0,1}. Após q2, sem transições — 3° símbolo dispara dead-state implícito.',
        'Dual de L24: aqui o trilho curto aceita, e a ausência de setas rejeita o extra.',
      ] },
    },
    boardWords: ['', '0', '10', '000'],
    guidedLesson: buildLessonL25() },
  { id: 26, label: "L26", formula: "L = { w ∈ {0,1}* | w tem tamanho maior que 3 }",                   desc: "",                                                                 shortestWord: "0000",     regex: /^[01]{4,}$/,                                                alphabet: ['0', '1'],             acceptedWords: ["0000","1111","01010"],    rejectedWords: ["λ","0","000"],         hint: "Passe pelos primeiros três estados sem aceitar, depois aceite tudo.",                                                successMsg: "Tamanho mínimo garantido.",
    tutorials: {
      onStart: { type: 'theory', title: 'Tamanho MAIOR que 3!', dialog: [
        'L26: aceitar palavras com 4 ou MAIS símbolos. Rejeitar qualquer coisa menor.',
        '"0000", "1111", "01010" — válidas. "λ", "0", "000" — inválidas (muito curtas).',
        'Estratégia: 4 estados não-finais (q0-q3) formam uma barreira. Só q4 é final.',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Trilho de 4 Passos + Loop', dialog: [
        'Trilho: <b>q0</b>(ini)→<b>q1</b>→<b>q2</b>→<b>q3</b>→<b>q4</b>(final) com {0,1}.',
        'Após q4, loop <b>q4→q4</b> aceita palavras mais longas. Sem ele, "00000" travaria!',
        '"000" termina em q3 (não final) → rejeição automática. Posição importa, não conteúdo.',
      ] },
    },
    boardWords: ['0000', '000', '01010'],
    guidedLesson: buildLessonL26() },
  { id: 27, label: "L27", formula: "L = { w ∈ {0,1}* | w tem tamanho múltiplo de 3 }",                 desc: "",                                                                 shortestWord: "",         regex: /^([01]{3})*$/,                                              alphabet: ['0', '1'],             acceptedWords: ["λ","000","010101"],       rejectedWords: ["0","00","0001"],       hint: "Crie um ciclo de 3 passos que volta para o estado final inicial.",                                                   successMsg: "Ciclo matemático de tamanho 3.",
    tutorials: {
      onStart: { type: 'theory', title: 'Contagem Modular — Mod 3!', dialog: [
        'Múltiplo de 3: comprimento ≡ 0 (mod 3). Ou seja, palavras de tamanho 0, 3, 6, 9...',
        'Estratégia: 3 estados formando um ciclo. Cada símbolo avança um passo no ciclo.',
        'q0 (final, mod 0) →(any)→ q1 (mod 1) →(any)→ q2 (mod 2) →(any)→ q0. Elegante!',
        'Esse padrão escala: para "múltiplo de N", use N estados em ciclo.',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Ciclo de 3 Estados', dialog: [
        '<b>q0</b>(ini,final) → <b>q1</b> → <b>q2</b> → q0. Cada seta aceita {0,1}.',
        '"λ" aceita em q0. "000": q0→q1→q2→q0 ✔. "00": termina em q2 (não final) ✗.',
        '"0001" (4 símbolos): q0→q1→q2→q0→q1 → rejeitado em q1. O ciclo é exato!',
      ] },
    },
    boardWords: ['', '00', '000', '010101'],
    guidedLesson: buildLessonL27() },
  { id: 28, label: "L28", formula: "L = { w ∈ {0,1}* | cada 0 é seguido de, no mínimo, dois 1's }",   desc: "",                                                                 shortestWord: "",         regex: /^(1*011+)*1*$/,                                             alphabet: ['0', '1'],             acceptedWords: ["λ","011","1011"],         rejectedWords: ["0","01","010"],        hint: "Leu um '0'? Então os próximos dois passos OBRIGATORIAMENTE devem ser '1'.",                                         successMsg: "Padrão de segurança estabelecido.",
    tutorials: {
      onStart: { type: 'theory', title: 'Cada 0 Exige Dois 1s!', dialog: [
        'Restrição: todo "0" lido OBRIGA que os próximos dois símbolos sejam "1".',
        '"λ" e "1011" — válidos (1s livres; cada 0 seguido de "11"). "01" — inválido (só um 1).',
        'Estratégia: rastrear a "dívida" — quantos 1s ainda devemos após o último 0.',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Estados de Dívida', dialog: [
        '<b>q0</b>(ini,f): sem dívida. <b>q1</b>: deve 2 uns. <b>q2</b>: deve 1 un. <b>qT</b>: dead.',
        '1 em q0: loop. 0 em q0: gera dívida (→q1). 1 em q1: paga parcial (→q2). 1 em q2: quita (→q0).',
        'Novo 0 antes de quitar (q1→qT ou q2→qT) = violação irrecuperável. qT rejeita tudo.',
      ] },
    },
    boardWords: ['', '011', '010', '1011'],
    guidedLesson: buildLessonL28() },
  { id: 29, label: "L29", formula: "L = { w ∈ {0,1}* | w contém pelo menos dois 1's }", desc: "", shortestWord: "11", regex: /1[01]*1/, validate: w => [...w].filter(c => c === '1').length >= 2, alphabet: ['0', '1'], acceptedWords: ["11","0011","1011"],      rejectedWords: ["0","00","0001"],       hint: "Conte os 1's: assim que aparecerem dois (em qualquer posição), pode aceitar tudo.",                                  successMsg: "Dois uns encontrados!",
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
    guidedLesson: buildLessonL29() },
  { id: 30, label: "L30", formula: "L = { w ∈ {0,1}* | w NÃO contém 000 nem 111 }",                    desc: "",                                                                 shortestWord: "",         regex: /^(?!.*000)(?!.*111)[01]*$/,                                 alphabet: ['0', '1'],             acceptedWords: ["λ","01","0101"],          rejectedWords: ["000","111","1000"],    hint: "Se 3 zeros ou 3 uns aparecerem, jogue a palavra num estado de erro.",                                                successMsg: "Evitou a bomba tripla!",
    tutorials: {
      onStart: { type: 'theory', title: 'Evitando Subpalavras Proibidas!', dialog: [
        'Novo padrão: NÃO CONTÉM — rejeitar quando uma sequência específica aparecer.',
        'Estratégia: rastrear o "progresso" da sequência proibida com estados intermediários.',
        '"0" visto → alerta. "00" visto → alerta máximo. "000" visto → ARMADILHA irrecuperável!',
        'São duas sequências proibidas independentes (000 e 111), cada uma com sua trilha de estados.',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Duas Trilhas, Dois Limites', dialog: [
        '5 estados todos finais: <b>q0</b>(ini), <b>q1</b>(um 0), <b>q2</b>(dois 0s), <b>q3</b>(um 1), <b>q4</b>(dois 1s).',
        'Cruzamentos: q1—1→q3 e q3—0→q1 (troca de corrida cancela a contagem anterior).',
        'Dead implícito: q2 lê 0 = terceiro zero = 000. q4 lê 1 = terceiro um = 111. Sem seta = rejeitado!',
      ] },
    },
    boardWords: ['', '01', '000', '111', '0011'],
    guidedLesson: buildLessonL30() },
  { id: 31, label: "L31", formula: "L = { w ∈ {0,1}* | os últimos três símbolos de w NÃO são 000 }",  desc: "",                                                                 shortestWord: "",         regex: /^(?!.*000$)[01]*$/,                                         alphabet: ['0', '1'],             acceptedWords: ["λ","1","001"],            rejectedWords: ["000","1000","10000"],  hint: "O final da palavra é o mais importante aqui.",                                                                      successMsg: "Sufixo validado.",
    tutorials: {
      onStart: { type: 'theory', title: 'Sufixo Proibido: "000"!', dialog: [
        'Diferente de L30, L31 só proíbe "000" como SUFIXO — não em qualquer posição.',
        '"1000" é rejeitado (termina em 000). "0001" é ACEITO (não termina em 000)!',
        'Estratégia: rastrear os últimos 3 símbolos. Se forem "000", entrar em estado especial.',
        'Um "1" depois de "000" RESETA o sufixo — o autômato é escapável!',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Trilho Reversível de 4 Estados', dialog: [
        '<b>q0</b>(ini,f): sufixo OK. <b>q1</b>(f): último=0. <b>q2</b>(f): últimos=00. <b>q3</b>: últimos=000.',
        '"1" em qualquer estado → q0 (sufixo "1" não ameaça). "0" avança a trilha.',
        'q3 não é final (000 no sufixo). Mas q3—1→q0 permite escapar! "10001": termina em "001" → aceito.',
      ] },
    },
    boardWords: ['', '001', '000', '0001'],
    guidedLesson: buildLessonL31() },
  { id: 32, label: "L32", formula: "L = { w ∈ {0,1,2}* | par de 0's, par de 1's e par de 2's }",      desc: "",                                                                 shortestWord: "",         regex: /^.*$/, validate: w => ['0','1','2'].every(c => [...w].filter(x=>x===c).length%2===0), alphabet: ['0', '1', '2'],        acceptedWords: ["λ","0011","001122"],      rejectedWords: ["0","1","012"],         hint: "Paridade tripla! Vai precisar de estados para todas as combinações de par/ímpar.",                                  successMsg: "Autômato massivo concluído.",
    tutorials: {
      onStart: { type: 'theory', title: 'Explosão de Estados — 2³ = 8!', dialog: [
        'Paridade tripla simultânea: par/ímpar de 0s, de 1s e de 2s — totalmente independentes.',
        'Cada combinação possível exige seu próprio estado: 2³ = 8 estados no total!',
        'Só o estado (par-0, par-1, par-2) é final. Os outros 7 são não-finais.',
        'Princípio geral: N paridades independentes → 2^N estados no AFD mínimo.',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Cubo de Paridade 3D', dialog: [
        'Cada estado = vetor (par_0, par_1, par_2). q0=(0,0,0) é o único final.',
        'Ler 0 inverte bit-0, ler 1 inverte bit-1, ler 2 inverte bit-2.',
        'O autômato forma um cubo: 8 vértices, cada aresta troca exatamente um bit.',
      ] },
    },
    boardWords: ['', '0011', '0', '001122'],
    guidedLesson: buildLessonL32() },
  { id: 33, label: "L33", formula: "L = { w ∈ {0,1}* | w tem 001 como prefixo }",                      desc: "",                                                                 shortestWord: "001",      regex: /^001[01]*$/,                                                alphabet: ['0', '1'],             acceptedWords: ["001","0011","001100"],    rejectedWords: ["λ","1","010"],         hint: "O começo tem que ser rigorosamente '0' -> '0' -> '1'.",                                                             successMsg: "Prefixo amarrado!",
    tutorials: {
      onStart: { type: 'theory', title: 'Prefixo Obrigatório: "001"!', dialog: [
        'L33: toda palavra aceita DEVE começar com "001". O resto pode ser qualquer coisa.',
        '"001100" — válida (começa com 001). "010" — inválida (2° símbolo é 1, não 0).',
        'Estratégia: 3 estados de checagem (q0→q1→q2) + estado final q3 com loop.',
        'Qualquer desvio no prefixo cai em dead-state implícito. Sem volta!',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Trilho de Prefixo + Loop Final', dialog: [
        'q0—0→q1—0→q2—1→q3(final). Cadeia linear exata para "001".',
        'q3—{0,1}→q3: após confirmar o prefixo, qualquer símbolo é aceito.',
        'Dead implícito: q0—1, q1—1, q2—0 — qualquer desvio rejeita permanentemente.',
      ] },
    },
    boardWords: ['001', '010', '001100'],
    guidedLesson: buildLessonL33() },
  { id: 34, label: "L34", formula: "L = { w ∈ {0,1}* | w tem 1010 como sufixo }",                      desc: "",                                                                 shortestWord: "1010",     regex: /^[01]*1010$/,                                               alphabet: ['0', '1'],             acceptedWords: ["1010","01010","001010"], rejectedWords: ["λ","101","1011"],       hint: "Mantenha a porta aberta para infinitos caracteres, mas só aceite se a 'memória' bater com 1010.",                  successMsg: "Detector de sufixo ativado.",
    tutorials: {
      onStart: { type: 'theory', title: 'Detector de Sufixo "1010"!', dialog: [
        'L34: a palavra termina em "1010". O começo pode ser qualquer coisa!',
        '"01010" — válida (termina em 1010). "1011" — inválida (termina em 1011).',
        'Estratégia: 5 estados rastreiam o melhor sufixo que seja prefixo de "1010".',
        'Ao sair do padrão, backedges resetam para o estado correto — sem perder contexto.',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Sufixo com Backedges', dialog: [
        'Cadeia: q0—1→q1—0→q2—1→q3—0→q4(final). Lê "1010" perfeito!',
        'Absorção: q0—0→q0 (0 antes de 1 não ajuda). q1—1→q1 (dois 1s; só o último conta).',
        'Resets: q2—0→q0, q3—1→q0, q4—0→q0. q4—1→q3 (após "1010"+1 → novo "101").',
      ] },
    },
    boardWords: ['1010', '101', '01010', '001010', '101010'],
    guidedLesson: buildLessonL34() },
  { id: 35, label: "L35a", formula: "L = { w ∈ {0,1}* | w tem 1111 como subpalavra }",                 desc: "",                                                                 shortestWord: "1111",     regex: /^[01]*1111[01]*/,                                           alphabet: ['0', '1'],             acceptedWords: ["1111","01111","11110"],   rejectedWords: ["λ","111","11011"],     hint: "Assim que achar quatro '1's seguidos, pode ir para um estado final que aceita tudo.",                               successMsg: "Achou a subpalavra!",
    tutorials: {
      onStart: { type: 'theory', title: 'Caçando "1111"!', dialog: [
        'L35a: a palavra CONTÉM "1111" como subpalavra (em qualquer posição).',
        '"01111" — válida (contém 1111). "11011" — inválida (corrida de 1s interrompida).',
        'Estratégia: contar 1s consecutivos. Ao atingir 4, entrar em estado final permanente.',
        'Um "0" a qualquer momento zera a contagem e volta ao início.',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Contador de Uns Consecutivos', dialog: [
        'q0: nenhum 1. q1: um 1. q2: dois 1s. q3: três 1s. q4(final): quatro ou mais 1s!',
        'Ler 0 em q0/q1/q2/q3 → volta para q0 (zera contagem).',
        'q4—{0,1}→q4: uma vez achados os 4 uns, a palavra já é válida. Loop eterno!',
      ] },
    },
    boardWords: ['1111', '111', '01111', '11110'],
    guidedLesson: buildLessonL35() },
  { id: 36, label: "L35b", formula: "L = { w ∈ {a,b,c,d}* | w tem abc como prefixo }",                 desc: "",                                                                 shortestWord: "abc",      regex: /^abc[abcd]*/,                                               alphabet: ['a', 'b', 'c', 'd'],   acceptedWords: ["abc","abcd","abcabc"],   rejectedWords: ["λ","ab","bca"],        hint: "Igual ao 001, mas com um alfabeto maior.",                                                                          successMsg: "Prefixo alfabético concluído.",
    tutorials: {
      onStart: { type: 'theory', title: 'Prefixo Obrigatório: "abc"!', dialog: [
        'L35b: toda palavra aceita DEVE começar com "abc". O resto pode ser qualquer coisa.',
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
    guidedLesson: buildLessonL36() },
  { id: 37, label: "L36", formula: "L = { w ∈ {a,b,c,d}* | w tem dcba como sufixo }",                  desc: "",                                                                 shortestWord: "dcba",     regex: /^[abcd]*dcba$/,                                             alphabet: ['a', 'b', 'c', 'd'],   acceptedWords: ["dcba","adcba","aadcba"], rejectedWords: ["λ","dcb","abcd"],      hint: "O caminho final deve obrigatoriamente soletrar 'dcba'.",                                                            successMsg: "Sufixo alfabético detectado.",
    tutorials: {
      onStart: { type: 'theory', title: 'Sufixo Obrigatório: "dcba"!', dialog: [
        'L36: a palavra deve TERMINAR com "dcba". O prefixo pode ser qualquer coisa.',
        '"dcba" ✓ "adcba" ✓ "aadcba" ✓. "λ", "dcb", "abcd" ✗.',
        'Técnica KMP: 5 estados rastreiam quanto do sufixo "dcba" já foi lido.',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Cadeia + Retornos KMP', dialog: [
        'q0—d→q1—c→q2—b→q3—a→q4(f). Cadeia principal do sufixo.',
        'q0 loop a,b,c (prefixo descartado). q1 loop d (novo "d" reinicia a busca).',
        'Mismatches em q2,q3,q4 voltam para q0 ou q1 — nunca desperdiçam um "d".',
      ] },
    },
    boardWords: ['dcba', 'dcb', 'adcba', 'ddcba'],
    guidedLesson: buildLessonL37() },
  { id: 38, label: "L37", formula: "L = { w ∈ {a,b,c,d}* | tem abcd ou dcba como subpalavra }",        desc: "",                                                                 shortestWord: "abcd",     regex: /^[abcd]*(abcd|dcba)[abcd]*$/,                               alphabet: ['a', 'b', 'c', 'd'],   acceptedWords: ["abcd","dcba","aabcdb"],  rejectedWords: ["λ","abc","dcb"],       hint: "Dois caminhos independentes saindo do início que caem num mesmo estado de vitória.",                                successMsg: "Bifurcação de subpalavras dominada!",
    tutorials: {
      onStart: { type: 'theory', title: 'Subpalavra: "abcd" ou "dcba"!', dialog: [
        'L37: basta conter "abcd" ou "dcba" em qualquer posição da palavra.',
        '"abcd" ✓, "dcba" ✓, "aabcdb" ✓ (contém "abcd"). "abc", "dcb" ✗ (incompletos).',
        'Dois caminhos independentes do q0 convergem para o mesmo estado final q4.',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Dois Ramos + Resets KMP', dialog: [
        'Ramo "abcd" (topo): q0—a→qa1—b→qa2—c→qa3—d→qf(f). "abcd" aceito!',
        'Ramo "dcba" (base): q0—d→qd1—c→qd2—b→qd3—a→qf(f). "dcba" aceito!',
        'qf é poço (loop a,b,c,d). Resets KMP: todo "a" reinicia em qa1 e todo "d" em qd1 — nenhum símbolo é desperdiçado.',
      ] },
    },
    boardWords: ['abcd', 'abc', 'babcd'],
    guidedLesson: buildLessonL38() },
  { id: 39, label: "L38", formula: "L = { (a+b)* | qtd de 'a' é par, qtd de 'b' é ímpar }",            desc: "",                                                                 shortestWord: "b",        regex: /^.*$/, validate: w => [...w].filter(c=>c==='a').length%2===0 && [...w].filter(c=>c==='b').length%2===1, alphabet: ['a', 'b'],             acceptedWords: ["b","aab","bbb"],          rejectedWords: ["λ","a","ab"],          hint: "Você precisa de 4 estados para controlar: Par/Par, Par/Ímpar, Ímpar/Par, Ímpar/Ímpar.",                             successMsg: "Quadrante de paridade solucionado.",
    tutorials: {
      onStart: { type: 'theory', title: 'Paridade Dupla: a-par e b-ímpar!', dialog: [
        'L38: contar a\'s e b\'s separadamente. Aceito quando #a par E #b ímpar.',
        '"b" ✓ (0a=par, 1b=ímpar). "aab" ✓ (2a=par, 1b=ímpar). "ab" ✗ (1a=ímpar, 1b=ímpar).',
        '4 combinações de paridade → 4 estados: (p,p)=q0, (p,í)=q1, (í,p)=q2, (í,í)=q3.',
        'Cada \'a\' lido troca a paridade de a. Cada \'b\' lido troca a paridade de b.',
      ] },
      onDrawGraph: { type: 'mechanic', title: '4 Estados em Quadrado', dialog: [
        'q0(ini)=(p,p), q1(f)=(p,í), q2=(í,p), q3=(í,í). Só q1 é final.',
        'Ler \'b\': q0↔q1 e q2↔q3 (troca bit-b). Ler \'a\': q0↔q2 e q1↔q3 (troca bit-a).',
        '"aab": q0—a→q2—a→q0—b→q1(f) ✓. "ab": q0—a→q2—b→q3 (não-final) ✗.',
      ] },
    },
    boardWords: ['b', 'a', 'aab', 'bbb'],
    guidedLesson: buildLessonL39() },
  { id: 40, label: "L39", formula: "L = { (a+b)* | qtd de 'a' é ímpar, qtd de 'b' é ímpar }",          desc: "",                                                                 shortestWord: "ab",       regex: /^.*$/, validate: w => [...w].filter(c=>c==='a').length%2===1 && [...w].filter(c=>c==='b').length%2===1, alphabet: ['a', 'b'],             acceptedWords: ["ab","abbb","aaabbb"],     rejectedWords: ["λ","a","b"],           hint: "Parecido com a anterior, mas o estado de aceitação muda.",                                                          successMsg: "Paridade ímpar cruzada!",
    tutorials: {
      onStart: { type: 'theory', title: 'Paridade Dupla: a-ímpar e b-ímpar!', dialog: [
        'L39: aceito quando #a ímpar E #b ímpar. Estado final: q3=(í,í) no canto oposto de q0.',
        '"ab" ✓ (1a=ímpar, 1b=ímpar). "abbb" ✓ (1a=ímpar, 3b=ímpar). "a" ✗ (1a=ímpar, 0b=par).',
        '4 estados de paridade: q0=(p,p), q1=(p,í), q2=(í,p), q3=(í,í). Só q3 é final.',
        'Mesmo quadrado da L38, mas o estado de aceitação muda de q1 para q3.',
      ] },
      onDrawGraph: { type: 'mechanic', title: '4 Estados — Quadrante Oposto!', dialog: [
        'q0(ini)=(p,p), q1=(p,í), q2=(í,p), q3(f)=(í,í). Só q3 é final.',
        'Ler \'a\': q0↔q2 e q1↔q3 (troca bit-a). Ler \'b\': q0↔q1 e q2↔q3 (troca bit-b).',
        '"ab": q0—a→q2—b→q3(f) ✓. "aaabbb": 3a e 3b = ímpar/ímpar → q3(f) ✓.',
      ] },
    },
    boardWords: ['ab', 'a', 'abbb', 'aaabbb'],
    guidedLesson: buildLessonL40() },
];
