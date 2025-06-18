import { Body, Controller, Post } from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { Feedback } from './feedback.entity';
import { ApiTags, ApiResponse, ApiBody, ApiOperation } from '@nestjs/swagger';

@ApiTags('Обращения')
@Controller('feedback')
export class FeedbackController {
  constructor(private readonly feedbackService: FeedbackService) {}

  @Post()
  @ApiOperation({
    summary: 'Создаёт новое обращение',
    description:
      'Создаёт новое обращение отправляет письмо на почту пользователя',
  })
  @ApiResponse({
    status: 201,
    description: 'Создаёт новое обращение',
    type: Feedback,
  })
  @ApiBody({
    type: CreateFeedbackDto,
    description: 'Данные для создания обращения',
    examples: {
      default: {
        summary: 'Пример обращения',
        value: {
          name: 'Иван Иванов',
          phone: '+79001234567',
          email: 'ivan@example.com',
          message: 'Хочу узнать подробнее о доставке автомобиля.',
        },
      },
    },
  })
  async createFeedback(@Body() dto: CreateFeedbackDto) {
    return this.feedbackService.create(dto);
  }
}
