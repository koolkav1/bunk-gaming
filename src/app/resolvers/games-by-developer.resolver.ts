import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromGamesReducers from '../store/games.reducers';
import { GamesActionGroup } from '../store/games.actions';

export const gamesByDeveloperResolver: ResolveFn<boolean> = (route) => {
  const store = inject(Store<fromGamesReducers.GameState>);

  store.dispatch(
    GamesActionGroup.getGamesByDeveloper({
      developerId: route.params['id'],
      slug: route.params['slug'],
      page: route.params['page'] || 1,
    })
  );
  return true;
};
