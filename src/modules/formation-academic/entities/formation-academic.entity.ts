import { Form } from "@modules/form/entities/form.entity";
import { User } from "@modules/user/entities/user.entity";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";

@Entity("formation_academic")
export class FormationAcademic {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ name: "user_id", type: "uuid" })
  userId: string;

  @Column({ name: "form_id", type: "uuid" })
  formId: string;

  @Column({ name: "question_id", type: "uuid" })
  questionId: string;

  @Column({ name: "education_level" })
  educationLevel: string;

  @Column({ name: "course_name", nullable: true })
  courseName: string;

  @Column({ name: "institution_name", nullable: true })
  institutionName: string;

  @Column({ name: "start_date", type: "date" })
  startDate: Date;

  @Column({ name: "end_date", type: "date", nullable: true })
  endDate?: Date;

  @Column({ name: "is_current" })
  isCurrent: boolean;

  @Column({ name: "locked_unfinished", nullable: true })
  lockedUnfinished: boolean;

  @ManyToOne(() => User, (user) => user)
  @JoinColumn({ name: "user_id" })
  user: User;

  @ManyToOne(() => Form, (form) => form.formationAcademics)
  @JoinColumn({ name: "form_id" })
  form: Form;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;

  @DeleteDateColumn({ name: "deleted_at" })
  deletedAt: Date;
}
