import { Injectable, inject } from "@angular/core";
import { Actions, concatLatestFrom, createEffect, ofType } from "@ngrx/effects";
import { RawgApiService } from "../rawg-api.service";
import { GamesActionGroup } from "./games.actions";
import * as fromGameReducers from './games.reducers';
import { Store, select } from "@ngrx/store";
import { catchError, map, mergeMap, of, tap } from "rxjs";
import { tapResponse } from "@ngrx/operators";
import { GamesApiResponse } from "../interfaces/games.interface";
import { selectCurrentPage } from "./games.selectors";

@Injectable()
export class GamesEffects {
  constructor(
    private actions$: Actions,
    private service: RawgApiService,
    private store: Store<fromGameReducers.GameState>
  ) {}

  loadGamesByDeveloper$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GamesActionGroup.getGamesByDeveloper),
      mergeMap((action) =>
        this.store.pipe(
          select(selectCurrentPage),
          mergeMap((page) =>
            this.service.getGamesByDeveloper(action.developerId, action.slug, action.page || page).pipe(
              map((data) => GamesActionGroup.getGamesByDeveloperSuccess({ data, page: action.page || page })),
              catchError((error) => of(GamesActionGroup.getGamesByDeveloperFailure({ errorMsg: error.message })))
            )
          )
        )
      )
    )
  );
}
