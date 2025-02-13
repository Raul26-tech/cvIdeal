import { container } from "@framework/container/inversify.config";
import { SignUpService } from "@modules/auth/services/sign-up.service";
import { Request, Response } from "express";

export class SignUpController {
  async handle(req: Request, res: Response) {
    const signUpService = container.resolve(SignUpService);

    const { name, cpf, email, emailConfirm, password, passwordConfirm, phone } =
      req.body;

    const singUp = await signUpService.execute({
      name,
      cpf,
      email,
      emailConfirm,
      password,
      passwordConfirm,
      phone,
    });

    return res.status(201).json(singUp);
  }
}
