import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopersComponent } from './developers.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { Observable, of } from 'rxjs';
import { RawgApiService } from '../../rawg-api.service';

describe('DevelopersComponent', () => {
  let component: DevelopersComponent;
  let fixture: ComponentFixture<DevelopersComponent>;
  let actions$ = new Observable<any>(); // Corrected line
  let service: jest.Mocked<RawgApiService>; // Using jest.Mocked for typing

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ DevelopersComponent ],
      providers: [provideMockActions(() => actions$),
        provideMockStore({ initialState: { games: { developerId: 1, page: 1, slug: '1' } } }),
        {
          provide: RawgApiService,
          // Properly mock the service and its method
          useValue: {
            getGamesByDeveloper: jest.fn(),
            getDevelopers: jest.fn()
          }
        }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevelopersComponent);
    component = fixture.componentInstance;
    component.developers$ = of([]);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
