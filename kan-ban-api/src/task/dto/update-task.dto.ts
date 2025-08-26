import { IsNotEmpty, IsString } from 'class-validator'

export class UpdateTaskDTO {
  @IsString()
  title: String;

  @IsString()
  description: String;

  @IsNotEmpty()
  @IsString()
  importance: String;
}