import {
  insertMissions,
  selectMissions,
  selectMissionsById,
  updateMission,
  deleteMission,
} from "../models/missionModel.js";

export async function validarCampos(dados) {
  const { nome, crew, spacecraft, destinations, status, durations } = dados;

  if (!nome || !crew || !spacecraft || !destinations || !status || !durations) {
    throw new Error("Dados invalidos ou ausentes !");
  }

  const crewNum = parseInt(crew, 10);
  if (isNaN(crewNum)) {
    throw new Error("O campo crew deve ser um número válido!");
  }

  if (crewNum <= 0) {
    throw new Error("Numero de tripulantes invalido !");
  }

  dados.crew = crewNum;
}

export async function validarID(id) {
  if (id === undefined || id === null) {
    throw new Error("Id não informado");
  }

  const idNumber = parseInt(id, 10);

  if (isNaN(idNumber)) {
    throw new Error("O id não é um número");
  }

  if (idNumber < 1) {
    throw new Error("Id inválido: número negativo ou igual a 0");
  }

  return idNumber;
}

export async function cadastrarMissao(dados) {
  await validarCampos(dados);

  const missaoCriada = await insertMissions(dados);

  return missaoCriada;
}

export async function litarMissoes() {
  const listedMissions = await selectMissions();

  return listedMissions;
}

export async function litarMissaoId(id) {
  const idValid = await validarID(id);

  const missionById = await selectMissionsById(idValid);

  if (!missionById) {
    throw new Error(`Missão com ID ${idValid} não encontrada.`);
  }

  return missionById;
}

export async function atualizarMission(dados, id) {
  await validarCampos(dados);

  const idValid = await validarID(id);

  const mission = await updateMission(dados, idValid);

  if (mission.changes == 0) {
    throw new Error("Missions não encontrada ! Id não existe no bd");
  }

  return mission;
}

export async function deletarMissaoId(id) {
  const missionById = await selectMissionsById(id);

  if (!missionById) {
    throw new Error(`Missão com ID ${id} não encontrada.`);
  }

  const missionDeleted = await deleteMission(id);

  if (missionDeleted.changes == 0) {
    throw new Error("A Missão não foi deletada corretamente !");
  }

  return missionById;
}
