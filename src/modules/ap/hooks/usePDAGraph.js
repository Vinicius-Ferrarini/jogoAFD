// ─── usePDAGraph: estado + lógica do grafo do AP (com Undo/Redo) ─────────────
// Transição = { from, to, read, pop, push } (qualquer campo λ), não-determinístico,
// aceitação por PILHA VAZIA. O estado (nós/transições) vive num reducer com
// past/present/future para dar Undo/Redo. Validação por bateria do gabarito.
import { useCallback, useMemo, useReducer } from 'react';
import { getBattery } from '../levels_ap';
import { validateStudentPda, pdaAcceptingRun } from '../utils/pdaAlgorithms';

let _uid = 0;
const genUid = () => `_ap${++_uid}_${Math.random().toString(36).slice(2, 6)}`;

const EMPTY = { nodes: [], transitions: [] };
const initial = { past: [], present: EMPTY, future: [] };

// COMMIT = muda com histórico; SET = muda sem histórico (arraste/rascunho);
// SNAPSHOT = marca um ponto de histórico no estado atual (início do arraste).
function reducer(state, action) {
  const { past, present, future } = state;
  switch (action.type) {
    case 'COMMIT':   return { past: [...past, present], present: action.next, future: [] };
    case 'SET':      return { ...state, present: action.next };
    case 'SNAPSHOT': return { past: [...past, present], present, future: [] };
    case 'UNDO': {
      if (!past.length) return state;
      return { past: past.slice(0, -1), present: past[past.length - 1], future: [present, ...future] };
    }
    case 'REDO': {
      if (!future.length) return state;
      return { past: [...past, present], present: future[0], future: future.slice(1) };
    }
    case 'RESET':    return { past: [], present: action.next ?? EMPTY, future: [] };
    default:         return state;
  }
}

