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
//
// Componente de apresentação puro: a mecânica (digitação, estágio de dica) vem
// de fora via useWordGuessGame (ver src/modules/shared/) — este componente só
// desenha, não decide regra. É reutilizado tanto pela fase AFD-L08 quanto pelo
// minigame standalone "Menor Palavra" (ver docs/MENOR_PALAVRA_MINIGAME.md).
import { useEffect, useRef, useState } from 'react';
import { buildLetterFeedback } from '../utils/wordleFeedback';
import { distinctLetters } from '../../shared/wordGuessLogic';

const STATUS_STYLE = {
  correct: { background: 'var(--accent-green)', color: '#000' },
  present: { background: '#fbbf24', color: '#000' },
  absent:  { background: '#9ca3af', color: '#fff' },
  empty:   { background: '#fff', color: '#000' },
};

// Keyframes do flip embutidas no próprio componente (não num .css externo) —
// WordleBoard é reusado pelo minigame standalone "Menor Palavra", que não
// importa AFDPart1.css, então a animação precisa viajar junto com o componente
// para funcionar nos dois lugares sem depender de qual tela carregou primeiro.
const FLIP_STYLE_ID = 'wordle-board-flip-keyframes';
function ensureFlipKeyframes() {
  if (typeof document === 'undefined' || document.getElementById(FLIP_STYLE_ID)) return;
  const style = document.createElement('style');
  style.id = FLIP_STYLE_ID;
  style.textContent = `
@keyframes wordleCellFlip {
  0%   { transform: rotateX(0deg); }
  50%  { transform: rotateX(90deg); }
  100% { transform: rotateX(0deg); }
}`;
  document.head.appendChild(style);
}

