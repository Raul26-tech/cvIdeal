import { UserRepository } from "@modules/user/repositories/user.repository";
import { inject, injectable } from "inversify";
import { signInDto, signInSchema } from "../dtos/sign-in.dto";
import { BadRequest } from "@framework/http/errors/BadRequest";
import { HashCompare } from "@utils/password";
import { GenerateToken } from "@utils/generateToken";

@injectable()
export class SignInService {
  constructor(
    @inject("UserRepository") private readonly userRepository: UserRepository
  ) {}

  async execute({ email, password }: signInDto) {
    signInSchema.parse({
      email,
      password,
    });

    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new BadRequest("Usuário ou senha incorretos");
    }

    const matchPassword = await HashCompare(password, user.password);

    if (!matchPassword) {
      throw new BadRequest("Usuário ou senha incorretos");
    }

    const token = GenerateToken(user.id);

    const response = {
      accessToken: token,
      user: {
        ...user,
      },
    };

    return response;
  }
}
