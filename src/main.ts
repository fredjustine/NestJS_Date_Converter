import { NestFactory } from '@nestjs/core';
import { DateConverterModule } from './date-converter/date-converter.module';

async function bootstrap() {
  const app = await NestFactory.create(DateConverterModule);
  await app.listen(3000);
}
bootstrap();
