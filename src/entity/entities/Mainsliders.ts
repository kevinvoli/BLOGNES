import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("mainsliders", { schema: "testnestjs2" })
export class Mainsliders {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", length: 255 })
  name: string;

  @Column("varchar", { name: "url", nullable: true, length: 255 })
  url: string | null;

  @Column("varchar", { name: "filename", nullable: true, length: 255 })
  filename: string | null;

  @Column("tinyint", { name: "online", nullable: true, width: 1 })
  online: boolean | null;

  @Column("datetime", { name: "created_at" })
  createdAt: Date;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("int", { name: "ordre", default: () => "'0'" })
  ordre: number;
}
