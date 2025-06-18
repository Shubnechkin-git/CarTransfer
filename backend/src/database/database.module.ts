import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Car } from 'src/cars/car.entity';
import { Image } from 'src/cars/image.entity';
import { Staff } from 'src/staff/staff.entity';
import { SeedService } from './database.service';
import { SeedController } from './database.controller';
import { Feature } from 'src/cars/feature.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Car, Staff, Image, Feature])],
  controllers: [SeedController],
  providers: [SeedService],
  exports: [SeedService],
})
export class DatabaseModule {}
