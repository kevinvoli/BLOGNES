import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("geozones", { schema: "testnestjs2" })
export class Geozones {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "geozone_name", nullable: true, length: 255 })
  geozoneName: string | null;

  @Column("longtext", { name: "geozone_desc", nullable: true })
  geozoneDesc: string | null;

  @Column("tinyint", { name: "published", nullable: true, width: 1 })
  published: boolean | null;

  @Column("datetime", { name: "created_date", nullable: true })
  createdDate: Date | null;

  @Column("int", { name: "created_by", nullable: true })
  createdBy: number | null;

  @Column("int", { name: "modified_by" })
  modifiedBy: number;

  @Column("int", { name: "checked_out", nullable: true })
  checkedOut: number | null;

  @Column("datetime", { name: "checked_out_time", nullable: true })
  checkedOutTime: Date | null;

  @Column("datetime", { name: "modified_date", nullable: true })
  modifiedDate: Date | null;
}
