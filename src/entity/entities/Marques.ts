import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("UNIQ_67884F2D989D9B62", ["slug"], { unique: true })
@Index("IDX_67884F2DE17A376A", ["tailleslanguagesId"], {})
@Entity("marques", { schema: "testnestjs2" })
export class Marques {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", length: 100 })
  name: string;

  @Column("varchar", { name: "slug", unique: true, length: 100 })
  slug: string;

  @Column("varchar", { name: "website", nullable: true, length: 199 })
  website: string | null;

  @Column("varchar", { name: "filename", nullable: true, length: 199 })
  filename: string | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("int", { name: "tailleslanguages_id", nullable: true })
  tailleslanguagesId: number | null;
}
