const Projeto = require("../models/projeto");

// Criar um novo projeto
exports.createProject = async (req, res) => {
  try {
    const { nome, descricao, dataInicio } = req.body;
    const projeto = await Projeto.create({ nome, descricao, dataInicio });
    res.status(201).json(projeto);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar projeto" });
  }
};

// Listar todos os projetos
exports.getAllProjects = async (req, res) => {
  try {
    const projetos = await Projeto.findAll();
    res.status(200).json(projetos);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar projetos" });
  }
};
