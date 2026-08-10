// Cada L*.js mistura metadados leves com o guidedLesson pesado (storyboard
// frame a frame — L24 sozinho tem 15.5MB de código-fonte). Import ESTÁTICO
// de todos os 18 níveis fazia o chunk lazy do MTPart1 pesar ~23MB raw,
// carregado por inteiro assim que a tela de MT Transdutora abre, mesmo que
// o jogador só entre no L01. Reescrever os 18 arquivos pra separar
// metadados/guidedLesson foi descartado (mesmo risco documentado em
// docs/OPTIMIZATION_PROGRESS.md #2 pros 61 níveis AFD). Em vez disso: cada
// nível carrega via import() dinâmico, com cache — MTPart1.jsx faz prefetch
// silencioso de todos em paralelo ao abrir o menu (não bloqueia a tela), e
// loadMTLevel() nunca reimporta um nível já resolvido.
import { MT_LEVEL_IDS } from '../mt-ids.js';

const LOADERS = {
  MT_L1:  () => import('./L1.js'),
  MT_L2:  () => import('./L2.js'),
  MT_L3:  () => import('./L3.js'),
  MT_L4:  () => import('./L4.js'),
  MT_L6:  () => import('./L6.js'),
  MT_L7:  () => import('./L7.js'),
  MT_L9:  () => import('./L9.js'),
  MT_L10: () => import('./L10.js'),
  MT_L11: () => import('./L11.js'),
  MT_L12: () => import('./L12.js'),
  MT_L14: () => import('./L14.js'),
  MT_L16: () => import('./L16.js'),
  MT_L17: () => import('./L17.js'),
  MT_L18: () => import('./L18.js'),
  MT_L19: () => import('./L19.js'),
  MT_L20: () => import('./L20.js'),
  MT_L21: () => import('./L21.js'),
  MT_L22: () => import('./L22.js'),
  MT_L23: () => import('./L23.js'),
  MT_L24: () => import('./L24.js'),
};

// Rótulo exibido com zero à esquerda (L01…L24), igual ao AFD e ao AP —
// derivado do id (MT_L{n}) em vez do label hardcoded de cada arquivo.
function withPaddedLabel(level) {
  const num = level.id.match(/(\d+)$/)?.[0];
  return num ? { ...level, label: 'L' + num.padStart(2, '0') } : level;
}

export const MT_LEVEL_ORDER = MT_LEVEL_IDS;

const _cache = new Map();

/** Carrega (ou retorna do cache) o nível pelo id (ex.: "MT_L24"). */
export async function loadMTLevel(id) {
  if (_cache.has(id)) return _cache.get(id);
  const loader = LOADERS[id];
  if (!loader) throw new Error(`Nível MT desconhecido: ${id}`);
  const mod = await loader();
  const level = withPaddedLabel(mod.default);
  _cache.set(id, level);
  return level;
}

/** Nível já resolvido (import concluído), ou undefined se ainda não. Síncrono. */
export function getCachedMTLevel(id) {
  return _cache.get(id);
}

/** Dispara o import de todos os níveis em paralelo (prefetch silencioso do menu). */
export function prefetchAllMTLevels() {
  return Promise.all(MT_LEVEL_ORDER.map(loadMTLevel));
}
