// ─── useGuidedLesson: estado da Aula Guiada + tutoriais contextuais ──────────
// Controla o passo da demonstração (guidedLessonStep), os snapshots do trabalho
// do aluno (restaurados ao fim da aula), o modo auto-tutorial (persistido em
// localStorage) e os gatilhos contextuais (onStart / onDrawGraph / etc).
import { useState, useRef, useEffect, useCallback } from 'react';

export default function useGuidedLesson({ currentLevel }) {
  const [guidedLessonStep, setGuidedLessonStep] = useState(null);
  const [activeTutorial, setActiveTutorial]     = useState(null);
  const shownTutorialsRef       = useRef(new Set());
  const userNodesSnapshot       = useRef(null);
  const userTransitionsSnapshot = useRef(null);

  const [autoTutorial, setAutoTutorial] = useState(() => {
    const v = localStorage.getItem('autoQuest_autoTutorial');
    return v !== null ? JSON.parse(v) : true;
  });

  const toggleAutoTutorial = useCallback(() => {
    setAutoTutorial(v => {
      const next = !v;
      localStorage.setItem('autoQuest_autoTutorial', JSON.stringify(next));
      return next;
    });
  }, []);

  const showContextualTutorial = useCallback((key) => {
    if (!autoTutorial) return;
    const tut = currentLevel?.tutorials?.[key];
    if (tut && !shownTutorialsRef.current.has(key)) {
      shownTutorialsRef.current.add(key);
      setActiveTutorial(tut);
    }
  }, [currentLevel, autoTutorial]);

  // Dispara o tutorial de abertura ao carregar uma fase (se modo iniciante ligado).
  useEffect(() => {
    if (!autoTutorial || !currentLevel?.tutorials?.onStart) return;
    shownTutorialsRef.current = new Set();
    setActiveTutorial(currentLevel.tutorials.onStart);
    shownTutorialsRef.current.add('onStart');
  }, [currentLevel, autoTutorial]);

  return {
    guidedLessonStep, setGuidedLessonStep,
    activeTutorial, setActiveTutorial,
    autoTutorial, toggleAutoTutorial,
    shownTutorialsRef, userNodesSnapshot, userTransitionsSnapshot,
    showContextualTutorial,
  };
}
