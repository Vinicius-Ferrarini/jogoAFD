// ─── MTReconPart1: módulo MT Reconhecedora (desenhar a MT → Validar) ─────────
// Mesmo visual/motor do AP: canvas fixo 8000×8000px + zoom real, GameHeader
// compartilhado, overlay "descubra a menor palavra" antes de destravar o
// desenho, painel Linguagem/Desenho no estilo ap-test-panel.
// Validação via fuzzTMRecognizer (bateria acceptedWords/rejectedWords) —
// aceita se para em estado final, o conteúdo final da fita NÃO importa
// (diferente da transdutora — irmã deste módulo, ver MTPart1.jsx).
import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import '../afd/AFDPart1.css';
import '../afd/components/TestPanel.css';
import '../ap/APPart1.css';
import { SvgStars, DifficultyLegend } from '../afd/SvgStar';
import EndScreen from '../afd/components/EndScreen';
import GameHeader from '../afd/components/GameHeader';
import MTCanvas from './components/MTCanvas';
import APFooterDeck from '../ap/components/APFooterDeck';
import useTMGraph from './hooks/useTMGraph';
import useMTGuidedLesson from './hooks/useMTGuidedLesson';
import useAPDrawing from '../ap/hooks/useAPDrawing';
import useCanvasState, { INNER_W, INNER_H } from '../afd/hooks/useCanvasState.js';
import { MT_RECON_LEVELS, getShortestWord, getGabaritoGraph } from '../../levels_data/mt-recon/index.js';
import { fuzzTMRecognizer, simulateTM } from './utils/tmAlgorithms';
import { DIFF_COLOR } from '../../levels';

const EMPTY_FORMAL = { states: '', sigma: '', gamma: '', initial: '', blank: '', final: '', deltaCells: {} };

