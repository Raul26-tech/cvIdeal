import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateQuestionEntity1748564558135 implements MigrationInterface {
    name = 'CreateQuestionEntity1748564558135'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "questions" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "cpf" character varying NOT NULL, "phone" character varying NOT NULL, "resume_style_options" text array NOT NULL DEFAULT '{}', "resume_style_preference" text array NOT NULL DEFAULT '{}', "resume_delivery_format" text array NOT NULL DEFAULT '{}', "resume_especification" character varying, "desired_position" character varying NOT NULL, "skills_and_experience" character varying, "career_goals" character varying, "notable_achievements" character varying, "specifications_or_preferences" character varying, "professional_position" character varying NOT NULL, "professional_experience" character varying, "desired_position_objective" character varying, "key_goal_or_achievement" character varying, "additional_information" character varying, "skills_description" text NOT NULL, "languages_and_fluency" jsonb, "other_information" text, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_08a6d4b0f49ff300bf3a0ca60ac" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "questions"`);
    }

}
