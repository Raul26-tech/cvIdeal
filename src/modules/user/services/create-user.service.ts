import { inject, injectable } from "inversify";
import { UserRepository } from "../repositories/user.repository";
import { CreateUserDto, createUserSchema } from "../dtos/create-user.dto";

@injectable()
export class CreateUserService {
  constructor(
    @inject("UserRepository") private readonly userRepository: UserRepository
  ) {}

  async execute({
    name,
    email,
    emailConfirm,
    password,
    passwordConfirm,
    phone,
  }: CreateUserDto) {
    // Validando os dados de entrada
    createUserSchema.parse({
      name,
      email,
      emailConfirm,
      password,
      passwordConfirm,
      phone,
    });

    if (email !== emailConfirm) {
      throw new Error("E-mail e confirmação de e-mail não coincidem");
    }

    if (password !== passwordConfirm) {
      throw new Error("Senha e confirmação de senha não coincidem");
    }

    const createdUser = await this.userRepository.create({
      name,
      email,
      password,
      phone,
      status: "active",
    });

    return createdUser;
  }
}
