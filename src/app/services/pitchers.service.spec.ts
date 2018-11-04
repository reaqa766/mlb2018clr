import { TestBed, inject } from '@angular/core/testing';

import { PitchersService } from './pitchers.service';

describe('PitchersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PitchersService]
    });
  });

  it('should be created', inject([PitchersService], (service: PitchersService) => {
    expect(service).toBeTruthy();
  }));
});
