// ─── Testes de MT Transdutora ─────────────────────────────────────────────────
// Espelha mt_recon_levels.test.js: bateria de testWords bate com o gabarito
// real (aceita E produz a saída esperada por level.validate), e cada passo da
// aula guiada é consistente (sem transição órfã / sem LOOP).
import { describe, it, expect } from 'vitest';
import { MT_LEVELS } from '../levels_data/mt/index.js';
import { simulateTM, fuzzTMTransducer, extractTapeOutput } from '../modules/mt/utils/tmAlgorithms.js';

function lastGraphStep(level) {
  const steps = level.guidedLesson.steps;
  const introIdx = steps.findIndex(s => s.formalIntro);
  return introIdx > 0 ? steps[introIdx - 1] : steps[steps.length - 1];
}

describe('MT Transdutora — sanidade básica de cada nível', () => {
  for (const level of MT_LEVELS) {
    it(`${level.label}: tem estado inicial, ao menos um final, e alfabeto`, () => {
      const nodes = lastGraphStep(level).stateUpdate.nodes;
      expect(nodes.some(n => n.isInitial), `${level.label}: sem estado inicial`).toBe(true);
      expect(nodes.some(n => n.isFinal), `${level.label}: sem estado final`).toBe(true);
      expect(level.alphabet?.length, `${level.label}: alfabeto vazio`).toBeGreaterThan(0);
    });

    it(`${level.label}: testWords não está vazia e validate é uma função`, () => {
      expect(level.testWords?.length, `${level.label}: sem testWords`).toBeGreaterThan(0);
      expect(typeof level.validate, `${level.label}: sem validate()`).toBe('function');
    });
  }
});

describe('MT Transdutora — gabarito aceita todas as testWords (fuzzTMTransducer)', () => {
  for (const level of MT_LEVELS) {
    it(`${level.label}: grafo do gabarito (último passo da aula) aceita toda a bateria`, () => {
      const graph = lastGraphStep(level).stateUpdate;
      const pdaLikeGraph = { states: graph.nodes, transitions: graph.transitions };
      const res = fuzzTMTransducer(pdaLikeGraph, level);
      expect(res.ok, `${level.label}: ${JSON.stringify(res)}`).toBe(true);
    });
  }
});

describe('MT Transdutora — gabarito produz a SAÍDA esperada (validate) para cada testWord', () => {
  for (const level of MT_LEVELS) {
    it(`${level.label}: fita final (sem marcadores/brancos) bate com level.validate(w)`, () => {
      const graph = lastGraphStep(level).stateUpdate;
      const pdaLikeGraph = { states: graph.nodes, transitions: graph.transitions };
      const words = level.skipEmptyWord ? level.testWords.filter(w => w !== '') : level.testWords;
      for (const w of words) {
        const { status, tape } = simulateTM(pdaLikeGraph, w, 2000, level.startMarker ?? null);
        expect(status, `${level.label}: "${w}" não foi ACCEPTED (${status})`).toBe('ACCEPTED');
        const got = extractTapeOutput(tape, level.startMarker ?? level.outputMarker ?? null);
        const expected = level.validate(w);
        expect(got, `${level.label}: "${w}" → esperado "${expected}", obteve "${got}"`).toBe(expected);
      }
    });
  }
});

describe('MT Transdutora — checkpoints por passo (aula guiada reflete o grafo parcial)', () => {
  for (const level of MT_LEVELS) {
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

    it(`${level.label}: simulações da aula (simulateWord presente) nunca entram em LOOP`, () => {
      for (const [idx, step] of graphSteps.entries()) {
        if (step.simulateWord === undefined) continue;
        const graph = { states: step.stateUpdate.nodes, transitions: step.stateUpdate.transitions };
        const { status } = simulateTM(graph, step.simulateWord, 3000, level.startMarker ?? null);
        expect(status, `${level.label} step[${idx}]: simulação de "${step.simulateWord || 'λ'}" entrou em LOOP`).not.toBe('LOOP');
      }
    });
  }
});

describe('MT Transdutora — passos com status ACCEPTED/REJECTED batem com simulateTM real', () => {
  for (const level of MT_LEVELS) {
    it(`${level.label}: veredito de cada passo terminal da aula bate com o motor real`, () => {
      const steps = level.guidedLesson.steps.filter(s => s.status && s.stateUpdate);
      expect(steps.length, `${level.label}: aula sem nenhum passo com veredito`).toBeGreaterThan(0);
      for (const step of steps) {
        const graph = { states: step.stateUpdate.nodes, transitions: step.stateUpdate.transitions };
        const { status } = simulateTM(graph, step.simulateWord, 2000, level.startMarker ?? null);
        expect(status, `${level.label} step com status "${step.status}" para "${step.simulateWord}": simulateTM real deu "${status}"`).toBe(step.status);
      }
    });
  }
});
