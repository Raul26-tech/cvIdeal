import express from "express";
import { connectDatabase } from "../db/database";

const app = express();

app.use(express.json());

// Rota padrão do sistema
app.get("/", (_, res) => {
  res.send("Welcome to Cv-Ideal");
});

// Iniciando o banco de dados
connectDatabase();

export { app };
