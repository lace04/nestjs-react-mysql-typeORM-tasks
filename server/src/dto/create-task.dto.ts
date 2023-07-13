import { IsString, IsNotEmpty, IsBoolean, IsOptional } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  description: string;
  
  @IsBoolean()
  @IsOptional()
  done?: boolean;
}
