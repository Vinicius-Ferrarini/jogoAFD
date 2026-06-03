// FormalDescriptionModal.jsx — v2.0
// Correções: cores tabela, revalidação do grafo antes de aceitar elementos e transições
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
  const [inputQ, setInputQ]           = useState('');
  const [inputSigma, setInputSigma]   = useState('');
  const [inputInitial, setInputInitial] = useState('');
  const [inputFinal, setInputFinal]   = useState('');

  const [areElementsValid, setAreElementsValid] = useState(false);
  const [parsedQ, setParsedQ]         = useState([]);
  const [parsedSigma, setParsedSigma] = useState([]);
  const [transitionTableData, setTransitionTableData] = useState({});

  useEffect(() => {
    if (isOpen) {
      setInputQ('');
      setInputSigma('');
      setInputInitial('');
      setInputFinal('');
      setAreElementsValid(false);
      setParsedQ([]);
      setParsedSigma([]);
      setTransitionTableData({});
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const parseInput = (str) =>
    str ? str.split(',').map(s => s.trim()).filter(s => s !== '') : [];

  const validateElements = () => {
    if (onValidateGraph && !onValidateGraph()) return;

    const pQ       = parseInput(inputQ);
    const pSigma   = parseInput(inputSigma);
    const pInitial = parseInput(inputInitial);
    const pFinal   = parseInput(inputFinal);

    const canvasQ       = nodes.map(n => n.label ?? n.id);
    const canvasSigma   = alphabet || [];
    const canvasInitial = nodes.find(n => n.isInitial)?.label ?? nodes.find(n => n.isInitial)?.id;
    const canvasFinal   = nodes.filter(n => n.isFinal).map(n => n.label ?? n.id);

    const setsEqual = (a, b) =>
      a.length === b.length && a.every(x => b.includes(x)) && b.every(x => a.includes(x));

    if (!setsEqual(pQ, canvasQ)) {
      showToast('Erro: O conjunto de estados Q não bate com os estados criados no grafo.', 'error');
      return;
    }
    if (!setsEqual(pSigma, canvasSigma)) {
      showToast('Erro: O alfabeto Σ não bate com o alfabeto da linguagem atual.', 'error');
      return;
    }
    if (canvasInitial ? (pInitial.length !== 1 || pInitial[0] !== canvasInitial) : pInitial.length !== 0) {
      showToast('Erro: O estado inicial não bate com o grafo.', 'error');
      return;
    }
    if (!setsEqual(pFinal, canvasFinal)) {
      showToast('Erro: O conjunto de estados finais F não bate com o grafo.', 'error');
      return;
    }

    const initialData = {};
    pQ.forEach(q => {
      initialData[q] = {};
      pSigma.forEach(s => { initialData[q][s] = ''; });
    });

    setParsedQ(pQ);
    setParsedSigma(pSigma);
    setTransitionTableData(initialData);
    setAreElementsValid(true);
  };

  const handleTableChange = (state, symbol, value) => {
    setTransitionTableData(prev => ({
      ...prev,
      [state]: { ...prev[state], [symbol]: value.trim() },
    }));
  };

  const validateTransitions = () => {
    if (onValidateGraph && !onValidateGraph()) {
      setAreElementsValid(false);
      setParsedQ([]);
      setParsedSigma([]);
      setTransitionTableData({});
      return;
    }

    let isAllCorrect = true;

    for (const q of parsedQ) {
      for (const s of parsedSigma) {
        const userDest  = transitionTableData[q]?.[s] ?? '';
        const actualTrans = transitions.find(t => {
          const fromLabel = nodes.find(n => n.id === t.from)?.label ?? t.from;
          return fromLabel === q && t.symbol === s;
        });
        const actualDest = actualTrans
          ? (nodes.find(n => n.id === actualTrans.to)?.label ?? actualTrans.to)
          : '';

        if (userDest !== actualDest) {
          isAllCorrect = false;
          break;
        }
      }
      if (!isAllCorrect) break;
    }

    if (isAllCorrect) {
      if (onSuccess) onSuccess();
      onClose();
    } else {
      showToast(
        'Erro nas transições: A tabela não corresponde às transições do grafo. Verifique as células.',
        'error'
      );
    }
  };

  return (
    <div className="formal-sidebar-content">
      <h2>Descrição Formal</h2>

      <div className="revalidate-notice">
        ⚠️ O grafo será revalidado antes de cada etapa
      </div>

      <div className="form-group">
        <label>Q (Conjunto de Estados):</label>
        <input
          type="text"
          placeholder="ex: q0, q1"
          value={inputQ}
          onChange={e => setInputQ(e.target.value)}
          readOnly={areElementsValid}
          translate="no"
          spellCheck={false}
          autoCorrect="off"
          autoCapitalize="off"
        />
      </div>

      <div className="form-group">
        <label>Σ (Alfabeto):</label>
        <input
          type="text"
          placeholder="ex: a, b"
          value={inputSigma}
          onChange={e => setInputSigma(e.target.value)}
          readOnly={areElementsValid}
          translate="no"
          spellCheck={false}
          autoCorrect="off"
          autoCapitalize="off"
        />
      </div>

      <div className="form-group">
        <label>q₀ (Estado Inicial):</label>
        <input
          type="text"
          placeholder="ex: q0"
          value={inputInitial}
          onChange={e => setInputInitial(e.target.value)}
          readOnly={areElementsValid}
          translate="no"
          spellCheck={false}
          autoCorrect="off"
          autoCapitalize="off"
        />
      </div>

      <div className="form-group">
        <label>F (Estados Finais):</label>
        <input
          type="text"
          placeholder="ex: q1"
          value={inputFinal}
          onChange={e => setInputFinal(e.target.value)}
          readOnly={areElementsValid}
          translate="no"
          spellCheck={false}
          autoCorrect="off"
          autoCapitalize="off"
        />
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
                      <td key={s}>
                        <input
                          type="text"
                          value={transitionTableData[q]?.[s] ?? ''}
                          onChange={e => handleTableChange(q, s, e.target.value)}
                          translate="no"
                          spellCheck={false}
                          autoCorrect="off"
                          autoCapitalize="off"
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
  );
}
