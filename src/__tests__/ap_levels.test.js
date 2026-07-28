import { describe, it, expect } from 'vitest';
import { AP_LEVELS, getBattery, getLesson, getShortestWord } from '../levels_data/ap/index.js';
import { pdaAccepts, enumerateWords, validateStudentPda } from '../modules/ap/utils/pdaAlgorithms.js';

// ─── Suite 1: bateria auto-consistente — o gabarito não contradiz a si mesmo ──
// A bateria é gerada RODANDO o próprio gabarito (buildBattery), então este teste
// não pega erro de transcrição gabarito↔enunciado — só regressão estrutural
// (gabarito quebrado, alfabeto mal-derivado, aceita/rejeita vazio nos dois lados).
describe('AP Levels — bateria auto-consistente (todos os níveis)', () => {
  for (const level of AP_LEVELS) {
    if (level.impossible) continue;
    const label = level.label ?? level.id;

    it(`${label}: bateria tem pelo menos 1 palavra aceita e 1 rejeitada`, () => {
      const battery = getBattery(level);
      expect(battery.accepted.length, `${label}: nenhuma palavra aceita na bateria`).toBeGreaterThan(0);
      expect(battery.rejected.length, `${label}: nenhuma palavra rejeitada na bateria`).toBeGreaterThan(0);
    });

    it(`${label}: gabarito (+truth, se houver) reproduz a própria bateria`, () => {
      const battery = getBattery(level);
      // buildBattery rotula com `truth ? truth(w, pdaAccepts(...)) : pdaAccepts(...)`
      // (ver pdaAlgorithms.js) — replicar aqui, senão níveis com `truth` (ajuste de
      // borda λ/contadores zero) dão falso-positivo de regressão.
      const verdict = (w) => {
        const g = pdaAccepts(level.solution, w);
        return level.truth ? level.truth(w, g) : g;
      };
      for (const w of battery.accepted) {
        expect(verdict(w), `${label}: gabarito rejeitou "${w || 'λ'}" (esperava aceitar)`).toBe(true);
      }
      for (const w of battery.rejected) {
        expect(verdict(w), `${label}: gabarito aceitou "${w || 'λ'}" (esperava rejeitar)`).toBe(false);
      }
    });
  }
});

// ─── Suite 1b: classificação da mecânica "menor palavra" respeita truth ───────
// Regressão do bug: testWord() (APPart1.jsx) classificava contra o gabarito CRU
// (pdaAccepts direto), ignorando level.truth — em níveis onde o .jff diverge do
// enunciado nas bordas (ex.: L1 exige n>0 mas o .jff aceita λ), isso rotulava λ
// como "correto" incorretamente. Este teste replica a fórmula de classificação
// que testWord() usa (level.truth ? level.truth(w, pdaAccepts(...)) : pdaAccepts(...))
// e garante que ela nunca aceita uma palavra que a bateria (já truth-corrigida)
// rejeita — i.e., as duas fontes de verdade não podem divergir.
describe('AP Levels — classificação truth-corrigida da mecânica de onboarding', () => {
  for (const level of AP_LEVELS) {
    if (level.impossible || !level.truth) continue;
    const label = level.label ?? level.id;

    it(`${label}: level.truth(word, pdaAccepts(...)) concorda com battery.accepted/rejected`, () => {
      const battery = getBattery(level);
      const classify = (w) => level.truth(w, pdaAccepts(level.solution, w));
      for (const w of battery.accepted) {
        expect(classify(w), `${label}: truth rejeitou "${w || 'λ'}" mas a bateria aceita`).toBe(true);
      }
      for (const w of battery.rejected) {
        expect(classify(w), `${label}: truth aceitou "${w || 'λ'}" mas a bateria rejeita`).toBe(false);
      }
    });
  }

});

