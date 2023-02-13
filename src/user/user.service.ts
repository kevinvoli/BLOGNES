import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt'
import { LoginUserDto } from './dto/login-user.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private jwtService: JwtService
  ) { }
  async create(createUserDto: CreateUserDto): Promise<User> {
    const users = this.userRepository.create({
      ...createUserDto
    });

    users.salt = await bcrypt.genSalt();
    users.password = await bcrypt.hash(users.password, users.salt)

    try {
      await this.userRepository.save(users)

    } catch (error) {
      throw new ConflictException(error.message)

    }

    return users

  }

  async login(loginUserDto: LoginUserDto) {
    const { mail, password } = loginUserDto;
    let users: User
    try {
      users = await this.userRepository.findOne({ where: { mail } })
      if (!users) throw new NotFoundException()
    } catch (error) {
      throw new NotFoundException(error.message)
    }
    const hashedPassword = await bcrypt.hash(password, users.salt)
    if ((users.password == hashedPassword)) {
      const payload = { users: users.mail, username: users.usernam }
      const jwt = await this.jwtService.sign(payload)
      return { access_token: jwt }
    } else {
      throw new NotFoundException('echec')
    }
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
