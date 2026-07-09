// scripts/validate_levels.js
// Valida todos os níveis AFD: grafo, guidedLesson, palavras, textos.
// Uso: node scripts/validate_levels.js

import { AFD_LEVELS } from '../src/levels_data/afd/index.js';

const GAME_LEVELS = AFD_LEVELS;

// ── Helpers ────────────────────────────────────────────────────────────────

const LAMBDA_VARIANTS = new Set(['λ', 'Î»', '', 'null', 'vazio', 'Λ']);

function normalizeWord(word) {
  return LAMBDA_VARIANTS.has(word) ? '' : word;
}

function stripHtml(html) {
  return (html ?? '').replace(/<[^>]+>/g, '').replace(/&[a-z]+;/gi, ' ').trim();
}

function levelAccepts(level, rawWord) {
  const word = normalizeWord(rawWord);
  if (typeof level.validate === 'function') return level.validate(word);
  if (level.regex instanceof RegExp) return level.regex.test(word);
  return null; // sem validador — skip
}

function simulateDFA(nodes, transitions, rawWord) {
  const word = normalizeWord(rawWord);
  const initial = nodes.find(n => n.isInitial);
  if (!initial) return false;
  let cur = initial.id;
  for (const ch of word) {
    const tr = transitions.find(t =>
      t.from === cur &&
      t.symbol.split(',').map(s => s.trim()).includes(ch)
    );
    if (!tr) return false;
    cur = tr.to;
  }
  return !!nodes.find(n => n.id === cur)?.isFinal;
}

// ── Thresholds ──────────────────────────────────────────────────────────────
const MAX_TEXT_CHARS = 220;   // após remover HTML
const MIN_NODE_DIST  = 8;     // % de canvas — menor que isso é sobreposição provável

// ── Validação ───────────────────────────────────────────────────────────────

let totalErrors = 0;
let totalWarnings = 0;
let levelsWithIssues = 0;

