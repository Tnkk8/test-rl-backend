import { IsInt, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateAttributeDto {
  @IsString()
  @MinLength(5, { message: 'Name must have atleast 2 characters.' })
  @IsNotEmpty()
  name: string;

  @IsString()
  @MinLength(5, { message: 'Name must have atleast 2 characters.' })
  @IsNotEmpty()
  type: string;

  @IsInt()
  @IsNotEmpty()
  price: number;
}
