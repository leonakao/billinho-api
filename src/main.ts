import 'reflect-metadata';
import 'dotenv/config';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './shared/app/app.module';
import { ValidationPipe } from '@nestjs/common';
import { validationPipeOptions } from './shared/configs';
import { useContainer } from 'class-validator';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe(validationPipeOptions));

  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  const config = new DocumentBuilder()
    .setTitle('Billinho API')
    .setDescription(
      'API para controle de alunos e matrículas, e também para responsável por gerar as mensalidades',
    )
    .setVersion('1.0')
    .addTag('Students')
    .addTag('Enrollments')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}

bootstrap();
