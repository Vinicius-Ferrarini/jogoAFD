// ─── buildApLesson: gera a Aula Guiada do AP a partir do gabarito .jff ────────
// Conteúdo HÍBRIDO: tudo é auto-derivado do gabarito (cobertura dos 15), e cada
// nível pode sobrescrever com narração à mão via META.apLesson (flagship).
// Estrutura da aula: FASE 1 (constrói o grafo passo a passo) → FASE 2 (descrição
// formal baseada no grafo pronto). Ver PLAN_MODO_AULA_AP.md.
import { pdaAccepts, validateStudentPda } from './pdaAlgorithms.js';

const cap = (s) => (s ? s.charAt(0).toUpperCase() + s.slice(1) : s);

// Coordenadas do JFLAP (px) → pixels absolutos no canvas fixo INNER_W×INNER_H
// (mesmo motor do AFD — ver useCanvasState.js), PRESERVANDO A PROPORÇÃO (mesma
// escala em x e y). Escalar cada eixo isoladamente exageraria diferenças
// mínimas — ex.: no L1 q0/q1 diferem 5px em y e a seta sairia diagonal.
import { INNER_W, INNER_H } from '../../afd/hooks/useCanvasState.js';

function layout(states) {
  const xs = states.map((s) => s.x), ys = states.map((s) => s.y);
  const minX = Math.min(...xs), maxX = Math.max(...xs);
  const minY = Math.min(...ys), maxY = Math.max(...ys);
  const spanX = maxX - minX, spanY = maxY - minY;
  const PADX = INNER_W * 0.14, PADY = INNER_H * 0.20;
  const usableW = INNER_W - 2 * PADX, usableH = INNER_H - 2 * PADY;
  const kx = spanX > 0 ? usableW / spanX : Infinity;
  const ky = spanY > 0 ? usableH / spanY : Infinity;
  let k = Math.min(kx, ky);
  if (!Number.isFinite(k)) k = 1; // 1 estado (ou todos no mesmo ponto)
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

  let prevAcc = boardWords.map(() => false);
  T.forEach((t, i) => {
    const pda = pdaFrom(sol, T.slice(0, i + 1));
    const { acc, status } = statusFor(pda, prevAcc);
    prevAcc = acc;
    const d = describe(t, states);
    steps.push({
      phase: 'GRAPH',
      stateUpdate: { nodes: fullNodes, transitions: T.slice(0, i + 1) },
      boardStatus: status,
      highlightEdge: { from: t.from, to: t.to },
      prof: { message: `Transição ${i + 1}: ${d.reading}, ${d.act} (${d.move}).`, mood: 'explicando' },
    });
  });

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
