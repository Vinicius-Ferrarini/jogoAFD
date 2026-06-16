// MainMenu.jsx – Tela inicial com branding TuringLab
import './MainMenu.css';
import imgMaurilioExplicando from '../assets/maurilio3_explicando.webp';
import { GAME_LEVELS } from '../levels';
import { EXERCISES } from '../modules/afd/AFDMinimizer';
import FeedbackButton from '../components/FeedbackButton';

const P1_MAX_STARS = GAME_LEVELS.reduce((a, l) => a + (l.impossible || l.wordOnly ? 1 : 3), 0);
const MINIMIZER_MAX_STARS = EXERCISES.reduce((a, e) => a + (e.impossible ? 1 : 3), 0);

export default function MainMenu({ onStart, progress }) {
  const totalStars = Object.values(progress).reduce((sum, p) => sum + (p.stars || 0), 0);
  const maxStars = P1_MAX_STARS + MINIMIZER_MAX_STARS;

  return (
    <div className="main-menu-wrapper">
      <div className="main-menu-bg"></div>

      {/* Maurílio no lado esquerdo */}
      <div className="main-menu-left">
        <div className="speech-bubble">
          <p>E aí, pessoal! Bem-vindos ao TuringLab!</p>
          <p className="small">Vamos dominar autômatos juntos? 🤖</p>
        </div>
        <img src={imgMaurilioExplicando} alt="Maurílio" className="maurilio-img" />
      </div>

      <div className="main-menu-content">
        {/* Logo e Título */}
        <div className="menu-logo-section">
          <h1 className="menu-title" style={{ margin: 0 }}>TuringLab</h1>
          <p className="main-subtitle">Domine Autômatos & Linguagens Formais</p>
        </div>

        {/* Progresso Global */}
        <div className="progress-section">
          <div className="progress-badge">
            <div className="progress-circle">
              <svg width="100" height="100" style={{ transform: 'rotate(-90deg)' }}>
                <circle cx="50" cy="50" r="38" className="progress-bg" />
                <circle
                  cx="50"
                  cy="50"
                  r="38"
                  className="progress-fill"
                  style={{
                    strokeDashoffset: 239 * (1 - totalStars / maxStars),
                    strokeDasharray: 239,
                  }}
                />
              </svg>
              <div className="progress-text">
                <div className="progress-pct">{Math.round((totalStars / maxStars) * 100)}%</div>
                <div className="progress-label">{totalStars}/{maxStars} ⭐</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="cta-section">
          <button className="cta-btn primary" onClick={onStart}>
            🚀 Começar Aventura
          </button>
          <div className="cta-hint">
            {totalStars === 0 ? 'Primeira vez? Vamos começar!' : `Você conquistou ${totalStars} ⭐. Continue!`}
          </div>
        </div>

        {/* Footer */}
        <div className="menu-footer">
          <p>🔬 Iniciação Científica | Teoria da Computação</p>
        </div>
      </div> {/* fim main-menu-content */}

      {/* Botão flutuante de feedback (position:fixed — não afeta o layout) */}
      <FeedbackButton />
    </div>
  );
}
