import { criarMissao, listarMissoes, atualizarMissao, deletarMissao, buscarMissaoPorId } from './api.js';
import {
    mostrarMensagemCadastro, limparFormularioCadastro,
    mostrarLoadingTabela, renderizarMissoes, mostrarErroTabela,
    mostrarPainelEdicao, esconderPainelEdicao, mostrarMensagemEdicao, limparFormularioEdicao
} from './ui.js';

let idMissaoSendoEditada = null;

export async function lidarComCadastro(event) {
    event.preventDefault();

    const nome = document.getElementById('nome');
    const crew = document.getElementById('crew');
    const spacecraft = document.getElementById('spacecraft');
    const destinations = document.getElementById('destinations');
    const status = document.getElementById('status'); 
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
        
        mostrarMensagemCadastro('Erro ao cadastrar missão.', 'erro');
    }
}

export async function carregarMissoes() {
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

export function iniciarEdicao(missao) {
    idMissaoSendoEditada = missao.id;
    mostrarPainelEdicao(missao);
}

export function cancelarEdicao() {
    idMissaoSendoEditada = null
    esconderPainelEdicao()
}

export async function lidarComEdicao(event) {
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

export async function excluirMissao(id) {
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

export function inicializar() {
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

document.addEventListener('DOMContentLoaded', inicializar);
