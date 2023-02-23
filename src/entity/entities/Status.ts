import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("UNIQ_7B00651C5E237E06", ["name"], { unique: true })
@Entity("status", { schema: "testnestjs2" })
export class Status {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", unique: true, length: 100 })
  name: string;

  @Column("varchar", { name: "color", length: 100 })
  color: string;
}
