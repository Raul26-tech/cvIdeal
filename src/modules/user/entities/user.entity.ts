import { Form } from "@modules/form/entities/form.entity";
import { FormationAcademic } from "@modules/formation-academic/entities/formation-academic.entity";
import { ProfessionalExperience } from "@modules/professional-experience/entities/professional-experience.entity";
import { Question } from "@modules/question/entities/question.entity";
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

type userType = "user" | "root" | "adm";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ name: "name", type: "varchar" })
  name: string;

  @Column({ name: "cpf", type: "varchar" })
  cpf: string;

  @Column({ name: "email", type: "varchar" })
  email: string;

  @Column({ name: "password", type: "varchar" })
  password: string;

  @Column({ name: "status", type: "varchar" })
  status: "active" | "inactive";

  @Column({ name: "phone", type: "varchar" })
  phone: string;

  @Column({ name: "type", type: "varchar" })
  type: userType;

  @OneToMany(() => Form, (form) => form.user)
  forms: Form[];

  @OneToMany(() => Question, (questions) => questions.user)
  questions: Question[];

  @OneToMany(
    () => FormationAcademic,
    (formationAcademic) => formationAcademic.user
  )
  formationAcademic: FormationAcademic[];

  @OneToMany(
    () => ProfessionalExperience,
    (professionalExperience) => professionalExperience.user
  )
  professionalExperiences: ProfessionalExperience[];

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;

  @DeleteDateColumn({ name: "deleted_at" })
  deletedAt: Date;
}
