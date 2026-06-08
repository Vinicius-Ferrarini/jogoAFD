// AFDPart2.jsx – Grafo → Linguagem  (v2 – comic/gibi style matching AFDPart1)
import { useState, useMemo, useCallback, useRef, useEffect } from 'react';
import './AFDPart1.css';
import './AFDPart2.css';
import { SvgStars, DifficultyLegend } from './SvgStar';
import { GAME_LEVELS, LEVEL_DIFFICULTY, DIFF_COLOR } from '../../levels';
import { LEVEL_GRAPHS } from '../../levels_graphs';
import imgMaurilioSerio      from '../../assets/maurilio1_serio.webp';
import imgMaurilioExplicando from '../../assets/maurilio3_explicando.webp';
import imgBalaoFala          from '../../assets/balao_fala_redondo.webp';

// ── P2 Progress (localStorage, separate from P1) ──────────────────────────────
function getP2Progress() {
  try { return JSON.parse(localStorage.getItem('turinglab_progress_p2') || '{}'); }
  catch { return {}; }
}
function saveP2Progress(d) {
  localStorage.setItem('turinglab_progress_p2', JSON.stringify(d));
}

// ── BFS horizontal layout ─────────────────────────────────────────────────────
const VW = 580, VH = 340, NR = 23, MX = 65, MY = 42;

function computeLayout(nodes, transitions) {
  if (!nodes.length) return {};
  const initId = nodes.find(n => n.isInitial)?.id ?? nodes[0].id;

  const layer = { [initId]: 0 };
  const visited = new Set([initId]);
  let queue = [initId];

  while (queue.length) {
    const next = [];
    for (const id of queue) {
      for (const t of transitions) {
        if (t.from === id && t.from !== t.to && !visited.has(t.to)) {
          visited.add(t.to);
          layer[t.to] = layer[id] + 1;
          next.push(t.to);
        }
      }
    }
    queue = next;
  }

  const maxL = Object.values(layer).length ? Math.max(...Object.values(layer)) : 0;
  nodes.forEach(n => { if (!(n.id in layer)) layer[n.id] = maxL + 1; });

  const groups = {};
  nodes.forEach(n => {
    const l = layer[n.id];
    (groups[l] = groups[l] || []).push(n.id);
  });

  const numLayers = Math.max(...Object.keys(groups).map(Number)) + 1;
  const usableW = VW - 2 * MX;
  const usableH = VH - 2 * MY;
  const positions = {};

  Object.entries(groups).forEach(([l, ids]) => {
    const li = parseInt(l);
    const x = numLayers === 1 ? VW / 2 : MX + (li / (numLayers - 1)) * usableW;
    ids.forEach((id, i) => {
      const rows = ids.length;
      const y = rows === 1 ? VH / 2 : MY + (i / (rows - 1)) * usableH;
      positions[id] = { x: Math.round(x), y: Math.round(y) };
    });
  });

  return positions;
}

// ── Normalize for comparison ──────────────────────────────────────────────────
function normalize(s) {
  let r = s
    .replace(/^L\s*=\s*/, '')
    .trim()
    .toLowerCase()
    .replace(/\s+e\s+/g, ',')                           // "e" (e lógico pt-BR) equivale a ","
    .replace(/é/g, '\x01')                              // protege 'é' (verbo) do NFD
    .normalize('NFD').replace(/[̀-ͯ]/g, '')   // ímpar→impar, ã→a, etc.
    .replace(/\x01/g, '\xe9')                           // restaura 'é' (será stripado depois)
    .replace(/\s+/g, '')
    .replace(/\xe9umnumero/g, '\xe9')                     // "é um número par" ≡ "é par"
    .replace(/[{}\[\]]/g, '')
    .replace(/[\\\/]/g, '|')                           // \ e / equivalem a |
    .replace(/λ|ε|epsilon/gi, 'lambda')
    .replace(/∅|\\emptyset|vazio|empty/gi, 'emptyset')
    .replace(/[≥]/g, '>=')
    .replace(/[≤]/g, '<=');
  // Absorb prefix literal: aa^n → a^n; adjust constraint n>=0 → n>0
  const absorbed = new Set();
  r = r.replace(/([a-z])\1\^([a-z]+?)(?=[^a-z]|[a-z]\^|$)/g, (_, ch, v) => { absorbed.add(v); return `${ch}^${v}`; });
  for (const v of absorbed)
    r = r.replace(new RegExp(`([,|])${v}>=0`, 'g'), (_, sep) => `${sep}${v}>0`);
  // Universal: n>=1 → n>0 (equivalent for integer-valued exponents)
  r = r.replace(/([a-z]+)>=1(?![0-9])/g, '$1>0');
  // Alpha-equivalence: rename bound exponent variables to canonical names (n,m,p,k,…)
  // so {a^x | x>0} matches {a^n | n>0}, etc.
  const pipePos = r.indexOf('|');
  if (pipePos !== -1) {
    const cano = ['n','m','p','k','j','i'];
    let wPart = r.slice(0, pipePos);
    let cPart = r.slice(pipePos + 1);
    // Detect variable names from the constraint part (letters that precede an operator)
    const varSet = new Set();
    for (const [, v] of cPart.matchAll(/([a-z]+)(?=[><=])/g)) varSet.add(v);
    // Order vars by their first appearance (as ^var) in the word part
    const order = [...varSet].sort((a, b) => {
      const ia = wPart.indexOf(`^${a}`);
      const ib = wPart.indexOf(`^${b}`);
      return (ia < 0 ? Infinity : ia) - (ib < 0 ? Infinity : ib);
    });
    // Two-pass rename: process longer names first to prevent substring collisions
    const byLen = [...order].sort((a, b) => b.length - a.length);
    byLen.forEach(v => {
      const i = order.indexOf(v);
      wPart = wPart.replace(new RegExp(`\\^${v}`, 'g'), `^@@${i}`);
      cPart = cPart.replace(new RegExp(`(?<![a-z0-9])${v}(?![a-z0-9])`, 'g'), `@@${i}`);
    });
    order.forEach((v, i) => {
      const c = cano[i] ?? `v${i + 1}`;
      wPart = wPart.replace(new RegExp(`\\^@@${i}`, 'g'), `^${c}`);
      cPart = cPart.replace(new RegExp(`@@${i}`, 'g'), c);
    });
    r = wPart + '|' + cPart;
  }
  return r.replace(/[^a-z0-9^*+|(),_.=><!]/g, '');
}

