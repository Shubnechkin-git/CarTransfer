import { IsString, IsOptional, IsEmail, Length } from 'class-validator';

export class CreateFeedbackDto {
  @IsString()
  @Length(1, 100)
  name: string;

  @IsString()
  @Length(5, 20)
  phone: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  message?: string;
}
