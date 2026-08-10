// ── MT Reconhecedora L14: {aⁿbⁿ/² / n > 0 e n par} ──────────────────────────────
// Gabarito importado de implementar/MT/gabaritos_oficiais/reconhecedora/L14.xml
// (verificado por fuzz contra a linguagem formal antes da conversão).

const MT_RECON_L14 = {
  id:          'MT_RECON_L14',
  label:       'L14',
  type:        'recognizer',
  level:       'hard',
  alphabet:    ["a","b"],
  tapeAlphabet: ["A","B","a","b","□"],
  language:    '{aⁿbⁿ/² / n > 0 e n par}',
  description: 'Reconheça aⁿb^(n/2): n é sempre par, e a quantidade de "b" é metade da quantidade de "a".',
  hint:        'Para cada DOIS "a" consumidos, marque UM "b" no final.',
  acceptedWords: ["aab","aaaabb","aaaaaabbb"],
  rejectedWords: ["","a","b","ab","aaab","aaaab","aaaaab"],
  formalDescription: {
    sigma:   '{a,b}',
    gamma:   '{A,B,a,b,□}',
    states:  '{q1,q2,q3,q4,q5,q6,q7,q8}',
    initial: 'q1',
    final:   '{q8}',
    blank:   '□',
  },

  guidedLesson: {
    steps: [
      {
        "prof": {
          "message": "Bem-vindo! Vamos construir a MT Reconhecedora da linguagem {aⁿbⁿ/² / n > 0 e n par}.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [],
          "transitions": []
        }
      },
      {
        "prof": {
          "message": "Vamos testar a palavra \"aab\". Começamos no estado inicial q1.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3524,
              "y": 3956,
              "isInitial": true,
              "isFinal": false
            }
          ],
          "transitions": "="
        },
        "simulateWord": "aab",
        "tape": [
          "□",
          "□",
          "a",
          "a",
          "b",
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
              "x": 3524,
              "y": 3956,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3837,
              "y": 3839,
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
        "simulateWord": "aab",
        "tape": [
          "□",
          "□",
          "a",
          "a",
          "b",
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
          "nodes": "=",
          "transitions": "="
        },
        "simulateWord": "aab",
        "tape": [
          "□",
          "□",
          "A",
          "a",
          "b",
          "□",
          "□"
        ],
        "head": 3,
        "activeNode": "q2"
      },
      {
        "prof": {
          "message": "Nova regra: em q2, ao ler 'a', vamos para q3, escrevemos 'A' e movemos à DIREITA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3524,
              "y": 3956,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3837,
              "y": 3839,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4104,
              "y": 3848,
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
              "read": "a",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aab",
        "tape": [
          "□",
          "□",
          "A",
          "a",
          "b",
          "□",
          "□"
        ],
        "head": 3,
        "activeNode": "q2"
      },
      {
        "prof": {
          "message": "Executou: leu 'a', escreveu 'A' e moveu. Agora em q3.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": "=",
          "transitions": "="
        },
        "simulateWord": "aab",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "b",
          "□",
          "□"
        ],
        "head": 4,
        "activeNode": "q3"
      },
      {
        "prof": {
          "message": "Nova regra: em q3, ao ler 'b', vamos para q4, escrevemos 'B' e movemos à ESQUERDA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3524,
              "y": 3956,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3837,
              "y": 3839,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4104,
              "y": 3848,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4465,
              "y": 3949,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
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
              "from": "q2",
              "to": "q3",
              "read": "a",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aab",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "b",
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
          "nodes": "=",
          "transitions": "="
        },
        "simulateWord": "aab",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "□",
          "□"
        ],
        "head": 3,
        "activeNode": "q4"
      },
      {
        "prof": {
          "message": "Nova regra: em q4, ao ler 'A', vamos para q1, escrevemos 'A' e movemos à DIREITA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": "=",
          "transitions": [
            {
              "from": "q4",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
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
              "from": "q2",
              "to": "q3",
              "read": "a",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aab",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
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
          "nodes": "=",
          "transitions": "="
        },
        "simulateWord": "aab",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "□",
          "□"
        ],
        "head": 4,
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
              "x": 3524,
              "y": 3956,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3837,
              "y": 3839,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4104,
              "y": 3848,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4465,
              "y": 3949,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3798,
              "y": 4161,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q1",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
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
              "from": "q2",
              "to": "q3",
              "read": "a",
              "write": "A",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aab",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
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
          "nodes": "=",
          "transitions": "="
        },
        "simulateWord": "aab",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "□",
          "□"
        ],
        "head": 5,
        "activeNode": "q5"
      },
      {
        "prof": {
          "message": "Nova regra: em q5, ao ler '□', vamos para q6, escrevemos '□' e movemos à ESQUERDA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3524,
              "y": 3956,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3837,
              "y": 3839,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4104,
              "y": 3848,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4465,
              "y": 3949,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3798,
              "y": 4161,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4017,
              "y": 4154,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q1",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
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
              "from": "q2",
              "to": "q3",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "",
              "write": "",
              "move": "L"
            }
          ]
        },
        "simulateWord": "aab",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "□",
          "□"
        ],
        "head": 5,
        "activeNode": "q5"
      },
      {
        "prof": {
          "message": "Executou: leu '□', escreveu '□' e moveu. Agora em q6.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": "=",
          "transitions": "="
        },
        "simulateWord": "aab",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "□",
          "□"
        ],
        "head": 4,
        "activeNode": "q6"
      },
      {
        "prof": {
          "message": "Nova regra: em q6, ao ler 'B', vamos para q6, escrevemos 'B' e movemos à ESQUERDA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": "=",
          "transitions": [
            {
              "from": "q1",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
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
              "from": "q6",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "",
              "write": "",
              "move": "L"
            }
          ]
        },
        "simulateWord": "aab",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "□",
          "□"
        ],
        "head": 4,
        "activeNode": "q6"
      },
      {
        "prof": {
          "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q6.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": "=",
          "transitions": "="
        },
        "simulateWord": "aab",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "□",
          "□"
        ],
        "head": 3,
        "activeNode": "q6"
      },
      {
        "prof": {
          "message": "Nova regra: em q6, ao ler 'A', vamos para q7, escrevemos 'A' e movemos à ESQUERDA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3524,
              "y": 3956,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3837,
              "y": 3839,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4104,
              "y": 3848,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4465,
              "y": 3949,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3798,
              "y": 4161,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4017,
              "y": 4154,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4248,
              "y": 4152,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q1",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
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
              "from": "q6",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "A",
              "write": "A",
              "move": "L"
            }
          ]
        },
        "simulateWord": "aab",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "□",
          "□"
        ],
        "head": 3,
        "activeNode": "q6"
      },
      {
        "prof": {
          "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q7.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": "=",
          "transitions": "="
        },
        "simulateWord": "aab",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "□",
          "□"
        ],
        "head": 2,
        "activeNode": "q7"
      },
      {
        "prof": {
          "message": "Nova regra: em q7, ao ler 'A', vamos para q7, escrevemos 'A' e movemos à ESQUERDA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": "=",
          "transitions": [
            {
              "from": "q1",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
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
              "from": "q6",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "A",
              "write": "A",
              "move": "L"
            }
          ]
        },
        "simulateWord": "aab",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "□",
          "□"
        ],
        "head": 2,
        "activeNode": "q7"
      },
      {
        "prof": {
          "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q7.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": "=",
          "transitions": "="
        },
        "simulateWord": "aab",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "□",
          "□"
        ],
        "head": 1,
        "activeNode": "q7"
      },
      {
        "prof": {
          "message": "Nova regra: em q7, ao ler '□', vamos para q8, escrevemos '□' e movemos à DIREITA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3524,
              "y": 3956,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3837,
              "y": 3839,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4104,
              "y": 3848,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4465,
              "y": 3949,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3798,
              "y": 4161,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4017,
              "y": 4154,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4248,
              "y": 4152,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4476,
              "y": 4145,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q1",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
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
              "from": "q6",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q8",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "A",
              "write": "A",
              "move": "L"
            }
          ]
        },
        "simulateWord": "aab",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "□",
          "□"
        ],
        "head": 1,
        "activeNode": "q7"
      },
      {
        "prof": {
          "message": "Chegamos em q8 (estado final) e não há mais nada a ler. Palavra ACEITA! ✓",
          "mood": "feliz"
        },
        "stateUpdate": {
          "nodes": "=",
          "transitions": "="
        },
        "simulateWord": "aab",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "□",
          "□"
        ],
        "head": 2,
        "activeNode": "q8",
        "status": "ACCEPTED"
      },
      {
        "prof": {
          "message": "Próxima palavra: \"aaaabb\". Mesma máquina, novo teste.",
          "mood": "serio"
        },
        "stateUpdate": {
          "nodes": "=",
          "transitions": "="
        },
        "simulateWord": "aaaabb",
        "tape": [
          "□",
          "□",
          "a",
          "a",
          "a",
          "a",
          "b",
          "b",
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
          "nodes": "=",
          "transitions": "="
        },
        "simulateWord": "aaaabb",
        "tape": [
          "□",
          "□",
          "A",
          "a",
          "a",
          "a",
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
          "message": "Executou: leu 'a', escreveu 'A' e moveu. Agora em q3.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": "=",
          "transitions": "="
        },
        "simulateWord": "aaaabb",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "a",
          "a",
          "b",
          "b",
          "□",
          "□"
        ],
        "head": 4,
        "activeNode": "q3"
      },
      {
        "prof": {
          "message": "Nova regra: em q3, ao ler 'a', vamos para q3, escrevemos 'a' e movemos à DIREITA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": "=",
          "transitions": [
            {
              "from": "q1",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
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
              "from": "q6",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q8",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "A",
              "write": "A",
              "move": "L"
            }
          ]
        },
        "simulateWord": "aaaabb",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "a",
          "a",
          "b",
          "b",
          "□",
          "□"
        ],
        "head": 4,
        "activeNode": "q3"
      },
      {
        "prof": {
          "message": "Executou: leu 'a', escreveu 'a' e moveu. Agora em q3.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": "=",
          "transitions": "="
        },
        "simulateWord": "aaaabb",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "a",
          "a",
          "b",
          "b",
          "□",
          "□"
        ],
        "head": 5,
        "activeNode": "q3"
      },
      {
        "prof": {
          "message": "Executou: leu 'a', escreveu 'a' e moveu. Agora em q3.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": "=",
          "transitions": "="
        },
        "simulateWord": "aaaabb",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "a",
          "a",
          "b",
          "b",
          "□",
          "□"
        ],
        "head": 6,
        "activeNode": "q3"
      },
      {
        "prof": {
          "message": "Executou: leu 'b', escreveu 'B' e moveu. Agora em q4.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": "=",
          "transitions": "="
        },
        "simulateWord": "aaaabb",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "a",
          "a",
          "B",
          "b",
          "□",
          "□"
        ],
        "head": 5,
        "activeNode": "q4"
      },
      {
        "prof": {
          "message": "Nova regra: em q4, ao ler 'a', vamos para q4, escrevemos 'a' e movemos à ESQUERDA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": "=",
          "transitions": [
            {
              "from": "q1",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
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
              "from": "q4",
              "to": "q4",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q8",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "A",
              "write": "A",
              "move": "L"
            }
          ]
        },
        "simulateWord": "aaaabb",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "a",
          "a",
          "B",
          "b",
          "□",
          "□"
        ],
        "head": 5,
        "activeNode": "q4"
      },
      {
        "prof": {
          "message": "Executou: leu 'a', escreveu 'a' e moveu. Agora em q4.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": "=",
          "transitions": "="
        },
        "simulateWord": "aaaabb",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "a",
          "a",
          "B",
          "b",
          "□",
          "□"
        ],
        "head": 4,
        "activeNode": "q4"
      },
      {
        "prof": {
          "message": "Executou: leu 'a', escreveu 'a' e moveu. Agora em q4.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": "=",
          "transitions": "="
        },
        "simulateWord": "aaaabb",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "a",
          "a",
          "B",
          "b",
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
          "nodes": "=",
          "transitions": "="
        },
        "simulateWord": "aaaabb",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "a",
          "a",
          "B",
          "b",
          "□",
          "□"
        ],
        "head": 4,
        "activeNode": "q1"
      },
      {
        "prof": {
          "message": "Executou: leu 'a', escreveu 'A' e moveu. Agora em q2.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": "=",
          "transitions": "="
        },
        "simulateWord": "aaaabb",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "A",
          "a",
          "B",
          "b",
          "□",
          "□"
        ],
        "head": 5,
        "activeNode": "q2"
      },
      {
        "prof": {
          "message": "Executou: leu 'a', escreveu 'A' e moveu. Agora em q3.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": "=",
          "transitions": "="
        },
        "simulateWord": "aaaabb",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "A",
          "A",
          "B",
          "b",
          "□",
          "□"
        ],
        "head": 6,
        "activeNode": "q3"
      },
      {
        "prof": {
          "message": "Nova regra: em q3, ao ler 'B', vamos para q3, escrevemos 'B' e movemos à DIREITA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": "=",
          "transitions": [
            {
              "from": "q1",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
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
              "from": "q4",
              "to": "q4",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
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
              "from": "q2",
              "to": "q3",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q8",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "A",
              "write": "A",
              "move": "L"
            }
          ]
        },
        "simulateWord": "aaaabb",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "A",
          "A",
          "B",
          "b",
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
          "nodes": "=",
          "transitions": "="
        },
        "simulateWord": "aaaabb",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "A",
          "A",
          "B",
          "b",
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
          "nodes": "=",
          "transitions": "="
        },
        "simulateWord": "aaaabb",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "A",
          "A",
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
          "message": "Nova regra: em q4, ao ler 'B', vamos para q4, escrevemos 'B' e movemos à ESQUERDA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": "=",
          "transitions": [
            {
              "from": "q1",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
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
              "from": "q6",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
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
              "from": "q2",
              "to": "q3",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q8",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "A",
              "write": "A",
              "move": "L"
            }
          ]
        },
        "simulateWord": "aaaabb",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "A",
          "A",
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
          "nodes": "=",
          "transitions": "="
        },
        "simulateWord": "aaaabb",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "A",
          "A",
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
          "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q1.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": "=",
          "transitions": "="
        },
        "simulateWord": "aaaabb",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "A",
          "A",
          "B",
          "B",
          "□",
          "□"
        ],
        "head": 6,
        "activeNode": "q1"
      },
      {
        "prof": {
          "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q5.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": "=",
          "transitions": "="
        },
        "simulateWord": "aaaabb",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "A",
          "A",
          "B",
          "B",
          "□",
          "□"
        ],
        "head": 7,
        "activeNode": "q5"
      },
      {
        "prof": {
          "message": "Nova regra: em q5, ao ler 'B', vamos para q5, escrevemos 'B' e movemos à DIREITA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": "=",
          "transitions": [
            {
              "from": "q1",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
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
              "from": "q6",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "a",
              "write": "a",
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
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q8",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "A",
              "write": "A",
              "move": "L"
            }
          ]
        },
        "simulateWord": "aaaabb",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "A",
          "A",
          "B",
          "B",
          "□",
          "□"
        ],
        "head": 7,
        "activeNode": "q5"
      },
      {
        "prof": {
          "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q5.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": "=",
          "transitions": "="
        },
        "simulateWord": "aaaabb",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "A",
          "A",
          "B",
          "B",
          "□",
          "□"
        ],
        "head": 8,
        "activeNode": "q5"
      },
      {
        "prof": {
          "message": "Executou: leu '□', escreveu '□' e moveu. Agora em q6.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": "=",
          "transitions": "="
        },
        "simulateWord": "aaaabb",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "A",
          "A",
          "B",
          "B",
          "□",
          "□"
        ],
        "head": 7,
        "activeNode": "q6"
      },
      {
        "prof": {
          "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q6.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": "=",
          "transitions": "="
        },
        "simulateWord": "aaaabb",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "A",
          "A",
          "B",
          "B",
          "□",
          "□"
        ],
        "head": 6,
        "activeNode": "q6"
      },
      {
        "prof": {
          "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q6.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": "=",
          "transitions": "="
        },
        "simulateWord": "aaaabb",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "A",
          "A",
          "B",
          "B",
          "□",
          "□"
        ],
        "head": 5,
        "activeNode": "q6"
      },
      {
        "prof": {
          "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q7.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": "=",
          "transitions": "="
        },
        "simulateWord": "aaaabb",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "A",
          "A",
          "B",
          "B",
          "□",
          "□"
        ],
        "head": 4,
        "activeNode": "q7"
      },
      {
        "prof": {
          "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q7.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": "=",
          "transitions": "="
        },
        "simulateWord": "aaaabb",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "A",
          "A",
          "B",
          "B",
          "□",
          "□"
        ],
        "head": 3,
        "activeNode": "q7"
      },
      {
        "prof": {
          "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q7.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": "=",
          "transitions": "="
        },
        "simulateWord": "aaaabb",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "A",
          "A",
          "B",
          "B",
          "□",
          "□"
        ],
        "head": 2,
        "activeNode": "q7"
      },
      {
        "prof": {
          "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q7.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": "=",
          "transitions": "="
        },
        "simulateWord": "aaaabb",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "A",
          "A",
          "B",
          "B",
          "□",
          "□"
        ],
        "head": 1,
        "activeNode": "q7"
      },
      {
        "prof": {
          "message": "Chegamos em q8 (estado final) e não há mais nada a ler. Palavra ACEITA! ✓",
          "mood": "feliz"
        },
        "stateUpdate": {
          "nodes": "=",
          "transitions": "="
        },
        "simulateWord": "aaaabb",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "A",
          "A",
          "B",
          "B",
          "□",
          "□"
        ],
        "head": 2,
        "activeNode": "q8",
        "status": "ACCEPTED"
      },
      {
        "prof": {
          "message": "Grafo finalizado! 🎉 Agora vamos formalizar matematicamente a nossa Máquina de Turing.",
          "mood": "feliz"
        },
        "stateUpdate": {
          "nodes": "=",
          "transitions": "="
        },
        "formalIntro": true
      },
      {
        "prof": {
          "message": "Q é o conjunto de ESTADOS: {q1,q2,q3,q4,q5,q6,q7,q8}",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": "=",
          "transitions": "="
        },
        "phase": "FORMAL",
        "formalFill": {
          "states": "{q1,q2,q3,q4,q5,q6,q7,q8}"
        }
      },
      {
        "prof": {
          "message": "Σ é o alfabeto de ENTRADA: {a,b}",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": "=",
          "transitions": "="
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
          "nodes": "=",
          "transitions": "="
        },
        "phase": "FORMAL",
        "formalFill": {
          "gamma": "{A,B,a,b,□}"
        }
      },
      {
        "prof": {
          "message": "q0 é o estado INICIAL: q1",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": "=",
          "transitions": "="
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
          "nodes": "=",
          "transitions": "="
        },
        "phase": "FORMAL",
        "formalFill": {
          "blank": "□"
        }
      },
      {
        "prof": {
          "message": "F é o conjunto de estados de ACEITAÇÃO: {q8}",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": "=",
          "transitions": "="
        },
        "phase": "FORMAL",
        "formalFill": {
          "final": "{q8}"
        }
      },
      {
        "prof": {
          "message": "Por fim, a função δ completa — Máquina formalizada! ✓",
          "mood": "feliz"
        },
        "stateUpdate": {
          "nodes": "=",
          "transitions": "="
        },
        "phase": "FORMAL",
        "formalFill": {
          "delta": [
            {
              "from": "q1",
              "to": "q5",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q4",
              "read": "b",
              "write": "B",
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
              "from": "q6",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "a",
              "write": "a",
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
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q8",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q7",
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

export default MT_RECON_L14;
