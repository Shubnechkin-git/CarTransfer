import { Module } from '@nestjs/common';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';
import { Car } from './car.entity';
import { Image } from './image.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Feature } from './feature.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Car, Image, Feature])],
  controllers: [CarsController],
  providers: [CarsService],
})
export class CarsModule {}
