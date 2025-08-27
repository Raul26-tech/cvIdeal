import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateRelationsBeetweenQuestionAnswerAndAnswerContent1756337276727 implements MigrationInterface {
    name = 'CreateRelationsBeetweenQuestionAnswerAndAnswerContent1756337276727'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "answers" ADD "question_id" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "answer_content" ADD CONSTRAINT "FK_745f02cdb3b2de757309a46aef2" FOREIGN KEY ("answer_id") REFERENCES "answers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "answers" ADD CONSTRAINT "FK_677120094cf6d3f12df0b9dc5d3" FOREIGN KEY ("question_id") REFERENCES "questions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "answers" DROP CONSTRAINT "FK_677120094cf6d3f12df0b9dc5d3"`);
        await queryRunner.query(`ALTER TABLE "answer_content" DROP CONSTRAINT "FK_745f02cdb3b2de757309a46aef2"`);
        await queryRunner.query(`ALTER TABLE "answers" DROP COLUMN "question_id"`);
    }

}
