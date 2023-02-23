import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("IDX_8A6E321765B48705", ["geozonesId"], {})
@Index("IDX_8A6E3217A6EAEB7A", ["zonesId"], {})
@Index("IDX_8A6E3217AEBAE514", ["countriesId"], {})
@Entity("geozonezones", { schema: "testnestjs2" })
export class Geozonezones {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "geozones_id", nullable: true })
  geozonesId: number | null;

  @Column("int", { name: "zones_id", nullable: true })
  zonesId: number | null;

  @Column("int", { name: "countries_id", nullable: true })
  countriesId: number | null;
}
