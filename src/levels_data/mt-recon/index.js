// Mesma estratégia de lazy-load por nível de levels_data/mt/index.js (ver
// comentário lá) — 17 níveis, import estático somava ~11MB de source.
import { MT_RECON_LEVEL_IDS } from '../mt-ids.js';
import { simulateTM } from '../../modules/mt/utils/tmAlgorithms.js';

const LOADERS = {
  MT_RECON_L1:  () => import('./L1.js'),
  MT_RECON_L2:  () => import('./L2.js'),
  MT_RECON_L3:  () => import('./L3.js'),
  MT_RECON_L4:  () => import('./L4.js'),
  MT_RECON_L5:  () => import('./L5.js'),
  MT_RECON_L6:  () => import('./L6.js'),
  MT_RECON_L7:  () => import('./L7.js'),
  MT_RECON_L8:  () => import('./L8.js'),
  MT_RECON_L9:  () => import('./L9.js'),
  MT_RECON_L10: () => import('./L10.js'),
  MT_RECON_L11: () => import('./L11.js'),
  MT_RECON_L12: () => import('./L12.js'),
  MT_RECON_L13: () => import('./L13.js'),
  MT_RECON_L14: () => import('./L14.js'),
  MT_RECON_L15: () => import('./L15.js'),
  MT_RECON_L16: () => import('./L16.js'),
  MT_RECON_L17: () => import('./L17.js'),
};

// Rótulo exibido com zero à esquerda (L01…L17), igual ao AFD e ao AP —
// derivado do id (MT_RECON_L{n}) em vez do label hardcoded de cada arquivo.
function withPaddedLabel(level) {
  const num = level.id.match(/(\d+)$/)?.[0];
  return num ? { ...level, label: 'L' + num.padStart(2, '0') } : level;
}

export const MT_RECON_LEVEL_ORDER = MT_RECON_LEVEL_IDS;

const _cache = new Map();

/** Carrega (ou retorna do cache) o nível pelo id (ex.: "MT_RECON_L8"). */
export async function loadMTReconLevel(id) {
  if (_cache.has(id)) return _cache.get(id);
  const loader = LOADERS[id];
  if (!loader) throw new Error(`Nível MT Reconhecedora desconhecido: ${id}`);
  const mod = await loader();
  const level = withPaddedLabel(mod.default);
  _cache.set(id, level);
  return level;
}

/** Nível já resolvido (import concluído), ou undefined se ainda não. Síncrono. */
export function getCachedMTReconLevel(id) {
  return _cache.get(id);
}

/** Dispara o import de todos os níveis em paralelo (prefetch silencioso do menu). */
export function prefetchAllMTReconLevels() {
  return Promise.all(MT_RECON_LEVEL_ORDER.map(loadMTReconLevel));
}

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
