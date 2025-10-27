import { AuthMeService } from "@modules/auth/services/auth-me.service";
import { Request, Response } from "express";
import { inject, injectable } from "inversify";

@injectable()
export class AuthMeController {
  constructor(
    @inject("AuthMeService") private readonly authMeService: AuthMeService
  ) {}
  async handle(req: Request, res: Response) {
    const id = req.user.id;

    const authMe = await this.authMeService.execute(id);

    return res.status(201).json(authMe);
  }
}
