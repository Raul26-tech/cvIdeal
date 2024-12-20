import { DataSource, EntityManager } from "typeorm";
import { inject, injectable, optional } from "inversify";
import { AppDataSource } from "src/framework/db/database";

@injectable()
class BaseRepository {
  protected dataSource: DataSource | EntityManager;

  constructor(
    @inject("Manager")
    @optional()
    private manager?: EntityManager
  ) {
    this.dataSource = this.manager ? this.manager : AppDataSource;
  }
}

export { BaseRepository };
