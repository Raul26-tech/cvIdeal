import { CreateUserService } from "@modules/user/services/create-user.service";
import { Request, Response } from "express";
import { injectable } from "inversify";
import { container } from "src/framework/container/inversify.config";

@injectable()
export class CreateUserController {
  async handle(req: Request, res: Response) {
    const createUserService = container.resolve(CreateUserService);

    const { name, email, cpf, password, phone } = req.body;

    const user = await createUserService.execute({
      name,
      cpf,
      email,
      password,
      phone,
    });

    return res.status(201).json(user);
  }
}
