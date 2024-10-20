import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'conversion'
})
export class ConversionPipe implements PipeTransform {

  transform(value: number): number {
    if(!value){
      return 0;
    }else{
      return value*100
    }
  }

}
