import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Image } from './image.entity';
import { Feature } from './feature.entity';

@Entity()
export class Car {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  title: string;

  @Column({ length: 50 })
  country: string;

  @Column()
  year: number;

  @Column({ type: 'decimal', precision: 12, scale: 2 })
  price: number;

  @Column()
  mileage: number;

  @Column({ length: 100 })
  engine: string;

  @Column({ length: 50 })
  transmission: string;

  @Column({ length: 50 })
  drive: string;

  @Column({ length: 50, nullable: true })
  color: string;

  @Column({ length: 100, nullable: true })
  interior: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'decimal', precision: 2, scale: 1, nullable: true })
  rating: number;

  @Column({ name: 'is_new', default: false })
  isNew: boolean;

  @OneToMany(() => Image, (image) => image.car)
  images: Image[];

  @Column({
    name: 'created_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @OneToMany(() => Feature, (feature) => feature.car, { cascade: true })
  features: Feature[];

  @Column({
    name: 'updated_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;
}
