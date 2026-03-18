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
            throw new Error(erroApi.error || 'Falha na comunicação a api')
        }

        const dados = await resp.json()

        return dados

    } catch (erro) {
        console.error('Erro na requisição POST:',erro.message)
        return {erro:true, message:erro.message}
    }
}

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