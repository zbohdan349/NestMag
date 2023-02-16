import { HttpStatus, Module } from '@nestjs/common';
import { PrismaModule } from 'nestjs-prisma';
import { GameModule } from './game/game.module';
import { ItemModule } from './item/item.module';
import { OrderModule } from './order/order.module';


@Module({
  imports: [GameModule, ItemModule, OrderModule,
    PrismaModule.forRoot({
      isGlobal: true,
    }) 
  ]
})
export class AppModule {}


