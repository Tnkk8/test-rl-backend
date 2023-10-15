import { Module } from '@nestjs/common';
import { CategoryRelateAttributeService } from './category-relate-attribute.service';
import { CategoryRelateAttributeController } from './category-relate-attribute.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryRelateAttribute } from './entities/category-relate-attribute.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryRelateAttribute])],
  controllers: [CategoryRelateAttributeController],
  providers: [CategoryRelateAttributeService],
})
export class CategoryRelateAttributeModule {}
