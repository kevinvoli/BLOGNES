import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("IDX_F08FC65CA76ED395", ["userId"], {})
@Entity("logs", { schema: "testnestjs2" })
export class Logs {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "user_id", nullable: true })
  userId: number | null;

  @Column("varchar", { name: "content", length: 500 })
  content: string;

  @Column("varchar", { name: "action", length: 255 })
  action: string;

  @Column("varchar", { name: "color", length: 20 })
  color: string;

  @Column("varchar", {
    name: "icon",
    nullable: true,
    length: 255,
    default: () => "'NULL'",
  })
  icon: string | null;

  @Column("datetime", { name: "created_at" })
  createdAt: Date;
}
