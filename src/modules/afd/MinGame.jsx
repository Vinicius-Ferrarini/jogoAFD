import { useState, useCallback, useRef } from 'react';
import './AFDPart1.css';
import './AFDMinimizer.css';
import useMinimizationGame from './hooks/useMinimizationGame';
import GraphView          from './components/GraphView';
import DeltaTableView     from './components/DeltaTableView';
import ProfessorMaurilio  from './components/ProfessorMaurilio';
import Step1_Preparation   from './components/Step1_Preparation';
import Step2_TableSetup     from './components/Step2_TableSetup';
import Step3_TrivialMarking from './components/Step3_TrivialMarking';
import Step4_Propagation    from './components/Step4_Propagation';
import Step5_Result         from './components/Step5_Result';
import MinDrawStep          from './components/MinDrawStep';
import MinLessonOverlay     from './components/MinLessonOverlay';

// Máquina de 6 passos: PREP → SETUP → TRIVIAL → PROP → GROUPS → DRAW
const STEP_ORDER  = ['PREP', 'SETUP', 'TRIVIAL', 'PROP', 'GROUPS', 'DRAW'];
const STEP_LABELS = ['1 Prep', '2 Grid', '3 Trivial', '4 Propag.', '5 Grupos', '6 Desenho'];
// Nomes completos para a faixa do Modo Aula ("Passo N: <nome>")
const STEP_NAMES  = {
  PREP: 'Verificar o AFD', SETUP: 'Montar a tabela de pares', TRIVIAL: 'Marcação trivial',
  PROP: 'Propagação', GROUPS: 'Grupos de equivalência', DRAW: 'Desenhar o AFD mínimo',
};

const navBtnStyle = {
  padding: '2px 8px', fontSize: 13, fontWeight: 900,
  background: '#fff', color: '#000', border: '2px solid #000', borderRadius: 6,
  cursor: 'pointer', boxShadow: '2px 2px 0 #000',
  fontFamily: "'Comic Sans MS', cursive", lineHeight: 1.2,
};
const navBtnDisabledStyle = { ...navBtnStyle, opacity: 0.35, cursor: 'not-allowed', boxShadow: 'none' };

