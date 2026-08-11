# TuringLab

> Transformando a Teoria da Computação em uma experiência gamificada, visual e interativa — e gerando dados reais de pesquisa sobre como as pessoas aprendem autômatos.

<div align="center">

### 🎮 [▶ Jogar Agora — teoriadacomputacao.com.br](https://teoriadacomputacao.com.br/)

</div>

---

<div align="center">

https://github.com/user-attachments/assets/27b2bd60-45b8-4abb-b22f-09aefeb0a692

*Se o vídeo não carregar diretamente aqui, [assista no link da release](https://github.com/Vinicius-Ferrarini/jogoAFD/releases/tag/v1.0-demo).*

</div>

---

<div align="center">

![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=flat&logo=vite&logoColor=FFD62E)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat&logo=firebase&logoColor=black)
![Status](https://img.shields.io/badge/Status-Em_Desenvolvimento-yellow.svg)
![License](https://img.shields.io/badge/Licença-Acadêmica-blue.svg)

</div>

---

## O que é o TuringLab?

O **TuringLab** é uma plataforma educacional construída como projeto de **Iniciação Científica**. O objetivo é duplo:

1. **Ensinar** Teoria da Computação — Autômatos Finitos Determinísticos (AFD), Autômatos com Pilha (AP) e Máquinas de Turing (MT) — de forma concreta e acessível, por meio de mecânicas de jogo: cartas, canvas interativo e validação em tempo real.
2. **Pesquisar** como estudantes de fato aprendem esses modelos formais — o jogo é também um instrumento de coleta de dados para a pesquisa, medindo tentativas, erros, tempo por fase e uso de ajuda em cada exercício.

O visual segue o estilo neo-brutalismo / gibi (inspirado na Turma da Mônica), com o professor **Maurílio** guiando o jogador em cada fase.

---

## 🔬 Pesquisa e coleta de dados

Este projeto **não é só um jogo** — é um instrumento de pesquisa acadêmica em andamento. Cada partida gera dados que ajudam a entender, com evidência real (não só intuição de professor), onde os alunos mais travam ao aprender autômatos.

- **O que é coletado:** eventos de jogo anônimos — início/fim de fase, número de tentativas, tipo de erro cometido, tempo gasto, se o aluno abriu a ajuda/aula guiada, e uma pesquisa de satisfação opcional ao final de módulos.
- **O que NÃO é coletado:** nenhum dado pessoal identificável. Não há cadastro, nome ou e-mail — a identificação é um client ID anônimo gerado pelo próprio Google Analytics.
- **Consentimento explícito:** ao abrir o jogo, um banner não bloqueante pede autorização antes de qualquer envio de dado. Sem aceitar, o jogo funciona normalmente — só que 100% local, sem telemetria.
- **Como funciona:** [Google Analytics 4](https://analytics.google.com/) para eventos de uso, com [Firebase](https://firebase.google.com/) (Firestore) como backend opcional de autenticação anônima. Sem as variáveis de ambiente `VITE_FIREBASE_*` configuradas, o app roda offline e sem nenhuma coleta.

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
| 🎓 | **Modo Aula Guiada** | Storyboard passo a passo, narrado pelo professor, disponível em todos os módulos |
| ⭐ | **Sistema de Estrelas** | Até 3 estrelas por fase com base no número de tentativas |

---

## Módulos

```
TuringLab
├── Autômatos Finitos (AFD)
│   ├── Parte 1 — Desenhar o autômato a partir da linguagem
│   ├── Parte 2 — Identificar a linguagem a partir do grafo
│   └── Minimização — reduzir um autômato ao seu equivalente mínimo
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
- **Pesquisa/Telemetria:** Google Analytics 4 + Firebase (Firestore, autenticação anônima) — opcional, com consentimento explícito
- **Persistência local:** `localStorage` para progresso por fase
- **Testes:** Vitest (testes unitários/fuzzing dos níveis) + Playwright (E2E)
- **Deploy:** GitHub Pages, domínio próprio ([teoriadacomputacao.com.br](https://teoriadacomputacao.com.br/))

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

> **Nota:** o jogo roda 100% localmente sem nenhuma configuração extra. As
> variáveis `VITE_FIREBASE_*` (veja [`.env.example`](.env.example)) são
> **opcionais** — habilitam apenas login anônimo e telemetria de pesquisa na
> nuvem. Sem elas, o app funciona normalmente e o progresso é salvo só no
> `localStorage` do navegador.

### Outros comandos úteis

```bash
npm run build     # build de produção (dist/)
npm run test      # suíte de testes (Vitest)
npm run lint      # ESLint
npm run test:e2e  # testes end-to-end (Playwright)
```

---

## Contexto Acadêmico

Este software é um artefato de **Iniciação Científica** focado no ensino de Teoria da Computação em cursos de Engenharia de Software e Ciência da Computação. O design foi concebido para reduzir a carga cognitiva associada às definições formais de cada modelo — a quíntupla do AFD **M = (Q, Σ, δ, q₀, F)**, a sêxtupla do AP (com pilha) e a séxtupla/séptupla da MT (com fita) —, apresentando cada componente de forma progressiva e tangível dentro do jogo. Os dados de uso coletados (ver seção [Pesquisa e coleta de dados](#-pesquisa-e-coleta-de-dados)) alimentam a análise empírica da pesquisa.

---

## Autor

**Vinicius Ferrarini**
Estudante de Engenharia de Software

---

<div align="center">

*Feito com dedicação para provar que a Ciência da Computação também se joga.*

**[▶ Testar agora](https://teoriadacomputacao.com.br/)**

</div>
