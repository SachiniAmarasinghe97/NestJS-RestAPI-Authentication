//use this DTO to make sure that we’ll receive a valid email and a password that is not empty.
import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}
