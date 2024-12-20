import { CreateUserController } from "./../controllers/create-user.controller";
import { Router } from "express";

export const userRoutes = Router();

const createUserController = new CreateUserController();

userRoutes.post("/", createUserController.handle.bind(createUserController));
