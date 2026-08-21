// ─── BossProva: configuração do Boss "Prova" ─────────────────────────────────
// Toda a lógica (grade, cores, legenda, navegação prev/next, proxy de progresso
// em chave própria) vive em BossMode — aqui só a config específica da Prova.
import BossMode from './BossMode';
import { BOSS_PROVA_EXERCISES } from './bossProvaExercises';

export default function BossProva({ onBack, progress, updateProgress, showToast }) {
  return (
    <BossMode
      exercises={BOSS_PROVA_EXERCISES}
      progressPrefix="boss-prova"
      badge="🎓 Prova"
      badgeBg="#c7d2fe"
      doneBadge="🎓 Prova concluída!"
      doneNoun="da Prova"
      onBack={onBack}
      progress={progress}
      updateProgress={updateProgress}
      showToast={showToast}
    />
  );
}
