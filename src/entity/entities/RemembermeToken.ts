import { Column, Entity } from "typeorm";

@Entity("rememberme_token", { schema: "testnestjs2" })
export class RemembermeToken {
  @Column("char", { primary: true, name: "series", length: 88 })
  series: string;

  @Column("varchar", { name: "value", length: 88 })
  value: string;

  @Column("datetime", { name: "lastUsed" })
  lastUsed: Date;

  @Column("varchar", { name: "class", length: 100 })
  class: string;

  @Column("varchar", { name: "username", length: 200 })
  username: string;
}
