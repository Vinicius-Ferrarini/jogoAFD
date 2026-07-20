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
import APSimPanel from './components/APSimPanel';
import APFooterDeck from './components/APFooterDeck';
import APFormalDescription from './components/APFormalDescription';
import APBlackboardPanel from './components/APBlackboardPanel';
import usePDAGraph from './hooks/usePDAGraph';
import useAPDrawing from './hooks/useAPDrawing';
import useAPGuidedLesson from './hooks/useAPGuidedLesson';
import useCanvasState, { INNER_W, INNER_H } from '../afd/hooks/useCanvasState.js';
import { AP_LEVELS, getShortestWord } from '../../levels_data/ap/index.js';
import { pdaAccepts, pdaAcceptingRun, pdaRejectingTrace } from './utils/pdaAlgorithms';
import { DIFF_COLOR } from '../../levels';
import GameHeader from '../afd/components/GameHeader';

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
  const [testedWords, setTestedWords] = useState([]);
  const [isDrawingUnlocked, setIsDrawingUnlocked] = useState(false);
  const [formalOpen, setFormalOpen] = useState(false);
  const [deckGhost, setDeckGhost]   = useState(null);
  const [victory, setVictory]       = useState(false);
  const [selectedNodes, setSelectedNodes] = useState([]);
  const [selectionBox, setSelectionBox]   = useState(null);
  const canvasRef = useRef(null);
  const innerCanvasRef = useRef(null);
  const viewportRef = useRef(null);
  const noopRef = useRef(false);

  const g = usePDAGraph({ showToast, selectedNodes, setSelectedNodes });
  const draw = useAPDrawing(innerCanvasRef);
  const lesson = useAPGuidedLesson(level);
  const { goTo: lessonGoTo, finish: lessonFinishRaw, reset: lessonReset, steps: lessonSteps } = lesson;

  // Canvas fixo (8000×8000px) + zoom real: mesmo motor do AFD (useCanvasState).
  // O AP não usa a parte de "modo de interação"/desenho do hook (tem a própria
  // via useAPDrawing/mode) — só reaproveita zoom/scroll/resetZoom.
  const { zoom, setZoom, resetZoom } = useCanvasState({
    isDrawingUnlocked: true,
    setInteractionMode: () => {},
    squashNextHistoryRef: noopRef,
    setConnectingSource,
    setSelectedSymbolCard: () => {},
    setSelectedNodes,
    tela: screen === 'GAME' ? 'JOGO' : screen,
    isSidebarOpen: formalOpen,
    canvasRef,
    viewportRef,
  });

  // Grafo exibido: durante a aula vem dos passos; senão é o grafo real do aluno.
  const viewNodes = lesson.active ? lesson.displayNodes : g.nodes;
  const viewTransitions = lesson.active ? lesson.displayTransitions : g.transitions;

  const say = useCallback((message, mood = 'serio') => setProf({ message, mood }), []);

  // ── Modo Aula: iniciar / sair / navegar (narração + painel formal sem efeito) ─
  const applyStep = useCallback((st) => {
    setProf(st?.prof ?? { message: '', mood: 'serio' });
    setFormalOpen(st?.phase === 'FORMAL');
  }, []);
  const startLesson = useCallback(() => {
    if (!lesson.hasLesson) return;
    setMode('IDLE'); setConnectingSource(null);
    setSim(null); setSimHighlight({ nodeId: null, type: null }); setResult(null);
    lessonGoTo(0);
    applyStep(lessonSteps[0]);
  }, [lesson.hasLesson, lessonGoTo, lessonSteps, applyStep]);
  const finishLesson = useCallback(() => {
    lessonFinishRaw();
    setFormalOpen(false);
    say('Aula encerrada! Agora monte o seu AP e clique em Validar. 💪', 'explicando');
  }, [lessonFinishRaw, say]);
  const lessonGo = useCallback((dir) => {
    const target = Math.max(0, Math.min(lessonSteps.length - 1, (lesson.step ?? 0) + dir));
    lessonGoTo(target);
    applyStep(lessonSteps[target]);
  }, [lesson.step, lessonSteps, lessonGoTo, applyStep]);
  // Bifurcação ao fim do grafo: ir para a Aula de Descrição Formal (FASE 2).
  const formalStart = lessonSteps.findIndex(s => s.phase === 'FORMAL');
  const goFormal = useCallback(() => {
    if (formalStart < 0) return;
    lessonGoTo(formalStart);
    applyStep(lessonSteps[formalStart]);
  }, [formalStart, lessonGoTo, lessonSteps, applyStep]);

  // Atalhos: Ctrl+Z desfaz (rabisco primeiro, depois grafo), Ctrl+Y/Shift+Z refaz, Esc sai do modo.
  const { undo: gUndo, redo: gRedo, deleteSelected: gDeleteSelected } = g;
  const { drawUndo, drawingStack } = draw;
  useEffect(() => {
    const onKey = (e) => {
      // Durante a aula, o grafo fica congelado: só Esc (sair) responde.
      if (lesson.active) { if (e.key === 'Escape') finishLesson(); return; }
      const isInput = ['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName);
      const ctrl = e.ctrlKey || e.metaKey;
      const k = e.key.toLowerCase();
      if (ctrl && (k === 'z' || k === 'y')) {
        if (isInput) return; // deixa o desfazer nativo do campo de texto
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
  const handleHighlight = useCallback((nodeId, type) => setSimHighlight({ nodeId, type }), []);
  const openSim  = useCallback((s) => { setSim(s); setSimKey(k => k + 1); }, []);
  const closeSim = useCallback(() => { setSim(null); setSimHighlight({ nodeId: null, type: null }); }, []);

  // ── Carregar exercício ──────────────────────────────────────────────────────
  const loadLevel = useCallback((lv) => {
    g.reset();
    lessonReset();
    setLevel(lv); setScreen('GAME'); setMode('IDLE'); setConnectingSource(null);
    setResult(null); setSim(null); setSimHighlight({ nodeId: null, type: null });
    setSimWord(''); setFormalOpen(false); setDeckGhost(null); setVictory(false);
    setSelectedNodes([]); setSelectionBox(null);
    setTestedWords([]);
    // L16 (impossível) não tem tabuleiro a desenhar — não precisa da mecânica
    // de "descubra a menor palavra" pra destravar. Os demais começam travados.
    setIsDrawingUnlocked(!!lv.impossible);
    draw.resetDrawings();
    resetZoom();
    // Níveis travados já mostram "descubra a menor palavra" no locked-overlay do
    // canvas (APCanvas.jsx) — o balão do professor fica vazio, igual ao AFD, para
    // não duplicar a instrução nem "grudar" uma mensagem estática que sobreviveria
    // ao destravamento. Só o nível impossível (sem overlay) precisa da explicação
    // no balão, já que ele não passa pelo fluxo de desenho.
    say(lv.impossible
      ? `${lv.language} é IMPOSSÍVEL com Autômato com Pilha — precisa de Máquina de Turing (MT).`
      : '',
      'serio');
  }, [g, draw, say, lessonReset, resetZoom]);

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
    const bounds = canvasRef.current;
    const inner = innerCanvasRef.current;
    if (!bounds || !inner) return;
    const br = bounds.getBoundingClientRect();
    if (clientX < br.left || clientX > br.right || clientY < br.top || clientY > br.bottom) return;
    const ir = inner.getBoundingClientRect();
    const x = ((clientX - ir.left) / ir.width)  * INNER_W;
    const y = ((clientY - ir.top)  / ir.height) * INNER_H;
    g.addNode(Math.max(5, Math.min(INNER_W - 5, x)), Math.max(5, Math.min(INNER_H - 5, y)));
  }, [g]);
  const handleDeckCancel = useCallback(() => setDeckGhost(null), []);

  // ── Validar (bateria) = ★1 ──────────────────────────────────────────────────
  const validate = useCallback(() => {
    if (!level || level.impossible) return;
    setSim(null); setSimHighlight({ nodeId: null, type: null });
    const res = g.validatePDA(level);
    setResult(res);
    if (res.ok) {
      say('Linguagem certa! Agora preencha a Descrição Formal. 🎉', 'feliz');
      updateProgress?.(`ap-${level.id}`, 2);
      showToast?.('AP validado por pilha vazia! ★', 'success');
      setFormalOpen(true);
    } else if (res.reason === 'counterexample') {
      say(res.message, 'serio');
      showToast?.(res.message, 'error');
      if (res.run) {
        // res.run vem de pdaAcceptingRun (gabarito ou aluno) — é sempre uma
        // computação que ACEITA (pilha esvazia); accepted:true reflete isso.
        // O contexto de "isso está ERRADO" vem do banner (title/message), não
        // do veredito ✓/✗ do próprio passo a passo.
        openSim({ run: res.run, word: res.counterexample.word, accepted: true,
          title: `Contraexemplo: "${res.counterexample.word === '' ? 'λ' : res.counterexample.word}"`,
          message: res.message });
      }
    } else {
      say(res.message, 'serio');
      showToast?.(res.message, 'error');
    }
  }, [level, g, say, updateProgress, showToast, openSim]);

  // ── Descrição formal: elementos corretos (sem estrela própria — a ★3 vem
  // só da função δ completa) e função δ → vitória (★3) ─────────────────────────
  const onFormalElements = useCallback(() => {
    say('Elementos corretos! Agora a função de transição δ.', 'feliz');
  }, [say]);

  const onFormalDone = useCallback(() => {
    updateProgress?.(`ap-${level.id}`, 3);
    setFormalOpen(false); setVictory(true);
  }, [level, updateProgress]);

  const checkGraph = useCallback(
    () => g.nodes.some(n => n.isInitial) && g.transitions.length > 0,
    [g.nodes, g.transitions]);

  // ── Narração da pilha passo a passo (reusa o vocabulário da Aula) ────────────
  const narrateSim = useCallback((cfg) => {
    if (!cfg?.step) return; // não narra a config inicial (deixa a mensagem de abertura)
    const s = cfg.step;
    const read = s.read === '' ? 'sem ler (λ)' : `leu "${s.read}"`;
    const pop  = s.pop  === '' ? 'sem desempilhar' : `desempilhou ${s.pop}`;
    const push = s.push === '' ? 'sem empilhar' : `empilhou ${s.push}`;
    say(`${read}, ${pop}, ${push}.`, 'explicando');
  }, [say]);

  // ── Testar palavra ──────────────────────────────────────────────────────────
  // Antes de destravar: testa contra o GABARITO (menor/aceita/rejeitada) — é a
  // mecânica de onboarding "descubra a menor palavra", igual ao AFD. Depois de
  // destravar: testa contra o AP do ALUNO (✓/✗), sem mexer no estado de gate.
  const testWord = useCallback(() => {
    if (!level) return;
    const raw = simWord.trim();
    // "null"/"vazio" (como no AFD) são a forma de digitar λ — testar uma string
    // vazia direto não dá pro aluno saber o que está acontecendo.
    const lower = raw.toLowerCase();
    const word = (lower === 'null' || lower === 'vazio') ? '' : raw;
    if (!isDrawingUnlocked) {
      const display = word === '' ? 'λ' : word;
      if (testedWords.some(t => t.word === display)) { setSimWord(''); return; }
      // level.truth corrige a verdade quando o gabarito .jff diverge do enunciado
      // só nas bordas (ex.: L1 exige n>0, mas o .jff aceita λ) — sem isso, λ seria
      // classificado "correto" indevidamente.
      const acceptedByTruth = level.truth
        ? level.truth(word, pdaAccepts(level.solution, word))
        : pdaAccepts(level.solution, word);
      const shortest = getShortestWord(level);
      const isShortest = acceptedByTruth && word === shortest;
      setTestedWords(prev => [{ word: display, status: isShortest ? 'shortest' : acceptedByTruth ? 'correct' : 'wrong' }, ...prev]);
      if (isShortest) {
        setIsDrawingUnlocked(true);
        updateProgress?.(`ap-${level.id}`, 1);
        showToast?.('Sucesso! Tabuleiro liberado.', 'success');
      }
      setSimWord('');
      return;
    }
    setTestedWords(prev => prev.some(t => t.word === word)
      ? prev : [{ word, accepted: pdaAccepts(g.studentPda, word) }, ...prev]);
    setSimWord('');
  }, [level, simWord, isDrawingUnlocked, testedWords, g.studentPda, updateProgress, showToast]);

  // ── Simular palavra: abre APSimPanel passo a passo (rodapé) + adiciona à lista ─
  const simulate = useCallback(() => {
    if (!level) return;
    const word = simWord.trim();
    const show = word === '' ? 'λ' : word;
    const run = pdaAcceptingRun(g.studentPda, word);
    if (run) {
      openSim({ run, word, accepted: true, title: `Simulação: "${show}"`,
        message: 'Computação que ACEITA (a pilha esvazia):' });
      say(`Seu AP aceita "${show}". Avance passo a passo para ver a pilha.`, 'explicando');
    } else {
      const { run: trace, reason } = pdaRejectingTrace(g.studentPda, word);
      openSim({ run: trace, word, accepted: false, reason, title: `Simulação: "${show}" (rejeita)`,
        message: 'Melhor tentativa do seu AP (a pilha não esvazia):' });
      say(`Seu AP NÃO aceita "${show}". Veja onde a computação trava.`, 'serio');
    }
    setTestedWords(prev => (prev.some(t => t.word === word)
      ? prev : [...prev, { word, accepted: !!run }]));
  }, [level, simWord, g.studentPda, say, openSim]);

  const stars = level ? (progress?.[`ap-${level.id}`]?.stars || 0) : 0;

  // ── Menu de exercícios (padrão AFD_1: TuringLab + grade + legenda) ──────────
  if (screen === 'MENU') {
    // Níveis impossíveis (só MT) não contam para o total de estrelas.
    const maxStars   = AP_LEVELS.filter(l => !l.impossible).length * 3;
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
              {l.impossible
                ? <span style={{ fontSize: 11, fontWeight: 900, color: '#000' }}>🚫 só MT</span>
                : <SvgStars count={progress?.[`ap-${l.id}`]?.stars || 0} size={14} max={3} />}
            </button>
          ))}
        </div>
        <DifficultyLegend keys={['easy', 'medium', 'hard', 'trabalho', 'prova', 'impossible']} />
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

      {/* Header (compartilhado com o AFD — mesmo componente/estilo/motor) */}
      <GameHeader
        objective={level.language}
        label={level.label}
        diffColor={DIFF_COLOR[level.level] ?? '#fff'}
        stars={stars}
        starsMax={3}
        isFirst={apIdx === 0}
        isLast={apIdx === AP_LEVELS.length - 1}
        onBack={() => setScreen('MENU')}
        onPrevLevel={() => goLevel(-1)}
        onNextLevel={() => goLevel(1)}
        hasLesson={lesson.hasLesson}
        lessonActive={lesson.active}
        lessonDisabled={!lesson.hasLesson}
        onStartLesson={startLesson}
        onCloseLesson={finishLesson}
        secondaryAction={{
          label: '📝 Descrição Formal',
          disabled: stars < 2 || lesson.active,
          onClick: () => setFormalOpen(o => !o),
        }}
      />

      <div className="workspace">
        {/* Sidebar: Descrição Formal */}
        <aside className={`formal-panel ${formalOpen ? 'open' : ''}`}>
          <APFormalDescription
            key={lesson.active ? `demo-${level.id}` : (formalOpen ? 'formal-open' : 'formal-closed')}
            isOpen={formalOpen}
            demo={lesson.active ? lesson.reveal : null}
            onClose={() => setFormalOpen(false)}
            nodes={viewNodes}
            transitions={viewTransitions}
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
          innerCanvasRef={innerCanvasRef}
          viewportRef={viewportRef}
          zoom={zoom}
          setZoom={setZoom}
          guidedLessonStep={lesson.step}
          isDrawingUnlocked={isDrawingUnlocked}
          nodes={viewNodes}
          transitions={viewTransitions}
          mode={mode}
          setMode={setMode}
          beginDrag={g.beginDrag}
          draw={draw}
          lessonActive={lesson.active}
          highlightEdge={lesson.highlightEdge}
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
          selectedNodes={selectedNodes}
          setSelectedNodes={setSelectedNodes}
          selectionBox={selectionBox}
          setSelectionBox={setSelectionBox}
        />

        {/* Painel direito: quadro da Aula (durante a aula) ou TestPanel (normal) */}
        {lesson.active ? (
          <APBlackboardPanel
            boardWords={lesson.boardWords}
            boardStatus={lesson.boardStatus}
            phase={lesson.phase}
            step={lesson.step}
            steps={lesson.steps}
            atGraphEnd={lesson.cur?.graphEnd === true}
            onGoFormal={goFormal}
            onDoGraph={finishLesson}
            onNext={() => lessonGo(1)}
            onPrev={() => lessonGo(-1)}
            onFinish={finishLesson}
          />
        ) : level.impossible ? (
          <aside className="test-panel">
            <div className="section-header" style={{ fontSize: 11 }}>Linguagem</div>
            <div style={{ fontSize: 15, fontWeight: 800, color: '#6b21a8' }}>{level.language}</div>
            <div className="ap-impossible-card">
              <div className="ap-impossible-badge">🚫 Impossível com Autômato com Pilha</div>
              <p>{level.note}</p>
              <div className="ap-impossible-mt">
                Resolve-se só com <b>Máquina de Turing (MT)</b> — que ainda <b>não implementamos</b>. 🛠️⚙️
              </div>
            </div>
          </aside>
        ) : (
        <aside className="test-panel ap-test-panel">
          <div className="section-header" style={{ fontSize: 11 }}>Palavras aceitas pela linguagem</div>

          <div className="test-input-area">
            <input type="text" className="word-input"
              placeholder={!isDrawingUnlocked && getShortestWord(level) === '' ? "Digite 'null'..." : "ex: aabb (vazio = λ)"}
              value={simWord} onChange={e => setSimWord(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && testWord()}
              translate="no" spellCheck={false} autoCorrect="off" autoCapitalize="off" />
            <button className="add-test-btn" onClick={testWord}>+</button>
          </div>

          {isDrawingUnlocked && (
            <button className="simulate-btn" onClick={simulate}>🔬 Simular</button>
          )}

          <div className="words-list">
            {testedWords.map((t, i) => (
              <div key={i} className={`word-row ${t.status ? t.status : t.accepted ? 'correct' : 'wrong'}`}>
                <span>{t.word === '' ? 'λ' : t.word}</span>
                <span>
                  {t.status === 'shortest' ? '★ MENOR'
                    : t.status === 'correct' ? '✓'
                    : t.status === 'wrong' ? '✕'
                    : t.accepted ? '✓' : '✕'}
                </span>
              </div>
            ))}
          </div>

          {result && !result.ok && result.reason !== 'counterexample' && (
            <div className="ap-result err">{result.message}</div>
          )}

          {isDrawingUnlocked && (
            <button className="validate-btn slide-up-fade" onClick={validate}>
              ✓ Validar AP
            </button>
          )}
        </aside>
        )}
      </div>

      {/* Rodapé: deck de cartas + Maurílio (mesmo visual do AFD), ou o
          simulador compacto + pilha (mesmo estilo do SimPanel do AFD)
          quando uma simulação está ativa. */}
      <APFooterDeck
        mode={mode}
        onPick={pickMode}
        lessonActive={lesson.active}
        isDrawingUnlocked={isDrawingUnlocked}
        hasNodes={g.nodes.length > 0}
        canUndo={g.canUndo}
        canRedo={g.canRedo}
        onUndo={g.undo}
        onRedo={g.redo}
        profMessage={prof.message}
        profMood={prof.mood}
        onProfClick={() => setProf(p => p.message
          ? { ...p, message: '' }
          : { message: level.hint || 'Lembre: aceita por pilha vazia (esvazie o Z no fim).', mood: 'explicando' })}
        onNodeDrag={handleDeckDrag}
        onNodeDrop={handleDeckDrop}
        onNodeDragCancel={handleDeckCancel}
        simPanel={sim && (
          <APSimPanel key={simKey} run={sim.run} word={sim.word}
            accepted={sim.accepted} reason={sim.reason} title={sim.title} message={sim.message}
            onStepNarrate={narrateSim} onHighlight={handleHighlight} onClose={closeSim} />
        )}
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
