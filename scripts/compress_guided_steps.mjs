// ─── compress_guided_steps.mjs ────────────────────────────────────────────
// Comprime guidedLesson.steps nos arquivos de nível de MT (transdutora e
// reconhecedora): quando stateUpdate.nodes ou .transitions é byte-a-byte
// idêntico ao passo anterior, salva a string "=" no lugar do array inteiro.
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

// Acha o índice logo após o `]` que fecha o array iniciado em `openIdx`
// (contando colchetes, ciente de strings/escapes pra ignorar `[`/`]` dentro
// de valores de texto).
function findArrayEnd(text, openIdx) {
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
    if (c === '[') depth++;
    else if (c === ']') { depth--; if (depth === 0) return i + 1; }
  }
  throw new Error('Colchete de fechamento não encontrado');
}

// Localiza, em ordem, cada `"nodes": [...]` / `"transitions": [...]` do
// texto-fonte (mesma ordem em que aparecem nos objetos JS reais — stateUpdate
// é sempre { nodes, transitions }) e monta a lista de substituições pros
// campos idênticos ao passo anterior.
function buildReplacements(src, steps) {
  const fields = ['nodes', 'transitions'];
  const replacements = [];
  const prev = { nodes: undefined, transitions: undefined };
  let searchFrom = 0;
  let compressedCount = 0;

  for (let i = 0; i < steps.length; i++) {
    const su = steps[i]?.stateUpdate;
    if (!su) continue;
    for (const field of fields) {
      const arrKey = `"${field}": [`;
      const idx = src.indexOf(arrKey, searchFrom);
      // Só localizável se o passo salva o campo como array JSON literal — nem
      // todo arquivo usa esse formato: alguns níveis (L1/L2/L10) já são
      // compactos por natureza, com stateUpdate referenciando variáveis JS
      // compartilhadas (ex.: `nodes: N_01`) em vez de repetir o JSON. Nesses
      // casos não há nada a comprimir por texto — pula o arquivo inteiro.
      if (idx === -1) return { replacements: [], compressedCount: 0, notLiteralFormat: true };
      const openBracket = idx + arrKey.length - 1;
      const end = findArrayEnd(src, openBracket);
      searchFrom = end;

      const actualJSON = stableStringify(su[field] ?? []);
      if (prev[field] !== undefined && stableStringify(prev[field]) === actualJSON) {
        replacements.push({ start: idx + `"${field}": `.length, end, replacement: '"="' });
        compressedCount++;
      }
      prev[field] = su[field] ?? [];
    }
  }
  return { replacements, compressedCount };
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
  const originalSteps = mod?.default?.guidedLesson?.steps;
  if (!originalSteps || originalSteps.length === 0) continue;

  let replacements, compressedCount, notLiteralFormat;
  try {
    ({ replacements, compressedCount, notLiteralFormat } = buildReplacements(src, originalSteps));
  } catch (err) {
    console.error(`✗ ${path.relative(root, file)}: ERRO ao localizar campos — ${err.message}`);
    process.exitCode = 1;
    continue;
  }
  if (notLiteralFormat || replacements.length === 0) continue; // nada a comprimir (já compacto ou sem passos idênticos)

  const newSrc = applyReplacements(src, replacements);

  if (dryRun) {
    console.log(`(dry-run) ${path.relative(root, file)}: ${compressedCount} passos comprimíveis, ${(src.length/1024).toFixed(0)}KB → ${(newSrc.length/1024).toFixed(0)}KB`);
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
  console.log(`✓ ${path.relative(root, file)}: ${compressedCount} passos comprimidos, ${(src.length/1024).toFixed(0)}KB → ${(newSrc.length/1024).toFixed(0)}KB`);
}

console.log(`\n${filesChanged} arquivo(s) ${dryRun ? 'seriam alterados' : 'alterados'}. Total: ${(totalBefore/1024/1024).toFixed(2)}MB → ${(totalAfter/1024/1024).toFixed(2)}MB`);
if (dryRun) console.log('(--dry-run: nenhum arquivo foi escrito de verdade)');
