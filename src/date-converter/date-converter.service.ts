import { Injectable } from '@nestjs/common';
import { isObservable, throwError } from 'rxjs';
import { NumericDate } from './interfaces/numericDate.interface';
import { RomanDate } from './interfaces/romanDate.interface';

@Injectable()
export class DateConverterService {
    integerValues : number[] = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

    romanValues : string[] = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];


    ConvertDate(d: number, m: number, y: number): string{            

        let numDate: NumericDate = {
            day: d,
            month: m,
            year: y,
        };
        
        if(!this.IsValidDate(numDate)){
            throw new Error;
        } 

        let romDate: RomanDate = this.NumericDateToRomanDate(numDate);
        
        let result: string = romDate.day + '/' + romDate.month + '/' + romDate.year;
        return result;
    }

    IsValidDate(date: NumericDate): boolean{
        let result = false
        let daysInMonth: number[] = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if(!isNaN(date.day) && !isNaN(date.month) && !isNaN(date.year)){
            if(date.day >= 1 && date.month >= 1 && date.year >= 1){
                if (date.year % 400 === 0 || (date.year % 100 !== 0 && date.year % 4 === 0)){
                    daysInMonth[1] = 29;
                }
                if(date.day <= daysInMonth[date.month - 1]){
                    result = true;
                }
            }
        }     
        return result;
    }

    NumericDateToRomanDate(numDate: NumericDate): RomanDate{
        let result: RomanDate = {
            day: this.IntegerToRoman(numDate.day),
            month: this.IntegerToRoman(numDate.month),
            year: this.IntegerToRoman(numDate.year),
        };

        return result;
    }

    IntegerToRoman(num: number): string{
        let result: string = '';

        for(let i = 0; i < this.integerValues.length; i++){
            while(num >= this.integerValues[i]){
                num = num - this.integerValues[i];
                result = result + this.romanValues[i];
            }
        }

        return result;
    }   
}
