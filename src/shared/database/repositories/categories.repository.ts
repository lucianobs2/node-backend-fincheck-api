import { Injectable } from '@nestjs/common';
import { type Prisma } from 'generated/prisma';
import { PrismaService } from '../prisma.service';

@Injectable()
export class CategoriesRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async findMany(findManyDTO: Prisma.CategoryFindManyArgs) {
    return this.prismaService.category.findMany(findManyDTO);
  }
}
