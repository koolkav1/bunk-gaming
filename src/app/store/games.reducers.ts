import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { GamesActionGroup } from './games.actions';
import { GameByDeveloper } from '../interfaces/games.interface';

export interface AdditionalState {
  pageSize: number;
  page: number;
  previousPage: number;
  count: number;
  selectedGame: string | null;
  errorMsg: string;
  loading: boolean;
  developerId: number;
}

export interface GameState extends EntityState<GameByDeveloper>, AdditionalState {}

export const adapter: EntityAdapter<GameByDeveloper> = createEntityAdapter<GameByDeveloper>();

export const initialState: GameState = adapter.getInitialState({
  selectedGame: null,
  pageSize: 10,
  page: 0,
  previousPage: 0,
  count: 0,
  errorMsg: '',
  loading: false,
  developerId: 0
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
  on(GamesActionGroup.getGamesByDeveloperSuccess, (state, { data, page, developerId }) =>
    adapter.setAll(data.results, {...state,
      count: data.count,
      previousPage: state.page,
      page: page,
      loading: false,
      developerId
    })

  ),
  on(GamesActionGroup.getGamesByDeveloper, (state ) => ({...state, loading: true}))

);
