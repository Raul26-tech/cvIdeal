import { container } from "@framework/container/inversify.config";
import { AuthMeService } from "@modules/auth/services/auth-me.service";
import { Request, Response } from "express";
import { injectable } from "inversify";

@injectable()
export class AuthMeController {
  async handle(req: Request, res: Response) {
    const authMeService = container.resolve(AuthMeService);

    const id = req.user.id;

    const authMe = await authMeService.execute(id);

    return res.status(201).json(authMe);
  }
}
