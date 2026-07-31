// src/components/FeedbackModal.jsx
// Fase 6 — modal INTERNO de pesquisa de satisfação (substitui o link externo do
// Google Forms). Curto: 1 nota (★ 1-5) + 1 comentário opcional. Cada envio grava
// um doc NOVO e numerado em /sessoes/{uid}/pesquisa_inicial/avaliacao_{N} — sem
// sobrescrever os anteriores (ver submitFeedback em services/telemetry.js), então
// o jogador pode ENVIAR QUANTAS VEZES QUISER: avaliação 1, avaliação 2, …
// Renderizado no nível do App (como o ConsentGate). O App o MONTA só quando
// aberto (`{feedbackOpen && <FeedbackModal .../>}`), então cada abertura já
// nasce com o estado zerado — sem efeito de reset (evita setState-em-efeito).
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import './FeedbackModal.css';
import { submitFeedback, getFeedbackCount } from '../services/telemetry';

export default function FeedbackModal({ onClose, onSubmitted }) {
  const [nota, setNota]           = useState(0);
  const [hover, setHover]         = useState(0);
  const [comentario, setComentario] = useState('');
  const [sending, setSending]     = useState(false);
  const [sentIndex, setSentIndex] = useState(null); // índice do envio recém-feito (null = mostrando o formulário)
  const [err, setErr]             = useState(null);

  // Fecha no ESC (efeito de assinatura — sem setState no corpo).
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose?.(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  // Próximo número de avaliação (lido do contador local; atualiza após cada envio).
  const nextIndex = getFeedbackCount() + 1;

  const handleSend = async () => {
    if (nota < 1 || sending) return;
    setSending(true); setErr(null);
    const res = await submitFeedback({ nota, comentario: comentario.trim() });
    setSending(false);
    if (res.ok) {
      onSubmitted?.(res.indice);   // App: atualiza o visual do FAB
      setSentIndex(res.indice);    // mostra a confirmação desta avaliação
    } else if (res.reason === 'no-consent') {
      setErr('Para enviar, aceite a coleta de dados no aviso do rodapé.');
    } else {
      setErr('Não foi possível enviar agora. Tente novamente mais tarde.');
    }
  };

  // "Enviar outra avaliação": volta ao formulário zerado (o contador já avançou,
  // então o próximo envio vira avaliação N+1).
  const enviarOutra = () => {
    setNota(0); setHover(0); setComentario(''); setErr(null); setSentIndex(null);
  };

  return createPortal(
    <div className="fb-overlay" role="dialog" aria-modal="true" aria-label="Pesquisa de satisfação do TuringLab"
      onClick={() => onClose?.()}>
      <div className="fb-card" onClick={e => e.stopPropagation()}>
        <button className="fb-close" onClick={() => onClose?.()} aria-label="Fechar">✕</button>

        {sentIndex != null ? (
          <div className="fb-thanks">
            <div className="fb-thanks-emoji" aria-hidden="true">💚</div>
            <h2 className="fb-title">Avaliação {sentIndex} enviada!</h2>
            <p className="fb-sub">
              Obrigado! Você pode enviar outra avaliação quando quiser — cada uma é
              registrada separadamente.
            </p>
            <button className="fb-submit" onClick={enviarOutra}>Enviar outra avaliação</button>
            <button className="fb-secondary" onClick={() => onClose?.()}>Fechar</button>
          </div>
        ) : (
          <>
            <h2 className="fb-title">Como foi sua experiência?</h2>
            <p className="fb-sub">Sua opinião ajuda a melhorar o TuringLab (leva 10 segundos).</p>
            {nextIndex > 1 && (
              <p className="fb-note">
                Você já enviou {nextIndex - 1} avaliação(ões). Esta será a de número {nextIndex}.
              </p>
            )}

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
              {sending ? 'Enviando…' : 'Enviar avaliação'}
            </button>
          </>
        )}
      </div>
    </div>,
    document.body
  );
}
