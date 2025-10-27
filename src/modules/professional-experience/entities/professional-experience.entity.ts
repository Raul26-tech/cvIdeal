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

@Entity("professional_experiences")
export class ProfessionalExperience {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ name: "form_id", type: "uuid" })
  formId: string;

  @Column({ name: "company_name" })
  companyName: string;

  @Column({ name: "job_title" })
  jobTitle: string;

  @Column({ name: "start_date", type: "date" })
  startDate: string;

  @Column({ name: "end_date", type: "date", nullable: true })
  endDate?: string;

  @Column({ name: "is_current" })
  isCurrent: boolean;

  @Column({ name: "responsibilities", type: "text" })
  responsibilities: string;

  @Column({ name: "key_achievements", type: "text" })
  keyAchievements: string;

  @Column({ name: "tools_and_technologies", type: "text" })
  toolsAndTechnologies: string;

  @Column({ name: "additional_description", type: "text", nullable: true })
  additionalDescription?: string;

  @ManyToOne(() => Form, (form) => form.professionalExperiences)
  @JoinColumn({ name: "form_id" })
  form: Form;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;

  @DeleteDateColumn({ name: "deleted_at" })
  deletedAt: Date;
}
