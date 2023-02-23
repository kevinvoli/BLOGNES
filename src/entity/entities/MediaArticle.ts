import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("media_article", { schema: "testnestjs2" })
export class MediaArticle {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", length: 255 })
  name: string;

  @Column("varchar", { name: "alt_text", nullable: true, length: 255 })
  altText: string | null;

  @Column("varchar", { name: "filename", length: 255 })
  filename: string;

  @Column("varchar", { name: "article", length: 255 })
  article: string;
}
