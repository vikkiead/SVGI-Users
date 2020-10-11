import { Body, Controller, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { UpdateResult } from 'typeorm/query-builder/result/UpdateResult';
import { CreateUsersDto } from './dto/create/create-users.dto';
import { UpdateUsersDto } from './dto/update/update-users.dto';
import { Users } from './models/users.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    /**
     * 
     * @param usersService 
     * Inject tenantsService
     */
    constructor(private readonly usersService: UsersService) { }

    /**
     * 
     * @param createUsersDto 
     * Handle Post request for create
     */
    @Post()
    create(@Body() createUserDto: CreateUsersDto): Promise<Users> {
        //console.log(JSON.stringify(createTenantDto));
        return this.usersService.create(createUserDto);
    }

    /**
     * Handle Get request for find
     */
    @Get()
    findAll(): Promise<Users[]> {
        return this.usersService.findAll();
    }

    /**
     * 
     * @param id 
     * Handle Get request for find by id
     */
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: string): Promise<Users> {
        return this.usersService.findOne(id);
    }

    /**
     * 
     * @param id id of tenant to be updated
     * @param updateUserDto new content
     * Handle Put request for 
     */
    @Put(':id')
    partialUpdate(@Param('id',ParseIntPipe) id: string, @Body() updateUserDto: UpdateUsersDto): Promise<UpdateResult> {
        return this.usersService.update1(id, updateUserDto);
    }

    /**
     * 
     * @param user
     * Non-partial update. Takes a full tenant without param.
     */
    @Put()
    update(@Body() user: Users): Promise<Users> {
        return this.usersService.update2(user);
    }
}