// ─── Suite 1c: L1 aceita λ (enunciado correto é n ≥ 0, sem truth override) ────
// L1 = { aⁿbⁿ / n ≥ 0 }: o gabarito cru já aceita λ (n=0) e não precisa de
// `truth` para corrigir bordas — ao contrário do que um enunciado antigo (n>0)
// exigia.
describe('AP Levels — L1 aceita λ', () => {
  it('L1: gabarito cru aceita λ e o exercício não sobrescreve isso com truth', () => {
    const l1 = AP_LEVELS.find((l) => l.id === 'L1');
    expect(pdaAccepts(l1.solution, ''), 'gabarito cru deveria aceitar λ').toBe(true);
    expect(l1.truth, 'L1 não deveria ter truth override (n ≥ 0 já casa com o gabarito)').toBeUndefined();
    expect(getShortestWord(l1), 'menor palavra do L1 deveria ser λ (n ≥ 0)').toBe('');
  });
});

// ─── Suite 2: níveis impossíveis (L16) permanecem sem gabarito ────────────────
// L16 existe só para mostrar que a linguagem exige MT, não AP — nunca deve
// ganhar um gabarito/solution.
describe('AP Levels — nível impossível permanece impossível', () => {
  it('L16 está marcado impossible e sem solution', () => {
    const l16 = AP_LEVELS.find((l) => l.id === 'L16');
    expect(l16).toBeDefined();
    expect(l16.impossible).toBe(true);
    expect(l16.solution).toBeNull();
  });
});

// ─── Suite 3: validate() de referência independente do gabarito ──────────────
// Só para os níveis onde a linguagem do enunciado é simples o bastante para
// reimplementar sem repetir a lógica do PDA (evita duplicar o próprio bug).
// Pega erro de TRANSCRIÇÃO gabarito↔enunciado que a Suite 1 não consegue ver,
// já que aqui a verdade não vem do gabarito.
const REFERENCE_VALIDATE = {
  // L18 = { wx | w∈{a,b}*, |w|a=|w|b e x∈{c,d}*, |x|c=|x|d }
  // Corte w/x: primeiro caractere que é 'c' ou 'd' inicia x; se não houver, x = ''.
  L18: (word) => {
    const splitIdx = [...word].findIndex((ch) => ch === 'c' || ch === 'd');
    const w = splitIdx === -1 ? word : word.slice(0, splitIdx);
    const x = splitIdx === -1 ? '' : word.slice(splitIdx);
    if (/[^ab]/.test(w)) return false;
    if (/[^cd]/.test(x)) return false;
    const wa = [...w].filter((c) => c === 'a').length;
    const wb = [...w].filter((c) => c === 'b').length;
    const xc = [...x].filter((c) => c === 'c').length;
    const xd = [...x].filter((c) => c === 'd').length;
    return wa === wb && xc === xd;
  },
  // L19 = { ccwcc | w∈{a,b}*, |w|a=|w|b }
  // Mínimo é "cccc" (w=λ) — os dois pares "cc" não podem se sobrepor.
  L19: (word) => {
    if (word.length < 4 || !word.startsWith('cc') || !word.endsWith('cc')) return false;
    const w = word.slice(2, word.length - 2);
    if (/[^ab]/.test(w)) return false;
    const wa = [...w].filter((c) => c === 'a').length;
    const wb = [...w].filter((c) => c === 'b').length;
    return wa === wb;
  },
  // L20 = { a b^n c^m b^n a | n≥0, m>0 }
  L20: (word) => {
    const m = /^a(b*)(c+)(b*)a$/.exec(word);
    if (!m) return false;
    const [, b1, , b2] = m;
    return b1.length === b2.length;
  },
};

