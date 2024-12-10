const { DataSource } = require("typeorm");

const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
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

const connectDatabase = async () => {
  try {
    // Iniciando as migrations
    const dataSource = await AppDataSource.initialize();
    console.log("Data Source has been initialized!");
    await dataSource.runMigrations();
    console.log("Migrations has been executed!");
  } catch (error) {
    console.log("Error during Data Source initialization", error);
  }
};

module.exports = { AppDataSource, connectDatabase };
