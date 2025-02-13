import { UserRepository } from "@modules/user/repositories/user.repository";
import { inject, injectable } from "inversify";
import { signUpDto, signUpSchema } from "../dtos/sign-up.dto";
import { BadRequest } from "@framework/http/errors/BadRequest";
import { HashGenerate } from "@utils/password";

@injectable()
export class SignUpService {
  constructor(
    @inject("UserRepository") private readonly userRepository: UserRepository
  ) {}

  async execute({
    name,
    cpf,
    email,
    emailConfirm,
    password,
    passwordConfirm,
    phone,
  }: signUpDto) {
    // Validando os dados de entrada
    signUpSchema.parse({
      name,
      cpf,
      email,
      emailConfirm,
      password,
      passwordConfirm,
      phone,
    });

    const user = await this.userRepository.findByEmail(email);

    if (user) {
      throw new BadRequest("O usuário já existe!");
    }

    const passwordGenerate = await HashGenerate(password);

    const createUser = await this.userRepository.create({
      name,
      cpf,
      email,
      password: passwordGenerate,
      status: "active",
      phone,
    });

    return createUser;
  }
}
