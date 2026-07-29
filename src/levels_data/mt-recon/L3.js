// ── MT Reconhecedora L3: {aⁿb²ⁿ / n ≥ 0} ──────────────────────────────
// Gabarito importado de implementar/MT/gabaritos_oficiais/reconhecedora/L3.xml
// (verificado por fuzz contra a linguagem formal antes da conversão).

const MT_RECON_L3 = {
  id:          'MT_RECON_L3',
  label:       'L3',
  type:        'recognizer',
  level:       'medium',
  alphabet:    ["a","b"],
  tapeAlphabet: ["A","B","a","b","□"],
  language:    '{aⁿb²ⁿ / n ≥ 0}',
  description: 'Reconheça aⁿb²ⁿ: para cada "a", exatamente dois "b" correspondentes.',
  hint:        'Para cada "a" marcada, vá até o final e marque DOIS "b".',
  acceptedWords: ["","abb","aabbbb","aaabbbbbb"],
  rejectedWords: ["a","b","bb","ab","abbb","aabbb","aabbbbb"],
  formalDescription: {
    sigma:   '{a,b}',
    gamma:   '{A,B,a,b,□}',
    states:  '{q0,q1,q2,q3,q4,q5,q6}',
    initial: 'q0',
    final:   '{q5}',
    blank:   '□',
  },

  guidedLesson: {
    steps: [
      {
        "prof": {
          "message": "Bem-vindo! Vamos construir a MT Reconhecedora da linguagem {aⁿb²ⁿ / n ≥ 0}.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [],
          "transitions": []
        }
      },
      {
        "prof": {
          "message": "Vamos testar a palavra \"abb\". Começamos no estado inicial q0.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3504,
              "y": 3975,
              "isInitial": true,
              "isFinal": false
            }
          ],
          "transitions": []
        },
        "simulateWord": "abb",
        "tape": [
          "□",
          "□",
          "a",
          "b",
          "b",
          "□",
          "□"
        ],
        "head": 2,
        "activeNode": "q0"
      },
      {
        "prof": {
          "message": "Nova regra: em q0, ao ler 'a', vamos para q1, escrevemos 'A' e movemos à DIREITA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3504,
              "y": 3975,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3709,
              "y": 3804,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q0",
              "to": "q1",
              "read": "a",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abb",
        "tape": [
          "□",
          "□",
          "a",
          "b",
          "b",
          "□",
          "□"
        ],
        "head": 2,
        "activeNode": "q0"
      },
      {
        "prof": {
          "message": "Executou: leu 'a', escreveu 'A' e moveu. Agora em q1.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3504,
              "y": 3975,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3709,
              "y": 3804,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q0",
              "to": "q1",
              "read": "a",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abb",
        "tape": [
          "□",
          "□",
          "A",
          "b",
          "b",
          "□",
          "□"
        ],
        "head": 3,
        "activeNode": "q1"
      },
      {
        "prof": {
          "message": "Nova regra: em q1, ao ler 'b', vamos para q6, escrevemos 'B' e movemos à DIREITA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3504,
              "y": 3975,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3709,
              "y": 3804,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3987,
              "y": 3861,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q1",
              "to": "q6",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q1",
              "read": "a",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abb",
        "tape": [
          "□",
          "□",
          "A",
          "b",
          "b",
          "□",
          "□"
        ],
        "head": 3,
        "activeNode": "q1"
      },
      {
        "prof": {
          "message": "Executou: leu 'b', escreveu 'B' e moveu. Agora em q6.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3504,
              "y": 3975,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3709,
              "y": 3804,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3987,
              "y": 3861,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q1",
              "to": "q6",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q1",
              "read": "a",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abb",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "b",
          "□",
          "□"
        ],
        "head": 4,
        "activeNode": "q6"
      },
      {
        "prof": {
          "message": "Nova regra: em q6, ao ler 'b', vamos para q2, escrevemos 'B' e movemos à ESQUERDA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3504,
              "y": 3975,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3709,
              "y": 3804,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 4240,
              "y": 3950,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3987,
              "y": 3861,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q1",
              "to": "q6",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q2",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q0",
              "to": "q1",
              "read": "a",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abb",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "b",
          "□",
          "□"
        ],
        "head": 4,
        "activeNode": "q6"
      },
      {
        "prof": {
          "message": "Executou: leu 'b', escreveu 'B' e moveu. Agora em q2.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3504,
              "y": 3975,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3709,
              "y": 3804,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 4240,
              "y": 3950,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3987,
              "y": 3861,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q1",
              "to": "q6",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q2",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q0",
              "to": "q1",
              "read": "a",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abb",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "B",
          "□",
          "□"
        ],
        "head": 3,
        "activeNode": "q2"
      },
      {
        "prof": {
          "message": "Nova regra: em q2, ao ler 'B', vamos para q2, escrevemos 'B' e movemos à ESQUERDA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3504,
              "y": 3975,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3709,
              "y": 3804,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 4240,
              "y": 3950,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3987,
              "y": 3861,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q1",
              "to": "q6",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q2",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q0",
              "to": "q1",
              "read": "a",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abb",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "B",
          "□",
          "□"
        ],
        "head": 3,
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
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3504,
              "y": 3975,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3709,
              "y": 3804,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 4240,
              "y": 3950,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3987,
              "y": 3861,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q1",
              "to": "q6",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q2",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q0",
              "to": "q1",
              "read": "a",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abb",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "B",
          "□",
          "□"
        ],
        "head": 2,
        "activeNode": "q2"
      },
      {
        "prof": {
          "message": "Nova regra: em q2, ao ler 'A', vamos para q0, escrevemos 'A' e movemos à DIREITA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3504,
              "y": 3975,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3709,
              "y": 3804,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 4240,
              "y": 3950,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3987,
              "y": 3861,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q1",
              "to": "q6",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q2",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q0",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q1",
              "read": "a",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abb",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "B",
          "□",
          "□"
        ],
        "head": 2,
        "activeNode": "q2"
      },
      {
        "prof": {
          "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q0.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3504,
              "y": 3975,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3709,
              "y": 3804,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 4240,
              "y": 3950,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3987,
              "y": 3861,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q1",
              "to": "q6",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q2",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q0",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q1",
              "read": "a",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abb",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "B",
          "□",
          "□"
        ],
        "head": 3,
        "activeNode": "q0"
      },
      {
        "prof": {
          "message": "Nova regra: em q0, ao ler 'B', vamos para q3, escrevemos 'B' e movemos à DIREITA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3504,
              "y": 3975,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3709,
              "y": 3804,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 4240,
              "y": 3950,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3823,
              "y": 4191,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3987,
              "y": 3861,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q1",
              "to": "q6",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q2",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q0",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q1",
              "read": "a",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abb",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "B",
          "□",
          "□"
        ],
        "head": 3,
        "activeNode": "q0"
      },
      {
        "prof": {
          "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q3.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3504,
              "y": 3975,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3709,
              "y": 3804,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 4240,
              "y": 3950,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3823,
              "y": 4191,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3987,
              "y": 3861,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q1",
              "to": "q6",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q2",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q0",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q1",
              "read": "a",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abb",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "B",
          "□",
          "□"
        ],
        "head": 4,
        "activeNode": "q3"
      },
      {
        "prof": {
          "message": "Nova regra: em q3, ao ler 'B', vamos para q3, escrevemos 'B' e movemos à DIREITA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3504,
              "y": 3975,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3709,
              "y": 3804,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 4240,
              "y": 3950,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3823,
              "y": 4191,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3987,
              "y": 3861,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q1",
              "to": "q6",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q2",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q0",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q1",
              "read": "a",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abb",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "B",
          "□",
          "□"
        ],
        "head": 4,
        "activeNode": "q3"
      },
      {
        "prof": {
          "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q3.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3504,
              "y": 3975,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3709,
              "y": 3804,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 4240,
              "y": 3950,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3823,
              "y": 4191,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3987,
              "y": 3861,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q1",
              "to": "q6",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q2",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q0",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q1",
              "read": "a",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abb",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "B",
          "□",
          "□"
        ],
        "head": 5,
        "activeNode": "q3"
      },
      {
        "prof": {
          "message": "Nova regra: em q3, ao ler '□', vamos para q4, escrevemos '□' e movemos à ESQUERDA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3504,
              "y": 3975,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3709,
              "y": 3804,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 4240,
              "y": 3950,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3823,
              "y": 4191,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4141,
              "y": 4196,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3987,
              "y": 3861,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q3",
              "to": "q4",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q6",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q2",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q0",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q1",
              "read": "a",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abb",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "B",
          "□",
          "□"
        ],
        "head": 5,
        "activeNode": "q3"
      },
      {
        "prof": {
          "message": "Executou: leu '□', escreveu '□' e moveu. Agora em q4.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3504,
              "y": 3975,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3709,
              "y": 3804,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 4240,
              "y": 3950,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3823,
              "y": 4191,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4141,
              "y": 4196,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3987,
              "y": 3861,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q3",
              "to": "q4",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q6",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q2",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q0",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q1",
              "read": "a",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abb",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "B",
          "□",
          "□"
        ],
        "head": 4,
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
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3504,
              "y": 3975,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3709,
              "y": 3804,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 4240,
              "y": 3950,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3823,
              "y": 4191,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4141,
              "y": 4196,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3987,
              "y": 3861,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q3",
              "to": "q4",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q6",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
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
              "from": "q3",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q2",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q0",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q1",
              "read": "a",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abb",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "B",
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
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3504,
              "y": 3975,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3709,
              "y": 3804,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 4240,
              "y": 3950,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3823,
              "y": 4191,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4141,
              "y": 4196,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3987,
              "y": 3861,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q3",
              "to": "q4",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q6",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
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
              "from": "q3",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q2",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q0",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q1",
              "read": "a",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abb",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "B",
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
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3504,
              "y": 3975,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3709,
              "y": 3804,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 4240,
              "y": 3950,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3823,
              "y": 4191,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4141,
              "y": 4196,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3987,
              "y": 3861,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q3",
              "to": "q4",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q6",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
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
              "from": "q3",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q2",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q0",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q1",
              "read": "a",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abb",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "B",
          "□",
          "□"
        ],
        "head": 2,
        "activeNode": "q4"
      },
      {
        "prof": {
          "message": "Nova regra: em q4, ao ler 'A', vamos para q4, escrevemos 'A' e movemos à ESQUERDA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3504,
              "y": 3975,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3709,
              "y": 3804,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 4240,
              "y": 3950,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3823,
              "y": 4191,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4141,
              "y": 4196,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3987,
              "y": 3861,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q3",
              "to": "q4",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q6",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "A",
              "write": "A",
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
              "from": "q3",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q2",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q0",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q1",
              "read": "a",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abb",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "B",
          "□",
          "□"
        ],
        "head": 2,
        "activeNode": "q4"
      },
      {
        "prof": {
          "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q4.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3504,
              "y": 3975,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3709,
              "y": 3804,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 4240,
              "y": 3950,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3823,
              "y": 4191,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4141,
              "y": 4196,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3987,
              "y": 3861,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q3",
              "to": "q4",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q6",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "A",
              "write": "A",
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
              "from": "q3",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q2",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q0",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q1",
              "read": "a",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abb",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "B",
          "□",
          "□"
        ],
        "head": 1,
        "activeNode": "q4"
      },
      {
        "prof": {
          "message": "Nova regra: em q4, ao ler '□', vamos para q5, escrevemos '□' e movemos à DIREITA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3504,
              "y": 3975,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3709,
              "y": 3804,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 4240,
              "y": 3950,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3823,
              "y": 4191,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4141,
              "y": 4196,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4496,
              "y": 4088,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3987,
              "y": 3861,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q3",
              "to": "q4",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q6",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "A",
              "write": "A",
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
              "from": "q3",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q2",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q0",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q1",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abb",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "B",
          "□",
          "□"
        ],
        "head": 1,
        "activeNode": "q4"
      },
      {
        "prof": {
          "message": "Chegamos em q5 (estado final) e não há mais nada a ler. Palavra ACEITA! ✓",
          "mood": "feliz"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3504,
              "y": 3975,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3709,
              "y": 3804,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 4240,
              "y": 3950,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3823,
              "y": 4191,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4141,
              "y": 4196,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4496,
              "y": 4088,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3987,
              "y": 3861,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q3",
              "to": "q4",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q6",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "A",
              "write": "A",
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
              "from": "q3",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q2",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q0",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q1",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abb",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "B",
          "□",
          "□"
        ],
        "head": 2,
        "activeNode": "q5",
        "status": "ACCEPTED"
      },
      {
        "prof": {
          "message": "Próxima palavra: \"aabbbb\". Mesma máquina, novo teste.",
          "mood": "serio"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3504,
              "y": 3975,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3709,
              "y": 3804,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 4240,
              "y": 3950,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3823,
              "y": 4191,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4141,
              "y": 4196,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4496,
              "y": 4088,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3987,
              "y": 3861,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q3",
              "to": "q4",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q6",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "A",
              "write": "A",
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
              "from": "q3",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q2",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q0",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q1",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabbbb",
        "tape": [
          "□",
          "□",
          "a",
          "a",
          "b",
          "b",
          "b",
          "b",
          "□",
          "□"
        ],
        "head": 2,
        "activeNode": "q0"
      },
      {
        "prof": {
          "message": "Executou: leu 'a', escreveu 'A' e moveu. Agora em q1.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3504,
              "y": 3975,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3709,
              "y": 3804,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 4240,
              "y": 3950,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3823,
              "y": 4191,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4141,
              "y": 4196,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4496,
              "y": 4088,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3987,
              "y": 3861,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q3",
              "to": "q4",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q6",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "A",
              "write": "A",
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
              "from": "q3",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q2",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q0",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q1",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabbbb",
        "tape": [
          "□",
          "□",
          "A",
          "a",
          "b",
          "b",
          "b",
          "b",
          "□",
          "□"
        ],
        "head": 3,
        "activeNode": "q1"
      },
      {
        "prof": {
          "message": "Nova regra: em q1, ao ler 'a', vamos para q1, escrevemos 'a' e movemos à DIREITA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3504,
              "y": 3975,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3709,
              "y": 3804,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 4240,
              "y": 3950,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3823,
              "y": 4191,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4141,
              "y": 4196,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4496,
              "y": 4088,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3987,
              "y": 3861,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q3",
              "to": "q4",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q6",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "A",
              "write": "A",
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
              "from": "q1",
              "to": "q1",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q2",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q0",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q1",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabbbb",
        "tape": [
          "□",
          "□",
          "A",
          "a",
          "b",
          "b",
          "b",
          "b",
          "□",
          "□"
        ],
        "head": 3,
        "activeNode": "q1"
      },
      {
        "prof": {
          "message": "Executou: leu 'a', escreveu 'a' e moveu. Agora em q1.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3504,
              "y": 3975,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3709,
              "y": 3804,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 4240,
              "y": 3950,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3823,
              "y": 4191,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4141,
              "y": 4196,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4496,
              "y": 4088,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3987,
              "y": 3861,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q3",
              "to": "q4",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q6",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "A",
              "write": "A",
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
              "from": "q1",
              "to": "q1",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q2",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q0",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q1",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabbbb",
        "tape": [
          "□",
          "□",
          "A",
          "a",
          "b",
          "b",
          "b",
          "b",
          "□",
          "□"
        ],
        "head": 4,
        "activeNode": "q1"
      },
      {
        "prof": {
          "message": "Executou: leu 'b', escreveu 'B' e moveu. Agora em q6.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3504,
              "y": 3975,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3709,
              "y": 3804,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 4240,
              "y": 3950,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3823,
              "y": 4191,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4141,
              "y": 4196,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4496,
              "y": 4088,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3987,
              "y": 3861,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q3",
              "to": "q4",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q6",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "A",
              "write": "A",
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
              "from": "q1",
              "to": "q1",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q2",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q0",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q1",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabbbb",
        "tape": [
          "□",
          "□",
          "A",
          "a",
          "B",
          "b",
          "b",
          "b",
          "□",
          "□"
        ],
        "head": 5,
        "activeNode": "q6"
      },
      {
        "prof": {
          "message": "Executou: leu 'b', escreveu 'B' e moveu. Agora em q2.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3504,
              "y": 3975,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3709,
              "y": 3804,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 4240,
              "y": 3950,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3823,
              "y": 4191,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4141,
              "y": 4196,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4496,
              "y": 4088,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3987,
              "y": 3861,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q3",
              "to": "q4",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q6",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "A",
              "write": "A",
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
              "from": "q1",
              "to": "q1",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q2",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q0",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q1",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabbbb",
        "tape": [
          "□",
          "□",
          "A",
          "a",
          "B",
          "B",
          "b",
          "b",
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
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3504,
              "y": 3975,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3709,
              "y": 3804,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 4240,
              "y": 3950,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3823,
              "y": 4191,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4141,
              "y": 4196,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4496,
              "y": 4088,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3987,
              "y": 3861,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q3",
              "to": "q4",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q6",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "A",
              "write": "A",
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
              "from": "q1",
              "to": "q1",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q2",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q0",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q1",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabbbb",
        "tape": [
          "□",
          "□",
          "A",
          "a",
          "B",
          "B",
          "b",
          "b",
          "□",
          "□"
        ],
        "head": 3,
        "activeNode": "q2"
      },
      {
        "prof": {
          "message": "Nova regra: em q2, ao ler 'a', vamos para q2, escrevemos 'a' e movemos à ESQUERDA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3504,
              "y": 3975,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3709,
              "y": 3804,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 4240,
              "y": 3950,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3823,
              "y": 4191,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4141,
              "y": 4196,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4496,
              "y": 4088,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3987,
              "y": 3861,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q3",
              "to": "q4",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q6",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "A",
              "write": "A",
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
              "from": "q1",
              "to": "q1",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q2",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q0",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q1",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabbbb",
        "tape": [
          "□",
          "□",
          "A",
          "a",
          "B",
          "B",
          "b",
          "b",
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
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3504,
              "y": 3975,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3709,
              "y": 3804,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 4240,
              "y": 3950,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3823,
              "y": 4191,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4141,
              "y": 4196,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4496,
              "y": 4088,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3987,
              "y": 3861,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q3",
              "to": "q4",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q6",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "A",
              "write": "A",
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
              "from": "q1",
              "to": "q1",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q2",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q0",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q1",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabbbb",
        "tape": [
          "□",
          "□",
          "A",
          "a",
          "B",
          "B",
          "b",
          "b",
          "□",
          "□"
        ],
        "head": 2,
        "activeNode": "q2"
      },
      {
        "prof": {
          "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q0.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3504,
              "y": 3975,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3709,
              "y": 3804,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 4240,
              "y": 3950,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3823,
              "y": 4191,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4141,
              "y": 4196,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4496,
              "y": 4088,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3987,
              "y": 3861,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q3",
              "to": "q4",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q6",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "A",
              "write": "A",
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
              "from": "q1",
              "to": "q1",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q2",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q0",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q1",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabbbb",
        "tape": [
          "□",
          "□",
          "A",
          "a",
          "B",
          "B",
          "b",
          "b",
          "□",
          "□"
        ],
        "head": 3,
        "activeNode": "q0"
      },
      {
        "prof": {
          "message": "Executou: leu 'a', escreveu 'A' e moveu. Agora em q1.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3504,
              "y": 3975,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3709,
              "y": 3804,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 4240,
              "y": 3950,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3823,
              "y": 4191,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4141,
              "y": 4196,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4496,
              "y": 4088,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3987,
              "y": 3861,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q3",
              "to": "q4",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q6",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "A",
              "write": "A",
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
              "from": "q1",
              "to": "q1",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q2",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q0",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q1",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabbbb",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "b",
          "b",
          "□",
          "□"
        ],
        "head": 4,
        "activeNode": "q1"
      },
      {
        "prof": {
          "message": "Nova regra: em q1, ao ler 'B', vamos para q1, escrevemos 'B' e movemos à DIREITA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3504,
              "y": 3975,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3709,
              "y": 3804,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 4240,
              "y": 3950,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3823,
              "y": 4191,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4141,
              "y": 4196,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4496,
              "y": 4088,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3987,
              "y": 3861,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q3",
              "to": "q4",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q6",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "A",
              "write": "A",
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
              "from": "q1",
              "to": "q1",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q2",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q0",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q1",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabbbb",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "b",
          "b",
          "□",
          "□"
        ],
        "head": 4,
        "activeNode": "q1"
      },
      {
        "prof": {
          "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q1.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3504,
              "y": 3975,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3709,
              "y": 3804,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 4240,
              "y": 3950,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3823,
              "y": 4191,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4141,
              "y": 4196,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4496,
              "y": 4088,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3987,
              "y": 3861,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q3",
              "to": "q4",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q6",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "A",
              "write": "A",
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
              "from": "q1",
              "to": "q1",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q2",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q0",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q1",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabbbb",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "b",
          "b",
          "□",
          "□"
        ],
        "head": 5,
        "activeNode": "q1"
      },
      {
        "prof": {
          "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q1.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3504,
              "y": 3975,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3709,
              "y": 3804,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 4240,
              "y": 3950,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3823,
              "y": 4191,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4141,
              "y": 4196,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4496,
              "y": 4088,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3987,
              "y": 3861,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q3",
              "to": "q4",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q6",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "A",
              "write": "A",
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
              "from": "q1",
              "to": "q1",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q2",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q0",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q1",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabbbb",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "b",
          "b",
          "□",
          "□"
        ],
        "head": 6,
        "activeNode": "q1"
      },
      {
        "prof": {
          "message": "Executou: leu 'b', escreveu 'B' e moveu. Agora em q6.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3504,
              "y": 3975,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3709,
              "y": 3804,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 4240,
              "y": 3950,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3823,
              "y": 4191,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4141,
              "y": 4196,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4496,
              "y": 4088,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3987,
              "y": 3861,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q3",
              "to": "q4",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q6",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "A",
              "write": "A",
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
              "from": "q1",
              "to": "q1",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q2",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q0",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q1",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabbbb",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "B",
          "b",
          "□",
          "□"
        ],
        "head": 7,
        "activeNode": "q6"
      },
      {
        "prof": {
          "message": "Executou: leu 'b', escreveu 'B' e moveu. Agora em q2.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3504,
              "y": 3975,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3709,
              "y": 3804,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 4240,
              "y": 3950,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3823,
              "y": 4191,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4141,
              "y": 4196,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4496,
              "y": 4088,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3987,
              "y": 3861,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q3",
              "to": "q4",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q6",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "A",
              "write": "A",
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
              "from": "q1",
              "to": "q1",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q2",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q0",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q1",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabbbb",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "B",
          "B",
          "□",
          "□"
        ],
        "head": 6,
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
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3504,
              "y": 3975,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3709,
              "y": 3804,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 4240,
              "y": 3950,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3823,
              "y": 4191,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4141,
              "y": 4196,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4496,
              "y": 4088,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3987,
              "y": 3861,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q3",
              "to": "q4",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q6",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "A",
              "write": "A",
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
              "from": "q1",
              "to": "q1",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q2",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q0",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q1",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabbbb",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "B",
          "B",
          "□",
          "□"
        ],
        "head": 5,
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
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3504,
              "y": 3975,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3709,
              "y": 3804,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 4240,
              "y": 3950,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3823,
              "y": 4191,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4141,
              "y": 4196,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4496,
              "y": 4088,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3987,
              "y": 3861,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q3",
              "to": "q4",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q6",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "A",
              "write": "A",
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
              "from": "q1",
              "to": "q1",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q2",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q0",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q1",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabbbb",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "B",
          "B",
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
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3504,
              "y": 3975,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3709,
              "y": 3804,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 4240,
              "y": 3950,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3823,
              "y": 4191,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4141,
              "y": 4196,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4496,
              "y": 4088,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3987,
              "y": 3861,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q3",
              "to": "q4",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q6",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "A",
              "write": "A",
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
              "from": "q1",
              "to": "q1",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q2",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q0",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q1",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabbbb",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "B",
          "B",
          "□",
          "□"
        ],
        "head": 3,
        "activeNode": "q2"
      },
      {
        "prof": {
          "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q0.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3504,
              "y": 3975,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3709,
              "y": 3804,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 4240,
              "y": 3950,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3823,
              "y": 4191,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4141,
              "y": 4196,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4496,
              "y": 4088,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3987,
              "y": 3861,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q3",
              "to": "q4",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q6",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "A",
              "write": "A",
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
              "from": "q1",
              "to": "q1",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q2",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q0",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q1",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabbbb",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "B",
          "B",
          "□",
          "□"
        ],
        "head": 4,
        "activeNode": "q0"
      },
      {
        "prof": {
          "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q3.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3504,
              "y": 3975,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3709,
              "y": 3804,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 4240,
              "y": 3950,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3823,
              "y": 4191,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4141,
              "y": 4196,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4496,
              "y": 4088,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3987,
              "y": 3861,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q3",
              "to": "q4",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q6",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "A",
              "write": "A",
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
              "from": "q1",
              "to": "q1",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q2",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q0",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q1",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabbbb",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "B",
          "B",
          "□",
          "□"
        ],
        "head": 5,
        "activeNode": "q3"
      },
      {
        "prof": {
          "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q3.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3504,
              "y": 3975,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3709,
              "y": 3804,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 4240,
              "y": 3950,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3823,
              "y": 4191,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4141,
              "y": 4196,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4496,
              "y": 4088,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3987,
              "y": 3861,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q3",
              "to": "q4",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q6",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "A",
              "write": "A",
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
              "from": "q1",
              "to": "q1",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q2",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q0",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q1",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabbbb",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "B",
          "B",
          "□",
          "□"
        ],
        "head": 6,
        "activeNode": "q3"
      },
      {
        "prof": {
          "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q3.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3504,
              "y": 3975,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3709,
              "y": 3804,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 4240,
              "y": 3950,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3823,
              "y": 4191,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4141,
              "y": 4196,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4496,
              "y": 4088,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3987,
              "y": 3861,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q3",
              "to": "q4",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q6",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "A",
              "write": "A",
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
              "from": "q1",
              "to": "q1",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q2",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q0",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q1",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabbbb",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "B",
          "B",
          "□",
          "□"
        ],
        "head": 7,
        "activeNode": "q3"
      },
      {
        "prof": {
          "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q3.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3504,
              "y": 3975,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3709,
              "y": 3804,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 4240,
              "y": 3950,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3823,
              "y": 4191,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4141,
              "y": 4196,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4496,
              "y": 4088,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3987,
              "y": 3861,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q3",
              "to": "q4",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q6",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "A",
              "write": "A",
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
              "from": "q1",
              "to": "q1",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q2",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q0",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q1",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabbbb",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "B",
          "B",
          "□",
          "□"
        ],
        "head": 8,
        "activeNode": "q3"
      },
      {
        "prof": {
          "message": "Executou: leu '□', escreveu '□' e moveu. Agora em q4.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3504,
              "y": 3975,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3709,
              "y": 3804,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 4240,
              "y": 3950,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3823,
              "y": 4191,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4141,
              "y": 4196,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4496,
              "y": 4088,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3987,
              "y": 3861,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q3",
              "to": "q4",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q6",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "A",
              "write": "A",
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
              "from": "q1",
              "to": "q1",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q2",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q0",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q1",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabbbb",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "B",
          "B",
          "□",
          "□"
        ],
        "head": 7,
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
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3504,
              "y": 3975,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3709,
              "y": 3804,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 4240,
              "y": 3950,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3823,
              "y": 4191,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4141,
              "y": 4196,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4496,
              "y": 4088,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3987,
              "y": 3861,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q3",
              "to": "q4",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q6",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "A",
              "write": "A",
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
              "from": "q1",
              "to": "q1",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q2",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q0",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q1",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabbbb",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "B",
          "B",
          "□",
          "□"
        ],
        "head": 6,
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
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3504,
              "y": 3975,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3709,
              "y": 3804,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 4240,
              "y": 3950,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3823,
              "y": 4191,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4141,
              "y": 4196,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4496,
              "y": 4088,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3987,
              "y": 3861,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q3",
              "to": "q4",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q6",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "A",
              "write": "A",
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
              "from": "q1",
              "to": "q1",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q2",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q0",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q1",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabbbb",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "B",
          "B",
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
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3504,
              "y": 3975,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3709,
              "y": 3804,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 4240,
              "y": 3950,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3823,
              "y": 4191,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4141,
              "y": 4196,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4496,
              "y": 4088,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3987,
              "y": 3861,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q3",
              "to": "q4",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q6",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "A",
              "write": "A",
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
              "from": "q1",
              "to": "q1",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q2",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q0",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q1",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabbbb",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "B",
          "B",
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
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3504,
              "y": 3975,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3709,
              "y": 3804,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 4240,
              "y": 3950,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3823,
              "y": 4191,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4141,
              "y": 4196,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4496,
              "y": 4088,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3987,
              "y": 3861,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q3",
              "to": "q4",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q6",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "A",
              "write": "A",
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
              "from": "q1",
              "to": "q1",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q2",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q0",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q1",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabbbb",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "B",
          "B",
          "□",
          "□"
        ],
        "head": 3,
        "activeNode": "q4"
      },
      {
        "prof": {
          "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q4.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3504,
              "y": 3975,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3709,
              "y": 3804,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 4240,
              "y": 3950,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3823,
              "y": 4191,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4141,
              "y": 4196,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4496,
              "y": 4088,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3987,
              "y": 3861,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q3",
              "to": "q4",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q6",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "A",
              "write": "A",
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
              "from": "q1",
              "to": "q1",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q2",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q0",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q1",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabbbb",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "B",
          "B",
          "□",
          "□"
        ],
        "head": 2,
        "activeNode": "q4"
      },
      {
        "prof": {
          "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q4.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3504,
              "y": 3975,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3709,
              "y": 3804,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 4240,
              "y": 3950,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3823,
              "y": 4191,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4141,
              "y": 4196,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4496,
              "y": 4088,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3987,
              "y": 3861,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q3",
              "to": "q4",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q6",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "A",
              "write": "A",
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
              "from": "q1",
              "to": "q1",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q2",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q0",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q1",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabbbb",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "B",
          "B",
          "□",
          "□"
        ],
        "head": 1,
        "activeNode": "q4"
      },
      {
        "prof": {
          "message": "Chegamos em q5 (estado final) e não há mais nada a ler. Palavra ACEITA! ✓",
          "mood": "feliz"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3504,
              "y": 3975,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3709,
              "y": 3804,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 4240,
              "y": 3950,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3823,
              "y": 4191,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4141,
              "y": 4196,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4496,
              "y": 4088,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3987,
              "y": 3861,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q3",
              "to": "q4",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q6",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "A",
              "write": "A",
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
              "from": "q1",
              "to": "q1",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q2",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q0",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q1",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabbbb",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "B",
          "B",
          "□",
          "□"
        ],
        "head": 2,
        "activeNode": "q5",
        "status": "ACCEPTED"
      },
      {
        "prof": {
          "message": "Para cobrir todos os casos da linguagem, completamos a máquina com as regras restantes.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3504,
              "y": 3975,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3709,
              "y": 3804,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 4240,
              "y": 3950,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3823,
              "y": 4191,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4141,
              "y": 4196,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4496,
              "y": 4088,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3987,
              "y": 3861,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q3",
              "to": "q4",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q6",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "A",
              "write": "A",
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
              "from": "q0",
              "to": "q5",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q2",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q0",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q1",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        }
      },
      {
        "prof": {
          "message": "Grafo finalizado! 🎉 Agora vamos formalizar matematicamente a nossa Máquina de Turing.",
          "mood": "feliz"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3504,
              "y": 3975,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3709,
              "y": 3804,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 4240,
              "y": 3950,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3823,
              "y": 4191,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4141,
              "y": 4196,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4496,
              "y": 4088,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3987,
              "y": 3861,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q3",
              "to": "q4",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q6",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "A",
              "write": "A",
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
              "from": "q0",
              "to": "q5",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q2",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q0",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q1",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "formalIntro": true
      },
      {
        "prof": {
          "message": "Q é o conjunto de ESTADOS: {q0,q1,q2,q3,q4,q5,q6}",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3504,
              "y": 3975,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3709,
              "y": 3804,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 4240,
              "y": 3950,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3823,
              "y": 4191,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4141,
              "y": 4196,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4496,
              "y": 4088,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3987,
              "y": 3861,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q3",
              "to": "q4",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q6",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "A",
              "write": "A",
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
              "from": "q0",
              "to": "q5",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q2",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q0",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q1",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "phase": "FORMAL",
        "formalFill": {
          "states": "{q0,q1,q2,q3,q4,q5,q6}"
        }
      },
      {
        "prof": {
          "message": "Σ é o alfabeto de ENTRADA: {a,b}",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3504,
              "y": 3975,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3709,
              "y": 3804,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 4240,
              "y": 3950,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3823,
              "y": 4191,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4141,
              "y": 4196,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4496,
              "y": 4088,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3987,
              "y": 3861,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q3",
              "to": "q4",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q6",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "A",
              "write": "A",
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
              "from": "q0",
              "to": "q5",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q2",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q0",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q1",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "phase": "FORMAL",
        "formalFill": {
          "sigma": "{a,b}"
        }
      },
      {
        "prof": {
          "message": "Γ é o alfabeto da FITA: {A,B,a,b,□}",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3504,
              "y": 3975,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3709,
              "y": 3804,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 4240,
              "y": 3950,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3823,
              "y": 4191,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4141,
              "y": 4196,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4496,
              "y": 4088,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3987,
              "y": 3861,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q3",
              "to": "q4",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q6",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "A",
              "write": "A",
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
              "from": "q0",
              "to": "q5",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q2",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q0",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q1",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "phase": "FORMAL",
        "formalFill": {
          "gamma": "{A,B,a,b,□}"
        }
      },
      {
        "prof": {
          "message": "q0 é o estado INICIAL: q0",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3504,
              "y": 3975,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3709,
              "y": 3804,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 4240,
              "y": 3950,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3823,
              "y": 4191,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4141,
              "y": 4196,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4496,
              "y": 4088,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3987,
              "y": 3861,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q3",
              "to": "q4",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q6",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "A",
              "write": "A",
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
              "from": "q0",
              "to": "q5",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q2",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q0",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q1",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "phase": "FORMAL",
        "formalFill": {
          "initial": "q0"
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
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3504,
              "y": 3975,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3709,
              "y": 3804,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 4240,
              "y": 3950,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3823,
              "y": 4191,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4141,
              "y": 4196,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4496,
              "y": 4088,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3987,
              "y": 3861,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q3",
              "to": "q4",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q6",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "A",
              "write": "A",
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
              "from": "q0",
              "to": "q5",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q2",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q0",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q1",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "",
              "write": "",
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
          "message": "F é o conjunto de estados de ACEITAÇÃO: {q5}",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3504,
              "y": 3975,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3709,
              "y": 3804,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 4240,
              "y": 3950,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3823,
              "y": 4191,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4141,
              "y": 4196,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4496,
              "y": 4088,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3987,
              "y": 3861,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q3",
              "to": "q4",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q6",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "A",
              "write": "A",
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
              "from": "q0",
              "to": "q5",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q2",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q0",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q1",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "phase": "FORMAL",
        "formalFill": {
          "final": "{q5}"
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
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3504,
              "y": 3975,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3709,
              "y": 3804,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 4240,
              "y": 3950,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3823,
              "y": 4191,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4141,
              "y": 4196,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4496,
              "y": 4088,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3987,
              "y": 3861,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q3",
              "to": "q4",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q6",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "A",
              "write": "A",
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
              "from": "q0",
              "to": "q5",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q2",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q0",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q1",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "phase": "FORMAL",
        "formalFill": {
          "delta": [
            {
              "from": "q3",
              "to": "q4",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q6",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "A",
              "write": "A",
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
              "from": "q0",
              "to": "q5",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q2",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q0",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q1",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        }
      }
    ],
  },
};

export default MT_RECON_L3;
