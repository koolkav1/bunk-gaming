import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';
import { Game } from '../rawg-api.service';
import { createReducer, on } from '@ngrx/store';
import { GamesActionGroup } from './games.actions';

export interface AdditionalState {
  pageSize: number;
  page: number;
  previousPage: number;
  count: number;
  selectedGame: string | null;
  errorMsg: string;
  loading: boolean;
}

export interface GameState extends EntityState<Game>, AdditionalState {}

export const adapter: EntityAdapter<Game> = createEntityAdapter<Game>();

export const initialState: GameState = adapter.getInitialState({
  selectedGame: null,
  pageSize: 10,
  page: 0,
  previousPage: 0,
  count: 0,
  errorMsg: '',
  loading: false
});

export const gamesReducer = createReducer(
  initialState,
  on(GamesActionGroup.setGame, (state, { game }) =>
    adapter.setOne(game, state)
  ),
  on(GamesActionGroup.getGamesByDeveloperFailure, (state, { errorMsg }) => ({
    ...state,
    errorMsg,
    loading: false
  })),
  on(GamesActionGroup.getGamesByDeveloperSuccess, (state, { data, page }) =>
    adapter.setAll(data.results, {...state,
      count: data.count,
      previousPage: state.page,
      page: page,
      loading: false})

  ),
  on(GamesActionGroup.getGamesByDeveloper, (state, {page} ) => ({...state, loading: true, page: page ? page : 1}))

);
