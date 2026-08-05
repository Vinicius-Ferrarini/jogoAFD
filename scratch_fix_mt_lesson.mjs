// Script genérico: corrige o padrão "Para cobrir todos os casos..." num nível
// de MT (Reconhecedora ou Transdutora). Dois modos:
//   node scratch_fix_mt_lesson.mjs <arquivo.js> <NomeDaConst> <novaPalavra>
//     — troca a ÚLTIMA simulação do storyboard pela nova (cobertura total).
//   node scratch_fix_mt_lesson.mjs <arquivo.js> <NomeDaConst> --insert=<palavra>
//     — mantém a última simulação existente e INSERE uma simulação extra
//       logo depois dela (útil quando a transição faltante só é alcançável
//       por um caso totalmente diferente, ex.: palavra vazia λ).
import { readFileSync, writeFileSync } from 'fs';
import { pathToFileURL } from 'url';
import { resolve } from 'path';

const [, , relPath, varName, wordArg] = process.argv;
if (!relPath || !varName || wordArg === undefined) {
  console.error('uso: node scratch_fix_mt_lesson.mjs <arquivo.js> <NomeDaConst> <novaPalavra|--insert=palavra>');
  process.exit(1);
}
const INSERT_MODE = wordArg.startsWith('--insert=');
const rawWords = INSERT_MODE ? wordArg.slice('--insert='.length) : wordArg;
// Múltiplas palavras separadas por "|" (pipe): encadeia várias simulações numa
// só chamada (necessário quando nenhuma palavra sozinha cobre 100% — ex.:
// dois caminhos de aceitação mutuamente exclusivos, como n=0 vs. m=0 em
// {aⁿbⁿcᵐdᵐ}). "" (vazio) é uma palavra válida na lista. Usa "|" em vez de
// "," pois "," pode ser um símbolo literal do alfabeto (ex.: mt/L11).
const NEW_WORDS = rawWords.split('|');
const path = relPath;

const levelModule = await import(pathToFileURL(resolve(path)).href);
const startMarker = levelModule.default?.startMarker ?? null;

const src = readFileSync(path, 'utf8');
const stepsKeyIdx = src.indexOf('steps:');
const arrStart = src.indexOf('[', stepsKeyIdx);
let depth = 0, arrEnd = -1;
for (let i = arrStart; i < src.length; i++) {
  if (src[i] === '[') depth++;
  else if (src[i] === ']') { depth--; if (depth === 0) { arrEnd = i; break; } }
}
if (arrEnd === -1) throw new Error('não achei o fim do array steps');
const stepsText = src.slice(arrStart, arrEnd + 1);
const steps = JSON.parse(stepsText);
const beforeSteps = src.slice(0, arrStart);
const afterSteps = src.slice(arrEnd + 1);

// Localiza a ÚLTIMA simulação de palavra do storyboard (a que roda logo antes
// do passo genérico problemático) e o próprio passo problemático.
const problemIdx = steps.findIndex(s => s.prof?.message?.includes('cobrir todos os casos'));
if (problemIdx === -1) throw new Error('não achei o passo "cobrir todos os casos" — já corrigido?');
let lastSimStart = -1, lastSimEnd = -1, lastSimWord;
for (let i = problemIdx - 1; i >= 0; i--) {
  if (steps[i].simulateWord !== undefined) {
    if (lastSimEnd === -1) { lastSimEnd = i; lastSimWord = steps[i].simulateWord; }
    if (steps[i].simulateWord === lastSimWord) lastSimStart = i;
    else break;
  } else if (lastSimEnd !== -1) break;
}
if (lastSimStart === -1) throw new Error('não achei a última simulação antes do passo problemático');
console.log('última simulação ("' + lastSimWord + '"):', lastSimStart, '-', lastSimEnd, '| problem step:', problemIdx);

const introIdx = steps.findIndex(s => s.formalIntro);
if (introIdx === -1) throw new Error('não achei formalIntro');
const finalGraph = steps[introIdx - 1].stateUpdate;
const allNodes = finalGraph.nodes;
const allTransitions = finalGraph.transitions;

// Modo normal: parte do que era conhecido ANTES da última simulação (que será
// substituída). Modo --insert: parte do que é conhecido DEPOIS dela (que
// permanece intacta) — a nova simulação começa de onde a última parou.
const baseIdx = INSERT_MODE ? lastSimEnd : lastSimStart - 1;
const knownBefore = new Set(
  steps[baseIdx].stateUpdate.transitions.map(t => `${t.from}|${t.to}|${t.read}|${t.write}|${t.move}`)
);
const nodesBefore = steps[baseIdx].stateUpdate.nodes.map(n => n.id);

function findTransition(state, sym) {
  return allTransitions.find(t => t.from === state && (t.read === sym || (t.read === '' && sym === '□')));
}
function moveLabel(m) { return m === 'R' ? 'DIREITA' : m === 'L' ? 'ESQUERDA' : 'PARADO'; }

// Detecta o estado final (isFinal:true) pra saber quando parar/aceitar.
const finalStateId = allNodes.find(n => n.isFinal)?.id;
if (!finalStateId) throw new Error('nenhum estado final encontrado no grafo');

