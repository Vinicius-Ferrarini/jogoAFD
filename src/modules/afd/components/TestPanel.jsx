// ─── TestPanel: barra lateral direita (testar palavras + validar AFD) ────────
import './TestPanel.css';
// Input de nova palavra, lista de testes (menor/aceita/rejeitada), botão de
// simulação e botão de validação. CSS: .test-panel / .word-* em AFDPart1.css.
export default function TestPanel({
  currentLevel, newWord, setNewWord, handleTestWord,
  isDrawingUnlocked, openSimulation, testWords, validateAFD, clearTests,
}) {
  return (
    <aside className="test-panel">
      <div className="section-header" style={{ fontSize:11 }}>Palavras aceitas pela linguagem</div>

      <div className="test-input-area">
        <input
          type="text"
          className="word-input"
          placeholder={currentLevel?.shortestWord === null ? "Digite 'null'..." : "Nova palavra..."}
          value={newWord}
          onChange={e => setNewWord(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleTestWord()}
          translate="no"
          spellCheck={false}
          autoCorrect="off"
          autoCapitalize="off"
        />
        <button className="add-test-btn" onClick={handleTestWord}>+</button>
        <button className="add-test-btn clear-test-btn" title="Limpar palavra e histórico"
          disabled={testWords.length === 0 && newWord === ''}
          onClick={clearTests}
          style={{ opacity: testWords.length === 0 && newWord === '' ? 0.5 : 1 }}>🧹</button>
      </div>

      {isDrawingUnlocked && (
        <button className="simulate-btn" onClick={openSimulation}>🔬 Simular</button>
      )}

      <div className="words-list">
        {testWords.map((item, idx) => (
          <div key={idx} className={`word-row ${item.status}`}>
            <span>{item.word}</span>
            <span>{item.status==='shortest'?'★ MENOR':item.status==='correct'?'✓':item.status==='wrong'?'✕':''}</span>
          </div>
        ))}
      </div>

      {isDrawingUnlocked && (
        <button className="validate-btn slide-up-fade" onClick={validateAFD}>
          Validar Desenho do AFD
        </button>
      )}
    </aside>
  );
}
