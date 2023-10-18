import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MenuModule } from './menu/menu.module';
import { CategoryModule } from './category/category.module';
import { Category } from './category/entities/category.entity';
import { AttributeModule } from './attribute/attribute.module';
import { Attribute } from './attribute/entities/attribute.entity';
import { Menu } from './menu/entities/menu.entity';
import { CategoryRelateAttribute } from './category-relate-attribute/entities/category-relate-attribute.entity';
import { CategoryRelateAttributeModule } from './category-relate-attribute/category-relate-attribute.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: '1234',
      username: 'postgres',
      entities: [Category, Attribute, Menu, CategoryRelateAttribute],
      database: 'db-test1',
      synchronize: true,
      logging: true,
    }),
    CategoryRelateAttributeModule,
    MenuModule,
    CategoryModule,
    AttributeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
