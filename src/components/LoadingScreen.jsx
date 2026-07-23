// ─── LoadingScreen: fallback do <Suspense> ao baixar o chunk de um módulo ────
// Estilo neo-brutalista/gibi consistente com o resto do jogo (ver App.css) —
// substitui o antigo "Carregando..." sem estilo. Sem % de progresso real: o
// browser não expõe bytes baixados de um chunk via import() de forma
// confiável, então uma barra "subindo de verdade" seria enganosa.
import './LoadingScreen.css';

export default function LoadingScreen() {
  return (
    <div className="loading-screen">
      <div className="loading-card">
        <div className="loading-spinner" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <p className="loading-text">Carregando...</p>
      </div>
    </div>
  );
}
