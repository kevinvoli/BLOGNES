import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("IDX_5D66EBAD65B48705", ["geozonesId"], {})
@Entity("countries", { schema: "testnestjs2" })
export class Countries {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "geozones_id", nullable: true })
  geozonesId: number | null;

  @Column("varchar", { name: "name", length: 255 })
  name: string;

  @Column("varchar", { name: "iso_code_2", length: 2 })
  isoCode_2: string;

  @Column("varchar", { name: "iso_code_3", length: 3 })
  isoCode_3: string;

  @Column("tinyint", { name: "postcode_required", nullable: true, width: 1 })
  postcodeRequired: boolean | null;

  @Column("tinyint", { name: "published", width: 1 })
  published: boolean;
}
