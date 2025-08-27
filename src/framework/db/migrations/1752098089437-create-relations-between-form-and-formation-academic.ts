import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateRelationsBetweenFormAndFormationAcademic1752098089437
  implements MigrationInterface
{
  name = "CreateRelationsBetweenFormAndFormationAcademic1752098089437";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "formation_academic" ADD "form_id" uuid NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE "formation_academic" ADD CONSTRAINT "FK_a1eda70bdc3f377e42ec2529b39" FOREIGN KEY ("form_id") REFERENCES "form"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "formation_academic" DROP CONSTRAINT "FK_a1eda70bdc3f377e42ec2529b39"`
    );
    await queryRunner.query(
      `ALTER TABLE "formation_academic" DROP COLUMN "form_id"`
    );
  }
}
