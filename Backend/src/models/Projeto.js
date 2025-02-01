const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Projeto = sequelize.define("Projeto", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  dataInicio: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

module.exports = Projeto;
