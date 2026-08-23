// Estilos dos botões de navegação ◀/▶ do cabeçalho de fase — compartilhados por
// GameHeader (AFD/AP/MT), ExerciseScreen (AFD_2) e MinGame (Minimização), que
// antes duplicavam este mesmo objeto.
export const navBtnStyle = {
  padding: '2px 8px', fontSize: 13, fontWeight: 900,
  background: '#fff', color: '#000', border: '2px solid #000', borderRadius: 6,
  cursor: 'pointer', boxShadow: '2px 2px 0 #000',
  fontFamily: 'var(--font-comic)', lineHeight: 1.2,
};
export const navBtnDisabledStyle = { ...navBtnStyle, opacity: 0.35, cursor: 'not-allowed', boxShadow: 'none' };
