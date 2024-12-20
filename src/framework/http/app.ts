import express from "express";
import { connectDatabase } from "../db/database";
import { globalRoutes } from "./routes/global.routes";

const app = express();

app.use(express.json());

app.use(globalRoutes);

// Rota padrão do sistema
app.get("/", (_, res) => {
  res.send("Welcome to Cv-Ideal");
});

// Iniciando o banco de dados
connectDatabase();

export { app };
