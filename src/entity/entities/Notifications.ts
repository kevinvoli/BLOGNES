import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("IDX_6000B0D3A76ED395", ["userId"], {})
@Index("IDX_6000B0D3719FB48E", ["contactsId"], {})
@Index("IDX_6000B0D3FEDEAEF2", ["abonnesId"], {})
@Index("IDX_6000B0D38BF5C2E6", ["commandesId"], {})
@Entity("notifications", { schema: "testnestjs2" })
export class Notifications {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "user_id", nullable: true })
  userId: number | null;

  @Column("int", { name: "contacts_id", nullable: true })
  contactsId: number | null;

  @Column("int", { name: "abonnes_id", nullable: true })
  abonnesId: number | null;

  @Column("int", { name: "commandes_id", nullable: true })
  commandesId: number | null;

  @Column("varchar", { name: "titre", length: 100 })
  titre: string;

  @Column("varchar", { name: "action", length: 100 })
  action: string;

  @Column("datetime", { name: "created_at" })
  createdAt: Date;

  @Column("varchar", { name: "icon", length: 20 })
  icon: string;

  @Column("varchar", { name: "color", length: 30 })
  color: string;

  @Column("tinyint", { name: "reading", width: 1 })
  reading: boolean;
}
