import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoryRelateAttributeDto } from './create-category-relate-attribute.dto';

export class UpdateCategoryRelateAttributeDto extends PartialType(
  CreateCategoryRelateAttributeDto,
) {}
