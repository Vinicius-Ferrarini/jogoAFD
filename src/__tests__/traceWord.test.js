import { describe, it, expect } from 'vitest';
import { traceWord } from '../modules/afd/utils/traceWord.js';

// ─── Grafo auxiliar mínimo ────────────────────────────────────────────────────
// q0 (inicial) --a--> q1 (final)
// q0 --b--> q0
const NODES = [
  { id: 'q0', isInitial: true,  isFinal: false },
  { id: 'q1', isInitial: false, isFinal: true  },
];
const TRANSITIONS = [
  { from: 'q0', to: 'q1', symbol: 'a' },
  { from: 'q0', to: 'q0', symbol: 'b' },
];

// ─── Suite 1: casos básicos ───────────────────────────────────────────────────
describe('traceWord — casos básicos', () => {

  it('palavra aceita → último frame type "done"', () => {
    const frames = traceWord(NODES, TRANSITIONS, 'a');
    expect(frames.at(-1).type).toBe('done');
  });

  it('palavra aceita → último frame aponta para o estado final', () => {
    const frames = traceWord(NODES, TRANSITIONS, 'a');
    expect(frames.at(-1).nodeId).toBe('q1');
  });

  it('palavra rejeitada (termina em não-final) → último frame type "error"', () => {
    const frames = traceWord(NODES, TRANSITIONS, 'b');
    expect(frames.at(-1).type).toBe('error');
  });

  it('palavra rejeitada (termina em não-final) → nodeId correto', () => {
    const frames = traceWord(NODES, TRANSITIONS, 'b');
    expect(frames.at(-1).nodeId).toBe('q0');
  });

  it('palavra rejeitada (transição inexistente) → frame "error" na letra travada', () => {
    // 'c' não existe no alfabeto — trava em q0
    const frames = traceWord(NODES, TRANSITIONS, 'c');
    expect(frames.at(-1).type).toBe('error');
    expect(frames.at(-1).letter).toBe(0);
    expect(frames.at(-1).nodeId).toBe('q0');
  });

  it('palavra vazia → 1 frame com estado inicial, type "error" (q0 não é final)', () => {
    const frames = traceWord(NODES, TRANSITIONS, '');
    expect(frames).toHaveLength(1);
    expect(frames[0].nodeId).toBe('q0');
    expect(frames[0].type).toBe('error');
  });

  it('grafo sem estado inicial → retorna []', () => {
    const nodesNoInitial = NODES.map(n => ({ ...n, isInitial: false }));
    expect(traceWord(nodesNoInitial, TRANSITIONS, 'a')).toEqual([]);
  });

  it('nodes nulo → retorna []', () => {
    expect(traceWord(null, TRANSITIONS, 'a')).toEqual([]);
  });

  it('primeiro frame sempre é o estado inicial com letter -1 e tIdx/symbol null', () => {
    const frames = traceWord(NODES, TRANSITIONS, 'ba');
    expect(frames[0]).toEqual({ nodeId: 'q0', type: 'ok', letter: -1, tIdx: null, symbol: null });
  });

  it('frames após o inicial carregam tIdx/symbol da transição percorrida', () => {
    const frames = traceWord(NODES, TRANSITIONS, 'ba');
    // 'b': q0--b-->q0 é TRANSITIONS[1]
    expect(frames[1].tIdx).toBe(1);
    expect(frames[1].symbol).toBe('b');
    // 'a': q0--a-->q1 é TRANSITIONS[0]
    expect(frames[2].tIdx).toBe(0);
    expect(frames[2].symbol).toBe('a');
  });

  it('frame de erro por transição inexistente tem tIdx/symbol null', () => {
    const frames = traceWord(NODES, TRANSITIONS, 'c');
    expect(frames.at(-1).tIdx).toBeNull();
    expect(frames.at(-1).symbol).toBeNull();
  });

  it('número total de frames = comprimento da palavra + 1', () => {
    const word = 'ba';
    const frames = traceWord(NODES, TRANSITIONS, word);
    expect(frames).toHaveLength(word.length + 1);
  });

});

