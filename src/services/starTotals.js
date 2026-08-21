// ─── starTotals: contador de estrelas GERAL do projeto ───────────────────────
// Fonte única do total (denominador) e do somatório conquistado (numerador) da
// barra de progresso da Home. Importa só fontes LEVES (ids/metadados), nunca os
// payloads pesados dos módulos (gabaritos AP, guidedLesson MT) — por isso as
// contagens de AP/MT vêm de listas de ids dedicadas (ap/ids.js, mt-ids.js),
// mantidas em dia por src/__tests__/starTotals.test.js.
//
// Módulos contados: AFD_1, AFD_2, Minimização, AP, MT Reconhecedora e MT
// Transdutora. Chaves de progresso boss-* têm total PRÓPRIO (Trabalho/Prova são
// rejogadas de exercícios já contados) e NÃO entram aqui.
import { LEVEL_IDS, UNAVAILABLE_LEVELS, UNAVAILABLE_LEVELS_P2_ONLY, HIDDEN_LEVELS, LEVEL_DIFFICULTY } from '../levels';
import { EXERCISES as MIN_EXERCISES } from '../modules/afd/afdMinimizerExercises';
import { MT_RECON_LEVEL_IDS, MT_LEVEL_IDS } from '../levels_data/mt-ids';
import { AP_AVAILABLE_LEVEL_IDS } from '../levels_data/ap/ids';

// L14 (impossível em AFD) vale no máximo 1 estrela; os demais níveis, 3.
const maxStarsFor = (id) => (LEVEL_DIFFICULTY[id] === 'impossible' ? 1 : 3);

// AFD_1 (todas as fases visíveis) e AFD_2 (subconjunto — exclui as só-P1).
export const P1_LEVEL_IDS = LEVEL_IDS.filter((id) => !UNAVAILABLE_LEVELS.has(id) && !HIDDEN_LEVELS.has(id));
export const AVAILABLE_AFD_LEVEL_IDS = P1_LEVEL_IDS.filter((id) => !UNAVAILABLE_LEVELS_P2_ONLY.has(id));

export const P1_MAX_STARS        = P1_LEVEL_IDS.reduce((s, id) => s + maxStarsFor(id), 0);
export const P2_MAX_STARS        = AVAILABLE_AFD_LEVEL_IDS.reduce((s, id) => s + maxStarsFor(id), 0);
export const MINIMIZER_MAX_STARS = MIN_EXERCISES.length * 3;
export const AP_MAX_STARS        = AP_AVAILABLE_LEVEL_IDS.length * 3;
export const MT_RECON_MAX_STARS  = MT_RECON_LEVEL_IDS.length * 3;
export const MT_TRANS_MAX_STARS  = MT_LEVEL_IDS.length * 3;

export const GRAND_MAX_STARS =
  P1_MAX_STARS + P2_MAX_STARS + MINIMIZER_MAX_STARS + AP_MAX_STARS + MT_RECON_MAX_STARS + MT_TRANS_MAX_STARS;

// Numerador: soma o progresso normal (turinglab_progress) EXCETO chaves boss-*,
// mais o progresso de AFD_2 (turinglab_progress_p2, chaves separadas por fase).
export function totalEarnedStars(progress = {}, p2Progress = {}) {
  const p2Earned = AVAILABLE_AFD_LEVEL_IDS.reduce((s, id) => s + (p2Progress[id]?.stars || 0), 0);
  const rest = Object.entries(progress)
    .filter(([key]) => !key.startsWith('boss-'))
    .reduce((sum, [, p]) => sum + (p?.stars || 0), 0);
  return rest + p2Earned;
}

// ── Agregados por MÓDULO da tela inicial (para o contador nos cards de módulo) ─
// AFD junta P1 + P2 + Minimização; MT junta Reconhecedora + Transdutora; AP é só
// ele. O Boss (Trabalho/Prova) tem total próprio e é agregado no App (depende das
// listas de exercícios do Boss, não das fontes deste módulo).
export const AFD_MODULE_MAX = P1_MAX_STARS + P2_MAX_STARS + MINIMIZER_MAX_STARS;
export const AP_MODULE_MAX  = AP_MAX_STARS;
export const MT_MODULE_MAX  = MT_RECON_MAX_STARS + MT_TRANS_MAX_STARS;

// Estrelas conquistadas por módulo (mesmas fontes/chaves usadas nos submódulos).
export function moduleEarnedStars(progress = {}, p2Progress = {}) {
  const byPrefix = (pfx) => Object.entries(progress)
    .filter(([k]) => k.startsWith(pfx)).reduce((s, [, p]) => s + (p?.stars || 0), 0);
  const afdP1  = P1_LEVEL_IDS.reduce((s, id) => s + (progress[id]?.stars || 0), 0);
  const afdP2  = AVAILABLE_AFD_LEVEL_IDS.reduce((s, id) => s + (p2Progress[id]?.stars || 0), 0);
  const afdMin = byPrefix('afd-min-');
  return {
    afd: afdP1 + afdP2 + afdMin,
    ap:  byPrefix('ap-'),
    mt:  byPrefix('mt-recon-') + byPrefix('mt-trans-'),
  };
}
