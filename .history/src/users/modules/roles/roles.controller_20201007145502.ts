import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateRolesDto } from './dto/create-roles.dto';
import { Roles } from './models/roles.entity';
import { RolesService } from './roles.service';

@Controller('users/roles')
export class RolesController {

    constructor(private readonly rolesService: RolesService) { }

    @Post()
    create(@Body() createRolesDto: CreateRolesDto): Promise<Roles> {
        //console.log(JSON.stringify(createThemeDto));
        return this.rolesService.create(createRolesDto);
    }

    @Get()
    findAll(): string {
        return "This is Role theme"
    }

}