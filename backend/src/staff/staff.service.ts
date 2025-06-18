import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Staff } from './staff.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StaffService {
  constructor(
    @InjectRepository(Staff)
    private readonly staffRepository: Repository<Staff>,
  ) {}

  async findAll(): Promise<Staff[]> {
    return this.staffRepository.find();
  }
}
