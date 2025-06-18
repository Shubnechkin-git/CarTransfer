import { Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SeedService } from './database.service';

@ApiTags('Для разработчика')
@Controller('seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Заполнить базу данных тестовыми данными',
    description:
      'Удаляет все существующие данные и заполняет базу тестовыми автомобилями, сотрудниками и изображениями.',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'База данных успешно заполнена тестовыми данными',
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Ошибка при заполнении базы данных',
  })
  async seedDatabase() {
    await this.seedService.seedDatabase();
    return { message: 'База данных успешно заполнена тестовыми данными' };
  }
}
