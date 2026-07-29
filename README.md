# TuringLab — Simulador de Autômatos Finitos

> Transformando a Teoria da Computação em uma experiência gamificada, visual e interativa.

<div align="center">

### 🎮 [▶ Jogar Agora — Demo Online](https://vinicius-ferrarini.github.io/jogoAFD/)

</div>

---

![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=flat&logo=vite&logoColor=FFD62E)
![Status](https://img.shields.io/badge/Status-Em_Desenvolvimento-yellow.svg)
![License](https://img.shields.io/badge/Licença-Acadêmica-blue.svg)

---

## O que é o TuringLab?

O **TuringLab** é uma plataforma educacional construída como projeto de **Iniciação Científica**. O objetivo é tornar o aprendizado de **Teoria da Computação** — Autômatos Finitos Determinísticos (AFD), Autômatos com Pilha (AP) e Máquinas de Turing (MT) — concreto e acessível por meio de mecânicas de jogo — cartas, canvas interativo e validação em tempo real.

O visual segue o estilo neo-brutalismo / gibi (inspirado na Turma da Mônica), com o professor **Maurílio** guiando o jogador em cada fase.

---

## Funcionalidades

| # | Funcionalidade | Descrição |
|---|---|---|
| 🔒 | **Desbloqueio por Descoberta** | O canvas de desenho só é liberado quando o aluno descobre o exemplo mínimo da fase (a menor palavra aceita ou o menor caso de entrada/saída) |
| 🃏 | **Mecânica de Cartas** | Estados, setas e símbolos são distribuídos como cartas interativas na mão do jogador |
| 🖱️ | **Canvas Drag & Drop** | Construção do autômato (AFD, AP ou MT) via arrastar, conectar e rotular estados diretamente no grafo |
| 🧠 | **Validação Automática** | O sistema simula o autômato desenhado contra a especificação da fase (linguagem, bateria de testes ou entrada/saída) e rejeita erros estruturais e de não-determinismo |
| 🔬 | **Simulação Passo a Passo** | Percorre cada transição com destaque visual em tempo real |
| 📊 | **Grafo → Linguagem (P2)** | Modo inverso: dado um autômato, o aluno deve identificar a linguagem formal aceita |
| 🔽 | **Minimização de AFD** | Reduz um autômato ao equivalente mínimo em passos guiados |
| 📚 | **Autômatos com Pilha** | Construção de AP com aceitação por pilha vazia |
| 🎞️ | **Máquinas de Turing** | Reconhecedora (aceita/rejeita) e Transdutora (transforma a fita) — construção passo a passo com simulação em tempo real |
| ⭐ | **Sistema de Estrelas** | Até 3 estrelas por fase com base no número de tentativas |

---

## Módulos

```
TuringLab
├── AFD Parte 1 — Desenhar o autômato a partir da linguagem
├── AFD Parte 2 — Identificar a linguagem a partir do grafo
├── AFD Minimização — reduzir um autômato ao seu equivalente mínimo
├── Autômatos com Pilha — construção e aceitação por pilha vazia
└── Máquinas de Turing
    ├── Reconhecedora — aceita ou rejeita a palavra na fita
    └── Transdutora — transforma a fita de entrada numa saída
```

---

## Stack

- **Framework:** React 19 + Vite
- **Estilização:** CSS3 puro — Neo-brutalismo, Comic Sans, `#fff9c4`
- **Lógica de autômatos:** JavaScript puro, sem bibliotecas externas de grafo
- **Persistência:** `localStorage` para progresso por fase

---

## Rodar Localmente

```bash
# 1. Clone o repositório
git clone https://github.com/Vinicius-Ferrarini/jogoAFD.git
cd jogoAFD

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev
```

Abra **http://localhost:5173** no navegador.

---

## Contexto Acadêmico

Este software é um artefato de **Iniciação Científica** focado no ensino de Teoria da Computação em cursos de Engenharia de Software e Ciência da Computação. O design foi concebido para reduzir a carga cognitiva associada às definições formais de cada modelo — a quíntupla do AFD **M = (Q, Σ, δ, q₀, F)**, a sêxtupla do AP (com pilha) e a séxtupla/séptupla da MT (com fita) —, apresentando cada componente de forma progressiva e tangível dentro do jogo.

---

## Autor

**Vinicius Ferrarini**
Estudante de Engenharia de Software

---

<div align="center">

*Feito com dedicação para provar que a Ciência da Computação também se joga.*

**[▶ Testar agora](https://vinicius-ferrarini.github.io/jogoAFD/)**

</div>
