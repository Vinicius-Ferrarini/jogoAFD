import { LEVEL_GRAPHS } from '../levels_graphs.js';
import { makeBuilder } from './lessonBuilder.js';

// ─── Modo Aula do Lote 1 (L05–L12) — padrão "Desenha ➔ Testa ➔ Rejeição" ─────
// Cada construtor desconstrói o grafo estático (LEVEL_GRAPHS) progressivamente:
// desenha a espinha da menor palavra → testa → adiciona laços/ramos → mostra a
// máquina TRAVAR numa palavra que o aluno costuma errar (expectedVerdict:'reject')
// → testa um sucesso maior → encerra liberando o grafo completo (fase FORMAL).
// boardWords de cada nível é sincronizado com a ordem dos simulateWord aqui.

// L05 — {a^n | n > 0} — menor palavra: "a"
function buildLessonL5() {
  const b = makeBuilder(LEVEL_GRAPHS[5], { q0: [20, 50], q1: [55, 50] });
  const steps = [];
  b.addNodes('q0', 'q1').addEdges(['q0', 'a', 'q1']);
  steps.push(b.draw('Vamos construir o caminho da menor palavra válida: "a".', -1));
  steps.push(b.test('Veja "a" percorrer q0—a→q1 (final). Aceita!', 'a', 0));
  steps.push(b.reject('Mas "aa" trava em q1: sem um laço, não há para onde ir com o 2º "a"!', 'aa', 0));
  b.addEdges(['q1', 'a', 'q1']);
  steps.push(b.draw('Agora o laço q1—a→q1, que absorve "a"s extras para sempre.', 1));
  steps.push(b.test('Com o laço, "aaa" gira em q1 e continua aceitando.', 'aaa', 1));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

// L06 — {a^n | n > 0, n ímpar} — menor palavra: "a"
function buildLessonL6() {
  const b = makeBuilder(LEVEL_GRAPHS[6], { q0: [20, 50], q1: [55, 50] });
  const steps = [];
  b.addNodes('q0', 'q1').addEdges(['q0', 'a', 'q1']);
  steps.push(b.draw('Vamos construir o caminho da menor palavra ímpar: "a".', -1));
  steps.push(b.test('Veja "a" (1 = ímpar) chegar a q1 (final). Aceita!', 'a', 0));
  b.addEdges(['q1', 'a', 'q0']);
  steps.push(b.draw('Adicionamos o vai-e-volta q1—a→q0, que rastreia a paridade.', 1));
  steps.push(b.reject('Mas "aa" (2 = par) termina em q0, que NÃO é final. Por isso rastreamos a paridade!', 'aa', 1));
  steps.push(b.test('Já "aaa" (3 = ímpar) volta a q1 (final). Aceita!', 'aaa', 1));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

// L07 — {a b^n a | n ≥ 0, n par} — menor palavra: "aa"
function buildLessonL7() {
  const b = makeBuilder(LEVEL_GRAPHS[7], {
    q0: [15, 50], q1: [40, 50], q2: [37, 80], q3: [64, 46],
  });
  const steps = [];
  b.addNodes('q0', 'q1', 'q3').addEdges(['q0', 'a', 'q1'], ['q1', 'a', 'q3']);
  steps.push(b.draw('Menor palavra "aa" (zero "b"s no meio): q0—a→q1—a→q3 (final).', -1));
  steps.push(b.test('Veja "aa" percorrer a espinha até q3 (final). Aceita!', 'aa', 0));
  b.addNodes('q2').addEdges(['q1', 'b', 'q2'], ['q2', 'b', 'q1']);
  steps.push(b.draw('Adicionamos o ping-pong q1↔q2 para contar os "b"s em pares.', 1));
  steps.push(b.reject('Mas "aba" tem 1 "b" (ímpar): para em q2, que não lê "a". B\'s vêm em duplas!', 'aba', 1));
  steps.push(b.test('Já "abba" tem 2 "b"s (par): volta a q1 e fecha em q3. Aceita!', 'abba', 1));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

// L08 — {a (bc)^n a | n > 0} — menor palavra: "abca"
function buildLessonL8() {
  const b = makeBuilder(LEVEL_GRAPHS[8], {
    q0: [12, 50], q1: [30, 50], q2: [48, 50], q3: [66, 50], q4: [84, 50],
  });
  const steps = [];
  b.addNodes('q0', 'q1', 'q2', 'q3', 'q4')
   .addEdges(['q0', 'a', 'q1'], ['q1', 'b', 'q2'], ['q2', 'c', 'q3'], ['q3', 'a', 'q4']);
  steps.push(b.draw('Menor palavra "abca" (um ciclo "bc"): cadeia q0→q1→q2→q3→q4 (final).', -1));
  steps.push(b.test('Veja "abca" percorrer a cadeia até q4 (final). Aceita!', 'abca', 0));
  steps.push(b.reject('Mas "aa" pula o ciclo "bc" obrigatório (n>0): trava em q1!', 'aa', 0));
  b.addEdges(['q3', 'b', 'q2']);
  steps.push(b.draw('Adicionamos o retorno q3—b→q2, que repete o ciclo "bc".', 1));
  steps.push(b.test('Com o retorno, "abcbca" dá duas voltas no ciclo e fecha em q4. Aceita!', 'abcbca', 1));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

// L09 — {a^n b^m c^p | n > 0, m ≥ 0, p ≥ 0} — menor palavra: "a"
function buildLessonL9() {
  const b = makeBuilder(LEVEL_GRAPHS[9], {
    q0: [15, 50], q1: [38, 50], q2: [61, 72], q3: [84, 50],
  });
  const steps = [];
  b.addNodes('q0', 'q1').addEdges(['q0', 'a', 'q1']);
  steps.push(b.draw('Menor palavra "a" (n>0): q0—a→q1 (final).', -1));
  steps.push(b.test('Veja "a" chegar a q1 (final). Aceita!', 'a', 0));
  steps.push(b.reject('Mas "b" não começa com "a" (n>0): trava logo em q0!', 'b', 0));
  b.addNodes('q2').addEdges(['q1', 'a', 'q1'], ['q1', 'b', 'q2'], ['q2', 'b', 'q2']);
  steps.push(b.draw('Adicionamos o laço de "a" e o bloco de "b"s (q1→q2, laço em q2).', 1));
  steps.push(b.test('"aabb" usa o laço de "a" e o bloco de "b"s, parando em q2 (final). Aceita!', 'aabb', 1));
  b.addNodes('q3').addEdges(['q2', 'c', 'q3'], ['q3', 'c', 'q3']);
  steps.push(b.draw('Por fim, o bloco de "c"s (q2→q3, laço em q3).', 2));
  steps.push(b.test('"aabbcc" percorre os três blocos e fecha em q3 (final). Aceita!', 'aabbcc', 2));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

// L10 — {a^n bb a^m | n,m ≥ 0 e pares} — menor palavra: "bb"
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

// L11 — {a^n b^m | (n+m) par} — menor palavra: λ
function buildLessonL11() {
  const b = makeBuilder(LEVEL_GRAPHS[11], {
    ae: [22, 25], ao: [78, 25], bo: [22, 80], be: [78, 80],
  });
  const steps = [];
  b.addNodes('ae');
  steps.push(b.draw('A menor palavra é λ (0+0 = par): o estado inicial "ae" já é final.', -1));
  steps.push(b.test('Veja λ ser aceita parada em "ae" (inicial E final).', '', 0));
  b.addNodes('ao').addEdges(['ae', 'a', 'ao'], ['ao', 'a', 'ae']);
  steps.push(b.draw('Adicionamos o vai-e-volta ae↔ao para a paridade dos "a"s.', 1));
  steps.push(b.reject('Mas "a" (1 = ímpar) termina em "ao", que NÃO é final!', 'a', 1));
  steps.push(b.test('Já "aa" (2 = par) volta a "ae" (final). Aceita!', 'aa', 1));
  b.addNodes('bo', 'be')
   .addEdges(['ae', 'b', 'bo'], ['ao', 'b', 'be'], ['be', 'b', 'bo'], ['bo', 'b', 'be']);
  steps.push(b.draw('Completamos o quadrado com os "b"s (estados "be" par e "bo" ímpar).', 2));
  steps.push(b.reject('"b" sozinho (1 = ímpar) termina em "bo", que NÃO é final!', 'b', 2));
  steps.push(b.test('"ab" (1+1 = par) chega a "be" (final). Aceita!', 'ab', 2));
  steps.push(b.test('E "bb" (0+2 = par) também fecha em "be" (final). Aceita!', 'bb', 2));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

// L12 — {a^n b^2m | n > 0, m > 0} — menor palavra: "abb"
function buildLessonL12() {
  const b = makeBuilder(LEVEL_GRAPHS[12], {
    q0: [15, 50], q1: [38, 50], q2: [60, 50], q3: [82, 50],
  });
  const steps = [];
  b.addNodes('q0', 'q1', 'q2', 'q3')
   .addEdges(['q0', 'a', 'q1'], ['q1', 'b', 'q2'], ['q2', 'b', 'q3']);
  steps.push(b.draw('Menor palavra "abb" (1 "a" + 1 dupla de "b"s): q0→q1→q2→q3 (final).', -1));
  steps.push(b.test('Veja "abb" fechar em q3 (final). Aceita!', 'abb', 0));
  steps.push(b.reject('Mas "ab" tem 1 "b" só (ímpar): para em q2, que NÃO é final. B\'s vêm em duplas!', 'ab', 0));
  b.addEdges(['q1', 'a', 'q1']);
  steps.push(b.draw('Adicionamos o laço q1—a→q1 para "a"s extras (n>0).', 1));
  steps.push(b.test('"aabb" usa o laço de "a" e fecha a dupla de "b"s em q3. Aceita!', 'aabb', 1));
  b.addEdges(['q3', 'b', 'q2']);
  steps.push(b.draw('E o ping-pong q3—b→q2, que repete as duplas de "b"s.', 2));
  steps.push(b.test('"abbbb" lê duas duplas de "b"s (q2↔q3) e fecha em q3. Aceita!', 'abbbb', 2));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

// L13 — {(ab)^n (cd)^m | n>0, m>0} — menor palavra: "abcd"
function buildLessonL13() {
  const b = makeBuilder(LEVEL_GRAPHS[13], {
    q0: [12, 50], q1: [30, 50], q2: [50, 50], q3: [68, 50], q4: [85, 50],
  });
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

// L15 — {w | |w| par} — menor palavra: λ
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

// L16 — {u a v b x c y} (subsequência a…b…c em ordem) — menor palavra: "abc"
function buildLessonL16() {
  const b = makeBuilder(LEVEL_GRAPHS[16], {
    q0: [15, 50], q1: [38, 50], q2: [62, 50], q3: [85, 50],
  });
  const steps = [];
  b.addNodes('q0', 'q1', 'q2', 'q3')
   .addEdges(['q0', 'a', 'q1'], ['q1', 'b', 'q2'], ['q2', 'c', 'q3']);
  steps.push(b.draw('Menor palavra "abc" (um "a", um "b", um "c" em ordem): q0→q1→q2→q3 (final).', -1));
  steps.push(b.test('Veja "abc" percorrer a cadeia até q3 (final). Aceita!', 'abc', 0));
  steps.push(b.reject('Mas "ab" não achou o "c": para em q2, que NÃO é final!', 'ab', 0));
  b.addEdges(['q0', 'b', 'q0'], ['q1', 'a', 'q1'], ['q2', 'a', 'q2'], ['q3', 'a', 'q3']);
  steps.push(b.draw('Adicionamos os laços de espera: cada estado ignora símbolos que ainda não procura.', 1));
  steps.push(b.test('"aabc" usa o laço de q1 (ignora o 2º "a") e fecha em q3. Aceita!', 'aabc', 1));
  steps.push(b.test('"abbc" usa o laço de q2 (ignora o 2º "b") e fecha em q3. Aceita!', 'abbc', 1));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

// L17 — {w | começa com 'a' e |w| par} — menor palavra: "aa"
function buildLessonL17() {
  const b = makeBuilder(LEVEL_GRAPHS[17], {
    q0: [15, 50], q1: [50, 50], q2: [82, 50],
  });
  const steps = [];
  b.addNodes('q0', 'q1', 'q2').addEdges(['q0', 'a', 'q1'], ['q1', 'a', 'q2']);
  steps.push(b.draw('Menor palavra "aa" (começa com "a", comprimento 2): q0—a→q1—a,b→q2 (final).', -1));
  steps.push(b.test('Veja "aa" chegar a q2 (final). Aceita!', 'aa', 0));
  steps.push(b.reject('Mas "a" tem comprimento 1 (ímpar): para em q1, que NÃO é final!', 'a', 0));
  b.addEdges(['q2', 'a', 'q1']);
  steps.push(b.draw('Adicionamos o vai-e-volta q1↔q2 para manter a paridade do comprimento.', 1));
  steps.push(b.test('"abba" começa com "a" e tem 4 letras (par): q0→q1→q2→q1→q2 (final). Aceita!', 'abba', 1));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

// L18 — {w | não contém 'aa' como subpalavra} — menor palavra: λ
function buildLessonL18() {
  const b = makeBuilder(LEVEL_GRAPHS[18], {
    q0: [20, 50], q1: [50, 50], q2: [80, 50],
  });
  const steps = [];
  b.addNodes('q0').addEdges(['q0', 'b', 'q0']);
  steps.push(b.draw('λ e qualquer sequência de "b"s: q0 é inicial+final, com laço de "b".', -1));
  steps.push(b.test('Veja λ ser aceita parada em q0 (final).', '', 0));
  b.addNodes('q1').addEdges(['q0', 'a', 'q1'], ['q1', 'b', 'q0']);
  steps.push(b.draw('Adicionamos q1 (um "a" lido): um "b" reinicia a contagem, voltando a q0.', 1));
  steps.push(b.test('"ab" lê um "a" e reinicia com "b": q0→q1→q0 (final). Aceita!', 'ab', 1));
  b.addNodes('q2').addEdges(['q1', 'a', 'q2'], ['q2', 'a', 'q2'], ['q2', 'b', 'q2']);
  steps.push(b.draw('E a armadilha q2 (não-final): um 2º "a" seguido cai aqui e nunca mais sai.', 2));
  steps.push(b.reject('"aa" tem dois "a"s seguidos: q0→q1→q2 (armadilha, não-final). Rejeita!', 'aa', 2));
  steps.push(b.test('Já "aba" intercala com "b": q0→q1→q0→q1 (final). Aceita!', 'aba', 2));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

// L19 — {w | qtd(a) ímpar E qtd(b) ímpar} — quadrado de paridade — menor: "ab"
function buildLessonL19() {
  const b = makeBuilder(LEVEL_GRAPHS[19], {
    q0: [30, 20], q1: [70, 20], q2: [30, 80], q3: [70, 80],
  });
  const steps = [];
  b.addNodes('q0', 'q1', 'q3').addEdges(['q0', 'a', 'q1'], ['q1', 'b', 'q3']);
  steps.push(b.draw('Menor palavra "ab" (1 "a", 1 "b" = ímpar/ímpar): q0—a→q1—b→q3 (final).', -1));
  steps.push(b.test('Veja "ab" chegar a q3 (final). Aceita!', 'ab', 0));
  steps.push(b.reject('Mas "a" tem 1 "a" e 0 "b" (b par): para em q1, que NÃO é final!', 'a', 0));
  b.addNodes('q2').addEdges(['q1', 'a', 'q0'], ['q0', 'b', 'q2'], ['q2', 'b', 'q0'],
                            ['q2', 'a', 'q3'], ['q3', 'a', 'q2'], ['q3', 'b', 'q1']);
  steps.push(b.draw('Completamos o quadrado: "a" troca a linha, "b" troca a coluna (q3 = ímpar/ímpar).', 1));
  steps.push(b.test('"ba" chega a q3 pelo outro lado: q0—b→q2—a→q3 (final). Aceita!', 'ba', 1));
  steps.push(b.reject('"abab" tem 2 "a"s e 2 "b"s (ambos pares): volta a q0, que NÃO é final!', 'abab', 1));
  steps.push(b.test('Já "aaab" tem 3 "a"s e 1 "b" (ímpar/ímpar): q0→q1→q0→q1→q3 (final). Aceita!', 'aaab', 1));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

// L20 — {w | |w|≥2 e a's precedem b's} — menor palavra: "ab"
function buildLessonL20() {
  const b = makeBuilder(LEVEL_GRAPHS[20], {
    q0: [10, 50], qa: [33, 28], qaa: [60, 20], qab: [86, 45], qb: [33, 75], qbb: [64, 82],
  });
  const steps = [];
  b.addNodes('q0', 'qa', 'qab').addEdges(['q0', 'a', 'qa'], ['qa', 'b', 'qab']);
  steps.push(b.draw('Menor palavra "ab" (um "a" depois um "b"): q0→qa→qab (final).', -1));
  steps.push(b.test('Veja "ab" chegar a qab (final). Aceita!', 'ab', 0));
  steps.push(b.reject('Mas "a" tem só 1 letra (|w|≥2): para em qa, que NÃO é final!', 'a', 0));
  b.addNodes('qaa').addEdges(['qa', 'a', 'qaa'], ['qaa', 'a', 'qaa'], ['qaa', 'b', 'qab']);
  steps.push(b.draw('Adicionamos o caminho dos "a"s repetidos: qa—a→qaa (final, laço a).', 1));
  steps.push(b.test('"aab" lê dois "a"s e fecha com "b": q0→qa→qaa→qab (final). Aceita!', 'aab', 1));
  b.addEdges(['qab', 'b', 'qab']);
  steps.push(b.draw('E o laço qab—b→qab para os "b"s finais repetidos.', 1));
  steps.push(b.test('"abb" lê "a" e depois "b"s: q0→qa→qab→qab (final). Aceita!', 'abb', 1));
  b.addNodes('qb', 'qbb').addEdges(['q0', 'b', 'qb'], ['qb', 'b', 'qbb'], ['qbb', 'b', 'qbb']);
  steps.push(b.draw('Por fim, o caminho só de "b"s: q0→qb→qbb (final). Note: qb não lê "a"!', 2));
  steps.push(b.reject('"ba" tem "a" depois de "b": qb não lê "a" e a máquina trava!', 'ba', 2));
  steps.push(b.test('Já "bb" são dois "b"s: q0→qb→qbb (final). Aceita!', 'bb', 2));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

export const lote1 = [
  { id: 1,  label: "L01", formula: "L = ∅",                                                               wordOnly: true,  desc: "A linguagem mais simples que existe; não contém palavras.",           shortestWord: null,       regex: /(?!)/,                                                     alphabet: [],                     acceptedWords: [],                         rejectedWords: ["λ","a","0"],           hint: "Uma linguagem vazia não aceita absolutamente nada. Como o grafo deve ficar?",                                       successMsg: "Perfeito! Um autômato sem estados finais não aceita nada.",
    tutorials: {
      onStart: { type: 'theory', title: 'Bem-vindo ao TuringLab!', dialog: [
        'Olá! Sou Maurílio, seu guia de AFDs! 🤖 Vamos aprender construindo!',
        'Um AFD lê uma palavra letra por letra e decide: ACEITA ✅ ou REJEITA ❌.',
        'L = ∅ é a linguagem VAZIA — zero palavras aceitas. Absolutamente nada!',
        'Sua tarefa: descobrir a menor palavra desta linguagem. Ela é bem especial... 🤔',
      ] },
      onFormalDesc: { type: 'theory', title: 'Descrição Formal', dialog: [
        'Um AFD é a quíntupla M = (Q, Σ, δ, q₀, F) — cada campo tem um significado preciso!',
        'Q = estados, Σ = alfabeto, δ = transições, q₀ = inicial, F = finais.',
        'Para L = ∅: F = {} (conjunto vazio). Nenhum estado é final, logo nada é aceito!',
      ] },
      onTable: { type: 'theory', title: 'Tabela de Transição (δ)', dialog: [
        'A Tabela δ formaliza a função de transição: δ(estado, símbolo) → estado destino.',
        'Cada linha é um estado; cada coluna é um símbolo do alfabeto Σ.',
        'Para L = ∅, Σ é vazio — por isso a tabela δ também não tem colunas!',
      ] },
    } },
  { id: 2,  label: "L02", formula: "L = { λ }",                                                           desc: "Contém uma única palavra: a palavra vazia.",                         shortestWord: "",         regex: /^$/,                                                        alphabet: [],                     acceptedWords: [""],                        rejectedWords: ["a","0","b"],           hint: "Se a palavra é vazia, o estado inicial também deve ser o final!",                                                   successMsg: "Exato! Aceitar o vazio significa já nascer no estado final.",
    allowedCards: ['toggleInitial', 'addNode', 'toggleFinal', 'erase', 'undo', 'redo'],
    tutorials: {
      onStart: { type: 'mechanic', title: 'Seu Primeiro Autômato!', dialog: [
        'Boa! Hora de construir seu PRIMEIRO autômato! 🎉',
        'L = {λ} aceita só a palavra vazia λ (zero letras). Nada mais!',
        'Se λ é aceita, o estado inicial JÁ É o final. Use ▶ e depois ◎ no mesmo estado!',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Canvas Liberado!', dialog: [
        'Perfeito! Você descobriu a menor palavra. Agora construa o autômato!',
        'L = {λ}: um único estado que seja INICIAL e FINAL ao mesmo tempo.',
        'Use a carta ▶ e depois ◎ no mesmo estado. Um clique de cada!',
      ] },
      onFormalDesc: { type: 'theory', title: 'Descrição Formal', dialog: [
        'Hora de formalizar! M = (Q, Σ, δ, q₀, F).',
        'Para L = {λ}: Q = {q0}, Σ = {} (sem símbolos!), q₀ = q0, F = {q0}.',
        'Note: q₀ ∈ F — o estado inicial também é final, pois λ é aceita imediatamente!',
        'Dica: campo com 1 elemento usa nome direto — ex: q0 (sem chaves { }).',
      ] },
      onTable: { type: 'theory', title: 'Tabela de Transição (δ)', dialog: [
        'L = {λ} tem Σ = {} — alfabeto vazio, portanto δ não tem colunas!',
        'Isso é normal: sem símbolos no alfabeto, não há transições para descrever.',
        'A partir de L03 (com símbolo "0"), a tabela começa a ter conteúdo real!',
      ] },
    } },
  { id: 3,  label: "L03", formula: "L = { 0 }",                                                           desc: "Contém uma única palavra: 0.",                                      shortestWord: "0",        regex: /^0$/,                                                       alphabet: ['0'],                  acceptedWords: ["0"],                       rejectedWords: ["λ","1","00"],          hint: "Basta um caminho simples do início ao fim lendo '0'.",                                                              successMsg: "Muito bem! Simples e direto.",
    allowedCards: ['toggleInitial', 'addNode', 'addTransition', 'toggleFinal', 'erase', 'undo', 'redo'],
    tutorials: {
      onStart: { type: 'mechanic', title: 'Criando Transições!', dialog: [
        'Parabéns! Hora de criar SETAS (transições)! ↗',
        'L = {0} aceita só "0". Precisa de 2 estados ligados por uma seta com símbolo "0".',
        'Nova carta desbloqueada: Criar Seta ↗. Clique nela, depois no estado origem, depois no destino!',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Hora de Montar!', dialog: [
        'Você achou a menor palavra! Agora monte o autômato passo a passo.',
        'Dica: use o botão 👨‍🏫 Assistir Aula no topo para ver uma demonstração guiada!',
      ] },
      onFormalDesc: { type: 'theory', title: 'Descrição Formal', dialog: [
        'Este painel mostra a DESCRIÇÃO FORMAL do AFD: estados, alfabeto, função de transição...',
        'Preencha tudo corretamente aqui para ganhar a terceira estrela ⭐⭐⭐!',
      ] },
      onTable: { type: 'theory', title: 'Tabela de Transição (δ)', dialog: [
        'Preencha a tabela δ para L = {0}: 1 coluna (símbolo "0"), linhas = seus estados.',
        'δ(q0, 0) = q1 — lendo "0" em q0, vamos para q1 (o estado final).',
        'Se um estado não tem transição para um símbolo, a célula fica vazia (rejeição implícita).',
        'Atenção: o nome do estado destino deve bater EXATAMENTE com o nome que você deu no canvas!',
      ] },
    },
    guidedLesson: [
      {
        text: 'Passo 1: Crie o estado inicial. Clique em "Novo Estado" para criar q0, depois em "Estado Inicial" e clique nele.',
        stateUpdate: {
          nodes: [{ id: 'q0', label: 'q0', x: 30, y: 50, isInitial: true, isFinal: false }],
          transitions: [],
        },
      },
      {
        text: 'Passo 2: Crie o estado final. Clique em "Novo Estado" para criar q1, depois em "Definir Final" e clique nele.',
        stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 30, y: 50, isInitial: true, isFinal: false },
            { id: 'q1', label: 'q1', x: 70, y: 50, isInitial: false, isFinal: true },
          ],
          transitions: [],
        },
      },
      {
        text: 'Passo 3: Conecte q0 → q1. Clique em "Criar Seta", depois em q0 (origem), depois em q1 (destino). Por fim, selecione o símbolo "0".',
        stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 30, y: 50, isInitial: true, isFinal: false },
            { id: 'q1', label: 'q1', x: 70, y: 50, isInitial: false, isFinal: true },
          ],
          transitions: [{ from: 'q0', to: 'q1', symbol: '0' }],
        },
      },
    ] },
  { id: 4,  label: "L04", formula: "L = { λ, 0 }",                                                        desc: "Contém duas palavras: λ e 0.",                                      shortestWord: "",         regex: /^0?$/,                                                      alphabet: ['0'],                  acceptedWords: ["","0"],                    rejectedWords: ["1","00","01"],         hint: "Lembre-se que o estado inicial já aceita λ. O que acontece se ler um 0?",                                           successMsg: "Acertou! Dois caminhos de aceitação.",
    tutorials: {
      onStart: { type: 'mechanic', title: 'Dois Caminhos de Aceitação!', dialog: [
        'L = {λ, 0} aceita DUAS palavras: λ (vazia) E "0". Mais de uma aceitação!',
        'Para aceitar λ, o estado inicial deve ser final. Para aceitar "0", precisa de uma seta.',
        'Um único estado pode ser inicial E final ao mesmo tempo — assim cobre os dois casos!',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Estado Inicial Final + Seta', dialog: [
        'Padrão novo: q0 é inicial E final (aceita λ). Adicione q1 (final) com seta 0→q1.',
        'Esse padrão — estado inicial final mais transição para outro final — vai aparecer muito!',
      ] },
    },
    boardWords: ['λ', '0'],
    guidedLesson: [
      { text: 'Decifrar: L = { λ, 0 }.<br/>Aceitar: <b>λ</b> e <b>0</b>. Rejeitar: tudo mais!',
        boardDoneUpTo: -1, stateUpdate: { nodes: [], transitions: [] } },
      { text: 'Foco em <b>λ</b>: palavra vazia — o estado inicial precisa ser final também!',
        boardDoneUpTo: 0, stateUpdate: { nodes: [], transitions: [] } },
      { text: 'Solução: <b>q0</b> ini+final. "λ": q0(final) ✓. Próxima: "0" — q0 sem seta!',
        boardDoneUpTo: 1, stateUpdate: {
          nodes: [{ id: 'q0', label: 'q0', x: 20, y: 50, isInitial: true, isFinal: true }],
          transitions: [] } },
      { text: 'Foco em <b>0</b>: q0 lê "0" — sem seta, vai para dead state!',
        boardDoneUpTo: 1, stateUpdate: {
          nodes: [{ id: 'q0', label: 'q0', x: 20, y: 50, isInitial: true, isFinal: true }],
          transitions: [] } },
      { text: 'Solução: <b>q1</b>(final) + q0—0→q1. "0": q0→q1 ✓ Concluído!',
        boardDoneUpTo: 2, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 20, y: 50, isInitial: true, isFinal: true },
            { id: 'q1', label: 'q1', x: 55, y: 50, isInitial: false, isFinal: true },
          ],
          transitions: [{ from: 'q0', to: 'q1', symbol: '0' }] } },
    ] },
  { id: 5,  label: "L05", formula: "L = { a^n | n > 0 }",                                                 desc: "",                                                                 shortestWord: "a",        regex: /^a+$/,                                                      alphabet: ['a'],                  acceptedWords: ["a","aa","aaa"],            rejectedWords: ["λ","b","ba"],          hint: "Você precisa ler pelo menos um 'a', e depois pode ler infinitos.",                                                  successMsg: "Ótimo uso de repetição (loop) no estado final!",
    tutorials: {
      onStart: { type: 'theory', title: 'Notação a^n — Repetição Infinita!', dialog: [
        'Nova notação: a^n com n > 0 significa "pelo menos um a, podendo ser infinitos".',
        '"a", "aa", "aaa"... todos aceitos. λ NÃO — pois n > 0 exige ao menos 1 símbolo!',
        'Para aceitar infinitas palavras, o grafo precisa de um LOOP — seta que aponta para si mesma.',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Mecânica de Loop!', dialog: [
        'Mecânica nova: LOOP — uma transição que parte de um estado e volta para ele mesmo.',
        'Estrutura: q0 (inicial) →(a)→ q1 (final). Mais: q1 →(a)→ q1 (o próprio loop).',
        'Assim: ler "a" chega em q1 (aceita). Ler mais "a"s fica em q1 e continua aceitando!',
      ] },
    },
    boardWords: ['a', 'aa', 'aaa'],
    guidedLesson: buildLessonL5() },
  { id: 6,  label: "L06", formula: "L = { a^n | n > 0 e n é ímpar }",                                    desc: "",                                                                 shortestWord: "a",        regex: /^a(aa)*$/,                                                  alphabet: ['a'],                  acceptedWords: ["a","aaa","aaaaa"],         rejectedWords: ["λ","aa","aaaa"],       hint: "Ímpar significa 1, 3, 5... Vai e volta entre dois estados!",                                                        successMsg: "Mecânica de paridade dominada!",
    tutorials: {
      onStart: { type: 'theory', title: 'Paridade: Ímpar vs Par', dialog: [
        'Novo conceito: PARIDADE! 🔢 Ímpar = 1,3,5... Par = 0,2,4...',
        'Para contar comprimento ímpar, use 2 estados alternando a cada "a" lido.',
        'Comece no estado "ímpar" (1 "a" já aceita). Cada novo "a" inverte: ímpar ↔ par!',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Mecânica Vai-e-Volta', dialog: [
        'Mecânica VAI-E-VOLTA: dois estados trocam papéis a cada símbolo lido.',
        'q0 (par, inicial, NÃO final) ←→ q1 (ímpar, FINAL). Cada "a" alterna entre eles.',
        'Leu "a": q0→q1 (aceita, comprimento ímpar). Leu mais "a": q1→q0 (rejeita, par). E assim vai!',
      ] },
    },
    boardWords: ['a', 'aa', 'aaa'],
    guidedLesson: buildLessonL6() },
  { id: 7,  label: "L07", formula: "L = { a b^n a | n ≥ 0 e n é par }",                                  desc: "",                                                                 shortestWord: "aa",       regex: /^a(bb)*a$/,                                                 alphabet: ['a', 'b'],             acceptedWords: ["aa","abba","abbbba"],      rejectedWords: ["a","aba","abbba","b","ba","baa","babba","aab","aaba","abbab","aaa"],     hint: "A palavra começa com 'a', termina com 'a', e no meio os 'b's andam em duplas.",                                    successMsg: "Excelente! Você controlou o sanduíche de 'b's pares.",
    tutorials: {
      onStart: { type: 'theory', title: 'Linguagem Sanduíche!', dialog: [
        'Linguagem SANDUÍCHE! 🥪 Início e fim fixos, meio variável.',
        'Começa com "a", seguido de um número PAR de "b"s (0, 2, 4...), termina com "a".',
        'Dica: rastreie o "a" inicial, a paridade dos "b"s e feche com o "a" final.',
      ] },
      onDrawGraph: { type: 'theory', title: '≥ 0 vs > 0: Detalhe Crucial!', dialog: [
        'Atenção: n ≥ 0 significa ZERO ou mais "b"s — portanto "aa" é válida (zero b\'s no meio)!',
        'Se fosse n > 0, pelo menos um "b" seria obrigatório. Com ≥ 0, o meio pode ser vazio.',
        'Para cobrir n=0: crie uma transição do estado "b-par" direto para o estado que lê o "a" final.',
      ] },
    },
    boardWords: ['aa', 'aba', 'abba'],
    guidedLesson: buildLessonL7() },
  { id: 8,  label: "L08", formula: "L = { a(bc)^n a | n > 0 }",                                          desc: "",                                                                 shortestWord: "abca",     regex: /^a(bc)+a$/,                                                 alphabet: ['a', 'b', 'c'],        acceptedWords: ["abca","abcbca"],           rejectedWords: ["aa","aca","abba"],     hint: "Começa com 'a', depois exige o ciclo exato 'bc', 'bc', e fecha com 'a'.",                                           successMsg: "Belo ciclo! A sequência foi respeitada.",
    tutorials: {
      onStart: { type: 'theory', title: 'Agrupamento Cíclico (bc)^n', dialog: [
        'Parênteses na notação! (bc)^n significa o GRUPO "bc" repetido n vezes, com n > 0.',
        'Cada volta do ciclo consome DOIS símbolos em ordem fixa: primeiro "b", depois "c".',
        'Para isso, dois estados intermediários formam o ciclo: s→(b)→s2→(c)→s (e volta).',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Ciclo de Dois Passos', dialog: [
        'Estrutura: q0→(a)→q1→(b)→q2→(c)→q1 (loop do ciclo). Depois q1→(a)→qFinal.',
        'O ciclo "bc" gira entre q1 e q2 indefinidamente — cada volta completa o grupo!',
        'Como n > 0, o ciclo é obrigatório: não existe atalho direto de q0 para o estado final.',
      ] },
    },
    boardWords: ['abca', 'aa', 'abcbca'],
    guidedLesson: buildLessonL8() },
  { id: 9,  label: "L09", formula: "L = { a^n b^m c^p | n > 0, m ≥ 0, p ≥ 0 }",                         desc: "",                                                                 shortestWord: "a",        regex: /^a+b*c*$/,                                                  alphabet: ['a', 'b', 'c'],        acceptedWords: ["a","ab","abc"],            rejectedWords: ["λ","b","ba"],          hint: "Os blocos não se misturam. Primeiro só 'a's, depois só 'b's, e por fim só 'c's.",                                  successMsg: "Progresso linear perfeito!",
    tutorials: {
      onStart: { type: 'theory', title: 'Variáveis Independentes!', dialog: [
        'Três blocos independentes: a^n (n>0, obrigatório), b^m (m≥0, opcional), c^p (p≥0, opcional).',
        'Independente significa que cada bloco tem sua regra própria. "a" sozinho é válido!',
        'O fluxo é estritamente da esquerda para a direita — nunca se volta para o bloco anterior.',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Blocos Lineares com Loops', dialog: [
        'q0 (inicial, NÃO final) →(a)→ q1 (final). q1 tem loop em "a" para a\'s extras.',
        'q1 →(b)→ q2 (final, loop em "b"). q2 →(c)→ q3 (final, loop em "c").',
        'q1, q2 e q3 são todos finais — após o primeiro "a", qualquer b*c* é válido!',
      ] },
    },
    boardWords: ['a', 'b', 'aabb', 'aabbcc'],
    guidedLesson: buildLessonL9() },
  { id: 10, label: "L10", formula: "L = { a^n b b a^m | n,m ≥ 0 e pares }",                              desc: "",                                                                 shortestWord: "bb",       regex: /^(aa)*bb(aa)*$/,                                            alphabet: ['a', 'b'],             acceptedWords: ["bb","aabb","bbaa"],        rejectedWords: ["abb","bba","b"],       hint: "Começa com 'a's pares (ou zero), o núcleo é 'bb', termina com 'a's pares.",                                        successMsg: "Núcleo isolado com sucesso!",
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
    guidedLesson: buildLessonL10() },
  { id: 11, label: "L11", formula: "L = { a^n b^m | (n + m) é par e n,m ≥ 0 }",                         desc: "",                                                                 shortestWord: "",         regex: /^((aa)*(bb)*|a(aa)*b(bb)*)$/,                               alphabet: ['a', 'b'],             acceptedWords: ["λ","aa","ab"],            rejectedWords: ["a","b","aab"],         hint: "A soma é par se ambos forem pares, ou se ambos forem ímpares!",                                                    successMsg: "Lógica matemática aplicada no grafo. Lindo!",
    tutorials: {
      onStart: { type: 'theory', title: 'Dois Casos de Paridade!', dialog: [
        'n + m é par em dois casos: AMBOS pares (0+0, 2+2...) ou AMBOS ímpares (1+1, 3+1...).',
        'Lógica: cada "a" ou "b" lido alterna a paridade do contador parcial correspondente.',
        'Quadrado limpo: 4 estados em grid 2×2. Horizontais com "a", verticais com "b". Zero diagonais!',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Quadrado Limpo de Paridade', dialog: [
        'Topo: <b>q0</b>(ini/final)↔<b>q1</b> com "a". Base: <b>q2</b>↔<b>q3</b>(final) com "a".',
        'Esquerda: <b>q0</b>↔<b>q2</b> com "b". Direita: <b>q1</b>↔<b>q3</b> com "b".',
        'Nenhuma seta diagonal — o quadrado garante clareza visual total!',
      ] },
    },
    boardWords: ['', 'a', 'aa', 'b', 'ab', 'bb'],
    guidedLesson: buildLessonL11() },
  { id: 12, label: "L12", formula: "L = { a^n b^2m | n > 0, m > 0 }",                                    desc: "",                                                                 shortestWord: "abb",      regex: /^a+(bb)+$/,                                                 alphabet: ['a', 'b'],             acceptedWords: ["abb","aabb","abbbb"],      rejectedWords: ["a","ab","bb"],         hint: "Os 'b's só podem vir em duplas após pelo menos um 'a'.",                                                            successMsg: "Duplas de B controladas.",
    tutorials: {
      onStart: { type: 'theory', title: 'Armadilha Natural dos "b"s Ímpares!', dialog: [
        'b^2m com m > 0: pelo menos UM par de "b"s, nunca um "b" avulso.',
        'Segredo: o estado no "meio" de cada par NÃO é final — "b" solitário trava e morre!',
        'Isso cria um <u>ping-pong</u> natural: estado-de-ida (não-final) ↔ estado-de-chegada (final).',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Montando o Ping-Pong de B', dialog: [
        'Caminho: <b>q0</b>(loop a) → <b>q1</b> → <b>q2</b>↔<b>q3</b>(final).',
        '<b>q1</b> garante n > 0: sem pelo menos um "a", nunca chega ao bloco de "b"s.',
        'O ping-pong <b>q2↔q3</b> aceita exatamente bb, bbbb, bbbbbb — pares infinitos!',
      ] },
    },
    boardWords: ['abb', 'ab', 'aabb', 'abbbb'],
    guidedLesson: buildLessonL12() },
  { id: 13, label: "L13", formula: "L = { (ab)^n (cd)^m | n > 0, m > 0 }",                               desc: "",                                                                 shortestWord: "abcd",     regex: /^(ab)+(cd)+$/,                                              alphabet: ['a', 'b', 'c', 'd'],   acceptedWords: ["abcd","ababcd","abcdcd"], rejectedWords: ["ab","cd","abdc"],      hint: "Blocos duplos de 'ab' seguidos por blocos duplos de 'cd'.",                                                        successMsg: "Padrão silábico validado!",
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
    guidedLesson: buildLessonL13() },
  { id: 14, label: "L14", formula: "L = { w ∈ {a,b}* | |w|a = |w|b }", impossible: true,                                  desc: "",                                                                 shortestWord: null,       regex: /^[ab]*$/, validate: w => [...w].filter(c=>c==='a').length === [...w].filter(c=>c==='b').length, alphabet: ['a', 'b'], acceptedWords: [],  rejectedWords: ["a","b","aab"],         hint: "Cuidado, essa é clássica! Garantir quantidade igual pode exigir muitos estados.",                                   successMsg: "Sobreviveu à máquina de estados complexa!",
    tutorials: {
      onStart: { type: 'theory', title: 'Linguagem IMPOSSÍVEL para AFD!', dialog: [
        'Esta linguagem é IMPOSSÍVEL para qualquer AFD — impossibilidade provada matematicamente!',
        'Para aceitar a^k b^k, o AFD precisaria lembrar k enquanto lê os "b"s. Mas k é ilimitado!',
        'Com apenas N estados fixos, palavras longas forçam repetição de estado (Pigeonhole). O Lema do Bombeamento conclui: a^(N+j)b^N seria aceita — mas ela não está em L. Contradição!',
        'Conclusão: AFDs não têm memória para comparar dois contadores sem ordem fixa. Isso é coisa de PDA (pilha).',
        'Tente construir mesmo assim. Sentir os limites do AFD é a melhor aula de teoria!',
      ] },
    },
    boardWords: ['λ', 'ab', 'aabb'],
    guidedLesson: [
      { text: '<b>|w|a = |w|b</b> — quantidades iguais de "a" e "b".<br/>Vamos ver por que um AFD não consegue resolver isso!',
        boardDoneUpTo: -1, stateUpdate: { nodes: [], transitions: [] } },
      { text: 'Foco em <b>λ</b>: palavra vazia — 0 "a"s e 0 "b"s. q0 inicial precisa ser final.',
        boardDoneUpTo: 0, stateUpdate: { nodes: [], transitions: [] } },
      { text: 'Solução: q0(ini,final). λ ✓. Próxima: "ab"!',
        boardDoneUpTo: 1, stateUpdate: {
          nodes: [{ id: 'q0', label: 'q0', x: 50, y: 50, isInitial: true, isFinal: true }],
          transitions: [] } },
      { text: 'Foco em <b>ab</b>: 1 "a" depois 1 "b" — precisamos de q1 para "lembrar" o a pendente.',
        boardDoneUpTo: 1, stateUpdate: {
          nodes: [{ id: 'q0', label: 'q0', x: 50, y: 50, isInitial: true, isFinal: true }],
          transitions: [] } },
      { text: 'Solução: q0→q1(a)→q0(b). "ab" ✓. Próxima: "aabb"!',
        boardDoneUpTo: 2, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 50, y: 60, isInitial: true, isFinal: true },
            { id: 'q1', label: 'q1', x: 50, y: 20, isInitial: false, isFinal: false },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q0', symbol: 'b' },
          ] } },
      { text: 'Foco em <b>aabb</b>: 2 "a"s seguidos — q1 lê 2° "a", mas q1→q0 era para "b"! Preciso de q2.',
        boardDoneUpTo: 2, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 50, y: 60, isInitial: true, isFinal: true },
            { id: 'q1', label: 'q1', x: 50, y: 20, isInitial: false, isFinal: false },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q0', symbol: 'b' },
          ] } },
      { text: 'Solução: q1→q2(a), q2→q1(b). "aabb" ✓. Mas agora... "aaabbb" precisaria de q3!',
        boardDoneUpTo: 3, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 50, y: 65, isInitial: true, isFinal: true },
            { id: 'q1', label: 'q1', x: 20, y: 35, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 80, y: 35, isInitial: false, isFinal: false },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q2', symbol: 'a' },
            { from: 'q2', to: 'q1', symbol: 'b' },
            { from: 'q1', to: 'q0', symbol: 'b' },
          ] } },
      { text: '<b>O Confronto:</b> "aaabbb" exigiria q3, "aaaabbbb" exigiria q4... <u>Infinitos estados</u> para infinitos "a"s pendentes. É o <b>Lema do Bombeamento</b> — AFD sem memória ilimitada não pode fazer isso!',
        boardDoneUpTo: 3, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 50, y: 65, isInitial: true, isFinal: true },
            { id: 'q1', label: 'q1', x: 20, y: 35, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 80, y: 35, isInitial: false, isFinal: false },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a' },
            { from: 'q1', to: 'q2', symbol: 'a' },
            { from: 'q2', to: 'q1', symbol: 'b' },
            { from: 'q1', to: 'q0', symbol: 'b' },
          ] } },
    ] },
  { id: 15, label: "L15", formula: "L = { w ∈ {a,b}* | |w|a + |w|b é par }",                            desc: "",                                                                 shortestWord: "",         regex: /^([ab]{2})*$/,                                              alphabet: ['a', 'b'],             acceptedWords: ["λ","aa","ab"],            rejectedWords: ["a","b","aab"],         hint: "Não importa a ordem, desde que o tamanho total da palavra seja par.",                                               successMsg: "Tamanho par garantido com sucesso.",
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
    guidedLesson: buildLessonL15() },
  { id: 16, label: "L16", formula: "L = { u a v b x c y | u,v,x,y ∈ {a,b,c}* }",                       desc: "",                                                                 shortestWord: "abc",      regex: /^[abc]*a[abc]*b[abc]*c[abc]*$/,                             alphabet: ['a', 'b', 'c'],        acceptedWords: ["abc","aabc","abbc"],       rejectedWords: ["λ","ab","bc"],         hint: "A palavra tem que ter pelo menos um 'a', um 'b' e um 'c', na ordem.",                                               successMsg: "Filtro de caracteres construído.",
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
    guidedLesson: buildLessonL16() },
  { id: 17, label: "L17", formula: "L = { w ∈ {a,b}* | começa com a e tem tamanho par }",               desc: "",                                                                 shortestWord: "aa",       regex: /^a[ab]([ab]{2})*$/,                                         alphabet: ['a', 'b'],             acceptedWords: ["aa","ab","abba"],          rejectedWords: ["a","b","aba"],         hint: "Forçar o início e depois manter a paridade.",                                                                       successMsg: "Paridade e prefixo resolvidos.",
    tutorials: {
      onStart: { type: 'theory', title: 'Dois Requisitos Simultâneos!', dialog: [
        'L17: a palavra deve começar com "a" E ter comprimento PAR.',
        '"aa", "ab", "abba" — válidas. "a" (ímpar), "ba" (não começa com a) — inválidas.',
        'O AFD verifica os dois ao mesmo tempo: o <u>prefixo</u> e a <u>paridade do comprimento</u>.',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Vai-e-Volta Após o Primeiro "a"', dialog: [
        '<b>q0</b>(inicial) só aceita "a" como primeiro símbolo. "b"? → armadilha <b>qT</b>.',
        'Após o "a": q0→<b>q1</b>(ímpar). Vai-e-volta <b>q1</b>↔<b>q2</b>(final) para cada símbolo.',
        '<b>q2</b> é final: comprimento ≥2, par, iniciou com "a". Cada símbolo inverte a paridade!',
      ] },
    },
    boardWords: ['aa', 'a', 'abba'],
    guidedLesson: buildLessonL17() },
  { id: 18, label: "L18", formula: "L = { w ∈ {a,b}* | w não contém 'aa' como subpalavra }",         desc: "",                                                                 shortestWord: "",         regex: /^(b|ab)*a?$/,                                         alphabet: ['a', 'b'],             acceptedWords: ["λ","a","b","ab","ba"],     rejectedWords: ["aa","aab","baa"],   hint: "Se dois 'a's aparecerem seguidos, o autômato trava. 'b' reinicia a contagem.",                                      successMsg: "Sem 'aa' consecutivos!",
    tutorials: {
      onStart: { type: 'theory', title: 'Proibido: dois \'a\'s seguidos!', dialog: [
        'A linguagem L18 aceita qualquer palavra que NÃO contenha "aa" como subpalavra.',
        '2 estados: q0 (nenhum "a" pendente, inicial e final) e q1 (um "a" pendente, final).',
        'Um segundo "a" em q1 não tem seta: dead-state implícito rejeita "aa", "aab", "baa"!',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Dois Estados, Dead-State Implícito', dialog: [
        '<b>q0</b>(ini, final): loop de "b". <b>q1</b>(final): "b" volta para q0.',
        'q0 —a→ q1: leu um "a". q1 —b→ q0: "b" reinicia. q1 sem seta para "a" = dead!',
        '"ab": q0→q1→q0 ✔ "ba": q0→q0→q1 ✔ "aa": q0→q1→<b>trava</b> ✗',
      ] },
    },
    boardWords: ['', 'ab', 'aa', 'aba'],
    guidedLesson: buildLessonL18() },
  { id: 19, label: "L19", formula: "L = { w ∈ {a,b}* | qtd(a) e qtd(b) são ambas ímpares }",           desc: "",                                                                 shortestWord: "ab",       validate: (w) => { let a=0,b=0; for(const c of w){if(c==='a')a++;else if(c==='b')b++;} return a%2===1&&b%2===1; },                                                                           alphabet: ['a', 'b'],             acceptedWords: ["ab","ba","aaab"],          rejectedWords: ["λ","aa","abab","b"],   hint: "Cada 'a' alterna a paridade do contador de a's; cada 'b' alterna o de b's. Aceite quando os dois forem ímpares.",  successMsg: "Paridade dupla dominada!",
    tutorials: {
      onStart: { type: 'theory', title: 'Paridade Dupla!', dialog: [
        'Aceitar quando a quantidade de "a"s E a de "b"s são ambas ímpares ao mesmo tempo.',
        'Quadrado 2×2: q0(par,par), q1(ímpar,par), q2(par,ímpar), q3(ímpar,ímpar). Só q3 aceita!',
        'Cada "a" lido troca a linha (cima↔baixo). Cada "b" lido troca a coluna (esq↔dir).',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Quadrado de Paridade Dupla', dialog: [
        'Topo: <b>q0</b>(ini)↔<b>q1</b> com "a". Base: <b>q2</b>↔<b>q3</b>(final) com "a".',
        'Esquerda: <b>q0</b>↔<b>q2</b> com "b". Direita: <b>q1</b>↔<b>q3</b> com "b".',
        'Zero diagonais — quadrado limpo! "ab": q0→q1(a)→q3(b) ✔ "ba": q0→q2(b)→q3(a) ✔',
      ] },
    },
    boardWords: ['ab', 'a', 'ba', 'abab', 'aaab'],
    guidedLesson: buildLessonL19() },
  { id: 20, label: "L20", formula: "L = { w ∈ {a,b}* | |w| ≥ 2 e a's precedem os b's }",              desc: "",                                                                 shortestWord: "aa",       regex: /^(aa+|a+b+|bb+)$/,                                          alphabet: ['a', 'b'],             acceptedWords: ["aa","ab","bb"],            rejectedWords: ["λ","a","ba"],          hint: "Depois que o primeiro 'b' for lido, um 'a' nunca mais poderá aparecer.",                                            successMsg: "Transição irreversível dominada.",
    tutorials: {
      onStart: { type: 'theory', title: 'Transição Irreversível a→b!', dialog: [
        'L20: comprimento ≥ 2, e todos os "a"s ANTES de todos os "b"s.',
        '"aa", "ab", "bb" — válidas. "ba", "bba" — inválidas (b veio antes do a).',
        'Regra: uma vez que o primeiro "b" é lido, a porta para "a" fecha para sempre!',
      ] },
      onDrawGraph: { type: 'mechanic', title: '5 Estados: Dois Caminhos', dialog: [
        'Topo: <b>q0</b>(ini)→<b>q1</b>(a)→<b>q2</b>(final, loop a). q1→<b>q3</b>(final,b).',
        'Base: <b>q0</b>→<b>q4</b>(b)→<b>q3</b>(final, loop b). q2→<b>q3</b>(b) também!',
        'q4 sem seta para "a": dead-state implícito rejeita "ba...". q3 sem seta para "a": rejeita "...ab".',
      ] },
    },
    boardWords: ['ab', 'a', 'aab', 'abb', 'ba', 'bb'],
    guidedLesson: buildLessonL20() },
];
