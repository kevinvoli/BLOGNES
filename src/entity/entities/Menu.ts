import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("IDX_7D053A937294869C", ["articleId"], {})
@Index("IDX_7D053A9312469DE2", ["categoryId"], {})
@Index("IDX_7D053A93C4663E4", ["pageId"], {})
@Entity("menu", { schema: "testnestjs2" })
export class Menu {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "article_id", nullable: true })
  articleId: number | null;

  @Column("int", { name: "category_id", nullable: true })
  categoryId: number | null;

  @Column("int", { name: "page_id", nullable: true })
  pageId: number | null;

  @Column("varchar", { name: "name", length: 255 })
  name: string;

  @Column("int", { name: "menu_order", nullable: true })
  menuOrder: number | null;

  @Column("tinyint", { name: "is_visible", width: 1 })
  isVisible: boolean;

  @Column("varchar", { name: "link", nullable: true, length: 255 })
  link: string | null;
}
