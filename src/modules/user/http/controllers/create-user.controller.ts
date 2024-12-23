import { CreateUserService } from "@modules/user/services/create-user.service";
import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import { container } from "src/framework/container/inversify.config";

@injectable()
export class CreateUserController {
  //   constructor(
  //     @inject("CreateUserService")
  //     private readonly CreateUserService: CreateUserService
  //   ) {}

  async handle(req: Request, res: Response) {
    const createUserService = container.resolve(CreateUserService);

    const { name, email, emailConfirm, password, passwordConfirm, phone } =
      req.body;

    const user = await createUserService.execute({
      name,
      email,
      emailConfirm,
      password,
      passwordConfirm,
      phone,
    });

    return res.status(201).json(user);
  }
}
