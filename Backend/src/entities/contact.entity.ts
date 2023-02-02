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

    @Column({ length: 60 })
    name: string;

    @Column({ length: 60})
    email: string;

    @Column({ length: 14 })
    telephone: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToOne(()=> User, user => user.contacts)
    user: User

}
