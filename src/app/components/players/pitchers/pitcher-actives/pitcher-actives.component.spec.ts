import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PitcherActivesComponent } from './pitcher-actives.component';

describe('PitcherActivesComponent', () => {
  let component: PitcherActivesComponent;
  let fixture: ComponentFixture<PitcherActivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PitcherActivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PitcherActivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
