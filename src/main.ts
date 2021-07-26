import 'reflect-metadata';
import 'dotenv/config';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './shared/app/app.module';
import { ValidationPipe } from '@nestjs/common';
import { validationPipeOptions } from './shared/configs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe(validationPipeOptions));
  await app.listen(3000);
}

bootstrap();
