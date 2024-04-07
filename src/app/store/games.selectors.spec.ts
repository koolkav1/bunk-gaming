import * as fromGamesReducers from './games.reducers';
import * as fromGamesSelectors from './games.selectors';

describe('Games Selectors', () => {
  const initialState: fromGamesReducers.GameState = {
    // Assuming your state shape matches the adapter's initial state structure and additional properties
    ...fromGamesReducers.adapter.getInitialState({
      selectedGame: null,
      pageSize: 10,
      page: 1,
      previousPage: 0,
      count: 0,
      errorMsg: '',
      loading: false,
      developerId: 0,
    }),
    // Add a couple of games for testing
    ids: [1, 2],
    entities: {
      1: {
        id: 1,
        name: 'Game 1',
        developers: [],
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
        metacritic: 0,
        suggestions_count: 0,
        updated: '',
        score: {},
        clip: {},
        tags: [],
        esrb_rating: {
          id: 0,
          name: '',
          slug: '',
          name_en: '',
          name_ru: '',
        },
        user_game: {},
        reviews_count: 0,
        saturated_color: '',
        dominant_color: '',
        short_screenshots: [],
        parent_platforms: [],
        genres: [],
      },
      2: {
        id: 2,
        name: 'Game 2',
        developers: [],
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
        metacritic: 0,
        suggestions_count: 0,
        updated: '',
        score: {},
        clip: {},
        tags: [],
        esrb_rating: {
          id: 0,
          name: '',
          slug: '',
          name_en: '',
          name_ru: '',
        },
        user_game: {},
        reviews_count: 0,
        saturated_color: '',
        dominant_color: '',
        short_screenshots: [],
        parent_platforms: [],
        genres: [],
      },
    },
  };

  describe('selectGameEntities', () => {
    it('should return the game entities', () => {
      // Correct usage of the projector function for selectGameEntities
      const result = fromGamesSelectors.selectGameEntities.projector(initialState);
      expect(result).toEqual(initialState.entities);
    });
  });

  describe('selectAllGames', () => {
    it('should return all games', () => {
      // Correctly testing selectAllGames, which requires entities directly
      const result = fromGamesSelectors.selectAllGames.projector(initialState);
      expect(result).toEqual([
        {
          id: 1,
          name: 'Game 1',
          developers: [],
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
          metacritic: 0,
          suggestions_count: 0,
          updated: '',
          score: {},
          clip: {},
          tags: [],
          esrb_rating: {
            id: 0,
            name: '',
            slug: '',
            name_en: '',
            name_ru: '',
          },
          user_game: {},
          reviews_count: 0,
          saturated_color: '',
          dominant_color: '',
          short_screenshots: [],
          parent_platforms: [],
          genres: [],
        },
        {
          id: 2,
          name: 'Game 2',
          developers: [],
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
          metacritic: 0,
          suggestions_count: 0,
          updated: '',
          score: {},
          clip: {},
          tags: [],
          esrb_rating: {
            id: 0,
            name: '',
            slug: '',
            name_en: '',
            name_ru: '',
          },
          user_game: {},
          reviews_count: 0,
          saturated_color: '',
          dominant_color: '',
          short_screenshots: [],
          parent_platforms: [],
          genres: [],
        }
      ]);
    });
  });

  describe('selectCurrentPage', () => {
    it('should return the current page', () => {
      // Correctly testing selectCurrentPage, which operates on the whole state
      const result = fromGamesSelectors.selectCurrentPage.projector(initialState);
      expect(result).toBe(1);
    });
  });
});

