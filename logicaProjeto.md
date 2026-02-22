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