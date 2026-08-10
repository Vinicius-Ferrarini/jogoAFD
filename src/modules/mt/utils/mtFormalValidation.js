// ─── mtFormalValidation: validação da Descrição Formal da MT ─────────────────
// Mesma lógica de checkFormalBraceFormat/validateFormalElements do AFD
// (FormalDescriptionModal.jsx), adaptada à 7-tupla da MT — Q, Σ, Γ, q₀, □, F —
// mais a tabela δ (matriz Estados×Símbolos, célula = "destino, escreve, move"
// em texto livre — formato já usado pelo painel formal de MT, não mudado).
// Compartilhada entre MTPart1.jsx (Transdutora) e MTReconPart1.jsx
// (Reconhecedora): os dois usam a MESMA estrutura de formalAnswers/EMPTY_FORMAL.
import { BLANK } from './tmAlgorithms';

// Remove chaves e divide por vírgula — igual parseFormalInput do AFD.
export function parseFormalInput(str) {
  const clean = str ? str.trim().replace(/^\{|\}$/g, '').trim() : '';
  return clean ? clean.split(',').map(s => s.trim()).filter(Boolean) : [];
}

// Retorna 'multi_needs_braces' | 'single_no_braces' | null — igual AFD.
export function checkFormalBraceFormat(str, isSingle = false) {
  const t = (str || '').trim();
  if (!t || t === '{}') return null;
  const hasBraces = t.startsWith('{') && t.endsWith('}');
  const hasComma  = t.includes(',');
  if (isSingle) {
    return (t.startsWith('{') || t.endsWith('}')) ? 'single_no_braces' : null;
  }
  if (hasComma && !hasBraces) return 'multi_needs_braces';
  if (!hasComma && hasBraces) return 'single_no_braces';
  return null;
}

const braceMsg = (fmt) => {
  if (!fmt) return null;
  return fmt === 'multi_needs_braces'
    ? 'Tem mais de 1 elemento, use { }'
    : 'Tem somente 1 elemento, retire { }';
};

// Γ (alfabeto da fita) real do grafo desenhado: símbolos lidos/escritos nas
// transições, sempre incluindo o branco. Mesmo raciocínio do canvasGamma do AP
// (ali é pop/push da pilha; aqui é read/write da fita).
function canvasGammaFromGraph(transitions) {
  const s = new Set([BLANK]);
  for (const t of transitions) {
    if (t.read)  s.add(t.read === '' ? BLANK : t.read);
    if (t.write) s.add(t.write === '' ? BLANK : t.write);
  }
  return [...s].sort();
}

