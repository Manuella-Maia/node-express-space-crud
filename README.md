[HTML5__BADGE]: https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white

[CSS3__BADGE]: https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white

[JAVASCRIPT__BADGE]: https://img.shields.io/badge/Javascript-000?style=for-the-badge&logo=javascript

[NODEJS__BADGE]: https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white

[EXPRESS__BADGE]: https://img.shields.io/badge/express-005CFE?style=for-the-badge&logo=express

[JEST__BADGE]: https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white

[SQLITE__BADGE]: https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white

[NODEMON__BADGE]: https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD

<h1 align="center" style="font-weight: bold;">Missions API 💻</h1>

<p align="center">

  ![HTML5][HTML5__BADGE]
  ![CSS3][CSS3__BADGE]
  ![JavaScript][JAVASCRIPT__BADGE]
  ![Node.js][NODEJS__BADGE]
  ![Express][EXPRESS__BADGE]
  ![Jest][JEST__BADGE]
  ![SQLite][SQLITE__BADGE]
  ![Nodemon][NODEMON__BADGE]

</p>
<details open="open">
<summary>Sumário</summary>
  
- [🛠️ Tecnologias e Ferramentas](#tech)
- [� Arquitetura do Sistema](#structure)
- [�📍 Endpoints da API](#routes)
  - [POST /missions](#post-mission-detail)
  - [GET /missions](#get-missions)
  - [GET /missions/:id](#get-mission-id)
  - [PUT /missions/:id](#put-mission-id)
  - [DELETE /missions/:id](#delete-mission-id)
- [🧠 Conceitos Aplicados](#concepts)
- [💡 Lições Aprendidas e Desafios](#lessons)
  
</details>

<p align="center">
  <b>Criação de um CRUD completo e API RESTful com Express para controlar missões espaciais, com persistência em banco de dados SQLite
  </b>
</p>

<h2 id="tech">🛠️ Tecnologias e Ferramentas</h2>

Para a construção deste projeto, utilizei as seguintes tecnologias:

* **Node.js**: Ambiente de execução para rodar o Javascript no servidor.
* **Express**: Framework minimalista para gerenciar rotas e middlewares.
* **SQLite**: Banco de dados relacional leve que armazena os dados em um arquivo local.
* **Jest**: framework para testes unitários do modelo de negocio.
* **Nodemon**: Ferramenta que reinicia o servidor automaticamente a cada alteração no código.
* **Postman**: Ferramenta fundamental para realizar as requisições HTTP (GET, POST, PUT, DELETE) e validar as respostas da API durante o desenvolvimento.

---

<h2 id="structure">📁 Arquitetura do Sistema</h2>

O projeto segue uma arquitetura organizada para facilitar a manutenção e escalabilidade. Abaixo, a descrição das responsabilidades de cada pasta e onde adicionar novas funcionalidades:

### **src/** (Código principal do backend)
- **config/**: Contém configurações do sistema, como a conexão com o banco de dados (`db.js`). Adicione aqui novas configurações (ex.: autenticação, variáveis de ambiente).
- **controllers/**: Lógica de controle das rotas. O `missionController.js` gerencia as operações CRUD das missões. Adicione novos controllers aqui para funcionalidades relacionadas a outras entidades (ex.: usuários, logs).
- **database/**: Scripts para criação e gerenciamento de tabelas no banco (`tables.js`). Adicione novos scripts SQL aqui para novas tabelas ou migrações.
- **models/**: Modelos de dados que interagem diretamente com o banco. O `missionModel.js` contém funções para inserir, consultar, atualizar e deletar missões. Adicione novos modelos aqui para outras entidades (ex.: `userModel.js` para usuários).
- **routes/**: Definição das rotas da API. O `missionRoutes.js` mapeia os endpoints para missões. Adicione novas rotas aqui para expandir a API (ex.: rotas para autenticação).
- **services/**: Serviços auxiliares e utilitários. O `validation.js` contém validações de dados. Adicione novos serviços aqui para lógica reutilizável (ex.: envio de emails, criptografia).

### **public/** (Arquivos estáticos do frontend)
- **css/**: Folhas de estilo (`style.css`, `styleList.css`). Adicione novos estilos aqui para personalizar a interface.
- **js/**: Scripts JavaScript (`api.js` para chamadas à API, `main.js` e `ui.js` para lógica da interface). Adicione novos scripts aqui para funcionalidades do frontend (ex.: validações no cliente).
- **index.html** e **list.html**: Páginas HTML. Adicione novas páginas aqui para expandir a interface (ex.: página de login).

### **tests/** (Testes automatizados)
- **test-api.js**: Testes básicos da API. Adicione testes manuais ou simples aqui.
- **integration/**: Testes de integração para cada operação CRUD (`test-create-mission.js`, etc.). Adicione novos testes de integração aqui para validar funcionalidades completas.

### Arquivos na raiz
- **server.js**: Arquivo principal do servidor Express. Modifique aqui para adicionar middlewares globais ou configurações do servidor.
- **package.json**: Dependências e scripts do projeto. Adicione novas dependências ou scripts aqui.
- **logicaProjeto.md** e **README.md**: Documentação. Atualize o README para refletir mudanças no projeto.

**Dica**: Para adicionar uma nova funcionalidade (ex.: gerenciamento de usuários), crie os arquivos correspondentes nas pastas apropriadas (model em `models/`, controller em `controllers/`, rota em `routes/`) e integre no `server.js`.

---

<h2 id="routes">📍 Endpoints da API</h2>

Abaixo estão listadas as rotas principais e o que é esperado em cada uma.
​
| Rota                | Descrição                                           |
|----------------------|-----------------------------------------------------|
| <kbd>POST /missions</kbd> | Cria uma nova missão espacial no sistema |
| <kbd>GET /missions</kbd> | Lista todas as missões (Limite 100) |
| <kbd>GET /missions/:id</kbd> | Busca uma missão específica pelo ID |
| <kbd>PUT /missions/:id</kbd> | Atualiza os dados de uma missão espesificada pelo ID |
| <kbd>DELETE /missions/:id</kbd> | Deleta uma missão espesificada pelo ID do banco de dados |


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

**RESPONSE (201 crate)**
```json
{
  "mensagem": "Dados salvos no banco sqlite",
  "dados": 1
}
```

<h3 id="get-mission-id">GET /missions/:id</h3>


**RESPONSE (200)**
```json
{
  "mensagem": "Mission retornada:",
  "dados": {
    "id": 1,
    "nome": "Marte Alpha",
    "crew": 4,
    "spacecraft": "Starship",
    "destinations": "Marte",
    "status": "Em Planejamento",
    "durations": "24 meses"
  }
}
```

**RESPONSE (404)**
```json
{
  "mensagem": "Missão com ID 999 não encontrada."
}
```

<h3 id="put-mission-id">PUT /missions/:id</h3>

**REQUEST**
```json
{
  "nome": "Marte Alpha 2.0",
  "crew": 5,
  "spacecraft": "Starship",
  "destinations": "Jupiter",
  "status": "Em Planejamento",
  "durations": "24 meses"
}
```

**RESPONSE (200)**
```json
{
  "mensagem": "Mission atualizada com sucesso:",
  "dados": {
      "nome": "Marte Alpha 2.0",
      "crew": 5,
      "spacecraft": "Starship",
      "destinations": "Jupiter",
      "status": "Em Planejamento",
      "durations": "24 meses"
    }
}
```

**RESPONSE (404)**
```json
{
  "mensagem": "Missions não encontrada ! Id não existe no bd"
}
```

<h3 id="delete-mission-id">DELETE /missions/:id</h3>

**RESPONSE (200)**
```json
{
  "mensagem": "Mission deletada com sucessso !",
}
```

**RESPONSE (404)**
```json
{
  "mensagem": "Missions não encontrada ! Id não existe no bd"
}

```
---

**RESPONSES (Erros de Validação)**

Exemplos de retornos caso os dados enviados estejam incorretos:

Nome ausente:
```json
{"erro": "O nome esta vazio !"}
```
Tripulação não numérica: 
```json
{"erro": "O tipo armazenado em crew e direfente de number !"}
```
Número inválido: 
```json
{"erro": "Numero de tripulantes invalido !"}
```
Dados incompletos: 
```json
{"erro": "Dados invalidos ou ausentes !"}
```
---

<h2 id="concepts">🧠 Conceitos Aplicados</h2>

Durante o desenvolvimento, apliquei conceitos fundamentais de engenharia de software:

* **Arquitetura MVC (parcial)**: Separação de responsabilidades entre Rotas, Controllers e Models.
* **Verbos HTTP**: Uso correto de `POST` para criação e `GET` para leitura de dados.
* **Status Codes**: Implementação de respostas semânticas como `201 Created`, `200`, `404 Not Found` e `500 Internal Server Error`.
* **Persistência de Dados**: Integração de uma API com um banco de dados relacional para que as missões não se percam ao reiniciar o servidor.

---

<h2 id="lessons">💡 Lições Aprendidas e Desafios</h2>

Nesta jornada de aprendizado, superei alguns obstáculos que ampliaram minha visão sobre o desenvolvimento:

1.  **Ordem de Parâmetros importa**: Aprendi que no Express a ordem `(req, res)` é sagrada. Trocar os nomes ou a posição pode fazer com que funções como `.status()` não sejam reconhecidas.
2.  **O perigo do req.body undefined**: Entendi a importância do middleware `app.use(express.json())`. Sem ele, o Express não "traduz" os dados enviados pelo Postman, resultando em erros de desestruturação.
3.  **Segurança com SQL Injection**: Aprendi que nunca devemos concatenar variáveis diretamente na query SQL. O uso de *Placeholders* (`?`) é essencial para proteger o banco de dados.
4.  **Diferença entre .all() e .get()**: Descobri que para buscar um ID único, o `.get()` é mais eficiente pois retorna `undefined` se não encontrar nada, facilitando a validação do erro 404.
5. **Ação e Metadados com `.run()` e `changes`**: 
    * O método **`.run()`** é o motor para inserção, deleção e atualização. 
    * Aprendi a utilizar a propriedade **`changes`** retornada por ele. Ela funciona como um "termômetro": se for `1`, a operação afetou o registro; se for `0`, significa que o ID não foi encontrado, permitindo que a API responda com o status correto de erro.
    *O uso do `lastID` foi fundamental na rota `POST`. Como o banco gera o ID automaticamente, usei essa propriedade para descobrir qual foi o número gerado e devolver o objeto recém-criado completo na resposta da API.

---

<p align="center">Feito com foco em Node.js e Express durante o desafio #7DaysOfCode da Alura! 🚀</p>
