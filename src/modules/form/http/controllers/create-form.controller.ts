import { CreateFormService } from "@modules/form/services/create-form.service";
import { Request, Response } from "express";
import { inject, injectable } from "inversify";

@injectable()
export class CreateFormController {
  constructor(
    @inject("CreateFormService")
    private readonly createFormService: CreateFormService
  ) {}

  async handle(req: Request, res: Response) {
    const { id } = req.user;
    const data = req.body;

    const form = await this.createFormService.execute({
      ...data,
      userId: id,
    });

    return res.status(201).json(form);
  }
}
