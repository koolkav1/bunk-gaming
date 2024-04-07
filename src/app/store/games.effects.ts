import { Injectable, inject } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { RawgApiService } from '../rawg-api.service';
import { GamesActionGroup } from './games.actions';
import * as fromGamesReducers from './games.reducers';
import { Store, select } from '@ngrx/store';
import { catchError, map, mergeMap, of, tap } from 'rxjs';
import { selectCurrentDeveloperId, selectCurrentPage } from './games.selectors';

@Injectable()
export class GamesEffects {
  constructor(
    private actions$: Actions,
    private service: RawgApiService,
    private store: Store<fromGamesReducers.GameState>
  ) {}

  loadGamesByDeveloper$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GamesActionGroup.getGamesByDeveloper),
      concatLatestFrom(() => this.store.pipe(select(selectCurrentDeveloperId))),
      concatLatestFrom(() => {
        return this.store.pipe(select(selectCurrentPage));
      }),
      mergeMap(([[action, currentDeveloperId], currentPage]) => {
        if (
          action.developerId === currentDeveloperId &&
          (action.page || 1) === currentPage
        ) {
          return of(GamesActionGroup.noOp());
        } else {
          return this.service
            .getGamesByDeveloper(
              action.developerId,
              action.slug,
              action.page || 1
            )
            .pipe(
              map((data) =>
                GamesActionGroup.getGamesByDeveloperSuccess({
                  data,
                  page: action.page || 1,
                  developerId: action.developerId,
                })
              ),
              catchError((error) =>
                of(
                  GamesActionGroup.getGamesByDeveloperFailure({
                    errorMsg: error.message,
                  })
                )
              )
            );
        }
      })
    )
  );
}
