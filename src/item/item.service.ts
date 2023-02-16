import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions/not-found.exception';
import { PrismaService } from 'nestjs-prisma';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';

@Injectable()
export class ItemService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createItemDto: CreateItemDto) {
    if(! await this.prisma.game.findUnique(
      {
        where:{
          id:createItemDto.gameId}
        })
      ){
        throw new NotFoundException(`GAME with ID ${createItemDto.gameId} not exsist`)
    }
    return  this.prisma.item.create({
      data: createItemDto
    })
  }

  async findAll() {
    return this.prisma.item.findMany({})
  }

  async findOne(id: number) {
    return this.prisma.item.findUniqueOrThrow({where:{id}})
  }

  async update(id: number, updateItemDto: UpdateItemDto) {
    return await this.prisma.item.update({ where:{id},data:updateItemDto });
  }

  async remove(id: number) {
    return await this.prisma.item.delete({where:{id}})
  }
}
