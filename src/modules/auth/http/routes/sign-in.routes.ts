import { container } from "src/framework/container/inversify.config";
import { Router } from "express";
import { SignInController } from "../controllers/sign-in.controller";
import { SignUpController } from "../controllers/sign-up.controller";
import { AuthMeController } from "../controllers/auth-me.controller";
import { IsAuthenticated } from "@framework/http/middlewares/isAuthenticated";

export const authRoutes = Router();

const signInController = container.resolve(SignInController);
const signUpController = container.resolve(SignUpController);
const authMeController = container.resolve(AuthMeController);

authRoutes.post("/sign-in", signInController.handle.bind(signInController));
authRoutes.post("/sign-up", signUpController.handle.bind(signUpController));
authRoutes.get(
  "/me",
  IsAuthenticated,
  authMeController.handle.bind(authMeController)
);
