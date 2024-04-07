import { Pipe, PipeTransform } from '@angular/core';
import { Developer } from '../interfaces/game-detail.interface';

@Pipe({
  name: 'developersArray',
  standalone: true
})
export class DevelopersArrayPipe implements PipeTransform {

  transform(value: Developer[], ...args: unknown[]): unknown {
   return value.map(developer => developer.name).join(', ');
  }

}
