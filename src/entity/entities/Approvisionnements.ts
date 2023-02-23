import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Products } from "./Products";
import { User } from "./User";

@Index("IDX_2D5CE9C26C8A81A9", ["productsId"], {})
@Index("IDX_2D5CE9C2A76ED395", ["userId"], {})
@Entity("approvisionnements", { schema: "testnestjs2" })
export class Approvisionnements {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "products_id", nullable: true })
  productsId: number | null;

  @Column("int", { name: "oldqty" })
  oldqty: number;

  @Column("int", { name: "newqty" })
  newqty: number;

  @Column("datetime", { name: "created_at" })
  createdAt: Date;

  @Column("varchar", { name: "remarque", nullable: true, length: 500 })
  remarque: string | null;

  @Column("int", { name: "user_id", nullable: true })
  userId: number | null;

  @ManyToOne(() => Products, (products) => products.approvisionnements, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "products_id", referencedColumnName: "id" }])
  products: Products;

  @ManyToOne(() => User, (user) => user.approvisionnements, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: User;
}
