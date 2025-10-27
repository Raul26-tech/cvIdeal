import { SignInService } from "@modules/auth/services/sign-in.service";
import { Request, Response } from "express";
import { inject, injectable } from "inversify";

@injectable()
export class SignInController {
  constructor(
    @inject("SignInService") private readonly signInService: SignInService
  ) {}
  async handle(req: Request, res: Response) {
    const { email, password } = req.body;

    const signIn = await this.signInService.execute({ email, password });

    return res.status(201).json(signIn);
  }
}
