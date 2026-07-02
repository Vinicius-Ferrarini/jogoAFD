// FormalDescriptionModal.jsx — v5.0 (+ Modo Aula demo com auto-scroll)
import { useState, useEffect, useRef } from 'react';
import './FormalDescriptionModal.css';

// ─── Funções puras exportadas (testáveis sem React) ───────────────────────────

// Remove chaves e divide por vírgula
export function parseFormalInput(str) {
  const clean = str ? str.trim().replace(/^\{|\}$/g, '').trim() : '';
  return clean ? clean.split(',').map(s => s.trim()).filter(Boolean) : [];
}

// Retorna 'multi_needs_braces' | 'single_no_braces' | null
// isSingle=true: campo nunca deve ter chaves (q0)
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

// Valida os 4 campos de elementos contra o canvas.
// Retorna { ok: true } ou { ok: false, fieldErrors: {Q, Sigma, initial, final} }
export function validateFormalElements({ inputQ, inputSigma, inputInitial, inputFinal, nodes, alphabet }) {
  const braceErrQ       = checkFormalBraceFormat(inputQ);
  const braceErrSigma   = checkFormalBraceFormat(inputSigma);
  const braceErrInitial = checkFormalBraceFormat(inputInitial, true);
  const braceErrFinal   = checkFormalBraceFormat(inputFinal);

  const braceMsg = (fmt) => {
    if (!fmt) return null;
    return fmt === 'multi_needs_braces'
      ? 'Tem mais de 1 elemento, use { }'
      : 'Tem somente 1 elemento, Retire{ }';
  };

  if (braceErrQ || braceErrSigma || braceErrInitial || braceErrFinal) {
    return {
      ok: false,
      reason: 'brace_format',
      fieldErrors: {
        Q:       braceMsg(braceErrQ),
        Sigma:   braceMsg(braceErrSigma),
        initial: braceMsg(braceErrInitial),
        final:   braceMsg(braceErrFinal),
      },
    };
  }

  const pQ       = parseFormalInput(inputQ);
  const pSigma   = parseFormalInput(inputSigma);
  const pInitial = parseFormalInput(inputInitial);
  const pFinal   = parseFormalInput(inputFinal);

  const canvasQ       = nodes.map(n => n.label ?? n.id);
  const canvasSigma   = alphabet || [];
  const canvasInitial = nodes.find(n => n.isInitial)?.label ?? nodes.find(n => n.isInitial)?.id;
  const canvasFinal   = nodes.filter(n => n.isFinal).map(n => n.label ?? n.id);

  const errors = { Q: null, Sigma: null, initial: null, final: null };

  const extraQ   = pQ.filter(x => !canvasQ.includes(x));
  const missingQ = canvasQ.filter(x => !pQ.includes(x));
  if (extraQ.length > 0 && missingQ.length > 0)
    errors.Q = `${extraQ.join(', ')} não pertence${extraQ.length > 1 ? 'm' : ''} — e ainda faltam estados`;
  else if (extraQ.length > 0)
    errors.Q = `${extraQ.join(', ')} não pertence${extraQ.length > 1 ? 'm' : ''} ao conjunto de estados`;
  else if (missingQ.length > 0)
    errors.Q = `Faltam estados no conjunto — verifique se há outros erros`;

  const extraSigma   = pSigma.filter(x => !canvasSigma.includes(x));
  const missingSigma = canvasSigma.filter(x => !pSigma.includes(x));
  if (extraSigma.length > 0 && missingSigma.length > 0)
    errors.Sigma = `${extraSigma.join(', ')} não pertence${extraSigma.length > 1 ? 'm' : ''} ao alfabeto — e ainda faltam símbolos`;
  else if (extraSigma.length > 0)
    errors.Sigma = `${extraSigma.join(', ')} não pertence${extraSigma.length > 1 ? 'm' : ''} ao alfabeto`;
  else if (missingSigma.length > 0)
    errors.Sigma = `Faltam símbolos no alfabeto`;

  const wrongInitial = canvasInitial
    ? (pInitial.length !== 1 || pInitial[0] !== canvasInitial)
    : pInitial.length !== 0;
  if (wrongInitial)
    errors.initial = pInitial.length === 0
      ? 'Informe o estado inicial'
      : `${pInitial[0]} não é o estado inicial`;

  const extraF   = pFinal.filter(x => !canvasFinal.includes(x));
  const missingF = canvasFinal.filter(x => !pFinal.includes(x));
  if (extraF.length > 0 && missingF.length > 0)
    errors.final = `${extraF.join(', ')} não é${extraF.length > 1 ? 'o' : ''} estado${extraF.length > 1 ? 's' : ''} final${extraF.length > 1 ? 'is' : ''} — e ainda faltam outros`;
  else if (extraF.length > 0)
    errors.final = `${extraF.join(', ')} não é${extraF.length > 1 ? 'o' : ''} estado${extraF.length > 1 ? 's' : ''} final${extraF.length > 1 ? 'is' : ''}`;
  else if (missingF.length > 0)
    errors.final = `Faltam estados finais`;

  if (Object.values(errors).some(Boolean))
    return { ok: false, reason: 'field_mismatch', fieldErrors: errors };

  return { ok: true, parsed: { Q: pQ, Sigma: pSigma, initial: pInitial[0], final: pFinal } };
}

