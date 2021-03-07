import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProceedPayingComponent } from './proceed-paying.component';

describe('ProceedPayingComponent', () => {
  let component: ProceedPayingComponent;
  let fixture: ComponentFixture<ProceedPayingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProceedPayingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProceedPayingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
