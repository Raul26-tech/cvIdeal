import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateAnswerTable1752079194414 implements MigrationInterface {
  name = "CreateAnswerTable1752079194414";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "answers" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "order" character varying NOT NULL, "type" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_9c32cec6c71e06da0254f2226c6" PRIMARY KEY ("id"))`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "answers"`);
  }
}
