import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("category_art", { schema: "testnestjs2" })
export class CategoryArt {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", length: 255 })
  name: string;

  @Column("varchar", { name: "slslug", length: 10 })
  slslug: string;
}
