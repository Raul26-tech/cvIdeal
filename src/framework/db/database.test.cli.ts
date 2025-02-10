import { DataSource } from "typeorm";
import { config } from "dotenv";

config();

export const AppDataSourceTest = new DataSource({
  type: "postgres",
  host: process.env.DB_TEST_EXTERNAL_HOST,
  port: Number(process.env.DB_TEST_EXTERNAL_PORT),
  username: process.env.DB_TEST_USERNAME,
  password: process.env.DB_TEST_PASSWORD,
  database: process.env.DB_TEST_DATABASE,
  synchronize: false,
  logging: true,
  entities: ["dist/**/*.entity.js"],
  migrations: ["dist/framework/db/migrations/*.js"],
});
