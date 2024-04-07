import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformsComponent } from './platforms.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PlatformsComponent', () => {
  let component: PlatformsComponent;
  let fixture: ComponentFixture<PlatformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [ PlatformsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlatformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
