import { Controller, Get } from '@nestjs/common';
import { UserIsActive } from 'src/shared/decorators/UserIsActive';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get('/me')
  me(@UserIsActive() userId: string) {
    return this.usersService.getUserById(userId);
  }
}
