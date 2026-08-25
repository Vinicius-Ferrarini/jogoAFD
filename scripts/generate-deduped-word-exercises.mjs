// ─── generate-deduped-word-exercises.mjs ──────────────────────────────────────
// Roda 1x manualmente (não faz parte do build nem do runtime do app) para
// pré-computar quais níveis AFD/AP/MT-Recon têm a MESMA linguagem normalizada
// que outro nível (cross-módulo ou dentro do mesmo módulo) e gera um arquivo
// estático (dedupedLevelIds.js) listando os ids a EXCLUIR do minigame "Menor
// Palavra" — ver docs/MENOR_PALAVRA_MINIGAME.md, Fase 4.
//
// Por quê pré-computado em vez de calculado em runtime: comparar ~90+
// exercícios par-a-par toda vez que o minigame abre seria caro e, pior, o
// MT-Recon é lazy-loaded (cada nível só carrega sob demanda) — calcular o
// dedupe em runtime forçaria carregar TODOS os níveis MT-Recon de uma vez,
// anulando essa otimização. Rodando 1x aqui (Node, fora do app) não tem esse
// problema: paga o custo de carregar tudo uma única vez, offline.
//
// Reexecutar sempre que níveis forem adicionados/editados nos 3 módulos.
//
// Uso: node scripts/generate-deduped-word-exercises.mjs

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

function normalizeLanguage(text) {
  if (!text) return '';
  let s = text.trim();
  s = s.replace(/^L\s*=\s*/, '');
  const SUPERSCRIPT_MAP = {
    '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵',
    '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹',
    n: 'ⁿ', m: 'ᵐ', p: 'ᵖ', q: 'q', r: 'ʳ', s: 'ˢ', t: 'ᵗ', u: 'ᵘ',
    k: 'ᵏ', i: 'ⁱ', j: 'ʲ',
  };
  s = s.replace(/\^([0-9a-zA-Z]+)/g, (_, token) => [...token].map(ch => SUPERSCRIPT_MAP[ch] ?? ch).join(''));
  s = s.replace(/>=/g, '≥').replace(/<=/g, '≤').replace(/!=/g, '≠');
  s = s.replace(/\s+/g, ' ').trim();
  s = s.replace(/\{\s+/g, '{').replace(/\s+\}/g, '}');
  return s;
}

function extractField(dir, fieldRegex, idFromFile) {
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.js') && f !== 'index.js');
  const out = [];
  for (const f of files) {
    const content = fs.readFileSync(path.join(dir, f), 'utf8');
    const m = content.match(fieldRegex);
    const impossible = /impossible:\s*true/.test(content);
    if (m) out.push({ file: f, raw: m[1], id: idFromFile(f, content), impossible });
  }
  return out;
}

// AFD: id numérico real do campo `id:` (não o nome do arquivo — ex.: L35_ii tem id 3502).
function afdIdFromContent(content) {
  const m = content.match(/id:\s*(\d+)/);
  return m ? `afd-${m[1]}` : null;
}
// AP: nome do arquivo é o próprio id (L1.js → L1).
function apIdFromFile(file) {
  return `ap-${file.replace(/\.js$/, '')}`;
}
// MT-Recon: idem AP.
function mtReconIdFromFile(file) {
  return `mt-recon-${file.replace(/\.js$/, '').replace(/^L/, '')}`;
}

// L1-L4 do AFD são HIDDEN_LEVELS (ver src/levels.js) — não são fases jogáveis
// em nenhum lugar do jogo, então também ficam fora do minigame.
const AFD_HIDDEN_IDS = new Set([1, 2, 3, 4]);

// Exclusões conhecidas de inconsistência de dados (ver fromAFD.js/fromAP.js/
// fromMTRecon.js — mesma guarda "checkWord(shortestWord) deve ser true" que
// os adaptadores aplicam em runtime, replicada aqui só pra contagem ficar
// exata sem precisar rodar os adaptadores reais via bundler dentro do script
// Node). Se um novo caso desses aparecer, os adaptadores excluem sozinhos em
// runtime (com console.warn) — só o TOTAL exibido no menu ficaria 1 a mais
// até esta lista ser atualizada. Achado real nesta conversa: afd-50 (L50).
const KNOWN_DATA_INCONSISTENCY_IDS = new Set(['afd-50']);

const afd = extractField(
  path.join(ROOT, 'src/levels_data/afd'), /formula:\s*"([^"]*)"/,
  (_, content) => afdIdFromContent(content),
).filter(x => x.id && !x.impossible && !AFD_HIDDEN_IDS.has(Number(x.id.replace('afd-', ''))));

// language pode vir com aspas simples (padrão comum) OU duplas (achado real:
// L5/L8/L9 do MT-Recon são gerados num formato JSON-like com aspas duplas —
// sem aceitar as duas formas, esses 3 níveis silenciosamente sumiam da
// contagem, causando o drift pego pelo teste em wordExercisesAdapters.test.js).
const LANGUAGE_FIELD_RE = /"?language"?:\s*"([^"]*)"|"?language"?:\s*'([^']*)'/;
function extractLanguage(content) {
  const m = content.match(LANGUAGE_FIELD_RE);
  return m ? [m[1] ?? m[2]] : null;
}
function extractFieldEitherQuote(dir, idFromFile) {
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.js') && f !== 'index.js');
  const out = [];
  for (const f of files) {
    const content = fs.readFileSync(path.join(dir, f), 'utf8');
    const raw = extractLanguage(content);
    const impossible = /impossible:\s*true/.test(content);
    if (raw) out.push({ file: f, raw: raw[0], id: idFromFile(f, content), impossible });
  }
  return out;
}

