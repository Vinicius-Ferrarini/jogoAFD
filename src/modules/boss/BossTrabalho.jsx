// ─── BossTrabalho: orquestrador do Boss/Trabalho ─────────────────────────────
// Reusa AFDPart1/AFDPart2/APPart1 sem duplicar lógica de jogo: cada exercício
// é o mesmo componente do módulo normal, montado com forceLevelId (pula o
// menu interno, entra direto no exercício) e um par progress/updateProgress
// "proxy" que grava em `boss-trabalho-${bossId}` (chave própria, independente
// do progresso normal daquele exercício no módulo original).
import { lazy, Suspense, useMemo, useRef, useState } from 'react';
import { BOSS_TRABALHO_EXERCISES } from './bossTrabalhoExercises';
import { SvgStars } from '../afd/SvgStar';
import LoadingScreen from '../../components/LoadingScreen';

const AFDPart1 = lazy(() => import('../afd/AFDPart1'));
const AFDPart2 = lazy(() => import('../afd/AFDPart2'));
const APPart1  = lazy(() => import('../ap/APPart1'));

const MODULE_COMPONENT = { 'afd-p1': AFDPart1, 'afd-p2': AFDPart2, 'ap-pilha': APPart1 };

// Chave interna que cada módulo usa para indexar `progress[...]` — precisa
// bater com o que cada componente já espera (ver AFDPart1/AFDPart2: id cru;
// APPart1: prefixo 'ap-').
function internalKey(ex) {
  return ex.module === 'ap-pilha' ? `ap-${ex.originalId}` : ex.originalId;
}

const bossKey = (bossId) => `boss-trabalho-${bossId}`;
const TOTAL_STARS = BOSS_TRABALHO_EXERCISES.length * 3;

// Cada exercício do Trabalho vem de um módulo diferente — a cor do botão (e a
// legenda abaixo da grade) sinaliza qual. Reusa a paleta do DIFF_COLOR do jogo:
// verde (easy), amarelo (medium), vermelho (hard).
const MODULE_COLOR = { 'afd-p1': '#4ade80', 'afd-p2': '#facc15', 'ap-pilha': '#f87171' };
// Ordem/entradas da legenda (uma por módulo presente no Trabalho).
const MODULE_LEGEND = [
  ['afd-p1', 'AFD 1'],
  ['afd-p2', 'AFD 2'],
  ['ap-pilha', 'AP'],
];

function earnedStarsOf(progress) {
  return BOSS_TRABALHO_EXERCISES.reduce(
    (s, ex) => s + (progress[bossKey(ex.bossId)]?.stars || 0), 0
  );
}

