import { MigrationInterface, QueryRunner } from "typeorm";

export class AddColumnCpfInUserEntity1739315890454
  implements MigrationInterface
{
  name = "AddColumnCpfInUserEntity1739315890454";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" ADD "cpf" character varying NOT NULL`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "cpf"`);
  }
}
