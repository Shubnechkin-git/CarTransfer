// src/features/feature.entity.ts

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Car } from '../cars/car.entity';

@Entity()
export class Feature {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name: string; // название характеристики, например: "Кондиционер", "Круиз-контроль"

  @ManyToOne(() => Car, (car) => car.features, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'car_id' })
  car: Car;
}
