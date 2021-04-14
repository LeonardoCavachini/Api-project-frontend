# API Project frontEnd

### Pagina de Herois e HQs da Marvel

## Tabela de conteúdos

- [Sobre](https://github.com/LeonardoCavachini/Api-project-frontend#Sobre)
- [Instalação](https://github.com/LeonardoCavachini/Api-project-frontend#Instalação)
- [Como-usar](https://github.com/LeonardoCavachini/Api-project-frontend#Como-usar)
- [Tecnologias](https://github.com/LeonardoCavachini/Api-project-frontend#Tecnologias)

## Sobre

Aplicação mostra um catálogo de Heróis e HQs para serem escolhidos e apartir dessa escolha o usuário é redirecionado para uma página do detalhamento do herói/HQs escolhido.

## Instalação

#### Pré-requisitos

Certifique-se de ter instalado em sua maquina estas ferramentas: Git, Node.js, e um editor de textos como o VSCode.

#### Rodando a aplicação localmente

1. Clone o repositório

- `git clone https://github.com/LeonardoCavachini/Api-project-frontend.git`

2. Entre na pasta do repositório que você acabou de clonar:

- `cd Api-project-frontend`

3. Instale as dependências:

- `npm install`

agora será necessário adicionar algumas permissões no código.

1. na pasta src/service/marveAPI.js

adicione na constante `const keyPublic` sua chave publica da API da marvel.
adicione na constante `const keyPrivate` sua chave privada da API da marvel.

- Inicie o projeto com `npm start`  
  Por padrão o React procura rodar as aplicações na porta 3000.
  Uma página no browser será aberta com a aplicação.  
  Divirta-se!!

4. Inicie o projeto no backend:

para iniciar o porjeto no backend voĉe precisará fazer o clone do projeto no repositorio do backend.

- `git clone https://github.com/LeonardoCavachini/Api-project-frontend.git`

- `cd Api-project-backend`

- adicione um arquivo `.env` na raiz do projeto com as sehuintes vaiaveis de ambiente.

{
MYSQL_USER=`exemplo: root`
MYSQL_PASSWORD=`exemplo: 123`
HOSTNAME=`exemplo: localhost`
PORT_NUMBER=`exemplo: 3306`
DB_NAME=`exemplo: meu-db`
}

- Inicie o projeto com `npm start`

  O projeto irá iniciar o backend na porta 3001.

## Como Usar

Ao iniciar a aplicação o usuário deverá logar-se, caso não tenha um login cadastrado havera um botão para o mesmo.
obs: a senha deverá ter pelo menos 8 caracteres.

após login o usuário será direcionado para uma pagina onde poderá escolher entre HQs e heróis.

com a opção escolhida o usuário será direcionado a uma página onde encontrar alguns dos HQs/herois.

clicando em um card escolhido ser direcionado para uma pagina informação, onde terá açgumas informações e poderá favoritar o mesmo.

## Tecnologias

Tecnologias utilizadas para construção da aplicação:

- Node
- React

Ferramentas para controle e organização de código:

- ESLint
- Git