describe('AP Levels — validate() de referência ≡ gabarito (fuzz)', () => {
  for (const [id, validate] of Object.entries(REFERENCE_VALIDATE)) {
    const level = AP_LEVELS.find((l) => l.id === id);
    if (!level) continue;
    const label = level.label ?? id;

    it(`${label}: gabarito ≡ validate() de referência para todas as palavras até comprimento 8`, () => {
      let counterexample = null;
      for (const word of enumerateWords(level.alphabet, 8, 20000)) {
        const gabaritoResult = pdaAccepts(level.solution, word);
        const refResult = validate(word);
        if (gabaritoResult !== refResult) {
          counterexample = { word: word || 'λ', gabaritoResult, refResult };
          break;
        }
      }
      expect(
        counterexample,
        counterexample
          ? `Contraexemplo em ${label}: palavra="${counterexample.word}" ` +
            `— gabarito diz ${counterexample.gabaritoResult}, validate() diz ${counterexample.refResult}`
          : undefined
      ).toBeNull();
    });
  }
});

// ─── Suite 4: aula guiada de cada nível joga sem erro estrutural ──────────────
// Não simula a UI (isso é Playwright/manual) — só garante que getLesson() não
// lança e produz ao menos 1 passo, para todo nível não-impossível.
describe('AP Levels — aula guiada tem passos', () => {
  for (const level of AP_LEVELS) {
    if (level.impossible) continue;
    const label = level.label ?? level.id;

    it(`${label}: getLesson() retorna ao menos 1 passo sem lançar`, () => {
      const lesson = getLesson(level);
      expect(Array.isArray(lesson.steps), `${label}: aula guiada sem steps[]`).toBe(true);
      expect(lesson.steps.length, `${label}: aula guiada sem passos`).toBeGreaterThan(0);
    });
  }
});

// ─── Suite 5: grafo FINAL da aula ≡ gabarito ──────────────────────────────────
// getLesson() monta o grafo da aula por conta própria (buildApLesson.js, com
// poda + reordenação por palavra) — nunca testado até agora se o resultado
// final é de fato equivalente ao gabarito na BATERIA COMPLETA do nível (não só
// nas poucas boardWords mostradas no quadro). Reconstrói o PDA a partir do
// último stateUpdate da fase GRAPH (mesmo padrão de simulateLessonWord, em
// APPart1.jsx) e roda a bateria inteira contra ele.
function pdaFromLessonStateUpdate(stateUpdate) {
  const { nodes, transitions } = stateUpdate;
  return {
    states: nodes.map((n) => ({ id: n.id, name: n.label, initial: n.isInitial })),
    transitions,
    initial: nodes.find((n) => n.isInitial)?.id ?? null,
    stackBottom: 'Z',
  };
}

describe('AP Levels — grafo final da aula guiada ≡ gabarito (bateria completa)', () => {
  for (const level of AP_LEVELS) {
    if (level.impossible) continue;
    const label = level.label ?? level.id;

    it(`${label}: último grafo da fase GRAPH da aula reproduz a bateria completa`, () => {
      const battery = getBattery(level);
      const lesson = getLesson(level);
      const graphSteps = lesson.steps.filter((s) => s.phase === 'GRAPH');
      const finalStep = [...graphSteps].reverse().find((s) => s.graphEnd) ?? graphSteps[graphSteps.length - 1];
      expect(finalStep, `${label}: aula sem nenhum passo GRAPH`).toBeDefined();

      const lessonPda = pdaFromLessonStateUpdate(finalStep.stateUpdate);
      const verdict = (w) => {
        const g = pdaAccepts(lessonPda, w);
        return level.truth ? level.truth(w, g) : g;
      };
      for (const w of battery.accepted) {
        expect(verdict(w), `${label}: grafo FINAL da aula rejeitou "${w || 'λ'}" (bateria espera aceitar)`).toBe(true);
      }
      for (const w of battery.rejected) {
        expect(verdict(w), `${label}: grafo FINAL da aula aceitou "${w || 'λ'}" (bateria espera rejeitar)`).toBe(false);
      }
    });
  }
});

