// ProfessorMaurilio — HUD inferior direito (balão de fala reativo).
// Usa classes próprias (min-prof-*) definidas em AFDMinimizer.css para NÃO
// depender das classes globais .professor-* (que têm definições conflitantes
// entre App.css e FooterDeck.css e posicionam errado fora do AFDPart1).
// `mood` escolhe a imagem; não há asset "feliz", então reaproveita "explicando".
import imgSerio      from '../../../assets/maurilio1_serio.webp';
import imgExplicando from '../../../assets/maurilio3_explicando.webp';
import imgBalaoFala  from '../../../assets/balao_fala_redondo.webp';

const MOOD_IMG = {
  serio:      imgSerio,
  explicando: imgExplicando,
  feliz:      imgExplicando, // sem asset dedicado; reutiliza "explicando"
};

export default function ProfessorMaurilio({ message = '', mood = 'serio', onClick }) {
  return (
    <div className="min-prof-hud">
      {message && (
        <div className="min-prof-balloon">
          <img src={imgBalaoFala} alt="" />
          <div className="min-prof-balloon-text">{message}</div>
        </div>
      )}
      <img
        src={MOOD_IMG[mood] ?? imgSerio}
        alt="Professor Maurílio"
        className="min-prof-img"
        onClick={onClick}
      />
    </div>
  );
}
