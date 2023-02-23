import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("UNIQ_2074E575989D9B62", ["slug"], { unique: true })
@Entity("pages", { schema: "testnestjs2" })
export class Pages {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", length: 100 })
  name: string;

  @Column("varchar", { name: "slug", unique: true, length: 100 })
  slug: string;

  @Column("varchar", { name: "filename", nullable: true, length: 255 })
  filename: string | null;

  @Column("longtext", { name: "content", nullable: true })
  content: string | null;

  @Column("datetime", { name: "created_at" })
  createdAt: Date;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("tinyint", { name: "online", width: 1 })
  online: boolean;
}
