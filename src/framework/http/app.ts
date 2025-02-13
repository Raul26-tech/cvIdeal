import "express-async-errors";
import express, { ErrorRequestHandler } from "express";
import cors from "cors";
import { connectDatabase } from "../db/database";
import { globalRoutes } from "@framework/http/routes/global.routes";
import { catchErrors } from "./middlewares/catchErrors";
import { config } from "dotenv";

export const app = express();

config({
  path: ".env",
});

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.use(globalRoutes);

// Iniciando o banco de dados
connectDatabase();

// Rota padrão do sistema
app.get("/", (_, res) => {
  res.send("Welcome to Cv-Ideal");
});

app.use(catchErrors as unknown as ErrorRequestHandler);
