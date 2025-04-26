import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
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

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;

  @DeleteDateColumn({ name: "deleted_at" })
  deletedAt: Date;
}
