import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'dateWithOrdinal',
  standalone: true
})
export class DateWithOrdinalPipe implements PipeTransform {

  constructor(private datePipe: DatePipe) {}

  transform(value: any, ...args: any[]): any {
    if (!value) {
      return '';
    }

    const date = new Date(value);
    let formattedDate = this.datePipe.transform(date, 'MMMM d');
    let day = parseInt(this.datePipe.transform(date, 'd') ?? '0', 10);
    let suffix = 'th';

    if (day === 1 || day === 21 || day === 31) {
      suffix = 'st';
    } else if (day === 2 || day === 22) {
      suffix = 'nd';
    } else if (day === 3 || day === 23) {
      suffix = 'rd';
    }

    return `${formattedDate}${suffix}, ${this.datePipe.transform(date, 'y')}`;
  }
}
