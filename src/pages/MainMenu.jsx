// MainMenu.jsx – Tela inicial com branding TuringLab
import { useState, useEffect } from 'react';
import './MainMenu.css';
import imgMaurilioExplicando from '../assets/maurilio3_explicando.webp';
import { LEVEL_IDS, UNAVAILABLE_LEVELS } from '../levels';
import FeedbackButton, { RepoButton } from '../components/FeedbackButton';

const LAST_COMMIT_CACHE_KEY = 'turinglab_last_commit_cache';
const LAST_COMMIT_CACHE_TTL = 60 * 60 * 1000; // 1h — evita bater no rate-limit do GitHub (60 req/h sem auth)

function buildLastCommitState(raw) {
  const d = new Date(raw);
  const pad = n => String(n).padStart(2, '0');
  const now = new Date();
  return {
    isToday:
      d.getDate() === now.getDate() &&
      d.getMonth() === now.getMonth() &&
      d.getFullYear() === now.getFullYear(),
    label: `Última atualização: ${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()} às ${pad(d.getHours())}:${pad(d.getMinutes())}`,
  };
}

function useLastCommitDate() {
  const [label, setLabel] = useState(null);
  const [isToday, setIsToday] = useState(false);

  useEffect(() => {
    let cached = null;
    try { cached = JSON.parse(localStorage.getItem(LAST_COMMIT_CACHE_KEY) || 'null'); } catch { /* ignore */ }

    if (cached?.raw) {
      const { label, isToday } = buildLastCommitState(cached.raw);
      setLabel(label);
      setIsToday(isToday);
    }

    // Cache ainda fresco: não bate na API de novo (economiza o limite de 60 req/h sem auth).
    if (cached?.fetchedAt && Date.now() - cached.fetchedAt < LAST_COMMIT_CACHE_TTL) return;

    fetch('https://api.github.com/repos/Vinicius-Ferrarini/jogoAFD/commits?per_page=1')
      .then(r => r.ok ? r.json() : Promise.reject())
      .then(([commit]) => {
        const raw = commit?.commit?.author?.date;
        if (!raw) return;
        try {
          localStorage.setItem(LAST_COMMIT_CACHE_KEY, JSON.stringify({ raw, fetchedAt: Date.now() }));
        } catch { /* ignore (ex.: storage cheio/privado) */ }
        const { label, isToday } = buildLastCommitState(raw);
        setLabel(label);
        setIsToday(isToday);
      })
      // Falhou (ex.: rate-limit 403): mantém o valor em cache já aplicado acima, se houver.
      .catch(() => {});
  }, []);

  return { label, isToday };
}

const AVAILABLE_AFD_LEVEL_IDS = LEVEL_IDS.filter(id => !UNAVAILABLE_LEVELS.has(id));
// AFD_1 e AFD_2 usam os mesmos níveis disponíveis, com progresso separado
const P1P2_MAX_STARS    = AVAILABLE_AFD_LEVEL_IDS.length * 3 * 2;
const MINIMIZER_MAX_STARS = 42; // 14 exercícios × 3
const AP_MAX_STARS        = 45; // 15 níveis × 3 (L16 impossível excluído)
const GRAND_MAX_STARS     = P1P2_MAX_STARS + MINIMIZER_MAX_STARS + AP_MAX_STARS;

export default function MainMenu({ onStart, progress, onFeedback, feedbackResponded }) {
  const { label: lastCommit, isToday: lastCommitIsToday } = useLastCommitDate();
  const p2Progress = (() => {
    try { return JSON.parse(localStorage.getItem('turinglab_progress_p2') || '{}'); }
    catch { return {}; }
  })();
  const p2Earned   = AVAILABLE_AFD_LEVEL_IDS.reduce((s, id) => s + (p2Progress[id]?.stars || 0), 0);
  const totalStars = Object.values(progress).reduce((sum, p) => sum + (p.stars || 0), 0) + p2Earned;
  const maxStars   = GRAND_MAX_STARS;

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
          {lastCommit && (
            <p id="last-commit-date" className="last-commit-date">
              {lastCommit}
              {lastCommitIsToday && (
                <span className="last-commit-today-flag">Hoje</span>
              )}
            </p>
          )}
        </div>
      </div> {/* fim main-menu-content */}

      {/* Botões flutuantes (position:fixed — não afeta o layout) */}
      <RepoButton />
      <FeedbackButton onOpen={onFeedback} responded={feedbackResponded} />
    </div>
  );
}