// ── Feedback específico para resposta errada ──────────────────────────────────
function generateFeedback(userAnswer, expectedFormula, nodes, alphabet) {
  const raw = userAnswer.trim();
  const nu  = normalize(raw);
  const ne  = normalize(expectedFormula.trim());
  if (nu === ne) return null;

  const lambdaAccepted = !!(nodes?.find(n => n.isInitial)?.isFinal);

  // ── Verificações no texto original (antes da normalização) ──────────────────

  // Chaves desbalanceadas — aviso individual para abrir/fechar
  const openBraces  = (raw.match(/\{/g)  || []).length;
  const closeBraces = (raw.match(/\}/g) || []).length;
  if (openBraces > closeBraces)
    return `Você esqueceu de fechar ${openBraces - closeBraces > 1 ? openBraces - closeBraces + ' chaves' : 'a chave'}! Adicione } ao final.`;
  if (closeBraces > openBraces)
    return `Você esqueceu de abrir ${closeBraces - openBraces > 1 ? closeBraces - openBraces + ' chaves' : 'a chave'}! Adicione { no início.`;

  // Pipe | faltando dentro das chaves quando a resposta esperada precisa dele
  const expNeedsPipe = ne.indexOf('|') >= 0 && !ne.includes('emptyset') && ne !== 'lambda';
  if (expNeedsPipe && openBraces > 0) {
    const firstOpen = raw.indexOf('{');
    const lastClose = raw.lastIndexOf('}');
    const outerContent = firstOpen >= 0 && lastClose > firstOpen ? raw.slice(firstOpen + 1, lastClose) : '';
    if (outerContent && !/[|/\\]/.test(outerContent))
      return 'Falta o "|" dentro das chaves! Use: { padrão | condição }. Ex: { a^n | n > 0 }';
  }

  // Variável "w" usada sem "∈" (ex: { w | condição } sem indicar o conjunto)
  const rawHasWVar = /(?<![a-z])w(?![a-z])/i.test(raw);
  const rawHasIn   = raw.includes('∈');
  if (rawHasWVar && !rawHasIn)
    return 'Se usar "w" como variável de palavra, inclua ∈ para indicar o conjunto: ex: { w ∈ {a,b}* | condição }';

  // Resposta esperada usa notação com "w" mas o usuário não usou
  const expHasWVar        = /(?<![a-z])w(?![a-z])/i.test(expectedFormula);
  const expUsesCountNotation = /\|w\|_?[a-z]/i.test(expectedFormula);
  if (expHasWVar && !rawHasWVar && !/emptyset|lambda/i.test(raw)) {
    if (expUsesCountNotation)
      return 'Este autômato conta letras, não posições (sem ordem). Tente: { w ∈ {a,b}* | |w|_a > ... }';
    return 'Esta linguagem usa variável de palavra "w". Tente começar com: { w ∈ Σ* | ... }';
  }

  // |w|_x onde x não está no alfabeto
  if (alphabet?.length) {
    for (const m of raw.matchAll(/\|w\|_?([a-z])/gi)) {
      if (!alphabet.includes(m[1]))
        return `O símbolo "${m[1]}" em |w|_${m[1]} não está no alfabeto {${alphabet.join(',')}} — verifique os símbolos!`;
    }
  }

  // |w| sem subscrito quando a fórmula usa |w|_a (contagem de caractere)
  if (/\|w\|(?![_a-z])/i.test(raw) && /\|w\|_?[a-z]/i.test(expectedFormula))
    return 'Falta o subscrito em |w|! Use |w|_a para contar "a"s, ex: { w ∈ {a,b}* | |w|_a > 0 }';

  // ── Verificações normalizadas ─────────────────────────────────────────────────

  // ∅
  if (nu.includes('emptyset') && !ne.includes('emptyset'))
    return 'O autômato aceita palavras — não é linguagem vazia (∅)!';
  if (!nu.includes('emptyset') && ne.includes('emptyset'))
    return 'Nenhuma palavra é aceita aqui. Escreva a linguagem vazia: ∅';

  // {λ} apenas
  if (nu === 'lambda' && ne !== 'lambda')
    return 'Só {λ} não basta — o autômato aceita palavras além da vazia!';
  if (nu !== 'lambda' && ne === 'lambda')
    return 'Somente λ (palavra vazia) é aceita aqui. Escreva: { λ }';

  // Pipe | na forma normalizada
  const pipeU = nu.indexOf('|');
  const pipeE = ne.indexOf('|');

  if (pipeU < 0 && pipeE >= 0)
    return 'Falta a condição! Use: { padrão | condição }. Ex: { a^n | n > 0 }';
  if (pipeU >= 0 && pipeE < 0)
    return 'A linguagem não precisa de condição. Retire o "|" e o que vem depois!';

  if (pipeU >= 0 && pipeE >= 0) {
    const wordU = nu.slice(0, pipeU);
    const wordE = ne.slice(0, pipeE);
    const condU = nu.slice(pipeU + 1);
    const condE = ne.slice(pipeE + 1);
    const wordSame = wordU === wordE;
    const condSame  = condU === condE;

    // * faltando ou sobrando no padrão da palavra
    if (!wordSame && wordE.replace(/\*/g, '') === wordU)
      return 'Faltou o * após o conjunto! Ex: w ∈ {0,1}* — o * indica todas as palavras sobre esse alfabeto.';
    if (!wordSame && wordU.replace(/\*/g, '') === wordE)
      return 'Tem um * a mais no padrão — verifique se o conjunto precisa do *.';

    if (wordSame && !condSame) {
      if (/[a-z]>=0/.test(condE) && !/[a-z]>=0/.test(condU))
        return lambdaAccepted
          ? 'Quase! λ É aceita (estado inicial é final) — use ≥ 0, não > 0.'
          : 'Quase! Verifique: use ≥ 0 em vez de > 0 nesta condição.';
      if (!/[a-z]>=0/.test(condE) && /[a-z]>=0/.test(condU) && /[a-z]>(?!=)/.test(condE))
        return !lambdaAccepted
          ? 'Quase! λ NÃO é aceita (estado inicial não é final) — use > 0, não ≥ 0.'
          : 'Quase! Verifique: use > 0 em vez de ≥ 0 nesta condição.';
      if (condE.includes('impar') && !condU.includes('impar'))
        return 'Falta a restrição de paridade! Adicione: "e n é ímpar"';
      if (!condE.includes('impar') && condU.includes('impar'))
        return 'Não precisa de condição ímpar aqui. Retire "ímpar" da condição!';
      if ((condE.match(/,/g) || []).length > (condU.match(/,/g) || []).length)
        return 'Condição incompleta! Faltam restrições — use "," para separar: ex: "n > 0, m ≥ 0"';
      return 'A estrutura da palavra está certa! Revise a condição após "|".';
    }

    if (!wordSame && condSame)
      return 'A condição está certa! Revise os blocos da linguagem (parte antes do "|").';

    if (!wordSame && !condSame) {
      const setE = new Set(wordE.replace(/[^a-z0-9]/g, ''));
      const setU = new Set(wordU.replace(/[^a-z0-9]/g, ''));
      for (const c of setE) if (!setU.has(c)) return `Parece que falta o símbolo "${c}" no padrão da linguagem.`;
      for (const c of setU) if (!setE.has(c)) return `Símbolo "${c}" a mais no padrão — verifique o alfabeto do autômato.`;
      if (lambdaAccepted && /[a-z]>(?!=)/.test(condU) && !/[a-z]>=0/.test(condU))
        return 'λ é aceita aqui! Verifique: use ≥ 0 na condição e revise a estrutura.';
      if (!lambdaAccepted && /[a-z]>=0/.test(condU))
        return 'λ não é aceita! Verifique: use > 0 na condição e revise a estrutura.';
      return 'Estrutura e condição precisam de revisão. Simule palavras para descobrir o padrão!';
    }
  }

  // Sem pipe nos dois
  if (!nu.includes('lambda') && ne.includes('lambda'))
    return 'λ (palavra vazia) também é aceita! Inclua na sua resposta.';
  if (nu.includes('lambda') && !ne.includes('lambda'))
    return 'λ não faz parte desta linguagem. Retire da sua resposta!';

  return 'Simule palavras com o testador para descobrir quais são aceitas — depois tente de novo!';
}

