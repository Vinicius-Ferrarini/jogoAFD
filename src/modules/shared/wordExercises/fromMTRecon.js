// ─── fromMTRecon: adapta os níveis MT-Recon para o formato genérico ──────────
// MT-Recon é o ÚNICO dos 3 módulos com lazy-load por nível já existente
// (levels_data/mt-recon/index.js usa import() dinâmico — "17 níveis, import
// estático somava ~11MB de source"). Por isso esta função é ASSÍNCRONA e
// recebe a lista de ids a carregar (a paginação da grade decide quantos e
// quando — ver docs/MENOR_PALAVRA_MINIGAME.md, decisão 8/9). Nunca chama
// prefetchAllMTReconLevels() — isso anularia a otimização original.
import { MT_RECON_LEVEL_IDS } from '../../../levels_data/mt-ids.js';
import {
  loadMTReconLevel, getShortestWord, getGabaritoGraph,
} from '../../../levels_data/mt-recon/index.js';
import { simulateTM } from '../../mt/utils/tmAlgorithms.js';
import { normalizeLanguage } from './normalizeLanguage.js';
import { EXCLUDED_WORD_EXERCISE_IDS } from './dedupedLevelIds.js';

// Lista leve dos ids disponíveis (sem carregar nenhum arquivo de nível) — já
// filtrada pelo dedupe pré-computado (dedupedLevelIds.js), então um nível
// sabidamente duplicado nunca chega a disparar o import() dinâmico. Usada
// pela grade para saber quantas páginas existem antes de carregar.
export const MT_RECON_EXERCISE_IDS = MT_RECON_LEVEL_IDS
  .map(id => `mt-recon-${id.replace('MT_RECON_L', '')}`)
  .filter(id => !EXCLUDED_WORD_EXERCISE_IDS.has(id));

// Carrega e adapta 1 nível MT-Recon pelo seu id de exercício (ex.: "mt-recon-6").
// Retorna null se o nível for impossível, duplicado (dedupe) ou sem menor palavra.
export async function buildWordExerciseFromMTRecon(exerciseId) {
  if (EXCLUDED_WORD_EXERCISE_IDS.has(exerciseId)) return null;
  const num = exerciseId.replace('mt-recon-', '');
  const rawId = `MT_RECON_L${num}`;
  const level = await loadMTReconLevel(rawId);
  if (level.impossible) return null;

  const graph = getGabaritoGraph(level);
  const shortestWord = getShortestWord(level);
  if (shortestWord == null) return null;

  const checkWord = (word) => simulateTM(graph, word, 2000, level.startMarker ?? null).status === 'ACCEPTED';

  // Guard defensivo (baixo risco — shortestWord vem do mesmo simulateTM que
  // checkWord usa — mas mantém o código consistente com fromAFD/fromAP).
  if (!checkWord(shortestWord)) {
    console.warn(`[wordExercises/fromMTRecon] ${exerciseId}: shortestWord "${shortestWord}" não é aceita pela própria regra do nível — excluído do minigame.`);
    return null;
  }

  return {
    id: exerciseId,
    moduleId: 'mt-recon',
    levelId: level.id,
    label: level.label,
    language: level.language,
    languageNormalized: normalizeLanguage(level.language),
    alphabet: level.alphabet ?? [],
    shortestWord,
    checkWord,
  };
}

// Carrega e adapta um lote de níveis em paralelo — usado pela grade ao
// paginar até a faixa que contém exercícios MT-Recon.
export async function buildWordExercisesFromMTRecon(exerciseIds) {
  const results = await Promise.all(exerciseIds.map(buildWordExerciseFromMTRecon));
  return results.filter(Boolean);
}
