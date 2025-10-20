import { Module } from '@nestjs/common';
import { BankAccountsModule } from '../bank-accounts/bank-accounts.module';
import { ValidateBankAccountOwnershipService } from '../bank-accounts/services/validate-bank-account-ownership.service';
import { CategoriesModule } from '../categories/categories.module';
import { ValidateCategoryOwnershipService } from '../categories/services/validate-category-ownership.service';
import { TransactionsController } from './transactions.controller';
import { TransactionsService } from './transactions.service';

@Module({
  imports: [BankAccountsModule, CategoriesModule],
  controllers: [TransactionsController],
  providers: [
    TransactionsService,
    ValidateBankAccountOwnershipService,
    ValidateCategoryOwnershipService,
  ],
})
export class TransactionsModule {}
