import { Router } from "express";
import { SignInController } from "../controllers/sign-in.controller";
import { SignUpController } from "../controllers/sign-up.controller";

export const authRoutes = Router();

const signInController = new SignInController();
const signUpController = new SignUpController();

authRoutes.post("/sign-in", signInController.handle.bind(signInController));
authRoutes.post("/sign-up", signUpController.handle.bind(signUpController));
