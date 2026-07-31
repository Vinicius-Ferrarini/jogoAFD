// src/components/FeedbackModal.jsx
// Fase 6 — modal INTERNO de feedback de satisfação (substitui o link externo do
// Google Forms). Curto: 1 nota (★ 1-5) + 1 comentário opcional. Salva em
// /sessoes/{uid}/pesquisa_inicial/resposta (ID fixo, create-only no servidor).
// Depois de respondido, reabrir mostra só um "obrigado" (reenvio é negado pela
// regra do Firestore — ver submitFeedback em services/telemetry.js).
// Renderizado no nível do App (como o ConsentGate). O App o MONTA só quando
// aberto (`{feedbackOpen && <FeedbackModal .../>}`), então cada abertura já
// nasce com o estado zerado — sem efeito de reset (evita setState-em-efeito).
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import './FeedbackModal.css';
import { submitFeedback, markFeedbackResponded } from '../services/telemetry';

export default function FeedbackModal({ alreadyResponded, onClose, onSubmitted }) {
  const [nota, setNota]           = useState(0);
  const [hover, setHover]         = useState(0);
  const [comentario, setComentario] = useState('');
  const [sending, setSending]     = useState(false);
  const [done, setDone]           = useState(false); // enviou agora, nesta abertura
  const [err, setErr]             = useState(null);

  // Fecha no ESC (efeito de assinatura — sem setState no corpo).
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose?.(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const showThanks = alreadyResponded || done;

  const handleSend = async () => {
    if (nota < 1 || sending) return;
    setSending(true); setErr(null);
    const res = await submitFeedback({ nota, comentario: comentario.trim() });
    setSending(false);
    if (res.ok) {
      markFeedbackResponded();
      onSubmitted?.();
      setDone(true);
    } else if (res.reason === 'no-consent') {
      setErr('Para enviar, aceite a coleta de dados no aviso do rodapé.');
    } else {
      setErr('Não foi possível enviar agora. Tente novamente mais tarde.');
    }
  };

  return createPortal(
    <div className="fb-overlay" role="dialog" aria-modal="true" aria-label="Feedback do TuringLab"
      onClick={() => onClose?.()}>
      <div className="fb-card" onClick={e => e.stopPropagation()}>
        <button className="fb-close" onClick={() => onClose?.()} aria-label="Fechar">✕</button>

        {showThanks ? (
          <div className="fb-thanks">
            <div className="fb-thanks-emoji" aria-hidden="true">💚</div>
            <h2 className="fb-title">Obrigado!</h2>
            <p className="fb-sub">
              Você já enviou seu feedback. Valeu por ajudar a melhorar o TuringLab!
            </p>
            <button className="fb-submit" onClick={() => onClose?.()}>Fechar</button>
          </div>
        ) : (
          <>
            <h2 className="fb-title">Como foi sua experiência?</h2>
            <p className="fb-sub">Sua opinião ajuda a melhorar o TuringLab (leva 10 segundos).</p>

            <div className="fb-stars" role="radiogroup" aria-label="Nota de 1 a 5">
              {[1, 2, 3, 4, 5].map(n => (
                <button
                  key={n}
                  type="button"
                  className={`fb-star${(hover || nota) >= n ? ' on' : ''}`}
                  onMouseEnter={() => setHover(n)}
                  onMouseLeave={() => setHover(0)}
                  onClick={() => setNota(n)}
                  aria-label={`${n} estrela${n > 1 ? 's' : ''}`}
                  aria-pressed={nota === n}
                >
                  ★
                </button>
              ))}
            </div>

            <textarea
              className="fb-comment"
              rows={3}
              placeholder="Comentário (opcional): o que você gostou ou o que melhoraria?"
              value={comentario}
              onChange={e => setComentario(e.target.value)}
              maxLength={1000}
            />

            {err && <div className="fb-error">⛔ {err}</div>}

            <button className="fb-submit" onClick={handleSend} disabled={nota < 1 || sending}>
              {sending ? 'Enviando…' : 'Enviar feedback'}
            </button>
          </>
        )}
      </div>
    </div>,
    document.body
  );
}
