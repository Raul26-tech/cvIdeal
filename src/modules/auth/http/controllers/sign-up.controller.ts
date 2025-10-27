import { SignUpService } from "@modules/auth/services/sign-up.service";
import { Request, Response } from "express";
import { inject } from "inversify";

export class SignUpController {
  constructor(
    @inject("SignUpService") private readonly signUpService: SignUpService
  ) {}
  async handle(req: Request, res: Response) {
    const { name, cpf, email, emailConfirm, password, passwordConfirm, phone } =
      req.body;

    const singUp = await this.signUpService.execute({
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
