import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("IDX_3AF34668A977936C", ["treeRoot"], {})
@Index("IDX_3AF34668727ACA70", ["parentId"], {})
@Entity("categories", { schema: "testnestjs2" })
export class Categories {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "tree_root", nullable: true })
  treeRoot: number | null;

  @Column("int", { name: "parent_id", nullable: true })
  parentId: number | null;

  @Column("varchar", { name: "name", length: 255 })
  name: string;

  @Column("varchar", { name: "slug", length: 255 })
  slug: string;

  @Column("varchar", { name: "filename", nullable: true, length: 255 })
  filename: string | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("int", { name: "lft" })
  lft: number;

  @Column("int", { name: "lvl" })
  lvl: number;

  @Column("int", { name: "rgt" })
  rgt: number;

  @Column("varchar", { name: "alt", nullable: true, length: 255 })
  alt: string | null;

  @Column("double", {
    name: "weights",
    nullable: true,
    precision: 22,
    default: () => "'0'",
  })
  weights: number | null;

  @Column("int", { name: "ordre", default: () => "'0'" })
  ordre: number;

  @Column("tinyint", { name: "solde", nullable: true, width: 1 })
  solde: boolean | null;
}
