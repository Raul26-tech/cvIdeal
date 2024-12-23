import express, { ErrorRequestHandler } from "express";
import cors from "cors";
import { connectDatabase } from "../db/database";
import { globalRoutes } from "./routes/global.routes";
import { catchErrors } from "./middlewares/catchErrors";

export const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.use(globalRoutes);

// Rota padrão do sistema
app.get("/", (_, res) => {
  res.send("Welcome to Cv-Ideal");
});

// Iniciando o banco de dados
connectDatabase();

// app.use(catchErrors as unknown as ErrorRequestHandler);
