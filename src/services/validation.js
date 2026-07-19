import {insertMissions, selectMissions, selectMissionsById, updateMission, deleteMission} from '../models/missionModel.js';

export async function validarCampos(dados) {

    const {nome, crew, spacecraft, destinations, status, durations} = dados;

    if(!nome || !crew || !spacecraft || !destinations || !status || !durations){
        throw new Error('Dados invalidos ou ausentes !');
    };

    const crewNum = parseInt(crew, 10);
    if (isNaN(crewNum)) {
        throw new Error('O campo crew deve ser um número válido!');
    }

    if(crewNum <= 0){
        throw new Error('Numero de tripulantes invalido !');
    };

    dados.crew = crewNum;
};

export async function cadastrarMissao(dados) {

    await validarCampos(dados);

    const missaoCriada = await insertMissions(dados);

    return missaoCriada;
};

export async function litarMissoes() {

    const listedMissions = await selectMissions();

    return listedMissions;
};

export async function litarMissaoId(id) {

    const missionById = await selectMissionsById(id);

    if(!missionById){
        throw new Error(`Missão com ID ${id} não encontrada.`);
    }

    return missionById;
};

export async function atualizarMission(dados,id) {

    await validarCampos(dados);

    const mission = await updateMission(dados,id);

    if(mission.changes == 0){
        throw new Error('Missions não encontrada ! Id não existe no bd');
    };

    return mission;
};

export async function deletarMissaoId(id) {

    const missionById = await selectMissionsById(id);

    if(!missionById){
        throw new Error(`Missão com ID ${id} não encontrada.`);
    }

    const missionDeleted = await deleteMission(id);

    if(missionDeleted.changes == 0){
         throw new Error('A Missão não foi deletada corretamente !');
    };

    return missionById;
};