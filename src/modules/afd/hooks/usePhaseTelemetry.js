import { useCallback } from 'react';
import { logEvent } from '../../../services/telemetry';

// Mecânica de telemetria por FASE compartilhada por AFD_1, AP, MT Reconhecedora
// e MT Transdutora (que antes duplicavam este mesmo bloco). NÃO muda o formato
// dos eventos — só remove a duplicação dos helpers.
//
// Os 4 refs de contador são criados NO COMPONENTE (via useRef) e passados aqui:
// assim o eslint-plugin-react-hooks continua reconhecendo-os como refs estáveis
// nos callbacks do módulo (sem falsos positivos de exhaustive-deps), e os locais
// espalhados (`attemptsRef.current++`, reset no loadLevel etc.) seguem iguais.
//
// `modulo`     — 'afd-p1' | 'ap' | 'mt-trans' | 'mt-recon'.
// `nivelId`    — id do nível corrente (currentLevel?.id / level?.id).
// `dificuldade`— dificuldade do nível corrente (LEVEL_DIFFICULTY[id] ou level.level).
export default function usePhaseTelemetry({
  modulo, nivelId, dificuldade,
  phaseStartRef, attemptsRef, tutorialOpensRef, errorSinceTutorialRef,
}) {
  const elapsedSeconds = useCallback(() => (
    phaseStartRef.current == null ? null
      : Math.round((performance.now() - phaseStartRef.current) / 1000)
  ), [phaseStartRef]);

  // Campos comuns aos eventos fim_fase. `marco` identifica qual estrela foi
  // conquistada. assistiu_tutorial: ajuda aberta em algum momento da fase.
  // acertou_apos_tutorial: sucesso SEM erro desde a última abertura de ajuda.
  const phaseExtras = useCallback((marco) => ({
    modulo,
    nivel_id: nivelId,
    tempo_gasto_segundos: elapsedSeconds(),
    numero_tentativas: attemptsRef.current,
    dificuldade: dificuldade ?? null,
    marco,
    assistiu_tutorial: tutorialOpensRef.current > 0,
    acertou_apos_tutorial: tutorialOpensRef.current > 0 && !errorSinceTutorialRef.current,
  }), [modulo, nivelId, dificuldade, elapsedSeconds, attemptsRef, tutorialOpensRef, errorSinceTutorialRef]);

  // "Uso de ajuda": 1ª abertura da fase = tutorial_aberto; demais = tutorial_reaberto.
  // Cada abertura reinicia a janela "sem erro desde a última ajuda".
  const logTutorialOpen = useCallback((origem) => {
    tutorialOpensRef.current += 1;
    errorSinceTutorialRef.current = false;
    logEvent({
      tipo_evento: tutorialOpensRef.current === 1 ? 'tutorial_aberto' : 'tutorial_reaberto',
      modulo,
      nivel_id: nivelId,
      origem,
    });
  }, [modulo, nivelId, tutorialOpensRef, errorSinceTutorialRef]);

  return { elapsedSeconds, phaseExtras, logTutorialOpen };
}
