import { Question } from "@modules/question/entities/question.entity";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { AnswerContent } from "./answer-content.entity";
import { Form } from "@modules/form/entities/form.entity";

@Entity({ name: "answers" })
export class Answer {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ name: "question_id", type: "uuid" })
  questionId: string;

  @Column({ name: "form_id", type: "uuid" })
  formId: string;

  @Column({ name: "order" })
  order: string;

  @Column({ name: "type" })
  type: string;

  @ManyToOne(() => Question, (question) => question.answers)
  @JoinColumn({ name: "question_id" })
  question: Question;

  @OneToMany(() => AnswerContent, (answerContent) => answerContent.answer, {
    cascade: true,
  })
  answerContents: AnswerContent[];

  @ManyToOne(() => Form, (form) => form.answers)
  @JoinColumn({ name: "form_id" })
  form: Form;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;

  @DeleteDateColumn({ name: "deleted_at" })
  deletedAt: Date;
}
