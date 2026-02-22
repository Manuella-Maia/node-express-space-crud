[JAVASCRIPT__BADGE]: https://img.shields.io/badge/Javascript-000?style=for-the-badge&logo=javascript

[EXPRESS__BADGE]: https://img.shields.io/badge/express-005CFE?style=for-the-badge&logo=express

[SQLITE__BADGE]: https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white

[NODEMON__BADGE]: https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD

[NODE__BADGE]: https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white

<h1 align="center" style="font-weight: bold;">Missions API 💻</h1>

<p align="center">

  ![express][EXPRESS__BADGE]
  ![javascript][JAVASCRIPT__BADGE]
  ![sqlite][SQLITE__BADGE]
  ![nodemon][NODEMON__BADGE]
  ![node][NODE__BADGE]

</p>
<details open="open">
<summary>Sumário</summary>
  
- [🚀 Iniciando](#started)
  - [Pré-requisitos](#prerequisites)
  - [Clonagem](#cloning)
  - [Execução](#starting)
- [📍 Endpoints da API](#routes)
  - [POST /missions](#post-mission-detail)
  
</details>

<p align="center">
  <b>API para gerenciamento de missões espaciais, permitindo cadastrar e organizar dados com persistência em banco de dados SQLite.</b>
</p>

<h2 id="started">🚀 Iniciando</h2>

Siga estas instruções para configurar e rodar o projeto localmente.

### Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (Versão LTS recomendada)
- [Git](https://git-scm.com/)

<h3 id="cloning">Clonagem</h3>

Para clonar o repositório, execute o comando abaixo no seu terminal:

```bash
git clone https://github.com/seu-usuario/nome-do-seu-repositorio.git
```

<h3 id="starting">Execução</h3>

Após clonar, entre na pasta do projeto e execute os comandos:

```bash
# Entrar na pasta
cd nome-do-seu-repositorio

# Instalar as dependências
npm install

# Iniciar o servidor com nodemon (ambiente de desenvolvimento)
npm run dev
``````


<h2 id="routes">📍 Endpoints da API</h2>

Here you can list the main routes of your API, and what are their expected request bodies.
Abaixo estão listadas as rotas principais e o que é esperado em cada uma.
​
| Rota                | Descrição                                           |
|----------------------|-----------------------------------------------------|
| <kbd>POST /missions</kbd> | Cria uma nova missão espacial no sistema. Ver detalhes |
(#post-mission-detail)

<h3 id="post-mission-detail">POST /missions</h3>

**REQUEST**
```json
{
  "nome": "Marte Alpha",
  "crew": 4,
  "spacecraft": "Starship",
  "destinations": "Marte",
  "status": "Em Planejamento",
  "durations": "24 meses"
}
```

**RESPONSE**
```json
{
  "mensagem": "Dados salvos no banco sqlite",
  "dados": 1
}
```
**RESPONSES (Erros de Validação)**

Exemplos de retornos caso os dados enviados estejam incorretos:

Nome ausente: {"erro": "O nome esta vazio !"}

Tripulação não numérica: {"erro": "O tipo armazenado em crew e direfente de number !"}

Número inválido: {"erro": "Numero de tripulantes invalido !"}

Dados incompletos: {"erro": "Dados invalidos ou ausentes !"}