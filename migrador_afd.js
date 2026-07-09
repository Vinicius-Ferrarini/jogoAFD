#!/usr/bin/env node
// migrador_afd.js
// Lê os XMLs do JFLAP em gabaritos_jflap/afd/, extrai nodes/transitions,
// e gera src/levels_data/afd/graphs_from_jflap.js com todos os grafos.
// NÃO modifica nenhum arquivo .jsx, .css ou os L*.js existentes.

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);

const XML_DIR = path.join(__dirname, 'gabaritos_jflap', 'afd');
const OUT_DIR = path.join(__dirname, 'src', 'levels_data', 'afd');

// Mapeamento: nome-do-arquivo-JFLAP → chave em LEVEL_GRAPHS / id do nível
// L35 foi dividido em dois exercícios no jogo:
//   L35-ii.xml → nível 35 (L35a)
//   L35-jj.xml → nível 36 (L35b)
// A partir de L36.xml, a numeração interna é +1 em relação ao arquivo.
const FILE_MAP = {
  'L01':    1,  'L02':  2,  'L03':  3,  'L04':  4,  'L05':  5,
  'L06':    6,  'L07':  7,  'L08':  8,  'L09':  9,  'L10': 10,
  'L11':   11,  'L12': 12,  'L13': 13,  'L14': 14,  'L15': 15,
  'L16':   16,  'L17': 17,  'L18': 18,  'L19': 19,  'L20': 20,
  'L21':   21,  'L22': 22,  'L23': 23,  'L24': 24,  'L25': 25,
  'L26':   26,  'L27': 27,  'L28': 28,  'L29': 29,  'L30': 30,
  'L31':   31,  'L32': 32,  'L33': 33,  'L34': 34,
  'L35-ii': 35, 'L35-jj': 36,
  'L36': 37, 'L37': 38, 'L38': 39, 'L39': 40,
  'L40': 41, 'L41': 42, 'L42': 43, 'L43': 44, 'L44': 45,
  'L45': 46, 'L46': 47, 'L47': 48, 'L48': 49, 'L49': 50,
  'L50': 51, 'L51': 52, 'L52': 53, 'L53': 54,
};

// ─── Parser XML via Regex ────────────────────────────────────────────────────
function parseJFLAP(xml) {
  const text = xml.replace(/\r/g, '').replace(/&#13;/g, '');

  const stateRx = /<state\s+id="(\d+)"\s+name="([^"]+)"[^>]*>([\s\S]*?)<\/state>/g;
  const idToName = {};
  const nodes = [];
  let m;

  while ((m = stateRx.exec(text)) !== null) {
    const numId     = m[1];
    const name      = m[2];
    const body      = m[3];
    const isInitial = /<initial\s*\/>/.test(body);
    const isFinal   = /<final\s*\/>/.test(body);
    const xMatch    = body.match(/<x>([\d.]+)<\/x>/);
    const yMatch    = body.match(/<y>([\d.]+)<\/y>/);
    const x         = xMatch ? Math.round(parseFloat(xMatch[1])) : 100;
    const y         = yMatch ? Math.round(parseFloat(yMatch[1])) : 100;
    idToName[numId] = name;
    nodes.push({ id: name, x, y, isInitial, isFinal });
  }

  const transRx = /<transition>\s*<from>(\d+)<\/from>\s*<to>(\d+)<\/to>\s*<read>([\s\S]*?)<\/read>\s*<\/transition>/g;
  const grouped = {};

  while ((m = transRx.exec(text)) !== null) {
    const fromName = idToName[m[1]];
    const toName   = idToName[m[2]];
    const symbol   = m[3].trim();
    const key      = `${fromName}→${toName}`;
    if (!grouped[key]) grouped[key] = { from: fromName, to: toName, symbols: [] };
    if (!grouped[key].symbols.includes(symbol)) grouped[key].symbols.push(symbol);
  }

  const transitions = Object.values(grouped).map(({ from, to, symbols }) => ({
    from,
    to,
    symbol: symbols.sort().join(', '),
  }));

  return { nodes, transitions };
}

// ─── Serializa grafo inline para o arquivo de índice ────────────────────────
function inlineGraph(graph, indent = '    ') {
  const i2 = indent + '  ';
  const nodesStr = graph.nodes
    .map(n => `${i2}{ id: '${n.id}', x: ${n.x}, y: ${n.y}, isInitial: ${n.isInitial}, isFinal: ${n.isFinal} }`)
    .join(',\n');
  const transStr = graph.transitions
    .map(t => `${i2}{ from: '${t.from}', to: '${t.to}', symbol: '${t.symbol}' }`)
    .join(',\n');

  const nb = graph.nodes.length === 0       ? '[]' : `[\n${nodesStr}\n${indent}]`;
  const tb = graph.transitions.length === 0 ? '[]' : `[\n${transStr}\n${indent}]`;

  return `{\n${indent}nodes: ${nb},\n${indent}transitions: ${tb},\n${indent.slice(2)}}`;
}

// ─── Main ────────────────────────────────────────────────────────────────────
function main() {
  const xmlFiles = fs.readdirSync(XML_DIR)
    .filter(f => f.endsWith('.xml'))
    .sort();

  const allGraphs = {}; // levelId → { graph, sourceFile }
  let generated = 0;
  const errors  = [];
  const noMap   = [];

  for (const xmlFile of xmlFiles) {
    const stem    = xmlFile.replace('.xml', '');
    const levelId = FILE_MAP[stem];

    if (levelId === undefined) {
      noMap.push(xmlFile);
      continue;
    }

    const xmlPath = path.join(XML_DIR, xmlFile);
    const xml     = fs.readFileSync(xmlPath, 'utf8');

    let graph;
    try {
      graph = parseJFLAP(xml);
    } catch (e) {
      errors.push(`${xmlFile}: ${e.message}`);
      continue;
    }

    allGraphs[levelId] = { graph, sourceFile: xmlFile };
    generated++;
  }

  // Gera arquivo de índice consolidado graphs_from_jflap.js
  const sortedKeys = Object.keys(allGraphs).map(Number).sort((a, b) => a - b);
  const entries = sortedKeys.map(k => {
    const { graph, sourceFile } = allGraphs[k];
    const label = `L${String(k).padStart(2, '0')}`;
    return `  // ${label} ← ${sourceFile}\n  ${k}: ${inlineGraph(graph)}`;
  });

  const indexContent = [
    '// Grafos dos gabaritos JFLAP — gerado por migrador_afd.js',
    '// Chave = id do nível no jogo. NÃO importar em arquivos React diretamente.',
    '',
    'export const JFLAP_GRAPHS = {',
    entries.join(',\n'),
    '};',
    '',
  ].join('\n');

  const indexPath = path.join(OUT_DIR, 'graphs_from_jflap.js');
  fs.writeFileSync(indexPath, indexContent, 'utf8');

  console.log(`\n✅ ${generated} grafos migrados`);
  console.log(`   Índice consolidado: src/levels_data/afd/graphs_from_jflap.js`);
  if (noMap.length)
    console.log(`⏭  Sem mapeamento (ignorados): ${noMap.join(', ')}`);
  if (errors.length) {
    console.log(`\n⚠️  Erros:`);
    errors.forEach(e => console.log('  -', e));
  }
}

main();
