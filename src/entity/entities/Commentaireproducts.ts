import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("IDX_B43A29746C8A81A9", ["productsId"], {})
@Index("IDX_B43A2974A76ED395", ["userId"], {})
@Entity("commentaireproducts", { schema: "testnestjs2" })
export class Commentaireproducts {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "products_id", nullable: true })
  productsId: number | null;

  @Column("tinyint", { name: "enabled", width: 1 })
  enabled: boolean;

  @Column("longtext", { name: "message" })
  message: string;

  @Column("datetime", { name: "created_at" })
  createdAt: Date;

  @Column("int", { name: "user_id", nullable: true })
  userId: number | null;
}
