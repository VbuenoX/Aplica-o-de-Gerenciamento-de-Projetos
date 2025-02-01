const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Projeto = require("./projeto");

const Tarefa = sequelize.define("Tarefa", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  dataConclusao: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  concluida: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

Projeto.hasMany(Tarefa, { onDelete: "CASCADE" });
Tarefa.belongsTo(Projeto);

module.exports = Tarefa;
