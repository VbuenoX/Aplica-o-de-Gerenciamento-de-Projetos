const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: process.env.DB_STORAGE,
  logging: false,
});

module.exports = sequelize;
