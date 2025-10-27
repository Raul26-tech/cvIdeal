import { MigrationInterface, QueryRunner } from "typeorm";

export class RemoveFieldsTheProfessionalExperienceAndFormationAcademic1758670431252 implements MigrationInterface {
    name = 'RemoveFieldsTheProfessionalExperienceAndFormationAcademic1758670431252'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "formation_academic" DROP COLUMN "question_id"`);
        await queryRunner.query(`ALTER TABLE "professional_experiences" DROP COLUMN "question_id"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "professional_experiences" ADD "question_id" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "formation_academic" ADD "question_id" uuid NOT NULL`);
    }

}
