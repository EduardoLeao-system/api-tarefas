const tarefasService = require("../service/tarefasService");
const logger = require("../utils/logger");

function criarTarefa(req, res) {
  try {
    const tarefa = tarefasService.adicionarTarefa(req.body);
    logger("Tarefa criada com sucesso.");
    return res.status(201).json(tarefa);
  } catch (error) {
    logger("Erro ao criar tarefa: " + error.message);
    return res
      .status(500)
      .json({ mensagem: "Erro ao criar tarefa.", erro: error.message });
  }
}

// Listar todas as tarefas
function listarTarefas(req, res) {
  try {
    const { concluida } = req.query;
    const tarefas = tarefasService.listarTarefas(concluida);
    return res.status(200).json(tarefas);
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro ao listar tarefas." });
  }
}

// Buscar por ID
function buscarTarefaPorId(req, res) {
  const { id } = req.params;
  const tarefa = tarefasService.buscarTarefaPorId(id);

  if (!tarefa) {
    return res.status(404).json({ mensagem: "Tarefa não encontrada." });
  }

  return res.status(200).json(tarefa);
}

// Atualizar tarefa
function atualizarTarefa(req, res) {
  const { id } = req.params;
  const dadosAtualizados = req.body;

  const tarefaAtualizada = tarefasService.atualizarTarefa(id, dadosAtualizados);

  if (!tarefaAtualizada) {
    return res.status(404).json({ mensagem: "Tarefa não encontrada." });
  }

  logger("Tarefa atualizada com sucesso.");
  return res.status(200).json(tarefaAtualizada);
}

// Concluir tarefa
function concluirTarefa(req, res) {
  const { id } = req.params;
  const tarefaConcluida = tarefasService.concluirTarefa(id);

  if (!tarefaConcluida) {
    return res.status(404).json({ mensagem: "Tarefa não encontrada." });
  }

  logger("Tarefa marcada como concluída.");
  return res.status(200).json(tarefaConcluida);
}

// Deletar tarefa
function deletarTarefa(req, res) {
  const { id } = req.params;
  const sucesso = tarefasService.deletarTarefa(id);

  if (!sucesso) {
    return res.status(404).json({ mensagem: "Tarefa não encontrada." });
  }

  logger("Tarefa deletada.");
  return res.status(204).send(); // sem conteudos
}

module.exports = {
  criarTarefa,
  listarTarefas,
  buscarTarefaPorId,
  atualizarTarefa,
  concluirTarefa,
  deletarTarefa,
};
