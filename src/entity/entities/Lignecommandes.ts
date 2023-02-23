import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("IDX_448E7C7A1AEC613E", ["taillesId"], {})
@Index("IDX_448E7C7A8BF5C2E6", ["commandesId"], {})
@Entity("lignecommandes", { schema: "testnestjs2" })
export class Lignecommandes {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "tailles_id", nullable: true })
  taillesId: number | null;

  @Column("int", { name: "commandes_id", nullable: true })
  commandesId: number | null;

  @Column("int", { name: "quantity" })
  quantity: number;

  @Column("int", { name: "price", default: () => "'0'" })
  price: number;
}
