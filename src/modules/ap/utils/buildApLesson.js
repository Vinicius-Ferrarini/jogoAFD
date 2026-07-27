// ─── buildApLesson: gera a Aula Guiada do AP a partir do gabarito .jff ────────
// Conteúdo HÍBRIDO: tudo é auto-derivado do gabarito (cobertura dos 15), e cada
// nível pode sobrescrever com narração à mão via META.apLesson (flagship).
// Estrutura da aula: FASE 1 (constrói o grafo passo a passo) → FASE 2 (descrição
// formal baseada no grafo pronto). Ver PLAN_MODO_AULA_AP.md.
import { pdaAccepts, pdaAcceptingRun, validateStudentPda } from './pdaAlgorithms.js';

const cap = (s) => (s ? s.charAt(0).toUpperCase() + s.slice(1) : s);

// Coordenadas do JFLAP (px) → pixels absolutos no canvas fixo INNER_W×INNER_H
// (mesmo motor do AFD — ver useCanvasState.js), PRESERVANDO A PROPORÇÃO (mesma
// escala em x e y). Escalar cada eixo isoladamente exageraria diferenças
// mínimas — ex.: no L1 q0/q1 diferem 5px em y e a seta sairia diagonal.
import { INNER_W, INNER_H } from '../../afd/hooks/useCanvasState.js';

// Escala fixa (JFLAP px → canvas px): mapeia a faixa típica de coordenadas do
// editor JFLAP (dezenas a poucas centenas de px) para uma distância confortável
// entre nós no canvas — sem isso, um grafo de 2 estados com pouca diferença
// num eixo (ex.: L1: spanX=289, spanY=5) seria esticado até preencher quase
// todo o canvas de 8000px só pra "preservar proporção", forçando o zoom
// automático lá embaixo pra caber tudo de novo no viewport.
// Valor calibrado p/ os estados ficarem tão juntos quanto os layouts do AFD
// (hand-tuned em lessonBuilder.js, spanX tipicamente 800-1000px no mesmo
// canvas de 8000px) — com FIXED_SCALE=5 um grafo de 2-3 estados (spanX
// 289-458 no .jff) virava spanX 1445-2290px, largo demais p/ caber a 100%
// de zoom na maioria das telas (forçava algo como 82-94%).
const FIXED_SCALE = 1.8;
function layout(states) {
  const xs = states.map((s) => s.x), ys = states.map((s) => s.y);
  const minX = Math.min(...xs), maxX = Math.max(...xs);
  const minY = Math.min(...ys), maxY = Math.max(...ys);
  const spanX = maxX - minX, spanY = maxY - minY;
  const PADX = INNER_W * 0.14, PADY = INNER_H * 0.20;
  const usableW = INNER_W - 2 * PADX, usableH = INNER_H - 2 * PADY;
  const kx = spanX > 0 ? usableW / spanX : Infinity;
  const ky = spanY > 0 ? usableH / spanY : Infinity;
  // Nunca estica além da escala fixa — só encolhe (kx/ky) se o grafo for grande
  // demais pra caber no canvas nessa escala.
  let k = Math.min(FIXED_SCALE, kx, ky);
  if (!Number.isFinite(k)) k = FIXED_SCALE; // 1 estado (ou todos no mesmo ponto)
  const offX = (INNER_W - spanX * k) / 2, offY = (INNER_H - spanY * k) / 2;
  // Estado único: posiciona mais abaixo para os chips do self-loop crescerem para
  // cima sem serem cortados pela borda superior do canvas.
  const singleState = states.length === 1;
  return states.map((s) => ({
    uid: s.id, id: s.id, label: s.name,
    x: spanX > 0 ? offX + (s.x - minX) * k : INNER_W / 2,
    y: spanY > 0 ? offY + (s.y - minY) * k : (singleState ? INNER_H * 0.82 : INNER_H / 2),
    isInitial: !!s.initial,
  }));
}

const labelOf = (states, id) => states.find((s) => s.id === id)?.name ?? id;

