import { UserRepository } from "./../../user/repositories/user.repository";
import { inject, injectable } from "inversify";
import { FormRepository } from "../repositories/form.repository";
import { CreateFormDto, createFormSchema } from "../dtos/create-form.dto";
import { NotFound } from "@framework/http/errors/NotFound";

@injectable()
export class CreateFormService {
  constructor(
    @inject("FormRepository") private formRepository: FormRepository,
    @inject("UserRepository") private userRepository: UserRepository
  ) {}

  async execute(data: CreateFormDto) {
    createFormSchema.parse({
      ...data,
      userId: data.userId,
    });

    console.log(data);

    const user = await this.userRepository.findById(data.userId);

    if (!user) {
      throw new NotFound("O usuário informado não foi encontrado");
    }

    return await this.formRepository.create({
      ...data,
    });
  }
}
