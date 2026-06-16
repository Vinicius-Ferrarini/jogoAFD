// ─── FeedbackButton: botão flutuante de feedback (link p/ Google Forms) ──────
// Componente compartilhado, usado na Tela Inicial (MainMenu) e na Seleção de
// Módulos (App > ModuleSelection). É um <a> estilizado como FAB (position:fixed),
// abre o formulário em nova aba com os atributos de segurança recomendados.
import './FeedbackButton.css';

const FEEDBACK_URL = 'https://forms.gle/TNRFwncLeC39o9WP8';

export default function FeedbackButton() {
  return (
    <a
      className="feedback-fab"
      href={FEEDBACK_URL}
      target="_blank"
      rel="noopener noreferrer"
      title="Abrir formulário de feedback (abre em nova aba)"
      aria-label="Dar feedback (abre em nova aba)"
    >
      <span className="feedback-fab-icon" aria-hidden="true">💡</span>
      <span className="feedback-fab-text">Dar Feedback</span>
    </a>
  );
}
