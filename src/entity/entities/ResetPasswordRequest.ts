import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("IDX_7CE748AA76ED395", ["userId"], {})
@Entity("reset_password_request", { schema: "testnestjs2" })
export class ResetPasswordRequest {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "user_id", nullable: true })
  userId: number | null;

  @Column("varchar", { name: "selector", length: 20 })
  selector: string;

  @Column("varchar", { name: "hashed_token", length: 100 })
  hashedToken: string;

  @Column("datetime", {
    name: "requested_at",
    comment: "(DC2Type:datetime_immutable)",
  })
  requestedAt: Date;

  @Column("datetime", {
    name: "expires_at",
    comment: "(DC2Type:datetime_immutable)",
  })
  expiresAt: Date;
}
