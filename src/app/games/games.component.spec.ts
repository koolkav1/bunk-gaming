import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesComponent } from './games.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('GamesComponent', () => {
  let component: GamesComponent;
  let fixture: ComponentFixture<GamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ GamesComponent, HttpClientTestingModule, RouterTestingModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
