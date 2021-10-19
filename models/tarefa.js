/* Título
Descrição
Prioridade (Alta, Média e Baixa)
Status (Fazer, Fazendo, Feito)
Prazo
Data de criação */

const mongoose = require("mongoose");

const TarefaModel = new mongoose.Schema({
  titulo: { type: String, required: true },
  descricao: { type: String, required: true },
  prioridade: { type: String, required: true },
  status: { type: String, required: true },
  prazo: { type: String, required: true },
  dataCriacao: { type: Date, default: Date.now },
});

const Tarefa = mongoose.model("tarefas", TarefaModel);

module.exports = Tarefa;
