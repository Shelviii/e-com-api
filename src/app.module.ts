import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EcomProduct } from './product/entities/product.entities';
import { ProductModule } from './product/product.module';
import { PromotionModule } from './promotion/promotion.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin1234',
      database: 'ecom',
      entities: [EcomProduct],
      synchronize: true,
  }), ProductModule, PromotionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
