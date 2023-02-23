import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("parametres", { schema: "testnestjs2" })
export class Parametres {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", nullable: true, length: 255 })
  name: string | null;

  @Column("longtext", { name: "description", nullable: true })
  description: string | null;

  @Column("longtext", { name: "keywords", nullable: true })
  keywords: string | null;

  @Column("varchar", { name: "telephone", nullable: true, length: 30 })
  telephone: string | null;

  @Column("varchar", { name: "cellulaire", nullable: true, length: 30 })
  cellulaire: string | null;

  @Column("varchar", { name: "email", nullable: true, length: 255 })
  email: string | null;

  @Column("varchar", { name: "filename", nullable: true, length: 255 })
  filename: string | null;

  @Column("varchar", { name: "filename2", nullable: true, length: 255 })
  filename2: string | null;

  @Column("longtext", { name: "adresses", nullable: true })
  adresses: string | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("varchar", { name: "activite", nullable: true, length: 255 })
  activite: string | null;

  @Column("varchar", { name: "slogan", nullable: true, length: 255 })
  slogan: string | null;

  @Column("varchar", { name: "facebook", nullable: true, length: 255 })
  facebook: string | null;

  @Column("varchar", { name: "instagram", nullable: true, length: 255 })
  instagram: string | null;

  @Column("varchar", { name: "twitter", nullable: true, length: 255 })
  twitter: string | null;

  @Column("int", { name: "tva", default: () => "'0'" })
  tva: number;

  @Column("int", { name: "seuilproduct", default: () => "'0'" })
  seuilproduct: number;

  @Column("varchar", { name: "email_mail", nullable: true, length: 255 })
  emailMail: string | null;

  @Column("int", { name: "id_category_ecarte", nullable: true })
  idCategoryEcarte: number | null;

  @Column("int", { name: "promotion", nullable: true })
  promotion: number | null;

  @Column("varchar", { name: "code_promotion", nullable: true, length: 20 })
  codePromotion: string | null;

  @Column("datetime", { name: "date_code_promotion", nullable: true })
  dateCodePromotion: Date | null;
}