// Valida os 6 campos da tupla (Q, Σ, Γ, q₀, □, F) contra o grafo desenhado.
// Retorna { ok: true } ou { ok: false, fieldErrors: {...} }.
export function validateMTFormalFields({ formalAnswers, nodes, alphabet, transitions }) {
  const { states, sigma, gamma, initial, blank, final: finalStr } = formalAnswers;

  const fmts = {
    states:  checkFormalBraceFormat(states),
    sigma:   checkFormalBraceFormat(sigma),
    gamma:   checkFormalBraceFormat(gamma),
    initial: checkFormalBraceFormat(initial, true),
    blank:   checkFormalBraceFormat(blank, true),
    final:   checkFormalBraceFormat(finalStr),
  };
  if (Object.values(fmts).some(Boolean)) {
    return {
      ok: false,
      reason: 'brace_format',
      fieldErrors: {
        states:  braceMsg(fmts.states),
        sigma:   braceMsg(fmts.sigma),
        gamma:   braceMsg(fmts.gamma),
        initial: braceMsg(fmts.initial),
        blank:   braceMsg(fmts.blank),
        final:   braceMsg(fmts.final),
      },
    };
  }

  const pStates  = parseFormalInput(states);
  const pSigma   = parseFormalInput(sigma);
  const pGamma   = parseFormalInput(gamma);
  const pInitial = parseFormalInput(initial);
  const pBlank   = parseFormalInput(blank);
  const pFinal   = parseFormalInput(finalStr);

  const canvasStates  = nodes.map(n => n.label ?? n.id);
  const canvasSigma   = alphabet || [];
  const canvasGamma   = canvasGammaFromGraph(transitions);
  const canvasInitial = nodes.find(n => n.isInitial)?.label ?? nodes.find(n => n.isInitial)?.id;
  const canvasFinal   = nodes.filter(n => n.isFinal).map(n => n.label ?? n.id);

  const errors = { states: null, sigma: null, gamma: null, initial: null, blank: null, final: null };

  const extraQ   = pStates.filter(x => !canvasStates.includes(x));
  const missingQ = canvasStates.filter(x => !pStates.includes(x));
  if (extraQ.length > 0 && missingQ.length > 0)
    errors.states = `${extraQ.join(', ')} não pertence${extraQ.length > 1 ? 'm' : ''} — e ainda faltam estados`;
  else if (extraQ.length > 0)
    errors.states = `${extraQ.join(', ')} não pertence${extraQ.length > 1 ? 'm' : ''} ao conjunto de estados`;
  else if (missingQ.length > 0)
    errors.states = 'Faltam estados no conjunto';

  const extraSigma   = pSigma.filter(x => !canvasSigma.includes(x));
  const missingSigma = canvasSigma.filter(x => !pSigma.includes(x));
  if (extraSigma.length > 0 && missingSigma.length > 0)
    errors.sigma = `${extraSigma.join(', ')} não pertence${extraSigma.length > 1 ? 'm' : ''} ao alfabeto — e ainda faltam símbolos`;
  else if (extraSigma.length > 0)
    errors.sigma = `${extraSigma.join(', ')} não pertence${extraSigma.length > 1 ? 'm' : ''} ao alfabeto`;
  else if (missingSigma.length > 0)
    errors.sigma = 'Faltam símbolos no alfabeto de entrada';

  const extraGamma   = pGamma.filter(x => !canvasGamma.includes(x));
  const missingGamma = canvasGamma.filter(x => !pGamma.includes(x));
  if (extraGamma.length > 0 && missingGamma.length > 0)
    errors.gamma = `${extraGamma.join(', ')} não pertence${extraGamma.length > 1 ? 'm' : ''} ao alfabeto da fita — e ainda faltam símbolos`;
  else if (extraGamma.length > 0)
    errors.gamma = `${extraGamma.join(', ')} não pertence${extraGamma.length > 1 ? 'm' : ''} ao alfabeto da fita`;
  else if (missingGamma.length > 0)
    errors.gamma = 'Faltam símbolos no alfabeto da fita (Γ)';

  const wrongInitial = canvasInitial
    ? (pInitial.length !== 1 || pInitial[0] !== canvasInitial)
    : pInitial.length !== 0;
  if (wrongInitial)
    errors.initial = pInitial.length === 0
      ? 'Informe o estado inicial'
      : `${pInitial[0]} não é o estado inicial`;

  if (pBlank.length !== 1 || pBlank[0] !== BLANK)
    errors.blank = `O símbolo branco é "${BLANK}"`;

  const extraF   = pFinal.filter(x => !canvasFinal.includes(x));
  const missingF = canvasFinal.filter(x => !pFinal.includes(x));
  if (extraF.length > 0 && missingF.length > 0)
    errors.final = `${extraF.join(', ')} não é${extraF.length > 1 ? 'o' : ''} estado${extraF.length > 1 ? 's' : ''} final${extraF.length > 1 ? 'is' : ''} — e ainda faltam outros`;
  else if (extraF.length > 0)
    errors.final = `${extraF.join(', ')} não é${extraF.length > 1 ? 'o' : ''} estado${extraF.length > 1 ? 's' : ''} final${extraF.length > 1 ? 'is' : ''}`;
  else if (missingF.length > 0)
    errors.final = 'Faltam estados finais';

  if (Object.values(errors).some(Boolean))
    return { ok: false, reason: 'field_mismatch', fieldErrors: errors };

  return {
    ok: true,
    parsed: { states: pStates, sigma: pSigma, gamma: pGamma, initial: pInitial[0], blank: pBlank[0], final: pFinal },
  };
}

function idToLabel(nodes, id) {
  return nodes.find(n => n.id === id)?.label ?? id;
}

