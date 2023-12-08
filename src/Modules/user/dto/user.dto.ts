import {IsArray, IsEmail, IsEmpty, IsNotEmpty, IsString} from "@nestjs/class-validator";
export class UserDto {
    @IsString()
    @IsNotEmpty()
    username: string;

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsArray()
    @IsEmpty()
    tables: any[];
}
    
