import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Observable, map, switchMap } from 'rxjs';
import { Platform, RawgApiService } from '../rawg-api.service';

@Component({
  selector: 'app-platform-games',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './platform-games.component.html',
  styleUrls: ['./platform-games.component.scss'],
})
export class PlatformGamesComponent {
  public id$: Observable<number>;
  public games$: Observable<any>;
  public platform$: Observable<Platform>;
  private route = inject(ActivatedRoute);

  constructor(private rawgApiService: RawgApiService) {
    this.id$ = this.route.params.pipe(
      map((param) => parseInt(param['id'], 10))
    );

    this.platform$ = this.id$.pipe(
      switchMap((id: number) => this.rawgApiService.getPlatform(id))
    );

    this.games$ = this.id$.pipe(
      switchMap((id: number) => {
        return this.rawgApiService.getGamesByPlatform(id);
      })
    );
  }
}
