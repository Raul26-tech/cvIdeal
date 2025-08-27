import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateRelationsBetweenFormAndUsers1752081996159
  implements MigrationInterface
{
  name = "CreateRelationsBetweenFormAndUsers1752081996159";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "form" ADD CONSTRAINT "FK_6555e3b729b4c23e71726286e7a" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "form" DROP CONSTRAINT "FK_6555e3b729b4c23e71726286e7a"`
    );
  }
}
