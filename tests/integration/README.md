# Testes de Integração

Esta pasta contém arquivos de teste que simulam requisições HTTP para testar a API do servidor de missões.

## Como usar

1. Certifique-se de que o servidor está rodando: `npm start` ou `npm run dev`
2. Execute cada arquivo de teste com Node.js: `node tests/integration/test-create-mission.js`
3. Verifique o console para ver a resposta do servidor.

## Arquivos de teste

- `test-create-mission.js`: Testa a criação de uma nova missão (POST /missions)
- `test-get-missions.js`: Testa a listagem de todas as missões (GET /missions)
- `test-get-mission-by-id.js`: Testa a busca de uma missão por ID (GET /missions/:id)
- `test-update-mission.js`: Testa a atualização de uma missão (PUT /missions/:id)
- `test-delete-mission.js`: Testa a exclusão de uma missão (DELETE /missions/:id)

## Notas

- Substitua o `id` nos arquivos de teste pelos IDs reais das missões criadas.
- Estes testes usam `fetch` nativo do Node.js (disponível em versões recentes).
- Para testes mais avançados, considere usar bibliotecas como Supertest.