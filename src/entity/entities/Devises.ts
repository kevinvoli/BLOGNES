import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("devises", { schema: "testnestjs2" })
export class Devises {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "currency_code", nullable: true, length: 10 })
  currencyCode: string | null;

  @Column("varchar", { name: "currency_name", nullable: true, length: 255 })
  currencyName: string | null;

  @Column("varchar", { name: "left_symbol", nullable: true, length: 12 })
  leftSymbol: string | null;

  @Column("varchar", { name: "right_symbol", nullable: true, length: 12 })
  rightSymbol: string | null;

  @Column("varchar", { name: "decimal_symbol", nullable: true, length: 1 })
  decimalSymbol: string | null;

  @Column("varchar", { name: "decimal_place", nullable: true, length: 1 })
  decimalPlace: string | null;

  @Column("varchar", { name: "thousands_separator", nullable: true, length: 1 })
  thousandsSeparator: string | null;

  @Column("double", { name: "exchanged_value", nullable: true, precision: 22 })
  exchangedValue: number | null;

  @Column("tinyint", { name: "published", nullable: true, width: 1 })
  published: boolean | null;

  @Column("datetime", { name: "modified_date", nullable: true })
  modifiedDate: Date | null;

  @Column("int", { name: "codeiso", nullable: true })
  codeiso: number | null;
}
