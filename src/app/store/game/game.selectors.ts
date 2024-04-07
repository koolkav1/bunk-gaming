import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromGameReducers from './game.reducers';
export const selectGameState = createFeatureSelector<fromGameReducers.State>('game');
export const selectLoading = createSelector(selectGameState, (state) => state.loading);
export const selectGame = createSelector(selectGameState, (state) => state.game);
export const selectDeveloper = createSelector(selectGameState, (state) => state.developerName);
export const selectGameScreenshots = createSelector(selectGameState, (state) => state.gameScreenshots);
