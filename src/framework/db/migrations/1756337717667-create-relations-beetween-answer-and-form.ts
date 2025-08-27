import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateRelationsBeetweenAnswerAndForm1756337717667 implements MigrationInterface {
    name = 'CreateRelationsBeetweenAnswerAndForm1756337717667'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "answers" ADD "form_id" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "answers" ADD CONSTRAINT "FK_0ab51594da65e8e8e65d80e40e4" FOREIGN KEY ("form_id") REFERENCES "form"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "answers" DROP CONSTRAINT "FK_0ab51594da65e8e8e65d80e40e4"`);
        await queryRunner.query(`ALTER TABLE "answers" DROP COLUMN "form_id"`);
    }

}
