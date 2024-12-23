import { userRoutes } from "@modules/user/http/routes/user.routes";
import { Router } from "express";

export const globalRoutes = Router();

globalRoutes.use("/user", userRoutes);
