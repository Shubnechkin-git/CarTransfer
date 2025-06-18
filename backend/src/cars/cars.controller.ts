import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  NotFoundException,
} from '@nestjs/common';
import { Car } from './car.entity';
import { CarsService } from './cars.service';
import {
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiParam,
  ApiOkResponse,
  ApiNotFoundResponse,
} from '@nestjs/swagger';

@ApiTags('Автомобили') // Группировка в Swagger UI
@Controller('cars')
export class CarsController {
  constructor(private readonly carService: CarsService) {}

  @Get()
  @ApiOperation({
    summary: 'Получить список всех автомобилей',
    description:
      'Возвращает полный список автомобилей с их изображениями, отсортированный по ID в порядке убывания',
  })
  @ApiOkResponse({
    type: [Car],
    description: 'Успешный ответ - массив автомобилей',
  })
  @ApiResponse({
    status: 500,
    description: 'Внутренняя ошибка сервера',
  })
  async findAll(): Promise<Car[]> {
    return this.carService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Получить автомобиль по ID',
    description:
      'Возвращает подробную информацию об автомобиле по его идентификатору',
  })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'Идентификатор автомобиля',
    example: 1,
  })
  @ApiOkResponse({
    type: Car,
    description: 'Успешный ответ - найденный автомобиль',
  })
  @ApiNotFoundResponse({
    description: 'Автомобиль с указанным ID не найден',
  })
  @ApiResponse({
    status: 400,
    description: 'Неверный формат ID (должен быть числом)',
  })
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Car> {
    const car = await this.carService.findOne(id);
    if (!car) {
      throw new NotFoundException(`Автомобиль с ID ${id} не найден`);
    }
    return car;
  }
}
