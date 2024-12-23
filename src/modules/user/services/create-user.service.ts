import { inject, injectable } from "inversify";
import { UserRepository } from "../repositories/user.repository";
import { CreateUserDto, createUserSchema } from "../dtos/create-user.dto";
import { hashGenerate } from "@utils/password";

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

    const user = await this.userRepository.findByEmail(email);

    if (user) {
      throw new Error("O email informado já está em uso.");
    }

    if (email !== emailConfirm) {
      throw new Error("E-mail e confirmação de e-mail não coincidem.");
    }

    if (password !== passwordConfirm) {
      throw new Error("Senha e confirmação de senha não coincidem.");
    }

    // Gerando senha criptografada
    const hashPassword = await hashGenerate(password);

    const createdUser = await this.userRepository.create({
      name,
      email,
      password: hashPassword,
      phone,
      status: "active",
    });

    return createdUser;
  }
}
