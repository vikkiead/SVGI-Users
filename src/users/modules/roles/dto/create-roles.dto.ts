import { CreateBaseAbstractDto } from "src/global/create-base-abstract.dto"
export class CreateRolesDto extends CreateBaseAbstractDto{
    readonly name: string
    readonly description: string

    //readonly tenant: CreateTenantDto
}