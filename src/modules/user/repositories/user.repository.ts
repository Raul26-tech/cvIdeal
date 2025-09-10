import { injectable } from "inversify";
import { Repository } from "typeorm";
import { User } from "../entities/user.entity";
import { AppDataSource } from "src/framework/db/database";
import { CreateUserDto } from "../dtos/create-user.dto";

@injectable()
export class UserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = AppDataSource.getRepository(User);
  }

  async create(data: CreateUserDto) {
    const user = this.repository.create(data);

    return await this.repository.save(user);
  }

  async findByEmail(email: string) {
    const user = await this.repository.findOne({
      where: {
        email,
      },
    });

    return user;
  }

  async findById(id: string) {
    const user = await this.repository.findOne({
      where: { id },
    });

    return user;
  }
}
