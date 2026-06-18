// TuringLab – App.jsx v3.0 (ROUTER CENTRAL)
import { useState, useCallback, lazy, Suspense } from 'react';
import './App.css';

// Importar páginas e módulos
import MainMenu from './pages/MainMenu';
import FeedbackButton from './components/FeedbackButton';
import { GAME_LEVELS, UNAVAILABLE_LEVELS } from './levels';
import { EXERCISES } from './modules/afd/AFDMinimizer';
const AFDPart1    = lazy(() => import('./modules/afd/AFDPart1'));
const AFDPart2    = lazy(() => import('./modules/afd/AFDPart2'));
const AFDMinimizer = lazy(() => import('./modules/afd/AFDMinimizer'));
const APPart1     = lazy(() => import('./modules/ap/APPart1'));
const MTPart1     = lazy(() => import('./modules/mt/MTPart1'));

// Módulos com uma ÚNICA atividade pulam a tela de submódulos e vão direto ao jogo
// (ex.: AP só tem "Autômato com Pilha" — não faz sentido escolher pilha 2x).
const DIRECT_GAME = { ap: 'ap-pilha', mt: 'mt-trans' };

export default function App() {
  const [screen, setScreen] = useState('HOME');
  const [currentModule, setCurrentModule] = useState(null);
  const [toastData, setToastData] = useState({ show: false, message: '', type: 'info' });

  // ✨ Progresso Persistente
  const getProgress = () => {
    try {
      return JSON.parse(localStorage.getItem('turinglab_progress') || '{}');
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
      localStorage.setItem('turinglab_progress', JSON.stringify(next));
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
  const loadGame = (gameId) => {
    setCurrentModule(gameId);
    setScreen('GAME');
  };
  const goSubmodule = (moduleId) => {
    const direct = DIRECT_GAME[moduleId];
    if (direct) { loadGame(direct); return; }   // pula a tela de submódulos
    setScreen('SUBMODULES'); setCurrentModule(moduleId);
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

    const gameNode = (() => {
      switch (currentModule) {
        case 'afd-p1':  return <AFDPart1 {...moduleProps} onBack={() => goSubmodule('afd')} />;
        case 'afd-p2':  return <AFDPart2 {...moduleProps} onBack={() => goSubmodule('afd')} />;
        case 'afd-min': return <AFDMinimizer {...moduleProps} onBack={() => goSubmodule('afd')} />;
        case 'ap-pilha':  return <APPart1  {...moduleProps} onBack={goModules} />;
        case 'mt-trans':  return <MTPart1  {...moduleProps} onBack={goModules} />;
        default:          return <div>Módulo não encontrado</div>;
      }
    })();

    return (
      <Suspense fallback={<div style={{ display:'flex', alignItems:'center', justifyContent:'center', height:'100vh', fontFamily:'Comic Sans MS, cursive' }}>Carregando...</div>}>
        {gameNode}
      </Suspense>
    );
  }

  return <div>Carregando...</div>;
}

// ✨ Seleção de Módulos Principais
function ModuleSelection({ onSelectModule, onBack }) {
  const modules = [
    { id: 'afd',     badge: 'AFD',   label: 'Autômatos Finitos',    icon: '🤖', color: '#60a5fa',
      desc: 'Desenhe, analise e minimize AFDs' },
    { id: 'ap',      badge: 'AP',    label: 'Autômatos com Pilha',  icon: '📚', color: '#a78bfa',
      desc: 'Reconhecimento com memória (pilha)' },
    { id: 'mt',      badge: 'MT',    label: 'Máquinas de Turing',   icon: '⚙️', color: '#f97316',
      desc: 'Modelos Reconhecedora e Transdutora' },
    { id: 'desafio', badge: 'BOSS',  label: 'Desafio de Prova',     icon: '🏆', color: '#f87171',
      desc: 'Enfrente questões da última prova como desafio final', locked: true },
  ];

  return (
    <div className="nav-screen">
      <div className="nav-header">
        <button className="back-btn" onClick={onBack}>⬅ Voltar</button>
        <h1 className="menu-title" style={{ margin: 0 }}>TuringLab</h1>
        <div style={{ flex: 1 }} />
      </div>
      <div className="nav-section-label">Escolha um Módulo</div>
      <div className="module-cards">
        {modules.map(mod => (
          <button
            key={mod.id}
            className="module-card-neo"
            style={{ '--mc': mod.color }}
            onClick={() => !mod.locked && onSelectModule(mod.id)}
            disabled={!!mod.locked}
          >
            {mod.locked && <span className="nav-ribbon">Em breve!</span>}
            <div className="module-card-icon">{mod.icon}</div>
            <div className="module-card-name">
              <span className="module-badge-tag">{mod.badge}</span>
              {mod.label}
            </div>
            <div className="module-card-desc">{mod.desc}</div>
            {!mod.locked && (
              <div className="module-card-cta" style={{ background: mod.color }}>
                Entrar →
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Botão flutuante de feedback (position:fixed — não afeta o layout) */}
      <FeedbackButton />
    </div>
  );
}

function ModuleProgress({ earned, total }) {
  const pct = total > 0 ? Math.round((earned / total) * 100) : 0;
  const complete = earned === total && total > 0;
  return (
    <div className="module-progress">
      <span className="module-progress-text">⭐ {earned} / {total}</span>
      <div className="module-progress-bar-bg">
        <div
          className={`module-progress-bar-fill${complete ? ' complete' : ''}`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

// ✨ Seleção de Submódulos
function SubmoduleSelection({ moduleId, progress, onSelectGame, onBack }) {
  const p2Progress = (() => {
    try { return JSON.parse(localStorage.getItem('turinglab_progress_p2') || '{}'); }
    catch { return {}; }
  })();

  const availableLevels = GAME_LEVELS.filter(l => !UNAVAILABLE_LEVELS.has(l.id));
  const p1Total  = availableLevels.length * 3;
  const p1Earned = availableLevels.reduce((s, l) => s + (progress[l.id]?.stars || 0), 0);
  const p2Total  = availableLevels.length * 3;
  const p2Earned = availableLevels.reduce((s, l) => s + (p2Progress[l.id]?.stars || 0), 0);
  const minTotal  = EXERCISES.length * 3;
  const minEarned = EXERCISES.reduce((s, ex) => s + (progress[`afd-min-${ex.id}`]?.stars || 0), 0);

  const submodules = {
    afd: [
      { id: 'afd-p1',  icon: '🎨', label: 'Desenhar & Formalizar',
        desc: 'Construa autômatos do zero no canvas interativo', color: '#fde68a',
        earned: p1Earned, total: p1Total },
      { id: 'afd-p2',  icon: '📊', label: 'Grafo → Linguagem',
        desc: 'Analise um grafo pronto e identifique a linguagem', color: '#bfdbfe',
        earned: p2Earned, total: p2Total },
      { id: 'afd-min', icon: '⚡', label: 'Minimização',
        desc: `${EXERCISES.length} exercícios de otimização`, color: '#bbf7d0',
        earned: minEarned, total: minTotal },
    ],
    mt: [
      { id: 'mt-recon', icon: '🔍', label: 'Reconhecedora', desc: 'Em breve!', locked: true },
      { id: 'mt-trans', icon: '🔄', label: 'Transdutora',   desc: 'Desenhe a MT e valide', color: '#fed7aa' },
    ],
  };

  const MOD_META = {
    afd: { label: 'Autômatos Finitos',   icon: '🤖', color: '#60a5fa' },
    ap:  { label: 'Autômatos com Pilha', icon: '📚', color: '#a78bfa' },
    mt:  { label: 'Máquinas de Turing',  icon: '⚙️', color: '#f97316' },
  };
  const meta    = MOD_META[moduleId] || { label: moduleId, icon: '❓', color: '#ccc' };
  const current = submodules[moduleId] || [];

  return (
    <div className="nav-screen">
      <div className="nav-header">
        <button className="back-btn" onClick={onBack}>⬅ Voltar</button>
        <span className="nav-title-badge" style={{ background: meta.color }}>
          {meta.icon} {meta.label}
        </span>
        <div style={{ flex: 1 }} />
      </div>
      <div className="nav-section-label">Escolha uma Atividade</div>
      <div className="submodule-cards">
        {current.map(sub => (
          <button
            key={sub.id}
            className="submodule-card-neo"
            style={{ '--sc': sub.color || '#f3f4f6' }}
            onClick={() => !sub.locked && onSelectGame(sub.id)}
            disabled={!!sub.locked}
          >
            {sub.locked && <span className="nav-ribbon">Em breve!</span>}
            <div className="submodule-card-icon">{sub.icon}</div>
            <div className="submodule-card-name">{sub.label}</div>
            <div className="submodule-card-desc">{sub.desc}</div>
            {!sub.locked && (
              <ModuleProgress earned={sub.earned || 0} total={sub.total || 0} />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
