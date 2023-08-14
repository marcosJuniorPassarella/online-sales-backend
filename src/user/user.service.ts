import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { UserEntity } from './entity/user.entity';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
  public async createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
    const saltOrRounds = 10;
    const passwordHashed = await hash(createUserDto.password, saltOrRounds);

    const newUser: UserEntity = {
      ...createUserDto,
      id: this.users.length + 1,
      password: passwordHashed,
    };
    this.users.push(newUser);

    return newUser;
  }

  public async getAllUsers(): Promise<Array<UserEntity>> {
    return this.users;
  }
}
