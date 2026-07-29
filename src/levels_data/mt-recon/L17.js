// ── MT Reconhecedora L17: {aⁿb²ⁿc³ⁿ / n ≥ 0} ──────────────────────────────
// Gabarito importado de implementar/MT/gabaritos_oficiais/reconhecedora/L17.xml
// (verificado por fuzz contra a linguagem formal antes da conversão).

const MT_RECON_L17 = {
  id:          'MT_RECON_L17',
  label:       'L17',
  type:        'recognizer',
  level:       'hard',
  alphabet:    ["a","b","c"],
  tapeAlphabet: ["A","B","C","a","b","c","□"],
  language:    '{aⁿb²ⁿc³ⁿ / n ≥ 0}',
  description: 'Reconheça aⁿb²ⁿc³ⁿ: três blocos em proporção 1:2:3.',
  hint:        'Para cada "a", marque DOIS "b" e TRÊS "c".',
  acceptedWords: ["abbccc","aabbbbcccccc"],
  rejectedWords: ["","a","b","c","ab","abc","abbcc","abbbccc"],
  formalDescription: {
    sigma:   '{a,b,c}',
    gamma:   '{A,B,C,a,b,c,□}',
    states:  '{q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12,q13}',
    initial: 'q1',
    final:   '{q13}',
    blank:   '□',
  },

  guidedLesson: {
    steps: [
      {
        "prof": {
          "message": "Bem-vindo! Vamos construir a MT Reconhecedora da linguagem {aⁿb²ⁿc³ⁿ / n ≥ 0}.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [],
          "transitions": []
        }
      },
      {
        "prof": {
          "message": "Vamos testar a palavra \"abbccc\". Começamos no estado inicial q1.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            }
          ],
          "transitions": []
        },
        "simulateWord": "abbccc",
        "tape": [
          "□",
          "□",
          "a",
          "b",
          "b",
          "c",
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
          "message": "Nova regra: em q1, ao ler 'a', vamos para q2, escrevemos 'A' e movemos à DIREITA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
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
        "simulateWord": "abbccc",
        "tape": [
          "□",
          "□",
          "a",
          "b",
          "b",
          "c",
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
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
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
        "simulateWord": "abbccc",
        "tape": [
          "□",
          "□",
          "A",
          "b",
          "b",
          "c",
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
          "message": "Nova regra: em q2, ao ler 'b', vamos para q3, escrevemos 'B' e movemos à DIREITA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
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
        "simulateWord": "abbccc",
        "tape": [
          "□",
          "□",
          "A",
          "b",
          "b",
          "c",
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
          "message": "Executou: leu 'b', escreveu 'B' e moveu. Agora em q3.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
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
        "simulateWord": "abbccc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "b",
          "c",
          "c",
          "c",
          "□",
          "□"
        ],
        "head": 4,
        "activeNode": "q3"
      },
      {
        "prof": {
          "message": "Nova regra: em q3, ao ler 'b', vamos para q4, escrevemos 'B' e movemos à DIREITA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
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
              "read": "b",
              "write": "B",
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
        "simulateWord": "abbccc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "b",
          "c",
          "c",
          "c",
          "□",
          "□"
        ],
        "head": 4,
        "activeNode": "q3"
      },
      {
        "prof": {
          "message": "Executou: leu 'b', escreveu 'B' e moveu. Agora em q4.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
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
              "read": "b",
              "write": "B",
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
        "simulateWord": "abbccc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "B",
          "c",
          "c",
          "c",
          "□",
          "□"
        ],
        "head": 5,
        "activeNode": "q4"
      },
      {
        "prof": {
          "message": "Nova regra: em q4, ao ler 'c', vamos para q5, escrevemos 'C' e movemos à DIREITA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
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
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
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
        "simulateWord": "abbccc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "B",
          "c",
          "c",
          "c",
          "□",
          "□"
        ],
        "head": 5,
        "activeNode": "q4"
      },
      {
        "prof": {
          "message": "Executou: leu 'c', escreveu 'C' e moveu. Agora em q5.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
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
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
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
        "simulateWord": "abbccc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "B",
          "C",
          "c",
          "c",
          "□",
          "□"
        ],
        "head": 6,
        "activeNode": "q5"
      },
      {
        "prof": {
          "message": "Nova regra: em q5, ao ler 'c', vamos para q6, escrevemos 'C' e movemos à DIREITA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
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
        "simulateWord": "abbccc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "B",
          "C",
          "c",
          "c",
          "□",
          "□"
        ],
        "head": 6,
        "activeNode": "q5"
      },
      {
        "prof": {
          "message": "Executou: leu 'c', escreveu 'C' e moveu. Agora em q6.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
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
        "simulateWord": "abbccc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "B",
          "C",
          "C",
          "c",
          "□",
          "□"
        ],
        "head": 7,
        "activeNode": "q6"
      },
      {
        "prof": {
          "message": "Nova regra: em q6, ao ler 'c', vamos para q7, escrevemos 'C' e movemos à ESQUERDA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
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
        "simulateWord": "abbccc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "B",
          "C",
          "C",
          "c",
          "□",
          "□"
        ],
        "head": 7,
        "activeNode": "q6"
      },
      {
        "prof": {
          "message": "Executou: leu 'c', escreveu 'C' e moveu. Agora em q7.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
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
        "simulateWord": "abbccc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "B",
          "C",
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
          "message": "Nova regra: em q7, ao ler 'C', vamos para q7, escrevemos 'C' e movemos à ESQUERDA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            }
          ]
        },
        "simulateWord": "abbccc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "B",
          "C",
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
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            }
          ]
        },
        "simulateWord": "abbccc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "B",
          "C",
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
          "message": "Executou: leu 'C', escreveu 'C' e moveu. Agora em q7.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            }
          ]
        },
        "simulateWord": "abbccc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "B",
          "C",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 4,
        "activeNode": "q7"
      },
      {
        "prof": {
          "message": "Nova regra: em q7, ao ler 'B', vamos para q7, escrevemos 'B' e movemos à ESQUERDA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            }
          ]
        },
        "simulateWord": "abbccc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "B",
          "C",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 4,
        "activeNode": "q7"
      },
      {
        "prof": {
          "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q7.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            }
          ]
        },
        "simulateWord": "abbccc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "B",
          "C",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 3,
        "activeNode": "q7"
      },
      {
        "prof": {
          "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q7.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            }
          ]
        },
        "simulateWord": "abbccc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "B",
          "C",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 2,
        "activeNode": "q7"
      },
      {
        "prof": {
          "message": "Nova regra: em q7, ao ler 'A', vamos para q1, escrevemos 'A' e movemos à DIREITA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abbccc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "B",
          "C",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 2,
        "activeNode": "q7"
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
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abbccc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "B",
          "C",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 3,
        "activeNode": "q1"
      },
      {
        "prof": {
          "message": "Nova regra: em q1, ao ler 'B', vamos para q8, escrevemos 'B' e movemos à DIREITA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abbccc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "B",
          "C",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 3,
        "activeNode": "q1"
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
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abbccc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "B",
          "C",
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
          "message": "Nova regra: em q8, ao ler 'B', vamos para q8, escrevemos 'B' e movemos à DIREITA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abbccc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "B",
          "C",
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
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abbccc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "B",
          "C",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 5,
        "activeNode": "q8"
      },
      {
        "prof": {
          "message": "Nova regra: em q8, ao ler 'C', vamos para q9, escrevemos 'C' e movemos à DIREITA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abbccc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "B",
          "C",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 5,
        "activeNode": "q8"
      },
      {
        "prof": {
          "message": "Executou: leu 'C', escreveu 'C' e moveu. Agora em q9.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abbccc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "B",
          "C",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 6,
        "activeNode": "q9"
      },
      {
        "prof": {
          "message": "Nova regra: em q9, ao ler 'C', vamos para q9, escrevemos 'C' e movemos à DIREITA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abbccc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "B",
          "C",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 6,
        "activeNode": "q9"
      },
      {
        "prof": {
          "message": "Executou: leu 'C', escreveu 'C' e moveu. Agora em q9.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abbccc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "B",
          "C",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 7,
        "activeNode": "q9"
      },
      {
        "prof": {
          "message": "Executou: leu 'C', escreveu 'C' e moveu. Agora em q9.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abbccc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "B",
          "C",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 8,
        "activeNode": "q9"
      },
      {
        "prof": {
          "message": "Nova regra: em q9, ao ler '□', vamos para q10, escrevemos '□' e movemos à ESQUERDA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3905,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abbccc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "B",
          "C",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 8,
        "activeNode": "q9"
      },
      {
        "prof": {
          "message": "Executou: leu '□', escreveu '□' e moveu. Agora em q10.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3905,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abbccc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "B",
          "C",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 7,
        "activeNode": "q10"
      },
      {
        "prof": {
          "message": "Nova regra: em q10, ao ler 'C', vamos para q10, escrevemos 'C' e movemos à ESQUERDA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3905,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abbccc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "B",
          "C",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 7,
        "activeNode": "q10"
      },
      {
        "prof": {
          "message": "Executou: leu 'C', escreveu 'C' e moveu. Agora em q10.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3905,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abbccc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "B",
          "C",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 6,
        "activeNode": "q10"
      },
      {
        "prof": {
          "message": "Executou: leu 'C', escreveu 'C' e moveu. Agora em q10.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3905,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abbccc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "B",
          "C",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 5,
        "activeNode": "q10"
      },
      {
        "prof": {
          "message": "Executou: leu 'C', escreveu 'C' e moveu. Agora em q10.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3905,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abbccc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "B",
          "C",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 4,
        "activeNode": "q10"
      },
      {
        "prof": {
          "message": "Nova regra: em q10, ao ler 'B', vamos para q11, escrevemos 'B' e movemos à ESQUERDA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3905,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4124,
              "y": 4124,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abbccc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "B",
          "C",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 4,
        "activeNode": "q10"
      },
      {
        "prof": {
          "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q11.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3905,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4124,
              "y": 4124,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abbccc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "B",
          "C",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 3,
        "activeNode": "q11"
      },
      {
        "prof": {
          "message": "Nova regra: em q11, ao ler 'B', vamos para q11, escrevemos 'B' e movemos à ESQUERDA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3905,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4124,
              "y": 4124,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q11",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abbccc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "B",
          "C",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 3,
        "activeNode": "q11"
      },
      {
        "prof": {
          "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q11.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3905,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4124,
              "y": 4124,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q11",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abbccc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "B",
          "C",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 2,
        "activeNode": "q11"
      },
      {
        "prof": {
          "message": "Nova regra: em q11, ao ler 'A', vamos para q12, escrevemos 'A' e movemos à ESQUERDA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3905,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4124,
              "y": 4124,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q12",
              "id": "q12",
              "label": "q12",
              "x": 4349,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q11",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q11",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
            }
          ]
        },
        "simulateWord": "abbccc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "B",
          "C",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 2,
        "activeNode": "q11"
      },
      {
        "prof": {
          "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q12.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3905,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4124,
              "y": 4124,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q12",
              "id": "q12",
              "label": "q12",
              "x": 4349,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q11",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q11",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
            }
          ]
        },
        "simulateWord": "abbccc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "B",
          "C",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 1,
        "activeNode": "q12"
      },
      {
        "prof": {
          "message": "Nova regra: em q12, ao ler '□', vamos para q13, escrevemos '□' e movemos à DIREITA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3905,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4124,
              "y": 4124,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q12",
              "id": "q12",
              "label": "q12",
              "x": 4349,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q13",
              "id": "q13",
              "label": "q13",
              "x": 4581,
              "y": 4119,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q12",
              "to": "q13",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q11",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q11",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
            }
          ]
        },
        "simulateWord": "abbccc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "B",
          "C",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 1,
        "activeNode": "q12"
      },
      {
        "prof": {
          "message": "Chegamos em q13 (estado final) e não há mais nada a ler. Palavra ACEITA! ✓",
          "mood": "feliz"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3905,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4124,
              "y": 4124,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q12",
              "id": "q12",
              "label": "q12",
              "x": 4349,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q13",
              "id": "q13",
              "label": "q13",
              "x": 4581,
              "y": 4119,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q12",
              "to": "q13",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q11",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q11",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
            }
          ]
        },
        "simulateWord": "abbccc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "B",
          "C",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 2,
        "activeNode": "q13",
        "status": "ACCEPTED"
      },
      {
        "prof": {
          "message": "Próxima palavra: \"aabbbbcccccc\". Mesma máquina, novo teste.",
          "mood": "serio"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3905,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4124,
              "y": 4124,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q12",
              "id": "q12",
              "label": "q12",
              "x": 4349,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q13",
              "id": "q13",
              "label": "q13",
              "x": 4581,
              "y": 4119,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q12",
              "to": "q13",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q11",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q11",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
            }
          ]
        },
        "simulateWord": "aabbbbcccccc",
        "tape": [
          "□",
          "□",
          "a",
          "a",
          "b",
          "b",
          "b",
          "b",
          "c",
          "c",
          "c",
          "c",
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
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3905,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4124,
              "y": 4124,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q12",
              "id": "q12",
              "label": "q12",
              "x": 4349,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q13",
              "id": "q13",
              "label": "q13",
              "x": 4581,
              "y": 4119,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q12",
              "to": "q13",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q11",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q11",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
            }
          ]
        },
        "simulateWord": "aabbbbcccccc",
        "tape": [
          "□",
          "□",
          "A",
          "a",
          "b",
          "b",
          "b",
          "b",
          "c",
          "c",
          "c",
          "c",
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
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3905,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4124,
              "y": 4124,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q12",
              "id": "q12",
              "label": "q12",
              "x": 4349,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q13",
              "id": "q13",
              "label": "q13",
              "x": 4581,
              "y": 4119,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q12",
              "to": "q13",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q11",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
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
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q11",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
            }
          ]
        },
        "simulateWord": "aabbbbcccccc",
        "tape": [
          "□",
          "□",
          "A",
          "a",
          "b",
          "b",
          "b",
          "b",
          "c",
          "c",
          "c",
          "c",
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
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3905,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4124,
              "y": 4124,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q12",
              "id": "q12",
              "label": "q12",
              "x": 4349,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q13",
              "id": "q13",
              "label": "q13",
              "x": 4581,
              "y": 4119,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q12",
              "to": "q13",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q11",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
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
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q11",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
            }
          ]
        },
        "simulateWord": "aabbbbcccccc",
        "tape": [
          "□",
          "□",
          "A",
          "a",
          "b",
          "b",
          "b",
          "b",
          "c",
          "c",
          "c",
          "c",
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
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3905,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4124,
              "y": 4124,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q12",
              "id": "q12",
              "label": "q12",
              "x": 4349,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q13",
              "id": "q13",
              "label": "q13",
              "x": 4581,
              "y": 4119,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q12",
              "to": "q13",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q11",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
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
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q11",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
            }
          ]
        },
        "simulateWord": "aabbbbcccccc",
        "tape": [
          "□",
          "□",
          "A",
          "a",
          "B",
          "b",
          "b",
          "b",
          "c",
          "c",
          "c",
          "c",
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
          "message": "Executou: leu 'b', escreveu 'B' e moveu. Agora em q4.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3905,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4124,
              "y": 4124,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q12",
              "id": "q12",
              "label": "q12",
              "x": 4349,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q13",
              "id": "q13",
              "label": "q13",
              "x": 4581,
              "y": 4119,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q12",
              "to": "q13",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q11",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
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
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q11",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
            }
          ]
        },
        "simulateWord": "aabbbbcccccc",
        "tape": [
          "□",
          "□",
          "A",
          "a",
          "B",
          "B",
          "b",
          "b",
          "c",
          "c",
          "c",
          "c",
          "c",
          "c",
          "□",
          "□"
        ],
        "head": 6,
        "activeNode": "q4"
      },
      {
        "prof": {
          "message": "Nova regra: em q4, ao ler 'b', vamos para q4, escrevemos 'b' e movemos à DIREITA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3905,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4124,
              "y": 4124,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q12",
              "id": "q12",
              "label": "q12",
              "x": 4349,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q13",
              "id": "q13",
              "label": "q13",
              "x": 4581,
              "y": 4119,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q12",
              "to": "q13",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q11",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
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
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q11",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
            }
          ]
        },
        "simulateWord": "aabbbbcccccc",
        "tape": [
          "□",
          "□",
          "A",
          "a",
          "B",
          "B",
          "b",
          "b",
          "c",
          "c",
          "c",
          "c",
          "c",
          "c",
          "□",
          "□"
        ],
        "head": 6,
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
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3905,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4124,
              "y": 4124,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q12",
              "id": "q12",
              "label": "q12",
              "x": 4349,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q13",
              "id": "q13",
              "label": "q13",
              "x": 4581,
              "y": 4119,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q12",
              "to": "q13",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q11",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
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
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q11",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
            }
          ]
        },
        "simulateWord": "aabbbbcccccc",
        "tape": [
          "□",
          "□",
          "A",
          "a",
          "B",
          "B",
          "b",
          "b",
          "c",
          "c",
          "c",
          "c",
          "c",
          "c",
          "□",
          "□"
        ],
        "head": 7,
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
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3905,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4124,
              "y": 4124,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q12",
              "id": "q12",
              "label": "q12",
              "x": 4349,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q13",
              "id": "q13",
              "label": "q13",
              "x": 4581,
              "y": 4119,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q12",
              "to": "q13",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q11",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
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
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q11",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
            }
          ]
        },
        "simulateWord": "aabbbbcccccc",
        "tape": [
          "□",
          "□",
          "A",
          "a",
          "B",
          "B",
          "b",
          "b",
          "c",
          "c",
          "c",
          "c",
          "c",
          "c",
          "□",
          "□"
        ],
        "head": 8,
        "activeNode": "q4"
      },
      {
        "prof": {
          "message": "Executou: leu 'c', escreveu 'C' e moveu. Agora em q5.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3905,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4124,
              "y": 4124,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q12",
              "id": "q12",
              "label": "q12",
              "x": 4349,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q13",
              "id": "q13",
              "label": "q13",
              "x": 4581,
              "y": 4119,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q12",
              "to": "q13",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q11",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
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
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q11",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
            }
          ]
        },
        "simulateWord": "aabbbbcccccc",
        "tape": [
          "□",
          "□",
          "A",
          "a",
          "B",
          "B",
          "b",
          "b",
          "C",
          "c",
          "c",
          "c",
          "c",
          "c",
          "□",
          "□"
        ],
        "head": 9,
        "activeNode": "q5"
      },
      {
        "prof": {
          "message": "Executou: leu 'c', escreveu 'C' e moveu. Agora em q6.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3905,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4124,
              "y": 4124,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q12",
              "id": "q12",
              "label": "q12",
              "x": 4349,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q13",
              "id": "q13",
              "label": "q13",
              "x": 4581,
              "y": 4119,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q12",
              "to": "q13",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q11",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
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
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q11",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
            }
          ]
        },
        "simulateWord": "aabbbbcccccc",
        "tape": [
          "□",
          "□",
          "A",
          "a",
          "B",
          "B",
          "b",
          "b",
          "C",
          "C",
          "c",
          "c",
          "c",
          "c",
          "□",
          "□"
        ],
        "head": 10,
        "activeNode": "q6"
      },
      {
        "prof": {
          "message": "Executou: leu 'c', escreveu 'C' e moveu. Agora em q7.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3905,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4124,
              "y": 4124,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q12",
              "id": "q12",
              "label": "q12",
              "x": 4349,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q13",
              "id": "q13",
              "label": "q13",
              "x": 4581,
              "y": 4119,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q12",
              "to": "q13",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q11",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
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
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q11",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
            }
          ]
        },
        "simulateWord": "aabbbbcccccc",
        "tape": [
          "□",
          "□",
          "A",
          "a",
          "B",
          "B",
          "b",
          "b",
          "C",
          "C",
          "C",
          "c",
          "c",
          "c",
          "□",
          "□"
        ],
        "head": 9,
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
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3905,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4124,
              "y": 4124,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q12",
              "id": "q12",
              "label": "q12",
              "x": 4349,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q13",
              "id": "q13",
              "label": "q13",
              "x": 4581,
              "y": 4119,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q12",
              "to": "q13",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q11",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
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
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q11",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
            }
          ]
        },
        "simulateWord": "aabbbbcccccc",
        "tape": [
          "□",
          "□",
          "A",
          "a",
          "B",
          "B",
          "b",
          "b",
          "C",
          "C",
          "C",
          "c",
          "c",
          "c",
          "□",
          "□"
        ],
        "head": 8,
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
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3905,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4124,
              "y": 4124,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q12",
              "id": "q12",
              "label": "q12",
              "x": 4349,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q13",
              "id": "q13",
              "label": "q13",
              "x": 4581,
              "y": 4119,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q12",
              "to": "q13",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q11",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
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
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q11",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
            }
          ]
        },
        "simulateWord": "aabbbbcccccc",
        "tape": [
          "□",
          "□",
          "A",
          "a",
          "B",
          "B",
          "b",
          "b",
          "C",
          "C",
          "C",
          "c",
          "c",
          "c",
          "□",
          "□"
        ],
        "head": 7,
        "activeNode": "q7"
      },
      {
        "prof": {
          "message": "Nova regra: em q7, ao ler 'b', vamos para q7, escrevemos 'b' e movemos à ESQUERDA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3905,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4124,
              "y": 4124,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q12",
              "id": "q12",
              "label": "q12",
              "x": 4349,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q13",
              "id": "q13",
              "label": "q13",
              "x": 4581,
              "y": 4119,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q12",
              "to": "q13",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q11",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
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
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q11",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
            }
          ]
        },
        "simulateWord": "aabbbbcccccc",
        "tape": [
          "□",
          "□",
          "A",
          "a",
          "B",
          "B",
          "b",
          "b",
          "C",
          "C",
          "C",
          "c",
          "c",
          "c",
          "□",
          "□"
        ],
        "head": 7,
        "activeNode": "q7"
      },
      {
        "prof": {
          "message": "Executou: leu 'b', escreveu 'b' e moveu. Agora em q7.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3905,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4124,
              "y": 4124,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q12",
              "id": "q12",
              "label": "q12",
              "x": 4349,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q13",
              "id": "q13",
              "label": "q13",
              "x": 4581,
              "y": 4119,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q12",
              "to": "q13",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q11",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
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
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q11",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
            }
          ]
        },
        "simulateWord": "aabbbbcccccc",
        "tape": [
          "□",
          "□",
          "A",
          "a",
          "B",
          "B",
          "b",
          "b",
          "C",
          "C",
          "C",
          "c",
          "c",
          "c",
          "□",
          "□"
        ],
        "head": 6,
        "activeNode": "q7"
      },
      {
        "prof": {
          "message": "Executou: leu 'b', escreveu 'b' e moveu. Agora em q7.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3905,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4124,
              "y": 4124,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q12",
              "id": "q12",
              "label": "q12",
              "x": 4349,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q13",
              "id": "q13",
              "label": "q13",
              "x": 4581,
              "y": 4119,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q12",
              "to": "q13",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q11",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
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
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q11",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
            }
          ]
        },
        "simulateWord": "aabbbbcccccc",
        "tape": [
          "□",
          "□",
          "A",
          "a",
          "B",
          "B",
          "b",
          "b",
          "C",
          "C",
          "C",
          "c",
          "c",
          "c",
          "□",
          "□"
        ],
        "head": 5,
        "activeNode": "q7"
      },
      {
        "prof": {
          "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q7.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3905,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4124,
              "y": 4124,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q12",
              "id": "q12",
              "label": "q12",
              "x": 4349,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q13",
              "id": "q13",
              "label": "q13",
              "x": 4581,
              "y": 4119,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q12",
              "to": "q13",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q11",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
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
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q11",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
            }
          ]
        },
        "simulateWord": "aabbbbcccccc",
        "tape": [
          "□",
          "□",
          "A",
          "a",
          "B",
          "B",
          "b",
          "b",
          "C",
          "C",
          "C",
          "c",
          "c",
          "c",
          "□",
          "□"
        ],
        "head": 4,
        "activeNode": "q7"
      },
      {
        "prof": {
          "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q7.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3905,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4124,
              "y": 4124,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q12",
              "id": "q12",
              "label": "q12",
              "x": 4349,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q13",
              "id": "q13",
              "label": "q13",
              "x": 4581,
              "y": 4119,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q12",
              "to": "q13",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q11",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
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
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q11",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
            }
          ]
        },
        "simulateWord": "aabbbbcccccc",
        "tape": [
          "□",
          "□",
          "A",
          "a",
          "B",
          "B",
          "b",
          "b",
          "C",
          "C",
          "C",
          "c",
          "c",
          "c",
          "□",
          "□"
        ],
        "head": 3,
        "activeNode": "q7"
      },
      {
        "prof": {
          "message": "Nova regra: em q7, ao ler 'a', vamos para q7, escrevemos 'a' e movemos à ESQUERDA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3905,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4124,
              "y": 4124,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q12",
              "id": "q12",
              "label": "q12",
              "x": 4349,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q13",
              "id": "q13",
              "label": "q13",
              "x": 4581,
              "y": 4119,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q12",
              "to": "q13",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q11",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
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
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q11",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
            }
          ]
        },
        "simulateWord": "aabbbbcccccc",
        "tape": [
          "□",
          "□",
          "A",
          "a",
          "B",
          "B",
          "b",
          "b",
          "C",
          "C",
          "C",
          "c",
          "c",
          "c",
          "□",
          "□"
        ],
        "head": 3,
        "activeNode": "q7"
      },
      {
        "prof": {
          "message": "Executou: leu 'a', escreveu 'a' e moveu. Agora em q7.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3905,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4124,
              "y": 4124,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q12",
              "id": "q12",
              "label": "q12",
              "x": 4349,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q13",
              "id": "q13",
              "label": "q13",
              "x": 4581,
              "y": 4119,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q12",
              "to": "q13",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q11",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
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
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q11",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
            }
          ]
        },
        "simulateWord": "aabbbbcccccc",
        "tape": [
          "□",
          "□",
          "A",
          "a",
          "B",
          "B",
          "b",
          "b",
          "C",
          "C",
          "C",
          "c",
          "c",
          "c",
          "□",
          "□"
        ],
        "head": 2,
        "activeNode": "q7"
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
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3905,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4124,
              "y": 4124,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q12",
              "id": "q12",
              "label": "q12",
              "x": 4349,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q13",
              "id": "q13",
              "label": "q13",
              "x": 4581,
              "y": 4119,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q12",
              "to": "q13",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q11",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
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
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q11",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
            }
          ]
        },
        "simulateWord": "aabbbbcccccc",
        "tape": [
          "□",
          "□",
          "A",
          "a",
          "B",
          "B",
          "b",
          "b",
          "C",
          "C",
          "C",
          "c",
          "c",
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
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3905,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4124,
              "y": 4124,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q12",
              "id": "q12",
              "label": "q12",
              "x": 4349,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q13",
              "id": "q13",
              "label": "q13",
              "x": 4581,
              "y": 4119,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q12",
              "to": "q13",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q11",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
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
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q11",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
            }
          ]
        },
        "simulateWord": "aabbbbcccccc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "b",
          "b",
          "C",
          "C",
          "C",
          "c",
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
          "message": "Nova regra: em q2, ao ler 'B', vamos para q2, escrevemos 'B' e movemos à DIREITA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3905,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4124,
              "y": 4124,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q12",
              "id": "q12",
              "label": "q12",
              "x": 4349,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q13",
              "id": "q13",
              "label": "q13",
              "x": 4581,
              "y": 4119,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q12",
              "to": "q13",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q11",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
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
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q11",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
            }
          ]
        },
        "simulateWord": "aabbbbcccccc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "b",
          "b",
          "C",
          "C",
          "C",
          "c",
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
          "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q2.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3905,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4124,
              "y": 4124,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q12",
              "id": "q12",
              "label": "q12",
              "x": 4349,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q13",
              "id": "q13",
              "label": "q13",
              "x": 4581,
              "y": 4119,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q12",
              "to": "q13",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q11",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
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
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q11",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
            }
          ]
        },
        "simulateWord": "aabbbbcccccc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "b",
          "b",
          "C",
          "C",
          "C",
          "c",
          "c",
          "c",
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
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3905,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4124,
              "y": 4124,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q12",
              "id": "q12",
              "label": "q12",
              "x": 4349,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q13",
              "id": "q13",
              "label": "q13",
              "x": 4581,
              "y": 4119,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q12",
              "to": "q13",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q11",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
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
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q11",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
            }
          ]
        },
        "simulateWord": "aabbbbcccccc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "b",
          "b",
          "C",
          "C",
          "C",
          "c",
          "c",
          "c",
          "□",
          "□"
        ],
        "head": 6,
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
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3905,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4124,
              "y": 4124,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q12",
              "id": "q12",
              "label": "q12",
              "x": 4349,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q13",
              "id": "q13",
              "label": "q13",
              "x": 4581,
              "y": 4119,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q12",
              "to": "q13",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q11",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
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
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q11",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
            }
          ]
        },
        "simulateWord": "aabbbbcccccc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "B",
          "b",
          "C",
          "C",
          "C",
          "c",
          "c",
          "c",
          "□",
          "□"
        ],
        "head": 7,
        "activeNode": "q3"
      },
      {
        "prof": {
          "message": "Executou: leu 'b', escreveu 'B' e moveu. Agora em q4.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3905,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4124,
              "y": 4124,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q12",
              "id": "q12",
              "label": "q12",
              "x": 4349,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q13",
              "id": "q13",
              "label": "q13",
              "x": 4581,
              "y": 4119,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q12",
              "to": "q13",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q11",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
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
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q11",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
            }
          ]
        },
        "simulateWord": "aabbbbcccccc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "B",
          "B",
          "C",
          "C",
          "C",
          "c",
          "c",
          "c",
          "□",
          "□"
        ],
        "head": 8,
        "activeNode": "q4"
      },
      {
        "prof": {
          "message": "Nova regra: em q4, ao ler 'C', vamos para q4, escrevemos 'C' e movemos à DIREITA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3905,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4124,
              "y": 4124,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q12",
              "id": "q12",
              "label": "q12",
              "x": 4349,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q13",
              "id": "q13",
              "label": "q13",
              "x": 4581,
              "y": 4119,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q12",
              "to": "q13",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q11",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
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
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q11",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
            }
          ]
        },
        "simulateWord": "aabbbbcccccc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "B",
          "B",
          "C",
          "C",
          "C",
          "c",
          "c",
          "c",
          "□",
          "□"
        ],
        "head": 8,
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
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3905,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4124,
              "y": 4124,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q12",
              "id": "q12",
              "label": "q12",
              "x": 4349,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q13",
              "id": "q13",
              "label": "q13",
              "x": 4581,
              "y": 4119,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q12",
              "to": "q13",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q11",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
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
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q11",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
            }
          ]
        },
        "simulateWord": "aabbbbcccccc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "B",
          "B",
          "C",
          "C",
          "C",
          "c",
          "c",
          "c",
          "□",
          "□"
        ],
        "head": 9,
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
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3905,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4124,
              "y": 4124,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q12",
              "id": "q12",
              "label": "q12",
              "x": 4349,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q13",
              "id": "q13",
              "label": "q13",
              "x": 4581,
              "y": 4119,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q12",
              "to": "q13",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q11",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
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
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q11",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
            }
          ]
        },
        "simulateWord": "aabbbbcccccc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "B",
          "B",
          "C",
          "C",
          "C",
          "c",
          "c",
          "c",
          "□",
          "□"
        ],
        "head": 10,
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
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3905,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4124,
              "y": 4124,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q12",
              "id": "q12",
              "label": "q12",
              "x": 4349,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q13",
              "id": "q13",
              "label": "q13",
              "x": 4581,
              "y": 4119,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q12",
              "to": "q13",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q11",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
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
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q11",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
            }
          ]
        },
        "simulateWord": "aabbbbcccccc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "B",
          "B",
          "C",
          "C",
          "C",
          "c",
          "c",
          "c",
          "□",
          "□"
        ],
        "head": 11,
        "activeNode": "q4"
      },
      {
        "prof": {
          "message": "Executou: leu 'c', escreveu 'C' e moveu. Agora em q5.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3905,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4124,
              "y": 4124,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q12",
              "id": "q12",
              "label": "q12",
              "x": 4349,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q13",
              "id": "q13",
              "label": "q13",
              "x": 4581,
              "y": 4119,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q12",
              "to": "q13",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q11",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
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
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q11",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
            }
          ]
        },
        "simulateWord": "aabbbbcccccc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "B",
          "B",
          "C",
          "C",
          "C",
          "C",
          "c",
          "c",
          "□",
          "□"
        ],
        "head": 12,
        "activeNode": "q5"
      },
      {
        "prof": {
          "message": "Executou: leu 'c', escreveu 'C' e moveu. Agora em q6.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3905,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4124,
              "y": 4124,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q12",
              "id": "q12",
              "label": "q12",
              "x": 4349,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q13",
              "id": "q13",
              "label": "q13",
              "x": 4581,
              "y": 4119,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q12",
              "to": "q13",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q11",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
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
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q11",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
            }
          ]
        },
        "simulateWord": "aabbbbcccccc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "B",
          "B",
          "C",
          "C",
          "C",
          "C",
          "C",
          "c",
          "□",
          "□"
        ],
        "head": 13,
        "activeNode": "q6"
      },
      {
        "prof": {
          "message": "Executou: leu 'c', escreveu 'C' e moveu. Agora em q7.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3905,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4124,
              "y": 4124,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q12",
              "id": "q12",
              "label": "q12",
              "x": 4349,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q13",
              "id": "q13",
              "label": "q13",
              "x": 4581,
              "y": 4119,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q12",
              "to": "q13",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q11",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
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
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q11",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
            }
          ]
        },
        "simulateWord": "aabbbbcccccc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "B",
          "B",
          "C",
          "C",
          "C",
          "C",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 12,
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
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3905,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4124,
              "y": 4124,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q12",
              "id": "q12",
              "label": "q12",
              "x": 4349,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q13",
              "id": "q13",
              "label": "q13",
              "x": 4581,
              "y": 4119,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q12",
              "to": "q13",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q11",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
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
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q11",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
            }
          ]
        },
        "simulateWord": "aabbbbcccccc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "B",
          "B",
          "C",
          "C",
          "C",
          "C",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 11,
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
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3905,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4124,
              "y": 4124,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q12",
              "id": "q12",
              "label": "q12",
              "x": 4349,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q13",
              "id": "q13",
              "label": "q13",
              "x": 4581,
              "y": 4119,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q12",
              "to": "q13",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q11",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
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
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q11",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
            }
          ]
        },
        "simulateWord": "aabbbbcccccc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "B",
          "B",
          "C",
          "C",
          "C",
          "C",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 10,
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
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3905,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4124,
              "y": 4124,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q12",
              "id": "q12",
              "label": "q12",
              "x": 4349,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q13",
              "id": "q13",
              "label": "q13",
              "x": 4581,
              "y": 4119,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q12",
              "to": "q13",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q11",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
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
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q11",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
            }
          ]
        },
        "simulateWord": "aabbbbcccccc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "B",
          "B",
          "C",
          "C",
          "C",
          "C",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 9,
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
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3905,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4124,
              "y": 4124,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q12",
              "id": "q12",
              "label": "q12",
              "x": 4349,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q13",
              "id": "q13",
              "label": "q13",
              "x": 4581,
              "y": 4119,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q12",
              "to": "q13",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q11",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
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
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q11",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
            }
          ]
        },
        "simulateWord": "aabbbbcccccc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "B",
          "B",
          "C",
          "C",
          "C",
          "C",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 8,
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
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3905,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4124,
              "y": 4124,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q12",
              "id": "q12",
              "label": "q12",
              "x": 4349,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q13",
              "id": "q13",
              "label": "q13",
              "x": 4581,
              "y": 4119,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q12",
              "to": "q13",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q11",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
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
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q11",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
            }
          ]
        },
        "simulateWord": "aabbbbcccccc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "B",
          "B",
          "C",
          "C",
          "C",
          "C",
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
          "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q7.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3905,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4124,
              "y": 4124,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q12",
              "id": "q12",
              "label": "q12",
              "x": 4349,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q13",
              "id": "q13",
              "label": "q13",
              "x": 4581,
              "y": 4119,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q12",
              "to": "q13",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q11",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
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
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q11",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
            }
          ]
        },
        "simulateWord": "aabbbbcccccc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "B",
          "B",
          "C",
          "C",
          "C",
          "C",
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
          "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q7.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3905,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4124,
              "y": 4124,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q12",
              "id": "q12",
              "label": "q12",
              "x": 4349,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q13",
              "id": "q13",
              "label": "q13",
              "x": 4581,
              "y": 4119,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q12",
              "to": "q13",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q11",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
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
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q11",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
            }
          ]
        },
        "simulateWord": "aabbbbcccccc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "B",
          "B",
          "C",
          "C",
          "C",
          "C",
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
          "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q7.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3905,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4124,
              "y": 4124,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q12",
              "id": "q12",
              "label": "q12",
              "x": 4349,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q13",
              "id": "q13",
              "label": "q13",
              "x": 4581,
              "y": 4119,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q12",
              "to": "q13",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q11",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
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
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q11",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
            }
          ]
        },
        "simulateWord": "aabbbbcccccc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "B",
          "B",
          "C",
          "C",
          "C",
          "C",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 4,
        "activeNode": "q7"
      },
      {
        "prof": {
          "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q7.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3905,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4124,
              "y": 4124,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q12",
              "id": "q12",
              "label": "q12",
              "x": 4349,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q13",
              "id": "q13",
              "label": "q13",
              "x": 4581,
              "y": 4119,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q12",
              "to": "q13",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q11",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
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
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q11",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
            }
          ]
        },
        "simulateWord": "aabbbbcccccc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "B",
          "B",
          "C",
          "C",
          "C",
          "C",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 3,
        "activeNode": "q7"
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
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3905,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4124,
              "y": 4124,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q12",
              "id": "q12",
              "label": "q12",
              "x": 4349,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q13",
              "id": "q13",
              "label": "q13",
              "x": 4581,
              "y": 4119,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q12",
              "to": "q13",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q11",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
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
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q11",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
            }
          ]
        },
        "simulateWord": "aabbbbcccccc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "B",
          "B",
          "C",
          "C",
          "C",
          "C",
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
          "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q8.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3905,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4124,
              "y": 4124,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q12",
              "id": "q12",
              "label": "q12",
              "x": 4349,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q13",
              "id": "q13",
              "label": "q13",
              "x": 4581,
              "y": 4119,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q12",
              "to": "q13",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q11",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
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
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q11",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
            }
          ]
        },
        "simulateWord": "aabbbbcccccc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "B",
          "B",
          "C",
          "C",
          "C",
          "C",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 5,
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
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3905,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4124,
              "y": 4124,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q12",
              "id": "q12",
              "label": "q12",
              "x": 4349,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q13",
              "id": "q13",
              "label": "q13",
              "x": 4581,
              "y": 4119,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q12",
              "to": "q13",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q11",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
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
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q11",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
            }
          ]
        },
        "simulateWord": "aabbbbcccccc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "B",
          "B",
          "C",
          "C",
          "C",
          "C",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 6,
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
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3905,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4124,
              "y": 4124,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q12",
              "id": "q12",
              "label": "q12",
              "x": 4349,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q13",
              "id": "q13",
              "label": "q13",
              "x": 4581,
              "y": 4119,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q12",
              "to": "q13",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q11",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
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
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q11",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
            }
          ]
        },
        "simulateWord": "aabbbbcccccc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "B",
          "B",
          "C",
          "C",
          "C",
          "C",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 7,
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
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3905,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4124,
              "y": 4124,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q12",
              "id": "q12",
              "label": "q12",
              "x": 4349,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q13",
              "id": "q13",
              "label": "q13",
              "x": 4581,
              "y": 4119,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q12",
              "to": "q13",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q11",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
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
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q11",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
            }
          ]
        },
        "simulateWord": "aabbbbcccccc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "B",
          "B",
          "C",
          "C",
          "C",
          "C",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 8,
        "activeNode": "q8"
      },
      {
        "prof": {
          "message": "Executou: leu 'C', escreveu 'C' e moveu. Agora em q9.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3905,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4124,
              "y": 4124,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q12",
              "id": "q12",
              "label": "q12",
              "x": 4349,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q13",
              "id": "q13",
              "label": "q13",
              "x": 4581,
              "y": 4119,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q12",
              "to": "q13",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q11",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
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
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q11",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
            }
          ]
        },
        "simulateWord": "aabbbbcccccc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "B",
          "B",
          "C",
          "C",
          "C",
          "C",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 9,
        "activeNode": "q9"
      },
      {
        "prof": {
          "message": "Executou: leu 'C', escreveu 'C' e moveu. Agora em q9.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3905,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4124,
              "y": 4124,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q12",
              "id": "q12",
              "label": "q12",
              "x": 4349,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q13",
              "id": "q13",
              "label": "q13",
              "x": 4581,
              "y": 4119,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q12",
              "to": "q13",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q11",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
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
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q11",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
            }
          ]
        },
        "simulateWord": "aabbbbcccccc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "B",
          "B",
          "C",
          "C",
          "C",
          "C",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 10,
        "activeNode": "q9"
      },
      {
        "prof": {
          "message": "Executou: leu 'C', escreveu 'C' e moveu. Agora em q9.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3905,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4124,
              "y": 4124,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q12",
              "id": "q12",
              "label": "q12",
              "x": 4349,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q13",
              "id": "q13",
              "label": "q13",
              "x": 4581,
              "y": 4119,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q12",
              "to": "q13",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q11",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
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
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q11",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
            }
          ]
        },
        "simulateWord": "aabbbbcccccc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "B",
          "B",
          "C",
          "C",
          "C",
          "C",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 11,
        "activeNode": "q9"
      },
      {
        "prof": {
          "message": "Executou: leu 'C', escreveu 'C' e moveu. Agora em q9.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3905,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4124,
              "y": 4124,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q12",
              "id": "q12",
              "label": "q12",
              "x": 4349,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q13",
              "id": "q13",
              "label": "q13",
              "x": 4581,
              "y": 4119,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q12",
              "to": "q13",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q11",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
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
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q11",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
            }
          ]
        },
        "simulateWord": "aabbbbcccccc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "B",
          "B",
          "C",
          "C",
          "C",
          "C",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 12,
        "activeNode": "q9"
      },
      {
        "prof": {
          "message": "Executou: leu 'C', escreveu 'C' e moveu. Agora em q9.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3905,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4124,
              "y": 4124,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q12",
              "id": "q12",
              "label": "q12",
              "x": 4349,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q13",
              "id": "q13",
              "label": "q13",
              "x": 4581,
              "y": 4119,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q12",
              "to": "q13",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q11",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
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
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q11",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
            }
          ]
        },
        "simulateWord": "aabbbbcccccc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "B",
          "B",
          "C",
          "C",
          "C",
          "C",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 13,
        "activeNode": "q9"
      },
      {
        "prof": {
          "message": "Executou: leu 'C', escreveu 'C' e moveu. Agora em q9.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3905,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4124,
              "y": 4124,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q12",
              "id": "q12",
              "label": "q12",
              "x": 4349,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q13",
              "id": "q13",
              "label": "q13",
              "x": 4581,
              "y": 4119,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q12",
              "to": "q13",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q11",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
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
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q11",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
            }
          ]
        },
        "simulateWord": "aabbbbcccccc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "B",
          "B",
          "C",
          "C",
          "C",
          "C",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 14,
        "activeNode": "q9"
      },
      {
        "prof": {
          "message": "Executou: leu '□', escreveu '□' e moveu. Agora em q10.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3905,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4124,
              "y": 4124,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q12",
              "id": "q12",
              "label": "q12",
              "x": 4349,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q13",
              "id": "q13",
              "label": "q13",
              "x": 4581,
              "y": 4119,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q12",
              "to": "q13",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q11",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
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
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q11",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
            }
          ]
        },
        "simulateWord": "aabbbbcccccc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "B",
          "B",
          "C",
          "C",
          "C",
          "C",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 13,
        "activeNode": "q10"
      },
      {
        "prof": {
          "message": "Executou: leu 'C', escreveu 'C' e moveu. Agora em q10.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3905,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4124,
              "y": 4124,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q12",
              "id": "q12",
              "label": "q12",
              "x": 4349,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q13",
              "id": "q13",
              "label": "q13",
              "x": 4581,
              "y": 4119,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q12",
              "to": "q13",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q11",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
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
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q11",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
            }
          ]
        },
        "simulateWord": "aabbbbcccccc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "B",
          "B",
          "C",
          "C",
          "C",
          "C",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 12,
        "activeNode": "q10"
      },
      {
        "prof": {
          "message": "Executou: leu 'C', escreveu 'C' e moveu. Agora em q10.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3905,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4124,
              "y": 4124,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q12",
              "id": "q12",
              "label": "q12",
              "x": 4349,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q13",
              "id": "q13",
              "label": "q13",
              "x": 4581,
              "y": 4119,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q12",
              "to": "q13",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q11",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
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
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q11",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
            }
          ]
        },
        "simulateWord": "aabbbbcccccc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "B",
          "B",
          "C",
          "C",
          "C",
          "C",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 11,
        "activeNode": "q10"
      },
      {
        "prof": {
          "message": "Executou: leu 'C', escreveu 'C' e moveu. Agora em q10.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3905,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4124,
              "y": 4124,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q12",
              "id": "q12",
              "label": "q12",
              "x": 4349,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q13",
              "id": "q13",
              "label": "q13",
              "x": 4581,
              "y": 4119,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q12",
              "to": "q13",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q11",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
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
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q11",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
            }
          ]
        },
        "simulateWord": "aabbbbcccccc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "B",
          "B",
          "C",
          "C",
          "C",
          "C",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 10,
        "activeNode": "q10"
      },
      {
        "prof": {
          "message": "Executou: leu 'C', escreveu 'C' e moveu. Agora em q10.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3905,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4124,
              "y": 4124,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q12",
              "id": "q12",
              "label": "q12",
              "x": 4349,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q13",
              "id": "q13",
              "label": "q13",
              "x": 4581,
              "y": 4119,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q12",
              "to": "q13",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q11",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
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
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q11",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
            }
          ]
        },
        "simulateWord": "aabbbbcccccc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "B",
          "B",
          "C",
          "C",
          "C",
          "C",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 9,
        "activeNode": "q10"
      },
      {
        "prof": {
          "message": "Executou: leu 'C', escreveu 'C' e moveu. Agora em q10.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3905,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4124,
              "y": 4124,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q12",
              "id": "q12",
              "label": "q12",
              "x": 4349,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q13",
              "id": "q13",
              "label": "q13",
              "x": 4581,
              "y": 4119,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q12",
              "to": "q13",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q11",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
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
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q11",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
            }
          ]
        },
        "simulateWord": "aabbbbcccccc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "B",
          "B",
          "C",
          "C",
          "C",
          "C",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 8,
        "activeNode": "q10"
      },
      {
        "prof": {
          "message": "Executou: leu 'C', escreveu 'C' e moveu. Agora em q10.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3905,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4124,
              "y": 4124,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q12",
              "id": "q12",
              "label": "q12",
              "x": 4349,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q13",
              "id": "q13",
              "label": "q13",
              "x": 4581,
              "y": 4119,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q12",
              "to": "q13",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q11",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
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
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q11",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
            }
          ]
        },
        "simulateWord": "aabbbbcccccc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "B",
          "B",
          "C",
          "C",
          "C",
          "C",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 7,
        "activeNode": "q10"
      },
      {
        "prof": {
          "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q11.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3905,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4124,
              "y": 4124,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q12",
              "id": "q12",
              "label": "q12",
              "x": 4349,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q13",
              "id": "q13",
              "label": "q13",
              "x": 4581,
              "y": 4119,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q12",
              "to": "q13",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q11",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
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
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q11",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
            }
          ]
        },
        "simulateWord": "aabbbbcccccc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "B",
          "B",
          "C",
          "C",
          "C",
          "C",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 6,
        "activeNode": "q11"
      },
      {
        "prof": {
          "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q11.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3905,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4124,
              "y": 4124,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q12",
              "id": "q12",
              "label": "q12",
              "x": 4349,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q13",
              "id": "q13",
              "label": "q13",
              "x": 4581,
              "y": 4119,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q12",
              "to": "q13",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q11",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
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
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q11",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
            }
          ]
        },
        "simulateWord": "aabbbbcccccc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "B",
          "B",
          "C",
          "C",
          "C",
          "C",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 5,
        "activeNode": "q11"
      },
      {
        "prof": {
          "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q11.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3905,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4124,
              "y": 4124,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q12",
              "id": "q12",
              "label": "q12",
              "x": 4349,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q13",
              "id": "q13",
              "label": "q13",
              "x": 4581,
              "y": 4119,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q12",
              "to": "q13",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q11",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
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
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q11",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
            }
          ]
        },
        "simulateWord": "aabbbbcccccc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "B",
          "B",
          "C",
          "C",
          "C",
          "C",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 4,
        "activeNode": "q11"
      },
      {
        "prof": {
          "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q11.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3905,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4124,
              "y": 4124,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q12",
              "id": "q12",
              "label": "q12",
              "x": 4349,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q13",
              "id": "q13",
              "label": "q13",
              "x": 4581,
              "y": 4119,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q12",
              "to": "q13",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q11",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
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
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q11",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
            }
          ]
        },
        "simulateWord": "aabbbbcccccc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "B",
          "B",
          "C",
          "C",
          "C",
          "C",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 3,
        "activeNode": "q11"
      },
      {
        "prof": {
          "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q12.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3905,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4124,
              "y": 4124,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q12",
              "id": "q12",
              "label": "q12",
              "x": 4349,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q13",
              "id": "q13",
              "label": "q13",
              "x": 4581,
              "y": 4119,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q12",
              "to": "q13",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q11",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
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
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q11",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
            }
          ]
        },
        "simulateWord": "aabbbbcccccc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "B",
          "B",
          "C",
          "C",
          "C",
          "C",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 2,
        "activeNode": "q12"
      },
      {
        "prof": {
          "message": "Nova regra: em q12, ao ler 'A', vamos para q12, escrevemos 'A' e movemos à ESQUERDA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3905,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4124,
              "y": 4124,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q12",
              "id": "q12",
              "label": "q12",
              "x": 4349,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q13",
              "id": "q13",
              "label": "q13",
              "x": 4581,
              "y": 4119,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q12",
              "to": "q13",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q11",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q12",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
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
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q11",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
            }
          ]
        },
        "simulateWord": "aabbbbcccccc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "B",
          "B",
          "C",
          "C",
          "C",
          "C",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 2,
        "activeNode": "q12"
      },
      {
        "prof": {
          "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q12.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3905,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4124,
              "y": 4124,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q12",
              "id": "q12",
              "label": "q12",
              "x": 4349,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q13",
              "id": "q13",
              "label": "q13",
              "x": 4581,
              "y": 4119,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q12",
              "to": "q13",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q11",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q12",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
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
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q11",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
            }
          ]
        },
        "simulateWord": "aabbbbcccccc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "B",
          "B",
          "C",
          "C",
          "C",
          "C",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 1,
        "activeNode": "q12"
      },
      {
        "prof": {
          "message": "Chegamos em q13 (estado final) e não há mais nada a ler. Palavra ACEITA! ✓",
          "mood": "feliz"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3905,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4124,
              "y": 4124,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q12",
              "id": "q12",
              "label": "q12",
              "x": 4349,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q13",
              "id": "q13",
              "label": "q13",
              "x": 4581,
              "y": 4119,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q12",
              "to": "q13",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q11",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q12",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
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
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q11",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
            }
          ]
        },
        "simulateWord": "aabbbbcccccc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "B",
          "B",
          "B",
          "C",
          "C",
          "C",
          "C",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 2,
        "activeNode": "q13",
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
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3905,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4124,
              "y": 4124,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q12",
              "id": "q12",
              "label": "q12",
              "x": 4349,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q13",
              "id": "q13",
              "label": "q13",
              "x": 4581,
              "y": 4119,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q12",
              "to": "q13",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q11",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q12",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
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
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q11",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
            }
          ]
        },
        "formalIntro": true
      },
      {
        "prof": {
          "message": "Q é o conjunto de ESTADOS: {q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12,q13}",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3905,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4124,
              "y": 4124,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q12",
              "id": "q12",
              "label": "q12",
              "x": 4349,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q13",
              "id": "q13",
              "label": "q13",
              "x": 4581,
              "y": 4119,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q12",
              "to": "q13",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q11",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q12",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
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
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q11",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
            }
          ]
        },
        "phase": "FORMAL",
        "formalFill": {
          "states": "{q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12,q13}"
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
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3905,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4124,
              "y": 4124,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q12",
              "id": "q12",
              "label": "q12",
              "x": 4349,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q13",
              "id": "q13",
              "label": "q13",
              "x": 4581,
              "y": 4119,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q12",
              "to": "q13",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q11",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q12",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
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
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q11",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
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
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3905,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4124,
              "y": 4124,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q12",
              "id": "q12",
              "label": "q12",
              "x": 4349,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q13",
              "id": "q13",
              "label": "q13",
              "x": 4581,
              "y": 4119,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q12",
              "to": "q13",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q11",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q12",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
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
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q11",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
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
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3905,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4124,
              "y": 4124,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q12",
              "id": "q12",
              "label": "q12",
              "x": 4349,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q13",
              "id": "q13",
              "label": "q13",
              "x": 4581,
              "y": 4119,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q12",
              "to": "q13",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q11",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q12",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
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
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q11",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
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
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3905,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4124,
              "y": 4124,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q12",
              "id": "q12",
              "label": "q12",
              "x": 4349,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q13",
              "id": "q13",
              "label": "q13",
              "x": 4581,
              "y": 4119,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q12",
              "to": "q13",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q11",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q12",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
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
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q11",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
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
          "message": "F é o conjunto de estados de ACEITAÇÃO: {q13}",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3905,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4124,
              "y": 4124,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q12",
              "id": "q12",
              "label": "q12",
              "x": 4349,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q13",
              "id": "q13",
              "label": "q13",
              "x": 4581,
              "y": 4119,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q12",
              "to": "q13",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q11",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q12",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
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
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q11",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
            }
          ]
        },
        "phase": "FORMAL",
        "formalFill": {
          "final": "{q13}"
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
              "x": 3235,
              "y": 3964,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3512,
              "y": 3883,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 3759,
              "y": 3874,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4029,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4286,
              "y": 3876,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4513,
              "y": 3888,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4765,
              "y": 3962,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3442,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3678,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3905,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4124,
              "y": 4124,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q12",
              "id": "q12",
              "label": "q12",
              "x": 4349,
              "y": 4126,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q13",
              "id": "q13",
              "label": "q13",
              "x": 4581,
              "y": 4119,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q12",
              "to": "q13",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q11",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q12",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
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
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q11",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
            }
          ]
        },
        "phase": "FORMAL",
        "formalFill": {
          "delta": [
            {
              "from": "q8",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q12",
              "to": "q13",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q11",
              "to": "q11",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q12",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q1",
              "read": "A",
              "write": "A",
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
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q11",
              "to": "q12",
              "read": "A",
              "write": "A",
              "move": "L"
            }
          ]
        }
      }
    ],
  },
};

export default MT_RECON_L17;
