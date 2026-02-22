import {insertMissions, selectMissions, selectMissionsById} from '../models/missionModel.js'

export async function createMission(req, res) {
    try {
        const {nome, crew, spacecraft, destinations, status, durations} = req.body

        if(!nome){
            return res.status(400).json({erro:'O nome esta vazio !'})
        }

        const typeCrew = typeof crew

        if(typeCrew !== "number"){
            return res.status(400).json({erro: 'O tipo armazenado em crew e direfente de number !'})
        }

        if(crew <= 0){
            return res.status(400).json({erro: 'Numero de tripulantes invalido !'})
        }

        if(!nome || !crew || !spacecraft || !destinations || !status || !durations){
            return res.status(400).json({erro: 'Dados invalidos ou ausentes !'})
        }
        // const resultado = await insertMissions(nome, crew, spacecraft, destinations, status, durations)
        const dados = req.body

        const resultado = await insertMissions(dados)

        if(resultado && resultado.id){
            res.status(201).json({
                mensagem:'Dados salvos no banco sqlite',
                dados: resultado.id
            })
        }else{
            res.status(404).json({erro:resultado.erro || 'Erro desconhecido'})
        }
    } catch (erro) {
        console.error('Erro na inserção de dados no db:', erro.message)
    }
}

export async function getMissions(req, res) {
    try {
        const resultado = await selectMissions()

        if(resultado){
            res.status(200).json({
                mensagem:'Listagem de missions:',
                dados: resultado.dados
            })
        }else{
            res.status(404).json({erro: resultado.erro})
        }
    } catch (erro) {
        console.error('Erro na listagem de dados no db:',erro.message)
        res.status(500).json({erro:'Erro interno no servidor ao listar missões.'})
    }
}
    
export async function getMissionsById(req, res) {
    try {
        const idRecebido = req.params.id

        const resultado = await selectMissionsById(idRecebido)

        if(!resultado){
            return res.status(404).json({
                mensagem: `Missão com ID ${idRecebido} não encontrada.`
            })
        }

        res.status(200).json({
            mensagem:'Mission retornada:',
            dados: resultado
        })

    } catch (erro) {
        console.error('Erro na listagem de dados no db:',erro.message)
        res.status(500).json({erro:'Erro interno no servidor ao listar missão.'})
    }
}
    