import { useState, useRef, useCallback } from 'react';

// Sobrescritos Unicode (usados em level.formula/aliases, ver docs/AFD_NOTACAO_ELEVADO.md)
// → forma ASCII "^letra" antes de qualquer outra normalização. O jogador só
// consegue DIGITAR "^" (não há tecla de sobrescrito), então o gabarito
// precisa "descer" pro mesmo formato ASCII que a resposta do usuário já usa
// — o restante do algoritmo (ex.: a regra de "bb^n" na linha ~40) depende
// sintaticamente de "^" literal. Sem esta conversão, o charset final
// (.replace(/[^a-z0-9^*+|(),_.=><!]/g, '')) descartaria ⁿ/ᵐ/etc. em silêncio,
// e a fórmula esperada perderia todos os expoentes.
const SUPERSCRIPT_TO_ASCII = {
  '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4', '⁵': '5',
  '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9',
  'ⁿ': 'n', 'ᵐ': 'm', 'ᵖ': 'p', 'ʳ': 'r', 'ˢ': 's', 'ᵗ': 't',
  'ᵘ': 'u', 'ᵏ': 'k', 'ⁱ': 'i', 'ʲ': 'j',
};
// Um "^" só no INÍCIO de cada bloco contíguo de sobrescritos (ex.: "b²ᵐ" → "b^2m",
// não "b^2^m") — replicando o formato ASCII original onde o expoente inteiro
// (dígitos+letra colados, ex.: "2m") vem de um único "^".
function superscriptToAscii(s) {
  return s.replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹ⁿᵐᵖʳˢᵗᵘᵏⁱʲ]+/g,
    block => '^' + [...block].map(ch => SUPERSCRIPT_TO_ASCII[ch]).join(''));
}

