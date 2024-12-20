import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: false,
  logging: true,
  entities: ["src/modules/**/*{.ts,.js}"],
  migrations: ["src/framework/db/migrations*{.ts,.js}"],
});

export const connectDatabase = async () => {
  try {
    // Iniciando as migrations
    const dataSource = await AppDataSource.initialize();
    console.log("Data Source has been initialized!");
    await dataSource.runMigrations();
    console.log("Migrations has been executed!");
    return dataSource;
  } catch (error) {
    console.log("Error during Data Source initialization", error);
  }
};
