// ─── balloonFit.js — estimador de "cabe no balão de fala do Maurílio?" ───────
// Os balões de fala (imagem redonda balao_fala_redondo.webp) têm tamanho
// FIXO durante a Aula Guiada — se o texto autoral for longo demais, ele
// transborda visualmente pra fora do desenho do balão (achado real: L14 de
// AFD Parte 1, passo 1 da aula — ver a conversa/commit que introduziu isto).
//
// Sem DOM/Canvas disponível (roda via vite-node, fora do browser), então isto
// é uma ESTIMATIVA por word-wrap com largura média de caractere calibrada
// visualmente contra o caso real do L14 — não é pixel-perfect. Serve pra
// TRIAGEM (achar candidatos a revisar), não como juiz definitivo — casos
// perto do limite merecem conferir no jogo de verdade antes de decidir.
const AVG_CHAR_WIDTH_RATIO = 0.55; // fração do font-size — fonte bold estilo Comic Sans/Comic Neue

// Remove tags HTML mas preserva quebras de linha explícitas (<br/>, <br>) —
// o texto dentro de tags de formatação (<b>, <u> etc.) é mantido, só a tag
// em si é descartada.
export function stripToPlainText(html) {
  if (!html) return '';
  return html
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/?[a-z][^>]*>/gi, '')
    .replace(/&nbsp;/gi, ' ')
    .trim();
}

// Word-wrap guloso de 1 parágrafo (sem quebras de linha internas) — soma a
// largura de cada palavra (+ 1 "espaço") e quebra a linha quando estoura
// maxWidthPx, igual ao comportamento real de wrap por palavra do navegador.
function wrapParagraph(paragraph, maxWidthPx, charWidthPx) {
  const words = paragraph.split(/\s+/).filter(Boolean);
  if (words.length === 0) return 0;
  let lines = 1;
  let lineWidth = 0;
  for (const word of words) {
    const wordWidth = word.length * charWidthPx;
    const addWidth = lineWidth === 0 ? wordWidth : wordWidth + charWidthPx;
    if (lineWidth > 0 && lineWidth + addWidth > maxWidthPx) {
      lines += 1;
      lineWidth = wordWidth;
    } else {
      lineWidth += addWidth;
    }
  }
  return lines;
}

export function estimateWrappedLines(text, { contentWidth, fontSize, avgCharWidthRatio = AVG_CHAR_WIDTH_RATIO }) {
  const plain = stripToPlainText(text);
  if (!plain) return 0;
  const charWidthPx = fontSize * avgCharWidthRatio;
  return plain.split('\n').reduce((sum, p) => sum + wrapParagraph(p, contentWidth, charWidthPx), 0);
}

// balloon: { contentWidth, contentHeight, fontSize, lineHeightRatio, avgCharWidthRatio? }
// contentWidth/contentHeight já devem ser a ÁREA ÚTIL (largura/altura do
// balão MENOS padding), não o tamanho externo do balão.
export function fitsInBalloon(text, balloon) {
  const { contentWidth, contentHeight, fontSize, lineHeightRatio = 1.3, avgCharWidthRatio } = balloon;
  const lineHeightPx = fontSize * lineHeightRatio;
  const linesNeeded = estimateWrappedLines(text, { contentWidth, fontSize, avgCharWidthRatio });
  const linesAvailable = Math.floor(contentHeight / lineHeightPx);
  return {
    fits: linesNeeded <= linesAvailable,
    linesNeeded,
    linesAvailable,
    heightNeeded: Math.round(linesNeeded * lineHeightPx),
    contentHeight,
  };
}

// Presets medidos do CSS real de cada balão (contentWidth/Height = tamanho do
// balão menos padding). Ver o CSS fonte de cada um para conferir/atualizar:
export const BALLOON_PRESETS = {
  // AFD Parte 1: guidedLesson[].text (HTML) + level.hint (dica) —
  // FooterDeck.css .professor-balloon (220×210, padding 28/26/64,
  // align-items:flex-start — overflow visível pra baixo/fora do balão).
  afdP1: { contentWidth: 220 - 26 * 2, contentHeight: 210 - 28 - 64, fontSize: 12, lineHeightRatio: 1.3 },
  // AFD Parte 2: level.hint (dica, via openHelp) — App.css .professor-balloon
  // (200×135, padding 14/24/34, align-items:center — overflow visível pros
  // dois lados).
  afdP2: { contentWidth: 200 - 24 * 2, contentHeight: 135 - 14 - 34, fontSize: 12, lineHeightRatio: 1.3 },
  // AFD Minimização: exercise.hint — AFDMinimizer.css .min-prof-balloon
  // (220×210, padding 28/26/64, line-height:1.35 explícito no CSS).
  afdMin: { contentWidth: 220 - 26 * 2, contentHeight: 210 - 28 - 64, fontSize: 12, lineHeightRatio: 1.35 },
  // AP + MT Transdutora/Reconhecedora (via APFooterDeck compartilhado):
  // prof.message (narração) + level.hint — APPart1.css .ap-balloon
  // (250×234, padding 30/30/70, line-height:1.24 explícito, align-
  // items:center, overflow:HIDDEN — texto que não cabe é CORTADO, não só
  // transborda visualmente).
  apMt: { contentWidth: 250 - 30 * 2, contentHeight: 234 - 30 - 70, fontSize: 11.5, lineHeightRatio: 1.24 },
};
