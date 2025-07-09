import {
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity({ name: "answer_content" })
export class AnswerContent {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ name: "order" })
  order: number;

  @Column({ name: "value" })
  value: string;

  @Column({ name: "answer_id", type: "uuid" })
  answerId: string;

  // Haverá um relacionamento com a entidade de Answer

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;

  @DeleteDateColumn({ name: "deleted_at" })
  deletedAt: Date;
}
