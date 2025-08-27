import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateRelationsBetweenFormAndFormationExperiences1752098720941
  implements MigrationInterface
{
  name = "CreateRelationsBetweenFormAndFormationExperiences1752098720941";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "professional_experiences" ADD "user_id" uuid NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE "professional_experiences" ADD "form_id" uuid NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE "professional_experiences" ADD CONSTRAINT "FK_ef9bf59b47f39efe4eaae73a71e" FOREIGN KEY ("form_id") REFERENCES "form"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "professional_experiences" DROP CONSTRAINT "FK_ef9bf59b47f39efe4eaae73a71e"`
    );
    await queryRunner.query(
      `ALTER TABLE "professional_experiences" DROP COLUMN "form_id"`
    );
    await queryRunner.query(
      `ALTER TABLE "professional_experiences" DROP COLUMN "user_id"`
    );
  }
}
