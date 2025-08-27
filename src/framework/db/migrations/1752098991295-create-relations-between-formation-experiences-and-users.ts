import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateRelationsBetweenFormationExperiencesAndUsers1752098991295
  implements MigrationInterface
{
  name = "CreateRelationsBetweenFormationExperiencesAndUsers1752098991295";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "professional_experiences" ADD CONSTRAINT "FK_3f4229e675f64054079df6c383c" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "professional_experiences" DROP CONSTRAINT "FK_3f4229e675f64054079df6c383c"`
    );
  }
}
