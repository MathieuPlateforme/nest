import {IsArray, IsEmpty, IsNotEmpty, IsString} from "@nestjs/class-validator";
import { UserEntity } from "src/Modules/user/user.entity";
export class TableDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsArray()
    @IsEmpty()
    cards: any[];

    @IsString()
    @IsNotEmpty()
    user: UserEntity;
}
    
