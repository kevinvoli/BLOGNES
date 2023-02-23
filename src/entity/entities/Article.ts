import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("IDX_23A0E663569D950", ["featuredImageId"], {})
@Index("title", ["title"], {})
@Entity("article", { schema: "testnestjs2" })
export class Article {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "featured_image_id", nullable: true })
  featuredImageId: number | null;

  @Column("varchar", { name: "title", length: 255 })
  title: string;

  @Column("varchar", { name: "slug", length: 255 })
  slug: string;

  @Column("longtext", { name: "content", nullable: true })
  content: string | null;

  @Column("varchar", { name: "featured_text", nullable: true, length: 100 })
  featuredText: string | null;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "update_at", nullable: true })
  updateAt: Date | null;

  @Column("varchar", { name: "filename", nullable: true, length: 255 })
  filename: string | null;
}
