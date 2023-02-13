import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @Index({ unique: true })
    mail: string

    @Column()
    password: string;

    @Column()
    usernam: string;

    @Column()
    salt: string;

}
