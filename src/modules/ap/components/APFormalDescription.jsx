// ─── APFormalDescription: descrição formal do AP (tupla + função δ) ──────────
// Fork do FormalDescriptionModal do AFD (mesmo CSS/visual), adaptado ao AP:
//  • tupla (E, Σ, Γ, i, B=Z) — SEM F (aceita por pilha vazia);
//  • função δ: linhas geradas do grafo do aluno T(estado, lê, desempilha), o
//    aluno preenche (destino, empilha). Tudo validado contra o DESENHO do aluno
//    (não contra gabarito), então o L1 não exige o λ,Z;λ.
// Estrelas: validar elementos = ★2; validar transições = ★3.
import { useState } from 'react';
import '../../afd/FormalDescriptionModal.css';

const LAMBDA = 'λ';
const showF = (v) => (v === '' || v == null ? LAMBDA : v);
const normLambda = (v) => { const t = (v || '').trim(); return (t === '' || t === LAMBDA) ? '' : t; };

export default function APFormalDescription({
  isOpen, onClose, nodes, transitions, alphabet,
  onValidateGraph, onElementsSuccess, onSuccess, showToast,
}) {
  const [inE, setInE]             = useState('');
  const [inSigma, setInSigma]     = useState('');
  const [inGamma, setInGamma]     = useState('');
  const [inInitial, setInInitial] = useState('');
  const [inBottom, setInBottom]   = useState('');

  const [elementsValid, setElementsValid] = useState(false);
  const [rows, setRows]   = useState([]); // [{ key, from, read, pop }]
  const [cells, setCells] = useState({}); // key -> { dest, push }
  const [fieldErrors, setFieldErrors] = useState({});
  const [cellErrors, setCellErrors]   = useState({});

  // O reset ao abrir é por remontagem (o pai passa key ao alternar isOpen).
  if (!isOpen) return null;

  const parseInput = (str) => {
    const clean = str ? str.trim().replace(/^\{|\}$/g, '').trim() : '';
    return clean ? clean.split(',').map(s => s.trim()).filter(Boolean) : [];
  };
  const checkBraceFormat = (str, isSingle = false) => {
    const t = (str || '').trim();
    if (!t || t === '{}') return null;
    const hasBraces = t.startsWith('{') && t.endsWith('}');
    const hasComma = t.includes(',');
    if (isSingle) return (t.startsWith('{') || t.endsWith('}')) ? 'single_no_braces' : null;
    if (hasComma && !hasBraces) return 'multi_needs_braces';
    if (!hasComma && hasBraces) return 'single_no_braces';
    return null;
  };
  const setsEqual = (a, b) => a.length === b.length && a.every(x => b.includes(x)) && b.every(x => a.includes(x));

  // Γ do desenho: símbolos de pop/push ∪ {Z} (o fundo). Validado contra o grafo.
  const canvasGamma = (() => {
    const s = new Set(['Z']);
    for (const t of transitions) { if (t.pop) s.add(t.pop); for (const c of (t.push || '')) s.add(c); }
    return [...s].sort();
  })();
  const canvasE = nodes.map(n => n.label ?? n.id);
  const canvasInitial = (() => { const i = nodes.find(n => n.isInitial); return i ? (i.label ?? i.id) : null; })();
  const fromLabel = (id) => nodes.find(n => n.id === id)?.label ?? id;
  const toLabel = (id) => nodes.find(n => n.id === id)?.label ?? id;

  const clearField = (k) => setFieldErrors(prev => ({ ...prev, [k]: null }));

  const validateElements = () => {
    if (onValidateGraph && !onValidateGraph()) return;

    const fmts = {
      E: checkBraceFormat(inE), Sigma: checkBraceFormat(inSigma), Gamma: checkBraceFormat(inGamma),
      initial: checkBraceFormat(inInitial, true), bottom: checkBraceFormat(inBottom, true),
    };
    const braceMsg = (f) => !f ? null
      : (f === 'multi_needs_braces' ? 'Mais de 1 elemento — use { }' : 'Só 1 elemento — retire { }');
    if (Object.values(fmts).some(Boolean)) {
      setFieldErrors({ E: braceMsg(fmts.E), Sigma: braceMsg(fmts.Sigma), Gamma: braceMsg(fmts.Gamma),
        initial: braceMsg(fmts.initial), bottom: braceMsg(fmts.bottom) });
      showToast?.('Confira o uso das chaves { }.', 'error');
      return;
    }

    const pE = parseInput(inE), pSigma = parseInput(inSigma), pGamma = parseInput(inGamma);
    const pInitial = parseInput(inInitial), pBottom = parseInput(inBottom);

    const errors = {};
    if (!setsEqual(pE, canvasE))             errors.E = 'Não bate com os estados do desenho';
    if (!setsEqual(pSigma, alphabet || []))  errors.Sigma = 'Não bate com o alfabeto de entrada';
    if (!setsEqual(pGamma, canvasGamma))     errors.Gamma = 'Não bate com os símbolos da pilha do desenho';
    if (pInitial.length !== 1 || pInitial[0] !== canvasInitial) errors.initial = 'Estado inicial incorreto';
    if (pBottom.length !== 1 || pBottom[0] !== 'Z')             errors.bottom = 'O fundo da pilha é Z';
    setFieldErrors(errors);
    if (Object.keys(errors).length) { showToast?.(`${Object.keys(errors).length} campo(s) com erro.`, 'error'); return; }

    const r = transitions.map((t, i) => ({ key: String(i), from: fromLabel(t.from), read: t.read, pop: t.pop }));
    setRows(r);
    setCells(Object.fromEntries(r.map(x => [x.key, { dest: '', push: '' }])));
    setElementsValid(true);
    onElementsSuccess?.(); // ★2
  };

  const setCell = (key, field, val) => {
    setCells(prev => ({ ...prev, [key]: { ...prev[key], [field]: val } }));
    setCellErrors(prev => { const n = { ...prev }; delete n[key]; return n; });
  };

  const validateTransitions = () => {
    if (onValidateGraph && !onValidateGraph()) { setElementsValid(false); return; }
    const errs = {};
    transitions.forEach((t, i) => {
      const key = String(i);
      const c = cells[key] || { dest: '', push: '' };
      const okDest = c.dest.trim() === toLabel(t.to);
      const okPush = normLambda(c.push) === normLambda(t.push);
      if (!okDest || !okPush) errs[key] = true;
    });
    setCellErrors(errs);
    if (Object.keys(errs).length) { showToast?.(`${Object.keys(errs).length} transição(ões) incorreta(s).`, 'error'); return; }
    onSuccess?.(); // ★3
    onClose?.();
  };

  const field = (key, label, value, setter, placeholder) => (
    <div className={`form-group${fieldErrors[key] ? ' field-error' : ''}`}>
      <label>{label}</label>
      <input type="text" placeholder={placeholder} value={value} readOnly={elementsValid}
        onChange={e => { setter(e.target.value); clearField(key); }}
        translate="no" spellCheck={false} autoCorrect="off" autoCapitalize="off" />
      {fieldErrors[key] && <span className="field-error-msg">✕ {fieldErrors[key]}</span>}
    </div>
  );

  return (
    <div className="formal-sidebar-content">
      <h2>Descrição Formal (AP)</h2>
      <p style={{ fontSize: 12, color: '#555', margin: '0 0 8px' }}>
        Aceita por <b>pilha vazia</b> — sem estado final (F).
      </p>

      {field('E', 'E (Estados):', inE, setInE, 'ex: {q0, q1}')}
      {field('Sigma', 'Σ (Alfabeto de entrada):', inSigma, setInSigma, 'ex: {a, b}')}
      {field('Gamma', 'Γ (Alfabeto da pilha):', inGamma, setInGamma, 'ex: {A, Z}')}
      {field('initial', 'i (Estado inicial):', inInitial, setInInitial, 'ex: q0')}
      {field('bottom', 'B (Fundo da pilha):', inBottom, setInBottom, 'ex: Z')}

      {!elementsValid && (
        <button className="btn-validate" onClick={validateElements}>Validar Elementos</button>
      )}

      {elementsValid && (
        <div className="table-section">
          <h3>Função de transição (δ)</h3>
          <p style={{ fontSize: 11, color: '#555', margin: '0 0 6px' }}>
            Preencha o <b>destino</b> e o que se <b>empilha</b> (λ se nada).
          </p>
          <div style={{ overflowX: 'auto' }}>
            <table className="transition-table ap-delta-table">
              <thead>
                <tr><th>T(estado, lê, desempilha)</th><th>=&nbsp;( destino,</th><th>empilha )</th></tr>
              </thead>
              <tbody>
                {rows.map(r => (
                  <tr key={r.key}>
                    <td className="row-header">T({r.from}, {showF(r.read)}, {showF(r.pop)})</td>
                    <td className={cellErrors[r.key] ? 'cell-error' : ''}>
                      <input value={cells[r.key]?.dest ?? ''} placeholder="q?"
                        onChange={e => setCell(r.key, 'dest', e.target.value)}
                        translate="no" spellCheck={false} autoCorrect="off" autoCapitalize="off" />
                    </td>
                    <td className={cellErrors[r.key] ? 'cell-error' : ''}>
                      <input value={cells[r.key]?.push ?? ''} placeholder={LAMBDA}
                        onChange={e => setCell(r.key, 'push', e.target.value)}
                        translate="no" spellCheck={false} autoCorrect="off" autoCapitalize="off" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button className="btn-validate success" onClick={validateTransitions}>Validar Transições</button>
        </div>
      )}

      <button className="btn-close" onClick={onClose}>Fechar Painel</button>
    </div>
  );
}
