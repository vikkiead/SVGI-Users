import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
//We need these to read our environment config variables
//import { ConfigModule, ConfigService } from '@nestjs/config';
import { DatabaseModule } from './app.database.module';
import * as Joi from '@hapi/joi';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [ UsersModule, 

    ConfigModule.forRoot({
      validationSchema: Joi.object({
        POSTGRES_HOST: Joi.string(),
        POSTGRES_PORT: Joi.number(),
        POSTGRES_USER: Joi.string(),
        POSTGRES_PASSWORD: Joi.string(),
        POSTGRES_DB: Joi.string(),
        PORT: Joi.number(),
      })
    }),
    DatabaseModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}