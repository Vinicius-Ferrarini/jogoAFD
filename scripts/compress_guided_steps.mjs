// ─── compress_guided_steps.mjs ────────────────────────────────────────────
// Comprime guidedLesson.steps nos arquivos de nível de MT (transdutora e
// reconhecedora), em 2 regras (nessa ordem de prioridade):
//  1. stateUpdate.nodes/.transitions byte-a-byte idêntico ao passo anterior
//     → salva a string "=" no lugar do array inteiro.
//  2. Senão, se o array anterior é subconjunto do atual (mesmo conteúdo,
//     possivelmente em posições diferentes — ex.: L11, onde cada um dos 75
//     símbolos do alfabeto vira uma transição self-loop revelada aos poucos,
//     substituindo/deslocando posições) → salva { base: "prev", items: [...] },
//     onde cada item é o ÍNDICE do elemento correspondente no array anterior
//     (número) ou o valor literal de um elemento novo (objeto) — preserva a
//     ORDEM exata do array atual, não é um merge por conjunto.
// Runtime expande de volta via src/modules/mt/utils/expandGuidedSteps.js.
//
// Uso: node scripts/compress_guided_steps.mjs [--dry-run] [caminho-de-um-arquivo]
// Sem argumento de arquivo, roda em todos os arquivos de nível de MT/MT-Recon.
//
// Segurança: guarda os steps ORIGINAIS em memória antes de escrever, faz
// backup .bak em disco, escreve o arquivo comprimido, recarrega o arquivo
// escrito do zero, expande via expandGuidedSteps e compara com o original —
// só apaga o .bak se a comparação bater 100%; senão reverte automaticamente.
import { readFile, writeFile, copyFile, unlink } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { globSync } from 'node:fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const dryRun = process.argv.includes('--dry-run');
const fileArg = process.argv.slice(2).find(a => !a.startsWith('--'));

const targets = fileArg
  ? [path.resolve(root, fileArg)]
  : [
      ...globSync('src/levels_data/mt/L*.js', { cwd: root }).map(p => path.resolve(root, p)),
      ...globSync('src/levels_data/mt-recon/L*.js', { cwd: root }).map(p => path.resolve(root, p)),
    ];

const { expandGuidedSteps } = await import(
  pathToFileURL(path.resolve(root, 'src/modules/mt/utils/expandGuidedSteps.js')).href
);

const stableStringify = (v) => JSON.stringify(v);

// Acha o índice logo após o token de fechamento (`]` ou `}`) que casa com o
// token de abertura em `openIdx` (contando aninhamento de QUALQUER combinação
// de []/{}, ciente de strings/escapes pra ignorar delimitadores dentro de
// valores de texto) — usado tanto pra "[...]" (array literal) quanto pra
// "{...}" (objeto de referência { base: "prev", items: [...] } já gravado
// numa rodada anterior de compressão).
function findMatchingEnd(text, openIdx) {
  const openCh = text[openIdx];
  const closeCh = openCh === '[' ? ']' : '}';
  let depth = 0, inStr = false, esc = false;
  for (let i = openIdx; i < text.length; i++) {
    const c = text[i];
    if (inStr) {
      if (esc) esc = false;
      else if (c === '\\') esc = true;
      else if (c === '"') inStr = false;
      continue;
    }
    if (c === '"') { inStr = true; continue; }
    if (c === '[' || c === '{') depth++;
    else if (c === ']' || c === '}') { depth--; if (depth === 0 && c === closeCh) return i + 1; }
  }
  throw new Error('Delimitador de fechamento não encontrado');
}