// ─── Suite 2: símbolo múltiplo "a,b" ─────────────────────────────────────────
describe('traceWord — transição com símbolo múltiplo', () => {

  // q0 (inicial) --a,b--> q1 (final)
  const NODES_MULTI = [
    { id: 'q0', isInitial: true,  isFinal: false },
    { id: 'q1', isInitial: false, isFinal: true  },
  ];
  const TRANS_MULTI = [
    { from: 'q0', to: 'q1', symbol: 'a,b' },
  ];

  it('"a" é reconhecido pela transição "a,b"', () => {
    const frames = traceWord(NODES_MULTI, TRANS_MULTI, 'a');
    expect(frames.at(-1).type).toBe('done');
  });

  it('"b" é reconhecido pela transição "a,b"', () => {
    const frames = traceWord(NODES_MULTI, TRANS_MULTI, 'b');
    expect(frames.at(-1).type).toBe('done');
  });

  it('"c" não é reconhecido pela transição "a,b" → error', () => {
    const frames = traceWord(NODES_MULTI, TRANS_MULTI, 'c');
    expect(frames.at(-1).type).toBe('error');
  });

  it('símbolo com espaços " a , b " → ambos reconhecidos', () => {
    const transWithSpaces = [{ from: 'q0', to: 'q1', symbol: ' a , b ' }];
    expect(traceWord(NODES_MULTI, transWithSpaces, 'a').at(-1).type).toBe('done');
    expect(traceWord(NODES_MULTI, transWithSpaces, 'b').at(-1).type).toBe('done');
  });

});

// ─── Suite 3: palavra vazia com grafo que aceita λ ───────────────────────────
describe('traceWord — palavra vazia aceita', () => {

  // q0 é inicial E final
  const NODES_LAMBDA = [
    { id: 'q0', isInitial: true, isFinal: true },
  ];
  const TRANS_LAMBDA = [];

  it('palavra vazia em grafo onde q0 é final → type "done"', () => {
    const frames = traceWord(NODES_LAMBDA, TRANS_LAMBDA, '');
    expect(frames).toHaveLength(1);
    expect(frames[0].type).toBe('done');
  });

});

// ─── Suite 4: caminho com múltiplos passos ────────────────────────────────────
describe('traceWord — caminho com múltiplos passos', () => {

  // q0 (inicial) --a--> q1 --b--> q2 (final)
  const NODES3 = [
    { id: 'q0', isInitial: true,  isFinal: false },
    { id: 'q1', isInitial: false, isFinal: false },
    { id: 'q2', isInitial: false, isFinal: true  },
  ];
  const TRANS3 = [
    { from: 'q0', to: 'q1', symbol: 'a' },
    { from: 'q1', to: 'q2', symbol: 'b' },
  ];

  it('"ab" → aceita, 3 frames', () => {
    const frames = traceWord(NODES3, TRANS3, 'ab');
    expect(frames).toHaveLength(3);
    expect(frames.at(-1).type).toBe('done');
  });

  it('"a" sozinho → rejeita em q1 (não-final), letter 0', () => {
    const frames = traceWord(NODES3, TRANS3, 'a');
    expect(frames.at(-1).type).toBe('error');
    expect(frames.at(-1).nodeId).toBe('q1');
  });

  it('"ac" → trava na letra 1 (c não existe em q1)', () => {
    const frames = traceWord(NODES3, TRANS3, 'ac');
    expect(frames.at(-1).type).toBe('error');
    expect(frames.at(-1).letter).toBe(1);
  });

  it('frames intermediários têm type "ok"', () => {
    const frames = traceWord(NODES3, TRANS3, 'ab');
    expect(frames[0].type).toBe('ok');
    expect(frames[1].type).toBe('ok');
  });

});
