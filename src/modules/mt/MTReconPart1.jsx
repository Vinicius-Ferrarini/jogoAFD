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
import { MT_RECON_LEVEL_ORDER, loadMTReconLevel, getShortestWord, getGabaritoGraph } from '../../levels_data/mt-recon/index.js';
import { fuzzTMRecognizer, simulateTM } from './utils/tmAlgorithms';
import { DIFF_COLOR } from '../../levels';
import { logEvent } from '../../services/telemetry';

const EMPTY_FORMAL = { states: '', sigma: '', gamma: '', initial: '', blank: '', final: '', deltaCells: {} };

export default function MTReconPart1({ onBack, progress, updateProgress }) {
  // ── Toast (mesmo padrão do AFD1/AP: local, ignora o showToast no-op do App.jsx) ─
  const [toastData, setToastData] = useState({ show: false, message: '', type: 'info' });
  const toastRef = useRef(null);
  const showToast = useCallback((message, type = 'info') => {
    setToastData({ show: true, message, type });
    if (toastRef.current) clearTimeout(toastRef.current);
    toastRef.current = setTimeout(() => setToastData(d => ({ ...d, show: false })), 4000);
  }, []);

  const [screen, setScreen] = useState('MENU');
  const [level,  setLevel]  = useState(null);
  // Prefetch silencioso — mesmo padrão de MTPart1.jsx (ver comentário lá).
  const [mtReconLevels, setMtReconLevels] = useState([]);
  useEffect(() => {
    let cancelled = false;
    (async () => {
      for (const id of MT_RECON_LEVEL_ORDER) {
        const lv = await loadMTReconLevel(id);
        if (!cancelled) setMtReconLevels(prev => [...prev, lv]);
      }
    })();
    return () => { cancelled = true; };
  }, []);
  const [mode,   setMode]   = useState('IDLE');
  const [connectingSource, setConnectingSource] = useState(null);
  const [errAction, setErrAction] = useState(null);
  const [prof,   setProf]   = useState({ message: '', mood: 'serio' });
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
  const [inputError, setInputError]           = useState(null);
  const canvasRef      = useRef(null);
  const innerCanvasRef = useRef(null);
  const viewportRef    = useRef(null);
  const formalRef      = useRef(null);
  const formalFieldRefs = useRef({}); // { [campo]: {current: <input>} } — p/ inserir símbolo no cursor
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

  // ── Telemetria (módulo mt-recon) ────────────────────────────────────────────
  // Mesmo modelo do AP: 3 marcos com estrelas 1/2/3 — descoberta_palavra (★1, a
  // menor palavra que destrava o tabuleiro), validacao (★2, fuzzTMRecognizer OK)
  // e tabela_formal (★3, 7-tupla concluída). Tentativa nos testes de palavra em
  // modo LANGUAGE (resposta avaliada: gabarito) + no Validar. PULADO: modo
  // DRAWING (simulador do grafo do aluno = exploração, não avaliada).
  const phaseStartRef = useRef(null);
  const attemptsRef = useRef(0);
  const tutorialOpensRef = useRef(0);
  const errorSinceTutorialRef = useRef(false);
  const elapsedSeconds = useCallback(() => (
    phaseStartRef.current == null ? null
      : Math.round((performance.now() - phaseStartRef.current) / 1000)
  ), []);
  const phaseExtras = useCallback((marco) => ({
    modulo: 'mt-recon',
    nivel_id: level?.id,
    tempo_gasto_segundos: elapsedSeconds(),
    numero_tentativas: attemptsRef.current,
    dificuldade: level?.level ?? null,
    marco,
    assistiu_tutorial: tutorialOpensRef.current > 0,
    acertou_apos_tutorial: tutorialOpensRef.current > 0 && !errorSinceTutorialRef.current,
  }), [level, elapsedSeconds]);
  const logTutorialOpen = useCallback((origem) => {
    tutorialOpensRef.current += 1;
    errorSinceTutorialRef.current = false;
    logEvent({
      tipo_evento: tutorialOpensRef.current === 1 ? 'tutorial_aberto' : 'tutorial_reaberto',
      modulo: 'mt-recon',
      nivel_id: level?.id,
      origem,
    });
  }, [level]);

  // ── Modo Aula: iniciar / navegar / sair ─────────────────────────────────────
  const applyStep = useCallback((st) => {
    if (!st) return;
    setProf(st.prof ?? { message: '', mood: 'serio' });
  }, []);

  // Posição/zoom do canvas do ALUNO antes de entrar na aula — o Modo Aula
  // reenquadra a câmera pro grafo de cada passo (auto-fit em MTCanvas.jsx),
  // então sem isso, ao sair, a tela ficava onde o último passo da aula deixou
  // (quase sempre nada a ver com o que o aluno estava desenhando). Mesmo
  // padrão do AP (ver preLessonViewRef em APPart1.jsx).
  const preLessonViewRef = useRef(null);
  const startLesson = useCallback(() => {
    if (!lesson.hasLesson) return;
    logTutorialOpen('aula_guiada'); // mesma métrica de "uso de ajuda" da dica
    preLessonViewRef.current = {
      scrollLeft: viewportRef.current?.scrollLeft ?? 0,
      scrollTop: viewportRef.current?.scrollTop ?? 0,
      zoom,
    };
    setMode('IDLE'); setConnectingSource(null);
    setFormalAnswers(EMPTY_FORMAL); setFormalMode(false);
    lesson.goTo(0);
    applyStep(lesson.steps[0]);
  }, [lesson, applyStep, zoom, logTutorialOpen]);

  const finishLesson = useCallback(() => {
    lesson.finish();
    say('Aula encerrada! Agora monte a sua MT e clique em Validar. 💪', 'explicando');
    const saved = preLessonViewRef.current;
    if (saved) {
      setZoom(saved.zoom);
      // Aguarda o próximo frame (canvas volta a exibir o grafo do aluno antes
      // do scroll ser restaurado, senão o navegador clampa scrollLeft/Top ao
      // tamanho do conteúdo ainda em transição).
      requestAnimationFrame(() => {
        if (viewportRef.current) {
          viewportRef.current.scrollLeft = saved.scrollLeft;
          viewportRef.current.scrollTop = saved.scrollTop;
        }
      });
      preLessonViewRef.current = null;
    }
  }, [lesson, say, setZoom]);

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
  // Aceita objeto já resolvido (caminho normal) ou id cru — ver mesmo padrão
  // em MTPart1.jsx.
  const loadLevel = useCallback(async (lvOrId) => {
    const lv = typeof lvOrId === 'string' ? await loadMTReconLevel(lvOrId) : lvOrId;
    g.reset();
    lesson.reset();
    // Telemetria: início da fase + reset de contadores.
    phaseStartRef.current = performance.now();
    attemptsRef.current = 0;
    tutorialOpensRef.current = 0;
    errorSinceTutorialRef.current = false;
    logEvent({
      tipo_evento: 'inicio_fase',
      modulo: 'mt-recon',
      nivel_id: lv.id,
      dificuldade: lv.level ?? null,
    });
    setLevel(lv); setScreen('GAME'); setMode('IDLE'); setConnectingSource(null);
    setSimWord(''); setTestedWords([]); setDeckGhost(null); setVictory(false);
    setSelectedNodes([]); setSelectionBox(null);
    setTestMode('LANGUAGE'); setIsDrawingUnlocked(false);
    setFormalAnswers(EMPTY_FORMAL); setFormalMode(false);
    draw.resetDrawings();
    resetZoom();
    say('', 'serio');
  }, [g, lesson, draw, say, resetZoom]);

  const goLevel = useCallback((dir) => {
    const idx = mtReconLevels.findIndex(l => l.id === level?.id);
    const next = mtReconLevels[idx + dir];
    if (next) loadLevel(next);
  }, [level, loadLevel, mtReconLevels]);

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
        setInputError(`O símbolo "${invalid}" não faz parte do alfabeto (${alphabet.join(', ')}).`);
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
        const resultado = isShortest ? 'shortest' : accepted ? 'correct' : 'wrong';
        // Telemetria: teste de palavra em LANGUAGE é resposta avaliada (gabarito).
        attemptsRef.current += 1;
        if (resultado === 'wrong') errorSinceTutorialRef.current = true;
        logEvent({ tipo_evento: 'tentativa', modulo: 'mt-recon', nivel_id: level.id, resultado, numero_tentativas: attemptsRef.current });
        setTestedWords(prev => [{ word: display, mode: 'LANGUAGE', status: resultado }, ...prev]);
        if (isShortest) {
          setIsDrawingUnlocked(true);
          updateProgress?.(`mt-recon-${level.id}`, 1, phaseExtras('descoberta_palavra'));
          showToast?.('Sucesso! Tabuleiro liberado.', 'success');
        }
      } else {
        const resultado = accepted ? 'correct' : 'wrong';
        attemptsRef.current += 1;
        if (resultado === 'wrong') errorSinceTutorialRef.current = true;
        logEvent({ tipo_evento: 'tentativa', modulo: 'mt-recon', nivel_id: level.id, resultado, numero_tentativas: attemptsRef.current });
        setTestedWords(prev => [{ word: display, mode: 'LANGUAGE', status: resultado }, ...prev]);
      }
      setSimWord('');
      return;
    }

    // testMode === 'DRAWING': testa contra a MT do ALUNO (exploração — não logada).
    const mtGraph = { states: g.nodes, transitions: g.transitions };
    const { status } = simulateTM(mtGraph, word, 2000, level.startMarker ?? null);
    setTestedWords(prev => prev.some(t => t.word === display && t.mode === 'DRAWING')
      ? prev : [{ word: display, mode: 'DRAWING', accepted: status === 'ACCEPTED' }, ...prev]);
    setSimWord('');
  }, [level, simWord, isDrawingUnlocked, testMode, testedWords, g.nodes, g.transitions, updateProgress, showToast, phaseExtras]);

  // ── Validar (bateria) = ★1 ──────────────────────────────────────────────────
  const validate = useCallback(() => {
    if (!level) return;

    // Telemetria: cada Validar que falha é uma `tentativa` (validacao_falhou) com
    // o motivo estruturado em `tipo_erro`. Sucesso não gera tentativa (fica no fim_fase).
    const failAttempt = (tipo_erro) => {
      errorSinceTutorialRef.current = true;
      attemptsRef.current += 1;
      logEvent({
        tipo_evento: 'tentativa',
        modulo: 'mt-recon',
        nivel_id: level.id,
        resultado: 'validacao_falhou',
        tipo_erro,
        numero_tentativas: attemptsRef.current,
      });
    };

    if (!g.nodes.find(n => n.isInitial)) {
      failAttempt('no_initial');
      showToast('Defina um estado inicial (▶) antes de validar.', 'error');
      setErrAction('TOGGLE_INITIAL');
      setTimeout(() => setErrAction(null), 3000);
      return;
    }
    if (!g.nodes.some(n => n.isFinal)) {
      failAttempt('no_final');
      showToast('Defina um estado final (◎) antes de validar.', 'error');
      setErrAction('TOGGLE_FINAL');
      setTimeout(() => setErrAction(null), 3000);
      return;
    }
    const seen = new Map();
    for (const t of g.transitions) {
      const sym = t.read === '' ? '□' : t.read;
      const key = `${t.from}|${sym}`;
      const sig = `${t.to}|${t.write}|${t.move}`;
      if (seen.has(key) && seen.get(key) !== sig) {
        failAttempt('nondeterministic');
        const lbl = g.nodes.find(n => n.id === t.from)?.label ?? t.from;
        showToast(`O estado ${lbl} tem duas regras diferentes para o símbolo "${sym}" — ajuste antes de validar.`, 'error');
        return;
      }
      if (!seen.has(key)) seen.set(key, sig);
    }

    const mtGraph = { states: g.nodes, transitions: g.transitions };
    const res = fuzzTMRecognizer(mtGraph, level);
    if (res.ok) {
      updateProgress?.(`mt-recon-${level.id}`, 2, phaseExtras('validacao'));
      say('Perfeito! Sua MT reconhece a linguagem corretamente! Agora preencha a Descrição Formal. 📝', 'feliz');
      showToast?.('MT validada! ★★ — formalize a máquina.', 'success');
      setFormalMode(true);
    } else {
      failAttempt(res.reason ?? null);
      const show = res.counterexample === '' ? 'λ' : res.counterexample;
      const msg = res.reason === 'loop'
        ? `Loop detectado para "${show}". Verifique se a MT para em todos os casos.`
        : res.reason === 'wrongly-accepted'
        ? `Sua MT aceita "${show}" indevidamente (não pertence à linguagem).`
        : `Sua MT não aceita "${show}" (deveria pertencer à linguagem).`;
      // Erro fica só no toast do topo — o Maurílio não comenta erros, só
      // sucesso/dicas.
      showToast?.(msg, 'error');
    }
  }, [level, g, say, updateProgress, showToast, phaseExtras]);

  const concludePhase = useCallback(() => {
    setFormalMode(false);
    setVictory(true);
    updateProgress?.(`mt-recon-${level.id}`, 3, phaseExtras('tabela_formal'));
  }, [level, updateProgress, phaseExtras]);

  // Dica do professor (Maurílio): mesma métrica de "uso de ajuda" da aula guiada.
  // Loga só na ABERTURA (balão vazio → vai abrir); fechar não conta.
  const handleProfClick = useCallback(() => {
    const isOpening = !prof.message;
    setProf(p => p.message
      ? { ...p, message: '' }
      : { message: level?.hint || 'Leia e mova o cabeçote até chegar ao estado final (ou rejeitar)!', mood: 'explicando' });
    if (isOpening) logTutorialOpen('dica');
  }, [prof.message, level, logTutorialOpen]);

  const stars = level ? (progress?.[`mt-recon-${level.id}`]?.stars || 0) : 0;

  // ── Menu ─────────────────────────────────────────────────────────────────────
  if (screen === 'MENU') {
    const maxStars   = MT_RECON_LEVEL_ORDER.length * 3;
    const totalStars = mtReconLevels.reduce((s, l) => s + (progress?.[`mt-recon-${l.id}`]?.stars || 0), 0);
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
          {mtReconLevels.map(l => (
            <button key={l.id} className="menu-btn primary" onClick={() => loadLevel(l)}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
                background: DIFF_COLOR[l.level] }}>
              <span>{l.label}</span>
              <SvgStars count={progress?.[`mt-recon-${l.id}`]?.stars || 0} size={14} max={3} />
            </button>
          ))}
          {mtReconLevels.length < MT_RECON_LEVEL_ORDER.length && (
            <span style={{ fontWeight: 900, color: '#888', alignSelf: 'center', padding: 8 }}>Carregando…</span>
          )}
        </div>
        <DifficultyLegend keys={['easy', 'medium', 'hard']} />
      </div>
    );
  }

  // ── Tela do jogo ─────────────────────────────────────────────────────────────
  const mtIdx  = mtReconLevels.findIndex(l => l.id === level.id);
  const nextMt = mtIdx >= 0 && mtIdx < mtReconLevels.length - 1 ? mtReconLevels[mtIdx + 1] : null;
  const isFormal   = lesson.phase === 'FORMAL';
  const formalOpen = isFormal || formalMode;

  const sigmaCols    = level.alphabet ?? [];
  const formalCols   = [...sigmaCols, ...((level.tapeAlphabet ?? []).filter(s => !sigmaCols.includes(s)))];
  const formalStateRows = (lesson.active ? (lesson.displayNodes ?? []) : g.nodes).map(n => n.id);

  const setDeltaCell = (key, value) => setFormalAnswers(prev => ({
    ...prev, deltaCells: { ...prev.deltaCells, [key]: value },
  }));

  // insertSymbol: quando definido, mostra um botão colado ao campo que insere
  // o símbolo (ex.: □) na posição do cursor — o jogador não precisa saber
  // digitar o glifo de branco no teclado.
  const formalField = (label, k, placeholder, insertSymbol) => {
    const filled = !!formalAnswers[k];
    const inputRef = formalFieldRefs.current[k] ??= { current: null };
    const handleInsert = () => {
      const el = inputRef.current;
      const cur = formalAnswers[k] ?? '';
      const start = el?.selectionStart ?? cur.length;
      const end   = el?.selectionEnd   ?? cur.length;
      const next  = cur.slice(0, start) + insertSymbol + cur.slice(end);
      setFormalAnswers(prev => ({ ...prev, [k]: next }));
      requestAnimationFrame(() => {
        el?.focus();
        const pos = start + insertSymbol.length;
        el?.setSelectionRange(pos, pos);
      });
    };
    return (
      <div style={{ marginBottom: 8 }}>
        <label style={{ display: 'block', fontFamily: "'Comic Sans MS',cursive", fontSize: 11,
          fontWeight: 900, color: '#065f46', marginBottom: 3 }}>{label}</label>
        <div style={{ display: 'flex', gap: 4 }}>
          <input type="text" value={formalAnswers[k] ?? ''} placeholder={placeholder}
            disabled={lesson.active}
            ref={el => { inputRef.current = el; }}
            onChange={e => setFormalAnswers(prev => ({ ...prev, [k]: e.target.value }))}
            translate="no" spellCheck={false} autoCorrect="off" autoCapitalize="off"
            style={{ flex: 1, minWidth: 0, boxSizing: 'border-box', padding: '5px 7px',
              fontFamily: "'Comic Sans MS',cursive", fontSize: 13, fontWeight: 900,
              background: filled ? '#f0fdf4' : '#fff',
              color: filled ? '#111' : '#9ca3af',
              border: filled ? '2px solid #22c55e' : '2px solid #d1d5db', borderRadius: 6 }} />
          {insertSymbol && !lesson.active && (
            <button type="button" onClick={handleInsert} title={`Inserir "${insertSymbol}"`}
              style={{ flexShrink: 0, width: 30, fontFamily: "'Comic Sans MS',cursive",
                fontSize: 14, fontWeight: 900, cursor: 'pointer', borderRadius: 6,
                border: '2px solid #143823', background: '#fde047', color: '#143823' }}>
              {insertSymbol}
            </button>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="workspace-wrapper">
      {toastData.show && <div className={`toast-notification ${toastData.type}`}>{toastData.message}</div>}

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
        isLast={mtIdx === mtReconLevels.length - 1}
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
              {formalField('Γ (Alfabeto da fita):', 'gamma',   '{…}', '□')}
              {formalField('q₀ (Estado inicial):',  'initial', '…')}
              {formalField('□ (Símbolo branco):',   'blank',   '…', '□')}
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
          activeTransition={lesson.activeTransition}
          connectingSource={connectingSource}
          setConnectingSource={setConnectingSource}
          addNode={g.addNode}
          moveNodes={g.moveNodes}
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

            {/* padding-bottom 245px: espaço pro balão do Maurílio (professor-hud
                do rodapé), que "flutua" por cima do painel — o rodapé de MT é
                compacto durante a aula (compactWhenLesson no APFooterDeck), então
                o balão sobe mais alto na tela do que um rodapé de altura cheia
                exigiria; sem essa folga extra, os botões Ant./Próx. ficavam atrás
                do balão. */}
            <div style={{ padding: '6px 8px 245px', display: 'flex', flexDirection: 'column', gap: 6 }}>
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
        onProfClick={handleProfClick}
        onCloseBalloon={() => setProf(p => ({ ...p, message: '' }))}
        onNodeDrag={handleDeckDrag}
        onNodeDrop={handleDeckDrop}
        onNodeDragCancel={handleDeckCancel}
        tape={lesson.active && lesson.cur?.tape ? lesson.cur.tape : null}
        tapeHead={lesson.cur?.head ?? 0}
        errAction={errAction}
        compactWhenLesson
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
