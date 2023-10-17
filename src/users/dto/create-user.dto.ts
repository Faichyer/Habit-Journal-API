import {
  MinLength,
  IsEmail,
  IsString,
  IsNotEmpty,
  IsUUID,
  MaxLength,
  IsStrongPassword,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsUUID()
  public id: string;

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
