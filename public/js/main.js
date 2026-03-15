// main.js - Responsável por orquestrar as ações (coordenar UI e API)
// Aqui você importa funções de api.js e ui.js, e coordena o fluxo
// Exemplo de sequência: usuário clica botão -> chama função UI -> chama API -> atualiza UI

import { criarMissao, listarMissoes, atualizarMissao, deletarMissao, buscarMissaoPorId } from './api.js';
import {
    mostrarMensagemCadastro, limparFormularioCadastro,
    mostrarLoadingTabela, renderizarMissoes, mostrarErroTabela,
    mostrarPainelEdicao, esconderPainelEdicao, mostrarMensagemEdicao, limparFormularioEdicao
} from './ui.js';

let idMissaoSendoEditada = null;

// Para index.html (cadastro):
// Função principal para lidar com o submit do formulário de cadastro
export async function lidarComCadastro(event) {
    // TODO: Prevenir default do form (event.preventDefault())
    // Coletar dados do form (usar document.getElementById para cada campo)
    // Criar objeto com os dados
    // Tentar chamar criarMissao(dados) do api.js
    // Se sucesso: chamar limparFormularioCadastro() e mostrarMensagemCadastro('sucesso')
    // Se erro: mostrarMensagemCadastro('erro')

    event.preventDefault();

    const nome = document.getElementById('nome');
    const crew = document.getElementById('crew');
    const spacecraft = document.getElementById('spacecraft');
    const destinations = document.getElementById('destinations');
    const status = document.getElementById('status'); // este contem um select com values
    const durations = document.getElementById('durations');

    const dados = {
        nome: nome.value,
        crew: crew.value,
        spacecraft: spacecraft.value,
        destinations: destinations.value,
        status: status.value,
        durations: durations.value
    }

    try {
        const resultado = await criarMissao(dados);
        
        if (resultado.erro) {
             mostrarMensagemCadastro(resultado.message, 'erro');
        } else {
            limparFormularioCadastro();
            mostrarMensagemCadastro('Missão cadastrada com sucesso!', 'sucesso');
        }
    } catch (error) {
        // Se a API retornar erro ou cair:
        mostrarMensagemCadastro('Erro ao cadastrar missão.', 'erro');
    }
}

// Para list.html (listagem):
// Função para carregar e mostrar todas as missões
export async function carregarMissoes() {
    // TODO: Chamar mostrarLoadingTabela() para mostrar loading
    // Tentar chamar listarMissoes() do api.js
    // Se sucesso: chamar renderizarMissoes(dados) para mostrar na tabela
    // Se erro: chamar mostrarErroTabela(mensagem)

    mostrarLoadingTabela();

    try {
        const dados = await listarMissoes();

        if (!dados.erro) { // Se não deu erro
            renderizarMissoes(dados.dados);
        } else {
            mostrarErroTabela(dados.mensagem); 
        }
    } catch (error) {
        mostrarErroTabela("Erro inesperado ao carregar missões.");
    }
}

// Função para iniciar edição de uma missão
export function iniciarEdicao(missao) {
    // TODO: Chamar mostrarPainelEdicao(missao) para mostrar o form preenchido
    // Guardar o ID da missão sendo editada (variável global ou state)
    idMissaoSendoEditada = missao.id;
    mostrarPainelEdicao(missao);
}

// Função para cancelar edição
export function cancelarEdicao() {
    // TODO: Chamar esconderPainelEdicao()
    // Limpar ID da missão sendo editada

    idMissaoSendoEditada = null
    esconderPainelEdicao()
}

