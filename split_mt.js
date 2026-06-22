#!/usr/bin/env node
// Splits src/modules/mt/levels_mt.js into per-level files under src/levels_data/mt/
// Run once: node split_mt.js

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SRC  = join(__dirname, 'src/modules/mt/levels_mt.js');
const DEST = join(__dirname, 'src/levels_data/mt');

mkdirSync(DEST, { recursive: true });

const src = readFileSync(SRC, 'utf8');
const lines = src.split('\n');

// ── 1. Separate the preamble (constants block) from the MT_LEVELS array ──────
const defLineIdx = lines.findIndex(l => l.startsWith('export const MT_LEVELS'));
if (defLineIdx === -1) throw new Error('Could not find MT_LEVELS declaration');

const preamble = lines.slice(0, defLineIdx).join('\n');

// ── 2. Extract individual level objects from MT_LEVELS array ─────────────────
// Strategy: find each top-level `  {` inside the array and track brace depth.
const arrayLines = lines.slice(defLineIdx + 1); // everything after 'export const MT_LEVELS = ['

const levelChunks = []; // array of raw string chunks
let chunk = [];
let depth = 0;
let inLevel = false;

for (const line of arrayLines) {
  const open  = (line.match(/\{/g) || []).length;
  const close = (line.match(/\}/g) || []).length;

  if (!inLevel && line.trimStart().startsWith('{')) {
    inLevel = true;
    depth = 0;
  }

  if (inLevel) {
    chunk.push(line);
    depth += open - close;
    if (depth <= 0) {
      // strip trailing comma and ]; noise
      const text = chunk.join('\n').replace(/,\s*$/, '').trim();
      levelChunks.push(text);
      chunk = [];
      inLevel = false;
    }
  }
}

console.log(`Found ${levelChunks.length} levels.`);

// ── 3. Split preamble constants by level ─────────────────────────────────────
// L1 uses unprefixed names; L2-L7 use L2_, L3_, … prefixes.
// We split on the comment markers "// ── L2:", "// ── L3:", …

const levelPreambles = {};

// Everything before the first "// ── L2:" belongs to L1
const l2CommentIdx = preamble.indexOf('// ── L2:');
levelPreambles[1] = l2CommentIdx === -1 ? preamble : preamble.slice(0, l2CommentIdx).trimEnd();

for (let n = 2; n <= 7; n++) {
  const startTag = `// ── L${n}:`;
  const endTag   = n < 7 ? `// ── L${n + 1}:` : '// ── Definição';
  const start = preamble.indexOf(startTag);
  const end   = n < 7 ? preamble.indexOf(endTag) : preamble.length;
  levelPreambles[n] = start === -1 ? '' : preamble.slice(start, end).trimEnd();
}

// ── 4. Detect `id` field of each level chunk to map chunk→level number ───────
function getLevelNum(chunk) {
  const m = chunk.match(/id:\s*['"]MT_L(\d+)['"]/);
  return m ? parseInt(m[1], 10) : null;
}

// ── 5. Write individual level files ──────────────────────────────────────────
const written = [];

for (const chunk of levelChunks) {
  const n = getLevelNum(chunk);
  if (n === null) { console.warn('Skipping chunk with no MT_Lx id'); continue; }

  const constants = (levelPreambles[n] || '').trim();

  // Strip any leading file-header comment block from L1 preamble
  // (the "// ─── Níveis do Módulo MT …" block is not needed in split files)
  const cleanConstants = constants
    .replace(/^\/\/ ─+[^\n]*\n(\/\/[^\n]*\n)*/gm, s => {
      // keep level-specific section headers (// ── L2: …) but drop file-level ones
      return s.startsWith('// ── L') ? s : '';
    })
    .trim();

  const body = [
    cleanConstants,
    '',
    `const MT_L${n} = ${chunk};`,
    '',
    `export default MT_L${n};`,
  ].filter((l, i, arr) => !(l === '' && arr[i - 1] === '')).join('\n');

  const outPath = join(DEST, `L${n}.js`);
  writeFileSync(outPath, body + '\n', 'utf8');
  written.push(n);
  console.log(`  Wrote ${outPath}`);
}

// ── 6. Write index.js ─────────────────────────────────────────────────────────
const imports = written.map(n => `import MT_L${n} from './L${n}.js';`).join('\n');
const array   = written.map(n => `  MT_L${n},`).join('\n');
const index   = `${imports}\n\nexport const MT_LEVELS = [\n${array}\n];\n`;

const indexPath = join(DEST, 'index.js');
writeFileSync(indexPath, index, 'utf8');
console.log(`  Wrote ${indexPath}`);
console.log('Done.');
