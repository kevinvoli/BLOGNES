import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Approvisionnements } from "./Approvisionnements";

@Index("UNIQ_8D93D649E7927C74", ["email"], { unique: true })
@Index("IDX_8D93D649AEBAE514", ["countriesId"], {})
@Index("IDX_8D93D649A6EAEB7A", ["zonesId"], {})
@Entity("user", { schema: "testnestjs2" })
export class User {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "email", unique: true, length: 180 })
  email: string;

  @Column("longtext", { name: "roles", comment: "(DC2Type:array)" })
  roles: string;

  @Column("varchar", { name: "password", length: 255 })
  password: string;

  @Column("varchar", { name: "username", nullable: true, length: 255 })
  username: string | null;

  @Column("varchar", { name: "nom", nullable: true, length: 255 })
  nom: string | null;

  @Column("varchar", { name: "prenoms", nullable: true, length: 255 })
  prenoms: string | null;

  @Column("varchar", { name: "contacts", nullable: true, length: 50 })
  contacts: string | null;

  @Column("varchar", { name: "address", length: 255 })
  address: string;

  @Column("varchar", { name: "filename", nullable: true, length: 255 })
  filename: string | null;

  @Column("tinyint", { name: "enabled", width: 1, default: () => "'0'" })
  enabled: boolean;

  @Column("datetime", { name: "created_at" })
  createdAt: Date;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("datetime", { name: "last_login", nullable: true })
  lastLogin: Date | null;

  @Column("datetime", { name: "last_activity", nullable: true })
  lastActivity: Date | null;

  @Column("varchar", { name: "entreprise", nullable: true, length: 255 })
  entreprise: string | null;

  @Column("varchar", { name: "appartements", nullable: true, length: 255 })
  appartements: string | null;

  @Column("int", { name: "countries_id", nullable: true })
  countriesId: number | null;

  @Column("int", { name: "zones_id", nullable: true })
  zonesId: number | null;

  @Column("varchar", { name: "civilite", length: 180 })
  civilite: string;

  @Column("varchar", { name: "numero_rue", nullable: true, length: 255 })
  numeroRue: string | null;

  @Column("varchar", { name: "postal_code", nullable: true, length: 30 })
  postalCode: string | null;

  @OneToMany(
    () => Approvisionnements,
    (approvisionnements) => approvisionnements.user
  )
  approvisionnements: Approvisionnements[];
}
