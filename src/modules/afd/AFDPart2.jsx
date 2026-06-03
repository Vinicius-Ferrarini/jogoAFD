// AFDPart2.jsx – Análise de Grafo para extrair Linguagem
import { useState, useCallback } from 'react';
import './AFDPart2.css';

export default function AFDPart2({ onBack, progress, updateProgress, showToast }) {
  const [mode, setMode] = useState('LOAD_OR_DRAW');
  const [nodes, setNodes] = useState([]);
  const [transitions, setTransitions] = useState([]);
  const [analyzedLanguage, setAnalyzedLanguage] = useState(null);
  const [userGuess, setUserGuess] = useState('');

  const analyzeGraph = useCallback(() => {
    if (!nodes.length || !transitions.length) {
      showToast('Grafo vazio! Desenhe um autômato primeiro.', 'error');
      return;
    }

    const initialNode = nodes.find(n => n.isInitial);
    const finalNodes = nodes.filter(n => n.isFinal);

    if (!initialNode || !finalNodes.length) {
      showToast('Grafo incompleto! Defina inicial e final.', 'error');
      return;
    }

    const patterns = extractPatterns(nodes, transitions, initialNode, finalNodes);
    setAnalyzedLanguage(patterns);
    setMode('RESULT');
  }, [nodes, transitions, showToast]);

  const extractPatterns = (nodes, transitions, init, finals) => {
    const paths = findAllPaths(init.id, finals.map(f => f.id), transitions, nodes);
    const analysis = {
      paths,
      loops: findLoops(transitions),
      repeaters: findRepeaters(transitions),
      alternations: findAlternations(transitions),
      estimatedLanguage: generateLanguageEstimate(paths, transitions),
      confidence: 0.5,
    };
    return analysis;
  };

  const findAllPaths = (start, ends, trans, nodes) => {
    const paths = [];
    const visited = new Set();

    const dfs = (current, path, symbols) => {
      if (ends.includes(current)) {
        paths.push({ nodes: path, symbols });
        return;
      }

      visited.add(current);
      const outgoing = trans.filter(t => t.from === current);

      outgoing.forEach(t => {
        if (!visited.has(t.to)) {
          dfs(t.to, [...path, t.to], [...symbols, t.symbol]);
        }
      });

      visited.delete(current);
    };

    dfs(start, [start], []);
    return paths;
  };

  const findLoops = (transitions) => {
    const loops = [];
    transitions.forEach(t => {
      if (t.from === t.to) {
        loops.push({ state: t.from, symbol: t.symbol, type: 'self' });
      }
    });
    return loops;
  };

  const findRepeaters = (transitions) => {
    const repeaters = {};
    transitions.forEach(t => {
      const key = `${t.from}-${t.symbol}`;
      repeaters[key] = (repeaters[key] || 0) + 1;
    });
    return repeaters;
  };

  const findAlternations = (transitions) => {
    const alts = {};
    transitions.forEach(t => {
      if (!alts[t.from]) alts[t.from] = [];
      alts[t.from].push(t.symbol);
    });
    return alts;
  };

  const generateLanguageEstimate = (paths, transitions) => {
    if (!paths.length) return "Nenhum caminho encontrado";
    const simplestPath = paths.reduce((a, b) =>
      a.symbols.length < b.symbols.length ? a : b
    );
    const symbols = simplestPath.symbols;
    if (symbols.every(s => s === symbols[0])) {
      return `{${symbols[0]}^n | n > 0}`;
    }
    return `{${symbols.join('')}...}`;
  };

  if (mode === 'LOAD_OR_DRAW') {
    return (
      <div className="afd-p2-wrapper">
        <header className="game-header">
          <button className="back-btn" onClick={onBack}>← Voltar</button>
          <h2>Parte 2: Grafo → Linguagem</h2>
          <span style={{ width: 150 }}></span>
        </header>

        <div className="afd-p2-intro">
          <div className="intro-card">
            <h3>📊 Como funciona?</h3>
            <p>
              Nesta parte, você desenha (ou carrega) um autômato e nosso sistema tenta
              <strong> extrair a linguagem formal</strong> que ele reconhece.
            </p>
          </div>

          <div className="intro-options">
            <button className="intro-btn primary" onClick={() => setMode('ANALYZE')}>
              🎨 Desenhar Novo AFD
            </button>
            <button className="intro-btn" onClick={() => showToast('Carregamento de AFD salvo (soon!)', 'info')}>
              📂 Carregar AFD Salvo
            </button>
          </div>

          <div className="examples-section">
            <h4>Exemplos de Linguagens:</h4>
            <div className="examples-grid">
              <div className="example-card">
                <code>a*b*</code>
                <p>Zeros ou mais 'a' seguidos de zeros ou mais 'b'</p>
              </div>
              <div className="example-card">
                <code>a^n b^n</code>
                <p>Igual número de 'a' e 'b'</p>
              </div>
              <div className="example-card">
                <code>(ab|ba)^*</code>
                <p>Alternância entre 'ab' e 'ba'</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (mode === 'ANALYZE') {
    return (
      <div className="afd-editor-wrapper">
        <header className="game-header">
          <button className="back-btn" onClick={() => setMode('LOAD_OR_DRAW')}>← Voltar</button>
          <h2>Editor AFD</h2>
          <div></div>
        </header>

        <div className="editor-workspace">
          <section className="canvas-area">
            <div className="canvas-label">Desenhe seu AFD aqui (placeholder)</div>
          </section>

          <aside className="control-panel">
            <h3>Ferramentas</h3>
            <button className="tool-btn">⊕ Adicionar Estado</button>
            <button className="tool-btn">⚡️ Conectar Estados</button>
            <button className="tool-btn">▶️ Definir Inicial</button>
            <button className="tool-btn">⭐ Definir Final</button>
            <hr style={{ margin: '16px 0', border: 'none', borderTop: '2px solid #000' }} />
            <h4>Resumo</h4>
            <div className="summary">
              <p>Estados: {nodes.length}</p>
              <p>Transições: {transitions.length}</p>
            </div>
            <button className="analyze-btn" onClick={analyzeGraph}>
              💬 Analisar Linguagem
            </button>
          </aside>
        </div>
      </div>
    );
  }

  if (mode === 'RESULT' && analyzedLanguage) {
    return (
      <div className="afd-result-wrapper">
        <header className="game-header">
          <button className="back-btn" onClick={() => setMode('LOAD_OR_DRAW')}>← Voltar</button>
          <h2>Análise de Linguagem</h2>
          <div></div>
        </header>

        <div className="result-content">
          <div className="analysis-box">
            <h3>📊 Análise Encontrada</h3>
            <div className="language-display">
              <code>{analyzedLanguage.estimatedLanguage}</code>
            </div>
            <p className="confidence">
              Confiança: {Math.round(analyzedLanguage.confidence * 100)}%
            </p>
          </div>

          <div className="user-answer-box">
            <h3>✏️ Sua Resposta</h3>
            <textarea
              className="answer-input"
              placeholder="Ex: {a^n b^n | n > 0}"
              value={userGuess}
              onChange={e => setUserGuess(e.target.value)}
            />
            <button className="submit-btn" onClick={() => showToast('Resposta registrada!', 'success')}>
              Validar Resposta
            </button>
          </div>

          <button className="retry-btn" onClick={() => setMode('LOAD_OR_DRAW')}>
            🔄 Tentar Outro AFD
          </button>
        </div>
      </div>
    );
  }

  return <div>Carregando...</div>;
}
