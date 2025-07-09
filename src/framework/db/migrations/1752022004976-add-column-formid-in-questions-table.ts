import { MigrationInterface, QueryRunner } from "typeorm";

export class AddColumnFormidInQuestionsTable1752022004976
  implements MigrationInterface
{
  name = "AddColumnFormidInQuestionsTable1752022004976";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "questions" ADD "form_id" character varying NOT NULL`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "questions" DROP COLUMN "form_id"`);
  }
}
