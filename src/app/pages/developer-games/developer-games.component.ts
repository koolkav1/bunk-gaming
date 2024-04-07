import { Component, Signal, inject } from '@angular/core';
import { SimpleGameCardComponent } from '../../components/simple-game-card/simple-game-card.component';
import { Game, RawgApiService } from '../../rawg-api.service';
import * as fromGamesReducers from '../../store/games.reducers';
import { Store } from '@ngrx/store';
import { selectAllGames } from '../../store/games.selectors';
import { GameCardComponent } from '../../components/game-card/game-card.component';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { GamesActionGroup } from '../../store/games.actions';
import { GameByDeveloper } from '../../interfaces/games.interface';

@Component({
  selector: 'app-developer-games',
  standalone: true,
  imports: [SimpleGameCardComponent, GameCardComponent],
  providers: [RawgApiService, DatePipe],
  templateUrl: './developer-games.component.html',
  styleUrl: './developer-games.component.scss',
})
export class DeveloperGamesComponent {
  private store = inject(Store<fromGamesReducers.GameState>);
  private route = inject(ActivatedRoute);
  public router = inject(Router);
  games: Signal<GameByDeveloper[]> = this.store.selectSignal(selectAllGames);
  developerName = this.route.snapshot.params['slug'];
  page: number = parseInt(this.route.snapshot.params['page'], 10);
  developerId = this.route.snapshot.params['id'];
  navigateToPreviousPage() {
   const previousPage = this.page-=1;

    this.router.navigateByUrl(`/developers/${this.developerId}/${this.developerName}/${previousPage}`);
    this.store.dispatch(GamesActionGroup.getGamesByDeveloper({developerId: this.developerId, slug: this.developerName, page: previousPage}));
  }
  navigateToNextPage(){
    const nextPage = this.page+= 1;
    this.router.navigateByUrl(`/developers/${this.developerId}/${this.developerName}/${nextPage}`);
    this.store.dispatch(GamesActionGroup.getGamesByDeveloper({developerId: this.developerId, slug: this.developerName, page: nextPage}));
  }
}
