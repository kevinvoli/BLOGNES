import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("IDX_337A271E6C8A81A9", ["productsId"], {})
@Index("IDX_337A271ED629F605", ["formatId"], {})
@Entity("tailles", { schema: "testnestjs2" })
export class Tailles {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "products_id", nullable: true })
  productsId: number | null;

  @Column("int", { name: "quantity" })
  quantity: number;

  @Column("int", { name: "seuilquantity" })
  seuilquantity: number;

  @Column("varchar", { name: "reference", length: 255 })
  reference: string;

  @Column("int", { name: "format_id", nullable: true })
  formatId: number | null;
}