export default function BossTrabalho({ onBack, progress, updateProgress }) {
  const [activeBossId, setActiveBossId] = useState(null);
  const [showDone, setShowDone] = useState(false);
  // Capturado no momento em que o exercício é ABERTO (não recalculado a cada
  // render) — precisamos saber se já estava tudo completo ANTES desta sessão,
  // pra só disparar a tela de conclusão quando o 5º exercício é terminado
  // agora, e não toda vez que o jogador reabre um exercício já com 3 estrelas.
  const wasAllDoneBeforeRef = useRef(false);

  const activeExercise = useMemo(
    () => BOSS_TRABALHO_EXERCISES.find(e => e.bossId === activeBossId) ?? null,
    [activeBossId]
  );

  const openExercise = (bossId) => {
    wasAllDoneBeforeRef.current = earnedStarsOf(progress) === TOTAL_STARS;
    setActiveBossId(bossId);
  };

  if (activeExercise) {
    const GameComponent = MODULE_COMPONENT[activeExercise.module];
    // Navegação prev/next ENTRE os exercícios do Boss (não entre os níveis do
    // módulo original) — usada pelos botões ◀/▶ do cabeçalho de cada módulo em
    // modo forçado. Trocar activeBossId remonta o GameComponent certo (key), o
    // que cobre até a mudança de módulo (afd-p1 → afd-p2 → ap-pilha).
    const activeIdx = BOSS_TRABALHO_EXERCISES.findIndex(e => e.bossId === activeBossId);
    const prevEx = activeIdx > 0 ? BOSS_TRABALHO_EXERCISES[activeIdx - 1] : null;
    const nextEx = activeIdx >= 0 && activeIdx < BOSS_TRABALHO_EXERCISES.length - 1
      ? BOSS_TRABALHO_EXERCISES[activeIdx + 1] : null;
    // Proxy de progress: só a chave que o módulo filho vai ler existe, e
    // aponta pro valor guardado sob a chave própria do Boss.
    const proxyProgress = {
      [internalKey(activeExercise)]: progress[bossKey(activeExercise.bossId)],
    };
    // Proxy de updateProgress: ignora a chave que o filho tentar usar
    // internamente (o originalId/`ap-${id}`) e sempre grava em
    // boss-trabalho-${bossId} — só 1 exercício carregado por vez, sem
    // ambiguidade possível.
    const proxyUpdateProgress = (_moduleKey, stars, extras) => {
      updateProgress(bossKey(activeExercise.bossId), stars, extras);
    };

    const handleExit = () => {
      setActiveBossId(null);
      // Acabou de completar o último exercício pendente do Trabalho: mostra a
      // tela de conclusão automaticamente (sem exigir um clique extra).
      if (!wasAllDoneBeforeRef.current && earnedStarsOf(progress) === TOTAL_STARS) setShowDone(true);
    };

    return (
      <Suspense fallback={<LoadingScreen />}>
        <GameComponent
          key={activeExercise.bossId}
          forceLevelId={activeExercise.originalId}
          forceLevelLabel={`L${String(activeExercise.bossId).padStart(2, '0')}`}
          progress={proxyProgress}
          updateProgress={proxyUpdateProgress}
          onBack={handleExit}
          onForcedPrev={prevEx ? () => openExercise(prevEx.bossId) : null}
          onForcedNext={nextEx ? () => openExercise(nextEx.bossId) : null}
          forceLabelColor={MODULE_COLOR[activeExercise.module]}
        />
      </Suspense>
    );
  }

  const earnedStars = earnedStarsOf(progress);

  if (showDone) {
    return (
      <div className="menu-screen menu-screen-fases" style={{ justifyContent: 'flex-start', paddingTop: 20 }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 14, width: '100%' }}>
          <div style={{ flex: 1 }}>
            <button className="back-btn" onClick={() => setShowDone(false)}>⬅ Voltar</button>
          </div>
          <h1 className="menu-title" style={{ margin: 0 }}>TuringLab</h1>
          <div style={{ flex: 1 }} />
        </div>
        <p style={{ fontWeight: 900, fontSize: 16, color: '#555', marginBottom: 12,
          background: '#f87171', border: '3px solid #000', borderRadius: 8,
          padding: '4px 16px', boxShadow: '3px 3px 0 #000' }}>
          📝 Trabalho concluído!
        </p>
        <div style={{ fontWeight: 'bold', fontSize: 18, marginTop: 12 }}>
          Você terminou os 5 exercícios do Trabalho. ⭐ {earnedStars}/{TOTAL_STARS}
        </div>
        <button className="menu-btn primary" style={{ marginTop: 28, padding: '14px 28px', fontSize: 18 }}
          onClick={onBack}>
          Voltar ao Menu
        </button>
      </div>
    );
  }

  return (
    <div className="menu-screen menu-screen-fases" style={{ justifyContent: 'flex-start', paddingTop: 20 }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 14, width: '100%' }}>
        <div style={{ flex: 1 }}>
          <button className="back-btn" onClick={onBack}>⬅ Voltar</button>
        </div>
        <h1 className="menu-title" style={{ margin: 0 }}>TuringLab</h1>
        <div style={{ flex: 1 }} />
      </div>
      <p style={{ fontWeight: 900, fontSize: 16, color: '#555', marginBottom: 12,
        background: '#f87171', border: '3px solid #000', borderRadius: 8,
        padding: '4px 16px', boxShadow: '3px 3px 0 #000' }}>
        📝 Trabalho
      </p>
      <div style={{ marginBottom: 18, fontWeight: 'bold', fontSize: 16 }}>
        Progresso: {TOTAL_STARS > 0 ? Math.round((earnedStars / TOTAL_STARS) * 100) : 0}%
        &nbsp;({earnedStars}/{TOTAL_STARS} ★)
      </div>

      <div className="levels-grid">
        {BOSS_TRABALHO_EXERCISES.map(ex => {
          const stars = progress[bossKey(ex.bossId)]?.stars || 0;
          return (
            <button key={ex.bossId} className="menu-btn primary"
              onClick={() => openExercise(ex.bossId)}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
                background: MODULE_COLOR[ex.module] ?? '#9333ea' }}>
              <span>L{String(ex.bossId).padStart(2, '0')}</span>
              <SvgStars count={stars} size={14} />
            </button>
          );
        })}
      </div>

      {/* Legenda: cor de cada exercício por módulo de origem (mesmo estilo do
          DifficultyLegend do jogo). */}
      <div style={{ position: 'fixed', bottom: 16, right: 16, background: '#fff', border: '3px solid #000',
        borderRadius: 8, boxShadow: '3px 3px 0 #000', padding: '8px 12px', zIndex: 100,
        display: 'flex', flexDirection: 'column', gap: 4, fontSize: 12, fontWeight: 'bold' }}>
        {MODULE_LEGEND.map(([mod, lbl]) => (
          <div key={mod} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{ width: 14, height: 14, background: MODULE_COLOR[mod], border: '2px solid #000',
              borderRadius: 3, display: 'inline-block', flexShrink: 0 }} />
            {lbl}
          </div>
        ))}
      </div>
    </div>
  );
}
