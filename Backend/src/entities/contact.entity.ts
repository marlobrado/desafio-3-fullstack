import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn,
} from "typeorm";
import User from "./user.entity";

@Entity("contacts")
export class Contact {
    @PrimaryGeneratedColumn("uuid")
    readonly id: string;

    @Column({ length: 100 })
    name: string;

    @Column({ length: 60 })
    email: string;

    @Column({ length: 20 })
    telephone: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    // @ManyToOne(() => User, (user) => user.contacts)
    // user: User;
    @ManyToOne(() => User, (user) => user.contacts, { onDelete: "CASCADE" })
    user: User;
}
