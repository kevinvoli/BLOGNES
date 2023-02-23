import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("IDX_FDC9C00265B48705", ["geozonesId"], {})
@Entity("modaliteslivraisons", { schema: "testnestjs2" })
export class Modaliteslivraisons {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "geozones_id", nullable: true })
  geozonesId: number | null;

  @Column("double", { name: "lowweights", precision: 22 })
  lowweights: number;

  @Column("double", { name: "hightweights", precision: 22 })
  hightweights: number;

  @Column("int", { name: "totalht", nullable: true })
  totalht: number | null;

  @Column("int", { name: "totaltva", nullable: true })
  totaltva: number | null;

  @Column("int", { name: "totalttc", nullable: true })
  totalttc: number | null;

  @Column("tinyint", { name: "supplementspardemikg", nullable: true, width: 1 })
  supplementspardemikg: boolean | null;

  @Column("tinyint", { name: "supplementsparunkg", nullable: true, width: 1 })
  supplementsparunkg: boolean | null;
}
