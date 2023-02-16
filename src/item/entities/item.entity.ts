import { ApiProperty } from "@nestjs/swagger"

export class Item {
    @ApiProperty()
    id: number
    @ApiProperty()
    name: string
    @ApiProperty()
    descriotion: string 
    @ApiProperty()
    price: number 
}
