import { Component, Signal, inject } from '@angular/core';
import { SimpleGameCardComponent } from '../../components/simple-game-card/simple-game-card.component';
import { Game, RawgApiService } from '../../rawg-api.service';
import * as fromGameReducers from '../../store/games.reducers';
import { Store } from '@ngrx/store';
import { selectAllGames } from '../../store/games.selectors';
@Component({
  selector: 'app-developer-games',
  standalone: true,
  imports: [SimpleGameCardComponent],
  providers: [RawgApiService],
  templateUrl: './developer-games.component.html',
  styleUrl: './developer-games.component.scss',
})
export class DeveloperGamesComponent {
  private store = inject(Store<fromGameReducers.GameState>);
  games: Signal<Game[]> = this.store.selectSignal(selectAllGames);
}
