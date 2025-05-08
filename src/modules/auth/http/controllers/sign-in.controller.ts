import { container } from "@framework/container/inversify.config";
import { SignInService } from "@modules/auth/services/sign-in.service";
import { Request, Response } from "express";
import { injectable } from "inversify";

@injectable()
export class SignInController {
  async handle(req: Request, res: Response) {
    const signInService = container.resolve(SignInService);

    const { email, password } = req.body;

    const signIn = await signInService.execute({ email, password });

    return res.status(201).json(signIn);
  }
}
