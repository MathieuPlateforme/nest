import {IsNotEmpty, IsString} from "@nestjs/class-validator";
import { TableEntity } from "src/Modules/table/table.entity";
export class CardDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    description: string;

    @IsString()
    @IsNotEmpty()
    status: string;

    @IsNotEmpty()
    table: TableEntity;
}
    
