import { Answer } from "@modules/answer/entities/answer.entity";
import { FormationAcademic } from "@modules/formation-academic/entities/formation-academic.entity";
import { ProfessionalExperience } from "@modules/professional-experience/entities/professional-experience.entity";
import { Question } from "@modules/question/entities/question.entity";
import { User } from "@modules/user/entities/user.entity";
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity({ name: "form" })
export class Form {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ name: "user_id", type: "uuid" })
  userId: string;

  @ManyToOne(() => User, (user) => user.forms, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "user_id" })
  user: User;

  @OneToMany(
    () => FormationAcademic,
    (formationAcademic) => formationAcademic.form,
    {
      cascade: true,
    }
  )
  formationAcademics: FormationAcademic[];

  @OneToMany(() => ProfessionalExperience, (experience) => experience.form, {
    cascade: true,
  })
  professionalExperiences: ProfessionalExperience[];

  @OneToMany(() => Question, (questions) => questions.form, {
    cascade: true,
  })
  questions: Question[];

  @OneToMany(() => Answer, (answer) => answer.form)
  answers: Answer[];

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;

  @DeleteDateColumn({ name: "deleted_at" })
  deletedAt: Date;
}
