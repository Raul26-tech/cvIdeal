import { MigrationInterface, QueryRunner } from "typeorm";

export class AddFieldStatusInUserEntity1745627099413
  implements MigrationInterface
{
  name = "AddFieldStatusInUserEntity1745627099413";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" ADD "type" character varying NOT NULL`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "type"`);
  }
}
