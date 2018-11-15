import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PitcherByTeamComponent } from './pitcher-by-team.component';

describe('PitcherByTeamComponent', () => {
  let component: PitcherByTeamComponent;
  let fixture: ComponentFixture<PitcherByTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PitcherByTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PitcherByTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