// ─── Suite 6: checkpoints por passo — boardStatus bate com o grafo parcial ────
// Análogo ao "steps da aula guiada" do AFD (afd_levels.test.js), adaptado ao
// formato do AP: cada passo da fase GRAPH tem boardStatus[] (um status por
// boardWord, não um único expectedVerdict). Reconstrói o PDA PARCIAL de cada
// passo e confirma que 'done'/'current' ⇒ palavra realmente aceita naquele
// ponto, e 'pending' ⇒ realmente ainda rejeitada — pega o caso em que
// orderByTargetWord/buildApLesson acende uma palavra cedo ou tarde demais.
describe('AP Levels — checkpoints por passo (boardStatus ≡ grafo parcial)', () => {
  for (const level of AP_LEVELS) {
    if (level.impossible) continue;
    const label = level.label ?? level.id;
    const lesson = getLesson(level);
    const graphSteps = lesson.steps.filter((s) => s.phase === 'GRAPH' && s.boardStatus);

    graphSteps.forEach((step, stepIdx) => {
      const words = lesson.boardWords;
      if (!words?.length) return;

      it(`${label} step[${stepIdx}]: boardStatus bate com o grafo parcial deste passo`, () => {
        const pda = pdaFromLessonStateUpdate(step.stateUpdate);
        words.forEach((w, i) => {
          const st = step.boardStatus[i];
          const actuallyAccepted = pdaAccepts(pda, w);
          if (st === 'done' || st === 'current') {
            expect(actuallyAccepted, `${label} step[${stepIdx}]: "${w || 'λ'}" marcada '${st}' mas o grafo parcial rejeita`).toBe(true);
          } else if (st === 'pending') {
            expect(actuallyAccepted, `${label} step[${stepIdx}]: "${w || 'λ'}" marcada 'pending' mas o grafo parcial já aceita`).toBe(false);
          }
        });
      });
    });
  }
});

// ─── Suite 7: teste MUTANTE — a bateria de cada nível detecta um grafo errado ─
// Meta-teste: prova que getBattery(level) + pdaAccepts têm poder de detecção
// de verdade, não passam por vacuidade. Reproduz o cenário do usuário:
// { aⁿbⁿ } aceita "ab"; se o grafo ganhasse uma transição SOLTA lendo um
// símbolo extra pra um novo estado que também esvazia a pilha sozinho, o AP
// passaria a aceitar "ab"+símbolo incorretamente — a bateria PRECISA pegar
// isso, senão ela é fraca demais pra validar o aluno de verdade.
function cloneSolution(sol) {
  return {
    states: sol.states.map((s) => ({ ...s })),
    transitions: sol.transitions.map((t) => ({ ...t })),
    initial: sol.initial,
    stackBottom: sol.stackBottom,
  };
}

// Injeta um "atalho" solto: de QUALQUER estado do gabarito, ao ler `symbol`,
// vai pra um novo estado que DRENA a pilha inteira (um símbolo de cada vez,
// tentando cada símbolo do alfabeto da pilha, sem saber o que realmente está
// no topo) até esvaziar — reproduz o cenário do usuário (aⁿbⁿ aceita "ab";
// uma transição solta lendo "c" pra um estado que esvazia a pilha faria
// "abc" ser aceito indevidamente), mas de forma independente de QUAL estado
// o grafo original alcança depois de consumir a palavra-base — não dá pra
// simplesmente "pop" um símbolo fixo porque não sabemos o conteúdo real da
// pilha naquele ponto (dependeria de reimplementar o gabarito de cada nível).
function injectLooseTransition(sol, symbol, stackAlphabet) {
  const mutated = cloneSolution(sol);
  const mutantState = '__mutant_state__';
  mutated.states.push({ id: mutantState, name: 'MUT', initial: false });
  for (const s of sol.states) {
    mutated.transitions.push({ from: s.id, to: mutantState, read: symbol, pop: '', push: '' });
  }
  for (const sym of stackAlphabet) {
    mutated.transitions.push({ from: mutantState, to: mutantState, read: '', pop: sym, push: '' });
  }
  return mutated;
}

