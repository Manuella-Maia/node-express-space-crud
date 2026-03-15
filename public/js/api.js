// Lógica do frontend: separar responsabilidades (API para chamadas backend, UI para manipular DOM, Main para orquestrar fluxo).
// Comunicação com API: usar fetch assíncrono, sempre verificar response.ok, tratar erros com try/catch.
// Ajustes necessários: usar URL relativa (/missions) em vez de localhost, e await em todos os fetches para evitar bugs.

// api.js - Responsável por todas as chamadas à API (backend)
// Aqui você vai colocar as funções que fazem fetch() para o servidor
// Cada função deve retornar os dados tratados ou lançar erro se falhar

// Função para criar uma nova missão (POST /missions)
// Recebe um objeto com os dados da missão
// Retorna o ID da missão criada ou lança erro
export async function criarMissao(dadosMissao) {
    try {
        const resp = await fetch('/missions', {
           method: 'POST',
           headers: {
            'Content-Type': 'application/json'
           },
           body: JSON.stringify(dadosMissao)
        })

        if(!resp.ok){
            const erroApi = await resp.json()
            throw new Error(erroApi.erro || 'Falha na comunicação a api')
        }

        const dados = await resp.json()

        return dados

    } catch (erro) {
        console.error('Erro na requisição POST:',erro.message)
        return {erro:true, message:erro.message}
    }
}

// Função para listar todas as missões (GET /missions)
// Não recebe parâmetros
// Retorna array de missões ou lança erro
export async function listarMissoes() {
    try {
        const resp = await fetch('/missions')

        if(!resp.ok){
            const erroApi = await resp.json()
            throw new Error(erroApi.erro || 'Falha na conexão com a api')
        }

        const dados = await resp.json()

        return dados

    } catch (erro) {
        console.error('Erro na requisição GET: ',erro.message)
        return {erro: true, mensagem: erro.message}
    }
}

// Função para buscar uma missão por ID (GET /missions/:id)
// Recebe o ID da missão
// Retorna objeto da missão ou lança erro
export async function buscarMissaoPorId(id) {
    try {
        const resp = await fetch(`/missions/${id}`)

        if(!resp.ok){
            const erroApi = await resp.json()
            throw new Error(erroApi.erro || 'Falha na conexão com a api')
        }

        const dados = await resp.json()

        return dados

    } catch (erro) {
        console.error('Erro na requisição GET by id:',erro.message)
        return {erro: true, mensagem: erro.message }
    }
}

// Função para atualizar uma missão (PUT /missions/:id)
// Recebe ID e objeto com dados atualizados
// Retorna dados atualizados ou lança erro
export async function atualizarMissao(id, dadosAtualizados) {
    try {
        const resp = await fetch(`/missions/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dadosAtualizados)
        })

        if(!resp.ok){
            const erroApi = await resp.json()
            throw new Error(erroApi.erro || 'Falha na conexão com a api')
        }

        const dados = await resp.json()

        return dados

    } catch (erro) {
        console.error('Erro na requisição PUT:',erro.message)
        return {erro: true, mensagem: erro.message }
    }
}

// Função para deletar uma missão (DELETE /missions/:id)
// Recebe o ID da missão
// Retorna confirmação ou lança erro
export async function deletarMissao(id) {
    try {
        const resp = await fetch(`/missions/${id}`,{
            method: 'DELETE'
        })

        if(!resp.ok){
            const erroApi = await resp.json()
            throw new Error(erroApi.erro || 'Falha na conexão com a api')
        }

        const dados = await resp.json()

        return dados

    } catch (erro) {
        console.error('Erro na requisição DELETE:',erro.message)
        return {erro: true, mensagem: erro.message }
    }
}