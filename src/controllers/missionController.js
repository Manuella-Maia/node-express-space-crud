import {cadastrarMissao, litarMissoes, litarMissaoId,atualizarMission, deletarMissaoId } from "../services/validation.js";

export async function createMission(req, res) {
    try {

        const dados = req.body;

        const missionCreated = await cadastrarMissao(dados);

        res.status(201).json({
            mensagem:'Dados salvos no banco sqlite',
            dados: missionCreated.id
         });
       
    }catch(error) {
        return res.status(400).json({error: error.message});
    };
};

export async function getMissions(req, res) {
    try {

        const missions = await litarMissoes();

        res.status(200).json({
            mensagem:'Listagem de missions:',
            dados: missions.dados
        });
        
    }catch (error) {
        return res.status(400).json({error: error.message});
    };
};
    
export async function getMissionsById(req, res) {
    try {

        const id = req.params.id;

        const mission = await litarMissaoId(id);

        res.status(200).json({
            mensagem:'Mission retornada:',
            dados: mission
        });

    } catch (error) {
         return res.status(400).json({error: error.message});
    };
};

export async function putMission(req, res) {
    try {

        const dados = req.body;
        const id = req.params.id;

        const missionUpdate = await atualizarMission(dados, id);

        res.status(200).json({
            mensagem: 'Dados atualizados com sucesso !',
            dados: missionUpdate 
        });

    }catch (error) {
        return res.status(400).json({error: error.message});
    };
};

export async function missionDelete(req, res) {
    try {

        const id = req.params.id;

        const missionApagada = await deletarMissaoId(id);

        res.status(200).json({
            mensagem: `A tarefa "${missionApagada.nome}" foi removida.`,
            dados: missionApagada
        });

    } catch(error) {
         return res.status(400).json({error: error.message});
    };
};