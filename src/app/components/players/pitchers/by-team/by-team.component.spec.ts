import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ByTeamComponent } from './by-team.component';

describe('ByTeamComponent', () => {
  let component: ByTeamComponent;
  let fixture: ComponentFixture<ByTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ByTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ByTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
