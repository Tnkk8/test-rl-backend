import { Attribute } from 'src/attribute/entities/attribute.entity';
import { Category } from 'src/category/entities/category.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class CategoryRelateAttribute {
  /**
   * this decorator will help to auto generate id for the table.
   */
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  cate_id: number;

  @Column({ type: 'int' })
  att_id: number;

  @ManyToOne(() => Category)
  @JoinColumn({ name: 'cate_id' })
  category: Category;

  @ManyToOne(() => Attribute)
  @JoinColumn({ name: 'att_id' })
  attribute: Attribute;
}
