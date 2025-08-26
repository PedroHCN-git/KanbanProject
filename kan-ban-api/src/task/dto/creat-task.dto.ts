import { IsNotEmpty, IsString } from 'class-validator'

export class CreateTaskDTO {
  @IsNotEmpty()
  @IsString()
  title: String;

  @IsString()
  description: String;

  @IsNotEmpty()
  @IsString()
  importance: String;
}