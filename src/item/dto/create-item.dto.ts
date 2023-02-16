import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty } from "class-validator"

export class CreateItemDto{
    @ApiProperty()
    @IsNotEmpty()
    name: string
    @ApiProperty()
    @IsNotEmpty()
    descriotion: string 
    @ApiProperty()
    @IsNotEmpty()
    price: number
    @ApiProperty()
    @IsNotEmpty()
    gameId : number


}
