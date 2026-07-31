// src/components/ConsentGate.jsx
// Banner de consentimento (estilo "cookie banner"): barra fina fixa no rodapé,
// NÃO bloqueante — o jogo/menu segue visível e jogável por trás.
// - "Aceito" é o ÚNICO gatilho de consentimento: chama grantConsent() e libera.
// - "✕" apenas oculta o banner visualmente nesta sessão (NÃO é consentimento);
//   como hasConsent() continua false, nada é coletado e o banner volta no reload.
// A lógica de telemetria (hasConsent/grantConsent/gate no logEvent) vive em
// services/telemetry.js e não é tocada aqui.
import { useState } from 'react';
import { createPortal } from 'react-dom';
import './ConsentGate.css';
import { grantConsent } from '../services/telemetry';

export default function ConsentGate({ onAccept }) {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;

  const handleAccept = () => {
    grantConsent(); // localStorage síncrono + evento async (non-blocking, try/catch interno)
    onAccept();     // App.jsx: setConsented(true) → banner desmonta
  };

  return createPortal(
    <div className="consent-banner" role="dialog" aria-label="Aviso de coleta de dados">
      <p className="consent-banner-text">
        O TuringLab coleta <strong>dados anônimos de uso</strong> (tempo e dificuldade
        das fases) para fins de pesquisa acadêmica. Nenhum dado pessoal é coletado.
      </p>
      <div className="consent-banner-actions">
        <button className="consent-banner-accept" onClick={handleAccept}>Aceito</button>
        <button
          className="consent-banner-close"
          onClick={() => setDismissed(true)}
          aria-label="Fechar sem aceitar"
          title="Fechar (não coletar dados)"
        >
          ✕
        </button>
      </div>
    </div>,
    document.body
  );
}