for (const level of GAME_LEVELS) {
  const label = level.label ?? `L${level.id}`;
  const errors = [];
  const warnings = [];

  // 1. boardWords devem ser aceitas pelo validador do nível
  if (level.boardWords?.length && (level.regex || level.validate)) {
    for (const word of level.boardWords) {
      const result = levelAccepts(level, word);
      if (result === false) {
        errors.push(`boardWords: "${word}" NÃO é aceita pelo regex/validate`);
      }
    }
  }

  // 2. acceptedWords / rejectedWords
  if (level.regex || level.validate) {
    for (const w of (level.acceptedWords ?? [])) {
      if (levelAccepts(level, w) === false) {
        errors.push(`acceptedWords: "${w}" deveria ser aceita mas regex rejeita`);
      }
    }
    for (const w of (level.rejectedWords ?? [])) {
      if (levelAccepts(level, w) === true) {
        errors.push(`rejectedWords: "${w}" deveria ser rejeitada mas regex aceita`);
      }
    }
  }

  // 3. guidedLesson
  const gl = level.guidedLesson;
  const isV3 = !!(level.boardWords?.length); // V3 = tem boardWords; V1/V2 antigo = não tem
  if (gl?.length > 0) {

    if (isV3) {
      // 3a. Passo 0 deve começar com boardDoneUpTo = -1
      if (gl[0].boardDoneUpTo !== -1) {
        errors.push(`guidedLesson[0].boardDoneUpTo = ${gl[0].boardDoneUpTo} (esperado -1)`);
      }

      // 3b. boardDoneUpTo deve ser não-decrescente
      for (let i = 1; i < gl.length; i++) {
        if (gl[i].boardDoneUpTo < gl[i - 1].boardDoneUpTo) {
          errors.push(
            `guidedLesson[${i}]: boardDoneUpTo desceu ` +
            `(${gl[i - 1].boardDoneUpTo} → ${gl[i].boardDoneUpTo})`
          );
        }
      }

      // 3c. Último passo deve marcar todas as palavras como done
      const last = gl[gl.length - 1];
      if (last.boardDoneUpTo !== level.boardWords.length) {
        errors.push(
          `Último passo boardDoneUpTo = ${last.boardDoneUpTo}, ` +
          `esperado ${level.boardWords.length} (boardWords.length)`
        );
      }
    }

    // 3d. Validar cada stateUpdate com nós
    let lastNodes = [];
    let lastTransitions = [];

    for (let i = 0; i < gl.length; i++) {
      const su = gl[i].stateUpdate;
      if (!su || su.nodes.length === 0) continue;  // spotlight vazio — ok

      const { nodes, transitions } = su;
      lastNodes = nodes;
      lastTransitions = transitions;

      // Exatamente 1 nó inicial
      const initials = nodes.filter(n => n.isInitial);
      if (initials.length !== 1) {
        errors.push(`guidedLesson[${i}]: ${initials.length} nó(s) inicial(ais) (esperado 1)`);
      }

      // Pelo menos 1 nó final — só obrigatório em formato V3
      // (formato antigo mostra construção passo a passo, estados intermediários podem não ter final)
      if (isV3 && !nodes.some(n => n.isFinal)) {
        errors.push(`guidedLesson[${i}]: nenhum nó final`);
      }

      // Transições referenciam nós existentes
      const nodeIds = new Set(nodes.map(n => n.id));
      for (const t of transitions) {
        if (!nodeIds.has(t.from)) {
          errors.push(`guidedLesson[${i}]: transição "${t.from}→${t.to}" — "${t.from}" não existe nos nodes`);
        }
        if (!nodeIds.has(t.to)) {
          errors.push(`guidedLesson[${i}]: transição "${t.from}→${t.to}" — "${t.to}" não existe nos nodes`);
        }
      }

      // Nós muito próximos (sobreposição visual)
      for (let a = 0; a < nodes.length; a++) {
        for (let b = a + 1; b < nodes.length; b++) {
          const dx = nodes[a].x - nodes[b].x;
          const dy = nodes[a].y - nodes[b].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MIN_NODE_DIST) {
            warnings.push(
              `guidedLesson[${i}]: nós "${nodes[a].id}" e "${nodes[b].id}" sobrepostos ` +
              `(dist=${dist.toFixed(1)}%)`
            );
          }
        }
      }
    }

    // 3e. Grafo do último passo deve aceitar todos os boardWords
    if (level.boardWords?.length && lastNodes.length > 0) {
      for (const word of level.boardWords) {
        if (!simulateDFA(lastNodes, lastTransitions, word)) {
          errors.push(`Grafo final NÃO aceita boardWord "${word}"`);
        }
      }
    }

    // 3f. Comprimento dos textos das falas
    for (let i = 0; i < gl.length; i++) {
      const plain = stripHtml(gl[i].text);
      if (plain.length > MAX_TEXT_CHARS) {
        warnings.push(
          `guidedLesson[${i}]: texto longo (${plain.length} chars) — ` +
          `"${plain.slice(0, 70)}..."`
        );
      }
    }

    // 3g. Padrão V3: total de passos deve ser 1 + 2N (N = grupos de palavras)
    //     Apenas aviso se discrepar muito (linguagens com grupos agrupados podem variar)
    if (isV3) {
      const expected = 1 + 2 * level.boardWords.length;
      if (gl.length !== expected) {
        const diff = gl.length - expected;
        // Toleramos diferença por agrupamentos de palavras, mas alertamos se muito longe
        if (Math.abs(diff) > level.boardWords.length) {
          warnings.push(
            `guidedLesson: ${gl.length} passos, padrão V3 esperaria ~${expected} ` +
            `(1 intro + 2×${level.boardWords.length} palavras)`
          );
        }
      }
    }
  }

  // ── Reportar ──────────────────────────────────────────────────────────────
  if (errors.length > 0 || warnings.length > 0) {
    levelsWithIssues++;
    const tag = errors.length > 0 ? '❌' : '⚠️ ';
    console.log(`\n${tag} ${label} (id=${level.id})`);
    for (const e of errors)   console.log(`     ❌ ${e}`);
    for (const w of warnings) console.log(`     ⚠️  ${w}`);
    totalErrors   += errors.length;
    totalWarnings += warnings.length;
  }
}

// ── Sumário ────────────────────────────────────────────────────────────────
console.log('\n' + '═'.repeat(55));
console.log(`  Níveis verificados : ${GAME_LEVELS.length}`);
console.log(`  Níveis com issues  : ${levelsWithIssues}`);
console.log(`  Erros críticos ❌  : ${totalErrors}`);
console.log(`  Avisos         ⚠️   : ${totalWarnings}`);
console.log('═'.repeat(55));
if (totalErrors === 0) {
  console.log('  ✅ Nenhum erro crítico encontrado!');
}
