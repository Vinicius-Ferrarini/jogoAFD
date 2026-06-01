// Versão: 1.0.9
import { useState, useRef, useEffect } from 'react';
import './App.css';
import { GAME_LEVELS } from './levels';
import FormalDescriptionModal from './FormalDescriptionModal';
import imgMaurilioApontando from './assets/maurilio2_apontando_pro_lado.png';
import imgMaurilioSerio from './assets/maurilio1_serio.png';
import imgMaurilioExplicando from './assets/maurilio3_explicando.png';
import imgBalaoFala from './assets/balao_fala_redondo.png';

export default function App() {
  // --- ESTADOS DE PROGRESSÃO ---
  const getProgress = () => {
    try {
      const data = localStorage.getItem('autoquest_progress');
      return data ? JSON.parse(data) : {};
    } catch {
      return {};
    }
  };
  const [progress, setProgress] = useState(getProgress());

  const updateStars = (levelId, stars) => {
    setProgress(prev => {
      const current = prev[levelId]?.stars || 0;
      if (stars > current) {
        const newP = { ...prev, [levelId]: { stars } };
        localStorage.setItem('autoquest_progress', JSON.stringify(newP));
        return newP;
      }
      return prev;
    });
  };

  const renderStars = (count) => {
    let stars = [];
    for(let i=1; i<=3; i++) {
      stars.push(
        <span key={i} style={{ color: i <= count ? '#fbbf24' : '#4b5563' }}>★</span>
      );
    }
    return <span style={{ display: 'flex', gap: '4px', justifyContent: 'center' }}>{stars}</span>;
  };

  // --- ESTADOS DE TOAST ---
  const [toastData, setToastData] = useState({ show: false, message: '', type: 'info' });
  const toastTimeoutRef = useRef(null);

  const showToast = (message, type = 'info') => {
    setToastData({ show: true, message, type });
    if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    toastTimeoutRef.current = setTimeout(() => {
      setToastData(prev => ({ ...prev, show: false }));
    }, 4000);
  };

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
  const [interactionMode, setInteractionMode] = useState('IDLE');
  const [connectingSource, setConnectingSource] = useState(null);
  const [dragInfo, setDragInfo] = useState({ nodeId: null });
  const canvasRef = useRef(null);

  const [highlightedError, setHighlightedError] = useState(null);
  const [professorMessage, setProfessorMessage] = useState('');
  const speechTimeoutRef = useRef(null);
  const [showVictoryScreen, setShowVictoryScreen] = useState(false);

  const [canvasSize, setCanvasSize] = useState({ w: 800, h: 600 });

  const triggerProfessorSpeech = (msg, duration = 5000) => {
    setProfessorMessage(msg);
    if (speechTimeoutRef.current) clearTimeout(speechTimeoutRef.current);
    speechTimeoutRef.current = setTimeout(() => setProfessorMessage(''), duration);
  };

  useEffect(() => {
    if (tela !== 'JOGO') return;
    let timeoutId;
    const updateSize = () => {
      if (canvasRef.current) {
        setCanvasSize({
          w: canvasRef.current.clientWidth,
          h: canvasRef.current.clientHeight
        });
      }
    };
    window.addEventListener('resize', updateSize);
    timeoutId = setTimeout(updateSize, 50); 
    return () => {
      window.removeEventListener('resize', updateSize);
      clearTimeout(timeoutId);
    };
  }, [tela, isSidebarOpen]);

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
         // Não tentamos validar "null" ou "vazio" se a linguagem é vazia
      } else {
         isValid = currentLevel.regex.test(newWord);
      }
    }

    const wordDisplay = newWord === '' ? 'λ' : newWord;

    if (testWords.some(w => w.word === wordDisplay)) { 
      showToast("Você já testou essa palavra!", "info"); 
      return; 
    }

    if (isShortest) {      if (!isDrawingUnlocked) {
         setIsDrawingUnlocked(true);
         updateStars(currentLevel.id, 1);
         showToast("Sucesso! Tabuleiro liberado.", "success");
         
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
      showToast("A formalização matemática só será liberada após você provar que entendeu a linguagem testando a menor palavra.", "info");
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
    setInteractionMode('ADD_NODE');
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
    if (!nodes.some(n => n.isInitial)) {
      setHighlightedError('toggleInitial');
      setTimeout(() => setHighlightedError(null), 3000);
      showToast("Erro: Você esqueceu de definir o Estado Inicial (▶)!", "error");
      return;
    }

    if (!nodes.some(n => n.isFinal)) {
      setHighlightedError('toggleFinal');
      setTimeout(() => setHighlightedError(null), 3000);
      showToast("Erro: O autômato precisa de pelo menos um Estado Final (◎) para aceitar palavras!", "error");
      return;
    }

    const emptyTransitionIdx = transitions.findIndex(t => t.symbol === '');
    if (emptyTransitionIdx !== -1) {
      setHighlightedError(`transition-${emptyTransitionIdx}`);
      setTimeout(() => setHighlightedError(null), 3000);
      showToast("Você deixou setas em branco! Preencha todas as transições.", "error");
      return;
    }

    for (let node of nodes) {
      const nodeTransitions = transitions.filter(t => t.from === node.id);
      const symbols = nodeTransitions.map(t => t.symbol);
      const uniqueSymbols = new Set(symbols);
      if (symbols.length !== uniqueSymbols.size) {
        showToast(`Grafo não determinístico! O estado ${node.id} tem múltiplas transições com o mesmo símbolo.`, "error");
        return;
      }
    }

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

    for (let tw of testWords) {
      const accepted = simulateDFA(tw.word);
      const shouldAccept = (tw.status === 'shortest' || tw.status === 'correct');
      if (accepted !== shouldAccept) {
        showToast(`Erro! O seu autômato falhou para a palavra '${tw.word}'. Ela deveria ser ${shouldAccept ? 'aceita' : 'rejeitada'}, mas foi ${accepted ? 'aceita' : 'rejeitada'}.`, "error");
        return;
      }
    }

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
        showToast(`Erro escondido! O seu autômato falhou em uma palavra não testada: '${ext === '' ? 'λ' : ext}'. Corrija a lógica do seu grafo.`, "error");
        return;
      }
    }

    // Sucesso
    updateStars(currentLevel.id, 2);
    showToast("Autômato Validado! Agora preencha a Descrição Formal no menu lateral.", "success");
    setIsSidebarOpen(true);
  };

  const handleFormalSuccess = () => {
    updateStars(currentLevel.id, 3);
    showToast("Fase Concluída com Perfeição! Você conquistou a 3ª Estrela!", "success");
    setShowVictoryScreen(true);
  };

  // --- EVENTOS DE INTERAÇÃO (MOUSE/TOUCH) ---
  const handleNodeClick = (e, nodeId) => {
    if (!isDrawingUnlocked) return;
    
    if (interactionMode === 'ERASE') {
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
        const symbol = '';
        setTransitions([...transitions, { from: connectingSource, symbol, to: nodeId }]);
        setInteractionMode('IDLE');
        setConnectingSource(null);
      }
    }
  };

  const handlePointerDown = (e, nodeId) => {
    if (!isDrawingUnlocked) return;
    e.stopPropagation();

    if (interactionMode === 'ADD_NODE') {
      return;
    }

    if (interactionMode !== 'IDLE' && interactionMode !== 'ERASE') {
      handleNodeClick(e, nodeId);
      return;
    }
    if (interactionMode === 'ERASE') {
      handleNodeClick(e, nodeId);
      return;
    }
    
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
      setSelectedSymbolCard(null); 
    }
  };

  const transitionRenders = transitions.map((t, idx) => {
    const src = nodes.find(n => n.id === t.from);
    const tgt = nodes.find(n => n.id === t.to);
    if (!src || !tgt) return null;

    const srcPxX = (src.x * canvasSize.w) / 100;
    const srcPxY = (src.y * canvasSize.h) / 100;
    const tgtPxX = (tgt.x * canvasSize.w) / 100;
    const tgtPxY = (tgt.y * canvasSize.h) / 100;

    const isBidirectional = src.id !== tgt.id && transitions.some(otherT => otherT.from === tgt.id && otherT.to === src.id);

    let pathD = "";
    let labelPxX = 0;
    let labelPxY = 0;

    if (src.id === tgt.id) {
      // Loop
    } else {
      if (isBidirectional) {
        const dx = tgtPxX - srcPxX;
        const dy = tgtPxY - srcPxY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const nx = dist === 0 ? 0 : -dy / dist;
        const ny = dist === 0 ? 0 : dx / dist;

        const offset = 40; 
        const cx = (srcPxX + tgtPxX) / 2 + nx * offset;
        const cy = (srcPxY + tgtPxY) / 2 + ny * offset;

        pathD = `M ${srcPxX} ${srcPxY} Q ${cx} ${cy} ${tgtPxX} ${tgtPxY}`;
        
        const midX = (srcPxX + tgtPxX) / 2;
        const midY = (srcPxY + tgtPxY) / 2;
        labelPxX = (midX + cx) / 2 + nx * 10;
        labelPxY = (midY + cy) / 2 + ny * 10;
      } else {
        pathD = `M ${srcPxX} ${srcPxY} L ${tgtPxX} ${tgtPxY}`;
        labelPxX = (srcPxX + tgtPxX) / 2;
        labelPxY = (srcPxY + tgtPxY) / 2;
      }
    }

    return { ...t, idx, src, tgt, pathD, labelPxX, labelPxY, isBidirectional };
  }).filter(Boolean);

  // --- RENDERIZAÇÃO: TELA DE MENU ---
  if (tela === 'MENU') {
    const maxStars = GAME_LEVELS.length * 3;
    const totalStars = GAME_LEVELS.reduce((acc, lvl) => acc + (progress[lvl.id]?.stars || 0), 0);
    const percent = maxStars > 0 ? Math.round((totalStars / maxStars) * 100) : 0;

    return (
      <div className="menu-screen">
        <h1 className="menu-title">AutoQuest</h1>
        <div style={{ marginBottom: '30px', color: 'var(--text-main)', fontSize: '18px', fontWeight: 'bold' }}>
          Progresso: {percent}% ({totalStars}/{maxStars} ★)
        </div>
        <div className="levels-grid">
          {GAME_LEVELS.map((lvl) => {
            const lvlStars = progress[lvl.id]?.stars || 0;
            return (
              <button key={lvl.id} className="menu-btn primary" onClick={() => loadLevel(lvl)} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <span>{lvl.label}</span>
                <span style={{ fontSize: '14px' }}>{renderStars(lvlStars)}</span>
              </button>
            );
          })}
        </div>
        {toastData.show && (
          <div className={`toast-notification ${toastData.type}`}>
            {toastData.message}
          </div>
        )}
      </div>
    );
  }

  const currentStars = currentLevel ? (progress[currentLevel.id]?.stars || 0) : 0;

  // --- RENDERIZAÇÃO: TELA DO JOGO ---
  return (
    <div className="workspace-wrapper">
      {toastData.show && (
        <div className={`toast-notification ${toastData.type}`}>
          {toastData.message}
        </div>
      )}

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
           <div style={{ fontSize: '16px', marginTop: '4px' }}>{renderStars(currentStars)}</div>
        </div>
      </header>

      <div className="workspace">

        {/* PAINEL ESQUERDO: Descrição Formal (DRAWER) */}        <aside className={`formal-panel ${isSidebarOpen ? 'open' : ''}`}>
          <FormalDescriptionModal 
            isOpen={isSidebarOpen} 
            onClose={() => setIsSidebarOpen(false)}
            nodes={nodes}
            transitions={transitions}
            alphabet={currentLevel?.alphabet}
            currentLevelId={currentLevel?.id}
            onSuccess={handleFormalSuccess}
            showToast={showToast}
          />
        </aside>

        {/* ÁREA CENTRAL: Tabuleiro */}
        <section 
          className={`canvas-area ${interactionMode !== 'IDLE' ? (interactionMode === 'ERASE' ? 'erase-mode' : (interactionMode === 'ADD_NODE' ? 'add-node-mode' : 'connecting-mode')) : ''}`}
          ref={canvasRef}
          onPointerDown={(e) => {
            if (interactionMode === 'ADD_NODE') {
              if (canvasRef.current) {
                const canvasRect = canvasRef.current.getBoundingClientRect();
                let x = ((e.clientX - canvasRect.left) / canvasRect.width) * 100;
                let y = ((e.clientY - canvasRect.top) / canvasRect.height) * 100;
                x = Math.max(0, Math.min(100, x));
                y = Math.max(0, Math.min(100, y));

                let newIdNum = nodes.length;
                while (nodes.some(n => n.id === `q${newIdNum}`)) {
                  newIdNum++;
                }
                const newId = `q${newIdNum}`;
                setNodes([...nodes, { id: newId, x, y, isInitial: false, isFinal: false }]);
                setInteractionMode('IDLE');
              }
            }
          }}
          onClick={() => {
            if (interactionMode === 'ERASE' || selectedSymbolCard) {
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
            {interactionMode === 'ADD_NODE' && ' - Clique para adicionar o nó...'}
            {selectedSymbolCard && ' - Clique em uma seta para aplicar o símbolo'}
          </div>

          {!isDrawingUnlocked ? (
            <div className="locked-overlay">
              <div style={{
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center',
                gap: '10px'
              }}>
                <img src={imgMaurilioApontando} alt="Professor Maurílio" style={{ height: '300px', objectFit: 'contain', zIndex: 1 }} />
                <div style={{
                  position: 'relative',
                  width: '240px',
                  height: '180px',
                  marginBottom: '180px',
                  marginLeft: '-40px',
                  zIndex: 2
                }}>
                  <img src={imgBalaoFala} alt="" style={{
                    position: 'absolute',
                    top: 0, left: 0,
                    width: '100%', height: '100%',
                    transform: 'scaleX(-1)',
                    zIndex: 1
                  }} />
                  <div style={{
                    position: 'absolute',
                    top: 0, left: 0,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '20px 20px 40px 20px',
                    color: '#000',
                    fontWeight: 'bold',
                    fontSize: '18px',
                    textAlign: 'center',
                    fontFamily: "'Comic Sans MS', 'Comic Neue', cursive, sans-serif",
                    zIndex: 2
                  }}>
                    1ª Coisa é a Menor Palavra!
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <>
              <svg className="connections-svg">
                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="40" refY="3.5" orient="auto" markerUnits="userSpaceOnUse">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#000" />
                  </marker>
                  <marker id="arrowhead-hover" markerWidth="10" markerHeight="7" refX="40" refY="3.5" orient="auto" markerUnits="userSpaceOnUse">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#22c55e" />
                  </marker>
                  <marker id="arrowhead-erase" markerWidth="10" markerHeight="7" refX="40" refY="3.5" orient="auto" markerUnits="userSpaceOnUse">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#ef4444" />
                  </marker>
                </defs>
                {transitionRenders.map((tr) => {
                  if (tr.src.id === tr.tgt.id) {
                    return (
                      <circle 
                        key={tr.idx} 
                        cx={`${tr.src.x}%`} 
                        cy={`calc(${tr.src.y}% - 35px)`} 
                        r="20" 
                        className={`transition-line ${interactionMode === 'ERASE' ? 'erasable' : ''}`}
                      />
                    );
                  } else {
                    return (
                      <path 
                        key={tr.idx} 
                        d={tr.pathD}
                        className={`transition-line ${interactionMode === 'ERASE' ? 'erasable' : ''}`}
                        markerEnd={`url(#${interactionMode === 'ERASE' ? 'arrowhead-erase' : 'arrowhead'})`}
                      />
                    );
                  }
                })}
              </svg>

              {transitionRenders.map((tr) => {
                const isClickableAction = selectedSymbolCard || interactionMode === 'ERASE';
                
                return (
                  <div
                    key={`label-${tr.idx}`}
                    className={`transition-label ${isClickableAction ? 'clickable action-target' : ''} ${interactionMode === 'ERASE' ? 'erasable-target' : ''}`}
                    style={{
                       left: tr.src.id === tr.tgt.id ? `${tr.src.x}%` : `${tr.labelPxX}px`,
                       top: tr.src.id === tr.tgt.id ? `calc(${tr.src.y}% - 55px)` : `${tr.labelPxY}px`
                    }}
                    onClick={(e) => {
                        e.stopPropagation();
                        if (isClickableAction) {
                            handleTransitionClick(tr.idx);
                        }
                    }}
                  >
                    <input
                      type="text"
                      value={tr.symbol}
                      onChange={(e) => handleSymbolChange(tr.idx, e.target.value)}
                      className={`transition-input ${highlightedError === `transition-${tr.idx}` ? 'error-pulse' : ''}`}
                      maxLength={5}
                      readOnly={!!isClickableAction}
                    />
                  </div>                );
              })}

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
          
          <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '4px', minHeight: '0', marginTop: '10px' }}>
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

          {isDrawingUnlocked && (
             <button className="validate-btn slide-up-fade" onClick={validateAFD}>
                Validar Desenho do AFD
             </button>
          )}
        </aside>
      </div>

      {/* RODAPÉ: Mão de Cartas */}
      {(() => {
        const discoveredSymbols = new Set(testWords.filter(w => w.status === 'correct' || w.status === 'shortest').map(w => w.word.split('')).flat());
        
        return (
          <footer className="bottom-hand">
            <div className="cards-scroll-wrapper">
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
                      
                      const isSelected = interactionMode === card.action || (card.action === 'toggleInitial' && interactionMode === 'TOGGLE_INITIAL') || (card.action === 'addTransition' && interactionMode === 'CONNECTING') || (card.action === 'toggleFinal' && interactionMode === 'TOGGLE_FINAL') || (card.action === 'erase' && interactionMode === 'ERASE') || (card.action === 'addNode' && interactionMode === 'ADD_NODE');
                      const isErrorHighlighted = highlightedError === card.action;

                      return (
                        <div key={card.id} className={`card ${cardClass} slide-up-fade ${isSelected ? 'selected-card' : ''} ${isErrorHighlighted ? 'error-pulse' : ''}`} onClick={onClick}>
                          <div className="card-header">Ação</div>
                          <div className="card-icon">{card.icon}</div>
                          <div className="card-footer">{card.label}</div>
                        </div>
                      );
                  } else if (card.type === 'symbol') {
                      const isSelected = selectedSymbolCard === card.symbol;
                      const noTransitions = transitions.length === 0;
                      const isLocked = !discoveredSymbols.has(card.symbol);
                      
                      return (
                        <div key={card.id} className={`card symbol-card slide-up-fade ${isSelected ? 'selected-card' : ''} ${noTransitions ? 'disabled-letter' : ''} ${isLocked ? 'locked-letter' : ''}`} 
                             onClick={() => {
                                if (noTransitions || isLocked) return;
                                setInteractionMode('IDLE');
                                setConnectingSource(null);
                                setSelectedSymbolCard(isSelected ? null : card.symbol);
                             }}>
                          <div className="card-header">Alfabeto</div>
                          <div className="card-icon" style={{ fontSize: '40px', color: '#fbbf24' }}>{isLocked ? '🔒' : card.symbol}</div>
                          <div className="card-footer">Usar Símbolo</div>
                        </div>
                      );
                  }
                  return null;
              })}
            </div>
          </footer>
        );
      })()}

      {/* Dicas do Professor Maurílio (HUD Fixo) */}
      {isDrawingUnlocked && (
        <div style={{ position: 'fixed', right: '20px', bottom: '0px', zIndex: 9999, display: 'flex', alignItems: 'flex-end', cursor: 'pointer' }}>
          {professorMessage && (
            <div style={{ position: 'relative', width: '220px', height: '160px', marginBottom: '130px', marginRight: '-20px', zIndex: 10001 }}>
              <img src={imgBalaoFala} style={{ width: '100%', height: '100%', position: 'absolute', zIndex: 10002 }} />
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '15px 15px 40px 15px', color: '#000', fontSize: '15px', textAlign: 'center', fontWeight: 'bold', zIndex: 10003 }}>{professorMessage}</div>
            </div>
          )}
          <img src={imgMaurilioSerio} alt="Professor" onClick={() => triggerProfessorSpeech(currentLevel?.hint || "Continue tentando!")} style={{ height: '220px', zIndex: 10000, transform: 'scaleX(-1)', filter: 'drop-shadow(2px 4px 6px rgba(0,0,0,0.5))' }} />
        </div>
      )}

      {/* TELA DE VITÓRIA DEFINITIVA */}
      {showVictoryScreen && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
          backgroundColor: 'rgba(0,0,0,0.8)', zIndex: 9999, display: 'flex',
          justifyContent: 'center', alignItems: 'center', flexDirection: 'column'
        }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', position: 'relative' }}>
            <div style={{ position: 'relative', width: '300px', marginRight: '-40px', marginTop: '20px' }}>
              <img src={imgBalaoFala} alt="Balão de Fala" style={{ width: '100%', position: 'absolute', top: 0, left: 0, transform: 'scaleX(-1)' }} />
              <div style={{ position: 'relative', zIndex: 10, padding: '30px 40px', color: '#111827', fontSize: '18px', fontWeight: 'bold', textAlign: 'center', minHeight: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {currentLevel?.successMsg || "Parabéns, você dominou esta linguagem!"}
              </div>
            </div>
            <img src={imgMaurilioExplicando} alt="Professor Maurílio Explicando" style={{ height: '350px' }} />
          </div>
          <button 
            style={{ marginTop: '40px', padding: '20px 40px', fontSize: '24px', backgroundColor: '#10b981', color: '#fff', border: 'none', borderRadius: '12px', cursor: 'pointer', fontWeight: 'bold', boxShadow: '0 4px 6px rgba(0,0,0,0.3)' }}
            onClick={() => {
              setShowVictoryScreen(false);
              setTela('MENU');
            }}
          >
            Voltar ao Menu
          </button>
        </div>
      )}
    </div>
  );
}
