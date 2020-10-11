  

export class RolesService {
    create(createRolesDto: CreateRolesDto): Promise<Roles> {
        throw new Error('Method not implemented.');
    }
}
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRolesDto } from './dto/create-roles.dto';
import { Roles } from './models/roles.entity';

@Injectable()
export class RolessService {

    constructor(
        @InjectRepository(Roles) private roleRepository: Repository<Roles>,
    ){}

    async create (createRolesDto: CreateRolesDto): Promise<Roles>{

        const newRoles = this.roleRepository.create(createRolesDto);
        return this.roleRepository.save(newRoles);
        
    }
}