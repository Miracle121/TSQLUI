import { IsNotEmpty, IsNumberString, IsOptional, IsUUID } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  title!: string;

  @IsNumberString()
  price!: string;

  @IsOptional()
  description?: string;

  @IsOptional()
  @IsUUID()
  categoryId?: string;
}
