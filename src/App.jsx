import { useState, useRef } from 'react';
import './App.css';
import { GAME_LEVELS } from './levels';

export default function App() {
  // --- ESTADOS DE NAVEGAÇÃO E JOGO ---
  const [tela, setTela] = useState('MENU');
  const [currentLevel, setCurrentLevel] = useState(null);
  const [isDrawingUnlocked, setIsDrawingUnlocked] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const [nodes, setNodes] = useState([]);
  const [transitions, setTransitions] = useState([]);
  const [testWords, setTestWords] = useState([]);
  const [newWord, setNewWord] = useState('');

  const [drawnCards, setDrawnCards] = useState([]);
  const [selectedSymbolCard, setSelectedSymbolCard] = useState(null);

  // --- ESTADOS DE INTERATIVIDADE ---
  const [interactionMode, setInteractionMode] = useState('IDLE'); // 'IDLE', 'CONNECTING', 'TOGGLE_FINAL', 'TOGGLE_INITIAL', 'ERASE'
  const [connectingSource, setConnectingSource] = useState(null);
  const [dragInfo, setDragInfo] = useState({ nodeId: null });
  const canvasRef = useRef(null);

  // --- FUNÇÕES DE TRANSIÇÃO DE TELA E NÍVEL ---
  const loadLevel = (level) => {
    setCurrentLevel(level);
    setTela('JOGO');
    setNodes([]);
    setTransitions([]);
    setTestWords([]);
    setIsDrawingUnlocked(false);
    setIsSidebarOpen(false);
    setNewWord('');
    setInteractionMode('IDLE');
    setDrawnCards([]);
    setSelectedSymbolCard(null);
  };

  const handleTestWord = () => {
    if (!currentLevel) return;

    let isShortest = false;
    let isValid = false;

    const target = currentLevel.shortestWord;
    const testInputLower = newWord.toLowerCase();
    const isSpecialNull = (testInputLower === 'null' || testInputLower === 'vazio');
    
    if (target === null) {
      if (isSpecialNull) isShortest = true;
    } else if (newWord === target) {
      isShortest = true;
    }

    if (currentLevel.regex) {
      if (target === null && isSpecialNull) {
         // Não tentamos validar "null" ou "vazio" se a linguagem é vazia, ele é só a resposta pro puzzle.
      } else {
         isValid = currentLevel.regex.test(newWord);
      }
    }

    const wordDisplay = newWord === '' ? 'λ' : newWord;

    if (isShortest) {
      if (!isDrawingUnlocked) {
         setIsDrawingUnlocked(true);
         window.alert("Sucesso! Tabuleiro liberado.");
         
         const initialCards = [
             { id: 'c0', type: 'action', action: 'toggleInitial', icon: '▶', label: 'Estado Inicial' },
             { id: 'c1', type: 'action', action: 'addNode', icon: '◯', label: 'Novo Estado' },
             { id: 'c2', type: 'action', action: 'addTransition', icon: '↗', label: 'Criar Seta' },
             { id: 'c3', type: 'action', action: 'toggleFinal', icon: '◎', label: 'Definir Final' },
             { id: 'c4', type: 'action', action: 'erase', icon: '🗑', label: 'Apagar' }
         ];
         
         const alphabet = currentLevel.alphabet || [];
         const symbolCards = alphabet.map((sym, i) => ({
             id: `s${i}`, type: 'symbol', symbol: sym, label: `Símbolo ${sym}`
         }));
         
         setDrawnCards([...initialCards, { type: 'separator', id: 'sep1' }, ...symbolCards]);
      }
      setTestWords([{ word: wordDisplay, status: 'shortest' }, ...testWords]);
    } else if (isValid) {
      setTestWords([{ word: wordDisplay, status: 'correct' }, ...testWords]);
    } else {
      setTestWords([{ word: wordDisplay, status: 'wrong' }, ...testWords]);
    }
    setNewWord('');
  };

  const toggleSidebar = () => {
    if (!isDrawingUnlocked) {
      window.alert("A formalização matemática só será liberada após você provar que entendeu a linguagem testando a menor palavra.");
      return;
    }
    setIsSidebarOpen(!isSidebarOpen);
  };

  // --- FUNÇÕES DAS CARTAS ---
  const setInitialMode = () => {
    if (!isDrawingUnlocked) return;
    setInteractionMode('TOGGLE_INITIAL');
    setConnectingSource(null);
    setSelectedSymbolCard(null);
  };

  const addNode = () => {
    if (!isDrawingUnlocked) return;
    let newIdNum = nodes.length;
    while (nodes.some(n => n.id === `q${newIdNum}`)) {
      newIdNum++;
    }
    const newId = `q${newIdNum}`;
    setNodes([...nodes, { id: newId, x: 50, y: 50, isInitial: false, isFinal: false }]);
    setInteractionMode('IDLE');
    setConnectingSource(null);
    setSelectedSymbolCard(null);
  };

  const addTransitionMode = () => {
    if (!isDrawingUnlocked) return;
    setInteractionMode('CONNECTING');
    setConnectingSource(null);
    setSelectedSymbolCard(null);
  };

  const toggleFinalStateMode = () => {
    if (!isDrawingUnlocked) return;
    setInteractionMode('TOGGLE_FINAL');
    setConnectingSource(null);
    setSelectedSymbolCard(null);
  };

  const setEraserMode = () => {
    if (!isDrawingUnlocked) return;
    setInteractionMode('ERASE');
    setConnectingSource(null);
    setSelectedSymbolCard(null);
  };

  // --- FUNÇÃO DO MOTOR DE SIMULAÇÃO (VALIDAÇÃO DO AFD) ---
  const validateAFD = () => {
    // 1. Checar Determinismo
    for (let node of nodes) {
      const nodeTransitions = transitions.filter(t => t.from === node.id);
      const symbols = nodeTransitions.map(t => t.symbol);
      const uniqueSymbols = new Set(symbols);
      if (symbols.length !== uniqueSymbols.size) {
        window.alert(`Grafo não determinístico! O estado ${node.id} tem múltiplas transições com o mesmo símbolo.`);
        return;
      }
    }

    // Função de simulação do DFA
    const simulateDFA = (word) => {
      let currentState = nodes.find(n => n.isInitial)?.id;
      if (!currentState) return false;

      const w = (word === 'λ' || word === 'null' || word === 'vazio') ? '' : word;

      for (let char of w) {
        const trans = transitions.find(t => t.from === currentState && t.symbol === char);
        if (!trans) return false;
        currentState = trans.to;
      }

      const finalNode = nodes.find(n => n.id === currentState);
      return finalNode ? finalNode.isFinal : false;
    };

    // 3. Checar contra testWords
    for (let tw of testWords) {
      const accepted = simulateDFA(tw.word);
      const shouldAccept = (tw.status === 'shortest' || tw.status === 'correct');
      if (accepted !== shouldAccept) {
        window.alert(`Erro! O seu autômato falhou para a palavra '${tw.word}'. Ela deveria ser ${shouldAccept ? 'aceita' : 'rejeitada'}, mas foi ${accepted ? 'aceita' : 'rejeitada'}.`);
        return;
      }
    }

    // 4. Testes Extras Aleatórios baseados no Alfabeto para garantir a robustez
    const alphabet = currentLevel?.alphabet || ['a', 'b'];
    const generateRandomWord = (length) => {
       if (alphabet.length === 0) return '';
       let w = '';
       for (let i = 0; i < length; i++) {
         w += alphabet[Math.floor(Math.random() * alphabet.length)];
       }
       return w;
    };

    const extraTests = [generateRandomWord(2), generateRandomWord(3), generateRandomWord(4), ''];
    for (let ext of extraTests) {
      const accepted = simulateDFA(ext);
      const shouldAccept = currentLevel?.regex ? currentLevel.regex.test(ext) : (ext === currentLevel?.shortestWord);
      
      if (accepted !== shouldAccept) {
        window.alert(`Erro escondido! O seu autômato falhou em uma palavra não testada: '${ext === '' ? 'λ' : ext}'. Corrija a lógica do seu grafo.`);
        return;
      }
    }

    // 5. Sucesso
    window.alert("Parabéns! Autômato válido e perfeito! Ele passou em todos os testes da linguagem.");
  };


  // --- EVENTOS DE INTERAÇÃO (MOUSE/TOUCH) ---
  const handleNodeClick = (e, nodeId) => {
    if (!isDrawingUnlocked) return;
    
    if (interactionMode === 'ERASE') {
      // Allow erasing any node, but maybe we could keep the check. Removing initial is fine since user can set a new one.
      setNodes(nodes.filter(n => n.id !== nodeId));
      setTransitions(transitions.filter(t => t.from !== nodeId && t.to !== nodeId));
      return;
    }

    if (interactionMode === 'TOGGLE_INITIAL') {
      setNodes(nodes.map(node => 
        ({ ...node, isInitial: node.id === nodeId })
      ));
      setInteractionMode('IDLE');
    } else if (interactionMode === 'TOGGLE_FINAL') {
      setNodes(nodes.map(node => 
        node.id === nodeId ? { ...node, isFinal: !node.isFinal } : node
      ));
      setInteractionMode('IDLE');
    } else if (interactionMode === 'CONNECTING') {
      if (!connectingSource) {
        setConnectingSource(nodeId);
      } else {
        const symbol = currentLevel?.alphabet?.[0] || 'a';
        setTransitions([...transitions, { from: connectingSource, symbol, to: nodeId }]);
        setInteractionMode('IDLE');
        setConnectingSource(null);
      }
    }
  };

  const handlePointerDown = (e, nodeId) => {
    if (!isDrawingUnlocked) return;
    if (interactionMode !== 'IDLE' && interactionMode !== 'ERASE') {
      handleNodeClick(e, nodeId);
      return;
    }
    if (interactionMode === 'ERASE') {
      handleNodeClick(e, nodeId);
      return;
    }
    // Inicia o arrasto (Drag)
    e.stopPropagation();
    setDragInfo({ nodeId });
    e.target.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (dragInfo.nodeId && canvasRef.current && isDrawingUnlocked) {
      const canvasRect = canvasRef.current.getBoundingClientRect();
      let x = ((e.clientX - canvasRect.left) / canvasRect.width) * 100;
      let y = ((e.clientY - canvasRect.top) / canvasRect.height) * 100;
      
      x = Math.max(0, Math.min(100, x));
      y = Math.max(0, Math.min(100, y));

      setNodes(prev => prev.map(n => n.id === dragInfo.nodeId ? { ...n, x, y } : n));
    }
  };

  const handlePointerUp = (e) => {
    if (dragInfo.nodeId) {
      e.target.releasePointerCapture(e.pointerId);
      setDragInfo({ nodeId: null });
    }
  };

  // --- EDIÇÃO INLINE E AÇÕES EM TRANSIÇÕES ---
  const handleNodeIdChange = (oldId, newId) => {
    if (!isDrawingUnlocked || oldId === newId) return;
    
    setNodes(nodes.map(n => n.id === oldId ? { ...n, id: newId } : n));
    setTransitions(transitions.map(t => {
      let from = t.from === oldId ? newId : t.from;
      let to = t.to === oldId ? newId : t.to;
      return { ...t, from, to };
    }));
  };

  const handleSymbolChange = (idx, newSymbol) => {
    if (!isDrawingUnlocked) return;
    const newTrans = [...transitions];
    newTrans[idx].symbol = newSymbol;
    setTransitions(newTrans);
  };

  const handleTransitionClick = (idx) => {
    if (!isDrawingUnlocked) return;
    
    if (interactionMode === 'ERASE') {
      setTransitions(transitions.filter((_, i) => i !== idx));
    } else if (selectedSymbolCard) {
      handleSymbolChange(idx, selectedSymbolCard);
      setSelectedSymbolCard(null); // Limpa a seleção após usar
    }
  };

  // --- RENDERIZAÇÃO: TELA DE MENU ---
  if (tela === 'MENU') {
    return (
      <div className="menu-screen">
        <h1 className="menu-title">AutoQuest</h1>
        <div className="levels-grid">
          {GAME_LEVELS.map((lvl) => (
            <button key={lvl.id} className="menu-btn primary" onClick={() => loadLevel(lvl)}>
              {lvl.label}
            </button>
          ))}
        </div>
      </div>
    );
  }

  // --- RENDERIZAÇÃO: TELA DO JOGO ---
  return (
    <div className="workspace-wrapper">
      
      {/* HEADER */}
      <header className="game-header">
        <div className="header-left">
          <button className="sidebar-toggle" onClick={toggleSidebar}>
            ☰
          </button>
          <button className="back-btn" onClick={() => setTela('MENU')}>⬅ Voltar</button>
        </div>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <span className="mission-label">Objetivo da Linguagem</span>
          <div className="mission-formula">{currentLevel?.formula || ''}</div>
        </div>
        <div style={{ width: '150px', textAlign: 'right' }}>
           <span className="mission-label">{currentLevel?.label}</span>
        </div>
      </header>

      <div className="workspace">
        
        {/* PAINEL ESQUERDO: Formalização Matemática (DRAWER) */}
        <aside className={`formal-panel ${isSidebarOpen ? 'open' : ''}`}>
          <div className="section-header">Elementos de Q</div>
          <div className="math-item">
            <span>Q =</span> 
            <span className="math-val">{'{'}{nodes.map(n => n.id).join(', ')}{'}'}</span>
          </div>
          
          <div className="section-header mt-15">Alfabeto</div>
          <div className="math-item"><span>Σ =</span> <span className="math-val">{'{'}{(currentLevel?.alphabet || []).join(', ')}{'}'}</span></div>
          
          <div className="section-header mt-15">Estados Especiais</div>
          <div className="math-item"><span>q₀ =</span> <span className="math-val">{nodes.find(n => n.isInitial)?.id || '∅'}</span></div>
          <div className="math-item">
            <span>F =</span> 
            <span className="math-val">
              {'{'}{nodes.filter(n => n.isFinal).map(n => n.id).join(', ')}{'}'}
            </span>
          </div>

          <div className="section-header mt-15">Função δ</div>
          <div className="transition-list">
             {transitions.length === 0 ? (
               <span style={{ color: '#ef4444', fontStyle: 'italic' }}>Nenhuma transição criada.</span>
             ) : (
               transitions.map((t, idx) => (
                  <div key={idx}>({t.from}, {t.symbol}) → {t.to}</div>
               ))
             )}
          </div>
        </aside>

        {/* ÁREA CENTRAL: Tabuleiro */}
        <section 
          className={`canvas-area ${interactionMode !== 'IDLE' ? (interactionMode === 'ERASE' ? 'erase-mode' : 'connecting-mode') : ''}`}
          ref={canvasRef}
          onClick={() => {
            if (interactionMode === 'ERASE' || selectedSymbolCard) {
              // Se clicar no vazio com a borracha ou com carta, podemos desselecionar
              if (selectedSymbolCard) setSelectedSymbolCard(null);
            }
          }}
        >
          <div className="canvas-label">
            Área de Montagem do Grafo
            {interactionMode === 'CONNECTING' && ' - Conectando...'}
            {interactionMode === 'TOGGLE_FINAL' && ' - Definindo Final...'}
            {interactionMode === 'TOGGLE_INITIAL' && ' - Definindo Inicial...'}
            {interactionMode === 'ERASE' && ' - Modo Borracha...'}
            {selectedSymbolCard && ' - Clique em uma seta para aplicar o símbolo'}
          </div>

          {!isDrawingUnlocked ? (
            <div className="locked-overlay">
               <div className="locked-message">
                 🔒 DESCUBRA A MENOR PALAVRA ACEITA PARA LIBERAR O TABULEIRO
               </div>
            </div>
          ) : (
            <>
              <svg className="connections-svg">
                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="40" refY="3.5" orient="auto" markerUnits="userSpaceOnUse">
                    <polygon points="0 0, 10 3.5, 0 7" fill="var(--accent-purple)" />
                  </marker>
                  <marker id="arrowhead-hover" markerWidth="10" markerHeight="7" refX="40" refY="3.5" orient="auto" markerUnits="userSpaceOnUse">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#fbbf24" />
                  </marker>
                  <marker id="arrowhead-erase" markerWidth="10" markerHeight="7" refX="40" refY="3.5" orient="auto" markerUnits="userSpaceOnUse">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#ef4444" />
                  </marker>
                </defs>
                {transitions.map((t, idx) => {
                  const src = nodes.find(n => n.id === t.from);
                  const tgt = nodes.find(n => n.id === t.to);
                  if (!src || !tgt) return null;
                  
                  if (src.id === tgt.id) {
                    return (
                      <circle 
                        key={idx} 
                        cx={`${src.x}%`} 
                        cy={`calc(${src.y}% - 35px)`} 
                        r="20" 
                        className={`transition-line ${interactionMode === 'ERASE' ? 'erasable' : ''}`}
                      />
                    );
                  } else {
                    return (
                      <line 
                        key={idx} 
                        x1={`${src.x}%`} 
                        y1={`${src.y}%`} 
                        x2={`${tgt.x}%`} 
                        y2={`${tgt.y}%`} 
                        className={`transition-line ${interactionMode === 'ERASE' ? 'erasable' : ''}`}
                        markerEnd={`url(#${interactionMode === 'ERASE' ? 'arrowhead-erase' : 'arrowhead'})`}
                      />
                    );
                  }
                })}
              </svg>

              {/* Rótulos das Transições Editáveis */}
              {transitions.map((t, idx) => {
                const src = nodes.find(n => n.id === t.from);
                const tgt = nodes.find(n => n.id === t.to);
                if (!src || !tgt) return null;
                
                let posX, posY;
                if (src.id === tgt.id) {
                  posX = `${src.x}%`;
                  posY = `calc(${src.y}% - 55px)`;
                } else {
                  posX = `${(src.x + tgt.x) / 2}%`;
                  posY = `${(src.y + tgt.y) / 2}%`;
                }
                
                const isClickableAction = selectedSymbolCard || interactionMode === 'ERASE';
                
                return (
                  <div 
                    key={`label-${idx}`} 
                    className={`transition-label ${isClickableAction ? 'clickable action-target' : ''} ${interactionMode === 'ERASE' ? 'erasable-target' : ''}`} 
                    style={{ left: posX, top: posY }}
                    onClick={(e) => {
                        e.stopPropagation();
                        if (isClickableAction) {
                            handleTransitionClick(idx);
                        }
                    }}
                  >
                    <input 
                      type="text" 
                      value={t.symbol} 
                      onChange={(e) => handleSymbolChange(idx, e.target.value)}
                      className="transition-input"
                      maxLength={5}
                      readOnly={!!isClickableAction}
                    />
                  </div>
                );
              })}

              {/* Nós (Nodes) */}
              {nodes.map(node => (
                <div 
                  key={node.id} 
                  className={`node ${node.isInitial ? 'initial' : ''} ${node.isFinal ? 'final' : ''} ${dragInfo.nodeId === node.id ? 'dragging' : ''} ${connectingSource === node.id ? 'selected-source' : ''} ${interactionMode === 'ERASE' ? 'erasable-node' : ''}`} 
                  style={{ top: `${node.y}%`, left: `${node.x}%` }}
                  onPointerDown={(e) => handlePointerDown(e, node.id)}
                  onPointerMove={handlePointerMove}
                  onPointerUp={handlePointerUp}
                  onPointerCancel={handlePointerUp}
                >
                  <input 
                    type="text" 
                    className="node-id-input"
                    value={node.id}
                    onChange={(e) => handleNodeIdChange(node.id, e.target.value)}
                    readOnly={interactionMode === 'ERASE'}
                  />
                </div>
              ))}
            </>
          )}
        </section>

        {/* PAINEL DIREITO: Casos de Teste */}
        <aside className="test-panel">
          <div className="section-header">Palavras aceitas pela linguagem</div>
          <div className="test-input-area">
              <input 
                type="text" 
                className="word-input" 
                placeholder={currentLevel?.shortestWord === null ? "Digite 'null'..." : "Nova palavra..."}
                value={newWord}
                onChange={(e) => setNewWord(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleTestWord()}
              />
              <button className="add-test-btn" onClick={handleTestWord}>+</button>
          </div>
          
          <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {testWords.map((item, idx) => (
              <div key={idx} className={`word-row ${item.status}`}>
                  <span>{item.word}</span>
                  <span>
                    {item.status === 'shortest' ? '★ MENOR' : 
                    item.status === 'correct' ? '✓' : 
                    item.status === 'wrong' ? '✕' : ''}
                  </span>
              </div>
            ))}
          </div>

          {/* MOTOR DE SIMULAÇÃO */}
          {isDrawingUnlocked && (
             <button className="validate-btn slide-up-fade" onClick={validateAFD}>
                Validar Desenho do AFD
             </button>
          )}
        </aside>
      </div>

      {/* RODAPÉ: Mão de Cartas */}
      <footer className="bottom-hand">
        {drawnCards.map((card) => {
            if (card.type === 'separator') {
                return <div key={card.id} className="card-separator slide-up-fade"></div>;
            }

            if (card.type === 'action') {
                let cardClass = '';
                let onClick = null;
                if (card.action === 'toggleInitial') { cardClass = 'initial'; onClick = setInitialMode; }
                if (card.action === 'addNode') { cardClass = 'state'; onClick = addNode; }
                if (card.action === 'addTransition') { cardClass = 'transition'; onClick = addTransitionMode; }
                if (card.action === 'toggleFinal') { cardClass = 'final'; onClick = toggleFinalStateMode; }
                if (card.action === 'erase') { cardClass = 'erase'; onClick = setEraserMode; }
                
                const isSelected = interactionMode === card.action || (card.action === 'toggleInitial' && interactionMode === 'TOGGLE_INITIAL') || (card.action === 'addTransition' && interactionMode === 'CONNECTING') || (card.action === 'toggleFinal' && interactionMode === 'TOGGLE_FINAL') || (card.action === 'erase' && interactionMode === 'ERASE');

                return (
                  <div key={card.id} className={`card ${cardClass} slide-up-fade ${isSelected ? 'selected-card' : ''}`} onClick={onClick}>
                    <div className="card-header">Ação</div>
                    <div className="card-icon">{card.icon}</div>
                    <div className="card-footer">{card.label}</div>
                  </div>
                );
            } else if (card.type === 'symbol') {
                const isSelected = selectedSymbolCard === card.symbol;
                const noTransitions = transitions.length === 0;
                
                return (
                  <div key={card.id} className={`card symbol-card slide-up-fade ${isSelected ? 'selected-card' : ''} ${noTransitions ? 'disabled-letter' : ''}`} 
                       onClick={() => {
                          if (noTransitions) return;
                          setInteractionMode('IDLE');
                          setConnectingSource(null);
                          setSelectedSymbolCard(isSelected ? null : card.symbol);
                       }}>
                    <div className="card-header">Alfabeto</div>
                    <div className="card-icon" style={{ fontSize: '40px', color: '#fbbf24' }}>{card.symbol}</div>
                    <div className="card-footer">Usar Símbolo</div>
                  </div>
                );
            }
            return null;
        })}
        
      </footer>
      
    </div>
  );
}
