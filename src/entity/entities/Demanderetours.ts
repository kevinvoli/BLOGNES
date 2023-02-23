import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("IDX_ECFD11EAA76ED395", ["userId"], {})
@Index("IDX_ECFD11EA8BF5C2E6", ["commandesId"], {})
@Entity("demanderetours", { schema: "testnestjs2" })
export class Demanderetours {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "user_id", nullable: true })
  userId: number | null;

  @Column("int", { name: "commandes_id", nullable: true })
  commandesId: number | null;

  @Column("longtext", { name: "motifs" })
  motifs: string;

  @Column("tinyint", { name: "active", width: 1 })
  active: boolean;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("longtext", {
    name: "products",
    nullable: true,
    comment: "(DC2Type:array)",
  })
  products: string | null;

  @Column("tinyint", { name: "annuler", width: 1 })
  annuler: boolean;

  @Column("datetime", {
    name: "cancel_at",
    nullable: true,
    comment: "(DC2Type:datetime_immutable)",
  })
  cancelAt: Date | null;

  @Column("varchar", { name: "origine", length: 255 })
  origine: string;

  @Column("varchar", { name: "pays", length: 255 })
  pays: string;

  @Column("varchar", { name: "etat", length: 255 })
  etat: string;

  @Column("varchar", { name: "ville", length: 255 })
  ville: string;

  @Column("longtext", { name: "adresse" })
  adresse: string;

  @Column("varchar", { name: "codepostal", length: 255 })
  codepostal: string;

  @Column("varchar", { name: "email", length: 255 })
  email: string;

  @Column("varchar", { name: "contact", length: 255 })
  contact: string;

  @Column("tinyint", { name: "is_non_conforme", nullable: true, width: 1 })
  isNonConforme: boolean | null;

  @Column("tinyint", { name: "is_defectueux", nullable: true, width: 1 })
  isDefectueux: boolean | null;
}
