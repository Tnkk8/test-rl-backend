import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Attribute {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar', length: 255 })
  name: string;
  @Column({ type: 'varchar', length: 255 })
  type: string;
  @Column({ type: 'int' })
  price: number;
}