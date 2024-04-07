import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameCardComponent } from './game-card.component';
import { DatePipe } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('GameCardComponent', () => {
  let component: GameCardComponent;
  let fixture: ComponentFixture<GameCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameCardComponent, HttpClientTestingModule],
      providers: [DatePipe],
    }).compileComponents();

    fixture = TestBed.createComponent(GameCardComponent);
    component = fixture.componentInstance;
    component.game = {
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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