export default function MTReconPart1({ onBack, progress, updateProgress, showToast }) {
  const [screen, setScreen] = useState('MENU');
  const [level,  setLevel]  = useState(null);
  const [mode,   setMode]   = useState('IDLE');
  const [connectingSource, setConnectingSource] = useState(null);
  const [prof,   setProf]   = useState({ message: '', mood: 'serio' });
  const [result, setResult] = useState(null);
  const [simWord, setSimWord] = useState('');
  const [testedWords, setTestedWords] = useState([]);
  // Antes de destravar: sempre testa contra a LINGUAGEM (mecânica de achar a
  // menor palavra). Depois: o aluno escolhe LANGUAGE (gabarito) ou DRAWING (o
  // grafo que ele mesmo montou) — mesmo padrão do AP.
  const [testMode, setTestMode] = useState('LANGUAGE');
  const [isDrawingUnlocked, setIsDrawingUnlocked] = useState(false);
  const [deckGhost, setDeckGhost] = useState(null);
  const [victory, setVictory]     = useState(false);
  const [selectedNodes, setSelectedNodes]   = useState([]);
  const [selectionBox, setSelectionBox]     = useState(null);
  const [formalAnswers, setFormalAnswers]   = useState(EMPTY_FORMAL);
  const [formalMode, setFormalMode]         = useState(false);
  const [validationError, setValidationError] = useState(null);
  const [inputError, setInputError]           = useState(null);
  const canvasRef      = useRef(null);
  const innerCanvasRef = useRef(null);
  const viewportRef    = useRef(null);
  const formalRef      = useRef(null);
  const noopRef        = useRef(false);

  const lesson = useMTGuidedLesson(level);
  const g    = useTMGraph({ showToast, selectedNodes, setSelectedNodes });
  const draw = useAPDrawing(innerCanvasRef);

  // Canvas fixo (8000×8000px) + zoom real: mesmo motor do AP/AFD.
  const { zoom, setZoom, resetZoom } = useCanvasState({
    isDrawingUnlocked: true,
    setInteractionMode: () => {},
    squashNextHistoryRef: noopRef,
    setConnectingSource,
    setSelectedSymbolCard: () => {},
    setSelectedNodes,
    tela: screen === 'GAME' ? 'JOGO' : screen,
    isSidebarOpen: formalMode,
    canvasRef,
    viewportRef,
  });

  const viewNodes       = lesson.active ? lesson.displayNodes       : g.nodes;
  const viewTransitions = lesson.active ? lesson.displayTransitions : g.transitions;

  const say = useCallback((message, mood = 'serio') => setProf({ message, mood }), []);

  // ── Modo Aula: iniciar / navegar / sair ─────────────────────────────────────
  const applyStep = useCallback((st) => {
    if (!st) return;
    setProf(st.prof ?? { message: '', mood: 'serio' });
  }, []);

  const startLesson = useCallback(() => {
    if (!lesson.hasLesson) return;
    setMode('IDLE'); setConnectingSource(null); setResult(null);
    setFormalAnswers(EMPTY_FORMAL); setFormalMode(false); setValidationError(null);
    lesson.goTo(0);
    applyStep(lesson.steps[0]);
  }, [lesson, applyStep]);

  const finishLesson = useCallback(() => {
    lesson.finish();
    say('Aula encerrada! Agora monte a sua MT e clique em Validar. 💪', 'explicando');
  }, [lesson, say]);

  const lessonGo = useCallback((dir) => {
    if (!lesson.active) return;
    const next = Math.max(0, Math.min(lesson.steps.length - 1, (lesson.step ?? 0) + dir));
    lesson.goTo(next);
    applyStep(lesson.steps[next]);
  }, [lesson, applyStep]);

  useEffect(() => {
    const fill = lesson.cur?.formalFill;
    if (!fill) return;
    setFormalAnswers(prev => {
      const next = { ...prev, ...fill };
      if (fill.delta) {
        const cells = {};
        for (const t of fill.delta) {
          cells[`${t.from}|${t.read === '' ? '□' : t.read}`] = `${t.to}, ${t.write === '' ? '□' : t.write}, ${t.move}`;
        }
        next.deltaCells = cells;
        delete next.delta;
      }
      return next;
    });
  }, [lesson.step]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (lesson.phase === 'FORMAL' && formalRef.current) {
      formalRef.current.scrollTo({ top: formalRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [lesson.step, lesson.phase]);

  // ── Atalhos de teclado ───────────────────────────────────────────────────────
  const { undo: gUndo, redo: gRedo, deleteSelected: gDeleteSelected } = g;
  const { drawUndo, drawingStack } = draw;
  useEffect(() => {
    const onKey = (e) => {
      if (lesson.active) { if (e.key === 'Escape') finishLesson(); return; }
      const isInput = ['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName);
      const ctrl = e.ctrlKey || e.metaKey;
      const k = e.key.toLowerCase();
      if (ctrl && (k === 'z' || k === 'y')) {
        if (isInput) return;
        e.preventDefault();
        if (k === 'z' && !e.shiftKey) { drawingStack.length > 0 ? drawUndo() : gUndo(); }
        else { gRedo(); }
      }
      if (e.key === 'Delete' && !isInput) { gDeleteSelected(); }
      if (e.key === 'Escape') { setMode('IDLE'); setConnectingSource(null); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [gUndo, gRedo, gDeleteSelected, drawUndo, drawingStack, lesson.active, finishLesson]);

  // ── Carregar nível ──────────────────────────────────────────────────────────
  const loadLevel = useCallback((lv) => {
    g.reset();
    lesson.reset();
    setLevel(lv); setScreen('GAME'); setMode('IDLE'); setConnectingSource(null);
    setResult(null); setSimWord(''); setTestedWords([]); setDeckGhost(null); setVictory(false);
    setSelectedNodes([]); setSelectionBox(null);
    setTestMode('LANGUAGE'); setIsDrawingUnlocked(false);
    setFormalAnswers(EMPTY_FORMAL); setFormalMode(false); setValidationError(null);
    draw.resetDrawings();
    resetZoom();
    say('', 'serio');
  }, [g, lesson, draw, say, resetZoom]);

  const goLevel = useCallback((dir) => {
    const idx = MT_RECON_LEVELS.findIndex(l => l.id === level?.id);
    const next = MT_RECON_LEVELS[idx + dir];
    if (next) loadLevel(next);
  }, [level, loadLevel]);

  const pickMode = (m) => { setMode(m); setConnectingSource(null); };

  // ── Drag da carta ◯ → canvas ────────────────────────────────────────────────
  const handleDeckDrag   = useCallback((x, y) => setDeckGhost({ x, y }), []);
  const handleDeckDrop   = useCallback((clientX, clientY) => {
    setDeckGhost(null);
    const outer = canvasRef.current;
    const inner = innerCanvasRef.current;
    if (!outer || !inner) return;
    const r = outer.getBoundingClientRect();
    if (clientX < r.left || clientX > r.right || clientY < r.top || clientY > r.bottom) return;
    const ri = inner.getBoundingClientRect();
    const x = ((clientX - ri.left) / ri.width)  * INNER_W;
    const y = ((clientY - ri.top)  / ri.height) * INNER_H;
    g.addNode(Math.max(5, Math.min(INNER_W - 5, x)), Math.max(5, Math.min(INNER_H - 5, y)));
  }, [g]);
  const handleDeckCancel = useCallback(() => setDeckGhost(null), []);

  // ── Testar palavra ───────────────────────────────────────────────────────────
  // Antes de destravar: sempre testa contra a LINGUAGEM (gabarito) — mecânica
  // de onboarding "descubra a menor palavra", igual ao AP/AFD.
  const testWord = useCallback(() => {
    if (!level) return;
    const raw = simWord.trim();
    const lower = raw.toLowerCase();
    const word = (lower === 'null' || lower === 'vazio') ? '' : raw;
    const display = word === '' ? 'λ' : word;

    if (word !== '') {
      const alphabet = level.alphabet ?? [];
      const invalid = [...word].find(ch => !alphabet.includes(ch));
      if (invalid) {
        setInputError(`Caractere inválido '${invalid}'! Alfabeto: ${alphabet.join(', ')}`);
        return;
      }
    }
    setInputError(null);

    if (!isDrawingUnlocked || testMode === 'LANGUAGE') {
      if (testedWords.some(t => t.word === display && t.mode === 'LANGUAGE')) { setSimWord(''); return; }
      const graph = getGabaritoGraph(level);
      const { status } = simulateTM(graph, word, 2000, level.startMarker ?? null);
      const accepted = status === 'ACCEPTED';
      if (!isDrawingUnlocked) {
        const shortest = getShortestWord(level);
        const isShortest = accepted && word === shortest;
        setTestedWords(prev => [{ word: display, mode: 'LANGUAGE', status: isShortest ? 'shortest' : accepted ? 'correct' : 'wrong' }, ...prev]);
        if (isShortest) {
          setIsDrawingUnlocked(true);
          updateProgress?.(`mt-recon-${level.id}`, 1);
          showToast?.('Sucesso! Tabuleiro liberado.', 'success');
        }
      } else {
        setTestedWords(prev => [{ word: display, mode: 'LANGUAGE', status: accepted ? 'correct' : 'wrong' }, ...prev]);
      }
      setSimWord('');
      return;
    }

    // testMode === 'DRAWING': testa contra a MT do ALUNO.
    const mtGraph = { states: g.nodes, transitions: g.transitions };
    const { status } = simulateTM(mtGraph, word, 2000, level.startMarker ?? null);
    setTestedWords(prev => prev.some(t => t.word === display && t.mode === 'DRAWING')
      ? prev : [{ word: display, mode: 'DRAWING', accepted: status === 'ACCEPTED' }, ...prev]);
    setSimWord('');
  }, [level, simWord, isDrawingUnlocked, testMode, testedWords, g.nodes, g.transitions, updateProgress, showToast]);

  // ── Validar (bateria) = ★1 ──────────────────────────────────────────────────
  const validate = useCallback(() => {
    if (!level) return;

    if (!g.nodes.find(n => n.isInitial)) {
      setValidationError('Erro Crítico: Defina um Estado Inicial (▶)!');
      return;
    }
    if (!g.nodes.some(n => n.isFinal)) {
      setValidationError('Erro Crítico: Defina um Estado Final (◎)!');
      return;
    }
    const seen = new Map();
    for (const t of g.transitions) {
      const sym = t.read === '' ? '□' : t.read;
      const key = `${t.from}|${sym}`;
      const sig = `${t.to}|${t.write}|${t.move}`;
      if (seen.has(key) && seen.get(key) !== sig) {
        const lbl = g.nodes.find(n => n.id === t.from)?.label ?? t.from;
        setValidationError(`Erro: Transição não-determinística no estado ${lbl} para o símbolo ${sym}`);
        return;
      }
      if (!seen.has(key)) seen.set(key, sig);
    }
    setValidationError(null);

    const mtGraph = { states: g.nodes, transitions: g.transitions };
    const res = fuzzTMRecognizer(mtGraph, level);
    setResult(res);
    if (res.ok) {
      updateProgress?.(`mt-recon-${level.id}`, 2);
      say('Perfeito! Sua MT reconhece a linguagem corretamente! Agora preencha a Descrição Formal. 📝', 'feliz');
      showToast?.('MT validada! ★★ — formalize a máquina.', 'success');
      setFormalMode(true);
    } else {
      const show = res.counterexample === '' ? 'λ' : res.counterexample;
      const msg = res.reason === 'loop'
        ? `Loop detectado para "${show}". Verifique se a MT para em todos os casos.`
        : res.reason === 'wrongly-accepted'
        ? `Sua MT aceita "${show}" indevidamente (não pertence à linguagem).`
        : `Sua MT não aceita "${show}" (deveria pertencer à linguagem).`;
      say(msg, 'serio');
      showToast?.(msg, 'error');
    }
  }, [level, g, say, updateProgress, showToast]);

  const concludePhase = useCallback(() => {
    setFormalMode(false);
    setVictory(true);
    updateProgress?.(`mt-recon-${level.id}`, 3);
  }, [level, updateProgress]);

  const stars = level ? (progress?.[`mt-recon-${level.id}`]?.stars || 0) : 0;

  // ── Menu ─────────────────────────────────────────────────────────────────────
  if (screen === 'MENU') {
    const maxStars   = MT_RECON_LEVELS.length * 3;
    const totalStars = MT_RECON_LEVELS.reduce((s, l) => s + (progress?.[`mt-recon-${l.id}`]?.stars || 0), 0);
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
          background: '#c7d2fe', border: '3px solid #000', borderRadius: 8,
          padding: '4px 16px', boxShadow: '3px 3px 0 #000' }}>
          🔍 Máquina de Turing — Reconhecedora
        </p>
        <div style={{ marginBottom: 18, fontWeight: 'bold', fontSize: 16 }}>
          Progresso: {maxStars > 0 ? Math.round((totalStars / maxStars) * 100) : 0}% ({totalStars}/{maxStars} ★)
        </div>
        <div className="levels-grid">
          {MT_RECON_LEVELS.map(l => (
            <button key={l.id} className="menu-btn primary" onClick={() => loadLevel(l)}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
                background: DIFF_COLOR[l.level] }}>
              <span>{l.label}</span>
              <SvgStars count={progress?.[`mt-recon-${l.id}`]?.stars || 0} size={14} max={3} />
            </button>
          ))}
        </div>
        <DifficultyLegend keys={['easy', 'medium', 'hard']} />
      </div>
    );
  }

  // ── Tela do jogo ─────────────────────────────────────────────────────────────
  const mtIdx  = MT_RECON_LEVELS.findIndex(l => l.id === level.id);
  const nextMt = mtIdx >= 0 && mtIdx < MT_RECON_LEVELS.length - 1 ? MT_RECON_LEVELS[mtIdx + 1] : null;
  const isFormal   = lesson.phase === 'FORMAL';
  const formalOpen = isFormal || formalMode;

  const sigmaCols    = level.alphabet ?? [];
  const formalCols   = [...sigmaCols, ...((level.tapeAlphabet ?? []).filter(s => !sigmaCols.includes(s)))];
  const formalStateRows = (lesson.active ? (lesson.displayNodes ?? []) : g.nodes).map(n => n.id);

  const setDeltaCell = (key, value) => setFormalAnswers(prev => ({
    ...prev, deltaCells: { ...prev.deltaCells, [key]: value },
  }));

  const formalField = (label, k, placeholder) => {
    const filled = !!formalAnswers[k];
    return (
      <div style={{ marginBottom: 8 }}>
        <label style={{ display: 'block', fontFamily: "'Comic Sans MS',cursive", fontSize: 11,
          fontWeight: 900, color: '#065f46', marginBottom: 3 }}>{label}</label>
        <input type="text" value={formalAnswers[k] ?? ''} placeholder={placeholder}
          disabled={lesson.active}
          onChange={e => setFormalAnswers(prev => ({ ...prev, [k]: e.target.value }))}
          translate="no" spellCheck={false} autoCorrect="off" autoCapitalize="off"
          style={{ width: '100%', boxSizing: 'border-box', padding: '5px 7px',
            fontFamily: "'Comic Sans MS',cursive", fontSize: 13, fontWeight: 900,
            background: filled ? '#f0fdf4' : '#fff',
            color: filled ? '#111' : '#9ca3af',
            border: filled ? '2px solid #22c55e' : '2px solid #d1d5db', borderRadius: 6 }} />
      </div>
    );
  };

  return (
    <div className="workspace-wrapper">
      {deckGhost && createPortal(
        <div className="deck-drag-ghost" style={{ left: deckGhost.x, top: deckGhost.y }} />,
        document.body)}

      {/* Header (compartilhado com AFD/AP — mesmo componente/estilo/motor) */}
      <GameHeader
        objective={level.language}
        label={level.label}
        diffColor={DIFF_COLOR[level.level] ?? '#fff'}
        stars={stars}
        starsMax={3}
        isFirst={mtIdx === 0}
        isLast={mtIdx === MT_RECON_LEVELS.length - 1}
        toggleSidebar={() => setFormalMode(o => !o)}
        onBack={() => { lesson.finish(); setScreen('MENU'); }}
        onPrevLevel={() => goLevel(-1)}
        onNextLevel={() => goLevel(1)}
        hasLesson={lesson.hasLesson}
        lessonActive={lesson.active}
        lessonDisabled={!lesson.hasLesson}
        onStartLesson={startLesson}
        onCloseLesson={finishLesson}
      />

      {/* Banner de erro estrutural */}
      {validationError && (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
          padding: '8px 14px', background: '#dc2626', color: '#fff',
          fontFamily: "'Comic Sans MS',cursive", fontWeight: 900, fontSize: 13,
          borderBottom: '3px solid #7f1d1d' }}>
          <span>⛔ {validationError}</span>
          <button onClick={() => setValidationError(null)}
            style={{ background: '#fff', color: '#dc2626', border: 'none', borderRadius: 6,
              fontWeight: 900, fontFamily: "'Comic Sans MS',cursive", cursor: 'pointer',
              padding: '2px 8px', fontSize: 12 }}>✕</button>
        </div>
      )}

      <div className="workspace">
        {formalOpen && (
          <aside className={`formal-panel open`} ref={formalRef} style={{
            width: 300, display: 'flex', flexDirection: 'column', gap: 0,
            overflowY: 'auto', background: '#fff', position: 'static',
          }}>
            <div style={{ padding: '8px 10px', background: '#143823',
              fontFamily: "'Comic Sans MS',cursive", fontSize: 11, fontWeight: 900,
              color: '#fbbf24', letterSpacing: 0.5 }}>
              📝 DESCRIÇÃO FORMAL {formalMode && '— preencha e conclua'}
            </div>

            <div style={{ padding: '10px' }}>
              <div style={{ fontFamily: "'Comic Sans MS',cursive", fontSize: 13, fontWeight: 900,
                color: '#065f46', marginBottom: 8 }}>
                M = (Q, Σ, Γ, δ, q₀, □, F)
              </div>
              {formalField('Q (Estados):',          'states',  '{…}')}
              {formalField('Σ (Alfabeto entrada):', 'sigma',   '{…}')}
              {formalField('Γ (Alfabeto da fita):', 'gamma',   '{…}')}
              {formalField('q₀ (Estado inicial):',  'initial', '…')}
              {formalField('□ (Símbolo branco):',   'blank',   '…')}
              {formalField('F (Estados finais):',   'final',   '{…}')}

              <div style={{ fontFamily: "'Comic Sans MS',cursive", fontSize: 11, fontWeight: 900,
                color: '#065f46', margin: '10px 0 4px' }}>
                Função de transição δ: <span style={{ color: '#9ca3af', fontSize: 9 }}>(destino, escreve, move)</span>
              </div>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ borderCollapse: 'collapse', fontSize: 11 }}>
                  <thead>
                    <tr>
                      <th style={{ border: '1.5px solid #143823', padding: '3px 5px',
                        background: '#143823', color: '#fde047',
                        fontFamily: "'Comic Sans MS',cursive", fontSize: 11 }}>δ</th>
                      {formalCols.map(sym => (
                        <th key={sym} style={{ border: '1.5px solid #143823', padding: '3px 5px',
                          background: '#d1fae5', color: '#065f46',
                          fontFamily: "'Comic Sans MS',cursive", fontSize: 11 }}>{sym === '' ? '□' : sym}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {formalStateRows.map(stId => (
                      <tr key={stId}>
                        <td style={{ border: '1.5px solid #143823', padding: '2px 5px', textAlign: 'center',
                          background: '#d1fae5', color: '#065f46', fontWeight: 900,
                          fontFamily: "'Comic Sans MS',cursive", fontSize: 11 }}>{stId}</td>
                        {formalCols.map(sym => {
                          const key = `${stId}|${sym}`;
                          const val = formalAnswers.deltaCells?.[key] ?? '';
                          return (
                            <td key={sym} style={{ border: '1.5px solid #9ca3af', padding: 1,
                              background: val ? '#f0fdf4' : '#fff' }}>
                              <input type="text" value={val} disabled={lesson.active} placeholder="—"
                                onChange={e => setDeltaCell(key, e.target.value)}
                                translate="no" spellCheck={false}
                                style={{ width: 60, boxSizing: 'border-box', textAlign: 'center',
                                  border: 'none', background: 'transparent',
                                  color: val ? '#111' : '#cbd5e1',
                                  fontFamily: "'Comic Sans MS',cursive", fontSize: 11, fontWeight: 900,
                                  padding: '3px 0' }} />
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </aside>
        )}

        <MTCanvas
          canvasRef={canvasRef}
          innerCanvasRef={innerCanvasRef}
          viewportRef={viewportRef}
          zoom={zoom}
          setZoom={setZoom}
          nodes={viewNodes}
          transitions={viewTransitions}
          mode={mode}
          setMode={setMode}
          beginDrag={g.beginDrag}
          draw={draw}
          lessonActive={lesson.active}
          activeNodeId={lesson.cur?.activeNode}
          connectingSource={connectingSource}
          setConnectingSource={setConnectingSource}
          addNode={g.addNode}
          moveNode={g.moveNode}
          toggleInitial={g.toggleInitial}
          toggleFinal={g.toggleFinal}
          setNodeLabel={g.setNodeLabel}
          renameNode={g.renameNode}
          deleteNode={g.deleteNode}
          addTriple={g.addTriple}
          editTriple={g.editTriple}
          removeTriple={g.removeTriple}
          removeEdge={g.removeEdge}
          selectedNodes={selectedNodes}
          setSelectedNodes={setSelectedNodes}
          selectionBox={selectionBox}
          setSelectionBox={setSelectionBox}
          guidedLessonStep={lesson.step}
          isDrawingUnlocked={isDrawingUnlocked}
        />

        {/* Painel direito: modo aula ou teste */}
        {lesson.active ? (
          <aside className="test-panel ap-test-panel" style={{
            display: 'flex', flexDirection: 'column', gap: 0,
            background: '#242424', border: '3px solid #143823',
          }}>
            <div style={{
              padding: '8px 10px', background: '#143823',
              fontFamily: "'Comic Sans MS',cursive", fontSize: 11, fontWeight: 900,
              color: '#fbbf24', letterSpacing: 0.5,
            }}>
              👨‍🏫 MODO AULA — {isFormal ? 'DESCRIÇÃO FORMAL' : 'MONTANDO O GRAFO'}
            </div>

            {lesson.cur?.formalIntro && (
              <div style={{ padding: '20px 12px', textAlign: 'center' }}>
                <button onClick={() => lessonGo(1)}
                  style={{ width: '100%', padding: '14px 10px', fontFamily: "'Comic Sans MS',cursive",
                    fontWeight: 900, fontSize: 15, color: '#143823', background: '#fde047',
                    border: '3px solid #a16207', borderRadius: 12, cursor: 'pointer',
                    boxShadow: '3px 3px 0 #000' }}>
                  📝 Iniciar Descrição Formal
                </button>
              </div>
            )}

            {isFormal && (
              <div style={{
                padding: '10px 12px', margin: '8px 8px 0',
                background: '#143823', borderRadius: 6, border: '1.5px solid #2f5d40',
                fontFamily: "'Comic Sans MS',cursive", fontSize: 12, fontWeight: 900, color: '#d1d5db',
              }}>
                👈 Veja o painel à esquerda revelando a tupla<br />
                <b style={{ color: '#fde047' }}>M = (Q, Σ, Γ, δ, q₀, □, F)</b> passo a passo.
              </div>
            )}

            {lesson.cur?.simulateWord !== undefined && (
              <div style={{
                padding: '6px 10px', margin: '8px 8px 0',
                background: '#143823', borderRadius: 6, border: '1.5px solid #2f5d40',
                borderBottom: '2px dashed #4b6a55',
                fontFamily: "'Comic Sans MS',cursive", fontSize: 11, fontWeight: 900, color: '#d1d5db',
              }}>
                Simulando: "<b style={{ color: '#fbbf24' }}>{lesson.cur.simulateWord || 'λ'}</b>"
                {lesson.cur?.status && (
                  <span style={{ marginLeft: 8, color: lesson.cur.status === 'ACCEPTED' ? '#86efac' : '#fca5a5' }}>
                    → {lesson.cur.status === 'ACCEPTED' ? '✓ Aceita' : lesson.cur.status === 'LOOP' ? '⟳ Loop' : '✗ Rejeitada'}
                  </span>
                )}
              </div>
            )}

            <div style={{ flex: 1 }} />

            <div style={{ textAlign: 'center', fontSize: 13, color: '#9ca3af',
              fontFamily: "'Comic Sans MS',cursive", marginBottom: 8 }}>
              Passo {(lesson.step ?? 0) + 1} / {lesson.steps.length}
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 4, padding: '4px 10px' }}>
              {lesson.steps.map((_, idx) => (
                <div key={idx} style={{
                  width: 7, height: 7, borderRadius: '50%',
                  background: idx === lesson.step ? '#fbbf24' : 'transparent',
                  border: `2px solid ${idx === lesson.step ? '#fbbf24' : '#555'}`,
                  transition: 'background 0.2s',
                }} />
              ))}
            </div>

            <div style={{ padding: '6px 8px 160px', display: 'flex', flexDirection: 'column', gap: 6 }}>
              <div style={{ display: 'flex', gap: 6 }}>
                <button
                  onClick={() => lessonGo(-1)}
                  disabled={(lesson.step ?? 0) === 0}
                  style={{ flex: 1, padding: '6px 0', fontFamily: "'Comic Sans MS',cursive", fontWeight: 900,
                    fontSize: 13, border: '2.5px solid #555', borderRadius: 8,
                    cursor: (lesson.step ?? 0) === 0 ? 'not-allowed' : 'pointer',
                    background: '#3a3a3a', color: '#e5e7eb', boxShadow: '2px 2px 0 #000',
                    opacity: (lesson.step ?? 0) === 0 ? 0.35 : 1 }}>
                  ◀ Ant.
                </button>
                <button
                  onClick={() => lessonGo(1)}
                  disabled={(lesson.step ?? 0) >= lesson.steps.length - 1}
                  style={{ flex: 1, padding: '6px 0', fontFamily: "'Comic Sans MS',cursive", fontWeight: 900,
                    fontSize: 13, border: '2.5px solid #166534', borderRadius: 8,
                    cursor: (lesson.step ?? 0) >= lesson.steps.length - 1 ? 'not-allowed' : 'pointer',
                    background: '#14532d', color: '#bbf7d0', boxShadow: '2px 2px 0 #000',
                    opacity: (lesson.step ?? 0) >= lesson.steps.length - 1 ? 0.45 : 1 }}>
                  Próx. ➔
                </button>
              </div>
              <button
                onClick={finishLesson}
                style={{ padding: '6px 0', fontFamily: "'Comic Sans MS',cursive", fontWeight: 900,
                  fontSize: 12, border: '2.5px solid #7f1d1d', borderRadius: 8, cursor: 'pointer',
                  background: '#450a0a', color: '#fca5a5', boxShadow: '2px 2px 0 #7f1d1d' }}>
                ✕ Sair da Aula
              </button>
            </div>
          </aside>
        ) : (
        <aside className="test-panel ap-test-panel">
          <div className="section-header ap-section-header-thin" style={{ fontSize: 11 }}>Palavras aceitas</div>

          {isDrawingUnlocked && (
            <div className="ap-test-mode-toggle">
              <button
                className={`ap-test-mode-btn${testMode === 'LANGUAGE' ? ' active' : ''}`}
                onClick={() => setTestMode('LANGUAGE')}
                title="Testar contra o enunciado da linguagem">
                📖 Linguagem
              </button>
              <button
                className={`ap-test-mode-btn${testMode === 'DRAWING' ? ' active' : ''}`}
                onClick={() => setTestMode('DRAWING')}
                title="Testar contra a MT que você desenhou">
                ✏️ Desenho
              </button>
            </div>
          )}

          <div className="test-input-area">
            <input type="text" className="word-input"
              placeholder={!isDrawingUnlocked && getShortestWord(level) === '' ? "Digite 'null'..." : "ex: aabb (vazio = λ)"}
              value={simWord} onChange={e => { setSimWord(e.target.value); setInputError(null); }}
              onKeyDown={e => e.key === 'Enter' && testWord()}
              translate="no" spellCheck={false} autoCorrect="off" autoCapitalize="off"
              style={inputError ? { border: '2px solid #dc2626' } : {}} />
            <button className="add-test-btn" onClick={testWord}>+</button>
          </div>
          {inputError && (
            <div style={{ padding: '3px 10px 4px', fontFamily: "'Comic Sans MS',cursive",
              fontSize: 11, fontWeight: 900, color: '#dc2626' }}>
              ⛔ {inputError}
            </div>
          )}

          <div className="words-list">
            {testedWords.map((t, i) => (
              <div key={i} className={`word-row ${t.status ? t.status : t.accepted ? 'correct' : 'wrong'}`}>
                <span>
                  {isDrawingUnlocked && (
                    <span className={`ap-word-mode-tag ${t.mode === 'DRAWING' ? 'drawing' : 'language'}`}>
                      {t.mode === 'DRAWING' ? 'D' : 'L'}
                    </span>
                  )}
                  {t.word === '' ? 'λ' : t.word}
                </span>
                <span>
                  {t.status === 'shortest' ? '★ MENOR'
                    : t.status === 'correct' ? '✓'
                    : t.status === 'wrong' ? '✕'
                    : t.accepted ? '✓' : '✕'}
                </span>
              </div>
            ))}
          </div>

          {result && !result.ok && (
            <div className="ap-result err" style={{ fontSize: 11 }}>
              {result.reason === 'wrongly-accepted'
                ? `Aceita "${result.counterexample || 'λ'}" indevidamente`
                : result.reason === 'rejected'
                ? `Não aceita "${result.counterexample || 'λ'}"`
                : `Loop em "${result.counterexample || 'λ'}"`}
            </div>
          )}

          {isDrawingUnlocked && (
            <button className="validate-btn slide-up-fade" onClick={formalMode ? concludePhase : validate}>
              {formalMode ? '🏁 Concluir Fase' : '✓ Validar MT'}
            </button>
          )}
        </aside>
        )}
      </div>

      {/* Rodapé: deck de cartas + Maurílio */}
      <APFooterDeck
        mode={mode}
        onPick={pickMode}
        lessonActive={lesson.active}
        isDrawingUnlocked={isDrawingUnlocked}
        showFinalCard
        hasNodes={viewNodes.length > 0}
        canUndo={g.canUndo}
        canRedo={g.canRedo}
        onUndo={g.undo}
        onRedo={g.redo}
        profMessage={prof.message}
        profMood={prof.mood}
        onProfClick={() => setProf(p => p.message
          ? { ...p, message: '' }
          : { message: level?.hint || 'Leia e mova o cabeçote até chegar ao estado final (ou rejeitar)!', mood: 'explicando' })}
        onCloseBalloon={() => setProf(p => ({ ...p, message: '' }))}
        onNodeDrag={handleDeckDrag}
        onNodeDrop={handleDeckDrop}
        onNodeDragCancel={handleDeckCancel}
        tape={lesson.active && lesson.cur?.tape ? lesson.cur.tape : null}
        tapeHead={lesson.cur?.head ?? 0}
      />

      {victory && (
        <EndScreen
          currentLevelId={level.id}
          nextLevel={nextMt}
          message={`Parabéns! Sua MT Reconhecedora está correta! ⭐⭐⭐`}
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
