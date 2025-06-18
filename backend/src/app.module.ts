import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Car } from './cars/car.entity';
import { CarsModule } from './cars/cars.module';
import { Image } from './cars/image.entity';
import { DatabaseModule } from './database/database.module';
import { Feedback } from './feedback/feedback.entity';
import { FeedbackModule } from './feedback/feedback.module';
import { Staff } from './staff/staff.entity';
import { StaffModule } from './staff/staff.module';

import * as dotenv from 'dotenv';
import { Feature } from './cars/feature.entity';

dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.PG_HOST || 'localhost',
      port: parseInt(process.env.PG_PORT ?? '5432', 10),
      username: process.env.PG_USER || 'postgres',
      password: process.env.PG_PASSWORD || 'root',
      database: process.env.PG_DATABASE,
      entities: [Car, Feedback, Staff, Image, Feature],
      synchronize: true, // Только для разработки!
      logging: true,
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    CarsModule,
    StaffModule,
    FeedbackModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