// Localiza, a partir de `searchFrom`, o valor gravado para `"field": ` —
// pode ser `[...]` (array literal), `"="` (regra 1, passo idêntico ao
// anterior) ou `{"base":"prev",...}` (regra 2, referências ao anterior).
// Retorna { start, end } dos limites do VALOR (não incluindo a chave).
function locateFieldValue(src, field, searchFrom) {
  const key = `"${field}": `;
  const keyIdx = src.indexOf(key, searchFrom);
  if (keyIdx === -1) return null;
  const valueStart = keyIdx + key.length;
  const firstCh = src[valueStart];
  if (firstCh === '[' || firstCh === '{') {
    return { start: valueStart, end: findMatchingEnd(src, valueStart) };
  }
  if (firstCh === '"') {
    // "=" — string curta, sem aninhamento a resolver.
    const closeQuote = src.indexOf('"', valueStart + 1);
    return { start: valueStart, end: closeQuote + 1 };
  }
  return null;
}

// Tenta expressar `curr` como referências ao array `prev` (mesmo conteúdo,
// possivelmente em posição diferente) + itens novos, preservando a ORDEM
// exata de `curr`. Retorna o array de "items" (número = índice em `prev`,
// objeto = valor literal novo) ou null se `prev` não é subconjunto de `curr`
// (nesse caso a regra 2 não se aplica, cai pro array literal completo).
function buildRefItems(prev, curr) {
  const prevJSONs = prev.map(stableStringify);
  const usedPrev = new Array(prev.length).fill(false);
  const items = [];
  for (const el of curr) {
    const elJSON = stableStringify(el);
    const idx = prevJSONs.findIndex((j, i) => j === elJSON && !usedPrev[i]);
    if (idx !== -1) { usedPrev[idx] = true; items.push(idx); }
    else items.push(el);
  }
  // Só vale a pena (e só é válida a regra) se TODOS os elementos de `prev`
  // foram referenciados — senão não é um caso de "prev ⊆ curr".
  return usedPrev.every(Boolean) ? items : null;
}

// Localiza, em ordem, cada `"nodes": [...]` / `"transitions": [...]` do
// texto-fonte (mesma ordem em que aparecem nos objetos JS reais — stateUpdate
// é sempre { nodes, transitions }) e monta a lista de substituições: regra 1
// (idêntico → "=") tem prioridade; regra 2 (referências ao anterior) é o
// fallback antes de desistir e manter o array literal.
function buildReplacements(src, steps) {
  const fields = ['nodes', 'transitions'];
  const replacements = [];
  const prev = { nodes: undefined, transitions: undefined };
  let searchFrom = 0;
  let identicalCount = 0;
  let refCount = 0;

  for (let i = 0; i < steps.length; i++) {
    const su = steps[i]?.stateUpdate;
    if (!su) continue;
    for (const field of fields) {
      const loc = locateFieldValue(src, field, searchFrom);
      // Só localizável se o passo salva o campo em algum dos formatos
      // conhecidos ([...], "=", {base:"prev",...}) — nem todo arquivo usa
      // JSON literal: alguns níveis (L1/L2/L10) já são compactos por
      // natureza, com stateUpdate referenciando variáveis JS compartilhadas
      // (ex.: `nodes: N_01`) em vez de repetir o JSON. Nesses casos não há
      // nada a comprimir por texto — pula o arquivo inteiro.
      if (loc === null) return { replacements: [], identicalCount: 0, refCount: 0, notLiteralFormat: true };
      searchFrom = loc.end;

      const curr = su[field] ?? []; // já expandido (dado real, não o texto bruto)
      const currJSON = stableStringify(curr);
      const alreadyIdentical = src.slice(loc.start, loc.end) === '"="';
      const alreadyRef = src[loc.start] === '{';

      if (prev[field] !== undefined && stableStringify(prev[field]) === currJSON) {
        if (!alreadyIdentical) replacements.push({ start: loc.start, end: loc.end, replacement: '"="' });
        identicalCount++;
      } else if (prev[field] !== undefined && prev[field].length > 0) {
        const items = buildRefItems(prev[field], curr);
        if (items !== null) {
          const itemsSrc = items.map(it => typeof it === 'number' ? it : stableStringify(it)).join(',');
          const replacement = `{"base":"prev","items":[${itemsSrc}]}`;
          if (!alreadyRef || src.slice(loc.start, loc.end) !== replacement) {
            replacements.push({ start: loc.start, end: loc.end, replacement });
          }
          refCount++;
        }
      }
      prev[field] = curr;
    }
  }
  return { replacements, identicalCount, refCount };
}

