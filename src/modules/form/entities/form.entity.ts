import { FormationAcademic } from "@modules/formation-academic/entities/formation-academic.entity";
import { ProfessionalExperience } from "@modules/professional-experience/entities/professional-experience.entity";
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
import {
  ResumeDeliveryFormat,
  ResumeStyleOptions,
  ResumeVisualStylePreference,
} from "../constants";

type LanguagesAndFluency = {
  index: number;
  liguage: string;
  fluence: "basic" | "intermediary" | "advanced" | "fluent";
};

@Entity({ name: "form" })
export class Form {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ name: "user_id", type: "uuid" })
  userId: string;

  @Column({ name: "name" })
  name: string;

  @Column({ name: "email" })
  email: string;

  @Column({ name: "cpf" })
  cpf: string;

  @Column({ name: "phone" })
  phone: string;

  @Column({
    name: "resume_style_options",
    type: "text",
    array: true,
    default: [],
  })
  resumeStyleOptions: ResumeStyleOptions[];

  @Column({
    name: "resume_style_preference",
    type: "text",
    array: true,
    default: [],
  })
  resumeStylePreference: ResumeVisualStylePreference[];

  @Column({
    name: "resume_delivery_format",
    type: "text",
    array: true,
    default: [],
  })
  resumeDeliveryPreference: ResumeDeliveryFormat[];

  @Column({ name: "resume_especification", nullable: true })
  resumeEspecification: string;

  @Column({ name: "desired_position" })
  desiredPosition: string;

  @Column({ name: "skills_and_experience", nullable: true })
  skillsAndExperience: string;

  @Column({ name: "career_goals", nullable: true })
  careerGoals: string;

  @Column({ name: "notable_achievements", nullable: true })
  notableAchievements: string;

  @Column({ name: "specifications_or_preferences", nullable: true })
  specificationsOrPreferences: string;

  // Objetivo profissional
  @Column({ name: "professional_position" })
  professionalPosition: string;

  @Column({ name: "desired_position_objective", nullable: true })
  desiredPositionObjective: string;

  @Column({ name: "key_goal_or_achievement", nullable: true })
  keyGoalOrAchievement: string;

  @Column({ name: "additional_information", nullable: true })
  additionalInformation: string;

  // Habilidades e idiomas
  @Column({ name: "skills_description", type: "text" })
  skillsDescription: string;

  @Column({ name: "languages_and_fluency", type: "jsonb", nullable: true })
  languagesAndFluency: LanguagesAndFluency[];

  @Column({ name: "other_information", type: "text", nullable: true })
  otherInformation: string;

  @ManyToOne(() => User, (user) => user.forms, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "user_id" })
  user: User;

  // Formação acadêmica
  @OneToMany(
    () => FormationAcademic,
    (formationAcademic) => formationAcademic.form,
    {
      cascade: true,
    }
  )
  formationAcademics: FormationAcademic[];

  // Experiência profissional
  @OneToMany(() => ProfessionalExperience, (experience) => experience.form, {
    cascade: true,
  })
  professionalExperiences: ProfessionalExperience[];

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;

  @DeleteDateColumn({ name: "deleted_at" })
  deletedAt: Date;
}
