import { Test, TestingModule } from '@nestjs/testing';
import { DateConverterService } from './date-converter.service';

describe('DateConverterService', () => {
  let service: DateConverterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DateConverterService],
    }).compile();

    service = module.get<DateConverterService>(DateConverterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('ConvertDate', () => {
    it('should transform a numeric date into the corresponding roman date', () => {
      const day = 20;
      const month = 10;
      const year = 2020;
      expect(service.ConvertDate(day, month, year)).toBe('XX/X/MMXX');
    })

    /*it('should throw an error because there is a 0', () => {
      const day = 0;
      const month = 10;
      const year = 2020;
      expect(service.ConvertDate(day, month, year)).toThrow();
    })

    it('should throw an error because there is a 0', () => {
      const day = 20;
      const month = 0;
      const year = 2020;
      expect(service.ConvertDate(day, month, year)).toThrowError;
    })

    it('should throw an error because there is a 0', () => {
      const day = 20;
      const month = 10;
      const year = 0;
      expect(service.ConvertDate(day, month, year)).toThrowError;
    })

    it('should throw an error because there is a negative number', () => {
      const day = -20;
      const month = 10;
      const year = 2020;
      expect(service.ConvertDate(day, month, year)).toThrowError;
    })

    it('should throw an error because there is a negative number', () => {
      const day = 20;
      const month = -10;
      const year = 2020;
      expect(service.ConvertDate(day, month, year)).toThrowError;
    })

    it('should throw an error because there is a negative number', () => {
      const day = 20;
      const month = 10;
      const year = -1800;
      expect(service.ConvertDate(day, month, year)).toThrowError;
    })

    it('should throw an error because the month is invalid', () => {
      const day = 20;
      const month = 13;
      const year = 2020;
      expect(service.ConvertDate(day, month, year)).toThrowError;
    })

    it('should throw an error because the day is invalid', () => {
      const day = 30;
      const month = 2;
      const year = 2020;
      expect(service.ConvertDate(day, month, year)).toThrowError(new Error);
    })

    it('should throw an error because the date is invalid', () => {
      const day = Number('');
      const month = 10;
      const year = 2020;
      expect(service.ConvertDate(day, month, year)).toThrowError;
    })

    it('should throw an error because the date is invalid', () => {
      const day = 20;
      const month = Number('03i');
      const year = 2020;
      expect(service.ConvertDate(day, month, year)).toThrowError;
    })

    it('should throw an error because the date is empty', () => {
      const day = Number('');
      const month = Number('');
      const year = Number('');
      expect(service.ConvertDate(day, month, year)).toThrowError;
    }) */
  })
});
