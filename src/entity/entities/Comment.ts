import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("IDX_9474526C7294869C", ["articleId"], {})
@Index("user_id", ["userId"], {})
@Entity("comment", { schema: "testnestjs2" })
export class Comment {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "article_id" })
  articleId: number;

  @Column("varchar", { name: "content", length: 255 })
  content: string;

  @Column("datetime", { name: "created_at" })
  createdAt: Date;

  @Column("int", { name: "user_id", nullable: true })
  userId: number | null;
}
