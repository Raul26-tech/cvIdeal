import { MigrationInterface, QueryRunner } from "typeorm";

export class AddFieldsInFormEntity1757546615369 implements MigrationInterface {
    name = 'AddFieldsInFormEntity1757546615369'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "formation_academic" ADD "question_id" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "professional_experiences" ADD "question_id" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "form" ADD "user_id" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "form" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "form" ADD "email" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "form" ADD "cpf" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "form" ADD "phone" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "form" ADD "resume_style_options" text array NOT NULL DEFAULT '{}'`);
        await queryRunner.query(`ALTER TABLE "form" ADD "resume_style_preference" text array NOT NULL DEFAULT '{}'`);
        await queryRunner.query(`ALTER TABLE "form" ADD "resume_delivery_format" text array NOT NULL DEFAULT '{}'`);
        await queryRunner.query(`ALTER TABLE "form" ADD "resume_especification" character varying`);
        await queryRunner.query(`ALTER TABLE "form" ADD "desired_position" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "form" ADD "skills_and_experience" character varying`);
        await queryRunner.query(`ALTER TABLE "form" ADD "career_goals" character varying`);
        await queryRunner.query(`ALTER TABLE "form" ADD "notable_achievements" character varying`);
        await queryRunner.query(`ALTER TABLE "form" ADD "specifications_or_preferences" character varying`);
        await queryRunner.query(`ALTER TABLE "form" ADD "professional_position" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "form" ADD "desired_position_objective" character varying`);
        await queryRunner.query(`ALTER TABLE "form" ADD "key_goal_or_achievement" character varying`);
        await queryRunner.query(`ALTER TABLE "form" ADD "additional_information" character varying`);
        await queryRunner.query(`ALTER TABLE "form" ADD "skills_description" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "form" ADD "languages_and_fluency" jsonb`);
        await queryRunner.query(`ALTER TABLE "form" ADD "other_information" text`);
        await queryRunner.query(`ALTER TABLE "form" ADD CONSTRAINT "FK_6555e3b729b4c23e71726286e7a" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "form" DROP CONSTRAINT "FK_6555e3b729b4c23e71726286e7a"`);
        await queryRunner.query(`ALTER TABLE "form" DROP COLUMN "other_information"`);
        await queryRunner.query(`ALTER TABLE "form" DROP COLUMN "languages_and_fluency"`);
        await queryRunner.query(`ALTER TABLE "form" DROP COLUMN "skills_description"`);
        await queryRunner.query(`ALTER TABLE "form" DROP COLUMN "additional_information"`);
        await queryRunner.query(`ALTER TABLE "form" DROP COLUMN "key_goal_or_achievement"`);
        await queryRunner.query(`ALTER TABLE "form" DROP COLUMN "desired_position_objective"`);
        await queryRunner.query(`ALTER TABLE "form" DROP COLUMN "professional_position"`);
        await queryRunner.query(`ALTER TABLE "form" DROP COLUMN "specifications_or_preferences"`);
        await queryRunner.query(`ALTER TABLE "form" DROP COLUMN "notable_achievements"`);
        await queryRunner.query(`ALTER TABLE "form" DROP COLUMN "career_goals"`);
        await queryRunner.query(`ALTER TABLE "form" DROP COLUMN "skills_and_experience"`);
        await queryRunner.query(`ALTER TABLE "form" DROP COLUMN "desired_position"`);
        await queryRunner.query(`ALTER TABLE "form" DROP COLUMN "resume_especification"`);
        await queryRunner.query(`ALTER TABLE "form" DROP COLUMN "resume_delivery_format"`);
        await queryRunner.query(`ALTER TABLE "form" DROP COLUMN "resume_style_preference"`);
        await queryRunner.query(`ALTER TABLE "form" DROP COLUMN "resume_style_options"`);
        await queryRunner.query(`ALTER TABLE "form" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "form" DROP COLUMN "cpf"`);
        await queryRunner.query(`ALTER TABLE "form" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "form" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "form" DROP COLUMN "user_id"`);
        await queryRunner.query(`ALTER TABLE "professional_experiences" DROP COLUMN "question_id"`);
        await queryRunner.query(`ALTER TABLE "formation_academic" DROP COLUMN "question_id"`);
    }

}
