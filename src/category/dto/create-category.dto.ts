import { IsNotEmpty, IsString, MinLength } from 'class-validator';
export class CreateCategoryDto {
  @IsString()
  @MinLength(5, { message: 'Name must have atleast 5 characters.' })
  @IsNotEmpty()
  name: string;
}
