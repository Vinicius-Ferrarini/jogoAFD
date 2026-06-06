// FormalDescriptionModal.jsx — v4.0
import { useState, useEffect } from 'react';
import './FormalDescriptionModal.css';

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
}) {
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
  const [formatBanner, setFormatBanner] = useState(null); // mensagem no topo da tela

  useEffect(() => {
    if (isOpen) {
      setInputQ(''); setInputSigma(''); setInputInitial(''); setInputFinal('');
      setAreElementsValid(false);
      setParsedQ([]); setParsedSigma([]); setTransitionTableData({});
      setFieldErrors({ Q: null, Sigma: null, initial: null, final: null });
      setTableErrors({});
      setFormatBanner(null);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Strips braces and splits — used only after format validation passes
  const parseInput = (str) => {
    const clean = str ? str.trim().replace(/^\{|\}$/g, '').trim() : '';
    return clean ? clean.split(',').map(s => s.trim()).filter(Boolean) : [];
  };

  // Returns 'multi_needs_braces' | 'single_no_braces' | null
  // isSingle=true: field must never have braces (q0)
  const checkBraceFormat = (str, isSingle = false) => {
    const t = (str || '').trim();
    if (!t || t === '{}') return null; // empty / empty-set — ok
    const hasBraces = t.startsWith('{') && t.endsWith('}');
    const hasComma  = t.includes(',');
    if (isSingle) {
      return (t.startsWith('{') || t.endsWith('}')) ? 'single_no_braces' : null;
    }
    if (hasComma && !hasBraces) return 'multi_needs_braces';
    if (!hasComma && hasBraces) return 'single_no_braces';
    return null;
  };

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

    if (hasMissing || hasExtra) {
      setFieldErrors({
        Q:       fmtQ       ? 'formato' : null,
        Sigma:   fmtSigma   ? 'formato' : null,
        initial: fmtInitial ? 'formato' : null,
        final:   fmtFinal   ? 'formato' : null,
      });

      let msg;
      if (hasMissing && hasExtra) {
        msg = 'Formato inválido — com mais de 1 elemento use { }, com 1 elemento não use { }';
      } else if (hasMissing) {
        msg = 'Com mais de 1 elemento, envolva com { }  —  ex: {q0, q1}';
      } else {
        msg = 'Com 1 elemento, não use { }  —  ex: q0';
      }
      setFormatBanner(msg);
      return;
    }

    setFormatBanner(null);

    // ── Passo 2: validar contra o canvas (sem revelar resposta) ─────────────────
    const pQ       = parseInput(inputQ);
    const pSigma   = parseInput(inputSigma);
    const pInitial = parseInput(inputInitial);
    const pFinal   = parseInput(inputFinal);

    const canvasQ       = nodes.map(n => n.label ?? n.id);
    const canvasSigma   = alphabet || [];
    const canvasInitial = nodes.find(n => n.isInitial)?.label ?? nodes.find(n => n.isInitial)?.id;
    const canvasFinal   = nodes.filter(n => n.isFinal).map(n => n.label ?? n.id);

    const errors = { Q: null, Sigma: null, initial: null, final: null };

    if (!setsEqual(pQ, canvasQ))
      errors.Q = 'Valor incorreto';

    if (!setsEqual(pSigma, canvasSigma))
      errors.Sigma = 'Valor incorreto';

    if (canvasInitial ? (pInitial.length !== 1 || pInitial[0] !== canvasInitial) : pInitial.length !== 0)
      errors.initial = 'Valor incorreto';

    if (!setsEqual(pFinal, canvasFinal))
      errors.final = 'Valor incorreto';

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
    // dismiss banner only when all format errors are gone
    setFormatBanner(prev => {
      const remaining = { Q: fieldErrors.Q, Sigma: fieldErrors.Sigma, initial: fieldErrors.initial, final: fieldErrors.final, [key]: null };
      return Object.values(remaining).some(v => v === 'formato') ? prev : null;
    });
  };

  return (
    <>
      {/* Banner fixo no topo da tela */}
      {formatBanner && (
        <div className="format-banner">
          <span>⚠ {formatBanner}</span>
          <button className="format-banner-close" onClick={() => setFormatBanner(null)}>✕</button>
        </div>
      )}

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
          <div className="table-section">
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
