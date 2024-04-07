import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';

import * as fromGamesReducers from '../games.reducers';
import * as fromGameRecuers from './game.reducers';
import { Store, select } from '@ngrx/store';
import { RawgApiService } from '../../rawg-api.service';
import { GameActionGroup } from './game.actions';
import { selectGameEntities } from '../games.selectors';
import {
  catchError,
  forkJoin,
  map,
  mergeMap,
  of,
  switchMap,
  withLatestFrom,
} from 'rxjs';
import { GamesActionGroup } from '../games.actions';

@Injectable()
export class GameEffects {
  constructor(
    private actions$: Actions,
    private service: RawgApiService,
    private gamesStore: Store<fromGamesReducers.GameState>,
    private store: Store<fromGameRecuers.State>
  ) {}

  loadGame$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GameActionGroup.getGame),
      switchMap((action) => {
        return forkJoin({
          game: this.service.getGame(action.gameId),
          screenshots: this.service.getGameScreenShots(action.gameId),
        }).pipe(
          map(
            (results) => (
              GameActionGroup.getGameSuccess({ game: results.game }),
              GameActionGroup.getGameScreenshotsSuccess({
                screenshots: results.screenshots.results,
              })
            )
          ),
          catchError(error =>
            of(GameActionGroup.getGameFailure({ errorMsg: error.message }))
          )
        );
      })
    )
  );
}
