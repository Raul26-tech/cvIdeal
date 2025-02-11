import { Router } from "express";
import { SignInController } from "../controllers/sign-in.controller";

export const authRoutes = Router();

const signInController = new SignInController();

authRoutes.post("/sign-in", signInController.handle.bind(signInController));
