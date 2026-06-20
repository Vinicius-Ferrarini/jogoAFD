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

// Estado inicial vazio do formulário da descrição formal (7-tupla)
// deltaCells: mapa "estado|símbolo" → "destino, escreve, move" (matriz δ)
const EMPTY_FORMAL = { states: '', sigma: '', gamma: '', initial: '', blank: '', final: '', deltaCells: {} };

export default function MTPart1({ onBack, progress, updateProgress, showToast }) {
  const [screen, setScreen] = useState('MENU');
  const [level,  setLevel]  = useState(null);
  const [mode,   setMode]   = useState('IDLE');
  const [connectingSource, setConnectingSource] = useState(null);
  const [prof,   setProf]   = useState({ message: '', mood: 'serio' });
  const [result, setResult] = useState(null);
  const [simWord, setSimWord]     = useState('');
  const [linguagemTests, setLinguagemTests] = useState([]); // histórico isolado: gabarito estático
  const [desenhoTests,   setDesenhoTests]   = useState([]); // histórico isolado: simulação do grafo
  const [activeTab, setActiveTab] = useState('linguagem'); // 'linguagem' | 'desenho'
  const [deckGhost, setDeckGhost] = useState(null);
  const [victory, setVictory]     = useState(false);
  const [selectedNodes, setSelectedNodes]   = useState([]);
  const [selectionBox, setSelectionBox]     = useState(null);
  const [formalAnswers, setFormalAnswers]   = useState(EMPTY_FORMAL);
  const [formalMode, setFormalMode]         = useState(false); // jogo: MT válida → preencher descrição formal
  const [validationError, setValidationError] = useState(null); // banner vermelho de erro estrutural
  const canvasRef = useRef(null);
  const formalRef = useRef(null); // container rolável do painel formal (auto-scroll)

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
    setFormalAnswers(EMPTY_FORMAL); setFormalMode(false); setValidationError(null);
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

  // Auto-preenchimento do formulário formal — simula o "Maurílio digitando" cada campo
  useEffect(() => {
    const fill = lesson.cur?.formalFill;
    if (!fill) return;
    setFormalAnswers(prev => {
      const next = { ...prev, ...fill };
      if (fill.delta) {
        // converte o array de transições na matriz de células δ
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

  // Scroll automático: ao avançar para um novo campo formal, rola até o fim do painel
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
    setResult(null); setSimWord(''); setLinguagemTests([]); setDesenhoTests([]); setDeckGhost(null); setVictory(false);
    setSelectedNodes([]); setSelectionBox(null);
    setFormalAnswers(EMPTY_FORMAL); setFormalMode(false); setValidationError(null);
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
  // Laboratórios independentes: a aba ativa decide contra QUEM a palavra é testada
  // e em qual histórico isolado o resultado entra.
  const testWord = useCallback(() => {
    if (!level) return;
    const word = simWord.trim();

    if (activeTab === 'linguagem') {
      // Gabarito estático do nível: saída = level.validate(word). null/undefined → REJEITADA
      const expected = level.validate?.(word);
      const status = expected != null ? 'ACCEPTED' : 'REJECTED';
      setLinguagemTests(prev => [...prev, { word, status, output: expected ?? '' }]);
    } else {
      // Simulação contra o grafo atual do aluno
      const mtGraph = { states: g.nodes, transitions: g.transitions };
      const { status, tape } = simulateTM(mtGraph, word);
      let output = '';
      if (status === 'ACCEPTED') {
        let lo = 0, hi = tape.length - 1;
        while (lo <= hi && tape[lo] === BLANK) lo++;
        while (hi >= lo && tape[hi] === BLANK) hi--;
        output = tape.slice(lo, hi + 1).join('') || BLANK;
      }
      setDesenhoTests(prev => [...prev, { word, status, output }]);
    }
    setSimWord('');
  }, [level, simWord, activeTab, g.nodes, g.transitions]);

  // ── Validar (bateria) = ★★★ ──────────────────────────────────────────────────
  const validate = useCallback(() => {
    if (!level) return;

    // ── Validações estruturais (banner vermelho no topo) ───────────────────────
    if (!g.nodes.find(n => n.isInitial)) {
      setValidationError('Erro Crítico: Defina um Estado Inicial (▶)!');
      return;
    }
    if (!g.nodes.some(n => n.isFinal)) {
      setValidationError('Erro Crítico: Defina um Estado Final (◎)!');
      return;
    }
    // Não-determinismo: mesmo estado lendo o mesmo símbolo com ações diferentes
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
    const res = fuzzTMTransducer(mtGraph, level);
    setResult(res);
    if (res.ok) {
      updateProgress?.(`mt-trans-${level.id}`, 3);
      say('Perfeito! Sua MT está correta! Agora preencha a Descrição Formal à esquerda e clique em Concluir. 📝', 'feliz');
      showToast?.('MT validada! ★★★ — formalize a máquina.', 'success');
      setFormalMode(true); // abre o painel formal (editável); vitória só ao Concluir
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

  // Conclui a fase após preencher a Descrição Formal → tela de vitória
  const concludePhase = useCallback(() => {
    setFormalMode(false);
    setVictory(true);
  }, []);

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
  const isFormal   = lesson.phase === 'FORMAL';
  const formalOpen = isFormal || formalMode; // mostra o painel formal à esquerda

  // Matriz δ: colunas = Σ depois Γ (sem repetir) incluindo □; linhas = estados de Q
  const sigmaCols    = level.alphabet ?? [];
  const formalCols   = [...sigmaCols, ...((level.tapeAlphabet ?? []).filter(s => !sigmaCols.includes(s)))];
  const formalStateRows = (lesson.active ? (lesson.displayNodes ?? []) : g.nodes).map(n => n.id);

  // ── Formulário da descrição formal (inputs auto-preenchidos / editáveis) ─────
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

      {/* Banner de erro estrutural (vermelho, no topo — como no AFD) */}
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
        {/* Painel ESQUERDO: Descrição Formal (espelha o AFD) — aula formal OU pós-validação */}
        {formalOpen && (
          <aside className="test-panel ap-test-panel" ref={formalRef} style={{
            width: 300, display: 'flex', flexDirection: 'column', gap: 0,
            overflowY: 'auto', background: '#fff',
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
              👨‍🏫 MODO AULA — {isFormal ? 'DESCRIÇÃO FORMAL' : 'MONTANDO O GRAFO'}
            </div>

            {/* Transição grafo → formal: botão grande "Iniciar Descrição Formal" */}
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

            {/* Fase FORMAL: a lousa só aponta para o formulário à esquerda */}
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
            {/* Abas: Linguagem (default, azul ativo) vs Desenho (verde inativo) */}
            <div style={{ display: 'flex', gap: 4, padding: '6px 6px 0' }}>
              {[['linguagem', '#2563eb', '⚙ Linguagem'], ['desenho', '#16a34a', '✏ Desenho']].map(([tab, color, label]) => {
                const on = activeTab === tab;
                return (
                  <button key={tab} onClick={() => setActiveTab(tab)} style={{
                    flex: 1, padding: '6px 0', fontFamily: "'Comic Sans MS',cursive", fontWeight: 900,
                    fontSize: 12, cursor: 'pointer', borderRadius: '8px 8px 0 0',
                    border: `2px solid ${color}`,
                    background: on ? '#2563eb' : '#fff',
                    color: on ? '#fff' : color,
                  }}>
                    {label}
                  </button>
                );
              })}
            </div>

            {/* Aba Linguagem: laboratório do GABARITO estático (histórico isolado) */}
            {activeTab === 'linguagem' && (
              <>
                <div style={{ padding: '6px 10px 0', fontFamily: "'Comic Sans MS',cursive",
                  fontSize: 11, fontWeight: 900, color: '#2563eb' }}>
                  📋 Objetivo: Entrada ({(level.alphabet ?? []).join(',')}) → Saída esperada
                </div>

                <div className="test-input-area">
                  <input type="text" className="word-input" placeholder="ex: ab (vazio = λ)"
                    value={simWord} onChange={e => setSimWord(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && testWord()}
                    translate="no" spellCheck={false} autoCorrect="off" autoCapitalize="off" />
                  <button className="add-test-btn" onClick={testWord}>+</button>
                </div>

                <div className="words-list" style={{ overflowX: 'hidden' }}>
                  <table style={{ borderCollapse: 'collapse', width: '100%', fontSize: 12 }}>
                    <thead>
                      <tr>
                        {['Entrada', 'Saída esperada'].map(h => (
                          <th key={h} style={{ border: '1.5px solid #2563eb', padding: '3px 4px',
                            background: '#dbeafe', color: '#1e3a8a',
                            fontFamily: "'Comic Sans MS',cursive", fontSize: 11 }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {linguagemTests.map((t, i) => (
                        <tr key={`l${i}`} style={{ background: i % 2 === 0 ? '#f0f9ff' : '#fff' }}>
                          <td style={{ border: '1.5px solid #bfdbfe', padding: '3px 6px', textAlign: 'center',
                            fontFamily: "'Comic Sans MS',cursive", fontWeight: 900, color: '#111' }}>
                            {t.word === '' ? 'λ' : t.word}
                          </td>
                          <td style={{ border: '1.5px solid #bfdbfe', padding: '3px 6px', textAlign: 'center' }}>
                            {t.status === 'ACCEPTED'
                              ? <b style={{ color: '#1d4ed8', fontFamily: "'Comic Sans MS',cursive" }}>{t.output === '' ? 'λ' : t.output}</b>
                              : <span style={{ display: 'inline-block', padding: '2px 6px', borderRadius: 4,
                                  background: '#dc2626', color: '#fff', fontSize: 10, fontWeight: 900,
                                  fontFamily: "'Comic Sans MS',cursive" }}>REJEITADA</span>}
                          </td>
                        </tr>
                      ))}
                      {linguagemTests.length === 0 && (
                        <tr><td colSpan={2} style={{ border: '1.5px solid #bfdbfe', padding: 8,
                          textAlign: 'center', color: '#9ca3af', fontFamily: "'Comic Sans MS',cursive",
                          fontSize: 11 }}>Nenhum teste ainda</td></tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </>
            )}

            {/* Aba Desenho: laboratório do SIMULADOR (histórico isolado, grafo atual) */}
            {activeTab === 'desenho' && (
              <>
                <div style={{ padding: '6px 10px 0', fontFamily: "'Comic Sans MS',cursive",
                  fontSize: 11, fontWeight: 900, color: '#16a34a' }}>
                  ✏ Saída da SUA máquina (testada no grafo atual)
                </div>

                <div className="test-input-area">
                  <input type="text" className="word-input" placeholder="ex: ab (vazio = λ)"
                    value={simWord} onChange={e => setSimWord(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && testWord()}
                    translate="no" spellCheck={false} autoCorrect="off" autoCapitalize="off" />
                  <button className="add-test-btn" onClick={testWord}>+</button>
                </div>

                <div className="words-list" style={{ overflowX: 'hidden' }}>
                  <table style={{ borderCollapse: 'collapse', width: '100%', fontSize: 12 }}>
                    <thead>
                      <tr>
                        {['Entrada', 'Saída gerada'].map(h => (
                          <th key={h} style={{ border: '1.5px solid #16a34a', padding: '3px 4px',
                            background: '#dcfce7', color: '#14532d',
                            fontFamily: "'Comic Sans MS',cursive", fontSize: 11 }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {desenhoTests.map((t, i) => (
                        <tr key={`d${i}`} style={{ background: i % 2 === 0 ? '#f0fdf4' : '#fff' }}>
                          <td style={{ border: '1.5px solid #bbf7d0', padding: '3px 6px', textAlign: 'center',
                            fontFamily: "'Comic Sans MS',cursive", fontWeight: 900, color: '#111' }}>
                            {t.word === '' ? 'λ' : t.word}
                          </td>
                          <td style={{ border: '1.5px solid #bbf7d0', padding: '3px 6px', textAlign: 'center' }}>
                            {t.status === 'ACCEPTED'
                              ? <b style={{ color: '#15803d', fontFamily: "'Comic Sans MS',cursive" }}>{t.output}</b>
                              : <span style={{ display: 'inline-block', padding: '2px 6px', borderRadius: 4,
                                  background: '#dc2626', color: '#fff', fontSize: 10, fontWeight: 900,
                                  fontFamily: "'Comic Sans MS',cursive" }}>
                                  {t.status === 'LOOP' ? 'ERRO' : 'REJEITADA'}
                                </span>}
                          </td>
                        </tr>
                      ))}
                      {desenhoTests.length === 0 && (
                        <tr><td colSpan={2} style={{ border: '1.5px solid #bbf7d0', padding: 8,
                          textAlign: 'center', color: '#9ca3af', fontFamily: "'Comic Sans MS',cursive",
                          fontSize: 11 }}>Nenhum teste ainda</td></tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </>
            )}

            {result && !result.ok && (
              <div className="ap-result err" style={{ fontSize: 11 }}>
                {result.reason === 'wrong-output'
                  ? `"${result.counterexample || 'λ'}": esperado "${result.expected}", obteve "${result.got}"`
                  : result.reason === 'rejected'
                  ? `Não aceita "${result.counterexample || 'λ'}"`
                  : `Loop em "${result.counterexample || 'λ'}"`}
              </div>
            )}

            <button className="validate-btn slide-up-fade" onClick={formalMode ? concludePhase : validate}>
              {formalMode ? '🏁 Concluir Fase' : '✓ Validar MT'}
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
