import { IsInt, IsNotEmpty } from 'class-validator';
export class CreateCategoryRelateAttributeDto {
  @IsInt()
  @IsNotEmpty()
  att_id: number;

  @IsInt()
  @IsNotEmpty()
  menu_id: number;
}
