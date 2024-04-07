import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { PlatformGamesComponent } from './platform-games.component';
import { Platform, RawgApiService } from '../rawg-api.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('PlatformGamesComponent', () => {
  let component: PlatformGamesComponent;
  let fixture: ComponentFixture<PlatformGamesComponent>;
  let rawgApiServiceMock: Partial<RawgApiService>;
  let mockPlatformData: Platform;
  let mockGamesData: any; // Replace with your actual game data type

  beforeEach(async () => {
    // Mock data setup
    mockPlatformData = { id: 1, name: 'Test Platform', slug: '', games_count: 10, image_background: '' };
    mockGamesData = [{ id: 1, name: 'Test Game' }]; // Simplified, adjust according to your real data structure

    // Mock service setup
    rawgApiServiceMock = {
      getPlatform: jest.fn().mockReturnValue(of(mockPlatformData)),
      getGamesByPlatform: jest.fn().mockReturnValue(of(mockGamesData))
    };

    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, PlatformGamesComponent],
      declarations: [],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { params: of({ id: '1' }) }
        },
        {
          provide: RawgApiService,
          useValue: rawgApiServiceMock
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PlatformGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch platform and games based on the route parameter ID', () => {
    component.platform$.subscribe((platform) => {
      expect(platform).toEqual(mockPlatformData);
    });

    component.games$.subscribe((games) => {
      expect(games).toEqual(mockGamesData);
    });

    // Verify service methods were called with the correct parameter
    expect(rawgApiServiceMock.getPlatform).toHaveBeenCalledWith(1);
    expect(rawgApiServiceMock.getGamesByPlatform).toHaveBeenCalledWith(1);
  });
});
