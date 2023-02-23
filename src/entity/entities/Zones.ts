import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("IDX_85CAB168AEBAE514", ["countriesId"], {})
@Entity("zones", { schema: "testnestjs2" })
export class Zones {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "countries_id", nullable: true })
  countriesId: number | null;

  @Column("varchar", { name: "zone_name", length: 128 })
  zoneName: string;

  @Column("varchar", { name: "zone_code", nullable: true, length: 32 })
  zoneCode: string | null;

  @Column("tinyint", { name: "published", width: 1, default: () => "'1'" })
  published: boolean;
}
