// Confere que BOSS_PROVA_EXERCISES bate 1:1 com os exercícios realmente marcados
// 'prova' em cada módulo. Pega drift se alguém adicionar/remover um 'prova' no
// futuro e esquecer de atualizar essa lista.
import { describe, it, expect } from 'vitest';
import { BOSS_PROVA_EXERCISES } from '../modules/boss/bossProvaExercises.js';
import { MODULE_COMPONENT } from '../modules/boss/bossModules.js';
import { LEVEL_DIFFICULTY } from '../levels.js';
import { AP_LEVELS } from '../levels_data/ap/index.js';
import { EXERCISES as MIN_EXERCISES } from '../modules/afd/afdMinimizerExercises.js';
import { loadMTReconLevel } from '../levels_data/mt-recon/index.js';
import { loadMTLevel } from '../levels_data/mt/index.js';

const listedFor = (module) =>
  BOSS_PROVA_EXERCISES.filter(e => e.module === module).map(e => e.originalId);

describe('BOSS_PROVA_EXERCISES — sincronizado com o código-fonte', () => {

  it('bossId é uma sequência 1..N sem buracos nem repetição', () => {
    const ids = BOSS_PROVA_EXERCISES.map(e => e.bossId);
    expect(ids).toEqual(Array.from({ length: ids.length }, (_, i) => i + 1));
  });

  it('module é sempre um dos suportados pelo orquestrador (bossModules)', () => {
    for (const ex of BOSS_PROVA_EXERCISES) {
      expect(Object.keys(MODULE_COMPONENT)).toContain(ex.module);
    }
  });

  it('AFD 1/2: todo id "prova" em LEVEL_DIFFICULTY está na lista (e vice-versa)', () => {
    const afdProvaIds = Object.entries(LEVEL_DIFFICULTY)
      .filter(([, diff]) => diff === 'prova')
      .map(([id]) => Number(id))
      .sort((a, b) => a - b);
    const listedAfdIds = [...listedFor('afd-p1'), ...listedFor('afd-p2')].sort((a, b) => a - b);
    expect(listedAfdIds).toEqual(afdProvaIds);
  });

  it('Minimização: todo exercício level:"prova" está na lista (e vice-versa)', () => {
    const minProvaIds = MIN_EXERCISES.filter(e => e.level === 'prova').map(e => e.id).sort((a, b) => a - b);
    expect(listedFor('afd-min').sort((a, b) => a - b)).toEqual(minProvaIds);
  });

  it('AP: todo exercício level:"prova" está na lista (e vice-versa)', () => {
    const apProvaIds = AP_LEVELS.filter(l => l.level === 'prova').map(l => l.id).sort();
    expect(listedFor('ap-pilha').sort()).toEqual(apProvaIds);
  });

  it('MT Reconhecedora/Transdutora: os níveis listados existem e são "prova"', async () => {
    for (const id of listedFor('mt-recon')) {
      const lv = await loadMTReconLevel(id);
      expect(lv.level).toBe('prova');
    }
    for (const id of listedFor('mt-trans')) {
      const lv = await loadMTLevel(id);
      expect(lv.level).toBe('prova');
    }
  });

});
