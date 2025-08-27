import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateRelationsBetweenFormAndQuestions1752100051098 implements MigrationInterface {
    name = 'CreateRelationsBetweenFormAndQuestions1752100051098'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "questions" ADD "user_id" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "questions" DROP COLUMN "form_id"`);
        await queryRunner.query(`ALTER TABLE "questions" ADD "form_id" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "questions" ADD CONSTRAINT "FK_a40e5497291ddbe799af622efa9" FOREIGN KEY ("form_id") REFERENCES "form"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "questions" DROP CONSTRAINT "FK_a40e5497291ddbe799af622efa9"`);
        await queryRunner.query(`ALTER TABLE "questions" DROP COLUMN "form_id"`);
        await queryRunner.query(`ALTER TABLE "questions" ADD "form_id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "questions" DROP COLUMN "user_id"`);
    }

}
