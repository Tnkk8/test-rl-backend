import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  createCategory(createCategoryDto: CreateCategoryDto): Promise<Category> {
    console.log(createCategoryDto);
    const category: Category = new Category();
    category.name = createCategoryDto.name;
    return this.categoryRepository.save(category);
  }
  updateCategory(
    id: number,
    updateCategoryDto: UpdateCategoryDto,
  ): Promise<Category> {
    const category: Category = new Category();
    category.id = id;
    category.name = updateCategoryDto.name;
    return this.categoryRepository.save(category);
  }
  findAllCategory(): Promise<Category[]> {
    console.log('xxxxxxxxxxx');
    return this.categoryRepository.find({
      order: { id: 'ASC' },
      // relations: { menus: true, attributes: true },
      relations: ['menus', 'attributes.attribute'],
    });
  }
  findCategoryById(id: number): Promise<Category> {
    return this.categoryRepository.findOneBy({ id });
  }
  removeCategory(id: number): Promise<{ affected?: number }> {
    return this.categoryRepository.delete(id);
  }
}
