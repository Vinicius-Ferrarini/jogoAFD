// ── MT Reconhecedora L10: {aⁱbʲcᵏ / j = i + k, i ≥ 0, k ≥ 0} ──────────────────────────────
// Gabarito importado de implementar/MT/gabaritos_oficiais/reconhecedora/L10.xml
// (verificado por fuzz contra a linguagem formal antes da conversão).

const MT_RECON_L10 = {
  id:          'MT_RECON_L10',
  label:       'L10',
  type:        'recognizer',
  level:       'hard',
  alphabet:    ["a","b","c"],
  tapeAlphabet: ["A","B","C","a","b","c","□"],
  language:    '{aⁱbʲcᵏ / j = i + k, i ≥ 0, k ≥ 0}',
  description: 'Reconheça aⁱbʲcᵏ onde a quantidade de "b" é igual à soma das quantidades de "a" e "c".',
  hint:        'Para cada "a" no início, marque um "b"; para cada "c" no final, marque outro "b". No fim, todos os "b" devem estar marcados.',
  acceptedWords: ["","bc","ab","abbc","aabb","aabbbc"],
  rejectedWords: ["a","b","c","bb","abc","ac","aabc","abcc"],
  formalDescription: {
    sigma:   '{a,b,c}',
    gamma:   '{A,B,C,a,b,c,□}',
    states:  '{q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11}',
    initial: 'q1',
    final:   '{q11}',
    blank:   '□',
  },

  guidedLesson: {
    steps: [
      {
        "prof": {
          "message": "Bem-vindo! Vamos construir a MT Reconhecedora da linguagem {aⁱbʲcᵏ / j = i + k, i ≥ 0, k ≥ 0}.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [],
          "transitions": []
        }
      },
      {
        "prof": {
          "message": "Vamos testar a palavra λ (palavra vazia). Começamos no estado inicial q1.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3616,
              "y": 3801,
              "isInitial": true,
              "isFinal": false
            }
          ],
          "transitions": []
        },
        "simulateWord": "",
        "tape": [
          "□",
          "□",
          "□",
          "□"
        ],
        "head": 2,
        "activeNode": "q1"
      },
      {
        "prof": {
          "message": "Nova regra: em q1, ao ler '□', vamos para q9, escrevemos '□' e movemos à ESQUERDA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3616,
              "y": 3801,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4012,
              "y": 4361,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q1",
              "to": "q9",
              "read": "",
              "write": "",
              "move": "L"
            }
          ]
        },
        "simulateWord": "",
        "tape": [
          "□",
          "□",
          "□",
          "□"
        ],
        "head": 2,
        "activeNode": "q1"
      },
      {
        "prof": {
          "message": "Executou: leu '□', escreveu '□' e moveu. Agora em q9.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3616,
              "y": 3801,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4012,
              "y": 4361,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q1",
              "to": "q9",
              "read": "",
              "write": "",
              "move": "L"
            }
          ]
        },
        "simulateWord": "",
        "tape": [
          "□",
          "□",
          "□",
          "□"
        ],
        "head": 1,
        "activeNode": "q9"
      },
      {
        "prof": {
          "message": "Nova regra: em q9, ao ler '□', vamos para q11, escrevemos '□' e movemos à DIREITA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3616,
              "y": 3801,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4012,
              "y": 4361,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4586,
              "y": 4368,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q9",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q9",
              "read": "",
              "write": "",
              "move": "L"
            }
          ]
        },
        "simulateWord": "",
        "tape": [
          "□",
          "□",
          "□",
          "□"
        ],
        "head": 1,
        "activeNode": "q9"
      },
      {
        "prof": {
          "message": "Chegamos em q11 (estado final) e não há mais nada a ler. Palavra ACEITA! ✓",
          "mood": "feliz"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3616,
              "y": 3801,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4012,
              "y": 4361,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4586,
              "y": 4368,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q9",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q9",
              "read": "",
              "write": "",
              "move": "L"
            }
          ]
        },
        "simulateWord": "",
        "tape": [
          "□",
          "□",
          "□",
          "□"
        ],
        "head": 2,
        "activeNode": "q11",
        "status": "ACCEPTED"
      },
      {
        "prof": {
          "message": "Próxima palavra: \"ab\". Mesma máquina, novo teste.",
          "mood": "serio"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3616,
              "y": 3801,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4012,
              "y": 4361,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4586,
              "y": 4368,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q9",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q9",
              "read": "",
              "write": "",
              "move": "L"
            }
          ]
        },
        "simulateWord": "ab",
        "tape": [
          "□",
          "□",
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
              "x": 3616,
              "y": 3801,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3924,
              "y": 3632,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4012,
              "y": 4361,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4586,
              "y": 4368,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q9",
              "to": "q11",
              "read": "",
              "write": "",
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
              "from": "q1",
              "to": "q9",
              "read": "",
              "write": "",
              "move": "L"
            }
          ]
        },
        "simulateWord": "ab",
        "tape": [
          "□",
          "□",
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
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3616,
              "y": 3801,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3924,
              "y": 3632,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4012,
              "y": 4361,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4586,
              "y": 4368,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q9",
              "to": "q11",
              "read": "",
              "write": "",
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
              "from": "q1",
              "to": "q9",
              "read": "",
              "write": "",
              "move": "L"
            }
          ]
        },
        "simulateWord": "ab",
        "tape": [
          "□",
          "□",
          "A",
          "b",
          "□",
          "□"
        ],
        "head": 3,
        "activeNode": "q2"
      },
      {
        "prof": {
          "message": "Nova regra: em q2, ao ler 'b', vamos para q3, escrevemos 'B' e movemos à ESQUERDA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3616,
              "y": 3801,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3924,
              "y": 3632,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4239,
              "y": 3801,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4012,
              "y": 4361,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4586,
              "y": 4368,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q9",
              "to": "q11",
              "read": "",
              "write": "",
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
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q9",
              "read": "",
              "write": "",
              "move": "L"
            }
          ]
        },
        "simulateWord": "ab",
        "tape": [
          "□",
          "□",
          "A",
          "b",
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
              "x": 3616,
              "y": 3801,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3924,
              "y": 3632,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4239,
              "y": 3801,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4012,
              "y": 4361,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4586,
              "y": 4368,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q9",
              "to": "q11",
              "read": "",
              "write": "",
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
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q9",
              "read": "",
              "write": "",
              "move": "L"
            }
          ]
        },
        "simulateWord": "ab",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "□",
          "□"
        ],
        "head": 2,
        "activeNode": "q3"
      },
      {
        "prof": {
          "message": "Nova regra: em q3, ao ler 'A', vamos para q1, escrevemos 'A' e movemos à DIREITA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3616,
              "y": 3801,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3924,
              "y": 3632,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4239,
              "y": 3801,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4012,
              "y": 4361,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4586,
              "y": 4368,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q11",
              "read": "",
              "write": "",
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
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q9",
              "read": "",
              "write": "",
              "move": "L"
            }
          ]
        },
        "simulateWord": "ab",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "□",
          "□"
        ],
        "head": 2,
        "activeNode": "q3"
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
              "x": 3616,
              "y": 3801,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3924,
              "y": 3632,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4239,
              "y": 3801,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4012,
              "y": 4361,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4586,
              "y": 4368,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q11",
              "read": "",
              "write": "",
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
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q9",
              "read": "",
              "write": "",
              "move": "L"
            }
          ]
        },
        "simulateWord": "ab",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "□",
          "□"
        ],
        "head": 3,
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
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3616,
              "y": 3801,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3924,
              "y": 3632,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4239,
              "y": 3801,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4012,
              "y": 4361,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4586,
              "y": 4368,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q11",
              "read": "",
              "write": "",
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
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q9",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "B",
              "write": "B",
              "move": "R"
            }
          ]
        },
        "simulateWord": "ab",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "□",
          "□"
        ],
        "head": 3,
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
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3616,
              "y": 3801,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3924,
              "y": 3632,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4239,
              "y": 3801,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4012,
              "y": 4361,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4586,
              "y": 4368,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q11",
              "read": "",
              "write": "",
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
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q9",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "B",
              "write": "B",
              "move": "R"
            }
          ]
        },
        "simulateWord": "ab",
        "tape": [
          "□",
          "□",
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
          "message": "Executou: leu '□', escreveu '□' e moveu. Agora em q9.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3616,
              "y": 3801,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3924,
              "y": 3632,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4239,
              "y": 3801,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4012,
              "y": 4361,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4586,
              "y": 4368,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q11",
              "read": "",
              "write": "",
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
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q9",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "B",
              "write": "B",
              "move": "R"
            }
          ]
        },
        "simulateWord": "ab",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "□",
          "□"
        ],
        "head": 3,
        "activeNode": "q9"
      },
      {
        "prof": {
          "message": "Nova regra: em q9, ao ler 'B', vamos para q9, escrevemos 'B' e movemos à ESQUERDA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3616,
              "y": 3801,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3924,
              "y": 3632,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4239,
              "y": 3801,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4012,
              "y": 4361,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4586,
              "y": 4368,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q11",
              "read": "",
              "write": "",
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
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q9",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "B",
              "write": "B",
              "move": "R"
            }
          ]
        },
        "simulateWord": "ab",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "□",
          "□"
        ],
        "head": 3,
        "activeNode": "q9"
      },
      {
        "prof": {
          "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q9.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3616,
              "y": 3801,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3924,
              "y": 3632,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4239,
              "y": 3801,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4012,
              "y": 4361,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4586,
              "y": 4368,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q11",
              "read": "",
              "write": "",
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
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q9",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "B",
              "write": "B",
              "move": "R"
            }
          ]
        },
        "simulateWord": "ab",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "□",
          "□"
        ],
        "head": 2,
        "activeNode": "q9"
      },
      {
        "prof": {
          "message": "Nova regra: em q9, ao ler 'A', vamos para q10, escrevemos 'A' e movemos à ESQUERDA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3616,
              "y": 3801,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3924,
              "y": 3632,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4239,
              "y": 3801,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4012,
              "y": 4361,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 4309,
              "y": 4287,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4586,
              "y": 4368,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q11",
              "read": "",
              "write": "",
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
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q9",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "B",
              "write": "B",
              "move": "R"
            }
          ]
        },
        "simulateWord": "ab",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "□",
          "□"
        ],
        "head": 2,
        "activeNode": "q9"
      },
      {
        "prof": {
          "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q10.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3616,
              "y": 3801,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3924,
              "y": 3632,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4239,
              "y": 3801,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4012,
              "y": 4361,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 4309,
              "y": 4287,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4586,
              "y": 4368,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q11",
              "read": "",
              "write": "",
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
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q9",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "B",
              "write": "B",
              "move": "R"
            }
          ]
        },
        "simulateWord": "ab",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "□",
          "□"
        ],
        "head": 1,
        "activeNode": "q10"
      },
      {
        "prof": {
          "message": "Nova regra: em q10, ao ler '□', vamos para q11, escrevemos '□' e movemos à DIREITA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3616,
              "y": 3801,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3924,
              "y": 3632,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4239,
              "y": 3801,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4012,
              "y": 4361,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 4309,
              "y": 4287,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4586,
              "y": 4368,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q11",
              "read": "",
              "write": "",
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
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q9",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "B",
              "write": "B",
              "move": "R"
            }
          ]
        },
        "simulateWord": "ab",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "□",
          "□"
        ],
        "head": 1,
        "activeNode": "q10"
      },
      {
        "prof": {
          "message": "Chegamos em q11 (estado final) e não há mais nada a ler. Palavra ACEITA! ✓",
          "mood": "feliz"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3616,
              "y": 3801,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3924,
              "y": 3632,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4239,
              "y": 3801,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4012,
              "y": 4361,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 4309,
              "y": 4287,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4586,
              "y": 4368,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q11",
              "read": "",
              "write": "",
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
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q9",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "B",
              "write": "B",
              "move": "R"
            }
          ]
        },
        "simulateWord": "ab",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "□",
          "□"
        ],
        "head": 2,
        "activeNode": "q11",
        "status": "ACCEPTED"
      },
      {
        "prof": {
          "message": "Próxima palavra: \"abbc\". Mesma máquina, novo teste.",
          "mood": "serio"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3616,
              "y": 3801,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3924,
              "y": 3632,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4239,
              "y": 3801,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4012,
              "y": 4361,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 4309,
              "y": 4287,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4586,
              "y": 4368,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q11",
              "read": "",
              "write": "",
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
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q9",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "B",
              "write": "B",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abbc",
        "tape": [
          "□",
          "□",
          "a",
          "b",
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
              "x": 3616,
              "y": 3801,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3924,
              "y": 3632,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4239,
              "y": 3801,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4012,
              "y": 4361,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 4309,
              "y": 4287,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4586,
              "y": 4368,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q11",
              "read": "",
              "write": "",
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
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q9",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "B",
              "write": "B",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abbc",
        "tape": [
          "□",
          "□",
          "A",
          "b",
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
              "x": 3616,
              "y": 3801,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3924,
              "y": 3632,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4239,
              "y": 3801,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4012,
              "y": 4361,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 4309,
              "y": 4287,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4586,
              "y": 4368,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q11",
              "read": "",
              "write": "",
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
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q9",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "B",
              "write": "B",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abbc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "b",
          "c",
          "□",
          "□"
        ],
        "head": 2,
        "activeNode": "q3"
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
              "x": 3616,
              "y": 3801,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3924,
              "y": 3632,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4239,
              "y": 3801,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4012,
              "y": 4361,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 4309,
              "y": 4287,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4586,
              "y": 4368,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q11",
              "read": "",
              "write": "",
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
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q9",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "B",
              "write": "B",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abbc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "b",
          "c",
          "□",
          "□"
        ],
        "head": 3,
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
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3616,
              "y": 3801,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3924,
              "y": 3632,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4239,
              "y": 3801,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4012,
              "y": 4361,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 4309,
              "y": 4287,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4586,
              "y": 4368,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q11",
              "read": "",
              "write": "",
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
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q9",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "B",
              "write": "B",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abbc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "b",
          "c",
          "□",
          "□"
        ],
        "head": 4,
        "activeNode": "q1"
      },
      {
        "prof": {
          "message": "Nova regra: em q1, ao ler 'b', vamos para q4, escrevemos 'B' e movemos à DIREITA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3616,
              "y": 3801,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3924,
              "y": 3632,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4239,
              "y": 3801,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4039,
              "y": 3997,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4012,
              "y": 4361,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 4309,
              "y": 4287,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4586,
              "y": 4368,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q11",
              "read": "",
              "write": "",
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
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q9",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abbc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "b",
          "c",
          "□",
          "□"
        ],
        "head": 4,
        "activeNode": "q1"
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
              "x": 3616,
              "y": 3801,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3924,
              "y": 3632,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4239,
              "y": 3801,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4039,
              "y": 3997,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4012,
              "y": 4361,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 4309,
              "y": 4287,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4586,
              "y": 4368,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q11",
              "read": "",
              "write": "",
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
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q9",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abbc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "B",
          "c",
          "□",
          "□"
        ],
        "head": 5,
        "activeNode": "q4"
      },
      {
        "prof": {
          "message": "Nova regra: em q4, ao ler 'c', vamos para q5, escrevemos 'C' e movemos à ESQUERDA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3616,
              "y": 3801,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3924,
              "y": 3632,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4239,
              "y": 3801,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4039,
              "y": 3997,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4338,
              "y": 3997,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4012,
              "y": 4361,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 4309,
              "y": 4287,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4586,
              "y": 4368,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q11",
              "read": "",
              "write": "",
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
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q9",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abbc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "B",
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
              "x": 3616,
              "y": 3801,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3924,
              "y": 3632,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4239,
              "y": 3801,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4039,
              "y": 3997,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4338,
              "y": 3997,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4012,
              "y": 4361,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 4309,
              "y": 4287,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4586,
              "y": 4368,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q11",
              "read": "",
              "write": "",
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
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q9",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abbc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
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
          "message": "Nova regra: em q5, ao ler 'B', vamos para q6, escrevemos 'B' e movemos à DIREITA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3616,
              "y": 3801,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3924,
              "y": 3632,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4239,
              "y": 3801,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4039,
              "y": 3997,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4338,
              "y": 3997,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4185,
              "y": 4147,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4012,
              "y": 4361,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 4309,
              "y": 4287,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4586,
              "y": 4368,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q11",
              "read": "",
              "write": "",
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
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q9",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abbc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
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
          "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q6.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3616,
              "y": 3801,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3924,
              "y": 3632,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4239,
              "y": 3801,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4039,
              "y": 3997,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4338,
              "y": 3997,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4185,
              "y": 4147,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4012,
              "y": 4361,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 4309,
              "y": 4287,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4586,
              "y": 4368,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q11",
              "read": "",
              "write": "",
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
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q9",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abbc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
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
          "message": "Nova regra: em q6, ao ler 'C', vamos para q7, escrevemos 'C' e movemos à DIREITA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3616,
              "y": 3801,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3924,
              "y": 3632,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4239,
              "y": 3801,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4039,
              "y": 3997,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4338,
              "y": 3997,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4185,
              "y": 4147,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 3414,
              "y": 4165,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4012,
              "y": 4361,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 4309,
              "y": 4287,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4586,
              "y": 4368,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q11",
              "read": "",
              "write": "",
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
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q9",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abbc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
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
          "message": "Executou: leu 'C', escreveu 'C' e moveu. Agora em q7.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3616,
              "y": 3801,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3924,
              "y": 3632,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4239,
              "y": 3801,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4039,
              "y": 3997,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4338,
              "y": 3997,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4185,
              "y": 4147,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 3414,
              "y": 4165,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4012,
              "y": 4361,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 4309,
              "y": 4287,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4586,
              "y": 4368,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q11",
              "read": "",
              "write": "",
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
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q9",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abbc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "B",
          "C",
          "□",
          "□"
        ],
        "head": 6,
        "activeNode": "q7"
      },
      {
        "prof": {
          "message": "Nova regra: em q7, ao ler '□', vamos para q8, escrevemos '□' e movemos à ESQUERDA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3616,
              "y": 3801,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3924,
              "y": 3632,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4239,
              "y": 3801,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4039,
              "y": 3997,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4338,
              "y": 3997,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4185,
              "y": 4147,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 3414,
              "y": 4165,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3744,
              "y": 4363,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4012,
              "y": 4361,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 4309,
              "y": 4287,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4586,
              "y": 4368,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q8",
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
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q9",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abbc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "B",
          "C",
          "□",
          "□"
        ],
        "head": 6,
        "activeNode": "q7"
      },
      {
        "prof": {
          "message": "Executou: leu '□', escreveu '□' e moveu. Agora em q8.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3616,
              "y": 3801,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3924,
              "y": 3632,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4239,
              "y": 3801,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4039,
              "y": 3997,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4338,
              "y": 3997,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4185,
              "y": 4147,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 3414,
              "y": 4165,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3744,
              "y": 4363,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4012,
              "y": 4361,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 4309,
              "y": 4287,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4586,
              "y": 4368,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q8",
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
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q9",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abbc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "B",
          "C",
          "□",
          "□"
        ],
        "head": 5,
        "activeNode": "q8"
      },
      {
        "prof": {
          "message": "Nova regra: em q8, ao ler 'C', vamos para q8, escrevemos 'C' e movemos à ESQUERDA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3616,
              "y": 3801,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3924,
              "y": 3632,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4239,
              "y": 3801,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4039,
              "y": 3997,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4338,
              "y": 3997,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4185,
              "y": 4147,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 3414,
              "y": 4165,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3744,
              "y": 4363,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4012,
              "y": 4361,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 4309,
              "y": 4287,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4586,
              "y": 4368,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q8",
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
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q9",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abbc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "B",
          "C",
          "□",
          "□"
        ],
        "head": 5,
        "activeNode": "q8"
      },
      {
        "prof": {
          "message": "Executou: leu 'C', escreveu 'C' e moveu. Agora em q8.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3616,
              "y": 3801,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3924,
              "y": 3632,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4239,
              "y": 3801,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4039,
              "y": 3997,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4338,
              "y": 3997,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4185,
              "y": 4147,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 3414,
              "y": 4165,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3744,
              "y": 4363,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4012,
              "y": 4361,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 4309,
              "y": 4287,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4586,
              "y": 4368,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q8",
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
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q9",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abbc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "B",
          "C",
          "□",
          "□"
        ],
        "head": 4,
        "activeNode": "q8"
      },
      {
        "prof": {
          "message": "Nova regra: em q8, ao ler 'B', vamos para q9, escrevemos 'B' e movemos à ESQUERDA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3616,
              "y": 3801,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3924,
              "y": 3632,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4239,
              "y": 3801,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4039,
              "y": 3997,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4338,
              "y": 3997,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4185,
              "y": 4147,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 3414,
              "y": 4165,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3744,
              "y": 4363,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4012,
              "y": 4361,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 4309,
              "y": 4287,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4586,
              "y": 4368,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q8",
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
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q9",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abbc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "B",
          "C",
          "□",
          "□"
        ],
        "head": 4,
        "activeNode": "q8"
      },
      {
        "prof": {
          "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q9.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3616,
              "y": 3801,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3924,
              "y": 3632,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4239,
              "y": 3801,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4039,
              "y": 3997,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4338,
              "y": 3997,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4185,
              "y": 4147,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 3414,
              "y": 4165,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3744,
              "y": 4363,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4012,
              "y": 4361,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 4309,
              "y": 4287,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4586,
              "y": 4368,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q8",
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
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q9",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abbc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "B",
          "C",
          "□",
          "□"
        ],
        "head": 3,
        "activeNode": "q9"
      },
      {
        "prof": {
          "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q9.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3616,
              "y": 3801,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3924,
              "y": 3632,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4239,
              "y": 3801,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4039,
              "y": 3997,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4338,
              "y": 3997,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4185,
              "y": 4147,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 3414,
              "y": 4165,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3744,
              "y": 4363,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4012,
              "y": 4361,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 4309,
              "y": 4287,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4586,
              "y": 4368,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q8",
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
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q9",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abbc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "B",
          "C",
          "□",
          "□"
        ],
        "head": 2,
        "activeNode": "q9"
      },
      {
        "prof": {
          "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q10.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3616,
              "y": 3801,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3924,
              "y": 3632,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4239,
              "y": 3801,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4039,
              "y": 3997,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4338,
              "y": 3997,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4185,
              "y": 4147,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 3414,
              "y": 4165,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3744,
              "y": 4363,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4012,
              "y": 4361,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 4309,
              "y": 4287,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4586,
              "y": 4368,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q8",
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
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q9",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abbc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "B",
          "C",
          "□",
          "□"
        ],
        "head": 1,
        "activeNode": "q10"
      },
      {
        "prof": {
          "message": "Chegamos em q11 (estado final) e não há mais nada a ler. Palavra ACEITA! ✓",
          "mood": "feliz"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3616,
              "y": 3801,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3924,
              "y": 3632,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4239,
              "y": 3801,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4039,
              "y": 3997,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4338,
              "y": 3997,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4185,
              "y": 4147,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 3414,
              "y": 4165,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3744,
              "y": 4363,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4012,
              "y": 4361,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 4309,
              "y": 4287,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4586,
              "y": 4368,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q8",
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
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q9",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abbc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "B",
          "C",
          "□",
          "□"
        ],
        "head": 2,
        "activeNode": "q11",
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
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3616,
              "y": 3801,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3924,
              "y": 3632,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4239,
              "y": 3801,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4039,
              "y": 3997,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4338,
              "y": 3997,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4185,
              "y": 4147,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 3414,
              "y": 4165,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3744,
              "y": 4363,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4012,
              "y": 4361,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 4309,
              "y": 4287,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4586,
              "y": 4368,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q8",
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
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q9",
              "read": "",
              "write": "",
              "move": "L"
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
              "from": "q1",
              "to": "q1",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
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
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3616,
              "y": 3801,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3924,
              "y": 3632,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4239,
              "y": 3801,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4039,
              "y": 3997,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4338,
              "y": 3997,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4185,
              "y": 4147,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 3414,
              "y": 4165,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3744,
              "y": 4363,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4012,
              "y": 4361,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 4309,
              "y": 4287,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4586,
              "y": 4368,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q8",
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
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q9",
              "read": "",
              "write": "",
              "move": "L"
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
              "from": "q1",
              "to": "q1",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            }
          ]
        },
        "formalIntro": true
      },
      {
        "prof": {
          "message": "Q é o conjunto de ESTADOS: {q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11}",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3616,
              "y": 3801,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3924,
              "y": 3632,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4239,
              "y": 3801,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4039,
              "y": 3997,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4338,
              "y": 3997,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4185,
              "y": 4147,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 3414,
              "y": 4165,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3744,
              "y": 4363,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4012,
              "y": 4361,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 4309,
              "y": 4287,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4586,
              "y": 4368,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q8",
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
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q9",
              "read": "",
              "write": "",
              "move": "L"
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
              "from": "q1",
              "to": "q1",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            }
          ]
        },
        "phase": "FORMAL",
        "formalFill": {
          "states": "{q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11}"
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
              "x": 3616,
              "y": 3801,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3924,
              "y": 3632,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4239,
              "y": 3801,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4039,
              "y": 3997,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4338,
              "y": 3997,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4185,
              "y": 4147,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 3414,
              "y": 4165,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3744,
              "y": 4363,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4012,
              "y": 4361,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 4309,
              "y": 4287,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4586,
              "y": 4368,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q8",
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
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q9",
              "read": "",
              "write": "",
              "move": "L"
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
              "from": "q1",
              "to": "q1",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
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
              "x": 3616,
              "y": 3801,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3924,
              "y": 3632,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4239,
              "y": 3801,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4039,
              "y": 3997,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4338,
              "y": 3997,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4185,
              "y": 4147,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 3414,
              "y": 4165,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3744,
              "y": 4363,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4012,
              "y": 4361,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 4309,
              "y": 4287,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4586,
              "y": 4368,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q8",
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
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q9",
              "read": "",
              "write": "",
              "move": "L"
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
              "from": "q1",
              "to": "q1",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
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
              "x": 3616,
              "y": 3801,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3924,
              "y": 3632,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4239,
              "y": 3801,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4039,
              "y": 3997,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4338,
              "y": 3997,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4185,
              "y": 4147,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 3414,
              "y": 4165,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3744,
              "y": 4363,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4012,
              "y": 4361,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 4309,
              "y": 4287,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4586,
              "y": 4368,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q8",
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
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q9",
              "read": "",
              "write": "",
              "move": "L"
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
              "from": "q1",
              "to": "q1",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
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
              "x": 3616,
              "y": 3801,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3924,
              "y": 3632,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4239,
              "y": 3801,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4039,
              "y": 3997,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4338,
              "y": 3997,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4185,
              "y": 4147,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 3414,
              "y": 4165,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3744,
              "y": 4363,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4012,
              "y": 4361,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 4309,
              "y": 4287,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4586,
              "y": 4368,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q8",
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
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q9",
              "read": "",
              "write": "",
              "move": "L"
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
              "from": "q1",
              "to": "q1",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
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
          "message": "F é o conjunto de estados de ACEITAÇÃO: {q11}",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3616,
              "y": 3801,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3924,
              "y": 3632,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4239,
              "y": 3801,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4039,
              "y": 3997,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4338,
              "y": 3997,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4185,
              "y": 4147,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 3414,
              "y": 4165,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3744,
              "y": 4363,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4012,
              "y": 4361,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 4309,
              "y": 4287,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4586,
              "y": 4368,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q8",
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
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q9",
              "read": "",
              "write": "",
              "move": "L"
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
              "from": "q1",
              "to": "q1",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            }
          ]
        },
        "phase": "FORMAL",
        "formalFill": {
          "final": "{q11}"
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
              "x": 3616,
              "y": 3801,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3924,
              "y": 3632,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4239,
              "y": 3801,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4039,
              "y": 3997,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4338,
              "y": 3997,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4185,
              "y": 4147,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 3414,
              "y": 4165,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 3744,
              "y": 4363,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 4012,
              "y": 4361,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 4309,
              "y": 4287,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4586,
              "y": 4368,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q8",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q8",
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
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q9",
              "read": "",
              "write": "",
              "move": "L"
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
              "from": "q1",
              "to": "q1",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            }
          ]
        },
        "phase": "FORMAL",
        "formalFill": {
          "delta": [
            {
              "from": "q8",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q8",
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
              "from": "q2",
              "to": "q3",
              "read": "b",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q9",
              "read": "",
              "write": "",
              "move": "L"
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
              "from": "q1",
              "to": "q1",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            }
          ]
        }
      }
    ],
  },
};

export default MT_RECON_L10;
