import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PitcherDailyComponent } from './pitcher-daily.component';

describe('PitcherDailyComponent', () => {
  let component: PitcherDailyComponent;
  let fixture: ComponentFixture<PitcherDailyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PitcherDailyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PitcherDailyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
