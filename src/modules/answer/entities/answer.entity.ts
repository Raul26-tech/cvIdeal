import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from "typeorm";

@Entity({ name: "answers" })
export class Answer {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ name: "order" })
  order: string;

  @Column({ name: "type" })
  type: string;

  // haverá um relacionamento com a entidade question, anwser_content e form

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;

  @DeleteDateColumn({ name: "deleted_at" })
  deletedAt: Date;
}
