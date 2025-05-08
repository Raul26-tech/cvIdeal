import { Router } from "express";
import { SignInController } from "../controllers/sign-in.controller";
import { SignUpController } from "../controllers/sign-up.controller";
import { AuthMeController } from "../controllers/auth-me.controller";
import { IsAuthenticated } from "@framework/http/middlewares/isAuthenticated";

export const authRoutes = Router();

const signInController = new SignInController();
const signUpController = new SignUpController();
const authMeController = new AuthMeController();

authRoutes.post("/sign-in", signInController.handle.bind(signInController));
authRoutes.post("/sign-up", signUpController.handle.bind(signUpController));
authRoutes.get(
  "/me",
  IsAuthenticated,
  authMeController.handle.bind(authMeController)
);
