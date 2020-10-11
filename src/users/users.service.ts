import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { CreateUsersDto } from './dto/create/create-users.dto';
import { UpdateUsersDto } from './dto/update/update-users.dto';
import { Profile} from './models/profile.entity';
import { Users } from './models/users.entity';

@Injectable()
export class UsersService {

    /**
     * 
     * @param userRepository 
     * @param profileRepository 
     */
    constructor(
        @InjectRepository(Users) private userRepository: Repository<Users>,
        @InjectRepository(Profile) private profileRepository: Repository<Profile>
    ){}

    /**
     * 
     * @param createUserDto 
     * 
     */
    //create below assumes that tenant model does not allow cascade create of custom theme
    /*
    async create (createTenantDto: CreateTenantDto): Promise<Tenant>{
        const newCustomTheme = this.customThemeRepository.create(createTenantDto.customTheme)
        const customTheme = await this.customThemeRepository.save(newCustomTheme);
        const newItem = this.tenantRepository.create(createTenantDto);
        //associate the custom theme created above with newItem before saving
        newItem.customTheme = customTheme;
        
        return this.tenantRepository.save(newItem);
    }
    */

    /**
     * 
     * @param createUserDto 
     */
    async create (createUserDto: CreateUsersDto): Promise<Users>{

        const newUser = this.userRepository.create(createUserDto);
        return await this.userRepository.save(newUser);

    }

    /**
     * See https://typeorm.io/#/find-options
     */
    /*
    async findAll(): Promise<Users[]> {
        return await this.userRepository.find();
    }
    */
    
    //2. Note: You can indicate the fields to be returned
    /*
    async findAll(): Promise<Tenant[]> {
        return await this.tenantRepository.find({select: ["code", "name"]});
    }*/

    //3. For relations, you can specify relations to be included in return
    /**
     * find all and return only code and name along with customTheme relation
     */
    async findAll(): Promise<Users[]> {
        return await this.userRepository.find({select: ["id", "firstName"], relations: ["profile"]});
    }
    
    //4. Etc. See https://typeorm.io/#/find-options

    /**
     * 
     * @param id 
     * find by id
     */
    async findOne(id: string): Promise<Users> {
        return await this.userRepository.findOne(id);
    }
    
    /**
     * 
     * @param id 
     * Finds by a criterion (id in this case) and deletes. Returns void
     */
    async delete(id: string): Promise<void> {
        await this.userRepository.delete(id);
    }

    /**
     * 
     * @param tenant 
     * Remove the Tenant specifed. Returns Tenant removed.
     */
    async remove(user: Users): Promise<Users> {
        return await this.userRepository.remove(user);
    }

    //partial update
    /**
     * 
     * @param id 
     * @param user 
     * Find by the id and replace the fields sent in Dto
     */
    async update1(id: string, user: UpdateUsersDto): Promise<UpdateResult> {
        return await this.userRepository.update(id, { ...user })
    }

    /**
     * 
     * @param user 
     * No partial update allowed here. Saves the tenant object supplied
     */
    async update2(user: Users): Promise<Users> {
        return await this.userRepository.save(user)
    }


}