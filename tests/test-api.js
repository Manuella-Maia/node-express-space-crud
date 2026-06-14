import {criarMissions, listarMissions,listarMissionsById, editarMission, deletarMission} from '../public/js/api.js'

async function testarCadastro() {
    console.log("Testando cadastro...");
    const novaMission = {}; // campos
    const res = await criarMissions(novaMission);
    console.log("Resultado do servidor:", res);
}

testarCadastro()