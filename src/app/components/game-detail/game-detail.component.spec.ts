import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameDetailComponent } from './game-detail.component';
import { DatePipe } from '@angular/common';
import { signal } from '@angular/core';

describe('GameDetailComponent', () => {
  let component: GameDetailComponent;
  let fixture: ComponentFixture<GameDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameDetailComponent],
      providers: [DatePipe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameDetailComponent);
    component = fixture.componentInstance;
    component.game =  signal({
      id: 0,
      slug: '',
      name: 'Test Game',
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
        21: 0
      },
      added: 0,
      added_by_status: {
        yet: 0,
        owned: 0,
        beaten: 0,
        toplay: 0,
        dropped: 0,
        playing: 0
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
      platforms: [{
        released_at: '',
        requirements: {},
        platform: {
          id: 1,
          name: 'pc',
          slug: 'pc',
          image: 'test.jpg',
          image_background: 'test.jpg',
          year_end: undefined,
          year_start: undefined,
          games_count: 0
        }
      },
      {
        released_at: '',
        requirements: {},
        platform: {
          id: 2,
          name: 'xbox',
          slug: 'xbox',
          image: 'test.jpg',
          image_background: 'test.jpg',
          year_end: undefined,
          year_start: undefined,
          games_count: 0
        }
      }],
      stores: [],
      developers:
        [
          {
            "id": 3524,
            "name": "Rockstar North",
            "slug": "rockstar-north",
            "games_count": 28,
            "image_background": "https://media.rawg.io/media/screenshots/ff8/ff85fc7832ddca3c39f3539389793ee6.jpg"
          },
          {
            "id": 10,
            "name": "Rockstar Games",
            "slug": "rockstar-games",
            "games_count": 25,
            "image_background": "https://media.rawg.io/media/screenshots/d74/d748bb016b1c26935cb7c2d0f2a7ba40.jpg"
          }
        ],
      genres: [],
      tags: [],
      publishers: [],
      esrb_rating: {
        id: 0,
        slug: '',
        name: 'Teen'
      },
      clip: {},
      description_raw: ''
    });
    component.gameScreenshots = signal([{ id: 1, image: 'test.jpg', width: 0, height: 0, is_deleted: false }])
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
