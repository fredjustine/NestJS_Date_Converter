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

    it('should work because there is 31 days in october', () => {
      const day = 31;
      const month = 10;
      const year = 2020;
      expect(service.ConvertDate(day, month, year)).toBe('XXXI/X/MMXX');
    })

    it('should work because the year is bissextile', () => {
      const day = 29;
      const month = 2;
      const year = 2020;
      expect(service.ConvertDate(day, month, year)).toBe('XXIX/II/MMXX');
    })

    it('should throw an error because the year is not bissextile', () => {
      const day = 29;
      const month = 2;
      const year = 2021;
      try{
        service.ConvertDate(day, month, year);
        expect(true).toBe(false);
      }
      catch(error){
        expect(true).toBe(true);
      }
    })

    it('should throw an error because there is a 0', () => {
      const day = 0;
      const month = 10;
      const year = 2020;
      try{
        service.ConvertDate(day, month, year);
        expect(true).toBe(false);
      }
      catch(error){
        expect(true).toBe(true);
      }
    })

    it('should throw an error because there is a 0', () => {
      const day = 20;
      const month = 0;
      const year = 2020;
      
      try{
        service.ConvertDate(day, month, year);
        expect(true).toBe(false);
      }
      catch(error){
        expect(true).toBe(true);
      }
    })

    it('should throw an error because there is a 0', () => {
      const day = 20;
      const month = 10;
      const year = 0;
      
      try{
        service.ConvertDate(day, month, year);
        expect(true).toBe(false);
      }
      catch(error){
        expect(true).toBe(true);
      }
    })

    it('should throw an error because there is a negative number', () => {
      const day = -20;
      const month = 10;
      const year = 2020;
      
      try{
        service.ConvertDate(day, month, year);
        expect(true).toBe(false);
      }
      catch(error){
        expect(true).toBe(true);
      }
    })

    it('should throw an error because there is a negative number', () => {
      const day = 20;
      const month = -10;
      const year = 2020;
      
      try{
        service.ConvertDate(day, month, year);
        expect(true).toBe(false);
      }
      catch(error){
        expect(true).toBe(true);
      }
    })

    it('should throw an error because there is a negative number', () => {
      const day = 20;
      const month = 10;
      const year = -1800;
      
      try{
        service.ConvertDate(day, month, year);
        expect(true).toBe(false);
      }
      catch(error){
        expect(true).toBe(true);
      }
    })

    it('should throw an error because the month is invalid', () => {
      const day = 20;
      const month = 13;
      const year = 2020;
      
      try{
        service.ConvertDate(day, month, year);
        expect(true).toBe(false);
      }
      catch(error){
        expect(true).toBe(true);
      }
    })

    it('should throw an error because the day is invalid', () => {
      const day = 33;
      const month = 2;
      const year = 2020;
      
      try{
        service.ConvertDate(day, month, year);
        expect(true).toBe(false);
      }
      catch(error){
        expect(true).toBe(true);
      }
    })

    it('should throw an error because there is 30 days in november', () => {
      const day = 31;
      const month = 11;
      const year = 2020;
      
      try{
        service.ConvertDate(day, month, year);
        expect(true).toBe(false);
      }
      catch(error){
        expect(true).toBe(true);
      }
    })

    it('should throw an error because the day is empty', () => {
      const day = Number('');
      const month = 10;
      const year = 2020;
      
      try{
        service.ConvertDate(day, month, year);
        expect(true).toBe(false);
      }
      catch(error){
        expect(true).toBe(true);
      }
    })

    it('should throw an error because the month is empty', () => {
      const day = 26;
      const month = Number('');
      const year = 2020;
      
      try{
        service.ConvertDate(day, month, year);
        expect(true).toBe(false);
      }
      catch(error){
        expect(true).toBe(true);
      }
    })

    it('should throw an error because the year is empty', () => {
      const day = 26;
      const month = 10;
      const year = Number('');
      
      try{
        service.ConvertDate(day, month, year);
        expect(true).toBe(false);
      }
      catch(error){
        expect(true).toBe(true);
      }
    })

    it('should throw an error because the day is invalid', () => {
      const day = Number('03i');
      const month = 10;
      const year = 2020;
      
      try{
        service.ConvertDate(day, month, year);
        expect(true).toBe(false);
      }
      catch(error){
        expect(true).toBe(true);
      }
    })

    it('should throw an error because the month is invalid', () => {
      const day = 20;
      const month = Number('03i');
      const year = 2020;
      
      try{
        service.ConvertDate(day, month, year);
        expect(true).toBe(false);
      }
      catch(error){
        expect(true).toBe(true);
      }
    })

    it('should throw an error because the year is invalid', () => {
      const day = 20;
      const month = 10;
      const year = Number('03i');
      
      try{
        service.ConvertDate(day, month, year);
        expect(true).toBe(false);
      }
      catch(error){
        expect(true).toBe(true);
      }
    })

    it('should throw an error because the date is empty', () => {
      const day = Number('');
      const month = Number('');
      const year = Number('');

      try{
        service.ConvertDate(day, month, year);
        expect(true).toBe(false);
      }
      catch(error){
        expect(true).toBe(true);
      }
    }) 
  })
});
