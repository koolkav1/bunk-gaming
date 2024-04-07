import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of, throwError } from 'rxjs';
import { GamesEffects } from './games.effects';
import { RawgApiService } from '../rawg-api.service';
import { GamesActionGroup } from './games.actions';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { selectCurrentDeveloperId, selectCurrentPage } from './games.selectors';

describe('GamesEffects', () => {
  let effects: GamesEffects;
  let actions$ = new Observable<any>(); // Corrected line
  let service: jest.Mocked<RawgApiService>; // Using jest.Mocked for typing

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        GamesEffects,
        provideMockActions(() => actions$),
        provideMockStore({ initialState: { games: { developerId: 1, page: 1, slug: '1' } } }),
        {
          provide: RawgApiService,
          // Properly mock the service and its method
          useValue: {
            getGamesByDeveloper: jest.fn()
          }
        }
      ]
    });

    effects = TestBed.inject(GamesEffects);
    service = TestBed.inject(RawgApiService) as jest.Mocked<RawgApiService>;
    const store = TestBed.inject(MockStore);
  store.overrideSelector(selectCurrentDeveloperId, 999); // Different from any action's developerId
  store.overrideSelector(selectCurrentPage, 999); // Different from any action's page
  });

  describe('loadGamesByDeveloper$', () => {
    it('should return a getGamesByDeveloperSuccess action, with the games, on success', (done) => {
      const mockGames = { results: [], count: 0, next: '', previous: '', user_platforms: false };
      const action = GamesActionGroup.getGamesByDeveloper({ developerId: 1, page: 1, slug: '1' });
      const outcome = GamesActionGroup.getGamesByDeveloperSuccess({
        data: mockGames,
        page: 1,
        developerId: 1,
      });

      actions$ = of(action); // Emits the action to simulate dispatch
      // Ensure the service mock is correctly set up to return the mock games data
      service.getGamesByDeveloper.mockReturnValue(of(mockGames));

      effects.loadGamesByDeveloper$.subscribe((result) => {
        expect(result).toEqual(outcome);
        // Ensure the mock service call checks the parameters correctly, including the 'slug'
        expect(service.getGamesByDeveloper).toHaveBeenCalledWith(1, '1', 1); // Corrected to include slug parameter
        done();
      });
    });

    it('should return a getGamesByDeveloperFailure action, with an error, on failure', (done) => {
      const error = new Error('Network error');
      const action = GamesActionGroup.getGamesByDeveloper({ developerId: 1, page: 1, slug: '1' });
      const outcome = GamesActionGroup.getGamesByDeveloperFailure({
        errorMsg: error.message,
      });

      actions$ = of(action); // Emits the action to simulate dispatch
      // Simulate a failure scenario from the service
      service.getGamesByDeveloper.mockReturnValue(throwError(() => error));

      effects.loadGamesByDeveloper$.subscribe((result) => {
        expect(result).toEqual(outcome);
        done();
      }, (error) => {
        // This callback is for catching errors in the subscription itself
        console.error('Subscription error:', error);
        done.fail('Failed due to subscription error');
      });
    });
  });

});
