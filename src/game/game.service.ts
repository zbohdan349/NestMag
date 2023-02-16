import { Injectable} from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';

@Injectable()
export class GameService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createGameDto: CreateGameDto) {
    return this.prisma.game.create( {
      data: createGameDto
    })
  }

  async findAll() {
    return this.prisma.game.findMany({})
  }

  async findOne(id: number) {
    return await this.prisma.game.findUniqueOrThrow({where:{id}})
  }  

  async update(id: number, updateGameDto: UpdateGameDto) {
    return  this.prisma.game.update({ where:{id},data:updateGameDto })
  }

  async remove(id: number) {
    return this.prisma.game.delete({where:{id}})
  }
}
