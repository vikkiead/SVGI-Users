import { BaseAbstractEntity } from "src/global/base-abstract.entity";
import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { Users } from "./users.entity";

@Entity()
export class Profile extends BaseAbstractEntity{

    @Column()
    homeAddress: string

    @Column()
    nationality: string

    @Column()
    stateOfOrigin: string
    
    @Column()
    photoId: string
    
    @JoinColumn()
    @OneToOne(_type => Users, user => user.profile,  { onDelete: 'CASCADE' }  )
    user: Users

}