// flipDelayMs: null = sem animação (linhas já antigas, renderizadas direto no
// estado final). Um número = anima o flip, trocando de 'empty' pro status real
// na metade do giro (90°, quando a carta está "de perfil" e o conteúdo não é
// visível) — igual ao Termo/Wordle: vira, e só do outro lado revela a cor.
function Cell({ letter, status, flipDelayMs }) {
  // Captura flipDelayMs SÓ na montagem (useState com inicializador lazy) — o
  // pai (isNewRow) volta a `null` assim que 'vê' a tentativa nova (1 render
  // depois, via useEffect), mas a animação ainda está no ar; se a prop fosse
  // lida ao vivo a cada render, o CSS `animation` sumiria do meio do giro e
  // cortaria o flip. Uma vez decidido "essa linha vai animar", isso não muda
  // mais durante o ciclo de vida deste Cell.
  const [ownDelay] = useState(flipDelayMs);
  const animate = ownDelay != null;
  const [revealed, setRevealed] = useState(!animate);
  useEffect(() => {
    if (!animate) return;
    const t = setTimeout(() => setRevealed(true), ownDelay + 250); // metade dos 500ms do flip
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const style = STATUS_STYLE[revealed ? status : 'empty'] ?? STATUS_STYLE.empty;
  return (
    <div style={{
      width: 34, height: 34,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      border: '3px solid #000', borderRadius: 6,
      fontWeight: 900, fontSize: 16,
      boxShadow: '2px 2px 0 #000',
      ...(animate ? { animation: `wordleCellFlip 500ms ease ${ownDelay}ms both` } : null),
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

// attempts: lista de tentativas JÁ TESTADAS nessa fase, MAIS RECENTE PRIMEIRO
// (mesma convenção de testWords/attempts nos chamadores) — o componente é quem
// inverte pra exibir (mais antiga em cima, mais recente embaixo, como o Termo).
// cada uma no formato { word } (a mesma string comparada contra shortestWord).
// targetLength: tamanho da menor palavra (número de células por linha).
// hintStage: 0 = sem linha de dica (só o histórico de tentativas, se houver
// alguma), 1 = linha de dica clicável com bordas vazias (tamanho), 2 = mesma
// linha clicável + texto fixo com as letras distintas da palavra (sem posição).
// guess: string da tentativa em digitação (controlado de fora — no AFD-P1 é o
// mesmo 'newWord' do TestPanel). typeAt/backspaceAt: callbacks do hook
// useWordGuessGame que produzem o próximo guess. onSubmit: chamado quando a
// última célula é preenchida (equivalente a apertar Testar/Enter).
export default function WordleBoard({
  attempts, targetLength, shortestWord, hintStage = 0,
  guess = '', typeAt, backspaceAt, onSubmit,
}) {
  useEffect(ensureFlipKeyframes, []);
  const inputRefs = useRef([]);

  // attempts chega mais-recente-primeiro; exibimos mais-antiga-em-cima (Termo).
  // A tentativa nova (attempts[0]) é sempre a última linha, e é a única que
  // recebe animação de flip — as demais (já vistas em renders anteriores) só
  // continuam existindo, sem refazer o efeito visual.
  const ordered = attempts.slice().reverse();
  // Começa em attempts.length (não 0): se o board monta já com histórico (ex.:
  // reabrir a fase depois de testar palavras antes), nada deve animar — só uma
  // tentativa nova de verdade, adicionada DEPOIS da montagem, dispara o flip.
  // Precisa ser um useEffect (roda DEPOIS do commit/paint) — ajustar durante o
  // render faria o React descartar o frame com isNewRow=true antes da tela
  // chegar a pintá-lo, e o flip nunca apareceria.
  const [seenCount, setSeenCount] = useState(attempts.length);
  const isNewRow = ordered.length > seenCount;
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSeenCount(attempts.length);
  }, [attempts.length]);

  const letterAt = (i) => guess[i] ?? '';

  // Dispara o teste quando a grade fica completa. Fica num efeito (em vez de
  // dentro do handler de digitação) para garantir que onSubmit já seja a
  // versão mais atual — handleTestWord (no orquestrador) é recriado a cada
  // mudança de 'guess'/'newWord', então a prop só fica "fresca" depois do
  // render que segue a digitação.
  const submittedForRef = useRef('');
  useEffect(() => {
    if (targetLength > 0 && guess.length === targetLength && submittedForRef.current !== guess) {
      submittedForRef.current = guess;
      onSubmit?.();
    }
  }, [guess, targetLength, onSubmit]);

  // Mantém o foco sempre na célula ativa (próxima livre): ao abrir o board,
  // ao digitar, ao apagar, e também depois de um submit — quando handleTestWord
  // limpa 'guess' de volta para '', a célula antiga (agora fora do índice
  // ativo) vira readOnly e para de aceitar teclas, então sem isto o aluno
  // ficaria "digitando no vazio" após a 1ª tentativa.
  useEffect(() => {
    if (hintStage > 0) inputRefs.current[Math.min(guess.length, targetLength - 1)]?.focus();
  }, [hintStage, guess, targetLength]);

  const hintLetters = hintStage >= 2 && shortestWord ? distinctLetters(shortestWord) : null;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
      {ordered.map((attempt, idx) => {
        const word = attempt.word === 'λ' ? '' : attempt.word;
        // Quando a linguagem aceita mais de uma menor palavra do mesmo tamanho
        // (ex.: L24 "w tem tamanho 3" — 000..111 são todas corretas), comparar
        // letra-a-letra contra o shortestWord fixo pintaria uma resposta certa
        // como errada. status==='shortest' já veio validado pelo chamador
        // (checkWord + comprimento) — nesse caso a linha é sempre 100% verde.
        const feedback = attempt.status === 'shortest'
          ? new Array(word.length).fill('correct')
          : buildLetterFeedback(word, shortestWord) ?? [];
        const isLastRow = idx === ordered.length - 1;
        return (
          <div key={attempt.word} style={{ display: 'flex', gap: 5 }}>
            {Array.from({ length: targetLength }, (_, i) => (
              <Cell
                key={i}
                letter={word[i]}
                status={feedback[i] ?? 'empty'}
                flipDelayMs={isLastRow && isNewRow ? i * 220 : null}
              />
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
              onType={typeAt}
              onBackspace={backspaceAt}
              inputRef={el => { inputRefs.current[i] = el; }}
            />
          ))}
        </div>
      )}
      {hintLetters && (
        <div style={{ color: '#fff', fontWeight: 'bold', fontSize: 13, textAlign: 'center' }}>
          Letras da menor palavra: [{hintLetters.join(', ')}]
        </div>
      )}
    </div>
  );
}
