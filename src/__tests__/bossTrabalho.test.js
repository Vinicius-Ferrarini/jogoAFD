// Confere que BOSS_TRABALHO_EXERCISES bate 1:1 com os exercícios realmente
// marcados 'trabalho' no código-fonte (AFD: levels.js LEVEL_DIFFICULTY;
// AP: level: 'trabalho' em cada L*.js). Pega drift se alguém adicionar/
// remover um 'trabalho' no futuro e esquecer de atualizar essa lista.
import { describe, it, expect } from 'vitest';
import { BOSS_TRABALHO_EXERCISES } from '../modules/boss/bossTrabalhoExercises.js';
import { LEVEL_DIFFICULTY } from '../levels.js';
import { AP_LEVELS } from '../levels_data/ap/index.js';

describe('BOSS_TRABALHO_EXERCISES — sincronizado com o código-fonte', () => {

  it('bossId é uma sequência 1..N sem buracos nem repetição', () => {
    const ids = BOSS_TRABALHO_EXERCISES.map(e => e.bossId);
    expect(ids).toEqual(Array.from({ length: ids.length }, (_, i) => i + 1));
  });

  it('todo AFD id marcado "trabalho" em LEVEL_DIFFICULTY está na lista (e vice-versa)', () => {
    const afdTrabalhoIds = Object.entries(LEVEL_DIFFICULTY)
      .filter(([, diff]) => diff === 'trabalho')
      .map(([id]) => Number(id))
      .sort((a, b) => a - b);

    const listedAfdIds = BOSS_TRABALHO_EXERCISES
      .filter(e => e.module === 'afd-p1' || e.module === 'afd-p2')
      .map(e => e.originalId)
      .sort((a, b) => a - b);

    expect(listedAfdIds).toEqual(afdTrabalhoIds);
  });

  it('todo exercício AP marcado level:"trabalho" está na lista (e vice-versa)', () => {
    const apTrabalhoIds = AP_LEVELS
      .filter(l => l.level === 'trabalho')
      .map(l => Number(l.id.slice(1)))
      .sort((a, b) => a - b);

    const listedApIds = BOSS_TRABALHO_EXERCISES
      .filter(e => e.module === 'ap-pilha')
      .map(e => e.originalId)
      .sort((a, b) => a - b);

    expect(listedApIds).toEqual(apTrabalhoIds);
  });

  it('module é sempre um dos 3 valores suportados pelo orquestrador', () => {
    for (const ex of BOSS_TRABALHO_EXERCISES) {
      expect(['afd-p1', 'afd-p2', 'ap-pilha']).toContain(ex.module);
    }
  });

});
