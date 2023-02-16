import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty } from "class-validator"

export class CreateOrderDto {
    @ApiProperty()
    @IsNotEmpty()
    name:string 
    @ApiProperty()
    @IsNotEmpty()
    description:string
    @IsNotEmpty()
    @ApiProperty()
    itemId: number
}
