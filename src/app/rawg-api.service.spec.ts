import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RawgApiService } from './rawg-api.service';
import { environment } from 'src/environments/environment';

describe('RawgApiService', () => {
  let service: RawgApiService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RawgApiService]
    });

    service = TestBed.inject(RawgApiService);
    httpController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpController.verify(); // Verifies that no unmatched requests are outstanding.
  });

  describe('getGame', () => {
    it('should make a GET request and return game details', () => {
      const mockGameDetail = { id: 1, name: 'Test Game' };
      const gameId = 1;

      service.getGame(gameId).subscribe(data => {
        expect(data).toEqual(mockGameDetail);
      });

      const req = httpController.expectOne(`https://api.rawg.io/api/games/${gameId}?key=${environment.rawg.api_key}`);
      expect(req.request.method).toEqual('GET');
      req.flush(mockGameDetail);
    });
  });

  describe('getGamesByDeveloper', () => {
    it('should make a GET request and return games by a developer', () => {
      const mockResponse = { results: [], count: 0 };
      const developerId = 1;
      const slug = 'test-slug';
      const page = 1;
      const pageSize = 10;

      service.getGamesByDeveloper(developerId, slug, page, pageSize).subscribe(data => {
        expect(data).toEqual(mockResponse);
      });

      const req = httpController.expectOne(`https://api.rawg.io/api/games?key=${environment.rawg.api_key}&developers=${developerId},${slug}&page=${page}&page_size=${pageSize}`);
      expect(req.request.method).toEqual('GET');
      req.flush(mockResponse);
    });
  });

  // Add more tests for other methods as necessary...

});
