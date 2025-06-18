import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');
  app.enableCors({
    origin: 'http://localhost:3000',
    credentials: true,
  });

  // --- Настройка Swagger ---
  const config = new DocumentBuilder()
    .setTitle('API автомагазина')
    .setDescription('Документцация API автомагазина')
    .setVersion('1.0')
    .addBearerAuth() // ⬅️ Добавим поддержку JWT в Swagger UI
    .build();

  const document = SwaggerModule.createDocument(app, config);
  if (process.env.NODE_ENV == 'development')
    SwaggerModule.setup('/', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
