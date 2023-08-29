import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dtos/createUser.dto';
import { UserEntity } from './entities/user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UsePipes(ValidationPipe)
  @Post()
  public async createUser(
    @Body() createUser: CreateUserDto,
  ): Promise<UserEntity> {
    return this.userService.createUser(createUser);
  }

  @Get()
  public async getAllUsers(): Promise<Array<UserEntity>> {
    return this.userService.getAllUsers();
  }
}
