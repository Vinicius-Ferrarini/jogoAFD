// ── MT Transdutora L11 (lista nova) ──────────────────────────────────
// Gabarito importado de implementar/MT/gabaritos_oficiais/transdutora/L11.xml
// (verificado por fuzz contra a transformação esperada antes da conversão).

const MT_L11 = {
  id:          'MT_L11',
  label:       'L11',
  type:        'transducer',
  level:       'hard',
  alphabet:    ["A","B","C","a","b","c","0","1","2"," ",",","."],
  tapeAlphabet: [" ","!","","",".","0","1","2","3","4","5","6","7","8","9",":",";","?","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","^","`","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","´","□"],
  description: "Tem como entrada um texto qualquer (letras, números, pontuação, acentos) e criptografa usando uma cifra mono alfabética simples – Criptografia mono alfabética. [GABARITO NÃO-OFICIAL: cifra assumida como deslocamento fixo +3 por classe de caractere — validar com o professor]",
  hint:        "Cada letra maiúscula desloca 3 posições dentro de A-Z, cada minúscula desloca 3 dentro de a-z, cada dígito desloca 3 dentro de 0-9 (com volta ao início). Pontuação e espaços não mudam.",
  validate:    (w) => (()=>{
      const UPPER='ABCDEFGHIJKLMNOPQRSTUVWXYZ', LOWER='abcdefghijklmnopqrstuvwxyz', DIGITS='0123456789';
      const shift=(alpha,c)=>{const i=alpha.indexOf(c); return i<0?null:alpha[(i+3)%alpha.length];};
      return [...w].map(c => shift(UPPER,c) ?? shift(LOWER,c) ?? shift(DIGITS,c) ?? c).join('');
    })(),
  testWords:   ["ABC","abc123","Ola, Mundo!","XYZxyz789"],
  skipEmptyWord: true,
  formalDescription: {
    sigma:   '{A,B,C,a,b,c,0,1,2, ,,,.}',
    gamma:   '{ ,!,,,.,0,1,2,3,4,5,6,7,8,9,:,;,?,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,^,`,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,~,´,□}',
    states:  '{q0,q_rw,qf}',
    initial: 'q0',
    final:   '{qf}',
    blank:   '□',
  },

  guidedLesson: {
    steps: [
      {
        "prof": {
          "message": "Bem-vindo! Vamos construir a MT Transdutora que tem como entrada um texto qualquer (letras, números, pontuação, acentos) e criptografa usando uma cifra mono alfabética simples – criptografia mono alfabética. [gabarito não-oficial: cifra assumida como deslocamento fixo +3 por classe de caractere — validar com o professor]",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [],
          "transitions": []
        }
      },
      {
        "prof": {
          "message": "Vamos testar a palavra \"ABC\". Começamos no estado inicial q0.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3460,
              "y": 4000,
              "isInitial": true,
              "isFinal": false
            }
          ],
          "transitions": []
        },
        "simulateWord": "ABC",
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
        "activeNode": "q0"
      },
      {
        "prof": {
          "message": "Nova regra: em q0, ao ler 'A', vamos para q0, escrevemos 'D' e movemos à DIREITA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3460,
              "y": 4000,
              "isInitial": true,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q0",
              "to": "q0",
              "read": "A",
              "write": "D",
              "move": "R"
            }
          ]
        },
        "simulateWord": "ABC",
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
        "activeNode": "q0"
      },
      {
        "prof": {
          "message": "Executou: leu 'A', escreveu 'D' e moveu. Agora em q0.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3460,
              "y": 4000,
              "isInitial": true,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q0",
              "to": "q0",
              "read": "A",
              "write": "D",
              "move": "R"
            }
          ]
        },
        "simulateWord": "ABC",
        "tape": [
          "□",
          "□",
          "D",
          "B",
          "C",
          "□",
          "□"
        ],
        "head": 3,
        "activeNode": "q0"
      },
      {
        "prof": {
          "message": "Nova regra: em q0, ao ler 'B', vamos para q0, escrevemos 'E' e movemos à DIREITA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3460,
              "y": 4000,
              "isInitial": true,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q0",
              "to": "q0",
              "read": "A",
              "write": "D",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "B",
              "write": "E",
              "move": "R"
            }
          ]
        },
        "simulateWord": "ABC",
        "tape": [
          "□",
          "□",
          "D",
          "B",
          "C",
          "□",
          "□"
        ],
        "head": 3,
        "activeNode": "q0"
      },
      {
        "prof": {
          "message": "Executou: leu 'B', escreveu 'E' e moveu. Agora em q0.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3460,
              "y": 4000,
              "isInitial": true,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q0",
              "to": "q0",
              "read": "A",
              "write": "D",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "B",
              "write": "E",
              "move": "R"
            }
          ]
        },
        "simulateWord": "ABC",
        "tape": [
          "□",
          "□",
          "D",
          "E",
          "C",
          "□",
          "□"
        ],
        "head": 4,
        "activeNode": "q0"
      },
      {
        "prof": {
          "message": "Nova regra: em q0, ao ler 'C', vamos para q0, escrevemos 'F' e movemos à DIREITA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3460,
              "y": 4000,
              "isInitial": true,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q0",
              "to": "q0",
              "read": "A",
              "write": "D",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "B",
              "write": "E",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "C",
              "write": "F",
              "move": "R"
            }
          ]
        },
        "simulateWord": "ABC",
        "tape": [
          "□",
          "□",
          "D",
          "E",
          "C",
          "□",
          "□"
        ],
        "head": 4,
        "activeNode": "q0"
      },
      {
        "prof": {
          "message": "Executou: leu 'C', escreveu 'F' e moveu. Agora em q0.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3460,
              "y": 4000,
              "isInitial": true,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q0",
              "to": "q0",
              "read": "A",
              "write": "D",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "B",
              "write": "E",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "C",
              "write": "F",
              "move": "R"
            }
          ]
        },
        "simulateWord": "ABC",
        "tape": [
          "□",
          "□",
          "D",
          "E",
          "F",
          "□",
          "□"
        ],
        "head": 5,
        "activeNode": "q0"
      },
      {
        "prof": {
          "message": "Nova regra: em q0, ao ler '□', vamos para q_rw, escrevemos '□' e movemos à ESQUERDA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3460,
              "y": 4000,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q_rw",
              "id": "q_rw",
              "label": "q_rw",
              "x": 4000,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q0",
              "to": "q0",
              "read": "A",
              "write": "D",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "B",
              "write": "E",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "C",
              "write": "F",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q_rw",
              "read": "",
              "write": "",
              "move": "L"
            }
          ]
        },
        "simulateWord": "ABC",
        "tape": [
          "□",
          "□",
          "D",
          "E",
          "F",
          "□",
          "□"
        ],
        "head": 5,
        "activeNode": "q0"
      },
      {
        "prof": {
          "message": "Executou: leu '□', escreveu '□' e moveu. Agora em q_rw.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3460,
              "y": 4000,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q_rw",
              "id": "q_rw",
              "label": "q_rw",
              "x": 4000,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q0",
              "to": "q0",
              "read": "A",
              "write": "D",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "B",
              "write": "E",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "C",
              "write": "F",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q_rw",
              "read": "",
              "write": "",
              "move": "L"
            }
          ]
        },
        "simulateWord": "ABC",
        "tape": [
          "□",
          "□",
          "D",
          "E",
          "F",
          "□",
          "□"
        ],
        "head": 4,
        "activeNode": "q_rw"
      },
      {
        "prof": {
          "message": "Nova regra: em q_rw, ao ler 'F', vamos para q_rw, escrevemos 'F' e movemos à ESQUERDA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3460,
              "y": 4000,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q_rw",
              "id": "q_rw",
              "label": "q_rw",
              "x": 4000,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q0",
              "to": "q0",
              "read": "A",
              "write": "D",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "B",
              "write": "E",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "C",
              "write": "F",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q_rw",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "F",
              "write": "F",
              "move": "L"
            }
          ]
        },
        "simulateWord": "ABC",
        "tape": [
          "□",
          "□",
          "D",
          "E",
          "F",
          "□",
          "□"
        ],
        "head": 4,
        "activeNode": "q_rw"
      },
      {
        "prof": {
          "message": "Executou: leu 'F', escreveu 'F' e moveu. Agora em q_rw.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3460,
              "y": 4000,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q_rw",
              "id": "q_rw",
              "label": "q_rw",
              "x": 4000,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q0",
              "to": "q0",
              "read": "A",
              "write": "D",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "B",
              "write": "E",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "C",
              "write": "F",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q_rw",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "F",
              "write": "F",
              "move": "L"
            }
          ]
        },
        "simulateWord": "ABC",
        "tape": [
          "□",
          "□",
          "D",
          "E",
          "F",
          "□",
          "□"
        ],
        "head": 3,
        "activeNode": "q_rw"
      },
      {
        "prof": {
          "message": "Nova regra: em q_rw, ao ler 'E', vamos para q_rw, escrevemos 'E' e movemos à ESQUERDA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3460,
              "y": 4000,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q_rw",
              "id": "q_rw",
              "label": "q_rw",
              "x": 4000,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q0",
              "to": "q0",
              "read": "A",
              "write": "D",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "B",
              "write": "E",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "C",
              "write": "F",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q_rw",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "E",
              "write": "E",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "F",
              "write": "F",
              "move": "L"
            }
          ]
        },
        "simulateWord": "ABC",
        "tape": [
          "□",
          "□",
          "D",
          "E",
          "F",
          "□",
          "□"
        ],
        "head": 3,
        "activeNode": "q_rw"
      },
      {
        "prof": {
          "message": "Executou: leu 'E', escreveu 'E' e moveu. Agora em q_rw.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3460,
              "y": 4000,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q_rw",
              "id": "q_rw",
              "label": "q_rw",
              "x": 4000,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q0",
              "to": "q0",
              "read": "A",
              "write": "D",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "B",
              "write": "E",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "C",
              "write": "F",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q_rw",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "E",
              "write": "E",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "F",
              "write": "F",
              "move": "L"
            }
          ]
        },
        "simulateWord": "ABC",
        "tape": [
          "□",
          "□",
          "D",
          "E",
          "F",
          "□",
          "□"
        ],
        "head": 2,
        "activeNode": "q_rw"
      },
      {
        "prof": {
          "message": "Nova regra: em q_rw, ao ler 'D', vamos para q_rw, escrevemos 'D' e movemos à ESQUERDA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3460,
              "y": 4000,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q_rw",
              "id": "q_rw",
              "label": "q_rw",
              "x": 4000,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q0",
              "to": "q0",
              "read": "A",
              "write": "D",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "B",
              "write": "E",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "C",
              "write": "F",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q_rw",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "D",
              "write": "D",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "E",
              "write": "E",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "F",
              "write": "F",
              "move": "L"
            }
          ]
        },
        "simulateWord": "ABC",
        "tape": [
          "□",
          "□",
          "D",
          "E",
          "F",
          "□",
          "□"
        ],
        "head": 2,
        "activeNode": "q_rw"
      },
      {
        "prof": {
          "message": "Executou: leu 'D', escreveu 'D' e moveu. Agora em q_rw.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3460,
              "y": 4000,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q_rw",
              "id": "q_rw",
              "label": "q_rw",
              "x": 4000,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q0",
              "to": "q0",
              "read": "A",
              "write": "D",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "B",
              "write": "E",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "C",
              "write": "F",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q_rw",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "D",
              "write": "D",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "E",
              "write": "E",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "F",
              "write": "F",
              "move": "L"
            }
          ]
        },
        "simulateWord": "ABC",
        "tape": [
          "□",
          "□",
          "D",
          "E",
          "F",
          "□",
          "□"
        ],
        "head": 1,
        "activeNode": "q_rw"
      },
      {
        "prof": {
          "message": "Nova regra: em q_rw, ao ler '□', vamos para qf, escrevemos '□' e movemos à DIREITA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3460,
              "y": 4000,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q_rw",
              "id": "q_rw",
              "label": "q_rw",
              "x": 4000,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qf",
              "id": "qf",
              "label": "qf",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q0",
              "to": "q0",
              "read": "A",
              "write": "D",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "B",
              "write": "E",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "C",
              "write": "F",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q_rw",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "D",
              "write": "D",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "E",
              "write": "E",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "F",
              "write": "F",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "qf",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "ABC",
        "tape": [
          "□",
          "□",
          "D",
          "E",
          "F",
          "□",
          "□"
        ],
        "head": 1,
        "activeNode": "q_rw"
      },
      {
        "prof": {
          "message": "Chegamos em qf (estado final). A fita ficou \"DEF\". ACEITA! ✓",
          "mood": "feliz"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3460,
              "y": 4000,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q_rw",
              "id": "q_rw",
              "label": "q_rw",
              "x": 4000,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qf",
              "id": "qf",
              "label": "qf",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q0",
              "to": "q0",
              "read": "A",
              "write": "D",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "B",
              "write": "E",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "C",
              "write": "F",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q_rw",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "D",
              "write": "D",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "E",
              "write": "E",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "F",
              "write": "F",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "qf",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "ABC",
        "tape": [
          "□",
          "□",
          "D",
          "E",
          "F",
          "□",
          "□"
        ],
        "head": 2,
        "activeNode": "qf",
        "status": "ACCEPTED"
      },
      {
        "prof": {
          "message": "Próxima palavra: \"abc123\". Mesma máquina, novo teste.",
          "mood": "serio"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3460,
              "y": 4000,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q_rw",
              "id": "q_rw",
              "label": "q_rw",
              "x": 4000,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qf",
              "id": "qf",
              "label": "qf",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q0",
              "to": "q0",
              "read": "A",
              "write": "D",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "B",
              "write": "E",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "C",
              "write": "F",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q_rw",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "D",
              "write": "D",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "E",
              "write": "E",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "F",
              "write": "F",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "qf",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abc123",
        "tape": [
          "□",
          "□",
          "a",
          "b",
          "c",
          "1",
          "2",
          "3",
          "□",
          "□"
        ],
        "head": 2,
        "activeNode": "q0"
      },
      {
        "prof": {
          "message": "Nova regra: em q0, ao ler 'a', vamos para q0, escrevemos 'd' e movemos à DIREITA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3460,
              "y": 4000,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q_rw",
              "id": "q_rw",
              "label": "q_rw",
              "x": 4000,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qf",
              "id": "qf",
              "label": "qf",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q0",
              "to": "q0",
              "read": "A",
              "write": "D",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "B",
              "write": "E",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "C",
              "write": "F",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "a",
              "write": "d",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q_rw",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "D",
              "write": "D",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "E",
              "write": "E",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "F",
              "write": "F",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "qf",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abc123",
        "tape": [
          "□",
          "□",
          "a",
          "b",
          "c",
          "1",
          "2",
          "3",
          "□",
          "□"
        ],
        "head": 2,
        "activeNode": "q0"
      },
      {
        "prof": {
          "message": "Executou: leu 'a', escreveu 'd' e moveu. Agora em q0.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3460,
              "y": 4000,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q_rw",
              "id": "q_rw",
              "label": "q_rw",
              "x": 4000,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qf",
              "id": "qf",
              "label": "qf",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q0",
              "to": "q0",
              "read": "A",
              "write": "D",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "B",
              "write": "E",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "C",
              "write": "F",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "a",
              "write": "d",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q_rw",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "D",
              "write": "D",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "E",
              "write": "E",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "F",
              "write": "F",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "qf",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abc123",
        "tape": [
          "□",
          "□",
          "d",
          "b",
          "c",
          "1",
          "2",
          "3",
          "□",
          "□"
        ],
        "head": 3,
        "activeNode": "q0"
      },
      {
        "prof": {
          "message": "Nova regra: em q0, ao ler 'b', vamos para q0, escrevemos 'e' e movemos à DIREITA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3460,
              "y": 4000,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q_rw",
              "id": "q_rw",
              "label": "q_rw",
              "x": 4000,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qf",
              "id": "qf",
              "label": "qf",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q0",
              "to": "q0",
              "read": "A",
              "write": "D",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "B",
              "write": "E",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "C",
              "write": "F",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "a",
              "write": "d",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "b",
              "write": "e",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q_rw",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "D",
              "write": "D",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "E",
              "write": "E",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "F",
              "write": "F",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "qf",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abc123",
        "tape": [
          "□",
          "□",
          "d",
          "b",
          "c",
          "1",
          "2",
          "3",
          "□",
          "□"
        ],
        "head": 3,
        "activeNode": "q0"
      },
      {
        "prof": {
          "message": "Executou: leu 'b', escreveu 'e' e moveu. Agora em q0.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3460,
              "y": 4000,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q_rw",
              "id": "q_rw",
              "label": "q_rw",
              "x": 4000,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qf",
              "id": "qf",
              "label": "qf",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q0",
              "to": "q0",
              "read": "A",
              "write": "D",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "B",
              "write": "E",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "C",
              "write": "F",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "a",
              "write": "d",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "b",
              "write": "e",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q_rw",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "D",
              "write": "D",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "E",
              "write": "E",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "F",
              "write": "F",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "qf",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abc123",
        "tape": [
          "□",
          "□",
          "d",
          "e",
          "c",
          "1",
          "2",
          "3",
          "□",
          "□"
        ],
        "head": 4,
        "activeNode": "q0"
      },
      {
        "prof": {
          "message": "Nova regra: em q0, ao ler 'c', vamos para q0, escrevemos 'f' e movemos à DIREITA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3460,
              "y": 4000,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q_rw",
              "id": "q_rw",
              "label": "q_rw",
              "x": 4000,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qf",
              "id": "qf",
              "label": "qf",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q0",
              "to": "q0",
              "read": "A",
              "write": "D",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "B",
              "write": "E",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "C",
              "write": "F",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "a",
              "write": "d",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "b",
              "write": "e",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "c",
              "write": "f",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q_rw",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "D",
              "write": "D",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "E",
              "write": "E",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "F",
              "write": "F",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "qf",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abc123",
        "tape": [
          "□",
          "□",
          "d",
          "e",
          "c",
          "1",
          "2",
          "3",
          "□",
          "□"
        ],
        "head": 4,
        "activeNode": "q0"
      },
      {
        "prof": {
          "message": "Executou: leu 'c', escreveu 'f' e moveu. Agora em q0.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3460,
              "y": 4000,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q_rw",
              "id": "q_rw",
              "label": "q_rw",
              "x": 4000,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qf",
              "id": "qf",
              "label": "qf",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q0",
              "to": "q0",
              "read": "A",
              "write": "D",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "B",
              "write": "E",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "C",
              "write": "F",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "a",
              "write": "d",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "b",
              "write": "e",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "c",
              "write": "f",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q_rw",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "D",
              "write": "D",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "E",
              "write": "E",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "F",
              "write": "F",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "qf",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abc123",
        "tape": [
          "□",
          "□",
          "d",
          "e",
          "f",
          "1",
          "2",
          "3",
          "□",
          "□"
        ],
        "head": 5,
        "activeNode": "q0"
      },
      {
        "prof": {
          "message": "Nova regra: em q0, ao ler '1', vamos para q0, escrevemos '4' e movemos à DIREITA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3460,
              "y": 4000,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q_rw",
              "id": "q_rw",
              "label": "q_rw",
              "x": 4000,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qf",
              "id": "qf",
              "label": "qf",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q0",
              "to": "q0",
              "read": "A",
              "write": "D",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "B",
              "write": "E",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "C",
              "write": "F",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "a",
              "write": "d",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "b",
              "write": "e",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "c",
              "write": "f",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "1",
              "write": "4",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q_rw",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "D",
              "write": "D",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "E",
              "write": "E",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "F",
              "write": "F",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "qf",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abc123",
        "tape": [
          "□",
          "□",
          "d",
          "e",
          "f",
          "1",
          "2",
          "3",
          "□",
          "□"
        ],
        "head": 5,
        "activeNode": "q0"
      },
      {
        "prof": {
          "message": "Executou: leu '1', escreveu '4' e moveu. Agora em q0.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3460,
              "y": 4000,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q_rw",
              "id": "q_rw",
              "label": "q_rw",
              "x": 4000,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qf",
              "id": "qf",
              "label": "qf",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q0",
              "to": "q0",
              "read": "A",
              "write": "D",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "B",
              "write": "E",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "C",
              "write": "F",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "a",
              "write": "d",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "b",
              "write": "e",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "c",
              "write": "f",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "1",
              "write": "4",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q_rw",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "D",
              "write": "D",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "E",
              "write": "E",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "F",
              "write": "F",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "qf",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abc123",
        "tape": [
          "□",
          "□",
          "d",
          "e",
          "f",
          "4",
          "2",
          "3",
          "□",
          "□"
        ],
        "head": 6,
        "activeNode": "q0"
      },
      {
        "prof": {
          "message": "Nova regra: em q0, ao ler '2', vamos para q0, escrevemos '5' e movemos à DIREITA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3460,
              "y": 4000,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q_rw",
              "id": "q_rw",
              "label": "q_rw",
              "x": 4000,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qf",
              "id": "qf",
              "label": "qf",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q0",
              "to": "q0",
              "read": "A",
              "write": "D",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "B",
              "write": "E",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "C",
              "write": "F",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "a",
              "write": "d",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "b",
              "write": "e",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "c",
              "write": "f",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "1",
              "write": "4",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "2",
              "write": "5",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q_rw",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "D",
              "write": "D",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "E",
              "write": "E",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "F",
              "write": "F",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "qf",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abc123",
        "tape": [
          "□",
          "□",
          "d",
          "e",
          "f",
          "4",
          "2",
          "3",
          "□",
          "□"
        ],
        "head": 6,
        "activeNode": "q0"
      },
      {
        "prof": {
          "message": "Executou: leu '2', escreveu '5' e moveu. Agora em q0.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3460,
              "y": 4000,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q_rw",
              "id": "q_rw",
              "label": "q_rw",
              "x": 4000,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qf",
              "id": "qf",
              "label": "qf",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q0",
              "to": "q0",
              "read": "A",
              "write": "D",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "B",
              "write": "E",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "C",
              "write": "F",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "a",
              "write": "d",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "b",
              "write": "e",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "c",
              "write": "f",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "1",
              "write": "4",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "2",
              "write": "5",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q_rw",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "D",
              "write": "D",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "E",
              "write": "E",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "F",
              "write": "F",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "qf",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abc123",
        "tape": [
          "□",
          "□",
          "d",
          "e",
          "f",
          "4",
          "5",
          "3",
          "□",
          "□"
        ],
        "head": 7,
        "activeNode": "q0"
      },
      {
        "prof": {
          "message": "Nova regra: em q0, ao ler '3', vamos para q0, escrevemos '6' e movemos à DIREITA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3460,
              "y": 4000,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q_rw",
              "id": "q_rw",
              "label": "q_rw",
              "x": 4000,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qf",
              "id": "qf",
              "label": "qf",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q0",
              "to": "q0",
              "read": "A",
              "write": "D",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "B",
              "write": "E",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "C",
              "write": "F",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "a",
              "write": "d",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "b",
              "write": "e",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "c",
              "write": "f",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "1",
              "write": "4",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "2",
              "write": "5",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "3",
              "write": "6",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q_rw",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "D",
              "write": "D",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "E",
              "write": "E",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "F",
              "write": "F",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "qf",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abc123",
        "tape": [
          "□",
          "□",
          "d",
          "e",
          "f",
          "4",
          "5",
          "3",
          "□",
          "□"
        ],
        "head": 7,
        "activeNode": "q0"
      },
      {
        "prof": {
          "message": "Executou: leu '3', escreveu '6' e moveu. Agora em q0.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3460,
              "y": 4000,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q_rw",
              "id": "q_rw",
              "label": "q_rw",
              "x": 4000,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qf",
              "id": "qf",
              "label": "qf",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q0",
              "to": "q0",
              "read": "A",
              "write": "D",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "B",
              "write": "E",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "C",
              "write": "F",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "a",
              "write": "d",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "b",
              "write": "e",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "c",
              "write": "f",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "1",
              "write": "4",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "2",
              "write": "5",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "3",
              "write": "6",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q_rw",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "D",
              "write": "D",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "E",
              "write": "E",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "F",
              "write": "F",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "qf",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abc123",
        "tape": [
          "□",
          "□",
          "d",
          "e",
          "f",
          "4",
          "5",
          "6",
          "□",
          "□"
        ],
        "head": 8,
        "activeNode": "q0"
      },
      {
        "prof": {
          "message": "Executou: leu '□', escreveu '□' e moveu. Agora em q_rw.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3460,
              "y": 4000,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q_rw",
              "id": "q_rw",
              "label": "q_rw",
              "x": 4000,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qf",
              "id": "qf",
              "label": "qf",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q0",
              "to": "q0",
              "read": "A",
              "write": "D",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "B",
              "write": "E",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "C",
              "write": "F",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "a",
              "write": "d",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "b",
              "write": "e",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "c",
              "write": "f",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "1",
              "write": "4",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "2",
              "write": "5",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "3",
              "write": "6",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q_rw",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "D",
              "write": "D",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "E",
              "write": "E",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "F",
              "write": "F",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "qf",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abc123",
        "tape": [
          "□",
          "□",
          "d",
          "e",
          "f",
          "4",
          "5",
          "6",
          "□",
          "□"
        ],
        "head": 7,
        "activeNode": "q_rw"
      },
      {
        "prof": {
          "message": "Nova regra: em q_rw, ao ler '6', vamos para q_rw, escrevemos '6' e movemos à ESQUERDA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3460,
              "y": 4000,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q_rw",
              "id": "q_rw",
              "label": "q_rw",
              "x": 4000,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qf",
              "id": "qf",
              "label": "qf",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q0",
              "to": "q0",
              "read": "A",
              "write": "D",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "B",
              "write": "E",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "C",
              "write": "F",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "a",
              "write": "d",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "b",
              "write": "e",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "c",
              "write": "f",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "1",
              "write": "4",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "2",
              "write": "5",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "3",
              "write": "6",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q_rw",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "D",
              "write": "D",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "E",
              "write": "E",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "F",
              "write": "F",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "6",
              "write": "6",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "qf",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abc123",
        "tape": [
          "□",
          "□",
          "d",
          "e",
          "f",
          "4",
          "5",
          "6",
          "□",
          "□"
        ],
        "head": 7,
        "activeNode": "q_rw"
      },
      {
        "prof": {
          "message": "Executou: leu '6', escreveu '6' e moveu. Agora em q_rw.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3460,
              "y": 4000,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q_rw",
              "id": "q_rw",
              "label": "q_rw",
              "x": 4000,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qf",
              "id": "qf",
              "label": "qf",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q0",
              "to": "q0",
              "read": "A",
              "write": "D",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "B",
              "write": "E",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "C",
              "write": "F",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "a",
              "write": "d",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "b",
              "write": "e",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "c",
              "write": "f",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "1",
              "write": "4",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "2",
              "write": "5",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "3",
              "write": "6",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q_rw",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "D",
              "write": "D",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "E",
              "write": "E",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "F",
              "write": "F",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "6",
              "write": "6",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "qf",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abc123",
        "tape": [
          "□",
          "□",
          "d",
          "e",
          "f",
          "4",
          "5",
          "6",
          "□",
          "□"
        ],
        "head": 6,
        "activeNode": "q_rw"
      },
      {
        "prof": {
          "message": "Nova regra: em q_rw, ao ler '5', vamos para q_rw, escrevemos '5' e movemos à ESQUERDA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3460,
              "y": 4000,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q_rw",
              "id": "q_rw",
              "label": "q_rw",
              "x": 4000,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qf",
              "id": "qf",
              "label": "qf",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q0",
              "to": "q0",
              "read": "A",
              "write": "D",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "B",
              "write": "E",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "C",
              "write": "F",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "a",
              "write": "d",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "b",
              "write": "e",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "c",
              "write": "f",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "1",
              "write": "4",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "2",
              "write": "5",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "3",
              "write": "6",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q_rw",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "D",
              "write": "D",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "E",
              "write": "E",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "F",
              "write": "F",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "5",
              "write": "5",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "6",
              "write": "6",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "qf",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abc123",
        "tape": [
          "□",
          "□",
          "d",
          "e",
          "f",
          "4",
          "5",
          "6",
          "□",
          "□"
        ],
        "head": 6,
        "activeNode": "q_rw"
      },
      {
        "prof": {
          "message": "Executou: leu '5', escreveu '5' e moveu. Agora em q_rw.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3460,
              "y": 4000,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q_rw",
              "id": "q_rw",
              "label": "q_rw",
              "x": 4000,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qf",
              "id": "qf",
              "label": "qf",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q0",
              "to": "q0",
              "read": "A",
              "write": "D",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "B",
              "write": "E",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "C",
              "write": "F",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "a",
              "write": "d",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "b",
              "write": "e",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "c",
              "write": "f",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "1",
              "write": "4",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "2",
              "write": "5",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "3",
              "write": "6",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q_rw",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "D",
              "write": "D",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "E",
              "write": "E",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "F",
              "write": "F",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "5",
              "write": "5",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "6",
              "write": "6",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "qf",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abc123",
        "tape": [
          "□",
          "□",
          "d",
          "e",
          "f",
          "4",
          "5",
          "6",
          "□",
          "□"
        ],
        "head": 5,
        "activeNode": "q_rw"
      },
      {
        "prof": {
          "message": "Nova regra: em q_rw, ao ler '4', vamos para q_rw, escrevemos '4' e movemos à ESQUERDA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3460,
              "y": 4000,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q_rw",
              "id": "q_rw",
              "label": "q_rw",
              "x": 4000,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qf",
              "id": "qf",
              "label": "qf",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q0",
              "to": "q0",
              "read": "A",
              "write": "D",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "B",
              "write": "E",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "C",
              "write": "F",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "a",
              "write": "d",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "b",
              "write": "e",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "c",
              "write": "f",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "1",
              "write": "4",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "2",
              "write": "5",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "3",
              "write": "6",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q_rw",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "D",
              "write": "D",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "E",
              "write": "E",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "F",
              "write": "F",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "4",
              "write": "4",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "5",
              "write": "5",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "6",
              "write": "6",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "qf",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abc123",
        "tape": [
          "□",
          "□",
          "d",
          "e",
          "f",
          "4",
          "5",
          "6",
          "□",
          "□"
        ],
        "head": 5,
        "activeNode": "q_rw"
      },
      {
        "prof": {
          "message": "Executou: leu '4', escreveu '4' e moveu. Agora em q_rw.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3460,
              "y": 4000,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q_rw",
              "id": "q_rw",
              "label": "q_rw",
              "x": 4000,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qf",
              "id": "qf",
              "label": "qf",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q0",
              "to": "q0",
              "read": "A",
              "write": "D",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "B",
              "write": "E",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "C",
              "write": "F",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "a",
              "write": "d",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "b",
              "write": "e",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "c",
              "write": "f",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "1",
              "write": "4",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "2",
              "write": "5",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "3",
              "write": "6",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q_rw",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "D",
              "write": "D",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "E",
              "write": "E",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "F",
              "write": "F",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "4",
              "write": "4",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "5",
              "write": "5",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "6",
              "write": "6",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "qf",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abc123",
        "tape": [
          "□",
          "□",
          "d",
          "e",
          "f",
          "4",
          "5",
          "6",
          "□",
          "□"
        ],
        "head": 4,
        "activeNode": "q_rw"
      },
      {
        "prof": {
          "message": "Nova regra: em q_rw, ao ler 'f', vamos para q_rw, escrevemos 'f' e movemos à ESQUERDA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3460,
              "y": 4000,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q_rw",
              "id": "q_rw",
              "label": "q_rw",
              "x": 4000,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qf",
              "id": "qf",
              "label": "qf",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q0",
              "to": "q0",
              "read": "A",
              "write": "D",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "B",
              "write": "E",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "C",
              "write": "F",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "a",
              "write": "d",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "b",
              "write": "e",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "c",
              "write": "f",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "1",
              "write": "4",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "2",
              "write": "5",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "3",
              "write": "6",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q_rw",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "D",
              "write": "D",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "E",
              "write": "E",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "F",
              "write": "F",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "f",
              "write": "f",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "4",
              "write": "4",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "5",
              "write": "5",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "6",
              "write": "6",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "qf",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abc123",
        "tape": [
          "□",
          "□",
          "d",
          "e",
          "f",
          "4",
          "5",
          "6",
          "□",
          "□"
        ],
        "head": 4,
        "activeNode": "q_rw"
      },
      {
        "prof": {
          "message": "Executou: leu 'f', escreveu 'f' e moveu. Agora em q_rw.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3460,
              "y": 4000,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q_rw",
              "id": "q_rw",
              "label": "q_rw",
              "x": 4000,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qf",
              "id": "qf",
              "label": "qf",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q0",
              "to": "q0",
              "read": "A",
              "write": "D",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "B",
              "write": "E",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "C",
              "write": "F",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "a",
              "write": "d",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "b",
              "write": "e",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "c",
              "write": "f",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "1",
              "write": "4",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "2",
              "write": "5",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "3",
              "write": "6",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q_rw",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "D",
              "write": "D",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "E",
              "write": "E",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "F",
              "write": "F",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "f",
              "write": "f",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "4",
              "write": "4",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "5",
              "write": "5",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "6",
              "write": "6",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "qf",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abc123",
        "tape": [
          "□",
          "□",
          "d",
          "e",
          "f",
          "4",
          "5",
          "6",
          "□",
          "□"
        ],
        "head": 3,
        "activeNode": "q_rw"
      },
      {
        "prof": {
          "message": "Nova regra: em q_rw, ao ler 'e', vamos para q_rw, escrevemos 'e' e movemos à ESQUERDA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3460,
              "y": 4000,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q_rw",
              "id": "q_rw",
              "label": "q_rw",
              "x": 4000,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qf",
              "id": "qf",
              "label": "qf",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q0",
              "to": "q0",
              "read": "A",
              "write": "D",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "B",
              "write": "E",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "C",
              "write": "F",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "a",
              "write": "d",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "b",
              "write": "e",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "c",
              "write": "f",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "1",
              "write": "4",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "2",
              "write": "5",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "3",
              "write": "6",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q_rw",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "D",
              "write": "D",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "E",
              "write": "E",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "F",
              "write": "F",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "e",
              "write": "e",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "f",
              "write": "f",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "4",
              "write": "4",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "5",
              "write": "5",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "6",
              "write": "6",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "qf",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abc123",
        "tape": [
          "□",
          "□",
          "d",
          "e",
          "f",
          "4",
          "5",
          "6",
          "□",
          "□"
        ],
        "head": 3,
        "activeNode": "q_rw"
      },
      {
        "prof": {
          "message": "Executou: leu 'e', escreveu 'e' e moveu. Agora em q_rw.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3460,
              "y": 4000,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q_rw",
              "id": "q_rw",
              "label": "q_rw",
              "x": 4000,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qf",
              "id": "qf",
              "label": "qf",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q0",
              "to": "q0",
              "read": "A",
              "write": "D",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "B",
              "write": "E",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "C",
              "write": "F",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "a",
              "write": "d",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "b",
              "write": "e",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "c",
              "write": "f",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "1",
              "write": "4",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "2",
              "write": "5",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "3",
              "write": "6",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q_rw",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "D",
              "write": "D",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "E",
              "write": "E",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "F",
              "write": "F",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "e",
              "write": "e",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "f",
              "write": "f",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "4",
              "write": "4",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "5",
              "write": "5",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "6",
              "write": "6",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "qf",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abc123",
        "tape": [
          "□",
          "□",
          "d",
          "e",
          "f",
          "4",
          "5",
          "6",
          "□",
          "□"
        ],
        "head": 2,
        "activeNode": "q_rw"
      },
      {
        "prof": {
          "message": "Nova regra: em q_rw, ao ler 'd', vamos para q_rw, escrevemos 'd' e movemos à ESQUERDA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3460,
              "y": 4000,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q_rw",
              "id": "q_rw",
              "label": "q_rw",
              "x": 4000,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qf",
              "id": "qf",
              "label": "qf",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q0",
              "to": "q0",
              "read": "A",
              "write": "D",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "B",
              "write": "E",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "C",
              "write": "F",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "a",
              "write": "d",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "b",
              "write": "e",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "c",
              "write": "f",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "1",
              "write": "4",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "2",
              "write": "5",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "3",
              "write": "6",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q_rw",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "D",
              "write": "D",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "E",
              "write": "E",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "F",
              "write": "F",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "d",
              "write": "d",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "e",
              "write": "e",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "f",
              "write": "f",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "4",
              "write": "4",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "5",
              "write": "5",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "6",
              "write": "6",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "qf",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abc123",
        "tape": [
          "□",
          "□",
          "d",
          "e",
          "f",
          "4",
          "5",
          "6",
          "□",
          "□"
        ],
        "head": 2,
        "activeNode": "q_rw"
      },
      {
        "prof": {
          "message": "Executou: leu 'd', escreveu 'd' e moveu. Agora em q_rw.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3460,
              "y": 4000,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q_rw",
              "id": "q_rw",
              "label": "q_rw",
              "x": 4000,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qf",
              "id": "qf",
              "label": "qf",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q0",
              "to": "q0",
              "read": "A",
              "write": "D",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "B",
              "write": "E",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "C",
              "write": "F",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "a",
              "write": "d",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "b",
              "write": "e",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "c",
              "write": "f",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "1",
              "write": "4",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "2",
              "write": "5",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "3",
              "write": "6",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q_rw",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "D",
              "write": "D",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "E",
              "write": "E",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "F",
              "write": "F",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "d",
              "write": "d",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "e",
              "write": "e",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "f",
              "write": "f",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "4",
              "write": "4",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "5",
              "write": "5",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "6",
              "write": "6",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "qf",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abc123",
        "tape": [
          "□",
          "□",
          "d",
          "e",
          "f",
          "4",
          "5",
          "6",
          "□",
          "□"
        ],
        "head": 1,
        "activeNode": "q_rw"
      },
      {
        "prof": {
          "message": "Chegamos em qf (estado final). A fita ficou \"def456\". ACEITA! ✓",
          "mood": "feliz"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3460,
              "y": 4000,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q_rw",
              "id": "q_rw",
              "label": "q_rw",
              "x": 4000,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qf",
              "id": "qf",
              "label": "qf",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q0",
              "to": "q0",
              "read": "A",
              "write": "D",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "B",
              "write": "E",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "C",
              "write": "F",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "a",
              "write": "d",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "b",
              "write": "e",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "c",
              "write": "f",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "1",
              "write": "4",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "2",
              "write": "5",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "3",
              "write": "6",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q_rw",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "D",
              "write": "D",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "E",
              "write": "E",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "F",
              "write": "F",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "d",
              "write": "d",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "e",
              "write": "e",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "f",
              "write": "f",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "4",
              "write": "4",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "5",
              "write": "5",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "6",
              "write": "6",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "qf",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abc123",
        "tape": [
          "□",
          "□",
          "d",
          "e",
          "f",
          "4",
          "5",
          "6",
          "□",
          "□"
        ],
        "head": 2,
        "activeNode": "qf",
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
              "x": 3460,
              "y": 4000,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q_rw",
              "id": "q_rw",
              "label": "q_rw",
              "x": 4000,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qf",
              "id": "qf",
              "label": "qf",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q0",
              "to": "q0",
              "read": "A",
              "write": "D",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "B",
              "write": "E",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "C",
              "write": "F",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "D",
              "write": "G",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "E",
              "write": "H",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "F",
              "write": "I",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "G",
              "write": "J",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "H",
              "write": "K",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "I",
              "write": "L",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "J",
              "write": "M",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "K",
              "write": "N",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "L",
              "write": "O",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "M",
              "write": "P",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "N",
              "write": "Q",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "O",
              "write": "R",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "P",
              "write": "S",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "Q",
              "write": "T",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "R",
              "write": "U",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "S",
              "write": "V",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "T",
              "write": "W",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "U",
              "write": "X",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "V",
              "write": "Y",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "W",
              "write": "Z",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "X",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "Y",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "Z",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "a",
              "write": "d",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "b",
              "write": "e",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "c",
              "write": "f",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "d",
              "write": "g",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "e",
              "write": "h",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "f",
              "write": "i",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "g",
              "write": "j",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "h",
              "write": "k",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "i",
              "write": "l",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "j",
              "write": "m",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "k",
              "write": "n",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "l",
              "write": "o",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "m",
              "write": "p",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "n",
              "write": "q",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "o",
              "write": "r",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "p",
              "write": "s",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "q",
              "write": "t",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "r",
              "write": "u",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "s",
              "write": "v",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "t",
              "write": "w",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "u",
              "write": "x",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "v",
              "write": "y",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "w",
              "write": "z",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "x",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "y",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "z",
              "write": "c",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "0",
              "write": "3",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "1",
              "write": "4",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "2",
              "write": "5",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "3",
              "write": "6",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "4",
              "write": "7",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "5",
              "write": "8",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "6",
              "write": "9",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "7",
              "write": "0",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "8",
              "write": "1",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "9",
              "write": "2",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": ",",
              "write": ",",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": ".",
              "write": ".",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "?",
              "write": "?",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "!",
              "write": "!",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": ";",
              "write": ";",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": ":",
              "write": ":",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "´",
              "write": "´",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "`",
              "write": "`",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "^",
              "write": "^",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "~",
              "write": "~",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": " ",
              "write": " ",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q_rw",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "D",
              "write": "D",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "E",
              "write": "E",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "F",
              "write": "F",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "G",
              "write": "G",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "H",
              "write": "H",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "I",
              "write": "I",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "J",
              "write": "J",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "K",
              "write": "K",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "L",
              "write": "L",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "M",
              "write": "M",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "N",
              "write": "N",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "O",
              "write": "O",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "P",
              "write": "P",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "Q",
              "write": "Q",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "R",
              "write": "R",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "S",
              "write": "S",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "T",
              "write": "T",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "U",
              "write": "U",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "V",
              "write": "V",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "W",
              "write": "W",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "X",
              "write": "X",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "Y",
              "write": "Y",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "Z",
              "write": "Z",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "d",
              "write": "d",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "e",
              "write": "e",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "f",
              "write": "f",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "g",
              "write": "g",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "h",
              "write": "h",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "i",
              "write": "i",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "j",
              "write": "j",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "k",
              "write": "k",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "l",
              "write": "l",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "m",
              "write": "m",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "n",
              "write": "n",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "o",
              "write": "o",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "p",
              "write": "p",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "q",
              "write": "q",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "r",
              "write": "r",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "s",
              "write": "s",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "t",
              "write": "t",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "u",
              "write": "u",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "v",
              "write": "v",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "w",
              "write": "w",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "x",
              "write": "x",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "y",
              "write": "y",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "z",
              "write": "z",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "0",
              "write": "0",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "1",
              "write": "1",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "2",
              "write": "2",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "3",
              "write": "3",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "4",
              "write": "4",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "5",
              "write": "5",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "6",
              "write": "6",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "7",
              "write": "7",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "8",
              "write": "8",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "9",
              "write": "9",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": ",",
              "write": ",",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": ".",
              "write": ".",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "?",
              "write": "?",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "!",
              "write": "!",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": ";",
              "write": ";",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": ":",
              "write": ":",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "´",
              "write": "´",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "`",
              "write": "`",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "^",
              "write": "^",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "~",
              "write": "~",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": " ",
              "write": " ",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "qf",
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
              "x": 3460,
              "y": 4000,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q_rw",
              "id": "q_rw",
              "label": "q_rw",
              "x": 4000,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qf",
              "id": "qf",
              "label": "qf",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q0",
              "to": "q0",
              "read": "A",
              "write": "D",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "B",
              "write": "E",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "C",
              "write": "F",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "D",
              "write": "G",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "E",
              "write": "H",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "F",
              "write": "I",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "G",
              "write": "J",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "H",
              "write": "K",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "I",
              "write": "L",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "J",
              "write": "M",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "K",
              "write": "N",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "L",
              "write": "O",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "M",
              "write": "P",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "N",
              "write": "Q",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "O",
              "write": "R",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "P",
              "write": "S",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "Q",
              "write": "T",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "R",
              "write": "U",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "S",
              "write": "V",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "T",
              "write": "W",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "U",
              "write": "X",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "V",
              "write": "Y",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "W",
              "write": "Z",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "X",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "Y",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "Z",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "a",
              "write": "d",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "b",
              "write": "e",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "c",
              "write": "f",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "d",
              "write": "g",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "e",
              "write": "h",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "f",
              "write": "i",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "g",
              "write": "j",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "h",
              "write": "k",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "i",
              "write": "l",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "j",
              "write": "m",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "k",
              "write": "n",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "l",
              "write": "o",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "m",
              "write": "p",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "n",
              "write": "q",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "o",
              "write": "r",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "p",
              "write": "s",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "q",
              "write": "t",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "r",
              "write": "u",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "s",
              "write": "v",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "t",
              "write": "w",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "u",
              "write": "x",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "v",
              "write": "y",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "w",
              "write": "z",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "x",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "y",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "z",
              "write": "c",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "0",
              "write": "3",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "1",
              "write": "4",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "2",
              "write": "5",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "3",
              "write": "6",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "4",
              "write": "7",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "5",
              "write": "8",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "6",
              "write": "9",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "7",
              "write": "0",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "8",
              "write": "1",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "9",
              "write": "2",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": ",",
              "write": ",",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": ".",
              "write": ".",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "?",
              "write": "?",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "!",
              "write": "!",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": ";",
              "write": ";",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": ":",
              "write": ":",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "´",
              "write": "´",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "`",
              "write": "`",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "^",
              "write": "^",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "~",
              "write": "~",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": " ",
              "write": " ",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q_rw",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "D",
              "write": "D",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "E",
              "write": "E",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "F",
              "write": "F",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "G",
              "write": "G",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "H",
              "write": "H",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "I",
              "write": "I",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "J",
              "write": "J",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "K",
              "write": "K",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "L",
              "write": "L",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "M",
              "write": "M",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "N",
              "write": "N",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "O",
              "write": "O",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "P",
              "write": "P",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "Q",
              "write": "Q",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "R",
              "write": "R",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "S",
              "write": "S",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "T",
              "write": "T",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "U",
              "write": "U",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "V",
              "write": "V",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "W",
              "write": "W",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "X",
              "write": "X",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "Y",
              "write": "Y",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "Z",
              "write": "Z",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "d",
              "write": "d",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "e",
              "write": "e",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "f",
              "write": "f",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "g",
              "write": "g",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "h",
              "write": "h",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "i",
              "write": "i",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "j",
              "write": "j",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "k",
              "write": "k",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "l",
              "write": "l",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "m",
              "write": "m",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "n",
              "write": "n",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "o",
              "write": "o",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "p",
              "write": "p",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "q",
              "write": "q",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "r",
              "write": "r",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "s",
              "write": "s",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "t",
              "write": "t",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "u",
              "write": "u",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "v",
              "write": "v",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "w",
              "write": "w",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "x",
              "write": "x",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "y",
              "write": "y",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "z",
              "write": "z",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "0",
              "write": "0",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "1",
              "write": "1",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "2",
              "write": "2",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "3",
              "write": "3",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "4",
              "write": "4",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "5",
              "write": "5",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "6",
              "write": "6",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "7",
              "write": "7",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "8",
              "write": "8",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "9",
              "write": "9",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": ",",
              "write": ",",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": ".",
              "write": ".",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "?",
              "write": "?",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "!",
              "write": "!",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": ";",
              "write": ";",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": ":",
              "write": ":",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "´",
              "write": "´",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "`",
              "write": "`",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "^",
              "write": "^",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "~",
              "write": "~",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": " ",
              "write": " ",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "qf",
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
          "message": "Q é o conjunto de ESTADOS: {q0,q_rw,qf}",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3460,
              "y": 4000,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q_rw",
              "id": "q_rw",
              "label": "q_rw",
              "x": 4000,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qf",
              "id": "qf",
              "label": "qf",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q0",
              "to": "q0",
              "read": "A",
              "write": "D",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "B",
              "write": "E",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "C",
              "write": "F",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "D",
              "write": "G",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "E",
              "write": "H",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "F",
              "write": "I",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "G",
              "write": "J",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "H",
              "write": "K",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "I",
              "write": "L",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "J",
              "write": "M",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "K",
              "write": "N",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "L",
              "write": "O",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "M",
              "write": "P",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "N",
              "write": "Q",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "O",
              "write": "R",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "P",
              "write": "S",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "Q",
              "write": "T",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "R",
              "write": "U",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "S",
              "write": "V",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "T",
              "write": "W",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "U",
              "write": "X",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "V",
              "write": "Y",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "W",
              "write": "Z",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "X",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "Y",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "Z",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "a",
              "write": "d",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "b",
              "write": "e",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "c",
              "write": "f",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "d",
              "write": "g",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "e",
              "write": "h",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "f",
              "write": "i",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "g",
              "write": "j",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "h",
              "write": "k",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "i",
              "write": "l",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "j",
              "write": "m",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "k",
              "write": "n",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "l",
              "write": "o",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "m",
              "write": "p",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "n",
              "write": "q",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "o",
              "write": "r",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "p",
              "write": "s",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "q",
              "write": "t",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "r",
              "write": "u",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "s",
              "write": "v",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "t",
              "write": "w",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "u",
              "write": "x",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "v",
              "write": "y",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "w",
              "write": "z",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "x",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "y",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "z",
              "write": "c",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "0",
              "write": "3",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "1",
              "write": "4",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "2",
              "write": "5",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "3",
              "write": "6",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "4",
              "write": "7",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "5",
              "write": "8",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "6",
              "write": "9",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "7",
              "write": "0",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "8",
              "write": "1",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "9",
              "write": "2",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": ",",
              "write": ",",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": ".",
              "write": ".",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "?",
              "write": "?",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "!",
              "write": "!",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": ";",
              "write": ";",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": ":",
              "write": ":",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "´",
              "write": "´",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "`",
              "write": "`",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "^",
              "write": "^",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "~",
              "write": "~",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": " ",
              "write": " ",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q_rw",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "D",
              "write": "D",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "E",
              "write": "E",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "F",
              "write": "F",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "G",
              "write": "G",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "H",
              "write": "H",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "I",
              "write": "I",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "J",
              "write": "J",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "K",
              "write": "K",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "L",
              "write": "L",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "M",
              "write": "M",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "N",
              "write": "N",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "O",
              "write": "O",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "P",
              "write": "P",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "Q",
              "write": "Q",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "R",
              "write": "R",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "S",
              "write": "S",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "T",
              "write": "T",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "U",
              "write": "U",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "V",
              "write": "V",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "W",
              "write": "W",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "X",
              "write": "X",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "Y",
              "write": "Y",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "Z",
              "write": "Z",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "d",
              "write": "d",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "e",
              "write": "e",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "f",
              "write": "f",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "g",
              "write": "g",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "h",
              "write": "h",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "i",
              "write": "i",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "j",
              "write": "j",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "k",
              "write": "k",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "l",
              "write": "l",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "m",
              "write": "m",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "n",
              "write": "n",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "o",
              "write": "o",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "p",
              "write": "p",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "q",
              "write": "q",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "r",
              "write": "r",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "s",
              "write": "s",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "t",
              "write": "t",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "u",
              "write": "u",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "v",
              "write": "v",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "w",
              "write": "w",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "x",
              "write": "x",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "y",
              "write": "y",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "z",
              "write": "z",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "0",
              "write": "0",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "1",
              "write": "1",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "2",
              "write": "2",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "3",
              "write": "3",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "4",
              "write": "4",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "5",
              "write": "5",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "6",
              "write": "6",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "7",
              "write": "7",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "8",
              "write": "8",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "9",
              "write": "9",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": ",",
              "write": ",",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": ".",
              "write": ".",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "?",
              "write": "?",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "!",
              "write": "!",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": ";",
              "write": ";",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": ":",
              "write": ":",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "´",
              "write": "´",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "`",
              "write": "`",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "^",
              "write": "^",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "~",
              "write": "~",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": " ",
              "write": " ",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "qf",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "phase": "FORMAL",
        "formalFill": {
          "states": "{q0,q_rw,qf}"
        }
      },
      {
        "prof": {
          "message": "Σ é o alfabeto de ENTRADA: {A,B,C,a,b,c,0,1,2, ,,,.}",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3460,
              "y": 4000,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q_rw",
              "id": "q_rw",
              "label": "q_rw",
              "x": 4000,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qf",
              "id": "qf",
              "label": "qf",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q0",
              "to": "q0",
              "read": "A",
              "write": "D",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "B",
              "write": "E",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "C",
              "write": "F",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "D",
              "write": "G",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "E",
              "write": "H",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "F",
              "write": "I",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "G",
              "write": "J",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "H",
              "write": "K",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "I",
              "write": "L",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "J",
              "write": "M",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "K",
              "write": "N",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "L",
              "write": "O",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "M",
              "write": "P",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "N",
              "write": "Q",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "O",
              "write": "R",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "P",
              "write": "S",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "Q",
              "write": "T",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "R",
              "write": "U",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "S",
              "write": "V",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "T",
              "write": "W",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "U",
              "write": "X",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "V",
              "write": "Y",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "W",
              "write": "Z",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "X",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "Y",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "Z",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "a",
              "write": "d",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "b",
              "write": "e",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "c",
              "write": "f",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "d",
              "write": "g",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "e",
              "write": "h",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "f",
              "write": "i",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "g",
              "write": "j",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "h",
              "write": "k",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "i",
              "write": "l",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "j",
              "write": "m",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "k",
              "write": "n",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "l",
              "write": "o",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "m",
              "write": "p",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "n",
              "write": "q",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "o",
              "write": "r",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "p",
              "write": "s",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "q",
              "write": "t",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "r",
              "write": "u",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "s",
              "write": "v",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "t",
              "write": "w",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "u",
              "write": "x",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "v",
              "write": "y",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "w",
              "write": "z",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "x",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "y",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "z",
              "write": "c",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "0",
              "write": "3",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "1",
              "write": "4",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "2",
              "write": "5",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "3",
              "write": "6",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "4",
              "write": "7",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "5",
              "write": "8",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "6",
              "write": "9",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "7",
              "write": "0",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "8",
              "write": "1",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "9",
              "write": "2",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": ",",
              "write": ",",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": ".",
              "write": ".",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "?",
              "write": "?",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "!",
              "write": "!",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": ";",
              "write": ";",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": ":",
              "write": ":",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "´",
              "write": "´",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "`",
              "write": "`",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "^",
              "write": "^",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "~",
              "write": "~",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": " ",
              "write": " ",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q_rw",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "D",
              "write": "D",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "E",
              "write": "E",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "F",
              "write": "F",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "G",
              "write": "G",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "H",
              "write": "H",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "I",
              "write": "I",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "J",
              "write": "J",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "K",
              "write": "K",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "L",
              "write": "L",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "M",
              "write": "M",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "N",
              "write": "N",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "O",
              "write": "O",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "P",
              "write": "P",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "Q",
              "write": "Q",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "R",
              "write": "R",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "S",
              "write": "S",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "T",
              "write": "T",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "U",
              "write": "U",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "V",
              "write": "V",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "W",
              "write": "W",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "X",
              "write": "X",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "Y",
              "write": "Y",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "Z",
              "write": "Z",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "d",
              "write": "d",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "e",
              "write": "e",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "f",
              "write": "f",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "g",
              "write": "g",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "h",
              "write": "h",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "i",
              "write": "i",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "j",
              "write": "j",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "k",
              "write": "k",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "l",
              "write": "l",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "m",
              "write": "m",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "n",
              "write": "n",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "o",
              "write": "o",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "p",
              "write": "p",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "q",
              "write": "q",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "r",
              "write": "r",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "s",
              "write": "s",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "t",
              "write": "t",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "u",
              "write": "u",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "v",
              "write": "v",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "w",
              "write": "w",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "x",
              "write": "x",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "y",
              "write": "y",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "z",
              "write": "z",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "0",
              "write": "0",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "1",
              "write": "1",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "2",
              "write": "2",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "3",
              "write": "3",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "4",
              "write": "4",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "5",
              "write": "5",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "6",
              "write": "6",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "7",
              "write": "7",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "8",
              "write": "8",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "9",
              "write": "9",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": ",",
              "write": ",",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": ".",
              "write": ".",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "?",
              "write": "?",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "!",
              "write": "!",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": ";",
              "write": ";",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": ":",
              "write": ":",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "´",
              "write": "´",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "`",
              "write": "`",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "^",
              "write": "^",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "~",
              "write": "~",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": " ",
              "write": " ",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "qf",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "phase": "FORMAL",
        "formalFill": {
          "sigma": "{A,B,C,a,b,c,0,1,2, ,,,.}"
        }
      },
      {
        "prof": {
          "message": "Γ é o alfabeto da FITA: { ,!,,,.,0,1,2,3,4,5,6,7,8,9,:,;,?,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,^,`,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,~,´,□}",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3460,
              "y": 4000,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q_rw",
              "id": "q_rw",
              "label": "q_rw",
              "x": 4000,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qf",
              "id": "qf",
              "label": "qf",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q0",
              "to": "q0",
              "read": "A",
              "write": "D",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "B",
              "write": "E",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "C",
              "write": "F",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "D",
              "write": "G",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "E",
              "write": "H",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "F",
              "write": "I",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "G",
              "write": "J",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "H",
              "write": "K",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "I",
              "write": "L",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "J",
              "write": "M",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "K",
              "write": "N",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "L",
              "write": "O",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "M",
              "write": "P",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "N",
              "write": "Q",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "O",
              "write": "R",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "P",
              "write": "S",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "Q",
              "write": "T",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "R",
              "write": "U",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "S",
              "write": "V",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "T",
              "write": "W",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "U",
              "write": "X",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "V",
              "write": "Y",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "W",
              "write": "Z",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "X",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "Y",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "Z",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "a",
              "write": "d",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "b",
              "write": "e",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "c",
              "write": "f",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "d",
              "write": "g",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "e",
              "write": "h",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "f",
              "write": "i",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "g",
              "write": "j",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "h",
              "write": "k",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "i",
              "write": "l",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "j",
              "write": "m",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "k",
              "write": "n",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "l",
              "write": "o",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "m",
              "write": "p",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "n",
              "write": "q",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "o",
              "write": "r",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "p",
              "write": "s",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "q",
              "write": "t",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "r",
              "write": "u",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "s",
              "write": "v",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "t",
              "write": "w",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "u",
              "write": "x",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "v",
              "write": "y",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "w",
              "write": "z",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "x",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "y",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "z",
              "write": "c",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "0",
              "write": "3",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "1",
              "write": "4",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "2",
              "write": "5",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "3",
              "write": "6",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "4",
              "write": "7",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "5",
              "write": "8",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "6",
              "write": "9",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "7",
              "write": "0",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "8",
              "write": "1",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "9",
              "write": "2",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": ",",
              "write": ",",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": ".",
              "write": ".",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "?",
              "write": "?",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "!",
              "write": "!",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": ";",
              "write": ";",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": ":",
              "write": ":",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "´",
              "write": "´",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "`",
              "write": "`",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "^",
              "write": "^",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "~",
              "write": "~",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": " ",
              "write": " ",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q_rw",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "D",
              "write": "D",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "E",
              "write": "E",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "F",
              "write": "F",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "G",
              "write": "G",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "H",
              "write": "H",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "I",
              "write": "I",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "J",
              "write": "J",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "K",
              "write": "K",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "L",
              "write": "L",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "M",
              "write": "M",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "N",
              "write": "N",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "O",
              "write": "O",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "P",
              "write": "P",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "Q",
              "write": "Q",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "R",
              "write": "R",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "S",
              "write": "S",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "T",
              "write": "T",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "U",
              "write": "U",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "V",
              "write": "V",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "W",
              "write": "W",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "X",
              "write": "X",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "Y",
              "write": "Y",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "Z",
              "write": "Z",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "d",
              "write": "d",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "e",
              "write": "e",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "f",
              "write": "f",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "g",
              "write": "g",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "h",
              "write": "h",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "i",
              "write": "i",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "j",
              "write": "j",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "k",
              "write": "k",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "l",
              "write": "l",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "m",
              "write": "m",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "n",
              "write": "n",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "o",
              "write": "o",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "p",
              "write": "p",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "q",
              "write": "q",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "r",
              "write": "r",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "s",
              "write": "s",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "t",
              "write": "t",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "u",
              "write": "u",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "v",
              "write": "v",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "w",
              "write": "w",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "x",
              "write": "x",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "y",
              "write": "y",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "z",
              "write": "z",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "0",
              "write": "0",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "1",
              "write": "1",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "2",
              "write": "2",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "3",
              "write": "3",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "4",
              "write": "4",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "5",
              "write": "5",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "6",
              "write": "6",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "7",
              "write": "7",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "8",
              "write": "8",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "9",
              "write": "9",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": ",",
              "write": ",",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": ".",
              "write": ".",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "?",
              "write": "?",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "!",
              "write": "!",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": ";",
              "write": ";",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": ":",
              "write": ":",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "´",
              "write": "´",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "`",
              "write": "`",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "^",
              "write": "^",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "~",
              "write": "~",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": " ",
              "write": " ",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "qf",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "phase": "FORMAL",
        "formalFill": {
          "gamma": "{ ,!,,,.,0,1,2,3,4,5,6,7,8,9,:,;,?,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,^,`,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,~,´,□}"
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
              "x": 3460,
              "y": 4000,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q_rw",
              "id": "q_rw",
              "label": "q_rw",
              "x": 4000,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qf",
              "id": "qf",
              "label": "qf",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q0",
              "to": "q0",
              "read": "A",
              "write": "D",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "B",
              "write": "E",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "C",
              "write": "F",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "D",
              "write": "G",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "E",
              "write": "H",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "F",
              "write": "I",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "G",
              "write": "J",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "H",
              "write": "K",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "I",
              "write": "L",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "J",
              "write": "M",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "K",
              "write": "N",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "L",
              "write": "O",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "M",
              "write": "P",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "N",
              "write": "Q",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "O",
              "write": "R",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "P",
              "write": "S",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "Q",
              "write": "T",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "R",
              "write": "U",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "S",
              "write": "V",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "T",
              "write": "W",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "U",
              "write": "X",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "V",
              "write": "Y",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "W",
              "write": "Z",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "X",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "Y",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "Z",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "a",
              "write": "d",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "b",
              "write": "e",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "c",
              "write": "f",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "d",
              "write": "g",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "e",
              "write": "h",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "f",
              "write": "i",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "g",
              "write": "j",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "h",
              "write": "k",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "i",
              "write": "l",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "j",
              "write": "m",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "k",
              "write": "n",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "l",
              "write": "o",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "m",
              "write": "p",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "n",
              "write": "q",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "o",
              "write": "r",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "p",
              "write": "s",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "q",
              "write": "t",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "r",
              "write": "u",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "s",
              "write": "v",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "t",
              "write": "w",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "u",
              "write": "x",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "v",
              "write": "y",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "w",
              "write": "z",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "x",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "y",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "z",
              "write": "c",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "0",
              "write": "3",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "1",
              "write": "4",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "2",
              "write": "5",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "3",
              "write": "6",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "4",
              "write": "7",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "5",
              "write": "8",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "6",
              "write": "9",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "7",
              "write": "0",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "8",
              "write": "1",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "9",
              "write": "2",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": ",",
              "write": ",",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": ".",
              "write": ".",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "?",
              "write": "?",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "!",
              "write": "!",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": ";",
              "write": ";",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": ":",
              "write": ":",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "´",
              "write": "´",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "`",
              "write": "`",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "^",
              "write": "^",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "~",
              "write": "~",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": " ",
              "write": " ",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q_rw",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "D",
              "write": "D",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "E",
              "write": "E",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "F",
              "write": "F",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "G",
              "write": "G",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "H",
              "write": "H",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "I",
              "write": "I",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "J",
              "write": "J",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "K",
              "write": "K",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "L",
              "write": "L",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "M",
              "write": "M",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "N",
              "write": "N",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "O",
              "write": "O",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "P",
              "write": "P",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "Q",
              "write": "Q",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "R",
              "write": "R",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "S",
              "write": "S",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "T",
              "write": "T",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "U",
              "write": "U",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "V",
              "write": "V",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "W",
              "write": "W",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "X",
              "write": "X",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "Y",
              "write": "Y",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "Z",
              "write": "Z",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "d",
              "write": "d",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "e",
              "write": "e",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "f",
              "write": "f",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "g",
              "write": "g",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "h",
              "write": "h",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "i",
              "write": "i",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "j",
              "write": "j",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "k",
              "write": "k",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "l",
              "write": "l",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "m",
              "write": "m",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "n",
              "write": "n",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "o",
              "write": "o",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "p",
              "write": "p",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "q",
              "write": "q",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "r",
              "write": "r",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "s",
              "write": "s",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "t",
              "write": "t",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "u",
              "write": "u",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "v",
              "write": "v",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "w",
              "write": "w",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "x",
              "write": "x",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "y",
              "write": "y",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "z",
              "write": "z",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "0",
              "write": "0",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "1",
              "write": "1",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "2",
              "write": "2",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "3",
              "write": "3",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "4",
              "write": "4",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "5",
              "write": "5",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "6",
              "write": "6",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "7",
              "write": "7",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "8",
              "write": "8",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "9",
              "write": "9",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": ",",
              "write": ",",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": ".",
              "write": ".",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "?",
              "write": "?",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "!",
              "write": "!",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": ";",
              "write": ";",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": ":",
              "write": ":",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "´",
              "write": "´",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "`",
              "write": "`",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "^",
              "write": "^",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "~",
              "write": "~",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": " ",
              "write": " ",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "qf",
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
              "x": 3460,
              "y": 4000,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q_rw",
              "id": "q_rw",
              "label": "q_rw",
              "x": 4000,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qf",
              "id": "qf",
              "label": "qf",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q0",
              "to": "q0",
              "read": "A",
              "write": "D",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "B",
              "write": "E",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "C",
              "write": "F",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "D",
              "write": "G",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "E",
              "write": "H",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "F",
              "write": "I",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "G",
              "write": "J",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "H",
              "write": "K",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "I",
              "write": "L",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "J",
              "write": "M",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "K",
              "write": "N",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "L",
              "write": "O",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "M",
              "write": "P",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "N",
              "write": "Q",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "O",
              "write": "R",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "P",
              "write": "S",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "Q",
              "write": "T",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "R",
              "write": "U",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "S",
              "write": "V",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "T",
              "write": "W",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "U",
              "write": "X",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "V",
              "write": "Y",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "W",
              "write": "Z",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "X",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "Y",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "Z",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "a",
              "write": "d",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "b",
              "write": "e",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "c",
              "write": "f",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "d",
              "write": "g",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "e",
              "write": "h",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "f",
              "write": "i",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "g",
              "write": "j",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "h",
              "write": "k",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "i",
              "write": "l",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "j",
              "write": "m",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "k",
              "write": "n",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "l",
              "write": "o",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "m",
              "write": "p",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "n",
              "write": "q",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "o",
              "write": "r",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "p",
              "write": "s",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "q",
              "write": "t",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "r",
              "write": "u",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "s",
              "write": "v",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "t",
              "write": "w",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "u",
              "write": "x",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "v",
              "write": "y",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "w",
              "write": "z",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "x",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "y",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "z",
              "write": "c",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "0",
              "write": "3",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "1",
              "write": "4",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "2",
              "write": "5",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "3",
              "write": "6",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "4",
              "write": "7",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "5",
              "write": "8",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "6",
              "write": "9",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "7",
              "write": "0",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "8",
              "write": "1",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "9",
              "write": "2",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": ",",
              "write": ",",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": ".",
              "write": ".",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "?",
              "write": "?",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "!",
              "write": "!",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": ";",
              "write": ";",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": ":",
              "write": ":",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "´",
              "write": "´",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "`",
              "write": "`",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "^",
              "write": "^",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "~",
              "write": "~",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": " ",
              "write": " ",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q_rw",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "D",
              "write": "D",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "E",
              "write": "E",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "F",
              "write": "F",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "G",
              "write": "G",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "H",
              "write": "H",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "I",
              "write": "I",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "J",
              "write": "J",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "K",
              "write": "K",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "L",
              "write": "L",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "M",
              "write": "M",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "N",
              "write": "N",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "O",
              "write": "O",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "P",
              "write": "P",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "Q",
              "write": "Q",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "R",
              "write": "R",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "S",
              "write": "S",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "T",
              "write": "T",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "U",
              "write": "U",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "V",
              "write": "V",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "W",
              "write": "W",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "X",
              "write": "X",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "Y",
              "write": "Y",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "Z",
              "write": "Z",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "d",
              "write": "d",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "e",
              "write": "e",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "f",
              "write": "f",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "g",
              "write": "g",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "h",
              "write": "h",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "i",
              "write": "i",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "j",
              "write": "j",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "k",
              "write": "k",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "l",
              "write": "l",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "m",
              "write": "m",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "n",
              "write": "n",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "o",
              "write": "o",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "p",
              "write": "p",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "q",
              "write": "q",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "r",
              "write": "r",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "s",
              "write": "s",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "t",
              "write": "t",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "u",
              "write": "u",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "v",
              "write": "v",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "w",
              "write": "w",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "x",
              "write": "x",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "y",
              "write": "y",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "z",
              "write": "z",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "0",
              "write": "0",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "1",
              "write": "1",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "2",
              "write": "2",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "3",
              "write": "3",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "4",
              "write": "4",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "5",
              "write": "5",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "6",
              "write": "6",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "7",
              "write": "7",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "8",
              "write": "8",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "9",
              "write": "9",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": ",",
              "write": ",",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": ".",
              "write": ".",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "?",
              "write": "?",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "!",
              "write": "!",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": ";",
              "write": ";",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": ":",
              "write": ":",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "´",
              "write": "´",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "`",
              "write": "`",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "^",
              "write": "^",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "~",
              "write": "~",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": " ",
              "write": " ",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "qf",
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
          "message": "F é o conjunto de estados de ACEITAÇÃO: {qf}",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3460,
              "y": 4000,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q_rw",
              "id": "q_rw",
              "label": "q_rw",
              "x": 4000,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qf",
              "id": "qf",
              "label": "qf",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q0",
              "to": "q0",
              "read": "A",
              "write": "D",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "B",
              "write": "E",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "C",
              "write": "F",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "D",
              "write": "G",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "E",
              "write": "H",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "F",
              "write": "I",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "G",
              "write": "J",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "H",
              "write": "K",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "I",
              "write": "L",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "J",
              "write": "M",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "K",
              "write": "N",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "L",
              "write": "O",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "M",
              "write": "P",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "N",
              "write": "Q",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "O",
              "write": "R",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "P",
              "write": "S",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "Q",
              "write": "T",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "R",
              "write": "U",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "S",
              "write": "V",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "T",
              "write": "W",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "U",
              "write": "X",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "V",
              "write": "Y",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "W",
              "write": "Z",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "X",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "Y",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "Z",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "a",
              "write": "d",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "b",
              "write": "e",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "c",
              "write": "f",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "d",
              "write": "g",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "e",
              "write": "h",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "f",
              "write": "i",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "g",
              "write": "j",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "h",
              "write": "k",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "i",
              "write": "l",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "j",
              "write": "m",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "k",
              "write": "n",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "l",
              "write": "o",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "m",
              "write": "p",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "n",
              "write": "q",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "o",
              "write": "r",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "p",
              "write": "s",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "q",
              "write": "t",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "r",
              "write": "u",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "s",
              "write": "v",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "t",
              "write": "w",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "u",
              "write": "x",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "v",
              "write": "y",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "w",
              "write": "z",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "x",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "y",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "z",
              "write": "c",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "0",
              "write": "3",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "1",
              "write": "4",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "2",
              "write": "5",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "3",
              "write": "6",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "4",
              "write": "7",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "5",
              "write": "8",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "6",
              "write": "9",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "7",
              "write": "0",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "8",
              "write": "1",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "9",
              "write": "2",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": ",",
              "write": ",",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": ".",
              "write": ".",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "?",
              "write": "?",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "!",
              "write": "!",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": ";",
              "write": ";",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": ":",
              "write": ":",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "´",
              "write": "´",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "`",
              "write": "`",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "^",
              "write": "^",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "~",
              "write": "~",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": " ",
              "write": " ",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q_rw",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "D",
              "write": "D",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "E",
              "write": "E",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "F",
              "write": "F",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "G",
              "write": "G",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "H",
              "write": "H",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "I",
              "write": "I",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "J",
              "write": "J",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "K",
              "write": "K",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "L",
              "write": "L",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "M",
              "write": "M",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "N",
              "write": "N",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "O",
              "write": "O",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "P",
              "write": "P",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "Q",
              "write": "Q",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "R",
              "write": "R",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "S",
              "write": "S",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "T",
              "write": "T",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "U",
              "write": "U",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "V",
              "write": "V",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "W",
              "write": "W",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "X",
              "write": "X",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "Y",
              "write": "Y",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "Z",
              "write": "Z",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "d",
              "write": "d",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "e",
              "write": "e",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "f",
              "write": "f",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "g",
              "write": "g",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "h",
              "write": "h",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "i",
              "write": "i",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "j",
              "write": "j",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "k",
              "write": "k",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "l",
              "write": "l",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "m",
              "write": "m",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "n",
              "write": "n",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "o",
              "write": "o",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "p",
              "write": "p",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "q",
              "write": "q",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "r",
              "write": "r",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "s",
              "write": "s",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "t",
              "write": "t",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "u",
              "write": "u",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "v",
              "write": "v",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "w",
              "write": "w",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "x",
              "write": "x",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "y",
              "write": "y",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "z",
              "write": "z",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "0",
              "write": "0",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "1",
              "write": "1",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "2",
              "write": "2",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "3",
              "write": "3",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "4",
              "write": "4",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "5",
              "write": "5",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "6",
              "write": "6",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "7",
              "write": "7",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "8",
              "write": "8",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "9",
              "write": "9",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": ",",
              "write": ",",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": ".",
              "write": ".",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "?",
              "write": "?",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "!",
              "write": "!",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": ";",
              "write": ";",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": ":",
              "write": ":",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "´",
              "write": "´",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "`",
              "write": "`",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "^",
              "write": "^",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "~",
              "write": "~",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": " ",
              "write": " ",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "qf",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "phase": "FORMAL",
        "formalFill": {
          "final": "{qf}"
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
              "x": 3460,
              "y": 4000,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q_rw",
              "id": "q_rw",
              "label": "q_rw",
              "x": 4000,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qf",
              "id": "qf",
              "label": "qf",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q0",
              "to": "q0",
              "read": "A",
              "write": "D",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "B",
              "write": "E",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "C",
              "write": "F",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "D",
              "write": "G",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "E",
              "write": "H",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "F",
              "write": "I",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "G",
              "write": "J",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "H",
              "write": "K",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "I",
              "write": "L",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "J",
              "write": "M",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "K",
              "write": "N",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "L",
              "write": "O",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "M",
              "write": "P",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "N",
              "write": "Q",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "O",
              "write": "R",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "P",
              "write": "S",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "Q",
              "write": "T",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "R",
              "write": "U",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "S",
              "write": "V",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "T",
              "write": "W",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "U",
              "write": "X",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "V",
              "write": "Y",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "W",
              "write": "Z",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "X",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "Y",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "Z",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "a",
              "write": "d",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "b",
              "write": "e",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "c",
              "write": "f",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "d",
              "write": "g",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "e",
              "write": "h",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "f",
              "write": "i",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "g",
              "write": "j",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "h",
              "write": "k",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "i",
              "write": "l",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "j",
              "write": "m",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "k",
              "write": "n",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "l",
              "write": "o",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "m",
              "write": "p",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "n",
              "write": "q",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "o",
              "write": "r",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "p",
              "write": "s",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "q",
              "write": "t",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "r",
              "write": "u",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "s",
              "write": "v",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "t",
              "write": "w",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "u",
              "write": "x",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "v",
              "write": "y",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "w",
              "write": "z",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "x",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "y",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "z",
              "write": "c",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "0",
              "write": "3",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "1",
              "write": "4",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "2",
              "write": "5",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "3",
              "write": "6",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "4",
              "write": "7",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "5",
              "write": "8",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "6",
              "write": "9",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "7",
              "write": "0",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "8",
              "write": "1",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "9",
              "write": "2",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": ",",
              "write": ",",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": ".",
              "write": ".",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "?",
              "write": "?",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "!",
              "write": "!",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": ";",
              "write": ";",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": ":",
              "write": ":",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "´",
              "write": "´",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "`",
              "write": "`",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "^",
              "write": "^",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "~",
              "write": "~",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": " ",
              "write": " ",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q_rw",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "D",
              "write": "D",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "E",
              "write": "E",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "F",
              "write": "F",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "G",
              "write": "G",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "H",
              "write": "H",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "I",
              "write": "I",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "J",
              "write": "J",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "K",
              "write": "K",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "L",
              "write": "L",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "M",
              "write": "M",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "N",
              "write": "N",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "O",
              "write": "O",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "P",
              "write": "P",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "Q",
              "write": "Q",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "R",
              "write": "R",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "S",
              "write": "S",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "T",
              "write": "T",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "U",
              "write": "U",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "V",
              "write": "V",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "W",
              "write": "W",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "X",
              "write": "X",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "Y",
              "write": "Y",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "Z",
              "write": "Z",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "d",
              "write": "d",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "e",
              "write": "e",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "f",
              "write": "f",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "g",
              "write": "g",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "h",
              "write": "h",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "i",
              "write": "i",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "j",
              "write": "j",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "k",
              "write": "k",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "l",
              "write": "l",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "m",
              "write": "m",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "n",
              "write": "n",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "o",
              "write": "o",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "p",
              "write": "p",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "q",
              "write": "q",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "r",
              "write": "r",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "s",
              "write": "s",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "t",
              "write": "t",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "u",
              "write": "u",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "v",
              "write": "v",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "w",
              "write": "w",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "x",
              "write": "x",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "y",
              "write": "y",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "z",
              "write": "z",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "0",
              "write": "0",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "1",
              "write": "1",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "2",
              "write": "2",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "3",
              "write": "3",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "4",
              "write": "4",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "5",
              "write": "5",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "6",
              "write": "6",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "7",
              "write": "7",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "8",
              "write": "8",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "9",
              "write": "9",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": ",",
              "write": ",",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": ".",
              "write": ".",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "?",
              "write": "?",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "!",
              "write": "!",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": ";",
              "write": ";",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": ":",
              "write": ":",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "´",
              "write": "´",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "`",
              "write": "`",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "^",
              "write": "^",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "~",
              "write": "~",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": " ",
              "write": " ",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "qf",
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
              "from": "q0",
              "to": "q0",
              "read": "A",
              "write": "D",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "B",
              "write": "E",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "C",
              "write": "F",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "D",
              "write": "G",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "E",
              "write": "H",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "F",
              "write": "I",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "G",
              "write": "J",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "H",
              "write": "K",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "I",
              "write": "L",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "J",
              "write": "M",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "K",
              "write": "N",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "L",
              "write": "O",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "M",
              "write": "P",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "N",
              "write": "Q",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "O",
              "write": "R",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "P",
              "write": "S",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "Q",
              "write": "T",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "R",
              "write": "U",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "S",
              "write": "V",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "T",
              "write": "W",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "U",
              "write": "X",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "V",
              "write": "Y",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "W",
              "write": "Z",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "X",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "Y",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "Z",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "a",
              "write": "d",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "b",
              "write": "e",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "c",
              "write": "f",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "d",
              "write": "g",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "e",
              "write": "h",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "f",
              "write": "i",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "g",
              "write": "j",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "h",
              "write": "k",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "i",
              "write": "l",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "j",
              "write": "m",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "k",
              "write": "n",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "l",
              "write": "o",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "m",
              "write": "p",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "n",
              "write": "q",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "o",
              "write": "r",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "p",
              "write": "s",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "q",
              "write": "t",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "r",
              "write": "u",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "s",
              "write": "v",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "t",
              "write": "w",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "u",
              "write": "x",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "v",
              "write": "y",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "w",
              "write": "z",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "x",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "y",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "z",
              "write": "c",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "0",
              "write": "3",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "1",
              "write": "4",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "2",
              "write": "5",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "3",
              "write": "6",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "4",
              "write": "7",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "5",
              "write": "8",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "6",
              "write": "9",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "7",
              "write": "0",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "8",
              "write": "1",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "9",
              "write": "2",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": ",",
              "write": ",",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": ".",
              "write": ".",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "?",
              "write": "?",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "!",
              "write": "!",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": ";",
              "write": ";",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": ":",
              "write": ":",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "´",
              "write": "´",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "`",
              "write": "`",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "^",
              "write": "^",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": "~",
              "write": "~",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q0",
              "read": " ",
              "write": " ",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q_rw",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "D",
              "write": "D",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "E",
              "write": "E",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "F",
              "write": "F",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "G",
              "write": "G",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "H",
              "write": "H",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "I",
              "write": "I",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "J",
              "write": "J",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "K",
              "write": "K",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "L",
              "write": "L",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "M",
              "write": "M",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "N",
              "write": "N",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "O",
              "write": "O",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "P",
              "write": "P",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "Q",
              "write": "Q",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "R",
              "write": "R",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "S",
              "write": "S",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "T",
              "write": "T",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "U",
              "write": "U",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "V",
              "write": "V",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "W",
              "write": "W",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "X",
              "write": "X",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "Y",
              "write": "Y",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "Z",
              "write": "Z",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "d",
              "write": "d",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "e",
              "write": "e",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "f",
              "write": "f",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "g",
              "write": "g",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "h",
              "write": "h",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "i",
              "write": "i",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "j",
              "write": "j",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "k",
              "write": "k",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "l",
              "write": "l",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "m",
              "write": "m",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "n",
              "write": "n",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "o",
              "write": "o",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "p",
              "write": "p",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "q",
              "write": "q",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "r",
              "write": "r",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "s",
              "write": "s",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "t",
              "write": "t",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "u",
              "write": "u",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "v",
              "write": "v",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "w",
              "write": "w",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "x",
              "write": "x",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "y",
              "write": "y",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "z",
              "write": "z",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "0",
              "write": "0",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "1",
              "write": "1",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "2",
              "write": "2",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "3",
              "write": "3",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "4",
              "write": "4",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "5",
              "write": "5",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "6",
              "write": "6",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "7",
              "write": "7",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "8",
              "write": "8",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "9",
              "write": "9",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": ",",
              "write": ",",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": ".",
              "write": ".",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "?",
              "write": "?",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "!",
              "write": "!",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": ";",
              "write": ";",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": ":",
              "write": ":",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "´",
              "write": "´",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "`",
              "write": "`",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "^",
              "write": "^",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": "~",
              "write": "~",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "q_rw",
              "read": " ",
              "write": " ",
              "move": "L"
            },
            {
              "from": "q_rw",
              "to": "qf",
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

export default MT_L11;
