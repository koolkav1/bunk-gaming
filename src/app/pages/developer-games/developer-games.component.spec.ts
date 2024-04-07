import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeveloperGamesComponent } from './developer-games.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { selectAllGames } from '../../store/games.selectors';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { GameByDeveloper } from '../../interfaces/games.interface';

describe('DeveloperGamesComponent', () => {
  let component: DeveloperGamesComponent;
  let fixture: ComponentFixture<DeveloperGamesComponent>;
  let store: MockStore;
  const mockGames: GameByDeveloper[] = [
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

  beforeEach(async () => {
    const mockActivatedRoute = { snapshot: { params: { slug: 'test-slug', page: '1', id: '1' } } };

    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        DeveloperGamesComponent // Since it's standalone
      ],
      providers: [
        provideMockStore(),
        { provide: ActivatedRoute, useValue: mockActivatedRoute }
      ],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    // Correctly override the selector used in the component
    store.overrideSelector(selectAllGames, mockGames);

    fixture = TestBed.createComponent(DeveloperGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Additional test cases...
});
