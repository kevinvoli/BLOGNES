import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Approvisionnements } from "./Approvisionnements";

@Index("IDX_B3BA5A5AA76ED395", ["userId"], {})
@Index("IDX_B3BA5A5AC256483C", ["marquesId"], {})
@Index("IDX_B3BA5A5A5C002039", ["colorsId"], {})
@Index("IDX_B3BA5A5A82350831", ["matieresId"], {})
@Index("IDX_B3BA5A5A5E237E06", ["name"], { fulltext: true })
@Entity("products", { schema: "testnestjs2" })
export class Products {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "sku", nullable: true, length: 30 })
  sku: string | null;

  @Column("varchar", { name: "name", length: 255 })
  name: string;

  @Column("varchar", { name: "slug", length: 255 })
  slug: string;

  @Column("int", { name: "price", default: () => "'0'" })
  price: number;

  @Column("int", { name: "quantity", default: () => "'0'" })
  quantity: number;

  @Column("varchar", { name: "weight", nullable: true, length: 255 })
  weight: string | null;

  @Column("longtext", { name: "description", nullable: true })
  description: string | null;

  @Column("varchar", { name: "filename", nullable: true, length: 255 })
  filename: string | null;

  @Column("tinyint", {
    name: "online",
    nullable: true,
    width: 1,
    default: () => "'0'",
  })
  online: boolean | null;

  @Column("tinyint", {
    name: "featured",
    nullable: true,
    width: 1,
    default: () => "'0'",
  })
  featured: boolean | null;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("int", { name: "user_id", nullable: true })
  userId: number | null;

  @Column("int", { name: "marques_id", nullable: true })
  marquesId: number | null;

  @Column("varchar", { name: "filenamehover", nullable: true, length: 255 })
  filenamehover: string | null;

  @Column("int", { name: "pricepromo", nullable: true, default: () => "'0'" })
  pricepromo: number | null;

  @Column("tinyint", {
    name: "nouveau",
    nullable: true,
    width: 1,
    default: () => "'0'",
  })
  nouveau: boolean | null;

  @Column("int", { name: "vues", default: () => "'0'" })
  vues: number;

  @Column("varchar", { name: "delaislivraison", nullable: true, length: 255 })
  delaislivraison: string | null;

  @Column("varchar", { name: "garantie", nullable: true, length: 255 })
  garantie: string | null;

  @Column("varchar", { name: "videourl", nullable: true, length: 255 })
  videourl: string | null;

  @Column("longtext", { name: "caracteristiques", nullable: true })
  caracteristiques: string | null;

  @Column("int", { name: "colors_id", nullable: true })
  colorsId: number | null;

  @Column("int", { name: "matieres_id", nullable: true })
  matieresId: number | null;

  @Column("tinyint", {
    name: "ecarte",
    nullable: true,
    width: 1,
    default: () => "'0'",
  })
  ecarte: boolean | null;

  @Column("double", {
    name: "priceeuro",
    nullable: true,
    precision: 22,
    default: () => "'0'",
  })
  priceeuro: number | null;

  @Column("double", {
    name: "pricedollar",
    nullable: true,
    precision: 22,
    default: () => "'0'",
  })
  pricedollar: number | null;

  @OneToMany(
    () => Approvisionnements,
    (approvisionnements) => approvisionnements.products
  )
  approvisionnements: Approvisionnements[];
}
