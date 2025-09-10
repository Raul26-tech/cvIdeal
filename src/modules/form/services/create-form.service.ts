import { inject, injectable } from "inversify";
import { FormRepository } from "../repositories/form.repository";

@injectable()
export class CreateFormService {
  constructor(
    @inject("FormRepository") private formRepository: FormRepository
  ) {}
}
