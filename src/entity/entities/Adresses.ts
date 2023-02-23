import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("IDX_EF192552A76ED395", ["userId"], {})
@Index("IDX_EF192552AEBAE514", ["countriesId"], {})
@Index("IDX_EF192552A6EAEB7A", ["zonesId"], {})
@Entity("adresses", { schema: "testnestjs2" })
export class Adresses {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "adresse", length: 255 })
  adresse: string;

  @Column("varchar", { name: "email", length: 180 })
  email: string;

  @Column("datetime", { name: "created_at" })
  createdAt: Date;

  @Column("varchar", { name: "nom", length: 255 })
  nom: string;

  @Column("varchar", { name: "contacts", length: 255 })
  contacts: string;

  @Column("int", { name: "user_id", nullable: true })
  userId: number | null;

  @Column("int", { name: "countries_id", nullable: true })
  countriesId: number | null;

  @Column("int", { name: "zones_id", nullable: true })
  zonesId: number | null;

  @Column("varchar", { name: "prenoms", length: 255 })
  prenoms: string;

  @Column("varchar", { name: "entreprise", nullable: true, length: 255 })
  entreprise: string | null;

  @Column("varchar", { name: "appartements", nullable: true, length: 255 })
  appartements: string | null;

  @Column("varchar", { name: "numero_rue", nullable: true, length: 255 })
  numeroRue: string | null;

  @Column("varchar", { name: "postal_code", nullable: true, length: 30 })
  postalCode: string | null;
}
