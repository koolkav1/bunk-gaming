import { GameByDeveloper } from '../interfaces/games.interface';
import { GamesActionGroup } from './games.actions';

describe('GamesActionGroup', () => {
  describe('Get Games By Developer Actions', () => {
    it('should create an action to get games by developer', () => {
      const payload = { developerId: 1, slug: 'some-slug', page: 1 };
      const action = GamesActionGroup.getGamesByDeveloper(payload);
      expect(action).toEqual({
        type: '[Games Page] Get Games By Developer',
        developerId: 1,
        slug: 'some-slug',
        page: 1,
      });
    });

    it('should create a success action when fetching games by developer succeeds', () => {
      const payload = {
        data: { results: [], count: 0, next: '', previous: '', user_platforms: false },
        page: 1,
        developerId: 1,
      };
      const action = GamesActionGroup.getGamesByDeveloperSuccess(payload);
      expect(action).toEqual({
        type: '[Games Page] Get Games By Developer Success',
        ...payload,
      });
    });

    it('should create a failure action when fetching games by developer fails', () => {
      const payload = { errorMsg: 'Error fetching data' };
      const action = GamesActionGroup.getGamesByDeveloperFailure(payload);
      expect(action).toEqual({
        type: '[Games Page] Get Games By Developer Failure',
        errorMsg: 'Error fetching data',
      });
    });
  });

  describe('No op Action', () => {
    it('should create a no op action', () => {
      const action = GamesActionGroup.noOp();
      expect(action).toEqual({
        type: '[Games Page] No op',
      });
    });
  });

  describe('Set Game Action', () => {
    it('should create an action to set a game', () => {
      const payload = { game: { id: '1', name: 'Test Game' } as unknown as GameByDeveloper };
      const action = GamesActionGroup.setGame(payload);
      expect(action).toEqual({
        type: '[Games Page] Set Game',
        game: payload.game,
      });
    });
  });
});
