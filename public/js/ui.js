export function mostrarMensagemCadastro(mensagem, tipo) {
  const elemento = document.getElementById("infoMessage");

  elemento.classList.remove("sucesso", "erro");

  if (tipo == "sucesso") {
    elemento.classList.add("sucesso");
  } else if (tipo == "erro") {
    elemento.classList.add("erro");
  }

  elemento.textContent = mensagem;

  setTimeout(() => {
    elemento.textContent = "";
    elemento.classList.remove("sucesso", "erro");
  }, 3000);
}

export function limparFormularioCadastro() {
  // TODO: Pegar o form com id="missionForm"
  // Chamar form.reset() para limpar todos os campos
  const formulario = document.getElementById("missionForm");

  if (formulario) {
    formulario.reset();
  }
}

export function mostrarLoadingTabela() {
  // TODO: Pegar tbody com id="missionsBody"
  // Definir innerHTML com uma linha dizendo "Carregando..."

  const tbody = document.getElementById("missionsBody");

  tbody.innerHTML = `
        <tr>
            <td colspan="7" style="text-align: center;">
                Carregando missões espaciais...
            </td>
        </tr>
    `;
}

export function renderizarMissoes(missoes) {
  const tbody = document.getElementById("missionsBody");
  tbody.innerHTML = "";

  if (missoes.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7">Nenhuma missão cadastrada</td></tr>`;
    return;
  }

  missoes.forEach((mission) => {
    const linha = `
        <tr>
            <td>${mission.nome}</td>
            <td>${mission.crew}</td>
            <td>${mission.spacecraft}</td>
            <td>${mission.destinations}</td>
            <td>${mission.status}</td>
            <td>${mission.durations}</td>
            <td>
                <div class="actions">
                    <button class="button-small edit btn-editar" data-id="${mission.id}">Editar</button>
                    <button class="button-small delete btn-deletar" data-id="${mission.id}">Deletar</button>
                </div>
            </td>
        </tr>`;

    tbody.innerHTML += linha;
  });
}

export function mostrarErroTabela(mensagem) {
  // TODO: Pegar tbody com id="missionsBody"
  // Definir innerHTML com uma linha dizendo o erro

  const tbody = document.getElementById("missionsBody");

  tbody.innerHTML = `
        <tr>
            <td colspan="7" style="text-align: center;">
                ${mensagem}
            </td>
        </tr>
    `;
}

export function mostrarPainelEdicao(missao) {
  const div = document.getElementById("editPanel");
  const info = document.getElementById("editInfo");

  div.classList.remove("hidden");

  document.getElementById("editNome").value = missao.nome;
  document.getElementById("editCrew").value = missao.crew;
  document.getElementById("editSpacecraft").value = missao.spacecraft;
  document.getElementById("editDestinations").value = missao.destinations;
  document.getElementById("editStatus").value = missao.status;
  document.getElementById("editDurations").value = missao.durations;

  info.textContent = "";
}

export function esconderPainelEdicao() {
  // TODO: Pegar div com id="editPanel"
  // Adicionar classe 'hidden' para esconder
  const div = document.getElementById("editPanel");
  div.classList.add("hidden");
}

export function mostrarMensagemEdicao(mensagem, tipo) {
  // TODO: Pegar div com id="editInfo"
  // Definir textContent com a mensagem
  // Adicionar/remover classes CSS baseadas no tipo (sucesso/erro)
  const div = document.getElementById("editInfo");

  div.classList.remove("sucesso", "erro");

  if (tipo == "sucesso") {
    div.classList.add("sucesso");
  } else if (tipo == "erro") {
    div.classList.add("erro");
  }

  div.textContent = mensagem;

  setTimeout(() => {
    div.textContent = "";
    div.classList.remove("sucesso", "erro");
  }, 3000);
}

export function limparFormularioEdicao() {
  // TODO: Pegar form com id="editForm"
  // Chamar form.reset()
  const form = document.getElementById("editForm");
  form.reset();
}
