import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("tailleslanguages", { schema: "testnestjs2" })
export class Tailleslanguages {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", length: 255 })
  name: string;
}
