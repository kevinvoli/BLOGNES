import { Column, Entity, Index } from "typeorm";

@Index("IDX_A6BB4AE9D9B9F459", ["productsSource"], {})
@Index("IDX_A6BB4AE9C05CA4D6", ["productsTarget"], {})
@Entity("products_products", { schema: "testnestjs2" })
export class ProductsProducts {
  @Column("int", { primary: true, name: "products_source" })
  productsSource: number;

  @Column("int", { primary: true, name: "products_target" })
  productsTarget: number;
}
