import { UserRepository } from "@modules/user/repositories/user.repository";
import { inject, injectable } from "inversify";
import { authMeSchema } from "../dtos/auth-me.dto";
import { NotFound } from "@framework/http/errors/NotFound";

@injectable()
export class AuthMeService {
  constructor(
    @inject("UserRepository") private readonly userRepository: UserRepository
  ) {}

  async execute(id: string) {
    authMeSchema.parse({
      id,
    });

    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new NotFound("Usuário informado não foi encontrado!");
    }

    return user;
  }
}
