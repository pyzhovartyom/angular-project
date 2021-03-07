import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedEventTitleComponent } from './selected-event-title.component';

describe('SelectedEventTitleComponent', () => {
  let component: SelectedEventTitleComponent;
  let fixture: ComponentFixture<SelectedEventTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedEventTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedEventTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
