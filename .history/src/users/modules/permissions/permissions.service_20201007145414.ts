import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePermissionsDto } from './dto/create-permissions.dto';
import { Permissions } from './models/permissions.entity';

@Injectable()
export class PermissionsService {

    constructor(
        @InjectRepository(Permissions) private permissionRepository: Repository<Permissions>,
    ){}

    async create (createPermissionsDto: CreatePermissionsDto): Promise<Permissions>{

        const newPermission = this.permissionRepository.create(createPermissionsDto);
        return this.permissionRepository.save(newPermission);
        
    }
}