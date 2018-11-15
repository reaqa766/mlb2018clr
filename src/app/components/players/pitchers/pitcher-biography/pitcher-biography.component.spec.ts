import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PitcherBiographyComponent } from './pitcher-biography.component';

describe('PitcherBiographyComponent', () => {
  let component: PitcherBiographyComponent;
  let fixture: ComponentFixture<PitcherBiographyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PitcherBiographyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PitcherBiographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
