import { Repository } from "typeorm";
import { Form } from "../entities/form.entity";
import { injectable } from "inversify";
import { AppDataSource } from "@framework/db/database";
import { CreateFormDto } from "../dtos/create-form.dto";

@injectable()
export class FormRepository {
  private repository: Repository<Form>;

  constructor() {
    this.repository = AppDataSource.getRepository(Form);
  }

  async create(data: CreateFormDto) {
    const form = this.repository.create(data);

    return await this.repository.save(form);
  }
}
