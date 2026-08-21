// ─── BossTrabalho: configuração do Boss "Trabalho" ───────────────────────────
// Toda a lógica (grade, cores, legenda, navegação prev/next, proxy de progresso
// em chave própria) vive em BossMode — aqui só a config específica do Trabalho.
import BossMode from './BossMode';
import { BOSS_TRABALHO_EXERCISES } from './bossTrabalhoExercises';

export default function BossTrabalho({ onBack, progress, updateProgress, showToast }) {
  return (
    <BossMode
      exercises={BOSS_TRABALHO_EXERCISES}
      progressPrefix="boss-trabalho"
      badge="📝 Trabalho"
      badgeBg="#f87171"
      doneBadge="📝 Trabalho concluído!"
      doneNoun="do Trabalho"
      onBack={onBack}
      progress={progress}
      updateProgress={updateProgress}
      showToast={showToast}
    />
  );
}