// ── Grupos de inserção rápida do quadro de notações ──────────────────────────
const INSERT_GROUPS = [
  { chips: [
    { text: 'λ',    display: 'λ',    title: 'Palavra vazia (λ)' },
    { text: '∈',    display: '∈',    title: 'Pertence (∈)' },
    { text: '|w|a', display: '|w|a', title: 'Quantidade de "a" em w' },
  ]},
  { label: 'Expoentes', chips: [
    { text: '^n',   display: '^n',   title: 'Expoente n' },
    { text: '^m',   display: '^m',   title: 'Expoente m' },
  ]},
  { label: 'Comparadores', chips: [
    { text: '>',    display: '>',    title: 'Maior que' },
    { text: '>=',   display: '>=',   title: 'Maior ou igual' },
  ]},
  { label: 'Estrutura', chips: [
    { text: '{ ',   display: '{',    title: 'Abre chave' },
    { text: ' | ',  display: '|',    title: 'Tal que' },
    { text: ' }',   display: '}',    title: 'Fecha chave' },
    { text: ', ',   display: ',',    title: 'Vírgula' },
    { text: ' e ',  display: 'e',    title: '"e" lógico' },
  ]},
];

// ── Drawing helpers ───────────────────────────────────────────────────────────
const DRAW_COLORS = [
  { hex: '#FF0000', label: 'Vermelho' },
  { hex: '#1a1a1a', label: 'Grafite' },
  { hex: '#3b82f6', label: 'Azul' },
  { hex: '#22c55e', label: 'Verde' },
  { hex: '#f59e0b', label: 'Laranja' },
  { hex: '#a855f7', label: 'Roxo' },
  { hex: '#f8f8f8', label: 'Branco' },
];

function pointsToPath(pts) {
  if (pts.length < 2) return '';
  if (pts.length === 2) return `M${pts[0].x} ${pts[0].y} L${pts[1].x} ${pts[1].y}`;
  let d = `M${pts[0].x} ${pts[0].y}`;
  for (let i = 1; i < pts.length - 1; i++) {
    const mx = (pts[i].x + pts[i+1].x) / 2, my = (pts[i].y + pts[i+1].y) / 2;
    d += ` Q${pts[i].x} ${pts[i].y} ${mx} ${my}`;
  }
  const l = pts[pts.length - 1];
  return d + ` L${l.x} ${l.y}`;
}

function arrowHeadPoints(x1, y1, x2, y2, sw) {
  const angle = Math.atan2(y2 - y1, x2 - x1);
  const len = Math.max(14, sw * 5);
  const sp = Math.PI / 6;
  return [
    x2 - len * Math.cos(angle - sp), y2 - len * Math.sin(angle - sp),
    x2, y2,
    x2 - len * Math.cos(angle + sp), y2 - len * Math.sin(angle + sp),
  ].map(v => +v.toFixed(2)).join(' ');
}

function DrawStroke({ stroke, idx }) {
  const c = { stroke: stroke.color, strokeWidth: stroke.width, fill: 'none', opacity: 0.88 };
  if (stroke.type === 'pencil' || !stroke.type)
    return <path key={idx} d={pointsToPath(stroke.points)} {...c} strokeLinecap="round" strokeLinejoin="round" />;
  if (stroke.type === 'line')
    return <line key={idx} x1={stroke.x1} y1={stroke.y1} x2={stroke.x2} y2={stroke.y2} {...c} strokeLinecap="round" />;
  if (stroke.type === 'arrow') {
    const head = arrowHeadPoints(stroke.x1, stroke.y1, stroke.x2, stroke.y2, stroke.width);
    return <g key={idx} opacity={0.88}>
      <line x1={stroke.x1} y1={stroke.y1} x2={stroke.x2} y2={stroke.y2}
        stroke={stroke.color} strokeWidth={stroke.width} strokeLinecap="round" />
      <polygon points={head} fill={stroke.color} stroke={stroke.color} strokeWidth={1} />
    </g>;
  }
  if (stroke.type === 'rect') {
    const x = Math.min(stroke.x1, stroke.x2), y = Math.min(stroke.y1, stroke.y2);
    return <rect key={idx} x={x} y={y} width={Math.abs(stroke.x2-stroke.x1)} height={Math.abs(stroke.y2-stroke.y1)}
      {...c} strokeLinejoin="round" rx={2} />;
  }
  return null;
}

// ── SimPanel (step-by-step simulation) ───────────────────────────────────────
function SimPanel({ word, nodes, transitions, onClose, onHighlightNode }) {
  const initState = nodes.find(n => n.isInitial)?.id ?? null;

  const buildSteps = () => {
    const steps = [];
    const w = (word === 'λ' || word === 'null' || word === 'vazio') ? '' : word;
    if (!initState) {
      steps.push({ type: 'error', icon: '❌', text: 'Nenhum estado inicial!', state: null, charIdx: -1 });
      return steps;
    }
    const initLabel = nodes.find(n => n.id === initState)?.label ?? initState;
    steps.push({ type: 'info', icon: '▶', text: `Início em "${initLabel}"`, state: initState, charIdx: -1 });
    let current = initState;
    for (let i = 0; i < w.length; i++) {
      const ch = w[i];
      const tr = transitions.find(t => t.from === current && t.symbol.split(',').map(s => s.trim()).includes(ch));
      if (!tr) {
        const curLabel = nodes.find(n => n.id === current)?.label ?? current;
        steps.push({ type: 'error', icon: '❌', text: `"${curLabel}" sem transição com '${ch}' — REJEITADA`, state: current, charIdx: i });
        return steps;
      }
      const fromLabel = nodes.find(n => n.id === tr.from)?.label ?? tr.from;
      const toLabel   = nodes.find(n => n.id === tr.to)?.label   ?? tr.to;
      steps.push({ type: 'ok', icon: '➡', text: `"${fromLabel}" —[${ch}]→ "${toLabel}"`, state: tr.to, charIdx: i });
      current = tr.to;
    }
    const finalNode  = nodes.find(n => n.id === current);
    const finalLabel = finalNode?.label ?? current;
    if (finalNode?.isFinal) {
      steps.push({ type: 'done', icon: '✅', text: `"${finalLabel}" é estado final`, state: current, charIdx: w.length });
    } else {
      steps.push({ type: 'error', icon: '❌', text: `"${finalLabel}" não é estado final`, state: current, charIdx: w.length });
    }
    return steps;
  };

  const steps = useMemo(buildSteps, []);
  const [stepIdx, setStepIdx] = useState(0);
  const currentStep = steps[stepIdx];
  const w = (word === 'λ' || word === 'null' || word === 'vazio') ? '' : word;
  const isFinished = stepIdx === steps.length - 1;
  const accepted   = isFinished && currentStep?.type === 'done';

  useEffect(() => {
    onHighlightNode(currentStep?.state ?? null, currentStep?.type ?? null);
    return () => onHighlightNode(null, null);
  }, [stepIdx]);

  useEffect(() => {
    if (isFinished) { const t = setTimeout(() => onClose(), 6000); return () => clearTimeout(t); }
  }, [isFinished]);

  return (
    <div className="sim-panel-container">
      <div className="sim-panel-header">
        <span className="sim-panel-title">🔬 <b>{w || 'λ'}</b></span>
        <div className="sim-word-display">
          {w.length === 0
            ? <span className="sim-char">λ</span>
            : w.split('').map((ch, i) => {
                const ci = currentStep?.charIdx ?? -1;
                let cls = 'sim-char';
                if (i === ci) cls += ' active';
                else if (i < ci) cls += ' done-ok';
                return <span key={i} className={cls}>{ch}</span>;
              })
          }
        </div>
        {isFinished && (
          <span className={`sim-result-badge ${accepted ? 'accepted' : 'rejected'}`}>
            {accepted ? '✅ ACEITA' : '❌ REJEITADA'}
          </span>
        )}
        <button className="sim-panel-close" onClick={onClose}>✕</button>
      </div>
      <div className="sim-panel-body">
        <div className={`sim-current-step ${currentStep?.type || ''}`}>
          <span className="sim-step-icon">{currentStep?.icon}</span>
          <span>{currentStep?.text}</span>
        </div>
      </div>
      <div className="sim-panel-nav">
        <button className="sim-nav-btn" onClick={() => setStepIdx(i => Math.max(0, i-1))} disabled={stepIdx === 0}>◀</button>
        <span className="sim-progress">{stepIdx + 1} / {steps.length}</span>
        <button className="sim-nav-btn" onClick={() => setStepIdx(i => Math.min(steps.length-1, i+1))} disabled={isFinished}>▶</button>
      </div>
    </div>
  );
}

