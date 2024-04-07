import { ResolveFn } from '@angular/router';
import * as fromGameReducers from '../store/game/game.reducers';
import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { GameActionGroup } from '../store/game/game.actions';
export const gameResolver: ResolveFn<boolean> = (route, state) => {
  const store = inject(Store<fromGameReducers.State>);
  store.dispatch(GameActionGroup.getGame({gameId: route.params['id']}))
  return true;
};
