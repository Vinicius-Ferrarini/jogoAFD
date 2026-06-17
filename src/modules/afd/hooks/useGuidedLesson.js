// ─── useGuidedLesson: estado da Aula Guiada ───────────────────────────────────
// Controla o passo da demonstração (guidedLessonStep) e os snapshots do trabalho
// do aluno (restaurados ao fim da aula).
import { useState, useRef } from 'react';

export default function useGuidedLesson() {
  const [guidedLessonStep, setGuidedLessonStep] = useState(null);
  const userNodesSnapshot       = useRef(null);
  const userTransitionsSnapshot = useRef(null);

  return {
    guidedLessonStep, setGuidedLessonStep,
    userNodesSnapshot, userTransitionsSnapshot,
  };
}
