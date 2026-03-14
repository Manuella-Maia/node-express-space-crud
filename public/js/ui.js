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
}

// Função para limpar o formulário de cadastro
export function limparFormularioCadastro() {
    // TODO: Pegar o form com id="missionForm"
    // Chamar form.reset() para limpar todos os campos
}

// Para list.html (página de listagem):
// Função para mostrar loading na tabela
export function mostrarLoadingTabela() {
    // TODO: Pegar tbody com id="missionsBody"
    // Definir innerHTML com uma linha dizendo "Carregando..."
}

// Função para renderizar a lista de missões na tabela
export function renderizarMissoes(missoes) {
    // TODO: Pegar tbody com id="missionsBody"
    // Se array vazio, mostrar mensagem "Nenhuma missão cadastrada"
    // Senão, para cada missão, criar uma linha <tr> com células <td>
    // Colunas: nome, crew, spacecraft, status, durations, ações (botões editar/excluir)
    // Para ações, adicionar event listeners aos botões (mas isso fica no main.js)
    // Retornar o tbody atualizado ou apenas atualizar diretamente
}

// Função para mostrar mensagem de erro na tabela
export function mostrarErroTabela(mensagem) {
    // TODO: Pegar tbody com id="missionsBody"
    // Definir innerHTML com uma linha dizendo o erro
}

// Função para mostrar o painel de edição
export function mostrarPainelEdicao(missao) {
    // TODO: Pegar div com id="editPanel"
    // Remover classe 'hidden' para mostrar
    // Preencher os campos do form de edição com os dados da missão
    // Ex: document.getElementById('editNome').value = missao.nome
    // Limpar mensagem de info
}

// Função para esconder o painel de edição
export function esconderPainelEdicao() {
    // TODO: Pegar div com id="editPanel"
    // Adicionar classe 'hidden' para esconder
}

// Função para mostrar mensagem no painel de edição
export function mostrarMensagemEdicao(mensagem, tipo) {
    // TODO: Pegar div com id="editInfo"
    // Definir textContent com a mensagem
    // Adicionar/remover classes CSS baseadas no tipo (sucesso/erro)
}

// Função para limpar o formulário de edição
export function limparFormularioEdicao() {
    // TODO: Pegar form com id="editForm"
    // Chamar form.reset()
}
