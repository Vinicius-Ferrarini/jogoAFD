// MinLessonOverlay — Modo Aula da minimização: o professor Maurílio DEMONSTRA
// cada etapa sobre o exercício atual, sem tocar no trabalho do aluno e sem dar
// estrela. É um PAINEL OPACO que ocupa a área abaixo do cabeçalho (o cabeçalho da
// página continua visível e seus selos destacam o passo demonstrado). Layout
// espelha o jogo: grafo à esquerda, demonstração à direita, Maurílio explicando.
// É "burro": só lê game.lessonScript[stepId] e desenha.
import DeltaTableView  from './DeltaTableView';
import TriangularTable from './TriangularTable';
import GraphView       from './GraphView';
import imgMaurilio     from '../../../assets/maurilio3_explicando.webp';

// Título (sublinhado) no topo do "quadro", por etapa — o que está sendo feito.
const TITLES = {
  PREP:    'Tabela de transição (δ)',
  SETUP:   'Tabela triangular',
  TRIVIAL: 'Preencher a tabela triangular',
  PROP:    'Preencher a tabela do par',
  GROUPS:  'Grupos de equivalência',
  DRAW:    'AFD mínimo',
};

export default function MinLessonOverlay({ game, lesson, stepOrder, stepNames, onNav, onContinue, onExit }) {
  const stepId = stepOrder[lesson.stepIdx];
  const frames = game.lessonScript[stepId] || [];
  const frame  = frames[lesson.frameIdx] || frames[0] || { text: '', view: null };

  const isFirstFrame = lesson.frameIdx <= 0;
  const isLastFrame  = lesson.frameIdx >= frames.length - 1;
  const hasNextStep  = lesson.stepIdx < stepOrder.length - 1;

  const renderView = (view) => {
    if (!view) return null;
    switch (view.kind) {
      case 'delta':
        return <DeltaTableView prep={view.prep} />;
      case 'tri':
        return (
          <TriangularTable
            states={game.rStates}
            userTable={view.userTable || {}}
            onToggle={() => {}}
            readOnly={!!view.readOnly}
            highlightEquiv={!!view.highlightEquiv}
            selectedPair={view.selectedPair || null}
          />
        );
      case 'inspector': {
        const resolvedSet = new Set(view.resolvedEquiv || []);
        const [ip, iq] = view.pair ? view.pair.split(',') : ['', ''];
        return (
          <div className="min-lesson-inspector">
            <TriangularTable
              states={game.rStates}
              userTable={view.marks || {}}
              validatedCells={resolvedSet}
              selectedPair={view.pair || null}
              readOnly
              onToggle={() => {}}
            />
            {view.pair && view.rows?.length > 0 && (
              <table className="min-inspector-table">
                <thead>
                  <tr>
                    <th>símbolo</th><th>δ({ip}, ·)</th><th>δ({iq}, ·)</th>
                    <th>par destino</th><th>decisão</th>
                  </tr>
                </thead>
                <tbody>
                  {view.rows.map(r => (
                    <tr key={r.sym}>
                      <td className="min-insp-sym">{r.sym}</td>
                      <td>{r.dp ?? '—'}</td>
                      <td>{r.dq ?? '—'}</td>
                      <td>{r.dest ? r.dest.replace(',', '') : (r.dp && r.dq ? `${r.dp}${r.dq}` : '—')}</td>
                      <td className={r.decision === 'pending' ? 'min-insp-pending-cell' : ''}>
                        {r.decision === 'x'       ? <span className="min-insp-locked-x">× distingue</span>
                          : r.decision === 'equiv'   ? <span className="min-insp-locked-eq">≡</span>
                          : r.decision === 'pending' ? <span className="min-insp-locked-pend">🤔 pendente</span>
                          : '—'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        );
      }
      case 'groups':
        return (
          <div className="min-groups">
            {Object.entries(game.minimized.classMap).map(([rep, members]) => (
              <div key={rep} className="min-group-row">
                <span className="min-group-members">{'{'}{members.join(', ')}{'}'}</span>
                <span className="min-group-arrow">→</span>
                <span className="min-group-rep">{game.minimized.displayName[rep]}</span>
              </div>
            ))}
          </div>
        );
      case 'graph':
        return (
          <div style={{ width: 500, maxWidth: '100%', height: 290 }}>
            <GraphView
              nodes={game.minimized.nodes}
              transitions={game.minimized.transitions}
              vw={500} vh={290} nr={22} mx={56} my={36}
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-lesson-panel">
      {/* Faixa da aula (logo abaixo do cabeçalho da página) */}
      <div className="min-lesson-bar">
        <span>👨‍🏫 Modo Aula</span>
        <span className="min-lesson-step">Passo {lesson.stepIdx + 1}: {stepNames[stepId]}</span>
        <span className="min-lesson-count">quadro {lesson.frameIdx + 1} / {frames.length}</span>
        <button className="min-lesson-x" onClick={onExit} title="Sair e fazer eu mesmo">✋ Sair</button>
      </div>

      {/* Corpo: grafo à esquerda (igual ao jogo) + demonstração à direita */}
      <div className="min-main">
        <section className="min-graph-panel">
          <div style={{ position: 'absolute', inset: 4 }}>
            <GraphView
              nodes={game.origNodes}
              transitions={game.transitions}
              vw={580} vh={320} nr={22} mx={62} my={40}
            />
          </div>
          <div className="min-graph-tag">AFD Original</div>
        </section>

        <section className="min-lesson-stage">
          <div className="min-lesson-card">
            <div className="min-lesson-card-title">{TITLES[stepId] || stepNames[stepId]}</div>
            {renderView(frame.view)}
          </div>

          {/* Maurílio explicando — logo abaixo do quadro */}
          <div className="min-lesson-teacher">
            <img src={imgMaurilio} alt="Professor Maurílio" className="min-lesson-teacher-img" />
            <div className="min-lesson-teacher-bubble">{frame.text}</div>
          </div>

          <div className="min-lesson-controls">
            <button className="min-lesson-btn" onClick={() => onNav(-1)} disabled={isFirstFrame}>◀ Anterior</button>
            {!isLastFrame ? (
              <button className="min-lesson-btn primary" onClick={() => onNav(1)}>Próximo ▶</button>
            ) : (
              <>
                {hasNextStep && (
                  <button className="min-lesson-btn primary" onClick={onContinue}>
                    ▶ Continuar — Passo {lesson.stepIdx + 2}
                  </button>
                )}
                <button className="min-lesson-btn do" onClick={onExit}>✋ Fazer eu mesmo</button>
              </>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
