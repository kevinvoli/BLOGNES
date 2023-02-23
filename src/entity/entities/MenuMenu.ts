import { Column, Entity, Index } from "typeorm";

@Index("IDX_B54ACADD8CCD27AB", ["menuSource"], {})
@Index("IDX_B54ACADD95287724", ["menuTarget"], {})
@Entity("menu_menu", { schema: "testnestjs2" })
export class MenuMenu {
  @Column("int", { primary: true, name: "menu_source" })
  menuSource: number;

  @Column("int", { primary: true, name: "menu_target" })
  menuTarget: number;
}