// Função para lidar com submit do form de edição
export async function lidarComEdicao(event) {
    // TODO: Prevenir default do form
    // Verificar se há ID da missão sendo editada
    // Coletar dados do form de edição
    // Tentar chamar atualizarMissao(id, dados) do api.js
    // Se sucesso: mostrarMensagemEdicao('sucesso'), recarregar lista, esconder painel
    // Se erro: mostrarMensagemEdicao('erro')
    event.preventDefault();

    if(!idMissaoSendoEditada){
        mostrarMensagemEdicao("Erro: Nenhuma missão selecionada.", "erro");
        return
    }

    const dadosAtualizados = {
        nome: document.getElementById('editNome').value,
        crew: document.getElementById('editCrew').value,
        spacecraft: document.getElementById('editSpacecraft').value,
        destinations: document.getElementById('editDestinations').value,
        status: document.getElementById('editStatus').value,
        durations: document.getElementById('editDurations').value
    };

    try {
        const resultado = await atualizarMissao(idMissaoSendoEditada, dadosAtualizados);

        if(resultado.erro){
            mostrarMensagemEdicao(resultado.message, 'erro')
        }else{
            mostrarMensagemEdicao('Missão atualizada com sucesso!', 'sucesso')

            esconderPainelEdicao();
            idMissaoSendoEditada = null

            await carregarMissoes()
        }
    } catch (error) {
        mostrarMensagemEdicao('Erro inesperado ao atualizar.', 'erro');
    }
}

// Função para excluir uma missão
export async function excluirMissao(id) {
    // TODO: Mostrar confirm() para usuário confirmar
    // Se confirmado: tentar deletarMissao(id) do api.js
    // Se sucesso: recarregar lista (carregarMissoes())
    // Se erro: alert('Erro ao excluir')

    const confirmacao = confirm("Tem certeza que deseja excluir esta missão? Essa ação não pode ser desfeita.")

    if(confirmacao){
        try {
            const resultado = await deletarMissao(id)

            if (!resultado.erro) {
                await carregarMissoes();
            }else{
                alert('Erro ao excluir: ' + resultado.message)
            }
        } catch (error) {
            alert('Erro ao excluir a missão.');
        }
    }
}

// Função de inicialização (chamada quando a página carrega)
export function inicializar() {
    // TODO: Para index.html: adicionar event listener no form de cadastro
    // document.getElementById('missionForm').addEventListener('submit', lidarComCadastro);

    // TODO: Para list.html:
    // - Chamar carregarMissoes() para carregar inicial
    // - Adicionar event listener no botão cancelar edição
    // - Adicionar event listener no form de edição
    // - Os botões editar/excluir serão adicionados dinamicamente na renderizarMissoes

    // --- Lógica para o index.html (Cadastro) ---
    const formCadastro = document.getElementById('missionForm');

    if(formCadastro){
        formCadastro.addEventListener('submit', lidarComCadastro)
    }

    // --- Lógica para o list.html (Listagem e Edição) ---
    const missionsBody = document.getElementById('missionsBody');

    if(missionsBody){
        carregarMissoes()

        const formEdicao = document.getElementById('editForm');

        if(formEdicao){
            formEdicao.addEventListener('submit',lidarComEdicao)
        }

        // Adicionar event delegation para botões dinâmicos
        missionsBody.addEventListener('click', async (e) => {
            const target = e.target;
            if (target.classList.contains('btn-editar')) {
                const id = target.dataset.id;
                try {
                    const missao = await buscarMissaoPorId(id);
                    if (!missao.erro) {
                        iniciarEdicao(missao.dados);
                    } else {
                        alert('Erro ao buscar missão para edição: ' + missao.mensagem);
                    }
                } catch (error) {
                    alert('Erro inesperado ao buscar missão.');
                }
            } else if (target.classList.contains('btn-deletar')) {
                const id = target.dataset.id;
                excluirMissao(id);
            }
        });
    }

    const bntCancelar = document.getElementById('cancelEdit');

    if(bntCancelar){
        bntCancelar.addEventListener('click',cancelarEdicao)
    }
}

// Chamar inicializar quando DOM estiver pronto
document.addEventListener('DOMContentLoaded', inicializar);
