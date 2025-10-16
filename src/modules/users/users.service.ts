import { Injectable } from '@nestjs/common';
import { UsersRepository } from 'src/shared/database/repositories/users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async getUserById(userId: string) {
    return await this.usersRepository.findUnique({
      where: { id: userId },
      select: { name: true, email: true, createdAt: true, updatedAt: true },
    });
  }
}
