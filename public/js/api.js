export async function criarMissions(dadosMission) {
    try {
        const resp = await fetch('http://localhost:3000/missions', { 
           method: 'POST',
           headers: {
            'Content-Type': 'application/json'
           },
           body: JSON.stringify(dadosMission) // converte os dados para texto e passa para a api
        })

        if(!resp.ok){ 

            const erroApi = await resp.json()
            throw new Error(erroApi.erro || 'Falha na comunicação a api')
        }

        const dados = await resp.json() 

        return dados

    } catch (erro) {

        console.error('Erro na requisição POST:',erro.message)

        return {erro:true, menssage:erro.message}
    }
}

export async function listarMissions() {
    try {
        const resp = await fetch('http://localhost:3000/missions')

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

export async function listarMissionsById(id) {
    try {
        const resp = fetch(`http://localhost:3000/missions/${id}`)

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

export async function editarMission(dadosMission,id) {
    try {
        const resp = fetch(`http://localhost:3000/missions/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dadosMission)
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

export async function deletarMission(id) {
    try {
        const resp = await fetch(`http://localhost:3000/missions/${id}`,{
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