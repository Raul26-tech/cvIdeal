const express = require("express");
const { connectDatabase } = require("../db/datasource");

const app = express();

// Rota padrão do sistema
app.get("/", (_, res) => {
  res.send("Welcome to Cv-Ideal");
});

// Iniciando o banco de dados
connectDatabase();

module.exports = app;
