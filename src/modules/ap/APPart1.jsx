// ─── APPart1: módulo Autômato com Pilha (desenhar → descrição formal) ────────
// Mesmo visual do AFD_1: deck de cartas, canvas, painel de testes, professor no
// rodapé. Fluxo: desenhar o AP → Validar (bateria, ★1) → Descrição Formal
// (elementos ★2, função δ ★3) → vitória. Diferenças legítimas do AP: transição
// de 3 campos (lê, desempilha ; empilha) e descrição com Γ/B em vez de F.
import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import '../afd/AFDPart1.css';
import '../afd/components/TestPanel.css';
import './APPart1.css';
import { SvgStars, DifficultyLegend } from '../afd/SvgStar';
import EndScreen from '../afd/components/EndScreen';
import APCanvas from './components/APCanvas';
import APStackSim from './components/APStackSim';
import APFooterDeck from './components/APFooterDeck';
import APFormalDescription from './components/APFormalDescription';
import usePDAGraph from './hooks/usePDAGraph';
import useAPDrawing from './hooks/useAPDrawing';
import { AP_LEVELS } from './levels_ap';
import { pdaAcceptingRun } from './utils/pdaAlgorithms';
import { DIFF_COLOR } from '../../levels';

export default function APPart1({ onBack, progress, updateProgress, showToast }) {
  const [screen, setScreen] = useState('MENU');
  const [level, setLevel]   = useState(null);
  const [mode, setMode]     = useState('IDLE');
  const [connectingSource, setConnectingSource] = useState(null);
  const [prof, setProf]     = useState({ message: '', mood: 'serio' });
  const [result, setResult] = useState(null);
  const [sim, setSim]       = useState(null);
  const [simHighlight, setSimHighlight] = useState({ nodeId: null, type: null });
  const [simWord, setSimWord] = useState('');
  const [simKey, setSimKey]   = useState(0);
  const [formalOpen, setFormalOpen] = useState(false);
  const [deckGhost, setDeckGhost]   = useState(null);
  const [victory, setVictory]       = useState(false);
  const canvasRef = useRef(null);

  const g = usePDAGraph();
  const draw = useAPDrawing(canvasRef);

  const say = useCallback((message, mood = 'serio') => setProf({ message, mood }), []);

  // Atalhos: Ctrl+Z desfaz (rabisco primeiro, depois grafo), Ctrl+Y/Shift+Z refaz, Esc sai do modo.
  const { undo: gUndo, redo: gRedo } = g;
  const { drawUndo, drawingStack } = draw;
  useEffect(() => {
    const onKey = (e) => {
      const isInput = ['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName);
      const ctrl = e.ctrlKey || e.metaKey;
      const k = e.key.toLowerCase();
      if (ctrl && (k === 'z' || k === 'y')) {
        if (isInput) return; // deixa o desfazer nativo do campo de texto
        e.preventDefault();
        if (k === 'z' && !e.shiftKey) { drawingStack.length > 0 ? drawUndo() : gUndo(); }
        else { gRedo(); }
      }
      if (e.key === 'Escape') { setMode('IDLE'); setConnectingSource(null); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [gUndo, gRedo, drawUndo, drawingStack]);
  const handleHighlight = useCallback((nodeId, type) => setSimHighlight({ nodeId, type }), []);
  const openSim  = useCallback((s) => { setSim(s); setSimKey(k => k + 1); }, []);
  const closeSim = useCallback(() => { setSim(null); setSimHighlight({ nodeId: null, type: null }); }, []);

  // ── Carregar exercício ──────────────────────────────────────────────────────
  const loadLevel = useCallback((lv) => {
    g.reset();
    setLevel(lv); setScreen('GAME'); setMode('IDLE'); setConnectingSource(null);
    setResult(null); setSim(null); setSimHighlight({ nodeId: null, type: null });
    setSimWord(''); setFormalOpen(false); setDeckGhost(null); setVictory(false);
    draw.resetDrawings();
    say(`Monte o AP que reconhece ${lv.language} por PILHA VAZIA e clique em Validar!`, 'explicando');
  }, [g, draw, say]);

  const goLevel = useCallback((dir) => {
    const idx = AP_LEVELS.findIndex(l => l.id === level?.id);
    const next = AP_LEVELS[idx + dir];
    if (next) loadLevel(next);
  }, [level, loadLevel]);

  const pickMode = (m) => { setMode(m); setConnectingSource(null); };

  // ── Drag da carta ◯ → canvas (ghost via portal, igual AFD) ──────────────────
  const handleDeckDrag = useCallback((x, y) => setDeckGhost({ x, y }), []);
  const handleDeckDrop = useCallback((clientX, clientY) => {
    setDeckGhost(null);
    const el = canvasRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    if (clientX < r.left || clientX > r.right || clientY < r.top || clientY > r.bottom) return;
    const cssZoom = r.width / el.offsetWidth;
    const x = ((clientX - r.left) / cssZoom / el.offsetWidth) * 100;
    const y = ((clientY - r.top)  / cssZoom / el.offsetHeight) * 100;
    g.addNode(Math.max(3, Math.min(97, x)), Math.max(6, Math.min(94, y)));
  }, [g]);
  const handleDeckCancel = useCallback(() => setDeckGhost(null), []);

  // ── Validar (bateria) = ★1 ──────────────────────────────────────────────────
  const validate = useCallback(() => {
    if (!level) return;
    setSim(null); setSimHighlight({ nodeId: null, type: null });
    const res = g.validatePDA(level);
    setResult(res);
    if (res.ok) {
      say('Linguagem certa! Agora preencha a Descrição Formal. 🎉', 'feliz');
      updateProgress?.(`ap-${level.id}`, 1);
      showToast?.('AP validado por pilha vazia! ★', 'success');
      setFormalOpen(true);
    } else if (res.reason === 'counterexample') {
      say(res.message, 'serio');
      if (res.run) {
        openSim({ run: res.run, word: res.counterexample.word,
          title: `Contraexemplo: "${res.counterexample.word === '' ? 'λ' : res.counterexample.word}"`,
          message: res.runSource === 'gabarito'
            ? 'Caminho do gabarito (como deveria aceitar):'
            : 'Caminho indevido do seu AP:' });
      }
    } else {
      say(res.message, 'serio');
      showToast?.(res.message, 'error');
    }
  }, [level, g, say, updateProgress, showToast, openSim]);

  // ── Descrição formal: ★2 (elementos) e ★3 (função δ → vitória) ──────────────
  const onFormalElements = useCallback(() => {
    updateProgress?.(`ap-${level.id}`, 2);
    say('Elementos corretos! Agora a função de transição δ.', 'feliz');
  }, [level, updateProgress, say]);

  const onFormalDone = useCallback(() => {
    updateProgress?.(`ap-${level.id}`, 3);
    setFormalOpen(false); setVictory(true);
  }, [level, updateProgress]);

  const checkGraph = useCallback(
    () => g.nodes.some(n => n.isInitial) && g.transitions.length > 0,
    [g.nodes, g.transitions]);

  // ── Simular palavra livre ───────────────────────────────────────────────────
  const simulate = useCallback(() => {
    if (!level) return;
    const word = simWord.trim();
    const run = pdaAcceptingRun(g.studentPda, word);
    const show = word === '' ? 'λ' : word;
    if (run) {
      openSim({ run, word, title: `Simulação: "${show}"`, message: 'Computação que ACEITA (pilha esvazia):' });
      say(`Seu AP aceita "${show}". Veja a pilha passo a passo.`, 'explicando');
    } else {
      closeSim();
      say(`Seu AP NÃO aceita "${show}" (nenhuma computação esvazia a pilha).`, 'serio');
    }
  }, [level, simWord, g.studentPda, say, openSim, closeSim]);

  const stars = level ? (progress?.[`ap-${level.id}`]?.stars || 0) : 0;

  // ── Menu de exercícios (padrão AFD_1: TuringLab + grade + legenda) ──────────
  if (screen === 'MENU') {
    const maxStars   = AP_LEVELS.length * 3;
    const totalStars = AP_LEVELS.reduce((s, l) => s + (progress?.[`ap-${l.id}`]?.stars || 0), 0);
    return (
      <div className="menu-screen menu-screen-fases min-screen" style={{ justifyContent: 'flex-start', paddingTop: 20 }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 14, width: '100%' }}>
          <div style={{ flex: 1 }}>
            <button className="back-btn" onClick={onBack}>⬅ Voltar</button>
          </div>
          <h1 className="menu-title" style={{ margin: 0 }}>TuringLab</h1>
          <div style={{ flex: 1 }} />
        </div>
        <p style={{ fontWeight: 900, fontSize: 16, color: '#555', marginBottom: 12,
          background: '#ddd6fe', border: '3px solid #000', borderRadius: 8,
          padding: '4px 16px', boxShadow: '3px 3px 0 #000' }}>
          📚 Autômato com Pilha
        </p>
        <div style={{ marginBottom: 18, fontWeight: 'bold', fontSize: 16 }}>
          Progresso: {maxStars > 0 ? Math.round((totalStars / maxStars) * 100) : 0}% ({totalStars}/{maxStars} ★)
        </div>
        <div className="levels-grid">
          {AP_LEVELS.map(l => (
            <button key={l.id} className="menu-btn primary" onClick={() => loadLevel(l)}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
                background: DIFF_COLOR[l.level] }}>
              <span>{l.label}</span>
              <SvgStars count={progress?.[`ap-${l.id}`]?.stars || 0} size={14} max={3} />
            </button>
          ))}
        </div>
        <DifficultyLegend keys={['easy', 'medium', 'hard']} />
      </div>
    );
  }

  // ── Tela do jogo ────────────────────────────────────────────────────────────
  const apIdx  = AP_LEVELS.findIndex(l => l.id === level.id);
  const nextAp = apIdx >= 0 && apIdx < AP_LEVELS.length - 1 ? AP_LEVELS[apIdx + 1] : null;

  return (
    <div className="workspace-wrapper">
      {deckGhost && createPortal(
        <div className="deck-drag-ghost" style={{ left: deckGhost.x, top: deckGhost.y }} />,
        document.body)}

      {/* Header */}
      <div className="ap-header">
        <button className="back-btn" onClick={() => setScreen('MENU')}>⬅ Exercícios</button>
        <div className="ap-header-mid">
          <span className="ap-header-id">{level.label}</span>
          <span className="ap-header-lang">{level.language}</span>
        </div>
        <button className="ap-formal-toggle" disabled={stars < 1} onClick={() => setFormalOpen(o => !o)}>
          📝 Descrição Formal
        </button>
        <div className="ap-header-stars">{'★'.repeat(stars)}{'☆'.repeat(3 - stars)}</div>
        <div className="ap-header-nav">
          <button onClick={() => goLevel(-1)} title="Anterior">◀</button>
          <button onClick={() => goLevel(1)} title="Próximo">▶</button>
        </div>
      </div>

      <div className="workspace">
        {/* Sidebar: Descrição Formal */}
        <aside className={`formal-panel ${formalOpen ? 'open' : ''}`}>
          <APFormalDescription
            key={formalOpen ? 'formal-open' : 'formal-closed'}
            isOpen={formalOpen}
            onClose={() => setFormalOpen(false)}
            nodes={g.nodes}
            transitions={g.transitions}
            alphabet={level.alphabet}
            onValidateGraph={checkGraph}
            onElementsSuccess={onFormalElements}
            onSuccess={onFormalDone}
            showToast={showToast}
          />
        </aside>

        {/* Canvas */}
        <APCanvas
          canvasRef={canvasRef}
          nodes={g.nodes}
          transitions={g.transitions}
          mode={mode}
          setMode={setMode}
          beginDrag={g.beginDrag}
          draw={draw}
          simHighlight={simHighlight}
          connectingSource={connectingSource}
          setConnectingSource={setConnectingSource}
          addNode={g.addNode}
          moveNode={g.moveNode}
          toggleInitial={g.toggleInitial}
          setNodeLabel={g.setNodeLabel}
          renameNode={g.renameNode}
          deleteNode={g.deleteNode}
          addTriple={g.addTriple}
          editTriple={g.editTriple}
          removeTriple={g.removeTriple}
          removeEdge={g.removeEdge}
        />

        {/* Painel direito (estilo TestPanel) */}
        <aside className="test-panel">
          <div className="section-header" style={{ fontSize: 11 }}>Linguagem</div>
          <div style={{ fontSize: 15, fontWeight: 700, color: '#1e3a8a' }}>{level.language}</div>
          <div style={{ fontSize: 12, color: '#444', marginTop: 4 }}>
            Σ = {`{ ${level.alphabet.join(', ')} }`} · Γ = {`{ ${level.stackAlphabet.join(', ')} }`}<br />
            Fundo <b>Z</b> · aceita por <b>pilha vazia</b>
          </div>
          {level.hint && (
            <div style={{ marginTop: 8, fontSize: 12, background: '#fef9c3',
              border: '2px dashed #ca8a04', borderRadius: 8, padding: '6px 8px' }}>💡 {level.hint}</div>
          )}

          <button className="validate-btn slide-up-fade" style={{ marginTop: 10 }} onClick={validate}>
            ✓ Validar AP
          </button>

          <div className="section-header" style={{ fontSize: 11, marginTop: 12 }}>Testar uma palavra</div>
          <div className="test-input-area">
            <input type="text" className="word-input" placeholder="ex: aabb (vazio = λ)"
              value={simWord} onChange={e => setSimWord(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && simulate()}
              translate="no" spellCheck={false} autoCorrect="off" autoCapitalize="off" />
            <button className="add-test-btn" onClick={simulate}>▶</button>
          </div>

          {result && !result.ok && result.reason !== 'counterexample' && (
            <div className="ap-result err">{result.message}</div>
          )}

          {sim && (
            <APStackSim key={simKey} run={sim.run} word={sim.word} title={sim.title}
              message={sim.message} onHighlight={handleHighlight} onClose={closeSim} />
          )}
        </aside>
      </div>

      {/* Rodapé: deck de cartas + Maurílio (mesmo visual do AFD) */}
      <APFooterDeck
        mode={mode}
        onPick={pickMode}
        canUndo={g.canUndo}
        canRedo={g.canRedo}
        onUndo={g.undo}
        onRedo={g.redo}
        profMessage={prof.message}
        profMood={prof.mood}
        onProfClick={() => say(level.hint || 'Lembre: aceita por pilha vazia (esvazie o Z no fim).', 'explicando')}
        onNodeDrag={handleDeckDrag}
        onNodeDrop={handleDeckDrop}
        onNodeDragCancel={handleDeckCancel}
      />

      {victory && (
        <EndScreen
          currentLevelId={level.id}
          nextLevel={nextAp}
          message={`Parabéns! Você dominou ${level.label}: ${level.language}. ⭐⭐⭐`}
          balloon={{ width: 320, height: 220, marginTop: -150 }}
          textStyle={{ padding: '20px 20px 52px', fontSize: 15 }}
          nextPrefix="Próximo: "
          onMenu={() => { setVictory(false); setScreen('MENU'); }}
          onNext={(lv) => loadLevel(lv)}
        />
      )}
    </div>
  );
}
