import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from "typeorm";

@Entity("formation_academic")
export class FormationAcademic {
  @PrimaryGeneratedColumn("uuid")
  id: string;

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

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;

  @DeleteDateColumn({ name: "deleted_at" })
  deletedAt: Date;
}