export default function usePDAGraph() {
  const [hist, dispatch] = useReducer(reducer, initial);
  const { nodes, transitions } = hist.present;
  const canUndo = hist.past.length > 0;
  const canRedo = hist.future.length > 0;

  const reset    = useCallback(() => { _uid = 0; dispatch({ type: 'RESET', next: EMPTY }); }, []);
  const undo     = useCallback(() => dispatch({ type: 'UNDO' }), []);
  const redo     = useCallback(() => dispatch({ type: 'REDO' }), []);
  const beginDrag = useCallback(() => dispatch({ type: 'SNAPSHOT' }), []); // 1 entrada por arraste

  // ── Estados (nós) ───────────────────────────────────────────────────────────
  const addNode = useCallback((x, y) => {
    let n = nodes.length;
    const used = new Set(nodes.map(p => p.label));
    while (used.has(`q${n}`)) n++;
    const label = `q${n}`;
    const node = { uid: genUid(), id: label, label, x, y, isInitial: nodes.length === 0 };
    dispatch({ type: 'COMMIT', next: { nodes: [...nodes, node], transitions } });
  }, [nodes, transitions]);

  // arraste: muda sem histórico (o beginDrag já registrou o ponto inicial)
  const moveNode = useCallback((uid, x, y) => {
    dispatch({ type: 'SET', next: { nodes: nodes.map(n => n.uid === uid ? { ...n, x, y } : n), transitions } });
  }, [nodes, transitions]);

  const toggleInitial = useCallback((uid) => {
    dispatch({ type: 'COMMIT', next: { nodes: nodes.map(n => ({ ...n, isInitial: n.uid === uid })), transitions } });
  }, [nodes, transitions]);

  // rascunho do rótulo enquanto digita (sem histórico, sem commitar id/arestas)
  const setNodeLabel = useCallback((uid, value) => {
    dispatch({ type: 'SET', next: { nodes: nodes.map(n => n.uid === uid ? { ...n, label: value } : n), transitions } });
  }, [nodes, transitions]);

  const renameNode = useCallback((uid, raw) => {
    const me = nodes.find(n => n.uid === uid);
    if (!me) return;
    const oldId = me.id;
    const trimmed = (raw || '').trim();
    if (!trimmed || nodes.some(n => n.uid !== uid && n.id === trimmed)) {
      dispatch({ type: 'SET', next: { nodes: nodes.map(n => n.uid === uid ? { ...n, label: oldId, id: oldId } : n), transitions } });
      return;
    }
    const nextNodes = nodes.map(n => n.uid === uid ? { ...n, label: trimmed, id: trimmed } : n);
    const nextTrans = transitions.map(t => ({
      ...t,
      from: t.from === oldId ? trimmed : t.from,
      to:   t.to   === oldId ? trimmed : t.to,
    }));
    dispatch({ type: 'COMMIT', next: { nodes: nextNodes, transitions: nextTrans } });
  }, [nodes, transitions]);

  const deleteNode = useCallback((uid) => {
    const target = nodes.find(n => n.uid === uid);
    const nextNodes = nodes.filter(n => n.uid !== uid);
    const nextTrans = target ? transitions.filter(t => t.from !== target.id && t.to !== target.id) : transitions;
    dispatch({ type: 'COMMIT', next: { nodes: nextNodes, transitions: nextTrans } });
  }, [nodes, transitions]);

  // ── Transições (triplas read,pop;push) ──────────────────────────────────────
  const addTriple = useCallback((from, to, triple = { read: '', pop: '', push: '' }) => {
    const exists = transitions.some(t =>
      t.from === from && t.to === to && t.read === triple.read && t.pop === triple.pop && t.push === triple.push);
    if (exists) return;
    dispatch({ type: 'COMMIT', next: { nodes, transitions: [...transitions, { from, to, ...triple }] } });
  }, [nodes, transitions]);

  const editTriple = useCallback((tIdx, triple) => {
    dispatch({ type: 'COMMIT', next: { nodes, transitions: transitions.map((t, i) => i === tIdx ? { ...t, ...triple } : t) } });
  }, [nodes, transitions]);

  const removeTriple = useCallback((tIdx) => {
    dispatch({ type: 'COMMIT', next: { nodes, transitions: transitions.filter((_, i) => i !== tIdx) } });
  }, [nodes, transitions]);

  const removeEdge = useCallback((from, to) => {
    dispatch({ type: 'COMMIT', next: { nodes, transitions: transitions.filter(t => !(t.from === from && t.to === to)) } });
  }, [nodes, transitions]);

  // ── Modelo do AP do aluno (p/ o simulador) ──────────────────────────────────
  const studentPda = useMemo(() => ({
    states: nodes.map(n => ({ id: n.id, name: n.label, x: n.x, y: n.y, initial: n.isInitial })),
    transitions,
    initial: nodes.find(n => n.isInitial)?.id ?? null,
    stackBottom: 'Z',
  }), [nodes, transitions]);

  // ── Validação por bateria (com contraexemplo + run p/ animar) ───────────────
  const validatePDA = useCallback((level) => {
    const pda = studentPda;
    if (!pda.initial)
      return { ok: false, reason: 'no-initial', message: 'Defina um estado inicial (▶) antes de validar.' };
    if (pda.transitions.length === 0)
      return { ok: false, reason: 'empty', message: 'Desenhe ao menos uma transição.' };

    const battery = getBattery(level);
    const res = validateStudentPda(pda, battery);
    if (res.ok)
      return { ok: true, message: 'Perfeito! Seu AP reconhece a linguagem. 🎉', battery };

    const { word, expected } = res.counterexample;
    const run = expected ? pdaAcceptingRun(level.solution, word) : pdaAcceptingRun(pda, word);
    const show = word === '' ? 'λ' : word;
    let message;
    if (expected) {
      message = run
        ? `Seu AP REJEITA "${show}", mas ela deveria ser ACEITA. Veja como o gabarito aceita:`
        : (word === ''
            ? 'Seu AP REJEITA λ, mas ela deveria ser ACEITA. Dica: adicione a transição "λ, Z ; λ" no estado inicial para esvaziar a pilha sem ler nada.'
            : `Seu AP REJEITA "${show}", mas ela deveria ser ACEITA.`);
    } else {
      message = `Seu AP ACEITA "${show}", mas ela deveria ser REJEITADA. Veja o caminho indevido:`;
    }
    return { ok: false, reason: 'counterexample', counterexample: res.counterexample, run, runSource: expected ? 'gabarito' : 'aluno', message };
  }, [studentPda]);

  return {
    nodes, transitions, studentPda, canUndo, canRedo,
    reset, undo, redo, beginDrag,
    addNode, moveNode, toggleInitial, setNodeLabel, renameNode, deleteNode,
    addTriple, editTriple, removeTriple, removeEdge,
    validatePDA,
  };
}
