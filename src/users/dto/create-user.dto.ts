import {
  MinLength,
  IsEmail,
  IsString,
  IsNotEmpty,
  MaxLength,
  IsStrongPassword,
} from 'class-validator';

export class CreateUserDto {
  public id: number;

  @IsString()
  @IsNotEmpty()
  public username: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  public email: string;

  @MinLength(8)
  @IsStrongPassword()
  public password: string;
}
