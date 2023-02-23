import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("abonnes", { schema: "testnestjs2" })
export class Abonnes {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "email", length: 255 })
  email: string;

  @Column("datetime", { name: "created_at" })
  createdAt: Date;

  @Column("tinyint", { name: "active", width: 1, default: () => "'0'" })
  active: boolean;
}
