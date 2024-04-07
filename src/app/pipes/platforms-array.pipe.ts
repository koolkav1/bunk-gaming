import { Pipe, PipeTransform } from '@angular/core';
import { Game } from '../rawg-api.service';

@Pipe({
  name: 'platformsArray',
  standalone: true
})
export class PlatformsArrayPipe implements PipeTransform {

  transform(value: {
    platform: { id: number; slug: string; name: string };
  }[], ...args: unknown[]): unknown {
   const platformNames =value.map(platform => platform.platform.name);
   return platformNames.join(', ');
  }

}
