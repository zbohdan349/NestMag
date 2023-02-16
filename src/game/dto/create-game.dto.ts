import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty } from "class-validator"

export class CreateGameDto {
    @ApiProperty()
    @IsNotEmpty()
    name:string 
    @ApiProperty()
    @IsNotEmpty()
    description:string
}
