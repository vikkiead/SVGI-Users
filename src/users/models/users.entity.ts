import { BaseAbstractEntity } from "src/global/base-abstract.entity";
import { Column, Entity, Generated, ManyToMany, OneToMany, OneToOne } from "typeorm";
import { Permissions } from "../modules/permissions/models/permissions.entity";
import { Profile } from "./profile.entity";
import { Roles } from "../modules/roles/models/roles.entity";


@Entity()
export class Users extends BaseAbstractEntity{
    
    @Generated("uuid")
    uuid: string;
    
    @Column()
   firstName: string

    @Column()
    middleName: string

    @Column()
    lastName: string

    @Column()
    commonName: string

    @Column()
    gender: string

    @Column({nullable: true})
    dateOfBirth: Date

    @Column({nullable: true})
    isActive: boolean

    @Column({unique: true})
    primaryEmailAddress: string

    @Column({nullable: true})
    isPrimaryEmailVerified: boolean

    @Column({unique: true,nullable: true})
    passwordSalt: string

    @Column({unique: true,nullable: true})
    passwordHash: string

    @Column({nullable: true})
    isPasswordChangeRequired: boolean

    @Column({unique: true,nullable: true})
    resetPasswordToken: string

    @Column({nullable: true})
    resetPasswordExpiration: Date

    @Column({unique: true,nullable: true})
    primaryEmailVerificationToken: string

    @Column({nullable: true})
    otpEnabled: boolean

    @Column({unique: true,nullable: true})
    otpSecret: string

    @Column({default: true ,nullable: true})
    active: boolean

    @OneToOne(_type => Profile, profile => profile.user)
    profile: Profile



    @ManyToMany(_type => Permissions)
    permission: Permissions

    @ManyToMany(_type => Roles)
    role: Roles
/*
    @OneToMany(type => Billing, billing => billing.tenant)
    billings: Billing[] //notice the array here
    /*Even though there is a relationship between tenant and everyother model,
    typeorm allows us to define many-to-one without one-to-many. But you can't 
    define one-to-many without many-to-one. Here, we shall define no relationship
    but put many-to-one in every other entity in relation to tenant.
    See https://typeorm.io/#/many-to-one-one-to-many-relations 
    */
}