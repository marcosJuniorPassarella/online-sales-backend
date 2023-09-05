import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dtos/createUser.dto';
import { UserEntity } from './entities/user.entity';
import { ReturnUserDto } from './dtos/returnUser.dto';

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
  public async getAllUsers(): Promise<Array<ReturnUserDto>> {
    return (await this.userService.getAllUsers()).map(
      (userEntity) => new ReturnUserDto(userEntity),
    );
  }

  @Get('/:userId')
  public async findUserById(
    @Param('userId') userId: number,
  ): Promise<ReturnUserDto> {
    return new ReturnUserDto(
      await this.userService.findUserByIdUsingRelations(userId),
    );
  }
}
