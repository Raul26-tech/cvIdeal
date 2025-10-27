import { CreateUserService } from "@modules/user/services/create-user.service";
import { Request, Response } from "express";
import { inject, injectable } from "inversify";

@injectable()
export class CreateUserController {
  constructor(
    @inject("CreateUserService")
    private readonly createUserService: CreateUserService
  ) {}
  async handle(req: Request, res: Response) {
    const { name, email, cpf, password, phone } = req.body;

    const user = await this.createUserService.execute({
      name,
      cpf,
      email,
      password,
      phone,
    });

    return res.status(201).json(user);
  }
}
