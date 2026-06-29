/**
 * SOLUÇÃO FINAL: Inserir L35_ii e corrigir L36..L53 rotacionando os CONTEÚDOS completos.
 *
 * Situação ORIGINAL (com bug):
 *   levels_graphs: [35]=1111, [36]=abc-prefixo, [37]=dcba-sufixo, [38]=abcd-ou-dcba, ...
 *   arquivos:
 *     L35.js  id=35 aula:"1111 subpalavra"  grafo:[35] ✓
 *     L36.js  id=36 aula:"abc prefixo"      grafo:[36] ✓ MAS formula="dcba sufixo" e label="L36" (errados)
 *     L37.js  id=37 aula:"dcba sufixo"      grafo:[37] ✓ MAS id/label inconsistentes
 *     ...
 *
 * OBJETIVO:
 *   L35.js   id=35 "1111 subpalavra"      grafo:[35] (sem mudança)
 *   L35_ii   id=36 "abc prefixo"          grafo:[36] (novo, baseado no L36 original corrigido)
 *   L36.js   id=37 "dcba sufixo"          grafo:[37] (conteúdo completo do L37 original, ajuste de label)
 *   L37.js   id=38 "abcd ou dcba"         grafo:[38] (conteúdo completo do L38 original, ajuste de label)
 *   ...
 *   L52.js   id=53 "cada b seguido de c"  grafo:[53] (conteúdo do L53 original, ajuste de label)
 *   L53.js   id=54 "cubo abc"             grafo:[54] (conteúdo do L54 original, ajuste de label)
 *   L54.js   id=54 "cada b seguido de c"  grafo:[54] ← PERMANECE como estava (não muda)
 *
 * ESTRATÉGIA:
 * Para N = 36..52:
 *   L{N}.js (novo) = conteúdo completo do L{N+1}.js original
 *   mas com: function buildLessonL{N+1} → buildLessonL{N}
 *            guidedLesson: buildLessonL{N+1} → buildLessonL{N}
 *            label: "L{N+1}" → "L{N}"  (só o número, não o id)
 *   O id: e LEVEL_GRAPHS[N+1] PERMANECEM iguais ao original L{N+1}
 *   (porque o grafo e id já estão corretos para o nível N+1 no sistema original)
 *
 * ESPERA — isso contradiz. O objetivo é que L36.js use o grafo correto para "dcba sufixo".
 * O grafo correto para "dcba sufixo" está em LEVEL_GRAPHS[37], e o arquivo L37.js original usa [37].
 * Então L36.js (novo) = L37.js original com label "L37"→"L36". ✓
 * Mas o id do L36 (novo) deve ser 37 (para buscar LEVEL_GRAPHS[37]).
 * O L36.js original tinha id=36 (busca LEVEL_GRAPHS[36] = "abc prefixo") ← era o errado.
 *
 * PORTANTO:
 * L35_ii.js: id=36, label="L35_ii", aula e grafo de "abc prefixo" (= L36 original corrigido)
 * L36.js:    id=37, label="L36",    aula e grafo de "dcba sufixo"  (= L37 original ajustado)
 * L37.js:    id=38, label="L37",    aula e grafo de "abcd ou dcba" (= L38 original ajustado)
 * ...
 * L52.js:    id=53, label="L52",    aula e grafo de "cada b→c"     (= L53 original ajustado)
 * L53.js:    id=54, label="L53",    aula e grafo de "cubo abc"      (= L54 original ajustado)
 * L54.js:    id=54, label="L54",    aula "cada b→c" SEM MUDANÇA
 *
 * PROBLEMA: L53 (id=54) e L54 (id=54) conflito!
 *   E L52 (id=53) e L53 original (id=53) — mas L53 original vai ser sobrescrito!
 *   Após o loop L36..L52 que sobrescreve, não há conflito para L36..L52.
 *   Para L53: sobrescrito pelo conteúdo do L54 original (id=54, label="L53").
 *   Para L54: permanece como estava (id=54, label="L54").
 *   CONFLITO: L53 e L54 ambos com id=54!
 *
 * SOLUÇÃO DO CONFLITO:
 *   O L53 (novo) = L54 original tem id=54 e usa grafo[54]="cubo abc".
 *   O L54 (permanece) tem id=54 e usa grafo[54]="cubo abc" (ou "cada b→c" dependendo do bug original).
 *   Na verdade são DOIS EXERCÍCIOS DIFERENTES que estudam a MESMA linguagem diferentemente!
 *   O game usa GAME_LEVELS.findIndex(l => l.id === currentLevel.id) — com id duplicado, findIndex
 *   sempre vai achar o PRIMEIRO. Isso pode confundir a navegação.
 *
 * SOLUÇÃO FINAL DO CONFLITO:
 *   Não rotacionar L53 e L54. Apenas rotacionar L36..L52 (17 arquivos) + criar L35_ii.
 *   O L53 permanece com label="L53" e id=53 e o conteúdo original (uma das linguagens).
 *   O L54 permanece com label="L54" e id=54 e o conteúdo original (a outra).
 *   Isso mantém o status quo de L53/L54 que o usuário não reclamou.
 *
 * VERIFICAÇÃO: O usuário disse "até o L34 pra trás está certo". L53/L54 não foram mencionados.
 * Portanto manteremos L53 e L54 como estão.
 */

