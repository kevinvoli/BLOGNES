import { Column, Entity, Index } from "typeorm";

@Index("IDX_29FF1B38A6EAEB7A", ["zonesId"], {})
@Index("IDX_29FF1B3865B48705", ["geozonesId"], {})
@Entity("zones_geozones", { schema: "testnestjs2" })
export class ZonesGeozones {
  @Column("int", { primary: true, name: "zones_id" })
  zonesId: number;

  @Column("int", { primary: true, name: "geozones_id" })
  geozonesId: number;
}
