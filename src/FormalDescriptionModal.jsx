import React, { useState, useEffect } from 'react';
import './FormalDescriptionModal.css';

export default function FormalDescriptionModal({ isOpen, onClose, nodes, transitions, alphabet, currentLevelId, onSuccess, showToast }) {
  const [inputQ, setInputQ] = useState('');
  const [inputSigma, setInputSigma] = useState('');
  const [inputInitial, setInputInitial] = useState('');
  const [inputFinal, setInputFinal] = useState('');
  
  const [areElementsValid, setAreElementsValid] = useState(false);
  const [parsedQ, setParsedQ] = useState([]);
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

  const parseInput = (str) => {
    if (!str) return [];
    return str.split(',').map(s => s.trim()).filter(s => s !== '');
  };

  const validateElements = () => {
    const pQ = parseInput(inputQ);
    const pSigma = parseInput(inputSigma);
    const pInitial = parseInput(inputInitial);
    const pFinal = parseInput(inputFinal);

    const canvasQ = nodes.map(n => n.id);
    const isQValid = pQ.length === canvasQ.length && pQ.every(q => canvasQ.includes(q)) && canvasQ.every(q => pQ.includes(q));

    const canvasSigma = alphabet || [];
    const isSigmaValid = pSigma.length === canvasSigma.length && pSigma.every(s => canvasSigma.includes(s)) && canvasSigma.every(s => pSigma.includes(s));

    const canvasInitial = nodes.find(n => n.isInitial)?.id;
    const isInitialValid = (canvasInitial ? (pInitial.length === 1 && pInitial[0] === canvasInitial) : pInitial.length === 0);

    const canvasFinal = nodes.filter(n => n.isFinal).map(n => n.id);
    const isFinalValid = pFinal.length === canvasFinal.length && pFinal.every(f => canvasFinal.includes(f)) && canvasFinal.every(f => pFinal.includes(f));

    if (!isQValid) {
      showToast("Erro: O conjunto de estados Q não bate com os estados criados no grafo.", "error");
      return;
    }
    if (!isSigmaValid) {
      showToast("Erro: O alfabeto Σ não bate com o alfabeto da linguagem atual.", "error");
      return;
    }
    if (!isInitialValid) {
      showToast("Erro: O estado inicial não bate com o grafo.", "error");
      return;
    }
    if (!isFinalValid) {
      showToast("Erro: O conjunto de estados finais F não bate com o grafo.", "error");
      return;
    }

    setParsedQ(pQ);
    setParsedSigma(pSigma);
    
    const initialData = {};
    pQ.forEach(q => {
      initialData[q] = {};
      pSigma.forEach(s => {
        initialData[q][s] = '';
      });
    });
    setTransitionTableData(initialData);

    setAreElementsValid(true);
  };

  const handleTableChange = (state, symbol, value) => {
    setTransitionTableData(prev => ({
      ...prev,
      [state]: {
        ...prev[state],
        [symbol]: value.trim()
      }
    }));
  };

  const validateTransitions = () => {
    let isAllCorrect = true;

    for (const q of parsedQ) {
      for (const s of parsedSigma) {
        const userDest = transitionTableData[q][s];
        
        const actualTrans = transitions.find(t => t.from === q && t.symbol === s);
        
        if (actualTrans) {
          if (userDest !== actualTrans.to) {
            isAllCorrect = false;
            break;
          }
        } else {
          if (userDest && userDest !== '') {
            isAllCorrect = false;
            break;
          }
        }
      }
      if (!isAllCorrect) break;
    }

    if (isAllCorrect) {
      if (onSuccess) onSuccess();
      onClose();
    } else {
      showToast("Erro nas transições: A tabela não corresponde às transições desenhadas no grafo. Verifique as células.", "error");
    }
  };

  return (
    <div className="formal-sidebar-content">
      <h2 style={{ fontSize: '14px', marginBottom: '20px', color: 'var(--accent-blue)', textTransform: 'uppercase', textAlign: 'center', fontFamily: 'monospace' }}>Descrição Formal</h2>
      
      <div className="form-group">
        <label>Q (Conjunto de Estados):</label>
        <input 
          type="text" 
          placeholder="ex: q0, q1" 
          value={inputQ} 
          onChange={e => setInputQ(e.target.value)} 
          readOnly={areElementsValid} 
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
        />
      </div>

      <div className="form-group">
        <label>q0 (Inicial):</label>
        <input 
          type="text" 
          placeholder="ex: q0" 
          value={inputInitial} 
          onChange={e => setInputInitial(e.target.value)} 
          readOnly={areElementsValid} 
        />
      </div>

      <div className="form-group">
        <label>F (Finais):</label>
        <input 
          type="text" 
          placeholder="ex: q1" 
          value={inputFinal} 
          onChange={e => setInputFinal(e.target.value)} 
          readOnly={areElementsValid} 
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
                          value={transitionTableData[q][s]} 
                          onChange={e => handleTableChange(q, s, e.target.value)}
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
