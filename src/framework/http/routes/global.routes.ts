import { authRoutes } from "@modules/auth/http/routes/sign-in.routes";
import { formRoutes } from "@modules/form/http/routes/form.routes";
import { userRoutes } from "@modules/user/http/routes/user.routes";
import { Router } from "express";

export const globalRoutes = Router();

globalRoutes.use("/auth", authRoutes);
globalRoutes.use("/user", userRoutes);
globalRoutes.use("/form", formRoutes);
