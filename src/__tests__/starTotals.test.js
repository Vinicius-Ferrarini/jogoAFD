// Contador de estrelas GERAL da Home (services/starTotals). Guarda contra:
//  - módulo esquecido no denominador (o bug antigo: MT Rec./Trans. ficaram de fora
//    e Minimização/AP ficaram com valores hardcoded desatualizados → % > 100%);
//  - drift entre a lista LEVE de ids de AP (ap/ids.js) e o AP_LEVELS real (pesado);
//  - contagem por módulo divergindo da fonte real de cada um;
//  - numerador contando chaves boss-* (que têm total próprio) ou esquecendo AFD_2.
import { describe, it, expect } from 'vitest';
import {
  GRAND_MAX_STARS, totalEarnedStars, moduleEarnedStars,
  P1_MAX_STARS, P2_MAX_STARS, MINIMIZER_MAX_STARS,
  AP_MAX_STARS, MT_RECON_MAX_STARS, MT_TRANS_MAX_STARS,
  AFD_MODULE_MAX, AP_MODULE_MAX, MT_MODULE_MAX,
  AVAILABLE_AFD_LEVEL_IDS,
} from '../services/starTotals.js';
import { AP_LEVELS } from '../levels_data/ap/index.js';
import { AP_LEVEL_IDS, AP_AVAILABLE_LEVEL_IDS } from '../levels_data/ap/ids.js';
import { EXERCISES as MIN_EXERCISES } from '../modules/afd/afdMinimizerExercises.js';
import { MT_RECON_LEVEL_IDS, MT_LEVEL_IDS } from '../levels_data/mt-ids.js';

describe('starTotals — contador de estrelas geral', () => {

  it('GRAND_MAX_STARS = soma de todos os módulos', () => {
    expect(GRAND_MAX_STARS).toBe(
      P1_MAX_STARS + P2_MAX_STARS + MINIMIZER_MAX_STARS +
      AP_MAX_STARS + MT_RECON_MAX_STARS + MT_TRANS_MAX_STARS
    );
  });

  it('inclui TODOS os 6 módulos (nenhum com max zero) — MT não pode faltar', () => {
    for (const v of [P1_MAX_STARS, P2_MAX_STARS, MINIMIZER_MAX_STARS,
      AP_MAX_STARS, MT_RECON_MAX_STARS, MT_TRANS_MAX_STARS]) {
      expect(v).toBeGreaterThan(0);
    }
  });

  it('ap/ids.js (leve) bate com AP_LEVELS (pesado) — sem drift', () => {
    expect([...AP_LEVEL_IDS].sort()).toEqual(AP_LEVELS.map(l => l.id).sort());
    expect([...AP_AVAILABLE_LEVEL_IDS].sort())
      .toEqual(AP_LEVELS.filter(l => !l.impossible).map(l => l.id).sort());
  });

  it('cada max por módulo bate com a contagem real da sua fonte', () => {
    expect(MINIMIZER_MAX_STARS).toBe(MIN_EXERCISES.length * 3);
    expect(AP_MAX_STARS).toBe(AP_LEVELS.filter(l => !l.impossible).length * 3);
    expect(MT_RECON_MAX_STARS).toBe(MT_RECON_LEVEL_IDS.length * 3);
    expect(MT_TRANS_MAX_STARS).toBe(MT_LEVEL_IDS.length * 3);
  });

  it('totalEarnedStars ignora chaves boss-* e soma o progresso de AFD_2', () => {
    const progress = {
      59: { stars: 3 },                     // afd-p1
      'afd-min-1': { stars: 2 },            // minimização
      'ap-L1': { stars: 3 },                // AP
      'mt-recon-MT_RECON_L1': { stars: 1 }, // MT reconhecedora
      'mt-trans-MT_L1': { stars: 3 },       // MT transdutora
      'boss-trabalho-1': { stars: 3 },      // NÃO conta (total próprio)
      'boss-prova-1': { stars: 3 },         // NÃO conta (total próprio)
    };
    const p2 = { [AVAILABLE_AFD_LEVEL_IDS[0]]: { stars: 2 } }; // afd-p2
    // 3+2+3+1+3 = 12 (sem boss-*) + 2 (p2) = 14
    expect(totalEarnedStars(progress, p2)).toBe(14);
  });

  it('agregados por módulo: max = soma dos submódulos e earned agrupa as chaves certas', () => {
    // Os maxes de módulo somam os submódulos (AFD = P1+P2+Min; MT = Rec+Trans).
    expect(AFD_MODULE_MAX).toBe(P1_MAX_STARS + P2_MAX_STARS + MINIMIZER_MAX_STARS);
    expect(AP_MODULE_MAX).toBe(AP_MAX_STARS);
    expect(MT_MODULE_MAX).toBe(MT_RECON_MAX_STARS + MT_TRANS_MAX_STARS);

    const progress = {
      59: { stars: 3 },                     // afd-p1  → afd
      'afd-min-1': { stars: 2 },            // min     → afd
      'ap-L1': { stars: 3 },                // ap
      'mt-recon-MT_RECON_L1': { stars: 1 }, // mt
      'mt-trans-MT_L1': { stars: 3 },       // mt
      'boss-prova-1': { stars: 3 },         // não entra em nenhum módulo de aprendizado
    };
    const p2 = { [AVAILABLE_AFD_LEVEL_IDS[0]]: { stars: 2 } }; // afd (P2)
    const e = moduleEarnedStars(progress, p2);
    expect(e.afd).toBe(3 + 2 + 2); // p1(3) + min(2) + p2(2)
    expect(e.ap).toBe(3);
    expect(e.mt).toBe(1 + 3);
  });

  it('progresso completo em cada módulo nunca ultrapassa o máximo (pct ≤ 100%)', () => {
    // Simula todo o progresso NORMAL no máximo e confere numerador ≤ GRAND_MAX_STARS.
    const progress = {};
    for (const id of MIN_EXERCISES.map(e => e.id)) progress[`afd-min-${id}`] = { stars: 3 };
    for (const id of AP_AVAILABLE_LEVEL_IDS) progress[`ap-${id}`] = { stars: 3 };
    for (const id of MT_RECON_LEVEL_IDS) progress[`mt-recon-${id}`] = { stars: 3 };
    for (const id of MT_LEVEL_IDS) progress[`mt-trans-${id}`] = { stars: 3 };
    const earned = totalEarnedStars(progress, {});
    expect(earned).toBeLessThanOrEqual(GRAND_MAX_STARS);
    // e essas 4 fontes sozinhas já cobrem exatamente seus maxes somados:
    expect(earned).toBe(MINIMIZER_MAX_STARS + AP_MAX_STARS + MT_RECON_MAX_STARS + MT_TRANS_MAX_STARS);
  });

});
