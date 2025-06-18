import { Controller, Get } from '@nestjs/common';
import { StaffService } from './staff.service';
import { Staff } from './staff.entity';
import { ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';

@ApiTags('Сотрудники')
@Controller('staff')
export class StaffController {
  constructor(private readonly staffService: StaffService) {}

  @Get()
  @ApiOperation({
    summary: 'Возвращает список всех сотрудников',
  })
  @ApiResponse({
    status: 200,
    description: 'Возвращает список всех сотрудников',
    type: [Staff],
  })
  async getAllStaff(): Promise<Staff[]> {
    return this.staffService.findAll();
  }
}
