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
  
- [🛠️ Tecnologias e Ferramentas](#tech)
- [🧠 Conceitos Aplicados](#concepts)
- [💡 Lições Aprendidas e Desafios](#lessons)
- [📍 Endpoints da API](#routes)
  - [POST /missions](#post-mission-detail)
  - [GET /missions](#get-missions)
  - [GET /missions/:id](#get-mission-id)
  
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
* **Nodemon**: Ferramenta que reinicia o servidor automaticamente a cada alteração no código.

<h2 id="concepts">🧠 Conceitos Aplicados</h2>

Durante o desenvolvimento, apliquei conceitos fundamentais de engenharia de software:

* **Arquitetura MVC (parcial)**: Separação de responsabilidades entre Rotas, Controllers e Models.
* **Verbos HTTP**: Uso correto de `POST` para criação e `GET` para leitura de dados.
* **Status Codes**: Implementação de respostas semânticas como `201 Created`, `200 OK`, `404 Not Found` e `500 Internal Server Error`.
* **Persistência de Dados**: Integração de uma API com um banco de dados relacional para que as missões não se percam ao reiniciar o servidor.

<h2 id="lessons">💡 Lições Aprendidas e Desafios</h2>

Nesta jornada de 7 dias (e nos estudos intensos de hoje), superei alguns obstáculos que ampliaram minha visão sobre o desenvolvimento:

1.  **Ordem de Parâmetros importa**: Aprendi que no Express a ordem `(req, res)` é sagrada. Trocar os nomes ou a posição pode fazer com que funções como `.status()` não sejam reconhecidas.
2.  **O perigo do req.body undefined**: Entendi a importância do middleware `app.use(express.json())`. Sem ele, o Express não "traduz" os dados enviados pelo Postman, resultando em erros de desestruturação.
3.  **Segurança com SQL Injection**: Aprendi que nunca devemos concatenar variáveis diretamente na query SQL. O uso de *Placeholders* (`?`) é essencial para proteger o banco de dados.
4.  **Diferença entre .all() e .get()**: Descobri que para buscar um ID único, o `.get()` é mais eficiente pois retorna `undefined` se não encontrar nada, facilitando a validação do erro 404.

<h2 id="routes">📍 Endpoints da API</h2>

Abaixo estão listadas as rotas principais e o que é esperado em cada uma.
​
| Rota                | Descrição                                           |
|----------------------|-----------------------------------------------------|
| <kbd>POST /missions</kbd> | Cria uma nova missão espacial no sistema |
| <kbd>GET /missions</kbd> | LLista todas as missões (Limite 100) |
| <kbd>GET /missions/:id</kbd> | Busca uma missão específica pelo ID |


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

**RESPONSES (Erros de Validação)**

Exemplos de retornos caso os dados enviados estejam incorretos:

Nome ausente: {"erro": "O nome esta vazio !"}

Tripulação não numérica: {"erro": "O tipo armazenado em crew e direfente de number !"}

Número inválido: {"erro": "Numero de tripulantes invalido !"}

Dados incompletos: {"erro": "Dados invalidos ou ausentes !"}


<p align="center">Feito com foco em Node.js e Express durante o desafio #7DaysOfCode da Alura! 🚀</p>