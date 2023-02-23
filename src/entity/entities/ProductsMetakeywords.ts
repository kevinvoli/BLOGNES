import { Column, Entity, Index } from "typeorm";

@Index("IDX_F04BDC6F6C8A81A9", ["productsId"], {})
@Index("IDX_F04BDC6FA1A5826D", ["metakeywordsId"], {})
@Entity("products_metakeywords", { schema: "testnestjs2" })
export class ProductsMetakeywords {
  @Column("int", { primary: true, name: "products_id" })
  productsId: number;

  @Column("int", { primary: true, name: "metakeywords_id" })
  metakeywordsId: number;
}