function traceAndBuildSteps(word, knownSet, knownNodeIds, isFirstWord) {
  const known = knownSet; // mutado in-place — chamador decide se reusa entre palavras
  const knownNodes = knownNodeIds;
  // startMarker (ex.: '<'): algumas MTs Transdutoras esperam um marcador de
  // início-de-fita antes da palavra — mesma convenção de simulateTM real
  // (src/modules/mt/utils/tmAlgorithms.js), senão a simulação diverge do que
  // o jogo mostra de verdade.
  let tape = ['□', '□', ...(startMarker != null ? [startMarker] : []), ...word.split(''), '□', '□'];
  let head = 2;
  let state = 'q0';
  // Usa o estado inicial real do grafo, não hardcoded 'q0'.
  const initId = allNodes.find(n => n.isInitial)?.id;
  if (initId) state = initId;
  const newSteps = [];

  const introMsg = (!INSERT_MODE && lastSimStart === 0 && isFirstWord)
    ? `Vamos testar a palavra "${word}". Começamos no estado inicial ${state}.`
    : word === ''
      ? 'Também precisamos cobrir o caso da palavra vazia (λ) — vamos testar.'
      : `Próxima palavra: "${word}". Mesma máquina, novo teste.`;

  newSteps.push({
    prof: { message: introMsg, mood: 'explicando' },
    stateUpdate: {
      nodes: allNodes.filter(n => knownNodes.has(n.id)),
      transitions: allTransitions.filter(t => known.has(`${t.from}|${t.to}|${t.read}|${t.write}|${t.move}`)),
    },
    simulateWord: word,
    tape: [...tape],
    head,
    activeNode: state,
  });

  for (let guard = 0; guard < 2000; guard++) {
    if (state === finalStateId) {
      newSteps.push({
        prof: { message: `Chegamos em ${state} (estado final) e não há mais nada a ler. Palavra ACEITA! ✓`, mood: 'feliz' },
        stateUpdate: {
          nodes: allNodes.filter(n => knownNodes.has(n.id)),
          transitions: allTransitions.filter(t => known.has(`${t.from}|${t.to}|${t.read}|${t.write}|${t.move}`)),
        },
        simulateWord: word,
        tape: [...tape],
        head,
        activeNode: state,
        status: 'ACCEPTED',
      });
      return newSteps;
    }
    const sym = tape[head] ?? '□';
    const t = findTransition(state, sym);
    if (!t) throw new Error(`sem transição de ${state} lendo '${sym}' (palavra "${word}", passo ${guard})`);
    const key = `${t.from}|${t.to}|${t.read}|${t.write}|${t.move}`;
    const isNew = !known.has(key);
    knownNodes.add(t.from);
    knownNodes.add(t.to);

    if (isNew) {
      newSteps.push({
        prof: {
          message: `Nova regra: em ${t.from}, ao ler '${t.read || '□'}', vamos para ${t.to}, escrevemos '${t.write || '□'}' e movemos à ${moveLabel(t.move)}.`,
          mood: 'explicando',
        },
        stateUpdate: {
          nodes: allNodes.filter(n => knownNodes.has(n.id)),
          transitions: allTransitions.filter(o => known.has(`${o.from}|${o.to}|${o.read}|${o.write}|${o.move}`) || (o.from === t.from && o.to === t.to && o.read === t.read && o.write === t.write && o.move === t.move)),
        },
        simulateWord: word,
        tape: [...tape],
        head,
        activeNode: state,
      });
      known.add(key);
    }

    if (t.write !== '') tape[head] = t.write;
    if (t.move === 'R') head++;
    else if (t.move === 'L') head--;
    state = t.to;
    if (head < 0) { tape.unshift('□'); head = 0; }
    if (head >= tape.length) tape.push('□');

    newSteps.push({
      prof: { message: `Executou: leu '${t.read || '□'}', escreveu '${t.write || '□'}' e moveu. Agora em ${state}.`, mood: 'explicando' },
      stateUpdate: {
        nodes: allNodes.filter(n => knownNodes.has(n.id)),
        transitions: allTransitions.filter(o => known.has(`${o.from}|${o.to}|${o.read}|${o.write}|${o.move}`)),
      },
      simulateWord: word,
      tape: [...tape],
      head,
      activeNode: state,
    });
  }
  throw new Error(`LOOP simulando "${word}"`);
}

const known = new Set(knownBefore);
const knownNodes = new Set(nodesBefore);
let newSimSteps = [];
for (let i = 0; i < NEW_WORDS.length; i++) {
  newSimSteps = newSimSteps.concat(traceAndBuildSteps(NEW_WORDS[i], known, knownNodes, i === 0));
}

const coveredKeys = new Set();
for (const s of newSimSteps) for (const t of s.stateUpdate.transitions) coveredKeys.add(`${t.from}|${t.to}|${t.read}|${t.write}|${t.move}`);
const allKeys = allTransitions.map(t => `${t.from}|${t.to}|${t.read}|${t.write}|${t.move}`);
const missing = allKeys.filter(k => !coveredKeys.has(k));
console.log('missing after new simulation(s):', missing.length, missing);
if (missing.length > 0) throw new Error('novas simulações não cobrem todas as transições — abortando (tente outra(s) palavra(s))');

let rebuilt;
if (INSERT_MODE) {
  // Preserva tudo até o fim da última simulação existente, insere a nova
  // logo em seguida, e só então remove o passo genérico problemático.
  const before = steps.slice(0, lastSimEnd + 1);
  const afterProblem = steps.slice(problemIdx + 1);
  rebuilt = [...before, ...newSimSteps, ...afterProblem];
} else {
  const before = steps.slice(0, lastSimStart);
  const after = steps.slice(lastSimEnd + 1, problemIdx);
  const afterProblem = steps.slice(problemIdx + 1);
  rebuilt = [...before, ...newSimSteps, ...after, ...afterProblem];
}
console.log('old step count:', steps.length, '-> new step count:', rebuilt.length);

const newStepsJson = JSON.stringify(rebuilt, null, 2)
  .split('\n')
  .map((line, i) => (i === 0 ? line : '  ' + line))
  .join('\n');
const out = beforeSteps + newStepsJson + afterSteps;
writeFileSync(path, out, 'utf8');
console.log('wrote', path);
