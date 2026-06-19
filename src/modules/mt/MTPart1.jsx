// ─── MTPart1: módulo MT Transdutora (desenhar a MT → Validar) ────────────────
// Fluxo: menu → escolher nível → desenhar MT no canvas → Validar (★★★).
// Validação via fuzzTMTransducer (bateria de testWords).
// Modo Aula: overlay com grafo demonstrativo + animação da fita passo a passo.
import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import '../afd/AFDPart1.css';
import '../afd/components/TestPanel.css';
import '../ap/APPart1.css';
import { SvgStars, DifficultyLegend } from '../afd/SvgStar';
import EndScreen from '../afd/components/EndScreen';
import MTCanvas from './components/MTCanvas';
import TuringTape from './components/TuringTape';
import APFooterDeck from '../ap/components/APFooterDeck';
import useTMGraph from './hooks/useTMGraph';
import useMTGuidedLesson from './hooks/useMTGuidedLesson';
import useAPDrawing from '../ap/hooks/useAPDrawing';
import { MT_LEVELS } from './levels_mt';
import { fuzzTMTransducer, simulateTM, BLANK } from './utils/tmAlgorithms';
import { DIFF_COLOR } from '../../levels';

export default function MTPart1({ onBack, progress, updateProgress, showToast }) {
  const [screen, setScreen] = useState('MENU');
  const [level,  setLevel]  = useState(null);
  const [mode,   setMode]   = useState('IDLE');
  const [connectingSource, setConnectingSource] = useState(null);
  const [prof,   setProf]   = useState({ message: '', mood: 'serio' });
  const [result, setResult] = useState(null);
  const [simWord, setSimWord]     = useState('');
  const [testedWords, setTestedWords] = useState([]);
  const [deckGhost, setDeckGhost] = useState(null);
  const [victory, setVictory]     = useState(false);
  const [selectedNodes, setSelectedNodes]   = useState([]);
  const [selectionBox, setSelectionBox]     = useState(null);
  const canvasRef = useRef(null);

  // ── Aula Guiada ──────────────────────────────────────────────────────────────
  // Storyboard frame a frame: cada passo é um objeto independente (grafo + fita).
  // Não há motor de animação interno — a fita é dado puro vindo de lesson.cur.
  const lesson = useMTGuidedLesson(level);

  const g    = useTMGraph({ showToast, selectedNodes, setSelectedNodes });
  const draw = useAPDrawing(canvasRef);

  // O canvas exibe o grafo da aula (overlay) ou o grafo real do aluno
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
    lesson.goTo(0);
    applyStep(lesson.steps[0]);
  }, [lesson, applyStep]);

  const finishLesson = useCallback(() => {
    lesson.finish();
    say('Aula encerrada! Agora monte a sua MT e clique em Validar. 💪', 'explicando');
  }, [lesson, say]);

  // Navegação estritamente passo a passo (cada clique = um frame do storyboard)
  const lessonGo = useCallback((dir) => {
    if (!lesson.active) return;
    const next = Math.max(0, Math.min(lesson.steps.length - 1, (lesson.step ?? 0) + dir));
    lesson.goTo(next);
    applyStep(lesson.steps[next]);
  }, [lesson, applyStep]);

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
    draw.resetDrawings();
    say(`Monte a MT Transdutora que ${lv.description.toLowerCase()} e clique em Validar!`, 'explicando');
  }, [g, lesson, draw, say]);

  const goLevel = useCallback((dir) => {
    const idx = MT_LEVELS.findIndex(l => l.id === level?.id);
    const next = MT_LEVELS[idx + dir];
    if (next) loadLevel(next);
  }, [level, loadLevel]);

  const pickMode = (m) => { setMode(m); setConnectingSource(null); };

  // ── Drag da carta ◯ → canvas ────────────────────────────────────────────────
  const handleDeckDrag   = useCallback((x, y) => setDeckGhost({ x, y }), []);
  const handleDeckDrop   = useCallback((clientX, clientY) => {
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

  // ── Testar palavra ───────────────────────────────────────────────────────────
  const testWord = useCallback(() => {
    if (!level) return;
    const word = simWord.trim();
    const mtGraph = { states: g.nodes, transitions: g.transitions };
    const { status, tape } = simulateTM(mtGraph, word);
    let output = '';
    if (status === 'ACCEPTED') {
      let lo = 0, hi = tape.length - 1;
      while (lo <= hi && tape[lo] === BLANK) lo++;
      while (hi >= lo && tape[hi] === BLANK) hi--;
      output = tape.slice(lo, hi + 1).join('') || BLANK;
    }
    setTestedWords(prev => [...prev, { word, status, output }]);
    setSimWord('');
  }, [level, simWord, g.nodes, g.transitions]);

  // ── Validar (bateria) = ★★★ ──────────────────────────────────────────────────
  const validate = useCallback(() => {
    if (!level) return;
    const initial = g.nodes.find(n => n.isInitial);
    if (!initial) {
      showToast?.('Defina um estado inicial (▶) antes de validar.', 'error');
      return;
    }
    if (!g.nodes.some(n => n.isFinal)) {
      showToast?.('Defina ao menos um estado final (◎) antes de validar.', 'error');
      return;
    }
    const mtGraph = { states: g.nodes, transitions: g.transitions };
    const res = fuzzTMTransducer(mtGraph, level);
    setResult(res);
    if (res.ok) {
      updateProgress?.(`mt-trans-${level.id}`, 3);
      say('Perfeito! Sua MT computa a função corretamente! 🎉', 'feliz');
      showToast?.('MT Transdutora validada! ★★★', 'success');
      setVictory(true);
    } else {
      const show = res.counterexample === '' ? 'λ' : res.counterexample;
      const msg = res.reason === 'loop'
        ? `Loop detectado para "${show}". Verifique se a MT para em todos os casos.`
        : res.reason === 'rejected'
        ? `Sua MT não aceita "${show}" (parou em estado não-final).`
        : `Para "${show}": esperado "${res.expected}", obteve "${res.got}".`;
      say(msg, 'serio');
      showToast?.(msg, 'error');
    }
  }, [level, g, say, updateProgress, showToast]);

  const stars = level ? (progress?.[`mt-trans-${level.id}`]?.stars || 0) : 0;

  // ── Menu ─────────────────────────────────────────────────────────────────────
  if (screen === 'MENU') {
    const maxStars   = MT_LEVELS.length * 3;
    const totalStars = MT_LEVELS.reduce((s, l) => s + (progress?.[`mt-trans-${l.id}`]?.stars || 0), 0);
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
          background: '#fed7aa', border: '3px solid #000', borderRadius: 8,
          padding: '4px 16px', boxShadow: '3px 3px 0 #000' }}>
          ⚙️ Máquina de Turing — Transdutora
        </p>
        <div style={{ marginBottom: 18, fontWeight: 'bold', fontSize: 16 }}>
          Progresso: {maxStars > 0 ? Math.round((totalStars / maxStars) * 100) : 0}% ({totalStars}/{maxStars} ★)
        </div>
        <div className="levels-grid">
          {MT_LEVELS.map(l => (
            <button key={l.id} className="menu-btn primary" onClick={() => loadLevel(l)}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
                background: DIFF_COLOR[l.level] }}>
              <span>{l.label}</span>
              <SvgStars count={progress?.[`mt-trans-${l.id}`]?.stars || 0} size={14} max={3} />
            </button>
          ))}
        </div>
        <DifficultyLegend keys={['easy', 'medium', 'hard']} />
      </div>
    );
  }

  // ── Tela do jogo ─────────────────────────────────────────────────────────────
  const mtIdx  = MT_LEVELS.findIndex(l => l.id === level.id);
  const nextMt = mtIdx >= 0 && mtIdx < MT_LEVELS.length - 1 ? MT_LEVELS[mtIdx + 1] : null;
  const formalDesc = level.formalDescription;

  return (
    <div className="workspace-wrapper">
      {deckGhost && createPortal(
        <div className="deck-drag-ghost" style={{ left: deckGhost.x, top: deckGhost.y }} />,
        document.body)}

      {/* Header */}
      <div className="ap-header">
        <button className="back-btn" onClick={() => { lesson.finish(); setScreen('MENU'); }}>⬅ Voltar</button>
        <div className="ap-header-center">
          <span className="ap-mission-label">Objetivo</span>
          <div className="ap-mission-formula" title={level.description}
            style={{ fontSize: 12, maxWidth: 340, whiteSpace: 'normal', lineHeight: 1.2, wordWrap: 'break-word' }}>
            {level.description}
          </div>
          <button className="ap-formal-toggle" disabled={!lesson.hasLesson}
            onClick={lesson.active ? finishLesson : startLesson}>
            {lesson.active ? '✕ Sair da Aula' : '👨‍🏫 Assistir Aula'}
          </button>
        </div>
        <div className="ap-header-right">
          <div className="ap-header-nav">
            <button onClick={() => goLevel(-1)} title="Fase anterior">◀</button>
            <span className="ap-level-label" style={{ background: DIFF_COLOR[level.level] }}>{level.label}</span>
            <button onClick={() => goLevel(1)} title="Próxima fase">▶</button>
          </div>
          <div className="ap-header-stars">{'★'.repeat(stars)}{'☆'.repeat(3 - stars)}</div>
        </div>
      </div>

      <div className="workspace">
        {/* Canvas */}
        <MTCanvas
          canvasRef={canvasRef}
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
        />

        {/* Painel direito: modo aula ou teste */}
        {lesson.active ? (
          <aside className="test-panel ap-test-panel" style={{
            display: 'flex', flexDirection: 'column', gap: 0,
            background: '#242424', border: '3px solid #143823',
          }}>
            {/* Cabeçalho verde-escuro */}
            <div style={{
              padding: '8px 10px', background: '#143823',
              fontFamily: "'Comic Sans MS',cursive", fontSize: 11, fontWeight: 900,
              color: '#fbbf24', letterSpacing: 0.5,
            }}>
              👨‍🏫 MODO AULA — MONTANDO O GRAFO
            </div>

            {/* Descrição formal (passo FORMAL) */}
            {lesson.phase === 'FORMAL' && formalDesc && (
              <div style={{
                padding: '8px 10px', background: '#fff', margin: '8px 8px 0',
                borderRadius: 6, border: '2px solid #143823',
                fontFamily: "'Comic Sans MS',cursive", fontSize: 11,
              }}>
                <div style={{ fontWeight: 900, marginBottom: 4, color: '#065f46' }}>Descrição Formal</div>
                <div style={{ color: '#111' }}>M = (Q, Σ, Γ, δ, q₀, □, F)</div>
                <div style={{ marginTop: 4, color: '#111' }}>
                  <div><b>Q</b> = {formalDesc.states}</div>
                  <div><b>Σ</b> = {formalDesc.sigma}</div>
                  <div><b>Γ</b> = {formalDesc.gamma}</div>
                  <div><b>q₀</b> = {formalDesc.initial}</div>
                  <div><b>□</b> = {formalDesc.blank}</div>
                  <div><b>F</b> = {formalDesc.final}</div>
                </div>
                <div style={{ marginTop: 6, fontWeight: 900, color: '#065f46' }}>Tabela δ:</div>
                <table style={{ borderCollapse: 'collapse', width: '100%', marginTop: 2, fontSize: 10 }}>
                  <thead>
                    <tr>
                      {['Estado', 'Lê', 'Escreve', 'Move', 'Vai para'].map(h => (
                        <th key={h} style={{ border: '1.5px solid #333', padding: '2px 3px', background: '#d1fae5', color: '#111' }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {(lesson.displayTransitions ?? []).map((t, i) => (
                      <tr key={i} style={{ background: i % 2 === 0 ? '#f9fafb' : '#fff' }}>
                        <td style={{ border: '1.5px solid #ccc', padding: '2px 3px', textAlign: 'center', color: '#111' }}>{t.from}</td>
                        <td style={{ border: '1.5px solid #ccc', padding: '2px 3px', textAlign: 'center', color: '#111' }}>{t.read || '□'}</td>
                        <td style={{ border: '1.5px solid #ccc', padding: '2px 3px', textAlign: 'center', color: '#111' }}>{t.write || '□'}</td>
                        <td style={{ border: '1.5px solid #ccc', padding: '2px 3px', textAlign: 'center', color: '#111' }}>{t.move}</td>
                        <td style={{ border: '1.5px solid #ccc', padding: '2px 3px', textAlign: 'center', color: '#111' }}>{t.to}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Status do passo atual — "Simulando: ab" */}
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

            {/* Contador de passos */}
            <div style={{ textAlign: 'center', fontSize: 13, color: '#9ca3af',
              fontFamily: "'Comic Sans MS',cursive", marginBottom: 8 }}>
              Passo {(lesson.step ?? 0) + 1} / {lesson.steps.length}
            </div>

            {/* Bolinhas de progresso (quebram em linhas p/ roteiros longos) */}
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

            {/* Navegação — paddingBottom alto mantém os botões acima do balão do professor */}
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
            <div className="section-header" style={{ fontSize: 11 }}>Testar palavra</div>
            <div className="test-input-area">
              <input type="text" className="word-input" placeholder="ex: ab (vazio = λ)"
                value={simWord} onChange={e => setSimWord(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && testWord()}
                translate="no" spellCheck={false} autoCorrect="off" autoCapitalize="off" />
              <button className="add-test-btn" onClick={testWord}>+</button>
            </div>

            <div className="words-list">
              {testedWords.map((t, i) => (
                <div key={i} className={`word-row ${t.status === 'ACCEPTED' ? 'correct' : 'wrong'}`}>
                  <span>{t.word === '' ? 'λ' : t.word}</span>
                  <span style={{ fontSize: 11 }}>
                    {t.status === 'ACCEPTED' ? `→ ${t.output}` : t.status === 'LOOP' ? '⟳ loop' : '✗'}
                  </span>
                </div>
              ))}
            </div>

            {result && !result.ok && (
              <div className="ap-result err" style={{ fontSize: 11 }}>
                {result.reason === 'wrong-output'
                  ? `"${result.counterexample || 'λ'}": esperado "${result.expected}", obteve "${result.got}"`
                  : result.reason === 'rejected'
                  ? `Não aceita "${result.counterexample || 'λ'}"`
                  : `Loop em "${result.counterexample || 'λ'}"`}
              </div>
            )}

            <button className="validate-btn slide-up-fade" onClick={validate}>
              ✓ Validar MT
            </button>
          </aside>
        )}
      </div>

      {/* Fita — estática, conduzida pelos dados do passo da aula (lesson.cur.tape) */}
      {lesson.active && lesson.cur?.tape && (
        <div style={{ padding: '8px 16px', background: '#1a1a2e', borderTop: '2px solid #143823',
          display: 'flex', alignItems: 'center', gap: 12, overflowX: 'auto' }}>
          <span style={{ fontFamily: "'Comic Sans MS',cursive", fontSize: 12, fontWeight: 900,
            whiteSpace: 'nowrap', color: '#fbbf24' }}>
            Fita:
          </span>
          <TuringTape tape={lesson.cur.tape} headPosition={lesson.cur.head ?? 0} />
        </div>
      )}

      {/* Rodapé: deck de cartas + Maurílio */}
      <APFooterDeck
        mode={mode}
        onPick={pickMode}
        lessonActive={lesson.active}
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
          : { message: level?.hint || 'Leia, escreva e mova o cabeçote até chegar ao estado final!', mood: 'explicando' })}
        onCloseBalloon={() => setProf(p => ({ ...p, message: '' }))}
        onNodeDrag={handleDeckDrag}
        onNodeDrop={handleDeckDrop}
        onNodeDragCancel={handleDeckCancel}
      />

      {victory && (
        <EndScreen
          currentLevelId={level.id}
          nextLevel={nextMt}
          message={`Parabéns! Sua MT Transdutora está correta! ⭐⭐⭐`}
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
