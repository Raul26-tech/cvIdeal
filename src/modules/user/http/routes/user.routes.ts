import { container } from "@framework/container/inversify.config";
import { CreateUserController } from "./../controllers/create-user.controller";
import { Router } from "express";

export const userRoutes = Router();

const createUserController = container.resolve(CreateUserController);

userRoutes.post("/", createUserController.handle.bind(createUserController));
