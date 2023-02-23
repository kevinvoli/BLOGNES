import * as Joi from '@hapi/joi';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';
import { PostModule } from './post/post.module';
import { GetawayGateway } from './getaway/getaway.gateway';

@Module({
  imports: [
    UserModule,
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        MYSQLBD_HOST: Joi.string().required(),
        MYSQLBD_PORT: Joi.number().required(),
        MYSQLBD_USER: Joi.string().required(),
        MYSQLBD_PASSWORD: Joi.string().required(),
        MYSQLBD_DATABASE: Joi.string().required(),
        PORT: Joi.number()
      })
    }),
    DatabaseModule,
    PostModule,
  ],
  controllers: [AppController],
  providers: [AppService, GetawayGateway],
})
export class AppModule { }