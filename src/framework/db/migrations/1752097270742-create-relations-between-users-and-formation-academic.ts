import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateRelationsBetweenUsersAndFormationAcademic1752097270742
  implements MigrationInterface
{
  name = "CreateRelationsBetweenUsersAndFormationAcademic1752097270742";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "formation_academic" ADD "user_id" uuid NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE "formation_academic" ADD CONSTRAINT "FK_bbc787af6ef7dbbe16d5457bc79" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "formation_academic" DROP CONSTRAINT "FK_bbc787af6ef7dbbe16d5457bc79"`
    );
    await queryRunner.query(
      `ALTER TABLE "formation_academic" DROP COLUMN "user_id"`
    );
  }
}
