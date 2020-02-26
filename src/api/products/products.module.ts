import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from './products.model';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    PassportModule,
    MongooseModule.forFeature(
      [
        {
          name: 'Almacen',
          schema: ProductSchema,
        },
      ],
      'products',
    ),
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
