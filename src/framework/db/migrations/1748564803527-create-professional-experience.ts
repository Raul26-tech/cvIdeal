import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateProfessionalExperience1748564803527 implements MigrationInterface {
    name = 'CreateProfessionalExperience1748564803527'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "professional_experiences" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "company_name" character varying NOT NULL, "job_title" character varying NOT NULL, "start_date" date NOT NULL, "end_date" date, "is_current" boolean NOT NULL, "responsibilities" text NOT NULL, "key_achievements" text NOT NULL, "tools_and_technologies" text NOT NULL, "additional_description" text, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_55d059b6555c89f27f2cf9dcfb3" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "professional_experiences"`);
    }

}
