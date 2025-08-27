import { MigrationInterface, QueryRunner } from "typeorm";

export class GenerateRelationBetweenProfessionalExperienceAndFormationAcademicWithQuestionEntity1755301801439 implements MigrationInterface {
    name = 'GenerateRelationBetweenProfessionalExperienceAndFormationAcademicWithQuestionEntity1755301801439'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "questions" DROP COLUMN "professional_experience"`);
        await queryRunner.query(`ALTER TABLE "professional_experiences" ADD "question_id" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "formation_academic" ADD "question_id" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "professional_experiences" ADD CONSTRAINT "FK_706c3ab335aadc671762df3e992" FOREIGN KEY ("question_id") REFERENCES "questions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "formation_academic" ADD CONSTRAINT "FK_495adae81a0b56ad8583427ce48" FOREIGN KEY ("question_id") REFERENCES "questions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "formation_academic" DROP CONSTRAINT "FK_495adae81a0b56ad8583427ce48"`);
        await queryRunner.query(`ALTER TABLE "professional_experiences" DROP CONSTRAINT "FK_706c3ab335aadc671762df3e992"`);
        await queryRunner.query(`ALTER TABLE "formation_academic" DROP COLUMN "question_id"`);
        await queryRunner.query(`ALTER TABLE "professional_experiences" DROP COLUMN "question_id"`);
        await queryRunner.query(`ALTER TABLE "questions" ADD "professional_experience" character varying`);
    }

}
