import './FeedbackButton.css';

const REPO_URL = 'https://github.com/Vinicius-Ferrarini/jogoAFD';

// FAB de feedback (Fase 6): abre um MODAL INTERNO (via App) em vez de um link
// externo pro Google Forms. O jogador pode enviar VÁRIAS avaliações; o ✓ só
// indica que já enviou ao menos uma (flag local — o FAB nunca lê o servidor) e
// clicar sempre reabre o formulário para enviar outra.
export default function FeedbackButton({ onOpen, responded = false }) {
  return (
    <button
      type="button"
      className={`feedback-fab${responded ? ' responded' : ''}`}
      onClick={onOpen}
      title={responded ? 'Você já enviou — clique para enviar outra avaliação' : 'Enviar sua avaliação do TuringLab'}
      aria-label={responded ? 'Feedback já enviado (enviar outra avaliação)' : 'Dar feedback'}
    >
      <span className="feedback-fab-icon" aria-hidden="true">{responded ? '✓' : '💡'}</span>
      <span className="feedback-fab-text">{responded ? 'Feedback enviado' : 'Dar Feedback'}</span>
    </button>
  );
}

export function RepoButton() {
  return (
    <a
      className="repo-fab"
      href={REPO_URL}
      target="_blank"
      rel="noopener noreferrer"
      title="Ver código-fonte no GitHub (abre em nova aba)"
      aria-label="Ver repositório no GitHub (abre em nova aba)"
    >
      <svg className="repo-fab-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
      <span className="repo-fab-text">GitHub</span>
    </a>
  );
}
