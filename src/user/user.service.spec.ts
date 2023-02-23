import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserService } from './user.service';
import { AppModule } from '../app.module';
import { UserModule } from './user.module';
import { JwtModule } from '@nestjs/jwt';
import { CreateUserDto } from '../user/dto/create-user.dto'
import * as request from 'supertest'

class UserRepositoryFake { }

describe('UserService', () => {
  let service: UserService;
  let mockUser: CreateUserDto

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        AppModule, UserModule, JwtModule
      ],
      providers: [
        UserService,
        {
          provide: getRepositoryToken(User),
          useClass: UserRepositoryFake
        }
      ],
    }).compile();

    service = module.get<UserService>(UserService);

    mockUser = {
      "mail": "kevinssssasv@gmail.com",
      "usernam": "kevin",
      "password": "cool"
    }



  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it(`create user profil`, async () => {
    try {
      await service.create(mockUser);
    } catch (err) {
      expect(err).toBeInstanceOf('error')
    }
    done()
  })
});
function done() {
  throw new Error('Function not implemented.');
}

