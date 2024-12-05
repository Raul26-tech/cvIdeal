const express = require("express");

const app = express();

// Rota padrão do sistema
app.get("/", (_, res) => {
  res.send("Welcome to Cv-Ideal");
});

module.exports = app;