// Diagnostica uma célula individual da tabela δ contra a transição real
// esperada (ou null, se a célula deveria ficar vazia). Retorna uma mensagem
// específica e acionável (não só "está errado") — usada pra mostrar o
// primeiro erro encontrado de forma clara ao jogador.
function diagnoseCellError(userVal, actualTrans, nodes) {
  if (!actualTrans) {
    return 'Não existe transição aqui — deixe a célula vazia.';
  }

  if (userVal.startsWith('(') || userVal.endsWith(')')) {
    return 'Não use parênteses — apenas "destino, escreve, move".';
  }

  const parts = userVal.split(',');
  if (parts.length < 3) {
    return 'Faltam vírgulas — o formato é "destino, escreve, move" (2 vírgulas).';
  }
  if (parts.length > 3) {
    return 'Vírgulas demais — o formato é "destino, escreve, move" (2 vírgulas).';
  }

  const [uDest, uWrite, uMove] = parts.map(p => p.trim());
  const actualDest  = idToLabel(nodes, actualTrans.to);
  const actualWrite = actualTrans.write === '' ? BLANK : actualTrans.write;
  const actualMove  = actualTrans.move;

  if (!uDest) return 'Falta o estado de destino.';
  if (!nodes.some(n => (n.label ?? n.id) === uDest)) return `O estado "${uDest}" não existe no grafo.`;
  if (uDest !== actualDest) return `O destino correto não é "${uDest}".`;

  if (uMove !== 'L' && uMove !== 'R') return 'A direção só pode ser "L" ou "R".';
  if (uMove !== actualMove) return `A direção "${uMove}" está errada.`;

  if ((uWrite === '' && actualWrite !== BLANK) || (uWrite !== '' && uWrite !== actualWrite)) {
    return `O símbolo escrito está errado.`;
  }

  return 'Célula incorreta.';
}

// Valida a tabela δ (matriz Estados×Símbolos, célula = "destino, escreve, move"
// em texto livre) contra as transições reais do grafo. `stateRows`/`symbolCols`
// devem ser os MESMOS arrays que o painel já usa pra desenhar a tabela (ids dos
// nós reais, colunas Σ∪Γ) — evita descompasso entre o que é mostrado e validado.
// Retorna { ok: true } ou { ok: false, cellErrors: { 'q0|a': true, ... }, firstError }
// — firstError é a mensagem detalhada da PRIMEIRA célula errada encontrada
// (varredura em ordem de stateRows × symbolCols); as demais só ficam marcadas
// em vermelho, sem mensagem própria (evita afogar o jogador em texto).
export function validateMTFormalTransitions({ stateRows, symbolCols, deltaCells, nodes, transitions }) {
  const errors = {};
  let firstError = null;

  for (const stId of stateRows) {
    for (const sym of symbolCols) {
      const key = `${stId}|${sym}`;
      const userVal = (deltaCells?.[key] ?? '').trim();

      const actualTrans = transitions.find(t => t.from === stId && (t.read === sym || (t.read === '' && sym === BLANK)));

      if (!actualTrans) {
        // Sem transição real para essa combinação: célula deve ficar vazia.
        if (userVal !== '') {
          errors[key] = true;
          firstError ??= { key, message: diagnoseCellError(userVal, actualTrans, nodes) };
        }
        continue;
      }

      const actualDest  = idToLabel(nodes, actualTrans.to);
      const actualWrite = actualTrans.write === '' ? BLANK : actualTrans.write;
      const actualMove  = actualTrans.move;

      const parts = userVal.split(',').map(p => p.trim());
      const [uDest, uWrite, uMove] = parts;
      const ok = parts.length === 3
        && uDest === actualDest
        && (uWrite === actualWrite || (uWrite === '' && actualWrite === BLANK))
        && uMove === actualMove;

      if (!ok) {
        errors[key] = true;
        firstError ??= { key, message: diagnoseCellError(userVal, actualTrans, nodes) };
      }
    }
  }

  if (Object.keys(errors).length > 0) return { ok: false, cellErrors: errors, firstError };
  return { ok: true };
}
