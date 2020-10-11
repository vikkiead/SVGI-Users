import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profile } from './models/profile.entity';
import { Users } from './models/users.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { RolesModule } from './modules/roles/roles.module';

import { PermissionsModule } from './modules/permissions/permissions.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Users, Profile]), 
    RolesModule, 
    PermissionsModule
  ],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}