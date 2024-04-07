import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Observable, map, switchMap } from 'rxjs';
import { HttpsPipe } from '../https.pipe';
import { Game, RawgApiService } from '../rawg-api.service';
import { GameDetail } from '../interfaces/game-detail.interface';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpsPipe],

  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
})
export class GamesComponent implements OnInit {
  public id$: Observable<number>;
  public game$: Observable<GameDetail>;
  public game?: Game;
  private route = inject(ActivatedRoute);

  constructor(private rawgApiService: RawgApiService) {
    this.id$ = this.route.params.pipe(
      map((param) => parseInt(param['id'], 10))
    );

    this.game$ = this.id$.pipe(
      switchMap((id) => this.rawgApiService.getGame(id) as Observable<GameDetail>)
    );
  }

  ngOnInit() {
    this.game = undefined;
  }
}
