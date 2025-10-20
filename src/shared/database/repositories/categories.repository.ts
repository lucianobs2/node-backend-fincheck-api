import { Injectable } from '@nestjs/common';
import { type Prisma } from 'generated/prisma';
import { PrismaService } from '../prisma.service';

@Injectable()
export class CategoriesRepository {
  constructor(private readonly prismaService: PrismaService) {}

  findMany(findManyDTO: Prisma.CategoryFindManyArgs) {
    return this.prismaService.category.findMany(findManyDTO);
  }

  findFirst(findFirstDTO: Prisma.CategoryFindFirstArgs) {
    return this.prismaService.category.findFirst(findFirstDTO);
  }
}
