import { CreateBaseAbstractDto } from "src/global/create-base-abstract.dto"
export class UpdateProfileDto extends CreateBaseAbstractDto{
    readonly homeAddress: string
    readonly nationality: string
    readonly stateOfOrigin: string
    readonly photoId: string
}