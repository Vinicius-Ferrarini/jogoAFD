// ─── BossMode: orquestrador genérico de um Boss (Trabalho, Prova, …) ─────────
// Reusa os módulos normais (AFD 1/2, Minimização, AP, MT Rec./Trans.) sem
// duplicar lógica: cada exercício é o mesmo componente do módulo, montado com
// forceLevelId (pula o menu interno, entra direto no exercício) e um par
// progress/updateProgress "proxy" que grava em `${progressPrefix}-${bossId}`
// (chave própria, independente do progresso normal daquele exercício).
//
// Config vem por prop: a lista de exercícios (bossId/module/originalId), o
// prefixo de progresso e os textos/cores da tela. Cor/rótulo por módulo e o
// mapeamento módulo→componente/chave ficam em bossModules.js.
import { Suspense, useMemo, useRef, useState } from 'react';
import { SvgStars } from '../afd/SvgStar';
import LevelGridScreen from '../afd/components/LevelGridScreen';
import LoadingScreen from '../../components/LoadingScreen';
import { MODULE_COMPONENT, MODULE_META, internalKey, legendFor } from './bossModules';

export default function BossMode({
  exercises, progressPrefix, badge, badgeBg, doneBadge, doneNoun,
  onBack, progress, updateProgress, showToast,
}) {
  const bossKey = (bossId) => `${progressPrefix}-${bossId}`;
  const TOTAL_STARS = exercises.length * 3;
  const legend = useMemo(() => legendFor(exercises), [exercises]);
  const earnedStarsOf = (prog) =>
    exercises.reduce((s, ex) => s + (prog[bossKey(ex.bossId)]?.stars || 0), 0);

  const [activeBossId, setActiveBossId] = useState(null);
  const [showDone, setShowDone] = useState(false);
  // Capturado quando o exercício é ABERTO (não recalculado a cada render):
  // precisamos saber se já estava tudo completo ANTES desta sessão, pra só
  // disparar a tela de conclusão quando o último exercício é terminado agora,
  // e não toda vez que o jogador reabre um exercício já com 3 estrelas.
  const wasAllDoneBeforeRef = useRef(false);

  const activeExercise = useMemo(
    () => exercises.find(e => e.bossId === activeBossId) ?? null,
    [exercises, activeBossId]
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
    // que cobre até a mudança de módulo (ex.: afd-p1 → afd-p2 → ap-pilha → MT).
    const activeIdx = exercises.findIndex(e => e.bossId === activeBossId);
    const prevEx = activeIdx > 0 ? exercises[activeIdx - 1] : null;
    const nextEx = activeIdx >= 0 && activeIdx < exercises.length - 1
      ? exercises[activeIdx + 1] : null;
    // Proxy de progress: só a chave que o módulo filho vai ler existe, e aponta
    // pro valor guardado sob a chave própria do Boss.
    const proxyProgress = {
      [internalKey(activeExercise)]: progress[bossKey(activeExercise.bossId)],
    };
    // Proxy de updateProgress: ignora a chave que o filho tentar usar
    // internamente e sempre grava em ${progressPrefix}-${bossId} — só 1
    // exercício carregado por vez, sem ambiguidade possível.
    const proxyUpdateProgress = (_moduleKey, stars, extras) => {
      updateProgress(bossKey(activeExercise.bossId), stars, extras);
    };

    const handleExit = () => {
      setActiveBossId(null);
      // Acabou de completar o último exercício pendente: mostra a tela de
      // conclusão automaticamente (sem exigir um clique extra).
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
          showToast={showToast}
          onBack={handleExit}
          onForcedPrev={prevEx ? () => openExercise(prevEx.bossId) : null}
          onForcedNext={nextEx ? () => openExercise(nextEx.bossId) : null}
          forceLabelColor={MODULE_META[activeExercise.module]?.color}
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
          background: badgeBg, border: '3px solid #000', borderRadius: 8,
          padding: '4px 16px', boxShadow: '3px 3px 0 #000' }}>
          {doneBadge}
        </p>
        <div style={{ fontWeight: 'bold', fontSize: 18, marginTop: 12 }}>
          Você terminou os {exercises.length} exercícios {doneNoun}. ⭐ {earnedStars}/{TOTAL_STARS}
        </div>
        <button className="menu-btn primary" style={{ marginTop: 28, padding: '14px 28px', fontSize: 18 }}
          onClick={onBack}>
          Voltar ao Menu
        </button>
      </div>
    );
  }

  return (
    <LevelGridScreen
      onBack={onBack}
      badge={badge}
      badgeBg={badgeBg}
      totalStars={earnedStars}
      maxStars={TOTAL_STARS}
      footer={
        /* Legenda: cor de cada exercício por módulo de origem (mesmo estilo do
           DifficultyLegend do jogo). */
        <div style={{ position: 'fixed', bottom: 16, right: 16, background: '#fff', border: '3px solid #000',
          borderRadius: 8, boxShadow: '3px 3px 0 #000', padding: '8px 12px', zIndex: 100,
          display: 'flex', flexDirection: 'column', gap: 4, fontSize: 12, fontWeight: 'bold' }}>
          {legend.map(([mod, lbl]) => (
            <div key={mod} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ width: 14, height: 14, background: MODULE_META[mod]?.color, border: '2px solid #000',
                borderRadius: 3, display: 'inline-block', flexShrink: 0 }} />
              {lbl}
            </div>
          ))}
        </div>
      }
    >
      {exercises.map(ex => {
        const stars = progress[bossKey(ex.bossId)]?.stars || 0;
        return (
          <button key={ex.bossId} className="menu-btn primary"
            onClick={() => openExercise(ex.bossId)}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
              background: MODULE_META[ex.module]?.color ?? '#9333ea' }}>
            <span>L{String(ex.bossId).padStart(2, '0')}</span>
            <SvgStars count={stars} size={14} />
          </button>
        );
      })}
    </LevelGridScreen>
  );
}
