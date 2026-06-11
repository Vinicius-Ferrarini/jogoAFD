import { useState, useMemo, useCallback, useRef } from 'react';
import './AFDPart1.css';
import './AFDMinimizer.css';
import { computeDistTable, computeMinimized } from './utils/dfaAlgorithms';
import GraphView          from './components/GraphView';
import RequirementsPhase  from './components/RequirementsPhase';
import BuildPhase         from './components/BuildPhase';
import ResultPhase        from './components/ResultPhase';
import imgMaurilioSerio   from '../../assets/maurilio1_serio.webp';
import imgBalaoFala       from '../../assets/balao_fala_redondo.webp';

const PHASE_ORDER  = ['REQUISITOS', 'BUILD', 'RESULT'];
const PHASE_LABELS = ['1 Requisitos', '2 Construir', '3 Resultado'];

export default function MinGame({ exercise, progress, onBack, updateProgress, showToast }) {
  const [phase,   setPhase]   = useState('REQUISITOS');
  const [profMsg, setProfMsg] = useState('');
  const [banner,  setBanner]  = useState(null);
  const speechRef = useRef(null);
  const bannerRef = useRef(null);

  const showBanner = useCallback((msg, type = 'info') => {
    setBanner({ msg, type });
    if (bannerRef.current) clearTimeout(bannerRef.current);
    bannerRef.current = setTimeout(() => setBanner(null), 4000);
  }, []);

  const showProf = useCallback((msg, dur = 6000) => {
    setProfMsg(msg);
    if (speechRef.current) clearTimeout(speechRef.current);
    speechRef.current = setTimeout(() => setProfMsg(''), dur);
  }, []);

  const { states, alphabet, initialState, finalStates, transitions } = exercise.initial;

  const transTable = useMemo(() => {
    const map = {};
    for (const st of states) {
      map[st] = {};
      for (const sym of alphabet) {
        const t = transitions.find(tr => tr.from === st && tr.symbol === sym);
        map[st][sym] = t?.to ?? null;
      }
    }
    return map;
  }, [states, alphabet, transitions]);

  const origNodes = useMemo(() => states.map(s => ({
    id: s, label: s,
    isInitial: s === initialState,
    isFinal:   finalStates.includes(s),
  })), [states, initialState, finalStates]);

  const correctTable = useMemo(
    () => computeDistTable(states, finalStates, transitions, alphabet),
    [states, finalStates, transitions, alphabet]
  );

  const minimized = useMemo(
    () => computeMinimized(states, initialState, finalStates, transitions, alphabet, correctTable),
    [states, initialState, finalStates, transitions, alphabet, correctTable]
  );

  const stars = progress[`afd-min-${exercise.id}`]?.stars || 0;

  return (
    <div className="workspace-wrapper" style={{ position:'relative' }}>
      {banner && (
        <div className={`toast-notification ${banner.type}`}>{banner.msg}</div>
      )}

      <header className="game-header">
        <div className="header-left">
          <button className="back-btn" onClick={onBack}>⬅ Voltar</button>
        </div>
        <div style={{ flex:1, display:'flex', justifyContent:'center', alignItems:'center', gap:8 }}>
          <span className="mission-label">Minimização</span>
          <span style={{ fontWeight:'bold', fontSize:13 }}>{exercise.title}</span>
        </div>
        <div style={{ display:'flex', gap:5, marginRight:10 }}>
          {PHASE_LABELS.map((lbl, i) => {
            const p    = PHASE_ORDER[i];
            const done = PHASE_ORDER.indexOf(phase) > i;
            return (
              <span key={p} style={{
                padding:'2px 8px', borderRadius:4, fontSize:10, fontWeight:'bold',
                border:'2px solid #000',
                background: phase === p ? '#fde047' : done ? '#bbf7d0' : '#eee',
              }}>{lbl}</span>
            );
          })}
        </div>
      </header>

      <div className="min-main">
        {/* Painel esquerdo — grafo */}
        <section className="min-graph-panel">
          <div style={{ position:'absolute', inset:4 }}>
            <GraphView
              nodes={phase === 'RESULT' ? minimized.nodes : origNodes}
              transitions={phase === 'RESULT' ? minimized.transitions : transitions}
              vw={580} vh={320} nr={22} mx={62} my={40}
            />
          </div>
          <div className="min-graph-tag">
            {phase === 'RESULT' ? 'AFD Minimizado' : 'AFD Original'}
          </div>
          <div className="min-graph-legend">
            <span>
              <span style={{ fontWeight:'bold', fontSize:11, marginRight:3 }}>▶</span>
              <span className="min-legend-dot initial" />
              {' '}Inicial
            </span>
            <span>
              <span className="min-legend-dot final" style={{ outline:'2px solid #000', outlineOffset:2 }} />
              {' '}Final
            </span>
          </div>
        </section>

        {/* Painel direito — conteúdo da fase */}
        <section className="min-right">
          {phase === 'REQUISITOS' && (
            <RequirementsPhase
              states={states}
              alphabet={alphabet}
              initialState={initialState}
              finalStates={finalStates}
              transTable={transTable}
              showBanner={showBanner}
              onAdvance={() => setPhase('BUILD')}
            />
          )}
          {phase === 'BUILD' && (
            <BuildPhase
              states={states}
              correctTable={correctTable}
              exercise={exercise}
              updateProgress={updateProgress}
              showBanner={showBanner}
              showProf={showProf}
              onResult={() => setPhase('RESULT')}
            />
          )}
          {phase === 'RESULT' && (
            <ResultPhase
              minimized={minimized}
              exercise={exercise}
              stars={stars}
              onBack={onBack}
            />
          )}
        </section>
      </div>

      {/* Professor HUD — canto inferior direito */}
      <div className="professor-hud">
        {profMsg && (
          <div className="professor-balloon">
            <img src={imgBalaoFala} alt="" />
            <div className="professor-balloon-text">{profMsg}</div>
          </div>
        )}
        <img
          src={imgMaurilioSerio}
          alt="Professor Maurílio"
          className="prof-img"
          onClick={() => showProf(exercise.hint)}
        />
      </div>
    </div>
  );
}
