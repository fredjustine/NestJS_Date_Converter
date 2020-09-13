import { Module } from '@nestjs/common';
import { DateConverterController } from './date-converter.controller';
import { DateConverterService } from './date-converter.service';

@Module({
  controllers: [DateConverterController],
  providers: [DateConverterService]
})
export class DateConverterModule {}
