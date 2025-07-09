import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableFormationAcademic1750719983604 implements MigrationInterface {
    name = 'CreateTableFormationAcademic1750719983604'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "formation_academic" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "education_level" character varying NOT NULL, "course_name" character varying, "institution_name" character varying, "start_date" date NOT NULL, "end_date" date, "is_current" boolean NOT NULL, "locked_unfinished" boolean, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_6e61acdcb8449e806e8a8381d56" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "formation_academic"`);
    }

}