export default function MinGame({ exercise, exNumber, progress, onBack, onNext, onPrev, nextLabel, updateProgress }) {
  // ── Banner / Professor ──
  const [banner,   setBanner]   = useState(null);
  const [profMsg,  setProfMsg]  = useState('');
  const [profMood, setProfMood] = useState('serio');
  const speechRef = useRef(null);
  const bannerRef = useRef(null);

  const showBanner = useCallback((msg, type = 'info') => {
    setBanner({ msg, type });
    if (bannerRef.current) clearTimeout(bannerRef.current);
    bannerRef.current = setTimeout(() => setBanner(null), 4000);
  }, []);

  const showProf = useCallback((msg, mood = 'serio', dur = 8000) => {
    setProfMsg(msg);
    setProfMood(mood);
    if (speechRef.current) clearTimeout(speechRef.current);
    speechRef.current = setTimeout(() => setProfMsg(''), dur);
  }, []);

  // ── O "gabarito invisível" ──
  const game = useMinimizationGame(exercise);
  const { origNodes, minimized, transitions, allPairs, trivialTable } = game;

  // ── Estado do fluxo ──
  const [step,        setStep]        = useState('PREP');
  // PREP — tabela de transição δ construída pelo aluno (elevada aqui p/ persistir no "↩ Passo")
  const [prep,        setPrep]        = useState({ rows: ['', ''], cols: [''], cells: {} });
  const [axisRows,    setAxisRows]    = useState(['']);
  const [axisCols,    setAxisCols]    = useState(['']);
  const [marks,       setMarks]       = useState({});            // { pairKey: bool }
  const [lockedCells, setLockedCells] = useState(new Set());     // triviais travados no passo 3
  const [showDelta,   setShowDelta]   = useState(true);          // drawer da tabela δ (referência) — começa aberto
  // Modo Aula — null = fechado. { stepIdx, frameIdx }. NUNCA altera o `step` real
  // nem o progresso; é só uma demonstração sobreposta (regras 4 e 5 do plano).
  const [lesson,      setLesson]      = useState(null);

  const stars = progress[`afd-min-${exercise.id}`]?.stars || 0;

  // ── Transições entre passos ──
  const lockTrivialAndGoProp = useCallback(() => {
    setLockedCells(new Set(allPairs.filter(k => trivialTable[k])));
    setStep('PROP');
  }, [allPairs, trivialTable]);

  // Propagação concluída → 2 estrelas; a 3ª só vem ao desenhar o AFD mínimo.
  const finishPropagation = useCallback(() => {
    updateProgress(`afd-min-${exercise.id}`, 2);
    showBanner('Distinções completas! ★★ — falta desenhar o AFD mínimo.', 'success');
    setStep('GROUPS');
  }, [updateProgress, exercise.id, showBanner]);

  // Desenho do AFD mínimo validado → 3ª estrela.
  const handleDrawSolved = useCallback(() => {
    updateProgress(`afd-min-${exercise.id}`, 3);
    showBanner('AFD mínimo desenhado! ★★★', 'success');
  }, [updateProgress, exercise.id, showBanner]);

  // Voltar um passo (descarta propagação ao sair de PROP→TRIVIAL)
  const goBackStep = useCallback(() => {
    const idx = STEP_ORDER.indexOf(step);
    if (idx <= 0) return;
    const prev = STEP_ORDER[idx - 1];
    if (step === 'PROP') {
      setMarks(prevMarks => {
        const kept = {};
        for (const k of allPairs) if (trivialTable[k] && prevMarks[k]) kept[k] = true;
        return kept;
      });
      setLockedCells(new Set());
    }
    setStep(prev);
  }, [step, allPairs, trivialTable]);

  // ── Modo Aula — navegação interna (não toca em step/progresso/marks) ──
  const lessonNav = useCallback((dir) => {
    setLesson(l => {
      if (!l) return l;
      const len = (game.lessonScript[STEP_ORDER[l.stepIdx]] || []).length;
      return { ...l, frameIdx: Math.max(0, Math.min(len - 1, l.frameIdx + dir)) };
    });
  }, [game.lessonScript]);
  const lessonContinue = useCallback(() => {
    setLesson(l => (l && l.stepIdx < STEP_ORDER.length - 1) ? { stepIdx: l.stepIdx + 1, frameIdx: 0 } : l);
  }, []);
  const lessonExit = useCallback(() => setLesson(null), []);

  // 🔧 DEV — navegação livre entre passos (sem validação), só p/ testar.
  //         Remover este bloco (e o controle no header) quando estabilizar.
  const devJump = useCallback((dir) => {
    const idx = STEP_ORDER.indexOf(step);
    const target = STEP_ORDER[Math.max(0, Math.min(STEP_ORDER.length - 1, idx + dir))];
    if (target === 'PROP') setLockedCells(new Set(allPairs.filter(k => trivialTable[k])));
    setStep(target);
  }, [step, allPairs, trivialTable]);

  // Passo destacado nos selos do header: durante a aula, o passo DEMONSTRADO
  const activeStepIdx = lesson ? lesson.stepIdx : STEP_ORDER.indexOf(step);

  return (
    <div className="workspace-wrapper min-screen" style={{ position: 'relative' }}>
      {banner && <div className={`toast-notification ${banner.type}`}>{banner.msg}</div>}

      <header className="game-header">
        <div className="header-left">
          <button className="back-btn" onClick={onBack}>⬅ Voltar</button>
          {!lesson && STEP_ORDER.indexOf(step) > 0 && (
            <button className="back-btn" style={{ background: '#fde68a' }} onClick={goBackStep}>↩ Passo</button>
          )}
        </div>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8 }}>
          <span className="mission-label">Minimização</span>
          {exNumber != null && (
            <>
              <button style={onPrev ? navBtnStyle : navBtnDisabledStyle}
                disabled={!onPrev} onClick={onPrev} title="Exercício anterior">◀</button>
              <span style={{ fontWeight: 900, fontSize: 12, background: '#fde047',
                border: '2px solid #000', borderRadius: 6, padding: '1px 8px' }}>
                Ex. {exNumber}
              </span>
              <button style={onNext ? navBtnStyle : navBtnDisabledStyle}
                disabled={!onNext} onClick={onNext} title="Próximo exercício">▶</button>
            </>
          )}
          <span style={{ fontWeight: 'bold', fontSize: 13 }}>{exercise.title}</span>
        </div>
        <div style={{ display: 'flex', gap: 5, marginRight: 10, alignItems: 'center' }}>
          {!lesson && (
            <button className="min-lesson-open"
              onClick={() => setLesson({ stepIdx: STEP_ORDER.indexOf(step), frameIdx: 0 })}
              title="Assistir o professor demonstrar este passo (não dá estrela)">
              👨‍🏫 Aula
            </button>
          )}
          {STEP_LABELS.map((lbl, i) => {
            const isCur = i === activeStepIdx;
            const isDone = activeStepIdx > i;
            return (
              <span key={STEP_ORDER[i]} style={{
                padding: '2px 6px', borderRadius: 4, fontSize: 9.5, fontWeight: 'bold',
                border: '2px solid #000',
                background: isCur ? '#fde047' : isDone ? '#bbf7d0' : '#eee',
              }}>{lbl}</span>
            );
          })}
        </div>
      </header>

      {lesson ? (
        <MinLessonOverlay
          game={game} lesson={lesson}
          stepOrder={STEP_ORDER} stepNames={STEP_NAMES}
          onNav={lessonNav} onContinue={lessonContinue} onExit={lessonExit}
        />
      ) : step === 'DRAW' ? (
        <MinDrawStep
          game={game} prep={prep} showProf={showProf} stars={stars}
          onSolved={handleDrawSolved} onBack={onBack} onNext={onNext} nextLabel={nextLabel}
        />
      ) : (
      <div className="min-main">
        {/* Painel esquerdo — grafo (sempre o AFD original; o mínimo só é revelado
            ao final, dentro do passo de Desenho, para o aluno não copiar) */}
        <section className="min-graph-panel">
          <div style={{ position: 'absolute', inset: 4 }}>
            <GraphView
              nodes={origNodes}
              transitions={transitions}
              vw={580} vh={320} nr={22} mx={62} my={40}
            />
          </div>
          <div className="min-graph-tag">AFD Original</div>

          {/* Drawer da Tabela δ (referência) — disponível após montar a tabela no Passo 1 */}
          {step !== 'PREP' && (
            <button className={`min-delta-toggle${showDelta ? ' active' : ''}`} onClick={() => setShowDelta(s => !s)}>
              📋 Tabela δ
            </button>
          )}
          {step !== 'PREP' && showDelta && (
            <div className="min-delta-drawer">
              <div className="min-delta-drawer-head">
                <span>Tabela de transição (δ)</span>
                <button onClick={() => setShowDelta(false)}>✕</button>
              </div>
              <DeltaTableView prep={prep} />
            </div>
          )}

          <div className="min-graph-legend">
            <span>
              <span style={{ fontWeight: 'bold', fontSize: 11, marginRight: 3 }}>▶</span>
              <span className="min-legend-dot initial" /> Inicial
            </span>
            <span>
              <span className="min-legend-dot final" style={{ outline: '2px solid #000', outlineOffset: 2 }} /> Final
            </span>
          </div>
        </section>

        {/* Painel direito — conteúdo do passo */}
        <section className="min-right">
          {step === 'PREP' && (
            <Step1_Preparation game={game} prep={prep} setPrep={setPrep} showProf={showProf} onAdvance={() => setStep('SETUP')} />
          )}
          {step === 'SETUP' && (
            <Step2_TableSetup
              game={game}
              axisRows={axisRows} axisCols={axisCols}
              setAxisRows={setAxisRows} setAxisCols={setAxisCols}
              showProf={showProf} onAdvance={() => setStep('TRIVIAL')}
            />
          )}
          {step === 'TRIVIAL' && (
            <Step3_TrivialMarking
              game={game} marks={marks} setMarks={setMarks}
              showProf={showProf} onAdvance={lockTrivialAndGoProp}
            />
          )}
          {step === 'PROP' && (
            <Step4_Propagation
              game={game} marks={marks} setMarks={setMarks} lockedCells={lockedCells}
              showProf={showProf} onAdvance={finishPropagation}
            />
          )}
          {step === 'GROUPS' && (
            <Step5_Result
              minimized={minimized} exercise={exercise} stars={stars}
              onBack={onBack} onAdvance={() => setStep('DRAW')}
            />
          )}
        </section>
      </div>
      )}

      {/* Professor HUD (escondido durante a aula — a aula tem o seu próprio) */}
      {!lesson && (
        <ProfessorMaurilio
          message={profMsg}
          mood={profMood}
          onClick={() => showProf(exercise.hint, 'explicando')}
        />
      )}

      {/* 🔧 DEV — navegação livre p/ teste (barra flutuante; remover quando estável) */}
      {!lesson && (
      <div style={{ position: 'fixed', bottom: 12, left: 12, zIndex: 10001,
        display: 'flex', alignItems: 'center', gap: 6,
        padding: '6px 10px', border: '2px dashed #a78bfa', borderRadius: 8,
        background: '#f5f3ff', boxShadow: '3px 3px 0 #000',
        fontFamily: "'Comic Sans MS','Comic Neue',cursive,sans-serif" }}>
        <span style={{ fontSize: 10, fontWeight: 900, color: '#7c3aed' }}>🔧 teste</span>
        <button onClick={() => devJump(-1)} disabled={STEP_ORDER.indexOf(step) === 0}
          title="Passo anterior (sem validar)"
          style={{ width: 30, height: 26, fontWeight: 900, fontSize: 14, border: '2px solid #000', borderRadius: 5,
            background: '#ddd6fe', cursor: STEP_ORDER.indexOf(step) === 0 ? 'not-allowed' : 'pointer',
            opacity: STEP_ORDER.indexOf(step) === 0 ? 0.4 : 1 }}>◀</button>
        <span style={{ fontSize: 10, fontWeight: 900, minWidth: 54, textAlign: 'center' }}>
          {STEP_LABELS[STEP_ORDER.indexOf(step)]}
        </span>
        <button onClick={() => devJump(1)} disabled={STEP_ORDER.indexOf(step) === STEP_ORDER.length - 1}
          title="Próximo passo (sem validar)"
          style={{ width: 30, height: 26, fontWeight: 900, fontSize: 14, border: '2px solid #000', borderRadius: 5,
            background: '#ddd6fe', cursor: STEP_ORDER.indexOf(step) === STEP_ORDER.length - 1 ? 'not-allowed' : 'pointer',
            opacity: STEP_ORDER.indexOf(step) === STEP_ORDER.length - 1 ? 0.4 : 1 }}>▶</button>
      </div>
      )}
    </div>
  );
}
