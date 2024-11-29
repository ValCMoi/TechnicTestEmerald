import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alertColorText'
})
export class AlertColorTextPipe implements PipeTransform {

  transform(value: number): string {
    if (value < 0) {
      return 'color-red';
    }
    return 'color-hinerit';
  }

}
