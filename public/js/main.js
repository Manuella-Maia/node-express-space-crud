// main.js - Responsável por orquestrar as ações (coordenar UI e API)
// Aqui você importa funções de api.js e ui.js, e coordena o fluxo
// Exemplo de sequência: usuário clica botão -> chama função UI -> chama API -> atualiza UI

import { criarMissao, listarMissoes, atualizarMissao, deletarMissao } from './api.js';
import {
    mostrarMensagemCadastro, limparFormularioCadastro,
    mostrarLoadingTabela, renderizarMissoes, mostrarErroTabela,
    mostrarPainelEdicao, esconderPainelEdicao, mostrarMensagemEdicao, limparFormularioEdicao
} from './ui.js';

// Para index.html (cadastro):
// Função principal para lidar com o submit do formulário de cadastro
export async function lidarComCadastro(event) {
    // TODO: Prevenir default do form (event.preventDefault())
    // Coletar dados do form (usar document.getElementById para cada campo)
    // Criar objeto com os dados
    // Tentar chamar criarMissao(dados) do api.js
    // Se sucesso: chamar limparFormularioCadastro() e mostrarMensagemCadastro('sucesso')
    // Se erro: mostrarMensagemCadastro('erro')
}

// Para list.html (listagem):
// Função para carregar e mostrar todas as missões
export async function carregarMissoes() {
    // TODO: Chamar mostrarLoadingTabela() para mostrar loading
    // Tentar chamar listarMissoes() do api.js
    // Se sucesso: chamar renderizarMissoes(dados) para mostrar na tabela
    // Se erro: chamar mostrarErroTabela(mensagem)
}

// Função para iniciar edição de uma missão
export function iniciarEdicao(missao) {
    // TODO: Chamar mostrarPainelEdicao(missao) para mostrar o form preenchido
    // Guardar o ID da missão sendo editada (variável global ou state)
}

// Função para cancelar edição
export function cancelarEdicao() {
    // TODO: Chamar esconderPainelEdicao()
    // Limpar ID da missão sendo editada
}

// Função para lidar com submit do form de edição
export async function lidarComEdicao(event) {
    // TODO: Prevenir default do form
    // Verificar se há ID da missão sendo editada
    // Coletar dados do form de edição
    // Tentar chamar atualizarMissao(id, dados) do api.js
    // Se sucesso: mostrarMensagemEdicao('sucesso'), recarregar lista, esconder painel
    // Se erro: mostrarMensagemEdicao('erro')
}

// Função para excluir uma missão
export async function excluirMissao(id) {
    // TODO: Mostrar confirm() para usuário confirmar
    // Se confirmado: tentar deletarMissao(id) do api.js
    // Se sucesso: recarregar lista (carregarMissoes())
    // Se erro: alert('Erro ao excluir')
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
}

// Chamar inicializar quando DOM estiver pronto
document.addEventListener('DOMContentLoaded', inicializar);
