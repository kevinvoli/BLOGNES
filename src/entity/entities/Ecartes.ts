import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("UNIQ_2D9888CA2D2CAD2", ["codecoupon"], { unique: true })
@Index("IDX_2D9888CA6C8A81A9", ["productsId"], {})
@Index("IDX_2D9888CA8BF5C2E6", ["commandesId"], {})
@Index("user_id", ["userId"], {})
@Entity("ecartes", { schema: "testnestjs2" })
export class Ecartes {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "products_id", nullable: true })
  productsId: number | null;

  @Column("varchar", { name: "nomprenoms", length: 255 })
  nomprenoms: string;

  @Column("varchar", { name: "nomprenomsbeneficiaire", length: 255 })
  nomprenomsbeneficiaire: string;

  @Column("varchar", { name: "emailbeneficiaire", length: 255 })
  emailbeneficiaire: string;

  @Column("longtext", { name: "message", nullable: true })
  message: string | null;

  @Column("datetime", { name: "created_at" })
  createdAt: Date;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("varchar", { name: "codecoupon", unique: true, length: 30 })
  codecoupon: string;

  @Column("tinyint", { name: "couponused", width: 1, default: () => "'0'" })
  couponused: boolean;

  @Column("int", { name: "commandes_id", nullable: true })
  commandesId: number | null;

  @Column("double", {
    name: "total_relicat",
    nullable: true,
    precision: 22,
    default: () => "'0'",
  })
  totalRelicat: number | null;

  @Column("double", {
    name: "montant",
    nullable: true,
    precision: 22,
    default: () => "'0'",
  })
  montant: number | null;

  @Column("int", { name: "user_id", nullable: true })
  userId: number | null;
}