// Valida a tabela δ preenchida pelo aluno contra as transições do canvas.
// Retorna { ok: true } ou { ok: false, cellErrors: { 'q0_a': true, ... } }
export function validateFormalTransitions({ parsedQ, parsedSigma, transitionTableData, nodes, transitions }) {
  const errors = {};
  for (const q of parsedQ) {
    for (const s of parsedSigma) {
      const userDest   = transitionTableData[q]?.[s] ?? '';
      const actualTrans = transitions.find(t => {
        const fromLabel = nodes.find(n => n.id === t.from)?.label ?? t.from;
        return fromLabel === q && t.symbol.split(',').map(x => x.trim()).includes(s);
      });
      const actualDest = actualTrans
        ? (nodes.find(n => n.id === actualTrans.to)?.label ?? actualTrans.to)
        : '';
      if (userDest !== actualDest) errors[`${q}_${s}`] = true;
    }
  }
  if (Object.keys(errors).length > 0)
    return { ok: false, cellErrors: errors };
  return { ok: true };
}

export default function FormalDescriptionModal({
  isOpen,
  onClose,
  nodes,
  transitions,
  alphabet,
  currentLevelId,
  onSuccess,
  showToast,
  onValidateGraph,
  onTableFocusChange,
  demo, // { fields, rows, deltaRows, allStates, current } — modo Aula Guiada (read-only)
}) {
  // ── Auto-scroll para o elemento ativo no modo demo ─────────────────────────
  const currentElRef = useRef(null);
  const demoKey = demo?.current
    ? (demo.current.kind === 'delta'
        ? `d:${demo.current.rowKey}`
        : `t:${Object.keys(demo.current.fields || {}).join(',')}`)
    : null;
  useEffect(() => {
    if (demoKey) currentElRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, [demoKey]);
  const [inputQ,       setInputQ]       = useState('');
  const [inputSigma,   setInputSigma]   = useState('');
  const [inputInitial, setInputInitial] = useState('');
  const [inputFinal,   setInputFinal]   = useState('');

  const [areElementsValid,    setAreElementsValid]    = useState(false);
  const [parsedQ,             setParsedQ]             = useState([]);
  const [parsedSigma,         setParsedSigma]         = useState([]);
  const [transitionTableData, setTransitionTableData] = useState({});

  const [fieldErrors, setFieldErrors] = useState({ Q: null, Sigma: null, initial: null, final: null });
  const [tableErrors, setTableErrors] = useState({});

  useEffect(() => {
    if (isOpen) {
      setInputQ(''); setInputSigma(''); setInputInitial(''); setInputFinal('');
      setAreElementsValid(false);
      setParsedQ([]); setParsedSigma([]); setTransitionTableData({});
      setFieldErrors({ Q: null, Sigma: null, initial: null, final: null });
      setTableErrors({});
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // ── Modo demo (Aula Guiada): read-only, revela a tupla + δ passo a passo ───
  if (demo) {
    const fields        = demo.fields || {};
    const allStates     = demo.allStates ?? [];
    const deltaRows     = demo.deltaRows ?? {};
    const revealedRows  = demo.rows ?? new Set();
    const curKind       = demo.current?.kind;
    const curField      = curKind === 'tuple' ? Object.keys(demo.current.fields || {})[0] : null;
    const curRow        = curKind === 'delta'  ? demo.current.rowKey : null;

    const revealed  = (k) => Object.prototype.hasOwnProperty.call(fields, k);
    const demoField = (key, label, placeholder) => (
      <div
        ref={key === curField ? currentElRef : null}
        className={`form-group ap-demo-group${revealed(key) ? '' : ' ap-demo-dim'}`}
      >
        <label>{label}</label>
        <input type="text" readOnly
          value={revealed(key) ? fields[key] : ''}
          placeholder={revealed(key) ? '' : placeholder}
          translate="no"
        />
      </div>
    );

    return (
      <div className="formal-sidebar-content">
        <h2>Descrição Formal (AFD)</h2>
        <p style={{ fontSize: 12, color: '#555', margin: '0 0 8px' }}>
          👨‍🏫 <b>Modo Aula</b> — M = (Q, Σ, δ, q₀, F) lido direto do grafo.
        </p>

        {demoField('Q',       'Q (Conjunto de Estados):',  '…')}
        {demoField('Sigma',   'Σ (Alfabeto):',             '…')}
        {demoField('initial', 'q₀ (Estado Inicial):',      '…')}
        {demoField('final',   'F (Estados Finais):',       '…')}

        {allStates.length > 0 && (
          <div className="table-section">
            <h3>Tabela de transição (δ)</h3>
            <div style={{ overflowX: 'auto' }}>
              <table className="transition-table">
                <thead>
                  <tr>
                    <th>δ</th>
                    {(alphabet || []).map(s => <th key={s}>{s}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {allStates.map(lbl => {
                    const shown   = revealedRows.has(lbl);
                    const isCur   = lbl === curRow;
                    return (
                      <tr
                        key={lbl}
                        ref={isCur ? currentElRef : null}
                        className={`${shown ? '' : 'ap-demo-dim'}${isCur ? ' ap-delta-row-current' : ''}`}
                      >
                        <td className="row-header">{lbl}</td>
                        {(alphabet || []).map(sym => (
                          <td key={sym}>{shown ? (deltaRows[lbl]?.[sym] ?? '') : '…'}</td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    );
  }


  // Strips braces and splits — used only after format validation passes
  const parseInput = (str) => parseFormalInput(str);

  // Returns 'multi_needs_braces' | 'single_no_braces' | null
  // isSingle=true: field must never have braces (q0)
  const checkBraceFormat = (str, isSingle = false) => checkFormalBraceFormat(str, isSingle);

  const setsEqual = (a, b) =>
    a.length === b.length && a.every(x => b.includes(x)) && b.every(x => a.includes(x));

  const validateElements = () => {
    if (onValidateGraph && !onValidateGraph()) return;

    // ── Passo 1: formato das chaves ────────────────────────────────────────────
    const fmtQ       = checkBraceFormat(inputQ);
    const fmtSigma   = checkBraceFormat(inputSigma);
    const fmtInitial = checkBraceFormat(inputInitial, true);
    const fmtFinal   = checkBraceFormat(inputFinal);

    const hasMissing = [fmtQ, fmtSigma, fmtInitial, fmtFinal].includes('multi_needs_braces');
    const hasExtra   = [fmtQ, fmtSigma, fmtInitial, fmtFinal].includes('single_no_braces');

    const braceMsg = (fmt) => {
      if (!fmt) return null;
      return fmt === 'multi_needs_braces'
        ? 'Tem mais de 1 elemento, use { }'
        : 'Tem somente 1 elemento, Retire{ }';
    };

    if (hasMissing || hasExtra) {
      setFieldErrors({
        Q:       braceMsg(fmtQ),
        Sigma:   braceMsg(fmtSigma),
        initial: braceMsg(fmtInitial),
        final:   braceMsg(fmtFinal),
      });

      const msg = hasMissing && hasExtra
        ? 'Use { } com mais de 1 elemento — sem { } com 1 só'
        : hasMissing
        ? 'Com mais de 1 elemento, adicione { } — ex: {q0, q1}'
        : 'Com 1 elemento, retire as { } — ex: q0';
      showToast(msg, 'error');
      return;
    }

    // ── Passo 2: validar contra o canvas ──────────────────────────────────────
    const pQ       = parseInput(inputQ);
    const pSigma   = parseInput(inputSigma);
    const pInitial = parseInput(inputInitial);
    const pFinal   = parseInput(inputFinal);

    const canvasQ       = nodes.map(n => n.label ?? n.id);
    const canvasSigma   = alphabet || [];
    const canvasInitial = nodes.find(n => n.isInitial)?.label ?? nodes.find(n => n.isInitial)?.id;
    const canvasFinal   = nodes.filter(n => n.isFinal).map(n => n.label ?? n.id);

    const errors = { Q: null, Sigma: null, initial: null, final: null };

    // Q — estados
    const extraQ   = pQ.filter(x => !canvasQ.includes(x));
    const missingQ = canvasQ.filter(x => !pQ.includes(x));
    if (extraQ.length > 0 && missingQ.length > 0)
      errors.Q = `${extraQ.join(', ')} não pertence${extraQ.length > 1 ? 'm' : ''} — e ainda faltam estados`;
    else if (extraQ.length > 0)
      errors.Q = `${extraQ.join(', ')} não pertence${extraQ.length > 1 ? 'm' : ''} ao conjunto de estados`;
    else if (missingQ.length > 0)
      errors.Q = `Faltam estados no conjunto — verifique se há outros erros`;

    // Σ — alfabeto
    const extraSigma   = pSigma.filter(x => !canvasSigma.includes(x));
    const missingSigma = canvasSigma.filter(x => !pSigma.includes(x));
    if (extraSigma.length > 0 && missingSigma.length > 0)
      errors.Sigma = `${extraSigma.join(', ')} não pertence${extraSigma.length > 1 ? 'm' : ''} ao alfabeto — e ainda faltam símbolos`;
    else if (extraSigma.length > 0)
      errors.Sigma = `${extraSigma.join(', ')} não pertence${extraSigma.length > 1 ? 'm' : ''} ao alfabeto`;
    else if (missingSigma.length > 0)
      errors.Sigma = `Faltam símbolos no alfabeto`;

    // q₀ — estado inicial
    const wrongInitial = canvasInitial
      ? (pInitial.length !== 1 || pInitial[0] !== canvasInitial)
      : pInitial.length !== 0;
    if (wrongInitial)
      errors.initial = pInitial.length === 0
        ? 'Informe o estado inicial'
        : `${pInitial[0]} não é o estado inicial`;

    // F — estados finais
    const extraF   = pFinal.filter(x => !canvasFinal.includes(x));
    const missingF = canvasFinal.filter(x => !pFinal.includes(x));
    if (extraF.length > 0 && missingF.length > 0)
      errors.final = `${extraF.join(', ')} não é${extraF.length > 1 ? 'o' : ''} estado${extraF.length > 1 ? 's' : ''} final${extraF.length > 1 ? 'is' : ''} — e ainda faltam outros`;
    else if (extraF.length > 0)
      errors.final = `${extraF.join(', ')} não é${extraF.length > 1 ? 'o' : ''} estado${extraF.length > 1 ? 's' : ''} final${extraF.length > 1 ? 'is' : ''}`;
    else if (missingF.length > 0)
      errors.final = `Faltam estados finais`;

    setFieldErrors(errors);

    const errCount = Object.values(errors).filter(Boolean).length;
    if (errCount > 0) {
      showToast(`${errCount} campo(s) com erro — verifique os campos em vermelho.`, 'error');
      return;
    }

    const initialData = {};
    pQ.forEach(q => { initialData[q] = {}; pSigma.forEach(s => { initialData[q][s] = ''; }); });

    setParsedQ(pQ);
    setParsedSigma(pSigma);
    setTransitionTableData(initialData);
    setAreElementsValid(true);
  };

  const handleTableChange = (state, symbol, value) => {
    setTransitionTableData(prev => ({ ...prev, [state]: { ...prev[state], [symbol]: value.trim() } }));
    setTableErrors(prev => { const next = { ...prev }; delete next[`${state}_${symbol}`]; return next; });
  };

  const validateTransitions = () => {
    if (onValidateGraph && !onValidateGraph()) {
      setAreElementsValid(false); setParsedQ([]); setParsedSigma([]); setTransitionTableData({});
      return;
    }

    const errors = {};
    for (const q of parsedQ) {
      for (const s of parsedSigma) {
        const userDest   = transitionTableData[q]?.[s] ?? '';
        const actualTrans = transitions.find(t => {
          const fromLabel = nodes.find(n => n.id === t.from)?.label ?? t.from;
          return fromLabel === q && t.symbol.split(',').map(x => x.trim()).includes(s);
        });
        const actualDest = actualTrans
          ? (nodes.find(n => n.id === actualTrans.to)?.label ?? actualTrans.to)
          : '';
        if (userDest !== actualDest) errors[`${q}_${s}`] = true;
      }
    }

    setTableErrors(errors);
    const errCount = Object.keys(errors).length;
    if (errCount > 0) {
      showToast(`${errCount} célula(s) incorreta(s) — verifique as células em vermelho.`, 'error');
    } else {
      if (onSuccess) onSuccess();
      onClose();
    }
  };

  const clearFieldError = (key) => {
    setFieldErrors(prev => ({ ...prev, [key]: null }));
  };

  return (
    <>
      <div className="formal-sidebar-content">
        <h2>Descrição Formal</h2>

        <div className={`form-group${fieldErrors.Q ? ' field-error' : ''}`}>
          <label>Q (Conjunto de Estados):</label>
          <input
            type="text"
            placeholder="ex: q0  ou  {q0, q1}"
            value={inputQ}
            onChange={e => { setInputQ(e.target.value); clearFieldError('Q'); }}
            readOnly={areElementsValid}
            translate="no" spellCheck={false} autoCorrect="off" autoCapitalize="off"
          />
          {fieldErrors.Q && <span className="field-error-msg">✕ {fieldErrors.Q}</span>}
        </div>

        <div className={`form-group${fieldErrors.Sigma ? ' field-error' : ''}`}>
          <label>Σ (Alfabeto):</label>
          <input
            type="text"
            placeholder="ex: a  ou  {a, b}"
            value={inputSigma}
            onChange={e => { setInputSigma(e.target.value); clearFieldError('Sigma'); }}
            readOnly={areElementsValid}
            translate="no" spellCheck={false} autoCorrect="off" autoCapitalize="off"
          />
          {fieldErrors.Sigma && <span className="field-error-msg">✕ {fieldErrors.Sigma}</span>}
        </div>

        <div className={`form-group${fieldErrors.initial ? ' field-error' : ''}`}>
          <label>q₀ (Estado Inicial):</label>
          <input
            type="text"
            placeholder="ex: q0"
            value={inputInitial}
            onChange={e => { setInputInitial(e.target.value); clearFieldError('initial'); }}
            readOnly={areElementsValid}
            translate="no" spellCheck={false} autoCorrect="off" autoCapitalize="off"
          />
          {fieldErrors.initial && <span className="field-error-msg">✕ {fieldErrors.initial}</span>}
        </div>

        <div className={`form-group${fieldErrors.final ? ' field-error' : ''}`}>
          <label>F (Estados Finais):</label>
          <input
            type="text"
            placeholder="ex: q1  ou  {q1, q2}"
            value={inputFinal}
            onChange={e => { setInputFinal(e.target.value); clearFieldError('final'); }}
            readOnly={areElementsValid}
            translate="no" spellCheck={false} autoCorrect="off" autoCapitalize="off"
          />
          {fieldErrors.final && <span className="field-error-msg">✕ {fieldErrors.final}</span>}
        </div>

        {!areElementsValid && (
          <button className="btn-validate" onClick={validateElements}>
            Validar Elementos
          </button>
        )}

        {areElementsValid && (
          <div className="table-section"
            onFocus={() => onTableFocusChange?.(true)}
            onBlur={() => onTableFocusChange?.(false)}
          >
            <h3>Tabela (δ)</h3>
            <div style={{ overflowX: 'auto' }}>
              <table className="transition-table">
                <thead>
                  <tr>
                    <th>δ</th>
                    {parsedSigma.map(s => <th key={s}>{s}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {parsedQ.map(q => (
                    <tr key={q}>
                      <td className="row-header">{q}</td>
                      {parsedSigma.map(s => (
                        <td key={s} className={tableErrors[`${q}_${s}`] ? 'cell-error' : ''}>
                          <input
                            type="text"
                            value={transitionTableData[q]?.[s] ?? ''}
                            onChange={e => handleTableChange(q, s, e.target.value)}
                            translate="no" spellCheck={false} autoCorrect="off" autoCapitalize="off"
                          />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <button className="btn-validate success" onClick={validateTransitions}>
              Validar Transições
            </button>
          </div>
        )}

        <button className="btn-close" onClick={onClose}>Fechar Painel</button>
      </div>
    </>
  );
}
