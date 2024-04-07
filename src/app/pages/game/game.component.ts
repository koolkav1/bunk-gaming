import { Component, inject } from '@angular/core';
import { GameDetailComponent } from '../../components/game-detail/game-detail.component';
import * as fromGameReducers from '../../store/game/game.reducers';
import { Store } from '@ngrx/store';
import { selectGame, selectGameScreenshots } from '../../store/game/game.selectors';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-game',
  standalone: true,
  imports: [GameDetailComponent],
  providers: [DatePipe],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {
  private store = inject(Store<fromGameReducers.State>);
  game = this.store.selectSignal(selectGame);
  gameScreenshots = this.store.selectSignal(selectGameScreenshots);
}
