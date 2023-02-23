import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("IDX_35D4282CA76ED395", ["userId"], {})
@Index("IDX_35D4282C6BF700BD", ["statusId"], {})
@Index("IDX_35D4282CA33E2D84", ["currenciesId"], {})
@Index("IDX_35D4282C65B48705", ["geozonesId"], {})
@Index("IDX_35D4282CACFB3D99", ["livraisonsId"], {})
@Index("IDX_35D4282CD7F3FEE", ["facturationsId"], {})
@Entity("commandes", { schema: "testnestjs2" })
export class Commandes {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "reference", nullable: true, length: 20 })
  reference: string | null;

  @Column("datetime", { name: "created_at" })
  createdAt: Date;

  @Column("date", { name: "date" })
  date: string;

  @Column("double", {
    name: "totalht",
    nullable: true,
    precision: 22,
    default: () => "'0'",
  })
  totalht: number | null;

  @Column("double", {
    name: "totaltva",
    nullable: true,
    precision: 22,
    default: () => "'0'",
  })
  totaltva: number | null;

  @Column("double", {
    name: "totalttc",
    nullable: true,
    precision: 22,
    default: () => "'0'",
  })
  totalttc: number | null;

  @Column("tinyint", { name: "valider", width: 1 })
  valider: boolean;

  @Column("varchar", { name: "chiffreenlettre", length: 500 })
  chiffreenlettre: string;

  @Column("varchar", { name: "note", nullable: true, length: 255 })
  note: string | null;

  @Column("varchar", { name: "motifs", nullable: true, length: 255 })
  motifs: string | null;

  @Column("int", { name: "user_id", nullable: true })
  userId: number | null;

  @Column("int", { name: "status_id", nullable: true })
  statusId: number | null;

  @Column("tinyint", { name: "notif", width: 1 })
  notif: boolean;

  @Column("double", { name: "totallivraison", nullable: true, precision: 22 })
  totallivraison: number | null;

  @Column("longtext", { name: "notelivraison", nullable: true })
  notelivraison: string | null;

  @Column("longtext", { name: "notecommande", nullable: true })
  notecommande: string | null;

  @Column("double", { name: "totalweights", precision: 22 })
  totalweights: number;

  @Column("int", { name: "currencies_id", nullable: true })
  currenciesId: number | null;

  @Column("tinyint", { name: "checkouttermsagree", nullable: true, width: 1 })
  checkouttermsagree: boolean | null;

  @Column("varchar", { name: "codecoupon", nullable: true, length: 30 })
  codecoupon: string | null;

  @Column("int", { name: "geozones_id", nullable: true })
  geozonesId: number | null;

  @Column("int", { name: "livraisons_id", nullable: true })
  livraisonsId: number | null;

  @Column("int", { name: "facturations_id", nullable: true })
  facturationsId: number | null;

  @Column("tinyint", {
    name: "annuler",
    nullable: true,
    width: 1,
    default: () => "'0'",
  })
  annuler: boolean | null;

  @Column("datetime", {
    name: "cancel_at",
    nullable: true,
    comment: "(DC2Type:datetime_immutable)",
  })
  cancelAt: Date | null;

  @Column("datetime", {
    name: "cancel_delay",
    nullable: true,
    comment: "(DC2Type:datetime_immutable)",
  })
  cancelDelay: Date | null;

  @Column("int", { name: "promotion", nullable: true, default: () => "'0'" })
  promotion: number | null;

  @Column("varchar", {
    name: "code_promotion",
    nullable: true,
    length: 20,
    default: () => "'0'",
  })
  codePromotion: string | null;
}