function applyReplacements(src, replacements) {
  let out = src;
  for (let i = replacements.length - 1; i >= 0; i--) {
    const r = replacements[i];
    out = out.slice(0, r.start) + r.replacement + out.slice(r.end);
  }
  return out;
}

let totalBefore = 0, totalAfter = 0, filesChanged = 0;

for (const file of targets) {
  const src = await readFile(file, 'utf8');
  const mod = await import(pathToFileURL(file).href + `?orig=${Date.now()}`);
  const rawSteps = mod?.default?.guidedLesson?.steps;
  if (!rawSteps || rawSteps.length === 0) continue;
  // Se o arquivo já foi comprimido numa rodada anterior (regra 1 e/ou 2), os
  // steps crus têm "=" / {base:"prev",...} em vez do array — expande antes de
  // decidir o que mais comprimir, senão buildReplacements vê strings/objetos
  // de referência em vez de arrays reais. A localização textual (src.indexOf)
  // continua batendo porque itera na mesma ordem de passos/campos do arquivo.
  const originalSteps = expandGuidedSteps(rawSteps);

  let replacements, identicalCount, refCount, notLiteralFormat;
  try {
    ({ replacements, identicalCount, refCount, notLiteralFormat } = buildReplacements(src, originalSteps));
  } catch (err) {
    console.error(`✗ ${path.relative(root, file)}: ERRO ao localizar campos — ${err.message}`);
    process.exitCode = 1;
    continue;
  }
  if (notLiteralFormat || replacements.length === 0) continue; // nada a comprimir (já compacto ou sem passos idênticos/subconjunto)

  const newSrc = applyReplacements(src, replacements);
  const summary = `${identicalCount} idêntico(s) + ${refCount} por referência`;

  if (dryRun) {
    console.log(`(dry-run) ${path.relative(root, file)}: ${summary}, ${(src.length/1024).toFixed(0)}KB → ${(newSrc.length/1024).toFixed(0)}KB`);
    totalBefore += src.length; totalAfter += newSrc.length; filesChanged++;
    continue;
  }

  const bakPath = file + '.bak';
  await copyFile(file, bakPath);
  await writeFile(file, newSrc, 'utf8');

  // Validação de round-trip: recarrega o arquivo recém-escrito do zero,
  // expande os steps, e compara com os steps ORIGINAIS (capturados em
  // memória antes de qualquer escrita).
  const reloaded = await import(pathToFileURL(file).href + `?check=${Date.now()}`);
  const expanded = expandGuidedSteps(reloaded.default.guidedLesson.steps);
  const same = stableStringify(expanded) === stableStringify(originalSteps);

  if (!same) {
    console.error(`✗ ${path.relative(root, file)}: VALIDAÇÃO FALHOU — revertendo`);
    await copyFile(bakPath, file);
    await unlink(bakPath);
    process.exitCode = 1;
    continue;
  }

  await unlink(bakPath);
  filesChanged++;
  totalBefore += src.length;
  totalAfter += newSrc.length;
  console.log(`✓ ${path.relative(root, file)}: ${summary}, ${(src.length/1024).toFixed(0)}KB → ${(newSrc.length/1024).toFixed(0)}KB`);
}

console.log(`\n${filesChanged} arquivo(s) ${dryRun ? 'seriam alterados' : 'alterados'}. Total: ${(totalBefore/1024/1024).toFixed(2)}MB → ${(totalAfter/1024/1024).toFixed(2)}MB`);
if (dryRun) console.log('(--dry-run: nenhum arquivo foi escrito de verdade)');
