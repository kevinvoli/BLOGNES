import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("colors", { schema: "testnestjs2" })
export class Colors {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", length: 255 })
  name: string;

  @Column("varchar", { name: "slug", length: 255 })
  slug: string;

  @Column("varchar", { name: "colorvalue", length: 30 })
  colorvalue: string;
}
