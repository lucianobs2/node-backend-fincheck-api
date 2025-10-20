import { Injectable } from '@nestjs/common';
import { type Prisma } from 'generated/prisma';
import { PrismaService } from '../prisma.service';

@Injectable()
export class TransactionsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDTO: Prisma.TransactionCreateArgs) {
    return this.prismaService.transaction.create(createDTO);
  }

  findFirst(findFirstDTO: Prisma.TransactionFindFirstArgs) {
    return this.prismaService.transaction.findFirst(findFirstDTO);
  }

  findMany(findManyDTO: Prisma.TransactionFindManyArgs) {
    return this.prismaService.transaction.findMany(findManyDTO);
  }

  update(updateDTO: Prisma.TransactionUpdateArgs) {
    return this.prismaService.transaction.update(updateDTO);
  }

  delete(deleteDTO: Prisma.TransactionDeleteArgs) {
    return this.prismaService.transaction.delete(deleteDTO);
  }
}
