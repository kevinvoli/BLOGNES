import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("IDX_4A4C2E1B6C8A81A9", ["productsId"], {})
@Index("IDX_4A4C2E1BA76ED395", ["userId"], {})
@Entity("wishlists", { schema: "testnestjs2" })
export class Wishlists {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "products_id", nullable: true })
  productsId: number | null;

  @Column("datetime", { name: "created_at" })
  createdAt: Date;

  @Column("int", { name: "user_id", nullable: true })
  userId: number | null;
}
