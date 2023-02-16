import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrderService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createOrderDto: CreateOrderDto) {
    if(!await this.prisma.item.findUnique(
      {
        where:{
          id:createOrderDto.itemId}
        })
      ){
        throw new NotFoundException(`ITEM with ID ${createOrderDto.itemId} not exsist`)
    }
    return this.prisma.order.create(
      {data: createOrderDto}
    )
  }
  
  async findAll() {
    return this.prisma.order.findMany({})
  }

  async findOne(id: number) {
    return await this.prisma.order.findUniqueOrThrow({where:{id}})
  }  

  async update(id: number, updateGameDto: UpdateOrderDto) {
    return  this.prisma.order.update({ where:{id},data:updateGameDto })
  }

  async remove(id: number) {
    return this.prisma.order.delete({where:{id}})
  }
}
