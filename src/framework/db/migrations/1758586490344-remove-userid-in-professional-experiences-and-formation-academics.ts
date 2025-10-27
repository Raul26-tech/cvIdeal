import { MigrationInterface, QueryRunner } from "typeorm";

export class RemoveUseridInProfessionalExperiencesAndFormationAcademics1758586490344 implements MigrationInterface {
    name = 'RemoveUseridInProfessionalExperiencesAndFormationAcademics1758586490344'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "formation_academic" DROP CONSTRAINT "FK_bbc787af6ef7dbbe16d5457bc79"`);
        await queryRunner.query(`ALTER TABLE "professional_experiences" DROP CONSTRAINT "FK_3f4229e675f64054079df6c383c"`);
        await queryRunner.query(`ALTER TABLE "formation_academic" DROP COLUMN "user_id"`);
        await queryRunner.query(`ALTER TABLE "professional_experiences" DROP COLUMN "user_id"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "professional_experiences" ADD "user_id" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "formation_academic" ADD "user_id" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "professional_experiences" ADD CONSTRAINT "FK_3f4229e675f64054079df6c383c" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "formation_academic" ADD CONSTRAINT "FK_bbc787af6ef7dbbe16d5457bc79" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
