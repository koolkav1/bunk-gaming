import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleGameCardComponent } from './simple-game-card.component';

describe('SimpleGameCardComponent', () => {
  let component: SimpleGameCardComponent;
  let fixture: ComponentFixture<SimpleGameCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleGameCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SimpleGameCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
