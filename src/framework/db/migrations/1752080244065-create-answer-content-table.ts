import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateAnswerContentTable1752080244065 implements MigrationInterface {
    name = 'CreateAnswerContentTable1752080244065'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "answer_content" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "order" integer NOT NULL, "value" character varying NOT NULL, "answer_id" uuid NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_9574d4163cae20da0f7b62485a6" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "answer_content"`);
    }

}
