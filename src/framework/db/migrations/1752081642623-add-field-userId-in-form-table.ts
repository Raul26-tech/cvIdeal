import { MigrationInterface, QueryRunner } from "typeorm";

export class AddFieldUserIdInFormTable1752081642623 implements MigrationInterface {
    name = 'AddFieldUserIdInFormTable1752081642623'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "form" ADD "user_id" uuid NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "form" DROP COLUMN "user_id"`);
    }

}
