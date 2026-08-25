// ─── LevelGridScreen: moldura compartilhada das telas de grade de fases ──────
// Antes duplicada em AFD_1 (LevelMenu), AFD_2 (LevelList), Minimização, AP,
// MT Reconhecedora/Transdutora e no menu do BossMode. Aqui centralizamos só a
// MOLDURA (wrapper + cabeçalho Voltar/TuringLab + chip do módulo + linha de
// progresso + container da grade + paginação opcional + legenda). Os "azulejos"
// (botões de cada fase) continuam sendo montados por cada tela e passados como
// `children` — porque a lógica de cada tile difere de verdade (cadeado de fase
// indisponível, "🚫 só MT", nº de estrelas máximo, cor por dificuldade/módulo).
//
// Props:
//   onBack      — callback do botão "⬅ Voltar".
//   badge       — conteúdo do chip do módulo (ex.: '🎨 Desenhar & Formalizar').
//   badgeBg     — cor de fundo do chip.
//   totalStars  — estrelas conquistadas (numerador do progresso).
//   maxStars    — estrelas possíveis (denominador do progresso).
//   extraClass  — classe extra no wrapper (ex.: 'min-screen'); opcional.
//   pagination  — { page, totalPages, setPage } → mostra os botões ◀/▶; opcional
//                 (só AFD_1 e AFD_2 paginam).
//   loading     — se true, mostra `loadingText` no lugar da grade (MT carrega os
//                 níveis async); opcional.
//   loadingText — texto do placeholder de loading (default "Carregando níveis…").
//   legendKeys  — chaves passadas ao <DifficultyLegend/>; opcional.
//   footer      — nó extra após a grade (ex.: legenda de módulos do Boss); opcional.
//   children    — os botões de fase (vão dentro de .levels-grid).
import { DifficultyLegend } from '../SvgStar';

export default function LevelGridScreen({
  onBack, badge, badgeBg, totalStars, maxStars, extraClass,
  pagination, loading, loadingText = 'Carregando níveis…',
  legendKeys, footer, children,
}) {
  const pct = maxStars > 0 ? Math.round((totalStars / maxStars) * 100) : 0;
  return (
    <div className={`menu-screen menu-screen-fases${extraClass ? ` ${extraClass}` : ''}`}
      style={{ justifyContent: 'flex-start', paddingTop: 20 }}>
      <div className="nav-header">
        <button className="back-btn" onClick={() => onBack?.()}>⬅ Voltar</button>
        <h1 className="menu-title" style={{ margin: 0 }}>TuringLab</h1>
        <div style={{ flex: 1 }} />
      </div>
      <p style={{ fontWeight: 900, fontSize: 16, color: '#555', marginBottom: 12,
        background: badgeBg, border: '3px solid #000', borderRadius: 8,
        padding: '4px 16px', boxShadow: '3px 3px 0 #000' }}>
        {badge}
      </p>
      <div style={{ marginBottom: 18, fontWeight: 'bold', fontSize: 16 }}>
        Progresso: {pct}% ({totalStars}/{maxStars} ★)
      </div>
      {loading
        ? <div style={{ fontWeight: 900, color: '#888', padding: 24, textAlign: 'center' }}>{loadingText}</div>
        : <div className="levels-grid">{children}</div>}
      {pagination && (
        <div style={{ display: 'flex', gap: 20, alignItems: 'center', marginTop: 20 }}>
          <button className="menu-btn" disabled={pagination.page === 1}
            onClick={() => pagination.setPage(p => p - 1)}
            style={{ opacity: pagination.page === 1 ? 0.5 : 1 }}>⬅ Anterior</button>
          <span style={{ fontWeight: 'bold', fontSize: 18, background: '#fff',
            padding: '5px 15px', border: '3px solid #000', borderRadius: 8 }}>
            {pagination.page} / {pagination.totalPages}
          </span>
          <button className="menu-btn" disabled={pagination.page === pagination.totalPages}
            onClick={() => pagination.setPage(p => p + 1)}
            style={{ opacity: pagination.page === pagination.totalPages ? 0.5 : 1 }}>Próxima ➡</button>
        </div>
      )}
      {legendKeys && <DifficultyLegend keys={legendKeys} />}
      {footer}
    </div>
  );
}