import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

const LEVELS_DIR = 'src/levels_data/afd';
const INDEX_FILE  = `${LEVELS_DIR}/index.js`;
const LEVELS_JS   = 'src/levels.js';

// ─── Ler todos os originais ANTES de qualquer modificação ─────────────────────
const originals = {};
for (let n = 36; n <= 53; n++) {
  originals[n] = readFileSync(`${LEVELS_DIR}/L${n}.js`, 'utf8');
}

// ─── Passo 1: Criar L35_ii.js ────────────────────────────────────────────────
// Conteúdo: L36.js original corrigido (fórmula e label)
let src35ii = originals[36];
src35ii = src35ii
  .replace(/function buildLessonL36\(\)/, 'function buildLessonL35ii()')
  .replace(/guidedLesson: buildLessonL36\(\)/, 'guidedLesson: buildLessonL35ii()')
  .replace(/label: "L36"/, 'label: "L35_ii"')
  .replace(/formula: "L = \{w ∈ \{a,b,c,d\}\* \/ w tem dcba como sufixo\}"/,
           'formula: "L = {w ∈ {a,b,c,d}* / w tem abc como prefixo}"')
  .replace(/'L36: toda palavra aceita DEVE começar com "abc"\./,
           "'L35_ii: toda palavra aceita DEVE começar com \"abc\".");

writeFileSync(`${LEVELS_DIR}/L35_ii.js`, src35ii, 'utf8');
console.log('✓ Criado L35_ii.js (id=36, grafo[36]=abc prefixo)');

// ─── Passo 2: Para L36..L52: arquivo N recebe conteúdo COMPLETO do N+1 original ─
// com ajustes de label e função buildLesson
for (let n = 36; n <= 52; n++) {
  const oldN = n + 1;
  const newN = n;
  let src = originals[oldN];

  // Renomear função buildLesson
  src = src
    .replace(new RegExp(`function buildLessonL${oldN}\\(\\)`, 'g'), `function buildLessonL${newN}()`)
    .replace(new RegExp(`guidedLesson: buildLessonL${oldN}\\(\\)`, 'g'), `guidedLesson: buildLessonL${newN}()`);

  // Corrigir label: "L{oldN}" → "L{newN}" (apenas o label numérico, não dentro de textos de tutorial)
  // A linha do export default começa com: export default { id: ...
  // O label aparece como: label: "L{N}"
  src = src.replace(new RegExp(`(label: ")L${oldN}(")`), `$1L${newN}$2`);

  writeFileSync(`${LEVELS_DIR}/L${newN}.js`, src, 'utf8');
  console.log(`✓ L${newN}.js ← L${oldN} original (id=${oldN}, grafo[${oldN}], label=L${newN})`);
}

// ─── Passo 3: Atualizar index.js ─────────────────────────────────────────────
let indexSrc = readFileSync(INDEX_FILE, 'utf8');
if (!indexSrc.includes("L35_ii")) {
  indexSrc = indexSrc.replace(
    "import L36 from './L36.js';",
    "import L35_ii from './L35_ii.js';\nimport L36 from './L36.js';"
  );
  indexSrc = indexSrc.replace('  L35,\n  L36,', '  L35,\n  L35_ii,\n  L36,');
  writeFileSync(INDEX_FILE, indexSrc, 'utf8');
  console.log('✓ index.js: L35_ii adicionado');
}