// Frase amigável descrevendo o efeito de uma transição na pilha.
function describe(t, states) {
  const from = labelOf(states, t.from), to = labelOf(states, t.to);
  const reading = t.read === '' ? 'sem ler nada (λ)' : `lendo "${t.read}"`;
  let act;
  if (t.pop !== '' && t.push === '') act = `desempilha ${t.pop}`;
  else if (t.pop === '' && t.push !== '') act = `empilha ${t.push}`;
  else if (t.pop !== '' && t.push !== '') {
    act = t.push[t.push.length - 1] === t.pop
      ? `empilha ${t.push.slice(0, -1) || t.push} sobre ${t.pop}`
      : `troca ${t.pop} por ${t.push}`;
  } else act = 'não mexe na pilha';
  const move = from === to ? `laço em ${from}` : `${from} → ${to}`;
  return { from, to, reading, act, move };
}

// Monta um modelo de AP a partir do gabarito com um subconjunto de transições.
function pdaFrom(sol, transitions) {
  return {
    states: sol.states.map((s) => ({ id: s.id, name: s.name, initial: s.initial })),
    transitions,
    initial: sol.initial,
    stackBottom: 'Z',
  };
}

// Poda transições do gabarito p/ a aula casar com o ENUNCIADO (truth) quando o
// .jff diverge. Ex.: L1 (aⁿbⁿ, n>0) tem "λ,Z;λ" que esvazia a pilha sem ler nada
// e faz aceitar a palavra vazia — proibido. Só remove uma transição se, SEM ela,
// o AP ainda passa 100% na bateria do enunciado (truth já aplicado em `battery`).
// Não consegue ADICIONAR transição: nos níveis cujo gabarito não demonstra λ
// (L7/9/10/11), nada é removido e a aula segue com o gabarito (λ via dica textual).
function pruneToEnunciado(sol, battery) {
  if (validateStudentPda(pdaFrom(sol, sol.transitions), battery).ok) return sol.transitions;
  let keep = sol.transitions.slice();
  for (const t of sol.transitions) {
    const candidate = keep.filter((x) => x !== t);
    if (candidate.length === keep.length) continue;
    if (validateStudentPda(pdaFrom(sol, candidate), battery).ok) keep = candidate;
  }
  return keep;
}

// Reordena T (mantendo o CONJUNTO intacto — só muda a ordem de exibição da
// FASE 1) para seguir a lógica real de construção do aluno: primeiro as
// transições que fazem a MENOR palavra-alvo funcionar, depois só as que faltam
// para a 2ª menor, etc. — em vez da ordem arbitrária em que saíram do .jff.
// Dentro de cada "leva" nova, ordena pela ordem cronológica em que a transição
// é de fato usada ao rodar a palavra (1º uso primeiro), não por índice no
// gabarito — senão "desempilha no b" apareceria antes de "empilha no a".
// Busca por combinação (força bruta) — só seguro p/ poucas transições restantes
// por palavra; win.length é pequeno nos níveis onde isso está habilitado.
const MAX_COMBO_SIZE = 8;
function smallestAddition(includedPda, notIncluded, word) {
  for (let size = 1; size <= Math.min(MAX_COMBO_SIZE, notIncluded.length); size++) {
    const combos = combinations(notIncluded, size);
    for (const combo of combos) {
      const candidate = { ...includedPda, transitions: [...includedPda.transitions, ...combo.map((x) => x.t)] };
      if (pdaAccepts(candidate, word)) return combo;
    }
  }
  return null;
}
function* combinations(arr, k) {
  if (k === 0) { yield []; return; }
  for (let i = 0; i <= arr.length - k; i++) {
    for (const rest of combinations(arr.slice(i + 1), k - 1)) yield [arr[i], ...rest];
  }
}
// Retorna { order: T reordenado (mesmo conjunto, nova ordem de exibição),
// groups: [{ word, transitions }] — cada grupo é a "leva" de transições novas
// que fez aquela palavra-alvo passar a ser aceita (na ordem de introdução).
// Sobras (transições não atreladas a nenhuma boardWord) viram groups[].word = null.
function orderByTargetWord(sol, T, boardWords) {
  let included = [];
  let remaining = T.map((t, i) => ({ t, i }));
  const order = [];
  const groups = [];
  const pdaOf = (transitions) => ({ states: sol.states, transitions, initial: sol.initial, stackBottom: 'Z' });

  for (const w of boardWords) {
    if (pdaAccepts(pdaOf(included), w)) continue; // já funciona com o que já foi incluído
    const add = smallestAddition(pdaOf(included), remaining, w);
    if (!add) continue; // não deveria acontecer (T já garante 100% da bateria) — mantém o resto na ordem original no fim

    // Dentro dessa leva nova, ordena pela 1ª vez que cada transição é usada na
    // computação real da palavra (não pelo índice no gabarito).
    const fullSet = [...included, ...add.map((x) => x.t)];
    const run = pdaAcceptingRun(pdaOf(fullSet), w) ?? [];
    const seen = new Set();
    const chronological = [];
    for (const step of run) {
      const entry = add.find((x) => x.t === fullSet[step.tIdx]);
      if (entry && !seen.has(entry.i)) { seen.add(entry.i); chronological.push(entry); }
    }
    for (const entry of add) if (!seen.has(entry.i)) chronological.push(entry);

    for (const { t, i } of chronological) { included.push(t); order.push(i); }
    groups.push({ word: w, transitions: chronological.map((e) => e.t) });
    remaining = remaining.filter((x) => !add.includes(x));
  }
  if (remaining.length) {
    for (const { t, i } of remaining) { included.push(t); order.push(i); }
    // Sobras (não são "a peça que falta" p/ nenhuma boardWord sozinhas — em
    // geral não-determinismo redundante do gabarito cobrindo casos que a
    // lista curta de palavras não exercita, ex.: L17). Anexa ao ÚLTIMO grupo
    // de palavra já criado (sem intro própria) em vez de virar um grupo
    // isolado — mantém tudo dentro da lógica "por palavra". Só cai no grupo
    // isolado (word: null) se nenhuma palavra gerou grupo algum (não deveria
    // acontecer em nenhum nível real, mas evita perder transições).
    const lastWordGroup = [...groups].reverse().find((g) => g.word != null);
    if (lastWordGroup) lastWordGroup.transitions.push(...remaining.map((e) => e.t));
    else groups.push({ word: null, transitions: remaining.map((e) => e.t) });
  }
  return { order: order.map((i) => T[i]), groups };
}

