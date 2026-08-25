// ─── WordGuessLevelList: grade paginada do minigame "Menor Palavra" ──────────
// Reaproveita LevelGridScreen (mesma moldura de AFDMinimizer/etc). Pagina de
// 20 em 20 (PAGE_SIZE) na ordem AFD → AP → MT-Recon — MT-Recon é lazy-loaded
// por nível, então só dispara os import()s quando a página que o contém é
// exibida (ver src/modules/shared/wordExercises/index.js, decisão 8/9 do
// plano em docs/MENOR_PALAVRA_MINIGAME.md).
import { useState, useEffect, useMemo } from 'react';
import LevelGridScreen from '../afd/components/LevelGridScreen';
import { SvgStar } from '../afd/SvgStar';
import { TOTAL_EXERCISE_COUNT, PAGE_SIZE, getExercisesPage } from '../shared/wordExercises/index.js';

const MODULE_BADGE = { afd: 'AFD', ap: 'AP', 'mt-recon': 'MT' };
const MODULE_COLOR = { afd: '#bfdbfe', ap: '#ddd6fe', 'mt-recon': '#fed7aa' };

export default function WordGuessLevelList({ progress, onSelect, onBack }) {
  const [page, setPage] = useState(1);
  // { forPage, list } — guarda de qual página é a lista carregada, para
  // derivar "loading" no render (page !== loaded.forPage) sem precisar de um
  // 2º setState síncrono dentro do efeito só pra zerar o estado anterior.
  const [loaded, setLoaded] = useState({ forPage: null, list: [] });
  const totalPages = Math.max(1, Math.ceil(TOTAL_EXERCISE_COUNT / PAGE_SIZE));
  const isLoading = loaded.forPage !== page;

  useEffect(() => {
    let cancelled = false;
    getExercisesPage(page - 1).then(list => { if (!cancelled) setLoaded({ forPage: page, list }); });
    return () => { cancelled = true; };
  }, [page]);

  const totalStars = useMemo(
    () => TOTAL_EXERCISE_COUNT, // denominador: 1 estrela possível por exercício (ver abaixo)
    []
  );
  const earnedStars = useMemo(() => {
    // Soma só o que já foi conquistado — precisa iterar as chaves salvas em
    // progress, não a lista de exercícios (que muda por página) para não
    // subcontar o que está em páginas não carregadas no momento.
    let sum = 0;
    for (const key of Object.keys(progress)) {
      if (key.startsWith('word-guess-') && (progress[key]?.stars || 0) > 0) sum += 1;
    }
    return sum;
  }, [progress]);

  return (
    <LevelGridScreen
      onBack={onBack}
      badge="🔤 Menor Palavra"
      badgeBg="#fde68a"
      totalStars={earnedStars}
      maxStars={totalStars}
      extraClass="word-guess-screen"
      loading={isLoading}
      loadingText="Carregando exercícios…"
      pagination={{ page, totalPages, setPage }}
    >
      {loaded.list.map(ex => {
        const stars = progress[`word-guess-${ex.id}`]?.stars || 0;
        return (
          <button key={ex.id} className="menu-btn primary"
            onClick={() => onSelect(ex)}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
              background: MODULE_COLOR[ex.moduleId] || '#f3f4f6' }}>
            <span style={{ fontSize: 10, fontWeight: 900, opacity: 0.7 }}>
              {MODULE_BADGE[ex.moduleId] || ex.moduleId} · {ex.label}
            </span>
            <SvgStar filled={stars >= 1} size={18} />
          </button>
        );
      })}
    </LevelGridScreen>
  );
}
