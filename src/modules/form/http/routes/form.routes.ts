import { Router } from "express";
import { CreateFormController } from "../controllers/create-form.controller";
import { IsAuthenticated } from "@framework/http/middlewares/isAuthenticated";
import { container } from "@framework/container/inversify.config";

export const formRoutes = Router();

export const createFormController = container.resolve(CreateFormController);

formRoutes.post(
  "/",
  IsAuthenticated,
  createFormController.handle.bind(createFormController)
);
