import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EcomProduct } from './entities/product.entities';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

@Module({
  imports:[TypeOrmModule.forFeature([EcomProduct])],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}
