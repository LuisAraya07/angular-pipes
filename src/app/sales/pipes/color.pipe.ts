import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../interfaces/sales.interfaces';



@Pipe({
    name: 'color'
})


export class ColorPipe implements PipeTransform {

    transform(value: number): string {
      return Color[value];
    }
}