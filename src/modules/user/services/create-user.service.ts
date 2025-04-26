import { inject, injectable } from "inversify";
import { UserRepository } from "../repositories/user.repository";
import { CreateUserDto, createUserSchema } from "../dtos/create-user.dto";
import { HashGenerate } from "@utils/password";
import { BadRequest } from "src/framework/http/errors/BadRequest";

@injectable()
export class CreateUserService {
  constructor(
    @inject("UserRepository") private readonly userRepository: UserRepository
  ) {}

  async execute({ name, email, cpf, password, phone }: CreateUserDto) {
    // Validando os dados de entrada
    createUserSchema.parse({
      name,
      email,
      cpf,
      password,
      phone,
    });

    const user = await this.userRepository.findByEmail(email);

    if (user) {
      throw new BadRequest("O email informado já está em uso.");
    }

    // Gerando senha criptografada
    const hashPassword = await HashGenerate(password);

    const createdUser = await this.userRepository.create({
      name,
      email,
      cpf,
      password: hashPassword,
      phone,
      status: "active",
      type: "user",
    });

    return createdUser;
  }
}