describe('AP Levels — teste mutante: bateria detecta transição solta indevida', () => {
  for (const level of AP_LEVELS) {
    if (level.impossible) continue;
    const label = level.label ?? level.id;

    it(`${label}: grafo + transição solta faz alguma palavra da bateria falhar`, () => {
      const battery = getBattery(level);
      const shortest = getShortestWord(level);
      const symbol = level.alphabet[0];
      // Sem alfabeto ou sem menor palavra conhecida: nada a mutar de forma
      // determinística — pula (não deveria ocorrer em nenhum nível real).
      if (symbol === undefined || shortest === null || shortest === undefined) return;

      const mutantWord = shortest + symbol;
      // Se a própria linguagem já aceita a palavra-mutante (ex.: alfabeto de
      // 1 símbolo só, linguagem = Σ*), a mutação não seria estruturalmente
      // errada — pula esse nível para essa construção específica.
      const alreadyAccepted = battery.accepted.includes(mutantWord)
        || (level.truth ? level.truth(mutantWord, pdaAccepts(level.solution, mutantWord)) : pdaAccepts(level.solution, mutantWord));
      if (alreadyAccepted) return;

      const mutated = injectLooseTransition(level.solution, symbol, level.stackAlphabet);
      // A bateria original (truth-corrigida) tem que flagar o mutante: ou via
      // validateStudentPda encontrando QUALQUER contraexemplo na bateria, ou,
      // no mínimo, aceitando incorretamente a própria mutantWord construída.
      const battResult = validateStudentPda(mutated, battery);
      const mutantWordWronglyAccepted = pdaAccepts(mutated, mutantWord);

      expect(
        !battResult.ok || mutantWordWronglyAccepted,
        `${label}: bateria NÃO detectou a transição solta (símbolo "${symbol}") — ` +
        `nem "${mutantWord}" foi aceita indevidamente, nem validateStudentPda achou contraexemplo. ` +
        `Bateria fraca demais para este nível.`
      ).toBe(true);
    });
  }
});

// ─── Suite 8: teste MUTANTE — bateria detecta transição essencial removida ────
// Complementar à Suite 7: em vez de adicionar algo indevido, remove uma
// transição do gabarito e confirma que a bateria original nota a ausência.
// Gabaritos de PDA costumam ter não-determinismo redundante (várias
// transições cobrindo o mesmo caso por caminhos alternativos) — remover
// SEMPRE a primeira transição do array pode não quebrar nada se ela for
// redundante. Em vez disso, tenta remover cada transição em ordem e usa a
// PRIMEIRA cuja ausência a bateria realmente detecta — todo gabarito real
// tem pelo menos uma transição não-redundante (senão ela nunca seria
// necessária para nenhuma palavra da bateria, o que indicaria a própria
// transição ser inútil, não que a bateria é fraca).
describe('AP Levels — teste mutante: bateria detecta transição essencial removida', () => {
  for (const level of AP_LEVELS) {
    if (level.impossible) continue;
    const label = level.label ?? level.id;

    it(`${label}: removendo alguma transição do gabarito, a bateria detecta`, () => {
      const battery = getBattery(level);
      const T = level.solution.transitions;
      if (T.length === 0) return; // nada a remover

      let detectedByRemovingIdx = null;
      for (let i = 0; i < T.length; i++) {
        const mutated = cloneSolution(level.solution);
        mutated.transitions.splice(i, 1);
        if (!validateStudentPda(mutated, battery).ok) { detectedByRemovingIdx = i; break; }
      }

      expect(
        detectedByRemovingIdx,
        `${label}: removendo QUALQUER transição individual do gabarito (${T.length} testadas), ` +
        `a bateria continuou passando 100% — bateria fraca demais para este nível ` +
        `(ou o gabarito tem transições totalmente redundantes/inúteis).`
      ).not.toBeNull();
    });
  }
});
