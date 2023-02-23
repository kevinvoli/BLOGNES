import { Column, Entity } from "typeorm";

@Entity("doctrine_migration_versions", { schema: "testnestjs2" })
export class DoctrineMigrationVersions {
  @Column("varchar", { primary: true, name: "version", length: 191 })
  version: string;

  @Column("datetime", { name: "executed_at", nullable: true })
  executedAt: Date | null;

  @Column("int", { name: "execution_time", nullable: true })
  executionTime: number | null;
}
