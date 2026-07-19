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