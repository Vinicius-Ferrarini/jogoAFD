// ─── useAutoZoom: compensa telas mais largas que a referência de design ──────
// O jogo inteiro foi desenhado (px fixos, sem unidades fluidas) contra uma
// janela de referência de ~1366px de largura — é o tamanho em que tudo "cabe
// certo" com o navegador em 100% de zoom. Em monitores maiores (achado real:
// 1920×1080 com escala do Windows, window.innerWidth relatado = 1853px), o
// mesmo layout fica pequeno/distante no meio de uma tela bem mais larga — o
// usuário confirmou que dar zoom manual de 133% no navegador (o que equivale
// a encolher a viewport EFETIVA de volta pra perto de 1366px) resolve.
//
// Este hook faz esse ajuste automaticamente: aplica `zoom` no <html>
// proporcional a window.innerWidth / REFERENCE_WIDTH. Achado real testando
// (Chromium): ao contrário do zoom MANUAL do usuário (ctrl +/-),
// `element.style.zoom` NÃO altera window.innerWidth/innerHeight — o
// navegador continua reportando o viewport físico real, sem realimentar a
// própria mudança. Por isso este hook pode ler innerWidth diretamente a
// cada chamada, sem precisar compensar/descontar um zoom já aplicado
// anteriormente (uma 1ª versão fazia essa compensação por engano, o que
// causava um loop: cada re-cálculo multiplicava pelo zoom da vez anterior
// até bater no teto).
//
// Nunca ENCOLHE abaixo de 100% (min 1) — janelas mais estreitas que a
// referência já usam os breakpoints existentes (ex.: @media max-height:640px
// em App.css), não é escopo deste hook mexer nisso. Teto em 1.6 pra não
// exagerar em monitores muito largos/4K.
//
// Sem otimização de "só escreve se mudou": em StrictMode (dev) o efeito roda
// 2x (monta→limpa→monta) e uma otimização baseada em ref ficava dessincro-
// nizada com a limpeza (a 2ª aplicação via achava que já estava aplicado e
// pulava, deixando o zoom vazio de verdade no fim) — escrever sempre é
// idempotente e barato o bastante pra não precisar dessa otimização.
import { useEffect } from 'react';

const REFERENCE_WIDTH = 1366;
const MIN_ZOOM = 1;
const MAX_ZOOM = 1.6;

export default function useAutoZoom() {
  useEffect(() => {
    // navegadores sem suporte a `zoom` (ex.: Firefox antes da v126) — noop
    // seguro: document.documentElement.style.zoom simplesmente não faz nada.
    const apply = () => {
      const raw = window.innerWidth / REFERENCE_WIDTH;
      const next = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, raw));
      document.documentElement.style.zoom = next > 1 ? String(next) : '';
    };

    apply();
    window.addEventListener('resize', apply);
    return () => {
      window.removeEventListener('resize', apply);
      document.documentElement.style.zoom = '';
    };
  }, []);
}
