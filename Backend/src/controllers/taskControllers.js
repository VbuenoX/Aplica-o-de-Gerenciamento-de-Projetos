const Tarefa = require("../models/Tarefa");
const Projeto = require("../models/projeto");

// Criar uma nova tarefa associada a um projeto
exports.createTask = async (req, res) => {
  try {
    const { projetoId, titulo, descricao, dataConclusao } = req.body;

    const projeto = await Projeto.findByPk(projetoId);
    if (!projeto) {
      return res.status(404).json({ error: "Projeto não encontrado" });
    }

    const tarefa = await Tarefa.create({
      projetoId,
      titulo,
      descricao,
      dataConclusao,
    });
    res.status(201).json(tarefa);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar tarefa" });
  }
};

// Listar todas as tarefas de um projeto
exports.getTasksByProject = async (req, res) => {
  try {
    const { projetoId } = req.params;
    const tarefas = await Tarefa.findAll({ where: { projetoId } });
    res.status(200).json(tarefas);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar tarefas" });
  }
};

// Marcar uma tarefa como concluída
exports.markTaskAsDone = async (req, res) => {
  try {
    const { id } = req.params;
    const tarefa = await Tarefa.findByPk(id);
    if (!tarefa) {
      return res.status(404).json({ error: "Tarefa não encontrada" });
    }

    tarefa.concluida = true;
    await tarefa.save();
    res.status(200).json({ message: "Tarefa concluída!" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao marcar tarefa como concluída" });
  }
};

// Excluir uma tarefa
exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const tarefa = await Tarefa.findByPk(id);
    if (!tarefa) {
      return res.status(404).json({ error: "Tarefa não encontrada" });
    }

    await tarefa.destroy();
    res.status(200).json({ message: "Tarefa excluída com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao excluir tarefa" });
  }
};
