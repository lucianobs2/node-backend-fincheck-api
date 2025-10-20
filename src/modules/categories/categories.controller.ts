import { Controller, Get } from '@nestjs/common';
import { UserIsActive } from 'src/shared/decorators/UserIsActive';
import { CategoriesService } from './services/categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  async findAll(@UserIsActive() userId: string) {
    return this.categoriesService.findAllByUserId(userId);
  }
}
