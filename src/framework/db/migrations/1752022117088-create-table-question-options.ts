import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableQuestionOptions1752022117088
  implements MigrationInterface
{
  name = "CreateTableQuestionOptions1752022117088";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "question_options" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "question_id" uuid NOT NULL, "value" character varying NOT NULL, "order" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_13be20e51c0738def32f00cf7d5" PRIMARY KEY ("id"))`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "question_options"`);
  }
}
