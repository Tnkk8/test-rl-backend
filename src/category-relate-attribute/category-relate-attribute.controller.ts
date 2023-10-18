import {
  Controller,
  Get,
  // Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CategoryRelateAttributeService } from './category-relate-attribute.service';
// import { CreateCategoryRelateAttributeDto } from './dto/create-category-relate-attribute.dto';
import { UpdateCategoryRelateAttributeDto } from './dto/update-category-relate-attribute.dto';

@Controller('categoryRelateAttribute')
export class CategoryRelateAttributeController {
  constructor(
    private readonly categoryRelateAttributeService: CategoryRelateAttributeService,
  ) {}

  // @Post()
  // create(
  //   @Body() createCategoryRelateAttributeDto: CreateCategoryRelateAttributeDto,
  // ) {
  //   return this.categoryRelateAttributeService.createCategoryRelateAttribute(
  //     createCategoryRelateAttributeDto,
  //   );
  // }

  @Get()
  findAll() {
    return this.categoryRelateAttributeService.findAllCategoryRelateAttribute();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoryRelateAttributeService.viewCategoryRelateAttribute(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCategoryRelateAttributeDto: UpdateCategoryRelateAttributeDto,
  ) {
    return this.categoryRelateAttributeService.updateCategoryRelateAttribute(
      +id,
      updateCategoryRelateAttributeDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoryRelateAttributeService.removeCategoryRelateAttribute(
      +id,
    );
  }
}
