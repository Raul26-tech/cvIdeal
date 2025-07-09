import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity({ name: "question_options" })
export class QuestionOptions {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ name: "question_id", type: "uuid" })
  questionId: string;

  @Column({ name: "value" })
  value: string;

  @Column({ name: "order" })
  order: number;

  // Relacionamento com questions

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;

  @DeleteDateColumn({ name: "deleted_at" })
  deletedAt: Date;
}
