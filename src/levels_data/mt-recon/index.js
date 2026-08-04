import MT_RECON_L1  from './L1.js';
import MT_RECON_L2  from './L2.js';
import MT_RECON_L3  from './L3.js';
import MT_RECON_L4  from './L4.js';
import MT_RECON_L5  from './L5.js';
import MT_RECON_L6  from './L6.js';
import MT_RECON_L7  from './L7.js';
import MT_RECON_L8  from './L8.js';
import MT_RECON_L9  from './L9.js';
import MT_RECON_L10 from './L10.js';
import MT_RECON_L11 from './L11.js';
import MT_RECON_L12 from './L12.js';
import MT_RECON_L13 from './L13.js';
import MT_RECON_L14 from './L14.js';
import MT_RECON_L15 from './L15.js';
import MT_RECON_L16 from './L16.js';
import MT_RECON_L17 from './L17.js';
import { simulateTM } from '../../modules/mt/utils/tmAlgorithms.js';

// Rótulo exibido com zero à esquerda (L01…L17), igual ao AFD e ao AP —
// derivado do id (MT_RECON_L{n}) em vez do label hardcoded de cada arquivo.
function withPaddedLabel(level) {
  const num = level.id.match(/(\d+)$/)?.[0];
  return num ? { ...level, label: 'L' + num.padStart(2, '0') } : level;
}

export const MT_RECON_LEVELS = [
  MT_RECON_L1,
  MT_RECON_L2,
  MT_RECON_L3,
  MT_RECON_L4,
  MT_RECON_L5,
  MT_RECON_L6,
  MT_RECON_L7,
  MT_RECON_L8,
  MT_RECON_L9,
  MT_RECON_L10,
  MT_RECON_L11,
  MT_RECON_L12,
  MT_RECON_L13,
  MT_RECON_L14,
  MT_RECON_L15,
  MT_RECON_L16,
  MT_RECON_L17,
].map(withPaddedLabel);

export const getLevel = (id) => MT_RECON_LEVELS.find((l) => l.id === id || l.label === id);

// ── Grafo do gabarito (último passo GRAPH da aula guiada) ────────────────────
// Mesmo padrão usado nos testes: reconstrói {states, transitions} a partir do
// storyboard, para simular a MT "verdadeira" contra uma palavra qualquer.
const _graphCache = new Map();
export function getGabaritoGraph(level) {
  if (_graphCache.has(level.id)) return _graphCache.get(level.id);
  const steps = level.guidedLesson.steps;
  const introIdx = steps.findIndex((s) => s.formalIntro);
  const lastStep = introIdx > 0 ? steps[introIdx - 1] : steps[steps.length - 1];
  const graph = { states: lastStep.stateUpdate.nodes, transitions: lastStep.stateUpdate.transitions };
  _graphCache.set(level.id, graph);
  return graph;
}

// ── Menor palavra aceita (mecânica de onboarding, igual ao AFD/AP) ───────────
// BFS sobre o alfabeto do nível, simulando cada palavra contra o gabarito real
// via simulateTM — não depende da ordem manual de level.acceptedWords.
const _shortestCache = new Map();
export function getShortestWord(level) {
  if (_shortestCache.has(level.id)) return _shortestCache.get(level.id);
  const graph = getGabaritoGraph(level);
  const alphabet = level.alphabet ?? [];
  let found = null;
  let frontier = [''];
  for (let len = 0; len <= 6 && found === null; len++) {
    for (const w of frontier) {
      const { status } = simulateTM(graph, w, 2000, level.startMarker ?? null);
      if (status === 'ACCEPTED') { found = w; break; }
    }
    if (found !== null) break;
    frontier = frontier.flatMap((w) => alphabet.map((c) => w + c));
  }
  _shortestCache.set(level.id, found ?? '');
  return found ?? '';
}
