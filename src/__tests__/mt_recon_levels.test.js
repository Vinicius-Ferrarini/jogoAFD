// ─── Testes de MT Reconhecedora ───────────────────────────────────────────────
// Espelha o padrão de afd_levels.test.js / ap_levels.test.js: bateria de
// aceitas/rejeitadas bate com o gabarito real, e o grafo final da aula guiada
// (fase GRAPH) reproduz a mesma bateria — provando que buildRecon/gerador de
// aula não diverge do gabarito importado do JFLAP.
import { describe, it, expect } from 'vitest';
import { MT_RECON_LEVELS } from '../levels_data/mt-recon/index.js';
import { simulateTM, fuzzTMRecognizer } from '../modules/mt/utils/tmAlgorithms.js';

function lastGraphStep(level) {
  const steps = level.guidedLesson.steps;
  const introIdx = steps.findIndex(s => s.formalIntro);
  return introIdx > 0 ? steps[introIdx - 1] : steps[steps.length - 1];
}

describe('MT Reconhecedora — sanidade básica de cada nível', () => {
  for (const level of MT_RECON_LEVELS) {
    it(`${level.label}: tem estado inicial, ao menos um final, e alfabeto`, () => {
      const nodes = lastGraphStep(level).stateUpdate.nodes;
      expect(nodes.some(n => n.isInitial), `${level.label}: sem estado inicial`).toBe(true);
      expect(nodes.some(n => n.isFinal), `${level.label}: sem estado final`).toBe(true);
      expect(level.alphabet?.length, `${level.label}: alfabeto vazio`).toBeGreaterThan(0);
    });

    it(`${level.label}: acceptedWords/rejectedWords não estão vazias`, () => {
      expect(level.acceptedWords?.length, `${level.label}: sem acceptedWords`).toBeGreaterThan(0);
      expect(level.rejectedWords?.length, `${level.label}: sem rejectedWords`).toBeGreaterThan(0);
    });
  }
});

describe('MT Reconhecedora — gabarito bate com acceptedWords/rejectedWords', () => {
  for (const level of MT_RECON_LEVELS) {
    it(`${level.label}: grafo do gabarito (último passo da aula) aceita/rejeita conforme a bateria`, () => {
      const graph = lastGraphStep(level).stateUpdate;
      const pdaLikeGraph = { states: graph.nodes, transitions: graph.transitions };
      const res = fuzzTMRecognizer(pdaLikeGraph, level);
      expect(res.ok, `${level.label}: ${JSON.stringify(res)}`).toBe(true);
    });
  }
});

describe('MT Reconhecedora — checkpoints por passo (aula guiada reflete o grafo parcial)', () => {
  for (const level of MT_RECON_LEVELS) {
    const steps = level.guidedLesson.steps;
    const graphSteps = steps.filter(s => s.stateUpdate && !s.phase);
    it(`${level.label}: cada passo da fase GRAPH tem grafo consistente (sem transição órfã)`, () => {
      for (const [idx, step] of graphSteps.entries()) {
        const ids = new Set(step.stateUpdate.nodes.map(n => n.id));
        for (const t of step.stateUpdate.transitions) {
          expect(ids.has(t.from), `${level.label} step[${idx}]: transição de estado não revelado "${t.from}"`).toBe(true);
          expect(ids.has(t.to), `${level.label} step[${idx}]: transição para estado não revelado "${t.to}"`).toBe(true);
        }
      }
    });

    it(`${level.label}: o grafo de cada passo simulado (simulateWord presente) nunca entra em LOOP`, () => {
      for (const [idx, step] of graphSteps.entries()) {
        if (step.simulateWord === undefined) continue;
        const graph = { states: step.stateUpdate.nodes, transitions: step.stateUpdate.transitions };
        const { status } = simulateTM(graph, step.simulateWord, 200);
        expect(status, `${level.label} step[${idx}]: simulação de "${step.simulateWord || 'λ'}" entrou em LOOP`).not.toBe('LOOP');
      }
    });
  }
});

describe('MT Reconhecedora — grafo final da aula ≡ estado final coerente com status do último passo', () => {
  for (const level of MT_RECON_LEVELS) {
    it(`${level.label}: passos com status ACCEPTED/REJECTED batem com simulateTM no grafo daquele passo`, () => {
      const steps = level.guidedLesson.steps.filter(s => s.status && s.stateUpdate);
      expect(steps.length, `${level.label}: aula não tem nenhum passo com veredito ACCEPTED/REJECTED`).toBeGreaterThan(0);
      for (const [idx, step] of steps.entries()) {
        const graph = { states: step.stateUpdate.nodes, transitions: step.stateUpdate.transitions };
        const { status } = simulateTM(graph, step.simulateWord);
        expect(status, `${level.label} step com status "${step.status}" para "${step.simulateWord}": simulateTM real deu "${status}"`).toBe(step.status);
      }
    });
  }
});
