// ui.js - Responsável por manipular a interface (DOM)
// Aqui você vai colocar funções que atualizam o HTML, mostram mensagens, limpam formulários, etc.
// NÃO fazer chamadas à API aqui - isso fica no api.js

// Para index.html (página de cadastro):
// Função para mostrar mensagem de sucesso/erro no cadastro
export function mostrarMensagemCadastro(mensagem, tipo) {
    // TODO: Pegar o elemento onde mostrar a mensagem (ex: div com id="infoMessage")
    // Se tipo for 'sucesso', adicionar classe CSS para verde
    // Se tipo for 'erro', adicionar classe CSS para vermelho
    // Definir o textContent do elemento com a mensagem
    // Opcional: esconder a mensagem após alguns segundos
    const elemento = document.getElementById('infoMessage');

    elemento.classList.remove('sucesso','erro'); // remove classes antigas de sucesso ou erro
    
    if(tipo == 'sucesso'){
        elemento.classList.add('sucesso')
    }else if(tipo == 'erro'){
        elemento.classList.add('erro')
    }

    elemento.textContent = mensagem

    setTimeout(() => {
        elemento.textContent = ""
        elemento.classList.remove('sucesso','erro');

    }, 3000);
}

// Função para limpar o formulário de cadastro
export function limparFormularioCadastro() {
    // TODO: Pegar o form com id="missionForm"
    // Chamar form.reset() para limpar todos os campos
    const formulario = document.getElementById('missionForm');

    if(formulario){
        formulario.reset();
    }
}

// Para list.html (página de listagem):
// Função para mostrar loading na tabela
export function mostrarLoadingTabela() {
    // TODO: Pegar tbody com id="missionsBody"
    // Definir innerHTML com uma linha dizendo "Carregando..."

    const tbody = document.getElementById('missionsBody');

    tbody.innerHTML = `
        <tr>
            <td colspan="7" style="text-align: center;">
                Carregando missões espaciais...
            </td>
        </tr>
    `;
}

// Função para renderizar a lista de missões na tabela
export function renderizarMissoes(missoes) {
    // TODO: Pegar tbody com id="missionsBody"
    // Se array vazio, mostrar mensagem "Nenhuma missão cadastrada"
    // Senão, para cada missão, criar uma linha <tr> com células <td>
    // Colunas: nome, crew, spacecraft, status, durations, ações (botões editar/excluir)
    // Para ações, adicionar event listeners aos botões (mas isso fica no main.js)
    // Retornar o tbody atualizado ou apenas atualizar diretamente

    const tbody = document.getElementById('missionsBody');
    tbody.innerHTML = "";

    if (missoes.length === 0) { // colspan ocupa todas as colunas
        tbody.innerHTML = `<tr><td colspan="7">Nenhuma missão cadastrada</td></tr>`;
        return; // Sai da função para não tentar fazer o loop
    }

    missoes.forEach(mission => {
    const linha = `
        <tr>
            <td>${mission.nome}</td>
            <td>${mission.crew}</td>
            <td>${mission.spacecraft}</td>
            <td>${mission.destinations}</td>
            <td>${mission.status}</td>
            <td>${mission.durations}</td>
            <td>
                <button class="button-small edit btn-editar" data-id="${mission.id}">Editar</button>
                <button class="button-small delete btn-deletar" data-id="${mission.id}">Deletar</button>
            </td>
        </tr>`;
    
        // Agora você precisa "pendurar" essa string no tbody:
        tbody.innerHTML += linha; 
    });
}

// Função para mostrar mensagem de erro na tabela
export function mostrarErroTabela(mensagem) {
    // TODO: Pegar tbody com id="missionsBody"
    // Definir innerHTML com uma linha dizendo o erro

    const tbody = document.getElementById('missionsBody');

    tbody.innerHTML = `
        <tr>
            <td colspan="7" style="text-align: center;">
                ${mensagem}
            </td>
        </tr>
    `;
}

// Função para mostrar o painel de edição
export function mostrarPainelEdicao(missao) {
    // TODO: Pegar div com id="editPanel"
    // Remover classe 'hidden' para mostrar
    // Preencher os campos do form de edição com os dados da missão
    // Ex: document.getElementById('editNome').value = missao.nome
    // Limpar mensagem de info

    const div = document.getElementById('editPanel');
    const info = document.getElementById('editInfo');

    div.classList.remove('hidden');

    document.getElementById('editNome').value = missao.nome
    document.getElementById('editCrew').value = missao.crew
    document.getElementById('editSpacecraft').value = missao.spacecraft
    document.getElementById('editDestinations').value = missao.destinations
    document.getElementById('editStatus').value = missao.status
    document.getElementById('editDurations').value = missao.durations

    info.textContent = ""
}

// Função para esconder o painel de edição
export function esconderPainelEdicao() {
    // TODO: Pegar div com id="editPanel"
    // Adicionar classe 'hidden' para esconder
    const div = document.getElementById('editPanel');
    div.classList.add('hidden')
}

// Função para mostrar mensagem no painel de edição
export function mostrarMensagemEdicao(mensagem, tipo) {
    // TODO: Pegar div com id="editInfo"
    // Definir textContent com a mensagem
    // Adicionar/remover classes CSS baseadas no tipo (sucesso/erro)
    const div = document.getElementById('editInfo');

    div.classList.remove('sucesso','erro');

    if(tipo == 'sucesso'){
        div.classList.add('sucesso')
    }else if(tipo == 'erro'){
        div.classList.add('erro')
    }

    div.textContent = mensagem

    setTimeout(() => {
        div.textContent = ""
        div.classList.remove('sucesso','erro');

    }, 3000);
}

// Função para limpar o formulário de edição
export function limparFormularioEdicao() {
    // TODO: Pegar form com id="editForm"
    // Chamar form.reset()
    const form = document.getElementById('editForm')
    form.reset();
}
