  
import { CreateBaseAbstractDto } from "src/global/create-base-abstract.dto"
export class CreateProfileDto extends CreateBaseAbstractDto{
    readonly homeAddress: string
    readonly nationality: string
    readonly stateOfOrigin: string
    readonly photoId: string
    //readonly tenant: CreateTenantDto
}