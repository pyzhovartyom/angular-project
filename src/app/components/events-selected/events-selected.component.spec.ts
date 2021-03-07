import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsSelectedComponent } from './events-selected.component';

describe('EventsSelectedComponent', () => {
  let component: EventsSelectedComponent;
  let fixture: ComponentFixture<EventsSelectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsSelectedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
