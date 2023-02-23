import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("IDX_645E1D96A76ED395", ["userId"], {})
@Index("IDX_645E1D968BF5C2E6", ["commandesId"], {})
@Index("IDX_645E1D96FBDC98C7", ["commandesannulationsId"], {})
@Entity("demandeannulations", { schema: "testnestjs2" })
export class Demandeannulations {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "user_id", nullable: true })
  userId: number | null;

  @Column("int", { name: "commandes_id", nullable: true })
  commandesId: number | null;

  @Column("longtext", { name: "motifs", nullable: true })
  motifs: string | null;

  @Column("longtext", {
    name: "products",
    nullable: true,
    comment: "(DC2Type:array)",
  })
  products: string | null;

  @Column("tinyint", { name: "is_taille", nullable: true, width: 1 })
  isTaille: boolean | null;

  @Column("tinyint", {
    name: "is_change_modepaiement",
    nullable: true,
    width: 1,
  })
  isChangeModepaiement: boolean | null;

  @Column("tinyint", { name: "is_tromper", nullable: true, width: 1 })
  isTromper: boolean | null;

  @Column("tinyint", { name: "is_change_avis", nullable: true, width: 1 })
  isChangeAvis: boolean | null;

  @Column("tinyint", { name: "is_autre", nullable: true, width: 1 })
  isAutre: boolean | null;

  @Column("tinyint", { name: "is_active", nullable: true, width: 1 })
  isActive: boolean | null;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("int", { name: "commandesannulations_id", nullable: true })
  commandesannulationsId: number | null;
}
