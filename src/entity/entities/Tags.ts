import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("tags", { schema: "testnestjs2" })
export class Tags {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", length: 50 })
  name: string;

  @Column("varchar", { name: "slug", length: 255 })
  slug: string;
}