const ap = extractFieldEitherQuote(
  path.join(ROOT, 'src/levels_data/ap'),
  (file) => apIdFromFile(file),
).filter(x => !x.impossible);

const mtRecon = extractFieldEitherQuote(
  path.join(ROOT, 'src/levels_data/mt-recon'),
  (file) => mtReconIdFromFile(file),
).filter(x => !x.impossible);

const all = [
  ...afd.map(x => ({ ...x, mod: 'afd' })),
  ...ap.map(x => ({ ...x, mod: 'ap' })),
  ...mtRecon.map(x => ({ ...x, mod: 'mt-recon' })),
];

const normalized = all.map(item => ({ ...item, normalized: normalizeLanguage(item.raw) }));

// Agrupa por linguagem normalizada; ordena cada grupo por prioridade de
// módulo (afd > ap > mt-recon) e por id, mantém o 1º como "vencedor" (fica
// visível no minigame), os demais entram na lista de exclusão.
const MODULE_PRIORITY = { afd: 0, ap: 1, 'mt-recon': 2 };
const groups = new Map();
for (const item of normalized) {
  if (!groups.has(item.normalized)) groups.set(item.normalized, []);
  groups.get(item.normalized).push(item);
}

const dedupedOut = []; // { excludedId, keptId, language }
for (const [norm, items] of groups) {
  if (items.length < 2) continue;
  const sorted = [...items].sort((a, b) =>
    (MODULE_PRIORITY[a.mod] - MODULE_PRIORITY[b.mod]) || a.id.localeCompare(b.id)
  );
  const [kept, ...rest] = sorted;
  for (const r of rest) {
    dedupedOut.push({ excludedId: r.id, keptId: kept.id, language: norm });
  }
}

const excludedIds = dedupedOut.map(d => d.excludedId).sort();

const outPath = path.join(ROOT, 'src/modules/shared/wordExercises/dedupedLevelIds.js');
const fileContent = `// ─── dedupedLevelIds.js — GERADO por scripts/generate-deduped-word-exercises.mjs
// NÃO editar manualmente. Reexecute o script sempre que níveis de AFD/AP/
// MT-Recon forem adicionados ou tiverem sua linguagem alterada.
// Gerado em: ${new Date().toISOString().slice(0, 10)}
//
// Lista de exercícios EXCLUÍDOS do minigame "Menor Palavra" por terem a
// mesma linguagem normalizada que outro exercício já incluído (dedupe
// cross-módulo e intra-módulo — ver docs/MENOR_PALAVRA_MINIGAME.md, Fase 4).
// Critério de desempate: prioridade de módulo afd > ap > mt-recon, depois id.

export const EXCLUDED_WORD_EXERCISE_IDS = new Set(${JSON.stringify(excludedIds, null, 2)});

// Para o relatório da Fase 7 (o que foi unificado com o quê) — não usado em
// runtime pelo app, só documentação/depuração.
export const DEDUPE_REPORT = ${JSON.stringify(dedupedOut, null, 2)};
`;

fs.writeFileSync(outPath, fileContent, 'utf8');

// Total final = tudo que não é impossible/hidden, menos dedupe, menos as
// inconsistências de dados conhecidas (afd-50). Usado só para o denominador
// cosmético "X/Y ⭐" no card do menu principal (App.jsx) — não precisa ser
// 100% exato em tempo real (os adaptadores reais, em runtime, são a fonte de
// verdade de fato; este número é uma aproximação leve para não ter que
// importar os adaptadores pesados no bundle sempre-carregado do App.jsx).
const totalCount = all.length - excludedIds.length - KNOWN_DATA_INCONSISTENCY_IDS.size;

const countOutPath = path.join(ROOT, 'src/modules/shared/wordExercises/wordExerciseCount.js');
const countFileContent = `// ─── wordExerciseCount.js — GERADO por scripts/generate-deduped-word-exercises.mjs
// NÃO editar manualmente. Contagem LEVE (só um número) do total de
// exercícios do minigame "Menor Palavra", para o card do menu principal
// (App.jsx, sempre carregado) mostrar "X/Y ⭐" sem precisar importar os
// adaptadores pesados (fromAFD/fromAP puxam AFD_LEVELS/AP_LEVELS eager).
// Gerado em: ${new Date().toISOString().slice(0, 10)}
export const TOTAL_WORD_EXERCISE_COUNT = ${totalCount};
`;
fs.writeFileSync(countOutPath, countFileContent, 'utf8');

console.log(`AFD: ${afd.length}, AP: ${ap.length}, MT-Recon: ${mtRecon.length} (após excluir impossible/hidden)`);
console.log(`Grupos com duplicata: ${dedupedOut.length > 0 ? [...new Set(dedupedOut.map(d => d.language))].length : 0}`);
console.log(`Exercícios excluídos por dedupe: ${excludedIds.length}`);
console.log(`Exercícios excluídos por inconsistência de dados: ${KNOWN_DATA_INCONSISTENCY_IDS.size}`);
console.log(`Total final: ${totalCount}`);
console.log('');
for (const d of dedupedOut) {
  console.log(`  ${d.excludedId} (dup de ${d.keptId}) — "${d.language}"`);
}
console.log(`\nEscrito em ${path.relative(ROOT, outPath)}`);
console.log(`Escrito em ${path.relative(ROOT, countOutPath)}`);
