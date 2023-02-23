import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("IDX_D81E055F6C8A81A9", ["productsId"], {})
@Entity("mediasproducts", { schema: "testnestjs2" })
export class Mediasproducts {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "products_id", nullable: true })
  productsId: number | null;

  @Column("varchar", { name: "filename", nullable: true, length: 255 })
  filename: string | null;

  @Column("int", { name: "ordering" })
  ordering: number;

  @Column("varchar", { name: "name", nullable: true, length: 255 })
  name: string | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("tinyint", { name: "cover", nullable: true })
  cover: number | null;
}
