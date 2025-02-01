// backend/src/index.js
const express = require("express");
const sequelize = require("./config/database");
const Projeto = require("./models/projeto");
const Tarefa = require("./models/Tarefa");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Banco de dados sincronizado com sucesso.");
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((err) => console.error("Erro ao conectar ao banco de dados:", err));

app.get("/", (req, res) => res.send("API funcionando! 🚀"));
