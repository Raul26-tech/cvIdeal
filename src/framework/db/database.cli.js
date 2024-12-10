const { DataSource } = require("typeorm");

const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_EXTERNAL_HOST,
  port: Number(process.env.DB_EXTERNAL_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: false,
  logging: true,
  entities: ["dist/modules/**/*.js"],
  migrations: ["dist/framework/db/http/migrations/*.js"],
  cli: {
    migrationsDir: "src/framework/db/http/migrations",
  },
});

module.exports = AppDataSource;
