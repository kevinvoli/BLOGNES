import { Column, Entity, Index } from "typeorm";

@Index("IDX_E8ACBE766C8A81A9", ["productsId"], {})
@Index("IDX_E8ACBE76A21214B7", ["categoriesId"], {})
@Entity("products_categories", { schema: "testnestjs2" })
export class ProductsCategories {
  @Column("int", { primary: true, name: "products_id" })
  productsId: number;

  @Column("int", { primary: true, name: "categories_id" })
  categoriesId: number;
}