// Frase de contexto ANTES de entrar as transições de uma palavra-alvo — conta
// o "porquê" separado do "o quê" (que vem no(s) passo(s) seguinte(s) já com o
// grafo mudando). λ ganha uma explicação própria (não é "a próxima palavra",
// é a palavra vazia — merece dizer por que ela exige zerar a pilha sem ler).
function introMessage(word, boardWords) {
  if (word === '') {
    return 'Como a linguagem aceita a palavra vazia (λ), precisa de uma transição de λ que tire o fundo da pilha sem ler nada.';
  }
  const isFirst = boardWords.indexOf(word) === (boardWords.includes('') ? 1 : 0);
  const show = `"${word}"`;
  return isFirst
    ? `Agora vamos para a palavra ${show}.`
    : `Próxima palavra: ${show}. Só falta adicionar o que ainda não existe no grafo.`;
}

export function buildApLesson(level, battery) {
  const sol = level.solution;
  const states = sol.states;
  const T = pruneToEnunciado(sol, battery); // grafo da aula = casado com o enunciado
  const fullNodes = layout(states);
  const initLabel = labelOf(states, sol.initial);

  // Palavras-alvo do quadro: aceitas pelo enunciado QUE o grafo da aula realmente
  // demonstra (após a poda), mais curtas, até 6. Evita listar λ num nível cujo
  // gabarito não a aceita (L7/9/10/11) — senão a palavra nunca acenderia.
  const lessonPda = pdaFrom(sol, T);
  const boardWords = (battery?.accepted ?? [])
    .filter((w) => pdaAccepts(lessonPda, w)).slice(0, 6);
  const statusFor = (pda, prevAcc) => {
    const acc = boardWords.map((w) => pdaAccepts(pda, w));
    const status = boardWords.map((w, i) =>
      acc[i] ? (prevAcc[i] ? 'done' : 'current') : 'pending');
    return { acc, status };
  };

  const steps = [];

  // ── FASE 1: construir o grafo ──────────────────────────────────────────────
  steps.push({
    phase: 'GRAPH', stateUpdate: { nodes: [], transitions: [] },
    boardStatus: boardWords.map(() => 'pending'),
    prof: { message: `Vamos montar o AP de ${level.language}, aceitando por PILHA VAZIA. No quadro, as palavras-alvo.`, mood: 'explicando' },
  });

  steps.push({
    phase: 'GRAPH', stateUpdate: { nodes: fullNodes, transitions: [] },
    boardStatus: boardWords.map(() => 'pending'),
    prof: { message: `Comece pelos estados. ${initLabel} é o inicial (▶). Sem estado final — basta esvaziar a pilha.`, mood: 'explicando' },
  });

  // Ordem de exibição segue a lógica "menor palavra primeiro" (ver
  // orderByTargetWord) em vez da ordem arbitrária do .jff — só o DESENHO muda;
  // o conjunto T e os índices δ da FASE 2 continuam intocados. Cada grupo de
  // transições ganha um passo de CONTEXTO antes ("vamos para a palavra X")
  // sem mexer no grafo — o aluno lê o porquê primeiro, sem ver o grafo mudar
  // ao mesmo tempo (2 coisas simultâneas = confuso), só depois entra a(s)
  // transição(ões) daquela palavra.
  let prevAcc = boardWords.map(() => false);
  const { groups } = orderByTargetWord(sol, T, boardWords);
  let acc = [];
  for (const { word, transitions } of groups) {
    if (word != null) {
      const { status } = statusFor(pdaFrom(sol, acc), prevAcc);
      steps.push({
        phase: 'GRAPH', stateUpdate: { nodes: fullNodes, transitions: acc.slice() },
        boardStatus: status,
        prof: { message: introMessage(word, boardWords), mood: 'explicando' },
      });
    }
    for (const t of transitions) {
      acc = [...acc, t];
      const { acc: accFlags, status } = statusFor(pdaFrom(sol, acc), prevAcc);
      prevAcc = accFlags;
      const d = describe(t, states);
      steps.push({
        phase: 'GRAPH',
        stateUpdate: { nodes: fullNodes, transitions: acc.slice() },
        boardStatus: status,
        highlightEdge: { from: t.from, to: t.to },
        highlightTIdx: acc.length - 1,
        prof: { message: `${cap(d.reading)}, ${d.act} (${d.move}).`, mood: 'explicando' },
      });
    }
  }

  steps.push({
    phase: 'GRAPH', stateUpdate: { nodes: fullNodes, transitions: T },
    boardStatus: boardWords.map(() => 'done'),
    graphEnd: true,
    prof: { message: `Grafo pronto! Reconhece ${level.language} por pilha vazia. E agora? Escolha abaixo 👇`, mood: 'feliz' },
  });

  // ── FASE 2: descrição formal (grafo final fixo) ────────────────────────────
  const E = `{ ${states.map((s) => s.name).join(', ')} }`;
  const Sigma = `{ ${level.alphabet.join(', ')} }`;
  const Gamma = `{ ${level.stackAlphabet.join(', ')} }`;
  const finalUpdate = { nodes: fullNodes, transitions: T };

  steps.push({
    phase: 'FORMAL', stateUpdate: finalUpdate,
    formalReveal: { kind: 'tuple', fields: { E } },
    prof: { message: `Descrição formal. Os estados do grafo formam E = ${E}.`, mood: 'explicando' },
  });
  steps.push({
    phase: 'FORMAL', stateUpdate: finalUpdate,
    formalReveal: { kind: 'tuple', fields: { Sigma, Gamma } },
    prof: { message: `Σ = símbolos lidos = ${Sigma}. Γ = símbolos da pilha = ${Gamma} (com o fundo Z).`, mood: 'explicando' },
  });
  steps.push({
    phase: 'FORMAL', stateUpdate: finalUpdate,
    formalReveal: { kind: 'tuple', fields: { initial: initLabel, bottom: 'Z' } },
    prof: { message: `Estado inicial i = ${initLabel}. Fundo da pilha B = Z. Sem F: aceita por pilha vazia.`, mood: 'explicando' },
  });

  T.forEach((t, i) => {
    const d = describe(t, states);
    steps.push({
      phase: 'FORMAL', stateUpdate: finalUpdate,
      formalReveal: { kind: 'delta', rowKey: String(i) },
      highlightEdge: { from: t.from, to: t.to },
      prof: { message: `δ ${i + 1}: T(${d.from}, ${t.read || 'λ'}, ${t.pop || 'λ'}) = (${d.to}, ${t.push || 'λ'}). ${cap(d.act)}.`, mood: 'explicando' },
    });
  });

  steps.push({
    phase: 'FORMAL', stateUpdate: finalUpdate,
    formalReveal: { kind: 'tuple', fields: {} },
    prof: { message: `Pronto: M = (E, Σ, Γ, δ, ${initLabel}, Z). Aula encerrada — agora é com você! 👏`, mood: 'feliz' },
  });

  return { boardWords, steps };
}
