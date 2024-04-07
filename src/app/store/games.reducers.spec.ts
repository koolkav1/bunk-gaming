import { gamesReducer, initialState } from './games.reducers';
import { GamesActionGroup } from './games.actions';
import { GameByDeveloper } from '../interfaces/games.interface';

describe('GamesReducer', () => {
  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = { type: 'Unknown' };
      const state = gamesReducer(initialState, action);

      expect(state).toBe(initialState);
    });
  });

  describe('setGame action', () => {
    it('should add a game to the state', () => {
      const game: GameByDeveloper = {
        id: 1,
        name: 'Test Game',
        developers: undefined,
        slug: '',
        playtime: 0,
        platforms: [],
        stores: [],
        released: '',
        tba: false,
        background_image: '',
        rating: 0,
        rating_top: 0,
        ratings: [],
        ratings_count: 0,
        reviews_text_count: 0,
        added: 0,
        added_by_status: {
          yet: 0,
          owned: 0,
          beaten: 0,
          toplay: 0,
          dropped: 0,
          playing: 0,
        },
        suggestions_count: 0,
        updated: '',
        score: undefined,
        clip: undefined,
        tags: [],
        user_game: undefined,
        reviews_count: 0,
        saturated_color: '',
        dominant_color: '',
        short_screenshots: [],
        parent_platforms: [],
        genres: [],
      };
      const action = GamesActionGroup.setGame({ game });
      const state = gamesReducer(initialState, action);

      expect(state.entities['1']).toEqual(game);
      expect(state.ids.length).toBe(1);
      expect(state.ids[0]).toBe(1);
    });
  });

  describe('getGamesByDeveloperFailure action', () => {
    it('should update error message and loading state', () => {
      const errorMsg = 'Error fetching games';
      const action = GamesActionGroup.getGamesByDeveloperFailure({ errorMsg });
      const state = gamesReducer(initialState, action);

      expect(state.errorMsg).toBe(errorMsg);
      expect(state.loading).toBe(false);
    });
  });

  describe('getGamesByDeveloperSuccess action', () => {
    it('should populate state with games and update related properties', () => {
      const games: GameByDeveloper[] = [
        {
          id: 1,
          name: 'Test Game',
          developers: undefined,
          slug: '',
          playtime: 0,
          platforms: [],
          stores: [],
          released: '',
          tba: false,
          background_image: '',
          rating: 0,
          rating_top: 0,
          ratings: [],
          ratings_count: 0,
          reviews_text_count: 0,
          added: 0,
          added_by_status: {
            yet: 0,
            owned: 0,
            beaten: 0,
            toplay: 0,
            dropped: 0,
            playing: 0,
          },
          suggestions_count: 0,
          updated: '',
          score: undefined,
          clip: undefined,
          tags: [],
          user_game: undefined,
          reviews_count: 0,
          saturated_color: '',
          dominant_color: '',
          short_screenshots: [],
          parent_platforms: [],
          genres: [],
        },
        {
          id: 2,
          name: 'Test Game 2',
          developers: undefined,
          slug: '',
          playtime: 0,
          platforms: [],
          stores: [],
          released: '',
          tba: false,
          background_image: '',
          rating: 0,
          rating_top: 0,
          ratings: [],
          ratings_count: 0,
          reviews_text_count: 0,
          added: 0,
          added_by_status: {
            yet: 0,
            owned: 0,
            beaten: 0,
            toplay: 0,
            dropped: 0,
            playing: 0,
          },
          suggestions_count: 0,
          updated: '',
          score: undefined,
          clip: undefined,
          tags: [],
          user_game: undefined,
          reviews_count: 0,
          saturated_color: '',
          dominant_color: '',
          short_screenshots: [],
          parent_platforms: [],
          genres: [],
        },
      ];
      const page = 2;
      const developerId = 123;
      const count = games.length;
      const action = GamesActionGroup.getGamesByDeveloperSuccess({
        data: {
          results: games,
          count,
          next: '',
          previous: '',
          user_platforms: false,
        },
        page,
        developerId,
      });
      const state = gamesReducer(initialState, action);

      expect(state.entities['1']).toEqual(games[0]);
      expect(state.entities['2']).toEqual(games[1]);
      expect(state.ids.length).toBe(2);
      expect(state.page).toBe(page);
      expect(state.previousPage).toBe(0); // initialState.page is 0
      expect(state.count).toBe(count);
      expect(state.loading).toBe(false);
      expect(state.developerId).toBe(developerId);
    });
  });

  describe('getGamesByDeveloper action', () => {
    it('should set loading to true', () => {
      const action = GamesActionGroup.getGamesByDeveloper({
        developerId: 0,
        slug: '',
      });
      const state = gamesReducer(initialState, action);

      expect(state.loading).toBe(true);
    });
  });
});
