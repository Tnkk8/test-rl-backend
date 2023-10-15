import { CategoryRelateAttribute } from 'src/category-relate-attribute/entities/category-relate-attribute.entity';
import { Menu } from 'src/menu/entities/menu.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 30 })
  name: string;

  @OneToMany(() => Menu, (menu) => menu.category)
  menus: Menu[];

  @OneToMany(
    () => CategoryRelateAttribute,
    (cateRelateAttr) => cateRelateAttr.category,
  )
  attributes: CategoryRelateAttribute[];
}
