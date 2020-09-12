import { Catch, Controller, Get, HttpException, HttpStatus, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import { DateConverterService } from './date-converter.service';

@Controller('date-converter')
export class DateConverterController {
    constructor(private readonly dateConverterService: DateConverterService){}

    @Get('/:day/:month/:year')
    ConvertDate(
        @Res() res: Response,
        @Param('day') day: string, 
        @Param('month') month: string, 
        @Param('year') year: string, 
        ){
        try{
            let result: string = this.dateConverterService.ConvertDate(Number(day), Number(month), Number(year));
            res.status(HttpStatus.OK).send(result);
        }
        catch(err){
            res.status(HttpStatus.BAD_REQUEST).send('Date invalide');
        }

    }
    
}
