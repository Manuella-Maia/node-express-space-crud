import {insertMissions, selectMissions, selectMissionsById, updateMission, deleteMission} from '../models/missionModel.js'

export async function cadastrarMissao(dados) {

    const {nome, crew, spacecraft, destinations, status, durations} = dados

    if(!nome || !crew || !spacecraft || !destinations || !status || !durations){
        throw new Error('Dados invalidos ou ausentes !');
    };

    const typeCrew = typeof crew

    if(typeCrew !== "number"){
        throw new Error('O tipo armazenado em crew e direfente de number !');
    }

    if(crew <= 0){
        throw new Error('Numero de tripulantes invalido !');
    }

    const missaoCriada = await insertMissions(dados);

    return missaoCriada;
}