import { BaseAbstractEntity } from "src/global/base-abstract.entity";
import { Column, Entity, JoinTable, ManyToMany } from "typeorm";
import { Users } from "../../../models/users.entity";

@Entity()
export class Roles extends BaseAbstractEntity{

    @Column()
    name: string

    @Column()
    description: string
    

    @JoinTable()
    @ManyToMany(type => Users)
    user: Users
}