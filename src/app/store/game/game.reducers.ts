import { createReducer, on } from '@ngrx/store';
import { Game } from '../../rawg-api.service';
import { GameActionGroup } from './game.actions';
import { GameDetail } from '../../interfaces/game-detail.interface';
import { Screenshot } from '../../interfaces/game-screenshots.interface';

export interface State {
  loading: boolean;
  game: GameDetail;
  error: string;
  developerName: string;
  gameScreenshots: Screenshot[];
}
export const initialGamePageState: State = {
  loading: false,
  error: '',
  developerName: '',
  gameScreenshots: [],
  game: {
    id: 0,
    slug: '',
    name: '',
    name_original: '',
    description: '',
    metacritic: 0,
    metacritic_platforms: [],
    released: '',
    tba: false,
    updated: '',
    background_image: '',
    background_image_additional: '',
    website: '',
    rating: 0,
    rating_top: 0,
    ratings: [],
    reactions: {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
      10: 0,
      11: 0,
      12: 0,
      16: 0,
      21: 0,
    },
    added: 0,
    added_by_status: {
      yet: 0,
      owned: 0,
      beaten: 0,
      toplay: 0,
      dropped: 0,
      playing: 0,
    },
    playtime: 0,
    screenshots_count: 0,
    movies_count: 0,
    creators_count: 0,
    achievements_count: 0,
    parent_achievements_count: 0,
    reddit_url: '',
    reddit_name: '',
    reddit_description: '',
    reddit_logo: '',
    reddit_count: 0,
    twitch_count: 0,
    youtube_count: 0,
    reviews_text_count: 0,
    ratings_count: 0,
    suggestions_count: 0,
    alternative_names: [],
    metacritic_url: '',
    parents_count: 0,
    additions_count: 0,
    game_series_count: 0,
    user_game: undefined,
    reviews_count: 0,
    saturated_color: '',
    dominant_color: '',
    parent_platforms: [],
    platforms: [],
    stores: [],
    developers: [],
    genres: [],
    tags: [],
    publishers: [],
    esrb_rating: {
      id: 0,
      name: '',
      slug: '',
    },
    clip: undefined,
    description_raw: '',
  },
};
export const gameReducer = createReducer(
  initialGamePageState,
  on(GameActionGroup.getGame, (state, action) => ({
    ...state,
    loading: true,
    developerName: action.developerName || '',
  })),
  on(GameActionGroup.getGameSuccess, (state, action) => ({
    ...state,
    loading: false,
    game: action.game,
  })),
  on(GameActionGroup.getGameScreenshots, (state) => ({...state, loading: true})),
  on(GameActionGroup.getGameScreenshotsSuccess, (state, action) => ({...state, loading: false, gameScreenshots: action.screenshots})),
  on(GameActionGroup.getGameScreenshotsFailure, (state, action) => ({...state, loading: false, error: action.errorMsg})),
  on(GameActionGroup.getGameFailure, (state, action) => ({
    ...state,
    loading: false,
    error: action.errorMsg,
  }))
);
