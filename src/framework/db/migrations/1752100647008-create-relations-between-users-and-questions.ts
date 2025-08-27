import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateRelationsBetweenUsersAndQuestions1752100647008
  implements MigrationInterface
{
  name = "CreateRelationsBetweenUsersAndQuestions1752100647008";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "questions" ADD CONSTRAINT "FK_5800cd25a5888174b2c40e67d4b" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "questions" DROP CONSTRAINT "FK_5800cd25a5888174b2c40e67d4b"`
    );
  }
}