// ─── Passo 4: Atualizar LEVEL_DIFFICULTY em levels.js ─────────────────────────
// Mapeamento de dificuldades antes do shift:
// id 36='easy'(L36-abc-prefixo), 37='medium'(L37-dcba-sub), 38='hard'(L38-abcd-dcba), ...
// Após o shift:
// id 36 = L35_ii (abc prefixo)  → 'easy'   (igual ao antigo 36)
// id 37 = L36   (dcba sufixo)   → 'easy'   (antigo 36 era 'easy' que era abc prefixo; mas dcba sufixo deveria ser 'easy' também)
// id 38 = L37   (abcd ou dcba)  → 'medium' (antigo 37)
// id 39 = L38   (|a| par |b| ím)→ 'hard'   (antigo 38)
// ...
// id 53 = L52   (????)          → original L52 era 'medium' → agora L52 conteúdo = ex-L53 = 'easy'
// id 53 agora aparece com label L52 mas conteúdo do ex-L53 (id=53, 'easy')
// Mantém: o LEVEL_DIFFICULTY[id] deve refletir a dificuldade do CONTEÚDO, não o label
//
// Após rotação:
//   id=36 (L35_ii, abc-prefixo)  : 'easy'
//   id=37 (L36, dcba-sufixo)     : 'easy'    ← antigo 36
//   id=38 (L37, abcd-dcba-sub)   : 'medium'  ← antigo 37
//   id=39 (L38, par-impar)       : 'hard'    ← antigo 38
//   id=40 (L39, impar-impar)     : 'hard'    ← antigo 39
//   id=41 (L40, a^n b^2m d c^3p) : 'hard'   ← antigo 40
//   id=42 (L41, a(dcb)^n...)     : 'medium'  ← antigo 41
//   id=43 (L42, a^n b^2m cc d^p) : 'medium'  ← antigo 42
//   id=44 (L43, ab subpal cd suf): 'medium'  ← antigo 43
//   id=45 (L44, pref abcd suf dcba):'hard'   ← antigo 44
//   id=46 (L45, pref+sub+suf)    : 'hard'    ← antigo 45
//   id=47 (L46, 8est par abc)    : 'hard'    ← antigo 46
//   id=48 (L47, rev L40)         : 'hard'    ← antigo 47
//   id=49 (L48, zeros par uns ím): 'medium'  ← antigo 48
//   id=50 (L49, expr complexa)   : 'hard'    ← antigo 49
//   id=51 (L50, abc ímpar)       : 'hard'    ← antigo 50
//   id=52 (L51, a^n c+... )      : 'hard'    ← antigo 51
//   id=53 (L52, a^n b^m c^p par) : 'medium'  ← antigo 52
// id 54 e 55 permanecem iguais (L54 e L55 sem mudança)

let levelsSrc = readFileSync(LEVELS_JS, 'utf8');
const oldDiff = `  36:'easy', 37:'medium',38:'hard', 39:'hard', 40:'hard',
  41:'medium',42:'medium',43:'medium',44:'hard',45:'hard',
  46:'hard', 47:'hard', 48:'medium',49:'hard', 50:'hard',
  51:'hard', 52:'medium',53:'easy', 54:'hard', 55:'impossible',`;

const newDiff = `  36:'easy', 37:'easy', 38:'medium',39:'hard', 40:'hard',
  41:'hard', 42:'medium',43:'medium',44:'medium',45:'hard',
  46:'hard', 47:'hard', 48:'hard', 49:'medium',50:'hard',
  51:'hard', 52:'hard', 53:'medium',54:'hard', 55:'impossible',`;

if (levelsSrc.includes(oldDiff)) {
  levelsSrc = levelsSrc.replace(oldDiff, newDiff);
  writeFileSync(LEVELS_JS, levelsSrc, 'utf8');
  console.log('✓ levels.js: LEVEL_DIFFICULTY atualizado');
} else {
  console.log('⚠ levels.js: padrão não encontrado para atualização de dificuldade');
}

console.log('\n✅ Concluído! Execute: npm test');
