import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from '../post/entities/post.entity';
import { User } from '../user/entities/user.entity';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => ({
                type: 'mysql',
                host: configService.get('MYSQLBD_HOST'),
                username: configService.get('MYSQLBD_USER'),
                port: configService.get('MYSQLBD_PORT'),
                password: configService.get(''),
                database: configService.get('MYSQLBD_DATABASE'),
                entities: [
                    Post,
                    User
                ], synchronize: true,

            })
        })
    ]
})
export class DatabaseModule { }
