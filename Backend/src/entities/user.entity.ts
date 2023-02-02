import { Exclude } from "class-transformer";
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
    JoinColumn,
} from "typeorm";
import { Contact } from "./contact.entity";

@Entity("users")
class User {
    @PrimaryGeneratedColumn("uuid")
    readonly id: string;
    @Column({ length: 100 })
    fullName: string;

    @Column({ length: 60, unique: true })
    email: string;

    @Column()
    telephone: string;

    @Column({ length: 120 })
    @Exclude()
    password: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @OneToMany(()=> Contact, contact => contact.user, { eager: true } )
    contacts: Contact[]
}
export default User


