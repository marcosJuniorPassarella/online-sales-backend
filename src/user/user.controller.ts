import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get()
  async getAllUsers(): Promise<string> {
    return JSON.stringify({
      test: 'abc',
    });
  }
}
