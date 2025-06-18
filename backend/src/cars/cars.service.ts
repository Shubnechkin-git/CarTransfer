// src/cars/car.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Car } from './car.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CarsService {
  constructor(
    @InjectRepository(Car)
    private readonly carRepository: Repository<Car>,
  ) {}

  async findAll(): Promise<Car[]> {
    return this.carRepository.find({
      relations: ['images', 'features'],
      order: { id: 'DESC' },
    });
  }

  async findOne(id: number): Promise<Car | null> {
    return this.carRepository.findOne({
      where: { id },
      relations: ['images', 'features'],
    });
  }
}
