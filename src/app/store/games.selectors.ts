import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromGamesReducers from './games.reducers';
export const selectGamesState = createFeatureSelector<fromGamesReducers.GameState>('games');

// Assuming `adapter` is exported from your reducers file
const { selectIds, selectEntities, selectAll, selectTotal } = fromGamesReducers.adapter.getSelectors();

// Entity Selectors
export const selectGameIds = createSelector(selectGamesState, selectIds);
export const selectGameEntities = createSelector(selectGamesState, selectEntities);
export const selectAllGames = createSelector(selectGamesState, selectAll);
export const selectGamesTotal = createSelector(selectGamesState, selectTotal);

// Additional State Properties Selectors
export const selectCurrentPage = createSelector(selectGamesState, (state) => state.page);
export const selectPageSize = createSelector(selectGamesState, (state) => state.pageSize);
export const selectPreviousPage = createSelector(selectGamesState, (state) => state.previousPage);
export const selectCount = createSelector(selectGamesState, (state) => state.count);
export const selectSelectedGame = createSelector(selectGamesState, (state) => state.selectedGame);
export const selectErrorMsg = createSelector(selectGamesState, (state) => state.errorMsg);
export const selectLoading = createSelector(selectGamesState, (state) => state.loading);
export const selectCurrentDeveloperId = createSelector(selectGamesState, (state) => state.developerId);
