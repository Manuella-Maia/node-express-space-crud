Organização de pastas e suas devidas funções

├── src/
│   ├── config/
│   │   └── db.js            # inicializa do banco de dados (openDb)
│   ├── database/
│   │   └── tables.js        # função creatTables
│   ├── controllers/
│   │   └── missionController.js  # Lógica de negócio (recebe req, envia res)
│   ├── models/
│   │   └── missionModel.js       # Comunicação direta com o banco (SQL) 
│   ├── routes/
│   │   └── missionRoutes.js      # Definição dos caminhos (POST, GET, etc.)
│   └── server.js            # Ponto de entrada do servidor 
├── database.db              # O arquivo do SQLite 
├── package.json
└── ...

Fluxo de informações 

Server.js recebe JSON
Server.js passa para o missionsRoutes.js
missionsRoutes.js entrega para o missionController.js
missionController.js pede para o missionModel.js salvar no banco de dados


express.router() -> vai permitir a modularização das rotas. 
.get no banco de dados é mais expesifico. cria um objeto e pode devolver undefind se naõ encontrar. mais eficiente pois para de buscar assim que atende a condição passada como o id

run. permite executar a insercção, deleção e atualização de forma eficente e retorna metadados da opeção que vc acabou de executar:
changes: Um número que indica quantas linhas foram afetadas pelo seu comando (no caso de um UPDATE por ID, deve ser 1 se funcionou ou 0 se o ID não foi encontrado).

lastID: O número do último ID inserido (muito usado no INSERT, mas geralmente volta como o último ID da tabela no UPDATE).

Campos Obrigatórios: O campo nome está presente? Ele é uma string vazia?

Tipos de Dados: O campo crew (tripulação) é realmente um número ou enviaram um texto por engano?

Regras de Negócio: Faz sentido uma missão ter 0 tripulantes? Ou uma duração negativa?

implementar arquivos com funçoes de validações :
if (isNaN(idRecebido)) { // validação do id  
    return res.status(400).json({ erro: 'O ID enviado não é um número válido!' });
}

[JAVASCRIPT__BADGE]: https://img.shields.io/badge/Javascript-000?style=for-the-badge&logo=javascript

[EXPRESS__BADGE]: https://img.shields.io/badge/express-005CFE?style=for-the-badge&logo=express

[SQLITE__BADGE]: https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white

[NODEMON__BADGE]: https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD

[NODE__BADGE]: https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white




- [🚀 Iniciando](#started)
  - [Pré-requisitos](#prerequisites)
  - [Clonagem](#cloning)
  - [Execução](#starting)
- [📍 Endpoints da API](#routes)
  - [POST /missions](#post-mission-detail)
  - [GET /missions](#get-missions)
  - [GET /missions/:id](#get-mission-id)
  
</details>

<p align="center">
  <b>Criação de um CRUD completo e API RESTful com Express para controlar missões espaciais, com persistência em banco de dados SQLite
  </b>
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