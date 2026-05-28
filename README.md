# 🕹️ AutoQuest: O Simulador de Autômatos

> **Transformando o rigor matemático da Teoria da Computação em uma experiência visual, tátil e gamificada.**

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=flat&logo=vite&logoColor=FFD62E)
![Status](https://img.shields.io/badge/Status-Em_Desenvolvimento-success.svg)

O **AutoQuest** é uma plataforma educacional desenvolvida como projeto de Iniciação Científica. Seu objetivo é facilitar o aprendizado de **Autômatos Finitos Determinísticos (AFD)** através de mecânicas de jogos de cartas (TCG), construção visual de grafos (Drag & Drop) e validação em tempo real.

---

## ✨ Funcionalidades Principais

* 🔒 **TDD Educacional (Test-Driven):** O tabuleiro de desenho só é liberado após o aluno provar que compreendeu a linguagem exigida testando e descobrindo a menor palavra aceita.
* 🃏 **Mecânica de Cartas:** Os recursos de construção (Novos Estados, Setas de Transição, Borracha, Estados Finais) são distribuídos como cartas interativas na mão do jogador.
* 🖱️ **Canvas Reativo:** Construção do grafo do autômato através de cliques e manipulação direta (Drag & Drop) renderizado dinamicamente via React e SVG.
* 🧠 **Motor de Validação (Regex):** O sistema não apenas desenha, mas simula matematicamente o Autômato desenhado contra a Expressão Regular da linguagem exigida.
* 📈 **Progressão de Dificuldade:** 20 níveis progressivos englobando desde linguagens unitárias até restrições complexas de prefixos, sufixos e paridade.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído focando em performance, acessibilidade em navegadores escolares e ausência de bibliotecas externas pesadas para manipulação de grafos (a matemática é calculada "em casa").

* **Core:** React + Vite
* **Estilização:** CSS3 Puro (Dark Mode, UI moderna com sotaques neon inspirada em IDEs e interfaces sci-fi).
* **Lógica de Autômatos:** Algoritmos em JavaScript puro para processamento de transições de estado e validação estrutural.

---

## 🚀 Como Executar o Projeto Localmente

Siga os passos abaixo para rodar o AutoQuest na sua máquina:

### Pré-requisitos
Certifique-se de ter o Node.js instalado.

### Instalação

1. Clone este repositório:
git clone [https://github.com/seu-usuario/jogoAFD.git](https://github.com/seu-usuario/jogoAFD.git)

2. Acesse a pasta do projeto:
cd jogoAFD

3. Instale as dependências:
npm install

4. Inicie o servidor de desenvolvimento:
npm run dev

5. Abra o navegador no endereço indicado (geralmente http://localhost:5173/).

---

## 🎓 Contexto Acadêmico

Este software é um artefato desenvolvido como parte de um projeto de **Iniciação Científica** focado no ensino de Engenharia de Software e Ciência da Computação. O design da interface e as mecânicas foram projetados visando reduzir a carga cognitiva inicial associada ao ensino tradicional e abstrato da quíntupla formal M = (Q, Σ, δ, q0, F).

---

## 👨‍💻 Autor

**Vinicius Ferrarini**
* Estudante de Engenharia de Software
* Desenvolvimento Full-Stack e Arquitetura de Sistemas

---
*Feito com dedicação para provar que a Ciência da Computação também se joga.* 🚀