// ── SVG Graph ─────────────────────────────────────────────────────────────────
function AFDGraphView({ nodes, transitions, highlightNodeId = null, highlightType = null }) {
  const positions = useMemo(() => computeLayout(nodes, transitions), [nodes, transitions]);

  // Merge multi-symbol edges into single edge with combined label
  const edges = useMemo(() => {
    const map = {};
    transitions.forEach(t => {
      const key = `${t.from}→${t.to}`;
      if (!map[key]) map[key] = { from: t.from, to: t.to, syms: [] };
      t.symbol.split(',').forEach(s => {
        const tr = s.trim();
        if (tr && !map[key].syms.includes(tr)) map[key].syms.push(tr);
      });
    });
    return Object.values(map);
  }, [transitions]);

  const hasBidir = useCallback(
    (a, b) => edges.some(e => e.from === b && e.to === a),
    [edges]
  );

  return (
    <svg
      viewBox={`0 0 ${VW} ${VH}`}
      style={{ width: '100%', height: '100%', display: 'block' }}
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        {/* Seta regular — igual ao #ah do AFDPart1 */}
        <marker id="p2a" markerWidth="18" markerHeight="14" refX="48" refY="7"
          orient="auto" markerUnits="userSpaceOnUse">
          <polygon points="0 0,18 7,0 14" fill="#000" />
        </marker>
        {/* Seta self-loop — igual ao #ahsl do AFDPart1 */}
        <marker id="p2asl" markerWidth="18" markerHeight="14" refX="18" refY="7"
          orient="auto" markerUnits="userSpaceOnUse">
          <polygon points="0 0,18 7,0 14" fill="#000" />
        </marker>
        {/* Seta do estado inicial */}
        <marker id="p2ai" markerWidth="18" markerHeight="14" refX="18" refY="7"
          orient="auto" markerUnits="userSpaceOnUse">
          <polygon points="0 0,18 7,0 14" fill="#000" />
        </marker>
      </defs>

      {/* Edges */}
      {edges.map((edge, i) => {
        const sp = positions[edge.from];
        const tp = positions[edge.to];
        if (!sp || !tp) return null;
        const label = edge.syms.join(',');

        if (edge.from === edge.to) {
          return (
            <g key={i}>
              <path
                d={`M ${sp.x - 13} ${sp.y - NR + 5} C ${sp.x - 46} ${sp.y - NR - 58} ${sp.x + 46} ${sp.y - NR - 58} ${sp.x + 13} ${sp.y - NR + 5}`}
                fill="none" stroke="#000" strokeWidth="4" markerEnd="url(#p2asl)"
              />
              <text x={sp.x} y={sp.y - NR - 32}
                textAnchor="middle" dominantBaseline="middle" className="p2-edge-label">
                {label}
              </text>
            </g>
          );
        }

        const dx = tp.x - sp.x, dy = tp.y - sp.y;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        const nx = -dy / dist, ny = dx / dist;
        const bidir = hasBidir(edge.from, edge.to);

        let pathD, lx, ly;
        if (bidir) {
          const off = 38;
          const cx1 = (sp.x + tp.x) / 2 + nx * off;
          const cy1 = (sp.y + tp.y) / 2 + ny * off;
          pathD = `M ${sp.x} ${sp.y} Q ${cx1} ${cy1} ${tp.x} ${tp.y}`;
          lx = ((sp.x + tp.x) / 2 + cx1) / 2 + nx * 10;
          ly = ((sp.y + tp.y) / 2 + cy1) / 2 + ny * 10;
        } else {
          pathD = `M ${sp.x} ${sp.y} L ${tp.x} ${tp.y}`;
          lx = (sp.x + tp.x) / 2 + nx * 15;
          ly = (sp.y + tp.y) / 2 + ny * 15;
        }

        return (
          <g key={i}>
            <path d={pathD} fill="none" stroke="#000" strokeWidth="4" markerEnd="url(#p2a)" />
            <text x={lx} y={ly} textAnchor="middle" dominantBaseline="middle" className="p2-edge-label">
              {label}
            </text>
          </g>
        );
      })}

      {/* Nodes */}
      {nodes.map(nd => {
        const p = positions[nd.id];
        if (!p) return null;
        const label = nd.label ?? nd.id;
        const fontSize = label.length > 3 ? 9 : label.length > 2 ? 11 : 13;
        return (
          <g key={nd.id}>
            {nd.isInitial && (
              <text
                x={p.x - NR - 5} y={p.y}
                textAnchor="end" dominantBaseline="middle"
                style={{ fontSize: 22, fontWeight: 'bold', fill: '#000',
                  paintOrder: 'stroke', stroke: '#fff', strokeWidth: 3,
                  userSelect: 'none', pointerEvents: 'none' }}
              >▶</text>
            )}
            {nd.isFinal && (
              <circle cx={p.x} cy={p.y} r={NR + 7} fill="none" stroke="#000" strokeWidth="3" />
            )}
            <circle
              cx={p.x} cy={p.y} r={NR}
              fill={
                highlightNodeId === nd.id
                  ? (highlightType === 'ok' ? '#fef08a' : highlightType === 'done' ? '#86efac' : '#fca5a5')
                  : nd.isInitial ? '#bae6fd' : nd.isFinal ? '#bbf7d0' : '#fff'
              }
              stroke="#000" strokeWidth="3"
            />
            <text
              x={p.x} y={p.y}
              textAnchor="middle" dominantBaseline="middle"
              className="p2-node-label"
              style={{ fontSize }}
            >
              {label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

// ── Level List — gibi style matching AFDPart1 ─────────────────────────────────
function LevelList({ progress, onSelect, onBack }) {
  const [page, setPage] = useState(1);
  const perPage = 20;
  const totalPages = Math.ceil(GAME_LEVELS.length / perPage);
  const pageItems = GAME_LEVELS.slice((page - 1) * perPage, page * perPage);
  const maxStars = GAME_LEVELS.length * 3;
  const totalStars = GAME_LEVELS.reduce((sum, l) => sum + (progress[l.id]?.stars || 0), 0);

  return (
    <div className="menu-screen menu-screen-fases" style={{ justifyContent: 'flex-start', paddingTop: 20 }}>
      <div style={{ display:'flex', alignItems:'center', marginBottom:14, width:'100%' }}>
        <div style={{ flex:1 }}>
          <button className="back-btn" onClick={onBack}>⬅ Voltar</button>
        </div>
        <h1 className="menu-title" style={{ margin:0 }}>TuringLab</h1>
        <div style={{ flex:1 }} />
      </div>
      <p style={{ fontWeight: 900, fontSize: 16, color: '#555', marginBottom: 12,
        background: '#60a5fa', border: '3px solid #000', borderRadius: 8,
        padding: '4px 16px', boxShadow: '3px 3px 0 #000' }}>
        📊 Grafo → Linguagem
      </p>
      <div style={{ marginBottom: 18, fontWeight: 'bold', fontSize: 16 }}>
        Progresso: {maxStars > 0 ? Math.round((totalStars / maxStars) * 100) : 0}%
        &nbsp;({totalStars}/{maxStars} ★)
      </div>

      <div className="levels-grid">
        {pageItems.map(lvl => {
          const diff = LEVEL_DIFFICULTY[lvl.id] || 'easy';
          const bg   = DIFF_COLOR[diff];
          return (
            <button
              key={lvl.id}
              className="menu-btn primary"
              onClick={() => onSelect(lvl)}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
                background: bg }}
            >
              <span>{lvl.label}</span>
              <SvgStars count={progress[lvl.id]?.stars || 0} size={14} />
            </button>
          );
        })}
      </div>

      <div style={{ display: 'flex', gap: 20, alignItems: 'center', marginTop: 20 }}>
        <button className="menu-btn"
          disabled={page === 1}
          onClick={() => setPage(p => p - 1)}
          style={{ opacity: page === 1 ? 0.5 : 1 }}>
          ⬅ Anterior
        </button>
        <span style={{ fontWeight: 'bold', fontSize: 18, background: '#fff',
          padding: '5px 15px', border: '3px solid #000', borderRadius: 8 }}>
          {page} / {totalPages}
        </span>
        <button className="menu-btn"
          disabled={page === totalPages}
          onClick={() => setPage(p => p + 1)}
          style={{ opacity: page === totalPages ? 0.5 : 1 }}>
          Próxima ➡
        </button>
      </div>

      <DifficultyLegend />
    </div>
  );
}

// ── Exercise Screen ───────────────────────────────────────────────────────────
function ExerciseScreen({ level, progress, updateProgress, showToast, onBack, onNext }) {
  const graph   = LEVEL_GRAPHS[level.id];
  const [answer,      setAnswer]      = useState('');
  const [attempts,    setAttempts]    = useState(0);
  const [result,      setResult]      = useState(null);   // 'correct'|'wrong'|null
  const [showExpected, setShowExpected] = useState(false);
  const [showVictory, setShowVictory] = useState(false);
  const [earnedStars, setEarnedStars] = useState(0);
  const [profMsg,     setProfMsg]     = useState('');
  const speechRef      = useRef(null);
  const answerInputRef = useRef(null);
  const savedCursor    = useRef(null);
  const [showCheatsheet, setShowCheatsheet] = useState(false);
  const [copiedIdx, setCopiedIdx] = useState(null);
  const [feedbackMsg, setFeedbackMsg] = useState('');

  // ── Word simulation ────────────────────────────────────────────────────────
  const [simWords,     setSimWords]     = useState([]);
  const [newSimWord,   setNewSimWord]   = useState('');
  const [simWord,      setSimWord]      = useState('');
  const [showSimPanel, setShowSimPanel] = useState(false);
  const [simHighlight, setSimHighlight] = useState({ nodeId: null, type: null });

  // ── Drawing state ──────────────────────────────────────────────────────────
  const [drawings, setDrawings]           = useState([]);
  const [drawingStack, setDrawingStack]   = useState([]);
  const [currentStroke, setCurrentStroke] = useState(null);
  const [drawColor, setDrawColor]         = useState('#1a1a1a');
  const [drawSize, setDrawSize]           = useState(3);
  const [isErasing, setIsErasing]         = useState(false);
  const [drawTool, setDrawTool]           = useState('pencil');
  const [isDrawMode, setIsDrawMode]       = useState(false);
  const isDrawingRef    = useRef(false);
  const currentStrokeRef = useRef(null);
  const drawingsRef      = useRef([]);
  const overlayRef       = useRef(null);

  const drawUndo = useCallback(() => {
    setDrawingStack(prev => {
      if (prev.length === 0) return prev;
      const snap = prev[prev.length - 1];
      setDrawings(snap);
      drawingsRef.current = snap;
      return prev.slice(0, -1);
    });
  }, []);

  const insertAtCursor = (text) => {
    const start  = savedCursor.current?.start ?? answer.length;
    const end    = savedCursor.current?.end   ?? answer.length;
    const newVal = answer.slice(0, start) + text + answer.slice(end);
    setAnswer(newVal);
    setResult(null);
    requestAnimationFrame(() => {
      if (!answerInputRef.current) return;
      answerInputRef.current.focus();
      const pos = start + text.length;
      answerInputRef.current.setSelectionRange(pos, pos);
      savedCursor.current = { start: pos, end: pos };
    });
  };

  useEffect(() => {
    if (!isDrawMode) return;
    const handler = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'z' && !e.shiftKey) {
        e.preventDefault();
        drawUndo();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isDrawMode, drawUndo]);

  const getSVGCoords = (e) => {
    const svg = overlayRef.current;
    if (!svg) return { x: 0, y: 0 };
    try {
      const pt = svg.createSVGPoint();
      // getScreenCTM() ignora CSS zoom de ancestrais; compensar dividindo pelas coords visuais
      const svgRect = svg.getBoundingClientRect();
      const cssZoom = svgRect.width / svg.offsetWidth;
      pt.x = e.clientX / cssZoom;
      pt.y = e.clientY / cssZoom;
      const ctm = svg.getScreenCTM();
      if (!ctm) return { x: 0, y: 0 };
      const p = pt.matrixTransform(ctm.inverse());
      return { x: p.x, y: p.y };
    } catch { return { x: 0, y: 0 }; }
  };

  const handleOverlayDown = (e) => {
    const { x, y } = getSVGCoords(e);
    if (isErasing) {
      const snapshot = [...drawingsRef.current];
      setDrawingStack(prev => [...prev, snapshot]);
    } else if (drawTool === 'pencil') {
      const s = { type: 'pencil', color: drawColor, width: drawSize, points: [{ x, y }] };
      currentStrokeRef.current = s;
      setCurrentStroke(s);
    } else {
      const s = { type: drawTool, color: drawColor, width: drawSize, x1: x, y1: y, x2: x, y2: y };
      currentStrokeRef.current = s;
      setCurrentStroke(s);
    }
    isDrawingRef.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handleOverlayMove = (e) => {
    if (!isDrawingRef.current) return;
    const { x, y } = getSVGCoords(e);
    if (isErasing) {
      const R = 20;
      setDrawings(prev => {
        const next = prev.filter(s => {
          if (s.type === 'pencil' || !s.type)
            return !s.points.some(p => Math.hypot(p.x - x, p.y - y) < R);
          const mx = (s.x1 + s.x2) / 2, my = (s.y1 + s.y2) / 2;
          return !(Math.hypot(s.x1-x, s.y1-y) < R || Math.hypot(s.x2-x, s.y2-y) < R || Math.hypot(mx-x, my-y) < R);
        });
        drawingsRef.current = next;
        return next;
      });
    } else if (drawTool === 'pencil' && currentStrokeRef.current) {
      const pts = currentStrokeRef.current.points;
      const last = pts[pts.length - 1];
      if (Math.hypot(x - last.x, y - last.y) < 3) return;
      const updated = { ...currentStrokeRef.current, points: [...pts, { x, y }] };
      currentStrokeRef.current = updated;
      setCurrentStroke({ ...updated });
    } else if (currentStrokeRef.current) {
      const updated = { ...currentStrokeRef.current, x2: x, y2: y };
      currentStrokeRef.current = updated;
      setCurrentStroke({ ...updated });
    }
  };

  const handleOverlayUp = (e) => {
    if (!isDrawingRef.current) return;
    isDrawingRef.current = false;
    const stroke = currentStrokeRef.current;
    const isShape = stroke && stroke.type !== 'pencil';
    const valid = stroke && (isShape
      ? Math.hypot(stroke.x2 - stroke.x1, stroke.y2 - stroke.y1) > 4
      : stroke.points && stroke.points.length > 1);
    if (!isErasing && valid) {
      const snapshot = [...drawingsRef.current];
      setDrawingStack(prev => [...prev, snapshot]);
      setDrawings(prev => { const next = [...prev, stroke]; drawingsRef.current = next; return next; });
    }
    currentStrokeRef.current = null;
    setCurrentStroke(null);
    try { e.currentTarget.releasePointerCapture(e.pointerId); } catch (_) {}
  };

  const stars = progress[level.id]?.stars || 0;

  const levelIdx = GAME_LEVELS.findIndex(l => l.id === level.id);
  const nextLevel = levelIdx >= 0 && levelIdx < GAME_LEVELS.length - 1
    ? GAME_LEVELS[levelIdx + 1] : null;

  const showProf = useCallback((msg, dur = 6000) => {
    setProfMsg(msg);
    if (speechRef.current) clearTimeout(speechRef.current);
    speechRef.current = setTimeout(() => setProfMsg(''), dur);
  }, []);

  const handleCheck = useCallback(() => {
    if (!answer.trim()) { showToast('Digite sua resposta primeiro!', 'info'); return; }
    const n = attempts + 1;
    setAttempts(n);

    const correct = normalize(answer) === normalize(level.formula);
    if (correct) {
      const earned = n === 1 ? 3 : n === 2 ? 2 : 1;
      setEarnedStars(earned);
      updateProgress(level.id, earned);
      setResult('correct');
      setShowVictory(true);
    } else {
      const graphAlphabet = graph?.transitions
        ? [...new Set(graph.transitions.flatMap(t => t.symbol.split(',').map(s => s.trim())))]
        : [];
      const fb = generateFeedback(answer, level.formula, graph?.nodes, graphAlphabet)
        || (level.hint || 'Siga o caminho do autômato estado por estado!');
      setFeedbackMsg(fb);
      setResult('wrong');
      if (n >= 2) setShowExpected(true);
      showToast(fb, 'error');
      showProf(fb);
    }
  }, [answer, attempts, level, updateProgress, showToast, showProf]);

  const handleReset = () => {
    setAnswer(''); setAttempts(0); setResult(null);
    setShowExpected(false); setShowVictory(false); setEarnedStars(0);
    setFeedbackMsg('');
  };

  const copyRow = (text, key) => {
    navigator.clipboard?.writeText(text).then(() => {
      setCopiedIdx(key);
      setTimeout(() => setCopiedIdx(null), 1500);
    });
  };

  const handleAddSimWord = () => {
    if (!graph) { showToast('Grafo não disponível.', 'error'); return; }
    const wordDisplay = newSimWord === '' ? 'λ' : newSimWord;
    if (simWords.some(w => w.word === wordDisplay)) {
      showToast('Já testou essa palavra!', 'info'); return;
    }
    const w = wordDisplay === 'λ' ? '' : wordDisplay;
    let cur = graph.nodes.find(n => n.isInitial)?.id ?? null;
    let accepted = false;
    if (cur !== null) {
      let ok = true;
      for (const ch of w) {
        const tr = graph.transitions.find(t => t.from === cur && t.symbol.split(',').map(s => s.trim()).includes(ch));
        if (!tr) { ok = false; break; }
        cur = tr.to;
      }
      if (ok) accepted = !!graph.nodes.find(n => n.id === cur)?.isFinal;
    }
    setSimWords(prev => [{ word: wordDisplay, status: accepted ? 'correct' : 'wrong' }, ...prev]);
    setNewSimWord('');
  };

  const openSimulation = () => {
    if (!graph) { showToast('Grafo não disponível.', 'error'); return; }
    if (!graph.nodes.some(n => n.isInitial)) { showToast('Grafo sem estado inicial.', 'error'); return; }
    if (!newSimWord && newSimWord !== '') { showToast('Digite uma palavra para simular.', 'info'); return; }
    setSimWord(newSimWord);
    setShowSimPanel(true);
  };

  const cheatSections = [
    { type: 'plain',  label: '_vazio',              color: 'yellow', items: [
        { code: 'λ', desc: 'Vazio' },
      ],
    },
    { type: 'inline', label: 'Expoentes',            color: 'blue',   items: [
        { code: 'a^n' },
      ],
    },
    { type: 'inline', label: 'Maior/maior igual',    color: 'pink',   items: [
        { code: '>' },
        { code: '>=' },
      ],
    },
    { type: 'inline', label: "Quantidade de 'a'",    color: 'orange', items: [
        { code: '|w|a' },
      ],
    },
    { type: 'inline', label: 'Pertence',             color: 'white',  items: [
        { code: '∈' },
      ],
    },
    {                 label: 'Exemplo de linguagem', color: 'orange', items: [
        { code: '{a^n | n >= 0}' },
        { code: '{w ∈ {0,1}* | w é ímpar}' },
        { code: '{a^n b c^m | n > 0 e n é ímpar}' },
        { code: '{a^n b^m w ∈ {a,b}* | n >= 0, m > 0}' },
      ],
    },
  ];

  const diffBg = DIFF_COLOR[LEVEL_DIFFICULTY[level?.id]] ?? '#fff';

  return (
    <div className="workspace-wrapper">
      {/* Header */}
      <header className="game-header">
        <div className="header-left">
          <button className="back-btn" onClick={onBack}>⬅ Voltar</button>
        </div>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10 }}>
          <span className="mission-label">Identifique a Linguagem</span>
          <div className="mission-formula">{level.label}</div>
        </div>
        <div style={{ width: 150, display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 8 }}>
          <SvgStars count={stars} size={20} />
        </div>
      </header>

      {/* Words hint bar */}
      <div className="words-hint-bar">
        <div className="words-hint-group">
          <span className="words-hint-label accept">✓ Aceita</span>
          {simWords.filter(w => w.status === 'correct').map((w, i) => (
            <span key={i} className="words-hint-chip accept">{w.word}</span>
          ))}
        </div>
        <div className="words-hint-sep" />
        <div className="words-hint-group">
          <span className="words-hint-label reject">✗ Rejeita</span>
          {simWords.filter(w => w.status === 'wrong').map((w, i) => (
            <span key={i} className="words-hint-chip reject">{w.word}</span>
          ))}
        </div>
      </div>

      {/* Workspace */}
      <div className="workspace">
        {/* Canvas — fixed graph */}
        <section className="canvas-area" style={{
          cursor: isDrawMode ? (isErasing ? 'cell' : 'crosshair') : 'default' }}>
          <div className="canvas-label">Autômato Finito Determinístico</div>

          {/* ── Draw toolbar ── */}
          {isDrawMode && (
            <div className="draw-toolbar">
              {[
                { id: 'pencil', title: 'Lápis', icon: (
                  <svg width="15" height="15" viewBox="0 0 15 15">
                    <path d="M2 13 Q4 8 7 7.5 Q10 7 13 2" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
                  </svg>) },
                { id: 'line', title: 'Linha reta', icon: (
                  <svg width="15" height="15" viewBox="0 0 15 15">
                    <line x1="2" y1="7.5" x2="13" y2="7.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
                  </svg>) },
                { id: 'arrow', title: 'Seta', icon: (
                  <svg width="15" height="15" viewBox="0 0 15 15">
                    <line x1="2" y1="7.5" x2="11" y2="7.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
                    <polygon points="11,4.5 15,7.5 11,10.5" fill="currentColor"/>
                  </svg>) },
                { id: 'rect', title: 'Retângulo', icon: (
                  <svg width="14" height="14" viewBox="0 0 14 14">
                    <rect x="2" y="3" width="10" height="8" fill="none" stroke="currentColor" strokeWidth="2" rx="1"/>
                  </svg>) },
              ].map(({ id, icon, title }) => (
                <button key={id}
                  className={`draw-tool-btn draw-type-btn${drawTool === id && !isErasing ? ' active' : ''}`}
                  title={title}
                  onClick={() => { setDrawTool(id); setIsErasing(false); }}>
                  {icon}
                </button>
              ))}
              <div className="draw-toolbar-sep" />
              {DRAW_COLORS.map(({ hex, label }) => (
                <button key={hex}
                  className={`draw-color-btn${drawColor === hex && !isErasing ? ' active' : ''}`}
                  style={{ background: hex, border: hex === '#f8f8f8' ? '2.5px solid #aaa' : '2.5px solid #000' }}
                  title={label}
                  onClick={() => { setDrawColor(hex); setIsErasing(false); }} />
              ))}
              <div className="draw-toolbar-sep" />
              <div className="draw-stroke-size">
                {[2, 4, 7].map(sz => (
                  <button key={sz} className={drawSize === sz ? 'active' : ''}
                    style={{ width: 8 + sz * 3, height: 8 + sz * 3 }}
                    title={`Espessura ${sz}`}
                    onClick={() => { setDrawSize(sz); setIsErasing(false); }}>
                    <span style={{ display:'block', width: sz*1.5, height: sz*1.5, background:'#000', borderRadius:'50%' }} />
                  </button>
                ))}
              </div>
              <div className="draw-toolbar-sep" />
              <button className={`draw-tool-btn${isErasing ? ' active' : ''}`} title="Borracha"
                onClick={() => setIsErasing(v => !v)}>⌫</button>
              <button className="draw-tool-btn" title="Apagar todos os rabiscos"
                onClick={() => {
                  const snapshot = [...drawingsRef.current];
                  setDrawingStack(prev => [...prev, snapshot]);
                  setDrawings([]); drawingsRef.current = [];
                }}>🗑</button>
              <button className="draw-tool-btn" title="Desfazer (Ctrl+Z)"
                onClick={drawUndo}>↶</button>
              <div className="draw-toolbar-sep" />
              <button className="draw-tool-btn" title="Fechar ferramenta"
                style={{ fontSize: 11, fontWeight: 900 }}
                onClick={() => setIsDrawMode(false)}>✕</button>
            </div>
          )}

          {/* ── Toggle button (top-right) ── */}
          <button
            className={`p2-draw-toggle${isDrawMode ? ' active' : ''}`}
            title={isDrawMode ? 'Fechar ferramenta de desenho' : 'Abrir ferramenta de desenho'}
            onClick={() => setIsDrawMode(m => !m)}>
            <svg width="16" height="16" viewBox="0 0 16 16">
              <path d="M3 12 L10 5 L12 7 L5 14 Z" fill="#fbbf24" stroke="#000" strokeWidth="1.3" strokeLinejoin="round"/>
              <path d="M10 5 L12 3 L14 5 L12 7 Z" fill="#fb923c" stroke="#000" strokeWidth="1.3" strokeLinejoin="round"/>
              <path d="M3 12 L1.5 14.5 L5 14 Z" fill="#374151" stroke="#000" strokeWidth="1.2" strokeLinejoin="round"/>
            </svg>
          </button>

          {graph ? (
            <div className="p2-svg-box">
              <AFDGraphView
                nodes={graph.nodes}
                transitions={graph.transitions}
                highlightNodeId={simHighlight.nodeId}
                highlightType={simHighlight.type}
              />
              {/* Drawing overlay */}
              <svg ref={overlayRef}
                viewBox={`0 0 ${VW} ${VH}`}
                preserveAspectRatio="xMidYMid meet"
                style={{ position:'absolute', inset:0, width:'100%', height:'100%',
                  pointerEvents: isDrawMode ? 'auto' : 'none' }}
                onPointerDown={handleOverlayDown}
                onPointerMove={handleOverlayMove}
                onPointerUp={handleOverlayUp}>
                {drawings.map((s, i) => <DrawStroke key={i} stroke={s} idx={i} />)}
                {currentStroke && <DrawStroke stroke={currentStroke} idx="cur" />}
              </svg>
            </div>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',
              width: '100%', height: '100%', color: '#999', fontWeight: 900 }}>
              Grafo não disponível para este exercício
            </div>
          )}

          <div className="p2-legend">
            <span>
              <span style={{ fontWeight:'bold', fontSize:11, marginRight:3 }}>▶</span>
              <span className="p2-legend-dot initial" />
              {' '}Inicial
            </span>
            <span>
              <span className="p2-legend-dot final" style={{ outline:'2px solid #000', outlineOffset:2 }} />
              {' '}Final
            </span>
          </div>

          {/* Quadro-negro de notações */}
          <div className="p2-blackboard-wrapper">
            <button className="p2-blackboard-btn" onClick={() => setShowCheatsheet(s => !s)}>
              🖊 {showCheatsheet ? '▲ Fechar' : '📋 Como Escrever'}
            </button>
            {showCheatsheet && (
              <div className="p2-blackboard">
                <div className="p2-bb-section-label p2-chalk-white">Sintaxe</div>
                <div style={{ display: 'grid', gridTemplateColumns: 'max-content 1fr', alignItems: 'baseline', rowGap: 4, columnGap: 10 }}>
                  {cheatSections.filter(s => s.type === 'plain' || s.type === 'inline').flatMap(section => {
                    const labelText = section.type === 'plain'
                      ? (section.items[0]?.desc || section.label)
                      : section.label;
                    return [
                      <span key={`lbl-${section.label}`} className={`p2-chalk-${section.color} p2-chalk-dim`} style={{ textAlign: 'left', fontFamily: 'Caveat,"Comic Sans MS",cursive', fontSize: 13, fontWeight: 700 }}>
                        {labelText}:
                      </span>,
                      <div key={`val-${section.label}`} style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                        {section.items.map((item, i) => {
                          const key = `${section.label}-${i}`;
                          return (
                            <code key={key} className={`p2-chalk-${section.color}`} style={{ cursor: 'pointer' }}
                              onClick={(e) => { e.stopPropagation(); copyRow(item.code, key); }} title="Clique para copiar">
                              {item.code}{copiedIdx === key ? ' ✓' : ''}
                            </code>
                          );
                        })}
                      </div>,
                    ];
                  })}
                </div>
                {cheatSections.filter(s => !s.type).map(section => (
                  <div key={section.label} className="p2-bb-section">
                    <div className={`p2-bb-section-label p2-chalk-${section.color}`}>
                      {section.label}
                    </div>
                    {section.items.map((item, i) => {
                      const key = `${section.label}-${i}`;
                      return (
                        <div key={key} className="p2-bb-row" onClick={() => copyRow(item.code, key)} title="Clique para copiar">
                          <code className={`p2-chalk-${section.color}`}>{item.code}</code>
                          <span className="p2-bb-copy">{copiedIdx === key ? '✓' : ''}</span>
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Right panel */}
        <aside className="test-panel">
          {/* Word tester */}
          <div className="section-header" style={{ fontSize: 10, marginTop: 2 }}>Testar Palavra</div>
          <div className="test-input-area">
            <input
              type="text"
              className="word-input"
              placeholder="Ex: aab  (vazia = λ)"
              value={newSimWord}
              onChange={e => setNewSimWord(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleAddSimWord()}
              spellCheck={false}
              autoCorrect="off"
              autoCapitalize="off"
            />
            <button className="add-test-btn" onClick={handleAddSimWord}>+</button>
          </div>
          <button className="simulate-btn" onClick={openSimulation}>🔬 Simular</button>
          <div className="words-list">
            {simWords.map((item, idx) => (
              <div key={idx} className={`word-row ${item.status}`}>
                <span>{item.word}</span>
                <span>{item.status === 'correct' ? '✓' : '✕'}</span>
              </div>
            ))}
          </div>

          {/* Answer */}
          <div className="p2-answer-sep" />
          <div className="section-header" style={{ fontSize: 10, marginTop: 0 }}>Sua Resposta</div>
          <div className="test-input-area">
            <textarea
              ref={answerInputRef}
              className={`word-input p2-answer-textarea ${result === 'correct' ? 'p2-ok' : result === 'wrong' ? 'p2-err' : ''}`}
              placeholder="Ex: { a^n | n > 0 }"
              value={answer}
              onChange={e => { setAnswer(e.target.value); setResult(null); setFeedbackMsg(''); }}
              onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); if (result !== 'correct') handleCheck(); } }}
              onSelect={e => { savedCursor.current = { start: e.target.selectionStart, end: e.target.selectionEnd }; }}
              onBlur={e => { savedCursor.current = { start: e.target.selectionStart, end: e.target.selectionEnd }; }}
              disabled={result === 'correct'}
              spellCheck={false}
              autoCorrect="off"
              autoCapitalize="off"
              rows={2}
            />
          </div>

          {/* Feedback */}
          {result === 'wrong' && (
            <div style={{
              background: '#fef3c7',
              border: '2.5px solid #f59e0b',
              borderRadius: 6,
              padding: '7px 10px',
              fontSize: 12,
              fontWeight: 700,
              color: '#92400e',
              marginTop: 4,
              lineHeight: 1.45,
              boxShadow: '2px 2px 0 #000',
            }}>
              💡 {feedbackMsg || 'Não está certo — tente novamente!'}
              {attempts >= 2 && (
                <div style={{ marginTop: 3, fontSize: 11, color: '#dc2626', fontWeight: 900 }}>
                  ↓ Resposta liberada abaixo
                </div>
              )}
            </div>
          )}

          {showExpected && result !== 'correct' && (
            <div className="p2-expected">
              <strong>Resposta correta:</strong>
              <br />
              <code>{level.formula.replace(/^L\s*=\s*/, '')}</code>
            </div>
          )}

          {/* Actions */}
          {result !== 'correct' && (
            <button className="validate-btn slide-up-fade" onClick={handleCheck}>
              ✔ Verificar Resposta
            </button>
          )}

          {(result === 'correct' || showExpected) && (
            <button
              className="simulate-btn"
              style={{ marginTop: 4 }}
              onClick={handleReset}
            >
              🔄 Tentar Novamente
            </button>
          )}

          {attempts > 0 && result !== 'correct' && attempts < 2 && (
            <button
              className="simulate-btn"
              style={{ background: '#fef08a', marginTop: 4 }}
              onClick={() => showProf(level.hint || 'Analise os estados finais e as transições!')}
            >
              💡 Pedir Dica
            </button>
          )}

          <div style={{ fontSize: 11, color: '#666', fontWeight: 'bold', marginTop: 4 }}>
            Tentativas: {attempts} | Recorde: <SvgStars count={stars} size={12} />
          </div>
        </aside>
      </div>

      {/* SimPanel footer — same layout as AFDPart1 */}
      {showSimPanel && graph && (
        <footer className="bottom-hand">
          <SimPanel
            word={simWord}
            nodes={graph.nodes}
            transitions={graph.transitions}
            onClose={() => { setShowSimPanel(false); setSimHighlight({ nodeId: null, type: null }); }}
            onHighlightNode={(nid, type) => setSimHighlight({ nodeId: nid, type })}
          />
        </footer>
      )}

      {/* Professor HUD */}
      <div className="professor-hud" style={{ bottom: showSimPanel ? 186 : 18 }}>
        {profMsg && (
          <div className="professor-balloon">
            <img src={imgBalaoFala} alt="" />
            <div className="professor-balloon-text">{profMsg}</div>
          </div>
        )}
        <img
          src={imgMaurilioSerio}
          alt="Professor Maurílio"
          className="prof-img"
          onClick={() => showProf(
            attempts === 0
              ? 'Observe os estados: iniciais, finais e as transições entre eles!'
              : (level.hint || 'Siga o caminho das setas e note onde o autômato aceita!')
          )}
        />
      </div>

      {/* Victory popup */}
      {showVictory && (
        <div className="p2-victory-overlay">
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
            <img
              src={imgMaurilioExplicando}
              alt="Professor"
              style={{ height: 320, zIndex: 2, marginRight: -55 }}
            />
            <div style={{ position: 'relative', width: 300, height: 210, marginTop: -140, zIndex: 1 }}>
              <img
                src={imgBalaoFala}
                alt=""
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 1 }}
              />
              <div style={{
                position: 'absolute', inset: 0,
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
                padding: '18px 18px 48px', boxSizing: 'border-box',
                color: '#000', textAlign: 'center', zIndex: 2
              }}>
                <div style={{ fontWeight: 900, fontSize: 15, lineHeight: 1.4 }}>
                  {earnedStars === 3
                    ? '🌟 Incrível! Acertou de primeira!'
                    : earnedStars === 2
                    ? '⭐⭐ Muito bem! Você conseguiu!'
                    : '✅ Parabéns! Vai treinando!'}
                </div>
                <div style={{ marginTop: 10 }}>
                  <SvgStars count={earnedStars} size={26} />
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 20, marginTop: 36 }}>
            <button className="menu-btn" onClick={onBack} style={{ padding: '14px 28px', fontSize: 20 }}>
              Voltar ao Menu
            </button>
            {nextLevel && (
              <button
                className="menu-btn primary"
                onClick={() => onNext(nextLevel)}
                style={{ padding: '14px 28px', fontSize: 20 }}
              >
                Próxima: {nextLevel.label} →
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────
export default function AFDPart2({ onBack, showToast }) {
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [p2Progress, setP2Progress] = useState(getP2Progress);

  const updateP2Progress = useCallback((levelId, stars) => {
    setP2Progress(prev => {
      const cur = prev[levelId]?.stars || 0;
      if (stars <= cur) return prev;
      const next = { ...prev, [levelId]: { stars } };
      saveP2Progress(next);
      return next;
    });
  }, []);

  if (selectedLevel) {
    return (
      <ExerciseScreen
        key={selectedLevel.id}
        level={selectedLevel}
        progress={p2Progress}
        updateProgress={updateP2Progress}
        showToast={showToast}
        onBack={() => setSelectedLevel(null)}
        onNext={lvl => setSelectedLevel(lvl)}
      />
    );
  }

  return (
    <LevelList
      progress={p2Progress}
      onSelect={setSelectedLevel}
      onBack={onBack}
    />
  );
}
