import { useState } from 'react';

const CHEAT_SECTIONS = [
  { type: 'plain',  label: '_vazio',              color: 'yellow', items: [
      { code: 'λ', desc: 'Vazio' },
    ],
  },
  { type: 'inline', label: 'Expoentes',            color: 'blue',   items: [
      { code: 'a^n' },
    ],
  },
  { type: 'inline', label: 'Maior/maior igual',    color: 'pink',   items: [
      { code: '>' },
      { code: '>=' },
    ],
  },
  { type: 'inline', label: "Quantidade de 'a'",    color: 'orange', items: [
      { code: '|w|a' },
    ],
  },
  { type: 'inline', label: 'Pertence',             color: 'white',  items: [
      { code: '∈' },
    ],
  },
  {                 label: 'Exemplo de linguagem', color: 'orange', items: [
      { code: '{a^n | n >= 0}' },
      { code: '{w ∈ {0,1}* | w é ímpar}' },
      { code: '{a^n b c^m | n > 0 e n é ímpar}' },
      { code: '{a^n b^m w ∈ {a,b}* | n >= 0, m > 0}' },
    ],
  },
];

export default function CheatsheetPanel() {
  const [showCheatsheet, setShowCheatsheet] = useState(false);
  const [copiedIdx,      setCopiedIdx]      = useState(null);

  const copyRow = (text, key) => {
    navigator.clipboard?.writeText(text).then(() => {
      setCopiedIdx(key);
      setTimeout(() => setCopiedIdx(null), 1500);
    });
  };

  return (
    <div className="p2-blackboard-wrapper">
      <button className="p2-blackboard-btn" onClick={() => setShowCheatsheet(s => !s)}>
        🖊 {showCheatsheet ? '▲ Fechar' : '📋 Como Escrever'}
      </button>
      {showCheatsheet && (
        <div className="p2-blackboard">
          <div className="p2-bb-section-label p2-chalk-white">Sintaxe</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'max-content 1fr', alignItems: 'baseline', rowGap: 4, columnGap: 10 }}>
            {CHEAT_SECTIONS.filter(s => s.type === 'plain' || s.type === 'inline').flatMap(section => {
              const labelText = section.type === 'plain'
                ? (section.items[0]?.desc || section.label)
                : section.label;
              return [
                <span key={`lbl-${section.label}`}
                  className={`p2-chalk-${section.color} p2-chalk-dim`}
                  style={{ textAlign: 'left', fontFamily: 'Caveat,"Comic Sans MS",cursive', fontSize: 13, fontWeight: 700 }}>
                  {labelText}:
                </span>,
                <div key={`val-${section.label}`} style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {section.items.map((item, i) => {
                    const key = `${section.label}-${i}`;
                    return (
                      <code key={key} className={`p2-chalk-${section.color}`} style={{ cursor: 'pointer' }}
                        onClick={e => { e.stopPropagation(); copyRow(item.code, key); }}
                        title="Clique para copiar">
                        {item.code}{copiedIdx === key ? ' ✓' : ''}
                      </code>
                    );
                  })}
                </div>,
              ];
            })}
          </div>
          {CHEAT_SECTIONS.filter(s => !s.type).map(section => (
            <div key={section.label} className="p2-bb-section">
              <div className={`p2-bb-section-label p2-chalk-${section.color}`}>
                {section.label}
              </div>
              {section.items.map((item, i) => {
                const key = `${section.label}-${i}`;
                return (
                  <div key={key} className="p2-bb-row"
                    onClick={() => copyRow(item.code, key)}
                    title="Clique para copiar">
                    <code className={`p2-chalk-${section.color}`}>{item.code}</code>
                    <span className="p2-bb-copy">{copiedIdx === key ? '✓' : ''}</span>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
