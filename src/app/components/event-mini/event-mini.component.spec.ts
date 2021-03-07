import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventMiniComponent } from './event-mini.component';

describe('EventMiniComponent', () => {
  let component: EventMiniComponent;
  let fixture: ComponentFixture<EventMiniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventMiniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventMiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
