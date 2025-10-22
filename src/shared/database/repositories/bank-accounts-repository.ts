import { Injectable } from '@nestjs/common';
import { type Prisma } from 'generated/prisma';
import { PrismaService } from '../prisma.service';

@Injectable()
export class BankAccountsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDTO: Prisma.BankAccountCreateArgs) {
    return this.prismaService.bankAccount.create(createDTO);
  }

  findFirst(findFirstDTO: Prisma.BankAccountFindFirstArgs) {
    return this.prismaService.bankAccount.findFirst(findFirstDTO);
  }

  findMany<T extends Prisma.BankAccountFindManyArgs>(
    findManyDTO: Prisma.SelectSubset<T, Prisma.BankAccountFindManyArgs>,
  ) {
    return this.prismaService.bankAccount.findMany(findManyDTO);
  }

  update(updateDTO: Prisma.BankAccountUpdateArgs) {
    return this.prismaService.bankAccount.update(updateDTO);
  }

  delete(deleteDTO: Prisma.BankAccountDeleteArgs) {
    return this.prismaService.bankAccount.delete(deleteDTO);
  }
}
