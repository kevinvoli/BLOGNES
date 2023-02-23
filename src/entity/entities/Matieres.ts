import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("matieres", { schema: "testnestjs2" })
export class Matieres {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", length: 255 })
  name: string;

  @Column("varchar", { name: "slug", length: 255 })
  slug: string;
}
