const { v4: uuidv4 } = require("uuid");
const { tarefas } = require("../database/fakeDb");

function adicionarTarefa({ titulo, descricao, concluida }) {
  const novaTarefa = {
    id: uuidv4(),
    titulo,
    descricao,
    concluida: Boolean(concluida),
  };
  tarefas.push(novaTarefa);
  return novaTarefa;
}

//listar todas as tarefas
function listarTarefas(filtroConcluido) {
  if (filtroConcluido !== undefined) {
    const concliudaboolean = filtroConcluido === "true";
    return tarefas.filter((tarefa) => tarefa.concluida === concliudaboolean);
  }
  return tarefas;
}
//buscar tarefas por id
function buscarTarefaPorId(id) {
  return tarefas.find((tarefa) => tarefa.id === id);
}
//atualizar tarefa
function atualizarTarefa(id, dadosAtualizados) {
  const index = tarefas.findIndex((tarefa) => tarefa.id === id);
  const tarefa = buscarTarefaPorId(id);
  if (index === -1) {
    return null;
  }
  tarefas[index] = {
    ...tarefa[index],
    ...dadosAtualizados,
  };
  return tarefa[index];
}
//deltetar tarefa
function deletarTarefa(id) {
  const index = tarefas.findIndex((tarefa) => tarefa.id === id);
  if (index === -1) {
    return null;
  }
  tarefas.splice(index, 1);
  return true;
}
//marca a tarefa como concliuda
function concluirTarefa(id) {
  const tarefa = buscarTarefaPorId(id);
  if (!tarefa) {
    return null;
  }
  tarefa.concluido = true;
  return tarefa;
}
module.exports = {
  adicionarTarefa,
  listarTarefas,
  buscarTarefaPorId,
  atualizarTarefa,
  deletarTarefa,
  concluirTarefa,
};
