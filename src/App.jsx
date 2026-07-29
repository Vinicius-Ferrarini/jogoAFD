// TuringLab – App.jsx v3.0 (ROUTER CENTRAL)
import { useState, useCallback, lazy, Suspense } from 'react';
import './App.css';

// Importar páginas e módulos
import MainMenu from './pages/MainMenu';
import FeedbackButton from './components/FeedbackButton';
import LoadingScreen from './components/LoadingScreen';
import { LEVEL_IDS, UNAVAILABLE_LEVELS } from './levels';
import { EXERCISES } from './modules/afd/afdMinimizerExercises';
import { MT_RECON_LEVELS } from './levels_data/mt-recon/index.js';
import { MT_LEVELS } from './levels_data/mt/index.js';
const AFDPart1    = lazy(() => import('./modules/afd/AFDPart1'));
const AFDPart2    = lazy(() => import('./modules/afd/AFDPart2'));
const AFDMinimizer = lazy(() => import('./modules/afd/AFDMinimizer'));
const APPart1     = lazy(() => import('./modules/ap/APPart1'));
const MTPart1     = lazy(() => import('./modules/mt/MTPart1'));
const MTReconPart1 = lazy(() => import('./modules/mt/MTReconPart1'));

// Módulos com uma ÚNICA atividade pulam a tela de submódulos e vão direto ao jogo
// (ex.: AP só tem "Autômato com Pilha" — não faz sentido escolher pilha 2x).
// MT tem 2 atividades (Reconhecedora + Transdutora), então passa pela tela de
// submódulos como o AFD.
const DIRECT_GAME = { ap: 'ap-pilha' };

export default function App() {
  const [screen, setScreen] = useState('HOME');
  const [currentModule, setCurrentModule] = useState(null);

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

  // TODO: showToast não renderiza feedback visual — toastData foi removido por
  // ser código morto, mas os chamadores (AFDPart1/2, MTPart1 etc.) ainda esperam
  // essa função. Precisa de um componente de toast de verdade no futuro.
  const showToast = useCallback(() => {}, []);

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
        case 'mt-trans':  return <MTPart1  {...moduleProps} onBack={() => goSubmodule('mt')} />;
        case 'mt-recon':  return <MTReconPart1 {...moduleProps} onBack={() => goSubmodule('mt')} />;
        default:          return <div>Módulo não encontrado</div>;
      }
    })();

    return (
      <Suspense fallback={<LoadingScreen />}>
        {gameNode}
      </Suspense>
    );
  }

  return <LoadingScreen />;
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

  const availableLevelIds = LEVEL_IDS.filter(id => !UNAVAILABLE_LEVELS.has(id));
  const p1Total  = availableLevelIds.length * 3;
  const p1Earned = availableLevelIds.reduce((s, id) => s + (progress[id]?.stars || 0), 0);
  const p2Total  = availableLevelIds.length * 3;
  const p2Earned = availableLevelIds.reduce((s, id) => s + (p2Progress[id]?.stars || 0), 0);
  const minTotal  = EXERCISES.length * 3;
  const minEarned = EXERCISES.reduce((s, ex) => s + (progress[`afd-min-${ex.id}`]?.stars || 0), 0);
  const mtReconTotal  = MT_RECON_LEVELS.length * 3;
  const mtReconEarned = MT_RECON_LEVELS.reduce((s, l) => s + (progress[`mt-recon-${l.id}`]?.stars || 0), 0);
  const mtTransTotal  = MT_LEVELS.length * 3;
  const mtTransEarned = MT_LEVELS.reduce((s, l) => s + (progress[`mt-trans-${l.id}`]?.stars || 0), 0);

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
      { id: 'mt-recon', icon: '🔍', label: 'Reconhecedora', desc: 'Desenhe a MT e valide se aceita a linguagem',
        color: '#c7d2fe', earned: mtReconEarned, total: mtReconTotal },
      { id: 'mt-trans', icon: '🔄', label: 'Transdutora',   desc: 'Desenhe a MT e valide', color: '#fed7aa',
        earned: mtTransEarned, total: mtTransTotal },
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
