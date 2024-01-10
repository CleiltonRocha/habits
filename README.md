<p align="center">
  <img src="./web/src/assets/logo.svg" alt="Logo" width="300"/>
</p>

<br><br>

<p align="center">
  <img src="https://img.shields.io/static/v1?label=nlw&message=setup&color=blueviolet&style=for-the-badge"/>
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/CleiltonRocha/habits?color=blueviolet&logo=TypeScript&logoColor=white&style=for-the-badge">
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/CleiltonRocha/habits?color=blueviolet&style=for-the-badge">
</p>
<br>

<p align="center">
  <a href="#sobre">Sobre</a> •
  <a href="#habits">Habits</a> •
  <a href="#instalação">Instalação</a> •
  <a href="#tecnologias">Tecnologias</a> •
</p>

## Sobre

Projeto desenvolvido durante a NLW Setup, evento criado pela Rocketseat. Um evento 100% online e GRATUITO, com conteúdo exclusivo e INÉDITO.

Ocorreu do dia 16 ao dia 20 de Janeiro de 2023 e teve como intuito mostrar na prática o poder da stack NodeJS + ReactJS + React Native e como essas tecnologias podem te levar até os seus maiores objetivos como programador.

<img src="./.github/wallpaper.png" alt="Wallpaper NLW Setup" />

## Habits

O Habits é um app para monitoramento de tarefas diárias para auxiliar seus usuários a rastrear suas atividades realizadas e não realizadas.

O fluxo da aplicação é simples: o usuário cadastra os hábitos desejados indicando em quais dias da semana deverão ser realizados e todos os dias ele terá uma listas de hábitos de acordo com o dia atual, aonde ele irá indicar o status de cada hábito e a aplicação irá gerar um progresso diário que será ilustrado na barra de progresso e também nas cores dos quadrados que representam os dias onde cores mais claras representam números maiores de hábitos completos.

A aplicação possui, além do backend, aplicação web e mobile, as quais serão ilustradas a seguir.

### Habits - Aplicação web

Ao acessar a home da aplicação web o usuário irá se deparar com a página abaixo aonde será exibido um botão para cadastro de um novo hábito e vários quadrados os quais representam dias passados, dia atual e dia futuro. Como podemos ver a seguir, cada dia possui uma cor diferente, onde:

- Cinza indica que nenhum hábito foi realizado.
- Cores mais escuras indicam pouco progresso nos hábitos diários.
- Cores mais claras indicam muito progresso nos hábitos diários.
- Cinza com opacidade reduzida indica dias futuros e não são clicáveis.

![Home](.github/screenshots/web-home.png)

Ao clicar no botão `Novo hábito`, o modal abaixo será exibido para o usuário inserir um título e os dias da semana em que o novo hábito deve ser realizado:

![Alt text](.github/screenshots/web-form.png)

Ao clicar em algum dos dias as informações dele serão exibidas, por exemplo: a sua data numérica, o dia da semana, a barra de progresso e a lista de hábitos que devem ser realizados no respectivo dia da semana, conforme imagem a seguir:

![Alt text](.github/screenshots/web-day.png)


### Habits - Aplicação mobile

Abaixo mostro um vídeo de como funciona a aplicação mobile. Basicamente são as mesmas funcionalidades da web.

<video>
  <source src="./.github/app-video.mov" type="video/mp4">
</video>

## Instalação

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).
Além disso é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).

> ⚠ Antes de executar o frontend e mobile verificar o IP da sua máquina e configurar no arquivo de setup do axios presente na pasta lib dos respectivos projetos

### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone git@github.com:CleiltonRocha/habits.git

# Acesse a pasta do projeto no terminal/cmd
$ cd nlw-setup

# Vá para a pasta server
$ cd server

# Instale as dependências
$ npm install
# Caso prefira usar o Yarn execute o comando abaixo
$ yarn

# Execute a aplicação em modo de desenvolvimento
$ npm run dev
# Caso prefira usar o Yarn execute o comando abaixo
$ yarn dev

# O servidor inciará na porta 3333 - acesse <http://localhost:3333>
```

### 🖥️ Rodando o Front End (Web)

```bash
# Clone este repositório
$ git clone git@github.com:MrRioja/nlw-setup.git

# Acesse a pasta do projeto no terminal/cmd
$ cd nlw-setup

# Vá para a pasta web
$ cd web

# Instale as dependências
$ npm install
# Caso prefira usar o Yarn execute o comando abaixo
$ yarn

# Execute a aplicação em modo de desenvolvimento
$ npm run dev
# Caso prefira usar o Yarn execute o comando abaixo
$ yarn dev

# O servidor inciará na porta 5173 - acesse <http://localhost:5173>
```

### 📱 Rodando o App (Mobile)

```bash
# Clone este repositório
$ git clone git@github.com:MrRioja/nlw-setup.git

# Acesse a pasta do projeto no terminal/cmd
$ cd nlw-setup

# Vá para a pasta mobile
$ cd mobile

# Instale as dependências
$ npm install
# Caso prefira usar o Yarn execute o comando abaixo
$ yarn

# Execute a aplicação
$ yarn start

# Será aberto no terminal o menu do Expo onde poderá scanear o QR Code para executar o app diretamente no seu celular ou as opções de executar no emulador android ou iOS
```

## Tecnologias

[![My Skills](https://skillicons.dev/icons?i=react,nodejs,vite,ts)](https://skillicons.dev)


<br/>
<br/>
</div>
