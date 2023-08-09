import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { User } from './interfaces/user.interface';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
  private users: Array<User> = [];

  public async createUser(createUserDto: CreateUserDto): Promise<User> {
    const saltOrRounds = 10;
    const passwordHashed = await hash(createUserDto.password, saltOrRounds);

    const newUser: User = {
      ...createUserDto,
      id: this.users.length + 1,
      password: passwordHashed,
    };
    this.users.push(newUser);

    return newUser;
  }

  public async getAllUsers(): Promise<Array<User>> {
    return this.users;
  }
}
