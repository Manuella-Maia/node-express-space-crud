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

Campos Obrigatórios: O campo nome está presente? Ele é uma string vazia?

Tipos de Dados: O campo crew (tripulação) é realmente um número ou enviaram um texto por engano?

Regras de Negócio: Faz sentido uma missão ter 0 tripulantes? Ou uma duração negativa?


[JAVASCRIPT__BADGE]: https://img.shields.io/badge/Javascript-000?style=for-the-badge&logo=javascript

[EXPRESS__BADGE]: https://img.shields.io/badge/express-005CFE?style=for-the-badge&logo=express

[SQLITE__BADGE]: https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white

[NODEMON__BADGE]: https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD

[NODE__BADGE]: https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white