import { CreateBaseAbstractDto } from "src/global/create-base-abstract.dto"

import { UpdateProfileDto } from "./update-profile.dto"

export class UpdateUsersDto extends CreateBaseAbstractDto{
    readonly firstName: string
    readonly middleName: string
    readonly lastName: string
    readonly commonName: string
    readonly gender: string
    readonly dateOfBirth: Date
    readonly isActive: boolean;
    readonly primaryEmailAddress: string;
    readonly isPrimaryEmailAddressVerified: boolean;
    readonly passwordSalt: string;
    readonly passwordHash: string;
    readonly isPasswordChangeRequired: boolean;
    readonly resetPasswordToken: string;
    readonly resetPasswordExpiration: Date;
    readonly primaryEmailVerificationToken: string;
    readonly otpEnabled: boolean
    readonly otpSecret: string
    readonly profile: UpdateProfileDto
}