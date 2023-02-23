import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("formattailles", { schema: "testnestjs2" })
export class Formattailles {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", length: 10 })
  name: string;

  @Column("int", { name: "ordre", nullable: true })
  ordre: number | null;
}
