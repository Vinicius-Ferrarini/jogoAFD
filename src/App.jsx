// AutoQuest – App.jsx v3.0 (ROUTER CENTRAL)
import { useState, useCallback } from 'react';
import './App.css';

// Importar páginas e módulos
import MainMenu from './pages/MainMenu';
import AFDPart1 from './modules/afd/AFDPart1';
import AFDPart2 from './modules/afd/AFDPart2';
import AFDMinimizer from './modules/afd/AFDMinimizer';

export default function App() {
  const [screen, setScreen] = useState('HOME');
  const [currentModule, setCurrentModule] = useState(null);
  const [toastData, setToastData] = useState({ show: false, message: '', type: 'info' });

  // ✨ Progresso Persistente
  const getProgress = () => {
    try {
      return JSON.parse(localStorage.getItem('autoquest_progress') || '{}');
    } catch {
      return {};
    }
  };

  const [progress, setProgress] = useState(getProgress);

  const updateProgress = useCallback((moduleId, stars) => {
    setProgress(prev => {
      const cur = prev[moduleId]?.stars || 0;
      if (stars <= cur) return prev;
      const next = { ...prev, [moduleId]: { stars, timestamp: Date.now() } };
      localStorage.setItem('autoquest_progress', JSON.stringify(next));
      return next;
    });
  }, []);

  const showToast = useCallback((message, type = 'info') => {
    setToastData({ show: true, message, type });
    setTimeout(() => setToastData(d => ({ ...d, show: false })), 4000);
  }, []);

  // ✨ Navegação
  const goHome = () => setScreen('HOME');
  const goModules = () => { setScreen('MODULES'); setCurrentModule(null); };
  const goSubmodule = (moduleId) => { setScreen('SUBMODULES'); setCurrentModule(moduleId); };
  const loadGame = (gameId) => {
    setCurrentModule(gameId);
    setScreen('GAME');
  };

  // ✨ Renderização
  if (screen === 'HOME') {
    return <MainMenu onStart={goModules} progress={progress} />;
  }

  if (screen === 'MODULES') {
    return (
      <ModuleSelection
        progress={progress}
        onSelectModule={goSubmodule}
        onBack={goHome}
      />
    );
  }

  if (screen === 'SUBMODULES') {
    return (
      <SubmoduleSelection
        moduleId={currentModule}
        progress={progress}
        onSelectGame={loadGame}
        onBack={goModules}
      />
    );
  }

  if (screen === 'GAME') {
    const moduleProps = {
      onBack: goSubmodule,
      progress,
      updateProgress,
      showToast,
    };

    switch (currentModule) {
      case 'afd-p1':
        return <AFDPart1 {...moduleProps} />;
      case 'afd-p2':
        return <AFDPart2 {...moduleProps} />;
      case 'afd-min':
        return <AFDMinimizer {...moduleProps} />;
      default:
        return <div>Módulo não encontrado</div>;
    }
  }

  return <div>Carregando...</div>;
}

// ✨ Seleção de Módulos Principais
function ModuleSelection({ progress, onSelectModule, onBack }) {
  const modules = [
    {
      id: 'afd',
      label: 'Autômatos Finitos',
      icon: '🤖',
      color: '#60a5fa',
      desc: 'Desenhe, analise e minimize AFDs',
    },
    {
      id: 'ap',
      label: 'Autômatos com Pilha',
      icon: '📚',
      color: '#a78bfa',
      desc: 'Reconhecimento com memória (pilha)',
    },
    {
      id: 'mt',
      label: 'Máquinas de Turing',
      icon: '⚙️',
      color: '#f97316',
      desc: 'Modelos Reconhecedora e Transdutora',
    },
  ];

  return (
    <div className="module-selection-screen">
      <div className="header-with-back">
        <button className="back-btn-large" onClick={onBack}>← Voltar</button>
        <h1>Escolha um Módulo</h1>
      </div>

      <div className="modules-grid-large">
        {modules.map(mod => (
          <button
            key={mod.id}
            className="module-btn-large"
            style={{ borderColor: mod.color, backgroundColor: mod.color + '15' }}
            onClick={() => onSelectModule(mod.id)}
          >
            <div className="module-icon-large">{mod.icon}</div>
            <h3>{mod.label}</h3>
            <p>{mod.desc}</p>
            <div className="arrow">→</div>
          </button>
        ))}
      </div>
    </div>
  );
}

// ✨ Seleção de Submódulos
function SubmoduleSelection({ moduleId, progress, onSelectGame, onBack }) {
  const submodules = {
    afd: [
      { id: 'afd-p1', label: '🎨 Desenhar & Formalizar', desc: 'Desenhe autômatos no canvas' },
      { id: 'afd-p2', label: '📊 Grafo → Linguagem', desc: 'Analise e extraia a linguagem' },
      { id: 'afd-min', label: '⚡ Minimização', desc: '5 exercícios de otimização' },
    ],
    ap: [
      { id: 'ap-pilha', label: '📚 Autômato com Pilha', desc: 'Em breve!' },
      { id: 'ap-formal', label: '📝 Descrição Formal', desc: 'Em breve!' },
    ],
    mt: [
      { id: 'mt-recon', label: '🔍 Reconhecedora', desc: 'Em breve!' },
      { id: 'mt-trans', label: '🔄 Transdutora', desc: 'Em breve!' },
    ],
  };

  const current = submodules[moduleId] || [];
  const moduleNames = { afd: 'Autômatos Finitos', ap: 'Autômatos com Pilha', mt: 'Máquinas de Turing' };

  return (
    <div className="submodule-selection-screen">
      <div className="header-with-back">
        <button className="back-btn-large" onClick={onBack}>← Voltar</button>
        <h1>{moduleNames[moduleId]}</h1>
      </div>

      <div className="submodules-grid">
        {current.map(sub => (
          <button
            key={sub.id}
            className="submodule-btn"
            onClick={() => onSelectGame(sub.id)}
            disabled={sub.id.includes('breve')}
          >
            <h3>{sub.label}</h3>
            <p>{sub.desc}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
