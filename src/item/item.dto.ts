import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class CreateItemDTO {
  @IsNotEmpty()
  @IsString()
  todo: string;

  @IsNotEmpty()
  @IsString()
  limit: string;
}

export class UpdateItemDTO {
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  todo: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  limit: string;

  @IsOptional()
  @IsNotEmpty()
  isDone: boolean;
}
