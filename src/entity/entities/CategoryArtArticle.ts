import { Column, Entity, Index } from "typeorm";

@Index("IDX_1E54D7183CD2F61", ["categoryArtId"], {})
@Index("IDX_1E54D717294869C", ["articleId"], {})
@Entity("category_art_article", { schema: "testnestjs2" })
export class CategoryArtArticle {
  @Column("int", { primary: true, name: "category_art_id" })
  categoryArtId: number;

  @Column("int", { primary: true, name: "article_id" })
  articleId: number;
}
