// ─── WordleBoard: grade de tentativas estilo Wordle/Termo ─────────────────────
// Cada tentativa já testada vira uma linha colorida por letra (verde=correta,
// amarelo=existe em posição errada, cinza=não existe/sobra esgotada — ver
// wordleFeedback.js). A "linha de dica" (última, sempre por baixo) só aparece
// quando o aluno pede via botão 💡: hintStage 0 = nada (board não é nem
// montado pelo chamador), 1 = células vazias e CLICÁVEIS — o aluno digita a
// tentativa direto ali (revela o TAMANHO), 2 = mesmas células clicáveis mais
// um texto fixo abaixo com o conjunto de letras distintas da palavra, em
// ordem alfabética (revela quais letras existem, não a ordem nem preenche
// a grade sozinho — o aluno ainda precisa digitar pra descobrir a posição).
import { useEffect, useRef } from 'react';
import { buildLetterFeedback } from '../utils/wordleFeedback';

const STATUS_STYLE = {
  correct: { background: 'var(--accent-green)', color: '#000' },
  present: { background: '#fbbf24', color: '#000' },
  absent:  { background: '#9ca3af', color: '#fff' },
  empty:   { background: '#fff', color: '#000' },
};

function Cell({ letter, status }) {
  const style = STATUS_STYLE[status] ?? STATUS_STYLE.empty;
  return (
    <div style={{
      width: 34, height: 34,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      border: '3px solid #000', borderRadius: 6,
      fontWeight: 900, fontSize: 16,
      boxShadow: '2px 2px 0 #000',
      ...style,
    }}>
      {letter === '' ? '' : letter === undefined ? '' : (letter === 'λ' ? '' : letter)}
    </div>
  );
}

// Uma célula da linha de dica: input de 1 caractere, foco avança sozinho.
// Só a próxima célula livre (index === guess.length) aceita digitação —
// clicar em outra célula apenas focaliza, sem deslocar as letras já escritas.
function GuessCell({ index, value, active, onType, onBackspace, inputRef }) {
  return (
    <input
      ref={inputRef}
      type="text"
      inputMode="text"
      value={value ?? ''}
      maxLength={1}
      translate="no"
      spellCheck={false}
      autoCorrect="off"
      autoCapitalize="off"
      readOnly={!active}
      onKeyDown={e => {
        if (e.key === 'Backspace') { e.preventDefault(); onBackspace(index); return; }
        if (!active) return;
        if (e.key.length === 1 && /[a-zA-Z0-9]/.test(e.key)) {
          e.preventDefault();
          onType(index, e.key.toLowerCase());
        }
      }}
      onChange={() => { /* digitação tratada em onKeyDown; evita input não controlado */ }}
      style={{
        width: 34, height: 34,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        border: '3px solid #000', borderRadius: 6,
        fontWeight: 900, fontSize: 16, textAlign: 'center',
        boxShadow: '2px 2px 0 #000',
        background: '#fff', color: '#000', padding: 0,
        cursor: active ? 'text' : 'default',
      }}
    />
  );
}

// attempts: lista de tentativas JÁ TESTADAS nessa fase, mais antiga primeiro,
// cada uma no formato { word } (a mesma string comparada contra shortestWord).
// targetLength: tamanho da menor palavra (número de células por linha).
// hintStage: 0 = sem linha de dica (só o histórico de tentativas, se houver
// alguma), 1 = linha de dica clicável com bordas vazias (tamanho), 2 = mesma
// linha clicável + texto fixo com as letras distintas da palavra (sem posição).
// guess/setGuess: string da tentativa em digitação (mesmo estado do TestPanel,
// 'newWord'/'setNewWord') — as células escrevem direto nela. onSubmit: chamado
// quando a última célula é preenchida (equivalente a apertar Testar/Enter).
export default function WordleBoard({
  attempts, targetLength, shortestWord, hintStage = 0,
  guess = '', setGuess, onSubmit,
}) {
  const inputRefs = useRef([]);

  // guess é sempre um prefixo contíguo sem buracos (como no Wordle real):
  // só dá para digitar na próxima célula livre e apagar a última preenchida.
  const letterAt = (i) => guess[i] ?? '';

  const handleTypeAt = (i, ch) => {
    if (!ch) return;
    if (i !== guess.length) return; // só a próxima célula livre aceita digitação
    const next = (guess + ch).slice(0, targetLength);
    setGuess?.(next);
    if (next.length < targetLength) {
      inputRefs.current[next.length]?.focus();
    }
  };

  // Dispara o teste quando a grade fica completa. Fica num efeito (em vez de
  // um setTimeout no próprio handler de digitação) para garantir que onSubmit
  // já seja a versão mais atual — handleTestWord (no orquestrador) é recriado
  // a cada mudança de 'guess'/'newWord', então a prop só fica "fresca" depois
  // do render que segue o setGuess acima.
  const submittedForRef = useRef('');
  useEffect(() => {
    if (guess.length === targetLength && submittedForRef.current !== guess) {
      submittedForRef.current = guess;
      onSubmit?.();
    }
  }, [guess, targetLength, onSubmit]);

  const handleBackspace = (i) => {
    if (i === guess.length - 1) {
      // Apagando a última letra preenchida: remove e mantém o foco nela.
      setGuess?.(guess.slice(0, -1));
    } else if (i === guess.length) {
      // Célula vazia após a última preenchida: Backspace volta e apaga aquela.
      setGuess?.(guess.slice(0, -1));
      inputRefs.current[i - 1]?.focus();
    }
  };

  // Mantém o foco sempre na célula ativa (próxima livre): ao abrir o board,
  // ao digitar, ao apagar, e também depois de um submit — quando handleTestWord
  // limpa 'guess' de volta para '', a célula antiga (agora fora do índice
  // ativo) vira readOnly e para de aceitar teclas, então sem isto o aluno
  // ficaria "digitando no vazio" após a 1ª tentativa.
  useEffect(() => {
    if (hintStage > 0) inputRefs.current[Math.min(guess.length, targetLength - 1)]?.focus();
  }, [hintStage, guess, targetLength]);

  const distinctLetters = hintStage >= 2 && shortestWord
    ? [...new Set(shortestWord.split(''))].filter(c => c !== 'λ').sort()
    : null;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
      {attempts.map((attempt, rowIdx) => {
        const word = attempt.word === 'λ' ? '' : attempt.word;
        const feedback = buildLetterFeedback(word, shortestWord) ?? [];
        return (
          <div key={rowIdx} style={{ display: 'flex', gap: 5 }}>
            {Array.from({ length: targetLength }, (_, i) => (
              <Cell key={i} letter={word[i]} status={feedback[i] ?? 'empty'} />
            ))}
          </div>
        );
      })}
      {/* Linha de dica: só existe se o aluno pediu (hintStage > 0). Clicável. */}
      {hintStage > 0 && (
        <div style={{ display: 'flex', gap: 5 }}>
          {Array.from({ length: targetLength }, (_, i) => (
            <GuessCell
              key={i}
              index={i}
              value={letterAt(i)}
              active={i === guess.length}
              onType={handleTypeAt}
              onBackspace={handleBackspace}
              inputRef={el => { inputRefs.current[i] = el; }}
            />
          ))}
        </div>
      )}
      {distinctLetters && (
        <div style={{ color: '#fff', fontWeight: 'bold', fontSize: 13, textAlign: 'center' }}>
          Letras da menor palavra: [{distinctLetters.join(', ')}]
        </div>
      )}
    </div>
  );
}
