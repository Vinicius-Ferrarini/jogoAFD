// ── MT Reconhecedora L16: {aⁿbⁿcⁿ / n > 0} ──────────────────────────────
// Gabarito importado de implementar/MT/gabaritos_oficiais/reconhecedora/L16.xml
// (verificado por fuzz contra a linguagem formal antes da conversão).

const MT_RECON_L16 = {
  id:          'MT_RECON_L16',
  label:       'L16',
  type:        'recognizer',
  level:       'hard',
  alphabet:    ["a","b","c"],
  tapeAlphabet: ["A","B","C","a","b","c","□"],
  language:    '{aⁿbⁿcⁿ / n > 0}',
  description: 'Reconheça aⁿbⁿcⁿ: três blocos do mesmo tamanho, nessa ordem (n estritamente positivo).',
  hint:        'Marque um "a", ande até achar um "b" pra marcar, depois um "c" pra marcar; repita até esgotar.',
  acceptedWords: ["abc","aabbcc","aaabbbccc"],
  rejectedWords: ["","a","ab","bc","aabbc","abbcc","aabbbcc"],
  formalDescription: {
    sigma:   '{a,b,c}',
    gamma:   '{A,B,C,a,b,c,□}',
    states:  '{q1,q2,q3,q4,q5,q6,q7,q8,q9,q10}',
    initial: 'q1',
    final:   '{q10}',
    blank:   '□',
  },

  guidedLesson: {
    steps: [
      {
        "prof": {
          "message": "Bem-vindo! Vamos construir a MT Reconhecedora da linguagem {aⁿbⁿcⁿ / n > 0}.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [],
          "transitions": []
        }
      },
      {
        "prof": {
          "message": "Vamos testar a palavra \"abc\". Começamos no estado inicial q1.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3300,
              "y": 3972,
              "isInitial": true,
              "isFinal": false
            }
          ],
          "transitions": []
        },
        "simulateWord": "abc",
        "tape": [
          "□",
          "□",
          "a",
          "b",
          "c",
          "□",
          "□"
        ],
        "head": 2,
        "activeNode": "q1"
      },
      {
        "prof": {
          "message": "Nova regra: em q1, ao ler 'a', vamos para q2, escrevemos 'A' e movemos à DIREITA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3300,
              "y": 3972,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3604,
              "y": 3857,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abc",
        "tape": [
          "□",
          "□",
          "a",
          "b",
          "c",
          "□",
          "□"
        ],
        "head": 2,
        "activeNode": "q1"
      },
      {
        "prof": {
          "message": "Executou: leu 'a', escreveu 'A' e moveu. Agora em q2.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3300,
              "y": 3972,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3604,
              "y": 3857,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abc",
        "tape": [
          "□",
          "□",
          "A",
          "b",
          "c",
          "□",
          "□"
        ],
        "head": 3,
        "activeNode": "q2"
      },
      {
        "prof": {
          "message": "Nova regra: em q2, ao ler 'b', vamos para q3, escrevemos 'B' e movemos à DIREITA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3300,
              "y": 3972,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3604,
              "y": 3857,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4023,
              "y": 3853,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abc",
        "tape": [
          "□",
          "□",
          "A",
          "b",
          "c",
          "□",
          "□"
        ],
        "head": 3,
        "activeNode": "q2"
      },
      {
        "prof": {
          "message": "Executou: leu 'b', escreveu 'B' e moveu. Agora em q3.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3300,
              "y": 3972,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3604,
              "y": 3857,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4023,
              "y": 3853,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "c",
          "□",
          "□"
        ],
        "head": 4,
        "activeNode": "q3"
      },
      {
        "prof": {
          "message": "Nova regra: em q3, ao ler 'c', vamos para q4, escrevemos 'C' e movemos à ESQUERDA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3300,
              "y": 3972,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3604,
              "y": 3857,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4023,
              "y": 3853,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4326,
              "y": 3967,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "c",
          "□",
          "□"
        ],
        "head": 4,
        "activeNode": "q3"
      },
      {
        "prof": {
          "message": "Executou: leu 'c', escreveu 'C' e moveu. Agora em q4.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3300,
              "y": 3972,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3604,
              "y": 3857,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4023,
              "y": 3853,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4326,
              "y": 3967,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "C",
          "□",
          "□"
        ],
        "head": 3,
        "activeNode": "q4"
      },
      {
        "prof": {
          "message": "Nova regra: em q4, ao ler 'B', vamos para q4, escrevemos 'B' e movemos à ESQUERDA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3300,
              "y": 3972,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3604,
              "y": 3857,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4023,
              "y": 3853,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4326,
              "y": 3967,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "C",
          "□",
          "□"
        ],
        "head": 3,
        "activeNode": "q4"
      },
      {
        "prof": {
          "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q4.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3300,
              "y": 3972,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3604,
              "y": 3857,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4023,
              "y": 3853,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4326,
              "y": 3967,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "C",
          "□",
          "□"
        ],
        "head": 2,
        "activeNode": "q4"
      },
      {
        "prof": {
          "message": "Nova regra: em q4, ao ler 'A', vamos para q1, escrevemos 'A' e movemos à DIREITA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3300,
              "y": 3972,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3604,
              "y": 3857,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4023,
              "y": 3853,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4326,
              "y": 3967,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "C",
          "□",
          "□"
        ],
        "head": 2,
        "activeNode": "q4"
      },
      {
        "prof": {
          "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q1.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3300,
              "y": 3972,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3604,
              "y": 3857,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4023,
              "y": 3853,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4326,
              "y": 3967,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "C",
          "□",
          "□"
        ],
        "head": 3,
        "activeNode": "q1"
      },
      {
        "prof": {
          "message": "Nova regra: em q1, ao ler 'B', vamos para q5, escrevemos 'B' e movemos à DIREITA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3300,
              "y": 3972,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3604,
              "y": 3857,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4023,
              "y": 3853,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4326,
              "y": 3967,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3485,
              "y": 4147,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "C",
          "□",
          "□"
        ],
        "head": 3,
        "activeNode": "q1"
      },
      {
        "prof": {
          "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q5.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3300,
              "y": 3972,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3604,
              "y": 3857,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4023,
              "y": 3853,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4326,
              "y": 3967,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3485,
              "y": 4147,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "C",
          "□",
          "□"
        ],
        "head": 4,
        "activeNode": "q5"
      },
      {
        "prof": {
          "message": "Nova regra: em q5, ao ler 'C', vamos para q6, escrevemos 'C' e movemos à DIREITA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3300,
              "y": 3972,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3604,
              "y": 3857,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4023,
              "y": 3853,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4326,
              "y": 3967,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3485,
              "y": 4147,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3719,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "C",
          "□",
          "□"
        ],
        "head": 4,
        "activeNode": "q5"
      },
      {
        "prof": {
          "message": "Executou: leu 'C', escreveu 'C' e moveu. Agora em q6.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3300,
              "y": 3972,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3604,
              "y": 3857,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4023,
              "y": 3853,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4326,
              "y": 3967,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3485,
              "y": 4147,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3719,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "C",
          "□",
          "□"
        ],
        "head": 5,
        "activeNode": "q6"
      },
      {
        "prof": {
          "message": "Nova regra: em q6, ao ler '□', vamos para q7, escrevemos '□' e movemos à ESQUERDA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3300,
              "y": 3972,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3604,
              "y": 3857,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4023,
              "y": 3853,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4326,
              "y": 3967,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3485,
              "y": 4147,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3719,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 3953,
              "y": 4145,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q6",
              "to": "q7",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "C",
          "□",
          "□"
        ],
        "head": 5,
        "activeNode": "q6"
      },
      {
        "prof": {
          "message": "Executou: leu '□', escreveu '□' e moveu. Agora em q7.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3300,
              "y": 3972,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3604,
              "y": 3857,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4023,
              "y": 3853,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4326,
              "y": 3967,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3485,
              "y": 4147,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3719,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 3953,
              "y": 4145,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q6",
              "to": "q7",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "C",
          "□",
          "□"
        ],
        "head": 4,
        "activeNode": "q7"
      },
      {
        "prof": {
          "message": "Nova regra: em q7, ao ler 'C', vamos para q7, escrevemos 'C' e movemos à ESQUERDA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3300,
              "y": 3972,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3604,
              "y": 3857,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4023,
              "y": 3853,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4326,
              "y": 3967,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3485,
              "y": 4147,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3719,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 3953,
              "y": 4145,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q6",
              "to": "q7",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "C",
          "□",
          "□"
        ],
        "head": 4,
        "activeNode": "q7"
      },
      {
        "prof": {
          "message": "Executou: leu 'C', escreveu 'C' e moveu. Agora em q7.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3300,
              "y": 3972,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3604,
              "y": 3857,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4023,
              "y": 3853,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4326,
              "y": 3967,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3485,
              "y": 4147,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3719,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 3953,
              "y": 4145,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q6",
              "to": "q7",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "C",
          "□",
          "□"
        ],
        "head": 3,
        "activeNode": "q7"
      },
      {
        "prof": {
          "message": "Nova regra: em q7, ao ler 'B', vamos para q8, escrevemos 'B' e movemos à ESQUERDA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3300,
              "y": 3972,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3604,
              "y": 3857,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4023,
              "y": 3853,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4326,
              "y": 3967,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3485,
              "y": 4147,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3719,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 3953,
              "y": 4145,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4193,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q6",
              "to": "q7",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "C",
          "□",
          "□"
        ],
        "head": 3,
        "activeNode": "q7"
      },
      {
        "prof": {
          "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q8.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3300,
              "y": 3972,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3604,
              "y": 3857,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4023,
              "y": 3853,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4326,
              "y": 3967,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3485,
              "y": 4147,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3719,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 3953,
              "y": 4145,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4193,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q6",
              "to": "q7",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "C",
          "□",
          "□"
        ],
        "head": 2,
        "activeNode": "q8"
      },
      {
        "prof": {
          "message": "Nova regra: em q8, ao ler 'A', vamos para q9, escrevemos 'A' e movemos à ESQUERDA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3300,
              "y": 3972,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3604,
              "y": 3857,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4023,
              "y": 3853,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4326,
              "y": 3967,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3485,
              "y": 4147,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3719,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 3953,
              "y": 4145,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4193,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4421,
              "y": 4141,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q6",
              "to": "q7",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "C",
          "□",
          "□"
        ],
        "head": 2,
        "activeNode": "q8"
      },
      {
        "prof": {
          "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q9.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3300,
              "y": 3972,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3604,
              "y": 3857,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4023,
              "y": 3853,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4326,
              "y": 3967,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3485,
              "y": 4147,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3719,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 3953,
              "y": 4145,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4193,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4421,
              "y": 4141,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q6",
              "to": "q7",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "C",
          "□",
          "□"
        ],
        "head": 1,
        "activeNode": "q9"
      },
      {
        "prof": {
          "message": "Nova regra: em q9, ao ler '□', vamos para q10, escrevemos '□' e movemos à DIREITA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3300,
              "y": 3972,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3604,
              "y": 3857,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4023,
              "y": 3853,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4326,
              "y": 3967,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3485,
              "y": 4147,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3719,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 3953,
              "y": 4145,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4193,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4421,
              "y": 4141,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 4700,
              "y": 4143,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q6",
              "to": "q7",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "C",
          "□",
          "□"
        ],
        "head": 1,
        "activeNode": "q9"
      },
      {
        "prof": {
          "message": "Chegamos em q10 (estado final) e não há mais nada a ler. Palavra ACEITA! ✓",
          "mood": "feliz"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3300,
              "y": 3972,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3604,
              "y": 3857,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4023,
              "y": 3853,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4326,
              "y": 3967,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3485,
              "y": 4147,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3719,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 3953,
              "y": 4145,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4193,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4421,
              "y": 4141,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 4700,
              "y": 4143,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q6",
              "to": "q7",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "C",
          "□",
          "□"
        ],
        "head": 2,
        "activeNode": "q10",
        "status": "ACCEPTED"
      },
      {
        "prof": {
          "message": "Próxima palavra: \"aabbcc\". Mesma máquina, novo teste.",
          "mood": "serio"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3300,
              "y": 3972,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3604,
              "y": 3857,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4023,
              "y": 3853,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4326,
              "y": 3967,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3485,
              "y": 4147,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3719,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 3953,
              "y": 4145,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4193,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4421,
              "y": 4141,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 4700,
              "y": 4143,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q6",
              "to": "q7",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabbcc",
        "tape": [
          "□",
          "□",
          "a",
          "a",
          "b",
          "b",
          "c",
          "c",
          "□",
          "□"
        ],
        "head": 2,
        "activeNode": "q1"
      },
      {
        "prof": {
          "message": "Executou: leu 'a', escreveu 'A' e moveu. Agora em q2.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3300,
              "y": 3972,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3604,
              "y": 3857,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4023,
              "y": 3853,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4326,
              "y": 3967,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3485,
              "y": 4147,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3719,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 3953,
              "y": 4145,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4193,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4421,
              "y": 4141,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 4700,
              "y": 4143,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q6",
              "to": "q7",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabbcc",
        "tape": [
          "□",
          "□",
          "A",
          "a",
          "b",
          "b",
          "c",
          "c",
          "□",
          "□"
        ],
        "head": 3,
        "activeNode": "q2"
      },
      {
        "prof": {
          "message": "Nova regra: em q2, ao ler 'a', vamos para q2, escrevemos 'a' e movemos à DIREITA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3300,
              "y": 3972,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3604,
              "y": 3857,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4023,
              "y": 3853,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4326,
              "y": 3967,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3485,
              "y": 4147,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3719,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 3953,
              "y": 4145,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4193,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4421,
              "y": 4141,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 4700,
              "y": 4143,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q6",
              "to": "q7",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabbcc",
        "tape": [
          "□",
          "□",
          "A",
          "a",
          "b",
          "b",
          "c",
          "c",
          "□",
          "□"
        ],
        "head": 3,
        "activeNode": "q2"
      },
      {
        "prof": {
          "message": "Executou: leu 'a', escreveu 'a' e moveu. Agora em q2.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3300,
              "y": 3972,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3604,
              "y": 3857,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4023,
              "y": 3853,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4326,
              "y": 3967,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3485,
              "y": 4147,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3719,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 3953,
              "y": 4145,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4193,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4421,
              "y": 4141,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 4700,
              "y": 4143,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q6",
              "to": "q7",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabbcc",
        "tape": [
          "□",
          "□",
          "A",
          "a",
          "b",
          "b",
          "c",
          "c",
          "□",
          "□"
        ],
        "head": 4,
        "activeNode": "q2"
      },
      {
        "prof": {
          "message": "Executou: leu 'b', escreveu 'B' e moveu. Agora em q3.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3300,
              "y": 3972,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3604,
              "y": 3857,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4023,
              "y": 3853,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4326,
              "y": 3967,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3485,
              "y": 4147,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3719,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 3953,
              "y": 4145,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4193,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4421,
              "y": 4141,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 4700,
              "y": 4143,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q6",
              "to": "q7",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabbcc",
        "tape": [
          "□",
          "□",
          "A",
          "a",
          "B",
          "b",
          "c",
          "c",
          "□",
          "□"
        ],
        "head": 5,
        "activeNode": "q3"
      },
      {
        "prof": {
          "message": "Nova regra: em q3, ao ler 'b', vamos para q3, escrevemos 'b' e movemos à DIREITA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3300,
              "y": 3972,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3604,
              "y": 3857,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4023,
              "y": 3853,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4326,
              "y": 3967,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3485,
              "y": 4147,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3719,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 3953,
              "y": 4145,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4193,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4421,
              "y": 4141,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 4700,
              "y": 4143,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q6",
              "to": "q7",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabbcc",
        "tape": [
          "□",
          "□",
          "A",
          "a",
          "B",
          "b",
          "c",
          "c",
          "□",
          "□"
        ],
        "head": 5,
        "activeNode": "q3"
      },
      {
        "prof": {
          "message": "Executou: leu 'b', escreveu 'b' e moveu. Agora em q3.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3300,
              "y": 3972,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3604,
              "y": 3857,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4023,
              "y": 3853,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4326,
              "y": 3967,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3485,
              "y": 4147,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3719,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 3953,
              "y": 4145,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4193,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4421,
              "y": 4141,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 4700,
              "y": 4143,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q6",
              "to": "q7",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabbcc",
        "tape": [
          "□",
          "□",
          "A",
          "a",
          "B",
          "b",
          "c",
          "c",
          "□",
          "□"
        ],
        "head": 6,
        "activeNode": "q3"
      },
      {
        "prof": {
          "message": "Executou: leu 'c', escreveu 'C' e moveu. Agora em q4.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3300,
              "y": 3972,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3604,
              "y": 3857,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4023,
              "y": 3853,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4326,
              "y": 3967,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3485,
              "y": 4147,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3719,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 3953,
              "y": 4145,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4193,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4421,
              "y": 4141,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 4700,
              "y": 4143,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q6",
              "to": "q7",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabbcc",
        "tape": [
          "□",
          "□",
          "A",
          "a",
          "B",
          "b",
          "C",
          "c",
          "□",
          "□"
        ],
        "head": 5,
        "activeNode": "q4"
      },
      {
        "prof": {
          "message": "Nova regra: em q4, ao ler 'b', vamos para q4, escrevemos 'b' e movemos à ESQUERDA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3300,
              "y": 3972,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3604,
              "y": 3857,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4023,
              "y": 3853,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4326,
              "y": 3967,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3485,
              "y": 4147,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3719,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 3953,
              "y": 4145,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4193,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4421,
              "y": 4141,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 4700,
              "y": 4143,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q6",
              "to": "q7",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabbcc",
        "tape": [
          "□",
          "□",
          "A",
          "a",
          "B",
          "b",
          "C",
          "c",
          "□",
          "□"
        ],
        "head": 5,
        "activeNode": "q4"
      },
      {
        "prof": {
          "message": "Executou: leu 'b', escreveu 'b' e moveu. Agora em q4.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3300,
              "y": 3972,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3604,
              "y": 3857,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4023,
              "y": 3853,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4326,
              "y": 3967,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3485,
              "y": 4147,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3719,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 3953,
              "y": 4145,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4193,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4421,
              "y": 4141,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 4700,
              "y": 4143,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q6",
              "to": "q7",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabbcc",
        "tape": [
          "□",
          "□",
          "A",
          "a",
          "B",
          "b",
          "C",
          "c",
          "□",
          "□"
        ],
        "head": 4,
        "activeNode": "q4"
      },
      {
        "prof": {
          "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q4.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3300,
              "y": 3972,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3604,
              "y": 3857,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4023,
              "y": 3853,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4326,
              "y": 3967,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3485,
              "y": 4147,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3719,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 3953,
              "y": 4145,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4193,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4421,
              "y": 4141,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 4700,
              "y": 4143,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q6",
              "to": "q7",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabbcc",
        "tape": [
          "□",
          "□",
          "A",
          "a",
          "B",
          "b",
          "C",
          "c",
          "□",
          "□"
        ],
        "head": 3,
        "activeNode": "q4"
      },
      {
        "prof": {
          "message": "Nova regra: em q4, ao ler 'a', vamos para q4, escrevemos 'a' e movemos à ESQUERDA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3300,
              "y": 3972,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3604,
              "y": 3857,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4023,
              "y": 3853,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4326,
              "y": 3967,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3485,
              "y": 4147,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3719,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 3953,
              "y": 4145,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4193,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4421,
              "y": 4141,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 4700,
              "y": 4143,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q6",
              "to": "q7",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabbcc",
        "tape": [
          "□",
          "□",
          "A",
          "a",
          "B",
          "b",
          "C",
          "c",
          "□",
          "□"
        ],
        "head": 3,
        "activeNode": "q4"
      },
      {
        "prof": {
          "message": "Executou: leu 'a', escreveu 'a' e moveu. Agora em q4.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3300,
              "y": 3972,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3604,
              "y": 3857,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4023,
              "y": 3853,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4326,
              "y": 3967,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3485,
              "y": 4147,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3719,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 3953,
              "y": 4145,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4193,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4421,
              "y": 4141,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 4700,
              "y": 4143,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q6",
              "to": "q7",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabbcc",
        "tape": [
          "□",
          "□",
          "A",
          "a",
          "B",
          "b",
          "C",
          "c",
          "□",
          "□"
        ],
        "head": 2,
        "activeNode": "q4"
      },
      {
        "prof": {
          "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q1.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3300,
              "y": 3972,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3604,
              "y": 3857,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4023,
              "y": 3853,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4326,
              "y": 3967,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3485,
              "y": 4147,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3719,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 3953,
              "y": 4145,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4193,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4421,
              "y": 4141,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 4700,
              "y": 4143,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q6",
              "to": "q7",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabbcc",
        "tape": [
          "□",
          "□",
          "A",
          "a",
          "B",
          "b",
          "C",
          "c",
          "□",
          "□"
        ],
        "head": 3,
        "activeNode": "q1"
      },
      {
        "prof": {
          "message": "Executou: leu 'a', escreveu 'A' e moveu. Agora em q2.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3300,
              "y": 3972,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3604,
              "y": 3857,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4023,
              "y": 3853,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4326,
              "y": 3967,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3485,
              "y": 4147,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3719,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 3953,
              "y": 4145,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4193,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4421,
              "y": 4141,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 4700,
              "y": 4143,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q6",
              "to": "q7",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabbcc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "b",
          "C",
          "c",
          "□",
          "□"
        ],
        "head": 4,
        "activeNode": "q2"
      },
      {
        "prof": {
          "message": "Nova regra: em q2, ao ler 'B', vamos para q2, escrevemos 'B' e movemos à DIREITA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3300,
              "y": 3972,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3604,
              "y": 3857,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4023,
              "y": 3853,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4326,
              "y": 3967,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3485,
              "y": 4147,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3719,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 3953,
              "y": 4145,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4193,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4421,
              "y": 4141,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 4700,
              "y": 4143,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q6",
              "to": "q7",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabbcc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "b",
          "C",
          "c",
          "□",
          "□"
        ],
        "head": 4,
        "activeNode": "q2"
      },
      {
        "prof": {
          "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q2.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3300,
              "y": 3972,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3604,
              "y": 3857,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4023,
              "y": 3853,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4326,
              "y": 3967,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3485,
              "y": 4147,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3719,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 3953,
              "y": 4145,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4193,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4421,
              "y": 4141,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 4700,
              "y": 4143,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q6",
              "to": "q7",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabbcc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "b",
          "C",
          "c",
          "□",
          "□"
        ],
        "head": 5,
        "activeNode": "q2"
      },
      {
        "prof": {
          "message": "Executou: leu 'b', escreveu 'B' e moveu. Agora em q3.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3300,
              "y": 3972,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3604,
              "y": 3857,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4023,
              "y": 3853,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4326,
              "y": 3967,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3485,
              "y": 4147,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3719,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 3953,
              "y": 4145,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4193,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4421,
              "y": 4141,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 4700,
              "y": 4143,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q6",
              "to": "q7",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabbcc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "C",
          "c",
          "□",
          "□"
        ],
        "head": 6,
        "activeNode": "q3"
      },
      {
        "prof": {
          "message": "Nova regra: em q3, ao ler 'C', vamos para q3, escrevemos 'C' e movemos à DIREITA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3300,
              "y": 3972,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3604,
              "y": 3857,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4023,
              "y": 3853,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4326,
              "y": 3967,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3485,
              "y": 4147,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3719,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 3953,
              "y": 4145,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4193,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4421,
              "y": 4141,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 4700,
              "y": 4143,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q6",
              "to": "q7",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabbcc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "C",
          "c",
          "□",
          "□"
        ],
        "head": 6,
        "activeNode": "q3"
      },
      {
        "prof": {
          "message": "Executou: leu 'C', escreveu 'C' e moveu. Agora em q3.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3300,
              "y": 3972,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3604,
              "y": 3857,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4023,
              "y": 3853,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4326,
              "y": 3967,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3485,
              "y": 4147,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3719,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 3953,
              "y": 4145,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4193,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4421,
              "y": 4141,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 4700,
              "y": 4143,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q6",
              "to": "q7",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabbcc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "C",
          "c",
          "□",
          "□"
        ],
        "head": 7,
        "activeNode": "q3"
      },
      {
        "prof": {
          "message": "Executou: leu 'c', escreveu 'C' e moveu. Agora em q4.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3300,
              "y": 3972,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3604,
              "y": 3857,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4023,
              "y": 3853,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4326,
              "y": 3967,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3485,
              "y": 4147,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3719,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 3953,
              "y": 4145,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4193,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4421,
              "y": 4141,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 4700,
              "y": 4143,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q6",
              "to": "q7",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabbcc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 6,
        "activeNode": "q4"
      },
      {
        "prof": {
          "message": "Nova regra: em q4, ao ler 'C', vamos para q4, escrevemos 'C' e movemos à ESQUERDA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3300,
              "y": 3972,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3604,
              "y": 3857,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4023,
              "y": 3853,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4326,
              "y": 3967,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3485,
              "y": 4147,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3719,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 3953,
              "y": 4145,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4193,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4421,
              "y": 4141,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 4700,
              "y": 4143,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q6",
              "to": "q7",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabbcc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 6,
        "activeNode": "q4"
      },
      {
        "prof": {
          "message": "Executou: leu 'C', escreveu 'C' e moveu. Agora em q4.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3300,
              "y": 3972,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3604,
              "y": 3857,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4023,
              "y": 3853,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4326,
              "y": 3967,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3485,
              "y": 4147,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3719,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 3953,
              "y": 4145,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4193,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4421,
              "y": 4141,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 4700,
              "y": 4143,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q6",
              "to": "q7",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabbcc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 5,
        "activeNode": "q4"
      },
      {
        "prof": {
          "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q4.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3300,
              "y": 3972,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3604,
              "y": 3857,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4023,
              "y": 3853,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4326,
              "y": 3967,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3485,
              "y": 4147,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3719,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 3953,
              "y": 4145,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4193,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4421,
              "y": 4141,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 4700,
              "y": 4143,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q6",
              "to": "q7",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabbcc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 4,
        "activeNode": "q4"
      },
      {
        "prof": {
          "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q4.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3300,
              "y": 3972,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3604,
              "y": 3857,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4023,
              "y": 3853,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4326,
              "y": 3967,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3485,
              "y": 4147,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3719,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 3953,
              "y": 4145,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4193,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4421,
              "y": 4141,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 4700,
              "y": 4143,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q6",
              "to": "q7",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabbcc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 3,
        "activeNode": "q4"
      },
      {
        "prof": {
          "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q1.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3300,
              "y": 3972,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3604,
              "y": 3857,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4023,
              "y": 3853,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4326,
              "y": 3967,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3485,
              "y": 4147,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3719,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 3953,
              "y": 4145,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4193,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4421,
              "y": 4141,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 4700,
              "y": 4143,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q6",
              "to": "q7",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabbcc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 4,
        "activeNode": "q1"
      },
      {
        "prof": {
          "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q5.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3300,
              "y": 3972,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3604,
              "y": 3857,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4023,
              "y": 3853,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4326,
              "y": 3967,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3485,
              "y": 4147,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3719,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 3953,
              "y": 4145,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4193,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4421,
              "y": 4141,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 4700,
              "y": 4143,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q6",
              "to": "q7",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabbcc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 5,
        "activeNode": "q5"
      },
      {
        "prof": {
          "message": "Nova regra: em q5, ao ler 'B', vamos para q5, escrevemos 'B' e movemos à DIREITA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3300,
              "y": 3972,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3604,
              "y": 3857,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4023,
              "y": 3853,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4326,
              "y": 3967,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3485,
              "y": 4147,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3719,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 3953,
              "y": 4145,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4193,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4421,
              "y": 4141,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 4700,
              "y": 4143,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q6",
              "to": "q7",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabbcc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 5,
        "activeNode": "q5"
      },
      {
        "prof": {
          "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q5.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3300,
              "y": 3972,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3604,
              "y": 3857,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4023,
              "y": 3853,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4326,
              "y": 3967,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3485,
              "y": 4147,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3719,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 3953,
              "y": 4145,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4193,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4421,
              "y": 4141,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 4700,
              "y": 4143,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q6",
              "to": "q7",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabbcc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 6,
        "activeNode": "q5"
      },
      {
        "prof": {
          "message": "Executou: leu 'C', escreveu 'C' e moveu. Agora em q6.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3300,
              "y": 3972,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3604,
              "y": 3857,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4023,
              "y": 3853,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4326,
              "y": 3967,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3485,
              "y": 4147,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3719,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 3953,
              "y": 4145,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4193,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4421,
              "y": 4141,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 4700,
              "y": 4143,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q6",
              "to": "q7",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabbcc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 7,
        "activeNode": "q6"
      },
      {
        "prof": {
          "message": "Nova regra: em q6, ao ler 'C', vamos para q6, escrevemos 'C' e movemos à DIREITA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3300,
              "y": 3972,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3604,
              "y": 3857,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4023,
              "y": 3853,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4326,
              "y": 3967,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3485,
              "y": 4147,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3719,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 3953,
              "y": 4145,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4193,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4421,
              "y": 4141,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 4700,
              "y": 4143,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q6",
              "to": "q7",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q6",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabbcc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 7,
        "activeNode": "q6"
      },
      {
        "prof": {
          "message": "Executou: leu 'C', escreveu 'C' e moveu. Agora em q6.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3300,
              "y": 3972,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3604,
              "y": 3857,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4023,
              "y": 3853,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4326,
              "y": 3967,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3485,
              "y": 4147,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3719,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 3953,
              "y": 4145,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4193,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4421,
              "y": 4141,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 4700,
              "y": 4143,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q6",
              "to": "q7",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q6",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabbcc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 8,
        "activeNode": "q6"
      },
      {
        "prof": {
          "message": "Executou: leu '□', escreveu '□' e moveu. Agora em q7.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3300,
              "y": 3972,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3604,
              "y": 3857,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4023,
              "y": 3853,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4326,
              "y": 3967,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3485,
              "y": 4147,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3719,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 3953,
              "y": 4145,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4193,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4421,
              "y": 4141,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 4700,
              "y": 4143,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q6",
              "to": "q7",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q6",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabbcc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 7,
        "activeNode": "q7"
      },
      {
        "prof": {
          "message": "Executou: leu 'C', escreveu 'C' e moveu. Agora em q7.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3300,
              "y": 3972,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3604,
              "y": 3857,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4023,
              "y": 3853,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4326,
              "y": 3967,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3485,
              "y": 4147,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3719,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 3953,
              "y": 4145,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4193,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4421,
              "y": 4141,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 4700,
              "y": 4143,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q6",
              "to": "q7",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q6",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabbcc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 6,
        "activeNode": "q7"
      },
      {
        "prof": {
          "message": "Executou: leu 'C', escreveu 'C' e moveu. Agora em q7.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3300,
              "y": 3972,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3604,
              "y": 3857,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4023,
              "y": 3853,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4326,
              "y": 3967,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3485,
              "y": 4147,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3719,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 3953,
              "y": 4145,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4193,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4421,
              "y": 4141,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 4700,
              "y": 4143,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q6",
              "to": "q7",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q6",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabbcc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 5,
        "activeNode": "q7"
      },
      {
        "prof": {
          "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q8.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3300,
              "y": 3972,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3604,
              "y": 3857,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4023,
              "y": 3853,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4326,
              "y": 3967,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3485,
              "y": 4147,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3719,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 3953,
              "y": 4145,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4193,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4421,
              "y": 4141,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 4700,
              "y": 4143,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q6",
              "to": "q7",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q6",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabbcc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 4,
        "activeNode": "q8"
      },
      {
        "prof": {
          "message": "Nova regra: em q8, ao ler 'B', vamos para q8, escrevemos 'B' e movemos à ESQUERDA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3300,
              "y": 3972,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3604,
              "y": 3857,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4023,
              "y": 3853,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4326,
              "y": 3967,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3485,
              "y": 4147,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3719,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 3953,
              "y": 4145,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4193,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4421,
              "y": 4141,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 4700,
              "y": 4143,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q6",
              "to": "q7",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q6",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabbcc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 4,
        "activeNode": "q8"
      },
      {
        "prof": {
          "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q8.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3300,
              "y": 3972,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3604,
              "y": 3857,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4023,
              "y": 3853,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4326,
              "y": 3967,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3485,
              "y": 4147,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3719,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 3953,
              "y": 4145,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4193,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4421,
              "y": 4141,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 4700,
              "y": 4143,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q6",
              "to": "q7",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q6",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabbcc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 3,
        "activeNode": "q8"
      },
      {
        "prof": {
          "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q9.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3300,
              "y": 3972,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3604,
              "y": 3857,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4023,
              "y": 3853,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4326,
              "y": 3967,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3485,
              "y": 4147,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3719,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 3953,
              "y": 4145,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4193,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4421,
              "y": 4141,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 4700,
              "y": 4143,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q6",
              "to": "q7",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q6",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabbcc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 2,
        "activeNode": "q9"
      },
      {
        "prof": {
          "message": "Nova regra: em q9, ao ler 'A', vamos para q9, escrevemos 'A' e movemos à ESQUERDA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3300,
              "y": 3972,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3604,
              "y": 3857,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4023,
              "y": 3853,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4326,
              "y": 3967,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3485,
              "y": 4147,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3719,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 3953,
              "y": 4145,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4193,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4421,
              "y": 4141,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 4700,
              "y": 4143,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q6",
              "to": "q7",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q6",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabbcc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 2,
        "activeNode": "q9"
      },
      {
        "prof": {
          "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q9.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3300,
              "y": 3972,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3604,
              "y": 3857,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4023,
              "y": 3853,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4326,
              "y": 3967,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3485,
              "y": 4147,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3719,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 3953,
              "y": 4145,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4193,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4421,
              "y": 4141,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 4700,
              "y": 4143,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q6",
              "to": "q7",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q6",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabbcc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 1,
        "activeNode": "q9"
      },
      {
        "prof": {
          "message": "Chegamos em q10 (estado final) e não há mais nada a ler. Palavra ACEITA! ✓",
          "mood": "feliz"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3300,
              "y": 3972,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3604,
              "y": 3857,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4023,
              "y": 3853,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4326,
              "y": 3967,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3485,
              "y": 4147,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3719,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 3953,
              "y": 4145,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4193,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4421,
              "y": 4141,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 4700,
              "y": 4143,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q6",
              "to": "q7",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q6",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabbcc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 2,
        "activeNode": "q10",
        "status": "ACCEPTED"
      },
      {
        "prof": {
          "message": "Grafo finalizado! 🎉 Agora vamos formalizar matematicamente a nossa Máquina de Turing.",
          "mood": "feliz"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3300,
              "y": 3972,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3604,
              "y": 3857,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4023,
              "y": 3853,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4326,
              "y": 3967,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3485,
              "y": 4147,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3719,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 3953,
              "y": 4145,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4193,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4421,
              "y": 4141,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 4700,
              "y": 4143,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q6",
              "to": "q7",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q6",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "formalIntro": true
      },
      {
        "prof": {
          "message": "Q é o conjunto de ESTADOS: {q1,q2,q3,q4,q5,q6,q7,q8,q9,q10}",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3300,
              "y": 3972,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3604,
              "y": 3857,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4023,
              "y": 3853,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4326,
              "y": 3967,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3485,
              "y": 4147,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3719,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 3953,
              "y": 4145,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4193,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4421,
              "y": 4141,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 4700,
              "y": 4143,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q6",
              "to": "q7",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q6",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "phase": "FORMAL",
        "formalFill": {
          "states": "{q1,q2,q3,q4,q5,q6,q7,q8,q9,q10}"
        }
      },
      {
        "prof": {
          "message": "Σ é o alfabeto de ENTRADA: {a,b,c}",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3300,
              "y": 3972,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3604,
              "y": 3857,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4023,
              "y": 3853,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4326,
              "y": 3967,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3485,
              "y": 4147,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3719,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 3953,
              "y": 4145,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4193,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4421,
              "y": 4141,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 4700,
              "y": 4143,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q6",
              "to": "q7",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q6",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "phase": "FORMAL",
        "formalFill": {
          "sigma": "{a,b,c}"
        }
      },
      {
        "prof": {
          "message": "Γ é o alfabeto da FITA: {A,B,C,a,b,c,□}",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3300,
              "y": 3972,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3604,
              "y": 3857,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4023,
              "y": 3853,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4326,
              "y": 3967,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3485,
              "y": 4147,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3719,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 3953,
              "y": 4145,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4193,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4421,
              "y": 4141,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 4700,
              "y": 4143,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q6",
              "to": "q7",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q6",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "phase": "FORMAL",
        "formalFill": {
          "gamma": "{A,B,C,a,b,c,□}"
        }
      },
      {
        "prof": {
          "message": "q0 é o estado INICIAL: q1",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3300,
              "y": 3972,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3604,
              "y": 3857,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4023,
              "y": 3853,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4326,
              "y": 3967,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3485,
              "y": 4147,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3719,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 3953,
              "y": 4145,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4193,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4421,
              "y": 4141,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 4700,
              "y": 4143,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q6",
              "to": "q7",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q6",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "phase": "FORMAL",
        "formalFill": {
          "initial": "q1"
        }
      },
      {
        "prof": {
          "message": "O símbolo BRANCO: □",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3300,
              "y": 3972,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3604,
              "y": 3857,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4023,
              "y": 3853,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4326,
              "y": 3967,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3485,
              "y": 4147,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3719,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 3953,
              "y": 4145,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4193,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4421,
              "y": 4141,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 4700,
              "y": 4143,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q6",
              "to": "q7",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q6",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "phase": "FORMAL",
        "formalFill": {
          "blank": "□"
        }
      },
      {
        "prof": {
          "message": "F é o conjunto de estados de ACEITAÇÃO: {q10}",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3300,
              "y": 3972,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3604,
              "y": 3857,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4023,
              "y": 3853,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4326,
              "y": 3967,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3485,
              "y": 4147,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3719,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 3953,
              "y": 4145,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4193,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4421,
              "y": 4141,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 4700,
              "y": 4143,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q6",
              "to": "q7",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q6",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "phase": "FORMAL",
        "formalFill": {
          "final": "{q10}"
        }
      },
      {
        "prof": {
          "message": "Por fim, a função δ completa — Máquina formalizada! ✓",
          "mood": "feliz"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3300,
              "y": 3972,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3604,
              "y": 3857,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4023,
              "y": 3853,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4326,
              "y": 3967,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3485,
              "y": 4147,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3719,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 3953,
              "y": 4145,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4193,
              "y": 4143,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4421,
              "y": 4141,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 4700,
              "y": 4143,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q6",
              "to": "q7",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q6",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "phase": "FORMAL",
        "formalFill": {
          "delta": [
            {
              "from": "q6",
              "to": "q7",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q6",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            }
          ]
        }
      }
    ],
  },
};

export default MT_RECON_L16;
