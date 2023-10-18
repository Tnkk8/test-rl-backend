import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
// import { CreateCategoryRelateAttributeDto } from './dto/create-category-relate-attribute.dto';
import { UpdateCategoryRelateAttributeDto } from './dto/update-category-relate-attribute.dto';
import { CategoryRelateAttribute } from './entities/category-relate-attribute.entity';

@Injectable()
export class CategoryRelateAttributeService {
  /**
   * Here, we have used data mapper approch for this tutorial that is why we
   * injecting repository here. Another approch can be Active records.
   */
  constructor(
    @InjectRepository(CategoryRelateAttribute)
    private readonly categoryRelateAttributeRepository: Repository<CategoryRelateAttribute>,
  ) {}

  /**
   * this is function is used to create CategoryRelateAttribute in CategoryRelateAttribute Entity.
   * @param createCategoryRelateAttributeDto this will type of createCategoryRelateAttributeDto in which
   * we have defined what are the keys we are expecting from body
   * @returns promise of categoryRelateAttribute
   */
  // createCategoryRelateAttribute(
  //   createCategoryRelateAttributeDto: CreateCategoryRelateAttributeDto,
  // ): Promise<CategoryRelateAttribute> {
  //   const categoryRelateAttribute: CategoryRelateAttribute =
  //     new CategoryRelateAttribute();
  //   return this.categoryRelateAttributeRepository.save(categoryRelateAttribute);
  // }

  /**
   * this function is used to get all the categoryRelateAttribute's list
   * @returns promise of array of categoryRelateAttributes
   */
  findAllCategoryRelateAttribute(): Promise<CategoryRelateAttribute[]> {
    return this.categoryRelateAttributeRepository.find({
      relations: { category: true, attribute: true },
    });
  }

  /**
   * this function used to get data of use whose id is passed in parameter
   * @param id is type of number, which represent the id of categoryRelateAttribute.
   * @returns promise of categoryRelateAttribute
   */
  viewCategoryRelateAttribute(id: number): Promise<CategoryRelateAttribute> {
    return this.categoryRelateAttributeRepository.findOneBy({ id });
  }

  /**
   * this function is used to updated specific categoryRelateAttribute whose id is passed in
   * parameter along with passed updated data
   * @param id is type of number, which represent the id of categoryRelateAttribute.
   * @param updateCategoryRelateAttributeDto this is partial type of createCategoryRelateAttributeDto.
   * @returns promise of udpate categoryRelateAttribute
   */
  updateCategoryRelateAttribute(
    id: number,
    updateCategoryRelateAttributeDto: UpdateCategoryRelateAttributeDto,
  ): Promise<CategoryRelateAttribute> {
    const categoryRelateAttribute: CategoryRelateAttribute =
      new CategoryRelateAttribute();
    categoryRelateAttribute.att_id = updateCategoryRelateAttributeDto.att_id;
    return this.categoryRelateAttributeRepository.save(categoryRelateAttribute);
  }

  /**
   * this function is used to remove or delete categoryRelateAttribute from database.
   * @param id is the type of number, which represent id of categoryRelateAttribute
   * @returns nuber of rows deleted or affected
   */
  removeCategoryRelateAttribute(id: number): Promise<{ affected?: number }> {
    return this.categoryRelateAttributeRepository.delete(id);
  }
}
