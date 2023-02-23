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
                host: configService.get('MYSQL_HOST'),
                username: configService.get('MYSQL_USER'),
                port: configService.get('MYSQL_PORT'),
                password: configService.get(''),
                database: configService.get('MYSQL_DATABASE'),
                entities: [
                    Post,
                    User
                ], 
                autoLoadEntities:true

            })
        })
    ]
})
export class DatabaseModule { }