// ── Normalize for comparison ──────────────────────────────────────────────────
export function normalize(s) {
  let r = superscriptToAscii(s)
    .replace(/^L\s*=\s*/, '')
    .trim()
    .toLowerCase()
    .replace(/\s+e\s+/g, ',')
    .replace(/é/g, '')
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(//g, '\xe9')
    .replace(/\s+/g, '')
    .replace(/\xe9umnumero/g, '\xe9')
    .replace(/[{}[\]]/g, '')
    .replace(/[\\/]/g, '|')
    .replace(/λ|ε|epsilon/gi, 'lambda')
    .replace(/∅|\\emptyset|vazio|empty/gi, 'emptyset')
    .replace(/[≥]/g, '>=')
    .replace(/[≤]/g, '<=');

  // Normalize word-length phrases to a canonical "wlen>N" form before pipe-splitting.
  // Step 2 runs first so that "|w|temtamanho>3" doesn't get partially matched by Step 1.
  // Step 2 — protect |w| (word-length notation) from being confused with the set-builder "|"
  r = r.replace(/\|w\|/g, 'wlen');
  // Step 3 — strip noise between wlen and comparison: "wlentemtamanho>3" → "wlen>3"
  r = r.replace(/wlen(?:tem)?(?:tamanho)?/g, 'wlen');
  // Step 1 — "tamanho maior que N" / "w tem tamanho > N" (no |w| notation); string already lowercase
  r = r.replace(/(?:w)?(?:tem)?tamanho(?:maior(igual)?(?:a+|que)?|>(=)?)?(?:que|a+)?(\d+)/g, (_, igt, gte, n) => {
    const num = parseInt(n, 10);
    return `wlen>${(igt || gte) ? num - 1 : num}`;
  });
  // Step 4 — "wlen maior que N" / "wlen maior igual a N"
  r = r.replace(/wlenmaiorque(\d+)/g, (_, n) => `wlen>${n}`);
  r = r.replace(/wlenmaiorigual(?:que|a+)?(\d+)/g, (_, n) => `wlen>${parseInt(n, 10) - 1}`);
  // Step 5 — "wlen >= N" is equivalent to "wlen > N-1" for integers
  r = r.replace(/wlen>=(\d+)/g, (_, n) => `wlen>${parseInt(n, 10) - 1}`);
  const absorbed = new Set();
  r = r.replace(/([a-z])\1\^([a-z]+?)(?=[^a-z]|[a-z]\^|$)/g, (_, ch, v) => { absorbed.add(v); return `${ch}^${v}`; });
  for (const v of absorbed)
    r = r.replace(new RegExp(`([,|])${v}>=0`, 'g'), (_, sep) => `${sep}${v}>0`);
  r = r.replace(/([a-z]+)>=1(?![0-9])/g, '$1>0');
  const pipePos = r.indexOf('|');
  if (pipePos !== -1) {
    const cano = ['n', 'm', 'p', 'k', 'j', 'i'];
    let wPart = r.slice(0, pipePos);
    let cPart = r.slice(pipePos + 1);
    const varSet = new Set();
    for (const [, v] of cPart.matchAll(/([a-z]+)(?=[><=])/g)) if (v !== 'wlen') varSet.add(v);
    const order = [...varSet].sort((a, b) => {
      const ia = wPart.indexOf(`^${a}`);
      const ib = wPart.indexOf(`^${b}`);
      return (ia < 0 ? Infinity : ia) - (ib < 0 ? Infinity : ib);
    });
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

  const openBraces  = (raw.match(/\{/g)  || []).length;
  const closeBraces = (raw.match(/\}/g) || []).length;
  if (openBraces > closeBraces)
    return `Você esqueceu de fechar ${openBraces - closeBraces > 1 ? openBraces - closeBraces + ' chaves' : 'a chave'}! Adicione } ao final.`;
  if (closeBraces > openBraces)
    return `Você esqueceu de abrir ${closeBraces - openBraces > 1 ? closeBraces - openBraces + ' chaves' : 'a chave'}! Adicione { no início.`;

  const expNeedsPipe = ne.indexOf('|') >= 0 && !ne.includes('emptyset') && ne !== 'lambda';
  if (expNeedsPipe && openBraces > 0) {
    const firstOpen   = raw.indexOf('{');
    const lastClose   = raw.lastIndexOf('}');
    const outerContent = firstOpen >= 0 && lastClose > firstOpen ? raw.slice(firstOpen + 1, lastClose) : '';
    if (outerContent && !/[|/\\]/.test(outerContent))
      return 'Falta o "|" dentro das chaves! Use: { padrão | condição }. Ex: { a^n | n > 0 }';
  }

  const rawHasWVar = /(?<![a-z])w(?![a-z])/i.test(raw);
  const rawHasIn   = raw.includes('∈');
  if (rawHasWVar && !rawHasIn)
    return 'Se usar "w" como variável de palavra, inclua ∈ para indicar o conjunto: ex: { w ∈ {a,b}* | condição }';

  const expHasWVar           = /(?<![a-z])w(?![a-z])/i.test(expectedFormula);
  const expUsesCountNotation = /\|w\|_?[a-z]/i.test(expectedFormula);
  if (expHasWVar && !rawHasWVar && !/emptyset|lambda/i.test(raw)) {
    if (expUsesCountNotation)
      return 'Este autômato conta letras, não posições (sem ordem). Tente: { w ∈ {a,b}* | |w|_a > ... }';
    return 'Esta linguagem usa variável de palavra "w". Tente começar com: { w ∈ Σ* | ... }';
  }

  if (alphabet?.length) {
    for (const m of raw.matchAll(/\|w\|_?([a-z])/gi)) {
      if (!alphabet.includes(m[1]))
        return `O símbolo "${m[1]}" em |w|_${m[1]} não está no alfabeto {${alphabet.join(',')}} — verifique os símbolos!`;
    }
  }

  if (/\|w\|(?![_a-z])/i.test(raw) && /\|w\|_?[a-z]/i.test(expectedFormula))
    return 'Falta o subscrito em |w|! Use |w|_a para contar "a"s, ex: { w ∈ {a,b}* | |w|_a > 0 }';

  if (nu.includes('emptyset') && !ne.includes('emptyset'))
    return 'O autômato aceita palavras — não é linguagem vazia (∅)!';
  if (!nu.includes('emptyset') && ne.includes('emptyset'))
    return 'Nenhuma palavra é aceita aqui. Escreva a linguagem vazia: ∅';

  if (nu === 'lambda' && ne !== 'lambda')
    return 'Só {λ} não basta — o autômato aceita palavras além da vazia!';
  if (nu !== 'lambda' && ne === 'lambda')
    return 'Somente λ (palavra vazia) é aceita aqui. Escreva: { λ }';

  const pipeU = nu.indexOf('|');
  const pipeE = ne.indexOf('|');

  if (pipeU < 0 && pipeE >= 0)
    return 'Falta a condição! Use: { padrão | condição }. Ex: { a^n | n > 0 }';
  if (pipeU >= 0 && pipeE < 0)
    return 'A linguagem não precisa de condição. Retire o "|" e o que vem depois!';

  if (pipeU >= 0 && pipeE >= 0) {
    const wordU    = nu.slice(0, pipeU);
    const wordE    = ne.slice(0, pipeE);
    const condU    = nu.slice(pipeU + 1);
    const condE    = ne.slice(pipeE + 1);
    const wordSame = wordU === wordE;
    const condSame = condU === condE;

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

  if (!nu.includes('lambda') && ne.includes('lambda'))
    return 'λ (palavra vazia) também é aceita! Inclua na sua resposta.';
  if (nu.includes('lambda') && !ne.includes('lambda'))
    return 'λ não faz parte desta linguagem. Retire da sua resposta!';

  return 'Simule palavras com o testador para descobrir quais são aceitas — depois tente de novo!';
}

// ── Hook ──────────────────────────────────────────────────────────────────────
export default function useP2Answer({ level, graph, updateProgress, showToast }) {
  const [answer,       setAnswer]       = useState('');
  const [attempts,     setAttempts]     = useState(0);
  const [result,       setResult]       = useState(null);
  const [showExpected, setShowExpected] = useState(false);
  const [showVictory,  setShowVictory]  = useState(false);
  const [earnedStars,  setEarnedStars]  = useState(0);
  const [profMsg,      setProfMsg]      = useState('');
  const [errorAlert,   setErrorAlert]   = useState('');

  const speechRef      = useRef(null);
  const errorAlertRef  = useRef(null);
  const answerInputRef = useRef(null);
  const savedCursor    = useRef(null);

  const showProf = useCallback((msg, dur = 6000) => {
    setProfMsg(msg);
    if (speechRef.current) clearTimeout(speechRef.current);
    speechRef.current = setTimeout(() => setProfMsg(''), dur);
  }, []);

  const clearProf = useCallback(() => {
    if (speechRef.current) clearTimeout(speechRef.current);
    setProfMsg('');
  }, []);

  const setAnswerText = useCallback((val) => {
    setAnswer(val);
    setResult(null);
  }, []);

  const insertAtCursor = useCallback((text) => {
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
  }, [answer]);

  const handleCheck = useCallback(() => {
    if (!answer.trim()) { showToast('Digite sua resposta primeiro!', 'info'); return; }
    const n = attempts + 1;
    setAttempts(n);
    const nu      = normalize(answer);
    const correct = [level.formula, ...(level.aliases || [])].some(f => normalize(f) === nu);
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
      setResult('wrong');
      if (n >= 2) setShowExpected(true);
      setErrorAlert(fb);
      if (errorAlertRef.current) clearTimeout(errorAlertRef.current);
      errorAlertRef.current = setTimeout(() => setErrorAlert(''), 4000);
    }
  }, [answer, attempts, level, graph, updateProgress, showToast]);

  const handleReset = useCallback(() => {
    setAnswer(''); setAttempts(0); setResult(null);
    setShowExpected(false); setShowVictory(false); setEarnedStars(0);
    setErrorAlert('');
    if (errorAlertRef.current) clearTimeout(errorAlertRef.current);
  }, []);

  return {
    answer,
    setAnswerText,
    insertAtCursor,
    attempts,
    result,
    showExpected,
    showVictory,
    earnedStars,
    profMsg,
    errorAlert,
    answerInputRef,
    savedCursor,
    showProf,
    clearProf,
    handleCheck,
    handleReset,
  };
}
